export interface GaleriaItem {
  imagemUrl: string;
  titulo: string;
  credito: string;
}

export const GALERIA_IMAGENS: Record<string, GaleriaItem | GaleriaItem[]> = {
  arte: {
    imagemUrl: "https://i.imgur.com/S65idlX.jpeg",
    titulo: "O Violeiro",
    credito: "Almeida Júnior"
  },
  danca: {
    imagemUrl: "https://i.imgur.com/3LGoXuZ.jpeg",
    titulo: "A Dança",
    credito: "Henri Matisse"
  },
  poema: {
    imagemUrl: "https://i.imgur.com/wvQLiom.jpeg",
    titulo: "Retrato de Cecília Meireles",
    credito: "Cecília Meireles"
  },
  desenho: {
    imagemUrl: "https://i.imgur.com/qKt1FWr.jpeg",
    titulo: "Esboço da Última Ceia",
    credito: "Leonardo da Vinci"
  },
  literatura: {
    imagemUrl: "https://i.imgur.com/JoFITap.jpeg",
    titulo: "Retrato do Acervo Literário Clássico",
    credito: "Acervo de Literatura Clássica"
  },
  musica: {
    imagemUrl: "https://i.imgur.com/8tSYMB6.jpeg",
    titulo: "Clássico Histórico de Partituras e Instrumentos",
    credito: "Acervo de Música Clássica"
  },
  pintura: {
    imagemUrl: "https://i.imgur.com/itQdr8H.jpeg",
    titulo: "No Bosque de Giverny (In the Woods at Giverny)",
    credito: "Claude Monet"
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
  piada: [
    {
      imagemUrl: "https://i.imgur.com/D0qsROZ.jpeg",
      titulo: "As Quatro Estações (Le Saisons)",
      credito: "Giuseppe Arcimboldo"
    },
    {
      imagemUrl: "https://i.imgur.com/4zBo1Q2.jpeg",
      titulo: "Mãos Desenhando (Drawing Hands)",
      credito: "M. C. Escher"
    },
    {
      imagemUrl: "https://i.imgur.com/s1Ed4RY.jpeg",
      titulo: "Retrato do Imperador Rodolfo II como Vertumno",
      credito: "Giuseppe Arcimboldo"
    },
    {
      imagemUrl: "https://i.imgur.com/Lk68fFd.jpeg",
      titulo: "Relatividade (Relativity)",
      credito: "M. C. Escher"
    }
  ],
  curiosidade: [
    {
      imagemUrl: "https://i.imgur.com/Bmzw190.jpeg",
      titulo: "A Coruja da Sabedoria e Astronomia",
      credito: "Acervo de Curiosidades"
    },
    {
      imagemUrl: "https://i.imgur.com/5gUFu6O.jpeg",
      titulo: "Autorretrato",
      credito: "Leonardo da Vinci"
    }
  ],
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
  madalena_reinbolt: {
    imagemUrl: "https://i.imgur.com/aCJ087A.jpeg",
    titulo: "Madalena dos Santos Reinbolt",
    credito: "Madalena dos Santos Reinbolt"
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
  daiara_tukano: {
    imagemUrl: "https://i.imgur.com/K7LshrR.jpeg",
    titulo: "Daiara Tukano",
    credito: "Wikimedia Commons"
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
