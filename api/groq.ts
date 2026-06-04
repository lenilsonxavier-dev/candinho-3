import { bibliotecaCultural } from "../src/data/bibliotecaCultural.js";

const GITHUB_BASE = "https://raw.githubusercontent.com/lenilsonxavier-dev/Candinho2.0/main/data/";
const GROQ_API_KEY = process.env.GROQ_API_KEY;

let bibliotecaCache: any = null;

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

function pediuImagem(mensagem: string): boolean {
    const palavrasImagem = ["imagem", "foto", "mostre", "obra", "ver", "desenho", "quadro", "pintura", "ilustração", "retrato"];
    return palavrasImagem.some(p => mensagem.toLowerCase().includes(p));
}

function extrairNomeArtista(mensagem: string): string {
    const stopWords = ["quem", "foi", "fale", "sobre", "ver", "obra", "quando", "nasceu", "morreu", "mostre", "imagem", "foto", "pintura", "desenho", "quadro", "retrato", "ilustração"];
    let texto = mensagem.replace(/[?!.,]/g, "").toLowerCase();
    let palavras = texto.split(/\s+/);
    let partes: string[] = [];
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
async function buscarWikimedia(artistaNome: string) {
    try {
        let termoBusca = `${artistaNome} painting`;
        let url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(termoBusca)}&gsrlimit=8&prop=imageinfo&iiprop=url|mime|mediatype&iiurlwidth=800`;

        let res = await fetch(url);
        let data: any = await res.json();

        if (data.query && data.query.pages) {
            let pages = Object.values(data.query.pages);
            let imagensKey = pages.filter((p: any) => {
                if (!p.imageinfo || !p.imageinfo[0]) return false;
                const info = p.imageinfo[0];
                const mime = (info.mime || "").toLowerCase();
                const media = (info.mediatype || "").toUpperCase();
                return (media === "BITMAP" || media === "DRAWING") &&
                       (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png") || mime.includes("gif") || mime.includes("webp"));
            });

            if (imagensKey.length > 0) {
                const imgPage: any = imagensKey[0];
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

export default async function handler(req: any, res: any) {
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
        const textoBusca = messageToLower(mensagem);
        let textoFinal = "";

        // 1. Biblioteca cultural
        for (const chave in lib) {
            const item = lib[chave];
            if (item.palavras_chave && item.palavras_chave.some((p: string) => textoBusca.includes(p.toLowerCase()))) {
                const partes: string[] = [];
                if (item.inicio && item.inicio.length > 0) {
                    partes.push(item.inicio[0]);
                }
                if (item.acolhimento && item.acolhimento.length > 0) {
                    partes.push(item.acolhimento[0]);
                }
                if (item.explicacao_curta && item.explicacao_curta.length > 0) {
                    partes.push(item.explicacao_curta[0]);
                }
                if (item.final && item.final.length > 0) {
                    partes.push(item.final[0]);
                } else if (item.interacao && item.interacao.length > 0) {
                    partes.push(item.interacao[0]);
                }

                if (partes.length > 0) {
                    textoFinal = partes.join(" ");
                }
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
            const dataIA: any = await responseGroq.json();
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

function messageToLower(msg: any): string {
    if (!msg) return "";
    return String(msg).toLowerCase();
}
