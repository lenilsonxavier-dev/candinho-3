import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { bibliotecaCultural } from "./src/data/bibliotecaCultural.js";
import { resolverMensagemLocalmente, sugerirTemasAlternativos, extrairNome } from "./src/utils/conversationalEngine.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY || "";
const ai = apiKey
  ? new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    })
  : null;

const GITHUB_BASE = "https://raw.githubusercontent.com/lenilsonxavier-dev/Candinho2.0/main/data/";
let bibliotecaCache: any = null;

// Carrega os dados do GitHub para somar com a biblioteca local
async function carregarBiblioteca() {
  if (bibliotecaCache) return bibliotecaCache;
  try {
    const res = await fetch(`${GITHUB_BASE}bibliotecaCultural.json`);
    const libGitHub = res.ok ? await res.json() : {};
    bibliotecaCache = { ...bibliotecaCultural, ...libGitHub };
  } catch (e) {
    console.warn("Could not fetch remote library from GitHub, falling back to local:", e);
    bibliotecaCache = bibliotecaCultural;
  }
  return bibliotecaCache;
}

// --- BUSCA NO PEXELS (FALLBACK) ---
async function buscarNoPexels(termo: string) {
  const pexelsKey = process.env.PEXELS_API_KEY;
  if (!pexelsKey) return null;
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(termo + " painting art")}&per_page=1&orientation=square`;
    const res = await fetch(url, {
      headers: { Authorization: pexelsKey }
    });
    if (res.ok) {
      const data: any = await res.json();
      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[0];
        return {
          imagemUrl: photo.src.medium,
          titulo: `Arte de ${termo}`,
          credito: `${photo.photographer} / Pexels`
        };
      }
    }
  } catch (e) {
    console.error("Erro Pexels:", e);
  }
  return null;
}

// --- BUSCA NA WIKIMEDIA ---
async function buscarNaWikimedia(artistaNome: string) {
  try {
    if (!artistaNome) return null;

    // 1. Busca específica por "artista painting" (prioriza pinturas)
    let termoBusca = `${artistaNome} painting`;
    let url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(termoBusca)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&iiurlwidth=800`;

    let res = await fetch(url);
    let data: any = await res.json();

    if (data.query && data.query.pages) {
      let pages = Object.values(data.query.pages);
      // Filtra apenas imagens compatíveis (BITMAP ou DRAWING + mime de imagem)
      let imagens = pages.filter((p: any) => {
        if (!p.imageinfo || !p.imageinfo[0]) return false;
        const info = p.imageinfo[0];
        const mime = (info.mime || "").toLowerCase();
        const media = (info.mediatype || "").toUpperCase();
        return (media === "BITMAP" || media === "DRAWING") &&
               (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png") || mime.includes("gif") || mime.includes("webp"));
      });

      if (imagens.length > 0) {
        const imgPage: any = imagens[0];
        const info = imgPage.imageinfo[0];
        const imgUrl = info.thumburl || info.url;

        let credito = "Wikimedia Commons";
        if (info.extmetadata) {
          if (info.extmetadata.Artist?.value) {
            credito = info.extmetadata.Artist.value.replace(/<[^>]*>/g, "").trim();
          } else if (info.extmetadata.Credit?.value) {
            credito = info.extmetadata.Credit.value.replace(/<[^>]*>/g, "").trim();
          }
        }
        if (credito.length > 50) {
          credito = credito.substring(0, 47) + "...";
        }

        let tituloOriginal = imgPage.title.replace("File:", "").split(".")[0];
        let titulo = decodeURIComponent(tituloOriginal).replace(/_/g, " ");

        return {
          imagemUrl: imgUrl,
          titulo: titulo || "Obra de arte",
          credito: credito || "Wikimedia Commons (obra de arte)"
        };
      }
    }

    // 2. Segunda tentativa: busca mais genérica
    url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(artistaNome)}&gsrlimit=5&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&iiurlwidth=800`;
    res = await fetch(url);
    data = await res.json();

    if (data.query && data.query.pages) {
      let pages = Object.values(data.query.pages);
      let imgPage: any = pages.find((p: any) => {
        if (!p.imageinfo || !p.imageinfo[0]) return false;
        const info = p.imageinfo[0];
        const mime = (info.mime || "").toLowerCase();
        const media = (info.mediatype || "").toUpperCase();
        return (media === "BITMAP" || media === "DRAWING") &&
               (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png"));
      });

      if (!imgPage) {
        imgPage = pages.find((p: any) => p.imageinfo && p.imageinfo[0] && p.imageinfo[0].thumburl);
      }

      if (imgPage) {
        const info = imgPage.imageinfo[0];
        const imgUrl = info.thumburl || info.url;

        let credito = "Wikimedia Commons";
        if (info.extmetadata) {
          if (info.extmetadata.Artist?.value) {
            credito = info.extmetadata.Artist.value.replace(/<[^>]*>/g, "").trim();
          } else if (info.extmetadata.Credit?.value) {
            credito = info.extmetadata.Credit.value.replace(/<[^>]*>/g, "").trim();
          }
        }
        if (credito.length > 50) {
          credito = credito.substring(0, 47) + "...";
        }

        let tituloOriginal = imgPage.title.replace("File:", "").split(".")[0];
        let titulo = decodeURIComponent(tituloOriginal).replace(/_/g, " ");

        return {
          imagemUrl: imgUrl,
          titulo: titulo || "Obra de arte",
          credito: credito || "Wikimedia Commons"
        };
      }
    }
  } catch (e) {
    console.error("Erro no Wikimedia:", e);
  }
  return null;
}

// --- IMAGENS GARANTIDAS DE ALTA QUALIDADE PARA ARTISTAS ---
const ARTISTS_GUARANTEED_IMAGES: Record<string, { imagemUrl: string; titulo: string; credito: string }> = {
  vincent_van_gogh: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    titulo: "A Noite Estrelada",
    credito: "Vincent van Gogh / MoMA"
  },
  pablo_picasso: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pablo_Picasso%2C_1907%2C_Self-portrait%2C_oil_on_canvas%2C_50_x_46_cm%2C_National_National_Gallery_of_Prague.jpg/640px-Pablo_Picasso%2C_1907%2C_Self-portrait%2C_oil_on_canvas%2C_50_x_46_cm%2C_National_National_Gallery_of_Prague.jpg",
    titulo: "Auto-retrato de Picasso (1907)",
    credito: "Pablo Picasso"
  },
  leonardo_da_vinci: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    titulo: "Mona Lisa",
    credito: "Leonardo da Vinci / Museu do Louvre"
  },
  claude_monet: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    titulo: "Impressão, sol nascente",
    credito: "Claude Monet / Musée Marmottan Monet"
  },
  tarsila: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Tarsila_do_Amaral_-_Abaporu_1928.jpg",
    titulo: "Abaporu (1928)",
    credito: "Tarsila do Amaral"
  },
  portinari: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Candido_Portinari.jpg",
    titulo: "Cândido Portinari (Retrato)",
    credito: "Biblioteca Nacional"
  },
  salvador_dali: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Salvador_Dal%C3%AD_1939.jpg",
    titulo: "Salvador Dalí",
    credito: "Library of Congress"
  },
  fridakahlo: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    titulo: "Frida Kahlo (Retrato)",
    credito: "Guillermo Kahlo"
  },
  frida_kahlo: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
    titulo: "Frida Kahlo (Retrato)",
    credito: "Guillermo Kahlo"
  }
};

// --- BUSCANTE UNIFICADO DE IMAGEM ---
async function buscarImagem(pergunta: string, matchedKey?: string, lib?: any) {
  try {
    // Primeiro tenta correspondência direta com as imagens garantidas por chave identificada
    if (matchedKey && ARTISTS_GUARANTEED_IMAGES[matchedKey]) {
      return ARTISTS_GUARANTEED_IMAGES[matchedKey];
    }

    // Também verifica se a própria pergunta contém o nome de qualquer um de nossos artistas prioritários
    const lowerQuery = pergunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    if (lowerQuery.includes("van gogh")) {
      return ARTISTS_GUARANTEED_IMAGES.vincent_van_gogh;
    }
    if (lowerQuery.includes("picasso")) {
      return ARTISTS_GUARANTEED_IMAGES.pablo_picasso;
    }
    if (lowerQuery.includes("da vinci") || lowerQuery.includes("leonardo")) {
      return ARTISTS_GUARANTEED_IMAGES.leonardo_da_vinci;
    }
    if (lowerQuery.includes("monet")) {
      return ARTISTS_GUARANTEED_IMAGES.claude_monet;
    }
    if (lowerQuery.includes("tarsila")) {
      return ARTISTS_GUARANTEED_IMAGES.tarsila;
    }
    if (lowerQuery.includes("portinari") || lowerQuery.includes("candinho")) {
      return ARTISTS_GUARANTEED_IMAGES.portinari;
    }
    if (lowerQuery.includes("dali")) {
      return ARTISTS_GUARANTEED_IMAGES.salvador_dali;
    }
    if (lowerQuery.includes("frida")) {
      return ARTISTS_GUARANTEED_IMAGES.frida_kahlo;
    }

    let termo = "";

    // 1. Se encontramos uma correspondência exata na biblioteca local, usamos o termo limpo dela
    if (matchedKey && lib && lib[matchedKey]) {
      const item = lib[matchedKey];
      if (item.subtema) {
        termo = item.subtema.replace(/_/g, " ");
      } else if (item.palavras_chave && item.palavras_chave.length > 0) {
        termo = item.palavras_chave[0];
      }
    }

    // 2. Se não temos matchedKey ou para refinamento inteligente, mapeamos nomes de artistas ou obras famosas
    if (!termo) {
      const queryLower = pergunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      
      if (queryLower.includes("van gogh") || queryLower.includes("vincent van gogh")) {
        termo = "Vincent van Gogh";
      } else if (queryLower.includes("da vinci") || queryLower.includes("leonardo da vinci") || queryLower.includes("leonardo")) {
        termo = "Leonardo da Vinci";
      } else if (queryLower.includes("picasso") || queryLower.includes("pablo picasso")) {
        termo = "Pablo Picasso";
      } else if (queryLower.includes("tarsila") || queryLower.includes("tarsila do amaral")) {
        termo = "Tarsila do Amaral";
      } else if (queryLower.includes("monet") || queryLower.includes("claude monet")) {
        termo = "Claude Monet";
      } else if (queryLower.includes("mona lisa")) {
        termo = "Mona Lisa";
      } else if (queryLower.includes("noite estrelada")) {
        termo = "The Starry Night Vincent van Gogh";
      } else if (queryLower.includes("abaporu")) {
        termo = "Abaporu Tarsila do Amaral";
      } else if (queryLower.includes("guernica")) {
        termo = "Guernica Pablo Picasso";
      } else if (queryLower.includes("machado de assis")) {
        termo = "Machado de Assis";
      } else if (queryLower.includes("lima barreto")) {
        termo = "Lima Barreto";
      } else if (queryLower.includes("conceicao evaristo")) {
        termo = "Conceição Evaristo";
      } else if (queryLower.includes("carolina maria de jesus")) {
        termo = "Carolina Maria de Jesus";
      } else if (queryLower.includes("itamar vieira")) {
        termo = "Itamar Vieira Junior";
      } else if (queryLower.includes("daniel munduruku")) {
        termo = "Daniel Munduruku";
      } else if (queryLower.includes("ailton krenak")) {
        termo = "Ailton Krenak";
      } else {
        // Filtro aprimorado para remover verbos, artigos e preposições que embaçam a busca nas APIs em inglês
        const stopWords = [
          "quem", "foi", "fale", "sobre", "ver", "obra", "quando", "nasceu", "morreu", 
          "mostre", "imagem", "foto", "quadro", "pintura", "desenho", "ilustração", "retrato", 
          "quero", "queria", "gostaria", "gostava", "pode", "poderia", "me", "te", "se", "um", 
          "uma", "do", "da", "de", "em", "na", "no", "para", "com", "onde", "como", "qual", 
          "o que", "por que", "porque", "para", "mais", "tem", "algum", "alguma", "ilustra",
          "desenha", "veja", "olha", "mostra", "exibir", "pinta", "pintou", "criou", "fez",
          "uns", "umas", "dos", "das", "pelo", "pela", "por", "com", "sem", "ou"
        ];
        
        let palavras = pergunta.toLowerCase()
          .replace(/[?!.,]/g, "")
          .split(/\s+/)
          .filter(p => p.length > 2 && !stopWords.includes(p));
        
        termo = palavras.join(" ");
      }
    }

    if (!termo) return null;

    // Busca no Wikimedia Commons seguindo filtros estritos
    let img = await buscarNaWikimedia(termo);
    
    // Se não encontrou nada na Wikimedia, tenta o Pexels como último recurso
    if (!img) {
      img = await buscarNoPexels(termo);
    }
    
    return img;
  } catch (e) {
    console.error("Erro na busca de imagem:", e);
  }
  return null;
}

// --- API CHAT HANDLER (ALIASES AS /api/groq FOR BACKWARDS COMPATIBILITY) ---
app.post("/api/groq", async (req: Request, res: Response) => {
  try {
    const { mensagem, nomeCrianca: clientNomeCrianca } = req.body;
    if (!mensagem || typeof mensagem !== "string") {
      return res.status(400).json({ error: "Mensagem é obrigatória" });
    }

    let nomeCrianca = clientNomeCrianca || null;
    let acabouDeSeApresentar = false;

    // Detect / extract child name from the current message
    const nomeExtraido = extrairNome(mensagem);
    if (nomeExtraido) {
      nomeCrianca = nomeExtraido;
      acabouDeSeApresentar = true;
    }

    const lib = await carregarBiblioteca();
    const textoBusca = mensagem.toLowerCase();

    let textoFinal = "";
    let infoExtra = { nascimento: "", morte: "", estilo: "" };

    // 1. PRIORIDADE TOTAL: Busca local inteligente (Dados de Curadoria de forma robusta e independente de API)
    const localResult = resolverMensagemLocalmente(mensagem, lib);

    if (localResult) {
      textoFinal = localResult.reply;
      
      // Se encontrou um item específico na biblioteca, enriquece a extra info
      if (localResult.matchedKey) {
        const item = lib[localResult.matchedKey];
        infoExtra = {
          nascimento: item.ano_nascimento || "---",
          morte: item.ano_falecimento || "---",
          estilo: item.categoria || "Arte"
        };
      }
    }

    // 2. Se não achou resposta local e houver IA ativa, chama o Gemini.
    // Se a IA NÃO estiver ativa (ou se a requisição de API falhar), provê sugestões inteligentes interativas!
    if (!textoFinal) {
      if (ai) {
        try {
          let systemInstruction = 
            "Você é o Candinho, um professor de arte e pintor muito simpático e acolhedor para crianças de 10 anos. " +
            "Responda sempre em português de forma simples, alegre e muito breve (máximo 3 frases). " +
            "Sempre use uma linguagem positiva e entusiasmada, usando analogias de pintura e pinceladas. " +
            "NUNCA repita o nome do artista mais de duas vezes. " +
            "Se não descobrir sobre quem é o artista, responda gentilmente: 'Não conheço esse artista ainda, mas vou pesquisar na minha paleta! 🎨'. " +
            "Diga se o artista nasceu ou faleceu em tal época de forma amigável no corpo do texto, sem criar listas ou cabeçalhos.";

          if (nomeCrianca) {
            systemInstruction += ` O nome da criança que está conversando com você é ${nomeCrianca}. Trate-a com muito carinho e use o nome dela em suas respostas de forma natural e fofa para manter uma conversa acolhedora e focar na arte (por exemplo, chamando-a de 'meu amigo ${nomeCrianca}' ou '${nomeCrianca}').`;
            if (acabouDeSeApresentar) {
              systemInstruction += ` IMPORTANTE: A criança acabou de falar o nome dela pela primeira vez (${nomeCrianca}). Seja extremamente simpático, comemore saber o nome dela e dê as boas-vindas calorosamente!`;
            }
          }

          const responseGemini = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: mensagem,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.5,
            },
          });
          textoFinal = responseGemini.text || "";
        } catch (e) {
          console.error("Erro na chamada Gemini, usando fallback de sugestões locais:", e);
          textoFinal = sugerirTemasAlternativos();
        }
      } else {
        // Fallback local rico e guiado sem chaves de API: o Candinho apresenta seus temas de forma interativa e amigável!
        textoFinal = sugerirTemasAlternativos();
      }
    }

    // Se temos o nome da criança E usamos as respostas do dicionário local/fallback (que não passam pelo Gemini),
    // nós personalizamos e tecemos o nome neles de forma dinâmica!
    if (nomeCrianca && (localResult || !ai)) {
      if (acabouDeSeApresentar) {
        textoFinal = `Que espetáculo de nome, **${nomeCrianca}**! 🎨 Que alegria gigante ter você aqui comigo na minha paleta de descobertas! ✨\n\n${textoFinal}`;
      } else if (Math.random() < 0.35) {
        // 35% chance of inserting the child's name in standard local replies so it feels organic
        const nameIntros = [
          `Veja só, **${nomeCrianca}**: `,
          `Sabe, **${nomeCrianca}**, `,
          `Olha que interessante, **${nomeCrianca}**! `,
          `Que pergunta fantástica, **${nomeCrianca}**! `
        ];
        const chosenIntro = nameIntros[Math.floor(Math.random() * nameIntros.length)];
        textoFinal = `${chosenIntro}${textoFinal}`;
      }
    }

    // 3. Busca Imagem Unificada (Wikimedia com fallback para Pexels)
    const imagemResult = await buscarImagem(mensagem, localResult?.matchedKey, lib);

    // 4. Retorno Unificado
    return res.status(200).json({
      reply: textoFinal || "Que pergunta curiosa! Vamos descobrir juntos sobre arte? 🎨",
      image: imagemResult,
      info: infoExtra.nascimento || infoExtra.morte || infoExtra.estilo ? infoExtra : null,
      googleArts: { url: `https://artsandculture.google.com/search?q=${encodeURIComponent(mensagem)}` },
      matchedKey: localResult?.matchedKey,
      nomeCrianca: nomeCrianca
    });

  } catch (error) {
    console.error("Erro Geral no Servidor:", error);
    return res.status(200).json({ reply: "Ops! Minhas tintas secaram um pouquinho. Pode repetir o que disse? 🎨" });
  }
});

// Setup Vite & Static Assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
