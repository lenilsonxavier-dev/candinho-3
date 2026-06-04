import { CURIOSIDADES_ACERVO, buscarCuriosidadePorKeyword } from "../data/curiosidadesAcervo.js";

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

// 3. Builds a customized, structured conversational response natively using metadata parameters
export function construirRespostaLocal(item: any, mensagemOriginal: string): string {
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

export const CURIOSIDADES_CANDINHO: string[] = [
  "A pintura Mona Lisa é famosa pelo sorriso misterioso.",
  "Van Gogh vendeu apenas um quadro enquanto estava vivo.",
  "O Abaporu é uma das obras mais importantes da arte brasileira.",
  "Os primeiros desenhos da história foram feitos em cavernas.",
  "Alguns artistas pintam usando os dedos, não pincéis.",
  "O grafite é uma forma de arte urbana muito importante.",
  "Pablo Picasso sabia desenhar muito bem desde criança.",
  "Existem esculturas feitas de gelo e até de areia.",
  "As cores podem mudar o nosso humor.",
  "A arte pode ser feita com qualquer material, até lixo reciclado.",
  "O teatro começou há milhares de anos na Grécia antiga.",
  "Algumas danças contam histórias sem usar palavras.",
  "O samba é considerado patrimônio cultural do Brasil.",
  "Os artistas indígenas usam a natureza como inspiração.",
  "Existem músicas feitas só com sons do corpo.",
  "A arte pode ser encontrada nas ruas, museus e até na natureza.",
  "Alguns quadros famosos valem milhões de reais.",
  "A arte ajuda as pessoas a expressar sentimentos.",
  "O cinema também é considerado uma forma de arte.",
  "Existem pinturas feitas em paredes gigantes chamadas murais.",
  "O balé surgiu há muitos anos na Europa.",
  "O maracatu mistura música, dança e tradição.",
  "O desenho é uma das formas mais antigas de arte.",
  "Alguns artistas criam obras com luz e sombra.",
  "A fotografia também é uma forma de arte.",
  "A arte pode contar histórias sem usar palavras.",
  "O corpo humano pode ser usado como forma de arte.",
  "Existem museus gigantes em várias partes do mundo.",
  "A arte pode ensinar sobre história e cultura.",
  "Todo mundo pode ser artista, basta criar!"
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

export function resolverMensagemLocalmente(mensagem: string, lib: Record<string, any>): { reply: string, matchedKey?: string } | null {
  const normalizedMsg = normalizarTexto(mensagem);
  if (!normalizedMsg) return null;

  // Step A.00: Check our rich curiosities acervo first for precise keyword questions
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

  // Step A.0: Check for specific Candinho / Portinari / Artists triggers with high-priority word-boundary regexes
  for (const intent of PORTINARI_INTENTS) {
    const matched = intent.keywords.some(keyword => {
      const nKw = normalizarTexto(keyword);
      if (!nKw) return false;
      const escapedKeyword = nKw.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, "i");
      return regex.test(normalizedMsg);
    });
    
    if (matched) {
      return { reply: intent.reply };
    }
  }

  // Step A.1: Check for Local Jokes / Piadas Trigger
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
      reply: `Haha! Sabia que eu adoro uma boa piada para alegrar o nosso dia? 🎨 Sorrir deixa nossa inspiração gigante! Lá vai uma charada da minha paleta:\n\n👉 **${randomJoke}**\n\nQue tal? Vamos continuar desenhando ou quer ouvir mais alguma piada ou curiosidade? 😄`
    };
  }

  // Step A.2: Check for Local Curiosities Trigger
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
    // Combine standard curiosities with the detailed ones from our acervo
    const allAcervoItems = CURIOSIDADES_ACERVO.flatMap(cat => 
      cat.items.map(item => `${item.emoji} **${item.pergunta}**\n${item.resposta}`)
    );
    const combinedCuriosities = [...CURIOSIDADES_CANDINHO, ...allAcervoItems];
    const randomCuriosity = getRandomElement(combinedCuriosities);
    return {
      reply: `Uau! O universo da arte é cheio de segredos fantásticos e mistérios mágicos! ✨ Veja que curiosidade sensacional eu busquei na minha paleta de conhecimentos:\n\n💡 ${randomCuriosity}\n\nIncrível, não é? A arte sempre nos ajuda a ver em novos tons! Se quiser ouvir outra curiosidade ou saber sobre algum pintor, me pergunte! 🎨`
    };
  }

  // Step A: First scan direct conversational intents
  for (const intent of CONVERSATIONAL_INTENTS) {
    const matched = intent.keywords.some(keyword => {
      const normalizedKeyword = normalizarTexto(keyword);
      // Perfect match or message is precisely the keyword
      return normalizedMsg === normalizedKeyword || 
             normalizedMsg.startsWith(normalizedKeyword + " ") || 
             normalizedMsg.endsWith(" " + normalizedKeyword) ||
             normalizedMsg.includes(" " + normalizedKeyword + " ");
    });
    
    if (matched) {
      return { reply: intent.reply };
    }
  }

  // Step B: Search the cultural library entries using keyword normalization
  let bestMatchKey: string | undefined = undefined;
  let bestMatchScore = 0;

  for (const chave in lib) {
    const item = lib[chave];
    if (!item.palavras_chave) continue;

    for (const pKeyword of item.palavras_chave) {
      const normalizedKeyword = normalizarTexto(pKeyword);
      
      // Let's check matching strength
      if (normalizedMsg.includes(normalizedKeyword)) {
        // Find match length score so specific phrases are prioritized over tiny subsets (e.g. "hip hop" over "hip")
        const score = normalizedKeyword.length;
        if (score > bestMatchScore) {
          bestMatchScore = score;
          bestMatchKey = chave;
        }
      }
    }
  }

  // If we found a high score match in our localized cultural library, compile the perfect formatted content!
  if (bestMatchKey) {
    const item = lib[bestMatchKey];
    const replyText = construirRespostaLocal(item, mensagem);
    return {
      reply: replyText,
      matchedKey: bestMatchKey
    };
  }

  // If nothing matches, we return null so the handler knows it can fall back to AI *only* if the API is configured and online.
  return null;
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

