// api/groq.js – Executável seguro e autossuficiente para Vercel (ESM)
const GITHUB_BASE = "https://raw.githubusercontent.com/lenilsonxavier-dev/Candinho2.0/main/data/";
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// Dicionário curado local (inlinado para evitar quebras de importação de arquivos .ts na Vercel)
const bibliotecaCultural = {
  portinari: {
    palavras_chave: ["portinari", "candido", "cândido", "candinho", "guerra e paz", "meninos brincando", "rodopiando"],
    inicio: [
      "Cândido Portinari foi um dos pintores mais importantes do Brasil!",
      "Nascido em Brodowski, no interior de São Paulo, ele amava retratar o povo brasileiro."
    ],
    explicacao_curta: [
      "Ele pintava crianças brincando de pipa, jogadores de futebol e momentos do dia a dia com cores incríveis. Sua obra mais famosa, os painéis 'Guerra e Paz', fica na sede da ONU em Nova York!"
    ],
    ano_nascimento: "1903",
    ano_falecimento: "1962",
    categoria: "Modernismo"
  },
  tarsila: {
    palavras_chave: ["tarsila", "amaral", "abaporu", "operarios", "operários", "antropofagia"],
    inicio: [
      "Tarsila do Amaral é uma das maiores heroínas da arte brasileira!"
    ],
    explicacao_curta: [
      "Ela criou o impressionante quadro 'Abaporu' (que significa 'homem que come gente' em tupi-guarani), que deu força ao movimento Modernista. Ela adorava pintar elementos da nossa terra usando as cores rosa, azul-turquesa e amarelo!"
    ],
    ano_nascimento: "1886",
    ano_falecimento: "1973",
    categoria: "Modernismo"
  },
  vangogh: {
    palavras_chave: ["van gogh", "vincent", "noite estrelada", "girassois", "girassóis", "auto-retrato", "quarto em arles"],
    inicio: [
      "Vincent van Gogh foi um mestre holandês com um coração gigante!"
    ],
    explicacao_curta: [
      "Ele pintava usando pinceladas grossas e cheias de movimento que pareciam dançar na tela! Suas pinturas mais famosas são 'A Noite Estrelada' (com espirais de luz no céu) e 'Os Girassóis', onde o amarelo brilha como o Sol!"
    ],
    ano_nascimento: "1853",
    ano_falecimento: "1890",
    categoria: "Pós-Impressionismo"
  },
  davinci: {
    palavras_chave: ["da vinci", "leonardo", "mona lisa", "monalisa", "ultima ceia", "última ceia", "vitruviano"],
    inicio: [
      "Leonardo da Vinci foi um gênio completo do Renascimento e sabia fazer de tudo!"
    ],
    explicacao_curta: [
      "Além de pintar a misteriosa 'Mona Lisa' e 'A Última Ceia', ele passava horas projetando máquinas de voar, estudando anatomia e observando a água e as plantas. Ele era incrivelmente curioso!"
    ],
    ano_nascimento: "1452",
    ano_falecimento: "1519",
    categoria: "Renascimento"
  },
  picasso: {
    palavras_chave: ["picasso", "pablo", "cubismo", "guernica", "fase azul", "fase rosa"],
    inicio: [
      "Pablo Picasso foi um artista espanhol revolucionário que inventou o Cubismo!"
    ],
    explicacao_curta: [
      "Ele adorava desconstruir a realidade, pintando rostos e objetos divididos em cubos e formas geométricas de modo que pudéssemos vê-los de vários ângulos de uma vez só! Sua pintura pacifista mais famosa é 'Guernica'."
    ],
    ano_nascimento: "1881",
    ano_falecimento: "1973",
    categoria: "Cubismo"
  },
  monet: {
    palavras_chave: ["monet", "claude", "impressionismo", "ninféias", "sol nascente"],
    inicio: [
      "Claude Monet foi o pintor francês que deu nome ao Impressionismo!"
    ],
    explicacao_curta: [
      "Ele amava pintar ao ar livre para capturar como a luz do sol mudava os lagos e as flores. Ele passou anos pintando o seu jardim de flores aquáticas (as Ninféias) em Giverny!"
    ],
    ano_nascimento: "1840",
    ano_falecimento: "1926",
    categoria: "Impressionismo"
  }
};

let bibliotecaCache = null;

async function carregarBiblioteca() {
    if (bibliotecaCache) return bibliotecaCache;
    try {
        const res = await fetch(`${GITHUB_BASE}bibliotecaCultural.json`);
        const libGitHub = res.ok ? await res.json() : {};
        bibliotecaCache = { ...bibliotecaCultural, ...libGitHub };
    } catch (e) { 
        bibliotecaCache = bibliotecaCultural; 
    }
    return bibliotecaCache;
}

function pediuImagem(mensagem) {
    const palavrasImagem = ["imagem", "foto", "mostre", "obra", "ver", "desenho", "quadro", "pintura", "ilustração", "retrato"];
    return palavrasImagem.some(p => mensagem.toLowerCase().includes(p));
}

function extrairNomeArtista(mensagem) {
    const stopWords = ["quem", "foi", "fale", "sobre", "ver", "obra", "quando", "nasceu", "morreu", "mostre", "imagem", "foto", "pintura", "desenho", "quadro", "retrato", "ilustração"];
    let texto = mensagem.replace(/[?!.,]/g, "").toLowerCase();
    let palavras = texto.split(/\s+/);
    let partes = [];
    for (let i = 0; i < palavras.length; i++) {
        let p = palavras[i];
        if (p.length > 1 && !stopWords.includes(p)) {
            if (mensagem.split(/\s+/)[i] && mensagem.split(/\s+/)[i][0] === mensagem.split(/\s+/)[i][0].toUpperCase()) {
                partes.push(p);
            } else if (p === "van" || p === "da" || p === "de" || p === "do" || p === "dos") {
                partes.push(p);
            } else if (partes.length === 0 && i === palavras.length - 1) {
                partes = [p];
            }
        }
    }
    let nome = partes.join(" ").replace(/\b\w/g, l => l.toUpperCase());
    return nome || mensagem.slice(0, 40);
}

// Busca Wikimedia Commons
async function buscarWikimedia(artistaNome) {
    try {
        let termoBusca = `${artistaNome} painting`;
        let url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(termoBusca)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|mediatype&iiurlwidth=800`;

        let res = await fetch(url);
        let data = await res.json();

        if (data.query && data.query.pages) {
            let pages = Object.values(data.query.pages);
            let imagensKey = pages.filter(p => {
                if (!p.imageinfo || !p.imageinfo[0]) return false;
                const info = p.imageinfo[0];
                const mime = (info.mime || "").toLowerCase();
                const media = (info.mediatype || "").toUpperCase();
                return (media === "BITMAP" || media === "DRAWING") &&
                       (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png") || mime.includes("gif") || mime.includes("webp"));
            });

            if (imagensKey.length > 0) {
                const imgPage = imagensKey[0];
                const info = imgPage.imageinfo[0];
                const imgUrl = info.thumburl || info.url;
                return {
                    imagemUrl: imgUrl,
                    titulo: imgPage.title.replace("File:", "").split('.')[0],
                    credito: "Wikimedia Commons (obra de arte)"
                };
            }
        }
    } catch (e) {
        console.error("Erro no Wikimedia:", e);
    }
    return null;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} Não Permitido`);
    }

    try {
        const { mensagem } = req.body;
        if (!mensagem) {
            return res.status(400).json({ error: "Mensagem vazia" });
        }

        const lib = await carregarBiblioteca();
        const textoBusca = mensagem.toLowerCase();
        let textoFinal = "";

        // 1. Biblioteca cultural
        for (const chave in lib) {
            const item = lib[chave];
            if (item.palavras_chave && item.palavras_chave.some(p => textoBusca.includes(p.toLowerCase()))) {
                textoFinal = `${item.inicio[0]} ${item.explicacao_curta[0]}`;
                break;
            }
        }

        // 2. Groq (IA) se necessário
        if (!textoFinal && GROQ_API_KEY) {
            const responseGroq = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: { "Authorization": `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        { 
                            role: "system", 
                            content: "Você é o Candinho, um professor de arte para crianças de 10 anos. Responda de forma simples, gentil e muito breve (máximo 3 frases). NUNCA repita o nome do artista várias vezes. Se não souber, diga 'Não conheço esse artista ainda!'." 
                        },
                        { role: "user", content: mensagem }
                    ],
                    temperature: 0.4,
                    max_tokens: 150
                })
            });
            const dataIA = await responseGroq.json();
            textoFinal = dataIA.choices?.[0]?.message?.content?.trim() || "";
        }

        // 3. Busca imagem sob demanda (só Wikimedia)
        let imagemResult = null;
        if (pediuImagem(mensagem)) {
            const nomeArtista = extrairNomeArtista(mensagem);
            imagemResult = await buscarWikimedia(nomeArtista);
        }

        return res.status(200).json({
            reply: textoFinal || "Que pergunta curiosa! Vamos descobrir juntos? 🎨",
            image: imagemResult
        });
    } catch (error) {
        console.error("Erro Geral:", error);
        return res.status(200).json({ reply: "Ops! Minhas tintas secaram. Pode repetir? 🎨" });
    }
}
