export interface CuriosityItem {
  id: string;
  emoji: string;
  pergunta: string;
  resposta: string;
  detalhes?: string;
  palavrasChave: string[];
}

export interface CuriosityCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: CuriosityItem[];
}

export const CURIOSIDADES_ACERVO: CuriosityCategory[] = [
  {
    id: "tartarugas_ninja",
    title: "🐢 Tartarugas Ninja",
    icon: "🐢",
    description: "Por que heróis guerreiros usam nomes de artistas famosos?",
    items: [
      {
        id: "tn_nomes",
        emoji: "🐢",
        pergunta: "Por que as Tartarugas Ninja têm nomes de artistas do Renascimento?",
        resposta: "As quatro Tartarugas Ninja receberam nomes de grandes artistas do Renascimento italiano para homenagear esses grandes mestres! Os criadores acharam engraçado misturar pintores clássicos com tartarugas mutantes lutadoras de artes marciais!\n\n🖌️ Leonardo da Vinci → Leonardo (usa duas espadas)\n🍕 Michelangelo → Michelangelo (usa nunchakus)\n⚙️ Donatello → Donatello (usa bastão)\n⚔️ Raphael → Raphael (usa sais)",
        detalhes: "Os nomes das Tartarugas Ninja funcionam como uma pequena aula de História da Arte. Muitas crianças conheceram Leonardo, Michelangelo, Donatello e Raphael primeiro pelos desenhos e só depois descobriram que eles foram artistas reais!",
        palavrasChave: ["tartaruga ninja", "tartarugas ninja", "ninja turtles", "tartarugas", "raphael", "donatello", "michelangelo", "leonardo", "renascimento", "nome de tartaruga", "porque as tartarugas", "ninja", "ninjas", "turtle", "turtles", "tartaruga"]
      }
    ]
  },
  {
    id: "arte_classica",
    title: "🎨 Curiosidades sobre Arte",
    icon: "🎨",
    description: "Segredos escondidos por trás das tintas, telas e pincéis das maiores obras!",
    items: [
      {
        id: "art_sobrancelha",
        emoji: "👩‍🎨",
        pergunta: "A Mona Lisa tem sobrancelhas?",
        resposta: "A famosa pintura Mona Lisa não possui sobrancelhas visíveis hoje em dia! 😮 Alguns estudiosos e restauradores acreditam que elas existiam no desenho original de Leonardo da Vinci, mas acabaram desaparecendo bem devagarzinho de tanto limparem e restaurarem a tela ao longo dos séculos.",
        detalhes: "Com a ajuda de fotografias de altíssima definição, cientistas conseguiram ver um único traço de pelo sobre o olho esquerdo, provando que Leonardo originalmente desenhou sim cílios e sobrancelhas para a Mona Lisa!",
        palavrasChave: ["sobrancelha mona lisa", "mona lisa sobrancelha", "sobrancelhas", "olho mona lisa", "detalhe mona lisa", "monalisa", "mona lisa", "sobrancelha", "sobrancelhas"]
      },
      {
        id: "art_sorriso",
        emoji: "🙂",
        pergunta: "O sorriso da Mona Lisa é um grande mistério?",
        resposta: "Sim, e muito divertido! Muitas pessoas acham que o sorriso da Mona Lisa muda conforme o ângulo ou a distância em que a observam. Se você olha direto para a boca dela, o sorriso parece sumir; mas se você olha para os olhos dela, a boca parece sorrir de novo! Esse efeito incrível é resultado do 'Sfumato', uma técnica de esfumado super suave criada por Leonardo da Vinci. 😉",
        detalhes: "O efeito confunde o nosso cérebro, fazendo com que a expressão mude levemente dependendo de onde o foco da nossa visão aponta na pintura.",
        palavrasChave: ["sorriso mona lisa", "sorriso da mona lisa", "mona lisa sorrindo", "segredo sorriso", "sfumato", "sorriso", "sorrir"]
      },
      {
        id: "art_vendas_gogh",
        emoji: "🌻",
        pergunta: "Vincent van Gogh vendeu apenas uma pintura na vida?",
        resposta: "É verdade! Durante toda a sua vida, Vincent van Gogh teve muito pouco reconhecimento e vendeu apenas uma pintura oficialmente chamada 'A Vinha Encarnada' (The Red Vineyard) para uma pintora belga. But ele nunca desistiu de colocar o coração em suas cores! Hoje em dia, suas incríveis obras, cheias de luzes e girassóis brilhantes, estão entre as mais valiosas e amadas do mundo inteiro! 🌻",
        detalhes: "Hoje, suas telas como 'A Noite Estrelada' e 'Girassóis' valem centenas de milhões de dólares e são o maior destaque de museus globais.",
        palavrasChave: ["van gogh vendeu", "quantas pinturas van gogh vendeu", "vinha encarnada", "vendeu quadro van gogh", "reconhecimento van gogh", "van gogh", "gogh", "vincent"]
      },
      {
        id: "art_sistina_tempo",
        emoji: "⛪",
        pergunta: "Quanto tempo levou para pintar a Capela Sistina?",
        resposta: "O pintor e escultor Michelangelo levou cerca de quatro anos (de 1508 a 1512) para cobrir o teto inteiro da Capela Sistina com suas incríveis e gigantescas pinturas! Ele pintou mais de 300 figuras humanas no teto da igreja em Roma, trabalhando duro em um ambiente enorme e desafiador! 🏛️",
        detalhes: "O trabalho foi tão intenso que Michelangelo teve cansaço extremo por conta da postura cansativa durante as pinceladas do mestre.",
        palavrasChave: ["capela sistina deitado", "capela sistina tempo", "quatro anos capela", "tempo capela sistina", "teto da capela", "sistina", "capela sistina", "capela", "teto"]
      },
      {
        id: "art_michelangelo_deitado",
        emoji: "🪜",
        pergunta: "Michelangelo pintava o teto deitado?",
        resposta: "Não! Embora muita gente pense (e até apareça em alguns filmes) que ele pintava o teto da Capela Sistina deitado de costas, na verdade Michelangelo pintava de pé! Ele próprio desenhou andaimes especiais de madeira e ficava em pé com as mãos levantadas para o teto, com as costas curvadas e a cabeça inclinada para cima enquanto a tinta pingava em seu rosto! 🪜🖌️",
        detalhes: "Michelangelo até escreveu um poema bem humorado reclamando de como suas costas doíam por ficar em pé olhando para cima por tantas horas seguidas!",
        palavrasChave: ["michelangelo deitado", "pintou deitado", "sistina deitado", "michelangelo em pe", "andaimes michelangelo", "michelangelo"]
      }
    ]
  },
  {
    id: "mangas_origem",
    title: "📖 Curiosidades sobre Mangás",
    icon: "📖",
    description: "Espontaneidade e a arte maravilhosa dos quadrinhos tradicionais do Japão!",
    items: [
      {
        id: "manga_significado",
        emoji: "✍️",
        pergunta: "O que significa a palavra 'Mangá'?",
        resposta: "\"Mangá\" são as histórias em quadrinhos japonesas! A palavra em si é formada por duas partes que significam algo bem fofo: \"desenhos espontâneos\" ou \"rabiscos divertidos\"! Eles podem contar aventuras de super-heróis, romances, mistérios, amizades e esportes! É uma das formas de leitura mais populares e queridas do Japão e do mundo! 🗺️📘",
        detalhes: "Atualmente, os mangás conquistaram o mundo com narrativas densas, estilos vibrantes e personagens carismáticos divididos em várias publicações semanais.",
        palavrasChave: ["significa manga", "significado manga", "o que e manga", "quadrinhos japoneses", "manga em japones", "manga", "mangas", "quadrinhos", "quadrinho"]
      },
      {
        id: "manga_leitura",
        emoji: "📖",
        pergunta: "Por que os mangás são lidos da direita para a esquerda?",
        resposta: "Porque no Japão tradicional, a escrita e as páginas dos livros sempre seguiram esse sentido: de cima para baixo e de trás para frente (da direita para a esquerda)! Para manter a obra original e as ilustrações do jeito exato que o artista desenhou, as editoras do mundo inteiro mantiveram essa leitura mágica! No começo parece estranho, mas depois vira um superpoder divertido! 🔄🌟",
        detalhes: "Se os editores apenas invertessem as páginas como um espelho para o padrão ocidental, as ilustrações ficariam invertidas — por exemplo, personagens canhotos pareceriam destros e placas escritas ficariam ilegíveis!",
        palavrasChave: ["direita esquerda manga", "ler manga", "ler de tras para frente", "leitura manga", "sentido manga", "leitura", "ler", "como ler"]
      },
      {
        id: "manga_deus",
        emoji: "👑",
        pergunta: "Quem foi Osamu Tezuka, o 'Deus do Mangá'?",
        resposta: "Osamu Tezuka foi um revolucionário artista japonês conhecido mundialmente como o \"Deus do Mangá\"! Ele mudou completamente a forma de desenhar quadrinhos e ajudou a criar as bases estruturais para os mangás e animes modernos, aplicando techniques de cinema nas páginas de papel e criando heróis lendários como Astro Boy! 🤖🚀",
        detalhes: "Ele era apaixonado por medicina e se formou médico, mas decidiu que seu verdadeiro amor era desenhar e contar histórias inesquecíveis para as crianças.",
        palavrasChave: ["osamu tezuka", "deus do manga", "quem foi osamu", "tezuka manga", "criador do manga", "osamu", "tezuka"]
      },
      {
        id: "manga_olhos",
        emoji: "👀",
        pergunta: "Por que os personagens de mangá têm olhos tão grandes?",
        resposta: "Esso foi uma das ideias brilhantes de Osamu Tezuka! Ele se inspirou em clássicos do cinema de animação ocidental da Disney (como o camundongo Mickey Mouse e o cervo Bambi) para desenhar olhos enormes e brilhantes. Isso ajuda a mostrar com muita facilidade as emoções fortes dos personagens — como alegria radiante, surpresa fofa, medo ou determinação! 💖✨",
        detalhes: "Com olhos maiores, as nuances de sentimentos dos heróis se destacam instantaneamente nas impressões em preto e branco dos quadrinhos.",
        palavrasChave: ["olhos grandes manga", "porque olhos grandes", "olhos gigantes", "olhar de anime", "expressao de emocao", "olhos", "olho"]
      },
      {
        id: "manga_variedade",
        emoji: "📚",
        pergunta: "Existem mangás para todas as idades?",
        resposta: "Com certeza! No Japão, os mangás são divididos e catalogados organizadamente para cada faixa etária e interesse! Tem histórias divertidas e educativas para criancinhas, aventuras empolgantes de amizade para jovens, esportes, mistérios, e fofuras do cotidiano. É leitura garantida para toda a família! 👶🧑👵",
        detalhes: "Existem até seções inteiras de bibliotecas públicas e lojas em Tóquio dedicadas exclusivamente a mangás de culinária, ciências ou guias históricos!",
        palavrasChave: ["manga idade", "tipos de manga", "shonen", "shojo", "manga para criancas", "generos manga", "shonen", "shojo"]
      },
      {
        id: "manga_anime",
        emoji: "📺",
        pergunta: "Os animes vêm dos mangás?",
        resposta: "Muitos sim! Quando um mangá de papel faz um sucesso gigante e ganha o coração dos leitores, os estúdios de animação decidem recriar essa história cheia de cores, voz e movimento na televisão, transformando-as em animes de sucesso que viajam o planeta! 🚀✨",
        detalhes: "O mangá funciona como um perfeito storyboard desenhado para direcionar cada nova cena que o diretor do anime planeja produzir.",
        palavrasChave: ["manga vira anime", "diferenca manga anime", "historia papel", "adaptacao anime", "adaptacao"]
      }
    ]
  },
  {
    id: "animes_fantastico",
    title: "🌸 Animes Fantásticos",
    icon: "🌸",
    description: "Animações fantásticas do Japão que conquistaram o mundo com heróis e emoções!",
    items: [
      {
        id: "ani_significado",
        emoji: "🌸",
        pergunta: "O que exatamente significa a palavra 'Anime'?",
        resposta: "No Japão, a palavra \"anime\" (pronunciada *animê*) é usada simplesmente para qualquer tipo de desenho animado ou animação do mundo todo! Mas fora do Japão, nós usamos essa palavra em especial para nos referirmos aos desenhos e filmes incríveis produzidos pelos estúdios japoneses, com aquele traço e jeitinho estético único e especial! 🇯🇵💫",
        detalhes: "A palavra vem da abreviação da palavra inglesa 'animation' pronunciada em japonês como 'animēshon'.",
        palavrasChave: ["significa anime", "significado anime", "o que e anime", "animacao japonesa", "japao anime", "anime", "animes", "desenho japonês", "desenhos japoneses"]
      },
      {
        id: "ani_mais_longo",
        emoji: "🐢",
        pergunta: "Qual é o anime mais longo da história?",
        resposta: "O campeão absoluto é um anime super tradicional chamado **Sazae-san**! Ele conta sobre o dia a dia alegre de uma simpática família japonesa e é exibido na televisão japonesa todos os domingos sem parar desde outubro de 1969! Ele está no ar há mais de 55 anos e já tem mais de 8.000 pequenos episódios curtos! É um recorde do Guinness! 🏆👴📺",
        detalhes: "Sazae-san ultrapassa com folga animes longos famosos como One Piece, Pokémon, Case Closed e Doraemon em número de exibições.",
        palavrasChave: ["anime mais longo", "anime maior", "sazae san", "episodios sazae san", "anime desde 1969", "sazae", "sazae san"]
      },
      {
        id: "ani_pokemon_nome",
        emoji: "🎒",
        pergunta: "Pokémon quase teve outro nome?",
        resposta: "Quase! Antes de se tornar um sucesso mundial absoluto com o nome que amamos, a série foi originalmente registrada e planejada no Japão como **Pocket Monsters**! Que em inglês significa literalmente \"Monstros de Bolso\". Mas como já existia um brinquedo parecido com nome quase igual nos Estados Unidos, os criadores criativamente juntaram as duas palavras e criaram: **Pokémon**! Ficou muito mais legal, não achou? 🐿️⚡",
        detalhes: "O herói principal, Pikachu, foi inspirado num pequeno esquilo de laboratório de pixels que o designer adora de montão!",
        palavrasChave: ["pokemon nome", "pocket monsters", "origem pokemon", "monstros de bolso", "nome do pokemon", "pokemon", "pokemons", "pikachu", "pocket monsters"]
      },
      {
        id: "ani_dragon_ball",
        emoji: "🐉",
        pergunta: "Como Dragon Ball ajudou a popularizar os animes no Brasil?",
        resposta: "Dragon Ball, criado pelo mestre Akira Toriyama, foi uma verdadeira explosão de energia! Exibido nos anos 1990 e 2000 no Brasil, as aventuras do herói Goku encantaram milhões de crianças que se reuniam em frente à TV para torcer pela Genki Dama. Esse enorme sucesso abriu de vez as portas da TV brasileira para muitos outros animes incríveis brilharem no país! 🎇🇧🇷",
        detalhes: "Com lutas divertidas, comédia limpa e conceitos de amizade e treino, o anime virou febre nas escolas brasileiras.",
        palavrasChave: ["dragon ball brasil", "goku brasil", "popularizou animes", "goku", "akira toriyama", "dragonball", "dragon ball", "vegeta", "saiyajin", "akira", "toriyama"]
      },
      {
        id: "ani_naruto_lendas",
        emoji: "🦊",
        pergunta: "Naruto foi inspirado em lendas reais do Japão?",
        resposta: "Sim, e é fascinante! O criador de Naruto usou muitos mitos do folclore antigo e tradições do Xintoísmo japonês! Por exemplo, a raposa de nove caudas (Kurama) vem da lenda da 'Kitsune', um espírito raposa mágico e travesso da mitologia. Os nomes dos poderes (como Amaterasu, Susanoo e Tsukuyomi) são nomes de deuses antigos do Japão! ⛩️🌀",
        detalhes: "Até a forma de fazer selos de mão com os dedos foi baseada no budismo tradicional e nos golpes secretos descritos nos rolos ninjas antigos.",
        palavrasChave: ["naruto lendas", "kurama lenda", "kitsune naruto", "folclore de naruto", "mitologia japonesa naruto", "naruto", "kurama", "kitsune", "ninja naruto"]
      }
    ]
  },
  {
    id: "desenhos_animados",
    title: "🎬 Desenhos Animados",
    icon: "🎬",
    description: "Curiosidades sobre Scooby-Doo, coelhos da Disney e a história das animações!",
    items: [
      {
        id: "des_oswald",
        emoji: "🐰",
        pergunta: "Você sabia que o primeiro personagem famoso de Walt Disney foi um coelho?",
        resposta: "Sim! Antes de criar o famoso camundongo Mickey Mouse em 1928, Walt Disney criou o coelho **Oswald, o Coelho Sortudo** (Oswald the Lucky Rabbit) em 1927! O coelhinho era um tremendo sucesso nos cinemas mudos. Mas por causa de um contrato confuso, Walt perdeu os direitos dele de repente. Triste, ele voltou de trem para casa e decidiu criar um novo personagem: o camundongo Mickey! 🚂🌟",
        detalhes: "Em 2006, quase 80 anos depois, a Disney finalmente comprou de volta os direitos históricos de Oswald, trazendo ele de volta 'para casa' de forma simbólica!",
        palavrasChave: ["oswald o coelho", "primeiro personagem disney", "oswald lucky rabbit", "coelho mickey", "origem do mickey", "oswald", "mickey", "walt disney", "disney"]
      },
      {
        id: "des_scooby_raca",
        emoji: "🐶",
        pergunta: "Qual é a raça do Scooby-Doo e por que ele é atrapalhado?",
        resposta: "O Scooby-Doo é um lindo cão da raça **Dogue Alemão**! Os cachorros dessa raça real costumam ser gigantescos, fortes, sérios e muito elegantes. Mas para dar muito humor ao desenho, os desenhistas inventaram um Scooby-Doo totalmente o oposto: medroso, com pernas tortas, queixo mole e super comilão e atrapalhado! Uma fofura de cachorro! 🍕🦕",
        detalhes: "Os criadores conversaram com um criador de cães da raça para descobrir as características físicas ideais e, de propósito, desenharam o Scooby com todas as características 'proibidas' para uma exposição de cães elegantes!",
        palavrasChave: ["raca scooby doo", "raca do scooby", "dogue alemao scooby", "scooby doo raca", "raca dogue alemao", "scooby", "scooby-doo", "scooby doo", "salsicha"]
      },
      {
        id: "des_simpsons_nomes",
        emoji: "🍩",
        pergunta: "Os personagens de Os Simpsons têm nomes de pessoas reais?",
        resposta: "Sim! O criador da série, Matt Groening, resolveu brincar de forma afetuosa e deu aos personagens amarelos os nomes exatos de sua própria família na vida real! Seus pais se chamavam Homer e Margaret (Marge), e ele tem irmãs com nomes de Lisa e Maggie! Ele só mudou o seu próprio nome para \"Bart\", que é um anagrama para a palavra inglesa \"brat\" (que significa pirralho)! 🍩🛹",
        detalhes: "A série está no ar de forma ininterrupta desde 1989 e é a comédia de animação há mais tempo em exibição no horário nobre da TV ocidental.",
        palavrasChave: ["simpsons nomes", "nomes simpsons", "familia de matt groening", "bart significado", "origem simpsons", "simpsons", "simpson", "homer", "bart"]
      },
      {
        id: "des_tom_jerry_voz",
        emoji: "🐱",
        pergunta: "Por que Tom e Jerry quase nunca falam?",
        resposta: "Os criadores William Hanna e Joseph Barbera achavam que a melhor comédia vinha das expressões e da pantomima (mímica)! Eles criaram as aventuras sem diálogos de fala, cheias de movimentos divertidos e músicas incríveis orquestradas. Por causa disso, crianças e adultos de qualquer país do mundo inteiro conseguem entender gargalhar com o desenho, sem precisar de tradução! 🌏🐭",
        detalhes: "Com pouquíssimas exceções em episódios raros, a única voz recorrente de Tom são seus gritos clássicos de dor quando cai em alguma armadilha do Jerry.",
        palavrasChave: ["tom e jerry falam", "porque tom e jerry nao falam", "tom jerry voz", "audios tom jerry", "dialogos tom jerry", "tom e jerry", "tom", "jerry"]
      }
    ]
  },
  {
    id: "gerais_teoria",
    title: "🎭 Curiosidades Gerais & Teoria",
    icon: "🎭",
    description: "Espreite os bastidores de como as imagens ganham vida, movimento e cores!",
    items: [
      {
        id: "ger_ilusao",
        emoji: "🧠",
        pergunta: "Como o nosso cérebro vê desenhos se mexendo?",
        resposta: "O movimento de qualquer desenho animado é um truque mágico para enganar nossos olhos! 🪄 Uma animação é composta de várias imagens planas e estáticas que são exibidas uma após a outra em grande velocidade (normalmente 24 desenhos para cada um segundo!). Nosso cérebro não consegue notar a transição e cria la ilusão maravilhosa de que tudo está se movendo de verdade!",
        detalhes: "Esse fenômeno foi batizado cientificamente como 'Persistência da Visão', o princípio físico que dá base para as tecnologias de cinema e telas digitais.",
        palavrasChave: ["como funciona animacao", "cerebro animacao", "truque de movimento", "persistência da visão", "quadros por segundo", "animacao", "animação", "movimento", "ilusão"]
      },
      {
        id: "ger_quadro_mao",
        emoji: "✍️",
        pergunta: "Como eram feitos os desenhos antigamente?",
        resposta: "Dava um trabalhão hercúleo de paciência! 😮 Antigamente, os artistas precisavam desenhar cada pequeno movimento à mão, folha por folha, pintar com tintas especiais de acetato transparente e depois tirar uma foto individual de cada folha de desenho! Para conseguir um único minuto de filme animado, os desenhistas precisavam fazer mais de 1.400 desenhos coloridos à mão! Que dedicação! 🎨📜",
        detalhes: "Estúdios de animação clássicos possuíam exércitos de desenhistas, organizados entre animadores principais, desenhistas de intercalação e pintores de celulóides.",
        palavrasChave: ["desenhos antigos", "como era feito antigamente", "quadro a quadro", "desenhar a mao", "acetato desenho", "desenhos", "antigamente", "desenho à mão"]
      },
      {
        id: "ger_cores_personagens",
        emoji: "🎨",
        pergunta: "Por que os super-heróis usam sempre cores primárias fortes?",
        resposta: "Isso é pura psicologia da arte! Os artistas usam cores expressivas e brilhantes de propósito para o público identificar o personagem na hora! Heróis alegres e fortes costumam usar cores primárias vibrantes: Vermelho, Azul e Amarelo (como o Super-Homem, o Homem de Ferro e a Mulher-Maravilha). Vilões misteriosos são pintados com cores lilás, roxas, verdes e pretas que dão um ar de mistério! 🦸‍♂️🦹",
        detalhes: "O alto contraste facilita a leitura das cenas de ação rápidas quando impressas na folha mais barata ou exibidas em TVs pequenas de tubo.",
        palavrasChave: ["cores dos personagens", "cores herois", "porque super homem usa azul", "psicologia das cores herois", "cores vilões", "cores", "herois", "vilao", "vilões"]
      }
    ]
  }
];

export function buscarCuriosidadePorKeyword(mensagem: string): CuriosityItem | null {
  if (!mensagem) return null;
  
  // Normalize client message content
  const normMsg = mensagem
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[?!.,;:()'"\\\-\/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!normMsg) return null;
  const msgWords = normMsg.split(" ");

  for (const category of CURIOSIDADES_ACERVO) {
    for (const item of category.items) {
      const match = item.palavrasChave.some(kw => {
        const normKw = kw
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .replace(/[?!.,;:()'"\\\-\/]/g, " ")
          .replace(/\s+/g, " ")
          .trim();

        if (!normKw) return false;
        
        // Exact match of phrase or word
        if (normMsg === normKw) return true;

        // Space padding word boundary match
        const paddedMsg = ` ${normMsg} `;
        const paddedKw = ` ${normKw} `;
        if (paddedMsg.includes(paddedKw)) return true;

        // Smart singular/plural and root words match
        if (!normKw.includes(" ")) {
          for (const w of msgWords) {
            if (w === normKw) return true;
            if (w === normKw + "s") return true; 
            if (normKw === w + "s") return true;
          }
        }

        return false;
      });

      if (match) return item;
    }
  }
  return null;
}
