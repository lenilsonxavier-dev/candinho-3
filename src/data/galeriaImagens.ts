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
    imagemUrl: "https://i.imgur.com/mxBlvdv.jpeg",
    titulo: "Arte Indígena Brasileira",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://i.imgur.com/TIWhZhH.jpeg",
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
  di_cavalcanti: {
    imagemUrl: "https://i.imgur.com/y2bIl3C.jpg",
    titulo: "Samba",
    credito: "Di Cavalcanti"
  },
  dicavalcanti: {
    imagemUrl: "https://i.imgur.com/y2bIl3C.jpg",
    titulo: "Samba",
    credito: "Di Cavalcanti"
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
  ],
  modernismo: {
    imagemUrl: "https://i.imgur.com/M7lSaXM.jpeg",
    titulo: "Abaporu",
    credito: "Tarsila do Amaral (Wikipédia)"
  },
  arte_antiga: {
    imagemUrl: "https://i.imgur.com/NoarViK.jpeg",
    titulo: "Arte Antiga",
    credito: "Wikimedia Commons"
  },
  arte_medieval: {
    imagemUrl: "https://i.imgur.com/L0KsfZj.jpeg",
    titulo: "Arte Medieval",
    credito: "Wikimedia Commons"
  },
  arte_crista: {
    imagemUrl: "https://i.imgur.com/6cWfVs1.jpeg",
    titulo: "Arte Cristã",
    credito: "Wikimedia Commons"
  },
  arte_grega: {
    imagemUrl: "https://i.imgur.com/RMGy4Kx.jpeg",
    titulo: "Arte Grega",
    credito: "Wikimedia Commons"
  },
  arte_romana: {
    imagemUrl: "https://i.imgur.com/JbkAVC8.jpeg",
    titulo: "Arte Romana",
    credito: "Wikimedia Commons"
  },
  arte_egipcia: {
    imagemUrl: "https://i.imgur.com/NoarViK.jpeg",
    titulo: "Arte Egípcia",
    credito: "Wikimedia Commons"
  },
  arte_japonesa: {
    imagemUrl: "https://i.imgur.com/eP8TCyb.jpeg",
    titulo: "Arte Japonesa",
    credito: "Wikimedia Commons"
  },
  arte_chinesa: {
    imagemUrl: "https://i.imgur.com/0NCVF0W.jpeg",
    titulo: "Arte Chinesa",
    credito: "Wikimedia Commons"
  },
  expressionismo: {
    imagemUrl: "https://i.imgur.com/MhBc6cq.jpeg",
    titulo: "Expressão e Sentimento Expressionista",
    credito: "Wikimedia Commons"
  },
  arte_europeia: {
    imagemUrl: "https://i.imgur.com/hZuVkcg.jpeg",
    titulo: "Arte Europeia",
    credito: "Wikimedia Commons"
  },
  arte_bizantina: {
    imagemUrl: "https://i.imgur.com/DFIiuoy.jpeg",
    titulo: "Arte Bizantina",
    credito: "Wikimedia Commons"
  },
  arte_islamica: {
    imagemUrl: "https://i.imgur.com/FY2iXn2.jpeg",
    titulo: "Arte Islâmica",
    credito: "Wikimedia Commons"
  },
  arte_pre_colombiana: {
    imagemUrl: "https://i.imgur.com/53fFOzu.jpeg",
    titulo: "Arte Pré-Colombiana",
    credito: "Wikimedia Commons"
  },
  arte_digital: {
    imagemUrl: "https://i.imgur.com/9fFJxDf.jpeg",
    titulo: "Arte Digital",
    credito: "Wikimedia Commons"
  },
  arte_ia: {
    imagemUrl: "https://i.imgur.com/PGbFKrS.jpeg",
    titulo: "Arte com Inteligência Artificial",
    credito: "Wikimedia Commons"
  },
  arte_naif: {
    imagemUrl: "https://i.imgur.com/qbUzNQb.jpeg",
    titulo: "O Sonho",
    credito: "Henri Rousseau"
  },
  como_esboco: {
    imagemUrl: "https://i.imgur.com/qKt1FWr.jpeg",
    titulo: "Esboço de Estudos (Sketch Study)",
    credito: "Leonardo da Vinci"
  },
  como_giz_de_cera: {
    imagemUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
    titulo: "Cores e Texturas Vibrantes",
    credito: "Unsplash"
  },
  como_guache: {
    imagemUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop",
    titulo: "Pintando com Guache Artístico",
    credito: "Unsplash"
  },
  como_pinceis: {
    imagemUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
    titulo: "Os Diversos Pincéis e Seus Superpoderes",
    credito: "Unsplash"
  },
  como_tintas_caseiras: {
    imagemUrl: "https://images.unsplash.com/photo-1525909002-1b057f39dd81?q=80&w=600&auto=format&fit=crop",
    titulo: "Criando Tintas Naturais e Ecológicas",
    credito: "Unsplash"
  },
  como_tinta_acrilica: {
    imagemUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop",
    titulo: "Pintura com Tinta Acrílica Vibrante",
    credito: "Unsplash"
  },
  como_papel_desenhar: {
    imagemUrl: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop",
    titulo: "Escolhendo o Papel Ideal",
    credito: "Unsplash"
  },
  como_aquarela: {
    imagemUrl: "https://images.unsplash.com/photo-1525909002-1b057f39dd81?q=80&w=600&auto=format&fit=crop",
    titulo: "A Magia das Transparências na Aquarela",
    credito: "Unsplash"
  },
  como_lapis_de_cor: {
    imagemUrl: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=600&auto=format&fit=crop",
    titulo: "Domando as Camadas e Blending dos Lápis de Cor",
    credito: "Unsplash"
  }
};
