import { CURIOSIDADES_ACERVO, buscarCuriosidadePorKeyword } from "../data/curiosidadesAcervo.js";
import { GALERIA_IMAGENS, GaleriaItem } from "../data/galeriaImagens.js";

export interface DialogIntent {
  keywords: string[];
  reply: string;
}

export interface ConhecimentoItem {
  palavras: string[];
  resposta: string | (() => string);
  matchedKey?: string;
}

// 1. Helper to remove accents, punctuation, and convert to lowercase for robust matching
export function normalizarTexto(txt: string): string {
  if (!txt) return "";
  return txt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Removes accents
    .toLowerCase()
    .replace(/[?!.,;:()'"\\\-\/]/g, " ") // Removes punctuation
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim();
}

// 1.1 Robust keyword boundary tester to prevent substring matches (e.g., "rio" inside "curiosidade" or "so" inside "sobre")
export function testarPalavraChave(msgNormalizada: string, kwNormalizada: string): boolean {
  if (!msgNormalizada || !kwNormalizada) return false;

  const msg = msgNormalizada.trim();
  const kw = kwNormalizada.trim();

  // Exact match of phrase or word
  if (msg === kw) return true;

  // Space-padded boundary match for words/phrases
  const paddedMsg = ` ${msg} `;
  const paddedKw = ` ${kw} `;
  if (paddedMsg.includes(paddedKw)) return true;

  // Singular/plural Portuguese helper for single word keywords
  if (!kw.includes(" ")) {
    const words = msg.split(" ");
    for (const w of words) {
      if (w === kw) return true;
      if (w === kw + "s") return true;
      if (kw === w + "s") return true;
    }
  }

  return false;
}

// 2. Core local dialog dictionary for standard greetings and chat utilities
const CONVERSATIONAL_INTENTS: DialogIntent[] = [
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "ola candinho", "oi candinho", "saudacoes", "hey"],
    reply: "Olá! Sou o Candinho, seu amigo artista. O que vamos descobrir hoje? 🎨 Podemos falar sobre pintores famosos, danças brasileiras, cores e conceitos de arte! É só perguntar."
  },
  {
    keywords: ["quem e voce", "quem e o candinho", "o que voce faz", "quem e candinho", "seu nome", "fale de voce"],
    reply: "Eu sou o Candinho! Fui inspirado no grande pintor brasileiro Cândido Portinari, que amava retratar a infância, o povo e as cores de nossa terra. Estou aqui para ser seu guia pelo maravilhoso mundo das artes! 🎨✨"
  },
  {
    keywords: ["ajuda", "socorro", "o que perguntar", "como usar", "instrucoes", "menu", "temas", "opcoes"],
    reply: "É super fácil conversar comigo! Você pode digitar qualquer assunto de arte de sua preferência. Veja alguns exemplos:\n\n🩰 **Danças & Ritmos:** Balé, Hip Hop, Frevo, Ciranda, Carimbó, Funk, Maracatu...\n\n🎨 **Conceitos de Arte:** Linhas, Pontos, Formas, Cores Quentes/Frias, Luz e Sombra, Perspectiva, Pixel Art...\n\n🦁 **Imaginação & Criatividade:** Animais mágicos, desenhos fáceis, super-heróis, cores novas!\n\nSe quiser ver um desenho ou obra de arte, digite algo como: 'Me mostre uma imagem de Portinari'! 🖼️"
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "agradecido", "legal", "gostei", "incrivel", "maravilhoso", "muito bom"],
    reply: "Pinceladas de alegria para você! Que bom que gostou. A arte nos ajuda a ver o mundo de um jeito muito mais colorido! 🎨🌈 Se tiver mais dúvidas, estou sempre por aqui prontinho para pincelar ideias."
  },
  {
    keywords: ["tchau", "adeus", "ate mais", "fui", "abraco", "ate logo", "beijo"],
    reply: "Até logo, meu amigo artista! Não se esqueça de continuar colorindo sua imaginação e espalhando arte por onde passar! 🎨👋"
  }
];

// Helper to check if array has content
function getRandomElement(arr?: string[] | null): string {
  if (!arr || arr.length === 0) return "";
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

export interface BotLocalResponse {
  reply: string;
  matchedKey?: string;
  image?: {
    imagemUrl: string;
    titulo: string;
    credito: string;
  };
}

function obterImagemDaGaleria(key: string): { imagemUrl: string; titulo: string; credito: string } | null {
  if (!key) return null;
  
  let targetKey = key.toLowerCase().trim();

  // Mapear chaves da biblioteca cultural que começam com danca_ para as chaves corretas da galeria
  if (targetKey.startsWith("danca_")) {
    const semDanca = targetKey.substring(6); // e.g. "danca_frevo" -> "frevo", "danca_bale" -> "bale"
    if (GALERIA_IMAGENS[semDanca]) {
      targetKey = semDanca;
    } else if (semDanca === "salao") {
      targetKey = "danca_de_salao";
    } else if (semDanca === "coco_pernambucano") {
      targetKey = "coco_pernambucano";
    }
  }
  
  // Se a chave existir diretamente na galeria (incluindo chaves específicas como bale, caboclinho, danca_contemporanea, etc.),
  // retornamos ela imediatamente para evitar que as regras de normalização de fallback a colapsem em "danca", "literatura", etc.
  if (GALERIA_IMAGENS[targetKey]) {
    const item = GALERIA_IMAGENS[targetKey];
    if (Array.isArray(item)) {
      const idx = Math.floor(Math.random() * item.length);
      return item[idx];
    }
    return item;
  }
  
  // Normalizar sub-chaves ou variações da biblioteca cultural para as chaves básicas da galeria
  if (targetKey === "danca_brasil" || targetKey === "danca_no_brasil" || targetKey === "historia_danca_brasil") {
    targetKey = "danca_brasil";
  } else if (targetKey === "desenho_brasil" || targetKey === "desenho_no_brasil" || targetKey === "historia_desenho_brasil") {
    targetKey = "desenho_brasil";
  } else if (targetKey.includes("literatura")) {
    targetKey = "literatura";
  } else if (targetKey.includes("musica")) {
    targetKey = "musica";
  } else if (targetKey.includes("arte")) {
    targetKey = "arte";
  } else if (targetKey.includes("danca")) {
    targetKey = "danca";
  } else if (targetKey.includes("poema") || targetKey.includes("poesia")) {
    targetKey = "poema";
  } else if (targetKey.includes("desenho") || targetKey.includes("esboco")) {
    targetKey = "desenho";
  } else if (targetKey.includes("pintura")) {
    targetKey = "pintura";
  } else if (targetKey.includes("teatro") || targetKey.includes("palco")) {
    targetKey = "teatro";
  } else if (targetKey.includes("caboclinho")) {
    targetKey = "caboclinho";
  }

  const item = GALERIA_IMAGENS[targetKey];
  if (!item) return null;
  if (Array.isArray(item)) {
    const idx = Math.floor(Math.random() * item.length);
    return item[idx];
  }
  return item;
}

// 3. Builds a customized, structured conversational response natively using metadata parameters
export function construirRespostaLocal(item: any, mensagemOriginal: string): string {
  if (item && item.resposta_direta) {
    return item.resposta_direta;
  }
  const msgNorm = normalizarTexto(mensagemOriginal);
  const msgLower = mensagemOriginal.toLowerCase();
  
  const pInicio = getRandomElement(item.inicio);
  const pAcolhimento = getRandomElement(item.acolhimento);
  const pExplicacaoCurta = getRandomElement(item.explicacao_curta);
  const pExplicacaoAprofundada = getRandomElement(item.explicacao_aprofundada);
  const pCuriosidade = getRandomElement(item.curiosidade);
  const pInteracao = getRandomElement(item.interacao);
  const pAtividade = getRandomElement(item.atividade);
  const pFinal = getRandomElement(item.final);
  
  let resposta = "";
  
  // A. Welcome Intro
  if (pInicio) {
    resposta += pInicio;
  }
  if (pAcolhimento) {
    resposta += " " + pAcolhimento;
  }
  
  // B. Body Explanations (Short + Optional elaboration)
  resposta += "\n\n";
  const querAprofundar = msgNorm.includes("aprofund") || msgNorm.includes("mais sobre") || msgNorm.includes("detalhe") || msgNorm.includes("historia") || msgNorm.includes("fale mais") || msgNorm.includes("explicar melhor");
  
  if (querAprofundar && pExplicacaoAprofundada) {
    resposta += pExplicacaoAprofundada;
  } else if (pExplicacaoCurta) {
    resposta += pExplicacaoCurta;
    // For general flow, merge a portion of extended content 60% of the time to keep learning rich
    if (pExplicacaoAprofundada && !querAprofundar && Math.random() > 0.4) {
      resposta += " " + pExplicacaoAprofundada;
    }
  }
  
  // C. Fun Facts (Fascinating Curiosities)
  if (pCuriosidade) {
    resposta += `\n\n💡 **Curiosidade Fantástica:** ${pCuriosidade}`;
  }
  
  // D. Drawing/Acting Activities (Draws a creative challenge)
  const pediuAtividade = msgNorm.includes("atividade") || msgNorm.includes("desafio") || msgNorm.includes("tarefa") || msgNorm.includes("brincadeira") || msgNorm.includes("fazer") || msgNorm.includes("desenha");
  if (pAtividade && (pediuAtividade || Math.random() > 0.3)) {
    resposta += `\n\n🎨 **Desafio do Candinho:** ${pAtividade}`;
  }
  
  // E. Interaction Prompts / Engaging Questions
  if (pInteracao) {
    resposta += `\n\n💬 ${pInteracao}`;
  }
  
  // F. Closure
  if (pFinal) {
    resposta += " " + pFinal;
  }
  
  return resposta.trim();
}

// 4. Formats a supportive auto-layout with categorized suggestions when queries do not match
export function sugerirTemasAlternativos(): string {
  const categorias = {
    pintores: {
      titulo: "Pintores Brasileiros Famosos 🇧🇷",
      itens: ["Cândido Portinari 🎨", "Tarsila do Amaral 🌸"]
    },
    dancas: {
      titulo: "Danças e Ritmos Nacionais 💃🩰",
      itens: ["Balé", "Hip Hop", "Frevo", "Ciranda", "Carimbó", "Funk", "Maracatu", "Capoeira", "Caboclinho"]
    },
    artes_visuais: {
      titulo: "Conceitos de Artes Visuais 📐",
      itens: ["Linha e Ponto", "Formas", "Espaço", "Textura", "Cores Quentes", "Cores Frias", "Cores Primárias", "Cores Secundárias", "Luz e Sombra", "Perspectiva"]
    },
    artes_avancadas: {
      titulo: "Técnicas Modernas & Mídia 📸",
      itens: ["Arte Abstrata", "Arte Figurativa", "Grafite", "Muralismo", "Fotografia", "Animação", "Stop Motion", "Pixel Art", "Arte Digital", "Quadrinhos (HQ)"]
    },
    imaginacao: {
      titulo: "Criatividade & Imaginação 🦁🦄",
      itens: ["Animais Mágicos", "Desenho Fácil", "Super-Heróis", "Cores Malucas", "Desenhar Animais"]
    },
    diversao: {
      titulo: "Diversão & Mistérios da Arte 🎭💡",
      itens: ["Me conta uma piada 🎭", "Curiosidades sobre Arte 💡", "Você sabia? ✨", "Ideia brilhante 🌟"]
    }
  };

  let txt = "Uau, que pergunta criativa! Ainda estou misturando e carregando as cores na minha paleta e não encontrei exatamente sobre esse tema... 🎨👨‍🎨\n\n" +
            "Mas sabia que eu adoro conversar sobre esses outros assuntos? Escolha uma destas tintas fantásticas do meu acervo para descobrirmos juntos:\n\n";

  for (const key in categorias) {
    const cat = (categorias as any)[key];
    txt += `✨ **${cat.titulo}:**\n`;
    // We mix and grab up to 4 elements randomly to make the screen rich but clean
    const shuffled = [...cat.itens].sort(() => 0.5 - Math.random()).slice(0, 4);
    txt += `  • _${shuffled.join(", ")}_\n\n`;
  }

  txt += "💬 Digite o nome de qualquer uma dessas artes e vamos começar nossa aventura maravilhosa! 🚀";
  return txt;
}

// 5. Unbundled matching engine that handles conversational dialog flows offline
export const PIADAS_CANDINHO: string[] = [
  "Por que o lápis foi para a escola? Para aprender a desenhar melhor!",
  "O que o pincel disse para a tinta? Vamos colorir o mundo!",
  "Por que o artista ficou feliz? Porque teve uma ideia brilhante!",
  "Qual é o animal que gosta de pintar? O gato-artista!",
  "Por que a folha de papel estava animada? Porque ia virar uma obra de arte!",
  "O que o desenho falou para o artista? Obrigado por me dar vida!",
  "Por que o quadro foi ao médico? Porque estava sem cor!",
  "O que a tinta disse para o pincel? Vamos trabalhar juntos!",
  "Qual é a dança favorita do lápis? O rabisco!",
  "Por que o artista levou uma escada? Para alcançar novas ideias!",
  "O que o caderno disse? Estou cheio de ideias!",
  "Por que o lápis não briga? Porque ele prefere desenhar a paz!",
  "O que o pincel faz no fim de semana? Pinta e borda!",
  "Por que a tinta ficou famosa? Porque era muito colorida!",
  "Qual é o superpoder do artista? Transformar ideias em desenhos!",
  "Por que o desenho foi para a festa? Para se expressar!",
  "O que o artista come? Ideias criativas!",
  "Por que o papel não reclama? Porque ele aceita tudo!",
  "Qual é o instrumento do pintor? O pincel!",
  "Por que o artista gosta de cores? Porque elas contam histórias!",
  "O que o lápis falou? Vamos criar algo novo!",
  "Por que o desenho ficou bonito? Porque foi feito com carinho!",
  "O que o pincel disse? Hoje é dia de arte!",
  "Por que o artista sorri? Porque ama criar!",
  "Qual é a matéria favorita do artista? Artes!",
  "O que a cor disse? Vamos alegrar tudo!",
  "Por que o artista não desiste? Porque sempre tenta de novo!",
  "O que o quadro disse? Eu sou uma obra-prima!",
  "Por que o lápis é amigo de todos? Porque ele ajuda a criar!",
  "Qual é o segredo da arte? Criar com o coração!"
];

export const CURIOSIDADES_DESENHO: string[] = [
  "Antes de existirem cadernos, as pessoas já pintavam nas cavernas, como nas pinturas de Caverna de Altamira, usando terra e carvão. 🎨",
  "Leonardo da Vinci desenhava máquinas voadoras séculos antes de o avião existir. ✈️",
  "Vincent van Gogh gostava de pintar com cores fortes para mostrar sentimentos. Pintou céus cheios de estrelas e girassóis brilhantes. 🌌",
  "Michelangelo esculpiu e pintou obras gigantes. Acreditava que as figuras já estavam escondidas dentro da pedra. 🗿",
  "Raffaello Sanzio pintava pessoas calmas e harmoniosas. Suas obras parecem organizadas e tranquilas. 👼",
  "Leonardo da Vinci amava desenhar, pintar e inventar. Observava tudo com muita curiosidade. 🔍",
  "Romero Britto usa muitas cores alegres e formas simples. Suas obras parecem festas desenhadas. 🎈",
  "Djanira da Motta e Silva pintava o dia a dia das pessoas, o trabalho e as tradições do Brasil. 🇧🇷",
  "Frida Kahlo pintava a si mesma para contar sua história. Mostrava sentimentos com coragem. 🌺",
  "Salvador Dalí criava imagens que parecem sonhos estranhos e divertidos. ⏰",
  "Caravaggio gostava de contrastes fortes entre luz e sombra para contar histórias. 🔦",
  "Tarsila do Amaral pintou o Brasil com cores vivas e formas diferentes, inspiradas na imaginação. 🎨",
  "Ivan Cruz retratava crianças brincando de amarelinha, pipa e roda. 🪁",
  "Candido Portinari mostrou em suas pinturas a vida das pessoas simples e trabalhadoras. 👨‍🌾",   
  "Henri Matisse amava cores alegres e recortes de papel que viravam arte. ✂️",
  "René Magritte gostava de fazer a gente pensar: será que tudo é o que parece? 🧐",
  "Claude Monet pintava a natureza observando a luz do sol em diferentes momentos. ☀️",
  "Georges Seurat criava imagens usando muitos pontinhos coloridos. 🔵",
  "Edgar Degas adorava desenhar bailarinas em movimento. 🩰",
  "Edvard Munch usava a pintura para mostrar emoções fortes. 😱",
  "Rembrandt pintava rostos cheios de expressão e emoção. 🎭",
  "Hélio Oiticica criava obras para as pessoas entrarem, tocarem e participarem. 🕺",
  "Di Cavalcanti mostrava festas, músicas e pessoas do Brasil. 🎉",
  "José Ferraz de Almeida Júnior pintava a vida no interior, com cenas simples do cotidiano. 🌾",
  "Georgina de Albuquerque retratava scenes históricas e momentos importantes do Brasil. 📜",
  "Pedro Américo criou grandes pinturas que contam a história do país. ⚔️",
  "Lasar Segall falava sobre sentimentos, viagens e desafios das pessoas. 🌍",
  "Alfredo Volpi ficou famoso por pintar bandeirinhas coloridas. 🏠",
  "Beatriz Milhazes mistura cores, flores e formas inspiradas na cultura brasileira. 🌼"
];

export const CURIOSIDADES_ARTE_GERAL: string[] = [
  "O grafite transforma muros em galerias ao ar livre. 🧱",
  "Banksy cria arte urbana misteriosa e cheia de mensagens. 🕵️",
  "Alguns artistas pintam com os pés ou com a boca, mostrando que há muitas formas de criar. 🦶",
  "Museus guardam obras antigas, como o Museu do Louvre. 🏛️",
  "No Brasil, o MASP exibe obras suspensas em suportes transparentes. 🖼️",
  "A arte pode misturar tecnologia e luz. 💡",
  "Quadrinhos também são arte, combinando desenho e narrativa. 📚",
  "Filmes misturam teatro, música, figurino e artes visuais. 🎬",
  "A arte ajuda a contar a história de um povo. 📖",
  "Crianças também podem expor seus trabalhos em mostras escolares. 🏫",
  "Muitos artistas erravam muito antes de acertar. ❌",
  "A prática é mais importante que o talento. 💪",
  "Cada cultura tem sua própria forma de arte. 🌍",
  "A arte pode denunciar injustiças. ✊",
  "A arte pode celebrar festas e tradições. 🎉",
  "Existem orquestras formadas só por crianças. 🧒",
  "O corpo é instrumento, pincel e palco ao mesmo tempo. 🧘",
  "Imaginação é um músculo que cresce quando usamos. 🧠",
  "Toda obra começa com uma ideia pequena. 💡",
  "Quando uma criança cria arte, ela não copia o mundo, ela recria. ✨"
];

export const CURIOSIDADES_DANCA: string[] = [
  "O balé clássico nasceu nas cortes da Europa e ficou famoso com companhias como o Bolshoi Ballet. 🩰",
  "A bailarina brasileira Ana Botafogo levou o balé brasileiro aos palcos internacionais. 🌟",
  "A dança moderna surgiu quando artistas quiseram movimentos mais livres, como propôs Martha Graham. 💃",
  "Muitas danças brasileiras nasceram das culturas africanas, indígenas e europeias misturadas. 🇧🇷",
  "Em espetáculos como 'O Lago dos Cisnes', o corpo conta a história sem precisar falar. 🦢"
];

export const CURIOSIDADES_TEATRO: string[] = [
  "O teatro começou na Grécia Antiga, há mais de 2.500 anos, em festas dedicadas ao deus Dionísio. 🎭",
  "Os gregos criaram dois grandes estilos: Tragédia (histórias sérias) e Comédia (histórias engraçadas).",
  "O Teatro de Epidauro, na Grécia, existe até hoje e tem uma acústica incrível! Você consegue ouvir um sussurro no palco lá do último degrau.",
  "No teatro, o palco pode virar floresta, castelo, escola ou qualquer lugar que a imaginação quiser. 🌳",
  "Teatro de sombras é uma forma antiga de contar histórias usando silhuetas projetadas em uma tela iluminada."
];

export const CURIOSIDADES_CANDINHO: string[] = [
  "A pintura Mona Lisa é famosa pelo sorriso misterioso. 🙂",
  "Van Gogh vendeu apenas um quadro enquanto estava vivo. 🌻",
  "O Abaporu é uma das obras mais importantes da arte brasileira. 🎨",
  "Os primeiros desenhos da história foram feitos em cavernas. 🛖",
  "Alguns artistas pintam usando os dedos, não pincéis. 🖐️",
  "O grafite é uma forma de arte urbana muito importante. 🧱",
  "Pablo Picasso sabia desenhar muito bem desde criança. 👶",
  "Existem esculturas feitas de gelo e até de areia. 🧊",
  "As cores podem mudar o nosso humor. 🌈",
  "A arte pode ser feita com qualquer material, até lixo reciclado. ♻️",
  "O teatro começou há milhares de anos na Grécia antiga. 🎭",
  "Algumas danças contam histórias sem usar palavras. 🩰",
  "O samba é considerado patrimônio cultural do Brasil. 🇧🇷",
  "Os artistas indígenas usam a natureza como inspiração. 🌾",
  "Existem músicas feitas só com sons do corpo. 🥁",
  "A arte pode ser encontrada nas ruas, museus e até na natureza. 🏛️",
  "Alguns quadros famosos valem milhões de reais. 💰",
  "A arte ajuda as pessoas a expressar sentimentos. ❤️",
  "O cinema também é considerado uma forma de arte. 🎬",
  "Existem pinturas feitas em paredes gigantes chamadas murais. 🧱",
  "O balé surgiu há muitos anos na Europa. 🩰",
  "O maracatu mistura música, dança e tradição. 🥁",
  "O desenho é uma das formas mais antigas de arte. ✏️",
  "Alguns artistas criam obras com luz e sombra. ☀️",
  "A fotografia também é uma forma de arte. 📷",
  "A arte pode contar histórias sem usar palavras. 🤫",
  "O corpo humano pode ser usado como forma de arte. 🧘",
  "Existem museus gigantes em várias partes do mundo. 🏛️",
  "A arte pode ensinar sobre história e cultura. 📚",
  "Todo mundo pode ser artista, basta criar! ✨",
  ...CURIOSIDADES_DESENHO,
  ...CURIOSIDADES_ARTE_GERAL,
  ...CURIOSIDADES_DANCA,
  ...CURIOSIDADES_TEATRO
];

export const PORTINARI_INTENTS = [
  {
    id: "portinari_apresentacao",
    keywords: ["candinho", "portinari", "candido portinari", "quem foi candido", "pintor brasileiro", "artista brasileiro", "por que o nome candinho", "por que se chama candinho", "porque se chama candinho", "porque candinho", "por que candinho", "origem do nome", "se chama candinho"],
    reply: "Oi! Sou inspirado no Candido Portinari, um pintor brasileiro muito famoso! 🇧🇷 Ele nasceu em Brodowski, interior de São Paulo, e pintou mais de 5 mil quadros! Adorava pintar crianças brincando, café e a vida no campo. Sabia que o apelido dele era Candinho igual a mim? Que legal! 🎨"
  },
  {
    id: "infancia_portinari",
    keywords: ["infancia candido", "candinho crianca", "portinari quando crianca", "como era portinari crianca", "infancia portinari", "quando crianca", "portinari como crianca", "portinari crianca"],
    reply: "O Candinho de verdade adorava jogar bola, soltar pipa e brincar no interior! 🌾 Desde pequeno já desenhava no chão de terra e ajudava os pais na plantação de café. E você, do que mais gosta de brincar?"
  },
  {
    id: "obras_portinari",
    keywords: ["obras portinari", "quadros portinari", "pinturas portinari", "portinari obras famosas", "obras de portinari", "quadros de portinari", "pinturas de portinari", "paineis da guerra e da paz", "guerra e paz", "meninos soltando pipa", "retirantes"],
    reply: "Portinari pintou muitas obras lindas! ✨ As mais famosas são: 'O Café' ☕, 'Os Retirantes' 🚶, 'Meninos Soltando Pipa' 🪁 e os painéis 'Guerra e Paz' 🕊️ que ficam lá na sede da ONU! É de arrepiar de tão lindo! Qual dessas obras você gostaria de conhecer primeiro?"
  }
];

export const atividadesTriste = [
  "Ah, meu amigo, sinto muito que você esteja se sentindo triste hoje. 💛 Às vezes, o nosso coração fica cinzento como um céu nublado, e tudo bem se sentir assim. Quer me contar o que aconteceu? Estou aqui prontinho para te ouvir com todo carinho do mundo.",
  "Estou te enviando um abraço de urso bem apertado daqui! 🧸 Sabia que pintar e desenhar são ótimos amigos para as horas tristes? O papel aceita qualquer cor, traço ou sentimento. Você prefere desabafar e me contar o que te deixou triste ou prefere que eu te ensine um desenho bem lindo para distrair a mente?",
  "Ficar tristinho faz parte da nossa paleta de emoções, e não há problema nenhum nisso. ✨ Quer falar sobre o que aconteceu? Se preferir não falar, tudo bem também! Podemos apenas jogar um jogo de adivinhar cores ou fazer um desenho calmo juntos. O que você acha?",
  "Ah, meu amigo. Quando eu fico tristinho, gosto de pegar cores quentes e desenhar um grande sol brilhante! Sabia que Van Gogh pintava girassóis amarelos bem luminosos para alegrar o coração dele? Que tal fazermos um desenho livre usando as suas cores alegres favoritas? Conta para mim se você quer desenhar algo bem quentinho hoje! 🌻🔆"
];

export const atividadesTedio = [
  "Tédio? Ah, que oportunidade fantástica para soltar a imaginação! Sabia que quando os artists estão sem saber o que fazer, eles espalham rabiscos na folha e tentam achar formas neles? Que tal rabiscarmos uma teia maluca e pintarmos cada pedacinho com uma cor primária? 🎨🤩",
  "Sai pra lá, tédio! Vamos brincar de desenhar com os olhos vendados ou com a outra mão? É super engraçado! Tente desenhar um gato-marinho com a mão que você não costuma escrever e me conte se ficou divertido! 🐈‍⬛🍭",
  "Sabia que você pode fazer um brinquedo com rolo de papel higiênico ou papelão? Você pode pintar e criar um binóculo de explorador de arte! O que você quer explorar no quarto com o seu binóculo mágico hoje? 🔭✨"
];

export const atividadesRaiva = [
  "Uau, a raiva é como uma tinta vermelha muito forte e quente que derrama em cima da nossa paleta! 😡 É normal sentir raiva às vezes, mas não é bom guardar ela todinha no peito. Quer desabafar e me contar o que aconteceu para te deixar bravo assim?",
  "Respire bem fundo comigo... como se fôssemos encher o balão mais lindo do mundo! 🎈 Quando a raiva vem, ela quer que a gente aja por impulso. Quer falar sobre o que te deixou irritado? Se preferir, podemos pegar um papel e rabiscar com muita força para soltar essa energia toda!"
];

export const atividadesAngustia = [
  "Ah, meu amigo, sentir um aperto no peito é bem chato, né? É como se o nosso desenho estivesse todo rabiscado. Quer conversar sobre o que está te deixando assim? Se colocar em palavras ajudar a tirar esse peso, eu sou todo ouvidos! 💛",
  "Eu entendo você de verdade. Às vezes o coração fica apertadinho feito um casulo. Quer me contar o que aconteceu para te deixar com essa angústia? Ou você prefere que eu te mostre um desafio de arte bem calmo e fofo para a gente clarear os pensamentos? 🦋✨"
];

export const atividadesFeliz = [
  "Que notícia maravilhosa! A sua alegria brilha mais que o amarelo do sol do Monet! 🌟 Vamos comemorar essa felicidade desenhando um palhaço bem colorido ou uma festa com muitos confetes no papel? Pode usar giz de cera, hidrocor e purpurina! Me conte o que você mais gosta de desenhar quando está feliz! 🎉🎨",
  "Uau! A felicidade é a melhor colagem do nosso painel! Que tal celebrarmos dançando sua música favorita ou cantando uma cantiga de roda como 'Cirandinha' comigo? Se quiser, também podemos criar um personagem feliz para morar na sua imaginação! Vamos desenhar? 🚀✨"
];

export const atividadesAnsioso = [
  "Estou aqui bem pertinho de você, respire fundo comigo... Inspira o ar bem devagar... e solta... 🌬️ Sabe, a ansiedade é como um turbilhão de vento bagunçando os nossos pincéis. Quer me contar o que está te deixando tão preocupado ou ansioso hoje? Falar ajuda a acalmar os pensamentos.",
  "Respire com calma, meu pequeno grande artista. 🍀 Às vezes o nosso coração bate rápido demais, parecendo uma bateria barulhenta. Eu estou aqui para te ouvir! Quer falar sobre o que aconteceu para te deixar assim? Ou se preferir, podemos fazer um exercício de desenho bem calminho para relaxar.",
  "Estou aqui com você, respire com calma... Sabia que a música é ótima para acalmar os pensamentos agitados? Deixe-me cantar para nós. Que tal tentarmos desenhar círculos e espirais bem lentos na folha de papel, um dentro do outro? Ajuda muito a relaxar. Quer tentar agora? 🌀🌾",
  "Respire fundo, sinta o ar entrando e saindo feito as ondas calmas do mar que a Tarsila pintava. Que tal desenharmos um jardim calmo com flores azuis e verdes bem fresquinhas? Essas cores frias ajudam a tranquilizar o nosso coração. Me diga qual flor você quer plantar no nosso jardim de papel hoje! 🌸🍀"
];

const CONHECIMENTO_CANDINHO: ConhecimentoItem[] = [
  // ===== RESPOSTAS EMOCIONAIS HUMANIZADAS =====
  { 
    palavras: ['estou triste', 'triste', 'me sinto triste', 'sentindo triste', 'tristeza', 'saudade', 'melancolia'], 
    resposta: () => getRandomElement(atividadesTriste),
    matchedKey: 'tristeza'
  },
  { 
    palavras: ['estou entediado', 'entediado', 'tédio', 'tedio', 'sem nada para fazer'], 
    resposta: () => getRandomElement(atividadesTedio),
    matchedKey: 'tedio'
  },
  { 
    palavras: ['estou com raiva', 'raiva', 'com raiva', 'zangado', 'bravo', 'raivoso'], 
    resposta: () => getRandomElement(atividadesRaiva),
    matchedKey: 'raiva'
  },
  { 
    palavras: ['estou feliz', 'feliz', 'alegre', 'contente', 'alegria', 'felicidade'], 
    resposta: () => getRandomElement(atividadesFeliz),
    matchedKey: 'alegria'
  },
  { 
    palavras: ['angustia', 'angústia', 'angustiado', 'angustiada', 'aperto no peito', 'sinto angustia'], 
    resposta: () => getRandomElement(atividadesAngustia),
    matchedKey: 'angustia'
  },
  { 
    palavras: ['estou ansioso', 'ansioso', 'ansiedade', 'nervoso'], 
    resposta: () => getRandomElement(atividadesAnsioso)
  },

  // ===== TÓPICOS DE CONVERSA SOBRE FAKE NEWS =====
  {
    palavras: ['fake news', 'noticias falsas', 'noticia falsa', 'fakenews', 'mentiras na internet', 'mentira na internet', 'noticias mentirosas', 'o que e fake news'],
    resposta: '📰 **O que é Fake News?**\n\n' +
      'Imagine que uma notícia é como uma carta. Ela deve contar a verdade sobre algo que aconteceu.\n\n' +
      'Fake News são notícias falsas, criadas para enganar as pessoas. Às vezes parecem verdadeiras, mas foram inventadas ou modificadas de propósito.\n\n' +
      'Algumas fake news querem:\n' +
      '😲 **Chamar atenção** para ganhar cliques.\n' +
      '💰 **Ganhar dinheiro** com propagandas.\n' +
      '😡 **Fazer as pessoas brigarem** por bobeira.\n' +
      '🤥 **Enganar alguém** de propósito.\n\n' +
      'Nem toda informação errada é fake news. Às vezes uma pessoa apenas se confundiu. A fake news normalmente é criada ou compartilhada sabendo que pode enganar outras pessoas.\n\n' +
      '💡 **Quer descobrir mais sobre isso?** Me pergunte sobre:\n' +
      '• *Tipos de Fake News* (como elas são feitas)\n' +
      '• *Fake News na Arte* (mentiras do mundo artístico)\n' +
      '• *Como se proteger das Fake News* (seja um investigador!)\n' +
      '• *Como a Arte ajuda a identificar Fake News* (o super olhar de artista!)',
    matchedKey: 'fake_news'
  },
  {
    palavras: ['tipos de fake news', 'quais os tipos de fake news', 'exemplos de fake news', 'como sao criadas as fake news', 'categorias de fake news'],
    resposta: '🧩 **Tipos de Fake News**\n\n' +
      'Existem várias maneiras de criar e espalhar mentiras na internet! Olha só os principais tipos:\n\n' +
      '1️⃣ **Notícia totalmente inventada:** Uma história de mentira que nunca aconteceu. Exemplo: *"Encontraram um quadro pintado por um dinossauro."* Isso é impossível!\n' +
      '2️⃣ **Foto fora de contexto:** Uma foto real é usada para contar uma mentira. Exemplo: Uma pintura foi roubada em 2015, mas alguém publica a foto dizendo que o roubo aconteceu hoje. A foto existe, mas o tempo e a história estão errados!\n' +
      '3️⃣ **Foto ou imagem alterada:** Alguém muda a foto usando edição de computador. Exemplo: Colocam um chapéu ou óculos escuros em uma estátua famosa e dizem que ela sempre foi assim.\n' +
      '4️⃣ **Título enganoso:** O título faz parecer algo terrível ou incrível, mas a notícia de verdade é simples. Exemplo: Título *"Museu fecha para sempre!"* quando na verdade ele só fechou dois dias para limpeza.\n' +
      '5️⃣ **Vídeo editado:** Cortam partes de um vídeo para mudar o que a pessoa disse ou parecer que ela estava brava.\n' +
      '6️⃣ **Fake News feita com Inteligência Artificial (IA):** Programas modernos que criam imagens, vozes ou vídeos falsos mas que parecem reais (chamados de *deepfakes*).\n\n' +
      '💡 **Quer saber como se defender?** Me pergunte sobre *Como se proteger das Fake News* ou sobre as *Regras de Ouro*!',
    matchedKey: 'tipos_fake_news'
  },
  {
    palavras: ['fake news na arte sem ia', 'fake news na arte', 'mentiras sobre arte', 'mentiras de arte', 'historias falsas de arte', 'boatos de arte'],
    resposta: '🎨 **Fake News na Arte (sem IA)**\n\n' +
      'As notícias falsas no mundo da arte não são de hoje! Olha só esses exemplos bem curiosos de boatos criados por pessoas:\n\n' +
      '🖼️ **Exemplo 1:** Alguém pega a pintura Mona Lisa, edita um celular na mão dela e escreve: *"Leonardo da Vinci já imaginava os celulares em 1503!"* Isso é super falso!\n\n' +
      '🖌️ **Exemplo 2:** Uma pessoa publica uma pintura qualquer na internet dizendo: *"Essa obra raríssima foi feita por Tarsila do Amaral!"*, mas na verdade foi pintada por outro artista menos conhecido apenas para chamar atenção.\n\n' +
      '🏺 **Exemplo 3:** Uma escultura preciosa de um museu se quebra acidentalmente durante uma mudança de sala. Na internet, alguém malvado escreve: *"Um visitante mal-educado destruiu a obra!"* para provocar raiva e fofocas.\n\n' +
      '👉 **Quer saber como a tecnologia moderna também é usada para isso?** Pergunte-me sobre *Fake News na Arte usando IA*!',
    matchedKey: 'fake_news_arte_sem_ia'
  },
  {
    palavras: ['fake news na arte usando ia', 'fake news de ia na arte', 'ia na arte fake news', 'deepfakes de arte', 'obras de ia falsas', 'van gogh ia fake', 'pintura falsa de ia'],
    resposta: '🤖 **Fake News na Arte usando Inteligência Artificial (IA)**\n\n' +
      'A Inteligência Artificial consegue criar pinturas e fotos incrivelmente parecidas com as reais, e algumas pessoas usam isso para enganar! Olha só os exemplos:\n\n' +
      '🌻 **Exemplo 1 (O Van Gogh Perdido):** Uma IA cria uma linda pintura no estilo de Van Gogh. Depois, alguém publica na internet: *"Descobriram uma obra secreta perdida de Van Gogh em um porão!"* Mas a obra foi feita por computador ontem e nunca existiu na vida real!\n\n' +
      '🏢 **Exemplo 2 (MASP Azul):** A IA cria uma foto perfeita mostrando o museu MASP completamente pintado de azul brilhante. Na verdade, isso nunca aconteceu!\n\n' +
      '👴 **Exemplo 3 (Picasso Pintando Hoje):** Criam um vídeo realista por computador onde parece que Picasso está pintando um quadro moderno. Como Picasso já faleceu, sabemos que esse vídeo é um *deepfake*!\n\n' +
      '🔥 **Exemplo 4 (Museu pegando fogo):** Alguém gera uma foto realista de um museum famoso em chamas. As pessoas se assustam e compartilham correndo, mas o incêndio nunca aconteceu!\n\n' +
      '💡 *Lembre-se:* A IA é uma ferramenta fantástica para ajudar artistas a criar desenhos, músicas e histórias incríveis. O problema não é a IA, mas quando alguém usa essa inteligência para criar mentiras!\n\n' +
      '👉 **Quer saber o segredo para identificar imagens de IA?** Me pergunte *Como descobrir imagem de IA*! 🕵️',
    matchedKey: 'fake_news_arte_ia'
  },
  {
    palavras: [
      'ia faz fake news', 'ia produz fake news', 'ia gera fake news', 'inteligencia artificial faz fake news',
      'inteligencia artificial gera fake news', 'inteligencia artificial produz fake news', 'como ia cria fake news',
      'ia cria fake news', 'ia e fake news', 'deepfakes', 'deepfake', 'como a ia gera fake news',
      'como a ia faz fake news', 'ia faz fakenews', 'ia cria fakenews'
    ],
    resposta: '🤖 **A Inteligência Artificial (IA) faz Fake News?**\n\n' +
      'Sim, a Inteligência Artificial pode criar Fake News incríveis, mas com uma ajuda humana! 🧑‍💻✨ Deixe-me explicar como funciona esse mistério:\n\n' +
      '🎨 **O que a IA faz?**\n' +
      'A IA é como um desenhista ou escritor super-rápido do computador. Ela estuda milhões de fotos, textos e sons reais. Com isso, ela consegue imitar a realidade perfeitamente!\n\n' +
      '🧠 **Como ela gera mentiras?**\n' +
      'Se alguém pedir para a IA: *"Desenhe o presidente jogando futebol em Marte"*, ela vai juntar pedaços de fotos e criar uma imagem novinha que parece 100% real! Quando criam vídeos e vozes falsas perfeitas assim, chamamos de **Deepfake**.\n\n' +
      '⚙️ **Por que a IA faz isso?**\n' +
      'A IA não faz isso por maldade. Ela não tem sentimentos e não sabe o que é verdade ou mentira. Ela apenas faz o que os humanos pedem! O problema é quando pessoas usam essa tecnologia mágica para criar boatos e enganar os outros.\n\n' +
      '🕵️ **Quando desconfiar e como se proteger?**\n' +
      'Sempre que vir um vídeo super espantoso ou uma imagem inacreditável (como um jacaré gigante de gravata pintando um quadro no MASP), use o seu superpoder de detetive! Procure pequenos defeitos (como dedos extras ou letras borradas) e pesquise se jornais confiáveis também estão falando sobre isso.\n\n' +
      '💡 **Quer ver exemplos disso no mundo da arte?** Pergunte-me sobre *Fake News na Arte usando IA*! 🎨',
    matchedKey: 'ia_gera_fake_news'
  },
  {
    palavras: [
      'como se proteger', 'como me protejo', 'me proteger de fake news', 'evitar fake news', 
      'proteger de noticias falsas', 'como saber se e fake news', 'como me proteger das fake news',
      'como evito', 'como checo', 'como sei se e fake news', 'como evito fake news', 
      'como checo fake news', 'como checar fake news', 'como sei se e mentira', 'como descobrir fake news', 
      'como identificar fake news', 'como saber se e mentira', 'como checar', 'como evitar'
    ],
    resposta: '🛡️ **Como me proteger das Fake News?**\n\n' +
      'Imagine que você é um detetive da internet! 🕵️ Antes de acreditar em qualquer notícia ou imagem chocante que aparecer por aí, use a sua lupa e faça estas cinco perguntas mágicas:\n\n' +
      '🔍 **1. Quem publicou?**\n' +
      'Veja se a notícia veio de um jornal conhecido, de uma escola, de um museu ou de uma instituição confiável. Se não disser claramente quem escreveu ou de onde veio, desconfie na hora!\n\n' +
      '📅 **2. Quando aconteceu?**\n' +
      'Às vezes, uma notícia que é totalmente verdadeira, mas que aconteceu há dez anos, é publicada hoje como se fosse nova só para assustar. Sempre procure a data!\n\n' +
      '📚 **3. Outras pessoas também estão falando sobre isso?**\n' +
      'Se um dinossauro de verdade tivesse aparecido no MASP, todos os canais de TV e jornais estariam mostrando! Se a notícia só existe em um único link ou post perdido, tenha muito cuidado.\n\n' +
      '🎨 **4. A imagem parece estranha?**\n' +
      'Olhe bem de pertinho com olhos de pintor! Procure por sombras que vão para lados diferentes, pessoas com mãos esquisitas (com dedos a mais ou a menos!), letras borradas ou rostos deformados. Esses são sinais de edição ou imagens feitas por IA!\n\n' +
      '❤️ **5. A notícia quer fazer você sentir medo ou muita raiva?**\n' +
      'As notícias falsas adoram mexer com o nosso coração para a gente compartilhar rápido sem pensar. Se um post te deixou muito assustado ou bravo, pare e respire fundo antes de enviar para alguém!\n\n' +
      '💡 **Quer saber como ficar seguro contra outras mentiras?** Pergunte-me sobre:\n' +
      '• *Como evitar golpes na internet?* 🔒\n' +
      '• *Como parar a propagação de mentiras?* 🌎',
    matchedKey: 'como_proteger_fake_news'
  },
  {
    palavras: ['como evitar golpes', 'evitar golpes na internet', 'como nao cair em golpes', 'golpes na internet', 'evitar fraudes', 'seguranca na internet', 'golpes com fake news', 'como posso evitar golpes'],
    resposta: '🔒 **Como evitar golpes na internet?**\n\n' +
      'Nem todos os golpes na internet usam fake news, mas quase todos começam com uma mentira! Para navegar seguro e proteger o seu computador e a sua família, siga estes conselhos valiosos:\n\n' +
      '❌ **Nunca clique em qualquer link!**\n' +
      'Mesmo que pareça uma mensagem super importante ou que venha de um amigo (pois o perfil dele pode ter sido invadido), não clique em links desconhecidos.\n\n' +
      '🔑 **Nunca conte sua senha!**\n' +
      'Sua senha é um segredo prejuízo. Nunca a conte para amigos de jogos, desconhecidos ou pessoas na internet que digam ser de bancos, suporte ou jogos.\n\n' +
      '📱 **Desconfie de mensagens urgentes!**\n' +
      'Os golpistas adoram criar pressa! Cuidado com avisos como *"Seu celular será bloqueado!"*, *"Você ganhou um prêmio incrível de graça!"* ou *"Clique agora!"*. Pare e pense antes de tomar qualquer atitude.\n\n' +
      '👨‍👩‍👧 **Peça ajuda a um adulto!**\n' +
      'Sempre que você ler uma mensagem estranha, ganhar um prêmio que não pediu ou ver algo que te deixe confuso, chame logo um adulto de confiança para olhar com você.\n\n' +
      '💳 **Nunca informe seus dados pessoais!**\n' +
      'Seu nome completo, escola onde estuda, documentos, senhas e cartões dos seus pais devem ser protegidos a sete chaves. Nunca preencha formulários suspeitos!\n\n' +
      '💡 **Que tal ajudar a deixar a internet limpa?** Pergunte-me sobre *O Jardim da Informação* 🌱 ou sobre *Como parar a propagação de fake news* 🌎!',
    matchedKey: 'evitar_golpes_internet'
  },
  {
    palavras: ['como parar a propagacao', 'como parar a propagação', 'como parar de espalhar', 'parar de espalhar', 'regra dos 5 p', 'regra dos 5p', 'nao compartilhar mentiras'],
    resposta: '🌎 **Como parar a propagação das Fake News?**\n\n' +
      'Cada um de nós é um super-herói na internet quando decide parar uma mentira! Antes de compartilhar qualquer vídeo ou mensagem engraçada ou assustadora, use a **Regra dos 5 P**:\n\n' +
      '🛑 **P**are:\n' +
      'Não clique no botão de compartilhar imediatamente. Dê um tempo para analisar.\n\n' +
      '🤔 **P**ense:\n' +
      'Será que isso faz sentido de verdade? Essa história é muito absurda?\n\n' +
      '🔎 **P**esquise:\n' +
      'Dê uma busca rápida e veja se outras fontes confiáveis e canais oficiais confirmam o que está escrito.\n\n' +
      '👨‍👩‍👧 **P**ergunte:\n' +
      'Se continuar com dúvida, converse com um professor, com o papai, a mamãe ou um adulto de confiança.\n\n' +
      '📤 **P**ublique somente se tiver certeza:\n' +
      'Se a resposta não for 100% clara... **Não compartilhe!** Guarde para você e quebre essa corrente de fofocas.\n\n' +
      '💡 **Quer ver uma comparação muito bonita com a natureza?** Pergunte-me sobre *O Jardim da Informação*! 🌱',
    matchedKey: 'parar_propagacao_fake'
  },
  {
    palavras: ['jardim da informacao', 'jardim da informação', 'o jardim da informacao', 'jardineiros da internet'],
    resposta: '🌱 **O Jardim da Informação**\n\n' +
      'Imagine que a internet inteira é um grande, lindo e colorido jardim compartilhado por todas as pessoas do mundo! 🏡✨\n\n' +
      '🌼 **As notícias verdadeiras são flores:** Elas embelezam o caminho, trazem conhecimento útil, perfumes de sabedoria e ajudam todo mundo a crescer saudável.\n\n' +
      '🌿 **As fake news são ervas daninhas:** Elas crescem rápido, sufocam as plantinhas boas, espalham espinhos de medo, raiva e mentira, bagunçando o nosso jardim.\n\n' +
      'Cada vez que alguém compartilha uma notícia sem verificar, está jogando sementes de ervas daninhas no quintal dos outros! 😢\n\n' +
      'Mas cada vez que você usa sua lupa de detetive e decide não espalhar algo suspeito, você arranca uma erva daninha e planta uma linda flor de verdade!\n\n' +
      'Nós todos somos os **jardineiros da internet!** Que tipo de sementes você quer espalhar hoje? 🌸🍀\n\n' +
      '💡 **Quer saber o que a arte tem a ver com isso tudo?** Pergunte-me sobre *O que a arte ensina sobre isso*! 🎨',
    matchedKey: 'jardim_da_informacao'
  },
  {
    palavras: ['o que a arte ensina sobre isso', 'o que a arte ensina', 'como a arte ajuda', 'arte e fake news', 'por que estudar arte ajuda', 'olhar de artista fake news'],
    resposta: '🎨 **O que a arte nos ensina sobre isso?**\n\n' +
      'Pode parecer surpreendente, mas aprender a desenhar, pintar ou esculpir transforma você em um detetive de fake news imbatível! 🕵️✨ A arte nos treina para ter um olhar apurado:\n\n' +
      '👀 **Observar com calma:** Um artista não olha de raspão; ele estuda os detalhes, a direção da luz, o formato das sombras e as expressões faciais. Isso te ajuda a ver se uma foto na internet foi alterada ou criada por computadores!\n\n' +
      '🧐 **Fazer perguntas:** Diante de uma obra de arte, nós perguntamos: *"Quem criou? Por que usou essa cor? O que ela quer transmitir?"* Essas são exatamente as mesmas perguntas que um bom investigador faz diante de uma notícia suspeita!\n\n' +
      '🎭 **Interpretar histórias:** A arte nos ensina que imagens contam histórias, mas que muitas delas são de ficção (como uma pintura de dragão!). Na internet, também precisamos distinguir o que é um fato real do que é imaginação ou brincadeira de alguém.\n\n' +
      '💭 **Pensar antes de concluir:** Duas pessoas podem ver significados diferentes na mesma tela. Isso nos ensina que as aparências enganam e que precisamos refletir e pesquisar antes de aceitar qualquer coisa como verdade absoluta.\n\n' +
      '🖌️ *Lema do Candinho:* **"Quem aprende a desenhar aprende a observar. Quem aprende a observar aprende a descobrir a verdade."** 🌟',
    matchedKey: 'arte_ensina_fake_news'
  },
  {
    palavras: ['detetive da arte', 'cinco perguntas magicas', '5 perguntas magicas', 'investigador da arte', 'perguntas do detetive'],
    resposta: '🕵️ **O Detetive da Arte!**\n\n' +
      'Imagine que existe um herói chamado **Detetive da Arte!** Ele tem uma lupa mágica e, sempre que vê uma imagem surpreendente na internet, ele faz as **5 perguntas mágicas** antes de acreditar:\n\n' +
      '1️⃣ 🔍 **Quem fez esta imagem?** (Qual é o nome do autor ou site?)\n' +
      '2️⃣ 📅 **Quando ela foi criada?** (Foi hoje ou é uma notícia velha de anos atrás?)\n' +
      '3️⃣ 📍 **Onde ela apareceu primeiro?** (Foi em um site sério ou num grupo de mensagem?)\n' +
      '4️⃣ 🎨 **Ela foi modificada ou editada?** (Tem cara de montagem ou filtro?)\n' +
      '5️⃣ 📚 **Outras fontes confiáveis confirmam?** (Outros detetives também viram e confirmaram?)\n\n' +
      'Se o Detetive da Arte não conseguir responder a essas perguntas, ele não compartilha e guarda sua lupa! Que tal ser um Detetive da Arte comigo hoje e investigar as imagens que você vê por aí? 🌟🔦',
    matchedKey: 'detetive_da_arte'
  },

  // ===== CONCEITOS GERAIS DE ARTE =====
  { 
    palavras: ['arte', 'o que é arte', 'definir arte', 'definição de arte'], 
    resposta: 'Arte é uma forma de expressão! Pode ser um desenho, pintura, dança, música, teatro… É o jeito das pessoas mostrarem sentimentos e ideias. 🎨',
    matchedKey: 'arte'
  },
  { 
    palavras: ['dança', 'danca', 'danças', 'dancas', 'dançar', 'o que é dança', 'o que é danca'], 
    resposta: 'A dança é a arte de mexer o corpo seguindo o ritmo de uma música! 🩰 É como desenhar no ar usando nossos passos, pulos e giros. Através da dança, celebramos a união, a alegria e a energia de estarmos todos juntos! Você gosta de dançar, meu amigo? 🌟💃',
    matchedKey: 'danca'
  },
  { 
    palavras: ['poema', 'poemas', 'poesia', 'poesias', 'verso', 'versos'], 
    resposta: 'A poesia é a arte de pintar usando palavras! 📝 Um poema é como uma música escrita, onde cada linha é um verso que rima e brinca com o som. Os poetas usam palavras doces e sentimentos para colorir o papel com amor e imaginação! ✨',
    matchedKey: 'poema'
  },
  { 
    palavras: ['literatura', 'o que é literatura'], 
    resposta: 'A literatura é a arte de escrever histórias mágicas e livros que nos levam a viajar no tempo e no espaço sem sair do lugar! 📚 É onde os livros reúnem os maiores tesouros da imaginação humana. Cada página lida é como uma nova cor que descobrimos na nossa mente!',
    matchedKey: 'literatura'
  },
  { 
    palavras: ['música', 'musica', 'músicas', 'musicas', 'o que é música', 'o que é musica'], 
    resposta: 'A música é a arte de combinar sons e silêncios de maneira linda! 🎶 É a pintura que entra pelos nossos ouvidos. Os instrumentos e as notas musicais cantam histórias e despertam sentimentos de alegria, calma e festa em nosso coração! 🎼🎷',
    matchedKey: 'musica'
  },
  { palavras: ['o que e vida', 'vida', 'o que e a vida', 'significado da vida'], resposta: '🌱 A vida é o maior e mais precioso pedaço de papel em branco que recebemos! Cada dia que vivemos é como uma pincelada única que damos nesse quadro. Para os artistas, a vida é expressar amor, brincar, cantar, observar a natureza e sorrir com os amigos. Tratar a vida com carinho é o desenho mais bonito que podemos criar! 🌈✨' },
  {
    palavras: ['desenho', 'o que é desenho', 'desenhos', 'esboço', 'esboco', 'esboços', 'esbocos'],
    resposta: 'Desenho é quando usamos lápis, caneta ou giz para criar linhas e formas. Dá para desenhar tudo o que a gente imagina! Existem vários tipos fascinantes de desenho, como de observação, realismo, mangá e caricatura. Quer saber mais sobre os tipos de desenho? Me pergunte: "quais os tipos de desenho?" 🖍️',
    matchedKey: 'desenho'
  },
  {
    palavras: ['pintura', 'técnicas de pintura', 'pinturas'],
    resposta: 'Na pintura, existem várias técnicas e estilos incríveis! Podemos pintar de forma realista, impressionista, abstrata, surrealista ou cubista, e usar tintas como guache, aquarela, acrílica ou óleo! Quer saber mais sobre estilos? Pergunte-me: "quais os estilos de pintura?" 🎨',
    matchedKey: 'pintura'
  },

  // ===== NOVOS FLUXOS DE MATERIAIS DE ARTE, DESIGN E PINTURA =====
  {
    palavras: ['materiais', 'materiais de arte', 'com o que desenhar', 'com o que pintar', 'material de pintura', 'material de desenho', 'materiais para arte', 'estojos'],
    resposta: '🎒 **Materiais de Arte do Candinho!**\n' +
      'Olha só que paleta incrível de ferramentas que os artistas usam para colorir e criar:\n\n' +
      '🎨 **Tintas:**\n' +
      '• **Tinta Guache:** É uma tinta colorida e fácil de usar. Tem boa cobertura e fica opaca quando seca. É indicada para papel, cartolina e atividades escolares! Curiosidade: pode ser misturada com outras cores para criar novas tonalidades.\n' +
      '• **Tinta Aquarela:** É uma tinta que usa bastante água e cria efeitos suaves e transparentes. É indicada para papéis próprios para aquarela. Curiosidade: quanto mais água você usar, mais clara ficará a pintura.\n' +
      '• **Tinta Acrílica:** É uma tinta resistente que seca rapidamente. É indicada para tela, madeira, papelão e papel. Curiosidade: depois de seca, ela não sai facilmente com água.\n' +
      '• **Tinta a Óleo:** É uma tinta usada por muitos artistas famosos. Seca bem devagar. É indicada para telas de pintura. Curiosidade: permite misturar cores por bastante tempo antes de secar.\n' +
      '• **Tinta para Tecido:** Foi criada especialmente para pintar roupas e tecidos. É indicada para camisetas, bolsas e panos. Curiosidade: depois de seca, a pintura resiste bravamente às lavagens!\n\n' +
      '✏️ **Lápis:**\n' +
      '• **Lápis Grafite:** É o lápis mais comum para escrever e desenhar. Curiosidade: existem lápis mais claros (como H ou HB) e mais escuros (como 2B, 4B ou 6B).\n' +
      '• **Lápis de Cor:** Serve para colorir desenhos com muitas cores. Curiosidade: misturando as cores com levezas diferentes, criamos novos tons fantásticos!\n' +
      '• **Lápis Aquarelável:** Pode ser usado como lápis de cor comum e também com água. Curiosidade: ao passar um pincel úmido pela pintura do lápis, o desenho ganha um lindo efeito de aquarela!\n' +
      '• **Lápis Carvão:** Produz traços escuros e muito expressivos. Curiosidade: é bastante usado para fazer sombras realistas e retratos bonitos.\n\n' +
      '✒️ **Canetas:**\n' +
      '• **Caneta Esferográfica:** É a caneta usada para escrever no dia a dia. Curiosidade: possui uma pequena esfera giratória na ponta que espalha a tinta de maneira uniforme.\n' +
      '• **Canetinha Hidrocor:** É colorida e ótima para desenhos infantis. Curiosidade: existem canetinhas com pontas finas para contornos e grossas para colorizar.\n' +
      '• **Caneta Marcador:** Tem traço forte e cores vibrantes. Curiosidade: é muito usada para destacar informações importantes e fazer cartazes.\n' +
      '• **Caneta Nanquim:** Produz linhas precisas, escuras e muito firmes. Curiosidade: é bastante utilizada em ilustrações profissionais e histórias em quadrinhos!\n\n' +
      '🧽 **Borrachas:**\n' +
      '• **Borracha Branca:** Apaga traços de lápis sem danificar o papel. Curiosidade: é a mais usada por estudantes de todas as idades.\n' +
      '• **Borracha Plástica:** Apaga com imensa facilidade e deixa poucos resíduos sobre a folha. Curiosidade: é muito utilizada em desenhos técnicos e desenhos caprichados.\n' +
      '• **Borracha Maleável (Limpa-tipos):** Pode ser moldada com as mãos como se fosse massinha. Curiosidade: serve para clarear sombras de grafite e clarear pequenos detalhes no desenho sem esfregar!\n\n' +
      '📄 **Papéis:**\n' +
      '• **Papel Sulfite:** É o papel mais comum para desenhos rápidos e atividades escolares de todo dia. Curiosidade: pode ser usado livremente com lápis, canetas e tinta guache.\n' +
      '• **Cartolina:** É muito mais grossa e resistente do que o papel sulfite. Curiosidade: bastante usada em cartazes, apresentações e trabalhos artísticos maiores.\n' +
      '• **Papel Canson:** Possui uma textura especial para desenhos artísticos profissionais. Curiosidade: é excelente para segurar a cor de lápis de cor e carvão.\n' +
      '• **Papel para Aquarela:** É um papel bem grosso, encorpado e absorve lindamente a água. Curiosidade: foi feito especialmente para receber pinturas em aquarela sem enrugar ou estragar.\n' +
      '• **Papel Kraft:** Tem cor marrom típica de pacotes e um aspecto natural bem rústico. Curiosidade: é sensacional para artesanatos, colagens e projetos criativos!\n\n' +
      'Cada ferramenta traz a sua própria mágica para o papel! 🌟 Qual material você quer usar no nosso próximo desenho?'
  },
  {
    palavras: ['tinta guache', 'guache'],
    resposta: '🖌️ **Tinta Guache:** É uma tinta colorida, divertida e muito fácil de usar. Tem excelente cobertura e fica opaca (sem brilho) quando seca.\n🎯 **Indicada para:** Papel, cartolina e variadas atividades escolares.\n💡 **Curiosidade:** Pode ser misturada com outras cores para criar tonalidades totalmente novas no seu desenho! 🎨'
  },
  {
    palavras: ['tinta aquarela', 'aquarela', 'aquarelas'],
    resposta: '🖌️ **Tinta Aquarela:** É uma tinta clássica que adora água! Ela mistura-se ao pincel úmido para criar efeitos suaves, leves e transparentes na folha.\n🎯 **Indicada para:** Papéis grossos próprios para aquarela.\n💡 **Curiosidade:** Quanto mais água você colocar na mistura, mais clara e delicada ficará a sua pintura! 💧'
  },
  {
    palavras: ['tinta acrilica', 'acrilica', 'acrilicas'],
    resposta: '🖌️ **Tinta Acrílica:** É uma tinta moderna, resistente e que seca rapidamente na tela.\n🎯 **Indicada para:** Tela de pintura, madeira, papelão ou papel grosso.\n💡 **Curiosidade:** Ela brilha bastante e, depois de secar por completo, fica super resistente e não sai facilmente com água! ⚡'
  },
  {
    palavras: ['tinta a oleo', 'tinta de oleo', 'pintura a oleo', 'oleo'],
    resposta: '🖌️ **Tinta a Óleo:** É a tinta nobre e tradicional usada por muitos pintores famosos da história. Ela seca bem devagarzinho.\n🎯 **Indicada para:** Telas de pintura de algodão ou linho.\n💡 **Curiosidade:** Como demora a secar, permite que o artista faça misturas e altere a pintura por várias horas seguidas antes do trabalho secar! 🖼️'
  },
  {
    palavras: ['tinta para tecido', 'tinta de tecido'],
    resposta: '🖌️ **Tinta para Tecido:** Foi formulada especialmente para pintar roupas e panos sem desbotar.\n🎯 **Indicada para:** Camisetas, calças jeans, bolsas de lona e panos de prato.\n💡 **Curiosidade:** Depois de totalmente seca, a pintura sela nas fibras e pode resistir tranquilamente a muitas lavagens! 👕'
  },
  {
    palavras: ['lapis grafite', 'grafite'],
    resposta: '✏️ **Lápis Grafite:** É o nosso lápis tradicional cinza de todo dia para escrever e fazer rascunhos.\n💡 **Curiosidade:** Existem lápis mais claros e duros (como H) e outros muito mais escuros, macios e profundos (como 2B, 4B, 6B)! ✏️'
  },
  {
    palavras: ['lapis de cor', 'lapis colorido'],
    resposta: '✏️ **Lápis de Cor:** Serve para colorir desenhos e encher nosso mundo de fantasia com dezenas de cores.\n💡 **Curiosidade:** Se você pintar em camadas sobrepostas e com pressões delicadas, consegue misturar as cores no papel para criar tons novinhos em folha! 🌈'
  },
  {
    palavras: ['lapis aquarelavel', 'aquarelavel'],
    resposta: '✏️ **Lápis Aquarelável:** Une o melhor dos dois mundos! Funciona como um lápis de cor tradicional e também reage com água.\n💡 **Curiosidade:** Ao passar um pincel levemente úmido nos traços que você desenhou com ele, o desenho magicamente se dissolve e ganha um suave efeito de aquarela! 💧✏️'
  },
  {
    palavras: ['lapis carvao', 'carvao', 'carvão'],
    resposta: '✏️ **Lápis Carvão:** Produz traços profundamente pretos, rústicos e extremamente expressivos.\n💡 **Curiosidade:** É fantástico para fazer retratos com jogo de luz e sombras profundas, por ser fácil de esfumar com os dedos! 🖤'
  },
  {
    palavras: ['caneta esferografica', 'caneta esferográfica', 'esferografica', 'esferográfica'],
    resposta: '🖋️ **Caneta Esferográfica:** É a caneta mais comum, usada para tomar notas, fazer assinaturas e escrever todo dia na escola.\n💡 **Curiosidade:** Ela possui uma mini esfera de metal giratória na pontinha. Conforme escrevemos, a bolinha rola e espalha a tinta líquida perfeitamente sobre a folha! 🖋️'
  },
  {
    palavras: ['canetinha hidrocor', 'canetinhas', 'canetinha', 'hidrocor'],
    resposta: '🖋️ **Canetinha Hidrocor:** É colorida, divertida e as crianças adoram usar.\n💡 **Curiosidade:** Existem canetinhas com ponta bem fininha para contornos delicados e outras com ponta grossa ou chanfrada para cobrir espaços maiores! 🌈'
  },
  {
    palavras: ['caneta marcador', 'marcador', 'marca texto', 'caneta de marcar'],
    resposta: '🖋️ **Caneta Marcador:** Tem traços robustos, fortes e cores vibrantes.\n💡 **Curiosidade:** Além de marcar passagens importantes em livros, os artistas usam marcadores profissionais para letterings, cartazes e desenhos do estilo Grafite urbano! 💡'
  },
  {
    palavras: ['caneta nanquim', 'nanquim'],
    resposta: '🖋️ **Caneta Nanquim:** Produz traços pretos super precisos, escuros de alta durabilidade.\n💡 **Curiosidade:** É a caneta predileta dos ilustradores profissionais para arte-finalizar desenhos, contornar mangas japonês e desenhar quadrinhos detalhados! 📖🖤'
  },
  {
    palavras: ['borracha branca'],
    resposta: '🧽 **Borracha Branca:** Apaga traços de lápis grafite comuns com doçura e sem rasgar ou ferir o papel.\n💡 **Curiosidade:** É o tipo mais popular e amado que acompanha os estojos dos estudantes por gerações. 🏫'
  },
  {
    palavras: ['borracha plastica', 'borracha plástica', 'plastica', 'plástica'],
    resposta: '🧽 **Borracha Plástica:** Apaga com facilidade extrema e solta muito poucos resíduos (fiapos) sobre a mesa.\n💡 **Curiosidade:** É ideal para desenhos de engenharia, arquitetura e trabalhos artísticos que exigem muita limpeza! 📐'
  },
  {
    palavras: ['borracha maleavel', 'borracha maleável', 'maleavel', 'maleável', 'limpa tipos', 'limpa-tipos'],
    resposta: '🧽 **Borracha Maleável (Limpa-tipos):** Pode ser moldada e esticada com os dedos exatamente como se fosse massinha de brincar.\n💡 **Curiosidade:** Ela serve para "chupar" o excesso de pó de grafite ou carvão, clareando sombras e criando efeitos de brilho ou luz de forma super suave no desenho! 🧘‍♂️'
  },
  {
    palavras: ['papel sulfite', 'sulfite', 'folha sulfite'],
    resposta: '📄 **Papel Sulfite:** É o papel de escritório e impressora mais prático e comum que existe.\n💡 **Curiosidade:** Excelente e econômico para rabiscar ideias velozes do dia a dia, rascunhar desenhos fáceis e brincar com lápis e canetinhas! 📄'
  },
  {
    palavras: ['cartolina'],
    resposta: '📄 **Cartolina:** É uma folha bem grande e resistente, de espessura mais firme.\n💡 **Curiosidade:** Um material clássico para montar cartazes coloridos, fazer belos recortes e montar trabalhos escolares grandes. 🏫'
  },
  {
    palavras: ['papel canson', 'canson'],
    resposta: '📄 **Papel Canson:** Possui uma textura/porosidade especial perfeita para trabalhos artísticos de qualidade.\n💡 **Curiosidade:** Como possui ranhuras suaves e é fofinho, retém a poeira e pigmento de lápis de cor, giz de cera e carvão maravilhosamente bem! 🎨'
  },
  {
    palavras: ['papel para aquarela'],
    resposta: '📄 **Papel para Aquarela:** É um papel muito grosso, encorpado e com alta capacidade de absorção.\n💡 **Curiosidade:** Foi gerado especificamente para beber muita água sem enrugar e sem soltar pelinhos, segurando os tons da aquarela belos por anos. 💧📄'
  },
  {
    palavras: ['papel kraft', 'kraft'],
    resposta: '📄 **Papel Kraft:** Tem cor marrom natural, toque rústico e visual muito bonito.\n💡 **Curiosidade:** É super forte e bastante valorizado em embrulhos elegantes, artesanato criativo, colagem e desenhos com giz branco e pastel! 📦'
  },

  {
    palavras: ['tipos de desenho', 'tipos_de_desenho', 'estilos de desenho', 'estilo de desenho', 'desenhos de arte'],
    resposta: '✍️ **Tipos de Desenho do Candinho!**\n' +
      'Você sabia que desenhar não é de um jeito só? Existem várias formas mágicas de colocar suas ideias no papel:\n\n' +
      '🔍 **Desenho de Observação**: O artista desenha olhando diretamente para um objeto, pessoa ou paisagem real e tenta representar fielmente o que vê. (Ex: Desenhar uma fruta sobre a mesa! 🍎)\n' +
      '🧠 **Desenho de Memória**: É feito usando apenas as lembranças do artista guardadas no coração, sem olhar para um modelo físico naquele momento. (Ex: Desenhar sua própria casa sem vê-la! 🏠)\n' +
      '📸 **Desenho Realista**: Procura mostrar as pessoas e objetos com as luzes, sombras e proporções muito parecidas com a realidade. (Ex: Um lindo retrato que quase parece uma foto! 👤)\n' +
      '✨ **Desenho Abstrato**: Usa formas livres, linhas soltas e manchas de cores vibrantes para expressar sentimentos e pensamentos, sem o compromisso de imitar o mundo real. (Ex: Círculos, listras e manchas coloridas! 🎨)\n' +
      '👐 **Desenho à Mão Livre**: É feito sem régua, compassos ou instrumentos de precisão, usando unicamente a imaginação e a mão solta. (Ex: Rabiscos e esboços repletos de criatividade! ✍️)\n' +
      '🌸 **Mangá**: Famoso estilo de desenho japonês com personagens carismáticos de olhos brilhantes, grandes e muito expressivos. (Ex: Histórias em quadrinhos japonesas! 📖)\n' +
      '🤪 **Caricatura**: Exagera e brinca com traços físicos característicos de uma pessoa de maneira muito divertida e afetuosa. (Ex: Desenhar alguém com um nariz bem grande ou sorriso gigante! 😄)\n' +
      '📖 **Histórias em Quadrinhos (HQ)**: Conta aventuras emocionantes usando uma sequência organizada de desenhos dentro de quadros e balões de diálogo. (Ex: As histórias da Turma da Mônica! 💥)\n' +
      '👶 **Chibi**: Estilo oriental derivado de mangás com personagens super fofinhos e lindinhos de cabeça enorme e corpo pequenininho. (Ex: Versões bebês de super-heróis! 🥰)\n' +
      '🌀 **Doodle**: Rabiscos descompromissados e divertidos que criamos de forma espontânea, sem pensar muito, enquanto relaxamos.\n' +
      '🎬 **Cartoon**: Desenhos super expressivos, simplificados e divertidos muito usados nas tirinhas de jornal e animações. (Ex: Personagens de desenhos animados de humor! 🍿)\n' +
      '🏰 **Estilo Disney**: Personagens desenhados com contornos sinuosos, expressões dramáticas, cores ricas e uma aura amigável e encantadora. (Ex: O camundongo Mickey ou a rainha Elsa! ❄️)\n' +
      '🧘 **Zentangle**: Desenhos meditativos preenchidos de padrões repetidos (como ondas e tramas) para ajudar no foco, calma e estimular a imaginação.\n' +
      '📦 **Desenho 3D**: Cria uma fantástica ilusão de óptica tridimensional que faz parecer que o desenho tem volume tridimensional e pode flutuar e sair do papel!\n' +
      '💎 **Hiper-realismo**: Um nível ultra avançado de detalhes minuciosos (rugas, poeiras e reflexos) que faz com que a arte finalizada se assemelhe totalmente a uma fotografia real.\n\n' +
      'Existem muitos tipos de desenho. Cada artista escolhe o estilo que mais gosta para expressar suas ideias, emoções e criatividade. Quanto mais você pratica, mais descobre qual é o seu jeito especial de desenhar! ⭐🎨'
  },
  {
    palavras: ['desenho de observação', 'observacao', 'observar objeto'],
    resposta: '🔍 **Desenho de Observação:** É quando o artista desenha olhando atentamente para um objeto, pessoa ou paisagem real e tenta representar o que vê.\n💡 **Exemplo prático:** Desenhar uma linda maçã ou banana que está colocada sobre a mesa bem na sua frente! 🍎🍊'
  },
  {
    palavras: ['desenho de memória', 'memoria', 'desenho lembranca'],
    resposta: '🧠 **Desenho de Memória:** É feito usando apenas as lembranças e sentimentos guardados na mente do artista, sem olhar para nenhum modelo.\n💡 **Exemplo prático:** Desenhar a sua própria escola ou sua casa sem olhá-la diretamente enquanto risca o papel! 🏠✨'
  },
  {
    palavras: ['desenho realista', 'realismo no desenho'],
    resposta: '📸 **Desenho Realista:** Procura mostrar as pessoas, texturas e objetos de forma muito parecida com a realidade.\n💡 **Exemplo prático:** Um retrato à mão que cuida de cada detalhe para parecer real, quase como uma foto impressa! 👤✍️'
  },
  {
    palavras: ['desenho abstrato', 'abstrato desenho'],
    resposta: '✨ **Desenho Abstrato:** Usa formas, linhas curvas, retas e cores mágicas e livres para expressar sentimentos íntimos e conceitos puros.\n💡 **Exemplo prático:** Um desenho com círculos flutuantes, listras coloridas e manchas coloridas livres na folha! 🎨🌀'
  },
  {
    palavras: ['desenho à mão livre', 'mao livre', 'mão livre'],
    resposta: '👐 **Desenho à Mão Livre:** É feito sem auxílio de réguas acadêmicas ou outros instrumentos geométricos retos, guiando-se apenas pela imaginação e pela leveza das mãos.\n💡 **Exemplo prático:** Rabiscos e esboços criativos que brotam espontaneamente da sua mente! 🖊️'
  },
  {
    palavras: ['mangá', 'desenho japones', 'mangas'],
    resposta: '🌸 **Mangá:** É o estilo clássico de desenho japonês que dá vida a lindos e expressivos heróis.\n💡 **Exemplo prático:** Personagens das famosas histórias em quadrinhos japonesas com olhos brilhantes, grandes e cabelos pontiagudos muito estilosos! 📖📺'
  },
  {
    palavras: ['caricatura'],
    resposta: '🤪 **Caricatura:** Exagera e brinca com algumas características mais marcantes de uma pessoa de uma maneira bem divertida e humorística.\n💡 **Exemplo prático:** Desenhar um amigo de forma engraçada com o nariz bem grande ou com as bochechas super infladas! 😄'
  },
  {
    palavras: ['história em quadrinhos (hq)', 'historias em quadrinhos', 'hq', 'quadrinhos'],
    resposta: '📖 **História em Quadrinhos (HQ):** Conta aventuras incríveis usando uma sequência de desenhos organizados em quadrinhos ordenados e balões de diálogo.\n💡 **Exemplo prático:** Gibis infantis super divertidos como os da Turma da Mônica ou de super-heróis de cinema! 💥'
  },
  {
    palavras: ['chibi'],
    resposta: '👶 **Chibi:** Personagens super fofos, engraçadinhos e pequeninos, derivados do estilo de mangá japonês.\n💡 **Exemplo prático:** Versões bebês de grandes heróis que possuem a cabeça gigante e o corpinho bem pequeno e delicado! 🥰'
  },
  {
    palavras: ['doodle', 'doodles'],
    resposta: '🌀 **Doodle:** São pequenos rabiscos e desenhinhos descontraídos criados de maneira espontânea na folha.\n💡 **Exemplo prático:** Desenhos rápidos de florzinhas, corações ou monstros fofos feitos enquanto você conversa ou pensa em algo! ✍️'
  },
  {
    palavras: ['cartoon'],
    resposta: '🎬 **Cartoon:** Desenhos simples, dinâmicos e muito coloridos feitos especificamente para fazer e levar humor às pessoas.\n💡 **Exemplo prático:** Personagens clássicos de desenhos animados como o Snoopy, Garfield e outros heróis brincalhões! 🍿'
  },
  {
    palavras: ['estilo disney'],
    resposta: '🏰 **Estilo Disney:** Personagens com expressões brilhantes e marcantes, gestos cheios de carisma, cores suaves e uma aura muito amigável.\n💡 **Exemplo prático:** Os amados bichinhos das fábulas como o camundongo Mickey, a rainha do gelo Elsa ou o leão Simba! 🦁❄'
  },
  {
    palavras: ['zentangle'],
    resposta: '🧘 **Zentangle:** Desenhos repletos de padrões geométricos ou orgânicos repetidos diversas vezes para estimular o foco, relaxamento e criatividade.\n💡 **Exemplo prático:** Formas abstratas preenchidas com delicadas tramas de linhas e pontinhos repetidos! 🧘‍♀️'
  },
  {
    palavras: ['desenho 3d', 'desenho tridimensional'],
    resposta: '📦 **Desenho 3D:** Cria uma fantástica ilusão de ótica que dá profundidade e volume tridimensional à imagem.\n💡 **Exemplo prático:** Um cubo desenhado com perspectiva impecável que parece real e quase flutua acima do papel! 😲'
  },
  {
    palavras: ['hiper-realismo'],
    resposta: '💎 **Hiper-realismo:** É um desenho tão incrivelmente minucioso e perfeito que engana os olhos!\n💡 **Exemplo prático:** Pinturas e retratos desenhados a lápis que são tão cheios de poros e texturas reais que parecem uma foto revelada! 📸✨'
  },

  {
    palavras: ['estilos de pintura', 'estilos_de_pintura', 'estilo de pintura', 'tipos de pintura', 'estilos pintores'],
    resposta: '🎨 **Estilos de Pintura do Candinho!**\n' +
      'Cada estilo é um par de óculos mágicos que o artista usa para ver o mundo de uma forma única. Olha só esses estilos super conhecidos:\n\n' +
      '🏠 **Realismo**: Os artistas tentam pintar as pessoas, objetos e lugares exatamente como eles são na vida real. (Ex: Personagens de Édouard Manet e Ilya Repin. Dica: Parece uma cena que você veria todo dia!).\n' +
      '📷 **Foto-realismo**: As pinturas ficam tão detalhadas que parecem fotografias de verdade. (Ex: Obras de Richard Estes e Chuck Close. Dica: Às vezes é difícil saber se é uma foto ou uma pintura!).\n' +
      '💥 **Expressionismo**: O artista pinta seus fortes sentimentos e emoções interiores, como alegria, medo ou tristeza. (Ex: O clássico de Edvard Munch. Dica: As cores fortes e formas distorcidas ajudam a mostrar sentimentos!).\n' +
      '🌅 **Impressionismo**: Os artistas adoravam pintar ao ar livre, retratando a luz natural, as cores e as impressões de um instante especial. (Ex: As paisagens de Claude Monet e Pierre Renoir. Dica: De pertinho são só manchas de pincel; de longe formam uma imagem linda!).\n' +
      '🌀 **Arte Abstrata**: Não tenta mostrar objetos reais. Prefere usar cores, formas livres e listras para transmitir ideias livres. (Ex: Telas de Wassily Kandinsky e Mark Rothko. Dica: Cada pessoa pode imaginar algo diferente ao olhar!).\n' +
      '🌙 **Surrealismo**: Mistura o mundo de sonhos divertidos e realidade de maneiras inesperadas e criativas. (Ex: Mundos fantásticos do Salvador Dalí e René Magritte. Dica: É como mergulhar em um sonho estranho e engraçado!).\n' +
      '🥤 **Pop Art**: Transforma objetos do dia a dia, latas de refrigerante e produtos de mercado em obras coloridas e chamativas. (Ex: Estética inovadora do Andy Warhol e Roy Lichtenstein. Dica: Latas, gibis e anúncios viram arte vibrante!).\n' +
      '👁️ **Simbolismo**: Usa imagens misteriosas e símbolos secretos para contar uma história e transmitir mensagens escondidas. (Ex: Obras de Gustave Moreau e Mikhail Vrubel. Dica: Cada elemento do quadro pode ter um significado profundo!).\n' +
      '📦 **Cubismo**: Os objetos e pessoas são desenhados desmontados em formas geométricas, como cubos, triângulos e cilindros. (Ex: Ideias de Pablo Picasso e Georges Braque. Dica: Parece um quebra-cabeça de formas!).\n' +
      '⚡ **Futurismo**: Mostra a velocidade, o movimento e a vida moderna de forma dinâmica. (Ex: Pintores Umberto Boccioni e Giacomo Balla. Dica: As imagens parecem vibrar, correr e se mover rapidamente!).\n\n' +
      'Cada estilo de pintura é uma forma diferente de os artistas mostrarem suas ideias, sentimentos e sua maneira de enxergar o mundo. Não existe um estilo melhor que o outro. Todos ajudam a contar histórias através da arte! ⭐🎨'
  },
  {
    palavras: ['realismo', 'estilo realismo'],
    resposta: '🏠 **Realismo:** Os artistas deste estilo tentavam pintar as pessoas, objetos e paisagens exatamente como eles são e acontecem na nossa vida prática.\n👨‍🎨 **Artistas famosos:** Édouard Manet, Ilya Repin.\n💡 **Dica do Candinho:** Parece uma cena do cotidiano que você poderia presenciar em qualquer esquina comum! 🏠'
  },
  {
    palavras: ['foto-realismo', 'fotorealismo', 'estilo foto-realismo'],
    resposta: '📷 **Foto-realismo:** As pinturas ganham tamanha quantidade de detalhes, texturas e brilhos reais que parecem fotografias profissionais!\n👨‍🎨 **Artistas famosos:** Richard Estes, Chuck Close.\n💡 **Dica do Candinho:** É super divertido desafiar os olhos e tentar adivinhar se é uma foto ou uma pintura! 📸'
  },
  {
    palavras: ['expressionismo', 'estilo expressionismo'],
    resposta: '💥 **Expressionismo:** O artista usa pinceladas carregadas e cores vibrantes para pintar os seus sentimentos mais fortes de dentro da alma, como uma explosão de emoções.\n👨‍🎨 **Artista famoso:** Edvard Munch (pintor da obra famosa "O Grito").\n💡 **Dica do Candinho:** O formato e as cores de tudo mudam no quadro para representar uma profunda emoção! 😱'
  },
  {
    palavras: ['impressionismo', 'estilo impressionismo'],
    resposta: '🌅 **Impressionismo:** Os pintores adoravam pintar ao ar livre sob a luz do sol, colorindo ligeiramente as paisagens exatamente do jeito de sua impressão visual de cada instante.\n👨‍🎨 **Artistas famosos:** Claude Monet, Pierre Renoir.\n💡 **Dica do Candinho:** De pertinho o quadro parece cheio de borrões e pinceladas de cores separadas; quando nos afastamos um pouquinho, ele vira uma lindíssima paisagem ensolarada! 🌅🌿'
  },
  {
    palavras: ['arte abstrata', 'abstracionismo', 'estilo abstrato', 'abstrato'],
    resposta: '🌀 **Arte Abstrata:** Não busca pintar objetos reais do dia a dia. Prefere a bela combinação livre de linhas, espirais, círculos geométricos e cores vivas para liberar a imaginação de quem vê.\n👨‍🎨 **Artistas famosos:** Wassily Kandinsky, Mark Rothko.\n💡 **Dica do Candinho:** Não procure por figuras nela! Cada vez que olhamos, podemos viajar numa interpretação fantástica diferente! 🌈✨'
  },
  {
    palavras: ['surrealismo', 'estilo surrealismo'],
    resposta: '🌙 **Surrealismo:** É o maravilhoso encontro das nossas tintas com o mundo curioso e engraçado das noites de sonhos criativos!\n👨‍🎨 **Artistas famosos:** Salvador Dalí, René Magritte.\n💡 **Dica do Candinho:** Prepare-se para ver coisas mágicas: relógios derretendo, animais com pernas de girafa ou homens voando de guarda-chuva! 🍏🐘'
  },
  {
    palavras: ['pop art', 'estilo pop art'],
    resposta: '🥤 **Pop Art:** Transforma produtos industriais modernos, latas de sopa de supermercado, astros de cinema e gibis em grandes painéis artísticos coloridos e vibrantes!\n👨‍🎨 **Artistas famosos:** Andy Warhol, Roy Lichtenstein.\n💡 **Dica do Candinho:** Usa tons super fluorescentes, carimbos repetidos e visual de propagandas de revista! 🥤🍿'
  },
  {
    palavras: ['simbolismo', 'estilo simbolismo'],
    resposta: '👁️ **Simbolismo:** O quadro é uma caça ao tesouro de segredinhos ocultos! O pintor coloca vários enigmas e símbolos para expressar uma mensagem poética.\n👨‍🎨 **Artistas famosos:** Gustave Moreau, Mikhail Vrubel.\n💡 **Dica do Candinho:** Cada pequena flor, adorno ou objeto no cenário esconde um significado profundo para decifrarmos! 👁️✨'
  },
  {
    palavras: ['cubismo', 'estilo cubismo'],
    resposta: '📦 **Cubismo:** O artista desconstrói as coisas do mundo em formas geométricas perfeitas, como triângulos, retângulos e cubos, mostrando vários ângulos ao mesmo tempo!\n👨‍🎨 **Artistas famosos:** Pablo Picasso, Georges Braque.\n💡 **Dica do Candinho:** Parece um maravilhoso e brilhante quebra-cabeça geométrico remoldado! 🔺📦'
  },
  {
    palavras: ['futurismo', 'estilo futurismo'],
    resposta: '⚡ **Futurismo:** Os artistas de vanguarda eram fascinados pela aceleração dos novos automóveis, fábricas, dinamismo e luzes das cidades modernas.\n👨‍🎨 **Artistas famosos:** Umberto Boccioni, Giacomo Balla.\n💡 **Dica do Candinho:** Os objetos parecem duplicados ou tremelicando, dando uma real e fantástica sensação de movimento de alta velocidade na tela! 🏎️⚡'
  },

  // ===== ELEMENTOS DAS ARTES VISUAIS =====
  { 
    palavras: ['ponto', 'o que é ponto'], 
    resposta: 'O ponto é a menor marca no desenho! Sozinho chama atenção, mas muitos pontos juntos podem formar linhas, formas e até texturas. No pontilhismo, os pontos criam imagens incríveis! Seurat usou isso em "Tarde de domingo na Ilha de Grande Jatte". 🔴',
    matchedKey: 'ponto'
  },
  { 
    palavras: ['linha', 'o que é linha'], 
    resposta: 'A linha é como um ponto que saiu passeando! Pode ser reta, curva, fina ou grossa. Linhas retas parecem firmes; curvas são mais suaves. Dürer e Kandinsky adoravam brincar com linhas! 📏',
    matchedKey: 'linha'
  },
  { 
    palavras: ['forma', 'formas', 'o que e forma', 'o que sao formas', 'o que e uma forma', 'definição de forma', 'definicao de forma'], 
    resposta: 'Formas são as figuras que criamos quando fechamos uma linha! 🔺🔵🟩 Elas podem ser geométricas (como círculos, quadrados e triângulos) ou orgânicas (com formatos livres e naturais, como uma nuvem ou uma folha). Joan Miró e Pablo Picasso amavam brincar com formas!',
    matchedKey: 'forma'
  },
  { 
    palavras: ['espaço', 'espaco', 'o que é espaço', 'o que e espaco', 'definição de espaço', 'definicao de espaco'], 
    resposta: 'O espaço na arte é a área onde o artista cria seu trabalho! 🌌 Pode ser o espaço bidimensional (como o papel ou a tela, onde jogamos com altura e largura) ou o espaço tridimensional (como nas esculturas, com profundidade de verdade). O espaço pode ser cheio (positivo) ou vazio (negativo) - os dois são super importantes para equilibrar a imagem!',
    matchedKey: 'espaco'
  },
  { 
    palavras: ['textura', 'o que é textura', 'definição de textura', 'definicao de textura'], 
    resposta: 'A textura é o aspecto de uma superfície que podemos sentir com as mãos ou imaginar com os olhos! 🧱 Pode ser áspera como o tronco de uma árvore, macia como o pelo de um gatinho, lisa como um vidro ou enrugada como o papel amassado. Na pintura, artistas usam pinceladas grossas para criar texturas reais que quase dá para tocar!',
    matchedKey: 'textura'
  },
  { 
    palavras: ['luz', 'luz e sombra', 'o que é luz', 'definição de luz', 'definicao de luz'], 
    resposta: 'A luz na arte serve para dar volume, criar profundidade e mostrar o caminho dos olhos! 💡 Junto com as sombras, a luz faz os objetos parecerem redondos e reais em uma folha plana. Pintores como Rembrandt eram mestres em usar fortes contrastes de luz e sombra para criar cenas mágicas e cheias de mistério.',
    matchedKey: 'luz'
  },
  { palavras: ['cores primárias', 'primarias', 'o que são cores primárias'], resposta: 'Cores primárias ou puras são aquelas que não podem ser obtidas por meio de outras misturas. Elas são: amarelo, azul e vermelho. Com elas, podemos criar todas as outras cores! 🔴🔵🟡' },
  { palavras: ['cores secundárias', 'secundarias', 'o que são cores secundárias'], resposta: 'Cores secundárias são geradas por meio da mistura de duas cores primárias. 🌈 Amarelo + vermelho = laranja 🟠, vermelho + azul = roxo ou violeta 🟣, azul + amarelo = verde 🟢. Que combinação legal!' },
  { palavras: ['cores terciárias', 'terciarias', 'o que são cores terciárias'], resposta: 'Cores terciárias são geradas pela mistura de uma cor primária com uma cor secundária. São elas: vermelho-arroxeado (vinho), vermelho-alaranjado, amarelo-esverdeado, amarelo-alaranjado (bege), azul-arroxeado e azul-esverdeado (verde-água). Um montão de cores! 🌈' },
  { palavras: ['cores complementares', 'complementares', 'contrastantes', 'o que são cores complementares'], resposta: 'Cores complementares são opostas no círculo cromático e criam o máximo de contraste! Os três pares principais são: 🔴 vermelho e 🟢 verde, 🟡 amarelo e 🟣 violeta (roxo), 🔵 azul e 🟠 laranja. Uma realça a outra! ⚡' },
  { palavras: ['cores quentes', 'quentes', 'o que são cores quentes'], resposta: 'Cores quentes transmitem sensação de calor e energy! São elas: vermelho, laranja e amarelo. Elas lembram sol e fogo, dão alegria e movimento! ☀️' },
  { palavras: ['cores frias', 'frias', 'o que são cores frias'], resposta: 'Cores frias transmitem sensação de calma e serenidade! São elas: azul, verde e violeta (roxo). Elas lembram água, céu e floresta. ❄️' },
  { palavras: ['cores neutras', 'neutras', 'o que são cores neutras'], resposta: 'Cores neutras são aquelas que têm pouca reflexão da luz, como os tons de cinza e marrom. Elas são ótimas para equilibrar outras cores! ⚪⚫' },
  { 
    palavras: ['cor', 'o que é cor', 'definição de cor', 'definicao de cor'], 
    resposta: 'As cores são sensações visuais que nossos olhos captam quando há luz presente. A palavra "cor" vem do latim (color) e significa "cobrir" ou "ocultar". A luz branca é a união das sete cores do arco-íris: vermelho, laranja, amarelo, verde, azul, anil e violeta. Já a cor preta representa a ausência de luz. 🌈',
    matchedKey: 'cor'
  },
  { palavras: ['círculo cromático', 'circulo das cores', 'roda de cores'], resposta: 'O círculo cromático é como um arco-íris organizado em volta. Nele, as cores estão dispostas em ordem: vermelho, laranja, amarelo, verde, azul, violeta. Ajuda a ver quais cores combinam! 🔄' },
  { palavras: ['harmonia de cores', 'harmonia cromática', 'combinação de cores'], resposta: 'Harmonia de cores é quando escolhemos cores que ficam bonitas juntas. Por exemplo, cores vizinhas no círculo (como azul e verde) criam harmonia suave; cores opostas (como azul e laranja) criam contraste vibrante! 🌈✨' },
  { palavras: ['escala de cores', 'gradiente', 'degradê'], resposta: 'Uma escala de cores é quando uma cor vai ficando mais clara ou mais escura aos poucos. Você pode fazer isso adicionando branco (tom pastel) ou preto (sombra). Fica lindo em pinturas! 🎨' },

  // ===== TEORIA MUSICAL PARA CRIANÇAS =====
  { palavras: ['som', 'o que é som'], resposta: '🎵 Som é tudo o que podemos ouvir. O silêncio também faz parte da música, ele ajuda o som a “respirar”.' },
  { palavras: ['altura do som', 'som agudo', 'som grave'], resposta: '🎵 Som agudo é fininho e alto, como o canto de um passarinho 🐦. Som grave é grosso e forte, como um tambor 🥁.' },
  { palavras: ['intensidade', 'volume', 'som forte', 'som fraco'], resposta: '🎵 Intensidade é o volume do som: forte é o som alto; fraco é o som baixinho. A música pode crescer e diminuir como uma onda 🌊.' },
  { palavras: ['duração do som', 'sons curtos', 'sons longos'], resposta: '🎵 Duração é quanto tempo um som dura. Sons curtos e longos juntos criam o ritmo da música.' },
  { palavras: ['ritmo', 'o que é ritmo'], resposta: '🎵 Ritmo é o coração da música 💓. Acontece quando batemos palmas, pés ou acompanhamos uma canção.' },
  { palavras: ['melodia', 'o que é melodia'], resposta: '🎵 Melodia é a linha musical que cantamos 🎶. É aquela parte da música que fica na cabeça o dia todo.' },
  { palavras: ['instrumentos musicais', 'tipos de instrumentos'], resposta: '🎵 Instrumentos musicais: sopro (flauta, trompete), cordas (violão, violino), percussão (tambor, pandeiro). Cada instrumento tem sua voz especial.' },
  { palavras: ['música é expressão'], resposta: '🎵 A música pode mostrar alegria, tristeza, calma ou energia 😊😢. Não precisa falar para comunicar!' },
  { palavras: ['o que é música', 'definição de música'], resposta: '✨ Música é som organized com ritmo, melodia e emoção. Toda criança pode brincar, criar e aprender música com o corpo, a voz e a imaginação 🎨🎶' },

  // ===== PERÍODOS DA MÚSICA E COMPOSITORES =====
  { 
    palavras: ['idade média', 'música medieval', 'hildegard von bingen'], 
    resposta: '🎶 Na Idade Média (séc. V–XV), a música era ligada à igreja, cantada em grupo, sem instrumentos. Hildegard von Bingen foi uma monja compositora e pensadora. Ela é uma das primeiras mulheres compositoras da história! Obra famosa: Ordo Virtutum.' 
  },
  { 
    palavras: ['renascimento', 'música renascentista', 'palestrina'], 
    resposta: '🎶 No Renascimento (séc. XV–XVI), a música ficou mais suave, com várias vozes juntas, equilíbrio e beleza. Giovanni Pierluigi da Palestrina foi um compositor italiano de música sacra. Obra famosa: Missa Papae Marcelli.' 
  },
  { 
    palavras: ['barroco', 'música barroca', 'bach', 'vivaldi'], 
    resposta: '🎶 O período Barroco (1600–1750) tem música cheia de emoção, ornamentos e contrastes. Johann Sebastian Bach foi um mestre alemão da harmonia. Obra famosa: Toccata e Fuga em Ré Menor. Antonio Vivaldi era italiano e criou músicas alegres e descritivas, como As Quatro Estações.' 
  },
  { 
    palavras: ['clássico', 'período clássico', 'mozart', 'haydn'], 
    resposta: '🎶 No período Clássico (1750–1820), a música é equilibrada, clara e organizada. Wolfgang Amadeus Mozart foi um gênio musical desde criança, famoso por óperas e sinfonias como Eine kleine Nachtmusik. Joseph Haydn, austríaco, foi professor de Mozart e ficou conhecido por suas sinfonias, como a Sinfonia Surpresa.' 
  },
  { 
    palavras: ['romântico', 'período romântico', 'beethoven', 'chopin'], 
    resposta: '🎶 O Romantismo (séc. XIX) trouxe música intensa, cheia de sentimentos e histórias. Ludwig van Beethoven revolucionou a música mesmo ficando surdo. Sua obra mais famosa é a Sinfonia nº 9. Frédéric Chopin era um pianista polonês que criou músicas delicadas e poéticas chamadas Noturnos.' 
  },
  { 
    palavras: ['moderno', 'música moderna', 'debussy'], 
    resposta: '🎶 Na música moderna (séc. XX), os compositores experimentaram novos sons e liberdade musical. Claude Debussy, francês, criou músicas como pinturas sonoras, cheias de climas e sensações. Obra famosa: Clair de Lune.' 
  },
  { palavras: ['resumo períodos musicais'], resposta: '✨ Resumo rápido: Idade Média: música religiosa; Renascimento: harmonia vocal; Barroco: emoção e movimento; Clássico: equilíbrio e clareza; Romântico: sentimento e drama; Moderno: experimentação.' },

  // ===== MÚSICA INFANTIL (ARTISTAS) =====
  { 
    palavras: ['palavra cantada'], 
    resposta: '🧸 A Palavra Cantada é a dupla Sandra Peres e Paulo Tatit, que faz músicas educativas, poéticas e divertidas para crianças.' 
  },
  { 
    palavras: ['toquinho'], 
    resposta: '🧸 Toquinho é um cantor e compositor brasileiro com canções suaves e afetivas que encantam crianças e adultos.' 
  },
  { 
    palavras: ['bia bedran'], 
    resposta: '🧸 Bia Bedran traz brincadeiras cantadas, folclore e histórias, com forte ligação com a educação infantil.' 
  },
  { 
    palavras: ['hélio ziskind'], 
    resposta: '🧸 Hélio Ziskind é conhecido por canções educativas e trilhas infantis para TV.' 
  },
  { 
    palavras: ['xuxa'], 
    resposta: '🧸 Xuxa é um ícone do pop infantil, com coreografias, cores e refrões fáceis que marcaram época.' 
  },
  { 
    palavras: ['tiquequê'], 
    resposta: '🧸 Tiquequê é um grupo com humor, jogos de palavras e criatividade, com linguagem próxima do universo infantil atual.' 
  },
  { 
    palavras: ['the wiggles'], 
    resposta: '🧸 The Wiggles é um grupo australiano que une música e dança para aprender brincando.' 
  },
  { 
    palavras: ['raffi'], 
    resposta: '🧸 Raffi é um cantor de folk infantil com mensagens de respeito, natureza e amizade.' 
  },
  { 
    palavras: ['disney'], 
    resposta: '🧸 As músicas da Disney são trilhas sonoras de filmes que encantam com histórias, emoção e canções inesquecíveis.' 
  },

  // ===== GÊNEROS MUSICAIS =====
  { 
    palavras: ['mpb', 'música popular brasileira'], 
    resposta: '🎤 MPB mistura tradição e modernidade, com letras poéticas, sociais e afetivas. Usa violão, piano e ritmos brasileiros.' 
  },
  { 
    palavras: ['funk'], 
    resposta: '🎤 Funk tem batida forte e repetitiva. Surgiu nas periferias como expressão social e dança.' 
  },
  { 
    palavras: ['pop'], 
    resposta: '🎤 Pop é música popular e acessível, com refrões fáceis e ritmo dançante. Feito para atingir muitos públicos.' 
  },
  { 
    palavras: ['rock'], 
    resposta: '🎤 Rock tem energia, atitude e guitarras elétricas. Pode ser calmo ou barulhento, e fala de liberdade e juventude.' 
  },
  { 
    palavras: ['samba'], 
    resposta: '🎤 Samba é ritmo brasileiro ligado à dança e à comunidade. Usa percussão e alegria, muito presente no carnaval.' 
  },
  { 
    palavras: ['bossa nova'], 
    resposta: '🎤 Bossa nova é um samba mais suave e sofisticado, com clima calmo e violão delicado.' 
  },
  { 
    palavras: ['axé'], 
    resposta: '🎤 Axé é ritmo festivo da Bahia, para dançar, pular e cantar em grupo. Muito usado em carnavais.' 
  },
  { 
    palavras: ['forró'], 
    resposta: '🎤 Forró é ritmo nordestino animado ou romântico, com sanfona, zabumba e triângulo. Dança em par.' 
  },
  { 
    palavras: ['blues'], 
    resposta: '🎤 Blues é música de sentimento profundo, que fala de tristeza, esperança e vida. Base de muitos outros estilos.' 
  },
  { 
    palavras: ['jazz'], 
    resposta: '🎤 Jazz é improvisação e liberdade musical. Cada músico cria no momento. Pode ser suave ou animado.' 
  },
  { 
    palavras: ['reggae'], 
    resposta: '🎤 Reggae tem ritmo tranquilo e marcado, com mensagens de paz, amor e igualdade. Nasceu na Jamaica.' 
  },
  { 
    palavras: ['heavy metal'], 
    resposta: '🎤 Heavy metal é a versão mais pesada do rock, com guitarras distorcidas e temas intensos.' 
  },
  { 
    palavras: ['house'], 
    resposta: '🎤 House é música eletrônica dançante, com batida constante, usada em festas.' 
  },
  { 
    palavras: ['techno', 'tecno'], 
    resposta: '🎤 Techno é eletrônica mais minimalista e futurista, com sons repetidos.' 
  },
  { 
    palavras: ['hip hop'], 
    resposta: '🎤 Hip hop é uma cultura que envolve música, dança e arte visual. Ritmo marcado e letras faladas sobre a realidade.' 
  },
  { 
    palavras: ['gospel'], 
    resposta: '🎤 Gospel é música religiosa cristã, com letras de fé, esperança e louvor.' 
  },
  { 
    palavras: ['country'], 
    resposta: '🎤 Country é música ligada à vida no campo, com instrumentos acústicos e histórias do dia a dia.' 
  },
  { 
    palavras: ['rap'], 
    resposta: '🎤 Rap é forma musical falada e ritmada, com letras fortes e críticas da vida urbana.' 
  },

  // ===== DANÇA =====
  { 
    palavras: ['dança', 'o que é dança', 'definição de dança'], 
    resposta: '💃 A dança é uma prática de expressão corporal por meio do movimento, que traz benefícios como autoconhecimento, lazer, criatividade, relaxamento e melhora da saúde, por ser também um exercício físico. Além de prática recreativa ou profissional, a dança é uma área de conhecimento, construída ao longo do tempo por estudos sobre o corpo, o movimento e seus significados. Ao dançar, o corpo se relaciona com tempo, espaço e som, e a dança surge da integração desses elementos com o movimento corporal, estimulando a criação e a criatividade.' 
  },
  { 
    palavras: ['objetivos da dança', 'para que serve a dança'], 
    resposta: '🎯 A dança tem vários objetivos: lazer (diversão e socialização), trabalho (atuação profissional de dançarinos), exercício físico (melhora da saúde e condicionamento) e manifestação cultural (preservação de tradições e costumes).' 
  },
  { 
    palavras: ['tipos de dança', 'estilos de dança'], 
    resposta: 'Existem muitos tipos de dança! Alguns exemplos: 🩰 Balé (dança clássica, técnica e disciplinada), 💃 Dança contemporânea (liberdade de movimentos, experimentação), 🕺 Danças urbanas (estilos criados em contextos urbanos e periféricos), 🎷 Jazz (improviso e raízes populares), 🇧🇷 Samba (expressão da cultura popular brasileira), 🌵 Forró (dança em par do Nordeste), 👞 Sapateado (dança rítmica com sons dos pés), 💃 Tango (passos argentinos elegantes), 🌶️ Salsa (ritmo caribenho alegre) e 👑 Valsa (deslizar suave em três tempos).' 
  },
  { 
    palavras: ['tango', 'dança tango'], 
    resposta: '💃 **TANGO**\n\n**Origem:**\nO Tango surgiu na Argentina, principalmente na cidade de Buenos Aires, há mais de 100 anos.\n\n**Características:**\nÉ uma dança feita em dupla, com movimentos elegantes, passos marcados e muita expressão. Os dançarinos costumam dançar bem próximos um do outro.',
    matchedKey: 'tango'
  },
  { 
    palavras: ['salsa', 'dança salsa'], 
    resposta: '🌶️ **SALSA**\n\n**Origem:**\nA Salsa surgiu da mistura de ritmos caribenhos, especialmente em Cuba, e ficou muito popular em vários países da América Latina.\n\n**Características:**\nÉ uma dança alegre e animada, com passos rápidos, giros e muito ritmo. Geralmente é dançada em dupla ao som de músicas vibrantes.',
    matchedKey: 'salsa'
  },
  { 
    palavras: ['valsa', 'dança valsa'], 
    resposta: '👑 **VALSA**\n\n**Origem:**\nA Valsa nasceu na Áustria e na Alemanha no século XVIII.\n\n**Características:**\nÉ uma dança suave e elegante, realizada em dupla. Seus movimentos são circulares e acompanham o compasso de três tempos da música, dando a sensação de que os dançarinos estão deslizando pelo salão.',
    matchedKey: 'valsa'
  },
  { 
    palavras: ['elementos da dança'], 
    resposta: 'Os principais elementos da dança são: movimento (gestos e ações do corpo, organizados por fluência, espaço, peso e tempo, estudados por Rudolf Laban), espaço (o local onde a dança acontece), som (música, respiração, batidas do corpo) e corpo (o instrumento da dança, valorizando a diversidade corporal, social e cultural).' 
  },
  { 
    palavras: ['balé', 'ballet', 'dança clássica', 'bale'], 
    resposta: '🩰 O balé é uma dança clássica, técnica e disciplinada, que exige anos de treino. Surgiu nas cortes italianas e se desenvolveu na França e Rússia. As bailarinas usam sapatilhas de ponta e os movimentos são precisos e graciosos.',
    matchedKey: 'bale'
  },
  { 
    palavras: ['dança contemporânea', 'danca contemporanea'], 
    resposta: '💃 A dança contemporânea busca liberdade de movimentos, experimentação e diversidade de corpos. Ela mistura técnicas e expressões, sem regras fixas, e muitas vezes aborda temas sociais e políticos.',
    matchedKey: 'danca_contemporanea'
  },
  { 
    palavras: ['danças urbanas', 'hip hop dança', 'street dance', 'hip hop', 'hiphop'], 
    resposta: '🕺 As danças urbanas são estilos criados em contextos urbanos e periféricos, como o hip hop, breaking, locking e popping. Têm forte significado social e cultural, expressando a realidade e a criatividade das comunidades.',
    matchedKey: 'hip_hop'
  },
  { 
    palavras: ['jazz dança', 'jazz dance'], 
    resposta: '🎷 O jazz é um estilo de dança marcado pelo improviso e pelas raízes populares. Surgiu nos Estados Unidos com a música jazz e incorpora elements do balé e da dança moderna, com movimentos energéticos e expressivos.' 
  },
  { 
    palavras: ['samba dança', 'dança samba'], 
    resposta: '🇧🇷 O samba é uma expressão da cultura popular brasileira, com influência africana. Como dança, pode ser dançado solo ou em par, com movimentos de quadris, passos rápidos e muita alegria. É a alma do carnaval!' 
  },
  { 
    palavras: ['forró dança', 'dança forró'], 
    resposta: '🌵 O forró é uma dança em par, originária do Nordeste brasileiro. Tem ritmos como xote, baião e arrasta-pé. A dança é coladinha, com passos básicos e muita cumplicidade entre os parceiros.' 
  },
  { 
    palavras: ['sapateado', 'tap dance'], 
    resposta: '👞 O sapateado é uma dança rítmica em que os pés produzem sons ao bater no chão com sapatos especiais que têm placas de metal. Pode ser dançado solo ou em grupo, e exige coordenação e musicalidade.' 
  },
  { 
    palavras: ['frevo', 'dança frevo'], 
    resposta: '🎉 Frevo é uma dança típica de Pernambuco, cheia de energia e passos malabarísticos. Os dançarinos usam sombrinhas coloridas e se movem rapidamente ao som de uma orquestra de metais. É patrimônio cultural imaterial da humanidade!',
    matchedKey: 'frevo'
  },
  { 
    palavras: ['bumba meu boi', 'bumba boi', 'boi bumbá'], 
    resposta: '🐂 O Bumba Meu Boi é uma festa do folclore brasileiro, muito forte no Maranhão. Conta a história de um boi que morre e revive, com personagens como o Pai Francisco e a Mãe Catirina. Tem dança, música e teatro ao mesmo tempo!' 
  },
  { 
    palavras: ['caboclinho', 'caboclinhos'], 
    resposta: '🌿 Caboclinho é uma dança indígena do Nordeste, com cocares de penas, arco e flecha. Os dançarinos imitam a caça e a guerra, com passos rápidos e muita força. É uma forma de preservar a cultura dos povos originários.',
    matchedKey: 'caboclinho'
  },
  { 
    palavras: ['cavalo marinho'], 
    resposta: '🐴 Cavalo Marinho é uma dança dramática do folclore pernambucano. Mistura música, dança e teatro, com personagens como o Cavalo Marinho (um cavalo encantado), Mateus e Catirina. É uma grande brincadeira!',
    matchedKey: 'cavalo_marinho'
  },
  { 
    palavras: ['coco', 'dança coco', 'coco pernambucano', 'coco de roda'], 
    resposta: '🥥 Coco é uma dança de roda do Nordeste, com sapateado e palmas. Surgiu nos engenhos de cana, quando os trabalhadores batiam os pés no chão enquanto quebravam coco. O ritmo é contagiante!',
    matchedKey: 'coco_pernambucano'
  },
  { 
    palavras: ['samba de roda'], 
    resposta: '🔄 Samba de roda é uma forma tradicional de samba, dançado em roda, com participação de todos. Nasceu no Recôncavo Baiano e é patrimônio cultural brasileiro. As pessoas entram na roda, sambam e dão lugar a outras.' 
  },
  { 
    palavras: ['jongo'], 
    resposta: '🥁 Jongo é uma dança de origem africana, praticada no sudeste do Brasil. Os tambores chamados "caxambu" e "angona" puxam o ritmo, e os dançarinos respondem com versos improvisados. Tem umbigada e muita ancestralidade.',
    matchedKey: 'jongo'
  },
  {
    palavras: ['congada', 'dança congada', 'festa da congada'],
    resposta: '👑 **CONGADA**\n\n**Origem:**\nA Congada (ou Congo) é uma expressão cultural e religiosa que nasceu no Brasil da mistura de tradições africanas com europeias (católicas).\n\n**Características:**\nÉ um desfile coreografado com muita música, cantos e danças que encena a coroação de um Rei do Congo. Tem batalhas simbólicas de espadas, roupas coloridas e som de tambores, maracas e gungas!',
    matchedKey: 'congada'
  },
  {
    palavras: ['ciranda', 'dança ciranda', 'roda de ciranda'],
    resposta: '🌈 **CIRANDA**\n\n**Origem:**\nA Ciranda é uma dança folclórica de roda muito tradicional do Brasil, famosa especialmente nas praias de Pernambuco, como a Ilha de Itamaracá.\n\n**Características:**\nPessoas de todas as idades dão as mãos em uma grande roda na areia ou na praça, balançando o corpo no ritmo das ondas do mar ao som de bumbo, caixa e tarol. Todos são bem-vindos para girar e dançar!',
    matchedKey: 'ciranda'
  },
  {
    palavras: ['fandango', 'dança fandango'],
    resposta: '🔥 **FANDANGO**\n\n**Origem:**\nO Fandango tem raízes muito antigas e chegou ao sul e sudeste do Brasil trazido pelos colonizadores espanhóis e portugueses.\n\n**Características:**\nÉ uma dança muito animada onde os dançarinos batem palmas e sapateiam forte com tamancos de madeira, criando um ritmo contagiante no chão. Em par ou em grupo, é pura energia!',
    matchedKey: 'fandango'
  },
  {
    palavras: ['dança de salão', 'danca de salao'],
    resposta: '💃 **DANÇA DE SALÃO**\n\n**Origem:**\nA dança de salão engloba vários ritmos que começaram a ser dançados em dupla em cortes e salões na Europa, evoluindo no mundo inteiro com ritmos latinos e brasileiros.\n\n**Características:**\nÉ dançada em pares (dois a dois), onde as duas pessoas deslizam, giram e se movem em sintonia fina seguindo o compasso da música, como no bolero, forró, samba de gafieira e tango.',
    matchedKey: 'danca_de_salao'
  },
  {
    palavras: ['catira', 'dança catira'],
    resposta: '🤠 **CATIRA**\n\n**Origem:**\nA Catira (ou Cateretê) é uma dança típica do folclore do interior do Brasil, muito popular em Goiás, Minas Gerais e São Paulo.\n\n**Características:**\nÉ dançada principalmente ao som da viola caipira. Os dançarinos se enfileiram uns de frente para os outros e fazem um ritmo contagiante batendo palmas e sapateando forte no chão. É cheia de ritmo e energia caipira!',
    matchedKey: 'catira'
  },
  {
    palavras: ['carimbó', 'carimbo', 'dança carimbó'],
    resposta: '🥁 **CARIMBÓ**\n\n**Origem:**\nO Carimbó nasceu no estado do Pará, no norte do Brasil, criado pela mistura das culturas indígena, negra e portuguesa.\n\n**Características:**\nÉ uma dança de roda alegre e de ritmo rápido. As dançarinas usam saias imensas e coloridas que giram e fazem desenhos no ar, enquanto os dançarinos tentam recolher um lenço do chão apenas dobrando o corpo!',
    matchedKey: 'carimbo'
  },

  // ===== TEATRO =====
  { 
    palavras: ['teatro', 'o que é teatro', 'definição de teatro'], 
    resposta: '🎭 Teatro é a arte de contar histórias usando o corpo, a voz, o espaço e a imaginação. É quando pessoas se transformam em personagens e convidam o público para entrar em outro mundo sem sair do lugar. O palco vira floresta, castelo, escola, planeta distante… tudo pode nascer ali.',
    matchedKey: 'teatro'
  },
  { 
    palavras: ['origem do teatro', 'história do teatro', 'teatro grego'], 
    resposta: '🌍 O teatro começou na Grécia Antiga, há mais de 2.500 anos. As primeiras apresentações aconteciam em festas dedicadas ao deus Dionísio, ligadas à música, dança e celebrações. Os gregos criaram dois grandes estilos: Tragédia (histórias sérias e emocionantes) e Comédia (histórias engraçadas e críticas). Os espetáculos eram feitos em grandes teatros ao ar livre, como o famoso Teatro de Epidauro, que existe até hoje.' 
  },
  { 
    palavras: ['tipos de teatro', 'gêneros teatrais', 'estilos de teatro'], 
    resposta: '🎭 Tipos de Teatro:\n\n🎭 Teatro Dramático: Histórias sérias, emocionantes ou reflexivas.\n😂 Teatro de Comédia: Histórias engraçadas que fazem o público rir e pensar.\n🎎 Teatro de Fantoches / Bonecos: Personagens são bonecos manipulados por artistas.\n🎨 Teatro Infantil: Peças criadas especialmente para crianças, com linguagem acessível e temas lúdicos.\n🎪 Teatro Musical: História contada com música, canto e dança.\n🎭 Teatro de Sombras: Personagens aparecem como sombras projetadas em uma tela iluminada.\n🎭 Teatro de Rua: Acontece em praças e espaços públicos.' 
  },
  { 
    palavras: ['teatro dramático'], 
    resposta: '🎭 Teatro Dramático: São peças com histórias sérias, emocionantes ou que fazem a gente pensar sobre a vida. Podem ser tragédias ou dramas familiares.' 
  },
  { 
    palavras: ['teatro de comédia', 'comédia'], 
    resposta: '😂 Teatro de Comédia: Peças engraçadas que fazem o público rir, mas também podem criticar costumes e comportamentos de forma leve e divertida.' 
  },
  { 
    palavras: ['teatro de fantoches', 'fantoches', 'teatro de bonecos'], 
    resposta: '🎎 Teatro de Fantoches ou Bonecos: Os personagens são bonecos manipulados por artistas (chamados de bonequeiros ou fantoches). É uma forma de teatro muito antiga e amada pelas crianças!' 
  },
  { 
    palavras: ['teatro infantil'], 
    resposta: '🎨 Teatro Infantil: Peças criadas especialmente para crianças, com histórias mágicas, cores, música e temas que falam sobre amizade, imaginação e sentimentos.' 
  },
  { 
    palavras: ['teatro musical', 'musical'], 
    resposta: '🎪 Teatro Musical: A história é contada com música, canto e dança. Os personagens cantam para mostrar o que estão sentindo. Exemplos famosos: O Rei Leão, Mary Poppins.' 
  },
  { 
    palavras: ['teatro de sombras'], 
    resposta: '🎭 Teatro de Sombras: Os personagens aparecem como silhuetas (sombras) projetadas em uma tela iluminada por trás. É uma arte linda e cheia de mistério.' 
  },
  { 
    palavras: ['teatro de rua'], 
    resposta: '🎭 Teatro de Rua: Apresentações que acontecem em praças, parques e espaços públicos, gratuitas e abertas para todos. A rua vira palco!' 
  },

  // ===== BIOGRAFIAS DE ARTISTAS PLÁSTICOS =====
  { palavras: ['vincent van gogh', 'van gogh', 'gogh', 'quem foi van gogh'], resposta: 'Vincent van Gogh (1853–1890) foi um pintor holandês do pós-impressionismo. Ele criou obras vibrantes e emotivas, com pinceladas intensas e cores expressivas. Produziu mais de 2 mil trabalhos, incluindo “Noite Estrelada”. Ele só foi reconhecido após sua morte. 🌟' },
  { palavras: ['michelangelo', 'quem foi michelangelo'], resposta: 'Michelangelo (1475–1564) foi um artista renascentista italiano, mestre da escultura, pintura e arquitetura. Criou o teto da Capela Sistina e a escultura “Davi”. Sua arte celebra a força e a dramaticidade do corpo humano. 🗿' },
  { palavras: ['raffaello sanzio', 'rafael', 'quem foi rafael'], resposta: 'Raffaello Sanzio (1483–1520), conhecido como Rafael, foi um dos grandes nomes do Renascimento. Famoso por suas Madonas e pela obra “A Escola de Atenas”. Destacou-se pela harmonia e equilíbrio nas composições. 👼' },
  { palavras: ['leonardo da vinci', 'leonardo', 'da vinci', 'quem foi leonardo'], resposta: 'Leonardo da Vinci (1452–1519) foi um gênio multifacetado do Renascimento. Pintor da “Mona Lisa” e de “A Última Ceia”, também foi cientista, inventor e anatomista. Uniu arte e ciência como poucos na história. 🔍' },
  { palavras: ['romero britto', 'britto', 'quem é romero britto'], resposta: 'Romero Britto (1963– ) é um artista brasileiro contemporâneo conhecido por seu estilo colorido, alegre e inspirado na pop art. Suas obras têm traços marcantes e padrões vibrantes. 🎈' },
  { palavras: ['djanira', 'djanira da motta e silva', 'quem foi djanira'], resposta: 'Djanira da Motta e Silva (1914–1979) foi uma pintora brasileira modernista. Retratou cenas do cotidiano, trabalhadores e manifestações culturais do Brasil com cores fortes e composição simples. 🇧🇷', matchedKey: 'djanira' },
  { palavras: ['frida kahlo', 'kahlo', 'frida', 'quem foi frida kahlo'], resposta: 'Frida Kahlo (1907–1954) foi uma artist mexicana famosa por autorretratos intensos. Suas pinturas abordam identidade, cultura mexicana e experiências pessoais marcantes. 🌺' },
  { palavras: ['salvador dalí', 'dalí', 'quem foi salvador dalí'], resposta: 'Salvador Dalí (1904–1989) foi o principal nome do Surrealismo espanhol. Criou imagens oníricas e provocativas, como os relógios derretendo em “A Persistência da Memória”. ⏰' },
  { palavras: ['caravaggio', 'quem foi caravaggio'], resposta: 'Caravaggio (1571–1610) foi um pintor italiano do Barroco. Revolucionou a arte com o uso dramático de luz e sombra, técnica conhecida como claro-escuro. 🔦' },
  { palavras: ['tarsila do amaral', 'tarsila', 'quem foi tarsila'], resposta: 'Tarsila do Amaral (1886–1973) foi uma das principais artistas do Modernismo brasileiro. Criadora de “Abaporu”, contribuiu para o movimento antropofágico. 🎨' },
  { palavras: ['di cavalcanti', 'dicavalcanti', 'quem foi di cavalcanti', 'emiliano augusto cavalcanti'], resposta: 'Di Cavalcanti (1897–1976) foi um dos maiores pintores modernistas do Brasil! 🎨 Ele adorava retratar a cultura nacional, o samba, festas populares e o cotidiano do nosso povo com cores alegres e vibrantes. Ele ajudou a organizar a famosa Semana de Arte Moderna de 1922!', matchedKey: 'di_cavalcanti' },
  { palavras: ['ivan cruz', 'quem foi ivan cruz'], resposta: 'Ivan Cruz (1947–2023) foi um artista brasileiro conhecido por retratar brincadeiras infantis tradicionais, valorizando a cultura popular. 🪁', matchedKey: 'ivan_cruz' },
  { palavras: ['candido portinari', 'portinari', 'quem foi portinari'], resposta: 'Candido Portinari (1903–1962) foi um pintor brasileiro que retratou temas sociais e o povo trabalhador. Destacam-se os painéis “Guerra e Paz”. 👨‍🌾' },
  { palavras: ['henri matisse', 'matisse', 'quem foi matisse'], resposta: 'Henri Matisse (1869–1954) foi um artista francês do Fauvismo. Explorou cores vibrantes e formas simplificadas, criando composições alegres e decorativas. ✂️' },
  { palavras: ['rené magritte', 'magritte', 'quem foi magritte'], resposta: 'René Magritte (1898–1967) foi um pintor surrealista belga. Suas obras brincam com a percepção e a realidade, como em “Isto não é um cachimbo”. 🧐' },
  { palavras: ['claude monet', 'monet', 'quem foi monet'], resposta: 'Claude Monet (1840–1926) foi um dos fundadores do Impressionismo. Pintou séries sobre a light e a natureza, como as “Ninféias”. ☀️' },
  { palavras: ['georges seurat', 'seurat', 'quem foi seurat'], resposta: 'Georges Seurat (1859–1891) foi o criador do pontilhismo. Utilizava pequenos pontos de cor para formar imagens, como em “Tarde de Domingo na Ilha de Grande Jatte”. 🔵' },
  { palavras: ['edgar degas', 'degas', 'quem foi degas'], resposta: 'Edgar Degas (1834–1917) foi um impressionista francês conhecido por retratar bailarinas e cenas do cotidiano urbano. 🩰' },
  { palavras: ['edvard munch', 'munch', 'quem foi munch'], resposta: 'Edvard Munch (1863–1944) foi um pintor norueguês expressionista. Criador de “O Grito”, explorou emoções humanas intensas. 😱' },
  { palavras: ['rembrandt', 'quem foi rembrandt'], resposta: 'Rembrandt (1606–1669) foi um mestre holandês do Barroco. Famoso por autorretratos e pelo domínio da luz e sombra. 🎭' },
  { palavras: ['hélio oiticica', 'oiticica', 'quem foi hélio oiticica'], resposta: 'Hélio Oiticica (1937–1980) foi um artista brasileiro inovador. Criou obras interativas e experiências sensoriais no movimento neoconcreto. 🕺', matchedKey: 'helio_oiticica' },
  { palavras: ['alfredo volpi', 'volpi', 'quem foi alfredo volpi'], resposta: 'Alfredo Volpi (1896–1988) foi conhecido pelas “bandeirinhas” coloridas, explorou formas geométricas e cores suaves. 🏠', matchedKey: 'alfredo_volpi' },
  { palavras: ['georgina de albuquerque', 'georgina', 'quem foi georgina de albuquerque'], resposta: 'Georgina de Albuquerque (1885–1962) foi uma pintora brasileira pioneira, abordou temas históricos e cenas do cotidiano. 📜', matchedKey: 'georgina_de_albuquerque' },
  { 
    palavras: ['arte indigena brasileira', 'arte indígena brasileira', 'o que e arte indigena brasileira', 'o que e arte indígena brasileira', 'arte indígena', 'arte indigena', 'arte dos índios', 'cultura indígena'], 
    resposta: '🪶 **ARTE INDÍGENA BRASILEIRA**\n\n**O que é?**\nÉ a arte produzida pelos povos indígenas do Brasil. Ela faz parte do dia a dia, dos rituais e da cultura, usando materiais encontrados na natureza.\n\nEla está super presente na pintura corporal, na cerâmica, na cestaria, na arte plumária (enfeites de penas) e na música! Cada etnia tem seus próprios desenhos e significados, sempre ligados à natureza e ao respeito aos ancestrais.',
    matchedKey: 'arte_indigena'
  },
  { 
    palavras: ['arte africana', 'o que e arte africana', 'africa arte', 'arte da áfrica', 'cultura africana'], 
    resposta: '🌍 **ARTE AFRICANA**\n\n**O que é?**\nÉ a arte criada pelos diferentes povos da África. Ela valoriza a ancestralidade, os rituais, a música, a dança, as máscaras e as esculturas.\n\nEla é super rica e diversa! Usa materiais como madeira, palha e tecidos coloridos (como o kente). Essa arte influenciou muito artistas como Picasso e o nosso próprio modernismo brasileiro!',
    matchedKey: 'arte_africana'
  },
  {
    palavras: ['modernismo', 'o que e modernismo', 'arte moderna', 'o que e arte moderna', 'periodo modernismo', 'movimento modernista'],
    resposta: '🎨 **MODERNISMO**\n\n**O que é?**\nÉ um movimento artístico que quis criar uma arte diferente, deixando de copiar o passado. Os artistas passaram a experimentar novas formas, cores e ideias para mostrar o mundo de maneiras criativas.\n\n📅 **Período:** Final do século XIX até meados do século XX (aproximadamente 1890 - 1970).\n\n🎨 **Artistas Principais:** Pablo Picasso, Tarsila do Amaral, Anita Malfatti.\n\n🌟 **Características:**\n• Ruptura com as tradições artísticas.\n• Experimentação de novas técnicas e materiais.\n• Valorização da criatividade e da inovação.\n• Representação livre da realidade.\n• Diversidade de estilos (Cubismo, Surrealismo, Expressionismo, Abstracionismo etc.).\n\n🖼️ **Obra Importante:**\n• Abaporu.',
    matchedKey: 'modernismo'
  },
  {
    palavras: ['arte antiga', 'o que e arte antiga', 'periodo arte antiga', 'historia da arte antiga'],
    resposta: '🏺 **ARTE ANTIGA**\n\n**O que é?**\nÉ a arte feita pelos primeiros povos e grandes civilizações da História, como os egípcios, gregos e romanos. Ela servia para contar histórias, homenagear deuses, mostrar o poder dos reis e registrar acontecimentos importantes.\n\n📅 **Período:** Cerca de 3500 a.C. até o século V d.C.\n\n🎨 **Artistas Principais:** Produção coletiva de diversas civilizações (Egito, Mesopotâmia, Grécia e Roma).\n\n🌟 **Características:**\n• Arte ligada à religião, ao poder político e à vida cotidiana.\n• Uso de pedra, mármore, bronze e argila.\n• Construção de templos, esculturas e monumentos.\n• Busca pela representação da natureza e da figura humana.\n\n🖼️ **Obra Importante:**\n• Grande Esfinge de Gizé.',
    matchedKey: 'arte_antiga'
  },
  {
    palavras: ['arte medieval', 'o que e arte medieval', 'periodo medieval', 'idade media arte'],
    resposta: '⛪ **ARTE MEDIEVAL**\n\n**O que é?**\nÉ a arte produzida durante a Idade Média. Grande parte das obras era feita para decorar igrejas e ensinar histórias da Bíblia às pessoas.\n\n📅 **Período:** Século V ao século XV.\n\n🎨 **Artistas Principais:** Monges, artesãos e artistas anônimos.\n\n🌟 **Características:**\n• Predomínio da temática religiosa.\n• Construção de igrejas, castelos e catedrais.\n• Pinturas, vitrais e iluminuras.\n• Pouca preocupação com perspectiva e realismo.\n\n🖼️ **Obra Importante:**\n• Catedral de Notre-Dame.',
    matchedKey: 'arte_medieval'
  },
  {
    palavras: ['arte crista', 'arte cristã', 'arte religiosa', 'o que e arte crista', 'o que e arte cristã', 'o que e arte religiosa'],
    resposta: '✝️ **ARTE CRISTÃ (ARTE RELIGIOSA)**\n\n**O que é?**\nÉ a arte que representa histórias da Bíblia, Jesus, Maria e os santos. Ela ajuda as pessoas a conhecerem e expressarem sua fé.\n\n📅 **Período:** A partir do século I d.C. até os dias atuais.\n\n🎨 **Artistas Principais:** Michelangelo, Giotto di Bondone.\n\n🌟 **Características:**\n• Representação de passagens bibliblicas.\n• Imagens de Cristo, santos e da Virgem Maria.\n• Objetivo de ensinar e fortalecer a fé.\n• Pinturas, esculturas, mosaicos e vitrais.\n\n🖼️ **Obra Importante:**\n• A Criação de Adão.',
    matchedKey: 'arte_crista'
  },
  {
    palavras: ['arte grega', 'o que e arte grega', 'periodo arte grega', 'grecia antiga arte'],
    resposta: '🏺 **ARTE GREGA**\n\n**O que é?**\nÉ a arte dos antigos gregos. Eles procuravam representar a beleza, o equilíbrio e o corpo humano da forma mais harmoniosa possível.\n\n📅 **Período:** Século VIII a.C. ao século I a.C.\n\n🎨 **Artistas Principais:** Fídias, Policleto.\n\n🌟 **Características:**\n• Busca da beleza ideal e da harmonia.\n• Esculturas com proporções perfeitas.\n• Valorização do corpo humano.\n• Construção de templos e teatros.\n\n🖼️ **Obra Importante:**\n• Partenon.',
    matchedKey: 'arte_grega'
  },
  {
    palavras: ['arte romana', 'o que e arte romana', 'periodo arte romana', 'roma antiga arte'],
    resposta: '🏛️ **ARTE ROMANA**\n\n**O que é?**\nÉ a arte desenvolvida pelos romanos. Eles construíram grandes cidades, estradas, pontes, teatros e monumentos, mostrando a força e a organização do seu império.\n\n📅 **Período:** Século VI a.C. ao século V d.C.\n\n🎨 **Artistas Principais:** Artistas e arquitetos do Império Romano.\n\n🌟 **Características:**\n• Influência da arte grega.\n• Realismo nos retratos e esculturas.\n• Grandes obras de engenharia.\n• Construção de anfiteatros, aquedutos e estradas.\n\n🖼️ **Obra Importante:**\n• Coliseu.',
    matchedKey: 'arte_romana'
  },
  {
    palavras: ['arte egipcia', 'arte egípcia', 'o que e arte egipcia', 'o que e arte egípcia', 'egito antigo arte'],
    resposta: '🐫 **ARTE EGÍPCIA**\n\n**O que é?**\nÉ a arte criada pelos antigos egípcios. Eles faziam pirâmides, templos, esculturas e pinturas para homenagear os faraós e acreditar na vida após a morte.\n\n📅 **Período:** Cerca de 3000 a.C. até 30 a.C.\n\n🎨 **Artistas Principais:** Artesãos e escultores do Antigo Egito.\n\n🌟 **Características:**\n• Arte ligada à religião e à vida após a morte.\n• Pinturas com figuras de perfil e olhos de frente.\n• Hieróglifos e esculturas monumentais.\n• Construção de pirâmides, templos e túmulos.\n\n🖼️ **Obra Importante:**\n• Pirâmide de Quéops.',
    matchedKey: 'arte_egipcia'
  },
  {
    palavras: ['arte japonesa', 'o que e arte japonesa', 'periodo arte japonesa', 'japao arte'],
    resposta: '🎎 **ARTE JAPONESA**\n\n**O que é?**\nÉ a arte criada no Japão. Ela valoriza a natureza, a simplicidade, o equilíbrio e a beleza dos pequenos detalhes.\n\n📅 **Período:** Do século III d.C. até os dias atuais.\n\n🎨 **Artistas Principais:** Katsushika Hokusai, Utagawa Hiroshige.\n\n🌟 **Características:**\n• Valorização da natureza e das estações do ano.\n• Traços delicados e composição equilibrada.\n• Uso da xilogravura (ukiyo-e).\n• Influência do Zen e da simplicidade.\n\n🖼️ **Obra Importante:**\n• A Grande Onda de Kanagawa.',
    matchedKey: 'arte_japonesa'
  },
  {
    palavras: ['arte chinesa', 'o que e arte chinesa', 'periodo arte chinesa', 'china arte'],
    resposta: '🐉 **ARTE CHINESA**\n\n**O que é?**\nÉ a arte desenvolvida na China ao longo de milhares de anos. Ela busca mostrar a harmonia entre as pessoas, a natureza e o universo.\n\n📅 **Período:** Cerca de 3000 a.C. até os dias atuais.\n\n🎨 **Artistas Principais:** Gu Kaizhi, Zhang Daqian.\n\n🌟 **Características:**\n• Harmonia entre ser humano e natureza.\n• Pinturas com tinta sobre seda e papel.\n• Caligrafia como forma de arte.\n• Influência do Confucionismo, Taoismo e Budismo.\n\n🖼️ **Obra Importante:**\n• Ao Longo do Rio Durante o Festival Qingming.',
    matchedKey: 'arte_chinesa'
  },
  {
    palavras: ['expressionismo', 'o que e expressionismo', 'movimento expressionista'],
    resposta: '🎭 **EXPRESSIONISMO**\n\n**O que é?**\nÉ um movimento artístico que mostra os sentimentos das pessoas, como alegria, medo, tristeza ou raiva, usando cores fortes e formas distorcidas.',
    matchedKey: 'expressionismo'
  },
  {
    palavras: ['arte europeia', 'o que e arte europeia'],
    resposta: '🌍 **ARTE EUROPEIA**\n\n**O que é?**\nÉ o conjunto das artes produzidas nos países da Europa. Dela nasceram muitos movimentos importantes, como o Renascimento, o Barroco, o Impressionismo e o Modernismo.',
    matchedKey: 'arte_europeia'
  },
  {
    palavras: ['arte bizantina', 'o que e arte bizantina', 'bizantino', 'mosaico bizantino'],
    resposta: '✨ **ARTE BIZANTINA**\n\n**O que é?**\nÉ uma arte religiosa criada no antigo Império Bizantino. Ficou famosa pelos mosaicos brilhantes e pelas imagens de santos e igrejas.',
    matchedKey: 'arte_bizantina'
  },
  {
    palavras: ['arte islamica', 'arte islâmica', 'o que e arte islamica', 'o que e arte islâmica'],
    resposta: '🌙 **ARTE ISLÂMICA**\n\n**O que é?**\nÉ a arte dos povos que seguem a religião islâmica. Ela é conhecida pelos desenhos geométricos, arabescos e pela bela caligrafia.',
    matchedKey: 'arte_islamica'
  },
  {
    palavras: ['arte pre colombiana', 'arte pré colombiana', 'o que e arte pre colombiana', 'o que e arte pré colombiana', 'asteca', 'maia', 'inca'],
    resposta: '🏞️ **ARTE PRÉ-COLOMBIANA**\n\n**O que é?**\nÉ a arte criada pelos povos que viviam nas Américas antes da chegada dos europeus, como maias, astecas e incas.',
    matchedKey: 'arte_pre_colombiana'
  },
  {
    palavras: ['arte digital', 'o que e arte digital'],
    resposta: '💻 **ARTE DIGITAL**\n\n**O que é?**\nÉ a arte feita com computadores, tablets ou celulares. Os artistas usam programas digitais para criar desenhos, pinturas, animações e imagens.',
    matchedKey: 'arte_digital'
  },
  {
    palavras: ['arte com inteligencia artificial', 'arte com inteligência artificial', 'arte com ia', 'o que e arte com ia', 'o que e arte com inteligencia artificial', 'o que e arte com inteligência artificial', 'ia arte', 'inteligencia artificial arte'],
    resposta: '🤖 **ARTE COM INTELIGÊNCIA ARTIFICIAL (IA)**\n\n**O que é?**\nÉ uma forma de criar arte usando programas de Inteligência Artificial. O artista dá ideias, escreve comandos ou envia imagens, e a IA ajuda a criar novas obras. O resultado depende da criatividade de quem usa essa ferramenta.\n\n👉 **Para lembrar:** A IA não cria sozinha. Ela é uma ferramenta que trabalha junto com o artista, assim como um pincel, um lápis ou um computador. 🎨🤖',
    matchedKey: 'arte_ia'
  },
  {
    palavras: ['arte naif', 'arte naïf', 'o que e arte naif', 'o que e arte naïf', 'movimento naif', 'movimento naïf'],
    resposta: '🌼 **ARTE NAÏF**\n\n**O que é?**\nA Arte Naïf é um estilo de arte que representa o mundo de forma simples, colorida e criativa. Os artistas pintam cenas do dia a dia, da natureza e das pessoas com muita imaginação, sem se preocupar em seguir todas as regras da pintura tradicional.\n\n📅 **Período:** Final do século XIX até os dias atuais.\n\n🎨 **Artistas Principais:** Henri Rousseau, Heitor dos Prazeres, Madalena Santos Reinbolt.\n\n🌟 **Características:**\n• Cores vivas e alegres.\n• Pinturas simples, espontâneas e cheias de detalhes.\n• Temas do cotidiano, da natureza, das festas e da cultura popular.\n• Pouca preocupação com perspectiva e proporções.\n• Muitos artistas são autodidatas, ou seja, aprenderam a pintar sem estudar em uma escola de arte.\n\n👉 **Para lembrar:**\nA Arte Naïf mostra o mundo com um olhar simples, alegre e cheio de imaginação. 🎨🌻\n\n🖼️ **Obra Importante:**\n• O Sonho.',
    matchedKey: 'arte_naif'
  },
  { 
    palavras: ['máscaras africanas'], 
    resposta: '🎭 As máscaras africanas são usadas em rituais, festas e cerimônias. Cada máscara tem um significado especial e representa um espírito ou ancestral. São feitas de madeira, tecido, palha e decoradas com cores e materiais naturais.' 
  },
  { 
    palavras: ['pintura corporal indígena'], 
    resposta: '🖌️ Muitos povos indígenas pintam o corpo com tintas naturais (como urucum, jenipapo) para rituais, guerras ou festas. Cada desenho conta uma história, mostra a que grupo a pessoa pertence ou afasta maus espíritos. É uma arte que vive na pele!' 
  },

  // ===== TÉCNICAS ARTÍSTICAS =====
  { 
    palavras: ['aquarela', 'técnica aquarela'], 
    resposta: '💧 Aquarela é uma técnica de pintura com tinta dissolvida em água. As cores ficam transparentes e suaves, criando efeitos delicados. Os artistas usam pincéis e papel especial. É ótima para pintar céus, flores e paisagens sonhadoras!' 
  },
  { 
    palavras: ['pintura a óleo', 'óleo sobre tela'], 
    resposta: '🖼️ Pintura a óleo usa tintas feitas com pigmentos e óleo (como linhaça). Elas demoram mais a secar, permitindo misturar e criar detalhes. Grandes mestres como Leonardo da Vinci e Van Gogh usaram essa técnica. As cores ficam bem vibrantes e duradouras.' 
  },
  { 
    palavras: ['colagem', 'técnica de colagem'], 
    resposta: '✂️ Colagem é uma técnica onde colamos pedaços de papel, tecido, fotos ou outros materiais sobre uma superfície. Artistas como Picasso e Henri Matisse fizeram colagens incríveis. Dá para criar composições surreais e cheias de textura!' 
  },
  // ===== PINTORES ADICIONAIS =====
  { 
    palavras: ['pablo picasso', 'picasso', 'quem foi picasso'], 
    resposta: 'Pablo Picasso foi um pintor espanhol, criador do Cubismo. 🖼️ Ele desenhava pessoas e objetos com formas diferentes e divertidas. O que ele ensina: que não existe só um jeito de desenhar.',
    matchedKey: 'pablo_picasso'
  },
  { 
    palavras: ['joan miró', 'miró', 'quem foi joan miró'], 
    resposta: 'Joan Miró foi um pintor espanhol de arte moderna. ✨ Ele usava formas simples como estrelas e linhas. O que ele ensina: a brincar com formas.',
    matchedKey: 'joan_miro'
  },
  { 
    palavras: ['paul klee', 'klee', 'quem foi paul klee'], 
    resposta: 'Paul Klee foi um pintor suíço de arte moderna. 🖍️ Ele desenhava como se fosse uma child curiosa. O que ele ensina: liberdade para criar.',
    matchedKey: 'paul_klee'
  },
  { 
    palavras: ['anita malfatti', 'malfatti', 'quem foi anita malfatti'], 
    resposta: 'Anita Malfatti foi uma pintora brasileira do Modernismo. 🇧🇷 Ela pintava pessoas com cores fortes. O que ela ensina: coragem para inovar.' 
  },
  { 
    palavras: ['vik muniz', 'muniz', 'quem é vik muniz'], 
    resposta: 'Vik Muniz é um artista brasileiro contemporâneo. ♻️ Ele cria arte com objetos diferentes, como lixo e doces. O que ele ensina: criar com qualquer material.',
    matchedKey: 'vik_muniz'
  },
  { 
    palavras: ['carybé', 'quem foi carybé'], 
    resposta: 'Carybé foi um artista argentino-brasileiro de arte moderna. 🥁 Ele desenhava festas, danças e cultura popular. O que ele ensina: valorizar a cultura.',
    matchedKey: 'carybe'
  },
  { 
    palavras: ['heitor dos prazeres', 'heitor', 'quem foi heitor dos prazeres'], 
    resposta: 'Heitor dos Prazeres foi um pintor, compositor e sambista brasileiro. 🎶 Ele pintava festas, samba e alegria. O que ele ensina: arte nasce da vida.',
    matchedKey: 'heitor_dos_prazeres'
  },
  { 
    palavras: ['adriana varejão', 'varejão', 'quem é adriana varejão'], 
    resposta: 'Adriana Varejão é uma artista brasileira contemporânea. 🏛️ Ela mistura história e imaginação em suas obras. O que ela ensina: arte também faz pensar.',
    matchedKey: 'adriana_varejao'
  },
  { 
    palavras: ['arthur bispo do rosário', 'bispo', 'quem foi arthur bispo do rosário'], 
    resposta: 'Arthur Bispo do Rosário foi um artista brasileiro de arte singular. 🧵 Ele criava arte com objetos do dia a dia, como tecidos e linhas. O que ele ensina: tudo pode virar arte.',
    matchedKey: 'arthur_bispo_do_rosario'
  },
  { 
    palavras: ['silvana mendes', 'silvia mendes', 'silvana', 'silvia', 'quem e silvana mendes', 'quem e silvia mendes'], 
    resposta: 'Silvana Mendes (nascida em 1980, no Maranhão) é uma artista visual, fotógrafa e pesquisadora brasileira. 📸 Ela trabalha com colagens, pinturas e fotografias que celebram a memória, ancestralidade e identidade afro-brasileira! O que ela ensina: a beleza de honrar nossa história e identidade.',
    matchedKey: 'silvana_mendes'
  },
  { 
    palavras: ['arjan martins', 'arjan', 'quem e arjan martins'], 
    resposta: 'Arjan Martins (nascido em 1960, no Rio de Janeiro) é um pintor e escultor brasileiro. ⛴️ Suas obras retratam a história marítima, a diáspora africana e as migrações com cores e traços incríveis. O que ele ensina: nossa história tem muitas vozes importantes.',
    matchedKey: 'arjan_martins'
  },
  { 
    palavras: ['maxwell alexandre', 'maxwell', 'quem e maxwell alexandre'], 
    resposta: 'Maxwell Alexandre (nascido em 1990, no Rio de Janeiro) é um artista contemporâneo super descolado! 🥤 Ele pinta em grandes telas que retratam a vida nas periferias, o cotidiano e a força da juventude negra brasileira. O que ele ensina: a dar voz à nossa reality com orgulho.',
    matchedKey: 'maxwell_alexandre'
  },
  { 
    palavras: ['rosana paulino', 'rosana', 'quem e rosana paulino'], 
    resposta: 'Rosana Paulino (nascida em 1967, em São Paulo) é artista visual, curadora e educadora. 🧵 Ela usa tecidos, costuras, linhas e fotos antigas para falar sobre memória, identidade e o respeito à mulher negra. O que ela ensina: a costurar nossas memórias com amor e reflexão.',
    matchedKey: 'rosana_paulino'
  },
  {
    palavras: ['madalena dos santos reinbolt', 'madalena reinbolt', 'madalena', 'reinbolt', 'quem foi madalena dos santos reinbolt', 'quem e madalena dos santos reinbolt'],
    resposta: 'Madalena dos Santos Reinbolt (1919–1977) foi uma fantástica pintora e artista têxtil brasileira. 🧶 Ela usava linhas coloridas e agulhas para criar impressionantes "quadros de lã" que mostravam festas populares, o cotidiano e a vida no campo. O que ela ensina: a expressar nossas memórias e histórias através de linhas e cores vibrantes.',
    matchedKey: 'madalena_reinbolt'
  },
  { 
    palavras: ['eduardo kobra', 'kobra', 'quem e eduardo kobra'], 
    resposta: 'Eduardo Kobra (nascido em 1975, em São Paulo) é um dos maiores muralistas do mundo! 🌈 Ele pinta prédios inteiros com desenhos geométricos super coloridos que trazem mensagens de paz, tolerância e muito amor. O que ele ensina: colorir o mundo com mensagens de paz.',
    matchedKey: 'eduardo_kobra'
  },
  { 
    palavras: ['os gemeos', 'os gêmeos', 'gemeos', 'gêmeos', 'quem sao os gemeos'], 
    resposta: 'Os Gêmeos (Otávio e Gustavo Pandolfo, nascidos em 1974, em São Paulo) são irmãos que grafitam juntos! 💛 Eles criam um mundo de fantasia repleto de personagens amarelinhos super divertidos em muros pelo mundo todo. O que eles ensinam: a imaginação de irmãos pode conquistar as ruas.',
    matchedKey: 'os_gemeos'
  },
  { 
    palavras: ['romero britto', 'romero brito', 'britto', 'brito', 'quem e romero britto'], 
    resposta: 'Romero Britto (nascido em 1963, em Recife) é um pintor e escultor que faz muito sucesso mundialmente! ❤️ Ele cria desenhos de bichinhos, flores e corações misturando listras, círculos e cores neon super vibrantes. O que ele ensina: espalhar sorais e alegria através da arte.',
    matchedKey: 'romero_britto'
  },
  {
    palavras: ['historia da musica', 'historia da musica', 'história da música', 'história da musica', 'como surgiu a musica', 'como surgiu a música', 'origem da musica', 'origem da música'],
    resposta: `# História da Música 🎶\n\nA música existe há milhares de anos e faz parte da vida das pessoas em todo o mundo. Desde os tempos mais antigos, os seres humanos utilizavam sons, batidas e cantos para se comunicar, celebrar festas e contar histórias.\n\n## A Música na Pré-História 🦴\nOs primeiros instrumentos musicais eram feitos de ossos, pedras, madeira e conchas. As pessoas produziam sons batendo objetos ou usando a própria voz.\n\n## A Música na Antiguidade 🏛️\nEm civilizações como o Egito, a Grécia e Roma, a música era usada em cerimônias religiosas, festas e apresentações. Instrumentos como harpas, flautas e liras eram muito populares.\n\n## A Música na Idade Média 🏰\nDurante a Idade Média, muitas músicas eram ligadas à religião. Os cantos eram realizados em igrejas e mosteiros. Surgiram também os trovadores, que cantavam histórias sobre aventuras e amor.\n\n## A Música no Renascimento 🎨\nNesse período, a música tornou-se mais elaborada. Novos instrumentos foram criados e os compositores passaram a escrever músicas mais complexas.\n\n## A Música no Período Clássico 🎼\nGrandes compositores, como Wolfgang Amadeus Mozart, criaram obras que são famosas até hoje. As orquestras cresceram e os concertos ficaram mais populares.\n\n## A Música no Período Romântico ❤️\nOs compositores passaram a expressar mais sentimentos em suas obras. A música tornou-se mais emocionante e cheia de emoções.\n\n## A Música nos Tempos Modernos 📱\nCom o avanço da tecnologia, surgiram novos estilos musicais, como jazz, rock, pop, rap e música eletrônica. Hoje, podemos ouvir músicas de diferentes partes do mundo usando celulares, computadores e outros aparelhos.\n\n## Conclusão ✨\nA música evoluiu ao longo da história, mas continua tendo a mesma importância: alegrar, emocionar, divertir e unir as pessoas. Ela faz parte da cultura e da vida de todos nós.`,
    matchedKey: 'musica'
  },
  {
    palavras: ['historia do teatro', 'história do teatro', 'como surgiu o teatro', 'origem do teatro'],
    resposta: `# História do Teatro 🎭\n\nO teatro é uma forma de arte em que atores representam personagens para contar histórias. Ele existe há milhares de anos e continua encantando pessoas de todas as idades.\n\n## O Início do Teatro 🏛️\nO teatro surgiu na Antiguidade, na Grécia, há cerca de 2.500 anos. As primeiras apresentações aconteciam em grandes espaços ao ar livre e faziam parte de festas religiosas.\n\n## O Teatro na Antiguidade 🎭\nOs gregos criaram peças de comédia e tragédia. Os atores usavam máscaras para representar diferentes personagens e emoções.\n\n## O Teatro na Idade Média ⛪\nDurante a Idade Média, muitas peças apresentavam histórias religiosas e eram encenadas em igrejas e praças públicas.\n\n## O Teatro no Renascimento 👑\nO teatro cresceu e tornou-se mais popular. Novos teatros foram construídos, e grandes autores escreveram peças famosas, como William Shakespeare.\n\n## O Teatro nos Tempos Modernos 🌟\nCom o passar do tempo, surgiram diferentes estilos de teatro. Os cenários, figurinos e efeitos especiais ficaram mais elaborados, tornando as apresentações ainda mais interessantes.\n\n## O Teatro Hoje 🎬\nAtualmente, o teatro pode ser apresentado em escolas, teatros, praças e muitos outros lugares. Existem peças para crianças, jovens e adultos, com histórias divertidas, emocionantes e educativas.\n\n## Conclusão ✨\nO teatro é uma arte que une atuação, expressão corporal, fala, música e criatividade. Ele ajuda a contar histórias, transmitir sentimentos e aproximar as pessoas da cultura.`,
    matchedKey: 'teatro'
  },
  {
    palavras: ['historia da literatura', 'história da literatura', 'como surgiu a literatura', 'origem da literatura'],
    resposta: `# História da Literatura 📚\n\nA literatura é a arte de contar histórias por meio da escrita e da palavra falada. Ela ajuda as pessoas a compartilhar ideias, sentimentos, conhecimentos e imaginação.\n\n## O Início da Literatura 🗣️\nAntes da invenção da escrita, as histórias eram contadas de geração em geração por meio da fala. Essas narrativas ensinavam costumes, tradições e valores.\n\n## A Literatura na Antiguidade 📜\nCom o surgimento da escrita, as histórias passaram a ser registradas em pedras, papiros e pergaminhos. Poemas, lendas e aventuras foram preservados para as futuras gerações.\n\n## A Literatura na Idade Média 🛡️\nMuitas histórias falavam sobre cavaleiros, reis, princesas e aventuras. Também eram comuns os textos religiosos e as narrativas sobre heróis.\n\n## A Literatura no Renascimento 🔭\nOs escritores passaram a valorizar mais o ser humano, a ciência e a observação da natureza. Muitas obras importantes foram produzidas nesse período.\n\n## A Literatura Moderna 📰\nCom a invenção da imprensa, os livros tornaram-se mais acessíveis. Surgiram novos gêneros literários, como romances, contos e histórias infantis.\n\n## A Literatura Contemporânea 📱\nHoje, a literatura está presente em livros, revistas, jornais e até em formatos digitais. Existem histórias para todos os gostos e idades.\n\n## Conclusão ✨\nA literatura faz parte da cultura da humanidade. Por meio das histórias, aprendemos sobre o passado, desenvolvemos a imaginação e conhecemos diferentes ideias e culturas.`,
    matchedKey: 'literatura'
  },
  {
    palavras: ['historia da arte no brasil', 'história da arte no brasil', 'história da arte brasileira', 'historia da arte brasileira', 'arte no brasil historia', 'arte no brasil história'],
    resposta: `# História da Arte no Brasil 🇧🇷\n\nA história da arte no Brasil começou muito antes da chegada dos portugueses. Os povos indígenas já produziam arte por meio de pinturas corporais, cerâmicas, cestos, músicas e danças.\n\n## Arte no Período Colonial ⛪\nCom a chegada dos portugueses em 1500, a arte recebeu influências europeias. Igrejas, esculturas e pinturas religiosas tornaram-se comuns. Nesse período destacou-se o artist Antônio Francisco Lisboa, o Aleijadinho, famoso por suas esculturas e obras barrocas.\n\n## Arte no Século XIX 🖼️\nNo século XIX, artistas passaram a retratar a história, a natureza e o povo brasileiro. Muitas pinturas mostravam paisagens, costumes e acontecimentos importantes do país.\n\n## Arte Moderna 🎨\nEm 1922 aconteceu a Semana de Arte Moderna, um marco importante para a arte brasileira. Os artistas buscavam criar obras com características próprias do Brasil.\n\n## Arte Contemporânea 🌐\nHoje, a arte brasileira é muito diversa. Ela inclui pinturas, esculturas, fotografias, grafites, vídeos e arte digital. Os artistas utilizam diferentes materiais e técnicas para expressar suas ideias.\n\n## Artistas Brasileiros Famosos 🌟\nEntre os artistas mais conhecidos estão Tarsila do Amaral, Cândido Portinari e Anita Malfatti.\n\n## Conclusão ✨\nA arte brasileira reflete a diversidade cultural do país. Ela reúne influências indígenas, africanas, europeias e de muitos outros povos, formando uma rica expressão da identidade do Brasil.`,
    matchedKey: 'arte'
  },
  {
    palavras: [
      'historia da danca no brasil', 'historia da dança no brasil', 'história da danca no brasil', 'história da dança no brasil', 
      'danca no brasil historia', 'dança no brasil história', 'dança no brasil historia', 'danca no brasil história',
      'historia danca no brasil', 'história danca no brasil', 'historia d danca no br', 'história d danca no br',
      'historia da danca no br', 'história da dança no br', 'danca no br historia', 'dança no br história'
    ],
    resposta: `# História da Dança no Brasil 🇧🇷\n\nA dança faz parte da cultura brasileira desde antes da chegada dos portugueses. Os povos indígenas realizavam danças em festas, celebrações e rituais para marcar acontecimentos importantes.\n\n## Influência Africana 🥁\nCom a chegada dos povos africanos ao Brasil, muitas danças, ritmos e tradições foram incorporados à cultura brasileira. Essas influências deram origem a manifestações culturais muito importantes.\n\n## Influência Europeia 🎻\nOs portugueses trouxeram danças populares da Europa, que também passaram a fazer parte da cultura do país. Com o tempo, as tradições europeias se misturaram às indígenas e africanas.\n\n## Danças Tradicionais Brasileiras 💃\nAo longo da história surgiram diversas danças típicas brasileiras, como o samba, o frevo, o maracatu, a quadrilha e o forró. Cada região do Brasil desenvolveu suas próprias manifestações culturais.\n\n## O Samba 🥁\nO samba é uma das danças mais conhecidas do Brasil. Ele surgiu a partir das tradições africanas e tornou-se um símbolo da cultura brasileira, especialmente durante o Carnaval.\n\n## A Dança Hoje ✨\nAtualmente, o Brasil possui uma grande diversidade de estilos de dança. Além das danças tradicionais, muitas pessoas praticam balé, dança contemporânea, hip-hop e outros estilos.\n\n## Conclusão 💫\nA dança brasileira é resultado da mistura de diferentes culturas. Ela representa a alegria, a criatividade e a diversidade do povo brasileiro.`,
    matchedKey: 'danca_brasil'
  },
  {
    palavras: [
      'historia do desenho no brasil', 'história do desenho no brasil', 'como surgiu o desenho no brasil', 'origem do desenho no brasil', 
      'desenho no brasil historia', 'desenho no brasil história',
      'historia desenho no brasil', 'história desenho no brasil', 'historia d desenho no br', 'história d desenho no br',
      'historia do desenho no br', 'história do desenho no br', 'desenho no br historia', 'desenho no br história'
    ],
    resposta: `# História do Desenho no Brasil (para crianças de 10 anos) 🖍️🇧🇷\n\nO desenho faz parte da história do Brasil há muito tempo. Antes mesmo da chegada dos portugueses, os povos indígenas já faziam desenhos em pedras, cerâmicas, cestos e pinturas corporais para contar histórias, representar a natureza e registrar costumes.\n\n## Período Colonial (1500-1822) 📜\nDurante a colonização, muitos desenhos eram usados para registrar paisagens, plantas, animais e a vida das pessoas no Brasil. Viajantes e artistas europeus desenhavam o que viam para mostrar o país na Europa.\n\n## Império do Brasil (1822-1889) 🏛️\nCom a chegada da família real portuguesa e da chamada Missão Artística Francesa, o ensino do desenho tornou-se mais organizado. Surgiram escolas de arte onde os alunos aprendiam a desenhar pessoas, paisagens e objetos. O desenho era considerado importante para a educação das elites e para a formação artística.\n\n## Época Moderna (Século XX) 🎨\nO desenho passou a ser ensinado em mais escolas e também foi utilizado na indústria, na arquitetura, na publicidade e nas histórias em quadrinhos. Artistas brasileiros criaram estilos próprios inspirados na cultura nacional.\nEntre os artistas que valorizaram o desenho estão Candido Portinari, que fazia muitos estudos desenhados antes de pintar suas obras, e Tarsila do Amaral, importante representante do modernismo brasileiro.\n\n## Atualmente 📱\nHoje o desenho está presente em livros, quadrinhos, animações, jogos digitais, design e arte digital. Muitas crianças aprendem a desenhar tanto no papel quanto em computadores e tablets.\n\n## Resumindo 📝\n- Os primeiros desenhos no Brasil foram feitos pelos povos indígenas.\n- No período colonial, viajantes registravam o país por meio do desenho.\n- No Império surgiram escolas de arte e o ensino do desenho.\n- No século XX o desenho ganhou espaço nas escolas, quadrinhos e publicidade.\n- Atualmente o desenho também é feito com tecnologias digitais.\n\n## Curiosidade 💡\nO desenho é uma das formas mais antigas de comunicação da humanidade e continua sendo usado para criar arte, contar histórias e expressar ideias.`,
    matchedKey: 'desenho_brasil'
  }
];

export interface PorqueItem {
  keywords: string[];
  pergunta: string;
  resposta: string;
  voceSabia?: string;
  voceSabiaEmoji?: string;
  experimente?: string;
  experimenteEmoji?: string;
  pergunteTambem?: string[];
  comoFazerEsboco?: string;
  dicaCandinho?: string;
}

export const PORQUES_ARTE: PorqueItem[] = [
  // 🎨 PORQUÊS DOS MATERIAIS
  {
    keywords: ["guache", "tinta guache"],
    pergunta: "Por que usamos tinta guache?",
    resposta: "Porque o guache tem cores fortes, cobre bem o papel e seca rapidamente. Ele também permite corrigir partes da pintura e fazer novas camadas de tinta."
  },
  {
    keywords: ["aquarela", "usamos aquarela"],
    pergunta: "Por que usamos aquarela?",
    resposta: "Porque a aquarela cria pinturas leves e transparentes. A água faz parte da pintura e produz efeitos delicados."
  },
  {
    keywords: ["tinta acrilica", "acrilica"],
    pergunta: "Por que usamos tinta acrílica?",
    resposta: "Porque seca rápido, tem cores vivas e pode ser usada em tela, madeira, papel e outros materiais."
  },
  {
    keywords: ["tinta a oleo", "tinta oleo", "oleo sobre tela"],
    pergunta: "Por que usamos tinta a óleo?",
    resposta: "Porque seca lentamente, permitindo misturar cores por mais tempo e criar muitos detalhes."
  },
  {
    keywords: ["lapis de cor", "lapis colorido"],
    pergunta: "Por que usamos lápis de cor?",
    resposta: "Porque ele permite controlar melhor os detalhes e fazer diferentes intensidades de cor."
  },
  {
    keywords: ["giz de cera", "giz cera"],
    pergunta: "Por que usamos giz de cera?",
    resposta: "Porque desliza facilmente no papel, possui cores vibrantes e é fácil de usar pelas crianças."
  },
  {
    keywords: ["carvao", "carvão"],
    pergunta: "Por que usamos carvão?",
    resposta: "Porque cria sombras fortes e facilita o estudo da luz e do volume."
  },
  {
    keywords: ["nanquim", "tinta nanquim"],
    pergunta: "Por que usamos nanquim?",
    resposta: "Porque produz linhas muito pretas, precisas e permanentes."
  },
  {
    keywords: ["pinceis diferentes", "pinceis", "pincel diferente", "pincel"],
    pergunta: "Por que usamos pincéis diferentes?",
    resposta: "Porque cada pincel cria um tipo diferente de traço, textura e acabamento."
  },
  {
    keywords: ["espatula", "espatulas"],
    pergunta: "Por que usamos espátula?",
    resposta: "Porque cria texturas grossas e efeitos que o pincel não consegue fazer."
  },

  // ✏️ PORQUÊS DO DESENHO
  {
    keywords: ["rascunho", "fazer rascunho", "fazemos rascunho"],
    pergunta: "Por que fazemos um rascunho?",
    resposta: "Porque ele ajuda a planejar o desenho antes da versão final."
  },
  {
    keywords: ["formas simples", "desenhamos formas simples", "formas simples primeiro"],
    pergunta: "Por que desenhamos formas simples primeiro?",
    resposta: "Porque círculos, quadrados e triângulos ajudam a construir figuras mais complexas."
  },
  {
    keywords: ["apagamos algumas linhas", "apagar algumas linhas", "apagamos linhas", "apagar linhas"],
    pergunta: "Por que apagamos algumas linhas?",
    resposta: "Porque elas serviram apenas como guia durante o desenho."
  },
  {
    keywords: ["olhando para o objeto", "olhando objeto", "desenhar olhando"],
    pergunta: "Por que desenhar olhando para o objeto?",
    resposta: "Porque observar melhora a percepção das formas, proporções e detalhes."
  },
  {
    keywords: ["todos os dias", "desenhar todos os dias", "desenhar todo dia"],
    pergunta: "Por que desenhar todos os dias?",
    resposta: "Porque a prática melhora a coordenação motora, a observação e a criatividade."
  },
  {
    keywords: ["anatomia", "estudar anatomia"],
    pergunta: "Por que estudar anatomia?",
    resposta: "Porque conhecer o corpo ajuda a desenhar pessoas e animais de forma mais convincente."
  },
  {
    keywords: ["perspectiva", "estudar perspectiva"],
    pergunta: "Por que estudar perspectiva?",
    resposta: "Porque ela cria a sensação de profundidade em uma superfície plana."
  },
  {
    keywords: ["esbocos rapidos", "esboços rápidos", "esboco rapido", "esboço rápido"],
    pergunta: "Por que fazer esboços rápidos?",
    resposta: "Porque eles treinam o olhar e ajudam a capturar movimentos."
  },

  // 🌈 PORQUÊS DAS CORES
  {
    keywords: ["cores quentes", "existem cores quentes"],
    pergunta: "Por que existem cores quentes?",
    resposta: "Porque lembram elementos como fogo e sol e costumam transmitir energia."
  },
  {
    keywords: ["cores frias", "existem cores frias"],
    pergunta: "Por que existem cores frias?",
    resposta: "Porque lembram água, céu e natureza, transmitindo calma."
  },
  {
    keywords: ["misturamos cores", "misturar cores"],
    pergunta: "Por que misturamos cores?",
    resposta: "Porque novas cores podem ser criadas a partir das cores primárias."
  },
  {
    keywords: ["cores parecem mais fortes", "cores mais fortes", "parecem mais fortes"],
    pergunta: "Por que algumas cores parecem mais fortes?",
    resposta: "Porque possuem maior intensidade e contraste."
  },
  {
    keywords: ["poucas cores", "pinturas usam poucas cores", "usar poucas cores"],
    pergunta: "Por que algumas pinturas usam poucas cores?",
    resposta: "Porque isso cria unidade e destaca determinados elementos."
  },

  // 🖌️ PORQUÊS DAS TÉCNICAS
  {
    keywords: ["fazemos sombras", "sombras", "fazer sombras"],
    pergunta: "Por que fazemos sombras?",
    resposta: "Porque elas mostram onde a luz não chega e ajudam a criar volume."
  },
  {
    keywords: ["usamos luz", "usar luz"],
    pergunta: "Por que usamos luz?",
    resposta: "Porque a luz revela formas, profundidade e atmosfera."
  },
  {
    keywords: ["textura", "usamos textura"],
    pergunta: "Por que usamos textura?",
    resposta: "Porque ela faz a superfície parecer lisa, áspera, macia ou rugosa."
  },
  {
    keywords: ["linhas", "usamos linhas"],
    pergunta: "Por que usamos linhas?",
    resposta: "Porque elas delimitam formas, mostram movimento e organizam a composição."
  },
  {
    keywords: ["pontos", "usamos pontos"],
    pergunta: "Por que usamos pontos?",
    resposta: "Porque muitos pontos juntos podem formar imagens, texturas e sombras."
  },
  {
    keywords: ["contraste", "usamos contraste"],
    pergunta: "Por que usamos contraste?",
    resposta: "Porque ele destaca partes importantes da obra."
  },
  {
    keywords: ["equilibrio", "equilíbrio", "usamos equilibrio", "usamos equilíbrio"],
    pergunta: "Por que usamos equilíbrio?",
    resposta: "Porque distribui os elementos da composição de maneira agradável."
  },
  {
    keywords: ["repeticao", "repetição", "usamos repeticao", "usamos repetição"],
    pergunta: "Por que usamos repetição?",
    resposta: "Porque ela cria ritmo visual."
  },
  {
    keywords: ["simetria", "usamos simetria"],
    pergunta: "Por que usamos simetria?",
    resposta: "Porque transmite organização e estabilidade."
  },
  {
    keywords: ["assimetria", "usamos assimetria"],
    pergunta: "Por que usamos assimetria?",
    resposta: "Porque pode tornar a composição mais dinâmica."
  },

  // 🏛️ HISTÓRIA DA ARTE
  {
    keywords: ["homens das cavernas", "homem das cavernas", "cavernas desenhavam", "caverna desenhavam"],
    pergunta: "Por que os homens das cavernas desenhavam?",
    resposta: "Porque registravam animais, caçadas e acontecimentos importantes de seu cotidiano."
  },
  {
    keywords: ["egipcios desenhavam", "egípcios desenhavam", "egipcios", "egípcios", "pessoas de lado", "desenhavam de lado"],
    pergunta: "Por que os egípcios desenhavam pessoas de lado?",
    resposta: "Porque queriam mostrar cada parte do corpo pelo ângulo considerado mais reconhecível."
  },
  {
    keywords: ["gregos faziam", "esculturas detalhadas", "gregos", "gregas"],
    pergunta: "Por que os gregos faziam esculturas tão detalhadas?",
    resposta: "Porque valorizavam a observação da natureza e do corpo humano."
  },
  {
    keywords: ["romanos copiavam", "romanos", "copiavam esculturas"],
    pergunta: "Por que os romanos copiavam esculturas gregas?",
    resposta: "Porque admiravam a arte grega e desejavam preservar esse estilo."
  },
  {
    keywords: ["arte medieval", "medieval era muito religiosa", "religiosa medieval"],
    pergunta: "Por que a arte medieval era muito religiosa?",
    resposta: "Porque a religião ocupava um papel central na sociedade europeia da época."
  },
  {
    keywords: ["surgiu o renascimento", "surgiu renascimento", "renascimento"],
    pergunta: "Por que surgiu o Renascimento?",
    resposta: "Porque artistas passaram a estudar a natureza, a ciência e o ser humano de maneira mais intensa."
  },
  {
    keywords: ["da vinci estudava anatomia", "leonardo da vinci anatomia", "da vinci anatomia"],
    pergunta: "Por que Leonardo da Vinci estudava anatomia?",
    resposta: "Porque queria compreender o corpo para representá-lo com maior precisão."
  },
  {
    keywords: ["michelangelo esculpia", "esculpia marmore", "esculpia mármore"],
    pergunta: "Por que Michelangelo esculpia mármore?",
    resposta: "Porque o mármore é resistente, belo e permite criar muitos detalhes."
  },
  {
    keywords: ["van gogh pinceladas", "van gogh", "pinceladas grossas", "gogh pinceladas"],
    pergunta: "Por que Van Gogh usava pinceladas grossas?",
    resposta: "Porque queria transmitir emoção e movimento através da pintura."
  },
  {
    keywords: ["monet pintava a mesma", "monet mesma paisagem", "monet"],
    pergunta: "Por que Monet pintava a mesma paisagem várias vezes?",
    resposta: "Porque desejava mostrar como a luz mudava ao longo do dia."
  },
  {
    keywords: ["picasso mudou", "picasso", "picasso mudou seu jeito"],
    pergunta: "Por que Picasso mudou seu jeito de pintar?",
    resposta: "Porque gostava de experimentar novas formas de representar a realidade."
  },
  {
    keywords: ["surgiu a arte abstrata", "surgiu arte abstrata", "arte abstrata", "abstrata"],
    pergunta: "Por que surgiu a arte abstrata?",
    resposta: "Porque alguns artistas queriam expressar ideias, sentimentos e formas sem representar objetos reconhecíveis."
  },
  {
    keywords: ["portinari pintava trabalhadores", "portinari", "trabalhadores"],
    pergunta: "Por que Portinari pintava trabalhadores?",
    resposta: "Porque desejava retratar o povo brasileiro, seu trabalho e suas dificuldades."
  },
  {
    keywords: ["tarsila do amaral pintava figuras", "tarsila figuras diferentes", "tarsila figuras", "tarsila do amaral figuras"],
    pergunta: "Por que Tarsila do Amaral pintava figuras diferentes?",
    resposta: "Porque buscava criar uma arte com identidade brasileira, inspirada em nossa cultura e paisagens."
  },

  // 🎭 EXPRESSÃO
  {
    keywords: ["arte transmite emocoes", "arte transmite emoções", "transmite emocoes", "transmite emoções"],
    pergunta: "Por que a arte transmite emoções?",
    resposta: "Porque artistas usam cores, formas, linhas e temas para comunicar sentimentos e ideias."
  },
  {
    keywords: ["pintura pode parecer triste", "pintura parecer triste", "pintura triste", "obra triste"],
    pergunta: "Por que uma pintura pode parecer triste?",
    resposta: "Porque elementos como cores escuras, expressões e composição podem sugerir tristeza."
  },
  {
    keywords: ["obra pode causar medo", "causar medo", "obra causar medo", "obra medo"],
    pergunta: "Por que uma obra pode causar medo?",
    resposta: "Porque certas formas, cores e contrastes despertam sensações intensas."
  },
  {
    keywords: ["cada pessoa entende", "pessoa entende de um jeito", "observador diferente"],
    pergunta: "Por que cada pessoa entende uma obra de um jeito?",
    resposta: "Porque cada observador possui experiências, conhecimentos e emoções diferentes."
  },

  // 🎨 CRIATIVIDADE
  {
    keywords: ["copiar desenhos ajuda", "copiar desenhos", "copiar ajuda"],
    pergunta: "Por que copiar desenhos ajuda?",
    resposta: "Porque copiar pode ensinar técnicas e desenvolver a coordenação, desde que também haja espaço para criar obras próprias."
  },
  {
    keywords: ["errar faz parte", "erros ajudam", "errar faz parte da arte"],
    pergunta: "Por que errar faz parte da arte?",
    resposta: "Porque os erros ajudam a descobrir novas soluções e aprimorar as habilidades."
  },
  {
    keywords: ["imaginar e importante", "imaginar é importante", "imaginar importante"],
    pergunta: "Por que imaginar é importante?",
    resposta: "Porque muitas obras de arte nascem da imaginação."
  },
  {
    keywords: ["existem estilos diferentes", "estilos diferentes", "estilos de cada artista"],
    pergunta: "Por que existem estilos diferentes?",
    resposta: "Porque cada artista desenvolve sua própria maneira de criar."
  },

  // 🤔 CURIOSIDADES
  {
    keywords: ["mona lisa parece olhar", "mona lisa olhar para nos", "mona lisa olhar", "olhar mona lisa"],
    pergunta: "Por que a Mona Lisa parece olhar para nós?",
    resposta: "Porque Leonardo da Vinci pintou os olhos de forma que eles parecem acompanhar o observador de diferentes ângulos."
  },
  {
    keywords: ["esculturas antigas nao tem bracos", "esculturas antigas sem bracos", "sem bracos", "sem braços", "esculturas sem braços"],
    pergunta: "Por que algumas esculturas antigas não têm braços?",
    resposta: "Porque muitas foram danificadas pelo tempo, guerras ou acidentes."
  },
  {
    keywords: ["pinturas em tetos", "pintura no teto", "tetos decorados"],
    pergunta: "Por que existem pinturas em tetos?",
    resposta: "Porque artistas e arquitetos queriam decorar igrejas, palácios e edifícios, criando a sensação de um espaço mais grandioso."
  },
  {
    keywords: ["obras valem milhoes", "obras valem milhões", "valem milhoes", "valem milhões"],
    pergunta: "Por que algumas obras valem milhões?",
    resposta: "Porque podem ser únicas, históricas, raras e muito importantes para a cultura."
  },
  {
    keywords: ["artistas assinam", "assinatura do artista", "assinar as obras"],
    pergunta: "Por que artistas assinam suas obras?",
    resposta: "Porque a assinatura identifica a autoria e ajuda a registrar quem criou a obra."
  },
  {
    keywords: ["museus nao deixam tocar", "nao pode tocar", "não pode tocar", "nao deixam tocar", "não deixam tocar"],
    pergunta: "Por que museus não deixam tocar nas obras?",
    resposta: "Porque o toque pode desgastar, sujar ou danificar materiais delicados."
  },
  {
    keywords: ["pinturas racham", "pintura racha", "tela racha"],
    pergunta: "Por que algumas pinturas racham?",
    resposta: "Porque tinta, madeira e tela envelhecem e sofrem alterações com o tempo."
  },
  {
    keywords: ["existem restauradores", "restauradores", "restaurador"],
    pergunta: "Por que existem restauradores?",
    resposta: "Porque eles estudam técnicas para conservar e recuperar obras de arte danificadas."
  },
  // 🎨 PORQUÊS SUBJETIVOS E CURIOSIDADES DO CANDINHO
  {
    keywords: ["fazemos arte", "fazer arte", "por que fazemos arte"],
    pergunta: "Por que fazemos arte?",
    resposta: "Fazemos arte para expressar ideias, sentimentos, sonhos e histórias. A arte também ajuda as pessoas a observar o mundo, imaginar coisas novas e compartilhar o que pensam com outras pessoas.",
    voceSabia: "As pessoas fazem arte há mais de 40 mil anos. Existem pinturas feitas em cavernas muito antes da invenção da escrita.",
    experimente: "Desenhe algo que aconteceu hoje com você. Depois mostre para alguém sem explicar. Veja o que essa pessoa consegue entender apenas olhando o desenho.",
    pergunteTambem: ["O que é arte?", "Por que existem artistas?", "Como surgiu a arte?"]
  },
  {
    keywords: ["desenhamos", "desenhar", "por que desenhamos"],
    pergunta: "Por que desenhamos?",
    resposta: "Desenhamos para registrar ideias, observar melhor o mundo, criar personagens, planejar objetos e mostrar nossa imaginação. Um desenho pode contar uma história mesmo sem usar palavras.",
    voceSabia: "Antes de construir prédios, criar roupas ou fabricar carros, muitas pessoas fazem desenhos para planejar suas ideias.",
    experimente: "Olhe para um objeto da sua casa e tente desenhá-lo durante cinco minutos.",
    pergunteTambem: ["Como desenhar melhor?", "Por que fazer um rascunho?", "O que é um esboço?"]
  },
  {
    keywords: ["pintamos", "pintar", "por que pintamos"],
    pergunta: "Por que pintamos?",
    resposta: "Pintamos para dar cor às nossas ideias. As cores ajudam a mostrar emoções, criar ambientes e destacar partes importantes de uma imagem.",
    voceSabia: "Alguns artistas usam poucas cores, enquanto outros criam pinturas com centenas de tonalidades diferentes.",
    experimente: "Faça a mesma pintura usando apenas cores quentes. Depois tente novamente usando apenas cores frias."
  },
  {
    keywords: ["dancamos", "dançamos", "dancar", "dançar", "por que dançamos"],
    pergunta: "Por que dançamos?",
    resposta: "Dançamos para nos expressar com o corpo, acompanhar músicas, celebrar momentos especiais e nos comunicar sem falar. A dança também desenvolve equilíbrio, coordenação e criatividade.",
    voceSabia: "Existem danças em praticamente todas as culturas do mundo, cada uma com movimentos e significados próprios.",
    experimente: "Escolha uma música alegre e outra calma. Observe como seu corpo cria movimentos diferentes para cada uma."
  },
  {
    keywords: ["cantamos", "cantar", "por que cantamos"],
    pergunta: "Por que cantamos?",
    resposta: "Cantamos para expressar emoções, contar histórias, celebrar acontecimentos e nos divertir. O canto também ajuda a desenvolver a memória e a respiração.",
    voceSabia: "Antes mesmo de aprender a escrever, muitas culturas ensinavam histórias importantes por meio das canções."
  },
  {
    keywords: ["teatro", "fazemos teatro", "fazer teatro", "por que fazemos teatro"],
    pergunta: "Por que fazemos teatro?",
    resposta: "Fazemos teatro para representar personagens, contar histórias e compreender diferentes pontos de vista. No teatro usamos o corpo, a voz e a imaginação.",
    voceSabia: "No teatro, uma mesma história pode ser apresentada de muitas maneiras diferentes."
  },
  {
    keywords: ["musica", "música", "fazemos musica", "fazemos música", "por que fazemos musica", "por que fazemos música"],
    pergunta: "Por que fazemos música?",
    resposta: "Fazemos música para criar sons organizados que despertam emoções, acompanham festas, contam histórias e fazem parte da cultura das pessoas.",
    voceSabia: "Alguns instrumentos musicais têm milhares de anos de história."
  },
  {
    keywords: ["aprendemos arte", "aprender arte", "por que aprendemos arte"],
    pergunta: "Por que aprendemos arte?",
    resposta: "Aprendemos arte porque ela desenvolve a criatividade, a observação, a imaginação e a capacidade de resolver problemas. A arte também ajuda a compreender diferentes culturas e formas de pensar.",
    voceSabia: "Médicos, engenheiros, arquitetos, cientistas e inventores também usam habilidades desenvolvidas pela arte, como observar detalhes, imaginar soluções e criar novas ideias.",
    experimente: "Observe um objeto comum durante um minuto. Depois tente desenhá-lo sem olhar novamente. Compare os dois momentos e descubra quantos detalhes você percebeu."
  },
  {
    keywords: ["estudamos artistas", "estudar artistas", "por que estudamos artistas"],
    pergunta: "Por que estudamos artistas?",
    resposta: "Estudamos artistas para conhecer diferentes maneiras de criar, descobrir técnicas, entender outras épocas da história e encontrar inspiração para desenvolver nosso próprio estilo."
  },
  {
    keywords: ["criatividade", "existe criatividade", "por que existe criatividade"],
    pergunta: "Por que existe criatividade?",
    resposta: "A criatividade existe porque o ser humano consegue imaginar possibilidades, combinar ideias e criar soluções para desafios. Ela está presente na arte, na ciência, na tecnologia e em muitas atividades do dia a dia."
  },
  {
    keywords: ["imaginamos", "imaginar", "imagina", "por que imaginamos"],
    pergunta: "Por que imaginamos?",
    resposta: "Imaginamos para criar histórias, resolver problemas, inventar coisas novas e pensar em possibilidades que ainda não existem. A imaginação é uma das ferramentas mais importantes da arte."
  },
  {
    keywords: ["aprender a desenhar", "aprender desenhar", "por que aprender a desenhar"],
    pergunta: "Por que aprender a desenhar?",
    resposta: "Aprender a desenhar ajuda a observar melhor o mundo, desenvolver a coordenação das mãos, organizar ideias e comunicar pensamentos por meio de imagens. Desenhar é uma habilidade que melhora com a prática."
  },
  {
    keywords: ["esboco", "esboço", "o que e um esboco", "o que é um esboço", "como fazer um esboco", "como fazer um esboço", "fazer rascunho", "fazer um rascunho", "o que e esboco", "o que é esboço", "rascunho"],
    pergunta: "O que é um esboço?",
    resposta: "Um esboço é o primeiro desenho de uma ideia. Ele é feito com linhas leves e simples para ajudar a planejar o desenho antes da versão final.\n\nPense no esboço como um rascunho. Ele serve para experimentar formas, tamanhos e posições sem se preocupar em deixar tudo perfeito.\n\nOs artistas fazem esboços porque é mais fácil corrigir um desenho no começo do que depois de pronto.",
    voceSabia: "Leonardo da Vinci enchia seus cadernos com esboços antes de criar suas pinturas e invenções. Muitos artistas famosos faziam dezenas de esboços antes de terminar uma obra.",
    voceSabiaEmoji: "🌟",
    experimente: "Pegue um lápis e desenhe uma maçã usando apenas um círculo e algumas linhas leves. Não apague nada no começo. Depois, acrescente os detalhes e, por último, faça o contorno mais forte.",
    experimenteEmoji: "🎨",
    comoFazerEsboco: "Passo 1: Observe bem o que você quer desenhar.\n\nOlhe para as formas principais. Um gato pode começar com círculos. Uma casa pode começar com um quadrado e um triângulo.\n\nPasso 2: Faça linhas bem leves.\n\nNão aperte o lápis. Assim, será fácil apagar ou mudar o desenho.\n\nPasso 3: Desenhe as formas básicas.\n\nUse círculos, ovais, quadrados, retângulos e triângulos para montar a estrutura.\n\nPasso 4: Acrescente os detalhes.\n\nDepois que as formas estiverem no lugar certo, desenhe olhos, janelas, folhas, roupas ou outros detalhes.\n\nPasso 5: Faça o contorno.\n\nPasse o lápis com um traço mais firme nas linhas que farão parte do desenho final.\n\nPasso 6: Apague as linhas de construção.\n\nRetire apenas as linhas que serviram como guia.",
    dicaCandinho: "Não tenha medo de fazer um esboço \"torto\". Quase todo desenho bonito começou com linhas simples e algumas correções. O esboço é um espaço para experimentar e aprender."
  }
];

function resolverPorqueMessage(normalizedMsg: string): { reply: string, matchedKey?: string } | null {
  const isPorqueQuestion = normalizedMsg.includes("por que") || 
                           normalizedMsg.includes("porque") || 
                           normalizedMsg.includes("porquê") || 
                           normalizedMsg.includes("esboc") ||
                           normalizedMsg.includes("esboço") ||
                           normalizedMsg.includes("rascunh");

  if (!isPorqueQuestion) return null;

  let bestMatch: typeof PORQUES_ARTE[0] | null = null;
  let bestScore = 0;

  for (const item of PORQUES_ARTE) {
    for (const kw of item.keywords) {
      const normalizedKw = normalizarTexto(kw);
      if (testarPalavraChave(normalizedMsg, normalizedKw)) {
        const score = normalizedKw.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      }
    }
  }

  if (bestMatch) {
    let reply = `🎨 **${bestMatch.pergunta}**\n\n${bestMatch.resposta}`;
    if (bestMatch.voceSabia) {
      const emoji = bestMatch.voceSabiaEmoji || "💡";
      reply += `\n\n${emoji} **Você sabia?**\n${bestMatch.voceSabia}`;
    }
    if (bestMatch.experimente) {
      const emoji = bestMatch.experimenteEmoji || "🧪";
      reply += `\n\n${emoji} **Experimente!**\n${bestMatch.experimente}`;
    }
    if (bestMatch.comoFazerEsboco) {
      reply += `\n\n✏️ **Como fazer um esboço?**\n${bestMatch.comoFazerEsboco}`;
    }
    if (bestMatch.dicaCandinho) {
      reply += `\n\n💡 **Dica do Candinho**\n${bestMatch.dicaCandinho}`;
    }
    if (bestMatch.pergunteTambem && bestMatch.pergunteTambem.length > 0) {
      reply += `\n\n❓ **Pergunte também:**\n` + bestMatch.pergunteTambem.map(p => `- ${p}`).join("\n");
    }
    reply += `\n\n✨ Como seu professor de arte, adoro ver sua curiosidade colorida brilhando! Quer fazer outra pergunta ou praticar um desenho hoje?`;
    return {
      reply: reply,
      matchedKey: "porque_arte_banco"
    };
  }

  return null;
}

function resolverComoMessage(normalizedMsg: string): { reply: string, matchedKey?: string } | null {
  const startsWithComo = normalizedMsg.startsWith("como ") || 
                         normalizedMsg.includes(" como ") || 
                         normalizedMsg.startsWith("me ensina a ");
                         
  if (!startsWithComo) return null;
  
  // Evitar interceptar perguntas sobre fake news, mentiras, segurança e golpes do banco de conhecimentos
  const bypassKeywords = [
    "fake", "news", "mentira", "boato", "golpe", "fraude", "seguranca", "segurança", 
    "proteg", "protej", "evitar", "evit", "checar", "checo", "descobrir", 
    "desmascarar", "saber se e", "saber se e verdade", "sei se e", "sei se"
  ];
  if (bypassKeywords.some(keyword => normalizedMsg.includes(keyword))) {
    return null;
  }
  
  // 1. COMO DESENHAR (Categoria 1)
  if (normalizedMsg.includes("desenhar") || normalizedMsg.includes("desenho") || normalizedMsg.includes("desenha")) {
    if (normalizedMsg.includes("cachorro") || normalizedMsg.includes("cao") || normalizedMsg.includes("dog")) {
      return {
        reply: `🐾 **COMO DESENHAR UM CACHORRO** 🐶\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis grafite, borracha e lápis de cor.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe um círculo para ser a cabeça.\n2. **PASSO 2:** Faça uma forma oval deitada logo abaixo para ser o corpo.\n3. **PASSO 3:** Desenhe quatro perninhas fofas embaixo da forma oval.\n4. **PASSO 4:** Faça duas orelhas caídas ou pontudas nas laterais da cabeça.\n5. **PASSO 5:** Acrescente dois olhinhos brilhantes e cheios de alegria.\n6. **PASSO 6:** Desenhe o focinho redondinho com um belo sorriso.\n7. **PASSO 7:** Faça o rabinho abanando no final do corpo.\n8. **PASSO 8:** Pinte seu novo amiguinho de quatro patas!\n\n💡 **Dicas:** Não aperte muito o lápis no começo para ficar bem fácil de apagar se errar!\n\n⚠️ **Erros comuns:** Desenhar o corpo muito longe ou separado da cabeça. Una-os bem para que ele fique gordinho!\n\n🏆 **Desafio:** Desenhe o seu cachorrinho correndo atrás de uma bola colorida em um lindo parque verde!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_cachorro"
      };
    }
    if (normalizedMsg.includes("dragao")) {
      return {
        reply: `🐉 **COMO DESENHAR UM DRAGÃO** 🌋\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis grafite, borracha e canetinhas coloridas.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe uma forma oval deitada para o corpo e uma menor para a cabeça.\n2. **PASSO 2:** Conecte as duas formas com uma linha ondulada para ser o pescoço comprido.\n3. **PASSO 3:** Desenhe pernas fortes com dedinhos arredondados nas pontas.\n4. **PASSO 4:** Faça asas grandes de morcego nas costas do dragão.\n5. **PASSO 5:** Desenhe pequenos triângulos (espinhos) ao longo do pescoço, costas e rabo.\n6. **PASSO 6:** Acrescente olhos grandes e um sorriso simpático soltando fumaça ou foguinho.\n7. **PASSO 7:** Desenhe um rabo bem comprido que termina em formato de seta.\n8. **PASSO 8:** Pinte com suas cores favoritas (verde, vermelho, dourado ou roxo!).\n\n💡 **Dicas:** Desenhe as asas bem clarinhas no começo para ter certeza de que cabem na folha!\n\n⚠️ **Erros comuns:** Deixar o pescoço e o rabo curtos demais. Dragões adoram curvas longas e imponentes!\n\n🏆 **Desafio:** Desenhe o seu dragão bebê saindo de dentro de um ovo misterioso decorado com joias!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_dragao"
      };
    }
    if (normalizedMsg.includes("casa")) {
      return {
        reply: `🏠 **COMO DESENHAR UMA CASA** 🏡\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis, régua para ajudar nas retas e lápis de cor.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe um quadrado grande no centro da folha para ser a parede da casa.\n2. **PASSO 2:** Faça um triângulo grande logo em cima do quadrado para ser o telhado.\n3. **PASSO 3:** Desenhe um retângulo em pé dentro do quadrado para fazer a porta.\n4. **PASSO 4:** Faça dois pequenos quadrados nas laterais para serem as janelas.\n5. **PASSO 5:** Adicione uma cruz dentro das janelas para parecer os vidros separados.\n6. **PASSO 6:** Desenhe uma chaminé retangular no telhado com fumaça subindo em caracol.\n7. **PASSO 7:** Coloque uma maçaneta redondinha na porta.\n8. **PASSO 8:** Pinte tudo com cores alegres!\n\n💡 **Dicas:** Desenhe flores na base das paredes e um caminho de pedrinhas saindo da porta!\n\n⚠️ **Erros comuns:** Fazer a porta flutuando no meio da parede. Lembre-se de encostá-la na linha do chão!\n\n🏆 **Desafio:** Desenhe uma incrível casa na árvore secreta com uma escada de cordas pendurada!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_casa"
      };
    }
    if (normalizedMsg.includes("castelo")) {
      return {
        reply: `🏰 **COMO DESENHAR UM CASTELO** 🛡️\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis grafite, borracha e canetinhas de colorir.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe um retângulo grande deitado para ser a muralha principal.\n2. **PASSO 2:** Faça duas torres altas nas pontas usando retângulos verticais compridos.\n3. **PASSO 3:** No topo da muralha, desenhe pequenos quadradinhos subindo e descendo (muralhas denteadas).\n4. **PASSO 4:** Coloque telhados em formato de cone (triângulos altos) em cima de cada torre.\n5. **PASSO 5:** Faça um portão bem grande e arredondado bem no meio.\n6. **PASSO 6:** Desenhe bandeirinhas triangulares flutuando no topo de cada telhado cônico.\n7. **PASSO 7:** Adicione janelinhas em formato de arco de cabeça para baixo nas torres.\n8. **PASSO 8:** Pinte as paredes de cinza e azul, e use cores brilhantes e divertivas nas bandeiras!\n\n💡 **Dicas:** Faça pequenos risquinhos de "tijolos" espalhados pelas paredes para dar um toque antigo!\n\n⚠️ **Erros comuns:** Esquecer as janelas das torres! Os guardas do castelo precisam de janelinhas para vigiar!\n\n🏆 **Desafio:** Desenhe um fosso ao redor do seu castelo com uma ponte levadiça e um jacaré camarada!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_castelo"
      };
    }
    if (normalizedMsg.includes("cavalo")) {
      return {
        reply: `🐴 **COMO DESENHAR UM CAVALINHO** 🌾\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis, borracha e giz de cera ou lápis colorido.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe uma forma oval grande e deitada para o corpo do cavalo.\n2. **PASSO 2:** Faça uma forma oval menor inclinada um pouco mais acima para ser a cabeça.\n3. **PASSO 3:** Trace duas linhas fortes para ligar a cabeça ao corpo, formando o pescoço.\n4. **PASSO 4:** Desenhe quatro pernas compridas e firmes embaixo do corpo com cascos quadrados.\n5. **PASSO 5:** Faça duas orelhas pontudinhas voltadas para cima na cabeça.\n6. **PASSO 6:** Desenhe uma crina longa no pescoço e um rabo cheio de pelos fofos voando com o vento.\n7. **PASSO 7:** Faça o olho expressivo e o focinho na ponta da cabeça.\n8. **PASSO 8:** Pinte seu cavalo de marrom, preto, branco ou cinza com manchinhas!\n\n💡 **Dicas:** Desenhar o pescoço ligeiramente grosso ajuda o cavalo a parecer forte e elegante!\n\n⚠️ **Erros comuns:** Fazer as pernas muito curtinhas ou o rabo murcho. Cavalos adoram galopar com rabos esvoaçantes!\n\n🏆 **Desafio:** Desenhe o seu cavalo saltando por cima de um tronco de árvore caída em um campo florido!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_cavalo"
      };
    }
    if (normalizedMsg.includes("paisagem")) {
      return {
        reply: `🏞️ **COMO DESENHAR UMA PAISAGEM LINDA** 🏔️\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel sulfite, lápis de desenho macio, borracha e uma paleta cheia de cores.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe uma linha reta horizontal no meio da folha para ser a linha do horizonte (terra e céu).\n2. **PASSO 2:** Faça montanhas em ziguezague acima da linha do horizonte ao fundo.\n3. **PASSO 3:** Desenhe um grande sol redondo surgindo ou se pondo atrás das montanhas.\n4. **PASSO 4:** Crie um rio fazendo curvas, começando bem fininho perto das montanhas e ficando bem largo perto de você.\n5. **PASSO 5:** Faça algumas nuvens fofas de algodão no céu e pássaros voando em forma de "V".\n6. **PASSO 6:** Adicione grama macia e algumas árvores nas margens do seu rio.\n7. **PASSO 7:** Desenhe florzinhas coloridas espalhadas pelo chão em primeiro plano.\n8. **PASSO 8:** Pinte tudo com cores bem alegres e use degradê no céu!\n\n💡 **Dicas:** Coisas que estão longe são menores e clarinhas. Coisas perto de nós são maiores e bem nítidas!\n\n⚠️ **Erros comuns:** Desenhar o rio da mesma largura o caminho todo. Começar fino e terminar largo dá efeito de profundidade!\n\n🏆 **Desafio:** Mude o clima da paisagem! Que tal transformá-la em uma paisagem noturna com uma lua brilhante?\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_paisagem"
      };
    }
    if (normalizedMsg.includes("arvore")) {
      return {
        reply: `🌳 **COMO DESENHAR UMA ÁRVORE FORTE** 🍎\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis macio, borracha e giz de cera ou lápis de cor.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe duas linhas verticais paralelas ligeiramente curvadas para fora para fazer o tronco.\n2. **PASSO 2:** No topo do tronco, divida as linhas abrindo em dois galhos que parecem a letra "Y".\n3. **PASSO 3:** Desenhe uma grande copa fofa de folhas contornando os galhos, parecendo uma nuvem gigante.\n4. **PASSO 4:** Adicione pequenas raízes na parte de baixo do tronco, sumindo na grama macia.\n5. **PASSO 5:** Desenhe pequenos círculos vermelhos na copa para serem maçãs deliciosas ou flores coloridas.\n6. **PASSO 6:** Faça traços curtos e ondulados dentro do tronco para imitar a textura áspera da casca da madeira.\n7. **PASSO 7:** Desenhe um arbusto pequeno ou graminha ao pé da árvore.\n8. **PASSO 8:** Pinte o tronco de marrom terra e as folhas com vários tons de verde vivo!\n\n💡 **Dicas:** Use pequenas nuvens arredondadas encavaladas para fazer a copa, isso dá muito volume real!\n\n⚠️ **Erros comuns:** Fazer o tronco reto como uma régua de parede. Árvores têm curvas e irregularidades lindas!\n\n🏆 **Desafio:** Desenhe uma simpática corujinha morando dentro de uma toca redonda no tronco da sua árvore!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_arvore"
      };
    }
    if (normalizedMsg.includes("robo")) {
      return {
        reply: `🤖 **COMO DESENHAR UM ROBÔ AMIGO** ⚡\n\nVamos desenhar juntos! Faça formas bem simples, depois una essas formas, acrescente os detalhes, passe o lápis mais forte, apague as linhas de ajuda e pinte se desejar! 🥰\n\n🎒 **Materiais:** Papel, lápis, borracha, caneta esferográfica preta para o contorno final e giz de cera.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Desenhe um quadrado médio para a cabeça e um retângulo grande abaixo para o corpo de metal.\n2. **PASSO 2:** Conecte a cabeça ao corpo com duas pequenas linhas verticais formando um pescoço de ferro.\n3. **PASSO 3:** Faça os braços e pernas usando retângulos compridos divididos em listras (tubos sanfonados).\n4. **PASSO 4:** Desenhe garras de metal no final dos braços, parecendo a letra "C".\n5. **PASSO 5:** Coloque duas antenas engraçadas na cabeça com bolinhas nas pontas.\n6. **PASSO 6:** Desenhe botões redondos, telas quadradas e lâmpadas piscantes no painel do peito do seu robô.\n7. **PASSO 7:** Faça olhos grandes em formato de círculos brilhantes e parafusos nas juntas do corpo.\n8. **PASSO 8:** Pinte com tons metálicos de cinza, prata e acenda os botões com vermelho, azul e verde brilhantes!\n\n💡 **Dicas:** Use objetos redondos, como moedas, para traçar os círculos e botões perfeitamente!\n\n⚠️ **Erros comuns:** Fazer as pernas e braços duros demais sem dobras. Linhas sanfonadas dão movimento ao robô!\n\n🏆 **Desafio:** Crie o seu robô fazendo uma tarefa super divertida, como preparando um bolo espacial gigante!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_desenhar_robo"
      };
    }
    return {
      reply: `🎨 **COMO DESENHAR QUALQUER COISA** ✨\n\nVamos desenhar juntos! Fazer desenhos incríveis é super divertido quando seguimos passos simples! 🥰\n\n🎒 **Materiais:** Papel em branco, lápis grafite macio, borracha macia e lápis coloridos.\n\n✏️ **Passo a Passo:**\n1. **PASSO 1 (Rascunhar):** Esboce a forma principal usando figuras geométricas bem fáceis (círculos para a cabeça ou flores, ovais para corpos de animais, retângulos para prédios e pernas).\n2. **PASSO 2 (Ligar as Formas):** Una as formas desenhadas com linhas suaves e delicadas para dar forma ao esqueleto do desenho.\n3. **PASSO 3 (Acrescentar Detalhes):** Desenhe as partes menores e mais detalhadas (como olhos, folhagens, janelas, dedinhos ou texturas).\n4. **PASSO 4 (Contornar):** Passe o lápis mais forte (ou uma canetinha preta fina) nas linhas definitivas que você mais gostou.\n5. **PASSO 5 (Apagar):** Apague as linhas geométricas de ajuda que você desenhou clarinho no início.\n6. **PASSO 6 (Pintar):** Dê asas à imaginação pintando seu desenho com as cores que seu coração mandar!\n\n💡 **Dicas:** Nunca aperte o lápis na folha no começo! Manter a mão bem leve é o maior segredo de todo grande artista.\n\n⚠️ **Erros comuns:** Tentar fazer os detalhes pequenininhos logo no primeiro passo. Comece sempre do maior para o menor!\n\n🏆 **Desafio:** Tente fazer o desenho do seu tema favorito em uma versão gigante ou em uma versão bebê bem fofinha!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_desenhar_geral"
    };
  }

  // 2. COMO PINTAR (Categoria 2)
  if (normalizedMsg.includes("pintar") || normalizedMsg.includes("pintura") || normalizedMsg.includes("pinta")) {
    if (normalizedMsg.includes("por do sol")) {
      return {
        reply: `🌅 **COMO PINTAR UM PÔR DO SOL MÁGICO** 🎨\n\nPintar o entardecer é como espalhar calor e sentimentos na folha! Vamos fazer isso de forma linda e divertida!\n\n🎒 **Materiais:** Papel grosso (para suportar a tinta), pincéis (um largo e um bem fino), tinta guache (amarela, vermelha, azul-escura e preta), potinho com água e paninho.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Escolha três cores principais: amarelo, vermelho e azul-escuro.\n2. **PASSO 2:** Comece pintando de amarelo brilhante a parte mais baixa do seu céu (linha do horizonte).\n3. **PASSO 3:** Vá subindo na folha misturando um pouco de vermelho para criar um laranja quente e vibrante.\n4. **PASSO 4:** No topo da página, adicione a tinta azul-escura pura, criando um degradê suave (misture bem de leve com o vermelho para formar um roxo lindo!).\n5. **PASSO 5:** Deixe o seu céu colorido secar por cerca de 3 minutinhos.\n6. **PASSO 6:** Com o céu seco, use tinta preta pura e o pincel fino para pintar silhuetas na base (como coqueiros, montanhas ou passarinhos voando).\n7. **PASSO 7:** Finalize colocando um semicírculo amarelo-claro na linha do horizonte para representar o sol se deitando!\n\n💡 **Dicas:** Misture as tintas no papel com o pincel levemente úmido, passando-o de forma horizontal de um lado para o outro!\n\n⚠️ **Erros comuns:** Misturar preto diretamente nas cores quentes enquanto estão molhadas. O preto deve ser usado por último para silhuetas pretas perfeitas!\n\n🏆 **Desafio:** Tente pintar esse pôr do sol refletindo sobre um rio ou lago azul e dourado na parte inferior!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_pintar_por_do_sol"
      };
    }
    if (normalizedMsg.includes("floresta") || normalizedMsg.includes("arvores") || normalizedMsg.includes("arvore")) {
      return {
        reply: `🌳 **COMO PINTAR UMA FLORESTA ENCANTADA** 🌲\n\nPintar uma floresta é dar vida a um lar cheio de mistérios e natureza! Vamos criar esse bosque maravilhoso juntos!\n\n🎒 **Materiais:** Tela de pintura ou papel grosso, tintas guache verde-claro, verde-escuro, marrom, amarelo e branco, pincéis e uma esponja de louça limpa.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Pinte um fundo suave misturando azul-celeste e branco para fazer o céu que aparece por trás das árvores.\n2. **PASSO 2:** Use tinta marrom diluída e um pincel plano para desenhar os troncos das árvores. Faça troncos fininhos ao fundo e mais grossos perto de você.\n3. **PASSO 3:** Umedeça a ponta da sua esponja na tinta verde-escura e dê batidinhas leves para criar as folhas densas da floresta.\n4. **PASSO 4:** Repita as batidinhas com verde-claro por cima para criar camadas de folhas iluminadas.\n5. **PASSO 5:** Adicione toques de tinta amarela no topo de algumas árvores para simular os raios de sol batendo.\n6. **PASSO 6:** Pinte o chão com batidinhas marrons e verdes para simular terra úmida e grama fofa.\n7. **PASSO 7:** Pinte pequenas flores batendo a ponta do cabo do pincel sujo de tinta vermelha ou amarela no chão!\n\n💡 **Dicas:** Deixar pequenas frestas brancas do fundo sem cobrir dá a impressão fantástica de luz real vazando entre os galhos!\n\n⚠️ **Erros comuns:** Usar apenas um tipo de verde. Misturar amarelo ao verde cria tons cheios de luz natural e riqueza!\n\n🏆 **Desafio:** Desenhe um pequeno cervo ou coelho marrom espreitando silenciosamente entre as folhagens do seu bosque!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_pintar_floresta"
      };
    }
    if (normalizedMsg.includes("flor")) {
      return {
        reply: `🌸 **COMO PINTAR UMA LINDA FLOR** 🌺\n\nPintar flores é espalhar perfume e cores alegres pela nossa imaginação! Vamos criar uma obra de arte floral!\n\n🎒 **Materiais:** Papel, tintas de cores vivas (rosa, vermelho, violeta ou azul), tinta verde e amarela, pincel macio arredondado.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Pinte o fundo da folha com uma cor clarinha neutra (como azul-bebê ou verde-claro) e espere secar.\n2. **PASSO 2:** Use tinta amarela ou laranja pura para pintar um círculo gordinho bem no centro da folha (o miolo).\n3. **PASSO 3:** Carregue seu pincel com a cor escolhida para as pétalas e posicione a ponta perto do miolo, aperte um pouco e puxe para fora para pintar as pétalas redondinhas.\n4. **PASSO 4:** Repita o movimento fazendo pétalas unidas por toda a volta do círculo central.\n5. **PASSO 5:** Use tinta verde e trace um caule comprido descendo do miolo até a base da folha, com duas folhas pontudinhas nas laterais.\n6. **PASSO 6:** Molhe a pontinha do cabo do pincel na tinta branca e faça pequenos pontinhos delicados no miolo amarelo para imitar o pólen.\n7. **PASSO 7:** Adicione pequenos riscos finos de cor vermelha ou rosa-escura na base de cada pétala para dar profundidade e sombra real!\n\n💡 **Dicas:** Gire a folha de papel enquanto pinta as pétalas, isso ajuda a manter o mesmo ângulo e conforto para as suas mãos!\n\n⚠️ **Erros comuns:** Pintar as pétalas afastadas demais do miolo. Elas devem nascer e encostar diretamente no centro da flor!\n\n🏆 **Desafio:** Desenhe uma abelhinha gordinha listrada de amarelo e preto voando pertinho da sua flor recém-pintada!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_pintar_flor"
      };
    }
    return {
      reply: `🎨 **COMO INICIAR SUA PINTURA COM SUCESSO** 🖌️\n\nPintar é uma das formas mais gostosas de expressar quem somos no mundo! Vamos aprender a pintar de forma profissional!\n\n🎒 **Materiais:** Guache ou tinta acrílica escolar, pincéis de diferentes pontas, papel encorpado, potinho com água e paninho macio.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Escolha sempre de três a cinco cores principais antes de começar, criando uma paleta de cores harmoniosa.\n2. **PASSO 2:** Comece pintando as áreas maiores ao fundo (como o céu ou o chão) e espere secar um pouquinho.\n3. **PASSO 3:** Pinte as formas principais por cima do fundo seco, usando pinceladas firmes e sem pressa.\n4. **PASSO 4:** Aplique camadas de cores: dê uma primeira demão e, se o papel aparecer, passe mais uma demão fina após secar.\n5. **PASSO 5:** Crie luz e sombras usando um pouco de tinta branca para destacar pontos claros e cores escuras para as sombras.\n6. **PASSO 6:** Faça os contornos e pequenos detalhes (olhos, galhos, traços finos) por último, usando o pincel mais fino que tiver.\n7. **PASSO 7:** Deixe secar bem e assine sua obra de arte no cantinho inferior!\n\n💡 **Dicas:** Lave muito bem o seu pincel na água e seque-o no paninho toda vez que for mudar de cor, isso mantém as cores brilhantes e puras!\n\n⚠️ **Erros comuns:** Usar água em excesso na tinta guache, deixando-a transparente e enrugando o papel. A tinta deve ter consistência cremosa!\n\n🏆 **Desafio:** Experimente pintar usando apenas seus dedos (dedografia) ou cotonetes para criar um efeito pontilhista incrível!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_pintar_geral"
    };
  }

  // 3. COMO ESCREVER (Categoria 3 & 8)
  if (normalizedMsg.includes("escrever") || normalizedMsg.includes("escrita") || normalizedMsg.includes("escreve")) {
    if (normalizedMsg.includes("poema")) {
      return {
        reply: `✍️ **COMO ESCREVER UM POEMA LINDO** 🌸\n\nPoemas são como fotografias de sentimentos tiradas com palavras do coração! Vamos escrever um juntos!\n\n✏️ **Passo a Passo:**\n1. **PASSO 1:** Escolha um tema simples e mágico (ex: seu gatinho, uma estrela cadente, a chuva batendo na janela ou a amizade).\n2. **PASSO 2:** Escreva palavras soltas que descrevem as sensações desse tema (ex: fofura, brilho, calmaria, risadas, cores).\n3. **PASSO 3:** Escreva frases curtas em cada linha. Cada linha do seu poema se chama **verso**!\n4. **PASSO 4:** Brinque com rimas engraçadas ou doces no final das frases (ex: *desenhar* combina com *brincar*, *sol* rima com *caracol*).\n5. **PASSO 5:** Use comparações divertidas e mágicas (ex: "o sol é um prato de ouro brilhando no céu" ou "o mar é um cobertor azul de sereias").\n6. **PASSO 6:** Agrupe as frases de quatro em quatro linhas, separando-as com um espaço. Esses grupos de versos se chamam **estrofes**!\n7. **PASSO 7:** Leia em voz alta e escute a música secreta que as palavras fazem! Faça pequenos ajustes se achar necessário.\n8. **PASSO 8:** Escolha um título super criativo e assine como o grande autor que você é!\n\n💡 **Dicas:** Poemas não precisam ter rimas obrigatoriamente! O mais importante é colocar sentimentos puros e sinceros no texto.\n\n⚠️ **Erros comuns:** Tentar usar palavras difíceis demais que você não usa no dia a dia. A beleza do poema mora na sua simplicidade e afeto!\n\n🏆 **Desafio:** Escreva um acróstico, onde as primeiras letras de cada linha de cima a baixo soletram o seu próprio nome!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um exemplo de poema pronto para inspirar você? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_escrever_poema"
      };
    }
    if (normalizedMsg.includes("carta")) {
      if (normalizedMsg.includes("romantica") || normalizedMsg.includes("carinhoso") || normalizedMsg.includes("bilhete")) {
        return {
          reply: `❤️ **COMO ESCREVER UMA CARTA ROMÂNTICA OU BILHETE CARINHOSO** 💌\n\nEscrever uma carta carinhosa é uma forma mágica de enviar um abraço em forma de papel para quem amamos! Vamos aprender a estrutura ideal:\n\n✏️ **Passo a Passo:**\n1. **PASSO 1 (Cidade e Data):** Escreva no canto superior esquerdo o nome da sua cidade e o dia de hoje (ex: *Brodowski, 11 de Julho de 2026*).\n2. **PASSO 2 (Saudação de Carinho):** Comece com uma abertura doce e calorosa (ex: *Para minha pessoa mais especial do mundo,*).\n3. **PASSO 3 (O Motivo da Carta):** Diga por que você está escrevendo (ex: *Resolvi colocar em palavras todo o carinho que sinto por você e como você faz meus dias coloridos...*).\n4. **PASSO 4 (Qualidades Sinceras):** Escreva três qualidades fofas que você ama na pessoa (ex: *Eu adoro seu sorriso brilhante, seu abraço bem quentinho e como você sempre me faz rir de piadas bobas*).\n5. **PASSO 5 (Uma Memória Feliz):** Relembre um momento gostoso que vocês passaram juntos brincando ou conversando.\n6. **PASSO 6 (Uma Despedida Doce):** Escolha um tchau cheio de amor (ex: *Com todo o carinho e pinceladas de amor do meu coração,*).\n7. **PASSO 7 (Sua Assinatura):** Assine seu nome bem bonito e decore a folha com corações desenhados!\n\n💡 **Dicas:** Escrever com sua própria letra (em vez de digitar no celular) torna a carta cem vezes mais especial e emocionante!\n\n⚠️ **Erros comuns:** Escrever correndo e deixar a letra ilegível. Escreva devagarzinho, desenhando as letras com muito carinho!\n\n🏆 **Desafio:** Crie um pequeno envelope decorado dobrando papel e cole corações coloridos ou estrelas de glitter para selar o bilhete!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um exemplo de bilhete romântico/carinhoso para inspirar você? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
          matchedKey: "como_escrever_carta_romantica"
        };
      }
      return {
        reply: `✉️ **COMO ESCREVER UMA CARTA PERFEITA** 📮\n\nEnviar uma carta é um dos costumes mais lindos da humanidade! Vamos organizar sua carta de forma perfeita e clara:\n\n✏️ **Passo a Passo:**\n1. **PASSO 1 (Cabeçalho):** Escreva no topo esquerdo onde você está e a data de hoje (ex: *Brodowski, 11 de Julho de 2026*).\n2. **PASSO 2 (Cumprimento):** Comece cumprimentando a pessoa com carinho (ex: *Querido amigo,* ou *Querida vovó,*).\n3. **PASSO 3 (Assunto Principal):** Conte as suas novidades, fale sobre os seus desenhos novos, suas aventuras na escola ou suas brincadeiras.\n4. **PASSO 4 (Interesse Real):** Faça perguntas sobre como a pessoa está e o que ela tem feito (ex: *Como estão as coisas por aí? Você tem desenhado bastante?*).\n5. **PASSO 5 (Carinho e Sentimento):** Diga que sente saudades e que espera receber notícias em breve.\n6. **PASSO 6 (Despedida Amigável):** Escolha um final fofo (ex: *Com muitas saudades e um grande abraço,*).\n7. **PASSO 7 (Assinatura):** Escreva seu nome no final de forma bem caprichada.\n\n💡 **Dicas:** Você pode desenhar pequenas ilustrações nas bordas do papel para deixar a carta super personalizada e linda!\n\n⚠️ **Erros comuns:** Esquecer de colocar a data. As datas ajudam a pessoa a lembrar exatamente de quando aquela conversa aconteceu no futuro!\n\n🏆 **Desafio:** Finja que você é um explorador espacial mandando notícias de Marte e escreva uma carta super divertida para a Terra!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um exemplo de carta pronta para você usar como modelo? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_escrever_carta"
      };
    }
    if (normalizedMsg.includes("historia") || normalizedMsg.includes("conto") || normalizedMsg.includes("redacao")) {
      return {
        reply: `📚 **COMO ESCREVER UMA HISTÓRIA OU REDAÇÃO FANTÁSTICA** 🦁\n\nContar histórias é criar mundos mágicos onde tudo é possível! Vamos aprender a receita para uma aventura perfeita:\n\n✏️ **Passo a Passo:**\n1. **PASSO 1 (O Herói):** Escolha quem será o protagonista (um gatinho astronauta ou uma menina com lápis mágico falante).\n2. **PASSO 2 (O Cenário):** Onde a aventura acontece? Em uma floresta flutuante ou no fundo de um pote de geleia?\n3. **PASSO 3 (A Rotina inicial):** Comece apresentando o personagem em seu dia a dia comum (ex: *Era uma vez o gatinho Pipoca...*).\n4. **PASSO 4 (O Problema):** De repente, um mistério ou desafio acontece! (ex: *Numa noite, todas as estrelas perderam o brilho!*).\n5. **PASSO 5 (A Jornada):** Mostre como o herói usa a inteligência, amizade e criatividade para tentar resolver o problema.\n6. **PASSO 6 (O Clímax):** É a parte mais emocionante, onde o problema quase vence, mas o herói encontra uma saída genial!\n7. **PASSO 7 (Final Feliz):** Mostre o que mudou no mundo e o que o herói aprendeu de importante.\n8. **PASSO 8 (Título Atraente):** Crie um título bem curioso para deixar os leitores ansiosos para ler!\n\n💡 **Dicas:** Use adjetivos muito coloridos para descrever as coisas (ex: *árvore de algodão doce cor-de-rosa*)!\n\n⚠️ **Erros comuns:** Resolver o mistério rápido demais sem dar tempo para o leitor ficar curioso. Valorize o mistério!\n\n🏆 **Desafio:** Escreva uma micro-história incrível contendo apenas cinco frases do começo ao fim!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um exemplo de história mágica curta para você? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_escrever_historia"
      };
    }
    if (normalizedMsg.includes("bilhete") || normalizedMsg.includes("mensagem") || normalizedMsg.includes("aniversario") || normalizedMsg.includes("convite")) {
      return {
        reply: `💌 **COMO ESCREVER BILHETES, MENSAGENS E CONVITES INCRÍVEIS** ✨\n\nEscrever mensagens rápidas de carinho ou convites festivos é uma delícia! Vamos aprender a estrutura para cada um:\n\n✏️ **Passo a Passo para Bilhete Carinhoso:**\n1. **PASSO 1:** Escolha um cumprimento fofo (ex: *Oi, meu amigo favorito!*).\n2. **PASSO 2:** Escreva algo curto, sincero e bonito (ex: *Vi essa flor no jardim e lembrei da sua alegria! Obrigado por ser um amigo tão legal.*).\n3. **PASSO 3:** Deixe uma frase de carinho (ex: *Tenha um dia super colorido e cheio de brincadeiras!*).\n4. **PASSO 4:** Despeça-se com fofura (ex: *Abraço quentinho do seu amigo, Candinho.*).\n\n✏️ **Passo a Passo para Convites:**\n1. **PASSO 1 (O Chamado):** Faça uma chamada animada (ex: *Você está convidado para a minha festa de aniversário galáctica!*).\n2. **PASSO 2 (As Informações de Ouro):** Coloque bem claro:\n   - 📅 **Data:** Dia 15 de Outubro\n   - ⏰ **Horário:** Às 15 horas\n   - 🏡 **Local:** Rua da Paleta Mágica, nº 100\n3. **PASSO 3 (Confirmação):** Peça para a pessoa avisar se vai conseguir ir até o dia anterior.\n\n💡 **Dicas:** Coloque uma gotinha de perfume no papel ou use canetinhas com cheiro para dar um toque mágico sensorial!\n\n⚠️ **Erros comuns:** Esquecer de colocar o horário ou local no convite. Sem as informações básicas, os convidados não conseguirão chegar!\n\n🏆 **Desafio:** Crie um convite secreto em forma de mapa do tesouro, onde o local da festa é a ilha secreta de doces!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um exemplo pronto de bilhete carinhoso ou convite festivo para você? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_escrever_bilhete"
      };
    }
  }

  // 4. COMO CRIAR (Categoria 4)
  if (normalizedMsg.includes("criar") || normalizedMsg.includes("cria ")) {
    return {
      reply: `🌟 **COMO CRIAR PERSONAGENS, MONSTROS E HERÓIS FANTÁSTICOS** 🦸‍♂️\n\nCriar um personagem é como plantar uma sementinha de vida na sua imaginação! Vamos montar a ficha completa dele juntos!\n\n✏️ **Passo a Passo da Criação:**\n1. **PASSO 1 (Identidade):** Escolha o Nome dele, a Idade e se ele é humano, robô, animal místico ou ser extraterrestre.\n2. **PASSO 2 (Superpoderes):** O que ele sabe fazer de mais incrível? (ex: voar em nuvens de algodão doce, disparar raios de cores de guache com as mãos, ou falar com animais mágicos).\n3. **PASSO 3 (O Ponto Fraco):** Todo grande herói ou monstro precisa de um ponto fraco divertido! Isso o torna amigável! (ex: derrete se comer chocolate, tem cócegas nos pés, ou perde as forças se ver água com sabão).\n4. **PASSO 4 (A Personalidade):** Ele é tagarela e brincalhão? Tímido e super inteligente? Ou dorminhoco e comilão? Escreva duas características dele.\n5. **PASSO 5 (Origem de Ouro):** De onde ele veio? (ex: nasceu dentro de um potinho de glitter brilhante ou caiu de uma estrela cadente colorida).\n6. **PASSO 6 (O Visual):** Desenhe a roupinha dele com capa, óculos misteriosos, cinto de utilidades artístico ou espinhos coloridos nas costas!\n\n💡 **Dicas:** Dê a ele um acessório muito marcante, como um boné de cabeça para baixo, uma gravata borboleta néon ou um bichinho de estimação em miniatura!\n\n⚠️ **Erros comuns:** Fazer o seu herói perfeito e sem nenhuma fraqueza. Personagens com pequenos medos ou manias engraçadas são muito mais queridos e divertidos!\n\n🏆 **Desafio:** Desenhe o seu personagem apertando as mãos e fazendo amizade com o seu pior e mais engraçado rival!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu crie a ficha de um personagem inédito e divertido para você? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_criar_personagem"
    };
  }

  // 5. COMO FAZER ARTE (Categoria 5 & 9)
  if (normalizedMsg.includes("fazer arte") || normalizedMsg.includes("fazer uma") || normalizedMsg.includes("como fazer") || normalizedMsg.includes("fazer origami") || normalizedMsg.includes("dobradura") || normalizedMsg.includes("fantoche") || normalizedMsg.includes("tinta")) {
    if (normalizedMsg.includes("origami") || normalizedMsg.includes("dobradura")) {
      return {
        reply: `🐶 **COMO FAZER UM ORIGAMI/DOBRADURA DE CACHORRINHO** 📄\n\nOrigami é a arte mágica de transformar uma folha de papel comum em animais e objetos incríveis dobrando!\n\n🎒 **Materiais:** Uma folha de papel cortada em formato de quadrado perfeito (todas as quatro laterais com o mesmo tamanho) e caneta preta.\n\n✂️ **Passo a Passo:**\n1. **PASSO 1:** Dobre o seu quadrado de papel ao meio juntando as pontas opostas para formar um grande triângulo perfeito. Passe bem a unha na dobra!\n2. **PASSO 2:** Coloque o triângulo na mesa com a ponta maior virada para baixo.\n3. **PASSO 3 (As Orelhas):** Dobre a ponta esquerda e a ponta direita do triângulo para baixo, criando duas lindas orelhinhas caídas de cachorrinho.\n4. **PASSO 4 (O Focinho):** Pegue a pontinha de baixo do triângulo e dobre um pouquinho para cima, formando o focinho do cãozinho.\n5. **PASSO 5 (O Rosto):** Com a caneta preta, desenhe dois olhinhos redondos brilhantes, algumas sardas na bochecha e pinte a pontinha do focinho de preto.\n6. **PASSO 6:** Desenhe manchinhas marrons ou pretas pela dobradura se quiser um cachorrinho malhado!\n\n💡 **Dicas:** O segredo do origami é apertar muito bem cada dobra usando as costas da unha ou uma colher de metal para ficar firme!\n\n⚠️ **Erros comuns:** Usar papel retangular comum. Se o papel não for um quadrado perfeito, as dobras não vão se encaixar perfeitamente!\n\n🏆 **Desafio:** Tente dobrar um barquinho de papel clássico e teste colocá-lo para navegar em um prato fundo com água azul!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu ensine outra dobradura divertida passo a passo? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_fazer_origami"
      };
    }
    if (normalizedMsg.includes("fantoche")) {
      return {
        reply: `🎭 **COMO FAZER UM FANTOCHE DE MEIA SUPER ENGRAÇADO** 🧦\n\nCriar um fantoche é dar vida a um novo amigo tagarela para contar histórias teatrais em casa!\n\n🎒 **Materiais:** Uma meia limpa e velha, pedaços de feltro ou papel colorido, dois botões grandes para os olhos, cola forte ou fita adesiva de dupla face, lã colorida.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Vista a meia na sua mão, posicionando seus dedos na ponta da meia e seu dedão na parte do calcanhar para fazer o movimento da boca abrindo.\n2. **PASSO 2:** Com os dedos dobrados, marque onde fica a junção da boca e cole um pedaço oval de feltro vermelho por dentro para ser a boca e a língua.\n3. **PASSO 3:** Com a meia na mão, marque os pontos acima dos dedos e cole os dois botões grandes para serem os olhinhos expressivos.\n4. **PASSO 4:** Pegue alguns fios de lã colorida, amarre-os no meio com um nozinho e cole no topo da cabeça para fazer um cabelo super descabelado e divertido!\n5. **PASSO 5:** Desenhe adereços com papel colorido: óculos redondos, cílios gigantes, gravatinha borboleta ou dentes afiados de monstrinho comilão!\n6. **PASSO 6:** Dê um nome super engraçado ao seu novo companheiro e invente uma voz bem maluca para ele!\n\n💡 **Dicas:** Use fita adesiva forte ou cola quente (com ajuda de um adulto) para fixar as peças no tecido da meia, pois cola comum pode descolar facilmente durante a brincadeira!\n\n⚠️ **Erros comuns:** Colar os olhos com a meia fora da mão e as peças ficarem tortas ao vestir. Sempre planeje o visual com o fantoche calçado na mão!\n\n🏆 **Desafio:** Reúna sua família por trás do encosto do sofá e apresente uma pequena peça de teatro cantada com o seu fantoche!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu escreva um roteirinho de teatro infantil curto e engraçado para seu fantoche? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_fazer_fantoche"
      };
    }
    if (normalizedMsg.includes("tinta")) {
      return {
        reply: `🎨 **COMO FAZER TINTA CASEIRA MÁGICA E SEGURA** 🧪\n\nFazer sua própria tinta é como se transformar em um cientista das cores em seu próprio laboratório de artes!\n\n🎒 **Materiais:** 1 copo de farinha de trigo, 1 copo de sal de cozinha refinado, 1 copo de água morna, corantes alimentícios coloridos, potinhos plásticos limpos e colheres.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1:** Em um recipiente grande, misture bem o copo de farinha de trigo e o copo de sal refinado usando uma colher.\n2. **PASSO 2:** Vá adicionando a água morna bem devagarinho, mexendo sem parar, até que vire uma massa bem cremosa e lisa (com consistência de iogurte).\n3. **PASSO 3:** Distribua essa base cremosa em vários potinhos plásticos menores vazios.\n4. **PASSO 4:** Em cada potinho, pingue de 4 a 6 gotas de um corante alimentício diferente e misture vigorosamente até a cor ficar linda e brilhante!\n5. **PASSO 5:** Pegue papéis grossos ou pedaços de caixas de papelão e pinte usando pincéis, cotonetes ou os seus próprios dedinhos!\n6. **PASSO 6:** Coloque seu desenho para secar ao sol. Ao secar, o sal vai criar um efeito brilhante e saliente sensacional nas pinceladas!\n\n💡 **Dicas:** Se a tinta ficar grossa demais, adicione uma colherzinha de água. Se ficar muito líquida, acrescente uma pitadinha de farinha!\n\n⚠️ **Erros comuns:** Guardar a tinta fora da geladeira por muitos dias. Como é feita com ingredientes naturais, ela pode estragar. Guarde em potes tampados na geladeira por até 3 dias!\n\n🏆 **Desafio:** Pinte um lindo jardim espacial usando apenas sua tinta caseira e dê batidinhas de purpurina por cima enquanto a tinta estiver úmida!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu dê uma receita secreta de tinta de terra ou tinta 3D que cresce no micro-ondas? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
        matchedKey: "como_fazer_tinta"
      };
    }
    return {
      reply: `🎨 **COMO FAZER ARTE ABSTRATA E OUTRAS CRIAÇÕES** ✂️\n\nFazer arte é soltar a imaginação e transformar materiais simples em decorações espetaculares! Vamos aprender a fazer uma linda Arte Abstrata:\n\n🎒 **Materiais:** Folha de papel branco grande, pincéis, tintas guache coloridas e fita crepe.\n\n🎨 **Passo a Passo:**\n1. **PASSO 1 (Cole as fita):** Cole algumas tiras de fita crepe cruzando a folha de papel em várias direções, criando espaços geométricos fechados.\n2. **PASSO 2 (Escolha as Emoções):** Pense em um sentimento! Se for alegria, separe tintas quentes (amarelo, vermelho, rosa). Se for paz, separe azuis e verdes.\n3. **PASSO 3 (Pinte os Espaços):** Pinte cada espaço delimitado pelas fitas com uma cor sólida e bem vibrante diferente.\n4. **PASSO 4 (Salpicos Divertidos):** Molhe bem o pincel na tinta e na água, segure-o acima do papel e dê batidinhas no cabo com o dedo para salpicar gotinhas coloridas por toda a folha!\n5. **PASSO 5 (A Revelação):** Espere a tinta secar completamente por alguns minutos.\n6. **PASSO 6 (Retire a Fita):** Retire as fitas crepe devagarzinho e com muito cuidado para revelar linhas brancas perfeitamente limpas cruzando seu quadro!\n\n💡 **Dicas:** Arte Abstrata não precisa parecer com coisas reais do mundo (como carros ou árvores). O foco total são o ritmo das cores, as linhas e os sentimentos!\n\n⚠️ **Erros comuns:** Retirar a fita crepe com a tinta ainda muito molhada, o que pode borrar as linhas brancas perfeitas. Tenha paciência e deixe secar bem!\n\n🏆 **Desafio:** Coloque uma música bem alegre para tocar e pinte um desenho abstrato seguindo exatamente as batidas rápidas ou lentas da melodia!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu ensine a fazer um lindo Autorretrato ou uma Colagem de jornais? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_fazer_arte_geral"
    };
  }

  // 6. COMO OBSERVAR / ANALISAR (Categoria 6)
  if (normalizedMsg.includes("observar") || normalizedMsg.includes("entender uma") || normalizedMsg.includes("analisar") || normalizedMsg.includes("olhar")) {
    return {
      reply: `🔍 **COMO OBSERVAR E COMPREENDER OBRAS DE ARTE** 🖼️\n\nOlhar para uma pintura é como abrir uma janela para os segredos e sonhos de um artista! Vamos aprender a ser detetives da arte:\n\n✏️ **Passo a Passo da Observação:**\n1. **PASSO 1 (Os 30 segundos):** Olhe para o desenho ou pintura inteira em silêncio absoluto por 30 segundos. Deixe seus olhos passearem livremente.\n2. **PASSO 2 (O Ponto de Destaque):** O que chamou a sua atenção primeiro? Foi uma cor bem forte? Um personagem engraçado? Ou uma forma gigantesca?\n3. **PASSO 3 (As Cores Emocionais):** Repare nas cores dominantes. São quentes (amarelos, vermelhos) que dão agitação e calor? Ou frias (azuis, verdes) que trazem calmaria e mistério?\n4. **PASSO 4 (As Linhas Secretas):** Olhe os traços. Eles são retos e geométricos como construções ou são cheios de ondas e curvas que parecem flutuar no ar?\n5. **PASSO 5 (O Jogo de Detetive):** Quem são os personagens e o que eles estão fazendo? Onde eles estão? Tente inventar uma historinha curta do que aconteceu um minuto antes dessa cena ser pintada!\n6. **PASSO 6 (Sinta o Coração):** Feche os olhos e pense: que emoção essa obra traz para dentro de você? Alegria, calmaria, curiosidade ou agitação?\n\n💡 **Dicas:** Na arte, não existem respostas erradas! Cada pessoa enxerga o mundo de uma forma única e todas as opiniões são pinceladas de genialidade.\n\n⚠️ **Erros comuns:** Olhar para a obra por apenas um segundo e achar que já viu tudo. Pinturas famosas escondem detalhes escondidos e truques que só aparecem com paciência!\n\n🏆 **Desafio:** Escolha um desenho na sua casa e tente imitá-lo fazendo uma pose viva estátua igualzinha ao personagem do quadro!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer ver uma análise divertida e detalhada da famosa "Mona Lisa" ou do "Abaporu"? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_observar_arte"
    };
  }

  // 7. COMO MELHORAR (Categoria 7)
  if (normalizedMsg.includes("melhorar") || normalizedMsg.includes("desenhar melhor") || normalizedMsg.includes("pintar melhor")) {
    return {
      reply: `🚀 **COMO MELHORAR SEUS DESENHOS E PINTURAS TODOS OS DIAS** ⭐\n\nDesenhar e pintar são habilidades mágicas que crescem e ficam cada vez mais lindas com treino e carinho! Vamos aprender os segredos para evoluir:\n\n✏️ **Passo a Passo para Melhorar:**\n1. **PASSO 1 (Praticar Diariamente):** Tenha sempre por perto um pequeno caderno de esboços (sketchbook). Desenhar apenas 10 minutinhos todos os dias solta os músculos da mão!\n2. **PASSO 2 (Copiar com Respeito):** Olhe desenhos de artistas que você adora e tente copiar os traços deles. Isso ensina novos caminhos e formas ao seu cérebro!\n3. **PASSO 3 (Desenhar o Mundo Real):** Coloque um objeto simples sobre a mesa (uma caneca, uma maçã ou o seu brinquedo preferido) e tente desenhá-los exatamente como o vê.\n4. **PASSO 4 (Esboçar Clarito):** Comece sempre desenhando círculos e retângulos bem fraquinhos para planejar o espaço antes de colocar os detalhes definitivos.\n5. **PASSO 5 (A Borracha é Amiga):** Não tenha medo de errar e apagar! Errar faz parte do caminho e nos mostra como aperfeiçoar nossos traços.\n6. **PASSO 6 (Mudar de Materiais):** Se você só usa canetinhas, experimente giz de cera, guache, carvão ou lápis aquarela. Descubra texturas novas!\n\n💡 **Dicas:** Guarde todos os seus desenhos antigos em uma pasta datada! Daqui a alguns meses, você poderá comparar e ver a evolução fantástica que conquistou!\n\n⚠️ **Erros comuns:** Desistir logo no primeiro rascunho torto. Lembre-se: até os maiores pintores da história começaram fazendo bonequinhos de palito simples!\n\n🏆 **Desafio:** Tente fazer o desenho de um objeto sem tirar o lápis do papel nenhuma vez! É um exercício super engraçado que melhora a coordenação motora!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu dê uma lista de três exercícios práticos e rápidos para soltar a mão? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_melhorar_desenho"
    };
  }

  // 10. EXERCÍCIOS ARTÍSTICOS (Categoria 10)
  if (normalizedMsg.includes("aprender a desenhar") || normalizedMsg.includes("treinar") || normalizedMsg.includes("perspectiva") || normalizedMsg.includes("sombras") || normalizedMsg.includes("anatomia")) {
    return {
      reply: `💪 **EXERCÍCIOS DIVERTIDOS PARA TREINAR PERSPECTIVA, SOMBRAS E ANATOMIA** 🧠\n\nPraticar técnicas de arte é como fazer musculação para a imaginação! Vamos treinar de um jeito super divertido e descomplicado:\n\n✏️ **Passo a Passo para Exercitar:**\n1. **PASSO 1 (Treino de Sombras - A Esfera):** Desenhe um círculo simples. Escolha uma ponta para ser o Sol (Luz). No lado oposto ao Sol, pinte com o lápis bem escuro e vá esfumando suavemente com o seu dedo indicador para o centro do círculo. Veja o círculo se transformar em uma esfera redondinha em 3D!\n2. **PASSO 2 (Treino de Perspectiva - O Cubo 3D):** Desenhe um quadrado comum. Agora desenhe outro quadrado idêntico cruzando o primeiro um pouco acima e para a direita. Ligue os quatro cantos correspondentes dos dois quadrados com linhas retas. Parabéns! Você acaba de criar um cubo transparente tridimensional perfeito!\n3. **PASSO 3 (Treino de Anatomia - O Boneco de Palito):** Para desenhar pessoas in poses dinâmicas, desenhe círculos para a cabeça, peito e quadril. Ligue-os com linhas de palito para os braços e pernas. Faça bolinhas menores nas dobras (ombros, cotovelos, joelhos) para marcar as articulações. Fica super fácil cobrir com músculos depois!\n4. **PASSO 4 (O Desenho Cego):** Olhe fixamente para a sua mão fechada e desenhe-a na folha de papel sem olhar para o seu próprio lápis em nenhum momento! Fica super engraçado e ensina seu cérebro a desenhar o que vê de verdade, não o que acha que está vendo!\n\n💡 **Dicas:** Use um lápis macio (como o tipo 2B ou 6B), pois eles soltam grafite bem escuro de forma muito suave, facilitando esfumar sombras com os dedos!\n\n⚠️ **Erros comuns:** Tentar sombrear usando canetinha hidrográfica preta comum. Canetinhas não esfumam bem! Use sempre o lápis grafite para sombras suaves e graduais.\n\n🏆 **Desafio:** Crie um pequeno desenho do seu quarto usando a técnica do cubo 3D para fazer a sua cama em perspectiva real!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Quer que eu dê um desafio prático de sombras fáceis para começarmos agora? (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
      matchedKey: "como_treinar_geral"
    };
  }

  // General Como... question fallback
  return {
    reply: `🤔 **COMO APRENDER UMA NOVA HABILIDADE** ✨\n\nQue pergunta incrível! Querer saber "como" é o primeiro passo para se tornar um grande mestre ou cientista! Vamos descobrir como aprender esse assunto passo a passo:\n\n🎒 **Materiais recomendados:** Um caderno para anotações, caneta ou lápis coloridos e muita curiosidade!\n\n✏️ **Passo a Passo Geral:**\n1. **PASSO 1 (Descobrir):** Pesquise e divida o assunto em partes bem pequenininhas para não parecer difícil.\n2. **PASSO 2 (Praticar o básico):** Comece fazendo as partes mais fáceis todos os dias (ex: se quer andar de skate, treine primeiro o equilíbrio parado!).\n3. **PASSO 3 (Organizar as etapas):** Faça uma lista numerada de tarefas fáceis e vá riscando as que já aprendeu.\n4. **PASSO 4 (Aprender com Erros):** Quando algo der errado, sorria e tente novamente de um jeito diferente. O erro é o melhor professor!\n5. **PASSO 5 (Pedir Ajuda):** Converse com amigos, professores ou familiares e mostre o que você está tentando criar.\n6. **PASSO 6 (Divertir-se):** A jornada de aprender deve ser cheia de diversão, cores e alegria!\n\n💡 **Dicas:** Dedique apenas de 10 a 15 minutinhos focados por dia. A constância vale muito mais do que passar horas cansativas treinando!\n\n⚠️ **Erros comuns:** Querer aprender tudo perfeitamente logo no primeiro dia. Tenha paciência com você e comemore cada pequena vitória!\n\n🏆 **Desafio:** Tente explicar para alguém da sua casa o que você acabou de aprender sobre esse assunto em menos de um minuto!\n\n---\n**Quer que eu te ajude a dar o próximo passo?** Escolha o que você gostaria agora:\n- 🌟 Um exemplo pronto (digite "exemplo");\n- 🎯 Uma atividade para praticar (digite "praticar");\n- 🌱 Uma versão super fácil (digite "versão fácil");\n- 🚀 Uma versão mais avançada (digite "versão avançada").`,
    matchedKey: "como_geral_como"
  };
}

function resolverFollowUpMessage(normalizedMsg: string): { reply: string, matchedKey?: string } | null {
  // Check exact follow-up keys or direct matches
  if (normalizedMsg === "exemplo" || normalizedMsg === "exemplo pronto" || normalizedMsg === "quer que eu escreva um exemplo" || normalizedMsg === "quero exemplo" || normalizedMsg === "me da um exemplo") {
    return {
      reply: `🌟 **AQUI ESTÁ UM EXEMPLO SUPER CAPRICHADO PARA SEU APRENDIZADO!** 🎁\n\nComo prometido, fiz um exemplo bem fofinho e cheio de cores para inspirar você! Imagine um gatinho amarelo usando um capacete de astronauta azul-brilhante, flutuando no espaço e tentando pescar estrelas brilhantes com uma varinha mágica feita de um pincel! 🐈‍⬛🚀✨\n\nVeja que estrutura divertida:\n1. **O Cenário:** Fundo azul escuro cheio de pontinhos de glitter (estrelas).\n2. **O Personagem:** Gatinho "Pipoca", listrado, sorridente e com olhos enormes.\n3. **A Ação:** Ele está flutuando e rindo, super feliz com a sua varinha mágica!\n\nNão ficou fofo? Agora tente fazer a sua própria versão no papel colocando as suas cores preferidas! Se quiser mais desafios ou outra dica, é só falar! 🎨`,
      matchedKey: "como_followup_exemplo"
    };
  }
  
  if (normalizedMsg === "praticar" || normalizedMsg === "atividade para praticar" || normalizedMsg === "quero praticar" || normalizedMsg === "me da uma atividade") {
    return {
      reply: `🎯 **HORA DO DESAFIO! VAMOS PRATICAR JUNTOS!** 💪🎨\n\nPreparei um exercício super divertido para soltar a sua imaginação de artista! Que tal fazermos o **"Desafio do Desenho de Cabeça para Baixo"**?\n\n1. Pegue uma folha de papel branca.\n2. Escolha um brinquedo ou objeto bem simples da sua casa (como um copo ou chaveiro).\n3. Coloque esse objeto de cabeça para baixo na sua frente.\n4. Tente desenhá-lo exatamente como está vendo, de cabeça para baixo! Isso força o seu cérebro a enxergar as formas e linhas reais em vez de desenhar regras de cabeça!\n\nQuando terminar, pinte com canetinhas de cores mágicas! Me conte como ficou o seu desenho! 🤩`,
      matchedKey: "como_followup_praticar"
    };
  }
  
  if (normalizedMsg === "facil" || normalizedMsg === "versao facil" || normalizedMsg === "versão fácil" || normalizedMsg === "quero versao facil" || normalizedMsg === "modo facil") {
    return {
      reply: `🌱 **VERSÃO SUPER FÁCIL PARA COMEÇAR SEM MEDO!** 🥰\n\nSe você está começando agora, não se preocupe! Vamos fazer a versão simplificada de apenas **3 passos fáceis**:\n\n1. **Passo 1:** Faça apenas uma forma grande e simples na folha (um círculo para bichos, ou um quadrado para prédios e casas).\n2. **Passo 2:** Coloque apenas os detalhes mais importantes (olhos e boca felizes para personagens, telhado e porta para casas).\n3. **Passo 3:** Escolha apenas duas cores que você mais gosta e pinte bem bonito, sem se preocupar em sair das bordas!\n\nProntinho! Viu como desenhar e criar é fácil e relaxante? Se quiser tentar o passo completo depois, me avise! 🌸`,
      matchedKey: "como_followup_facil"
    };
  }
  
  if (normalizedMsg === "avancada" || normalizedMsg === "versao avancada" || normalizedMsg === "versão avançada" || normalizedMsg === "quero versao avancada" || normalizedMsg === "modo avancado") {
    return {
      reply: `🚀 **MODO ARTISTA AVANÇADO ATIVADO!** 👑✨\n\nUau! Você está pronto para decolar no universo artístico! Vamos colocar técnicas profissionais na sua criação:\n\n1. **Adicione Perspectiva de 3 Pontos:** Crie profundidade extrema fazendo as linhas convergirem para pontos de fuga distantes no horizonte!\n2. **Jogo de Luz e Contraluz:** Escolha uma fonte de luz super forte de um lado e crie sombras projetadas bem marcadas do lado oposto. Use grafite 6B ou tons escuros de tinta para esfumar!\n3. **Mistura de Cores Complementares:** Use o círculo cromático! Coloque cores opostas lado a lado (como azul e laranja, ou roxo e amarelo) para criar um contraste que faz a sua arte saltar aos olhos de quem vê!\n\nTenho certeza de que sua obra vai parecer de museu! Depois me conte o que você criou! 🎨`,
      matchedKey: "como_followup_avancada"
    };
  }
  
  return null;
}

function resolverMensagemLocalmenteRaw(mensagem: string, lib: Record<string, any>): { reply: string, matchedKey?: string } | null {
  const normalizedMsg = normalizarTexto(mensagem);
  if (!normalizedMsg) return null;

  // Intercept "Por que..." questions for Banco de Conhecimentos
  const porqueRes = resolverPorqueMessage(normalizedMsg);
  if (porqueRes) return porqueRes;

  // Intercept "Como..." questions for Modo Professor
  const comoRes = resolverComoMessage(normalizedMsg);
  if (comoRes) return comoRes;

  // Intercept follow-up selections
  const followUpRes = resolverFollowUpMessage(normalizedMsg);
  if (followUpRes) return followUpRes;

  // Step A.00: Prioritized Art Periods Check to prevent shadowing or outdated definitions from remote libraries
  const PERIODS_TO_PRIORITIZE = [
    'arte_antiga', 'arte_egipcia', 'arte_grega', 'arte_romana', 'arte_medieval',
    'arte_crista', 'arte_japonesa', 'arte_chinesa', 'expressionismo', 'arte_europeia',
    'arte_bizantina', 'arte_islamica', 'arte_pre_colombiana', 'arte_digital', 'arte_ia',
    'arte_africana', 'arte_indigena', 'arte_naif', 'modernismo'
  ];

  let bestPeriodMatch: any = null;
  let bestPeriodScore = 0;

  for (const item of CONHECIMENTO_CANDINHO) {
    if (item.matchedKey && PERIODS_TO_PRIORITIZE.includes(item.matchedKey)) {
      for (const palavra of item.palavras) {
        const normalizedPalavra = normalizarTexto(palavra);
        if (!normalizedPalavra) continue;

        if (testarPalavraChave(normalizedMsg, normalizedPalavra)) {
          const score = normalizedPalavra.length;
          if (score > bestPeriodScore) {
            bestPeriodScore = score;
            bestPeriodMatch = item;
          }
        }
      }
    }
  }

  if (bestPeriodMatch) {
    const resp = bestPeriodMatch.resposta;
    const finalReply = typeof resp === "function" ? resp() : resp;
    return {
      reply: finalReply,
      matchedKey: bestPeriodMatch.matchedKey
    };
  }

  // Step A.01: Check for Local Jokes / Piadas Trigger
  if (
    normalizedMsg.includes("piada") || 
    normalizedMsg.includes("engracad") || 
    normalizedMsg.includes("charada") || 
    normalizedMsg.includes("brincadeira") || 
    normalizedMsg.includes("risada") || 
    normalizedMsg.includes("humor") || 
    normalizedMsg.includes("rir") ||
    normalizedMsg.includes("sorrir")
  ) {
    const randomJoke = getRandomElement(PIADAS_CANDINHO);
    return {
      reply: `Haha! Sabia que eu adoro uma boa piada para alegrar o nosso dia? 🎨 Sorrir deixa nossa inspiração gigante! Lá vai uma charada da minha paleta:\n\n👉 **${randomJoke}**\n\nQue tal? Vamos continuar desenhando ou quer ouvir mais alguma piada ou curiosidade? 😄`,
      matchedKey: "piada"
    };
  }

  // Step A.02: Check for Local Curiosities Trigger
  if (
    normalizedMsg.includes("curiosidade") || 
    normalizedMsg.includes("sabia que") || 
    normalizedMsg.includes("voce sabia") || 
    normalizedMsg.includes("fato extraordinario") || 
    normalizedMsg.includes("fato interessante") || 
    normalizedMsg.includes("novidade") || 
    normalizedMsg.includes("segredo") || 
    normalizedMsg.includes("fato da arte") ||
    normalizedMsg.includes("fato")
  ) {
    let randomCuriosity = "";
    let categoryPrefix = "";

    if (normalizedMsg.includes("danca") || normalizedMsg.includes("balé") || normalizedMsg.includes("bale") || normalizedMsg.includes("dançar")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_DANCA);
      categoryPrefix = "🩰 **Sobre o Ritmo Fascinante da Dança!** 🌟\n\n";
    } else if (normalizedMsg.includes("teatro") || normalizedMsg.includes("palco") || normalizedMsg.includes("comedia") || normalizedMsg.includes("tragedia") || normalizedMsg.includes("grecia")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_TEATRO);
      categoryPrefix = "🎭 **Dos Palcos Lendários e do Teatro Mágico!** ✨\n\n";
    } else if (normalizedMsg.includes("anime") || normalizedMsg.includes("cartoon") || normalizedMsg.includes("goku") || normalizedMsg.includes("pokemon")) {
      const category = CURIOSIDADES_ACERVO.find(cat => cat.id === "animes_fantastico");
      const randomItem = category ? getRandomElement(category.items.map(i => `${i.emoji} **${i.pergunta}**\n${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "🌸 **Sobre os Fantásticos Animes Japoneses!** 📺\n\n";
    } else if (normalizedMsg.includes("manga") || normalizedMsg.includes("quadrinho") || normalizedMsg.includes("tezuka")) {
      const category = CURIOSIDADES_ACERVO.find(cat => cat.id === "mangas_origem");
      const randomItem = category ? getRandomElement(category.items.map(i => `${i.emoji} **${i.pergunta}**\n${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "📖 **Sobre a Mágica Arte dos Mangás!** ✍️\n\n";
    } else if (normalizedMsg.includes("desenho") || normalizedMsg.includes("scooby") || normalizedMsg.includes("simpsons") || normalizedMsg.includes("disney")) {
      const category = CURIOSIDADES_ACERVO.find(cat => cat.id === "desenhos_animados");
      const randomItem = category ? getRandomElement(category.items.map(i => `${i.emoji} **${i.pergunta}**\n${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "🎬 **No Mundo dos Desenhos Animados Clássicos!** 🍿\n\n";
    } else if (normalizedMsg.includes("tartaruga") || normalizedMsg.includes("ninja")) {
      const category = CURIOSIDADES_ACERVO.find(cat => cat.id === "tartarugas_ninja");
      const randomItem = category ? getRandomElement(category.items.map(i => `${i.emoji} **${i.pergunta}**\n${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "🐢 **Poder Mutante no Renascimento da Arte!** 🍕\n\n";
    } else if (normalizedMsg.includes("pintor") || normalizedMsg.includes("artista") || normalizedMsg.includes("gogh") || normalizedMsg.includes("da vinci") || normalizedMsg.includes("pintar") || normalizedMsg.includes("pincel")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_DESENHO);
      categoryPrefix = "🎨 **Do Ateliê de Pintores e Técnicas de Desenho!** 🖌️\n\n";
    } else {
      const allAcervoItems = CURIOSIDADES_ACERVO.flatMap(cat => 
        cat.items.map(item => `${item.emoji} **${item.pergunta}**\n${item.resposta}`)
      );
      const combinedCuriosities = [...CURIOSIDADES_CANDINHO, ...allAcervoItems];
      randomCuriosity = getRandomElement(combinedCuriosities);
      categoryPrefix = "✨ **Do Meu Baú de Mistérios Artísticos!**\n\n";
    }

    return {
      reply: `Uau! O universo da arte é cheio de segredos fantásticos e mistérios mágicos! ✨ Veja que curiosidade sensacional eu busquei no meu conhecimento:\n\n${categoryPrefix}${randomCuriosity}\n\nIncrível, não é? A arte sempre nos ajuda a ver em novos tons! Se quiser ouvir outra curiosidade ou saber sobre algum pintor, me pergunte! 🎨`,
      matchedKey: "curiosidade"
    };
  }

  // Step A: Search the hand-crafted cultural library entries (the primary database/lib) with safe word boundary check
  let bestMatchKey: string | undefined = undefined;
  let bestMatchScore = 0;

  for (const chave in lib) {
    const item = lib[chave];
    if (!item.palavras_chave) continue;

    for (const pKeyword of item.palavras_chave) {
      const normalizedKeyword = normalizarTexto(pKeyword);
      
      // Check matching strength using robust keyword bound helper to prevent substring overlaps (like "rio" in "curiosidade")
      if (testarPalavraChave(normalizedMsg, normalizedKeyword)) {
        // Find match length score so specific phrases are prioritized over tiny subsets (e.g. "hip hop" over "hip")
        const score = normalizedKeyword.length;
        if (score > bestMatchScore) {
          bestMatchScore = score;
          bestMatchKey = chave;
        }
      }
    }
  }

  // If we found a match in our localized cultural library, compile the perfect formatted content!
  if (bestMatchKey) {
    const item = lib[bestMatchKey];
    const replyText = construirRespostaLocal(item, mensagem);
    return {
      reply: replyText,
      matchedKey: bestMatchKey
    };
  }

  // Step B: Check our comprehensive knowledge base of art concepts, music, dance, theater, artists and emotions
  let bestConhecimentoMatch: ConhecimentoItem | null = null;
  let bestConhecimentoScore = 0;

  for (const item of CONHECIMENTO_CANDINHO) {
    for (const palavra of item.palavras) {
      const normalizedPalavra = normalizarTexto(palavra);
      if (!normalizedPalavra) continue;

      if (testarPalavraChave(normalizedMsg, normalizedPalavra)) {
        const score = normalizedPalavra.length;
        if (score > bestConhecimentoScore) {
          bestConhecimentoScore = score;
          bestConhecimentoMatch = item;
        }
      }
    }
  }

  if (bestConhecimentoMatch) {
    const resp = bestConhecimentoMatch.resposta;
    const finalReply = typeof resp === "function" ? resp() : resp;
    return {
      reply: finalReply,
      matchedKey: bestConhecimentoMatch.matchedKey
    };
  }

  // Step B.50: Check our rich curated curiosities acervo as a secondary check (anime, manga, mona lisa, gogh, etc.)
  const matchedCuriosity = buscarCuriosidadePorKeyword(mensagem);
  if (matchedCuriosity) {
    let reply = `💡 **Que curiosidade fantástica!**\n\n**Pergunta:** ${matchedCuriosity.pergunta}\n\n👉 **Resposta:** ${matchedCuriosity.resposta}`;
    if (matchedCuriosity.detalhes) {
      reply += `\n\n🤓 **Curiosidade extra:** ${matchedCuriosity.detalhes}`;
    }
    return {
      reply: reply
    };
  }

  // Step C: Check for specific Candinho / Portinari / Artists triggers
  for (const intent of PORTINARI_INTENTS) {
    const matched = intent.keywords.some(keyword => {
      const nKw = normalizarTexto(keyword);
      if (!nKw) return false;

      // If it's a bare short/common keyword like "candinho", "portinari", or "candido",
      // only match if the entire query is exactly that keyword or very close to it.
      if (nKw === "candinho" || nKw === "portinari" || nKw === "candido") {
        return normalizedMsg === nKw;
      }

      return testarPalavraChave(normalizedMsg, nKw);
    });
    
    if (matched) {
      return { reply: intent.reply };
    }
  }

  // Step F: First scan direct conversational intents
  for (const intent of CONVERSATIONAL_INTENTS) {
    const matched = intent.keywords.some(keyword => {
      const normalizedKeyword = normalizarTexto(keyword);
      return testarPalavraChave(normalizedMsg, normalizedKeyword);
    });
    
    if (matched) {
      return { reply: intent.reply };
    }
  }

  // None matched locally. Return null to allow fallback if API is present.
  return null;
}

/**
 * Adiciona uma pergunta aberta e amigável no final das respostas estáticas para torná-las
 * mais dialógicas, naturais e interativas para a criança (evitando que pareça apenas um professor que dá a resposta e vai embora).
 */
export function tornarRespostaDialogica(reply: string, matchedKey?: string): string {
  if (!reply) return reply;
  
  // Se for uma resposta estruturada de "como_" ou "followup", ela já tem guias e opções de interação
  if (matchedKey && (matchedKey.startsWith("como_") || matchedKey.includes("followup"))) {
    return reply;
  }
  
  const cleanReply = reply.trim();
  
  // Não duplicar se a resposta já terminar com uma pergunta aberta
  if (cleanReply.endsWith("?") || cleanReply.endsWith("? 😄") || cleanReply.endsWith("? 🎨") || cleanReply.endsWith("? 🕵️") || cleanReply.endsWith("? 😊")) {
    return reply;
  }

  const perguntasInterativas = [
    "\n\nE você, o que achou disso? Me conta, você já conhecia ou já pensou sobre esse assunto antes? 😊",
    "\n\nSabe, isso me deu uma curiosidade: você já tentou desenhar ou pintar algo parecido com isso? Como foi? 🎨",
    "\n\nSe você pudesse fazer uma pintura ou desenho inspirado nessa história, que cores você usaria para dar vida a ele? 🌈",
    "\n\nO que você mais gostou de aprender sobre isso? Quer conversar mais sobre essa parte ou prefere descobrir outra curiosidade? 😉",
    "\n\nIsso me lembra de como a arte está em todo lugar! Você consegue ver algo assim no seu dia a dia ou na sua casa? 🏠✨",
    "\n\nEssa é uma das minhas histórias favoritas! Qual é o seu tipo de arte ou desenho preferido? Me conta! 🤩",
    "\n\nAdoro falar sobre esse tema com você! Sabia que você pode tentar fazer o seu próprio rascunho disso hoje? O que acha da ideia? 🖍️"
  ];

  // Se a resposta for relacionada a fake news ou segurança na internet
  if (matchedKey && (matchedKey.includes("fake_news") || matchedKey.includes("golpe") || matchedKey === "como_proteger_fake_news")) {
    const perguntasFakeNews = [
      "\n\nE você, já viu alguma notícia ou imagem na internet que parecia muito estranha ou mentirosa? Como foi? 🕵️",
      "\n\nSabe, sempre que receber algo duvidoso, você pode me perguntar! O que você costuma fazer quando vê uma imagem muito chocante? 🧐",
      "\n\nSeu superpoder de detetive está super ativo! Quer que eu te dê um exemplo real de como a Inteligência Artificial pode criar imagens falsas? 🤖"
    ];
    const randomFakeQ = perguntasFakeNews[Math.floor(Math.random() * perguntasFakeNews.length)];
    return `${cleanReply}${randomFakeQ}`;
  }

  const randomQ = perguntasInterativas[Math.floor(Math.random() * perguntasInterativas.length)];
  return `${cleanReply}${randomQ}`;
}

export function resolverMensagemLocalmente(mensagem: string, lib: Record<string, any>): BotLocalResponse | null {
  const result = resolverMensagemLocalmenteRaw(mensagem, lib);
  if (!result) return null;

  // Torna a resposta local mais dialógica e amigável para conversar com a criança
  result.reply = tornarRespostaDialogica(result.reply, result.matchedKey);

  // Se houver matchedKey, vamos verificar se existe imagem correspondente na nossa Galeria
  if (result.matchedKey) {
    const imgObj = obterImagemDaGaleria(result.matchedKey);
    if (imgObj) {
      return {
        ...result,
        image: imgObj
      };
    }
  }

  return result;
}

// 6. Name extraction helper for kids
export function extrairNome(mensagem: string): string | null {
  const normalized = mensagem.trim();
  
  // Patterns for name extraction in Portuguese
  const patterns = [
    /(?:meu nome é|meu nome e)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:me chamo)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:sou o|sou a|sou)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:me chamam de|chamam de)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:pode me chamar de|me chama de)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:aqui é o|aqui é a|aqui e o|aqui e a)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:oi,?\s+sou\s+o|oi,?\s+sou\s+a|oi,?\s+sou)\s+([A-ZÀ-ÿa-z\s]+)/i,
    /(?:oi,?\s+me\s+chamo)\s+([A-ZÀ-ÿa-z\s]+)/i
  ];

  // Stopwords list of common words we shouldn't confuse as names
  const ignoreWords = [
    "um", "uma", "o", "a", "ele", "ela", "artista", "pintor", "desenho", 
    "quadro", "arte", "amigo", "candinho", "professor", "aluno", "curioso",
    "fazer", "desenhar", "colorir"
  ];

  for (const pattern of patterns) {
    const match = normalized.match(pattern);
    if (match && match[1]) {
      // Grab only the first word from what match returned to avoid full sentences
      const rawName = match[1].trim().split(/\s+/)[0];
      if (rawName.length >= 2 && rawName.length < 20) {
        const lowerName = rawName.toLowerCase();
        if (!ignoreWords.includes(lowerName)) {
          // Capitalize first letter properly
          return rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
        }
      }
    }
  }
  return null;
}

