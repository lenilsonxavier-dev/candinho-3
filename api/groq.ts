import { GoogleGenAI } from "@google/genai";
import { bibliotecaCultural } from "../src/data/bibliotecaCultural.js";
import { resolverMensagemLocalmente, sugerirTemasAlternativos, extrairNome } from "../src/utils/conversationalEngine.js";

const GITHUB_BASE = "https://raw.githubusercontent.com/lenilsonxavier-dev/Candinho2.0/main/data/";
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

// --- IMAGENS GARANTIDAS DE ALTA QUALIDADE PARA ARTISTAS ---
const ARTISTS_GUARANTEED_IMAGES: Record<string, { imagemUrl: string; titulo: string; credito: string } | { imagemUrl: string; titulo: string; credito: string }[]> = {
  vincent_van_gogh: {
    imagemUrl: "https://i.imgur.com/V0qviLK.jpg",
    titulo: "A Noite Estrelada",
    credito: "Vincent van Gogh"
  },
  pablo_picasso: {
    imagemUrl: "https://i.imgur.com/Ie9Nmjv.jpeg",
    titulo: "Auto-retrato de Picasso",
    credito: "Pablo Picasso"
  },
  leonardo_da_vinci: {
    imagemUrl: "https://i.imgur.com/4gNICnX.jpeg",
    titulo: "Mona Lisa",
    credito: "Leonardo da Vinci"
  },
  claude_monet: {
    imagemUrl: "https://i.imgur.com/M2ox2Sa.jpeg",
    titulo: "Lago de Lírios d'Água",
    credito: "Claude Monet"
  },
  tarsila: {
    imagemUrl: "https://i.imgur.com/y6dYEau.jpg",
    titulo: "Abaporu (1928)",
    credito: "Tarsila do Amaral"
  },
  portinari: {
    imagemUrl: "https://i.imgur.com/u6cdxuw.jpg",
    titulo: "Cândido Portinari (Retrato)",
    credito: "Cândido Portinari"
  },
  salvador_dali: {
    imagemUrl: "https://i.imgur.com/9HjrQgD.jpeg",
    titulo: "A Persistência da Memória",
    credito: "Salvador Dalí"
  },
  fridakahlo: {
    imagemUrl: "https://i.imgur.com/kKoUCO0.jpeg",
    titulo: "Frida Kahlo (Auto-retrato)",
    credito: "Frida Kahlo"
  },
  frida_kahlo: {
    imagemUrl: "https://i.imgur.com/kKoUCO0.jpeg",
    titulo: "Frida Kahlo (Auto-retrato)",
    credito: "Frida Kahlo"
  },
  almeida_junior: {
    imagemUrl: "https://i.imgur.com/lOQ142t.jpeg",
    titulo: "Caipira Picando Fumo",
    credito: "Almeida Júnior"
  },
  aua_mendes: {
    imagemUrl: "https://i.imgur.com/WYHe4ES.png",
    titulo: "Obra de Auá Mendes",
    credito: "Auá Mendes"
  },
  victor_meirelles: {
    imagemUrl: "https://i.imgur.com/UuUcxTI.jpeg",
    titulo: "Batalha dos Guararapes",
    credito: "Victor Meirelles"
  },
  adriana_varejao: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Inhotim_-_Adriana_Varej%C3%A3o.jpg",
    titulo: "Varal (Instalação de Azulejos no Pavilhão Adriana Varejão em Inhotim)",
    credito: "Adriana Varejão"
  },
  paul_klee: {
    imagemUrl: "https://i.imgur.com/5XqkLGP.jpeg",
    titulo: "Senecio",
    credito: "Paul Klee"
  },
  kandinsky: {
    imagemUrl: "https://i.imgur.com/nQtTIFw.jpeg",
    titulo: "Obra abstrata de Wassily Kandinsky",
    credito: "Wassily Kandinsky"
  },
  pedro_americo: {
    imagemUrl: "https://i.imgur.com/DqvcMzT.jpeg",
    titulo: "Independência ou Morte",
    credito: "Pedro Américo"
  },
  magritte: {
    imagemUrl: "https://i.imgur.com/6k2E9xw.png",
    titulo: "A Traição das Imagens",
    credito: "René Magritte"
  },
  daiara_tukano: {
    imagemUrl: "https://i.imgur.com/K7LshrR.jpeg",
    titulo: "Daiara Tukano",
    credito: "Wikimedia Commons"
  },
  paul_cezanne: {
    imagemUrl: "https://i.imgur.com/76oTs3Y.jpeg",
    titulo: "Os Jogadores de Cartas / Prato de Maçãs",
    credito: "Paul Cézanne"
  },
  raphael: {
    imagemUrl: "https://i.imgur.com/dQfpGnt.jpeg",
    titulo: "A Escola de Atenas",
    credito: "Raphael Sanzio"
  },
  gustav_klimt: {
    imagemUrl: "https://i.imgur.com/O4bN5yR.jpeg",
    titulo: "O Beijo",
    credito: "Gustav Klimt"
  },
  o_grito: {
    imagemUrl: "https://i.imgur.com/Rm1sgLg.jpeg",
    titulo: "O Grito",
    credito: "Edvard Munch"
  },
  degas: {
    imagemUrl: "https://i.imgur.com/wnJMDAO.jpeg",
    titulo: "A Classe de Dança",
    credito: "Edgar Degas"
  },
  di_cavalcanti: {
    imagemUrl: "https://i.imgur.com/y2bIl3C.jpeg",
    titulo: "As Cinco Moças de Guaratinguetá",
    credito: "Di Cavalcanti"
  },
  donatello: {
    imagemUrl: "https://i.imgur.com/kQ6cTVn.jpeg",
    titulo: "David (Escultura em bronze)",
    credito: "Donatello"
  },
  yayoi_kusama: {
    imagemUrl: "https://i.imgur.com/bPnsLsc.jpeg",
    titulo: "Ponto Infinito / Sala de Espelhos",
    credito: "Yayoi Kusama"
  },
  jaider_esbell: {
    imagemUrl: "https://i.imgur.com/xgQ4zaO.jpeg",
    titulo: "Cosmologia Makuxi",
    credito: "Jaider Esbell"
  },
  chagall: {
    imagemUrl: "https://i.imgur.com/DshJfTG.jpeg",
    titulo: "Eu e a Aldeia",
    credito: "Marc Chagall"
  },
  duchamp: {
    imagemUrl: "https://i.imgur.com/lWLyQDa.jpeg",
    titulo: "A Fonte",
    credito: "Marcel Duchamp"
  },
  matisse: {
    imagemUrl: "https://i.imgur.com/HuQoofw.jpeg",
    titulo: "A Dança",
    credito: "Henri Matisse"
  },
  vik_muniz: {
    imagemUrl: "https://i.imgur.com/S8PEvsX.jpeg",
    titulo: "Vik Muniz - Retrato com materiais recicláveis",
    credito: "Vik Muniz"
  },
  michelangelo: {
    imagemUrl: "https://i.imgur.com/5pUkwMB.jpeg",
    titulo: "A Criação de Adão",
    credito: "Michelangelo Buonarroti"
  },
  gauguin: {
    imagemUrl: "https://i.imgur.com/udgstNF.jpeg",
    titulo: "De Onde Viemos? Quem Somos? Para Onde Vamos?",
    credito: "Paul Gauguin"
  },
  goya: {
    imagemUrl: "https://i.imgur.com/8WlovoC.jpeg",
    titulo: "O Três de Maio de 1808",
    credito: "Francisco de Goya"
  },
  renoir: {
    imagemUrl: "https://i.imgur.com/jX0irGW.jpeg",
    titulo: "O Baile no Moulin de la Galette",
    credito: "Pierre-Auguste Renoir"
  },
  rembrandt: {
    imagemUrl: "https://i.imgur.com/pvqxSJq.jpeg",
    titulo: "A Ronda Noturna",
    credito: "Rembrandt van Rijn"
  },
  silvana_mendes: {
    imagemUrl: "https://i.imgur.com/2PpjDBb.jpeg",
    titulo: "Obra de Silvana Mendes",
    credito: "Silvana Mendes"
  },
  madalena_reinbolt: {
    imagemUrl: "https://i.imgur.com/aCJ087A.jpeg",
    titulo: "Madalena dos Santos Reinbolt",
    credito: "Madalena dos Santos Reinbolt"
  },
  arjan_martins: {
    imagemUrl: "https://i.imgur.com/qQnFyUc.jpeg",
    titulo: "Obra de Arjan Martins",
    credito: "Arjan Martins"
  },
  maxwell_alexandre: {
    imagemUrl: "https://i.imgur.com/UbmbG5U.jpeg",
    titulo: "Obra de Maxwell Alexandre",
    credito: "Maxwell Alexandre"
  },
  rosana_paulino: {
    imagemUrl: "https://i.imgur.com/fZRSRnd.jpeg",
    titulo: "Obra de Rosana Paulino",
    credito: "Rosana Paulino"
  },
  eduardo_kobra: {
    imagemUrl: "https://i.imgur.com/ZaO8F4u.jpeg",
    titulo: "Mural de Eduardo Kobra",
    credito: "Eduardo Kobra"
  },
  os_gemeos: {
    imagemUrl: "https://i.imgur.com/jDf8dcd.jpeg",
    titulo: "Mural de Os Gêmeos",
    credito: "Os Gêmeos"
  },
  romero_britto: {
    imagemUrl: "https://i.imgur.com/nAIOLBB.jpg",
    titulo: "A Splash of Love",
    credito: "Romero Britto"
  },
  helio_oiticica: {
    imagemUrl: "https://i.imgur.com/dntJxrC.jpeg",
    titulo: "Metaesquema Nº 244",
    credito: "Hélio Oiticica"
  },
  ivan_cruz: {
    imagemUrl: "https://i.imgur.com/EVd2Kx6.jpg",
    titulo: "Brincadeiras de Criança",
    credito: "Ivan Cruz"
  },
  alfredo_volpi: {
    imagemUrl: "https://i.imgur.com/L2D835h.jpeg",
    titulo: "Bandeirinhas",
    credito: "Alfredo Volpi"
  },
  djanira: {
    imagemUrl: "https://i.imgur.com/9akQOju.jpeg",
    titulo: "Trabalhadores / Cenas do Cotidiano",
    credito: "Djanira Motta e Silva"
  },
  georgina_de_albuquerque: {
    imagemUrl: "https://i.imgur.com/Uz9RvpD.jpeg",
    titulo: "Sessão do Conselho de Estado",
    credito: "Georgina de Albuquerque"
  },
  arthur_bispo_do_rosario: {
    imagemUrl: "https://i.imgur.com/jHweTgn.jpeg",
    titulo: "Arthur Bispo do Rosário",
    credito: "Arthur Bispo do Rosário"
  },
  heitor_dos_prazeres: {
    imagemUrl: "https://i.imgur.com/9uwc2v9.jpeg",
    titulo: "Heitor dos Prazeres - Roda de Samba",
    credito: "Heitor dos Prazeres"
  },
  carybe: {
    imagemUrl: "https://i.imgur.com/nfSAuTr.jpeg",
    titulo: "Carybé - Arte e Capoeira",
    credito: "Carybé"
  },
  joan_miro: {
    imagemUrl: "https://i.imgur.com/DUWOyat.jpeg",
    titulo: "O Ouro do Azul / Pintura de Miró",
    credito: "Joan Miró"
  },
  carolina_maria_de_jesus: {
    imagemUrl: "https://i.imgur.com/62oSyRt.jpeg",
    titulo: "Carolina Maria de Jesus (Retrato)",
    credito: "Wikimedia Commons / Arquivo Público do Estado de São Paulo"
  },
  ailton_krenak: {
    imagemUrl: "https://i.imgur.com/Wtl1cy1.jpeg",
    titulo: "Ailton Krenak (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  auritha_tabajara: {
    imagemUrl: "https://i.imgur.com/mumlZ4K.jpeg",
    titulo: "Auritha Tabajara (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  conceicao_evaristo: {
    imagemUrl: "https://i.imgur.com/9pTMeII.jpeg",
    titulo: "Conceição Evaristo (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  daniel_munduruku: {
    imagemUrl: "https://i.imgur.com/cl4wQV1.jpeg",
    titulo: "Daniel Munduruku (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  davi_kopenawa: {
    imagemUrl: "https://i.imgur.com/ZYsFmmb.jpeg",
    titulo: "Davi Kopenawa (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  djamila_ribeiro: {
    imagemUrl: "https://i.imgur.com/SYGuxF3.jpeg",
    titulo: "Djamila Ribeiro (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  eliane_potiguara: {
    imagemUrl: "https://i.imgur.com/j38A1jG.jpeg",
    titulo: "Eliane Potiguara (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  graca_grauna: {
    imagemUrl: "https://i.imgur.com/6WXunkG.jpeg",
    titulo: "Graça Graúna (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  itamar_vieira_junior: {
    imagemUrl: "https://i.imgur.com/GfsMbQh.jpeg",
    titulo: "Itamar Vieira Jr. (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  jarid_arraes: {
    imagemUrl: "https://i.imgur.com/mRn97Dy.jpeg",
    titulo: "Jarid Arraes (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  julie_dorrico: {
    imagemUrl: "https://i.imgur.com/TSToVor.jpeg",
    titulo: "Julie Dorrico (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  kaka_wera_jeicupe: {
    imagemUrl: "https://i.imgur.com/sHTg65V.jpeg",
    titulo: "Kaká Werá (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  lima_barreto: {
    imagemUrl: "https://i.imgur.com/9iGjvu1.jpeg",
    titulo: "Lima Barreto (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  machado_de_assis: {
    imagemUrl: "https://i.imgur.com/3vlMpK6.jpeg",
    titulo: "Machado de Assis (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  marcia_kambeba: {
    imagemUrl: "https://i.imgur.com/nPKqxVk.jpeg",
    titulo: "Márcia Kambeba (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  maria_firmina_dos_reis: {
    imagemUrl: "https://i.imgur.com/kYsLktz.jpeg",
    titulo: "Maria Firmina dos Reis (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  olivio_jekupe: {
    imagemUrl: "https://i.imgur.com/yZFIvN2.jpeg",
    titulo: "Olívio Jekupe (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  caboclinho: {
    imagemUrl: "https://i.imgur.com/H36yCWI.jpg",
    titulo: "Dança dos Caboclinhos",
    credito: "Wikimedia Commons"
  },
  tango: {
    imagemUrl: "https://i.imgur.com/S2eEbmj.jpeg",
    titulo: "Dançando Tango",
    credito: "Wikimedia Commons"
  },
  salsa: {
    imagemUrl: "https://i.imgur.com/KNsG8wH.jpeg",
    titulo: "Dançando Salsa",
    credito: "Wikimedia Commons"
  },
  valsa: {
    imagemUrl: "https://i.imgur.com/6hxKnNJ.jpeg",
    titulo: "Dançando Valsa",
    credito: "Wikimedia Commons"
  },
  rock: {
    imagemUrl: "https://i.imgur.com/7SdA0k3.jpeg",
    titulo: "Alegria do Rock",
    credito: "Wikimedia Commons"
  },
  jongo: {
    imagemUrl: "https://i.imgur.com/MMPXy3l.jpeg",
    titulo: "Dançando Jongo",
    credito: "Wikimedia Commons"
  },
  congada: {
    imagemUrl: "https://i.imgur.com/SZqtIoj.jpeg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons"
  },
  coco_pernambucano: {
    imagemUrl: "https://i.imgur.com/7OAUdNp.jpeg",
    titulo: "Dançando o Coco Pernambucano",
    credito: "Wikimedia Commons"
  },
  ciranda: {
    imagemUrl: "https://i.imgur.com/zIlLJGr.png",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons"
  },
  hip_hop: {
    imagemUrl: "https://i.imgur.com/B58RbYS.jpeg",
    titulo: "Dançando Hip Hop",
    credito: "Wikimedia Commons"
  },
  funk: {
    imagemUrl: "https://i.imgur.com/pTTr7cm.jpeg",
    titulo: "Dança Funk",
    credito: "Wikimedia Commons"
  },
  frevo: {
    imagemUrl: "https://i.imgur.com/ZvsUU43.png",
    titulo: "Dançando Frevo com Sombrinha",
    credito: "Wikimedia Commons"
  },
  fandango: {
    imagemUrl: "https://i.imgur.com/jFjNeOU.jpeg",
    titulo: "Dançando Fandango",
    credito: "Wikimedia Commons"
  },
  danca_de_salao: {
    imagemUrl: "https://i.imgur.com/hNTTLUl.jpeg",
    titulo: "Dança de Salão",
    credito: "Wikimedia Commons"
  },
  danca_contemporanea: {
    imagemUrl: "https://i.imgur.com/viD0O3q.jpeg",
    titulo: "Dança Contemporânea",
    credito: "Wikimedia Commons"
  },
  danca_classica: {
    imagemUrl: "https://i.imgur.com/e5uLrzE.jpeg",
    titulo: "Dança Clássica",
    credito: "Wikimedia Commons"
  },
  cavalo_marinho: {
    imagemUrl: "https://i.imgur.com/cVro96g.jpeg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons"
  },
  catira: {
    imagemUrl: "https://i.imgur.com/M6wTWYU.jpeg",
    titulo: "Dançando Catira",
    credito: "Wikimedia Commons"
  },
  carimbo: {
    imagemUrl: "https://i.imgur.com/rjujUdi.jpeg",
    titulo: "Dançando Carimbó",
    credito: "Wikimedia Commons"
  },
  bale: {
    imagemUrl: "https://i.imgur.com/pp0VUB5.jpeg",
    titulo: "Dançando Balé",
    credito: "Wikimedia Commons"
  },
  arte_indigena: {
    imagemUrl: "https://i.imgur.com/1OEjWd9.jpg",
    titulo: "Arte Indígena",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://i.imgur.com/Q60zPHo.jpeg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons"
  },
  danca_brasil: {
    imagemUrl: "https://i.imgur.com/CVHkdCZ.jpg",
    titulo: "Dança Tradicional no Brasil",
    credito: "Wikimedia Commons"
  },
  desenho_brasil: {
    imagemUrl: "https://i.imgur.com/KSd4nHC.jpg",
    titulo: "Desenho na História do Brasil",
    credito: "Wikimedia Commons"
  },
  teatro: {
    imagemUrl: "https://i.imgur.com/JHzxAbj.jpg",
    titulo: "Teatro Municipal de São Paulo",
    credito: "Teatro Municipal de São Paulo"
  },
  teatro_historia: {
    imagemUrl: "https://i.imgur.com/3di4jIS.jpeg",
    titulo: "História do Teatro",
    credito: "Wikimedia Commons"
  },
  cor: {
    imagemUrl: "https://i.imgur.com/eOgA02Z.jpeg",
    titulo: "Definição de Cor",
    credito: "Elementos da Linguagem Visual"
  },
  espaco: {
    imagemUrl: "https://i.imgur.com/6VvC7Yl.jpeg",
    titulo: "Definição de Espaço",
    credito: "Elementos da Linguagem Visual"
  },
  forma: {
    imagemUrl: "https://i.imgur.com/EFluxXS.jpeg",
    titulo: "Definição de Forma",
    credito: "Elementos da Linguagem Visual"
  },
  ponto: {
    imagemUrl: "https://i.imgur.com/6VAqeIv.jpeg",
    titulo: "Definição de Ponto",
    credito: "Elementos da Linguagem Visual"
  },
  textura: {
    imagemUrl: "https://i.imgur.com/uxnJNbl.jpeg",
    titulo: "Definição de Textura",
    credito: "Elementos da Linguagem Visual"
  },
  luz: {
    imagemUrl: "https://i.imgur.com/IkFuERR.jpeg",
    titulo: "Definição de Luz",
    credito: "Elementos da Linguagem Visual"
  },
  alegria: [
    {
      imagemUrl: "https://i.imgur.com/1S8gq7c.jpeg",
      titulo: "Expressão de Alegria",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/ExHb40M.jpeg",
      titulo: "Expressão de Alegria",
      credito: "Wikimedia Commons"
    }
  ],
  angustia: [
    {
      imagemUrl: "https://i.imgur.com/MhBc6cq.jpeg",
      titulo: "Expressão de Angústia",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/J0iqMPv.jpeg",
      titulo: "Expressão de Angústia",
      credito: "Wikimedia Commons"
    }
  ],
  tristeza: [
    {
      imagemUrl: "https://i.imgur.com/nniw2ev.jpeg",
      titulo: "Expressão de Tristeza",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Expressão de Melancolia",
      credito: "Wikimedia Commons"
    }
  ],
  raiva: [
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Expressão de Raiva",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/KYuqxFk.jpeg",
      titulo: "Expressão de Raiva",
      credito: "Wikimedia Commons"
    }
  ],
  tedio: [
    {
      imagemUrl: "https://i.imgur.com/oVUvDT8.jpeg",
      titulo: "Expressão de Tédio",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/pOiLRAd.jpeg",
      titulo: "Expressão de Tédio",
      credito: "Wikimedia Commons"
    }
  ]
};

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

// --- BUSCA NA WIKIMEDIA (ORDEM 1 DOS MUSEUS) ---
export async function buscarWikimedia(artistaNome: string) {
  try {
    if (!artistaNome) return null;

    const userAgent = "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)";

    // 1. Tentar primeiro busca com "painting" para focar em pinturas
    let termoBusca = `${artistaNome} painting`;
    let url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(termoBusca)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&format=json&origin=*`;

    let res = await fetch(url, { headers: { "User-Agent": userAgent } });
    let data: any = await res.json();

    let pages = Object.values(data.query?.pages || {});

    // Se não encontrou, tenta a busca genérica com o nome puro
    if (pages.length === 0) {
      termoBusca = artistaNome;
      url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(termoBusca)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&format=json&origin=*`;
      res = await fetch(url, { headers: { "User-Agent": userAgent } });
      data = await res.json();
      pages = Object.values(data.query?.pages || {});
    }

    if (!pages.length) return null;

    // Filtra para garantir que seja uma imagem válida (evitando áudios, PDFs, etc.)
    const imagensValidas = pages.filter((p: any) => {
      if (!p.imageinfo || !p.imageinfo[0]) return false;
      const info = p.imageinfo[0];
      const mime = (info.mime || "").toLowerCase();
      const media = (info.mediatype || "").toUpperCase();
      return (media === "BITMAP" || media === "DRAWING") &&
             (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png") || mime.includes("webp"));
    });

    const imagemPage: any = imagensValidas.length > 0 ? imagensValidas[0] : pages[0];
    const info = imagemPage.imageinfo?.[0];
    if (!info || !info.url) return null;

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

    let titleRaw = imagemPage.title || "File:Obra";
    let tituloOriginal = titleRaw.replace("File:", "").split(".")[0];
    let titulo = decodeURIComponent(tituloOriginal).replace(/_/g, " ");

    return {
      imagemUrl: info.url,
      titulo: titulo || "Obra de arte",
      credito: credito || "Wikimedia Commons"
    };
  } catch (error) {
    console.error("Erro buscarWikimedia:", error);
    return null;
  }
}

// --- BUSCADORES DE MUSEUS (METROPOLITAN & CHICAGO ART INSTITUTE) ---
export async function buscarMetropolitan(termo: string) {
  try {
    const searchResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${encodeURIComponent(termo)}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );

    const searchData: any = await searchResponse.json();

    if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
      return null;
    }

    const objectId = searchData.objectIDs[0];

    const detailResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );

    const obra: any = await detailResponse.json();
    const imgUrl = obra.primaryImageSmall || obra.primaryImage || null;
    if (!imgUrl) return null;

    return {
      imagemUrl: imgUrl,
      titulo: obra.title || "Sem título",
      credito: `${obra.artistDisplayName || "Autor desconhecido"} (${obra.objectDate || "Data desconhecida"}) / Metropolitan Museum of Art`
    };
  } catch (erro) {
    console.error("Erro ao buscar no Metropolitan:", erro);
    return null;
  }
}

export async function buscarChicago(termo: string) {
  try {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(termo)}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );

    const data: any = await res.json();

    if (!data.data || data.data.length === 0) {
      return null;
    }

    const obra = data.data[0];

    const detalhe = await fetch(
      `https://api.artic.edu/api/v1/artworks/${obra.id}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );

    const detalheJson: any = await detalhe.json();
    const art = detalheJson.data;

    const imagem = art.image_id
      ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`
      : null;

    if (!imagem) return null;

    return {
      imagemUrl: imagem,
      titulo: art.title || "Sem título",
      credito: `${art.artist_title || "Autor desconhecido"} (${art.date_display || "Data desconhecida"}) / Art Institute of Chicago`
    };
  } catch (erro) {
    console.error("Erro ao buscar no Chicago Art Institute:", erro);
    return null;
  }
}

// --- BUSCANTE UNIFICADO DE IMAGEM ---
async function buscarImagem(pergunta: string, matchedKey?: string, lib?: any) {
  try {
    let mK = matchedKey ? matchedKey.toLowerCase().trim() : "";
    if (mK.startsWith("danca_")) {
      const semDanca = mK.substring(6);
      if (ARTISTS_GUARANTEED_IMAGES[semDanca]) {
        mK = semDanca;
      } else if (semDanca === "salao") {
        mK = "danca_de_salao";
      } else if (semDanca === "coco_pernambucano") {
        mK = "coco_pernambucano";
      }
    }

    // Primeiro tenta correspondência direta com as imagens garantidas por chave identificada
    if (mK && ARTISTS_GUARANTEED_IMAGES[mK]) {
      const item = ARTISTS_GUARANTEED_IMAGES[mK];
      if (Array.isArray(item)) {
        const idx = Math.floor(Math.random() * item.length);
        return item[idx];
      }
      return item;
    }

    // Também verifica se a própria pergunta contém o nome de qualquer um de nossos artistas prioritários ou emoções
    const lowerQuery = pergunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/-/g, " ");
    
    if (lowerQuery.includes("alegria") || lowerQuery.includes("feliz") || lowerQuery.includes("alegre") || lowerQuery.includes("contente")) {
      const item = ARTISTS_GUARANTEED_IMAGES.alegria;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("angustia") || lowerQuery.includes("angustiado") || lowerQuery.includes("angustiada")) {
      const item = ARTISTS_GUARANTEED_IMAGES.angustia;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("triste") || lowerQuery.includes("saudade") || lowerQuery.includes("melancolia") || lowerQuery.includes("tristeza")) {
      const item = ARTISTS_GUARANTEED_IMAGES.tristeza;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("raiva") || lowerQuery.includes("zangado") || lowerQuery.includes("bravo") || lowerQuery.includes("irado") || lowerQuery.includes("raivoso")) {
      const item = ARTISTS_GUARANTEED_IMAGES.raiva;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("tedio") || lowerQuery.includes("entediado") || lowerQuery.includes("entediada")) {
      const item = ARTISTS_GUARANTEED_IMAGES.tedio;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }

    if (lowerQuery.includes("van gogh") || lowerQuery.includes("van goh")) {
      return ARTISTS_GUARANTEED_IMAGES.vincent_van_gogh;
    }
    if (lowerQuery.includes("picasso")) {
      return ARTISTS_GUARANTEED_IMAGES.pablo_picasso;
    }
    if (lowerQuery.includes("da vinci") || lowerQuery.includes("leonardo")) {
      return ARTISTS_GUARANTEED_IMAGES.leonardo_da_vinci;
    }
    if (lowerQuery.includes("monet") || lowerQuery.includes("claude monet")) {
      return ARTISTS_GUARANTEED_IMAGES.claude_monet;
    }
    if (lowerQuery.includes("tarsila") || lowerQuery.includes("abaporu")) {
      return ARTISTS_GUARANTEED_IMAGES.tarsila;
    }
    if (lowerQuery.includes("portinari") || lowerQuery.includes("candinho") || lowerQuery.includes("candido portinari")) {
      return ARTISTS_GUARANTEED_IMAGES.portinari;
    }
    if (lowerQuery.includes("dali") || lowerQuery.includes("salvador dali")) {
      return ARTISTS_GUARANTEED_IMAGES.salvador_dali;
    }
    if (lowerQuery.includes("frida") || lowerQuery.includes("kahlo")) {
      return ARTISTS_GUARANTEED_IMAGES.frida_kahlo;
    }
    if (lowerQuery.includes("almeida junior") || lowerQuery.includes("almeida jr")) {
      return ARTISTS_GUARANTEED_IMAGES.almeida_junior;
    }
    if (lowerQuery.includes("aua mendes")) {
      return ARTISTS_GUARANTEED_IMAGES.aua_mendes;
    }
    if (lowerQuery.includes("victor meirelles") || lowerQuery.includes("victor meireles") || lowerQuery.includes("vitor meirelles")) {
      return ARTISTS_GUARANTEED_IMAGES.victor_meirelles;
    }
    if (lowerQuery.includes("adriana varejao")) {
      return ARTISTS_GUARANTEED_IMAGES.adriana_varejao;
    }
    if (lowerQuery.includes("paul klee") || lowerQuery.includes("klee")) {
      return ARTISTS_GUARANTEED_IMAGES.paul_klee;
    }
    if (lowerQuery.includes("kandinsky") || lowerQuery.includes("kadinski") || lowerQuery.includes("kandinski")) {
      return ARTISTS_GUARANTEED_IMAGES.kandinsky;
    }
    if (lowerQuery.includes("pedro americo")) {
      return ARTISTS_GUARANTEED_IMAGES.pedro_americo;
    }
    if (lowerQuery.includes("magritte") || lowerQuery.includes("rene magritte")) {
      return ARTISTS_GUARANTEED_IMAGES.magritte;
    }
    if (lowerQuery.includes("daiara tukano") || lowerQuery.includes("tukano")) {
      return ARTISTS_GUARANTEED_IMAGES.daiara_tukano;
    }
    if (lowerQuery.includes("cezzane") || lowerQuery.includes("cezanne") || lowerQuery.includes("paul cezanne")) {
      return ARTISTS_GUARANTEED_IMAGES.paul_cezanne;
    }
    if (lowerQuery.includes("raphael") || lowerQuery.includes("rafael")) {
      return ARTISTS_GUARANTEED_IMAGES.raphael;
    }
    if (lowerQuery.includes("beijo") || lowerQuery.includes("klimt") || lowerQuery.includes("gustav klimt")) {
      return ARTISTS_GUARANTEED_IMAGES.gustav_klimt;
    }
    if (lowerQuery.includes("grito") || lowerQuery.includes("edvard munch")) {
      return ARTISTS_GUARANTEED_IMAGES.o_grito;
    }
    if (lowerQuery.includes("degas") || lowerQuery.includes("edgar degas")) {
      return ARTISTS_GUARANTEED_IMAGES.degas;
    }
    if (lowerQuery.includes("di cavalcanti") || lowerQuery.includes("cavalcanti")) {
      return ARTISTS_GUARANTEED_IMAGES.di_cavalcanti;
    }
    if (lowerQuery.includes("donatello")) {
      return ARTISTS_GUARANTEED_IMAGES.donatello;
    }
    if (lowerQuery.includes("yayoi") || lowerQuery.includes("kusama")) {
      return ARTISTS_GUARANTEED_IMAGES.yayoi_kusama;
    }
    if (lowerQuery.includes("jaider esbell") || lowerQuery.includes("esbell")) {
      return ARTISTS_GUARANTEED_IMAGES.jaider_esbell;
    }
    if (lowerQuery.includes("chagall") || lowerQuery.includes("chaggal") || lowerQuery.includes("marc chagall")) {
      return ARTISTS_GUARANTEED_IMAGES.chagall;
    }
    if (lowerQuery.includes("duchamp") || lowerQuery.includes("marcel duchamp")) {
      return ARTISTS_GUARANTEED_IMAGES.duchamp;
    }
    if (lowerQuery.includes("matisse") || lowerQuery.includes("henri matisse")) {
      return ARTISTS_GUARANTEED_IMAGES.matisse;
    }
    if (lowerQuery.includes("vik muniz") || lowerQuery.includes("vic muniz")) {
      return ARTISTS_GUARANTEED_IMAGES.vik_muniz;
    }
    if (lowerQuery.includes("michelangelo")) {
      return ARTISTS_GUARANTEED_IMAGES.michelangelo;
    }
    if (lowerQuery.includes("gauguin") || lowerQuery.includes("gaugin") || lowerQuery.includes("paul gauguin")) {
      return ARTISTS_GUARANTEED_IMAGES.gauguin;
    }
    if (lowerQuery.includes("goya") || lowerQuery.includes("francisco goya")) {
      return ARTISTS_GUARANTEED_IMAGES.goya;
    }
    if (lowerQuery.includes("renoir") || lowerQuery.includes("pierre-auguste renoir")) {
      return ARTISTS_GUARANTEED_IMAGES.renoir;
    }
    if (lowerQuery.includes("rembrandt")) {
      return ARTISTS_GUARANTEED_IMAGES.rembrandt;
    }
    if (lowerQuery.includes("silvana mendes") || lowerQuery.includes("silvia mendes")) {
      return ARTISTS_GUARANTEED_IMAGES.silvana_mendes;
    }
    if (lowerQuery.includes("madalena") || lowerQuery.includes("reinbolt") || lowerQuery.includes("santos reinbolt")) {
      return ARTISTS_GUARANTEED_IMAGES.madalena_reinbolt;
    }
    if (lowerQuery.includes("arjan martins") || lowerQuery.includes("arjan")) {
      return ARTISTS_GUARANTEED_IMAGES.arjan_martins;
    }
    if (lowerQuery.includes("maxwell alexandre") || lowerQuery.includes("maxwell")) {
      return ARTISTS_GUARANTEED_IMAGES.maxwell_alexandre;
    }
    if (lowerQuery.includes("rosana paulino") || lowerQuery.includes("rosana")) {
      return ARTISTS_GUARANTEED_IMAGES.rosana_paulino;
    }
    if (lowerQuery.includes("eduardo kobra") || lowerQuery.includes("kobra")) {
      return ARTISTS_GUARANTEED_IMAGES.eduardo_kobra;
    }
    if (lowerQuery.includes("os gemeos") || lowerQuery.includes("os gêmeos") || lowerQuery.includes("gemeos") || lowerQuery.includes("gêmeos")) {
      return ARTISTS_GUARANTEED_IMAGES.os_gemeos;
    }
    if (lowerQuery.includes("romero britto") || lowerQuery.includes("romero brito") || lowerQuery.includes("britto") || lowerQuery.includes("brito")) {
      return ARTISTS_GUARANTEED_IMAGES.romero_britto;
    }
    if (lowerQuery.includes("helio oiticica") || lowerQuery.includes("oiticica")) {
      return ARTISTS_GUARANTEED_IMAGES.helio_oiticica;
    }
    if (lowerQuery.includes("ivan cruz")) {
      return ARTISTS_GUARANTEED_IMAGES.ivan_cruz;
    }
    if (lowerQuery.includes("alfredo volpi") || lowerQuery.includes("volpi")) {
      return ARTISTS_GUARANTEED_IMAGES.alfredo_volpi;
    }
    if (lowerQuery.includes("djanira")) {
      return ARTISTS_GUARANTEED_IMAGES.djanira;
    }
    if (lowerQuery.includes("georgina de albuquerque") || lowerQuery.includes("georgina albuquerque")) {
      return ARTISTS_GUARANTEED_IMAGES.georgina_de_albuquerque;
    }
    if (lowerQuery.includes("arthur bispo") || lowerQuery.includes("bispo do rosario") || lowerQuery.includes("bispo do rosário")) {
      return ARTISTS_GUARANTEED_IMAGES.arthur_bispo_do_rosario;
    }
    if (lowerQuery.includes("heitor dos prazeres")) {
      return ARTISTS_GUARANTEED_IMAGES.heitor_dos_prazeres;
    }
    if (lowerQuery.includes("carybe") || lowerQuery.includes("carybé")) {
      return ARTISTS_GUARANTEED_IMAGES.carybe;
    }
    if (lowerQuery.includes("miro") || lowerQuery.includes("miró") || lowerQuery.includes("joan miro") || lowerQuery.includes("joan miró")) {
      return ARTISTS_GUARANTEED_IMAGES.joan_miro;
    }
    if (lowerQuery.includes("carolina maria de jesus") || lowerQuery.includes("carolina de jesus")) {
      return ARTISTS_GUARANTEED_IMAGES.carolina_maria_de_jesus;
    }
    if (lowerQuery.includes("ailton krenak") || lowerQuery.includes("krenak")) {
      return ARTISTS_GUARANTEED_IMAGES.ailton_krenak;
    }
    if (lowerQuery.includes("auritha tabajara") || lowerQuery.includes("auritha")) {
      return ARTISTS_GUARANTEED_IMAGES.auritha_tabajara;
    }
    if (lowerQuery.includes("conceicao evaristo") || lowerQuery.includes("conceição evaristo")) {
      return ARTISTS_GUARANTEED_IMAGES.conceicao_evaristo;
    }
    if (lowerQuery.includes("daniel munduruku") || lowerQuery.includes("munduruku")) {
      return ARTISTS_GUARANTEED_IMAGES.daniel_munduruku;
    }
    if (lowerQuery.includes("davi kopenawa") || lowerQuery.includes("kopenawa")) {
      return ARTISTS_GUARANTEED_IMAGES.davi_kopenawa;
    }
    if (lowerQuery.includes("djamila ribeiro") || lowerQuery.includes("djamila")) {
      return ARTISTS_GUARANTEED_IMAGES.djamila_ribeiro;
    }
    if (lowerQuery.includes("eliane potiguara") || lowerQuery.includes("eliane portiguara") || lowerQuery.includes("potiguara")) {
      return ARTISTS_GUARANTEED_IMAGES.eliane_potiguara;
    }
    if (lowerQuery.includes("graca grauna") || lowerQuery.includes("graca graúna") || lowerQuery.includes("grauna")) {
      return ARTISTS_GUARANTEED_IMAGES.graca_grauna;
    }
    if (lowerQuery.includes("itamar vieira") || lowerQuery.includes("itamar vieira jr")) {
      return ARTISTS_GUARANTEED_IMAGES.itamar_vieira_junior;
    }
    if (lowerQuery.includes("jarid arraes") || lowerQuery.includes("jarid")) {
      return ARTISTS_GUARANTEED_IMAGES.jarid_arraes;
    }
    if (lowerQuery.includes("julie dorrico") || lowerQuery.includes("dorrico")) {
      return ARTISTS_GUARANTEED_IMAGES.julie_dorrico;
    }
    if (lowerQuery.includes("kaka wera") || lowerQuery.includes("kaka wera jeicupe") || lowerQuery.includes("kaká werá")) {
      return ARTISTS_GUARANTEED_IMAGES.kaka_wera_jeicupe;
    }
    if (lowerQuery.includes("lima barreto")) {
      return ARTISTS_GUARANTEED_IMAGES.lima_barreto;
    }
    if (lowerQuery.includes("machado de assis")) {
      return ARTISTS_GUARANTEED_IMAGES.machado_de_assis;
    }
    if (lowerQuery.includes("marcia kambeba") || lowerQuery.includes("marica kambeba") || lowerQuery.includes("kambeba")) {
      return ARTISTS_GUARANTEED_IMAGES.marcia_kambeba;
    }
    if (lowerQuery.includes("maria firmina") || lowerQuery.includes("firmina dos reis") || lowerQuery.includes("maria firmino")) {
      return ARTISTS_GUARANTEED_IMAGES.maria_firmina_dos_reis;
    }
    if (lowerQuery.includes("olivio jekupe") || lowerQuery.includes("olivio jukupe") || lowerQuery.includes("jekupe")) {
      return ARTISTS_GUARANTEED_IMAGES.olivio_jekupe;
    }
    if (lowerQuery.includes("tango")) {
      return ARTISTS_GUARANTEED_IMAGES.tango;
    }
    if (lowerQuery.includes("salsa")) {
      return ARTISTS_GUARANTEED_IMAGES.salsa;
    }
    if (lowerQuery.includes("valsa")) {
      return ARTISTS_GUARANTEED_IMAGES.valsa;
    }
    if (lowerQuery.includes("rock")) {
      return ARTISTS_GUARANTEED_IMAGES.rock;
    }
    if (lowerQuery.includes("jongo")) {
      return ARTISTS_GUARANTEED_IMAGES.jongo;
    }
    if (lowerQuery.includes("congada")) {
      return ARTISTS_GUARANTEED_IMAGES.congada;
    }
    if (lowerQuery.includes("coco") || lowerQuery.includes("coco pernambucano")) {
      return ARTISTS_GUARANTEED_IMAGES.coco_pernambucano;
    }
    if (lowerQuery.includes("ciranda")) {
      return ARTISTS_GUARANTEED_IMAGES.ciranda;
    }
    if (lowerQuery.includes("caboclinho") || lowerQuery.includes("caboclinhos") || lowerQuery.includes("cabocnho")) {
      return ARTISTS_GUARANTEED_IMAGES.caboclinho;
    }
    if (lowerQuery.includes("hip hop") || lowerQuery.includes("hiphop")) {
      return ARTISTS_GUARANTEED_IMAGES.hip_hop;
    }
    if (lowerQuery.includes("funk")) {
      return ARTISTS_GUARANTEED_IMAGES.funk;
    }
    if (lowerQuery.includes("frevo")) {
      return ARTISTS_GUARANTEED_IMAGES.frevo;
    }
    if (lowerQuery.includes("fandango")) {
      return ARTISTS_GUARANTEED_IMAGES.fandango;
    }
    if (lowerQuery.includes("danca de salao") || lowerQuery.includes("dancas de salao") || lowerQuery.includes("dança de salão") || lowerQuery.includes("danças de salão")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_de_salao;
    }
    if (lowerQuery.includes("danca contemporanea") || lowerQuery.includes("dança contemporânea")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_contemporanea;
    }
    if (lowerQuery.includes("danca classica") || lowerQuery.includes("dança clássica")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_classica;
    }
    if (lowerQuery.includes("cavalo marinho")) {
      return ARTISTS_GUARANTEED_IMAGES.cavalo_marinho;
    }
    if (lowerQuery.includes("catira")) {
      return ARTISTS_GUARANTEED_IMAGES.catira;
    }
    if (lowerQuery.includes("carimbo") || lowerQuery.includes("carimbó")) {
      return ARTISTS_GUARANTEED_IMAGES.carimbo;
    }
    if (lowerQuery.includes("bale") || lowerQuery.includes("ballet") || lowerQuery.includes("balé")) {
      return ARTISTS_GUARANTEED_IMAGES.bale;
    }
    if (lowerQuery.includes("arte indigena") || lowerQuery.includes("arte indígena") || lowerQuery.includes("cultura indigena") || lowerQuery.includes("cultura indígena")) {
      return ARTISTS_GUARANTEED_IMAGES.arte_indigena;
    }
    if (lowerQuery.includes("arte africana") || lowerQuery.includes("cultura africana") || lowerQuery.includes("mascaras africanas") || lowerQuery.includes("máscaras africanas")) {
      return ARTISTS_GUARANTEED_IMAGES.arte_africana;
    }
    if (lowerQuery.includes("danca no brasil") || lowerQuery.includes("dança no brasil") || lowerQuery.includes("danca brasileira") || lowerQuery.includes("dança brasileira") || lowerQuery.includes("danca no br") || lowerQuery.includes("dança no br")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_brasil;
    }
    if (lowerQuery.includes("desenho no brasil") || lowerQuery.includes("desenho brasileiro") || lowerQuery.includes("desenho no br")) {
      return ARTISTS_GUARANTEED_IMAGES.desenho_brasil;
    }
    if (lowerQuery.includes("teatro") || lowerQuery.includes("palco")) {
      if (lowerQuery.includes("historia") || lowerQuery.includes("origem") || lowerQuery.includes("antigo") || lowerQuery.includes("passado") || lowerQuery.includes("surgi")) {
        return ARTISTS_GUARANTEED_IMAGES.teatro_historia;
      }
      return ARTISTS_GUARANTEED_IMAGES.teatro;
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
        const stopWords = [
          "quem", "foi", "fale", "sobre", "ver", "obra", "quando", "nasceu", "morreu", 
          "mostre", "imagem", "foto", "quadro", "pintura", "desenho", "ilustração", "retrato", 
          "quero", "queria", "gostaria", "gostava", "pode", "poderia", "me", "te", "se", "um", 
          "uma", "do", "da", "de", "em", "na", "no", "para", "com", "onde", "como", "qual", 
          "o que", "por que", "porque", "para", "mais", "tem", "algum", "alguma", "ilustra",
          "desenha", "veja", "olha", "mostra", "exibir", "pinta", "pintou", "criou", "fez",
          "uns", "umas", "dos", "das", "pelo", "pela", "por", "com", "sem", "ou",
          "que", "esta", "este", "essa", "esse", "sua", "seu", "suas", "seus", "minha", "meu",
          "minhas", "meus", "dele", "dela", "deles", "delas", "qual", "quais", "quem", "como",
          "tudo", "nada", "algo", "coisa"
        ];
        
        const palavras = pergunta.toLowerCase()
          .replace(/[?!.,]/g, "")
          .split(/\s+/)
          .filter(p => p.length > 2 && !stopWords.includes(p));
        
        termo = palavras.join(" ");
      }
    }

    if (!termo) return null;

    let img = null;

    // 1. Tentar Wikimedia Commons
    try {
      img = await buscarWikimedia(termo);
    } catch (e) {
      console.warn("Erro ao buscar na Wikimedia:", e);
    }

    // 2. Tentar Metropolitan Museum of Art API
    if (!img) {
      try {
        img = await buscarMetropolitan(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Metropolitan:", e);
      }
    }

    // 3. Tentar Chicago Art Institute API
    if (!img) {
      try {
        img = await buscarChicago(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Chicago Art Institute:", e);
      }
    }
    
    // 4. Fallback Pexels
    if (!img) {
      try {
        img = await buscarNoPexels(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Pexels:", e);
      }
    }

    return img;
  } catch (e) {
    console.error("Erro na busca de imagem:", e);
  }
  return null;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} Não Permitido`);
  }

  try {
    const { mensagem, nomeCrianca: clientNomeCrianca } = req.body;
    if (!mensagem || typeof mensagem !== 'string') {
      return res.status(400).json({ error: "Mensagem é obrigatória" });
    }

    let nomeCrianca = clientNomeCrianca || null;
    let acabouDeSeApresentar = false;

    // Detectar nome da criança
    const nomeExtraido = extrairNome(mensagem);
    if (nomeExtraido) {
      nomeCrianca = nomeExtraido;
      acabouDeSeApresentar = true;
    }

    const lib = await carregarBiblioteca();
    let textoFinal = "";
    let infoExtra = { nascimento: "", morte: "", estilo: "" };
    let localResult = null;

    if (acabouDeSeApresentar && nomeCrianca) {
      const saudacoes = [
        `É um prazer estar aqui para falarmos de Arte! Bem-vindo, Artista **${nomeCrianca}**! 🎨`,
        `Olá, **${nomeCrianca}**! É um prazer estar aqui para falarmos de Arte! 🌟`,
        `Oi, **${nomeCrianca}**! É um prazer estar aqui para falarmos de Arte! 🤩`
      ];
      textoFinal = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    } else {
      const containsImageKeywords = 
        mensagem.toLowerCase().includes("mostra") ||
        mensagem.toLowerCase().includes("mostre") ||
        mensagem.toLowerCase().includes("ver") ||
        mensagem.toLowerCase().includes("veja") ||
        mensagem.toLowerCase().includes("imagem") ||
        mensagem.toLowerCase().includes("foto") ||
        mensagem.toLowerCase().includes("quadro") ||
        mensagem.toLowerCase().includes("pintura") ||
        mensagem.toLowerCase().includes("desenho") ||
        mensagem.toLowerCase().includes("retrat") ||
        mensagem.toLowerCase().includes("ilustra");

      // 1. PRIORIDADE TOTAL: Busca local inteligente
      localResult = resolverMensagemLocalmente(mensagem, lib);

      if (localResult) {
        let encontrouNaLib = false;
        if (localResult.matchedKey) {
          const item = lib[localResult.matchedKey];
          if (item) {
            encontrouNaLib = true;
            if (containsImageKeywords) {
              const nomeFormatado = item.palavras_chave?.[0]
                ? item.palavras_chave[0].replace(/\b\w/g, (l: string) => l.toUpperCase())
                : "Carolina Maria de Jesus";
              textoFinal = `Com certeza! Preparei a tela para você ver a imagem de **${nomeFormatado}**! 🖼️✨`;
            } else {
              textoFinal = localResult.reply;
            }

            infoExtra = {
              nascimento: item.ano_nascimento || "---",
              morte: item.ano_falecimento || "---",
              estilo: item.categoria || "Arte"
            };
          }
        }
        
        if (!encontrouNaLib) {
          textoFinal = localResult.reply;
        }
      }

      // 2. IA / Gemini (se necessário)
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
              systemInstruction += ` O nome da criança que está conversando com você é ${nomeCrianca}. Trate-a com muito carinho e use o nome dela em suas respostas de forma natural e fofa para manter uma conversa acolhedora e focar na arte.`;
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
          textoFinal = sugerirTemasAlternativos();
        }
      }
    }

    // Customização de nome
    if (nomeCrianca && !acabouDeSeApresentar && (localResult || !ai)) {
      if (Math.random() < 0.35) {
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

    // 3. Busca Imagem Unificada (Se acabou de se apresentar, retorna uma das 5 imagens fofas do Candinho fornecidas pela criança)
    let imagemResult = null;
    if (acabouDeSeApresentar) {
      const CANDINHO_GREETINGS_IMAGES = [
        "https://i.imgur.com/PYAYlUY.jpg",
        "https://i.imgur.com/UDl1c5j.png",
        "https://i.imgur.com/Le0VpzC.jpg",
        "https://i.imgur.com/iWmEdZz.jpg",
        "https://i.imgur.com/REfhO7r.jpg"
      ];
      // Escolhe uma imagem aleatória das fornecidas pelo usuário
      const idx = Math.floor(Math.random() * CANDINHO_GREETINGS_IMAGES.length);
      imagemResult = {
        imagemUrl: CANDINHO_GREETINGS_IMAGES[idx],
        titulo: `Bem-vindo ao Ateliê, ${nomeCrianca || 'Pequeno Artista'}! 🎨`,
        credito: "Ilustração do Candinho"
      };
    } else {
      imagemResult = localResult?.image || await buscarImagem(mensagem, localResult?.matchedKey, lib);
    }

    return res.status(200).json({
      reply: textoFinal || "Que pergunta curiosa! Vamos descobrir juntos sobre arte? 🎨",
      image: imagemResult,
      info: infoExtra.nascimento || infoExtra.morte || infoExtra.estilo ? infoExtra : null,
      googleArts: { url: `https://artsandculture.google.com/search?q=${encodeURIComponent(mensagem)}` },
      matchedKey: localResult?.matchedKey,
      nomeCrianca: nomeCrianca
    });
  } catch (error) {
    console.error("Erro Geral:", error);
    return res.status(200).json({ reply: "Ops! Minhas tintas secaram um pouquinho. Pode repetir o que disse? 🎨" });
  }
}
