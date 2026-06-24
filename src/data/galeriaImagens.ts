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
    credito: "Acervo de Literatura Clássica"
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
    imagemUrl: "https://i.imgur.com/JHzxAbj.jpeg",
    titulo: "Teatro Municipal de São Paulo",
    credito: "Teatro Municipal de São Paulo"
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
    credito: "Manifestação Folclórica e Cultural Brasileira"
  },
  tango: {
    imagemUrl: "https://i.imgur.com/S2eEbmj.jpeg",
    titulo: "Dançando Tango",
    credito: "Ilustração de Tango"
  },
  salsa: {
    imagemUrl: "https://i.imgur.com/KNsG8wH.jpeg",
    titulo: "Dançando Salsa",
    credito: "Ilustração de Salsa"
  },
  valsa: {
    imagemUrl: "https://i.imgur.com/6hxKnNJ.jpeg",
    titulo: "Dançando Valsa",
    credito: "Ilustração de Valsa"
  },
  rock: {
    imagemUrl: "https://i.imgur.com/7SdA0k3.jpeg",
    titulo: "Alegria do Rock",
    credito: "Ilustração de Rock"
  },
  jongo: {
    imagemUrl: "https://i.imgur.com/MMPXy3l.jpeg",
    titulo: "Dançando Jongo",
    credito: "Ilustração de Jongo"
  },
  congada: {
    imagemUrl: "https://i.imgur.com/SZqtIoj.jpeg",
    titulo: "Festa da Congada",
    credito: "Ilustração de Congada"
  },
  coco_pernambucano: {
    imagemUrl: "https://i.imgur.com/7OAUdNp.jpeg",
    titulo: "Dançando o Coco Pernambucano",
    credito: "Ilustração de Coco Pernambucano"
  },
  ciranda: {
    imagemUrl: "https://i.imgur.com/zIlLJGr.png",
    titulo: "Roda de Ciranda",
    credito: "Ilustração de Ciranda"
  },
  hip_hop: {
    imagemUrl: "https://i.imgur.com/B58RbYS.jpeg",
    titulo: "Dançando Hip Hop",
    credito: "Ilustração de Hip Hop"
  },
  funk: {
    imagemUrl: "https://i.imgur.com/pTTr7cm.jpeg",
    titulo: "Dança Funk",
    credito: "Ilustração de Funk"
  },
  frevo: {
    imagemUrl: "https://i.imgur.com/ZvsUU43.png",
    titulo: "Dançando Frevo com Sombrinha",
    credito: "Ilustração de Frevo"
  },
  fandango: {
    imagemUrl: "https://i.imgur.com/jFjNeOU.jpeg",
    titulo: "Dançando Fandango",
    credito: "Ilustração de Fandango"
  },
  danca_de_salao: {
    imagemUrl: "https://i.imgur.com/hNTTLUl.jpeg",
    titulo: "Dança de Salão",
    credito: "Ilustração de Dança de Salão"
  },
  danca_contemporanea: {
    imagemUrl: "https://i.imgur.com/viD0O3q.jpeg",
    titulo: "Dança Contemporânea",
    credito: "Ilustração de Dança Contemporânea"
  },
  danca_classica: {
    imagemUrl: "https://i.imgur.com/e5uLrzE.jpeg",
    titulo: "Dança Clássica",
    credito: "Ilustração de Dança Clássica"
  },
  cavalo_marinho: {
    imagemUrl: "https://i.imgur.com/cVro96g.jpeg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Ilustração de Cavalo Marinho"
  },
  catira: {
    imagemUrl: "https://i.imgur.com/M6wTWYU.jpeg",
    titulo: "Dançando Catira",
    credito: "Ilustração de Catira"
  },
  carimbo: {
    imagemUrl: "https://i.imgur.com/rjujUdi.jpeg",
    titulo: "Dançando Carimbó",
    credito: "Ilustração de Carimbó"
  },
  bale: {
    imagemUrl: "https://i.imgur.com/pp0VUB5.jpeg",
    titulo: "Dançando Balé",
    credito: "Ilustração de Balé"
  },
  arte_indigena: {
    imagemUrl: "https://i.imgur.com/1OEjWd9.jpeg",
    titulo: "Arte Indígena",
    credito: "Ilustração de Arte Indígena"
  },
  arte_africana: {
    imagemUrl: "https://i.imgur.com/Q60zPHo.jpeg",
    titulo: "Arte Africana",
    credito: "Ilustração de Arte Africana"
  },
  danca_brasil: {
    imagemUrl: "https://i.imgur.com/CVHkdCZ.jpeg",
    titulo: "Dança Tradicional no Brasil",
    credito: "Acervo de Dança do Brasil"
  },
  desenho_brasil: {
    imagemUrl: "https://i.imgur.com/KSd4nHC.jpeg",
    titulo: "Desenho na História do Brasil",
    credito: "Acervo de Desenho do Brasil"
  }
};
