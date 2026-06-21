import { CURIOSIDADES_ACERVO, buscarCuriosidadePorKeyword } from "../data/curiosidadesAcervo.js";
import { GALERIA_IMAGENS, GaleriaItem } from "../data/galeriaImagens.js";

export interface DialogIntent {
  keywords: string[];
  reply: string;
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
  const item = GALERIA_IMAGENS[key];
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
    reply: "O Candinho de verdade adorava brincar no sítio e ajudar os pais na plantação de café! 🌾 Desde pequeno já rabiscava tudo com carvão nas paredes. Os pais achavam lindo! Será que seus pais também gostam dos seus desenhos? 🖼️"
  },
  {
    id: "obras_portinari",
    keywords: ["obras portinari", "quadros portinari", "pinturas portinari", "portinari obras famosas", "obras de portinari", "quadros de portinari", "pinturas de portinari", "paineis da guerra e da paz", "guerra e paz", "meninos soltando pipa", "retirantes"],
    reply: "Portinari pintou muitas obras lindas! ✨ As mais famosas são: 'O Café' ☕, 'Os Retirantes' 🚶, 'Meninos Soltando Pipa' 🪁 e os 'Painéis da Guerra e da Paz' que estão na ONU, em Nova York! Já viu algum desses? 🎨"
  },
  {
    id: "outros_artistas",
    keywords: ["artista famoso", "artistas famosos", "outros artistas", "conhecer artistas", "lista de artistas", "mais artistas", "outro artista"],
    reply: "Existem muitos artistas incríveis! 🌟 Tarsila do Amaral pintou o 'Abaporu' (abraço em tupi). Van Gogh amava girassóis 🌻. Picasso desenhava pessoas com formas diferentes! Qual deles você quer conhecer melhor? 📚"
  }
];

interface ConhecimentoItem {
  palavras: string[];
  resposta: string | (() => string);
  matchedKey?: string;
}

const atividadesTriste = [
  "Ah, meu amigo. Quando eu fico tristinho, gosto de pegar cores quentes e desenhar um grande sol brilhante! Sabia que Van Gogh pintava girassóis amarelos bem luminosos para alegrar o coração dele? Que tal fazermos um desenho livre usando as suas cores alegres favoritas? Conta para mim se você quer desenhar algo bem quentinho hoje! 🌻🔆",
  "Sinta-se abraçado por mim! Que tal colorirmos uma folha inteira com pinceladas bem coloridas de aquarela imaginária ou lápis? Às vezes, colocar nossos sentimentos no papel ajuda o coração a respirar. Quer que eu te sugira um desafio de desenho feliz? 🎨💛",
  "Tudo bem se sentir tristinho às vezes, sabia? Até as nuvens choram chuva para o jardim crescer! Que tal experimentarmos fazer uma escultura de massinha ou papel dobrado hoje? Me diga qual é o seu animal favorito e eu te dou uma ideia de como criá-lo! 🐘✨"
];

const atividadesTedio = [
  "Tédio? Ah, que oportunidade fantástica para soltar a imaginação! Sabia que quando os artistas estão sem saber o que fazer, eles espalham rabiscos na folha e tentam achar formas neles? Que tal rabiscarmos uma teia maluca e pintarmos cada pedacinho com uma cor primária? 🎨🤩",
  "Sai pra lá, tédio! Vamos brincar de desenhar com os olhos vendados ou com a outra mão? É super engraçado! Tente desenhar um gato-marinho com a mão que você não costuma escrever e me conte se ficou divertido! 🐈‍⬛🍭",
  "Sabia que você pode fazer um brinquedo com rolo de papel higiênico ou papelão? Você pode pintar e criar um binóculo de explorador de arte! O que você quer explorar no quarto com o seu binóculo mágico hoje? 🔭✨"
];

const atividadesRaiva = [
  "Quando a raiva chega, que tal respirarmos bem fundo como o balão de ar do Portinari? Respire... 1... 2... 3... Agora, que tal pegarmos um papel e rabiscarmos com muita força linhas pretas e vermelhas em zigue-zague? Depois, podemos pintar em volta com tons azuis bem calmos para fazer as pazes com a folha. Funciona super bem! 🎈🧘‍♂️",
  "Respire com calma, meu pequeno artista! A raiva é como uma cor vermelha muito forte e barulhenta que às vezes esquenta a nossa paleta. Que tal transformarmos essa energia em uma dança maluca e depois desenharmos uma tempestade mágica que logo vira arco-íris? Quer tentar? ⛈️🌈"
];

const atividadesFeliz = [
  "Que notícia maravilhosa! A sua alegria brilha mais que o amarelo do sol do Monet! 🌟 Vamos comemorar essa felicidade desenhando um palhaço bem colorido ou uma festa com muitos confetes no papel? Pode usar giz de cera, hidrocor e purpurina! Me conte o que você mais gosta de desenhar quando está feliz! 🎉🎨",
  "Uau! A felicidade é a melhor colagem do nosso painel! Que tal celebrarmos dançando sua música favorita ou cantando uma cantiga de roda como 'Cirandinha' comigo? Se quiser, também podemos criar um personagem feliz para morar na sua imaginação! Vamos desenhar? 🚀✨"
];

const atividadesAnsioso = [
  "Estou aqui com você, respire com calma... Sabia que a música é ótima para acalmar os pensamentos agitados? Deixe-me cantar para nós. Que tal tentarmos desenhar círculos e espirais bem lentos na folha de papel, um dentro do outro? Ajuda muito a relaxar. Quer tentar agora? 🌀🌾",
  "Respire fundo, sinta o ar entrando e saindo feito as ondas calmas do mar que a Tarsila pintava. Que tal desenharmos um jardim calmo com flores azuis e verdes bem fresquinhas? Essas cores frias ajudam a tranquilizar o nosso coração. Me diga qual flor você quer plantar no nosso jardim de papel hoje! 🌸🍀"
];

const CONHECIMENTO_CANDINHO: ConhecimentoItem[] = [
  // ===== RESPOSTAS EMOCIONAIS HUMANIZADAS =====
  { 
    palavras: ['estou triste', 'triste', 'me sinto triste', 'sentindo triste'], 
    resposta: () => getRandomElement(atividadesTriste)
  },
  { 
    palavras: ['estou entediado', 'entediado', 'tédio', 'sem nada para fazer'], 
    resposta: () => getRandomElement(atividadesTedio)
  },
  { 
    palavras: ['estou com raiva', 'raiva', 'com raiva', 'zangado'], 
    resposta: () => getRandomElement(atividadesRaiva)
  },
  { 
    palavras: ['estou feliz', 'feliz', 'alegre', 'contente'], 
    resposta: () => getRandomElement(atividadesFeliz)
  },
  { 
    palavras: ['estou ansioso', 'ansioso', 'ansiedade', 'nervoso'], 
    resposta: () => getRandomElement(atividadesAnsioso)
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
    resposta: '👁️ **Simbolismo:** O quadro é uma caça ao tesouro de segredinhos ocultos! O pintor coloca vários enigmas e símbolos para expressar uma mensagem poética.\n👨‍🎨 **Artistas famosos:** Gustave Moreau, Mikhail Vrubel.\n💡 **Dica do Candinho:** Cada pequena flor, objeto ou adorno no cenário esconde um significado profundo para decifrarmos! 👁️✨'
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
  { palavras: ['ponto', 'o que é ponto'], resposta: 'O ponto é a menor marca no desenho! Sozinho chama atenção, mas muitos pontos juntos podem formar linhas, formas e até texturas. No pontilhismo, os pontos criam imagens incríveis! Seurat usou isso em "Tarde de domingo na Ilha de Grande Jatte". 🔴' },
  { palavras: ['linha', 'o que é linha'], resposta: 'A linha é como um ponto que saiu passeando! Pode ser reta, curva, fina ou grossa. Linhas retas parecem firmes; curvas são mais suaves. Dürer e Kandinsky adoravam brincar com linhas! 📏' },
  { palavras: ['forma', 'formas', 'o que e forma', 'o que sao formas', 'o que e uma forma'], resposta: 'Formas são as figuras que criamos quando fechamos uma linha! 🔺🔵🟩 Elas podem ser geométricas (como círculos, quadrados e triângulos) ou orgânicas (com formatos livres e naturais, como uma nuvem ou uma folha). Joan Miró e Pablo Picasso amavam brincar com formas!' },
  { palavras: ['cores primárias', 'primarias', 'o que são cores primárias'], resposta: 'Cores primárias ou puras são aquelas que não podem ser obtidas por meio de outras misturas. Elas são: amarelo, azul e vermelho. Com elas, podemos criar todas as outras cores! 🔴🔵🟡' },
  { palavras: ['cores secundárias', 'secundarias', 'o que são cores secundárias'], resposta: 'Cores secundárias são geradas por meio da mistura de duas cores primárias. 🌈 Amarelo + vermelho = laranja 🟠, vermelho + azul = roxo ou violeta 🟣, azul + amarelo = verde 🟢. Que combinação legal!' },
  { palavras: ['cores terciárias', 'terciarias', 'o que são cores terciárias'], resposta: 'Cores terciárias são geradas pela mistura de uma cor primária com uma cor secundária. São elas: vermelho-arroxeado (vinho), vermelho-alaranjado, amarelo-esverdeado, amarelo-alaranjado (bege), azul-arroxeado e azul-esverdeado (verde-água). Um montão de cores! 🌈' },
  { palavras: ['cores complementares', 'complementares', 'contrastantes', 'o que são cores complementares'], resposta: 'Cores complementares são opostas no círculo cromático e criam o máximo de contraste! Os três pares principais são: 🔴 vermelho e 🟢 verde, 🟡 amarelo e 🟣 violeta (roxo), 🔵 azul e 🟠 laranja. Uma realça a outra! ⚡' },
  { palavras: ['cores quentes', 'quentes', 'o que são cores quentes'], resposta: 'Cores quentes transmitem sensação de calor e energia! São elas: vermelho, laranja e amarelo. Elas lembram sol e fogo, dão alegria e movimento! ☀️' },
  { palavras: ['cores frias', 'frias', 'o que são cores frias'], resposta: 'Cores frias transmitem sensação de calma e serenidade! São elas: azul, verde e violeta (roxo). Elas lembram água, céu e floresta. ❄️' },
  { palavras: ['cores neutras', 'neutras', 'o que são cores neutras'], resposta: 'Cores neutras são aquelas que têm pouca reflexão da luz, como os tons de cinza e marrom. Elas são ótimas para equilibrar outras cores! ⚪⚫' },
  { palavras: ['cor', 'o que é cor'], resposta: 'As cores são sensações visuais que nossos olhos captam quando há luz presente. A palavra "cor" vem do latim (color) e significa "cobrir" ou "ocultar". A luz branca é a união das sete cores do arco-íris: vermelho, laranja, amarelo, verde, azul, anil e violeta. Já a cor preta representa a ausência de luz. 🌈' },
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
    resposta: '💃 **TANGO**\n\n**Origem:**\nO Tango surgiu na Argentina, principalmente na cidade de Buenos Aires, há mais de 100 anos.\n\n**Características:**\nÉ uma dança feita em dupla, com movimentos elegantes, passos marcados e muita expressão. Os dançarinos costumam dançar bem próximos um do outro.' 
  },
  { 
    palavras: ['salsa', 'dança salsa'], 
    resposta: '🌶️ **SALSA**\n\n**Origem:**\nA Salsa surgiu da mistura de ritmos caribenhos, especialmente em Cuba, e ficou muito popular em vários países da América Latina.\n\n**Características:**\nÉ uma dança alegre e animada, com passos rápidos, giros e muito ritmo. Geralmente é dançada em dupla ao som de músicas vibrantes.' 
  },
  { 
    palavras: ['valsa', 'dança valsa'], 
    resposta: '👑 **VALSA**\n\n**Origem:**\nA Valsa nasceu na Áustria e na Alemanha no século XVIII.\n\n**Características:**\nÉ uma dança suave e elegante, realizada em dupla. Seus movimentos são circulares e acompanham o compasso de três tempos da música, dando a sensação de que os dançarinos estão deslizando pelo salão.' 
  },
  { 
    palavras: ['elementos da dança'], 
    resposta: 'Os principais elementos da dança são: movimento (gestos e ações do corpo, organizados por fluência, espaço, peso e tempo, estudados por Rudolf Laban), espaço (o local onde a dança acontece), som (música, respiração, batidas do corpo) e corpo (o instrumento da dança, valorizando a diversidade corporal, social e cultural).' 
  },
  { 
    palavras: ['balé', 'ballet', 'dança clássica'], 
    resposta: '🩰 O balé é uma dança clássica, técnica e disciplinada, que exige anos de treino. Surgiu nas cortes italianas e se desenvolveu na França e Rússia. As bailarinas usam sapatilhas de ponta e os movimentos são precisos e graciosos.' 
  },
  { 
    palavras: ['dança contemporânea'], 
    resposta: '💃 A dança contemporânea busca liberdade de movimentos, experimentação e diversidade de corpos. Ela mistura técnicas e expressões, sem regras fixas, e muitas vezes aborda temas sociais e políticos.' 
  },
  { 
    palavras: ['danças urbanas', 'hip hop dança', 'street dance'], 
    resposta: '🕺 As danças urbanas são estilos criados em contextos urbanos e periféricos, como o hip hop, breaking, locking e popping. Têm forte significado social e cultural, expressando a realidade e a criatividade das comunidades.' 
  },
  { 
    palavras: ['jazz dança', 'jazz dance'], 
    resposta: '🎷 O jazz é um estilo de dança marcado pelo improviso e pelas raízes populares. Surgiu nos Estados Unidos com a música jazz e incorpora elementos do balé e da dança moderna, com movimentos energéticos e expressivos.' 
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
    resposta: '🎉 Frevo é uma dança típica de Pernambuco, cheia de energia e passos malabarísticos. Os dançarinos usam sombrinhas coloridas e se movem rapidamente ao som de uma orquestra de metais. É patrimônio cultural imaterial da humanidade!' 
  },
  { 
    palavras: ['bumba meu boi', 'bumba boi', 'boi bumbá'], 
    resposta: '🐂 O Bumba Meu Boi é uma festa do folclore brasileiro, muito forte no Maranhão. Conta a história de um boi que morre e revive, com personagens como o Pai Francisco e a Mãe Catirina. Tem dança, música e teatro ao mesmo tempo!' 
  },
  { 
    palavras: ['caboclinho'], 
    resposta: '🌿 Caboclinho é uma dança indígena do Nordeste, com cocares de penas, arco e flecha. Os dançarinos imitam a caça e a guerra, com passos rápidos e muita força. É uma forma de preservar a cultura dos povos originários.' 
  },
  { 
    palavras: ['cavalo marinho'], 
    resposta: '🐴 Cavalo Marinho é uma dança dramática do folclore pernambucano. Mistura música, dança e teatro, com personagens como o Cavalo Marinho (um cavalo encantado), Mateus e Catirina. É uma grande brincadeira!' 
  },
  { 
    palavras: ['coco', 'dança coco'], 
    resposta: '🥥 Coco é uma dança de roda do Nordeste, com sapateado e palmas. Surgiu nos engenhos de cana, quando os trabalhadores batiam os pés no chão enquanto quebravam coco. O ritmo é contagiante!' 
  },
  { 
    palavras: ['samba de roda'], 
    resposta: '🔄 Samba de roda é uma forma tradicional de samba, dançado em roda, com participação de todos. Nasceu no Recôncavo Baiano e é patrimônio cultural brasileiro. As pessoas entram na roda, sambam e dão lugar a outras.' 
  },
  { 
    palavras: ['jongo'], 
    resposta: '🥁 Jongo é uma dança de origem africana, praticada no sudeste do Brasil. Os tambores chamados "caxambu" e "angona" puxam o ritmo, e os dançarinos respondem com versos improvisados. Tem umbigada e muita ancestralidade.' 
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
    palavras: ['arte indígena', 'arte indigena', 'arte dos índios', 'cultura indígena'], 
    resposta: '🪶 A arte indígena está presente na pintura corporal, na cerâmica, na cestaria, na arte plumária (enfeites de penas) e na música. Cada etnia tem seus próprios desenhos e significados, ligados à natureza e aos ancestrais. É uma arte cheia de símbolos e tradição!' 
  },
  { 
    palavras: ['arte africana', 'arte da áfrica', 'cultura africana'], 
    resposta: '🌍 A arte africana é muito rica e diversa! Máscaras, esculturas em madeira, tecidos coloridos (como o kente) e instrumentos musicais como o djembe. Muitas obras representam espíritos, ancestrais e forças da natureza. Essa arte influenciou artistas como Picasso e o modernismo brasileiro.' 
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
    resposta: 'Romero Britto (nascido em 1963, em Recife) é um pintor e escultor que faz muito sucesso mundialmente! ❤️ Ele cria desenhos de bichinhos, flores e corações misturando listras, círculos e cores neon super vibrantes. O que ele ensina: espalhar sorrisos e alegria através da arte.',
    matchedKey: 'romero_britto'
  }
];

function resolverMensagemLocalmenteRaw(mensagem: string, lib: Record<string, any>): { reply: string, matchedKey?: string } | null {
  const normalizedMsg = normalizarTexto(mensagem);
  if (!normalizedMsg) return null;

  // Step A.00: Check our rich curated curiosities acervo FIRST for precise high-quality answers (anime, manga, mona lisa, gogh, etc.)
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

export function resolverMensagemLocalmente(mensagem: string, lib: Record<string, any>): BotLocalResponse | null {
  const result = resolverMensagemLocalmenteRaw(mensagem, lib);
  if (!result) return null;

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

