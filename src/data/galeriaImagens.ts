export interface GaleriaItem {
  imagemUrl: string;
  titulo: string;
  credito: string;
}

export const GALERIA_IMAGENS: Record<string, GaleriaItem | GaleriaItem[]> = {
  arte: {
    imagemUrl: "https://i.imgur.com/S65idlX.jpeg",
    titulo: "O Violeiro",
    credito: "Wikimedia Commons"
  },
  danca: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/definicao-danca.jpg",
    titulo: "Definição de Dança",
    credito: "Wikimedia Commons"
  },
  poema: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/definicao-poesia.jpg",
    titulo: "Definição de Poesia",
    credito: "Wikimedia Commons"
  },
  desenho: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/definicao-de-desenho.jpg",
    titulo: "Definição de Desenho",
    credito: "Wikimedia Commons"
  },
  literatura: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/definicao-literatura.jpg",
    titulo: "Definição de Literatura",
    credito: "Wikimedia Commons"
  },
  musica: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/definicao-musica.jpg",
    titulo: "Definição de Música",
    credito: "Wikimedia Commons"
  },
  pintura: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/deinicao-pintura.jpg",
    titulo: "Definição de Pintura",
    credito: "Wikimedia Commons"
  },
  teatro: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/deinicao-de-teatro.jpg",
    titulo: "Definição de Teatro",
    credito: "Wikimedia Commons"
  },
  piada: [
    {
      imagemUrl: "https://candinho-20.vercel.app/imagens/piada.jpg",
      titulo: "Piada de Arte",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://candinho-20.vercel.app/imagens/piada-2.jpg",
      titulo: "Outra Piada de Arte",
      credito: "Wikimedia Commons"
    }
  ],
  curiosidade: [
    {
      imagemUrl: "https://candinho-20.vercel.app/imagens/curiosidade.JPG",
      titulo: "Curiosidades sobre Arte",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://candinho-20.vercel.app/imagens/curiosidade-1.jpg",
      titulo: "Sabia que?",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://candinho-20.vercel.app/imagens/curiosidade-2.jpg",
      titulo: "Fato Curioso",
      credito: "Wikimedia Commons"
    }
  ],
  caboclinho: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-caboclinho.jpg",
    titulo: "Dança dos Caboclinhos",
    credito: "Wikimedia Commons"
  },
  tango: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-tango.jpg",
    titulo: "Dançando Tango",
    credito: "Wikimedia Commons"
  },
  salsa: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-salsa.jpg",
    titulo: "Dançando Salsa",
    credito: "Wikimedia Commons"
  },
  valsa: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-valsa.jpg",
    titulo: "Dançando Valsa",
    credito: "Wikimedia Commons"
  },
  rock: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-rock.jpg",
    titulo: "Alegria do Rock",
    credito: "Wikimedia Commons"
  },
  jongo: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-jongo.jpg",
    titulo: "Dançando Jongo",
    credito: "Wikimedia Commons"
  },
  congada: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-congada.jpg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons"
  },
  coco_pernambucano: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-coco.jpg",
    titulo: "Dançando o Coco Pernambucano",
    credito: "Wikimedia Commons"
  },
  ciranda: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-ciranda.png",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons"
  },
  hip_hop: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-hip-hop.jpg",
    titulo: "Dançando Hip Hop",
    credito: "Wikimedia Commons"
  },
  funk: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-funk.jpg",
    titulo: "Dança Funk",
    credito: "Wikimedia Commons"
  },
  frevo: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-frevo.png",
    titulo: "Dançando Frevo com Sombrinha",
    credito: "Wikimedia Commons"
  },
  fandango: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-fandango.jpg",
    titulo: "Dançando Fandango",
    credito: "Wikimedia Commons"
  },
  danca_de_salao: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-danca-de-salao.jpg",
    titulo: "Dança de Salão",
    credito: "Wikimedia Commons"
  },
  danca_contemporanea: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-contemporanea.jpg",
    titulo: "Dança Contemporânea",
    credito: "Wikimedia Commons"
  },
  danca_classica: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-classica.jpg",
    titulo: "Dança Clássica",
    credito: "Wikimedia Commons"
  },
  cavalo_marinho: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-cavalo-marinho.jpg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons"
  },
  catira: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-catira.jpg",
    titulo: "Dançando Catira",
    credito: "Wikimedia Commons"
  },
  carimbo: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-carimbo.jpg",
    titulo: "Dançando Carimbó",
    credito: "Wikimedia Commons"
  },
  bale: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/danca-bale.jpg",
    titulo: "Dançando Balé",
    credito: "Wikimedia Commons"
  },
  arte_indigena: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/cultura-indigena.jpg",
    titulo: "Arte Indígena",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/cultura-africana.jpg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons"
  },
  danca_brasil: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/historia-da-danca-no-brasil.jpg",
    titulo: "Dança Tradicional no Brasil",
    credito: "Wikimedia Commons"
  },
  desenho_brasil: {
    imagemUrl: "https://candinho-20.vercel.app/imagens/historia-do-desenho-no-brasil.jpg",
    titulo: "Desenho na História do Brasil",
    credito: "Wikimedia Commons"
  }
};
