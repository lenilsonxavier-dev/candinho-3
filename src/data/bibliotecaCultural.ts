export interface BibliotecaItem {
  palavras_chave: string[];
  inicio: string[];
  explicacao_curta?: string[];
  acolhimento?: string[];
  ano_nascimento?: string;
  ano_falecimento?: string;
  categoria?: string;
  tema?: string;
  subtema?: string;
  explicacao_aprofundada?: string[];
  curiosidade?: string[];
  interacao?: string[];
  atividade?: string[];
  final?: string[];
  emocao?: string;
  nivel?: string;
  [key: string]: any;
}

export const bibliotecaCultural: Record<string, BibliotecaItem> = {
  // --- BASE ORIGINAL RE-Mapeada & Unificada ---
  portinari: {
    palavras_chave: ["portinari", "candido", "cândido", "candinho", "guerra e paz", "meninos brincando", "rodopiando"],
    inicio: [
      "🎨 Cândido Portinari foi um dos mais importantes artistas do Brasil! Ele nasceu em 1903, na cidade de Brodowski, São Paulo."
    ],
    explicacao_curta: [
      "Filho de imigrantes italianos que trabalhavam na lavoura de café, Portinari cresceu observando a vida simples do campo, tema super presente em suas pinturas."
    ],
    explicacao_aprofundada: [
      "Ele fez parte do Modernismo Brasileiro, valorizando a nossa cultura. Suas obras de arte mostram trabalhadores, brincadeiras infantis (como soltar pipa e futebol), festas populares e também problemas sociais como a migração."
    ],
    curiosidade: [
      "Portinari produziu mais de 5 mil obras ao longo da vida e seu trabalho é reconhecido em todo o planeta!"
    ],
    interacao: [
      "Qual das obras famosas dele (como O Lavrador de Café ou Meninos Soltando Pipas) você prefere?"
    ],
    atividade: [
      "Que tal fazer um desenho bem bonito mostrando a sua brincadeira favorita, inspirado no Candinho? 🪁🎨"
    ],
    final: [
      "Seu trabalho continua representando lindamente a história, a cultura e o povo brasileiro! 🇧🇷"
    ],
    ano_nascimento: "1903",
    ano_falecimento: "1962",
    categoria: "Modernismo",
    resposta_direta: `🎨 **Cândido Portinari**

Cândido Portinari foi um dos mais importantes artistas do Brasil. Ele nasceu em 1903, na cidade de Brodowski, no estado de São Paulo. Filho de imigrantes italianos que trabalhavam na lavoura de café, Portinari cresceu observando a vida simples do campo, tema que apareceria muitas vezes em suas pinturas.

Desde criança gostava de desenhar. Aos 15 anos, mudou-se para a cidade do Rio de Janeiro para estudar na Escola Nacional de Belas Artes. Mais tarde, viajou para a França e conheceu diferentes estilos artísticos.

Portinari fez parte do Modernismo Brasileiro, movimento que buscava valorizar a cultura, as pessoas e as paisagens do Brasil. Suas obras mostram trabalhadores, crianças brincando, festas populares e também problemas sociais, como a pobreza e a migração.

🖼️ **Obras famosas**
• O Lavrador de Café (1934)
• Café (1935)
• Meninos Soltando Pipas
• Futebol
• Retirantes (1944)
• Guerra e Paz, criados para a sede da Organização das Nações Unidas.

🌟 **Curiosidade**
Portinari produziu mais de 5 mil obras ao longo da vida. Seu trabalho é reconhecido no mundo inteiro e continua sendo uma importante representação da história, da cultura e do povo brasileiro.

**Resumo**: Cândido Portinari foi um pintor modernista brasileiro que retratou a vida do povo, as brincadeiras infantis e as questões sociais do Brasil, tornando-se um dos maiores artistas da história do país. 🇧🇷🎨`
  },
  tarsila: {
    palavras_chave: ["tarsila", "amaral", "abaporu", "operarios", "operários", "antropofagia"],
    inicio: [
      "Tarsila do Amaral é uma das maiores heroínas da arte brasileira!"
    ],
    explicacao_curta: [
      "Ela criou o impressionante quadro 'Abaporu' (que significa 'homem que come gente' em tupi-guarani), que deu força ao movimento Modernista. Ela adorava pintar elementos da nossa terra usando as cores rosa, azul-turquesa e amarelo!"
    ],
    ano_nascimento: "1886",
    ano_falecimento: "1973",
    categoria: "Modernismo"
  },
  silvana_mendes: {
    palavras_chave: ["silvana mendes", "silvia mendes", "silvana", "silvia"],
    inicio: [
      "Silvana Mendes (nascida em 1980, no Maranhão) é uma maravilhosa artista visual, fotógrafa e pesquisadora brasileira! Viva."
    ],
    explicacao_curta: [
      "Ela trabalha com fotografia, colagem e pintura, explorando de forma poética e sensível a ancestralidade, a memória e a identidade afro-brasileira!"
    ],
    ano_nascimento: "1980",
    ano_falecimento: "Viva",
    categoria: "Arte Contemporânea"
  },
  arjan_martins: {
    palavras_chave: ["arjan martins", "arjan"],
    inicio: [
      "Arjan Martins (nascido em 1960, em Mesquita, RJ) é um importantíssimo pintor e escultor brasileiro vivo!"
    ],
    explicacao_curta: [
      "Sua belíssima obra aborda temas profundos como a diáspora africana, migrações coloniais e a nossa herança histórica, com trabalhos expostos em grandes museus pelo mundo inteiro."
    ],
    ano_nascimento: "1960",
    ano_falecimento: "Vivo",
    categoria: "Arte Contemporânea"
  },
  rosana_paulino: {
    palavras_chave: ["rosana paulino", "rosana"],
    inicio: [
      "Rosana Paulino (nascida em 1967, em São Paulo) é uma influente artista visual, educadora e curadora brasileira viva!"
    ],
    explicacao_curta: [
      "Suas ricas produções artísticas, que misturam gravura, desenho e costura, trazem grandes discussões sobre a memória social, identidade, o racismo e a condição da mulher negra no Brasil."
    ],
    ano_nascimento: "1967",
    ano_falecimento: "Viva",
    categoria: "Arte Contemporânea"
  },
  eduardo_kobra: {
    palavras_chave: ["eduardo kobra", "kobra"],
    inicio: [
      "Eduardo Kobra (nascido em 1975, em São Paulo) é um lendário muralista e artista urbano brasileiro!"
    ],
    explicacao_curta: [
      "Seus gigantescos murais coloridos, que misturam xadrez de cores e realismo, tomam as fachadas de prédios de dezenas de países para retratar personalidades históricas e inspirar harmonia, paz e amor!"
    ],
    ano_nascimento: "1975",
    ano_falecimento: "Vivo",
    categoria: "Muralismo"
  },
  os_gemeos: {
    palavras_chave: ["os gemeos", "os gêmeos", "gemeos", "gêmeos"],
    inicio: [
      "Os Gêmeos são os incríveis irmãos parceiros Otávio e Gustavo Pandolfo, nascidos em 1974 em São Paulo!"
    ],
    explicacao_curta: [
      "Eles conquistaram o mundo com seus murais urbanos e grafites mágicos povoados por caricatos personagens amarelos que contam histórias do folclore e da cultura de rua do Brasil."
    ],
    ano_nascimento: "1974",
    ano_falecimento: "Vivos",
    categoria: "Grafite / Street Art"
  },
  romero_britto: {
    palavras_chave: ["romero britto", "romero brito", "britto"],
    inicio: [
      "Romero Britto (nascido em 1963, em Recife, PE) é um celebérrimo pintor e escultor brasileiro vivo!"
    ],
    explicacao_curta: [
      "Suas criações repletas de cores brilhantes, traços pretos marcantes e padrões geométricos misturam cubismo e pop art para retratar sentimentos de pura felicidade, amor e esperança!"
    ],
    ano_nascimento: "1963",
    ano_falecimento: "Vivo",
    categoria: "Pop Art"
  },

  // --- 1. CULTURA AFRO-BRASILEIRA ---
  afro_o_que_e: {
    tema: "cultura_afro_brasileira",
    subtema: "o_que_e",
    palavras_chave: ["cultura afro", "afro brasileira", "o que e cultura afro brasileira", "afro-brasileira"],
    inicio: [
      "A cultura afro-brasileira faz parte da história e da identidade do Brasil 🌍",
      "Muitas tradições brasileiras têm raízes africanas ✨"
    ],
    explicacao_curta: [
      "A cultura afro-brasileira vem das tradições africanas trazidas para o Brasil e que se misturaram com outras influências daqui."
    ],
    explicacao_aprofundada: [
      "Ela influencia músicas, danças, comidas, festas, artes e muitas formas de viver presentes no cotidiano brasileiro."
    ],
    curiosidade: [
      "Palavras que usamos todo dia (como caçula, moleque, banguela), ritmos e comidas do Brasil possuem influências africanas marcantes 🌿"
    ],
    interacao: [
      "Você conhece alguma música ou dança afro-brasileira?",
      "O que você acha mais interessante na cultura brasileira?"
    ],
    atividade: [
      "Desenhe elementos culturais importantes do Brasil 🎨"
    ],
    final: [
      "A diversidade cultural deixa o Brasil mais rico e bonito 🌈"
    ],
    emocao: "respeito",
    nivel: "leve"
  },
  arte_afro_brasileira: {
    tema: "cultura_afro_brasileira",
    subtema: "arte_afro_brasileira",
    palavras_chave: ["arte afro", "arte afro brasileira", "arte afro-brasileira"],
    inicio: [
      "A arte afro-brasileira é cheia de força, ritmo e expressão 🎨"
    ],
    explicacao_curta: [
      "Ela aparece em músicas, pinturas, danças, esculturas, artesanatos e celebrações populares."
    ],
    explicacao_aprofundada: [
      "A arte afro-brasileira expressa história, ancestralidade, resistência, beleza e identidade cultural do povo negro no Brasil."
    ],
    curiosidade: [
      "Muitos artistas brasileiros usam símbolos, texturas e cores fortes inspirados em tradições africanas ✨"
    ],
    interacao: [
      "Que tipo de arte você mais gosta de criar?"
    ],
    atividade: [
      "Crie padrões e formas geométricas inspirados em ritmos e movimentos 🎭"
    ],
    final: [
      "A arte ajuda culturas e histórias a continuarem vivas de geração em geração 🌿"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  afro_musica: {
    tema: "cultura_afro_brasileira",
    subtema: "musica",
    palavras_chave: ["musica afro", "música afro", "samba", "maracatu", "ritmo africano", "afoxé", "berimbau"],
    inicio: [
      "A música afro-brasileira é cheia de ritmo, batuque e energia 🥁"
    ],
    explicacao_curta: [
      "Ela usa instrumentos como tambores, berimbaus, chocalhos e cantos alegres e contagiantes."
    ],
    explicacao_aprofundada: [
      "Muitos estilos musicais brasileiros amados, como o samba, o maracatu, o axé e a bossa nova, possuem profundas influências africanas."
    ],
    curiosidade: [
      "Os tambores têm papel sagrado e importante em muitas manifestações e festividades africanas e afro-brasileiras 🎶"
    ],
    interacao: [
      "Você consegue criar um ritmo legal batendo palmas?",
      "Qual música brasileira deixa você mais animado?"
    ],
    atividade: [
      "Crie um instrumento de percussão (como um chocalho ou tamborzinho) usando materiais recicláveis 🪘"
    ],
    final: [
      "A música conecta pessoas, histórias e emoções de um jeito mágico 🌈"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  afro_danca: {
    tema: "cultura_afro_brasileira",
    subtema: "danca",
    palavras_chave: ["danca afro", "dança afro", "dancas afro brasileiras", "danças afro-brasileiras", "capoeira", "jongo"],
    inicio: [
      "As danças afro-brasileiras possuem movimentos expressivos e cheios de energia 💃"
    ],
    explicacao_curta: [
      "Essas danças celebram a nossa cultura e contam histórias através do ritmo corporal e do som dos tambores."
    ],
    explicacao_aprofundada: [
      "Os movimentos corporais representam momentos da vida cotidiana, celebrações, lutas por liberdade e ligação com os sons da natureza."
    ],
    curiosidade: [
      "A capoeira é uma mistura fascinante de dança, música e luta que foi criada como forma de resistência e liberdade! 🥁"
    ],
    interacao: [
      "Você gosta de dançar ou de se mexer quando escuta uma música alegre?"
    ],
    atividade: [
      "Crie movimentos de dança alegres inspirados nos sons do vento ou de animais 🌿"
    ],
    final: [
      "A dança transforma nossos sentimentos em belos movimentos sincronizados ✨"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  religiosidade: {
    tema: "cultura_afro_brasileira",
    subtema: "religiosidade",
    palavras_chave: ["religiao afro", "religião afro", "orixa", "orixá", "candomble", "candomblé", "umbanda", "orixás"],
    inicio: [
      "As religiões afro-brasileiras fazem parte da diversidade e riqueza cultural do Brasil 🌿"
    ],
    explicacao_curta: [
      "Elas valorizam profundamente o respeito à natureza, à ancestralidade e à harmonia espiritual."
    ],
    explicacao_aprofundada: [
      "Muitos ensinamentos, cantos e rituais dessas religiões (como o Candomblé e a Umbanda) prestam homenagem às forças da natureza."
    ],
    curiosidade: [
      "Os orixás são divindades que representam e cuidam de elementos naturais: Iemanjá cuida dos mares, Oxóssi das florestas e Iansã dos ventos e tempestades! 🌊"
    ],
    interacao: [
      "Por que você acha importante respeitarmos diferentes formas de pensar, crer e expressar a fé?"
    ],
    atividade: [
      "Desenhe elementos da natureza (rios, árvores, mares) que transmitem paz e acolhimento para você 🎨"
    ],
    final: [
      "O respeito à diversidade nos ajuda a construir uma sociedade muito mais justa e unida 🌎"
    ],
    emocao: "respeito",
    nivel: "leve"
  },
  resistencia: {
    tema: "cultura_afro_brasileira",
    subtema: "resistencia",
    palavras_chave: ["resistencia negra", "luta afro brasileira", "quilombos", "quilombola", "zumbi dos palmares", "dandara"],
    inicio: [
      "A cultura afro-brasileira também representa uma história linda de resistência e força ✊"
    ],
    explicacao_curta: [
      "Ela nos ensina como o povo negro manteve vivas as suas tradições e saberes mesmo diante de muitos desafios."
    ],
    explicacao_aprofundada: [
      "Os saberes tradicionais, as festas e a arte foram formas essenciais de resistir, criar união e lutar pela igualdade de direitos e de respeito."
    ],
    curiosidade: [
      "Os quilombos eram locais livres onde as pessoas que escapavam da escravidão construíam comunidades cheias de solidariedade, agricultura e preservação cultural! 🌿"
    ],
    interacao: [
      "Por que é super importante conhecermos a história real e a cultura de todos os povos?"
    ],
    atividade: [
      "Crie um lindo desenho ou colagem que passe uma mensagem de amizade e igualdade entre todas as pessoas 🎨"
    ],
    final: [
      "Aprender com o passado nos ensina a valorizar e proteger o respeito entre todas as culturas 🌈"
    ],
    emocao: "consciencia",
    nivel: "leve"
  },
  arte_africana: {
    tema: "cultura_afro_brasileira",
    subtema: "arte_africana",
    palavras_chave: [
      "arte africana",
      "arte da áfrica",
      "cultura africana"
    ],
    inicio: [
      "A arte africana é incrivelmente rica, diversa e cheia de vida! 🌍"
    ],
    explicacao_curta: [
      "Ela se expressa por meio de máscaras místicas, esculturas expressivas em madeira, pinturas de cores quentes e tecidos com padronagens repletas de histórias."
    ],
    explicacao_aprofundada: [
      "Para os povos africanos, a arte não serve apenas para olhar; ela está ligada ao dia a dia, a rituais sagrados e à celebração dos seus ancestrais. Muitas obras imitam elementos brilhantes da natureza e representam espíritos protetores, transmitindo ensinamentos do passado."
    ],
    curiosidade: [
      "A arte africana é tão expressiva e poderosa que influenciou grandes pintores do mundo inteiro, como Pablo Picasso, na criação da arte moderna! 🎨"
    ],
    interacao: [
      "Você sabia que as cores e padrões dos tecidos africanos podem contar de qual família ou aldeia a pessoa faz parte?"
    ],
    atividade: [
      "Que tal desenhar uma máscara com traços bem expressivos, usando círculos, triângulos e suas cores favoritas? 🖍️🎭"
    ],
    final: [
      "A essência da arte africana espalha a sabedoria dos ancestrais de geração em geração! 🌟"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },

  // --- 2. CULTURA INDÍGENA ---
  indigena_o_que_e: {
    tema: "cultura_indigena",
    subtema: "o_que_e",
    palavras_chave: ["cultura indigena", "cultura indígena", "povos originarios", "povos originários", "indios brasil", "indígena brasil"],
    inicio: ["Você já ouviu falar dos povos originários do Brasil? 🌿", "A cultura indígena faz parte das nossas raízes mais profundas."],
    explicacao_curta: ["A cultura indígena é formada pelos costumes, saberes incríveis e tradições das centenas de povos nativos do nosso país."],
    explicacao_aprofundada: ["Ela valoriza a harmonia com o meio ambiente e o conhecimento profundo da fauna e flora. Cada etnia possui sua própria língua, mitos e sabedorias."],
    curiosidade: ["Muitas plantas que curam doenças e alimentos que adoramos (como mandioca, pipoca e açaí) foram descobertos pelos indígenas!"],
    interacao: ["Você conhece alguma palavra de origem tupi ou indígena, como abacaxi ou jacaré?", "O que acha importante aprendermos sobre a relação dos indígenas com a floresta?"],
    atividade: ["Desenhe uma linda floresta viva com árvores altas e rios limpos 🌳"],
    final: ["Conhecer a cultura indígena nos ajuda a valorizar e proteger a nossa rica biodiversidade 💛"],
    emocao: "respeito",
    nivel: "leve"
  },
  arte_indigena: {
    tema: "cultura_indigena",
    subtema: "arte_indigena",
    palavras_chave: ["arte indigena", "arte indígena", "arte nativa", "artesanato indigena"],
    inicio: ["A arte indígena é repleta de cores vibrantes, simbolismos e conexão com a terra 🎨"],
    explicacao_curta: ["Ela se destaca em pinturas corporais, adornos de penas, cestarias e cerâmicas feitas com barro cozido."],
    explicacao_aprofundada: ["Para os indígenas, um objeto artístico também serve para o dia a dia. Cada detalhe, cor ou material usado conta uma história ou representa um animal protetor."],
    curiosidade: ["As cerâmicas de Marajó e de Cunha são famosas no mundo todo pela complexidade dos seus desenhos!"],
    interacao: ["Como você usaria a arte para contar uma história sobre a sua natureza ao redor?"],
    activity: ["Crie uma pintura usando apenas materiais que temos em casa, como borra de café ou chá de camomila para dar cor!"],
    final: ["A riqueza da arte indígena nos mostra o valor de criar coisas bonitas respeitando o planeta 🌿"],
    emocao: "criatividade",
    nivel: "leve"
  },
  grafismos: {
    tema: "cultura_indigena",
    subtema: "grafismos",
    palavras_chave: ["grafismo", "grafismos indigenas", "grafismos indígenas", "desenhos indigenas", "padrões indígenas"],
    inicio: ["Os grafismos indígenas são padrões visuais elegantes e cheios de significados geométricos ✨"],
    explicacao_curta: ["Eles são linhas, triângulos e labirintos desenhados em potes de barro, cestos, tecidos e na própria pele."],
    explicacao_aprofundada: ["Cada etnia desenvolve seus próprios grafismos. Eles representam a identidade, mostram quem é a pessoa na comunidade ou imitam a pele de animais da floresta."],
    curiosidade: ["Muitos padrões geométricos imitam a couraça de jabutis, as escamas de peixes e as manchas da onça-pintada! 🐾"],
    interacao: ["Se você fosse criar um símbolo geométrico inspirado em um animal, qual escolheria?"],
    atividade: ["Desenhe na folha uma sequência repetida de triângulos e zigue-zagues coloridos, criando seu próprio grafismo!"],
    final: ["Os grafismos nos ensinam que formas geométricas simples podem contar histórias e criar identidades visuais fantásticas 🌎"],
    emocao: "criatividade",
    nivel: "leve"
  },
  pintura_corporal: {
    tema: "cultura_indigena",
    subtema: "pintura_corporal",
    palavras_chave: ["pintura corporal", "pintura corporal indigena", "urucum", "jenipapo", "corpo pintado"],
    inicio: ["A pintura corporal indígena possui funções muito especiais além de enfeitar o corpo 🎨"],
    explicacao_curta: ["Ela é feita com pigmentos naturais extraídos diretamente de sementes e frutos da floresta."],
    explicacao_aprofundada: ["Os desenhos no corpo servem para comemorar colheitas, celebrar casamentos, dar força aos guerreiros ou indicar a idade de alguém."],
    curiosidade: ["As sementes de urucum dão um tom vermelho-vivo, e o suco do jenipapo dá uma tinta preta-azulada resistente! 🍒"],
    interacao: ["Você já pintou o rosto ou o braço para alguma brincadeira de teatro ou festa?"],
    atividade: ["Que tal imaginar uma pintura de traços retos nos braços simbolizando proteção e desenhá-la no papel?"],
    final: ["O corpo pintado é um meio de expressão cultural e orgulho de carregar a própria tradição na pele 🌿"],
    emocao: "expressao",
    nivel: "leve"
  },
  cestaria: {
    tema: "cultura_indigena",
    subtema: "cestaria",
    palavras_chave: ["cestaria", "cestas indigenas", "vime", "palha", "fibras naturais"],
    inicio: ["A cestaria indígena é a técnica perfeita de trançar fibras naturais para fazer arte útil 🧺"],
    explicacao_curta: ["Eles usam cipós, folhas de palmeira e palhas para tecer cestos, potes, esteiras e até peneiras."],
    explicacao_aprofundada: ["Com trançados precisos, os indígenas criam grafismos diretamente no corpo do cesto. Esses cestos são usados para guardar colheitas, carregar peixes ou filtrar alimentos."],
    curiosidade: ["O modo de trançar varia tanto que só de olhar o tipo de ponto, cientistas sabem qual povo indígena teceu o cesto!"],
    interacao: ["Você tem algum cesto trançado de palha na sua casa? Para que ele é usado?"],
    atividade: ["Cole tiras de papel colorido entrelaçadas umas nas outras para ver como o trançado ganha força e forma!"],
    final: ["A cestaria mostra a sabedoria indígena de usar matérias vegetais renováveis com maestria 🌱"],
    emocao: "criatividade",
    nivel: "leve"
  },
  relacao_natureza: {
    tema: "cultura_indigena",
    subtema: "relacao_natureza",
    palavras_chave: ["natureza indigena", "relacao com a natureza", "meio ambiente indigena", "floresta viva"],
    inicio: ["Os povos indígenas consideram a floresta como a sua grande casa coletiva e mãe 🌳"],
    explicacao_curta: ["Para os indígenas, os rios, as árvores e os animais têm espíritos e merecem respeito profundo."],
    explicacao_aprofundada: ["Eles só retiram da floresta o que realmente precisam para comer e construir abrigos, garantindo que a natureza sempre se recupere."],
    curiosidade: ["Essa grande sabedoria milenar é chamada de sustentabilidade prática: viver em abundância sem esgotar os recursos!"],
    interacao: ["O que nós podemos fazer nas cidades de diferente para proteger o meio ambiente?"],
    atividade: ["Encontre uma folha seca no chão do jardim ou calçada, observe suas linhas e desenhe-a caprichando nos mínimos detalhes 🍂"],
    final: ["Reconhecer que fazemos parte da natureza nos inspira a cuidar melhor do nosso planetinha 🌎"],
    emocao: "harmonia",
    nivel: "leve"
  },

  // --- 3. ARTISTAS BRASILEIROS ---
  jaider_esbell: {
    tema: "artistas_brasileiros",
    subtema: "jaider_esbell",
    palavras_chave: ["jaider esbell", "makuxi", "pata ewa'n", "coração do mundo"],
    inicio: ["Jaider Esbell pintava o coração do mundo com cores que parecem mágicas ✨"],
    explicacao_curta: ["Jaider Esbell criou obras cheias de cores e símbolos para mostrar a ligação dos povos indígenas com a natureza e os espíritos da floresta."],
    explicacao_aprofundada: ["Em 'Pata Ewa'n – O coração do mundo', ele usou verde, azul e amarelo para representar a espiritualidade e a força da floresta amazônica."],
    curiosidade: ["Jaider também foi escritor e organizou a primeira grande exposição de arte indígena no Museu de Arte do Rio 📚"],
    interacao: ["Se você pudesse desenhar o coração do mundo, o que colocaria nele?"],
    atividade: ["Desenhe uma grande árvore com raízes que se conectam a animais, estrelas e pessoas 🎨"],
    final: ["A arte indígena nos ensina que tudo na natureza tem um espírito 🌳"],
    emocao: "espiritualidade",
    nivel: "leve"
  },
  daiara_tukano_selva_mae: {
    tema: "artistas_brasileiros",
    subtema: "daiara_tukano",
    palavras_chave: ["daiara tukano", "selva mãe do rio menino", "selva mae do rio menino", "tukano", "mural"],
    inicio: ["Daiara Tukano pinta murais enormes que parecem cantar a força da natureza 🎶"],
    explicacao_curta: ["Daiara pinta murais enormes e coloridos inspirados nos rios, florestas e histórias indígenas."],
    explicacao_aprofundada: ["Em 'Selva Mãe do Rio Menino', as cores verde, azul e laranja se misturam para mostrar a ancestralidade e a proteção da floresta."],
    curiosidade: ["Daiara é ativista, muralista talentosa e ajudou a levar a arte dos povos originais para grandes museus! 🏛️"],
    interacao: ["Se você fosse pintar um rio, que cores usaria para mostrar sua força?"],
    atividade: ["Desenhe um grande painel com ondas, peixes e folhas usando as três cores que mais gosta 🌊"],
    final: ["A arte pode proteger os rios e as matas na nossa imaginação para sempre 💧"],
    emocao: "proteção",
    nivel: "leve"
  },
  daiara_tukano_uremiri: {
    tema: "artistas_brasileiros",
    subtema: "daiara_tukano",
    palavras_chave: ["daiara tukano uremiri", "uremiri hãusiro", "uremiri hãusiro", "sabedoria indígena"],
    inicio: ["A série 'Uremiri Hãusiro' de Daiara Tukano é como um livro de sabedoria pintado 🧠"],
    explicacao_curta: ["Essa série usa formas geométricas simétricas e cores vibrantes para representar conhecimentos ancestrais."],
    explicacao_aprofundada: ["Com vermelho, amarelo e azul, Daiara transforma rituais, melodias e histórias antigas em grafismos cheios de simetria e poder visual."],
    curiosidade: ["O nome 'Uremiri Hãusiro' significa 'desenhos de cura e transformação' na linda língua tukano 🌀"],
    interacao: ["Que conhecimento importante você gostaria de ensinar aos seus amigos através de um símbolo?"],
    atividade: ["Desenhe um símbolo bem bonito que represente algo precioso que você aprendeu com seus pais ou avós 👵👴"],
    final: ["A arte guarda a sabedoria e a identidade de um povo por muitas e muitas gerações 📖"],
    emocao: "sabedoria",
    nivel: "leve"
  },
  denilson_baniwa: {
    tema: "artistas_brasileiros",
    subtema: "denilson_baniwa",
    palavras_chave: ["denilson baniwa", "natureza morta 1", "baniwa", "vingadores indígenas"],
    inicio: ["Denilson Baniwa transforma frutas e objetos do nosso dia a dia em mensagens poderosas 🍌"],
    explicacao_curta: ["Denilson mistura a arte tradicional indígena com elementos modernos das cidades para mostrar que a cultura nativa está bem viva hoje."],
    explicacao_aprofundada: ["Em 'Natureza morta 1', ele usa tons escuros e desenhos vivos de frutas locais como bananas para nos fazer pensar sobre nossa identidade brasileira."],
    curiosidade: ["Ele criou ilustrações divertidas onde super-heróis famosos se vestem com trajes tribais, como guerreiros protetores da Amazônia! 🦸🏽"],
    interacao: ["Se um fruto da floresta pudesse falar, que história de preservação você acha que ele contaria?"],
    atividade: ["Desenhe uma fruteira no papel, mas decore cada fruta com padrões e ornamentos geométricos coloridos! 🍎"],
    final: ["A arte indígena contemporânea faz pontes fantásticas entre as tradições antigas e o futuro 🚀"],
    emocao: "inovação",
    nivel: "leve"
  },
  carmezia_emiliano: {
    tema: "artistas_brasileiros",
    subtema: "carmezia_emiliano",
    palavras_chave: ["carmezia emiliano", "carmézia emiliano", "macuxi", "árvore da vida"],
    inicio: ["Carmézia Emiliano pinta as tradições e lendas do povo Macuxi com muitas cores alegres e detalhes incríveis 🌳"],
    explicacao_curta: ["Ela gosta de pintar cenas cotidianas de sua comunidade, como colheitas, festas rituais e o convívio com a natureza."],
    explicacao_aprofundada: ["Em sua famosa obra 'A Árvore da Vida', o verde vibrante, o rosa e o amarelo mostram a enorme conexão e união entre todos os seres vivos."],
    curiosidade: ["Carmézia começou a pintar suas encantadoras telas quando já tinha 50 anos de idade, e hoje suas obras rodam o mundo! 🌍"],
    interacao: ["Quem são as pessoas e amigos que fazem parte da sua própria árvore da vida?"],
    atividade: ["Desenhe uma árvore forte e em cada galho faça o rosto de um amigo ou familiar que você ama muito 👨👩👧"],
    final: ["A arte tem o poder maravilhoso de conectar corações e celebrar a nossa união familiar 🤝"],
    emocao: "conexão",
    nivel: "leve"
  },
  aua_mendes: {
    tema: "artistas_brasileiros",
    subtema: "aua_mendes",
    palavras_chave: ["auá mendes", "aua mendes", "mura", "autorretrato auá"],
    inicio: ["Auá Mendes criou autorretratos cheios de frescor para celebrar o orgulho e as cores do povo Mura 💪"],
    explicacao_curta: ["Ela cria artes que misturam ilustração digital, pintura e design gráfico para mostrar a identidade indígena urbana."],
    explicacao_aprofundada: ["Os tons de roxo, azul-celeste e rosa neon nos seus desenhos expressam uma cultura forte, jovem e cheia de novos caminhos."],
    curiosidade: ["Auá nasceu no Amazonas, pertence ao povo Mura, é educadora e usa a internet para divulgar a beleza da arte indígena! 📲"],
    interacao: ["Como você se desenharia hoje de um jeito bem moderno e criativo para mostrar o seu orgulho pessoal?"],
    atividade: ["Faça um autorretrato no papel usando tons vibrantes e incomuns, como azul ou roxo para a pele, criando uma obra mágica!"],
    final: ["A nossa identidade é o nosso maior tesouro, e a arte nos ajuda a brilhar com as nossas verdadeiras cores 🌟"],
    emocao: "autoestima",
    nivel: "leve"
  },
  estevao_silva: {
    tema: "artistas_brasileiros",
    subtema: "estevao_silva",
    palavras_chave: ["estevao silva", "estêvão silva", "naturezas-mortas", "retratos", "século XIX", "natureza morta"],
    inicio: ["Estevão Silva adorava pintar frutas, flores colhidas e objetos do cotidiano com extrema doçura e realismo 🍇"],
    explicacao_curta: ["Ele foi e é considerado o primeiro grande pintor negro de naturezas-mortas do Brasil no século XIX."],
    explicacao_aprofundada: ["Suas naturezas-mortas usam cores quentes para retratar pêssegos, uvas e louças de barro com texturas que parecem reais de verdade!"],
    curiosidade: ["Ele tinha tanta dedicação na pintura que dava um acabamento perfumado às telas para que as pessoas quase sentissem o aroma das frutas! 🍑"],
    interacao: ["Se você pintasse uma fruteira hoje, qual fruta não poderia faltar de jeito nenhum?"],
    atividade: ["Desenhe uma cesta com uvas brilhantes e meias maçãs, desenhando sombras macias embaixo de cada uma 🍊"],
    final: ["Até os objetos mais simples podem ganhar uma dignidade e beleza enormes com o carinho do olhar artístico ✨"],
    emocao: "delicadeza",
    nivel: "leve"
  },
  arthur_timotheo_da_costa: {
    tema: "artistas_brasileiros",
    subtema: "arthur_timotheo_da_costa",
    palavras_chave: ["arthur timótheo da costa", "arthur timotheo", "impressionista brasileiro", "paisagens arthur"],
    inicio: ["Arthur Timótheo da Costa pintava retratos expressivos e paisagens que parecem brilhar sob o sol ☀️"],
    explicacao_curta: ["Ele foi um talentoso pintor negro brasileiro que trouxe as técnicas de pinceladas soltas do Impressionismo para a nossa arte."],
    explicacao_aprofundada: ["Os azuis suaves, beges quentes e rosas claros das suas pinceladas criavam retratos cheios de sentimentos calmos e luzes naturais."],
    curiosidade: ["Ele começou fazendo desenhos decorativos em bondes no Rio de Janeiro antes de ganhar prêmios importantes para viajar e estudar na Europa! 🚃"],
    interacao: ["Como você pintaria um dia ensolarado na praia ou no parque?"],
    atividade: ["Tente desenhar uma pequena casinha de campo usando pequenos tracinhos de cor, imitando pinceladas rápidas de luz! 🏡"],
    final: ["A pintura impressionista nos convida a capturar a beleza passageira da luz do dia nos nossos olhos 🌅"],
    emocao: "leveza",
    nivel: "leve"
  },
  maria_auxiliadora: {
    tema: "artistas_brasileiros",
    subtema: "maria_auxiliadora",
    palavras_chave: ["maria auxiliadora", "festas populares", "alto-relevo", "danças populares"],
    inicio: ["Maria Auxiliadora pintava festas e sambas tão alegres e vivos que parece até que ouvimos o som da sanfona e do pandeiro! 🎵"],
    explicacao_curta: ["Sua arte mostrava com orgulho o cotidiano das comunidades negras, com festas juninas, casamentos de rua e rodas de capoeira."],
    explicacao_aprofundada: ["Ela usava cores puras e brilhantes (como amarelo, vermelho e verde-bandeira) para cobrir figuras humanas expressivas e cheias de movimento."],
    curiosidade: ["Ela misturava pasta de dente e pedacinhos de tecidos nas tintas para que seus personagens tivessem cabelos e roupas em relevo real nas telas! 🧵"],
    interacao: ["Qual festividade da sua escola ou cidade você acha que é a mais colorida e animada?"],
    atividade: ["Crie um desenho de rua enfeitada com bandeirinhas coloridas e use pedacinhos de lã para criar as cordas das bandeirinhas! 🎉"],
    final: ["O folclore e a alegria do povo brasileiro são inspirações valiosas que dão vida à história da nossa arte 🎊"],
    emocao: "celebracao",
    nivel: "leve"
  },
  rubem_valentim: {
    tema: "artistas_brasileiros",
    subtema: "rubem_valentim",
    palavras_chave: ["rubem valentim", "emblema rubem", "orixás geometria", "cubos e triangulos"],
    inicio: ["Rubem Valentim usava retângulos, triângulos e círculos perfeitos para construir lindos emblemas de proteção 🧩"],
    explicacao_curta: ["Ele transformava símbolos ancestrais da cultura e religião afro-brasileira em uma arte geométrica e moderna única."],
    explicacao_aprofundada: ["Suas famosas pinturas chamadas 'Emblemas' utilizam as cores branca, azul, vermelha e amarela para arrumar símbolos sagrados em padrões perfeitos."],
    curiosidade: ["Ele amava tanto a simetria que também construía suas esculturas em madeira, que pareciam grandes brinquedos geométricos de montar! 🛠️"],
    interacao: ["Se as cores pudessem guardar sentimentos, qual forma e cor você usaria para desenhar o sentimento de 'paz'?"],
    atividade: ["Desenhe no papel um brasão de proteção usando apenas círculos vermelhos e triângulos azuis encaixados! ⬛🔺🔵"],
    final: ["As formas puras da geometria também servem para expressar pensamentos sagrados e profundos 🗺️"],
    emocao: "misterio",
    nivel: "leve"
  },
  maxwell_alexandre: {
    tema: "artistas_brasileiros",
    subtema: "maxwell_alexandre",
    palavras_chave: ["maxwell alexandre", "pardo é papel", "favela arte", "skatista pintor"],
    inicio: ["Maxwell Alexandre pinta a vida corrida e vibrante dos jovens da periferia com um orgulho enorme! 🧡"],
    explicacao_curta: ["Sua arte capta os cortes de cabelo, as roupas e a cultura urbana no Rio de Janeiro de um jeito grandioso."],
    explicacao_aprofundada: ["Na sua aclamada série de quadros 'Pardo é Papel', ele desenha personagens negros poderosos usando fundos dourados e papéis industriais simples."],
    curiosidade: ["Antes de pintar telas incríveis que são expostas na Europa, ele era atleta profissional de patins inline e de skate pelas ladeiras do Rio! 🛹"],
    interacao: ["O que há de mais legal na rua ou comunidade onde você vive que você desenharia num mural gigante?"],
    atividade: ["Desenhe você e seus amigos fazendo sua atividade favorita (correndo, andando de bike ou jogando bola) bem estilizados! 🏘️"],
    final: ["A arte nos permite dar voz e valorizar as nossas próprias vivências e vizinhanças 🌟"],
    emocao: "protagonismo",
    nivel: "leve"
  },

  // --- 4. ARTISTAS UNIVERSAIS (REDUZIDO/ORGANIZADO) ---
  // (As definições principais destes 7 artistas foram unificadas no final do arquivo com todos os dados novos fornecidos)

  // --- 5. ARTISTAS MULHERES (Curadoria rica) ---
  frida_kahlo_as_duas_fridas: {
    tema: "artistas_mulheres",
    subtema: "frida_kahlo",
    palavras_chave: ["as duas fridas", "duas fridas"],
    inicio: ["Frida Kahlo pintou duas versões de si mesma lado a lado, como duas aliadas segurando a mão uma da outra 🤝"],
    explicacao_curta: ["Essa marcante pintura transmite força de espírito, sentimento e o modo como ela amava suas origens mexicanas e europeias."],
    explicacao_aprofundada: ["Com as cores branca, vermelha e verde, ela desenhou as artérias dos seus dois corações se unindo para curar feridas."],
    curiosidade: ["Sua mãe era de origem indígena mexicana e seu pai um fotógrafo alemão, daí o contraste das suas duas lindas roupas no quadro! 🪞"],
    interacao: ["Se você desenhasse duas versões suas no futuro, o que cada uma estaria vestindo?"],
    atividade: ["Faça no papel duas figuras coladas de mãos dadas que representem a amizade mais fofa do mundo 💪"],
    final: ["Proteger a nós mesmos por completo nos ajuda a enfrentar qualquer problema com ternura e paz 🌈"],
    emocao: "autoconhecimento",
    nivel: "leve"
  },
  frida_kahlo_autorretrato_colar: {
    tema: "artistas_mulheres",
    subtema: "frida_kahlo",
    palavras_chave: ["autorretrato com colar de espinhos", "beija-flor", "colar de espinhos"],
    inicio: ["Nessa tela, Frida desenhou-se paciente usando brinquedos de espinhos e um passarinho livre por perto 🐦"],
    explicacao_curta: ["A pintura ilustra a doçura e a dignidade com que ela encarava as suas limitações corporais no dia a dia."],
    explicacao_aprofundada: ["Um gato preto (mistério), um macaquinho travesso e um beija-flor de asas abertas mostram a conexão dela com a fauna do México."],
    curiosidade: ["O passarinho preto no pescoço representa a lenda asteca do renascer da vida após os momentos difíceis ✨"],
    interacao: ["Quais elementos da fauna e flora ajudam você a se sentir calmo e feliz em dias chuvosos?"],
    atividade: ["Desenhe você com uma delicada flor amarela no cabelo ou no ombro para expressar o amor pelas plantas 🌼"],
    final: ["A arte consegue mudar a nossa dor em lindos quadros coloridos que inspiram milhões 💔➡️💪"],
    emocao: "resiliência",
    nivel: "leve"
  },
  artemisia_gentileschi_judite: {
    tema: "artistas_mulheres",
    subtema: "artemisia_gentileschi",
    palavras_chave: ["artemisia gentileschi", "judite", "judite decapitadora", "força feminina artemisia"],
    inicio: ["Artemisia Gentileschi pintava rainhas determinantes que tomavam as rédeas da própria vida! ⚔️"],
    explicacao_curta: ["Considerada a primeira grande pintora barroca da Itália, ela usou jogos intensos de luz e sombra (chiaroscuro) para dar ação e dramas às telas."],
    explicacao_aprofundada: ["A obra de Judite mostra duas mulheres corajosas e unidas vencendo tarefas assustadoras com extrema força muscular e inteligência."],
    curiosidade: ["Numa época em que mulheres eram proibidas de ir à universidade de arte, ela foi a primeira aceita na Academia de Desenho de Florença! 🎨"],
    interacao: ["Quem é uma mulher forte e guerreira na sua história real ou nas suas brincadeiras preferidas?"],
    atividade: ["Desenhe sua super-heroína favorita cortando laços ou solucionando um grande mistério com o lápis! 👯‍♀️"],
    final: ["As telas de Artemisia nos provam que garotas têm coragem de sobra para o papel de grandes líderes e guerreiras 🛡️"],
    emocao: "coragem",
    nivel: "leve"
  },
  yayoi_kusama_infinity_mirror: {
    tema: "artistas_mulheres",
    subtema: "yayoi_kusama",
    palavras_chave: ["infinity mirror rooms", "salas infinitas", "bolinhas kusama"],
    inicio: ["Yayoi Kusama cria cavernas iluminadas onde espelhos refletem balões e luzes até o infinito! ✨🪞"],
    explicacao_curta: ["A lendária artista japonesa preenche salas inteiras de pontos repetidos para imergir o visitante num sonho."],
    explicacao_aprofundada: ["Usando contraste de bolinhas e labirintos com revestimento espelhado, ela cria noções mágicas reais de termos sem fim nas salas."],
    curiosidade: ["A artista adora pintar abóboras gigantes amarelas de bolinhas pretas, e tem cabelos chanel rosa-choque brilhantes aos 90 anos! 🔴⚪"],
    interacao: ["Se o universo infinito fosse feito de padrões engraçados, que formatos seriam?"],
    atividade: ["Cole bolinhas de adesivo circular ou faça círculos com cotonete de tinta em todo o papel para criar sua estampa infinita! 🎨"],
    final: ["A constância de ideias simples repetidas com capricho pode criar o efeito estético mais deslumbrante 🌌"],
    emocao: "maravilhamento",
    nivel: "leve"
  },
  mary_cassatt_banho: {
    tema: "artistas_mulheres",
    subtema: "mary_cassatt",
    palavras_chave: ["mary cassatt", "o banho da criança", "afeto mary cassatt"],
    inicio: ["Mary Cassatt registrava os gestos mais puros de aconchego, higiene e atenção das mães com seus bebês 🛁💕"],
    explicacao_curta: ["A pintora norte-americana impressionista registrava a vida íntima e caseira de mulheres com traços delicados."],
    explicacao_aprofundada: ["Em 'O Banho da Criança', os tons pastéis de verde, azul e creme criam um clima tranquilo de repouso doméstico e proteção."],
    curiosidade: ["Embora vivesse isolada socialmente por ser mulher pintora independente em Paris, ela ajudou a popularizar o impressionismo na América! 👩‍👧"],
    interacao: ["Quem em casa sempre ajuda você com carinho nos afazeres de lavar, pentear ou comer?"],
    atividade: ["Desenhe uma xícara quentinha de cacau ou leite sendo oferecida com muito carinho por duas mãos amigáveis 👨‍👩‍👧"],
    final: ["Através dos afazeres rotineiros, as pessoas constroem os laços de união mais indestrutíveis do mundo ❤️"],
    emocao: "aconchego",
    nivel: "leve"
  },
  georgia_okeeffe_black_iris: {
    tema: "artistas_mulheres",
    subtema: "georgia_okeeffe",
    palavras_chave: ["georgia o'keeffe", "black iris", "flores gigantes", "íris negra"],
    inicio: ["Georgia O'Keeffe retratava pétalas delicadas em telas gigantes, como se fôssemos abelhas em close-up! 🌸🔍"],
    explicacao_curta: ["Famosa artista dos EUA, ela aproximava seu olhar de plantas silvestres e colinas áridas para fazer arte abstrata."],
    explicacao_aprofundada: ["Com degradês suaves de tons roxos, creme e preto, a íris adquire formas orgânicas monumentais que lembram montanhas."],
    curiosidade: ["Ela viveu dezenas de anos sozinha em uma casinha de teto plano no deserto do Novo México, pintando colinas e areia roxa! 🌵"],
    interacao: ["Se fôssemos microscópicos, que fruta ou folha pareceria uma montanha russa de diversões?"],
    atividade: ["Colete uma pétala caída de flor e desenhe suas veias no papel com um aumento de dez vezes mais 🖍️"],
    final: ["Chegar bem perto da natureza nos revela belezas ocultas que a correria esconde dos adultos 👀"],
    emocao: "admiração",
    nivel: "leve"
  },
  lygia_clark_bichos: {
    tema: "artistas_mulheres",
    subtema: "lygia_clark",
    palavras_chave: ["lygia clark", "bichos", "arte interativa", "bicho de metal"],
    inicio: ["Lygia Clark fez esculturas de metal articuladas de dobradiças para você modelar o bicho que inventar! 🦎🔧"],
    explicacao_curta: ["Grande artista brasileira moderna, ela queria que as pessoas tocassem e transformassem a arte movendo-a."],
    explicacao_aprofundada: ["Estes 'Bichos' de alumínio não têm formas fixas; dobram-se dezenas de vezes nas mãos dos pequenos em novas configurações."],
    curiosidade: ["Lygia dizia que a escultura parecia um organismo vivo que interage com quem brinca com ele 🧸"],
    interacao: ["Se o seu brinquedo pudesse virar várias criaturas diferentes, que animais seriam?"],
    atividade: ["Dobre um papel em quatro ou cinco vincos e veja como ele pode ficar de pé como uma estátua maluca! 🦎"],
    final: ["As mãos e gestos das crianças também completam a beleza viva de obras tridimensionais 🎭"],
    emocao: "interatividade",
    nivel: "leve"
  },
  adriana_varejao_celacanto: {
    tema: "artistas_mulheres",
    subtema: "adriana_varejao",
    palavras_chave: ["adriana varejão", "celacanto provoca maremoto", "azulejos adriana", "história do brasil"],
    inicio: ["Adriana Varejão desenhou um grande oceano em azulejos de cerâmica onde ondas gigantes balançam barcos 🌊🐟"],
    explicacao_curta: ["Pintora contemporânea do Brasil, ela junta pedaços de louça, gesso e tintas azuis para contar a história do nosso país."],
    explicacao_aprofundada: ["A obra Celacanto une azulejos históricos portugueses fraturados para mostrar como as culturas do mar criaram o Brasil."],
    curiosidade: ["O celacanto é um peixe antigo que vive no fundo escuro do mar e que cientistas achavam que já tinha sumido há milhões de anos! 🦕"],
    interacao: ["Que mistérios e monstros adoráveis você imagina que habitam o fundo dos mares mais azuis?"],
    atividade: ["Pinte quadrados azuis no papel formando um lindo padrão, e depois dobre e desdobre de leve para simular azulejos antigos que racharam 🧩"],
    final: ["As feridas e quebras da nossa história também podem ser coladas e integradas em um lindo painel 🏺"],
    emocao: "memória",
    nivel: "leve"
  },
  beatriz_milhazes_beleza_pura: {
    tema: "artistas_mulheres",
    subtema: "beatriz_milhazes",
    palavras_chave: ["beatriz milhazes", "beleza pura", "arabescos beatriz", "círculos coloridos"],
    inicio: ["Beatriz Milhazes cria redemoinhos, mandalas e fatias coloridas que giram na folha como brinquedos de parque! 🎠🌈"],
    explicacao_curta: ["A artista brasileira usa a colagem de películas coloridas para gerar estampas felizes e exuberantes em telas enormes."],
    explicacao_aprofundada: ["Flores cor-de-rosa, listras amarelas e arcos laranjas sobrepõem-se gerando ritmos visuais que dançam."],
    curiosidade: ["Ela adora se inspirar nos palcos decorados do desfile de Carnaval do Rio de Janeiro e nos grafismos da bossa nova! 👗"],
    interacao: ["Quais formas e desenhos fazem você querer dançar de tanta empolgação?"],
    atividade: ["Recorte pétalas e rodas em papéis de revista e monte uma grande colagem cheia de círculos um no outro! ✂️🎨"],
    final: ["A harmonia de cores quentes e formas radiantes pode nos encher de energia positiva e entusiasmo 🎆"],
    emocao: "euforia",
    nivel: "leve"
  },
  maria_martins_o_impossivel: {
    tema: "artistas_mulheres",
    subtema: "maria_martins",
    palavras_chave: ["maria martins", "o impossível", "escultura maria martins", "surrealismo bronze"],
    inicio: ["Maria Martins moldou no bronze criaturas que parecem raízes de plantas falantes saídas de sonhos misteriosos! 🌙🌀"],
    explicacao_curta: ["Escultora surrealista fantástica do Brasil, ela criava mitos da natureza e florestas tropicais em metais escuros."],
    explicacao_aprofundada: ["Em 'O Impossível', os ganchos e silhuetas que parecem garras flutuam no ar se aproximando e tentando se abraçar."],
    curiosidade: ["Ela passava dias lendo lendas sobre rios e monstros d'água da floresta amazônica para se inspirar antes de suas esculturas 🎨"],
    interacao: ["Se um espantalho protetor ou criatura da floresta passasse correndo e pulasse, como seriam seus passos?"],
    atividade: ["Dê formas a cobras de massinha de modelar e crie curvas pontiagudas que parecem raízes mágicas entrelaçadas! 🐍🌻"],
    final: ["A arte nos permite dar contorno físico a desejos, mistérios e fantasias impossíveis de tocar ✨"],
    emocao: "fantasia",
    nivel: "leve"
  },

  // --- 6. CANTIGAS DE RODA (43 itens mapeados sob chaves individuais) ---
  cantiga_1: {
    palavras_chave: ["ciranda", "cirandinha", "ciranda, cirandinha", "anel", "vidro", "roda", "verso"],
    inicio: ["Que delícia! Quer cantar e brincar de Ciranda, Cirandinha? 🎶"],
    explicacao_curta: ["Aqui está a famosa letra desta cantiga popular de roda para cantarmos juntos:\n\nCiranda Cirandinha\nVamos todos cirandar\nVamos dar a meia volta\nVolta e meia vamos dar\n\nO Anel que tu me destes\nEra vidro e se quebrou\nO amor que tu me tinhas\nEra pouco e se acabou\n\nPor isso dona moça\nFaz favor de entrar na roda\nDiga um verso bem bonito\nDiga adeus e vá embora"],
    categoria: "Cantiga de Roda"
  },
  cantiga_2: {
    palavras_chave: ["capelinha", "melão", "capelinha de melão", "são joão", "são joão", "cravo", "rosa", "manjericão"],
    inicio: ["Vamos cantar 'Capelinha de Melão'! Uma cantiga de festa de São João! 🌽🎶"],
    explicacao_curta: ["Veja a letra completa desta cantiga:\n\nCapelinha de melão\nÉ de São João\nÉ de cravo, é de rosa,\nÉ de manjericão\n\nSão João está dormindo\nNão acorda, não\nAcordai, acordai,\nAcordai, João!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_3: {
    palavras_chave: ["escravos", "jó", "escravos de jó", "caxangá", "tira", "bota", "zigue-zigue-zá"],
    inicio: ["Quer brincar de passar pedrinhas no ritmo de 'Escravos de Jó'? 🪨🥁"],
    explicacao_curta: ["Esta cantiga de jogo de pedras é super divertida de cantar:\n\nEscravos de Jó\nJogavam caxangá\nTira, bota, deixa ficar\nGuerreiros com guerreiros fazem zigue-zigue-zá\nGuerreiros com guerreiros fazem zigue-zigue-zá."],
    categoria: "Cantiga de Roda"
  },
  cantiga_4: {
    palavras_chave: ["peixe", "vivo", "peixe vivo", "água", "fria", "companhia", "pastores", "zombaria"],
    inicio: ["Cantar 'Peixe Vivo' nos enche de saudade e doçura! 🐟🌊"],
    explicacao_curta: ["Aqui estão os versos desta tradicional cantiga mineira:\n\nComo pode o peixe vivo\nViver fora da água fria\nComo pode o peixe vivo\nViver fora da água fria\n\nComo poderei viver\nComo poderei viver\nSem a tua, sem a tua\nSem a tua companhia\n\nOs pastores desta aldeia\nJá me fazem zombaria\nPor me verem assim chorando\nSem a tua companhia."],
    categoria: "Cantiga de Roda"
  },
  cantiga_5: {
    palavras_chave: ["galinha", "vizinho", "galinha do vizinho", "ovo", "amarelinho", "bota", "dez"],
    inicio: ["Vamos cantar e contar de uma vez com 'A Galinha do Vizinho'! 🐔🥚"],
    explicacao_curta: ["Usa esta letra para contar os ovinhos amarelos:\n\nA galinha do vizinho\nBota ovo amarelinho\nBota um, bota dois, bota três,\nBota quatro, bota cinco, bota seis,\nBota sete, bota oito, bota nove,\nBota dez!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_6: {
    palavras_chave: ["borboletinha", "cozinha", "chocolate", "madrinha", "poti", "pica-pau", "perna de pau"],
    inicio: ["Cozinhar chocolate de mentira é muito engraçado em 'Borboletinha'! 🦋🍫"],
    explicacao_curta: ["Uma das canções mais cantadas da nossa infância:\n\nBorboletinha tá na cozinha\nFazendo chocolate\nPara a madrinha\n\nPoti, poti\nPerna de pau\nOlho de vidro\nE nariz de pica-pau pau pau"],
    categoria: "Cantiga de Roda"
  },
  cantiga_7: {
    palavras_chave: ["limão", "limoeiro", "meu limão, meu limoeiro", "jacarandá", "tindolelê", "tindolalá"],
    inicio: ["Balançar ao som de 'Meu Limão, Meu Limoeiro' é uma delícia de ciranda! 🍋🌳"],
    explicacao_curta: ["Eis a letra para cantarmos e girarmos na sala:\n\nMeu limão, meu limoeiro\nMeu pé de jacarandá\nUma vez, tindolelê\nOutra vez, tindolalá"],
    categoria: "Cantiga de Roda"
  },
  cantiga_8: {
    palavras_chave: ["barata", "barata diz que tem", "saias", "filó", "veludo", "marfim", "marfim", "caminhão"],
    inicio: ["A Barata é muito mentirosa e cheia de piadas de si mesma! 🪳🤣"],
    explicacao_curta: ["Ria bastante cantando esta letra rápida:\n\nA Barata diz que tem sete saias de filó\nÉ mentira da barata, ela tem é uma só\nAh ra ra, iá ro ró, ela tem é uma só!\n\nA Barata diz que tem um sapato de veludo\nÉ mentira da barata, o pé dela é peludo\nAh ra ra, Iu ru ru, o pé dela é peludo!\n\nA Barata diz que tem uma cama de marfim\nÉ mentira da barata, ela tem é de capim\n\nA Barata diz que tem um anel de formatura\nÉ mentira da barata, ela tem é casca dura"],
    categoria: "Cantiga de Roda"
  },
  cantiga_9: {
    palavras_chave: ["alecrim", "alecrim dourado", "dourado", "campo", "semeado", "amor", "flor"],
    inicio: ["A flor e planta silvestre mais querida da capoeira e do campo: 'Alecrim Dourado'! 🌱✨"],
    explicacao_curta: ["Uma música cheia de paz e inspiração vegetal:\n\nAlecrim, Alecrim dourado\nQue nasceu no campo\nSem ser semeado\n\nFoi meu amor\nQue me disse assim\nQue a flor do campo é o alecrim"],
    categoria: "Cantiga de Roda"
  },
  cantiga_10: {
    palavras_chave: ["cai, cai balão", "cai balão", "sabão", "mão", "medo", "apanhar"],
    inicio: ["Cuidado para o balão não cair no quintal em 'Cai, Cai Balão'! 🎈🔥"],
    explicacao_curta: ["Aprenda a cantar no ritmo das festas de meio de ano:\n\nCai cai balão, cai cai balão\nNa rua do sabão\nNão Cai não, não cai não, não cai não\nCai aqui na minha mão!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_11: {
    palavras_chave: ["pirulito", "pirulito que bate bate", "bate", "gosta", "menina"],
    inicio: ["Um clássico doce que adora bater o ritmo da roda: 'Pirulito que Bate Bate'! 🍭🎵"],
    explicacao_curta: ["Vocalize e dance no círculo de braços dados:\n\nPirulito que bate bate\nPirulito que já bateu\nQuem gosta de mim é ela\nQuem gosta dela sou eu\n\nPirulito que bate bate\nPirulito que já bateu\nA menina que eu gostava\nNão gostava como eu"],
    categoria: "Cantiga de Roda"
  },
  cantiga_12: {
    palavras_chave: ["pombinha", "pombinha branca", "roupa", "casamento", "janela", "namorado"],
    inicio: ["Um pássaro que anda de terno e cuida da arrumação com 'Pombinha Branca'! 🕊️🧼"],
    explicacao_curta: ["Canção com as rimas mais divertidas:\n\nPombinha branca o que está fazendo?\nLavando roupa pro casamento\nVou me lavar, vou me secar\nVou pra janela pra namorar\n\nPassou um moço de terno branco,\nChapéu de lado meu namorado\nMandei entrar, mandei sentar\nCuspiu no chão, limpa aí seu porcalhão"],
    categoria: "Cantiga de Roda"
  },
  cantiga_13: {
    palavras_chave: ["terezinha", "terezinha de jesus", "jesus", "queda", "cavalheiros", "laranja", "limão", "abraço"],
    inicio: ["A queda amigável com três cavalheiros no socorro em 'Terezinha de Jesus'! 🍊🌸"],
    explicacao_curta: ["Uma bela canção cheia de rimas clássicas:\n\nTerezinha de Jesus deu uma queda\nFoi ao chão\nAcudiram três cavalheiros\nTodos de chapéu na mão\n\nO primeiro foi seu pai\nO segundo seu irmão\nO terceiro foi aquele\nQue a Tereza deu a mão"],
    categoria: "Cantiga de Roda"
  },
  cantiga_14: {
    palavras_chave: ["indiozinhos", "dos indiozinhos", "bote", "rio", "jacaré", "virou"],
    inicio: ["O pequeno barco que quase virou no rio pelo jacaré em '10 Indiozinhos'! 🛶🐊"],
    explicacao_curta: ["Use a contagem para cantar no ritmo firme de bater palmos:\n\nUm, dois, três indiozinhos\nQuatro, cinco, seis indiozinhos\nSete, oito, nove indiozinhos\nDez num pequeno bote\n\nIam navegando pelo rio abaixo\nQuando um jacaré se aproximou\nAnd o pequeno bote dos indiozinhos\nQuase, quase virou."],
    categoria: "Cantiga de Roda"
  },
  cantiga_15: {
    palavras_chave: ["se essa rua fosse minha", "se essa rua", "ladrilhar", "brilhante", "amor", "bosque", "solidão", "anjo", "coração"],
    inicio: ["Colocar brilhantes para passar as amizades em 'Se Essa Rua Fosse Minha'! ✨🛣️"],
    explicacao_curta: ["A canção lírica de acalentar corações mais linda de todas:\n\nSe essa rua\nSe essa rua fosse minha\nEu mandava\nEu mandava ladrilhar\nCom pedrinhas\nCom pedrinhas de brilhante\nPara o meu\nPara o meu amor passar\n\nNessa rua\nNessa rua tem um bosque\nQue se chama\nQue se chama de solidão\nDentro dele morre um anjo\nQue roubou meu coração."],
    categoria: "Cantiga de Roda"
  },
  cantiga_16: {
    palavras_chave: ["cravo", "rosa", "o cravo e a rosa", "brigou", "sacada", "doente", "casamento"],
    inicio: ["A briga botânica mais barulhenta da nossa infância: 'O Cravo e a Rosa'! 🥀🥊"],
    explicacao_curta: ["Cantiga amada com uma linda conciliação floral no final:\n\nO cravo brigou com a rosa\nDebaixo de uma sacada\nO cravo saiu ferido\nE a rosa despedaçada\n\nO cravo ficou doente\nE a rosa foi visitar\nO cravo teve um desmaio\nE a rosa pôs-se a chorar\n\nA rosa fez serenata\nO cravo foi espiar\nE as flores fizeram festa\nPorque eles vão se casar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_17: {
    palavras_chave: ["sapo", "sapo não lava o pé", "lava", "pé", "lagoa", "chulé"],
    inicio: ["A saúde do pé na lagoa em 'O Sapo Não Lava o Pé'! 🐸🦶"],
    explicacao_curta: ["Lá vem a música do sapo com o maior chulé do rio:\n\nO sapo não lava o pé.\nNão lava porque não quer.\nEle mora lá na lagoa,\nE não lava o pé\nPorque não quer\nMas, que chulé!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_18: {
    palavras_chave: ["marcha", "soldado", "marcha soldado", "cabeça de papel", "quartel", "fogo", "bandeira"],
    inicio: ["Marchar reto com o chapéu feito de jornal em 'Marcha Soldado'! 📰💂‍♂️"],
    explicacao_curta: ["Eis o ritmo militar do quartel e da bandeira nacional:\n\nMarcha Soldado\nCabeça de Papel\nSe não marchar direito\nVai preso pro quartel\n\nO quartel pegou fogo\nA polícia deu sinal\nAcorda acorda acorda\nA bandeira nacional"],
    categoria: "Cantiga de Roda"
  },
  cantiga_19: {
    palavras_chave: ["fui no tororó", "tororó", "beber água", "morena", "dona maria", "roda", "pedro"],
    inicio: ["Beber água no córrego e achar uma bela companhia em 'Fui no Tororó'! 💧🌸"],
    explicacao_curta: ["Cante essa animada cantiga de dar voltas na roda:\n\nFui no Tororó beber água não achei\nAchei linda Morena\nQue no Tororó deixei\n\nAproveita minha gente\nQue uma noite não é nada\nSe não dormir agora\nDormirá de madrugada\n\nOh, Dona Maria\nOh, Mariazinha, entra nesta roda\nOu ficarás sozinha!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_20: {
    palavras_chave: ["ai, eu entrei na roda", "entrei na roda", "dançar", "sete namorados", "picolé", "dedo do pé"],
    inicio: ["Entrar na rodadança mesmo sem saber os passos em 'Ai, Eu Entrei na Roda'! 🩰🤣"],
    explicacao_curta: ["A canção com as rimas e versos mais criativos:\n\nAi, eu entrei na roda\nAi, eu não sei como se dança\nAi, eu entrei na 'rodadança'\nAi, eu não sei dançar\n\nSete e sete são quatorze, com mais sete, vinte e um\nTenho sete namorados só posso casar com um"],
    categoria: "Cantiga de Roda"
  },
  cantiga_21: {
    palavras_chave: ["canoa", "canoa virou", "maria", "remar", "peixinho", "nadar", "mar"],
    inicio: ["A canoa que virou por não saber usar os remos em 'A Canoa Virou'! 🛶🌊"],
    explicacao_curta: ["Vamos salvar a Maria no fundo do mar com um peixinho:\n\nA canoa virou\nPor deixá-la virar\nFoi por causa da Maria\nQue não soube remar\n\nSe eu fosse um peixinho\nE soubesse nadar\nTirava a Maria\nDo fundo do mar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_22: {
    palavras_chave: ["rosa amarela", "a rosa amarela", "formosa", "bela", "lenço", "enxugar", "despedida", "chorar"],
    inicio: ["Um lenço para chorar a despedida da 'Rosa Amarela'! 💛🌹"],
    explicacao_curta: ["Uma cantiga romântica e cheia de sotaque tradicional:\n\nOlha a Rosa amarela, Rosa\nTão Formosa, tão bela, Rosa\nOlha a Rosa amarela, Rosa\nTão Formosa, tão bela, Rosa\n\nIá-iá meu lenço, ô Iá-iá\nPara me enxugar, ô Iá-iá\nEsta despedida, ô Iá-iá\nJá me fez chorar, ô Iá-iá"],
    categoria: "Cantiga de Roda"
  },
  cantiga_23: {
    palavras_chave: ["quem me ensinou a nadar", "nadar", "marinheiro", "peixinhos", "mar"],
    inicio: ["Aprender a flutuar com os peixes de água salgada em 'Quem me Ensinou a Nadar'! 🐟⚓"],
    explicacao_curta: ["Um hino das praias de todo o Nordeste cantado na roda:\n\nQuem me ensinou a nadar\nQuem me ensinou a nadar\n\nFoi, foi, marinheiro,\nFoi os peixinhos do mar\nFoi, foi, marinheiro,\nFoi os peixinhos do mar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_24: {
    palavras_chave: ["sapo-cururu", "cururu", "rio", "canta", "frio", "rendinha", "casamento"],
    inicio: ["O sapo que canta no frio e sua esposa fazendo renda em 'Sapo-Cururu'! 🐸🧵"],
    explicacao_curta: ["Cante no ritmo de palmas baixas:\n\nSapo-Cururu\nNa beira do rio\nQuando o sapo canta,\nÓ maninha,\nÉ que está com frio\n\nA mulher do sapo\nDeve estar lá dentro\nFazendo rendinha,\nÓ maninha,\nPara o casamento"],
    categoria: "Cantiga de Roda"
  },
  cantiga_25: {
    palavras_chave: ["meu galinho", "perdi meu galinho", "galinho", "durmo", "jardim", "crista", "qui-ri-qui-qui"],
    inicio: ["A busca do galinho perdido no sertão em 'Meu Galinho'! 🐓🌵"],
    explicacao_curta: ["Cante as aventuras e o cantar qui-ri-qui-qui no Ceará:\n\nHá três noites que eu não durmo, o-lá-lá!\nPois perdi o meu galinho o-lá-lá!\nCoitadinho, o-lá-lá!\nPobrezinho, o-lá-lá!\nEu perdi lá no jardim.\n\nEle é branco e amarelo, o-lá-lá!\nTem a crista vermelhinha, o-lá-lá!\nBate as asas, o-lá-lá!\nAbre o bico, o-lá-lá!\nEle faz qui-ri-qui-qui!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_26: {
    palavras_chave: ["marinheiro só", "marinheiro", "só", "navegar", "balanço", "navio", "mar"],
    inicio: ["O bamboleio do navio de água e a saudade em 'Marinheiro Só'! 🛳️⚓"],
    explicacao_curta: ["Uma canção baiana cheia de ritmo para pés sincronizados:\n\nOi, marinheiro, marinheiro,\nMarinheiro só\nQuem te ensinou a navegar?\nMarinheiro só\nFoi o balanço do navio,\nMarinheiro só\nFoi o balanço do mar\nMarinheiro só."],
    categoria: "Cantiga de Roda"
  },
  cantiga_27: {
    palavras_chave: ["pezinho", "pezinho bem juntinho", "bota", "juntinho", "arrependeu"],
    inicio: ["Encaixar os pezinhos calçados de mãos dadas em 'O Pezinho'! 👣🤠"],
    explicacao_curta: ["Tradicional dança sulista alegre de rodas cerradas:\n\nAi bota aqui\nAi bota aqui o seu pezinho\nSeu pezinho bem juntinho com o meu\nE depois não vá dizer\nQue você se arrependeu!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_28: {
    palavras_chave: ["vai abóbora", "abóbora", "melão", "melancia", "doce", "cocadinha", "juquinha"],
    inicio: ["A feira com doce de cocada e a dança do Juquinha em 'Vai Abóbora'! 🍉🍬"],
    explicacao_curta: ["Uma música ritmada e gostosa de vocalizar:\n\nVai abóbora vai melão de melão vai melancia\nVai jambo sinhá, vai jambo sinhá, vai doce, vai cocadinha\nQuem quiser aprender a dançar, vai na casa do Juquinha\nEle pula, ele dança, ele faz requebradinha."],
    categoria: "Cantiga de Roda"
  },
  cantiga_29: {
    palavras_chave: ["roda pião", "pião", "pião entrou na roda", "bambeia", "sapateia", "fieira", "chapéu"],
    inicio: ["O brinquedo de madeira girando forte no terreiro em 'Roda Pião'! 🪀🌀"],
    explicacao_curta: ["Cante fazendo o gesto de girar com as mãos:\n\nO Pião entrou na roda, ó pião!\nRoda pião, bambeia pião!\nSapateia no terreiro, ó pião!\nMostra a tua figura, ó pião!\nFaça uma cortesia, ó pião!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_30: {
    palavras_chave: ["caranguejo", "caranguejo não é peixe", "maré", "palma", "vazante"],
    inicio: ["Cantar batendo palmas e batendo os pés em 'Caranguejo Não é Peixe'! 🦀🌊"],
    explicacao_curta: ["Uma canção amada pelas crianças de todo o litoral:\n\nCaranguejo não é peixe\nCaranguejo peixe é\nCaranguejo não é peixe\nNa vazante da maré.\n\nPalma, palma, palma,\nPé, pé, pé\nCaranguejo só é peixe, na vazante da maré!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_31: {
    palavras_chave: ["na loja do mestre andré", "mestre andré", "pianinho", "violão", "flautinha", "tamborzinho", "tambor", "loja"],
    inicio: ["A loja recheada de barulhos de instrumentos musicais do 'Mestre André'! 🎸🥁🕹️"],
    explicacao_curta: ["A canção acumulativa de imitar instrumentos mais divertida:\n\nFoi na loja do Mestre André\nQue eu comprei um pianinho,\nPlim, plim, plim, um pianinho\n\nAi olé, ai olé!\nFoi na loja do Mestre André!\n\nFoi na loja do Mestre André\nQue eu comprei um violão,\nDão, dão, dão, um violão\nPlim, plim, plim, um pianinho"],
    categoria: "Cantiga de Roda"
  },
  cantiga_32: {
    palavras_chave: ["meu boi morreu", "boi", "vaca", "curar", "piauí", "vaca", "limão", "urucubaca"],
    inicio: ["A cura da urucubaca e a busca de rebanhos no Nordeste com 'Meu Boi Morreu'! 🐂🍋"],
    explicacao_curta: ["Divertida cantiga de folclore e rimas rápidas:\n\nO meu boi morreu\nO que será de mim\nMande buscar outro, oh Morena\nLá no Piauí\n\nO meu boi morreu\nO que será da vaca\nPinga com limão, oh Morena\nCura urucubaca."],
    categoria: "Cantiga de Roda"
  },
  cantiga_33: {
    palavras_chave: ["tutu marambá", "tutu", "cuca", "belém", "menino"],
    inicio: ["Assustar o monstrinho Tutu e embalar o sono em 'Tutu Marambá'! 👹🌙"],
    explicacao_curta: ["Um doce acalanto de ninar com a Cuca e histórias de roça:\n\nTutu Marambá não venhas mais cá\nQue o pai do menino te manda matar\n\nDurma neném, que a Cuca logo vem\nPapai está na roça e Mamãezinha em Belém"],
    categoria: "Cantiga de Roda"
  },
  cantiga_34: {
    palavras_chave: ["você gosta de mim?", "voce gosta de mim", "menina", "papéis", "paixão"],
    inicio: ["O romântico pedido de casamento e namorico em 'Você Gosta de Mim, Ó Menina?'! 💍🌺"],
    explicacao_curta: ["Rimas fáceis para cantar na roda com flertes de brincadeira:\n\nVocê gosta de mim, ó menina?\nEu também de você, ó menina\nVou pedir a seu pai, ó menina,\nPara casar com você, ó menina\n\nSe ele disser que sim, ó menina,\nTratarei dos papéis, ó menina,\nSe ele disser que não, ó menina,\nMorrerei de paixão."],
    categoria: "Cantiga de Roda"
  },
  cantiga_35: {
    palavras_chave: ["vamos maninha", "maninha", "praia", "remador", "senhor", "barco"],
    inicio: ["Ver a barca nova deslizar nas praias do céu em 'Vamos Maninha'! ⛵🌅"],
    explicacao_curta: ["Canção doce de marinharia e anjinhos nos remos:\n\nVamos Maninha vamos,\nLá na praia passear\nVamos ver a barca nova que do céu caiu do mar\n\nNossa Senhora está dentro,\nOs anjinhos a remar\nRema rema remador, que este barco é do Senhor"],
    categoria: "Cantiga de Roda"
  },
  cantiga_36: {
    palavras_chave: ["que é de valentim", "valentim", "rapaz", "moreninha", "par"],
    inicio: ["A disputa do par mais elegante na roda em 'Que é de Valentim'! 🙋‍♂️💃"],
    explicacao_curta: ["Uma marchinha curtinha e folclórica:\n\nQue é de Valentim ? Valentim Trás Trás\nQue é de Valentim ? É um bom rapaz\nQue é de Valentim ? Valentim sou eu!\nDeixa a moreninha, que esse par é meu!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_37: {
    palavras_chave: ["na bahia tem", "bahia", "coco", "beira da praia", "vintém"],
    inicio: ["Vender coco por um tostão mole na 'Na Bahia Tem'! 🥥🏝️"],
    explicacao_curta: ["Cantiga com ditados populares sobre persistência:\n\nNa Bahia tem, tem tem tem\nCoco de vintém, ô Ia-iá\nNa Bahia tem!\n\nNa beira da praia,\nEu vou, eu quero ver\nNa beira da praia,\nSó me caso com você\n\nÁgua tanto deu na pedra,\nQue até fez amolecer,\nNa beira da praia."],
    categoria: "Cantiga de Roda"
  },
  cantiga_38: {
    palavras_chave: ["a gatinha parda", "gatinha parda", "gatinha", "fugiu", "miau", "pica-pau", "bruxa"],
    inicio: ["Quem terá levado a gatinha manhosa de miado fofo em 'A Gatinha Parda'? 🐱🪄"],
    explicacao_curta: ["Eis a brincadeira de procurar o bicho sumido:\n\nA gatinha parda\nA minha gatinha parda, que em Janeiro me fugiu\nOnde está minha gatinha,\nVocê sabe, você sabe, você viu?\n\nEu não vi sua gatinha, mas ouvi o seu miau\nQuem roubou sua gatinha\nFoi a bruxa, foi a bruxa pica-pau."],
    categoria: "Cantiga de Roda"
  },
  cantiga_39: {
    palavras_chave: ["balaio", "cabeça de balaio", "dependurado", "algodão", "costura", "coração"],
    inicio: ["Carregar algodão e segurar a costura na cintura em 'Balaio'! 🧺🧵"],
    explicacao_curta: ["Versos de arrumação e de namoricos populares de festividades caipiras:\n\nEu queria ser balaio\nBalaio eu queria ser\nPra ficar dependurado\nNa cintura de “ocê”\n\nBalaio meu bem, balaio sinhá\nBalaio do coração\nMoça que não tem balaio, sinhá\nBota a costura no chão"],
    categoria: "Cantiga de Roda"
  },
  cantiga_40: {
    palavras_chave: ["a barraquinha", "barraquinha", "sinhazinha", "comprar", "moleque", "aipim"],
    inicio: ["Comprar delícias quentes na feira em 'A Barraquinha'! 🥞🍍"],
    explicacao_curta: ["Apetitoso ritmo de quitutes populares:\n\nVem, vem, vem sinhazinha\nVem, vem para provar\nVem, vem, vem Sinhazinha\nNa barraquinha comprar\n\nPé de moleque queimado\nCana, aipim, batatinha\nÓ quanta coisa gostosa\nPara você Sinhazinha."],
    categoria: "Cantiga de Roda"
  },
  cantiga_41: {
    palavras_chave: ["boi barroso", "pitanga", "couro", "jacaré", "rastro"],
    inicio: ["Laçar o boi listrado com as cordas do jacaré em 'Boi Barroso'! 🐂🌾"],
    explicacao_curta: ["Uma cantiga de boiadas e areias do interior:\n\nEu mandei fazer um laço do couro do jacaré\nPra laçar o boi barroso, num cavalo pangaré\n\nMeu Boi Barroso, meu Boi Pitanga\nO teu lugar, ai, é lá na cana\nAdeus menina, eu vou me embora\nNão sou daqui,ai, sou lá de fora"],
    categoria: "Cantiga de Roda"
  },
  cantiga_42: {
    palavras_chave: ["o pobre cego", "pobre cego", "cego", "pedir", "ensinar", "caminho"],
    inicio: ["Pedir pão, vinho e achar o rumo dos olhos na caridade de 'O Pobre Cego'! 🥖🍷"],
    explicacao_curta: ["Tradicional balada portuguesa de acalento e respeito:\n\nMinha Mãe acorde, de tanto dormir\nVenha ver o cego, Vida Minha, cantar e pedir\nSe ele canta e pede, de-lhe pão e vinho\nMande o pobre cego, Vida Minha, seguir seu caminho\nNão quero teu pão, nem também teu vinho\nQuero só que a minha vida, Vida Minha, me ensine o caminho"],
    categoria: "Cantiga de Roda"
  },
  cantiga_43: {
    palavras_chave: ["são joão da rão", "gaita", "anjos", "terra", "baile", "xale", "parabéns", "renda", "vinténs"],
    inicio: ["Cantar no ritmo da gaita tocada na terra e nos céus em 'São João da Rão'! 🎷🎹"],
    explicacao_curta: ["Uma cantiga cheia de rimas inusitadas de baile e chuva:\n\nSão João Da Ra Rão\nTem uma gaita-ra-rai-ta\nQue quando toca-ra-roca\nBate nela\n\nTodos os anja-ra-ran-jos\nTocam gaita-ra-rai-ta\nTocam gaita-ra-rai-ta\nAqui na terra\n\nMaria tu vais ao baile, tu “leva” o xale\nQue vai chover\nE depois de madrugada, toda molhada\nTu vais morrer"],
    categoria: "Cantiga de Roda"
  },

  // --- APOIO EMOCIONAL ---
  raiva: {
    tema: "apoio_emocional",
    subtema: "raiva",
    palavras_chave: ["raiva", "bravo", "brava", "irritado", "irritada"],
    inicio: [
      "Sentir raiva acontece com todo mundo 💢",
      "Parece que algo deixou você muito irritado."
    ],
    acolhimento: [
      "Os sentimentos existem para mostrar o que estamos vivendo.",
      "Você pode sentir raiva sem machucar ninguém."
    ],
    interacao: [
      "Quer me contar o que aconteceu?",
      "Quer tentar respirar fundo comigo?"
    ],
    atividade: [
      "Desenhar o que está sentindo pode ajudar 🎨",
      "Você pode contar até 10 bem devagar."
    ],
    final: [
      "A calma vai chegando aos poucos 🌿"
    ],
    emocao: "controle_emocional",
    nivel: "leve"
  },
  alegria: {
    tema: "apoio_emocional",
    subtema: "alegria",
    palavras_chave: ["feliz", "felicidade", "alegre", "animado", "animada"],
    inicio: [
      "Que bom ver você feliz hoje 🌞",
      "A alegria deixa tudo mais colorido 🌈"
    ],
    acolhimento: [
      "Momentos felizes merecem ser celebrados.",
      "Sua felicidade pode iluminar o dia de outras pessoas."
    ],
    interacao: [
      "O que deixou você feliz hoje?",
      "Quer transformar essa alegria em um desenho?"
    ],
    atividade: [
      "Crie uma arte usando cores alegres 🎨",
      "Faça uma lista de coisas que fazem você sorrir."
    ],
    final: [
      "Espalhar alegria deixa o mundo mais bonito ✨"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  medo: {
    tema: "apoio_emocional",
    subtema: "medo",
    palavras_chave: ["medo", "assustado", "assustada", "com medo"],
    inicio: [
      "Sentir medo é algo normal 💛",
      "Às vezes algumas situações assustam mesmo."
    ],
    acolhimento: [
      "Você não está sozinho.",
      "Muitas pessoas também sentem medo em alguns momentos."
    ],
    interacao: [
      "Quer conversar sobre o que está assustando você?",
      "Quer imaginar um lugar seguro e tranquilo?"
    ],
    atividade: [
      "Desenhar o medo pode ajudar a entendê-lo 🎨",
      "Respirar devagar ajuda o corpo a relaxar."
    ],
    final: [
      "Coragem não é não sentir medo, é seguir mesmo assim 🌟"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  inseguranca: {
    tema: "apoio_emocional",
    subtema: "inseguranca",
    palavras_chave: ["inseguro", "insegura", "duvida de mim", "sem confianca", "sem confiança"],
    inicio: [
      "Às vezes a gente duvida de si mesmo 🌱",
      "Nem sempre é fácil acreditar nas próprias capacidades."
    ],
    acolhimento: [
      "Você pode aprender no seu tempo.",
      "Errar também faz parte do aprendizado."
    ],
    interacao: [
      "Quer me contar o que deixou você inseguro?",
      "Você consegue lembrar de algo que já fez bem?"
    ],
    atividade: [
      "Faça um desenho mostrando algo que você gosta em si mesmo 🎨"
    ],
    final: [
      "Cada pequeno passo já é uma conquista ✨"
    ],
    emocao: "encorajamento",
    nivel: "leve"
  },
  timidez: {
    tema: "apoio_emocional",
    subtema: "timidez",
    palavras_chave: ["timido", "timida", "vergonha", "tenho vergonha"],
    inicio: [
      "Ser tímido não é um problema 🌿",
      "Cada pessoa tem seu jeito de se expressar."
    ],
    acolhimento: [
      "Você pode falar no seu tempo.",
      "Pequenos passos também são importantes."
    ],
    interacao: [
      "Existe alguém com quem você se sente mais confortável?",
      "Quer conversar mais um pouquinho comigo?"
    ],
    atividade: [
      "Desenhe um lugar onde você se sente seguro ✨"
    ],
    final: [
      "Sua voice merece ser ouvida 💛"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  frustracao: {
    tema: "apoio_emocional",
    subtema: "frustracao",
    palavras_chave: ["frustrado", "frustrada", "nao consegui", "não consegui", "deu errado"],
    inicio: [
      "Nem sempre as coisas saem como queremos 🌧️",
      "Errar pode ser difícil às vezes."
    ],
    acolhimento: [
      "Todo aprendizado tem desafios.",
      "Você não precisa acertar tudo de primeira."
    ],
    interacao: [
      "Quer tentar de novo depois de descansar um pouco?",
      "Quer me contar o que deu errado?"
    ],
    atividade: [
      "Faça um desenho mostrando algo que você conseguiu aprender 🎨"
    ],
    final: [
      "Cada tentativa ensina algo novo 🌱"
    ],
    emocao: "encorajamento",
    nivel: "leve"
  },
  solidao: {
    tema: "apoio_emocional",
    subtema: "solidao",
    palavras_chave: ["sozinho", "sozinha", "solidao", "solidão", "sem amigos"],
    inicio: [
      "Se sentir sozinho pode ser muito difícil 💛",
      "Às vezes a gente sente falta de companhia."
    ],
    acolhimento: [
      "Você merece carinho e amizade.",
      "Seus sentimentos são importantes."
    ],
    interacao: [
      "Existe alguém de confiança com quem você gosta de conversar?",
      "Quer me contar como está se sentindo?"
    ],
    atividade: [
      "Desenhe pessoas ou lugares que fazem você se sentir bem 🌈"
    ],
    final: [
      "Conexões verdadeiras podem nascer aos poucos 🌱"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  amizade: {
    tema: "apoio_emocional",
    subtema: "amizade",
    palavras_chave: ["amizade", "amigo", "amiga", "colega"],
    inicio: [
      "Amizade é algo muito especial 💛",
      "Os amigos podem tornar os dias mais felizes."
    ],
    acolhimento: [
      "Um bom amigo escuta e respeita.",
      "Amizades verdadeiras crescem com cuidado."
    ],
    interacao: [
      "O que você mais gosta de fazer com seus amigos?",
      "Você já ajudou alguém hoje?"
    ],
    atividade: [
      "Desenhe um momento divertido com um amigo 🎨"
    ],
    final: [
      "A amizade deixa a vida mais colorida 🌈"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  respeito: {
    tema: "apoio_emocional",
    subtema: "respeito",
    palavras_chave: ["respeito", "respeitar", "tratar bem", "educacao", "educação"],
    inicio: [
      "Respeitar é cuidar das pessoas 🌿",
      "Cada pessoa merece ser tratada com atenção e carinho."
    ],
    acolhimento: [
      "As diferenças tornam o mundo mais bonito.",
      "Ouvir e compreender os outros é importante."
    ],
    interacao: [
      "Como você demonstra respeito no seu dia a dia?",
      "Você já ajudou alguém hoje?"
    ],
    atividade: [
      "Faça um desenho mostrando atitudes gentis 💛"
    ],
    final: [
      "Pequenas atitudes podem transformar o mundo ✨"
    ],
    emocao: "harmonia",
    nivel: "leve"
  },
  ansiedade: {
    tema: "apoio_emocional",
    subtema: "ansiedade",
    palavras_chave: ["ansiedade", "ansioso", "ansiosa", "preocupado", "preocupada", "nervoso", "nervosa"],
    inicio: [
      "Às vezes nosso coração fica acelerado 💛",
      "Parece que sua mente está cheia de pensamentos."
    ],
    acolhimento: [
      "Isso acontece com muitas pessoas.",
      "Você não precisa enfrentar isso sozinho."
    ],
    explicacao_curta: [
      "A ansiedade pode deixar nosso corpo e mente agitados."
    ],
    interacao: [
      "Quer respirar fundo comigo bem devagar?",
      "Quer me contar o que está preocupando você?"
    ],
    atividade: [
      "Imagine um lugar tranquilo da natureza 🌿",
      "Você pode desenhar como sua mente está se sentindo."
    ],
    final: [
      "Os sentimentos passam como nuvens no céu ☁️"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  tristeza: {
    tema: "apoio_emocional",
    subtema: "tristeza",
    palavras_chave: ["triste", "tristeza", "triste demais", "chateado", "chateada"],
    inicio: [
      "Sinto muito que você esteja triste 💛",
      "Às vezes nosso coração fica pesado."
    ],
    acolhimento: [
      "Ficar triste faz parte da vida.",
      "Seus sentimentos são importantes."
    ],
    interacao: [
      "Quer me contar o que aconteceu?",
      "Quer conversar mais um pouquinho?"
    ],
    atividade: [
      "Desenhar sentimentos pode ajudar 🎨",
      "Você pode ouvir uma música tranquila."
    ],
    final: [
      "Mesmo os dias nublados acabam passando 🌤️"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  bullying: {
    tema: "apoio_emocional",
    subtema: "bullying",
    palavras_chave: ["bullying", "zoacao", "zoando", "me xingaram", "me chamaram"],
    inicio: [
      "Ninguém merece ser tratado com desrespeito 💛"
    ],
    acolhimento: [
      "O que está acontecendo não é certo.",
      "Você merece respeito e cuidado."
    ],
    explicacao_curta: [
      "Bullying machuca sentimentos e precisa ser levado a sério."
    ],
    interacao: [
      "Existe algum adulto de confiança com quem você possa conversar?",
      "Quer me contar melhor o que aconteceu?"
    ],
    atividade: [
      "Respirar fundo pode ajudar quando o coração fica apertado 🌿"
    ],
    final: [
      "Pedir ajuda é um ato de coragem 🌱"
    ],
    emocao: "protecao",
    nivel: "medio"
  },
  solidao_avancada: {
    tema: "emocoes_avancadas",
    subtema: "solidao",
    palavras_chave: ["sozinho", "sozinha", "solidao", "sem amigos"],
    inicio: [
      "Às vezes a solidão pode deixar o coração silencioso 🌙"
    ],
    explicacao_curta: [
      "Muitas pessoas sentem solidão em alguns momentos."
    ],
    explicacao_aprofundada: [
      "Conversar, desenhar, brincar ou procurar pessoas de confiança pode ajudar a trazer acolhimento."
    ],
    curiosidade: [
      "Até momentos silenciosos podem ser preenchidos com criatividade 🎨"
    ],
    interacao: [
      "Você gostaria de conversar sobre como está se sentindo?"
    ],
    atividade: [
      "Desenhe um lugar onde você se sentiria acolhido 🌈"
    ],
    final: [
      "Você merece companhia, cuidado e escuta ✨"
    ],
    emocao: "acolhimento",
    nivel: "medio"
  },
  ciumes: {
    tema: "emocoes_avancadas",
    subtema: "ciumes",
    palavras_chave: ["ciumes", "com ciumes", "inveja"],
    inicio: [
      "Os ciúmes aparecem quando temos medo de perder atenção 💭"
    ],
    explicacao_curta: [
      "Esse sentimento pode acontecer com muitas pessoas."
    ],
    explicacao_aprofundada: [
      "Conversar com calma e entender os próprios sentimentos ajuda bastante."
    ],
    curiosidade: [
      "Os sentimentos podem mudar quando compartilhamos o que pensamos 🌿"
    ],
    interacao: [
      "Você gostaria de contar o que deixou você assim?"
    ],
    atividade: [
      "Desenhe coisas que fazem você se sentir especial ✨"
    ],
    final: [
      "Cada pessoa possui seu próprio valor 🌟"
    ],
    emocao: "reflexao",
    nivel: "medio"
  },
  culpa: {
    tema: "emocoes_avancadas",
    subtema: "culpa",
    palavras_chave: ["culpa", "me sinto culpado", "me sinto culpada"],
    inicio: [
      "Sentir culpa pode ser um sentimento difícil 🌧️"
    ],
    explicacao_curta: [
      "Às vezes erramos e aprendemos com isso."
    ],
    explicacao_aprofundada: [
      "Pedir desculpas, conversar e tentar melhorar ajuda a seguir em frente."
    ],
    curiosidade: [
      "Aprender também faz parte dos erros ✨"
    ],
    interacao: [
      "Você gostaria de falar sobre o que aconteceu?"
    ],
    atividade: [
      "Escreva ou desenhe algo que você aprendeu 🌱"
    ],
    final: [
      "As pessoas podem crescer e mudar aos poucos 🌈"
    ],
    emocao: "aprendizado",
    nivel: "medio"
  },
  saudade: {
    tema: "emocoes_avancadas",
    subtema: "saudade",
    palavras_chave: ["saudade", "sentindo falta", "com saudades"],
    inicio: [
      "A saudade aparece quando algo ou alguém faz falta 💛"
    ],
    explicacao_curta: [
      "Ela mostra que algo foi importante para você."
    ],
    explicacao_aprofundada: [
      "Lembranças, desenhos e conversas podem ajudar a guardar momentos especiais."
    ],
    curiosidade: [
      "A palavra saudade existe em português e é conhecida no mundo inteiro 🌎"
    ],
    interacao: [
      "Do que você sente mais saudade?"
    ],
    atividade: [
      "Desenhe uma lembrança feliz ✨"
    ],
    final: [
      "As boas memórias podem continuar no coração 🌈"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  decepcao: {
    tema: "emocoes_avancadas",
    subtema: "decepcao",
    palavras_chave: ["decepcao", "decepcionado", "decepcionada"],
    inicio: [
      "A decepção aparece quando algo não acontece como esperávamos 🌧️"
    ],
    explicacao_curta: [
      "Esse sentimento pode ser triste e confuso."
    ],
    explicacao_aprofundada: [
      "Com o tempo, novas experiências e conversas ajudam a entender melhor as situações."
    ],
    curiosidade: [
      "Até momentos difíceis podem ensinar algo 🌱"
    ],
    interacao: [
      "Você gostaria de contar o que aconteceu?"
    ],
    atividade: [
      "Transforme um rabisco em um desenho bonito 🎨"
    ],
    final: [
      "Novas possibilidades podem surgir depois de dias difíceis ✨"
    ],
    emocao: "superacao",
    nivel: "medio"
  },
  orgulho: {
    tema: "emocoes_avancadas",
    subtema: "orgulho",
    palavras_chave: ["orgulho", "orgulhoso", "orgulhosa"],
    inicio: [
      "Sentir orgulho pode trazer alegria e confiança 🌟"
    ],
    explicacao_curta: [
      "Reconhecer suas conquistas é importante."
    ],
    explicacao_aprofundada: [
      "Cada pequeno avanço pode mostrar o quanto você está aprendendo e crescendo."
    ],
    curiosidade: [
      "Grandes mudanças começam com pequenos passos ✨"
    ],
    interacao: [
      "Do que você sente orgulho hoje?"
    ],
    atividade: [
      "Desenhe algo que você aprendeu a fazer 🎨"
    ],
    final: [
      "Valorizar suas conquistas ajuda a fortalecer a confiança 🌈"
    ],
    emocao: "confianca",
    nivel: "leve"
  },
  vergonha: {
    tema: "emocoes_avancadas",
    subtema: "vergonha",
    palavras_chave: ["vergonha", "envergonhado", "envergonhada"],
    inicio: [
      "A vergonha pode deixar a gente mais quietinho 🌱"
    ],
    explicacao_curta: [
      "Esse sentimento acontece com muitas pessoas."
    ],
    explicacao_aprofundada: [
      "Falar aos pontos e confiar em pessoas gentis pode ajudar a diminuir a vergonha."
    ],
    curiosidade: [
      "Até artistas famosos já sentiram vergonha 🎭"
    ],
    interacao: [
      "O que faz você se sentir mais confortável?"
    ],
    atividade: [
      "Desenhe um lugar tranquilo e seguro 🌈"
    ],
    final: [
      "Você pode se expressar no seu próprio tempo ✨"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  esperanca: {
    tema: "emocoes_avancadas",
    subtema: "esperanca",
    palavras_chave: ["esperanca", "esperançoso", "esperançosa"],
    inicio: [
      "A esperança ajuda a imaginar dias melhores 🌤️"
    ],
    explicacao_curta: [
      "Ela pode trazer coragem e motivação."
    ],
    explicacao_aprofundada: [
      "Mesmo quando algo parece difícil, continuar acreditando pode ajudar a seguir em frente."
    ],
    curiosidade: [
      "Muitas histórias e músicas falam sobre esperança ✨"
    ],
    interacao: [
      "O que faz você sentir esperança?"
    ],
    atividade: [
      "Desenhe como imagina um dia feliz 🌈"
    ],
    final: [
      "Pequenas luzes podem iluminar caminhos grandes 🌟"
    ],
    emocao: "inspiracao",
    nivel: "leve"
  },
  gratidao: {
    tema: "emocoes_avancadas",
    subtema: "gratidao",
    palavras_chave: ["gratidao", "grato", "grata", "agradecido"],
    inicio: [
      "A gratidão ajuda a perceber coisas boas do dia 🌻"
    ],
    explicacao_curta: [
      "Agradecer pode fortalecer sentimentos positivos."
    ],
    explicacao_aprofundada: [
      "Pequenos momentos, amizades e conquistas podem trazer sensação de carinho e alegria."
    ],
    curiosidade: [
      "Muitas pessoas gostam de escrever coisas pelas quais são gratas ✨"
    ],
    interacao: [
      "O que deixou seu dia mais especial hoje?"
    ],
    atividade: [
      "Desenhe algo pelo qual você sente gratidão 🎨"
    ],
    final: [
      "Pequenos momentos podem ter grande valor 🌈"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  empatia: {
    tema: "emocoes_avancadas",
    subtema: "empatia",
    palavras_chave: ["empatia", "compreender os outros", "ajudar pessoas"],
    inicio: [
      "A empatia é tentar entender os sentimentos das outras pessoas 🤝"
    ],
    explicacao_curta: [
      "Ela ajuda a criar relações mais gentis."
    ],
    explicacao_aprofundada: [
      "Escutar, respeitar e acolher os sentimentos dos outros fortalece amizades e convivência."
    ],
    curiosidade: [
      "A gentileza pode melhorar o dia de alguém ✨"
    ],
    interacao: [
      "Como você ajuda alguém quando percebe que está triste?"
    ],
    atividade: [
      "Desenhe atitudes gentis entre amigos 🎨"
    ],
    final: [
      "Compreender os outros deixa o mundo mais acolhedor 🌎"
    ],
    emocao: "gentileza",
    nivel: "leve"
  },

  // --- TÉCNICAS ARTÍSTICAS ---
  o_que_e_arte: {
    tema: "artes_visuais",
    subtema: "conceitos_basicos",
    palavras_chave: ["o que é arte", "significado de arte", "definição de arte", "para que serve a arte", "o que significa arte"],
    inicio: ["Arte é tudo que a gente cria com imaginação e sentimento 🎨", "Arte é uma forma de expressar ideias, emoções e beleza ✨"],
    explicacao_curta: ["A arte pode ser pintura, desenho, música, dança, teatro, escultura, fotografia e muito mais!"],
    explicacao_aprofundada: ["Desde as cavernas, os humanos fazem arte para contar histórias, registrar momentos, sentir alegria e compartilhar sentimentos. Não existe jeito certo ou errado de fazer arte – o importante é criar com o coração."],
    curiosidade: ["As pinturas rupestres nas cavernas têm mais de 30 mil anos e são consideradas as primeiras formas de arte da humanidade 🏺"],
    interacao: ["Que tipo de arte você mais gosta de fazer ou ver? 🖌️", "Se você pudesse criar qualquer obra de arte, o que seria?"],
    atividade: ["Desenhe algo que represente sua alegria hoje 🌈", "Crie uma pequena escultura usando massa de modelagem ou argila."],
    final: ["A arte está em toda parte – em um desenho, uma música, uma dança ou até na natureza 🌻"],
    emocao: "criatividade",
    nivel: "leve"
  },
  desenho_basico: {
    tema: "arte_tecnicas",
    subtema: "desenho_basico",
    palavras_chave: ["como desenhar", "desenhar", "aprender desenho", "técnica desenho", "dica desenho"],
    inicio: ["Todo desenho começa com formas simples 🎨", "Desenhar é como montar um quebra-cabeça de formas ✨"],
    explicacao_curta: ["Círculos, quadrados e triângulos ajudam a criar muitos desenhos."],
    explicacao_aprofundada: ["Muitos artistas começam desenhando formas básicas antes de adicionar detalhes. Isso ajuda o desenho a ficar mais organizado."],
    curiosidade: ["Até grandes artistas usam formas simples para começar seus desenhos 🖍️"],
    interacao: ["Quer tentar desenhar um gatinho comigo? 🐱", "Qual animal você gostaria de aprender a desenhar?"],
    atividade: ["Desenhe um círculo para a cabeça e dois triângulos para as orelhas ✏️", "Crie um personagem usando apenas formas geométricas."],
    final: ["Cada desenho começa com um pequeno traço 🌈"],
    emocao: "criatividade",
    nivel: "leve"
  },
  pintura_digital: {
    tema: "arte_tecnicas",
    subtema: "pintura_digital",
    palavras_chave: ["pintura digital", "desenho no computador", "tablet", "app desenho", "programa desenho"],
    inicio: ["Pintura digital é criar arte usando tecnologia 💻🎨", "Desenhar no tablet pode ser muito divertido ✨"],
    explicacao_curta: ["A pintura digital usa aplicativos e telas para desenhar e colorir."],
    explicacao_aprofundada: ["Muitos artistas usam computadores e tablets para criar ilustrações, animações e pinturas digitais."],
    curiosidade: ["Existem aplicativos gratuitos para desenhar digitalmente 📱"],
    interacao: ["Você prefere desenhar no papel ou no tablet?", "Qual ferramenta digital você gostaria de experimentar?"],
    atividade: ["Crie um desenho usando apenas formas simples no computador 💻", "Experimente desenhar usando diferentes pincéis digitais."],
    final: ["Arte pode nascer tanto no papel quanto na tela 🌟"],
    emocao: "exploracao",
    nivel: "leve"
  },
  aquarela: {
    tema: "arte_tecnicas",
    subtema: "aquarela",
    palavras_chave: ["aquarela", "tinta aguada", "pintura molhada", "efeito molhado"],
    inicio: ["A aquarela parece uma dança entre água e tinta 💧🎨", "As cores da aquarela ficam suaves e leves 🌈"],
    explicacao_curta: ["A aquarela mistura tinta e água para criar efeitos delicados."],
    explicacao_aprofundada: ["A quantidade de água muda o jeito que a tinta se espalha no papel, criando manchas e misturas bonitas."],
    curiosidade: ["O papel usado na aquarela costuma ser mais grosso para aguentar a água."],
    interacao: ["Você gostaria de pintar uma paisagem com aquarela?", "Qual cor você mais usaria in uma pintura aquarelada?"],
    atividade: ["Experimente fazer um degradê usando bastante água 🌊", "Misture duas cores e observe a transformação."],
    final: ["Na aquarela, as cores parecem flutuar no papel ☁️"],
    emocao: "leveza",
    nivel: "leve"
  },
  giz_pastel: {
    tema: "arte_tecnicas",
    subtema: "giz_pastel",
    palavras_chave: ["giz pastel", "pastel seco", "pintura pastel", "giz de cera"],
    inicio: ["O giz pastel cria desenhos macios e coloridos 🧸🎨", "As cores do pastel podem parecer fumaça colorida ✨"],
    explicacao_curta: ["O giz pastel é uma técnica que permite esfumar e misturar cores facilmente."],
    explicacao_aprofundada: ["Com o dedo ou papel, é possível espalhar o pastel e criar sombras suaves e efeitos artísticos."],
    curiosidade: ["Muitos artistas famosos usaram giz pastel em retratos e paisagens."],
    interacao: ["Você gostaria de desenhar um pôr do sol com giz pastel?", "Qual cor pastel você mais gosta?"],
    atividade: ["Experimente esfumar uma cor usando o dedo 🌈", "Desenhe nuvens usando movimentos suaves."],
    final: ["As cores do pastel deixam os desenhos cheios de textura 🌟"],
    emocao: "criatividade",
    nivel: "leve"
  },
  colagem: {
    tema: "arte_tecnicas",
    subtema: "colagem",
    palavras_chave: ["colagem", "collage", "recorte", "cola", "papel colorido", "técnica mista"],
    inicio: ["Colagem é a arte de juntar pedacinhos para criar algo novo ✂️", "Com papéis e recortes podemos inventar mundos inteiros 🌎"],
    explicacao_curta: ["A colagem mistura imagens, papéis e materiais diferentes em uma mesma arte."],
    explicacao_aprofundada: ["Artistas usam recortes de revistas, tecidos, folhas e outros materiais para criar composições criativas."],
    curiosidade: ["A colagem pode reutilizar materiais e ajudar o planeta ♻️"],
    interacao: ["Que personagem você criaria com recortes?", "Você gosta de usar papéis coloridos nas suas artes?"],
    atividade: ["Crie um monstrinho usando recortes 👾", "Monte uma paisagem usando pedaços de revista."],
    final: ["Na colagem, pequenos pedaços viram grandes ideias ✨"],
    emocao: "diversao",
    nivel: "leve"
  },
  origami: {
    tema: "tecnicas_artisticas",
    subtema: "origami",
    palavras_chave: ["origami", "dobradura japonesa", "dobrar papel"],
    inicio: ["O origami transforma papel em formas incríveis 🦢"],
    explicacao_curta: ["Essa técnica usa dobras para criar figuras."],
    explicacao_aprofundada: ["Com paciência e criatividade, o papel pode virar animais, flores e objetos."],
    curiosidade: ["O origami nasceu no Japão 🇯🇵"],
    interacao: ["Que animal você gostaria de criar com papel?"],
    atividade: ["Faça uma dobradura simples usando papel colorido ✂️"],
    final: ["Uma folha pode esconder muitas possibilidades ✨"],
    emocao: "criatividade",
    nivel: "leve"
  },
  mosaico: {
    tema: "tecnicas_artisticas",
    subtema: "mosaico",
    palavras_chave: ["mosaico", "arte mosaico"],
    inicio: ["O mosaico cria imagens usando pequenas peças coloridas 🟦"],
    explicacao_curta: ["As figuras são montadas juntando pedacinhos."],
    explicacao_aprofundada: ["Os artistas usam pedras, papéis, azulejos e outros materiais para formar desenhos."],
    curiosidade: ["Muitos mosaicos antigos decoravam igrejas e construções ✨"],
    interacao: ["Que figura você montaria usando pedacinhos?"],
    atividade: ["Monte desenhos com recortes coloridos ✂️"],
    final: ["Pequenas partes podem formar grandes imagens 🌈"],
    emocao: "organizacao",
    nivel: "leve"
  },
  xilogravura: {
    tema: "tecnicas_artisticas",
    subtema: "xilogravura",
    palavras_chave: ["xilogravura", "gravura madeira", "cordel xilogravura"],
    inicio: ["A xilogravura cria imagens usando madeira 🪵"],
    explicacao_curta: ["Os desenhos são gravados e depois impressos no papel."],
    explicacao_aprofundada: ["Essa técnica aparece muito em capas de literatura de cordel."],
    curiosidade: ["A xilogravura possui linhas fortes e marcantes ✨"],
    interacao: ["Você gosta de desenhos com contrastes fortes?"],
    atividade: ["Crie desenhos usando carimbos caseiros 🎨"],
    final: ["A arte também pode nascer da impressão 🌟"],
    emocao: "criatividade",
    nivel: "leve"
  },
  gravura: {
    tema: "tecnicas_artisticas",
    subtema: "gravura",
    palavras_chave: ["gravura", "arte impressa"],
    inicio: ["A gravura permite repetir imagens muitas vezes 🖼️"],
    explicacao_curta: ["Os artistas criam matrizes para imprimir desenhos."],
    explicacao_aprofundada: ["A imagem pode ser transferida para papel usando tinta e pressão."],
    curiosidade: ["Existem vários tipos diferentes de gravura ✨"],
    interacao: ["Você gostaria de criar seus próprios carimbos?"],
    atividade: ["Faça impressões usando folhas ou objetos 🍃"],
    final: ["Uma imagem pode ganhar várias cópias artísticas 🌈"],
    emocao: "exploracao",
    nivel: "leve"
  },
  escultura_argila: {
    tema: "tecnicas_artisticas",
    subtema: "escultura_argila",
    palavras_chave: ["argila", "escultura argila", "modelagem"],
    inicio: ["A argila permite modelar formas com as mãos ✋"],
    explicacao_curta: ["Ela pode virar personagens, vasos e esculturas."],
    explicacao_aprofundada: ["Os artistas apertam, moldam e criam formas usando materiais macios."],
    curiosidade: ["Muitas culturas antigas criavam objetos de argila 🏺"],
    interacao: ["O que você modelaria usando massinha?"],
    atividade: ["Crie animais usando argila ou massinha 🎨"],
    final: ["As mãos também podem desenhar no espaço ✨"],
    emocao: "criatividade",
    nivel: "leve"
  },
  papietagem: {
    tema: "tecnicas_artisticas",
    subtema: "papietagem",
    palavras_chave: ["papietagem", "papel mache", "papel colado"],
    inicio: ["A papietagem usa papel para criar esculturas 📜"],
    explicacao_curta: ["Os pedaços de papel são colados em camadas."],
    explicacao_aprofundada: ["Depois de seco, o material fica firme e pode ser pintado."],
    curiosidade: ["Máscaras e bonecos podem ser feitos com papietagem 🎭"],
    interacao: ["Que personagem você criaria?"],
    atividade: ["Cubra um balão com papel e cola ✂️"],
    final: ["O papel pode virar esculturas surpreendentes 🌟"],
    emocao: "imaginacao",
    nivel: "leve"
  },
  stencil: {
    tema: "tecnicas_artisticas",
    subtema: "stencil",
    palavras_chave: ["stencil", "molde pintura"],
    inicio: ["O stencil usa moldes para criar desenhos repetidos 🎨"],
    explicacao_curta: ["Os artistas pintam sobre formas vazadas."],
    explicacao_aprofundada: ["Essa técnica ajuda a criar imagens rápidas e organizadas."],
    curiosidade: ["O stencil aparece muito na arte urbana 🌆"],
    interacao: ["Que forma você repetiria em um mural?"],
    atividade: ["Crie moldes simples com papel ✂️"],
    final: ["Os moldes podem ajudar a espalhar criatividade ✨"],
    emocao: "organizacao",
    nivel: "leve"
  },
  arte_reciclavel: {
    tema: "tecnicas_artisticas",
    subtema: "arte_reciclavel",
    palavras_chave: ["arte reciclavel", "arte com reciclados", "reciclagem artistica"],
    inicio: ["A arte reciclável transforma objetos usados em criatividade ♻️"],
    explicacao_curta: ["Materiais reciclados podem virar brinquedos e esculturas."],
    explicacao_aprofundada: ["Caixas, garrafas e tampinhas ganham novos usos através da arte."],
    curiosidade: ["Muitos artistas usam materiais recicláveis em suas obras 🌍"],
    interacao: ["Que objeto reciclado você transformaria?"],
    atividade: ["Crie personagens usando embalagens vazias 🎨"],
    final: ["A criatividade também ajuda a cuidar do planeta 🌿"],
    emocao: "consciencia",
    nivel: "leve"
  },

  // --- ARTISTAS UNIVERSAIS ---
  leonardo_da_vinci: {
    tema: "artistas_universais",
    subtema: "leonardo_da_vinci",
    palavras_chave: ["leonardo", "leonardo da vinci", "mona lisa"],
    inicio: ["Leonardo da Vinci adorava arte, ciência e invenções 🎨"],
    explicacao_curta: ["Ele foi um artista italiano muito curioso e criativo."],
    explicacao_aprofundada: ["Leonardo estudava pintura, corpo humano, máquinas e natureza ao mesmo tempo."],
    curiosidade: ["A Mona Lisa é uma das pinturas mais famosas do mundo 🖼️"],
    interacao: ["Você gostaria de inventar máquinas como Leonardo?"],
    atividade: ["Desenhe uma invenção imaginária ✏️"],
    final: ["Arte e curiosidade podem caminhar juntas 🌟"],
    emocao: "descoberta",
    nivel: "leve",
    ano_nascimento: "1452",
    ano_falecimento: "1519",
    local_nascimento: "Vinci, Itália",
    o_que_ele_fez: [
      "Pintou a Mona Lisa, o retrato mais famoso do mundo.",
      "Criou a pintura A Última Ceia, que mostra Jesus e seus discípulos.",
      "Desenhou máquinas voadoras, paraquedas e tanques de guerra – tudo no papel!",
      "Estudou o corpo humano e fez desenhos incríveis de órgãos e músculos.",
      "Inventou pontes, canais e mecanismos para a cidade de Florença."
    ],
    onde_nasceu_resposta: "Leonardo da Vinci nasceu in Vinci, uma cidade na Itália, em 1452.",
    ano_nascimento_resposta: "Leonardo da Vinci nasceu no ano de 1452.",
    ano_falecimento_resposta: "Leonardo da Vinci faleceu no ano de 1519."
  },
  michelangelo: {
    tema: "artistas_universais",
    subtema: "michelangelo",
    palavras_chave: ["michelangelo", "capela sistina"],
    inicio: ["Michelangelo criava esculturas e pinturas gigantes ✨"],
    explicacao_curta: ["Ele pintou o teto da Capela Sistina."],
    explicacao_aprofundada: ["Suas obras mostram detalhes do corpo humano e muita expressão."],
    curiosidade: ["Michelangelo também trabalhava com esculturas em mármore 🪨"],
    interacao: ["Você gostaria de pintar um teto enorme?"],
    atividade: ["Desenhe personagens olhando para cima 🎨"],
    final: ["Grandes obras podem nascer de muita dedicação 🌍"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1475",
    ano_falecimento: "1564",
    local_nascimento: "Caprese, Itália",
    o_que_ele_fez: [
      "Pintou o teto da Capela Sistina, no Vaticano.",
      "Esculpiu a estátua de Davi, um dos símbolos do Renascimento.",
      "Projetou a cúpula da Basílica de São Pedro.",
      "Criou a escultura Pietà, que mostra Maria com Jesus no colo."
    ],
    onde_nasceu_resposta: "Michelangelo nasceu em Caprese, na Itália, em 1475.",
    ano_nascimento_resposta: "Michelangelo nasceu no ano de 1475.",
    ano_falecimento_resposta: "Michelangelo faleceu no ano de 1564."
  },
  claude_monet: {
    tema: "artistas_universais",
    subtema: "claude_monet",
    palavras_chave: ["monet", "claude monet", "impressionismo"],
    inicio: ["Monet adorava pintar luz e natureza 🌿"],
    explicacao_curta: ["Ele foi um dos artistas mais importantes do impressionismo."],
    explicacao_aprofundada: ["Monet pintava paisagens observando mudanças de luz e cor."],
    curiosidade: ["Ele pintou várias vezes o mesmo jardim em horários diferentes 🌤️"],
    interacao: ["Você já percebeu como o céu muda durante o dia?"],
    atividade: ["Pinte uma paisagem usando pinceladas leves 🎨"],
    final: ["A luz pode transformar completamente uma pintura ✨"],
    emocao: "leveza",
    nivel: "leve",
    ano_nascimento: "1840",
    ano_falecimento: "1926",
    local_nascimento: "Paris, França",
    o_que_ele_fez: [
      "Criou o movimento impressionista, pintando ao ar livre.",
      "Pintou a série 'Nenúfares', com mais de 250 obras de seu jardim em Giverny.",
      "Registrou a Catedral de Rouen em diferentes luzes."
    ],
    onde_nasceu_resposta: "Claude Monet nasceu em Paris, França, em 1840.",
    ano_nascimento_resposta: "Claude Monet nasceu no ano de 1840.",
    ano_falecimento_resposta: "Claude Monet faleceu no ano de 1926."
  },
  vincent_van_gogh: {
    tema: "artistas_universais",
    subtema: "vincent_van_gogh",
    palavras_chave: ["van gogh", "noite estrelada"],
    inicio: ["Van Gogh pintava usando cores fortes e movimento 🌙"],
    explicacao_curta: ["Suas pinturas possuem pinceladas marcantes."],
    explicacao_aprofundada: ["Ele usava cores intensas para mostrar emoções e energia nas obras."],
    curiosidade: ["A Noite Estrelada é uma de suas pinturas mais famosas ⭐"],
    interacao: ["Que cores você usaria para pintar a noite?"],
    atividade: ["Faça espirais coloridas inspiradas no céu 🎨"],
    final: ["As cores podem mostrar sentimentos profundos ✨"],
    emocao: "emocao",
    nivel: "leve",
    ano_nascimento: "1853",
    ano_falecimento: "1890",
    local_nascimento: "Zundert, Países Baixos",
    o_que_ele_fez: [
      "Pintou 'A Noite Estrelada', uma das obras mais famosas do mundo.",
      "Criou mais de 2.000 obras, incluindo 'Girassóis' e 'Quarto em Arles'.",
      "Desenvolveu um estilo único com pinceladas grossas e cores vibrantes."
    ],
    onde_nasceu_resposta: "Van Gogh nasceu em Zundert, nos Países Baixos, em 1853.",
    ano_nascimento_resposta: "Van Gogh nasceu no ano de 1853.",
    ano_falecimento_resposta: "Van Gogh faleceu no ano de 1890."
  },
  pablo_picasso: {
    tema: "artistas_universais",
    subtema: "pablo_picasso",
    palavras_chave: ["picasso", "cubismo"],
    inicio: ["Picasso gostava de reinventar as formas 🎭"],
    explicacao_curta: ["Ele ajudou a criar o cubismo."],
    explicacao_aprofundada: ["Suas obras mostram objetos e rostos vistos de vários ângulos ao mesmo tempo."],
    curiosidade: ["Picasso começou a desenhar ainda criança ✏️"],
    interacao: ["Você conseguiria desenhar um rosto geométrico?"],
    atividade: ["Monte um desenho usando triângulos e quadrados 🟦"],
    final: ["A arte pode mostrar o mundo de formas diferentes 🌈"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1881",
    ano_falecimento: "1973",
    local_nascimento: "Málaga, Espanha",
    o_que_ele_fez: [
      "Criou o cubismo junto com Georges Braque.",
      "Pintou 'Guernica', uma obra contra a guerra.",
      "Produziu mais de 50.000 obras, incluindo pinturas, esculturas e cerâmicas."
    ],
    onde_nasceu_resposta: "Pablo Picasso nasceu em Málaga, na Espanha, em 1881.",
    ano_nascimento_resposta: "Picasso nasceu no ano de 1881.",
    ano_falecimento_resposta: "Picasso faleceu no ano de 1973."
  },
  salvador_dali: {
    tema: "artistas_universais",
    subtema: "salvador_dali",
    palavras_chave: ["dali", "salvador dali", "relogio derretendo"],
    inicio: ["Dalí criava pinturas parecidas com sonhos 🌙"],
    explicacao_curta: ["Suas obras misturam imaginação e realidade."],
    explicacao_aprofundada: ["Ele pintava objetos estranhos e cenários inesperados."],
    curiosidade: ["Os relógios derretendo ficaram famosos no surrealismo ⏰"],
    interacao: ["Que sonho você transformaria em desenho?"],
    atividade: ["Misture objetos diferentes em uma mesma cena 🎨"],
    final: ["A imaginação pode criar mundos surpreendentes ✨"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1904",
    ano_falecimento: "1989",
    local_nascimento: "Figueres, Espanha",
    o_que_ele_fez: [
      "Pintou 'A Persistência da Memória', com os relógios derretendo.",
      "Foi um dos principais artistas do surrealismo.",
      "Criou esculturas, filmes e até joias."
    ],
    onde_nasceu_resposta: "Salvador Dalí nasceu em Figueres, na Espanha, em 1904.",
    ano_nascimento_resposta: "Dalí nasceu no ano de 1904.",
    ano_falecimento_resposta: "Dalí faleceu no ano de 1989."
  },
  frida_kahlo: {
    tema: "artistas_universais",
    subtema: "frida_kahlo",
    palavras_chave: ["frida kahlo", "frida"],
    inicio: ["Frida Kahlo pintava sentimentos e histórias pessoais 🌺"],
    explicacao_curta: ["Suas obras mostram identidade, emoções e cultura."],
    explicacao_aprofundada: ["Frida utilizava cores fortes, flores e elementos da cultura mexicana."],
    curiosidade: ["Ela fez muitos autorretratos 🎨"],
    interacao: ["O que você desenharia sobre sua própria vida?"],
    atividade: ["Crie um autorretrato usando cores vibrantes 🌈"],
    final: ["A arte também pode contar nossa própria história ✨"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1907",
    ano_falecimento: "1954",
    local_nascimento: "Coyoacán, México",
    o_que_ele_fez: [
      "Pintou muitos autorretratos que mostravam sua força e sentimentos.",
      "Usou símbolos da cultura mexicana, como macacos, espinhos e flores.",
      "Sua obra 'As Duas Fridas' mostra duas versões de si mesma."
    ],
    onde_nasceu_resposta: "Frida Kahlo nasceu em Coyoacán, no México, em 1907.",
    ano_nascimento_resposta: "Frida Kahlo nasceu no ano de 1907.",
    ano_falecimento_resposta: "Frida Kahlo faleceu no ano de 1954."
  },
  wassily_kandinsky: {
    tema: "artistas_universais",
    subtema: "wassily_kandinsky",
    palavras_chave: ["kandinsky", "arte abstrata"],
    inicio: ["Kandinsky usava formas e cores para criar emoções 🔵"],
    explicacao_curta: ["Ele foi um dos pioneiros da arte abstrata."],
    explicacao_aprofundada: ["Suas pinturas não mostravam objetos reais, mas sentimentos através das cores."],
    curiosidade: ["Kandinsky acreditava que cores podiam parecer música 🎶"],
    interacao: ["Que emoção combina com a cor azul para você?"],
    atividade: ["Crie arte usando apenas círculos e linhas 🎨"],
    final: ["As formas também podem transmitir sentimentos ✨"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1866",
    ano_falecimento: "1944",
    local_nascimento: "Moscou, Rússia",
    o_que_ele_fez: [
      "Foi um dos primeiros artistas a pintar arte abstrata.",
      "Escreveu um livro importante chamado 'Do Espiritual na Arte'.",
      "Acreditava que cores e formas podiam criar uma 'sinfonia visual'."
    ],
    onde_nasceu_resposta: "Wassily Kandinsky nasceu em Moscou, na Rússia, em 1866.",
    ano_nascimento_resposta: "Kandinsky nasceu no ano de 1866.",
    ano_falecimento_resposta: "Kandinsky faleceu no ano de 1944."
  },
  andy_warhol: {
    tema: "artistas_universais",
    subtema: "andy_warhol",
    palavras_chave: ["warhol", "pop art"],
    inicio: ["Andy Warhol transformava imagens populares in arte 🌟"],
    explicacao_curta: ["Ele foi um dos principais artistas da pop art."],
    explicacao_aprofundada: ["Warhol repetia imagens coloridas inspiradas em objetos e celebridades."],
    curiosidade: ["Latas e objetos do cotidiano apareciam em suas obras 🥫"],
    interacao: ["Que objeto comum você transformaria em arte?"],
    atividade: ["Repita o mesmo desenho usando cores diferentes 🎨"],
    final: ["Até objetos simples podem virar arte ✨"],
    emocao: "exploracao",
    nivel: "leve",
    ano_nascimento: "1928",
    ano_falecimento: "1987",
    local_nascimento: "Pittsburgh, EUA",
    o_que_ele_fez: [
      "Criou a famosa série de latas de sopa Campbell.",
      "Pintou retratos de celebridades como Marilyn Monroe.",
      "Fundou a The Factory, um estúdio que reunia artistas e músicos."
    ],
    onde_nasceu_resposta: "Andy Warhol nasceu em Pittsburgh, nos Estados Unidos, em 1928.",
    ano_nascimento_resposta: "Warhol nasceu no ano de 1928.",
    ano_falecimento_resposta: "Warhol faleceu no ano de 1987."
  },
  yayoi_kusama: {
    tema: "artistas_universais",
    subtema: "yayoi_kusama",
    palavras_chave: ["kusama", "bolinhas"],
    inicio: ["Yayoi Kusama ficou famosa por suas bolinhas coloridas 🔴"],
    explicacao_curta: ["Ela cria instalações cheias de cores e padrões."],
    explicacao_aprofundada: ["Suas obras misturam espelhos, luzes e formas repetidas."],
    curiosidade: ["Algumas salas de Kusama parecem infinitas ✨"],
    interacao: ["Você gosta de desenhos com padrões repetidos?"],
    atividade: ["Cubra uma folha com bolinhas coloridas 🌈"],
    final: ["Padrões simples podem criar mundos incríveis 🌟"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1929",
    ano_falecimento: "",
    local_nascimento: "Matsumoto, Japão",
    o_que_ele_fez: [
      "Criou as famosas 'salas infinitas' com espelhos e luzes.",
      "Pintou abóboras com bolinhas, que se tornaram sua marca registrada.",
      "Expôs suas obras nos maiores museus do mundo."
    ],
    onde_nasceu_resposta: "Yayoi Kusama nasceu em Matsumoto, no Japão, em 1929.",
    ano_nascimento_resposta: "Yayoi Kusama nasceu no ano de 1929."
  },
  raphael: {
    tema: "artistas_universais",
    subtema: "raphael",
    palavras_chave: ["raphael", "rafael"],
    inicio: ["Raphael criava pinturas suaves e equilibradas 🎨"],
    explicacao_curta: ["Ele foi um importante artista do Renascimento."],
    explicacao_aprofundada: ["Suas obras mostram harmonia, delicadeza e personagens bem organizados."],
    curiosidade: ["Raphael gostava de pintar cenas calmas e detalhadas ✨"],
    interacao: ["Você prefere desenhos cheios de detalhes ou mais simples?"],
    atividade: ["Desenhe pessoas formando uma cena tranquila ✏️"],
    final: ["Equilíbrio e suavidade também fazem parte da arte 🌈"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1483",
    ano_falecimento: "1520",
    local_nascimento: "Urbino, Itália",
    o_que_ele_fez: [
      "Pintou a Escola de Atenas, com grandes filósofos da Grécia Antiga.",
      "Ficou conhecido por suas Madonas, paintings da mãe de Jesus.",
      "Trabalhou como arquiteto para o Papa no Vaticano."
    ],
    onde_nasceu_resposta: "Raphael nasceu em Urbino, na Itália, em 1483.",
    ano_nascimento_resposta: "Raphael nasceu no ano de 1483.",
    ano_falecimento_resposta: "Raphael faleceu no ano de 1520."
  },
  caravaggio: {
    tema: "artistas_universais",
    subtema: "caravaggio",
    palavras_chave: ["caravaggio", "luz e sombra"],
    inicio: ["Caravaggio usava luz forte para destacar cenas 🔦"],
    explicacao_curta: ["Suas pinturas possuem contrastes marcantes entre luz e sombra."],
    explicacao_aprofundada: ["Ele criava efeitos dramáticos que davam intensidade às obras."],
    curiosidade: ["As pinturas parecem iluminadas por uma única luz ✨"],
    interacao: ["Você já observou sombras em um quarto escuro?"],
    atividade: ["Faça um desenho usando partes claras e escuras 🎨"],
    final: ["Luz e sombra podem mudar completamente uma imagem 🌙"],
    emocao: "misterio",
    nivel: "leve",
    ano_nascimento: "1571",
    ano_falecimento: "1610",
    local_nascimento: "Milão, Itália",
    o_que_ele_fez: [
      "Usou a técnica do chiaroscuro (forte contraste de luz e sombra).",
      "Pintou cenas bíblicas como 'A Vocação de São Mateus'.",
      "Suas obras têm um realismo intenso e dramático."
    ],
    onde_nasceu_resposta: "Caravaggio nasceu em Milão, na Itália, em 1571.",
    ano_nascimento_resposta: "Caravaggio nasceu no ano de 1571.",
    ano_falecimento_resposta: "Caravaggio faleceu no ano de 1610."
  },
  rembrandt: {
    tema: "artistas_universais",
    subtema: "rembrandt",
    palavras_chave: ["rembrandt"],
    inicio: ["Rembrandt gostava de pintar emoções humanas 🎭"],
    explicacao_curta: ["Ele usava luz e sombra para criar profundidade."],
    explicacao_aprofundada: ["Muitos retratos de Rembrandt parecem vivos e expressivos."],
    curiosidade: ["Ele fez muitos autorretratos ao longo da vida ✨"],
    interacao: ["Que emoção você desenharia em um rosto?"],
    atividade: ["Crie expressões diferentes em personagens 😊😮😢"],
    final: ["A arte pode mostrar sentimentos sem palavras 🌟"],
    emocao: "emocao",
    nivel: "leve",
    ano_nascimento: "1606",
    ano_falecimento: "1669",
    local_nascimento: "Leiden, Países Baixos",
    o_que_ele_fez: [
      "Pintou 'A Ronda Noturna', uma obra cheia de movimento.",
      "Fez mais de 90 autorretratos ao longo da vida.",
      "Dominou o uso de luz e sombra para dar emoção aos rostos."
    ],
    onde_nasceu_resposta: "Rembrandt nasceu em Leiden, nos Países Baixos, em 1606.",
    ano_nascimento_resposta: "Rembrandt nasceu no ano de 1606.",
    ano_falecimento_resposta: "Rembrandt faleceu no ano de 1669."
  },
  vermeer: {
    tema: "artistas_universais",
    subtema: "vermeer",
    palavras_chave: ["vermeer"],
    inicio: ["Vermeer pintava cenas tranquilas do cotidiano 🕯️"],
    explicacao_curta: ["Suas obras possuem luz suave e muitos detalhes."],
    explicacao_aprofundada: ["Ele mostrava momentos simples como leitura, música e silêncio."],
    curiosidade: ["A luz das janelas aparece bastante em suas pinturas ☀️"],
    interacao: ["Que momento tranquilo você gostaria de desenhar?"],
    atividade: ["Pinte uma cena calma dentro de casa 🎨"],
    final: ["Até momentos simples podem virar arte ✨"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1632",
    ano_falecimento: "1675",
    local_nascimento: "Delft, Países Baixos",
    o_que_ele_fez: [
      "Pintou 'Moça com Brinco de Pérola', conhecida como a Mona Lisa holandesa.",
      "Registrou cenas domésticas com luz suave e cores harmoniosas.",
      "Deixou apenas cerca de 35 pinturas, todas de altíssima qualidade."
    ],
    onde_nasceu_resposta: "Vermeer nasceu em Delft, nos Países Baixos, em 1632.",
    ano_nascimento_resposta: "Vermeer nasceu no ano de 1632.",
    ano_falecimento_resposta: "Vermeer faleceu no ano de 1675."
  },
  edgar_degas: {
    tema: "artistas_universais",
    subtema: "edgar_degas",
    palavras_chave: ["degas", "bailarina"],
    inicio: ["Degas adorava mostrar movimento nas pinturas 🩰"],
    explicacao_curta: ["Ele ficou famoso por retratar bailarinas."],
    explicacao_aprofundada: ["Suas obras mostram cenas do cotidiano e movimentos delicados."],
    curiosidade: ["Degas observava ensaios de dança para criar suas pinturas 🎶"],
    interacao: ["Você gosta de desenhar pessoas in movimento?"],
    atividade: ["Faça linhas rápidas mostrando alguém dançando ✏️"],
    final: ["A arte também pode capturar movimento 🌈"],
    emocao: "leveza",
    nivel: "leve",
    ano_nascimento: "1834",
    ano_falecimento: "1917",
    local_nascimento: "Paris, França",
    o_que_ele_fez: [
      "Pintou centenas de cenas de bailarinas, ensaios e apresentações.",
      "Também fez esculturas, como 'Pequena Dançarina de Quatorze Anos'.",
      "Experimentou com pastel e técnicas de captura de movimento."
    ],
    onde_nasceu_resposta: "Edgar Degas nasceu em Paris, França, em 1834.",
    ano_nascimento_resposta: "Degas nasceu no ano de 1834.",
    ano_falecimento_resposta: "Degas faleceu no ano de 1917."
  },
  paul_cezanne: {
    tema: "artistas_universais",
    subtema: "paul_cezanne",
    palavras_chave: ["cezanne"],
    inicio: ["Cézanne gostava de simplificar formas 🍎"],
    explicacao_curta: ["Ele ajudou a abrir caminhos para a arte moderna."],
    explicacao_aprofundada: ["Suas pinturas mostram objetos usando formas geométricas simples."],
    curiosidade: ["Cézanne pintava muitas frutas e paisagens 🎨"],
    interacao: ["Você consegue transformar objetos em círculos e quadrados?"],
    atividade: ["Desenhe frutas usando formas geométricas 🔺"],
    final: ["Formas simples podem criar grandes ideias ✨"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1839",
    ano_falecimento: "1906",
    local_nascimento: "Aix-en-Provence, França",
    o_que_ele_fez: [
      "Influenciou o cubismo e a arte moderna com suas formas geométricas.",
      "Pintou várias versões da Montanha Sainte-Victoire.",
      "Foi chamado de 'pai da arte moderna' por artistas como Picasso."
    ],
    onde_nasceu_resposta: "Paul Cézanne nasceu em Aix-en-Provence, na França, em 1839.",
    ano_nascimento_resposta: "Cézanne nasceu no ano de 1839.",
    ano_falecimento_resposta: "Cézanne faleceu no ano de 1906."
  },
  georges_braque: {
    tema: "artistas_universais",
    subtema: "georges_braque",
    palavras_chave: ["braque", "cubismo"],
    inicio: ["Braque explorava formas geométricas na pintura 🟦"],
    explicacao_curta: ["Ele trabalhou junto com Picasso no cubismo."],
    explicacao_aprofundada: ["Suas obras mostram objetos divididos em partes e ângulos."],
    curiosidade: ["O cubismo mudou a maneira de representar objetos ✨"],
    interacao: ["Você gostaria de montar um desenho quebrado em formas?"],
    atividade: ["Recorte formas geométricas e monte figuras 🎨"],
    final: ["A arte pode reinventar a maneira de enxergar 🌈"],
    emocao: "exploracao",
    nivel: "leve",
    ano_nascimento: "1882",
    ano_falecimento: "1963",
    local_nascimento: "Argenteuil, França",
    o_que_ele_fez: [
      "Desenvolveu o cubismo ao lado de Picasso.",
      "Usou letras e números em suas pinturas, inovando na arte.",
      "Criou a técnica de colagem com papéis recortados."
    ],
    onde_nasceu_resposta: "Georges Braque nasceu em Argenteuil, na França, em 1882.",
    ano_nascimento_resposta: "Braque nasceu no ano de 1882.",
    ano_falecimento_resposta: "Braque faleceu no ano de 1963."
  },
  rene_magritte: {
    tema: "artistas_universais",
    subtema: "rene_magritte",
    palavras_chave: ["magritte"],
    inicio: ["Magritte criava imagens curiosas e misteriosas 🎩"],
    explicacao_curta: ["Ele misturava objetos comuns de maneiras inesperadas."],
    explicacao_aprofundada: ["Suas obras fazem as pessoas observar e pensar sobre a realidade."],
    curiosidade: ["Muitas pinturas de Magritte parecem enigmas 🧩"],
    interacao: ["Que objetos estranhos você juntaria em um desenho?"],
    atividade: ["Misture céu, objetos e personagens em uma cena surreal 🎨"],
    final: ["A imaginação pode transformar o comum em surpreendente ✨"],
    emocao: "misterio",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1967",
    local_nascimento: "Lessines, Bélgica",
    o_que_ele_fez: [
      "Pintou 'A Traição das Imagens', com um cachimbo escrito 'Isto não é um cachimbo'.",
      "Criou cenas com homens de chapéu-coco caindo do céu.",
      "Desafiou a percepção da realidade com imagens paradoxais."
    ],
    onde_nasceu_resposta: "René Magritte nasceu em Lessines, na Bélgica, em 1898.",
    ano_nascimento_resposta: "Magritte nasceu no ano de 1898.",
    ano_falecimento_resposta: "Magritte faleceu no ano de 1967."
  },
  gustav_klimt: {
    tema: "artistas_universais",
    subtema: "gustav_klimt",
    palavras_chave: ["klimt", "o beijo"],
    inicio: ["Klimt usava dourado e muitos detalhes brilhantes ✨"],
    explicacao_curta: ["Suas pinturas parecem decoradas como joias."],
    explicacao_aprofundada: ["Ele misturava figuras humanas com padrões coloridos e ornamentados."],
    curiosidade: ["O Beijo é uma de suas obras mais famosas 💛"],
    interacao: ["Você gosta de desenhos cheios de detalhes?"],
    atividade: ["Crie padrões usando círculos e linhas douradas 🎨"],
    final: ["Detalhes podem deixar a arte ainda mais encantadora 🌟"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1862",
    ano_falecimento: "1918",
    local_nascimento: "Viena, Áustria",
    o_que_ele_fez: [
      "Pintou 'O Beijo', uma obra cheia de folhas de ouro.",
      "Fundou o movimento da Secessão Vienense.",
      "Criou o famoso friso da Universidade de Viena."
    ],
    onde_nasceu_resposta: "Gustav Klimt nasceu em Viena, na Áustria, em 1862.",
    ano_nascimento_resposta: "Klimt nasceu no ano de 1862.",
    ano_falecimento_resposta: "Klimt faleceu no ano de 1918."
  },
  edvard_munch: {
    tema: "artistas_universais",
    subtema: "edvard_munch",
    palavras_chave: ["munch", "o grito"],
    inicio: ["Munch pintava emoções muito intensas 🌪️"],
    explicacao_curta: ["Suas obras mostram sentimentos fortes."],
    explicacao_aprofundada: ["Ele usava linhas e cores para representar medo, tristeza e emoção."],
    curiosidade: ["O Grito é uma das pinturas mais conhecidas do mundo 😮"],
    interacao: ["Que emoção você transformaria em pintura?"],
    atividade: ["Use cores fortes para desenhar sentimentos 🎨"],
    final: ["A arte também pode mostrar emoções profundas 🌈"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1863",
    ano_falecimento: "1944",
    local_nascimento: "Ådalsbruk, Noruega",
    o_que_ele_fez: [
      "Pintou 'O Grito', que se tornou um ícone da angústia humana.",
      "Fez várias versões da mesma obra em pintura, pastel e litografia.",
      "Explorou temas como amor, medo e morte em suas séries."
    ],
    onde_nasceu_resposta: "Edvard Munch nasceu em Ådalsbruk, na Noruega, em 1863.",
    ano_nascimento_resposta: "Munch nasceu no ano de 1863.",
    ano_falecimento_resposta: "Munch faleceu no ano de 1944."
  },
  joan_miro: {
    tema: "artistas_universais",
    subtema: "joan_miro",
    palavras_chave: ["miro", "joan miro"],
    inicio: ["Miró criava formas coloridas e imaginativas 🌈"],
    explicacao_curta: ["Suas pinturas parecem sonhos cheios de símbolos."],
    explicacao_aprofundada: ["Ele usava estrelas, linhas, círculos e cores fortes para criar mundos imaginários."],
    curiosidade: ["As obras de Miró lembram desenhos mágicos ✨"],
    interacao: ["Que símbolos você criaria em uma pintura?"],
    atividade: ["Desenhe estrelas, luas e formas inventadas 🌙"],
    final: ["A imaginação pode criar universos coloridos 🌟"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1893",
    ano_falecimento: "1983",
    local_nascimento: "Barcelona, Espanha",
    o_que_ele_fez: [
      "Criou um estilo único com formas orgânicas e cores vibrantes.",
      "Pintou 'O Carnaval de Arlequim', cheio de símbolos fantásticos.",
      "Também fez esculturas, cerâmicas e murais gigantes."
    ],
    onde_nasceu_resposta: "Joan Miró nasceu em Barcelona, na Espanha, em 1893.",
    ano_nascimento_resposta: "Miró nasceu no ano de 1893.",
    ano_falecimento_resposta: "Miró faleceu no ano de 1983."
  },
  henri_matisse: {
    tema: "artistas_universais",
    subtema: "henri_matisse",
    palavras_chave: ["matisse", "henri matisse"],
    inicio: ["Matisse adorava cores fortes e vibrantes 🎨"],
    explicacao_curta: ["Ele criava pinturas alegres e cheias de vida."],
    explicacao_aprofundada: ["Matisse também fazia colagens usando papéis coloridos recortados."],
    curiosidade: ["As tesouras viraram ferramentas importantes para Matisse ✂️"],
    interacao: ["Você gosta de criar usando recortes?"],
    atividade: ["Faça colagens usando papéis coloridos 🌈"],
    final: ["As cores podem transmitir muita alegria ✨"],
    emocao: "alegria",
    nivel: "leve",
    ano_nascimento: "1869",
    ano_falecimento: "1954",
    local_nascimento: "Le Cateau-Cambrésis, França",
    o_que_ele_fez: [
      "Liderou o movimento fauvista, com cores intensas e puras.",
      "No final da vida, criou colagens coloridas chamadas 'gouaches découpées'.",
      "Projetou a Capela do Rosário em Vence, com vitrais e desenhos."
    ],
    onde_nasceu_resposta: "Henri Matisse nasceu em Le Cateau-Cambrésis, na França, em 1869.",
    ano_nascimento_resposta: "Matisse nasceu no ano de 1869.",
    ano_falecimento_resposta: "Matisse faleceu no ano de 1954."
  },
  jackson_pollock: {
    tema: "artistas_universais",
    subtema: "jackson_pollock",
    palavras_chave: ["pollock", "jackson pollock"],
    inicio: ["Pollock espalhava tinta de maneiras diferentes 🎨"],
    explicacao_curta: ["Ele criava pinturas usando respingos e movimentos livres."],
    explicacao_aprofundada: ["O artista caminhava ao redor da tela enquanto jogava tinta para criar formas inesperadas."],
    curiosidade: ["As pinturas de Pollock parecem cheias de energia ⚡"],
    interacao: ["Você gostaria de pintar usando movimentos livres?"],
    atividade: ["Faça respingos de tinta em uma folha 🎨"],
    final: ["Movimento e arte podem se misturar 🌪️"],
    emocao: "energy",
    nivel: "leve",
    ano_nascimento: "1912",
    ano_falecimento: "1956",
    local_nascimento: "Cody, Wyoming, EUA",
    o_que_ele_fez: [
      "Inventou o 'drip painting' (pintura por gotejamento), jogando tinta sobre a tela.",
      "Suas obras abstratas revolucionaram a arte americana.",
      "Foi um dos principais nomes do expressionismo abstrato."
    ],
    onde_nasceu_resposta: "Jackson Pollock nasceu em Cody, Wyoming, nos Estados Unidos, em 1912.",
    ano_nascimento_resposta: "Pollock nasceu no ano de 1912.",
    ano_falecimento_resposta: "Pollock faleceu no ano de 1956."
  },
  keith_haring: {
    tema: "artistas_universais",
    subtema: "keith_haring",
    palavras_chave: ["keith haring", "haring"],
    inicio: ["Keith Haring criava desenhos simples e cheios de movimento ✨"],
    explicacao_curta: ["Suas figuras parecem dançar e brincar."],
    explicacao_aprofundada: ["Ele usava linhas fortes e personagens coloridos para comunicar ideias."],
    curiosidade: ["As artes de Haring aparecem em murais e espaços públicos 🌍"],
    interacao: ["Você consegue desenhar personagens usando poucas linhas?"],
    atividade: ["Crie figuras simples em movimento ✏️"],
    final: ["Linhas simples podem transmitir muita energia 🌈"],
    emocao: "animacao",
    nivel: "leve",
    ano_nascimento: "1958",
    ano_falecimento: "1990",
    local_nascimento: "Reading, Pensilvânia, EUA",
    o_que_ele_fez: [
      "Desenhou bonecos dançantes e radiantes em murais e metrôs de Nova York.",
      "Usou sua arte para campanhas contra as drogas e a favor da paz.",
      "Criou a Fundação Keith Haring para apoiar crianças e pessoas com HIV."
    ],
    onde_nasceu_resposta: "Keith Haring nasceu em Reading, nos Estados Unidos, em 1958.",
    ano_nascimento_resposta: "Keith Haring nasceu no ano de 1958.",
    ano_falecimento_resposta: "Keith Haring faleceu no ano de 1990."
  },
  banksy: {
    tema: "artistas_universais",
    subtema: "banksy",
    palavras_chave: ["banksy", "grafite banksy"],
    inicio: ["Banksy ficou famoso por suas artes urbanas 🎨"],
    explicacao_curta: ["Ele cria imagens em paredes e espaços públicos."],
    explicacao_aprofundada: ["Suas obras misturam humor, crítica e criatividade."],
    curiosidade: ["A verdadeira identidade de Banksy continua misteriosa 🎭"],
    interacao: ["Você gosta de desenhos em muros e paredes?"],
    atividade: ["Crie um desenho usando moldes e formas simples ✏️"],
    final: ["A arte pode aparecer em muitos lugares da cidade 🌆"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1974",
    ano_falecimento: "",
    local_nascimento: "Bristol, Reino Unido",
    o_que_ele_fez: [
      "Criou o famoso grafite da menina com balão vermelho.",
      "Destruiu uma de suas obras após leilão com um triturador escondido na moldura.",
      "Fez murais políticos e satíricos em várias cidades do mundo."
    ],
    onde_nasceu_resposta: "Banksy nasceu em Bristol, no Reino Unido, em 1974 (aproximadamente).",
    ano_nascimento_resposta: "Banksy nasceu por volta de 1974."
  },
  amedeo_modigliani: {
    tema: "artistas_universais",
    subtema: "amedeo_modigliani",
    palavras_chave: ["modigliani"],
    inicio: ["Modigliani pintava rostos alongados e elegantes 🎭"],
    explicacao_curta: ["Suas figuras possuem formas suaves e diferentes."],
    explicacao_aprofundada: ["Ele criava retratos com pescoços longos e olhos marcantes."],
    curiosidade: ["Os retratos de Modigliani parecem silenciosos e tranquilos 🌙"],
    interacao: ["Você conseguiria desenhar rostos de forma estilizada?"],
    atividade: ["Crie personagens com formas alongadas ✏️"],
    final: ["Cada artista possui um jeito único de representar pessoas ✨"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1884",
    ano_falecimento: "1920",
    local_nascimento: "Livorno, Itália",
    o_que_ele_fez: [
      "Criou retratos e nus com pescoços e rostos alongados.",
      "Trabalhou principalmente em Paris, na comunidade de artistas.",
      "Morreu jovem, mas deixou um estilo inconfundível."
    ],
    onde_nasceu_resposta: "Amedeo Modigliani nasceu em Livorno, na Itália, em 1884.",
    ano_nascimento_resposta: "Modigliani nasceu no ano de 1884.",
    ano_falecimento_resposta: "Modigliani faleceu no ano de 1920."
  },
  georgia_okeeffe: {
    tema: "artistas_universais",
    subtema: "georgia_okeeffe",
    palavras_chave: ["okeeffe", "georgia okeeffe"],
    inicio: ["Georgia O’Keeffe gostava de pintar flores gigantes 🌺"],
    explicacao_curta: ["Suas obras mostram detalhes da natureza."],
    explicacao_aprofundada: ["Ela ampliava flores e paisagens para destacar formas e cores."],
    curiosidade: ["As flores parecem enormes em suas pinturas 🌸"],
    interacao: ["Qual flor você gostaria de pintar?"],
    atividade: ["Desenhe uma flor ocupando toda a folha 🎨"],
    final: ["A natureza pode inspirar obras incríveis 🌿"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1986",
    local_nascimento: "Sun Prairie, Wisconsin, EUA",
    o_que_ele_fez: [
      "Pintou flores ampliadas como se vistas por uma lupa.",
      "Registrou paisagens do Novo México, com ossos e cruzes.",
      "Foi uma das artistas mais importantes dos Estados Unidos."
    ],
    onde_nasceu_resposta: "Georgia O'Keeffe nasceu em Sun Prairie, Wisconsin, em 1887.",
    ano_nascimento_resposta: "Georgia O'Keeffe nasceu no ano de 1887.",
    ano_falecimento_resposta: "Georgia O'Keeffe faleceu no ano de 1986."
  },
  tamara_de_lempicka: {
    tema: "artistas_universais",
    subtema: "tamara_de_lempicka",
    palavras_chave: ["tamara de lempicka", "lempicka"],
    inicio: ["Tamara de Lempicka criava retratos modernos e elegantes ✨"],
    explicacao_curta: ["Suas pinturas possuem formas brilhantes e geométricas."],
    explicacao_aprofundada: ["Ela misturava luxo, modernidade e estilo artístico."],
    curiosidade: ["Suas obras lembram cenas de filmes antigos 🎬"],
    interacao: ["Você gosta de desenhos modernos e estilizados?"],
    atividade: ["Desenhe roupas usando linhas geométricas ✏️"],
    final: ["A arte também pode transmitir elegância 🌟"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1980",
    local_nascimento: "Varsóvia, Polônia",
    o_que_ele_fez: [
      "Pintou retratos da alta sociedade art déco.",
      "Usou cores metálicas e formas geométricas para retratar elegância.",
      "Suas obras representam o glamour do século XX."
    ],
    onde_nasceu_resposta: "Tamara de Lempicka nasceu em Varsóvia, na Polônia, em 1898.",
    ano_nascimento_resposta: "Tamara de Lempicka nasceu no ano de 1898.",
    ano_falecimento_resposta: "Tamara de Lempicka faleceu no ano de 1980."
  },
  marc_chagall: {
    tema: "artistas_universais",
    subtema: "marc_chagall",
    palavras_chave: ["chagall", "marc chagall"],
    inicio: ["Chagall pintava cenas parecidas com sonhos 🌙"],
    explicacao_curta: ["Suas obras possuem cores suaves e personagens flutuando."],
    explicacao_aprofundada: ["He misturava memória, imaginação e fantasia em suas pinturas."],
    curiosidade: ["Em muitas obras de Chagall as pessoas parecem voar ☁️"],
    interacao: ["O que você desenharia em um sonho?"],
    atividade: ["Pinte personagens flutuando no céu 🎨"],
    final: ["A imaginação pode deixar a arte leve como nuvens ✨"],
    emocao: "sonho",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1985",
    local_nascimento: "Liozna, Bielorrússia",
    o_que_ele_fez: [
      "Pintou casais flutuando sobre cidades, como em 'Sobre a Cidade'.",
      "Criou vitrais para a Catedral de Metz e a ONU.",
      "Misturou memórias da infância judaica com imaginação poética."
    ],
    onde_nasceu_resposta: "Marc Chagall nasceu em Liozna, na Bielorrússia, em 1887.",
    ano_nascimento_resposta: "Chagall nasceu no ano de 1887.",
    ano_falecimento_resposta: "Chagall faleceu no ano de 1985."
  },
  paul_klee: {
    tema: "artistas_universais",
    subtema: "paul_klee",
    palavras_chave: ["paul klee", "klee"],
    inicio: ["Paul Klee misturava arte, música e imaginação 🎶"],
    explicacao_curta: ["Ele criava pinturas com símbolos e formas coloridas."],
    explicacao_aprofundada: ["Klee acreditava que linhas e cores podiam funcionar como música visual."],
    curiosidade: ["Muitas obras de Klee parecem mapas mágicos 🗺️"],
    interacao: ["Que formas combinam com música para você?"],
    atividade: ["Crie padrões coloridos inspirados em sons 🎨"],
    final: ["Arte e música podem conversar entre si ✨"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1879",
    ano_falecimento: "1940",
    local_nascimento: "Münchenbuchsee, Suíça",
    o_que_ele_fez: [
      "Ensinou na escola de arte Bauhaus, influenciando gerações.",
      "Criou mais de 9.000 obras, cheias de humor e fantasia.",
      "Escreveu o livro 'Teoria da Arte Moderna', sobre cor e forma."
    ],
    onde_nasceu_resposta: "Paul Klee nasceu em Münchenbuchsee, na Suíça, em 1879.",
    ano_nascimento_resposta: "Paul Klee nasceu no ano de 1879.",
    ano_falecimento_resposta: "Paul Klee faleceu no ano de 1940."
  },
  roy_lichtenstein: {
    tema: "artistas_universais",
    subtema: "roy_lichtenstein",
    palavras_chave: ["lichtenstein", "roy lichtenstein", "pop art quadrinhos"],
    inicio: ["Roy Lichtenstein transformava quadrinhos em arte 🎨"],
    explicacao_curta: ["Suas pinturas parecem páginas gigantes de HQ."],
    explicacao_aprofundada: ["Ele usava pontos coloridos, balões de fala e imagens inspiradas em revistas."],
    curiosidade: ["Os pontinhos de suas obras imitam impressões de revistas 🟡"],
    interacao: ["Você gosta de histórias em quadrinhos?"],
    atividade: ["Crie um quadrinho usando balões de fala ✏️"],
    final: ["A cultura popular também pode virar arte 🌟"],
    emocao: "diversao",
    nivel: "leve",
    ano_nascimento: "1923",
    ano_falecimento: "1997",
    local_nascimento: "Nova York, EUA",
    o_que_ele_fez: [
      "Ampliou quadrinhos para telas enormes, com balões e textos.",
      "Usou a técnica de pontilhado (Ben-Day dots) para imitar impressão.",
      "Parodiou obras famosas como as pinceladas de Pollock."
    ],
    onde_nasceu_resposta: "Roy Lichtenstein nasceu em Nova York, nos Estados Unidos, em 1923.",
    ano_nascimento_resposta: "Lichtenstein nasceu no ano de 1923.",
    ano_falecimento_resposta: "Lichtenstein faleceu no ano de 1997."
  },
  fernando_botero: {
    tema: "artistas_universais",
    subtema: "fernando_botero",
    palavras_chave: ["botero", "fernando botero"],
    inicio: ["Botero criava personagens grandes e arredondados 🎈"],
    explicacao_curta: ["Suas obras possuem formas exageradas e divertidas."],
    explicacao_aprofundada: ["Ele pintava pessoas, animais e objetos com volumes ampliados."],
    curiosidade: ["As esculturas de Botero aparecem em praças e museus 🌍"],
    interacao: ["Você conseguiria desenhar personagens bem redondinhos?"],
    atividade: ["Transforme figuras comuns em versões gigantes 🎨"],
    final: ["A arte pode brincar com tamanhos e formas ✨"],
    emocao: "humor",
    nivel: "leve",
    ano_nascimento: "1932",
    ano_falecimento: "",
    local_nascimento: "Medellín, Colômbia",
    o_que_ele_fez: [
      "Pintou Mona Lisa com formas volumosas e divertidas.",
      "Fez esculturas de animais e pessoas com aparência rechonchuda.",
      "Doou muitas obras para museus da Colômbia."
    ],
    onde_nasceu_resposta: "Fernando Botero nasceu em Medellín, na Colômbia, em 1932.",
    ano_nascimento_resposta: "Botero nasceu no ano de 1932."
  },
  jean_michel_basquiat: {
    tema: "artistas_universais",
    subtema: "jean_michel_basquiat",
    palavras_chave: ["basquiat", "jean michel basquiat"],
    inicio: ["Basquiat misturava desenho, escrita e arte urbana 👑"],
    explicacao_curta: ["Suas obras possuem energia e muitos símbolos."],
    explicacao_aprofundada: ["Ele usava palavras, cores fortes e figuras expressivas para criar arte."],
    curiosidade: ["As coroas aparecem bastante em suas pinturas 👑"],
    interacao: ["Que símbolo você criaria para representar você?"],
    atividade: ["Misture palavras e desenhos em uma mesma arte ✏️"],
    final: ["A arte pode unir imagem, texto e emoção 🌈"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1960",
    ano_falecimento: "1988",
    local_nascimento: "Brooklyn, Nova York, EUA",
    o_que_ele_fez: [
      "Começou como grafiteiro com o pseudônimo SAMO.",
      "Pintou o famoso crânio com coroa e dentes amarelos.",
      "Colaborou com Andy Warhol em uma série de obras."
    ],
    onde_nasceu_resposta: "Jean-Michel Basquiat nasceu no Brooklyn, Nova York, em 1960.",
    ano_nascimento_resposta: "Basquiat nasceu no ano de 1960.",
    ano_falecimento_resposta: "Basquiat faleceu no ano de 1988."
  },
  bridget_riley: {
    tema: "artistas_universais",
    subtema: "bridget_riley",
    palavras_chave: ["bridget riley", "op art"],
    inicio: ["Bridget Riley criava ilusões usando linhas e formas 🔲"],
    explicacao_curta: ["Suas obras parecem se mover diante dos olhos."],
    explicacao_aprofundada: ["Ela organizava padrões geométricos para criar efeitos visuais."],
    curiosidade: ["A op art brinca com a percepção visual 👀"],
    interacao: ["Você já viu desenhos que parecem mexer?"],
    atividade: ["Faça padrões usando linhas repetidas ✏️"],
    final: ["Os olhos também participam da experiência artística ✨"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1931",
    ano_falecimento: "",
    local_nascimento: "Londres, Reino Unido",
    o_que_ele_fez: [
      "Criou pinturas abstratas com listras em preto e branco que vibram.",
      "Foi uma das principais representantes da Op Art.",
      "Expandiu seu trabalho para cores, mantendo o efeito óptico."
    ],
    onde_nasceu_resposta: "Bridget Riley nasceu em Londres, no Reino Unido, em 1931.",
    ano_nascimento_resposta: "Bridget Riley nasceu no ano de 1931."
  },
  niki_de_saint_phalle: {
    tema: "artistas_universais",
    subtema: "niki_de_saint_phalle",
    palavras_chave: ["niki de saint phalle", "niki"],
    inicio: ["Niki criava esculturas gigantes e coloridas 🌈"],
    explicacao_curta: ["Suas obras possuem formas alegres e criativas."],
    explicacao_aprofundada: ["Ela produzia esculturas inspiradas em movimento, dança e fantasia."],
    curiosidade: ["Algumas esculturas de Niki parecem personagens mágicos ✨"],
    interacao: ["Que escultura divertida você inventaria?"],
    atividade: ["Desenhe criaturas coloridas gigantes 🎨"],
    final: ["A arte pode ocupar espaços enormes e surpreendentes 🌟"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1930",
    ano_falecimento: "2002",
    local_nascimento: "Neuilly-sur-Seine, França",
    o_que_ele_fez: [
      "Criou as 'Nanas', esculturas alegres e volumosas de mulheres.",
      "Fez o Jardim dos Tarô, com figuras gigantes na Toscana.",
      "Usou tiro de espingarda sobre tinta em suas primeiras obras."
    ],
    onde_nasceu_resposta: "Niki de Saint Phalle nasceu em Neuilly-sur-Seine, na França, em 1930.",
    ano_nascimento_resposta: "Niki de Saint Phalle nasceu no ano de 1930.",
    ano_falecimento_resposta: "Niki de Saint Phalle faleceu no ano de 2002."
  },
  ai_weiwei: {
    tema: "artistas_universais",
    subtema: "ai_weiwei",
    palavras_chave: ["ai weiwei"],
    inicio: ["Ai Weiwei mistura arte, arquitetura e ideias 🌍"],
    explicacao_curta: ["Suas obras usam objetos e instalações gigantes."],
    explicacao_aprofundada: ["Ele cria trabalhos que fazem as pessoas observar e pensar sobre o mundo."],
    curiosidade: ["Algumas obras de Ai Weiwei ocupam salas inteiras 🏛️"],
    interacao: ["Você gostaria de criar uma obra enorme?"],
    atividade: ["Monte uma instalação usando objetos recicláveis ♻️"],
    final: ["A arte também pode provocar reflexão ✨"],
    emocao: "pensamento",
    nivel: "leve",
    ano_nascimento: "1957",
    ano_falecimento: "",
    local_nascimento: "Pequim, China",
    o_que_ele_fez: [
      "Cobriu o chão do Museu de Arte de Tóquio com 100 milhões de sementes de girassol de porcelana.",
      "Instalou milhares de mochilas em praças para lembrar crianças.",
      "Projetou o Estádio Nacional de Pequim (Ninho de Pássaro)."
    ],
    onde_nasceu_resposta: "Ai Weiwei nasceu em Pequim, na China, em 1957.",
    ano_nascimento_resposta: "Ai Weiwei nasceu no ano de 1957."
  },
  takashi_murakami: {
    tema: "artistas_universais",
    subtema: "takashi_murakami",
    palavras_chave: ["murakami", "takashi murakami"],
    inicio: ["Murakami mistura arte japonesa e personagens coloridos 🌸"],
    explicacao_curta: ["Suas obras parecem desenhos animados gigantes."],
    explicacao_aprofundada: ["Ele usa flores sorridentes, cores fortes e elementos da cultura pop."],
    curiosidade: ["As flores felizes ficaram famosas em suas obras 🌼"],
    interacao: ["Você criaria personagens sorridentes?"],
    atividade: ["Desenhe flores com expressões divertidas 🌈"],
    final: ["A arte pode ser alegre e cheia de fantasia ✨"],
    emocao: "alegria",
    nivel: "leve",
    ano_nascimento: "1962",
    ano_falecimento: "",
    local_nascimento: "Tóquio, Japão",
    o_que_ele_fez: [
      "Criou o movimento artístico 'Superflat'.",
      "Desenhou flores sorridentes e personagens de olhos grandes.",
      "Colaborou com marcas como Louis Vuitton."
    ],
    onde_nasceu_resposta: "Takashi Murakami nasceu em Tóquio, no Japão, em 1962.",
    ano_nascimento_resposta: "Takashi Murakami nasceu no ano de 1962."
  },
  anish_kapoor: {
    tema: "artistas_universais",
    subtema: "anish_kapoor",
    palavras_chave: ["anish kapoor"],
    inicio: ["Anish Kapoor cria esculturas gigantes e brilhantes 🪞"],
    explicacao_curta: ["Suas obras brincam com reflexos e espaço."],
    explicacao_aprofundada: ["Muitas esculturas refletem pessoas e ambientes ao redor."],
    curiosidade: ["Algumas obras parecem espelhos gigantes 🌟"],
    interacao: ["Você gosta de observar reflexos?"],
    atividade: ["Desenhe objetos refletindo luz ✏️"],
    final: ["Luz e reflexo também podem virar arte ✨"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1954",
    ano_falecimento: "",
    local_nascimento: "Bombaim, Índia",
    o_que_ele_fez: [
      "Criou 'Cloud Gate' (o feijão polido) em Chicago.",
      "Usou pigmentos de cores intensas em esculturas que parecem sugar o espaço.",
      "Produziu a obra 'Descendo' que parece um vórtice vermelho."
    ],
    onde_nasceu_resposta: "Anish Kapoor nasceu em Bombaim, na Índia, em 1954.",
    ano_nascimento_resposta: "Anish Kapoor nasceu no ano de 1954."
  },
  olafur_eliasson: {
    tema: "artistas_universais",
    subtema: "olafur_eliasson",
    palavras_chave: ["olafur eliasson"],
    inicio: ["Olafur Eliasson cria obras usando luz e natureza ☀️"],
    explicacao_curta: ["Ele mistura ciência, cor e experiências visuais."],
    explicacao_aprofundada: ["Suas instalações fazem as pessoas sentir luz, sombra e movimento."],
    curiosidade: ["Algumas salas parecem cheias de sol artificial 🌞"],
    interacao: ["Que tipo de luz você usaria em uma obra?"],
    atividade: ["Brinque com lanternas criando sombras 🎭"],
    final: ["A arte pode transformar a maneira de enxergar o espaço ✨"],
    emocao: "exploracao",
    nivel: "leve",
    ano_nascimento: "1967",
    ano_falecimento: "",
    local_nascimento: "Copenhague, Dinamarca",
    o_que_ele_fez: [
      "Instalou um enorme sol amarelo no Tate Modern, em Londres.",
      "Criou cachoeiras artificiais no rio Hudson, em Nova York.",
      "Usa neblina, espelhos e luzes para criar ambientes imersivos."
    ],
    onde_nasceu_resposta: "Olafur Eliasson nasceu em Copenhague, na Dinamarca, em 1967.",
    ano_nascimento_resposta: "Olafur Eliasson nasceu no ano de 1967."
  },
  jr: {
    tema: "artistas_universais",
    subtema: "jr",
    palavras_chave: ["jr artista", "fotografia urbana"],
    inicio: ["JR usa fotografias gigantes em espaços públicos 📸"],
    explicacao_curta: ["Ele cola retratos enormes em paredes e construções."],
    explicacao_aprofundada: ["Suas obras mostram rostos e histórias de diferentes pessoas."],
    curiosidade: ["As imagens de JR podem ocupar prédios inteiros 🏙️"],
    interacao: ["Que fotografia você mostraria em um mural gigante?"],
    atividade: ["Monte colagens usando fotos e desenhos ✂️"],
    final: ["A arte urbana pode transformar cidades 🌆"],
    emocao: "conexao",
    nivel: "leve",
    ano_nascimento: "1983",
    ano_falecimento: "",
    local_nascimento: "Paris, França",
    o_que_ele_fez: [
      "Cobriu a fachada do Louvre com uma ilusão de ótica.",
      "Colou retratos de refugiados em muros ao redor do mundo.",
      "Ganhou o prêmio TED em 2011 e criou o projeto 'Inside Out'."
    ],
    onde_nasceu_resposta: "JR nasceu em Paris, na França, em 1983.",
    ano_nascimento_resposta: "JR nasceu no ano de 1983."
  },
  damien_hirst: {
    tema: "artistas_universais",
    subtema: "damien_hirst",
    palavras_chave: ["damien hirst", "hirst"],
    inicio: ["Damien Hirst cria obras curiosas e diferentes 🧪"],
    explicacao_curta: ["Ele usa objetos, cores e instalações em suas artes."],
    explicacao_aprofundada: ["Suas obras exploram formas, padrões e maneiras diferentes de apresentar arte."],
    curiosidade: ["Algumas pinturas de Hirst usam muitos pontinhos coloridos 🔵"],
    interacao: ["Você gosta de obras diferentes e inesperadas?"],
    atividade: ["Faça padrões usando círculos coloridos 🎨"],
    final: ["A arte contemporânea pode surpreender de muitos jeitos ✨"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1965",
    ano_falecimento: "",
    local_nascimento: "Bristol, Reino Unido",
    o_que_ele_fez: [
      "Imobilizou um tubarão em formol para a obra 'A Impossibilidade Física da Morte'.",
      "Pintou séries de pontos coloridos ('Spot Paintings').",
      "Criou 'Por Amor a Deus', uma caveira cravejada de diamantes."
    ],
    onde_nasceu_resposta: "Damien Hirst nasceu em Bristol, no Reino Unido, em 1965.",
    ano_nascimento_resposta: "Damien Hirst nasceu no ano de 1965."
  },
  marina_abramovic: {
    tema: "artistas_universais",
    subtema: "marina_abramovic",
    palavras_chave: ["marina abramovic", "performance artistica"],
    inicio: ["Marina Abramović usa o corpo como forma de arte 🎭"],
    explicacao_curta: ["Ela cria performances cheias de expressão."],
    explicacao_aprofundada: ["Suas apresentações exploram silêncio, presença e emoções."],
    curiosidade: ["A performance artística acontece ao vivo diante do público ✨"],
    interacao: ["Você já tentou se expressar usando apenas gestos?"],
    atividade: ["Crie movimentos para representar emoções 🎨"],
    final: ["O corpo também pode contar histórias 🌟"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1946",
    ano_falecimento: "",
    local_nascimento: "Belgrado, Sérvia",
    o_que_ele_fez: [
      "Ficou sentada em silêncio por 736 horas no MoMA, olhando nos olhos dos visitantes.",
      "Andou pela Grande Muralha da China para encontrar seu ex-parceiro.",
      "Usou objetos perigosos e dor como parte de suas performances."
    ],
    onde_nasceu_resposta: "Marina Abramović nasceu em Belgrado, na Sérvia, em 1946.",
    ano_nascimento_resposta: "Marina Abramović nasceu no ano de 1946."
  },
  zaha_hadid: {
    tema: "artistas_universais",
    subtema: "zaha_hadid",
    palavras_chave: ["zaha hadid", "arquitetura moderna"],
    inicio: ["Zaha Hadid criava construções futuristas 🏙️"],
    explicacao_curta: ["Suas obras possuem curvas e formas modernas."],
    explicacao_aprofundada: ["Ela imaginava prédios parecidos com ondas, movimento e natureza."],
    curiosidade: ["Muitos prédios de Zaha parecem saídos do futuro 🚀"],
    interacao: ["Como seria a construção dos seus sonhos?"],
    atividade: ["Desenhe um prédio cheio de curvas ✏️"],
    final: ["Arquitetura também pode parecer arte em movimento ✨"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1950",
    ano_falecimento: "2016",
    local_nascimento: "Bagdá, Iraque",
    o_que_ele_fez: [
      "Projetou o Aquatics Centre para as Olimpíadas de Londres.",
      "Criou o edifício da Ópera de Guangzhou, na China.",
      "Foi a primeira mulher a ganhar o Prêmio Pritzker de arquitetura."
    ],
    onde_nasceu_resposta: "Zaha Hadid nasceu em Bagdá, no Iraque, em 1950.",
    ano_nascimento_resposta: "Zaha Hadid nasceu no ano de 1950.",
    ano_falecimento_resposta: "Zaha Hadid faleceu no ano de 2016."
  },
  antoni_gaudi: {
    tema: "artistas_universais",
    subtema: "antoni_gaudi",
    palavras_chave: ["gaudi", "antoni gaudi", "sagrada familia"],
    inicio: ["Gaudí criava construções inspiradas na natureza 🌿"],
    explicacao_curta: ["Suas obras possuem curvas, mosaicos e formas diferentes."],
    explicacao_aprofundada: ["Ele misturava arquitetura, cores e detalhes criativos em seus projetos."],
    curiosidade: ["A Sagrada Família é uma de suas obras mais famosas ⛪"],
    interacao: ["Que forma da natureza você usaria em um prédio?"],
    atividade: ["Crie mosaicos usando formas coloridas 🎨"],
    final: ["A natureza pode inspirar construções incríveis 🌈"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1852",
    ano_falecimento: "1926",
    local_nascimento: "Reus, Espanha",
    o_que_ele_fez: [
      "Projetou a Sagrada Família, que ainda está em construção.",
      "Criou o Parque Güell, com bancos de mosaico e formas onduladas.",
      "Usou arcos parabólicos e colunas inclinadas em seus edifícios."
    ],
    onde_nasceu_resposta: "Antoni Gaudí nasceu em Reus, na Espanha, em 1852.",
    ano_nascimento_resposta: "Gaudí nasceu no ano de 1852.",
    ano_falecimento_resposta: "Gaudí faleceu no ano de 1926."
  },
  auguste_rodin: {
    tema: "artistas_universais",
    subtema: "auguste_rodin",
    palavras_chave: ["rodin", "o pensador"],
    inicio: ["Rodin transformava pedra e bronze em emoção 🗿"],
    explicacao_curta: ["Ele foi um importante escultor francês."],
    explicacao_aprofundada: ["Suas esculturas mostram movimento, expressão e detalhes do corpo humano."],
    curiosidade: ["O Pensador é uma de suas esculturas mais famosas 🤔"],
    interacao: ["Que pose você criaria para uma escultura?"],
    atividade: ["Modele personagens usando massinha 🎨"],
    final: ["As esculturas podem parecer cheias de vida ✨"],
    emocao: "reflexao",
    nivel: "leve",
    ano_nascimento: "1840",
    ano_falecimento: "1917",
    local_nascimento: "Paris, França",
    o_que_ele_fez: [
      "Criou 'O Pensador', originalmente parte de uma porta gigante chamada 'Portão do Inferno'.",
      "Esculpiu 'O Beijo', mostrando um casal se abraçando.",
      "Enfrentou críticas por suas esculturas realistas e emocionais."
    ],
    onde_nasceu_resposta: "Auguste Rodin nasceu em Paris, na França, em 1840.",
    ano_nascimento_resposta: "Rodin nasceu no ano de 1840.",
    ano_falecimento_resposta: "Rodin faleceu no ano de 1917."
  },
  henry_moore: {
    tema: "artistas_universais",
    subtema: "henry_moore",
    palavras_chave: ["henry moore"],
    inicio: ["Henry Moore criava esculturas com formas suaves 🌙"],
    explicacao_curta: ["Suas obras lembram pedras, montanhas e corpos humanos."],
    explicacao_aprofundada: ["Ele explorava curvas e espaços vazios nas esculturas."],
    curiosidade: ["Muitas esculturas de Moore ficam ao ar livre 🌿"],
    interacao: ["Você gosta de formas arredondadas?"],
    atividade: ["Crie esculturas com argila ou papel ✂️"],
    final: ["As formas simples podem transmitir beleza 🌟"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1986",
    local_nascimento: "Castleford, Reino Unido",
    o_que_ele_fez: [
      "Criou esculturas abstratas de figuras reclinadas.",
      "Usou buracos e formas orgânicas inspiradas em ossos e seixos.",
      "Doou muitas obras para a Fundação Henry Moore."
    ],
    onde_nasceu_resposta: "Henry Moore nasceu em Castleford, no Reino Unido, em 1898.",
    ano_nascimento_resposta: "Henry Moore nasceu no ano de 1898.",
    ano_falecimento_resposta: "Henry Moore faleceu no ano de 1986."
  },
  louise_bourgeois: {
    tema: "artistas_universais",
    subtema: "louise_bourgeois",
    palavras_chave: ["louise bourgeois", "aranha gigante"],
    inicio: ["Louise Bourgeois criava esculturas gigantes e expressivas 🕷️"],
    explicacao_curta: ["Ela explorava emoções através da arte."],
    explicacao_aprofundada: ["Suas esculturas misturam memória, sentimentos e imaginação."],
    curiosidade: ["As aranhas gigantes ficaram famosas em suas obras ✨"],
    interacao: ["Que animal você transformaria em escultura?"],
    atividade: ["Desenhe criaturas enormes e imaginárias 🎨"],
    final: ["A arte pode transformar emoções in formas 🌈"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1911",
    ano_falecimento: "2010",
    local_nascimento: "Paris, França",
    o_que_ele_fez: [
      "Criou a escultura 'Maman', uma aranha gigante de bronze.",
      "Produziu células, ambientes com objetos pessoais e tecidos.",
      "Trabalhou com tecido, borracha e mármore até os 90 anos."
    ],
    onde_nasceu_resposta: "Louise Bourgeois nasceu em Paris, na França, em 1911.",
    ano_nascimento_resposta: "Louise Bourgeois nasceu no ano de 1911.",
    ano_falecimento_resposta: "Louise Bourgeois faleceu no ano de 2010."
  },
  constantin_brancusi: {
    tema: "artistas_universais",
    subtema: "constantin_brancusi",
    palavras_chave: ["brancusi"],
    inicio: ["Brancusi gostava de simplificar as formas ✨"],
    explicacao_curta: ["Suas esculturas possuem linhas suaves e elegantes."],
    explicacao_aprofundada: ["Ele acreditava que a simplicidade podia mostrar a essência das coisas."],
    curiosidade: ["Algumas esculturas parecem pássaros voando 🕊️"],
    interacao: ["Você prefere desenhos simples ou detalhados?"],
    atividade: ["Crie figuras usando poucas linhas ✏️"],
    final: ["A simplicidade também pode ser poderosa 🌟"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1876",
    ano_falecimento: "1957",
    local_nascimento: "Hobița, Romênia",
    o_que_ele_fez: [
      "Esculpiu 'Pássaro no Espaço', uma forma alongada e elegante.",
      "Simplificou figuras humanas até formas ovais básicas.",
      "Trabalhou principalmente com mármore, bronze e madeira."
    ],
    onde_nasceu_resposta: "Constantin Brancusi nasceu em Hobița, na Romênia, em 1876.",
    ano_nascimento_resposta: "Brancusi nasceu no ano de 1876.",
    ano_falecimento_resposta: "Brancusi faleceu no ano de 1957."
  },
  edmonia_lewis: {
    tema: "artistas_universais",
    subtema: "edmonia_lewis",
    palavras_chave: ["edmonia lewis"],
    inicio: ["Edmonia Lewis criou esculturas cheias de significado 🗿"],
    explicacao_curta: ["Ela foi uma importante escultora do século XIX."],
    explicacao_aprofundada: ["Suas obras representavam histórias, cultura e liberdade."],
    curiosidade: ["Ela trabalhava principalmente com mármore ✨"],
    interacao: ["Que história você contaria em uma escultura?"],
    atividade: ["Modele personagens usando massinha 🎨"],
    final: ["A arte pode guardar histórias importantes 🌍"],
    emocao: "inspiracao",
    nivel: "leve",
    ano_nascimento: "1844",
    ano_falecimento: "1907",
    local_nascimento: "Greenbush, Nova York, EUA",
    o_que_ele_fez: [
      "Esculpiu 'A Morte de Cleópatra', uma obra dramática em mármore.",
      "Foi a primeira mulher negra e nativa americana a ganhar reconhecimento internacional.",
      "Retratou figuras abolicionistas e temas da mitologia."
    ],
    onde_nasceu_resposta: "Edmonia Lewis nasceu em Greenbush, Nova York, em 1844.",
    ano_nascimento_resposta: "Edmonia Lewis nasceu no ano de 1844.",
    ano_falecimento_resposta: "Edmonia Lewis faleceu no ano de 1907."
  },
  hokusai: {
    tema: "artistas_universais",
    subtema: "hokusai",
    palavras_chave: ["hokusai", "grande onda"],
    inicio: ["Hokusai ficou famoso por suas gravuras japonesas 🌊"],
    explicacao_curta: ["Ele retratava natureza, ondas e paisagens."],
    explicacao_aprofundada: ["Suas obras possuem linhas marcantes e detalhes inspirados no Japão."],
    curiosidade: ["A Grande Onda é uma das imagens mais conhecidas da arte japonesa 🌊"],
    interacao: ["Você gostaria de desenhar ondas gigantes?"],
    atividade: ["Faça desenhos usando linhas curvas e repetidas ✏️"],
    final: ["A natureza pode inspirar imagens inesquecíveis ✨"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1760",
    ano_falecimento: "1849",
    local_nascimento: "Tóquio, Japão",
    o_que_ele_fez: [
      "Criou the xilogravura 'A Grande Onda de Kanagawa'.",
      "Produziu a série '36 Vistas do Monte Fuji'.",
      "Mudou de estilo várias vezes ao longo da vida, sempre inovando."
    ],
    onde_nasceu_resposta: "Hokusai nasceu em Tóquio, no Japão, em 1760.",
    ano_nascimento_resposta: "Hokusai nasceu no ano de 1760.",
    ano_falecimento_resposta: "Hokusai faleceu no ano de 1849."
  },
  marcel_duchamp: {
    tema: "artistas_universais",
    subtema: "marcel_duchamp",
    palavras_chave: ["duchamp", "marcel duchamp", "arte conceitual", "ready made"],
    inicio: ["Marcel Duchamp gostava de transformar ideias em arte 🧠"],
    explicacao_curta: ["Ele mostrou que objetos comuns também podem virar obras de arte."],
    explicacao_aprofundada: ["Duchamp ficou famoso por apresentar objetos do cotidiano como arte, fazendo as pessoas pensarem sobre criatividade e imaginação."],
    curiosidade: ["Ele chamou algumas de suas obras de ready-mades ✨"],
    interacao: ["Que objeto comum você transformaria em arte?"],
    atividade: ["Escolha um objeto da casa e invente um novo significado para ele 🎨"],
    final: ["Às vezes a ideia pode ser tão importante quanto o desenho 🌈"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1968",
    local_nascimento: "Blainville-Crevon, França",
    o_que_ele_fez: [
      "Apresentou um urinol assinado como obra de arte ('Fonte').",
      "Colocou uma roda de bicicleta sobre um banco, criando um ready-made.",
      "Desafiou as definições tradicionais de arte e influenciou a arte conceitual."
    ],
    onde_nasceu_resposta: "Marcel Duchamp nasceu em Blainville-Crevon, na França, in 1887.",
    ano_nascimento_resposta: "Marcel Duchamp nasceu no ano de 1887.",
    ano_falecimento_resposta: "Marcel Duchamp faleceu no ano de 1968."
  },

  // --- DANÇAS ---
  danca_o_que_e: {
    tema: "dancas",
    subtema: "o_que_e_danca",
    palavras_chave: [
      "o que e danca",
      "definicao de danca",
      "conceito de danca",
      "o que e a danca"
    ],
    inicio: [
      "Dançar é contar histórias usando o corpo 💃",
      "A dança transforma movimentos em expressão ✨"
    ],
    explicacao_curta: [
      "A dança usa movimentos para mostrar ideias e sentimentos."
    ],
    explicacao_aprofundada: [
      "As pessoas dançam em festas, celebrações e apresentações artísticas há milhares de anos."
    ],
    curiosidade: [
      "Cada cultura possui danças com ritmos e movimentos diferentes 🌎"
    ],
    interacao: [
      "Você gosta mais de dançar rápido ou devagar?"
    ],
    atividade: [
      "Crie uma dança usando movimentos inspirados em animais 🐦"
    ],
    final: [
      "A dança faz o corpo se transformar em arte 🌈"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  danca_elementos: {
    tema: "dancas",
    subtema: "elementos_danca",
    palavras_chave: [
      "elementos da danca",
      "partes da danca",
      "o que tem na danca"
    ],
    inicio: [
      "A dança mistura corpo, espaço, ritmo e energia ✨"
    ],
    explicacao_curta: [
      "Na dança usamos movimentos, ritmo e expressão corporal."
    ],
    explicacao_aprofundada: [
      "Os movimentos podem ser rápidos, suaves, fortes ou leves, dependendo da dança."
    ],
    curiosidade: [
      "Até o silêncio pode fazer parte de uma dança 🌙"
    ],
    interacao: [
      "Que movimento combina mais com alegria para você?"
    ],
    atividade: [
      "Faça movimentos lentos e depois rápidos 🎵"
    ],
    final: [
      "Cada corpo possui um jeito único de dançar 🌟"
    ],
    emocao: "expressao",
    nivel: "leve"
  },
  danca_passos: {
    tema: "dancas",
    subtema: "passos_danca",
    palavras_chave: [
      "passos de danca",
      "movimentos de danca",
      "sequencia de passos"
    ],
    inicio: [
      "Os passos criam o caminho da dança 👣"
    ],
    explicacao_curta: [
      "Passos de dança são movimentos organizados em sequência."
    ],
    explicacao_aprofundada: [
      "Quando vários passos são combinados, nasce uma coreografia."
    ],
    curiosidade: [
      "Algumas coreografias possuem centenas de movimentos diferentes ✨"
    ],
    interacao: [
      "Você consegue inventar três passos diferentes?"
    ],
    atividade: [
      "Crie uma pequena sequência com palmas e giros 💫"
    ],
    final: [
      "Cada passo ajuda a construir a dança 🌈"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  danca_bale: {
    tema: "dancas",
    subtema: "bale",
    palavras_chave: [
      "bale",
      "bale classico"
    ],
    inicio: [
      "O balé parece uma dança flutuando no ar 🩰"
    ],
    explicacao_curta: [
      "O balé possui movimentos suaves, giros e saltos."
    ],
    explicacao_aprofundada: [
      "Os dançarinos treinam equilíbrio, postura e precisão nos movimentos."
    ],
    curiosidade: [
      "As sapatilhas ajudam os bailarinos a fazer movimentos delicados ✨"
    ],
    interacao: [
      "Você gostaria de aprender um giro de balé?"
    ],
    atividade: [
      "Tente caminhar na ponta dos pés 🩰"
    ],
    final: [
      "O balé mistura leveza, música e disciplina 🌙"
    ],
    emocao: "leveza",
    nivel: "leve"
  },
  danca_hip_hop: {
    tema: "dancas",
    subtema: "hip_hop",
    palavras_chave: [
      "hip hop",
      "break",
      "street dance"
    ],
    inicio: [
      "O hip hop é cheio de energia e atitude 🎧"
    ],
    explicacao_curta: [
      "É uma dança urbana com movimentos livres e criativos."
    ],
    explicacao_aprofundada: [
      "No hip hop cada pessoa pode criar passos e mostrar seu próprio estilo."
    ],
    curiosidade: [
      "O breakdance possui giros e movimentos acrobáticos incríveis 🔥"
    ],
    interacao: [
      "Que movimento você inventaria em uma dança de hip hop?"
    ],
    atividade: [
      "Crie uma sequência com passos rápidos e pausas 🎵"
    ],
    final: [
      "O hip hop transforma ritmo em expressão 🌟"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  danca_frevo: {
    tema: "dancas",
    subtema: "frevo",
    palavras_chave: [
      "frevo",
      "pernambuco",
      "sombrinha"
    ],
    inicio: [
      "O frevo é uma explosão de cores e movimentos 🎉"
    ],
    explicacao_curta: [
      "É uma dança rápida e cheia de energia de Pernambuco."
    ],
    explicacao_aprofundada: [
      "Os dançarinos fazem saltos, giros e movimentos ágeis usando sombrinhas coloridas."
    ],
    curiosidade: [
      "O frevo é considerado patrimônio cultural brasileiro 🌈"
    ],
    interacao: [
      "Você conseguiria dançar segurando uma sombrinha?"
    ],
    atividade: [
      "Crie uma mini sombrinha colorida 🎨"
    ],
    final: [
      "O frevo faz as ruas parecerem festas dançantes 🌟"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  danca_ciranda: {
    tema: "dancas",
    subtema: "ciranda",
    palavras_chave: [
      "ciranda",
      "roda"
    ],
    inicio: [
      "A ciranda reúne pessoas em roda 🤝"
    ],
    explicacao_curta: [
      "As pessoas dão as mãos e dançam juntas."
    ],
    explicacao_aprofundada: [
      "A ciranda valoriza união, música e participação coletiva."
    ],
    curiosidade: [
      "A ciranda é muito conhecida nas praias de Pernambuco 🌊"
    ],
    interacao: [
      "Você gosta de brincadeiras em roda?"
    ],
    atividade: [
      "Faça uma roda com amigos e invente passos simples 🎵"
    ],
    final: [
      "A ciranda transforma dança em amizade 🌈"
    ],
    emocao: "uniao",
    nivel: "leve"
  },
  danca_carimbo: {
    tema: "dancas",
    subtema: "carimbo",
    palavras_chave: [
      "carimbo",
      "para"
    ],
    inicio: [
      "O carimbó possui ritmo alegre e giratório 🌿"
    ],
    explicacao_curta: [
      "É uma dança tradicional do Pará."
    ],
    explicacao_aprofundada: [
      "Os movimentos leves acompanham músicas animadas e roupas coloridas."
    ],
    curiosidade: [
      "O carimbó mistura influências indígenas, africanas e europeias ✨"
    ],
    interacao: [
      "Você gosta de danças com giros?"
    ],
    atividade: [
      "Faça movimentos circulares acompanhando uma música 🎶"
    ],
    final: [
      "O carimbó espalha ritmo e alegria 🌞"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  danca_funk: {
    tema: "dancas",
    subtema: "funk",
    palavras_chave: [
      "funk",
      "funk brasileiro"
    ],
    inicio: [
      "O funk possui batidas fortes e cheias de energia 🔊"
    ],
    explicacao_curta: [
      "O funk é uma dança brasileira muito presente nas festas e na cultura jovem."
    ],
    explicacao_aprofundada: [
      "Os movimentos acompanham ritmos marcantes e permitem muita criatividade."
    ],
    curiosidade: [
      "O funk brasileiro nasceu nas comunidades urbanas 🎶"
    ],
    interacao: [
      "Você consegue criar um passo divertido de funk?"
    ],
    atividade: [
      "Monte uma sequência de movimentos rápidos 🎵"
    ],
    final: [
      "A dança pode transformar ritmo em expressão 🌈"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  danca_classica: {
    tema: "dancas",
    subtema: "danca_classica",
    palavras_chave: [
      "danca classica"
    ],
    inicio: [
      "A dança clássica busca beleza e precisão ✨"
    ],
    explicacao_curta: [
      "Ela possui movimentos treinados e organizados."
    ],
    explicacao_aprofundada: [
      "Os dançarinos praticam equilíbrio, postura e movimentos delicados."
    ],
    interacao: [
      "Você gostaria de aprender movimentos suaves?"
    ],
    atividade: [
      "Experimente andar lentamente na ponta dos pés 🩰"
    ],
    final: [
      "A dança clássica mistura disciplina e arte 🌙"
    ],
    emocao: "leveza",
    nivel: "leve"
  },
  danca_salao: {
    tema: "dancas",
    subtema: "danca_salao",
    palavras_chave: [
      "danca de salao",
      "salao"
    ],
    inicio: [
      "Na dança de salão duas pessoas dançam juntas 💃🕺"
    ],
    explicacao_curta: [
      "Os parceiros acompanham o ritmo da música."
    ],
    explicacao_aprofundada: [
      "A dança de salão valoriza parceria, coordenação e sintonia."
    ],
    interacao: [
      "Você já tentou acompanhar passos com outra pessoa?"
    ],
    atividade: [
      "Faça movimentos em dupla seguindo uma música 🎵"
    ],
    final: [
      "Dançar junto cria conexão e diversão 🌟"
    ],
    emocao: "uniao",
    nivel: "leve"
  },
  danca_contemporanea: {
    tema: "dancas",
    subtema: "danca_contemporanea",
    palavras_chave: [
      "danca contemporanea",
      "contemporanea"
    ],
    inicio: [
      "A dança contemporânea mistura liberdade e criatividade 🌈"
    ],
    explicacao_curta: [
      "Os movimentos podem ser diferentes e cheios de expressão."
    ],
    explicacao_aprofundada: [
      "Ela permite criar movimentos livres inspirados em sentimentos e ideias."
    ],
    interacao: [
      "Que emoção você transformaria em dança?"
    ],
    atividade: [
      "Dance imaginando vento, chuva ou ondas 🌊"
    ],
    final: [
      "Na dança contemporânea o corpo vira imaginação ✨"
    ],
    emocao: "expressao",
    nivel: "leve"
  },
  danca_maracatu: {
    tema: "dancas",
    subtema: "maracatu",
    palavras_chave: [
      "maracatu",
      "afro brasileira",
      "cortejo"
    ],
    inicio: [
      "O maracatu mistura dança, música e tradição afro-brasileira 🥁"
    ],
    explicacao_curta: [
      "Os cortejos possuem tambores fortes e roupas coloridas."
    ],
    explicacao_aprofundada: [
      "O maracatu representa reis, rainhas e elementos culturais afro-brasileiros."
    ],
    curiosidade: [
      "Os tambores do maracatu criam ritmos poderosos 🔥"
    ],
    interacao: [
      "Você gosta de músicas com tambores?"
    ],
    atividade: [
      "Crie um ritmo usando palmas e batidas 🥁"
    ],
    final: [
      "O maracatu une ritmo, história e celebração 🌟"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  danca_cavalo_marinho: {
    tema: "dancas",
    subtema: "cavalo_marinho",
    palavras_chave: [
      "cavalo marinho"
    ],
    inicio: [
      "O cavalo-marinho mistura dança, música e teatro 🎭"
    ],
    explicacao_curta: [
      "A apresentação possui personagens, fantasias e brincadeiras."
    ],
    explicacao_aprofundada: [
      "Essa manifestação cultural combina humor, ritmo e representação teatral."
    ],
    curiosidade: [
      "O cavalo-marinho é muito tradicional em Pernambuco 🌿"
    ],
    interacao: [
      "Você gostaria de usar fantasias em uma apresentação?"
    ],
    atividade: [
      "Crie um personagem divertido para uma dança 🎨"
    ],
    final: [
      "O cavalo-marinho transforma cultura em brincadeira ✨"
    ],
    emocao: "diversao",
    nivel: "leve"
  },
  danca_jongo: {
    tema: "dancas",
    subtema: "jongo",
    palavras_chave: [
      "jongo",
      "tambores"
    ],
    inicio: [
      "O jongo mistura dança, canto e tambores 🥁"
    ],
    explicacao_curta: [
      "As pessoas dançam em roda acompanhando o ritmo."
    ],
    explicacao_aprofundada: [
      "O jongo possui forte ligação com tradições afro-brasileiras."
    ],
    interacao: [
      "Você consegue criar um ritmo usando o corpo?"
    ],
    atividade: [
      "Dance em roda acompanhando palmas 🎵"
    ],
    final: [
      "O jongo mantém tradições culturais vivas 🌿"
    ],
    emocao: "uniao",
    nivel: "leve"
  },
  danca_catira: {
    tema: "dancas",
    subtema: "catira",
    palavras_chave: [
      "catira",
      "sapateado brasileiro"
    ],
    inicio: [
      "A catira mistura sapateado, palmas e ritmo 👢"
    ],
    explicacao_curta: [
      "Os dançarinos marcam a música com pés e mãos."
    ],
    explicacao_aprofundada: [
      "A dança possui movimentos sincronizados e muito ritmo."
    ],
    interacao: [
      "Você consegue bater palmas no ritmo de uma música?"
    ],
    atividade: [
      "Crie uma sequência de palmas e passos 👏"
    ],
    final: [
      "A catira transforma ritmo em movimento 🌟"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  danca_fandango: {
    tema: "dancas",
    subtema: "fandango",
    palavras_chave: [
      "fandango",
      "sul"
    ],
    inicio: [
      "O fandango possui sapateado e música animada 🎻"
    ],
    explicacao_curta: [
      "Essa dança tradicional é muito conhecida no sul do Brasil."
    ],
    explicacao_aprofundada: [
      "Os dançarinos marcam o ritmo usando os pés e movimentos coordenados."
    ],
    interacao: [
      "Você gosta de danças rápidas ou lentas?"
    ],
    atividade: [
      "Experimente marcar ritmos diferentes com os pés 👣"
    ],
    final: [
      "O fandango mistura tradição e alegria 🌈"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  danca_congada: {
    tema: "dancas",
    subtema: "congada",
    palavras_chave: [
      "congada",
      "afro brasileira",
      "cortejo"
    ],
    inicio: [
      "A congada mistura música, dança e tradição afro-brasileira 👑"
    ],
    explicacao_curta: [
      "Ela possui cortejos, cantos e celebrações culturais."
    ],
    explicacao_aprofundada: [
      "A congada mantém histórias e tradições importantes da cultura afro-brasileira."
    ],
    interacao: [
      "Você já viu desfiles culturais com música e dança?"
    ],
    atividade: [
      "Crie coroas e roupas coloridas em um desenho 🎨"
    ],
    final: [
      "A congada celebra memória, cultura e comunidade 🌟"
    ],
    emocao: "celebracao",
    nivel: "leve"
  },
  danca_caboclinho: {
    tema: "dancas",
    subtema: "caboclinho",
    palavras_chave: [
      "caboclinho",
      "indigena"
    ],
    inicio: [
      "O caboclinho possui movimentos rápidos e cheios de energia 🌿"
    ],
    explicacao_curta: [
      "A dança é inspirada nos povos indígenas."
    ],
    explicacao_aprofundada: [
      "Os movimentos lembram guerreiros em ação acompanhados por música forte."
    ],
    interacao: [
      "Você conseguiria criar movimentos inspirados na natureza?"
    ],
    atividade: [
      "Dance imaginando passos leves pela floresta 🌳"
    ],
    final: [
      "O caboclinho mistura tradição, ritmo e movimento ✨"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  danca_coco_pernambucano: {
    tema: "dancas",
    subtema: "coco_pernambucano",
    palavras_chave: [
      "coco",
      "coco pernambucano"
    ],
    inicio: [
      "O coco pernambucano é cheio de ritmo e animação 🥥"
    ],
    explicacao_curta: [
      "As pessoas cantam, batem palmas e dançam juntas."
    ],
    explicacao_aprofundada: [
      "Os movimentos acompanham músicas alegres e batidas marcantes."
    ],
    interacao: [
      "Você gosta de músicas com palmas e batidas?"
    ],
    atividade: [
      "Crie ritmos usando pés e mãos 👏👣"
    ],
    final: [
      "O coco transforma música e dança em celebração 🌞"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  arte_rupestre: {
    tema: "historia_arte",
    subtema: "arte_rupestre",
    palavras_chave: ["arte rupestre", "caverna", "desenho na pedra", "arte antiga"],
    inicio: ["A arte rupestre é uma das formas de arte mais antigas do mundo 🪨"],
    explicacao_curta: ["Os seres humanos desenhavam nas paredes das cavernas usando tintas naturais."],
    explicacao_aprofundada: ["Esses desenhos mostravam animais, caçadas e momentos do cotidiano das antigas comunidades."],
    curiosidade: ["Algumas pinturas rupestres existem há milhares de anos ⏳"],
    interacao: ["O que você desenharia para contar sua história?"],
    atividade: ["Faça desenhos usando tons terrosos em papel kraft 🎨"],
    final: ["As cavernas guardam memórias dos primeiros artistas 🌍"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  arte_egipcia: {
    tema: "historia_arte",
    subtema: "arte_egipcia",
    palavras_chave: ["arte egipcia", "egito antigo", "hieroglifo", "piramide", "egito", "egipcio", "egipcia"],
    inicio: ["A arte egípcia nasceu às margens do rio Nilo 🏺"],
    explicacao_curta: ["Ela aparece em pirâmides, templos e pinturas cheias de símbolos."],
    explicacao_aprofundada: ["Os egípcios desenhavam pessoas de lado e utilizavam hieróglifos para registrar histórias e crenças."],
    curiosidade: ["Os hieróglifos funcionavam como uma escrita com desenhos ✨"],
    interacao: ["Você gostaria de criar seu próprio símbolo egípcio?"],
    atividade: ["Desenhe uma pirâmide com símbolos inventados ✏️"],
    final: ["A arte egípcia mistura mistério, história e símbolos 🌞"],
    emocao: "misterio",
    nivel: "leve",
    resposta_direta: `🏺 **Arte Egípcia**

📅 **Período**: c. 3000 a.C. a 30 a.C.

🎨 **Principais Artistas**: Os artistas geralmente não assinavam suas obras.

🌟 **Características**:
• Ligada à religião e aos faraós.
• Figuras desenhadas de perfil.
• Hierarquia de tamanho (o faraó aparecia maior).
• Pinturas, esculturas e pirâmides.

🖼️ **Obras Importantes**:
• Máscara de Tutancâmon.
• Pirâmides de Gizé.`
  },
  arte_grega: {
    tema: "historia_arte",
    subtema: "arte_grega",
    palavras_chave: ["arte grega", "grecia antiga", "escultura grega", "grecia", "grego", "grega", "fidias", "miron", "policleto", "discobolo"],
    inicio: ["Os gregos valorizavam equilíbrio e beleza 🏛️"],
    explicacao_curta: ["A arte grega mostrava esculturas e construções harmoniosas."],
    explicacao_aprofundada: ["Os artistas gregos estudavam o corpo humano e criavam obras com proporção e movimento."],
    curiosidade: ["Muitas esculturas gregas representavam atletas e deuses ⚡"],
    interacao: ["Você já viu colunas gregas em filmes ou desenhos?"],
    atividade: ["Crie uma construção usando formas simétricas ✏️"],
    final: ["A arte grega influenciou artistas do mundo inteiro 🌍"],
    emocao: "admiracao",
    nivel: "leve",
    resposta_direta: `🏛️ **Arte Grega**

📅 **Período**: c. 800 a.C. a 146 a.C.

🎨 **Principais Artistas**: Fídias, Míron, Policleto.

🌟 **Características**:
• Busca da beleza e proporção do corpo humano.
• Temas mitológicos.
• Esculturas realistas.

🖼️ **Obras Importantes**:
• Discóbolo (Míron).
• Estátua de Atena (Fídias).`
  },
  arte_romana: {
    tema: "historia_arte",
    subtema: "arte_romana",
    palavras_chave: ["arte romana", "roma antiga", "coliseu", "romano", "romana", "roma", "panteao"],
    inicio: ["Os romanos construíram obras gigantescas 🏟️"],
    explicacao_curta: ["A arte romana se inspirou nos gregos e mostrava cenas do cotidiano."],
    explicacao_aprofundada: ["Os romanos criaram estradas, arcos e anfiteatros famosos, como o Coliseu."],
    curiosidade: ["O Coliseu recebia grandes apresentações e eventos 🎭"],
    interacao: ["Você gostaria de visitar uma construção romana antiga?"],
    atividade: ["Desenhe um arco inspirado na arquitetura romana ✏️"],
    final: ["A arte romana uniu força, arquitetura e história 🏛️"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `🏛️ **Arte Romana**

📅 **Período**: c. 509 a.C. a 476 d.C.

🎨 **Principais Artistas**: Muitos permanecem desconhecidos.

🌟 **Características**:
• Influência grega.
• Realismo nos retratos.
• Grandes construções públicas.

🖼️ **Obras Importantes**:
• Coliseu de Roma.
• Panteão de Roma.`
  },
  arte_bizantina: {
    tema: "historia_arte",
    subtema: "arte_bizantina",
    palavras_chave: ["arte bizantina", "imperio bizantino", "bizantino", "bizantina", "santa sofia", "mosaico", "mosaicos", "fundo dourado"],
    inicio: ["A arte bizantina brilha com fundos dourados e mosaicos religiosos 🏰"],
    explicacao_curta: ["Ela foi muito marcante nos séculos V ao XV, cheia de cores brilhantes."],
    explicacao_aprofundada: ["Os ícones e painéis bizantinos decoravam catedrais do Império Romano do Oriente com cores vibrantes e pedras reluzentes."],
    curiosidade: ["A Basílica de Santa Sofia já foi uma igreja, uma mesquita e hoje é um museu fantástico na Turquia! ⭐"],
    interacao: ["Você já viu desenhos montados com pequenos quadradinhos coloridos?"],
    atividade: ["Crie um mosaico usando pedacinhos de papéis coloridos colados ✏️"],
    final: ["Os mosaicos bizantinos brilham como joias da história ✨"],
    emocao: "admiracao",
    nivel: "leve",
    resposta_direta: `🏰 **Arte Bizantina**

📅 **Período**: Séculos V a XV

🎨 **Principais Artistas**: A maioria dos criadores de mosaicos de temas religiosos permanece anônima.

🌟 **Características**:
• Temas religiosos e divinos.
• Fundo dourado reluzente que traz um ar celestial.
• Ícones rígidos, formais e mosaicos ricos em detalhes geométricos.

🖼️ **Obra Marcante**:
• Basílica de Santa Sofia.`
  },
  arte_romanica: {
    tema: "historia_arte",
    subtema: "arte_romanica",
    palavras_chave: ["arte romanica", "romanico", "romanica", "idade media romanica", "santiago de compostela"],
    inicio: ["A arte românica é forte, robusta e cheia de mistérios medievais 🏰"],
    explicacao_curta: ["Ela dominou nos séculos XI e XII na Idade Média, com catedrais parecidas com castelos."],
    explicacao_aprofundada: ["As construções românicas tinham paredes muito grossas para resistirem ao tempo e portais esculpidos com monstros e seres bíblicos."],
    curiosidade: ["As igrejas eram chamadas de 'fortalezas espirituais' e serviam de abrigo contra perigos físicos! ⚔️"],
    interacao: ["Você gostaria de morar em um castelo com muralhas fortificadas?"],
    atividade: ["Desenhe uma igreja forte com uma porta em formato de arco redondo ✏️"],
    final: ["A arte românica mostra toda a força medieval na pedra 🏛️"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `🏰 **Arte Românica**

📅 **Período**: Séculos XI e XII

🎨 **Principais Artistas**: Criada por corporações coletivas de artesãos e pedreiros.

🌟 **Características**:
• Igrejas com paredes grossas e maciças protetoras.
• Arcos redondos e poucas e pequenas janelas.
• Esculturas religiosas integradas nas fachadas e colunas.

🖼️ **Obra Marcante**:
• Catedral de Santiago de Compostela.`
  },
  arte_gotica: {
    tema: "historia_arte",
    subtema: "arte_gotica",
    palavras_chave: ["arte gotica", "gotica", "gotico", "notre dame", "notre-dame", "vitrais", "arco pontiagudo"],
    inicio: ["A arte gótica se estica até o céu com grandes vitrais e arcos pontiagudos! 🏰"],
    explicacao_curta: ["Surgiu nos séculos XII a XVI com catedrais muito altas e janelas iluminadas e coloridas."],
    explicacao_aprofundada: ["Grandes arcos em ogiva e contrafortes permitiram que as paredes fossem finas e cheias de vitrais que contavam histórias com luz natural!"],
    curiosidade: ["Catedral de Notre-Dame de Paris levou mais de 180 anos inteiros para ser finalizada! 😮"],
    interacao: ["Você já reparou como a luz do sol brilha em vidros de cores diferentes?"],
    atividade: ["Faça uma linda janela gótica em papel preto e cole celofane colorido nela 🎨"],
    final: ["Nas catedrais góticas, a luz de cores era a própria pintura ✨"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `🏰 **Arte Gótica**

📅 **Período**: Séculos XII a XVI

🎨 **Principais Artistas**: Mestres construtores de catedrais e vidreiros antigos.

🌟 **Características**:
• Vitrais coloridos que deixam a luz do sol inundar o ambiente de cor.
• Grandes e altíssimas catedrais que apontavam diretamente para o céu.
• Arcos pontiagudos (ogivais) e gárgulas divertidas e misteriosas esculpidas.

🖼️ **Obra Marcante**:
• Catedral de Notre-Dame.`
  },
  renascimento: {
    tema: "historia_arte",
    subtema: "renascimento",
    palavras_chave: ["renascimento", "arte renascentista", "renascentista", "da vinci", "leonardo da vinci", "michelangelo", "rafael sanzio", "mona lisa", "capela sistina", "ultima ceia"],
    inicio: ["O Renascimento trouxe novas formas de observar o mundo 🌞"],
    explicacao_curta: ["Os artistas buscavam criar obras mais realistas."],
    explicacao_aprofundada: ["Eles estudavam luz, perspectiva, anatomia e natureza para melhorar suas pinturas e esculturas."],
    curiosidade: ["Leonardo da Vinci foi um dos artistas mais conhecidos do Renascimento 🎨"],
    interacao: ["Você gostaria de desenhar algo muito detalhado?"],
    atividade: ["Faça um desenho usando profundidade e perspectiva ✏️"],
    final: ["O Renascimento aproximou arte, ciência e observação 🌍"],
    emocao: "descoberta",
    nivel: "leve",
    resposta_direta: `🎨 **Renascimento**

📅 **Período**: Séculos XIV a XVI

🎨 **Principais Artistas**: Leonardo da Vinci, Michelangelo, Rafael Sanzio.

🌟 **Características**:
• Valorização da ciência, anatomia e inteligência humana.
• Perspectiva tridimensional realista para dar profundidade.
• Realismo expressivo nas formas e rostos.

🖼️ **Obras Importantes**:
• Mona Lisa
• A Última Ceia
• Teto da Capela Sistina.`
  },
  barroco: {
    tema: "historia_arte",
    subtema: "barroco",
    palavras_chave: ["barroco", "luz e sombra forte", "caravaggio", "rembrandt", "aleijadinho", "profetas de congonhas", "vocacao de sao mateus"],
    inicio: ["O Barroco é cheio de emoção e dramaticidade ✨"],
    explicacao_curta: ["As obras usam contrastes fortes de luz e sombra."],
    explicacao_aprofundada: ["Os artistas barrocos criavam movimento e intensidade para impressionar quem observava."],
    curiosidade: ["Muitas igrejas barrocas possuem detalhes dourados 🌟"],
    interacao: ["Você prefere desenhos claros ou cheios de contraste?"],
    atividade: ["Faça uma pintura usando áreas bem claras e bem escuras 🎨"],
    final: ["O Barroco transforma emoção em arte 🌙"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `🎨 **Barroco**

📅 **Período**: Séculos XVII e XVIII

🎨 **Principais Artistas**: Caravaggio, Rembrandt, Aleijadinho.

🌟 **Características**:
• Emoção intensa, paixão e sensação de movimento teatral.
• Contraste agudo de luz e sombra (efeito tenebrista).
• Movimento dramático das figuras.

🖼️ **Obras Importantes**:
• Vocação de São Mateus.
• Profetas de Congonhas (Aleijadinho).`
  },
  rococo: {
    tema: "historia_arte",
    subtema: "rococo",
    palavras_chave: ["rococo", "jean-honore fragonard", "fragonard", "o balanco", "balanco", "estilo delicado"],
    inicio: ["O Rococó é o reino das cores suaves, conchas decoradas e jardins de elegância! 🎨"],
    explicacao_curta: ["Foi um estilo de 1700 a 1780 com muita delicadeza, focado na leveza e diversão."],
    explicacao_aprofundada: ["Os pintores criavam cenas festivas, piqueniques nos jardins reais e usavam conchas, flores espiraladas e dourados sobre tons claros."],
    curiosidade: ["O nome Rococó vem da palavra francesa 'rocaille', que significa desenhos moldados como conchas ornamentais! 🐚"],
    interacao: ["Você prefere pintar com cores fortes e fortes ou cores clarinhas e pastéis?"],
    atividade: ["Desenhe uma moldura de espelho cheia de florzinhas de tons pastéis ✏️"],
    final: ["O Rococó celebra a alegria de viver com extrema doçura e graça ✨"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `🎨 **Rococó**

📅 **Período**: 1700 - 1780

🎨 **Principais Artistas**: Jean-Honoré Fragonard.

🌟 **Características**:
• Cores suaves (tons pastéis e rosa/azul bebê).
• Elegância, curvas leves e ornamentação ricamente graciosa.
• Temas leves, românticos, de lazer e festas na natureza.

🖼️ **Obra Importante**:
• O Balanço.`
  },
  neoclassicismo: {
    tema: "historia_arte",
    subtema: "neoclassicismo",
    palavras_chave: ["neoclassicismo", "neoclassico", "jacques-louis david", "david", "juramento dos horacios", "horacios"],
    inicio: ["O Neoclassicismo se inspira na lógica, racionalidade e harmonia da Grécia e Roma! 🏛️"],
    explicacao_curta: ["Surgiu entre 1760 e 1850 como uma volta triunfal ao equilíbrio clássico."],
    explicacao_aprofundada: ["Os artistas criavam composições limpas, heróis corajosos e poses perfeitas imitando estátuas de mármore antigo."],
    curiosidade: ["Jacques-Louis David foi o pintor oficial de Napoleão Bonaparte e organizou grandes festas heroicas na França! ⚔️"],
    interacao: ["Você gosta de histórias sobre heróis antigos de Roma ou da Grécia?"],
    atividade: ["Desenhe uma cena de alguém em pose de atleta vitorioso com poses simétricas ✏️"],
    final: ["O Neoclassicismo provou que o equilíbrio e a beleza clássica são eternos ✨"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `🏭 **Neoclassicismo**

📅 **Período**: 1760 - 1850

🎨 **Artista Principal**: Jacques-Louis David.

🌟 **Características**:
• Inspiração nos ideais da Grécia e Roma Antigas (perfeição clássica).
• Extremo equilíbrio, controle emocional e racionalidade visual.
• Figuras nítidas e temas solenes ou históricos.

🖼️ **Obra Importante**:
• Juramento dos Horácios.`
  },
  romantismo: {
    tema: "historia_arte",
    subtema: "romantismo",
    palavras_chave: ["romantismo", "romantico", "eugene delacroix", "delacroix", "liberdade guiando o povo", "natureza dramatica"],
    inicio: ["O Romantismo é a explosão de emoção intensa, cores fortes e ventanias selvagens! 🌪️"],
    explicacao_curta: ["Esteve em alta de 1800 a 1850, celebrando a paixão, a liberdade e o heroísmo nacional."],
    explicacao_aprofundada: ["Os pintores românticos queriam emocionar o observador. Pintavam barcos em mares revoltos, revoluções do povo e heróis entusiasmados."],
    curiosidade: ["Eugène Delacroix usava cores tão misturadas de perto que pareciam pinceladas soltas, antecipando o próprio impressionismo! 🖌️"],
    interacao: ["Que música intensa você colocaria como trilha de fundo para uma tempestade gigantesca na floresta?"],
    atividade: ["Pinte um céu tempestuoso usando vermelho, azul escuro e amarelo misturados com vivacidade 🎨"],
    final: ["O Romantismo liberta a imaginação e a emoção de vento em popa ✨"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `🏭 **Romantismo**

📅 **Período**: 1800 - 1850

🎨 **Artistas Principais**: Eugène Delacroix.

🌟 **Características**:
• Exaltação da emoção forte, paixão e liberdade de espírito.
• Paisagens naturais imensas, dramáticas, indomáveis e selvagens.
• Pinceladas carregadas de cores vibrantes e contrastes expressivos.

🖼️ **Obra Importante**:
• A Liberdade Guiando o Povo.`
  },
  realismo: {
    tema: "historia_arte",
    subtema: "realismo",
    palavras_chave: ["realismo", "realista", "gustave courbet", "courbet", "quebradores de pedra", "vida cotidiana", "sem idealizacao"],
    inicio: ["O Realismo mostra o mundo exatamente como ele é, com toda a sua simplicidade do dia a dia! 🌾"],
    explicacao_curta: ["Dominou entre 1840 e 1880, retratando o trabalho árduo, pessoas normais e o cotidiano sem disfarces."],
    explicacao_aprofundada: ["Em vez de heróis da mitologia ou reis elegantes, os realistas pintavam camponeses, sapateiros e mineradores com grande dignidade e respeito."],
    curiosidade: ["Gustave Courbet declarou certa vez: 'Mostre-me um anjo e eu pintarei um anjo!' — reforçando que só pintava o palpável! 👼"],
    interacao: ["O que há de mais legal em observar as pessoas fazendo suas tarefas diárias comuns na rua?"],
    atividade: ["Desenhe alguém de sua família de forma muito simples fazendo uma atividade comum como cozinhar ou limpar ✏️"],
    final: ["O Realismo resgata a poesia escondida nas coisas mais simples da nossa vida real ✨"],
    emocao: "observacao",
    nivel: "leve",
    resposta_direta: `🏭 **Realismo**

📅 **Período**: 1840 - 1880

🎨 **Artista Principal**: Gustave Courbet.

🌟 **Características**:
• Foco total na vida cotidiana realista do trabalho doméstico.
• Engajamento crítico com causas e questões sociais do povo operário.
• Rejeição de idealizações românticas ou figuras enfeitadas artificiais.

🖼️ **Obra Importante**:
• Os Quebradores de Pedra.`
  },
  impressionismo: {
    tema: "historia_arte",
    subtema: "impressionismo",
    palavras_chave: ["impressionismo", "impressionista", "claude monet", "monet", "edgar degas", "degas", "impressao nascer do sol"],
    inicio: ["Os impressionistas adoravam pintar luz, vento e o movimento das águas em tempo real! ☀️"],
    explicacao_curta: ["Eles registravam momentos rápidos usando pinceladas leves diretamente ao ar livre."],
    explicacao_aprofundada: ["Os artistas impressionistas buscavam captar a sensação do momento e das mudanças da luz nas coisas."],
    curiosidade: ["Claude Monet pintou várias vezes a mesma catedral em horários diferentes para ver como o sol mudava suas cores! 🌤️"],
    interacao: ["Você já observou como o céu muda de color ao longo do dia?"],
    atividade: ["Pinte uma paisagem usando pequenas pinceladas soltas e rápidas 🎨"],
    final: ["A luz do sol e das cores pode transformar completamente uma pintura ✨"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `🎨 **Impressionismo**

📅 **Período**: aproximadamente de 1874 a 1886, na França.

🌟 **O que é o Impressionismo?**

O Impressionismo foi um movimento artístico que buscava retornar as impressões visuais de um momento, principalmente os efeitos da luz e das cores na natureza.

Os artistas impressionisas preferiam pintar ao ar livre para observar as mudanças da luz ao longo do dia. Eles não se preocupavam em fazer desenhos perfeitos, mas em registrar aquilo que viam e sentiam naquele instante.

🎨 **Artistas Principais**: Claude Monet, Edgar Degas.

🌟 **Características**:
• Captura da luz natural em constante transformação.
• Pinceladas rápidas, visíveis e texturas soltas de pura cor.
• Pintura executada diretamente ao ar livre (plein air).

🖼️ **Obra Inaugural**:
• Impressão, Nascer do Sol (1872), que deu nome ao movimento.`
  },
  pos_impressionismo: {
    tema: "historia_arte",
    subtema: "pos_impressionismo",
    palavras_chave: ["pos impressionismo", "pos-impressionismo", "pos impressionista", "vincent van gogh", "van gogh", "paul cezanne", "cezanne", "noite estrelada", "jogadores de cartas"],
    inicio: ["O Pós-Impressionismo colore tudo com muito mais força, contornos e sentimentos profundos! 🎨"],
    explicacao_curta: ["Foi ativo de 1886 a 1905, abrindo as portas do estilo pessoal íntimo e expressivo."],
    explicacao_aprofundada: ["Vincent van Gogh usava pinceladas onduladas cheias de energia, e Paul Cézanne usava planos geométricos para dar volume às frutas e montanhas."],
    curiosidade: ["Van Gogh usava tanta tinta em suas telas que suas pinturas continuavam secando muito tempo depois de prontas! 🌻"],
    interacao: ["Como seria pintar uma noite cheia de estrelas que giram espiralando no céu, igual a de Van Gogh?"],
    atividade: ["Pinte uma árvore ou flor usando linhas onduladas cheias de vigor e curvas expressivas 🎨"],
    final: ["O Pós-Impressionismo transformou a pintura em um confessionário de cores e vibrações ✨"],
    emocao: "sentimento",
    nivel: "leve",
    resposta_direta: `🎨 **Pós-Impressionismo**

📅 **Período**: 1886 - 1905

🎨 **Artistas Principais**: Vincent van Gogh, Paul Cézanne.

🌟 **Características**:
• Cores intensas, quentes e altamente expressivas das emoções.
• Liberdade de estilo pessoal marcante para distorcer texturas ou tonalidades.
• Foco nas formas geométricas estruturais subjacentes da natureza.

🖼️ **Obras Importantes**:
• Noite Estrelada.
• Os Jogadores de Cartas.`
  },
  expressionismo: {
    tema: "historia_arte",
    subtema: "expressionismo",
    palavras_chave: ["expressionismo", "expressionista", "edvard munch", "munch", "o grito", "grito", "cores intensas", "distorção"],
    inicio: ["O Expressionismo grita as emoções de dentro para fora na tela da pintura! 🎨🕹️"],
    explicacao_curta: ["Aconteceu de 1905 a 1920, focando em expressar o que sentimos de forma intensa."],
    explicacao_aprofundada: ["Os expressionistas usavam distorções de corpos, cores agressivas não-reais e linhas fortes para mostrar sentimentos como medo, ansiedade e empolgação."],
    curiosidade: ["A obra 'O Grito' de Edvard Munch foi feita em quatro versões diferentes com tintas, giz e pastel sobre papelão! 😱"],
    interacao: ["Se o vento ou a natureza estivessem muito bravos, que cores você usaria para exprimir isso?"],
    atividade: ["Desenhe uma figura expressando uma emoção extrema usando apenas giz de cera colorido bem forte ✏️"],
    final: ["O Expressionismo dá voz visual para as emoções humanas mais marcantes 🌍"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `🎨 **Expressionismo**

📅 **Período**: 1905 - 1920

🎨 **Artista Principal**: Edvard Munch.

🌟 **Características**:
• Transmissão visceral de emoções internas subjetivas (medo, angústia).
• Distorções caricaturais expressivas das figuras e paisagens.
• Cores intensas, simbólicas e de alto contraste.

🖼️ **Obra Importante**:
• O Grito.`
  },
  cubismo: {
    tema: "historia_arte",
    subtema: "cubismo",
    palavras_chave: ["cubismo", "cubista", "pablo picasso", "picasso", "georges braque", "braque", "formas geometricas", "les demoiselles d avignon"],
    inicio: ["O Cubismo transforma objetos e pessoas em blocos de formas geométricas! 🟦🔺"],
    explicacao_curta: ["Os artists mostravam vários lados e ângulos do objeto ao mesmo tempo planos."],
    explicacao_aprofundada: ["As imagens pareciam quebradas e reorganizadas em diferentes ângulos geométricos simultâneos inspiradores."],
    curiosidade: ["Pablo Picasso pintou algumas de suas obras mais fantásticas inspirado no estilo esculpido das velhas máscaras de madeira africanas! 🎭"],
    interacao: ["Você conseguiria desenhar um bicho ou um vaso usando só quadrados, círculos e triângulos?"],
    atividade: ["Monte um desenho usando recortes colados de cilindros, triângulos e retângulos recortados de revistas ✂️"],
    final: ["O Cubismo transformou o espaço plano da tela em um espelho partido que cria novos mundos 🟦"],
    emocao: "criatividade",
    nivel: "leve",
    resposta_direta: `🎨 **Cubismo**

📅 **Período**: 1907 - 1914

🎨 **Artistas Principais**: Pablo Picasso, Georges Braque.

🌟 **Características**:
• Formas geométricas nítidas fracionando o espaço visual.
• Vários pontos de vista planos observados na mesma tela ao mesmo tempo.
• Desconstrução geométrica da imagem sem ilusão de profundidade tradicional.

🖼️ **Obra Inaugural**:
• Les Demoiselles d'Avignon (1907).`
  },
  surrealismo: {
    tema: "historia_arte",
    subtema: "surrealismo",
    palavras_chave: ["surrealismo", "surrealista", "salvador dali", "dali", "rene magritte", "magritte", "sonho arte", "a persistencia da memoria"],
    inicio: ["O Surrealismo mistura sonho e imaginação onde nada é de verdade impossível! 🌙"],
    explicacao_curta: ["As obras surrealistas parecem cenas saídas diretamente de sonhos estranhos e divertidos."],
    explicacao_aprofundada: ["Os artistas combinavam objetos absurdos (como relógios moles ou elefantes com pernas longas de girafa) para desafiar a lógica comum."],
    curiosidade: ["Salvador Dalí andava com um tamanduá de estimação pela rua em Paris e tinha fetiche por costurar pãezinhos no chapéu! 🐜🎩"],
    interacao: ["Que sonho estranho seu você gostaria de ilustrar em papel hoje?"],
    atividade: ["Misture do avesso três objetos que não combinam (por exemplo: um peixinho de patins voando!) em uma linda paisagem 🎨"],
    final: ["A nossa imaginação é um baú sem chaves de mundos surpreendentes de fantasia ✨"],
    emocao: "imaginacao",
    nivel: "leve",
    resposta_direta: `🎨 **Surrealismo**

📅 **Período**: 1924 - 1940

🎨 **Artistas Principais**: Salvador Dalí, René Magritte.

🌟 **Características**:
• Inspiração profunda nos mistérios dos sonhos e da mente inconsciente.
• Fantasia, surpresa, absurdo e justaposições inesperadas e bizarras.
• Realismo técnico minucioso aplicado a cenas fantásticas e impossíveis.

🖼️ **Obra Importante**:
• A Persistência da Memória.`
  },
  pop_art: {
    tema: "historia_arte",
    subtema: "pop_art",
    palavras_chave: ["pop art", "popart", "andy warhol", "warhol", "roy lichtenstein", "lichtenstein", "marilyn diptych", "cultura popular", "latas de sopa"],
    inicio: ["A Pop Art traz a publicidade, os gibis, brinquedos e o cotidiano moderno direto para as galerias de arte! 🥫💥"],
    explicacao_curta: ["Explodiu de 1950 a 1970, transformando coisas do consumo do povo em belas obras de cores puras."],
    explicacao_aprofundada: ["Com cores super brilhantes, telas repetidas em série e imitação de quadrinhos gigantescos, ela criticava e se divertia com a cultura das celebridades."],
    curiosidade: ["Andy Warhol era obcecado por latas de Sopa de Tomate Campbell's, fazendo dezenas de quadros lindos mostrando apenas a lata da comida! 🥫🎨"],
    interacao: ["Se você fosse fazer um quadro de um lanche do McDonald's ou do seu salgadinho favorito, como ele seria?"],
    atividade: ["Desenhe um herói ou objeto de sua cozinha de forma repetida com cores fluorescentes vivas em quadrículas 🎨"],
    final: ["A Pop Art prova que até o objeto de supermercado mais comum tem sua beleza pop única ⭐"],
    emocao: "criatividade",
    nivel: "leve",
    resposta_direta: `🎨 **Pop Art**

📅 **Período**: 1950 - 1970

🎨 **Artistas Principais**: Andy Warhol, Roy Lichtenstein.

🌟 **Características**:
• Foco em símbolos da cultura popular de consumo de massa.
• Temas extraídos de gibis de quadrinhos, celebridades e campanhas publicitárias.
• Cores chapadas e vibrantes com uso de repetições gráficas seriadas.

🖼️ **Obra Importante**:
• Marilyn Diptych.`
  },
  arte_contemporanea: {
    tema: "historia_arte",
    subtema: "arte_contemporanea",
    palavras_chave: ["arte contemporanea", "arte atual", "yayoi kusama", "kusama", "vik muniz", "adriana varejao", "tecnologia e ia", "arte digital", "instalações"],
    inicio: ["A arte contemporânea junta pintura, sucata, telas gigantes e até inteligência artificial sem barreiras! 🌍✨"],
    explicacao_curta: ["Mistura e explora técnicas e ideias nos dias de hoje livres de limites formais."],
    explicacao_aprofundada: ["Os artistas de hoje criam ambientes onde o visitante entra, toca nos objetos e usa os cinco sentidos, abraçando a diversidade tecnológica."],
    curiosidade: ["Yayoi Kusama faz espaços incríveis forrados com bolinhas coloridas e espelhos repetindo as luzes ao infinito pelo teto! 🔴🌌"],
    interacao: ["Que barulho, cheiro ou material surpreendente você traria para o centro de um museu?"],
    atividade: ["Crie uma arte usando materiais recicláveis ♻️"],
    final: ["A arte de hoje vive para o interagir e nos conectar livremente em múltiplos mundos 🎨"],
    emocao: "exploracao",
    nivel: "leve",
    resposta_direta: `🎨 **Arte Contemporânea**

📅 **Período**: 1970 até hoje

🎨 **Artistas Principais**: Yayoi Kusama, Vik Muniz, Adriana Varejão.

🌟 **Características**:
• Mistura de ferramentas e suportes (telas digitais, esculturas de lixo, instalações de vidro).
• Salas imersivas e instalações gigantes que convidam à participação.
• Forte uso de recursos digitais e inteligências interativas modernas.

🖼️ **Obras Marcantes**:
• Infinity Mirror Rooms (Yayoi Kusama).
• Imagens de Lixo (Vik Muniz).`
  },

  // --- LITERATURA ---
  o_que_e_literatura: {
    tema: "literatura",
    subtema: "o_que_e_literatura",
    palavras_chave: ["o que e literatura", "definicao de literatura", "arte das palavras", "literatura infantil"],
    inicio: ["Literatura é a arte de contar histórias usando palavras 📖"],
    explicacao_curta: ["São livros, poemas, contos e histórias que nos fazem viajar sem sair do lugar."],
    explicacao_aprofundada: ["Através da literatura, podemos sentir emoções, conhecer personagens e aprender sobre o mundo e sobre nós mesmos."],
    curiosidade: ["A palavra 'literatura' vem do latim 'littera', que significa 'letra' ✨"],
    interacao: ["Que livro você gostaria de viver por dentro?"],
    atividade: ["Desenhe a capa de um livro que você gostaria de escrever 🎨"],
    final: ["As palavras podem criar mundos inteiros 🌍"],
    emocao: "imaginação",
    nivel: "leve"
  },
  o_que_e_poema: {
    tema: "literatura",
    subtema: "o_que_e_poema",
    palavras_chave: ["o que e poema", "definicao de poema", "poesia", "texto poético"],
    inicio: ["Poema é um texto que usa palavras bonitas e ritmo para expressar sentimentos 🌸"],
    explicacao_curta: ["Os poemas podem falar de amor, natureza, amizade ou qualquer coisa que toque o coração."],
    explicacao_aprofundada: ["Diferente de uma história comum, o poema se preocupa com o som das palavras, as rimas e as imagens que elas criam."],
    curiosidade: ["Alguns poemas são tão curtos que cabem em uma frase, outros são enormes como livros 📚"],
    interacao: ["Que sentimento você gostaria de transformar em poema?"],
    atividade: ["Escreva um pequeno poema sobre o sol ou a lua 🌞🌙"],
    final: ["Poemas são como pinturas feitas com palavras ✨"],
    emocao: "sensibilidade",
    nivel: "leve"
  },
  o_que_e_poesia: {
    tema: "literatura",
    subtema: "o_que_e_poesia",
    palavras_chave: ["o que e poesia", "definicao de poesia", "arte poética", "sentimento em palavras"],
    inicio: ["Poesia é a arte de embelezar as palavras para despertar emoções 🦋"],
    explicacao_curta: ["Ela transforma o jeito comum de falar em algo especial e musical."],
    explicacao_aprofundada: ["A poesia pode aparecer em poemas, músicas, provérbios e até em frases soltas que tocam nosso coração."],
    curiosidade: ["A palavra 'poesia' vem do grego 'poiesis', que significa 'criação' ou 'fazer' ✨"],
    interacao: ["Você já sentiu algo tão forte que quis escrever?"],
    atividade: ["Transforme uma frase comum (ex: 'O gato dorme') em algo poético 🐱"],
    final: ["Poesia é encontrar magia nas palavras do dia a dia 🌈"],
    emocao: "criatividade",
    nivel: "leve"
  },
  verso: {
    tema: "literatura",
    subtema: "verso",
    palavras_chave: ["verso", "o que e verso", "linha do poema", "verso e estrofe"],
    inicio: ["Verso é cada linha de um poema 📝"],
    explicacao_curta: ["Quando você escreve um poema, cada linha quebrada é um verso."],
    explicacao_aprofundada: ["Os versos podem ser curtos, longos, rimados ou não, e eles se organizam em estrofes."],
    curiosidade: ["Um poema de um único verso é chamado de monóstico 🎯"],
    interacao: ["Quantos versos você consegue escrever sobre seu animal favorito?"],
    atividade: ["Escreva três versos sobre uma cor que você ama 🌈"],
    final: ["Cada verso é um pequeno passo dentro do poema ✨"],
    emocao: "organização",
    nivel: "leve"
  },
  estrofe: {
    tema: "literatura",
    subtema: "estrofe",
    palavras_chave: ["estrofe", "o que e estrofe", "paragrafo do poema", "conjunto de versos"],
    inicio: ["Estrofe é o conjunto de versos que formam uma 'parte' do poema 📚"],
    explicacao_curta: ["É como um parágrafo, mas feito de linhas de poesia."],
    explicacao_aprofundada: ["As estrofes podem ter dois, três, quatro ou many versos; cada tamanho tem um nome especial (dístico, terceto, quarteto...)."],
    curiosidade: ["Um poema de uma só estrofe é chamado de 'poema monolítico' 🧱"],
    interacao: ["Você consegue separar um poema em duas estrofes?"],
    atividade: ["Escreva duas estrofes: uma sobre o dia e outra sobre a noite 🌞🌙"],
    final: ["As estrofes ajudam o poema a respirar ✨"],
    emocao: "harmonia",
    nivel: "leve"
  },
  tipos_de_versos: {
    tema: "literatura",
    subtema: "tipos_de_versos",
    palavras_chave: ["tipos de versos", "verso livre", "verso rimado", "verso branco", "metro poético"],
    inicio: ["Os versos podem ser organizados de muitas maneiras diferentes 🎨"],
    explicacao_curta: ["Existem versos que rimam, versos que não rimam e versos que seguem um ritmo especial."],
    explicacao_aprofundada: ["Verso rimado: as últimas palavras soam parecidas. Verso branco: tem ritmo mas não rima. Verso livre: não tem rima nem ritmo fixo – é solto como a imaginação."],
    curiosidade: ["Poemas em verso livre parecem conversas escritas de forma poética 🗣️"],
    interacao: ["Você prefere rimas ou versos soltos?"],
    atividade: ["Escreva o mesmo pensamento em um verso rimado e outro livre ✏️"],
    final: ["Não existe jeito certo de fazer um verso; o importante é se expressar 🌈"],
    emocao: "liberdade",
    nivel: "leve"
  },
  metrica: {
    tema: "literatura",
    subtema: "metrica",
    palavras_chave: ["metrica", "o que e metrica na poesia", "medida do verso", "silabas poéticas"],
    inicio: ["Métrica é a medida dos versos, contando as sílabas poéticas 📏"],
    explicacao_curta: ["Na poesia, contamos as sílabas de um jeito especial, diferente do normal."],
    explicacao_aprofundada: ["Em vez de contar sílabas como na fala, juntamos algumas para formar uma 'unidade rítmica' – isso cria o ritmo do poema."],
    curiosidade: ["Versos de sete sílabas poéticas são chamados de 'redondilha maior' 🎵"],
    interacao: ["Vamos tentar contar sílabas poéticas da palavra 'flor'?"],
    atividade: ["Separe as sílabas poéticas do verso: 'A lua brilha no céu' 🌙"],
    final: ["A métrica dá a música escondida nos poemas ✨"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  generos_literarios: {
    tema: "literatura",
    subtema: "generos_literarios",
    palavras_chave: ["generos literarios", "tipos de literatura", "narrativo lirico dramatico", "conto romance poesia teatro"],
    inicio: ["Os gêneros literários são as 'famílias' dos textos literários 📚"],
    explicacao_curta: ["Existem três grandes grupos: narrativo (contos, novelas, romances), lírico (poemas) e dramático (peças de teatro)."],
    explicacao_aprofundada: ["No gênero narrativo, alguém conta uma história; no lírico, alguém expressa sentimentos; no dramático, os personagens falam e agem no palco."],
    curiosidade: ["O gênero narrativo é o mais antigo – as pessoas já contavam histórias ao redor da fogueira 🔥"],
    interacao: ["Qual desses gêneros você mais gosta de ler ou assistir?"],
    atividade: ["Escolha um personagem e escreva uma pequena fala para ele (teatro) ou um sentimento (poesia) 🎭"],
    final: ["Cada gênero tem sua magia, mas todos usam palavras 🌟"],
    emocao: "diversidade",
    nivel: "leve"
  },
  elementos_da_narrativa: {
    tema: "literatura",
    subtema: "elementos_da_narrativa",
    palavras_chave: ["elementos da narrativa", "personagem", "enredo", "tempo", "espaço", "narrador"],
    inicio: ["Uma história é feita de várias partes que trabalham juntas 🧩"],
    explicacao_curta: ["Personagens, enredo, tempo, espaço e narrador são os elementos essenciais da narrativa."],
    explicacao_aprofundada: ["Personagens são quem vive a história; enredo é o que acontece; tempo é quando acontece; espaço é onde acontece; narrador é quem conta."],
    curiosidade: ["O narrador pode ser um personagem (1ª pessoa) ou alguém de fora (3ª pessoa) 🎤"],
    interacao: ["Se você fosse o narrador de sua própria vida, como contaria o dia de hoje?"],
    atividade: ["Desenhe um cenário (espaço) e crie um personagem para viver nele 🎨"],
    final: ["Sem esses elementos, uma história não teria forma ✨"],
    emocao: "organização",
    nivel: "leve"
  },
  curiosidade_literaria_1: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["curiosidade literatura", "fato engraçado livros", "escritores criancas"],
    inicio: ["Você sabia que o livro mais fino do mundo tem apenas 8 páginas? 📖"],
    explicacao_curta: ["Existem livros de todos os tamanhos, desde gigantes até miniaturas que cabem na palma da mão."],
    explicacao_aprofundada: ["Há livros enormes que pesam mais de 20 quilos e outros tão pequenos que é preciso lupa para ler."],
    curiosidade: ["O livro mais grosso do mundo tem mais de 10 mil páginas! 🤯"],
    interacao: ["Que tipo de livro você gostaria de ter: enorme ou minúsculo?"],
    atividade: ["Crie a capa de um livro de tamanho maluco (enorme ou bem pequeno) 🎨"],
    final: ["O tamanho não define a história, e sim as palavras dentro dele 🌟"],
    emocao: "surpresa",
    nivel: "leve"
  },
  curiosidade_literaria_2: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["escritor crianca", "escritor precoce", "autores jovens"],
    inicio: ["Você sabia que alguns livros infantis foram escritos por crianças? 🧒📚"],
    explicacao_curta: ["Sim! Existem autores que escreveram seus primeiros livros com apenas 6 ou 7 anos."],
    explicacao_aprofundada: ["Um exemplo é a britânica Daisy Ashford, que escreveu 'The Young Visiters' aos 9 anos, e o livro foi publicado de verdade."],
    curiosidade: ["Até a famosa autora de 'Frankenstein', Mary Shelley, começou a escrever sua obra aos 18 anos ✍️"],
    interacao: ["Se você escrevesse um livro hoje, sobre o que seria?"],
    atividade: ["Escreva a primeira frase do seu futuro livro 📝"],
    final: ["Toda grande história começa com um pequeno escritor 🌈"],
    emocao: "inspiração",
    nivel: "leve"
  },
  curiosidade_literaria_3: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["livro mais vendido", "recorde de vendas", "bestseller infantil"],
    inicio: ["O livro infantil mais vendido de todos os tempos não é o que você imagina! 🤔"],
    explicacao_curta: ["'O Pequeno Príncipe', de Antoine de Saint-Exupéry, já vendeu mais de 140 milhões de cópias no mundo todo."],
    explicacao_aprofundada: ["Ele foi traduzido para mais de 300 idiomas e dialetos, sendo um dos livros mais traduzidos da história."],
    curiosidade: ["Apesar de ser para crianças, ele traz lições profundas sobre amizade e responsabilidade 🌹"],
    interacao: ["Você já leu 'O Pequeno Príncipe'? Que parte você mais gostou?"],
    atividade: ["Desenhe o planeta do Pequeno Príncipe com sua rosa e seus vulcões 🎨"],
    final: ["Um livro pode viajar por todo o mundo e tocar muitos corações ✨"],
    emocao: "admiracão",
    nivel: "leve"
  },
  curiosidade_literaria_4: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["livro sem palavras", "livro mudo", "história só com imagens"],
    inicio: ["Existe livro que não tem nenhuma palavra? 📖🔇"],
    explicacao_curta: ["Sim! Eles são chamados de 'livros silenciosos' ou 'wordless books'."],
    explicacao_aprofundada: ["As histórias são contadas apenas por meio de ilustrações, deixando o leitor criar as palavras mentalmente."],
    curiosidade: ["Um exemplo famoso é 'A Onda', de Suzy Lee, que conta uma história só com desenhos em azul e branco 🌊"],
    interacao: ["Você conseguiria criar uma história só com desenhos?"],
    atividade: ["Desenhe uma pequena história em quadrinhos sem usar texto nenhum ✏️"],
    final: ["Às vezes, uma imagem vale mais que mil palavras 🌟"],
    emocao: "criatividade",
    nivel: "leve"
  },
  curiosidade_literaria_5: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["biblioteca maior do mundo", "biblioteca do congresso", "livros guardados"],
    inicio: ["A maior biblioteca do mundo fica nos Estados Unidos e tem mais de 170 milhões de itens! 📚🏛️"],
    explicacao_curta: ["É a Biblioteca do Congresso, em Washington D.C."],
    explicacao_aprofundada: ["Se você tentasse ler um item por dia, levaria mais de 465 mil anos para terminar tudo."],
    curiosidade: ["Além de livros, ela guarda mapas, partituras, filmes e até gravações de vozes históricas 🎙️"],
    interacao: ["O que você guardaria em uma biblioteca gigante?"],
    atividade: ["Desenhe sua biblioteca dos sonhos, com escorregadores e pufes coloridos 🎨"],
    final: ["Uma biblioteca é um tesouro cheio de histórias esperando por você ✨"],
    emocao: "encantamento",
    nivel: "leve"
  },

  // --- LUGARES DA ARTE ---
  louvre: {
    tema: "lugares_arte",
    subtema: "louvre",
    palavras_chave: ["louvre", "museu do louvre", "mona lisa museu", "museu paris"],
    inicio: ["O Louvre é um dos museus mais famosos do mundo 🖼️"],
    explicacao_curta: ["Ele fica na França e possui milhares de obras de arte."],
    explicacao_aprofundada: ["O museu guarda pinturas, esculturas e objetos antigos de diferentes épocas da história."],
    curiosidade: ["A famosa Mona Lisa está no Louvre 🎨"],
    interacao: ["Que obra famosa você gostaria de conhecer?"],
    atividade: ["Desenhe um museu cheio de obras imaginárias ✏️"],
    final: ["Museus guardam histórias e criatividade 🌍"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  moma: {
    tema: "lugares_arte",
    subtema: "moma",
    palavras_chave: ["moma", "museu de arte moderna nova york", "museu moderno eua"],
    inicio: ["O MoMA é cheio de arte moderna e criativa 🌈"],
    explicacao_curta: ["O museum reúne pinturas, esculturas e obras modernas."],
    explicacao_aprofundada: ["Muitos artistas modernos experimentaram novas formas, cores e ideias em suas obras."],
    curiosidade: ["O MoMA fica em Nova York 🏙️"],
    interacao: ["Você gosta de artes diferentes e criativas?"],
    atividade: ["Crie uma obra usando formas livres 🎨"],
    final: ["A arte moderna incentiva imaginação e inovação ✨"],
    emocao: "criatividade",
    nivel: "leve"
  },
  masp: {
    tema: "lugares_arte",
    subtema: "masp",
    palavras_chave: ["masp", "museu sao paulo arte", "museu brasil sp"],
    inicio: ["O MASP é um importante museu brasileiro 🇧🇷"],
    explicacao_curta: ["Ele possui obras de artistas do Brasil e do mundo."],
    explicacao_aprofundada: ["O prédio do MASP é conhecido por sua estrutura suspensa vermelha."],
    curiosidade: ["O MASP fica na Avenida Paulista, em São Paulo 🌆"],
    interacao: ["Você gostaria de visitar um grande museu?"],
    atividade: ["Desenhe um prédio diferente para um museu ✏️"],
    final: ["Os museus ajudam a preservar arte e cultura 🌟"],
    emocao: "descoberta",
    nivel: "leve"
  },
  inhotim: {
    tema: "lugares_arte",
    subtema: "inhotim",
    palavras_chave: ["inhotim", "museu a ceu aberto brasil", "arte natureza minas gerais"],
    inicio: ["Inhotim mistura arte e natureza 🌿"],
    explicacao_curta: ["As obras ficam espalhadas em jardins enormes."],
    explicacao_aprofundada: ["O lugar reúne galerias, esculturas e paisagens naturais em Minas Gerais."],
    curiosidade: ["Algumas obras de Inhotim ficam ao ar livre 🌳"],
    interacao: ["Você gostaria de ver arte no meio da natureza?"],
    atividade: ["Crie um jardim cheio de esculturas 🎨"],
    final: ["Arte e natureza podem caminhar juntas 🌈"],
    emocao: "harmonia",
    nivel: "leve"
  },
  acropole: {
    tema: "lugares_arte",
    subtema: "acropole",
    palavras_chave: ["acropole", "partenon grecia", "construcao antiga grecia"],
    inicio: ["A Acrópole guarda construções antigas da Grécia 🏛️"],
    explicacao_curta: ["Ela possui templos importantes como o Partenon."],
    explicacao_aprofundada: ["A Acrópole representa a arte, arquitetura e história da Grécia Antiga."],
    curiosidade: ["O Partenon foi dedicado à deusa Atena ⚡"],
    interacao: ["Você gostaria de visitar construções antigas?"],
    atividade: ["Desenhe um templo com colunas gregas ✏️"],
    final: ["As construções antigas contam histórias do passado 🌍"],
    emocao: "admiracao",
    nivel: "leve"
  },
  coliseu: {
    tema: "lugares_arte",
    subtema: "coliseu",
    palavras_chave: ["coliseu", "roma antiga coliseu", "arena romana"],
    inicio: ["O Coliseu é uma construção gigante da Roma Antiga 🏟️"],
    explicacao_curta: ["Lá aconteciam apresentações e eventos."],
    explicacao_aprofundada: ["O Coliseu mostra a engenharia e arquitetura dos romanos."],
    curiosidade: ["O Coliseu possui muitos corredores e arquibancadas antigas ✨"],
    interacao: ["Você gosta de construções enormes?"],
    atividade: ["Monte um desenho inspirado em arenas antigas 🎨"],
    final: ["Grandes construções também podem ser obras de arte 🌟"],
    emocao: "grandiosidade",
    nivel: "leve"
  },
  torre_eiffel: {
    tema: "lugares_arte",
    subtema: "torre_eiffel",
    palavras_chave: ["torre eiffel", "paris torre ferro", "monumento frança"],
    inicio: ["A Torre Eiffel é um símbolo famoso de Paris ✨"],
    explicacao_curta: ["Ela foi construída com ferro e possui um formato muito conhecido."],
    explicacao_aprofundada: ["La torre foi criada para uma exposição e acabou se tornando um dos monumentos mais famosos do mundo."],
    curiosidade: ["A Torre Eiffel brilha à noite com muitas luzes 🌙"],
    interacao: ["Você gostaria de subir em uma torre gigante?"],
    atividade: ["Desenhe uma torre usando formas geométricas ✏️"],
    final: ["Algumas construções se transformam em símbolos do mundo 🌍"],
    emocao: "encantamento",
    nivel: "leve"
  },
  machu_picchu: {
    tema: "lugares_arte",
    subtema: "machu_picchu",
    palavras_chave: ["machu picchu", "cidade inca peru", "ruinas incas"],
    inicio: ["Machu Picchu fica nas montanhas do Peru ⛰️"],
    explicacao_curta: ["Ela foi construída pelo povo inca."],
    explicacao_aprofundada: ["As construções mostram conhecimentos avançados de engenharia e organização."],
    curiosidade: ["Machu Picchu ficou escondida entre montanhas por muito tempo 🌿"],
    interacao: ["Você gostaria de explorar cidades antigas?"],
    atividade: ["Desenhe uma cidade no alto das montanhas ✏️"],
    final: ["As antigas civilizações deixaram marcas incríveis na história 🌎"],
    emocao: "aventura",
    nivel: "leve"
  },
  sagrada_familia: {
    tema: "lugares_arte",
    subtema: "sagrada_familia",
    palavras_chave: ["sagrada familia", "igreja gaudi barcelona", "igreja diferente espanha"],
    inicio: ["A Sagrada Família possui formas surpreendentes ⛪"],
    explicacao_curta: ["Ela foi criada pelo artista Antoni Gaudí."],
    explicacao_aprofundada: ["A igreja mistura arquitetura, natureza e muitos detalhes artísticos."],
    curiosidade: ["As torres da Sagrada Família parecem esculturas gigantes 🌟"],
    interacao: ["Que tipo de construção diferente você criaria?"],
    atividade: ["Desenhe uma igreja inspirada em formas da natureza 🌿"],
    final: ["A arquitetura também pode ser cheia de imaginação ✨"],
    emocao: "criatividade",
    nivel: "leve"
  },
  bienal_sp: {
    tema: "lugares_arte",
    subtema: "bienal_sp",
    palavras_chave: ["bienal de sao paulo", "exposicao arte sp", "evento arte brasil"],
    inicio: ["A Bienal de São Paulo reúne artistas do mundo inteiro 🎨"],
    explicacao_curta: ["É uma grande exposição de arte contemporânea."],
    explicacao_aprofundada: ["Os artistas apresentam obras criativas usando pinturas, esculturas, vídeos e instalações."],
    curiosidade: ["A Bienal acontece em São Paulo e recebe visitantes de muitos lugares 🌎"],
    interacao: ["Que tipo de obra você gostaria de mostrar em uma exposição?"],
    atividade: ["Crie um cartaz para uma mostra de arte ✏️"],
    final: ["A arte pode unir pessoas e ideias diferentes 🌈"],
    emocao: "exploracao",
    nivel: "leve"
  },
  pinacoteca: {
    tema: "lugares_arte",
    subtema: "pinacoteca",
    palavras_chave: ["pinacoteca", "pinacoteca são paulo", "museu de arte sp", "pinacoteca do estado"],
    inicio: ["A Pinacoteca de São Paulo é um museum cheio de arte brasileira 🖼️"],
    explicacao_curta: ["Ela guarda pinturas e esculturas de artistas do Brasil."],
    explicacao_aprofundada: ["O prédio da Pinacoteca é antigo e lindo, com jardins e exposições que contam a história da arte nacional."],
    curiosidade: ["A Pinacoteca fica perto do Jardim da Luz, um parque histórico em São Paulo 🌳"],
    interacao: ["Você já viu pinturas que mostram paisagens do Brasil?"],
    atividade: ["Desenhe uma paisagem brasileira usando lápis de cor 🌄"],
    final: ["A arte brasileira é rica e cheia de cores e sentimentos 🇧🇷"],
    emocao: "orgulho",
    nivel: "leve"
  },
  museu_imagem_som: {
    tema: "lugares_arte",
    subtema: "museu_imagem_som",
    palavras_chave: ["museu da imagem e do som", "mis sp", "museu do som", "mis são paulo"],
    inicio: ["O Museu da Imagem e do Som (MIS) é um lugar de música, cinema e fotografia 🎬📸"],
    explicacao_curta: ["Lá você encontra exposições sobre cinema, fotos e até discos antigos."],
    explicacao_aprofundada: ["O MIS tem um acervo com filmes, vídeos, gravações e objetos que contam a história da comunicação."],
    curiosidade: ["O prédio do MIS tem uma fachada moderna e laranja que chama a atenção 🧡"],
    interacao: ["Você gosta de tirar fotos ou assistir a filmes?"],
    atividade: ["Crie uma história em quadrinhos com fotos ou desenhos 🎞️"],
    final: ["Imagens e sons também são formas de arte e memória 🌟"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  catavento: {
    tema: "lugares_arte",
    subtema: "catavento",
    palavras_chave: ["catavento", "catavento cultural", "museu de ciências sp", "catavento são paulo"],
    inicio: ["O Catavento é um museu de ciências super divertido e interativo 🔭⚛️"],
    explicacao_curta: ["Lá você pode brincar e aprender sobre o corpo humano, o espaço e a natureza."],
    explicacao_aprofundada: ["O museu fica no antigo Palácio das Indústrias e tem quatro grandes áreas: Universo, Vida, Engenho e Sociedade."],
    curiosidade: ["No Catavento, dá para tocar em experimentos e até ver fósseis de dinossauros 🦖"],
    interacao: ["Qual parte da ciência você mais gosta? O espaço, os animais ou as invenções?"],
    atividade: ["Invente uma máquina maluca para ajudar as pessoas ✨"],
    final: ["A ciência e a arte podem andar juntas para explicar o mundo 🌍"],
    emocao: "aventura",
    nivel: "leve"
  },
  museu_lingua_portuguesa: {
    tema: "lugares_arte",
    subtema: "museu_lingua_portuguesa",
    palavras_chave: ["museu da língua portuguesa", "museu da lingua", "estação da luz", "língua portuguesa sp"],
    inicio: ["O Museu da Língua Portuguesa é um lugar mágico que celebra as palavras que falamos 💬📖"],
    explicacao_curta: ["Ele mostra como a língua portuguesa nasceu, cresceu e se transformou."],
    explicacao_aprofundada: ["O museu fica na Estação da Luz, em São Paulo, e usa telas, jogos e áudios para explicar a origem das palavras."],
    curiosidade: ["O museu já pegou fogo, mas foi reconstruído e ficou ainda mais bonito 🔥➡️✨"],
    interacao: ["Qual é a sua palavra favorita em português?"],
    atividade: ["Invente uma nova palavra e desenhe o que ela significa 🖍️"],
    final: ["Nossa língua é uma forma de arte que nos conecta 🌈"],
    emocao: "descoberta",
    nivel: "leve"
  },
  museu_ipiranga: {
    tema: "lugares_arte",
    subtema: "museu_ipiranga",
    palavras_chave: ["museu do ipiranga", "museu paulista", "ipiranga sp", "independência brasil"],
    inicio: ["O Museu do Ipiranga (Museu Paulista) conta a história da independência do Brasil 🏛️🇧🇷"],
    explicacao_curta: ["Ele fica onde Dom Pedro I declarou a independência, às margens do riacho Ipiranga."],
    explicacao_aprofundada: ["O museu tem móveis antigos, pinturas históricas e objetos que mostram como era a vida no Brasil colonial."],
    curiosidade: ["O jardim do museu é lindo e tem um monumento que celebra a independência 🌳"],
    interacao: ["Você sabe o que significa 'independência'?"],
    atividade: ["Desenhe a cena de um momento importante da história do Brasil 📜"],
    final: ["Conhecer o passado ajuda a entender o presente e construir o futuro 🌟"],
    emocao: "orgulho",
    nivel: "leve"
  },
  memorial_america_latina: {
    tema: "lugares_arte",
    subtema: "memorial_america_latina",
    palavras_chave: ["memorial da américa latina", "memorial américa latina sp", "memorial da américa latina são paulo", "centro cultural latin america", "oscar niemeyer memorial"],
    inicio: ["O Memorial da América Latina é um espaço que celebra a arte, a história e a cultura de todo o continente latino-americano 🌎"],
    explicacao_curta: ["Lá você encontra esculturas, obras de arte e um museu que conta a história dos povos da América Latina."],
    explicacao_aprofundada: ["O memorial foi criado pelo arquiteto Oscar Niemeyer e tem um auditório, uma biblioteca e um salão de atos. Ele fica em São Paulo e é um símbolo de união entre os países latinos."],
    curiosidade: ["No memorial, há uma grande escultura em forma de mão que representa a dor e a luta dos povos latino-americanos ✋🏽🗺️"],
    interacao: ["Você conhece algum país da América Latina além do Brasil, como Argentina, México ou Peru?"],
    atividade: ["Desenhe a bandeira de um país da América Latina que você gostaria de visitar 🇦🇷🇲🇽🇵🇪"],
    final: ["A América Latina é rica em cores, ritmos, sabores e histórias incríveis 🌈🎶"],
    emocao: "orgulho",
    nivel: "leve"
  },

  // --- OBRAS FAMOSAS NO MUNDO ---
  mona_lisa: {
    tema: "obras_de_arte",
    subtema: "mona_lisa",
    palavras_chave: ["mona lisa", "leonardo da vinci", "retrato", "sorriso misterioso", "marrom", "verde", "bege"],
    inicio: ["Oi, pequeno artista! Essa pintura ficou famosa pelo sorriso misterioso da mulher 🎨"],
    explicacao_curta: ["Leonardo da Vinci usou sombras suaves para deixar o rosto bem realista."],
    explicacao_aprofundada: ["Parece que ela está thinking em um segredo! O sorriso muda de expressão dependendo do ângulo que você olha."],
    curiosidade: ["A Mona Lisa está guardada no museu do Louvre, em Paris 🖼️"],
    interacao: ["O que você acha que a Mona Lisa está pensando?"],
    atividade: ["Desenhe um rosto com um sorriso misterioso ✏️"],
    final: ["Um sorriso pode esconder muitos segredos 🌟"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  noite_estrelada: {
    tema: "obras_de_arte",
    subtema: "noite_estrelada",
    palavras_chave: ["noite estrelada", "van gogh", "paisagem", "céu estrelado", "azul", "amarelo", "preto"],
    inicio: ["Veja como o céu parece girar cheio de estrelas brilhantes 🌌"],
    explicacao_curta: ["Van Gogh pintou a noite com muita emoção e pinceladas fortes."],
    explicacao_aprofundada: ["As pinceladas curvas mostram seus sentimentos e a energia que ele via no céu."],
    curiosidade: ["Van Gogh pintou essa obra enquanto estava em um hospital 🏥"],
    interacao: ["Se você pudesse pintar o céu, como ele seria?"],
    atividade: ["Faça espirais coloridas imitando as estrelas de Van Gogh 🎨"],
    final: ["O céu noturno pode ser cheio de movimento e emoção ✨"],
    emocao: "emoção",
    nivel: "leve"
  },
  ultima_ceia: {
    tema: "obras_de_arte",
    subtema: "ultima_ceia",
    palavras_chave: ["ultima ceia", "leonardo da vinci", "religioso", "jesus", "marrom", "azul", "bege"],
    inicio: ["Essa obra mostra Jesus e seus amigos em um jantar importante 🍞"],
    explicacao_curta: ["O artista organizou as pessoas de um jeito que parece quase uma fotografia."],
    explicacao_aprofundada: ["Cada pessoa tem uma reação diferente, mostrando surpresa, tristeza e conversa."],
    curiosidade: ["A Última Ceia é um mural gigante pintado em uma parede de igreja na Itália 🇮🇹"],
    interacao: ["O que você acha que Jesus está falando na cena?"],
    atividade: ["Desenhe uma mesa redonda com seus amigos e comidas 🖍️"],
    final: ["Um jantar pode guardar uma história importante 🌟"],
    emocao: "respeito",
    nivel: "leve"
  },
  guernica: {
    tema: "obras_de_arte",
    subtema: "guernica",
    palavras_chave: ["guernica", "picasso", "guerra", "sofrimento", "preto", "branco", "cinza"],
    inicio: ["Picasso pintou essa obra para mostrar a tristeza e o medo causados pela guerra 🕊️"],
    explicacao_curta: ["As formas parecem quebradas para mostrar o sofrimento das pessoas."],
    explicacao_aprofundada: ["Ele usou apenas preto, branco e cinza para dar força e gravidade à cena."],
    curiosidade: ["Guernica é o nome de uma cidade espanhola que foi bombardeada 💣"],
    interacao: ["Como você mostraria a paz em um desenho?"],
    atividade: ["Desenhe um símbolo da paz usando formas simples ✏️"],
    final: ["A arte pode denunciar a violência e pedir paz 🌎"],
    emocao: "consciência",
    nivel: "leve"
  },
  o_grito: {
    tema: "obras_de_arte",
    subtema: "o_grito",
    palavras_chave: ["o grito", "edvard munch", "medo", "emoção", "laranja", "azul", "vermelho"],
    inicio: ["A pessoa da pintura parece assustada e preocupada 😱"],
    explicacao_curta: ["As cores fortes e o céu estranho ajudam a mostrar emoções intensas."],
    explicacao_aprofundada: ["Munch quis mostrar como é sentir um pânico que vem de dentro."],
    curiosidade: ["Existem quatro versões dessa pintura feitas pelo artista 🎨"],
    interacao: ["O que te deixa assustado às vezes?"],
    atividade: ["Desenhe um rosto expressando medo ou surpresa 🎭"],
    final: ["Todos nós sentimos emoções fortes, e a arte ajuda a expressá-las 🌈"],
    emocao: "emoção",
    nivel: "leve"
  },
  criacao_de_adao: {
    tema: "obras_de_arte",
    subtema: "criacao_de_adao",
    palavras_chave: ["criação de adão", "michelangelo", "religioso", "deus", "bege", "verde", "rosa"],
    inicio: ["Essa pintura famosa mostra Deus e Adão quase tocando os dedos ✨"],
    explicacao_curta: ["Parece um momento mágico cheio de energia."],
    explicacao_aprofundada: ["O toque que não acontece representa a vida sendo passada para o primeiro homem."],
    curiosidade: ["A pintura fica no teto da Capela Sistina, no Vaticano ⛪"],
    interacao: ["Se você pudesse dar vida a algo com um toque, o que seria?"],
    atividade: ["Desenhe duas mãos quase se tocando ✏️"],
    final: ["A vida pode começar em um gesto simples 🌟"],
    emocao: "admiração",
    nivel: "leve"
  },
  nascimento_de_venus: {
    tema: "obras_de_arte",
    subtema: "nascimento_de_venus",
    palavras_chave: ["nascimento de vênus", "botticelli", "mitologia", "concha", "azul", "rosa", "bege"],
    inicio: ["Vênus aparece saindo do mar dentro de uma concha gigante 🌊"],
    explicacao_curta: ["A pintura parece um conto encantado cheio de beleza."],
    explicacao_aprofundada: ["Os ventos empurram a concha e uma deusa espera com um manto para cobri-la."],
    curiosidade: ["Vênus é a deusa romana do amor e da beleza 💖"],
    interacao: ["Que criatura mágica sairia do mar na sua imaginação?"],
    atividade: ["Desenhe uma concha gigante com algo saindo de dentro 🐚"],
    final: ["O mar também pode ser o berço da arte ✨"],
    emocao: "encantamento",
    nivel: "leve"
  },
  moca_com_brinco_de_perola: {
    tema: "obras_de_arte",
    subtema: "moca_com_brinco_de_perola",
    palavras_chave: ["moça com brinco de pérola", "vermeer", "retrato", "brinco", "azul", "preto", "bege"],
    inicio: ["A menina olha para nós como se quisesse conversar 👀"],
    explicacao_curta: ["O brinco brilhante chama muita atenção e deixa a pintura elegante."],
    explicacao_aprofundada: ["O fundo escuro faz a menina e seu brinco se destacarem."],
    curiosidade: ["Algumas pessoas chamam essa obra de 'Mona Lisa do Norte' 🌍"],
    interacao: ["Se você pudesse usar um brinco mágico, que poder ele teria?"],
    atividade: ["Desenhe um retrato com um acessório brilhante ✨"],
    final: ["Às vezes, um pequeno detalhe faz toda a diferença 🌟"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  as_meninas: {
    tema: "obras_de_arte",
    subtema: "as_meninas",
    palavras_chave: ["as meninas", "velázquez", "vida na corte", "princesa", "marrom", "cinza", "bege"],
    inicio: ["Essa obra mostra uma princesa e várias pessoas ao seu redor 👸"],
    explicacao_curta: ["Parece que estamos dentro da sala junto com elas!"],
    explicacao_aprofundada: ["O artista se incluiu na pintura, atrás de um cavalete, brincando com quem olha."],
    curiosidade: ["As meninas eram damas de companhia da princesa, daí o nome 👗"],
    interacao: ["Se você estivesse nessa cena, o que estaria fazendo?"],
    atividade: ["Desenhe uma sala com várias pessoas fazendo coisas diferentes 🖍️"],
    final: ["Um quadro pode parecer uma janela para outra época 🌟"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  o_beijo: {
    tema: "obras_de_arte",
    subtema: "o_beijo",
    palavras_chave: ["o beijo", "klimt", "amor", "dourado", "dourado", "amarelo", "marrom"],
    inicio: ["O casal parece envolvido em um abraço dourado cheio de carinho 💛"],
    explicacao_curta: ["Klimt usou muito brilho e formas decorativas."],
    explicacao_aprofundada: ["Os padrões geométricos e o dourado representam a riqueza do sentimento amoroso."],
    curiosidade: ["Klimt usou folhas de ouro de verdade na pintura ✨"],
    interacao: ["Como você mostraria o amor em um desenho?"],
    atividade: ["Crie um abraço colorido usando formas douradas 🎨"],
    final: ["O amor pode ser brilhante e decorado 🌟"],
    emocao: "amor",
    nivel: "leve"
  },
  persistencia_da_memoria: {
    tema: "obras_de_arte",
    subtema: "persistencia_da_memoria",
    palavras_chave: ["persistência da memória", "dalí", "surrealismo", "relógios derretendo", "marrom", "azul", "amarelo"],
    inicio: ["Os relógios derretendo parecem um sonho estranho 🕰️"],
    explicacao_curta: ["Dalí queria mostrar que o tempo pode parecer diferente na nossa imaginação."],
    explicacao_aprofundada: ["Os relógios moles representam a forma como sentimos o tempo passar de maneira elástica."],
    curiosidade: ["Dalí se inspirou em queijo derretendo para criar essa ideia 🧀"],
    interacao: ["Se o tempo pudesse derreter, que horas você gostaria que ele parasse?"],
    atividade: ["Desenhe um relógio derretendo em um cenário estranho 🎨"],
    final: ["Na imaginação, tudo pode ser diferente 🌟"],
    emocao: "imaginação",
    nivel: "leve"
  },
  ronda_noturna: {
    tema: "obras_de_arte",
    subtema: "ronda_noturna",
    palavras_chave: ["ronda noturna", "rembrandt", "cena histórica", "guarda", "preto", "marrom", "amarelo"],
    inicio: ["Esse grupo de guardas parece pronto para sair em missão 🛡️"],
    explicacao_curta: ["A luz faz algumas pessoas brilharem mais do que outras."],
    explicacao_aprofundada: ["Rembrandt usou luz e sombra para dar destaque aos líderes da patrulha."],
    curiosidade: ["Na verdade, a cena acontece durante o dia, mas a pintura escureceu com o tempo 🌞"],
    interacao: ["Que missão você acha que esses guardas vão cumprir?"],
    atividade: ["Desenhe um grupo de pessoas com uma luz forte iluminando o centro 🔦"],
    final: ["A luz pode contar quem é importante em uma história 🌟"],
    emocao: "mistério",
    nivel: "leve"
  },
  impressao_sol_nascente: {
    tema: "obras_de_arte",
    subtema: "impressao_sol_nascente",
    palavras_chave: ["impressão sol nascente", "monet", "natureza", "amanhecer", "azul", "laranja", "cinza"],
    inicio: ["Monet pintou o nascer do sol com pinceladas rápidas e leves 🌅"],
    explicacao_curta: ["A água parece se mover de verdade!"],
    explicacao_aprofundada: ["Essa pintura deu nome ao movimento impressionista, que capturava as impressões do momento."],
    curiosidade: ["Monet pintou essa cena da janela do quarto onde estava hospedado 🪟"],
    interacao: ["Como é o nascer do sol onde você mora?"],
    atividade: ["Pinte um amanhecer usando pinceladas leves e rápidas 🎨"],
    final: ["A primeira luz do dia pode ser mágica ✨"],
    emocao: "calma",
    nivel: "leve"
  },
  liberdade_guiando_o_povo: {
    tema: "obras_de_arte",
    subtema: "liberdade_guiando_o_povo",
    palavras_chave: ["liberdade guiando o povo", "delacroix", "revolução", "bandeira", "vermelho", "azul", "marrom"],
    inicio: ["A mulher com a bandeira representa a liberdade liderando o povo 🚩"],
    explicacao_curta: ["A pintura fala sobre coragem e luta."],
    explicacao_aprofundada: ["Ela mostra pessoas comuns se unindo por um ideal, mesmo enfrentando perigos."],
    curiosidade: ["A mulher não é real, é uma ideia ganhando forma de mulher 💪"],
    interacao: ["O que você faria para lutar por algo que acredita?"],
    atividade: ["Desenhe uma pessoa erguendo um símbolo importante ✏️"],
    final: ["Às vezes, um símbolo pode unir muitas pessoas 🌟"],
    emocao: "coragem",
    nivel: "leve"
  },
  jardim_das_delicias_terrenas: {
    tema: "obras_de_arte",
    subtema: "jardim_das_delicias_terrenas",
    palavras_chave: ["jardim das delícias terrenas", "bosch", "fantasia", "criaturas", "verde", "rosa", "azul"],
    inicio: ["Essa obra é cheia de criaturas estranhas e cenas curiosas 🐉"],
    explicacao_curta: ["Parece um grande mundo de fantasia para explorar."],
    explicacao_aprofundada: ["É um tríptico (três pinturas juntas) que mostra o paraíso, o mundo terreno e o inferno de forma imaginativa."],
    curiosidade: ["Bosch criou personagens que nunca existiram, misturando plantas, animais e objetos 🧙"],
    interacao: ["Que bicho estranho você inventaria?"],
    atividade: ["Misture três animais diferentes para criar uma criatura nova 🎨"],
    final: ["Na fantasia, tudo pode ser possível 🌈"],
    emocao: "imaginação",
    nivel: "leve"
  },
  american_gothic: {
    tema: "obras_de_arte",
    subtema: "american_gothic",
    palavras_chave: ["american gothic", "grant wood", "vida rural", "sério", "marrom", "verde", "cinza"],
    inicio: ["O homem e a mulher aparecem sérios em frente à casa 🏠"],
    explicacao_curta: ["A pintura mostra a vida simples do campo nos Estados Unidos."],
    explicacao_aprofundada: ["Os rostos sérios e a roupa de trabalho representam a força e a honestidade dos agricultores."],
    curiosidade: ["As pessoas da pintura não eram um casal de verdade, eram a irmã do artista e seu dentista 👩🌾"],
    interacao: ["Qual é a expressão mais séria que você consegue fazer?"],
    atividade: ["Desenhe uma casa simples e uma pessoa com um objeto de trabalho ✏️"],
    final: ["O trabalho no campo também pode ser arte 🌾"],
    emocao: "respeito",
    nivel: "leve"
  },
  almoco_dos_remadores: {
    tema: "obras_de_arte",
    subtema: "almoco_dos_remadores",
    palavras_chave: ["almoço dos remadores", "renoir", "amizade", "festa", "azul", "branco", "laranja"],
    inicio: ["As pessoas estão conversando, comendo e se divertindo juntas 🍽️"],
    explicacao_curta: ["Renoir gostava de pintar momentos felizes."],
    explicacao_aprofundada: ["A luz do sol atravessa as folhas e ilumina o rosto de cada pessoa de forma diferente."],
    curiosidade: ["Um dos homens na pintura é um amigo artista de Renoir 🖌️"],
    interacao: ["Quem você convidaria para um almoço divertido?"],
    atividade: ["Desenhe uma mesa redonda com amigos e comidas coloridas 🎨"],
    final: ["Compartilhar uma refeição é também compartilhar alegria ✨"],
    emocao: "alegria",
    nivel: "leve"
  },
  filho_do_homem: {
    tema: "obras_de_arte",
    subtema: "filho_do_homem",
    palavras_chave: ["filho do homem", "magritte", "mistério", "maçã", "verde", "cinza", "azul"],
    inicio: ["O homem de chapéu tem uma maçã escondendo seu rosto 🍎"],
    explicacao_curta: ["A obra brinca com mistério e imaginação."],
    explicacao_aprofundada: ["A maçã esconde mas também revela, deixando a gente curioso sobre o que está por trás."],
    curiosidade: ["Magritte disse que a maçã representa a tentação que sempre está na frente dos nossos olhos 👀"],
    interacao: ["Se você pudesse esconder seu rosto com algo, o que seria?"],
    atividade: ["Desenhe uma figura com o rosto escondido por um objeto inventado 🖍️"],
    final: ["O que está escondido às vezes é mais interessante 🌟"],
    emocao: "mistério",
    nivel: "leve"
  },
  grande_onda_de_kanagawa: {
    tema: "obras_de_arte",
    subtema: "grande_onda_de_kanagawa",
    palavras_chave: ["grande onda de kanagawa", "hokusai", "natureza", "onda", "tsunami", "azul", "branco", "bege"],
    inicio: ["A enorme onda parece pronta para engolir os barcos 🌊"],
    explicacao_curta: ["O artista japonês mostrou a força impressionante da natureza."],
    explicacao_aprofundada: ["Os barcos são pequenos diante da onda, mostrando como os humanos são frágeis frente à natureza."],
    curiosidade: ["Essa imagem é uma gravura, não uma pintura, e foi reproduzida milhares de vezes 🖨️"],
    interacao: ["Você já viu o mar bem agitado?"],
    atividade: ["Desenhe uma grande onda usando curvas e espumas 🎨"],
    final: ["A natureza pode ser bela e poderosa ao mesmo tempo ✨"],
    emocao: "adrenalina",
    nivel: "leve"
  },
  no_5_1948: {
    tema: "obras_de_arte",
    subtema: "no_5_1948",
    palavras_chave: ["no 5 1948", "jackson pollock", "arte abstrata", "respingos", "amarelo", "marrom", "preto"],
    inicio: ["Pollock jogava tinta na tela de um jeito livre e divertido 🎨"],
    explicacao_curta: ["A pintura parece cheia de energia e movimento."],
    explicacao_aprofundada: ["Pollock colocava a tela no chão e andava ao redor pingando tinta, criando uma dança com as cores."],
    curiosidade: ["Essa é uma das pinturas mais caras já vendidas: mais de 140 milhões de dólares 💰"],
    interacao: ["Se você pudesse pintar com respingos, onde faria isso?"],
    atividade: ["Faça uma pintura com respingos e gotas de tinta (use um pincel para espirrar) 🎨"],
    final: ["A arte pode ser pura ação e diversão 🌪️"],
    emocao: "energia",
    nivel: "leve"
  },
  castle_and_sun: {
    tema: "obras_de_arte",
    subtema: "castle_and_sun",
    palavras_chave: ["castle and sun", "paul klee", "arte abstrata", "castelo", "amarelo", "laranja", "vermelho"],
    inicio: ["Paul Klee usou formas geométricas coloridas para criar um castelo mágico 🏰"],
    explicacao_curta: ["Parece um desenho feito com blocos de cor."],
    explicacao_aprofundada: ["As formas retangulares e triângulos se encaixam como peças de um quebra-cabeça para formar o castelo."],
    curiosidade: ["Klee também era músico, e ele dizia que pintava como se compusesse música 🎵"],
    interacao: ["Como seria seu castelo dos sonhos feito de formas?"],
    atividade: ["Construa um castelo usando apenas quadrados, triângulos e círculos ✏️"],
    final: ["Formas simples podem criar mundos encantados 🌟"],
    emocao: "criatividade",
    nivel: "leve"
  },
  nenufares: {
    tema: "obras_de_arte",
    subtema: "nenufares",
    palavras_chave: ["nenúfares", "monet", "natureza", "flores", "água", "verde", "azul", "rosa"],
    inicio: ["Monet pintou flores boiando na água com cores suaves e reflexos brilhantes 💐"],
    explicacao_curta: ["Parece um jardim calmo e tranquilo."],
    explicacao_aprofundada: ["Monet pintou muitas versões do mesmo jardim de nenúfares para capturar a mudança da luz ao longo do dia."],
    curiosidade: ["Essas pinturas são enormes e ocupam salas inteiras em museus 🖼️"],
    interacao: ["O que você gosta de olhar quando quer ficar calmo?"],
    atividade: ["Desenhe flores na água com espelhos e reflexos 🎨"],
    final: ["A água pode refletir a beleza do céu e das flores ✨"],
    emocao: "calma",
    nivel: "leve"
  },

  // --- OBRAS BRASILEIRAS ---
  tarsila_do_amaral_abaporu: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["abaporu", "obra abaporu", "quadro abaporu", "tarsila abaporu"],
    inicio: ["Abaporu tem pés e mãos enormes, como se abraçasse o chão e o céu ao mesmo tempo 🌵👣"],
    explicacao_curta: ["Essa pintura mostra uma pessoa com pés e mãos enormes sentada ao lado de um cacto. A artista queria mostrar a força do povo brasileiro e criar uma arte diferente, bem brasileira e cheia de imaginação."],
    explicacao_aprofundada: ["Tarsila usou verde, azul e amarelo para criar uma figura solitária mas poderosa, representando a antropofagia cultural – a ideia de devorar influências estrangeiras e criar algo genuinamente brasileiro."],
    curiosidade: ["Abaporu significa 'homem que come gente' em tupi-guarani, e a obra inspirou o Movimento Antropofágico no Brasil 🍽️"],
    interacao: ["Se você tivesse pés enormes, onde gostaria de pisar?"],
    atividade: ["Desenhe uma figura com uma parte do corpo exageradamente grande (mão, cabeça, pé) e invente uma história para ela ✍️"],
    final: ["A arte pode transformar o estranho em algo cheio de significado 🎨"],
    emocao: "espanto",
    nivel: "leve"
  },
  tarsila_do_amaral_operarios: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["operários", "tarsila operários", "quadro operários"],
    inicio: ["Muitos rostos diferentes, mas todos trabalhando juntos – assim Tarsila pintou a força do povo brasileiro 👷‍♂️👷‍♀️"],
    explicacao_curta: ["Aqui vemos muitas pessoas trabalhando juntas. Cada rosto é diferente, mostrando como o Brasil é formado por vários povos e culturas. A pintura fala sobre trabalho e união."],
    explicacao_aprofundada: ["Com cinza, marrom e rosa, Tarsila criou uma multidão de operários anônimos, destacando a diversidade étnica e a importância coletiva do trabalho na construção do país."],
    curiosidade: ["Essa foi a primeira pintura social de Tarsila, mostrando sua preocupação com os trabalhadores após uma viagem à União Soviética 🇷🇺"],
    interacao: ["Que profissão você gostaria de desenhar para mostrar a importância do trabalho?"],
    atividade: ["Desenhe uma fileira de três pessoas, cada uma com um uniforme ou ferramenta diferente, representando diferentes trabalhos 🛠️"],
    final: ["O trabalho em equipe e a diversidade tornam o Brasil mais forte 🤝"],
    emocao: "solidariedade",
    nivel: "leve"
  },
  tarsila_do_amaral_antropofagia: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["antropofagia", "tarsila antropofagia", "quadro antropofagia"],
    inicio: ["Uma figura estranha, quase de outro mundo, com uma perna gigante e um pé de planta – é a Antropofagia de Tarsila 🦵🌿"],
    explicacao_curta: ["Essa obra mistura formas estranhas e divertidas para mostrar a ideia de que o Brasil pega influências de outros lugares e transforma tudo em algo novo e brasileiro."],
    explicacao_aprofundada: ["Com verde, amarelo e azul, a pintura sintetiza o Manifesto Antropofágico de Oswald de Andrade: devorar a cultura europeia e regurgitar algo original, tropical e selvagem."],
    curiosidade: ["A figura central lembra Abaporu, mas agora com uma perna ainda mais alongada, como se estivesse pronta para engolir o mundo 🌍"],
    interacao: ["O que você 'engole' de outras culturas (comida, música, brincadeiras) e transforma no seu jeito brasileiro?"],
    atividade: ["Desenhe um prato com vários alimentos de lugares diferentes (pizza, sushi, feijoada) e misture tudo em um só prato criativo 🍽️"],
    final: ["A arte brasileira é poderosa porque consegue transformar tudo em algo nosso 💚💛"],
    emocao: "ousadia",
    nivel: "leve"
  },
  tarsila_do_amaral_a_cuca: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["a cuca", "cuca tarsila", "quadro a cuca"],
    inicio: ["A Cuca do folclore ganhou um visual moderno e assustador, com formas geométricas e cores vibrantes 🐊✨"],
    explicacao_curta: ["Você conhece a Cuca das histórias? Aqui ela aparece de um jeito mágico e assustador. A artista usou formas diferentes para lembrar os contos do folclore brasileiro."],
    explicacao_aprofundada: ["Com verde, amarelo e laranja, Tarsila transformou a bruxa jacaré em uma figura cubista, misturando tradição popular com inovação artística."],
    curiosidade: ["Esta pintura foi feita para o livro 'A Cuca', de Monteiro Lobato, e ajudou a imortalizar a personagem no imaginário infantil 📖"],
    interacao: ["Como você imagina a Cuca? Ela é bonita ou assustadora? Divertida ou malvada?"],
    atividade: ["Desenhe a Cuca do seu jeito, usando formas geométricas (círculos, triângulos, retângulos) e cores fortes 🟩🟨🟧"],
    final: ["O folclore fica ainda mais mágico quando os artistas o reinventam 🌙"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  candido_portinari_o_lavrador_de_cafe: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["lavrador de café", "portinari lavrador", "quadro lavrador de café"],
    inicio: ["Mãos enormes, pés gigantes – assim Portinari mostrou a força do trabalhador do café ☕💪"],
    explicacao_curta: ["Esse trabalhador tem mãos e pés enormes para mostrar sua força. Portinari queria homenagear as pessoas que trabalhavam nas plantações de café no Brasil."],
    explicacao_aprofundada: ["Com marrom, azul e verde, o artista realça a dignidade e o sofrimento do lavrador, usando o exagero para valorizar quem sustenta a economia com o suor."],
    curiosidade: ["Portinari vinha de uma família de imigrantes italianos que trabalhavam em fazendas de café; ele conhecia bem aquela realidade 🍇"],
    interacao: ["O que você faria se tivesse mãos enormes? Que trabalho poderia fazer?"],
    atividade: ["Desenhe uma pessoa com mãos enormes realizando alguma tarefa (plantar, construir, cozinhar) 🖐️🌱"],
    final: ["Trabalhadores merecem respeito e reconhecimento por sua força e dedicação 🌟"],
    emocao: "gratidão",
    nivel: "leve"
  },
  candido_portinari_cafe: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["café", "portinari café", "quadro café"],
    inicio: ["Homens e mulheres curvados, colhendo café sob o sol – uma cena dura, mas cheia de vida 🌞☕"],
    explicacao_curta: ["Aqui vemos trabalhadores colhendo café. O artista mostrou como era difícil trabalhar nas fazendas e como essas pessoas eram importantes para o país."],
    explicacao_aprofundada: ["Com marrom, verde e bege, Portinari cria uma composição ritmada, onde os trabalhadores parecem se mover em harmonia, cada um com seu papel na colheita."],
    curiosidade: ["O quadro 'Café' faz parte de uma série que Portinari pintou para o Ministério da Educação, retratando os ciclos econômicos do Brasil 🇧🇷"],
    interacao: ["Você já colheu alguma fruta ou planta? Como foi?"],
    atividade: ["Desenhe uma plantação com fileiras de pés de café e algumas pessoas colhendo os grãozinhos vermelhos 🍒"],
    final: ["Até uma simples xícara de café carrega a história de muitos trabalhadores ❤️"],
    emocao: "respeito",
    nivel: "leve"
  },
  candido_portinari_o_grito: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["o grito", "portinari o grito", "quadro o grito portinari"],
    inicio: ["Uma boca aberta, olhos arregalados – um grito que parece sair da tela e ecoar no peito 😱"],
    explicacao_curta: ["Essa pintura mostra uma pessoa parecendo assustada ou triste. As cores fortes ajudam a mostrar emoções bem intensas."],
    explicacao_aprofundada: ["Com vermelho, preto e amarelo, Portinari expressa angústia e desespero, talvez como protesto contra as injustiças sociais e a dor humana."],
    curiosidade: ["Diferente do famoso 'O Grito' de Edvard Munch, o de Portinari tem traços mais realistas e uma paleta terrosa, mas igualmente perturbadora 😨"],
    interacao: ["O que pode fazer uma pessoa gritar assim? Você já sentiu vontade de gritar?"],
    atividade: ["Desenhe um rosto com uma expressão muito forte (grito, risada, choro) usando apenas duas cores contrastantes 🎭"],
    final: ["A arte pode dar forma aos sentimentos que não conseguimos explicar com palavras 🗣️"],
    emocao: "desespero",
    nivel: "leve"
  },
  candido_portinari_mestico: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["mestiço", "portinari mestiço", "quadro mestiço"],
    inicio: ["Um homem de olhar sério e pele morena, com um chapéu e um cigarro de palha – assim Portinari pintou o mestiço brasileiro 👒"],
    explicacao_curta: ["O artista pintou um homem brasileiro com expressão séria e forte. A obra mostra a mistura de povos e culturas do Brasil."],
    explicacao_aprofundada: ["Com marrom, azul e bege, a obra valoriza a figura do caboclo, fruto da miscigenação, com dignidade e humanidade, fugindo dos estereótipos."],
    curiosidade: ["Portinari pintou vários retratos de 'mestiços' ao longo de sua carreira, sempre destacando a beleza da diversidade brasileira 🌈"],
    interacao: ["O que significa 'mestiço' para você? Por que o Brasil é um país tão misturado?"],
    atividade: ["Desenhe um retrato de alguém (real ou imaginário) que represente a mistura de dois ou mais povos que você admira 👥"],
    final: ["A mistura de raças e culturas é uma das maiores riquezas do Brasil 💎"],
    emocao: "orgulho",
    nivel: "leve"
  },
  anita_malfatti_a_estudante: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["a estudante", "anita malfatti estudante", "quadro a estudante"],
    inicio: ["Uma jovem estudante com rosto colorido e formas quebradas – Anita desafiou o jeito tradicional de pintar 📚🟣"],
    explicacao_curta: ["A artista pintou uma jovem estudando com cores diferentes e traços modernos. Na época, muita gente achou estranho, mas hoje a obra é muito famosa."],
    explicacao_aprofundada: ["Com azul, verde e rosa, Anita usa pinceladas expressionistas para mostrar não apenas a aparência da moça, mas seu estado de espírito e a luz ambiente."],
    curiosidade: ["Esse quadro foi um dos mais criticados na famosa exposição de 1917, que recebeu um artigo feroz de Monteiro Lobato chamado 'Paranoia ou Mistificação?' 😬"],
    interacao: ["Se você fosse pintar alguém estudando, usaria cores reais ou inventaria novas?"],
    atividade: ["Desenhe uma pessoa estudando, mas pinte o rosto e os livros com cores que você sente (por exemplo, azul para calma, vermelho para energy) 💙❤️"], // wait, the user had "energia" in Portuguese
    final: ["A arte moderna nos ensina a olhar para o comum com novos olhos 👓"],
    emocao: "rebeldia",
    nivel: "leve"
  },
  anita_malfatti_o_homem_amarelo: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["o homem amarelo", "anita malfatti homem amarelo"],
    inicio: ["Um homem completamente amarelo, com olhos verdes e mão azul – Anita pintou as emoções em vez da realidade 🟡💚"],
    explicacao_curta: ["O homem foi pintado com cores fortes e diferentes da realidade. Anita queria mostrar sentimentos e emoções através da arte."],
    explicacao_aprofundada: ["Com amarelo, verde e laranja, a artista distorce o corpo e a cor para expressar angústia, solidão ou talvez uma doença – convidando o observador a sentir."],
    curiosidade: ["Anita sofria de uma atrofia no braço direito, o que a tornava mais sensível às imperfeições e dores do corpo, refletidas em suas figuras distorcidas 🦾"],
    interacao: ["Que cor você usaria para representar a alegria? E a tristeza?"],
    atividade: ["Desenhe um retrato de uma pessoa usando apenas uma cor principal para cada sentimento (ex: vermelho para raiva, azul para calma) 🎨"],
    final: ["As cores podem falar mais do que as formas quando mostramos o que sentimos 🌈"],
    emocao: "introspecção",
    nivel: "leve"
  },
  anita_malfatti_a_boba: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["a boba", "anita malfatti boba"],
    inicio: ["Uma figura de olhar vago e boca torta – é 'A Boba', de Anita Malfatti, que brinca com a expressão humana 😜"],
    explicacao_curta: ["Essa personagem tem uma expressão curiosa e divertida. A pintura usa formas exageradas para chamar atenção para as emoções."],
    explicacao_aprofundada: ["Com azul, rosa e verde, Anita cria uma figura quase caricata, com braços desproporcionais e rosto assimétrico, sugerindo ingenuidade ou loucura de forma provocadora."],
    curiosidade: ["O título 'A Boba' pode ser irônico: a personagem parece mais consciente de sua estranheza do que os críticos que a chamaram de 'boba' na época 😏"],
    interacao: ["O que é ser 'bobo' para você? Existe um jeito certo de ser?"],
    atividade: ["Desenhe um personagem com uma expressão exagerada (muito feliz, muito triste, muito espantado) e dê a ele um nome engraçado 😂"],
    final: ["A arte pode abraçar o que é diferente e mostrar que a normalidade é uma invenção 🌀"],
    emocao: "humor",
    nivel: "leve"
  },
  di_cavalcanti_baile_popular: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["baile popular", "di cavalcanti baile"],
    inicio: ["Pessoas dançando coladinho, músicos tocando – é um baile popular cheio de alegria e movimento 💃🎺"],
    explicacao_curta: ["A obra mostra pessoas dançando e se divertindo. O artista gostava de retratar festas e músicas populares brasileiras."],
    explicacao_aprofundada: ["Com vermelho, amarelo e marrom, Di Cavalcanti captura a energia do samba e dos clubes suburbanos, valorizando a cultura popular como tema nobre da arte."],
    curiosidade: ["Di Cavalcanti foi um dos organizadores da Semana de Arte Moderna de 1922 e sempre defendeu uma arte que celebrasse o povo brasileiro 🎉"],
    interacao: ["Qual música ou dança faz você querer dançar imediatamente?"],
    atividade: ["Desenhe uma cena de dança com pelo menos três pessoas, mostrando o movimento através de linhas onduladas ao redor dos braços e pernas 💫"],
    final: ["A arte pode eternizar a alegria de uma noite de dança e amizade 🌙"],
    emocao: "festa",
    nivel: "leve"
  },
  di_cavalcanti_pierrete: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["pierrete", "di cavalcanti pierrete"],
    inicio: ["Uma pierrô tristonha, com gola branca e olhar perdido – Di Cavalcanti reinventou a personagem da commedia dell'arte 🎭"],
    explicacao_curta: ["Essa personagem parece sonhadora e misteriosa. O artista usou cores suaves para criar um clima delicado."],
    explicacao_aprofundada: ["Com rosa, azul e cinza, ele transforma a tradicional Pierrette em uma figura melancólica e moderna, usando linhas suaves e composição simplificada."],
    curiosidade: ["A obra foi pintada em 1922, mesmo ano da Semana de Arte Moderna, mostrando a dualidade de Di: moderno mas ainda ligado a temas europeus 🎨"],
    interacao: ["Você já assistiu a um teatro de fantoches ou a uma peça com palhaços? Qual personagem você gosta mais?"],
    atividade: ["Desenhe um palhaço ou palhaça triste, usando cores suaves (azul claro, lilás, cinza) para mostrar a emoção 🤡💧"],
    final: ["A arte pode mostrar o lado delicado e triste dos palhaços, que nem sempre estão felizes 🎪"],
    emocao: "melancolia",
    nivel: "leve"
  },
  di_cavalcanti_cinco_mocas_de_guaratingueta: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["cinco moças de guaratinguetá", "di cavalcanti moças"],
    inicio: ["Cinco jovens sentadas na grama, conversando tranquilamente – uma cena simples do interior paulista 🍃👒"],
    explicacao_curta: ["As cinco mulheres aparecem juntas em uma cena tranquila. A pintura mostra a beleza das pessoas simples do Brasil."],
    explicacao_aprofundada: ["Com marrom, verde e bege, Di Cavalcanti utiliza uma paleta terrosa e formas arredondadas para retratar a intimidade e a dignidade das moças do Vale do Paraíba."],
    curiosidade: ["Guaratinguetá é a cidade natal de Di Cavalcanti; ele sempre voltava a ela em suas memórias e pinturas 🏡"],
    interacao: ["Você tem um grupo de amigos com quem gosta de sentar e conversar? O que vocês conversam?"],
    atividade: ["Desenhe um grupo de três amigos sentados em um banco de praça ou na grama, cada um com uma expressão diferente de conversa 😊😐😁"],
    final: ["As cenas simples do cotidiano também merecem virar arte 🖼️"],
    emocao: "calma",
    nivel: "leve"
  },
  di_cavalcanti_samba: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["samba", "di cavalcanti samba"],
    inicio: ["Pernas que dançam, braços que gingam, cores que explodem – é o samba pintado por Di Cavalcanti 🔥🎶"],
    explicacao_curta: ["Aqui vemos música, dança e alegria! O artista quis mostrar a energia do samba e da cultura brasileira."],
    explicacao_aprofundada: ["Com vermelho, laranja e amarelo, Di cria uma composição vibrante e abstrata, onde os corpos se fundem ao ritmo, celebrando a identidade nacional."],
    curiosidade: ["Di Cavalcanti era um grande apreciador de samba e amigo de compositores como Pixinguinha e Donga 🎵"],
    interacao: ["O que o samba representa para o Brasil? Que outras danças brasileiras você conhece?"],
    atividade: ["Desenhe um casal dançando samba, com os braços e pernas em posições exageradas e ondas coloridas saindo dos pés 🌊💃"],
    final: ["O samba é a alma do Brasil, e a arte pode fazer essa alma dançar para sempre 💃🕺"],
    emocao: "euforia",
    nivel: "leve"
  },
  vicente_do_rego_monteiro_o_artesao: {
    tema: "obras_arte_brasileira",
    subtema: "vicente_do_rego_monteiro",
    palavras_chave: ["o artesão", "vicente do rego monteiro", "artesão quadro"],
    inicio: ["Um homem curvado sobre sua obra, com ferramentas nas mãos – Vicente pintou o artesão com formas simples e geométricas 🔨"],
    explicacao_curta: ["A obra mostra um trabalhador fazendo seu ofício. O artista valorizava o trabalho manual e a cultura brasileira."],
    explicacao_aprofundada: ["Com marrom, cinza e verde, ele simplifica a figura quase como um ícone, destacando a concentração e a nobreza do artesanato."],
    curiosidade: ["Vicente foi um dos pioneiros da arte moderna brasileira e também poeta; ele participou da Semana de 22 📜"],
    interacao: ["Você já fez algo com as mãos, como um boneco de argila ou um desenho? Como se sentiu?"],
    atividade: ["Desenhe um artesão ou artesã trabalhando em uma peça (cerâmica, escultura, bordado) usando formas geométricas para simplificar o corpo ⬛🔺"],
    final: ["Todo trabalho feito com as mãos merece ser celebrado como arte 👐"],
    emocao: "admiração",
    nivel: "leve"
  },
  john_graz_paisagem_da_espanha: {
    tema: "obras_arte_brasileira",
    subtema: "john_graz",
    palavras_chave: ["paisagem da espanha", "john graz", "paisagem espanha"],
    inicio: ["Colinas suaves, casinhas brancas e um céu calmo – a Espanha vista por John Graz com olhar geométrico 🇪🇸🏞️"],
    explicacao_curta: ["Essa pintura mostra uma paisagem tranquila da Espanha com formas modernas e organizadas. Parece quase um desenho geométrico."],
    explicacao_aprofundada: ["Com azul, verde e bege, Graz aplica uma estética cubista e decorativa, fragmentando a paisagem em planos coloridos e linhas retas."],
    curiosidade: ["John Graz era suíço, mas viveu grande parte da vida no Brasil, onde ajudou a difundir o modernismo e o design de interiores 🛋️"],
    interacao: ["Se você fosse pintar uma paisagem de um lugar que visitou, como organizaria as cores?"],
    atividade: ["Desenhe uma paisagem (montanha, praia, campo) usando apenas formas geométricas: triângulos, quadrados e retângulos 🟠🟩🟦"],
    final: ["A arte moderna transforma a natureza em um quebra-cabeça colorido 🧩"],
    emocao: "harmonia",
    nivel: "leve"
  },
  pedro_americo_independencia_ou_morte: {
    tema: "obras_arte_brasileira",
    subtema: "pedro_americo",
    palavras_chave: ["independência ou morte", "pedro americo", "quadro independência"],
    inicio: ["Dom Pedro I sobre um cavalo, erguendo a espada – o grito da Independência em uma tela gigante 🇧🇷⚔️"],
    explicacao_curta: ["Essa pintura mostra o momento em que Dom Pedro I declarou a independência do Brasil. É uma cena cheia de movimento e importância histórica."],
    explicacao_aprofundada: ["Com verde, marrom e azul, Pedro Américo criou uma composição teatral e grandiosa, idealizando o evento às margens do rio Ipiranga em 1822."],
    curiosidade: ["Na verdade, Dom Pedro declarou a independência em viagem, e a cena não foi tão heroica quanto o quadro mostra – a arte 'aumentou' a história 🎭"],
    interacao: ["Se você pudesse pintar um momento importante da sua vida, qual seria?"],
    atividade: ["Desenhe uma cena histórica imaginária (você como herói) com muitos personagens, cavalos ou batalhas – use bastante movimento 🐎"],
    final: ["A arte pode transformar um momento simples em uma lenda eterna 📜"],
    emocao: "nobreza",
    nivel: "leve"
  },
  victor_meirelles_a_primeira_missa_no_brasil: {
    tema: "obras_arte_brasileira",
    subtema: "victor_meirelles",
    palavras_chave: ["primeira missa no brasil", "victor meirelles", "missa brasil"],
    inicio: ["Índios admirados, portugueses ajoelhados – a primeira missa no Brasil, um encontro de dois mundos ⛪🌴"],
    explicacao_curta: ["A pintura mostra a primeira missa realizada no Brasil, com portugueses e indígenas juntos. Ela representa um momento importante da história."],
    explicacao_aprofundada: ["Com verde, azul and marrom, Victor Meirelles criou uma cena quase documental, idealizada e grandiosa, que por muito tempo foi a imagem oficial do descobrimento."],
    curiosidade: ["O quadro foi pintado no Rio de Janeiro mas encomendado pela Academia de Belas Artes de Paris; levou anos para ficar pronto 🖌️"],
    interacao: ["Como você imagina que os indígenas se sentiram ao ver os portugueses pela primeira vez?"],
    atividade: ["Desenhe um encontro entre duas pessoas de culturas diferentes, trocando presentes ou sorrisos – sem violência 🤝"],
    final: ["A história oficial nem sempre conta todos os lados; a arte pode nos fazer perguntar 'o que mais aconteceu?' 🤔"],
    emocao: "contemplação",
    nivel: "leve"
  },
  almeida_junior_caipira_picando_fumo: {
    tema: "obras_arte_brasileira",
    subtema: "almeida_junior",
    palavras_chave: ["caipira picando fumo", "almeida junior", "picando fumo"],
    inicio: ["Um homem do campo, com chapéu de palha e facão, prepara o fumo – Almeida Júnior pintou a vida simples com realismo 🌾"],
    explicacao_curta: ["Aqui vemos um homem simples do campo preparando fumo. O artista gostava de mostrar cenas do cotidiano brasileiro."],
    explicacao_aprofundada: ["Com marrom, bege e verde, o artista valoriza a rusticidade e a dignidade do caipira, com detalhes realistas e uma iluminação que destaca o trabalho manual."],
    curiosidade: ["Almeida Júnior foi assassinado pelo próprio cunhado em 1899, em um crime passional, interrompendo sua carreira brilhante 🔪"],
    interacao: ["Você conhece alguém que trabalha no campo? Que ferramentas essa pessoa usa?"],
    atividade: ["Desenhe uma pessoa do campo realizando uma atividade (plantar, colher, cuidar de animais) com roupas e objetos típicos 👒"],
    final: ["O homem do campo tem uma sabedoria e uma força que a arte ajuda a eternizar 🌻"],
    emocao: "simplicidade",
    nivel: "leve"
  },

  // --- RITMOS MUSICAIS ---
  samba: {
    tema: "ritmos_musicais",
    subtema: "samba",
    palavras_chave: ["samba", "ritmo de samba", "musica de samba", "genero samba"],
    inicio: ["O samba é um dos ritmos mais famosos do Brasil 🥁"],
    explicacao_curta: ["O samba possui ritmo alegre e cheio de energia."],
    explicacao_aprofundada: ["Ele está presente em festas, rodas de música e no carnaval brasileiro."],
    curiosidade: ["O samba nasceu da mistura de influências africanas e brasileiras ✨"],
    interacao: ["Você consegue acompanhar um ritmo batendo palmas?"],
    atividade: ["Crie um ritmo usando mesa, palmas e pés 🥁"],
    final: ["O samba espalha alegria e movimento 🌈"],
    emocao: "animacao",
    nivel: "leve"
  },
  forro: {
    tema: "ritmos_musicais",
    subtema: "forro",
    palavras_chave: ["forro", "ritmo forro", "musica nordestina forro", "forro musica"],
    inicio: ["O forró traz sons animados do Nordeste brasileiro 🌵"],
    explicacao_curta: ["O forró é dançado em pares e possui muito ritmo."],
    explicacao_aprofundada: ["A sanfona, a zabumba e o triângulo são instrumentos importantes no forró."],
    curiosidade: ["As festas juninas costumam ter muito forró 🎉"],
    interacao: ["Você gostaria de aprender passos de forró?"],
    atividade: ["Desenhe instrumentos usados no forró 🎨"],
    final: ["O forró mistura música, dança e tradição 🌟"],
    emocao: "alegria",
    nivel: "leve"
  },
  frevo: {
    tema: "ritmos_musicais",
    subtema: "frevo",
    palavras_chave: ["frevo", "ritmo frevo", "musica frevo pernambuco"],
    inicio: ["O frevo é rápido e cheio de energia 🎺"],
    explicacao_curta: ["Ele mistura música animada e dança com muitos movimentos."],
    explicacao_aprofundada: ["O frevo é muito conhecido no carnaval de Pernambuco."],
    curiosidade: ["As sombrinhas coloridas fazem parte do frevo 🌈"],
    interacao: ["Você conseguiria dançar bem rápido acompanhando uma música?"],
    atividade: ["Crie uma mini sombrinha colorida ✂️"],
    final: ["O frevo transforma música em explosão de alegria ✨"],
    emocao: "energia",
    nivel: "leve"
  },
  maracatu: {
    tema: "ritmos_musicais",
    subtema: "maracatu",
    palavras_chave: ["maracatu", "ritmo maracatu", "musica afro brasileira maracatu"],
    inicio: ["O maracatu possui tambores fortes e marcantes 🥁"],
    explicacao_curta: ["Esse ritmo faz parte da cultura afro-brasileira."],
    explicacao_aprofundada: ["O maracatu mistura música, dança e cortejos tradicionais."],
    curiosidade: ["Os tambores criam batidas poderosas e vibrantes 🔥"],
    interacao: ["Você gosta de músicas com batidas fortes?"],
    atividade: ["Crie ritmos usando objetos recicláveis ♻️"],
    final: ["O maracatu carrega tradição e ritmo 🌍"],
    emocao: "forca",
    nivel: "leve"
  },
  axe: {
    tema: "ritmos_musicais",
    subtema: "axe",
    palavras_chave: ["axe", "ritmo axe", "musica baiana axe"],
    inicio: ["O axé é cheio de dança e animação 🌞"],
    explicacao_curta: ["Esse ritmo nasceu na Bahia e mistura vários estilos."],
    explicacao_aprofundada: ["O axé costuma aparecer em festas, carnavais e apresentações cheias de movimento."],
    curiosidade: ["Muitos trios elétricos tocam músicas de axé 🎶"],
    interacao: ["Qual música deixa você com vontade de dançar?"],
    atividade: ["Crie passos animados acompanhando uma música 🎵"],
    final: ["O axé espalha ritmo e alegria 🌈"],
    emocao: "animacao",
    nivel: "leve"
  },
  funk: {
    tema: "ritmos_musicais",
    subtema: "funk",
    palavras_chave: ["funk", "ritmo funk", "musica funk brasileira"],
    inicio: ["O funk possui batidas fortes e marcantes 🔊"],
    explicacao_curta: ["É um ritmo brasileiro muito popular."],
    explicacao_aprofundada: ["O funk mistura música, dança e criatividade das comunidades urbanas."],
    curiosidade: ["Cada região pode criar estilos diferentes de funk 🎧"],
    interacao: ["Você conseguiria inventar um passo diferente?"],
    atividade: ["Monte uma sequência de movimentos rápidos 🎵"],
    final: ["A música pode transformar movimento em expressão ✨"],
    emocao: "energia",
    nivel: "leve"
  },
  bossa_nova: {
    tema: "ritmos_musicais",
    subtema: "bossa_nova",
    palavras_chave: ["bossa nova", "musica bossa nova", "ritmo suave brasileiro"],
    inicio: ["A bossa nova possui sons suaves e tranquilos 🌙"],
    explicacao_curta: ["Ela mistura samba com influências do jazz."],
    explicacao_aprofundada: ["As músicas costumam ter voz calma, violão suave e melodias delicadas."],
    curiosidade: ["A bossa nova ficou famosa em vários países 🌍"],
    interacao: ["Você prefere músicas agitadas ou tranquilas?"],
    atividade: ["Desenhe uma paisagem ouvindo música calma 🎨"],
    final: ["A bossa nova parece música flutuando no ar ✨"],
    emocao: "calma",
    nivel: "leve"
  },
  rock: {
    tema: "ritmos_musicais",
    subtema: "rock",
    palavras_chave: ["rock", "musica rock", "ritmo rock"],
    inicio: ["O rock possui guitarras e muita energia 🎸"],
    explicacao_curta: ["Ele pode ser rápido, forte ou até mais calmo."],
    explicacao_aprofundada: ["O rock usa instrumentos como guitarra, bateria e baixo para criar ritmos marcantes."],
    curiosidade: ["Existem muitos tipos diferentes de rock 🤘"],
    interacao: ["Você gosta de músicas agitadas?"],
    atividade: ["Desenhe uma banda tocando no palco 🎤"],
    final: ["O rock mistura ritmo, atitude e criatividade 🌟"],
    emocao: "energia",
    nivel: "leve"
  },
  rap: {
    tema: "ritmos_musicais",
    subtema: "rap",
    palavras_chave: ["rap", "musica rap", "ritmo rap"],
    inicio: ["O rap usa palavras com ritmo e expressão 🎤"],
    explicacao_curta: ["As letras são faladas acompanhando a batida da música."],
    explicacao_aprofundada: ["O rap é usado para contar histórias, opiniões e sentimentos."],
    curiosidade: ["As rimas são muito importantes no rap ✨"],
    interacao: ["Você consegue criar uma frase rimando?"],
    atividade: ["Invente pequenas rimas divertidas 🎵"],
    final: ["As palavras também podem dançar no ritmo 🌈"],
    emocao: "expressao",
    nivel: "leve"
  },
  k_pop: {
    tema: "ritmos_musicais",
    subtema: "k_pop",
    palavras_chave: ["k pop", "musica kpop", "pop coreano"],
    inicio: ["O K-pop mistura música, dança e apresentações modernas ✨"],
    explicacao_curta: ["Esse estilo nasceu na Coreia do Sul."],
    explicacao_aprofundada: ["Os grupos usam coreografias sincronizadas, roupas criativas e músicas animadas."],
    curiosidade: ["As apresentações de K-pop possuem muitos efeitos visuais 🌈"],
    interacao: ["Você gosta de músicas com dança coreografada?"],
    atividade: ["Crie uma sequência simples de passos 🎵"],
    final: ["Música e dança podem criar grandes espetáculos 🌟"],
    emocao: "animacao",
    nivel: "leve"
  },
  sertanejo: {
    tema: "ritmos_musicais",
    subtema: "sertanejo",
    palavras_chave: ["sertanejo", "musica sertaneja", "ritmo sertanejo"],
    inicio: ["O sertanejo fala sobre sentimentos e vida no campo 🌾"],
    explicacao_curta: ["É um ritmo muito popular no Brasil."],
    explicacao_aprofundada: ["As músicas sertanejas costumam usar violão e contar histórias do cotidiano."],
    curiosidade: ["Muitas duplas sertanejas cantam juntas 🎵"],
    interacao: ["Você gosta de músicas mais calmas ou agitadas?"],
    atividade: ["Desenhe uma paisagem do campo 🎨"],
    final: ["A música pode contar histórias da vida 🌻"],
    emocao: "tranquilidade",
    nivel: "leve"
  },
  pagode: {
    tema: "ritmos_musicais",
    subtema: "pagode",
    palavras_chave: ["pagode", "musica pagode", "tipo de samba pagode"],
    inicio: ["O pagode mistura ritmo leve e alegria 🪘"],
    explicacao_curta: ["Ele é um estilo musical ligado ao samba."],
    explicacao_aprofundada: ["O pagode costuma aparecer em rodas de música e encontros animados."],
    curiosidade: ["Instrumentos como tantã e cavaquinho aparecem no pagode 🎶"],
    interacao: ["Você gosta de músicas para cantar com amigos?"],
    atividade: ["Crie um ritmo usando palmas e objetos da casa 👏"],
    final: ["O pagode espalha ritmo e amizade 🌈"],
    emocao: "alegria",
    nivel: "leve"
  },
  reggae: {
    tema: "ritmos_musicais",
    subtema: "reggae",
    palavras_chave: ["reggae", "musica reggae", "ritmo reggae"],
    inicio: ["O reggae possui ritmo tranquilo e relaxante 🌴"],
    explicacao_curta: ["Esse estilo musical fala muito sobre paz e união."],
    explicacao_aprofundada: ["As batidas do reggae costumam ser suaves e marcadas."],
    curiosidade: ["O reggae ficou famoso em vários países 🌍"],
    interacao: ["Que música faz você relaxar?"],
    atividade: ["Pinte usando cores suaves enquanto escuta música 🎨"],
    final: ["A música também pode transmitir calma ✨"],
    emocao: "calma",
    nivel: "leve"
  },
  pop: {
    tema: "ritmos_musicais",
    subtema: "pop",
    palavras_chave: ["pop", "musica pop", "ritmo pop"],
    inicio: ["O pop mistura ritmos modernos e animados 🌟"],
    explicacao_curta: ["É um estilo musical popular em muitos lugares do mundo."],
    explicacao_aprofundada: ["A música pop mistura dança, melodias marcantes e diferentes estilos musicais."],
    curiosidade: ["Muitas músicas pop possuem refrões fáceis de cantar 🎤"],
    interacao: ["Qual música faz você querer cantar junto?"],
    atividade: ["Crie a capa imaginária de um álbum pop 🎨"],
    final: ["A música pop espalha ritmo e diversão 🌈"],
    emocao: "animacao",
    nivel: "leve"
  },
  jazz: {
    tema: "ritmos_musicais",
    subtema: "jazz",
    palavras_chave: ["jazz", "musica jazz", "ritmo jazz"],
    inicio: ["O jazz mistura ritmo, improviso e criatividade 🎷"],
    explicacao_curta: ["Os músicos podem criar sons diferentes durante a apresentação."],
    explicacao_aprofundada: ["O jazz usa instrumentos como saxofone, piano e trompete."],
    curiosidade: ["No jazz, cada músico pode tocar de um jeito único ✨"],
    interacao: ["Você gostaria de inventar uma melodia?"],
    atividade: ["Desenhe instrumentos de uma banda de jazz 🎺"],
    final: ["O jazz transforma improviso em música 🌙"],
    emocao: "criatividade",
    nivel: "leve"
  },
  blues: {
    tema: "ritmos_musicais",
    subtema: "blues",
    palavras_chave: ["blues", "musica blues", "ritmo blues"],
    inicio: ["O blues possui melodias marcantes e emocionantes 🎸"],
    explicacao_curta: ["Esse ritmo expressa sentimentos através da música."],
    explicacao_aprofundada: ["O blues influenciou muitos outros estilos musicais."],
    curiosidade: ["A guitarra é muito usada no blues 🎶"],
    interacao: ["Você gosta de músicas mais suaves?"],
    atividade: ["Desenhe linhas e cores inspiradas em emoções 🎨"],
    final: ["A música pode mostrar sentimentos profundos 🌌"],
    emocao: "emocao",
    nivel: "leve"
  },
  hip_hop: {
    tema: "ritmos_musicais",
    subtema: "hip_hop",
    palavras_chave: ["hip hop", "musica hip hop", "ritmo hip hop"],
    inicio: ["O hip hop mistura música, dança e expressão urbana 🎧"],
    explicacao_curta: ["Esse movimento cultural usa ritmo, rimas e dança."],
    explicacao_aprofundada: ["O hip hop reúne rap, breakdance, grafite e criatividade."],
    curiosidade: ["O grafite também faz parte da cultura hip hop 🎨"],
    interacao: ["Você gostaria de criar passos de dança?"],
    atividade: ["Monte um desenho inspirado em arte urbana ✏️"],
    final: ["O hip hop transforma criatividade em movimento 🌟"],
    emocao: "energia",
    nivel: "leve"
  },
  classica: {
    tema: "ritmos_musicais",
    subtema: "classica",
    palavras_chave: ["musica classica", "ritmo classico", "genero classico"],
    inicio: ["A música clássica mistura instrumentos e emoções 🎻"],
    explicacao_curta: ["Ela pode ser suave, intensa ou grandiosa."],
    explicacao_aprofundada: ["Orquestras usam instrumentos como violino, piano, flauta e violoncelo."],
    curiosidade: ["Uma orquestra pode reunir muitos músicos ao mesmo tempo 🎼"],
    interacao: ["Qual instrumento você gostaria de aprender?"],
    atividade: ["Desenhe uma grande orquestra 🎨"],
    final: ["A música clássica transforma sons em emoção ✨"],
    emocao: "calma",
    nivel: "leve"
  },
  eletronica: {
    tema: "ritmos_musicais",
    subtema: "eletronica",
    palavras_chave: ["musica eletronica", "ritmo eletronico", "dj musica"],
    inicio: ["A música eletrônica usa tecnologia para criar sons 🔊"],
    explicacao_curta: ["Ela mistura batidas digitais e efeitos sonoros."],
    explicacao_aprofundada: ["DJs e produtores criam músicas usando computadores e equipamentos especiais."],
    curiosidade: ["Algumas músicas eletrônicas possuem sons futuristas 🚀"],
    interacao: ["Você gosta de músicas com batidas rapids?"],
    atividade: ["Crie padrões coloridos inspirados em sons eletrônicos 🌈"],
    final: ["Tecnologia e música podem criar sons surpreendentes ✨"],
    emocao: "energia",
    nivel: "leve"
  },

  // --- MUSICA ---
  o_que_e_musica: {
    tema: "musica",
    subtema: "o_que_e_musica",
    palavras_chave: [
      "o que e musica",
      "definicao de musica",
      "arte dos sons"
    ],
    inicio: [
      "A música transforma sons em emoções 🎵",
      "Os sons podem contar histórias sem usar palavras ✨"
    ],
    explicacao_curta: [
      "A música é a arte de organizar sons, ritmos e melodias."
    ],
    explicacao_aprofundada: [
      "Ela pode transmitir alegria, calma, energia ou emoção através de instrumentos, vozes e ritmos."
    ],
    curiosidade: [
      "A música existe em quase todas as culturas do mundo 🌍"
    ],
    interacao: [
      "Que música deixa você feliz?",
      "Você gosta mais de cantar ou ouvir música?"
    ],
    atividade: [
      "Crie sons usando palmas, mesa e objetos da casa 🥁"
    ],
    final: [
      "A música faz o mundo parecer cheio de movimento 🌈"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  elementos_musica: {
    tema: "musica",
    subtema: "elementos_musica",
    palavras_chave: [
      "elementos da musica",
      "ritmo melodia harmonia",
      "partes da musica"
    ],
    inicio: [
      "A música possui partes importantes que trabalham juntas 🎶"
    ],
    explicacao_curta: [
      "Ritmo, melodia e harmonia ajudam a construir a música."
    ],
    explicacao_aprofundada: [
      "O ritmo marca o tempo, a melodia organiza os sons e a harmonia combina diferentes notas."
    ],
    curiosidade: [
      "Até os batimentos do coração possuem ritmo 💓"
    ],
    interacao: [
      "Você consegue bater palmas acompanhando uma música?"
    ],
    atividade: [
      "Crie uma sequência de sons rápidos e lentos 👏"
    ],
    final: [
      "Cada elemento ajuda a música a ganhar vida ✨"
    ],
    emocao: "curiosidade",
    nivel: "leve"
  },
  tipos_musica: {
    tema: "musica",
    subtema: "tipos_musica",
    palavras_chave: [
      "tipos de musica",
      "estilos musicais",
      "musica classica popular"
    ],
    inicio: [
      "Existem muitos estilos musicais diferentes 🌎"
    ],
    explicacao_curta: [
      "Cada tipo de música possui sons e ritmos especiais."
    ],
    explicacao_aprofundada: [
      "Algumas músicas são agitadas, outras tranquilas, e cada cultura possui seus próprios estilos."
    ],
    curiosidade: [
      "Os ritmos podem mudar bastante de um país para outro 🌍"
    ],
    interacao: [
      "Qual estilo musical você mais gosta?"
    ],
    atividade: [
      "Desenhe como seria sua música favorita 🎨"
    ],
    final: [
      "A música pode ter muitos jeitos diferentes 🌈"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  instrumentos: {
    tema: "musica",
    subtema: "instrumentos",
    palavras_chave: [
      "instrumentos musicais",
      "violao flauta tambor",
      "tipos de instrumentos"
    ],
    inicio: [
      "Os instrumentos ajudam a criar sons incríveis 🎻"
    ],
    explicacao_curta: [
      "Existem instrumentos de corda, sopro e percussão."
    ],
    explicacao_aprofundada: [
      "Violão, tambor, piano, flauta e muitos outros instrumentos possuem sons diferentes."
    ],
    curiosidade: [
      "Cada instrumento produz vibrações sonoras únicas ✨"
    ],
    interacao: [
      "Que instrumento você gostaria de tocar?"
    ],
    atividade: [
      "Crie um instrumento usando materiais recicláveis ♻️"
    ],
    final: [
      "Os instrumentos transformam movimento em som 🎵"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  villa_lobos: {
    tema: "musica",
    subtema: "villa_lobos",
    palavras_chave: [
      "villa lobos",
      "heitor villa lobos"
    ],
    inicio: [
      "Villa-Lobos foi um importante compositor brasileiro 🇧🇷"
    ],
    explicacao_curta: [
      "Ele misturava música clássica com sons brasileiros."
    ],
    explicacao_aprofundada: [
      "Suas obras foram inspiradas na natureza, no folclore e nos ritmos do Brasil."
    ],
    curiosidade: [
      "Villa-Lobos gostava de explorar sons diferentes 🌿"
    ],
    interacao: [
      "Você gostaria de criar músicas inspiradas na natureza?"
    ],
    atividade: [
      "Imite sons da chuva, vento e pássaros 🎶"
    ],
    final: [
      "A música brasileira possui muitos sons inspiradores 🌎"
    ],
    emocao: "descoberta",
    nivel: "leve"
  },
  chiquinha_gonzaga: {
    tema: "musica",
    subtema: "chiquinha_gonzaga",
    palavras_chave: [
      "chiquinha gonzaga"
    ],
    inicio: [
      "Chiquinha Gonzaga marcou a história da música brasileira 🎹"
    ],
    explicacao_curta: [
      "Ela foi compositora e ajudou a abrir caminhos para mulheres na música."
    ],
    explicacao_aprofundada: [
      "Suas músicas animadas ficaram famosas em festas e apresentações."
    ],
    curiosidade: [
      "Ela compôs marchinhas conhecidas até hoje 🎉"
    ],
    interacao: [
      "Você gosta de músicas alegres para dançar?"
    ],
    atividade: [
      "Crie uma pequena melodia batendo palmas 👏"
    ],
    final: [
      "A música pode inspirar mudanças importantes ✨"
    ],
    emocao: "inspiracao",
    nivel: "leve"
  },
  cartola: {
    tema: "musica",
    subtema: "cartola",
    palavras_chave: [
      "cartola",
      "samba cartola"
    ],
    inicio: [
      "Cartola foi um dos grandes nomes do samba 🎩"
    ],
    explicacao_curta: [
      "Ele criou músicas importantes da cultura brasileira."
    ],
    explicacao_aprofundada: [
      "Suas canções misturavam poesia, emoção e ritmos do samba."
    ],
    curiosidade: [
      "Cartola ajudou a fortalecer o samba brasileiro 🥁"
    ],
    interacao: [
      "Você gosta de músicas com letras poéticas?"
    ],
    atividade: [
      "Escreva palavras que combinam com alegria 🎵"
    ],
    final: [
      "A música também pode ser cheia de poesia 🌙"
    ],
    emocao: "emocao",
    nivel: "leve"
  },
  beethoven: {
    tema: "musica",
    subtema: "beethoven",
    palavras_chave: [
      "beethoven",
      "musica classica beethoven"
    ],
    inicio: [
      "Beethoven criou músicas famosas da música clássica 🎼"
    ],
    explicacao_curta: [
      "Suas composições possuem emoção e intensidade."
    ],
    explicacao_aprofundada: [
      "Ele escreveu obras para piano, orquestras e muitos instrumentos."
    ],
    curiosidade: [
      "Beethoven continuou compondo mesmo enfrentando dificuldades auditivas 🎹"
    ],
    interacao: [
      "Você gosta de músicas suaves ou grandiosas?"
    ],
    atividade: [
      "Desenhe como você imagina uma grande orquestra 🎻"
    ],
    final: [
      "A música clássica atravessa gerações 🌟"
    ],
    emocao: "admiracao",
    nivel: "leve"
  },

  // --- IMAGINAÇÃO INFANTIL ---
  arte_engracada: {
    tema: "perguntas_infantis",
    subtema: "arte_engracada",
    palavras_chave: ["arte engraçada", "desenho engraçado", "arte maluca", "pintura engraçada", "desenho divertido", "arte estranha"],
    inicio: ["A arte também pode fazer a gente rir 😄"],
    explicacao_curta: ["Alguns artistas criam personagens com olhos gigantes, pernas compridas ou cores malucas 🎨"],
    explicacao_aprofundada: ["Existem pinturas cheias de formas engraçadas e situações imaginárias ✨", "A criatividade não precisa seguir regras o tempo todo 🌈"],
    curiosidade: ["Muitos desenhos animados usam exageros para ficar engraçados 🎭"],
    interacao: ["Como seria seu personagem mais engraçado?"],
    atividade: ["Desenhe um animal usando cores que normalmente ele não teria 🐸🌈"],
    final: ["A arte pode ser divertida e cheia de imaginação ✨"],
    emocao: "diversao",
    nivel: "leve"
  },
  coisa_assustadora: {
    tema: "perguntas_infantis",
    subtema: "coisa_assustadora",
    palavras_chave: ["coisa assustadora", "desenho assustador", "arte de medo", "personagem assustador", "monstro desenho", "coisa creepy"],
    inicio: ["Algumas histórias usam mistério para criar emoção 🌙"],
    explicacao_curta: ["Monstros imaginários aparecem muito em desenhos e filmes 🎭"],
    explicacao_aprofundada: ["Sombras, cores escuras e olhos brilhantes podem deixar imagens misteriosas ✨", "Mesmo personagens assustadores podem virar desenhos criativos 🌌"],
    curiosidade: ["Muitos monstros famosos nasceram da imaginação das pessoas 👀"],
    interacao: ["Que criatura misteriosa você inventaria?"],
    atividade: ["Desenhe um monstrinho engraçado em vez de assustador 🎨"],
    final: ["A imaginação pode transformar medo em criatividade 🌟"],
    emocao: "misterio",
    nivel: "leve"
  },
  animal_magico: {
    tema: "perguntas_infantis",
    subtema: "animal_magico",
    palavras_chave: ["animal mágico", "bicho mágico", "criatura mágica", "animal fantasia", "animal imaginário"],
    inicio: ["Animais mágicos aparecem em muitas histórias encantadas 🦄"],
    explicacao_curta: ["Algumas criaturas imaginárias têm asas, brilho ou poderes especiais ✨"],
    explicacao_aprofundada: ["Dragões, unicórnios e sereias são exemplos famosos 🌈", "A imaginação pode misturar vários animais em um só 🎨"],
    curiosidade: ["Muitos povos criaram criaturas mágicas em suas lendas 🌍"],
    interacao: ["Que poder teria seu animal mágico?"],
    atividade: ["Misture dois animais para criar uma criatura nova ✏️"],
    final: ["Criar criaturas imaginárias é uma aventura criativa 🌟"],
    emocao: "encantamento",
    nivel: "leve"
  },
  desenho_facil: {
    tema: "perguntas_infantis",
    subtema: "desenho_facil",
    palavras_chave: ["desenho fácil", "como desenhar fácil", "desenho simples", "desenho infantil", "quero desenhar"],
    inicio: ["Todo desenho pode começar com formas simples ✏️"],
    explicacao_curta: ["Círculos, quadrados e triângulos ajudam a montar personagens 🎨"],
    explicacao_aprofundada: ["Treinar aos poucos ajuda o desenho a melhorar 🌱", "Até grandes artistas começaram desenhando formas básicas ✨"],
    curiosidade: ["Muitos desenhos famosos nasceram de rabiscos simples 😄"],
    interacao: ["O que você gostaria de aprender a desenhar?"],
    atividade: ["Desenhe um rostinho usando apenas círculos 😊"],
    final: ["Cada desenho é um passo novo na criatividade 🌈"],
    emocao: "criatividade",
    nivel: "leve"
  },
  cor_diferente: {
    tema: "perguntas_infantis",
    subtema: "cor_diferente",
    palavras_chave: ["cor diferente", "mistura de cores", "cor maluca", "cor inventada"],
    inicio: ["As cores podem transformar completamente um desenho 🌈"],
    explicacao_curta: ["Misturar cores cria novas possibilidades 🎨"],
    explicacao_aprofundada: ["Alguns artistas usam cores inesperadas para deixar a arte mais divertida ✨", "Não existe limite para imaginar combinações coloridas 🌟"],
    curiosidade: ["Azul com amarelo pode criar verde 💚"],
    interacao: ["Que cor inventada você criaria?"],
    atividade: ["Misture tintas para descobrir novas cores 🎨"],
    final: ["As cores ajudam a mostrar emoções e imaginação ✨"],
    emocao: "exploracao",
    nivel: "leve"
  },
  super_heroi: {
    tema: "perguntas_infantis",
    subtema: "super_heroi",
    palavras_chave: ["super heroi", "heroi desenho", "personagem poderoso", "criar heroi"],
    inicio: ["Os super-heróis usam coragem e criatividade 🦸"],
    explicacao_curta: ["Alguns heróis possuem poderes, roupas especiais e símbolos marcantes ✨"],
    explicacao_aprofundada: ["Os personagens podem proteger cidades, animais ou a natureza 🌎", "Cada herói possui habilidades únicas 🌟"],
    curiosidade: ["Muitos heróis nasceram primeiro nos quadrinhos 📚"],
    interacao: ["Qual seria o poder do seu herói?"],
    atividade: ["Crie um símbolo para seu personagem ✏️"],
    final: ["A imaginação pode criar heróis incríveis 🌈"],
    emocao: "coragem",
    nivel: "leve"
  },
  desenho_animal: {
    tema: "perguntas_infantis",
    subtema: "desenho_animal",
    palavras_chave: ["desenhar animal", "como desenhar cachorro", "como desenhar gato", "animal fácil"],
    inicio: ["Os animais podem ser desenhados usando formas simples 🐾"],
    explicacao_curta: ["Círculos ajudam a criar cabeças e corpos ✏️"],
    explicacao_aprofundada: ["Triângulos podem virar orelhas ou bicos 🎨", "Cada animal possui formas e movimentos diferentes 🌿"],
    curiosidade: ["Muitos artistas observam animais reais antes de desenhar 👀"],
    interacao: ["Qual animal você mais gosta de desenhar?"],
    atividade: ["Desenhe um gato usando circles e triângulos 🐱"],
    final: ["Observar a natureza ajuda muito na arte 🌈"],
    emocao: "criatividade",
    nivel: "leve"
  },

  // --- CONCEITOS DE ARTES VISUAIS ---
  linha: {
    tema: "artes_visuais",
    subtema: "linha",
    palavras_chave: [
      "linha",
      "traco",
      "traço"
    ],
    inicio: [
      "As linhas estão em quase todos os desenhos ✏️",
      "Uma linha pode passear pelo papel de muitos jeitos 🌈"
    ],
    explicacao_curta: [
      "A linha é um traço que pode ser reto, curvo ou ondulado."
    ],
    explicacao_aprofundada: [
      "As linhas ajudam a mostrar caminhos, movimentos, emoções e formas dentro da arte."
    ],
    curiosidade: [
      "Linhas rápidas podem mostrar agitação, enquanto linhas suaves parecem mais calmas."
    ],
    interacao: [
      "Você consegue desenhar uma linha bem maluca?",
      "Que tipo de linha parece mais divertida para você?"
    ],
    atividade: [
      "Desenhe linhas retas, curvas e em zigue-zague ✏️"
    ],
    final: [
      "Uma simples linha pode virar uma grande criação 🎨"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  ponto: {
    tema: "artes_visuais",
    subtema: "ponto",
    palavras_chave: [
      "ponto"
    ],
    inicio: [
      "O ponto é pequeno, mas muito importante 🎯"
    ],
    explicacao_curta: [
      "O ponto é o menor elemento do desenho."
    ],
    explicacao_aprofundada: [
      "Vários pontos juntos podem formar imagens, texturas e efeitos visuais."
    ],
    curiosidade: [
      "Alguns artistas criam desenhos inteiros usando apenas pontos ✨"
    ],
    interacao: [
      "Você consegue fazer um desenho só com pontinhos?"
    ],
    atividade: [
      "Crie uma figura usando muitos pontos coloridos 🔵"
    ],
    final: [
      "Pequenos pontos podem criar grandes imagens 🌟"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  forma: {
    tema: "artes_visuais",
    subtema: "forma",
    palavras_chave: [
      "forma",
      "figura"
    ],
    inicio: [
      "As formas ajudam a construir desenhos 🟠⬜🔺"
    ],
    explicacao_curta: [
      "A forma é o contorno de algo, como um círculo ou quadrado."
    ],
    explicacao_aprofundada: [
      "As formas podem ser geométricas ou livres e ajudam a criar personagens, objetos e paisagens."
    ],
    curiosidade: [
      "Muitos desenhos começam com formas simples."
    ],
    interacao: [
      "Qual forma você mais gosta de desenhar?"
    ],
    atividade: [
      "Crie um personagem usando círculos e quadrados ✏️"
    ],
    final: [
      "As formas são como peças de construção da arte 🌈"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  conceito_cor: {
    tema: "artes_visuais",
    subtema: "conceito_cor",
    palavras_chave: [
      "o que e cor",
      "definicao de cor"
    ],
    inicio: [
      "As cores deixam o mundo mais vivo 🌈"
    ],
    explicacao_curta: [
      "As cores podem transmitir sentimentos e emoções."
    ],
    explicacao_aprofundada: [
      "Algumas cores parecem calmas, outras agitadas ou alegres. Elas ajudam artistas a mostrar emoções."
    ],
    curiosidade: [
      "As cores aparecem por causa da luz ☀️"
    ],
    interacao: [
      "Qual cor combina mais com alegria para você?"
    ],
    atividade: [
      "Pinte um desenho usando apenas suas cores favoritas 🎨"
    ],
    final: [
      "As cores contam histórias sem usar palavras ✨"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  cores_quentes: {
    tema: "artes_visuais",
    subtema: "cores_quentes",
    palavras_chave: [
      "cores quentes",
      "vermelho",
      "amarelo"
    ],
    inicio: [
      "As cores quentes parecem cheias de energia 🔥"
    ],
    explicacao_curta: [
      "Vermelho, amarelo e laranja lembram o fogo e o sol."
    ],
    explicacao_aprofundada: [
      "As cores quentes transmitem calor, movimento e animação."
    ],
    interacao: [
      "Qual cor quente você acha mais animada?"
    ],
    atividade: [
      "Desenhe um sol usando cores quentes ☀️"
    ],
    final: [
      "As cores quentes deixam as artes vibrantes 🌞"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  cores_frias: {
    tema: "artes_visuais",
    subtema: "cores_frias",
    palavras_chave: [
      "cores frias",
      "azul",
      "verde"
    ],
    inicio: [
      "As cores frias parecem tranquilas 🌊"
    ],
    explicacao_curta: [
      "Azul e verde lembram água, céu e natureza."
    ],
    explicacao_aprofundada: [
      "As cores frias costumam transmitir calma e serenidade."
    ],
    interacao: [
      "Qual paisagem você pintaria usando cores frias?"
    ],
    atividade: [
      "Faça uma pintura inspirada no oceano 🌊"
    ],
    final: [
      "As cores frias parecem abraços tranquilos ☁️"
    ],
    emocao: "calma",
    nivel: "leve"
  },
  textura: {
    tema: "artes_visuais",
    subtema: "textura",
    palavras_chave: [
      "textura"
    ],
    inicio: [
      "A textura faz a arte parecer viva ✨"
    ],
    explicacao_curta: [
      "A textura mostra como algo parece ao toque."
    ],
    interacao: [
      "O que parece mais áspero: pedra ou algodão?"
    ],
    atividade: [
      "Crie texturas usando lápis e pontinhos ✏️"
    ],
    final: [
      "As texturas deixam os desenhos mais interessantes 🌿"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  volume: {
    tema: "artes_visuais",
    subtema: "volume",
    palavras_chave: [
      "volume"
    ],
    inicio: [
      "O volume ajuda o desenho a parecer tridimensional 📦"
    ],
    explicacao_curta: [
      "O volume cria a sensação de profundidade."
    ],
    atividade: [
      "Desenhe um cubo usando luz e sombra ✏️"
    ],
    final: [
      "O volume faz os objetos parecerem reais 🌟"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  espaco: {
    tema: "artes_visuais",
    subtema: "espaco",
    palavras_chave: [
      "espaco",
      "espaço"
    ],
    inicio: [
      "Todo desenho precisa de um espaço para acontecer 🌎",
      "O espaço ajuda os elementos da arte a se organizarem ✨"
    ],
    explicacao_curta: [
      "O espaço é o lugar onde os desenhos, formas e cores aparecem."
    ],
    explicacao_aprofundada: [
      "Na arte, o espaço pode parecer cheio, vazio, perto ou distante. Ele ajuda a organizar a imagem."
    ],
    curiosidade: [
      "Um espaço vazio também pode fazer parte da arte 🎨"
    ],
    interacao: [
      "Você prefere desenhos cheios de detalhes ou com bastante espaço vazio?"
    ],
    atividade: [
      "Desenhe um céu bem aberto com poucas formas ☁️"
    ],
    final: [
      "O espaço ajuda a arte a respirar 🌿"
    ],
    emocao: "equilibrio",
    nivel: "leve"
  },
  luz_sombra: {
    tema: "artes_visuais",
    subtema: "luz_sombra",
    palavras_chave: [
      "luz",
      "sombra",
      "luz e sombra"
    ],
    inicio: [
      "A luz e a sombra criam mágicas nos desenhos ✨",
      "Sombras ajudam os objetos a parecerem mais reais 🌗"
    ],
    explicacao_curta: [
      "A luz ilumina e a sombra mostra as partes mais escuras."
    ],
    explicacao_aprofundada: [
      "Artistas usam luz e sombra para criar profundidade, destacar formas e dar sensação de volume."
    ],
    curiosidade: [
      "A posição da luz muda completamente as sombras ☀️"
    ],
    interacao: [
      "Você já observou a sombra de um objeto no sol?"
    ],
    atividade: [
      "Desenhe uma bola e faça uma sombra ao lado ✏️"
    ],
    final: [
      "A luz e a sombra deixam os desenhos mais vivos 🌟"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  perspectiva: {
    tema: "artes_visuais",
    subtema: "perspectiva",
    palavras_chave: [
      "perspectiva"
    ],
    inicio: [
      "A perspectiva faz os desenhos parecerem profundos 🛤️",
      "Ela ajuda a criar a sensação de distância 👀"
    ],
    explicacao_curta: [
      "Objetos distantes parecem menores."
    ],
    explicacao_aprofundada: [
      "A perspectiva ajuda artistas a mostrar profundidade e criar cenas mais realistas."
    ],
    curiosidade: [
      "Trilhos de trem parecem se juntar ao longe 🚂"
    ],
    interacao: [
      "Você consegue imaginar uma estrada desaparecendo no horizonte?"
    ],
    atividade: [
      "Desenhe uma estrada ficando mais fina ao longe ✏️"
    ],
    final: [
      "A perspectiva cria ilusões incríveis na arte 🌈"
    ],
    emocao: "curiosidade",
    nivel: "leve"
  },
  composicao: {
    tema: "artes_visuais",
    subtema: "composicao",
    palavras_chave: [
      "composicao",
      "composição"
    ],
    inicio: [
      "A composição organiza os elementos da arte 🎨",
      "Cada desenho tem um jeito especial de organizar formas e cores ✨"
    ],
    explicacao_curta: [
      "A composição mostra como os elementos aparecem no desenho."
    ],
    explicacao_aprofundada: [
      "Artistas escolhem onde colocar objetos, cores e linhas para criar equilíbrio e movimento."
    ],
    curiosidade: [
      "Mudar um elemento de lugar pode transformar toda a imagem 🌟"
    ],
    interacao: [
      "Você gosta de desenhos organizados ou mais livres?"
    ],
    atividade: [
      "Monte uma cena colocando objetos em diferentes posições ✏️"
    ],
    final: [
      "A composição ajuda a contar histórias através da arte 🌿"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  cores_primarias: {
    tema: "artes_visuais",
    subtema: "cores_primarias",
    palavras_chave: [
      "cores primarias",
      "cores primárias"
    ],
    inicio: [
      "As cores primárias são muito especiais 🌈"
    ],
    explicacao_curta: [
      "As cores primárias são vermelho, azul e amarelo."
    ],
    explicacao_aprofundada: [
      "Com as cores primárias podemos criar muitas outras misturas e tonalidades."
    ],
    curiosidade: [
      "Muitas cores surgem da mistura das primárias 🎨"
    ],
    interacao: [
      "Você já tentou misturar tintas coloridas?"
    ],
    atividade: [
      "Misture azul e amarelo para descobrir uma nova cor ✨"
    ],
    final: [
      "As cores primárias são a base de muitas pinturas 🌟"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  cores_secundarias: {
    tema: "artes_visuais",
    subtema: "cores_secundarias",
    palavras_chave: [
      "cores secundarias",
      "cores secundárias"
    ],
    inicio: [
      "As cores secundárias nascem das misturas 🎨"
    ],
    explicacao_curta: [
      "As cores secundárias aparecem quando misturamos duas cores primárias."
    ],
    explicacao_aprofundada: [
      "Laranja, verde e roxo são exemplos de cores secundárias."
    ],
    curiosidade: [
      "Misturar tintas é quase como fazer experiências mágicas ✨"
    ],
    interacao: [
      "Qual mistura de cores você gostaria de testar?"
    ],
    atividade: [
      "Misture vermelho e amarelo para criar laranja 🧡"
    ],
    final: [
      "As misturas criam novas possibilidades coloridas 🌈"
    ],
    emocao: "diversao",
    nivel: "leve"
  },
  cores_terciarias: {
    tema: "artes_visuais",
    subtema: "cores_terciarias",
    palavras_chave: [
      "cores terciarias",
      "cores terciárias"
    ],
    inicio: [
      "As cores terciárias deixam a arte ainda mais rica 🎨"
    ],
    explicacao_curta: [
      "As cores terciárias surgem da mistura de uma cor primária com uma secundária."
    ],
    explicacao_aprofundada: [
      "Essas misturas criam tonalidades diferentes e cheias de personalidade."
    ],
    curiosidade: [
      "Algumas cores terciárias recebem nomes bem diferentes 🌈"
    ],
    interacao: [
      "Você gostaria de inventar uma cor nova?"
    ],
    atividade: [
      "Misture várias cores e observe os resultados ✨"
    ],
    final: [
      "As cores podem criar infinitas combinações 🌟"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  arte_abstrata: {
    tema: "artes_visuais_avancadas",
    subtema: "arte_abstrata",
    palavras_chave: [
      "arte abstrata",
      "abstrato",
      "pintura abstrata"
    ],
    inicio: [
      "A arte abstrata usa formas, linhas e cores de maneira livre 🎨"
    ],
    explicacao_curta: [
      "Ela não tenta copiar exatamente pessoas ou objetos reais."
    ],
    explicacao_aprofundada: [
      "Os artistas abstratos usam cores, formas e movimentos para transmitir emoções e ideias."
    ],
    curiosidade: [
      "Na arte abstrata, cada pessoa pode imaginar algo diferente ✨"
    ],
    interacao: [
      "Que sentimentos você mostraria usando apenas cores?"
    ],
    atividade: [
      "Pinte linhas e formas livres sem desenhar objetos 🎨"
    ],
    final: [
      "As cores também podem contar histórias 🌈"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  arte_figurativa: {
    tema: "artes_visuais_avancadas",
    subtema: "arte_figurativa",
    palavras_chave: [
      "arte figurativa",
      "figurativo"
    ],
    inicio: [
      "A arte figurativa mostra pessoas, animais e objetos 🖼️"
    ],
    explicacao_curta: [
      "Ela representa elementos reconhecíveis do mundo real."
    ],
    explicacao_aprofundada: [
      "Os artistas figurativos podem desenhar paisagens, retratos e cenas do cotidiano."
    ],
    curiosidade: [
      "Muitas pinturas antigas são figurativas 🎨"
    ],
    interacao: [
      "O que você mais gosta de desenhar?"
    ],
    atividade: [
      "Faça um desenho observando objetos da sua casa ✏️"
    ],
    final: [
      "A observação ajuda a criar arte cheia de detalhes ✨"
    ],
    emocao: "observacao",
    nivel: "leve"
  },
  grafite: {
    tema: "artes_visuais_avancadas",
    subtema: "grafite",
    palavras_chave: [
      "grafite",
      "arte urbana",
      "mural grafite"
    ],
    inicio: [
      "O grafite colore muros e cidades 🌆"
    ],
    explicacao_curta: [
      "É uma forma de arte urbana cheia de criatividade."
    ],
    explicacao_aprofundada: [
      "Os artistas usam spray, desenhos e letras para criar imagens em espaços públicos."
    ],
    curiosidade: [
      "Muitos grafites contam histórias da comunidade 🎨"
    ],
    interacao: [
      "Que desenho você faria em um mural gigante?"
    ],
    atividade: [
      "Crie letras coloridas inspiradas no grafite ✏️"
    ],
    final: [
      "A arte pode transformar paredes em galerias 🌈"
    ],
    emocao: "expressao",
    nivel: "leve"
  },
  muralismo: {
    tema: "artes_visuais_avancadas",
    subtema: "muralismo",
    palavras_chave: [
      "muralismo",
      "mural",
      "pintura mural"
    ],
    inicio: [
      "O muralismo cria pinturas enormes em paredes 🖌️"
    ],
    explicacao_curta: [
      "Os murais contam histórias usando imagens gigantes."
    ],
    explicacao_aprofundada: [
      "Muitos artistas usam murais para mostrar cultura, história e ideias importantes."
    ],
    curiosidade: [
      "Alguns murais ocupam prédios inteiros 🏙️"
    ],
    interacao: [
      "O que você desenharia em uma parede gigante?"
    ],
    atividade: [
      "Planeje um mural coletivo com amigos 🎨"
    ],
    final: [
      "Grandes paredes podem virar grandes obras 🌟"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  fotografia: {
    tema: "artes_visuais_avancadas",
    subtema: "fotografia",
    palavras_chave: [
      "fotografia",
      "foto artistica",
      "camera fotografica"
    ],
    inicio: [
      "A fotografia captura momentos usando luz 📸"
    ],
    explicacao_curta: [
      "As câmeras registram imagens e memórias."
    ],
    explicacao_aprofundada: [
      "Fotógrafos observam luz, ângulo e composição para criar imagens interessantes."
    ],
    curiosidade: [
      "Uma fotografia pode congelar um instante do tempo ⏳"
    ],
    interacao: [
      "O que você mais gostaria de fotografar?"
    ],
    atividade: [
      "Tire fotos observando luz e sombra 🌞"
    ],
    final: [
      "As imagens podem guardar lembranças especiais ✨"
    ],
    emocao: "observacao",
    nivel: "leve"
  },
  animacao: {
    tema: "artes_visuais_avancadas",
    subtema: "animacao",
    palavras_chave: [
      "animacao",
      "desenho animado",
      "animar desenho"
    ],
    inicio: [
      "A animação faz desenhos parecerem vivos 🎬"
    ],
    explicacao_curta: [
      "Várias imagens em sequência criam movimento."
    ],
    explicacao_aprofundada: [
      "Os animadores desenham muitas cenas para criar personagens e histórias em movimento."
    ],
    curiosidade: [
      "Um segundo de animação pode usar muitos desenhos ✏️"
    ],
    interacao: [
      "Que personagem animado você inventaria?"
    ],
    atividade: [
      "Faça um flipbook em um bloquinho 📚"
    ],
    final: [
      "Desenhos podem ganhar movimento e vida 🌈"
    ],
    emocao: "diversao",
    nivel: "leve"
  },
  stop_motion: {
    tema: "artes_visuais_avancadas",
    subtema: "stop_motion",
    palavras_chave: [
      "stop motion",
      "animacao quadro a quadro"
    ],
    inicio: [
      "O stop motion cria animações usando fotos 🎥"
    ],
    explicacao_curta: [
      "Os objetos são movidos pouquinho por pouquinho."
    ],
    explicacao_aprofundada: [
      "Cada foto registra uma pequena mudança até formar movimento."
    ],
    curiosidade: [
      "Massinhas e brinquedos podem virar personagens ✨"
    ],
    interacao: [
      "Que brinquedo você animaria?"
    ],
    atividade: [
      "Faça fotos movendo objetos lentamente 📸"
    ],
    final: [
      "Pequenos movimentos podem criar grandes histórias 🌟"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  pixel_art: {
    tema: "artes_visuais_avancadas",
    subtema: "pixel_art",
    palavras_chave: [
      "pixel art",
      "arte pixelada"
    ],
    inicio: [
      "A pixel art cria desenhos usando quadradinhos 🟦"
    ],
    explicacao_curta: [
      "Ela lembra imagens de videogames antigos."
    ],
    explicacao_aprofundada: [
      "Cada pixel funciona como uma pequena peça formando a imagem."
    ],
    curiosidade: [
      "Muitos jogos clássicos usam pixel art 🎮"
    ],
    interacao: [
      "Você gosta de jogos retrô?"
    ],
    atividade: [
      "Monte desenhos usando papel quadriculado ✏️"
    ],
    final: [
      "Pequenos pixels podem criar mundos inteiros 🌈"
    ],
    emocao: "diversao",
    nivel: "leve"
  },
  historia_em_quadrinhos: {
    tema: "artes_visuais_avancadas",
    subtema: "historia_em_quadrinhos",
    palavras_chave: [
      "quadrinhos",
      "hq",
      "historia em quadrinhos"
    ],
    inicio: [
      "Os quadrinhos misturam desenho e narrativa 📚"
    ],
    explicacao_curta: [
      "As histórias aparecem em cenas organizadas em quadros."
    ],
    explicacao_aprofundada: [
      "Os personagens falam usando balões e expressões desenhadas."
    ],
    curiosidade: [
      "Os quadrinhos podem ter aventura, humor ou mistério ✨"
    ],
    interacao: [
      "Que superpoder teria seu personagem?"
    ],
    atividade: [
      "Crie uma HQ com três quadros ✏️"
    ],
    final: [
      "Desenhos também podem contar aventuras 🌟"
    ],
    emocao: "imaginacao",
    nivel: "leve"
  },
  arte_digital: {
    tema: "artes_visuais_avancadas",
    subtema: "arte_digital",
    palavras_chave: [
      "arte digital",
      "desenho digital",
      "pintura digital"
    ],
    inicio: [
      "A arte digital usa computadores e tablets para criar 🎨"
    ],
    explicacao_curta: [
      "Os artistas desenham usando programas e telas digitais."
    ],
    explicacao_aprofundada: [
      "É possível usar pincéis virtuais, efeitos e muitas cores diferentes."
    ],
    curiosidade: [
      "Muitos filmes e jogos usam arte digital 🎮"
    ],
    interacao: [
      "Você prefere desenhar no papel ou na tela?"
    ],
    atividade: [
      "Crie desenhos usando aplicativos simples ✏️"
    ],
    final: [
      "Tecnologia e criatividade podem trabalhar juntas 🌈"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  conceicao_evaristo: {
    tema: "escritoras_brasileiras",
    subtema: "conceicao_evaristo",
    palavras_chave: ["conceição evaristo", "olhos d'água", "becos da memória", "contos", "mulheres negras"],
    inicio: ["Conceição Evaristo escreve histórias que parecem janelas para a vida de mulheres fortes e guerreiras 💪📖"],
    explicacao_curta: ["Conceição Evaristo escreve histórias inspiradas na vida real de muitas mulheres negras brasileiras."],
    explicacao_aprofundada: ["Seus textos falam de coragem, família, sonhos e dificuldades do dia a dia, mostrando como a esperança nunca se apaga."],
    curiosidade: ["Conceição trabalhou como empregada doméstica e só começou a estudar já adulta; hoje é uma das maiores escritoras do Brasil 🌟"],
    interacao: ["Que história da sua família ou de alguém que você conhece merecia ser contada?"],
    activity: ["Desenhe uma cena de uma história real que você gostaria de escrever: pode ser um momento feliz ou de superação 🖍️"], // wait, let's keep exact keys
    atividade: ["Desenhe uma cena de uma história real que você gostaria de escrever: pode ser um momento feliz ou de superação 🖍️"],
    final: ["A literatura pode dar voz a quem sempre teve histórias incríveis para contar 🗣️"],
    emocao: "resistência",
    nivel: "leve",
    ano_nascimento: "1946",
    ano_falecimento: "",
    local_nascimento: "Belo Horizonte, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Olhos d'Água', livro de contos que ganhou prêmios importantes.",
      "Escreveu 'Becos da Memória', romance inspirado em sua infância.",
      "É uma das vozes mais importantes da literatura brasileira contemporânea.",
      "Doutora em Literatura Comparada pela UFMG."
    ],
    onde_nasceu_resposta: "Conceição Evaristo nasceu em Belo Horizonte, Minas Gerais, em 1946.",
    ano_nascimento_resposta: "Conceição Evaristo nasceu no ano de 1946.",
    ano_falecimento_resposta: "Conceição Evaristo continua viva e escrevendo até hoje."
  },
  carolina_maria_de_jesus: {
    tema: "escritoras_brasileiras",
    subtema: "carolina_maria_de_jesus",
    palavras_chave: ["carolina maria de jesus", "quarto de despejo", "diário", "favela", "carolina de jesus"],
    inicio: ["Carolina Maria de Jesus escreveu um diário de verdade, contando seu dia a dia na favela com muita coragem 📔"],
    explicacao_curta: ["Carolina escreveu sobre sua própria vida na favela, contando as dificuldades e também sua força para cuidar da família."],
    explicacao_aprofundada: ["Seu diário virou um livro muito importante que mostra a realidade de quem vive na pobreza, mas também a dignidade, a inteligência e os sonhos de Carolina."],
    curiosidade: ["Ela catava papel para sobreviver e foi encontrada por um jornalista que se encantou com seus escritos; o livro vendeu milhares de cópias no mundo todo 🌍"],
    interacao: ["Se você escrevesse um diário sobre o seu dia, o que contaria primeiro?"],
    atividade: ["Escreva uma pequena página de diário desenhando algo que aconteceu ontem e que te fez sentir orgulho de você mesmo(a) ✍️"],
    final: ["A escrita pode transformar a vida de uma pessoa e inspirar o mundo inteiro 🌎"],
    emocao: "superação",
    nivel: "leve",
    ano_nascimento: "1914",
    ano_falecimento: "1977",
    local_nascimento: "Sacramento, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Quarto de Despejo: Diário de uma Favelada', que vendeu mais de 1 milhão de cópias.",
      "Foi uma das primeiras escritoras negras a alcançar fama internacional.",
      "Deixou mais de 20 cadernos com poemas, contos e peças de teatro."
    ],
    onde_nasceu_resposta: "Carolina Maria de Jesus nasceu em Sacramento, Minas Gerais, em 1914.",
    ano_nascimento_resposta: "Carolina Maria de Jesus nasceu no ano de 1914.",
    ano_falecimento_resposta: "Carolina Maria de Jesus faleceu no ano de 1977."
  },
  maria_firmina_dos_reis: {
    tema: "escritoras_brasileiras",
    subtema: "maria_firmina_dos_reis",
    palavras_chave: ["maria firmina dos reis", "úrsula", "romance", "liberdade", "abolicionista", "maria firmina"],
    inicio: ["Maria Firmina dos Reis escreveu um livro corajoso que denunciava a escravidão e pedia justiça ✊🏿"],
    explicacao_curta: ["Maria Firmina escreveu uma história que defendia a liberdade das pessoas escravizadas. Foi uma obra muito corajosa para a época."],
    explicacao_aprofundada: ["'Úrsula' é considerado o primeiro romance abolicionista do Brasil, mostrando a dor e a resistência de pessoas negras escravizadas."],
    curiosidade: ["Maria Firmina também foi professora e musicista, e seu livro ficou esquecido por mais de 100 anos, sendo redescoberto só no século XX 🔍"],
    interacao: ["O que significa 'justiça' para você? Como você explicaria?"],
    atividade: ["Desenhe uma balança (símbolo da justiça) e, de um lado, desenhe algo que você acha injusto; do outro, desenhe como seria o mundo sem essa injustiça ⚖️"],
    final: ["A literature pode lutar por um mundo mais justo para todos 🌈"],
    emocao: "justiça",
    nivel: "leve",
    ano_nascimento: "1822",
    ano_falecimento: "1917",
    local_nascimento: "São Luís, Maranhão, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Úrsula' (1859), primeiro romance abolicionista do Brasil.",
      "Publicou contos, poemas e uma obra sobre pedagogia.",
      "Foi professora e fundou a primeira escola mista e gratuita do Maranhão."
    ],
    onde_nasceu_resposta: "Maria Firmina dos Reis nasceu em São Luís, Maranhão, em 1822.",
    ano_nascimento_resposta: "Maria Firmina dos Reis nasceu no ano de 1822.",
    ano_falecimento_resposta: "Maria Firmina dos Reis faleceu no ano de 1917."
  },
  jarid_arraes: {
    tema: "escritoras_brasileiras",
    subtema: "jarid_arraes",
    palavras_chave: ["jarid arraes", "heroínas negras brasileiras", "cordel", "15 cordéis", "jarid"],
    inicio: ["Jarid Arraes conta histórias de mulheres incríveis usando versos rimados, como os cantadores de feira 🎤📜"],
    explicacao_curta: ["Jarid conta histórias de mulheres negras brasileiras muito importantes usando cordel, um jeito divertido e rimado de contar histórias."],
    explicacao_aprofundada: ["Cada cordel é como uma música em versos, que homenageia heroínas como Tia Ciata, Carolina de Jesus e muitas outras, mostrando sua força e legado."],
    curiosidade: ["Jarid começou a escrever cordel ainda na adolescência e publicou seu primeiro livro aos 24 anos, depois de criar um clube de leitura feminino 📚"],
    interacao: ["Que mulher da sua vida você gostaria de homenagear com versos rimados?"],
    atividade: ["Escreva uma quadrinha (quatro versos) rimada sobre uma mulher que você admira – pode ser sua mãe, avó, professora ou uma amiga ✏️🎶"],
    final: ["A poesia rimada pode transformar qualquer história em uma canção inesquecível 🎵"],
    emocao: "homenagem",
    nivel: "leve",
    ano_nascimento: "1991",
    ano_falecimento: "",
    local_nascimento: "Juazeiro do Norte, Ceará, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Heroínas Negras Brasileiras em 15 Cordéis'.",
      "Fundou o Clube de Leitura Feminino.",
      "É escritora, poeta e cordelista premiada."
    ],
    onde_nasceu_resposta: "Jarid Arraes nasceu em Juazeiro do Norte, Ceará, em 1991.",
    ano_nascimento_resposta: "Jarid Arraes nasceu no ano de 1991.",
    ano_falecimento_resposta: "Jarid Arraes continua viva e escrevendo até hoje."
  },
  djamila_ribeiro: {
    tema: "escritoras_brasileiras",
    subtema: "djamila_ribeiro",
    palavras_chave: ["djamila ribeiro", "pequeno manual antirracista", "ensaio", "igualdade", "djamila"],
    inicio: ["Djamila Ribeiro escreveu um livrinho que ensina, de forma simples, como podemos ser mais amigos e respeitar todas as pessoas 🤝"],
    explicacao_curta: ["Djamila explica de forma simples como podemos construir um mundo mais justo e respeitoso para todas as pessoas."],
    explicacao_aprofundada: ["O livro traz exemplos do dia a dia e atitudes práticas para combater o racismo, valorizando a diversidade e a empatia."],
    curiosidade: ["Djamila foi a primeira filósofa negra a dar aula na Universidade Federal de São Paulo e é uma das vozes mais importantes contra o racismo no Brasil 🎓"],
    interacao: ["O que você faria se visse alguém sendo tratado de forma injusta por causa da cor da pele?"],
    atividade: ["Desenhe um cartaz com a frase 'Todos iguais, todos diferentes' e encha de desenhos de pessoas com várias cores de cabelo, pele e roupas felizes 🎨"],
    final: ["Pequenos gestos de respeito podem mudar o mundo, um abraço de cada vez 💖"],
    emocao: "empatia",
    nivel: "leve",
    ano_nascimento: "1980",
    ano_falecimento: "",
    local_nascimento: "São Paulo, São Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Pequeno Manual Antirracista', que se tornou um best-seller.",
      "É filósofa, feminista e ativista pelos direitos humanos.",
      "Coordenou a coleção 'Feminismos Plurais'."
    ],
    onde_nasceu_resposta: "Djamila Ribeiro nasceu em São Paulo, em 1980.",
    ano_nascimento_resposta: "Djamila Ribeiro nasceu no ano de 1980.",
    ano_falecimento_resposta: "Djamila Ribeiro continua viva e escrevendo até hoje."
  },
  eliane_potiguara: {
    tema: "escritoras_brasileiras",
    subtema: "eliane_potiguara",
    palavras_chave: ["eliane potiguara", "metade cara metade máscara", "indígena", "poesia", "eliane"],
    inicio: ["Eliane Potiguara escreve sobre a beleza e a luta dos povos indígenas, como uma guardiã de histórias antigas 🏹📖"],
    explicacao_curta: ["Eliane escreve sobre os povos indígenas, suas histórias, culturas e a importância de cuidar das tradições e da natureza."],
    explicacao_aprofundada: ["A obra mistura poesia e relatos para mostrar a força da mulher indígena, a resistência contra o preconceito e o amor pela terra."],
    curiosidade: ["Eliane é da etnia Potiguara e fundou o primeiro centro de apoio aos indígenas urbanos no Rio de Janeiro, chamado 'Grumim' 🍃"],
    interacao: ["O que você sabe sobre os povos indígenas que vivem no Brasil hoje?"],
    atividade: ["Desenhe uma máscara de guerra ou de festa inspirada em algum povo indígena brasileiro (você pode pesquisar imagens de cocares ou pinturas corporais) 🎭"],
    final: ["A literatura indígena nos ensina a respeitar a natureza e a valorizar quem veio antes de nós 🌿"],
    emocao: "ancestralidade",
    nivel: "leve",
    ano_nascimento: "1947",
    ano_falecimento: "",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Metade Cara, Metade Máscara' e outros livros de poesia.",
      "Fundou o Grumin (Grupo Mulher-Educação Indígena).",
      "É uma das primeiras escritoras indígenas a publicar no Brasil."
    ],
    onde_nasceu_resposta: "Eliane Potiguara nasceu no Rio de Janeiro, em 1947.",
    ano_nascimento_resposta: "Eliane Potiguara nasceu no ano de 1947.",
    ano_falecimento_resposta: "Eliane Potiguara continua viva e escrevendo até hoje."
  },
  graca_grauna: {
    tema: "escritoras_brasileiras",
    subtema: "graca_grauna",
    palavras_chave: ["graça graúna", "criaturas de ñanderu", "poesia", "ancestralidade", "graça grauna"],
    inicio: ["Graça Graúna usa poemas para falar de seres mágicos da natureza, como se a floresta inteira pudesse falar 🌳✨"],
    explicacao_curta: ["Graça usa poemas para falar sobre espiritualidade, natureza e a sabedoria dos povos indígenas brasileiros."],
    explicacao_aprofundada: ["O livro traz criaturas míticas e elementos da cosmologia Guarani, mostrando como tudo na terra está conectado com o sagrado."],
    curiosidade: ["Graça também é atriz, professora e roteirista; ela escreve tanto para crianças quanto para adultos, sempre valorizando a cultura indígena 🎭"],
    interacao: ["Se a natureza pudesse te contar um segredo através de um poema, o que você acha que ela diria?"],
    atividade: ["Invente um poema de três versos para um animal ou planta que você ama (exemplo: 'O beija-flor bebe sol / e veste arco-íris / para dançar no meu quintal') 🐦🌺"],
    final: ["A poesia pode dar alma às folhas, aos bichos e aos rios 🌊"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1968",
    ano_falecimento: "",
    local_nascimento: "Pesqueira, Pernambuco, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Criaturas de Ñanderu' e outros livros de poesia.",
      "É atriz, roteirista e professora.",
      "Escreve para crianças e adultos valorizando a cultura indígena."
    ],
    onde_nasceu_resposta: "Graça Graúna nasceu em Pesqueira, Pernambuco, in 1968.",
    ano_nascimento_resposta: "Graça Graúna nasceu no ano de 1968.",
    ano_falecimento_resposta: "Graça Graúna continua viva e escrevendo até hoje."
  },
  auritha_tabajara: {
    tema: "escritoras_brasileiras",
    subtema: "auritha_tabajara",
    palavras_chave: ["auritha tabajara", "coração na aldeia pés no mundo", "cordel", "identidade indígena", "auritha"],
    inicio: ["Auritha Tabajara escreve versos que viajam da aldeia para a cidade, sempre com o coração cheio de tradição 🌎❤️"],
    explicacao_curta: ["Auritha mistura histórias da aldeia com aventuras pelo mundo, mostrando a força e a beleza da cultura indígena."],
    explicacao_aprofundada: ["Em cordel, ela conta como é ser indígena no Brasil de hoje, equilibrando ancestralidade e modernidade, além de lutar contra o preconceito."],
    curiosidade: ["Auritha é a primeira mulher indígena a publicar um cordel no Brasil, e ela faz parte da etnia Tabajara, do Ceará 🎉"],
    interacao: ["O que você gosta de levar com você onde quer que vá (um objeto, uma lembrança, um cheiro)?"],
    atividade: ["Crie um pequeno cordel de duas estrofes rimadas sobre um lugar que você ama (sua casa, a praia, a escola, a aldeia dos seus sonhos) 🏡🎶"],
    final: ["Podemos viver no mundo todo sem nunca esquecer de onde viemos 🌍"],
    emocao: "pertencimento",
    nivel: "leve",
    ano_nascimento: "1985",
    ano_falecimento: "",
    local_nascimento: "Fortaleza, Ceará, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Coração na Aldeia, Pés no Mundo' (cordel).",
      "Foi a primeira mulher indígena a publicar um cordel no Brasil.",
      "É contadora de histórias, cordelista e ativista indígena."
    ],
    onde_nasceu_resposta: "Auritha Tabajara nasceu em Fortaleza, Ceará, em 1985.",
    ano_nascimento_resposta: "Auritha Tabajara nasceu no ano de 1985.",
    ano_falecimento_resposta: "Auritha Tabajara continua viva e escrevendo até hoje."
  },
  marcia_kambeba: {
    tema: "escritoras_brasileiras",
    subtema: "marcia_kambeba",
    palavras_chave: ["márcia kambeba", "marcia kambeba", "ay kakyri tama", "eu moro na cidade", "poesia indígena"],
    inicio: ["Márcia Kambeba mostra que é possível morar na cidade grande e ainda guardar a floresta dentro do peito 🌆🌳"],
    explicacao_curta: ["Márcia fala sobre viver na cidade sem esquecer as raízes indígenas e o amor pela natureza e pelos antepassados."],
    explicacao_aprofundada: ["Seus poemas falam de identidade, memória e resistência, mostrando que ser indígena não é só viver na aldeia, mas também está presente nos centros urbanos."],
    curiosidade: ["Márcia é do povo Kambeba, nasceu no Amazonas, e é geógrafa, ativista e poetisa; ela viaja o Brasil levando a palavra indígena para escolas e universidades 🎓"],
    interacao: ["O que você carrega da sua família ou da sua cultura mesmo quando está longe?"],
    atividade: ["Desenhe uma paisagem que misture prédios e arranha-céus com árvores, rios e animais da floresta – como seria a cidade dos seus sonhos? 🏙️🌿"],
    final: ["Podemos ser muitos lugares ao mesmo tempo; o importante é nunca apagar nossas raízes 🌱"],
    emocao: "pertencimento duplo",
    nivel: "leve",
    ano_nascimento: "1981",
    ano_falecimento: "",
    local_nascimento: "Amazonas, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Ay Kakyri Tama - Eu Moro na Cidade'.",
      "É geógrafa, poetisa e ativista indígena.",
      "Viaja o Brasil levando poesia indígena para escolas e universidades."
    ],
    onde_nasceu_resposta: "Márcia Kambeba nasceu no Amazonas, em 1981.",
    ano_nascimento_resposta: "Márcia Kambeba nasceu no ano de 1981.",
    ano_falecimento_resposta: "Márcia Kambeba continua viva e escrevendo até hoje."
  },
  julie_dorrico: {
    tema: "escritoras_brasileiras",
    subtema: "julie_dorrico",
    palavras_chave: ["julie dorrico", "literatura indígena contemporânea", "pesquisa", "cultura indígena", "julie"],
    inicio: ["Julie Dorrico estuda e escreve sobre histórias indígenas para que todo mundo conheça a riqueza dessas culturas 📚✨"],
    explicacao_curta: ["Julie Dorrico escreve e pesquisa histórias indígenas para ajudar mais pessoas a conhecerem a riqueza dessas culturas."],
    explicacao_aprofundada: ["Seu trabalho mostra como a literatura indígena vai muito além do folclore: é arte, política, memória e muita criatividade feita por pessoas indígenas de verdade."],
    curiosidade: ["Julie é da etnia Macuxi, doutora em Letras e organizou a primeira antologia de literatura indígena brasileira contemporânea, chamada 'Morosofia' 🏆"],
    interacao: ["Que livro ou história indígena você já leu ou ouviu falar?"],
    atividade: ["Pesquise (com ajuda de um adulto) um mito indígena curto, leia e depois desenhe a cena que você mais gostou 🐆"],
    final: ["Conhecer a literatura indígena é abrir a porta para mundos cheios de sabedoria e encanto 🚪🌈"],
    emocao: "conhecimento",
    nivel: "leve",
    ano_nascimento: "1985",
    ano_falecimento: "",
    local_nascimento: "Roraima, Brasil",
    o_que_ele_fez: [
      "Organizou a primeira antologia de literatura indígena brasileira contemporânea, 'Morosofia'.",
      "É doutora em Letras pela PUCRS.",
      "Escreve e pesquisa sobre literatura indígena contemporânea."
    ],
    onde_nasceu_resposta: "Julie Dorrico nasceu em Roraima, em 1985.",
    ano_nascimento_resposta: "Julie Dorrico nasceu no ano de 1985.",
    ano_falecimento_resposta: "Julie Dorrico continua viva e escrevendo até hoje."
  },
  machado_de_assis: {
    tema: "autores_brasileiros",
    subtema: "machado_de_assis",
    palavras_chave: ["machado de assis", "memórias póstumas de brás cubas", "dom casmurro", "quincas borba", "romance", "humor", "memorias postumas de bras cubas", "machado"],
    inicio: ["Machado de Assis criou personagens que contam suas vidas com muito humor e inteligência 🎩📖"],
    explicacao_curta: ["Machado de Assis é o maior escritor brasileiro. Suas histórias são cheias de humor, ironia e reflexões sobre a sociedade."],
    explicacao_aprofundada: ["Machado foi fundador da Academia Brasileira de Letras e criou obras-primas como Memórias Póstumas de Brás Cubas, Dom Casmurro e Quincas Borba, marcadas por um estilo único e irônico."],
    curiosidade: ["Machado era filho de uma lavadeira e de um pintor de paredes, aprendeu sozinho a ler e escrever, e tornou-se o maior nome da literatura brasileira 🌟"],
    interacao: ["Se você pudesse contar sua história depois de velhinho, o que lembraria primeiro?"],
    atividade: ["Desenhe uma cena engraçada de um personagem que conta sua vida depois de morto – como um fantasma brincalhão 👻"],
    final: ["O humor pode nos ensinar a enxergar a vida de outro jeito 😂"],
    emocao: "ironia",
    nivel: "leve",
    ano_nascimento: "1839",
    ano_falecimento: "1908",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Fundou a Academia Brasileira de Letras e foi seu primeiro presidente.",
      "Escreveu 'Memórias Póstumas de Brás Cubas', 'Dom Casmurro' e 'Quincas Borba'.",
      "É considerado o maior escritor da literatura brasileira.",
      "Publicou romances, contos, crônicas, poesias e peças de teatro."
    ],
    onde_nasceu_resposta: "Machado de Assis nasceu no Rio de Janeiro, em 1839.",
    ano_nascimento_resposta: "Machado de Assis nasceu no ano de 1839.",
    ano_falecimento_resposta: "Machado de Assis faleceu no ano de 1908."
  },
  lima_barreto: {
    tema: "autores_brasileiros",
    subtema: "lima_barreto",
    palavras_chave: ["lima barreto", "triste fim de policarpo quaresma", "clara dos anjos", "patriotismo", "policarpo quaresma"],
    inicio: ["Lima Barreto escreveu sobre pessoas que amavam o Brasil e queriam mudar o país para melhor 🇧🇷😢"],
    explicacao_curta: ["Lima Barreto foi um grande escritor que denunciou as injustiças sociais e o preconceito em suas obras."],
    explicacao_aprofundada: ["Em 'Triste Fim de Policarpo Quaresma' e 'Clara dos Anjos', ele criticou a sociedade brasileira, o racismo e as desigualdades com um olhar realista e sensível."],
    curiosidade: ["Lima Barreto foi um dos primeiros grandes escritores negros do Brasil e sofreu muito preconceito, mas deixou obras-primas 📚"],
    interacao: ["Se você pudesse inventar uma lei para melhorar o Brasil, qual seria?"],
    atividade: ["Desenhe Policarpo Quaresma plantando mandioca e ao lado um político rindo – mostre como ele é sozinho em sua luta 🌱"],
    final: ["O amor ao país pode ser lindo, mas mudar o mundo sozinho é muito difícil; por isso devemos nos unir 🤝"],
    emocao: "idealismo",
    nivel: "leve",
    ano_nascimento: "1881",
    ano_falecimento: "1922",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Triste Fim de Policarpo Quaresma' e 'Clara dos Anjos'.",
      "Denunciou o racismo e as desigualdades sociais em suas obras.",
      "Foi um dos primeiros grandes escritores negros do Brasil."
    ],
    onde_nasceu_resposta: "Lima Barreto nasceu no Rio de Janeiro, em 1881.",
    ano_nascimento_resposta: "Lima Barreto nasceu no ano de 1881.",
    ano_falecimento_resposta: "Lima Barreto faleceu no ano de 1922."
  },
  itamar_vieira_junior: {
    tema: "autores_brasileiros",
    subtema: "itamar_vieira_junior",
    palavras_chave: ["itamar vieira junior", "torto arado", "chapada diamantina", "ancestralidade", "itamar", "itamar vieira"],
    inicio: ["Duas irmãs, uma enxada e um arado torto: assim começa 'Torto Arado', uma história de amor e luta pela terra 🌽⚒️"],
    explicacao_curta: ["Itamar Vieira Junior é um dos grandes nomes da literatura brasileira contemporânea, com obras que valorizam a cultura e as tradições do interior."],
    explicacao_aprofundada: ["Seu livro 'Torto Arado' narra a vida de duas irmãs numa comunidade de descendentes de escravizados, abordando conflitos de terra, fé e afeto com uma narrativa poética e forte."],
    curiosidade: ["'Torto Arado' foi o livro mais vendido no Brasil em 2020 e ganhou o Prêmio Jabuti e o Prêmio Oceanos 🌊"],
    interacao: ["Você já visitou uma fazenda ou roça? O que mais gostou?"],
    atividade: ["Desenhe uma paisagem do campo com uma casa simples, uma plantação e duas irmãs caminhando juntas sob o sol 🌞👩🏿🌾"],
    final: ["A terra não é só chão: é memória, família e vida 🌍"],
    emocao: "conexão",
    nivel: "leve",
    ano_nascimento: "1979",
    ano_falecimento: "",
    local_nascimento: "Salvador, Bahia, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Torto Arado', best-seller vencedor dos prêmios Jabuti e Oceanos.",
      "É doutor em Estudos Étnicos e Africanos pela UFBA.",
      "Foi finalista do Prêmio Portugal Telecom de Literatura."
    ],
    onde_nasceu_resposta: "Itamar Vieira Junior nasceu em Salvador, Bahia, em 1979.",
    ano_nascimento_resposta: "Itamar Vieira Junior nasceu no ano de 1979.",
    ano_falecimento_resposta: "Itamar Vieira Junior continua vivo e escrevendo até hoje."
  },
  daniel_munduruku: {
    tema: "autores_brasileiros",
    subtema: "daniel_munduruku",
    palavras_chave: ["daniel munduruku", "histórias de índio", "o karaíba", "contos indígenas", "natureza", "munduruku", "daniel mundurucu"],
    inicio: ["Daniel Munduruku conta histórias da floresta que os avós indígenas ensinam para as crianças, cheias de macacos, onças e curupiras 🐒🌳"],
    explicacao_curta: ["Daniel Munduruku é um dos mais importantes escritores indígenas do Brasil, com dezenas de livros que valorizam a cultura e a sabedoria dos povos originários."],
    explicacao_aprofundada: ["Suas obras, como 'Histórias de Índio' e 'O Karaíba', trazem ensinamentos sobre respeito à natureza, amizade e a importância das tradições indígenas."],
    curiosidade: ["Daniel é da etnia Munduruku, tem doutorado em Educação e escreveu mais de 50 livros infantis 📚"],
    interacao: ["Que animal da floresta você acha que tem a história mais interessante?"],
    atividade: ["Desenhe o personagem 'Curupira' (o protetor da mata com os pés virados para trás) assustando um caçador que quer derrubar árvores 🌲👣"],
    final: ["As histórias indígenas ensinam que a natureza é nossa mãe e deve ser respeitada 💚"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1964",
    ano_falecimento: "",
    local_nascimento: "Bernardino de Campos, São Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu mais de 50 livros infantis e adultos.",
      "É doutor em Educação pela USP.",
      "Foi o primeiro indígena a ocupar a cadeira de imortal da Academia Brasileira de Letras (2023)."
    ],
    onde_nasceu_resposta: "Daniel Munduruku nasceu em Bernardino de Campos, São Paulo, em 1964.",
    ano_nascimento_resposta: "Daniel Munduruku nasceu no ano de 1964.",
    ano_falecimento_resposta: "Daniel Munduruku continua vivo e escrevendo até hoje."
  },
  ailton_krenak: {
    tema: "autores_brasileiros",
    subtema: "ailton_krenak",
    palavras_chave: ["ailton krenak", "ideias para adiar o fim do mundo", "a vida não é útil", "natureza", "krenak", "aylton krenak"],
    inicio: ["Ailton Krenak nos convida a sonhar com um planeta onde as pessoas cuidam dos rios como cuidam de parentes 🌊🤝"],
    explicacao_curta: ["Ailton Krenak é líder indígena, escritor e ativista, conhecido por seus livros que defendem a natureza e a vida."],
    explicacao_aprofundada: ["Em 'Ideias para Adiar o Fim do Mundo' e 'A Vida Não É Útil', ele critica a destruição ambiental e propõe uma nova relação com a Terra."],
    curiosidade: ["Ailton ficou famoso quando discursou na Assembleia Constituinte de 1988 pintado de preto, protestando contra a invasão das terras indígenas 🖤"],
    interacao: ["O que você faria para 'adiar o fim do mundo' na sua casa?"],
    atividade: ["Desenhe o planeta Terra sendo abraçado por muitas mãos de cores diferentes – cada mão representa uma pessoa cuidando do meio ambiente 🌍🤲"],
    final: ["Cuidar da natureza é um ato de amor pela vida de todos os seres 🐝🌻"],
    emocao: "esperança",
    nivel: "leve",
    ano_nascimento: "1953",
    ano_falecimento: "",
    local_nascimento: "Itabirinha, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Ideias para Adiar o Fim do Mundo' e 'A Vida Não É Útil'.",
      "É liderança indígena do povo Krenak.",
      "Recebeu o Prêmio Juca Pato de Intelectual do Ano."
    ],
    onde_nasceu_resposta: "Ailton Krenak nasceu em Itabirinha, Minas Gerais, em 1953.",
    ano_nascimento_resposta: "Ailton Krenak nasceu no ano de 1953.",
    ano_falecimento_resposta: "Ailton Krenak continua vivo e escrevendo até hoje."
  },
  olivio_jekupe: {
    tema: "autores_brasileiros",
    subtema: "olivio_jekupe",
    palavras_chave: ["olívio jekupé", "olivio jekupe", "xerekó arandu", "as queixadas", "guarani", "jekupe"],
    inicio: ["Olívio Jekupé conta histórias do povo guarani cheias de bravura, sabedoria e respeito pela natureza 🛡️🌙"],
    explicacao_curta: ["Olívio Jekupé é escritor e ativista guarani, autor de livros que preservam a tradição oral de seu povo."],
    explicacao_aprofundada: ["Suas obras, como 'Xerekó Arandu' e 'As Queixadas', trazem ensinamentos sobre a vida em comunidade, os rituais e a conexão com os animais da floresta."],
    curiosidade: ["Olívio é professor e usa a literatura para fortalecer a identidade indígena entre os jovens 📖"],
    interacao: ["Que valores (como respeito, união, bravura) você acha que são mais importantes em uma comunidade?"],
    atividade: ["Desenhe um círculo de conversa ao redor de uma fogueira, com várias pessoas ouvindo um pajé que conta histórias 🔥👂"],
    final: ["As histórias de luta dos povos indígenas nos ensinam a nunca desistir de nossas raíces 🌱"],
    emocao: "bravura",
    nivel: "leve",
    ano_nascimento: "1969",
    ano_falecimento: "",
    local_nascimento: "São Paulo, São Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Xerekó Arandu' e 'As Queixadas'.",
      "É professor e ativista do povo Guarani.",
      "Preserva a tradição oral indígena através da literatura."
    ],
    onde_nasceu_resposta: "Olívio Jekupé nasceu em São Paulo, em 1969.",
    ano_nascimento_resposta: "Olívio Jekupé nasceu no ano de 1969.",
    ano_falecimento_resposta: "Olívio Jekupé continua vivo e escrevendo até hoje."
  },
  davi_kopenawa: {
    tema: "autores_brasileiros",
    subtema: "davi_kopenawa",
    palavras_chave: ["davi kopenawa", "a queda do céu", "yanomami", "xamã", "kopenawa", "queda do ceu"],
    inicio: ["Davi Kopenawa é um xamã yanomami que sonhou com a queda do céu e nos alerta: a floresta está em perigo 🌳⚡"],
    explicacao_curta: ["Davi Kopenawa é líder e xamã yanomami, autor de um livro que revela os ensinamentos de seu povo e os perigos da destruição da Amazônia."],
    explicacao_aprofundada: ["'A Queda do Céu' é um relato de sua vida, dos rituais xamânicos e da devastação causada pelo garimpo, escrito em parceria com o antropólogo Bruce Albert."],
    curiosidade: ["Davi foi uma das lideranças indígenas mais importantes do mundo, recebendo prêmios e discursando na ONU 🕊️"],
    interacao: ["O que você faria se visse uma grande máquina destruindo a floresta perto da sua casa?"],
    atividade: ["Desenhe um xamã yanomami com cocar de penas e um pó mágico (soprado para curar) em uma mão; na outra, desenhe uma folha em chamas como alerta 🔥"],
    final: ["A voz dos xamãs nos lembra que o céu pode cair se não cuidarmos da terra 🌎"],
    emocao: "urgência",
    nivel: "leve",
    ano_nascimento: "1955",
    ano_falecimento: "",
    local_nascimento: "Roraima, Brasil",
    o_que_ele_fez: [
      "Escreveu 'A Queda do Céu' em parceria com Bruce Albert.",
      "É liderança e xamã do povo Yanomami.",
      "Recebeu prêmios internacionais por sua luta em defesa da Amazônia."
    ],
    onde_nasceu_resposta: "Davi Kopenawa nasceu em Roraima, em 1955.",
    ano_nascimento_resposta: "Davi Kopenawa nasceu no ano de 1955.",
    ano_falecimento_resposta: "Davi Kopenawa continua vivo e lutando até hoje."
  },
  kaka_wera_jeicupe: {
    tema: "autores_brasileiros",
    subtema: "kaka_wera_jeicupe",
    palavras_chave: ["kaká werá jecupé", "kaka wera jecupe", "todas as vezes que dissemos adeus", "tupã tenondé", "guarani", "kaka wera", "jeicupe"],
    inicio: ["Kaká Werá Jecupé escreve sobre encontros, despedidas e a força das raízes indígenas com uma prosa poética e sensível 🧡"],
    explicacao_curta: ["Kaká Werá é escritor, músico e palestrante guarani, autor de obras que misturam memória, identidade e espiritualidade."],
    explicacao_aprofundada: ["Em 'Todas as Vezes que Dissemos Adeus' e 'Tupã Tenondé', ele aborda a busca pela identidade, os ensinamentos ancestrais e a criação do mundo segundo a cosmovisão guarani."],
    curiosidade: ["Kaká Werá também é músico e viaja o mundo para falar sobre cultura indígena e sustentabilidade 🎸"],
    interacao: ["De quem você já se despediu e até hoje sente saudade?"],
    atividade: ["Desenhe uma mala de viagem com vários corações dentro, simbolizando as pessoas e lugares que você carrega no coração mesmo depois de partir 🧳❤️"],
    final: ["Cada despedida nos prepara para novos encontros – e as raízes nunca se perdem 🌱"],
    emocao: "melancolia",
    nivel: "leve",
    ano_nascimento: "1964",
    ano_falecimento: "",
    local_nascimento: "São Paulo, São Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Todas as Vezes que Dissemos Adeus' e 'Tupã Tenondé'.",
      "É músico, palestrante e ativista do povo Guarani.",
      "Viaja o mundo difundindo a cultura indígena e a sustentabilidade."
    ],
    onde_nasceu_resposta: "Kaká Werá Jecupé nasceu em São Paulo, em 1964.",
    ano_nascimento_resposta: "Kaká Werá Jecupé nasceu no ano de 1964.",
    ano_falecimento_resposta: "Kaká Werá Jecupé continua vivo e escrevendo até hoje."
  },
  vik_muniz: {
    tema: "biografias",
    subtema: "vik_muniz",
    palavras_chave: ["vik muniz", "vic muniz", "muniz"],
    inicio: ["Vik Muniz é um artista brasileiro contemporâneo extremamente criativo! ♻️🎨"],
    explicacao_curta: ["Vik Muniz nasceu em 20 de dezembro de 1961, em São Paulo, e cria imagens usando materiais super diferentes como chocolate, brinquedos, sucata e até lixo reciclável!"],
    explicacao_aprofundada: ["Vik Muniz monta suas esculturas e desenhos gigantes usando esses materiais do cotidiano, e depois fotografa o resultado final para mostrar ao público. Ele nos prova que com imaginação tudo pode virar arte."],
    curiosidade: ["Ele fez obras incríveis usando toneladas de materiais recicláveis de um dos maiores lixões do mundo, ajudando os catadores de lixo de lá! 🌍♻️"],
    interacao: ["Se você pudesse desenhar com doces ou chocolate, o que você pintaria primeiro?"],
    atividade: ["Que tal colagem? Pegue pedacinhos de papéis velhos ou folhas secas do quintal para criar o desenho de um animal mágico! ✂️🍂"],
    final: ["Podemos fazer arte usando a imaginação e materiais simples! ♻️"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1961",
    ano_falecimento: "",
    local_nascimento: "São Paulo, São Paulo, Brasil",
    o_que_ele_fez: [
      "Cria imagens fantásticas usando materiais inovadores como açúcar, chocolate e lixo reciclável.",
      "Fotografa suas criações em grande formato, vendendo suas obras no mundo todo.",
      "Liderou projetos sociais usando a arte para apoiar catadores de materiais recicláveis."
    ],
    onde_nasceu_resposta: "Vik Muniz nasceu em São Paulo, em 1961.",
    ano_nascimento_resposta: "Vik Muniz nasceu no ano de 1961.",
    ano_falecimento_resposta: "Vik Muniz continua vivo e criando suas incríveis obras até hoje."
  },
  arthur_bispo_do_rosario: {
    tema: "biografias",
    subtema: "arthur_bispo_do_rosario",
    palavras_chave: ["arthur bispo do rosário", "bispo do rosario", "arthur bispo", "bispo do rosário"],
    inicio: ["Arthur Bispo do Rosário foi um artista brasileiro que bordou seus sonhos e transformou objetos comuns do dia a dia em pura poesia! 🧵✨"],
    explicacao_curta: ["Arthur Bispo do Rosário nasceu em 16 de março de 1909, em Japaratuba, Sergipe, e ficou famoso por criar obras de arte com tecidos, fios, bordados e objetos descartados."],
    explicacao_aprofundada: ["Ele viveu grande parte de sua vida em um hospital e passava os dias desfiando o azul de uniformes velhos para bordar mantos majestosos, estandartes e coleções de objetos do cotidiano. Ele organizava garrafas, sapatos e botões como se fossem um lindo acervo de memórias do mundo."],
    curiosidade: ["Sua obra mais famosa é o 'Manto da Apresentação', um casaco inteiro bordado por dentro e por fora com nomes e palavras misteriosas! 🧵👘"],
    interacao: ["Você já tentou costurar ou bordar algum desenho com linha e agulha?"],
    atividade: ["Junte 3 objetos pequenos diferentes (como tampinhas, colheres ou chaves) e tente combiná-los em cima de uma mesa para formar um bonequinho divertido! 🔑🎨"],
    final: ["Esses artistas nos mostram que tudo ao nosso redor pode se transformar em arte! 🧶"],
    emocao: "sensibilidade",
    nivel: "leve",
    ano_nascimento: "1909",
    ano_falecimento: "1989",
    local_nascimento: "Japaratuba, Sergipe, Brasil",
    o_que_ele_fez: [
      "Criou uma coleção impressionante de mais de 800 peças de arte usando bordados e materiais do cotidiano.",
      "Bordou o famoso Manto da Apresentação desfiando tecidos de roupas velhas.",
      "Sua obra foi exposta em grandes bienais de arte, influenciando gerações de artistas brasileiros."
    ],
    onde_nasceu_resposta: "Arthur Bispo do Rosário nasceu em Japaratuba, Sergipe, em 1909.",
    ano_nascimento_resposta: "Arthur Bispo do Rosário nasceu no ano de 1909.",
    ano_falecimento_resposta: "Arthur Bispo do Rosário faleceu no ano de 1989."
  },
  heitor_dos_prazeres: {
    tema: "biografias",
    subtema: "heitor_dos_prazeres",
    palavras_chave: ["heitor dos prazeres", "heitor dos praseres"],
    inicio: ["Heitor dos Prazeres foi um grande pintor, compositor de samba e sambista de alma vibrante! 🎶🎨"],
    explicacao_curta: ["Heitor dos Prazeres nasceu em 23 de setembro de 1898, no Rio de Janeiro, e retratava com cores brilhantes a vida, a alegria e as rodas de samba de seu povo."],
    explicacao_aprofundada: ["Heitor foi um dos pioneiros do samba carioca e, na pintura, registrou com muita alegria as festas populares, os dançarinos de frevo, rodas de capoeira, as crianças brincando e o cotidiano das favelas do RJ. Suas obras transbordam música visual!"],
    curiosidade: ["Heitor era tão talentoso que ajudou a fundar algumas das primeiras escolas de samba do Rio de Janeiro e também compôs canções muito famosas! 🥁🎸"],
    interacao: ["Qual é o seu ritmo ou música favorita quando você está desenhando?"],
    atividade: ["Desenhe várias pessoas dançando juntas em roda, usando traços coloridos e vibrantes para mostrar a alegria delas! 🕺💃🎨"],
    final: ["Sua linda arte nos ensina que o desenho e a pintura podem contar histórias de vida e celebrar a alegria do povo! 🎶✨"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1966",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Foi um dos primeiros pintores modernos ingênuos (naïf) do Brasil, expondo na primeira Bienal de São Paulo.",
      "Atuou brilhantemente como compositor, instrumentista e sambista no Rio de Janeiro.",
      "Retratou o cotidiano das comunidades do Rio, as festas, o samba e a capoeira de forma única."
    ],
    onde_nasceu_resposta: "Heitor dos Prazeres nasceu no Rio de Janeiro, em 1898.",
    ano_nascimento_resposta: "Heitor dos Prazeres nasceu no ano de 1898.",
    ano_falecimento_resposta: "Heitor dos Prazeres faleceu no ano de 1966."
  },
  carybe: {
    tema: "biografias",
    subtema: "carybe",
    palavras_chave: ["carybé", "carybe", "hector julio", "hector julio paride bernabo"],
    inicio: ["Carybé foi um desenhista, pintor e escultor apaixonado pela mágica e pelas cores da cultura brasileira! 🎨🌊"],
    explicacao_curta: ["O verdadeiro nome de Carybé era Hector Julio Páride Bernabó. Ele nasceu na Argentina em 7 de fevereiro de 1911, e viveu grande parte de sua vida na Bahia, tornando-se uma figura fundamental da arte brasileira."],
    explicacao_aprofundada: ["Carybé ficou imensamente famoso por pintar o dia a dia da Bahia: as festas de rua, as rodas de capoeira, os pescadores saindo ao mar e as ricas tradições religiosas afro-brasileiras. Suas pinceladas pareciam capturar o vento e o gingado de cada movimento."],
    curiosidade: ["Ele ganhou esse apelido 'Carybé' quando era escoteiro no Rio de Janeiro, em referência a um peixinho amazônico bem valente! Ele gostou tanto que o adotou para a vida toda. Embora tenha nascido argentino, ele se naturalizou brasileiro de coração 🇧🇷"],
    interacao: ["Você já teve um apelido fofo ou divertido dado por amigos?"],
    atividade: ["Faça um desenho bem azul retratando os peixinhos e barcos navegando no mar da Bahia! ⛵🐟"],
    final: ["Carybé ensina a amar, conhecer e valorizar de verdade a cultura e história do nosso povo brasileiro! ✨"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1911",
    ano_falecimento: "1997",
    local_nascimento: "Lanús, Argentina (vivera na Bahia, Brasil)",
    o_que_ele_fez: [
      "Ilustrou livros de grandes escritores como Jorge Amado e Gabriel García Márquez.",
      "Pintou murais históricos enormes e representou com imensa beleza festas de capoeira, pescadores e cultos afro-brasileiras.",
      "Tornou-se cidadão brasileiro honorário, consagrando-se como grande ícone do modernismo na Bahia."
    ],
    onde_nasceu_resposta: "Carybé nasceu na Argentina, em 1911, mas viveu grande parte de sua vida na Bahia.",
    ano_nascimento_resposta: "Carybé nasceu no ano de 1911.",
    ano_falecimento_resposta: "Carybé faleceu no ano de 1997."
  }
};
