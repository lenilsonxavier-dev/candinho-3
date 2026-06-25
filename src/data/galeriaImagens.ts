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
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/definicao-danca.jpg",
    titulo: "Definição de Dança",
    credito: "Wikimedia Commons"
  },
  poema: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/definicao-poesia.jpg",
    titulo: "Definição de Poesia",
    credito: "Wikimedia Commons"
  },
  desenho: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/definicao-desenho.jpg",
    titulo: "Definição de Desenho",
    credito: "Wikimedia Commons"
  },
  literatura: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/definicao-literatura.jpg",
    titulo: "Definição de Literatura",
    credito: "Wikimedia Commons"
  },
  musica: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/definicao-musica.jpg",
    titulo: "Definição de Música",
    credito: "Wikimedia Commons"
  },
  pintura: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/historia-da-arte.jpg",
    titulo: "Definição de Pintura",
    credito: "Wikimedia Commons"
  },
  teatro: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/historia-do-teatro.jpg",
    titulo: "Definição de Teatro",
    credito: "Wikimedia Commons"
  },
  piada: [
    {
      imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/piada.jpg",
      titulo: "Piada de Arte",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/piada-1.jpg",
      titulo: "Outra Piada de Arte",
      credito: "Wikimedia Commons"
    }
  ],
  curiosidade: [
    {
      imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/curiosidade.jpg",
      titulo: "Curiosidades sobre Arte",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/curiosidade-1.jpg",
      titulo: "Sabia que?",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/curiosidade-2.jpg",
      titulo: "Fato Curioso",
      credito: "Wikimedia Commons"
    }
  ],
  caboclinho: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-caboclinhos.jpg",
    titulo: "Dança dos Caboclinhos",
    credito: "Wikimedia Commons"
  },
  tango: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-tango.jpg",
    titulo: "Dançando Tango",
    credito: "Wikimedia Commons"
  },
  salsa: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-salsa.jpg",
    titulo: "Dançando Salsa",
    credito: "Wikimedia Commons"
  },
  valsa: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-valsa.jpg",
    titulo: "Dançando Valsa",
    credito: "Wikimedia Commons"
  },
  rock: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-rock.jpg",
    titulo: "Alegria do Rock",
    credito: "Wikimedia Commons"
  },
  jongo: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-jongo.jpg",
    titulo: "Dançando Jongo",
    credito: "Wikimedia Commons"
  },
  congada: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-congada.jpg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons"
  },
  coco_pernambucano: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-do-coco.jpg",
    titulo: "Dançando o Coco Pernambucano",
    credito: "Wikimedia Commons"
  },
  ciranda: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-ciranda.png",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons"
  },
  hip_hop: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-hip-hop.jpg",
    titulo: "Dançando Hip Hop",
    credito: "Wikimedia Commons"
  },
  funk: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-funk.jpg",
    titulo: "Dança Funk",
    credito: "Wikimedia Commons"
  },
  frevo: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-frevo.png",
    titulo: "Dançando Frevo com Sombrinha",
    credito: "Wikimedia Commons"
  },
  fandango: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-fandango.jpg",
    titulo: "Dançando Fandango",
    credito: "Wikimedia Commons"
  },
  danca_de_salao: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-de-salao.jpg",
    titulo: "Dança de Salão",
    credito: "Wikimedia Commons"
  },
  danca_contemporanea: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-contemporanea.jpg",
    titulo: "Dança Contemporânea",
    credito: "Wikimedia Commons"
  },
  danca_classica: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-classica.jpg",
    titulo: "Dança Clássica",
    credito: "Wikimedia Commons"
  },
  cavalo_marinho: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-cavalo-marinho.jpg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons"
  },
  catira: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-catira.jpg",
    titulo: "Dançando Catira",
    credito: "Wikimedia Commons"
  },
  carimbo: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-carimbo.jpg",
    titulo: "Dançando Carimbó",
    credito: "Wikimedia Commons"
  },
  bale: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/danca-bale.jpg",
    titulo: "Dançando Balé",
    credito: "Wikimedia Commons"
  },
  arte_indigena: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/cultura-indigena.jpg",
    titulo: "Arte Indígena",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/cultura-africana.jpg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons"
  },
  danca_brasil: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/historia-da-danca-brasil.jpg",
    titulo: "Dança Tradicional no Brasil",
    credito: "Wikimedia Commons"
  },
  desenho_brasil: {
    imagemUrl: "https://raw.githubusercontent.com/lenilsonxavier-dev/candinho-3/main/public/imagens/historia-do-desenho-no-brasil.jpg",
    titulo: "Desenho na História do Brasil",
    credito: "Wikimedia Commons"
  }
};
