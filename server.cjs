var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// server.ts
var server_exports = {};
__export(server_exports, {
  buscarChicago: () => buscarChicago,
  buscarMetropolitan: () => buscarMetropolitan,
  buscarWikimedia: () => buscarWikimedia
});
module.exports = __toCommonJS(server_exports);
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");

// src/data/bibliotecaCultural.ts
var bibliotecaCultural = {
  // --- BASE ORIGINAL RE-Mapeada & Unificada ---
  portinari: {
    palavras_chave: ["portinari", "candido portinari", "c\xE2ndido portinari", "guerra e paz", "meninos brincando", "rodopiando"],
    inicio: [
      "\u{1F3A8} C\xE2ndido Portinari foi um dos mais importantes artistas do Brasil! Ele nasceu em 1903, na cidade de Brodowski, S\xE3o Paulo."
    ],
    explicacao_curta: [
      "Filho de imigrantes italianos que trabalhavam na lavoura de caf\xE9, Portinari cresceu observando a vida simples do campo, tema super presente em suas pinturas."
    ],
    explicacao_aprofundada: [
      "Ele fez parte do Modernismo Brasileiro, valorizando a nossa cultura. Suas obras de arte mostram trabalhadores, brincadeiras infantis (como soltar pipa e futebol), festas populares e tamb\xE9m problemas sociais como a migra\xE7\xE3o."
    ],
    curiosidade: [
      "Portinari produziu mais de 5 mil obras ao longo da vida e seu trabalho \xE9 reconhecido em todo o planeta!"
    ],
    interacao: [
      "Qual das obras famosas dele (como O Lavrador de Caf\xE9 ou Meninos Soltando Pipas) voc\xEA prefere?"
    ],
    atividade: [
      "Que tal fazer um desenho bem bonito mostrando a sua brincadeira favorita, inspirado no Candinho? \u{1FA81}\u{1F3A8}"
    ],
    final: [
      "Seu trabalho continua representando lindamente a hist\xF3ria, a cultura e o povo brasileiro! \u{1F1E7}\u{1F1F7}"
    ],
    ano_nascimento: "1903",
    ano_falecimento: "1962",
    categoria: "Modernismo",
    resposta_direta: `\u{1F3A8} **C\xE2ndido Portinari**

C\xE2ndido Portinari foi um dos mais importantes artistas do Brasil. Ele nasceu em 1903, na cidade de Brodowski, no estado de S\xE3o Paulo. Filho de imigrantes italianos que trabalhavam na lavoura de caf\xE9, Portinari cresceu observando a vida simples do campo, tema que apareceria muitas vezes em suas pinturas.

Desde crian\xE7a gostava de desenhar. Aos 15 anos, mudou-se para a cidade do Rio de Janeiro para estudar na Escola Nacional de Belas Artes. Mais tarde, viajou para a Fran\xE7a e conheceu diferentes estilos art\xEDsticos.

Portinari fez parte do Modernismo Brasileiro, movimento que buscava valorizar a cultura, as pessoas e as paisagens do Brasil. Suas obras mostram trabalhadores, crian\xE7as brincando, festas populares e tamb\xE9m problemas sociais, como a pobreza e a migra\xE7\xE3o.

\u{1F5BC}\uFE0F **Obras famosas**
\u2022 O Lavrador de Caf\xE9 (1934)
\u2022 Caf\xE9 (1935)
\u2022 Meninos Soltando Pipas
\u2022 Futebol
\u2022 Retirantes (1944)
\u2022 Guerra e Paz, criados para a sede da Organiza\xE7\xE3o das Na\xE7\xF5es Unidas.

\u{1F31F} **Curiosidade**
Portinari produziu mais de 5 mil obras ao longo da vida. Seu trabalho \xE9 reconhecido no mundo inteiro e continua sendo uma importante representa\xE7\xE3o da hist\xF3ria, da cultura e do povo brasileiro.

**Resumo**: C\xE2ndido Portinari foi um pintor modernista brasileiro que retratou a vida do povo, as brincadeiras infantis e as quest\xF5es sociais do Brasil, tornando-se um dos maiores artistas da hist\xF3ria do pa\xEDs. \u{1F1E7}\u{1F1F7}\u{1F3A8}`
  },
  tarsila: {
    palavras_chave: ["tarsila", "amaral", "abaporu", "operarios", "oper\xE1rios", "antropofagia"],
    inicio: [
      "Tarsila do Amaral \xE9 uma das maiores hero\xEDnas da arte brasileira!"
    ],
    explicacao_curta: [
      "Ela criou o impressionante quadro 'Abaporu' (que significa 'homem que come gente' em tupi-guarani), que deu for\xE7a ao movimento Modernista. Ela adorava pintar elementos da nossa terra usando as cores rosa, azul-turquesa e amarelo!"
    ],
    ano_nascimento: "1886",
    ano_falecimento: "1973",
    categoria: "Modernismo"
  },
  di_cavalcanti: {
    palavras_chave: ["di cavalcanti", "dicavalcanti", "emiliano augusto cavalcanti", "cavalcanti", "quem foi di cavalcanti"],
    inicio: [
      "\u{1F3A8} Di Cavalcanti foi um dos artistas mais importantes do Brasil! Ele gostava de pintar pessoas, festas, m\xFAsicas, trabalhadores e cenas do dia a dia do povo brasileiro."
    ],
    explicacao_curta: [
      "Suas obras s\xE3o conhecidas pelas cores vivas, pelas formas marcantes e por mostrarem a cultura e a alegria do Brasil. Al\xE9m de pintor, tamb\xE9m foi desenhista, ilustrador e caricaturista."
    ],
    ano_nascimento: "1897",
    ano_falecimento: "1976",
    categoria: "Modernismo",
    resposta_direta: `\u{1F3A8} **Quem foi Di Cavalcanti?**

Di Cavalcanti foi um dos artistas mais importantes do Brasil. Ele gostava de pintar pessoas, festas, m\xFAsicas, trabalhadores e cenas do dia a dia do povo brasileiro.

Suas obras s\xE3o conhecidas pelas cores vivas, pelas formas marcantes e por mostrarem a cultura e a alegria do Brasil.

Al\xE9m de pintor, tamb\xE9m foi desenhista, ilustrador e caricaturista.

\u26A1 **A Semana de Arte Moderna**

Di Cavalcanti ajudou a organizar a Semana de Arte Moderna de 1922, um evento que mudou a hist\xF3ria da arte brasileira. Os artistas queriam criar uma arte com mais liberdade e inspirada na cultura do Brasil.

\u{1F3A8} **Caracter\xEDsticas de suas obras**
\u2022 \u{1F3A8} Cores fortes e alegres.
\u2022 \u{1F469} Muitas figuras humanas, principalmente mulheres.
\u2022 \u{1F3B6} Cenas de samba, m\xFAsica e festas populares.
\u2022 \u{1F1E7}\u{1F1F7} Valoriza\xE7\xE3o da cultura brasileira.
\u2022 \u{1F60A} Retratos do cotidiano das pessoas.

\u{1F5BC}\uFE0F **Algumas obras famosas**
\u2022 Samba (1925)
\u2022 Cinco Mo\xE7as de Guaratinguet\xE1 (1930)
\u2022 Mulheres Protestando (1941)
\u2022 Mulatas
\u2022 Pescadores

\u{1F4A1} **Curiosidade**
Di Cavalcanti acreditava que a arte brasileira deveria mostrar as pessoas, os costumes e a beleza do nosso pa\xEDs. Por isso, muitas de suas pinturas retratam festas populares, m\xFAsicos, trabalhadores e cenas do cotidiano.

\u{1F3C6} **Desafio do Candinho**
Observe uma pintura de Di Cavalcanti e responda:
1. Quais cores aparecem mais?
2. O que as pessoas est\xE3o fazendo?
3. Como voc\xEA imagina que elas est\xE3o se sentindo?
4. Que sons voc\xEA acha que existiriam nessa cena?

\u{1F31F} **O Candinho diz:**
"Di Cavalcanti pintava o Brasil com cores, m\xFAsica e alegria. Que cena do seu dia voc\xEA gostaria de transformar em uma pintura?"

\u{1F4CB} **Ficha T\xE9cnica: Di Cavalcanti**
\u2022 **Nome completo:** Emiliano Augusto Cavalcanti de Albuquerque e Melo
\u2022 **Nascimento:** 6 de setembro de 1897, no Rio de Janeiro (RJ), Brasil
\u2022 **Falecimento:** 26 de outubro de 1976, no Rio de Janeiro (RJ), Brasil`
  },
  silvana_mendes: {
    palavras_chave: ["silvana mendes", "silvia mendes", "silvana", "silvia"],
    inicio: [
      "Silvana Mendes (nascida em 1980, no Maranh\xE3o) \xE9 uma maravilhosa artista visual, fot\xF3grafa e pesquisadora brasileira! Viva."
    ],
    explicacao_curta: [
      "Ela trabalha com fotografia, colagem e pintura, explorando de forma po\xE9tica e sens\xEDvel a ancestralidade, a mem\xF3ria e a identidade afro-brasileira!"
    ],
    ano_nascimento: "1980",
    ano_falecimento: "Viva",
    categoria: "Arte Contempor\xE2nea"
  },
  arjan_martins: {
    palavras_chave: ["arjan martins", "arjan"],
    inicio: [
      "Arjan Martins (nascido em 1960, em Mesquita, RJ) \xE9 um important\xEDssimo pintor e escultor brasileiro vivo!"
    ],
    explicacao_curta: [
      "Sua bel\xEDssima obra aborda temas profundos como a di\xE1spora africana, migra\xE7\xF5es coloniais e a nossa heran\xE7a hist\xF3rica, com trabalhos expostos em grandes museus pelo mundo inteiro."
    ],
    ano_nascimento: "1960",
    ano_falecimento: "Vivo",
    categoria: "Arte Contempor\xE2nea"
  },
  rosana_paulino: {
    palavras_chave: ["rosana paulino", "rosana"],
    inicio: [
      "Rosana Paulino (nascida em 1967, em S\xE3o Paulo) \xE9 uma influente artista visual, educadora e curadora brasileira viva!"
    ],
    explicacao_curta: [
      "Suas ricas produ\xE7\xF5es art\xEDsticas, que misturam gravura, desenho e costura, trazem grandes discuss\xF5es sobre a mem\xF3ria social, identidade, o racismo e a condi\xE7\xE3o da mulher negra no Brasil."
    ],
    ano_nascimento: "1967",
    ano_falecimento: "Viva",
    categoria: "Arte Contempor\xE2nea"
  },
  eduardo_kobra: {
    palavras_chave: ["eduardo kobra", "kobra"],
    inicio: [
      "Eduardo Kobra (nascido em 1975, em S\xE3o Paulo) \xE9 um lend\xE1rio muralista e artista urbano brasileiro!"
    ],
    explicacao_curta: [
      "Seus gigantescos murais coloridos, que misturam xadrez de cores e realismo, tomam as fachadas de pr\xE9dios de dezenas de pa\xEDses para retratar personalidades hist\xF3ricas e inspirar harmonia, paz e amor!"
    ],
    ano_nascimento: "1975",
    ano_falecimento: "Vivo",
    categoria: "Muralismo"
  },
  os_gemeos: {
    palavras_chave: ["os gemeos", "os g\xEAmeos", "gemeos", "g\xEAmeos"],
    inicio: [
      "Os G\xEAmeos s\xE3o os incr\xEDveis irm\xE3os parceiros Ot\xE1vio e Gustavo Pandolfo, nascidos em 1974 em S\xE3o Paulo!"
    ],
    explicacao_curta: [
      "Eles conquistaram o mundo com seus murais urbanos e grafites m\xE1gicos povoados por caricatos personagens amarelos que contam hist\xF3rias do folclore e da cultura de rua do Brasil."
    ],
    ano_nascimento: "1974",
    ano_falecimento: "Vivos",
    categoria: "Grafite / Street Art"
  },
  madalena_reinbolt: {
    palavras_chave: ["madalena", "madalena dos santos reinbolt", "reinbolt", "madalena reinbolt"],
    inicio: [
      "\u{1F3A8} Madalena dos Santos Reinbolt (1919-1977) foi uma fant\xE1stica artista brasileira autodidata de imenso talento!"
    ],
    explicacao_curta: [
      "Nascida em Vit\xF3ria da Conquista, ela cresceu no interior da Bahia em contato com o bordado e a tecelagem. Ficou especialmente conhecida por seus expressivos 'quadros de l\xE3' \u2013 tape\xE7arias coloridas maravilhosas!"
    ],
    explicacao_aprofundada: [
      "Na vida adulta, trabalhou como cozinheira e empregada dom\xE9stica em Salvador, Rio de Janeiro e Petr\xF3polis. Mesmo enfrentando rotinas dif\xEDceis, continuou criando arte para expressar as lembran\xE7as de sua inf\xE2ncia, retratando paisagens rurais, animais, festas populares e o cotidiano do povo brasileiro. Suas tape\xE7arias de l\xE3 eram feitas com centenas de fios e agulhas, criando texturas e relevos \xFAnicos."
    ],
    curiosidade: [
      "Madalena usava as agulhas de forma t\xE3o livre e espont\xE2nea que parecia 'pintar' usando fios de l\xE3 em vez de tinta!"
    ],
    interacao: [
      "Voc\xEA j\xE1 experimentou fazer alguma arte colando linhas, barbantes ou pedacinhos de l\xE3 colorida?"
    ],
    atividade: [
      "Que tal fazer um desenho bem alegre de uma cena da natureza usando linhas bem grossas e coloridas, inspirando-se na arte de Madalena? \u{1F9F6}\u{1F3A8}"
    ],
    final: [
      "Sua obra \xE9 hoje celebrada nacional e internacionalmente como um grande tesouro da nossa arte popular! \u{1F1E7}\u{1F1F7}\u2728"
    ],
    ano_nascimento: "1919",
    ano_falecimento: "1977",
    categoria: "Arte Popular / Tape\xE7aria",
    resposta_direta: `\u{1F3A8} **Madalena dos Santos Reinbolt**

Madalena dos Santos Reinbolt (1919-1977) foi uma artista brasileira autodidata, nascida em Vit\xF3ria da Conquista, na Bahia.

Filha de agricultores, ela cresceu no interior do estado e desde crian\xE7a teve contato com atividades artesanais tradicionais, como o bordado, a tecelagem e a modelagem em argila. Apesar de n\xE3o ter tido a oportunidade de frequentar a escola, desenvolveu de forma espont\xE2nea um imenso talento para criar formas e cores.

Na vida adulta, trabalhou como empregada dom\xE9stica e cozinheira em Salvador, no Rio de Janeiro e em Petr\xF3polis. Enfrentando uma rotina cansativa e cheia de desafios, ela encontrava na arte uma maneira de expressar sua imagina\xE7\xE3o e sentimentos.

\u{1F5BC}\uFE0F **Seus Impressionantes Quadros de L\xE3**
Inicialmente, Madalena pintava com tinta a \xF3leo sobre tela, retratando paisagens, animais e festas populares. No entanto, ela se consagrou com os seus famosos **"quadros de l\xE3"**: tape\xE7arias coloridas e tridimensionais feitas com centenas de linhas e agulhas de tape\xE7aria. Madalena usava a agulha de forma livre, quase como se estivesse pincelando com fios de l\xE3, criando texturas e relevos incr\xEDveis.

\u{1F31F} **Temas e Legado**
Suas obras retratavam principalmente as lembran\xE7as da inf\xE2ncia rural na Bahia:
\u2022 Festas populares e folguedos tradicionais
\u2022 Paisagens rurais com plantas e animais
\u2022 Cenas do cotidiano do povo brasileiro

Hoje, sua obra \xE9 reconhecida internacionalmente e considerada um dos maiores tesouros da arte popular e do expressionismo t\xEAxtil no Brasil.

**Resumo**: Madalena dos Santos Reinbolt foi uma pioneira da arte t\xEAxtil brasileira, conhecida por criar din\xE2micos e expressivos "quadros de l\xE3" que retratavam a cultura popular e a vida no campo com cores vibrantes e texturas \xFAnicas. \u{1F1E7}\u{1F1F7}\u{1F9F6}`
  },
  romero_britto: {
    palavras_chave: ["romero britto", "romero brito", "britto"],
    inicio: [
      "Romero Britto (nascido em 1963, em Recife, PE) \xE9 um celeb\xE9rrimo pintor e escultor brasileiro vivo!"
    ],
    explicacao_curta: [
      "Suas cria\xE7\xF5es repletas de cores brilhantes, tra\xE7os pretos marcantes e padr\xF5es geom\xE9tricos misturam cubismo e pop art para retratar sentimentos de pura felicidade, amor e esperan\xE7a!"
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
      "A cultura afro-brasileira faz parte da hist\xF3ria e da identidade do Brasil \u{1F30D}",
      "Muitas tradi\xE7\xF5es brasileiras t\xEAm ra\xEDzes africanas \u2728"
    ],
    explicacao_curta: [
      "A cultura afro-brasileira vem das tradi\xE7\xF5es africanas trazidas para o Brasil e que se misturaram com outras influ\xEAncias daqui."
    ],
    explicacao_aprofundada: [
      "Ela influencia m\xFAsicas, dan\xE7as, comidas, festas, artes e muitas formas de viver presentes no cotidiano brasileiro."
    ],
    curiosidade: [
      "Palavras que usamos todo dia (como ca\xE7ula, moleque, banguela), ritmos e comidas do Brasil possuem influ\xEAncias africanas marcantes \u{1F33F}"
    ],
    interacao: [
      "Voc\xEA conhece alguma m\xFAsica ou dan\xE7a afro-brasileira?",
      "O que voc\xEA acha mais interessante na cultura brasileira?"
    ],
    atividade: [
      "Desenhe elementos culturais importantes do Brasil \u{1F3A8}"
    ],
    final: [
      "A diversidade cultural deixa o Brasil mais rico e bonito \u{1F308}"
    ],
    emocao: "respeito",
    nivel: "leve"
  },
  arte_afro_brasileira: {
    tema: "cultura_afro_brasileira",
    subtema: "arte_afro_brasileira",
    palavras_chave: ["arte afro", "arte afro brasileira", "arte afro-brasileira"],
    inicio: [
      "A arte afro-brasileira \xE9 cheia de for\xE7a, ritmo e express\xE3o \u{1F3A8}"
    ],
    explicacao_curta: [
      "Ela aparece em m\xFAsicas, pinturas, dan\xE7as, esculturas, artesanatos e celebra\xE7\xF5es populares."
    ],
    explicacao_aprofundada: [
      "A arte afro-brasileira expressa hist\xF3ria, ancestralidade, resist\xEAncia, beleza e identidade cultural do povo negro no Brasil."
    ],
    curiosidade: [
      "Muitos artistas brasileiros usam s\xEDmbolos, texturas e cores fortes inspirados em tradi\xE7\xF5es africanas \u2728"
    ],
    interacao: [
      "Que tipo de arte voc\xEA mais gosta de criar?"
    ],
    atividade: [
      "Crie padr\xF5es e formas geom\xE9tricas inspirados em ritmos e movimentos \u{1F3AD}"
    ],
    final: [
      "A arte ajuda culturas e hist\xF3rias a continuarem vivas de gera\xE7\xE3o em gera\xE7\xE3o \u{1F33F}"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  afro_musica: {
    tema: "cultura_afro_brasileira",
    subtema: "musica",
    palavras_chave: ["musica afro", "m\xFAsica afro", "samba", "maracatu", "ritmo africano", "afox\xE9", "berimbau"],
    inicio: [
      "A m\xFAsica afro-brasileira \xE9 cheia de ritmo, batuque e energia \u{1F941}"
    ],
    explicacao_curta: [
      "Ela usa instrumentos como tambores, berimbaus, chocalhos e cantos alegres e contagiantes."
    ],
    explicacao_aprofundada: [
      "Muitos estilos musicais brasileiros amados, como o samba, o maracatu, o ax\xE9 e a bossa nova, possuem profundas influ\xEAncias africanas."
    ],
    curiosidade: [
      "Os tambores t\xEAm papel sagrado e importante em muitas manifesta\xE7\xF5es e festividades africanas e afro-brasileiras \u{1F3B6}"
    ],
    interacao: [
      "Voc\xEA consegue criar um ritmo legal batendo palmas?",
      "Qual m\xFAsica brasileira deixa voc\xEA mais animado?"
    ],
    atividade: [
      "Crie um instrumento de percuss\xE3o (como um chocalho ou tamborzinho) usando materiais recicl\xE1veis \u{1FA98}"
    ],
    final: [
      "A m\xFAsica conecta pessoas, hist\xF3rias e emo\xE7\xF5es de um jeito m\xE1gico \u{1F308}"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  afro_danca: {
    tema: "cultura_afro_brasileira",
    subtema: "danca",
    palavras_chave: ["danca afro", "dan\xE7a afro", "dancas afro brasileiras", "dan\xE7as afro-brasileiras", "capoeira", "jongo"],
    inicio: [
      "As dan\xE7as afro-brasileiras possuem movimentos expressivos e cheios de energia \u{1F483}"
    ],
    explicacao_curta: [
      "Essas dan\xE7as celebram a nossa cultura e contam hist\xF3rias atrav\xE9s do ritmo corporal e do som dos tambores."
    ],
    explicacao_aprofundada: [
      "Os movimentos corporais representam momentos da vida cotidiana, celebra\xE7\xF5es, lutas por liberdade e liga\xE7\xE3o com os sons da natureza."
    ],
    curiosidade: [
      "A capoeira \xE9 uma mistura fascinante de dan\xE7a, m\xFAsica e luta que foi criada como forma de resist\xEAncia e liberdade! \u{1F941}"
    ],
    interacao: [
      "Voc\xEA gosta de dan\xE7ar ou de se mexer quando escuta uma m\xFAsica alegre?"
    ],
    atividade: [
      "Crie movimentos de dan\xE7a alegres inspirados nos sons do vento ou de animais \u{1F33F}"
    ],
    final: [
      "A dan\xE7a transforma nossos sentimentos em belos movimentos sincronizados \u2728"
    ],
    emocao: "energia",
    nivel: "leve"
  },
  religiosidade: {
    tema: "cultura_afro_brasileira",
    subtema: "religiosidade",
    palavras_chave: ["religiao afro", "religi\xE3o afro", "orixa", "orix\xE1", "candomble", "candombl\xE9", "umbanda", "orix\xE1s"],
    inicio: [
      "As religi\xF5es afro-brasileiras fazem parte da diversidade e riqueza cultural do Brasil \u{1F33F}"
    ],
    explicacao_curta: [
      "Elas valorizam profundamente o respeito \xE0 natureza, \xE0 ancestralidade e \xE0 harmonia espiritual."
    ],
    explicacao_aprofundada: [
      "Muitos ensinamentos, cantos e rituais dessas religi\xF5es (como o Candombl\xE9 e a Umbanda) prestam homenagem \xE0s for\xE7as da natureza."
    ],
    curiosidade: [
      "Os orix\xE1s s\xE3o divindades que representam e cuidam de elementos naturais: Iemanj\xE1 cuida dos mares, Ox\xF3ssi das florestas e Ians\xE3 dos ventos e tempestades! \u{1F30A}"
    ],
    interacao: [
      "Por que voc\xEA acha importante respeitarmos diferentes formas de pensar, crer e expressar a f\xE9?"
    ],
    atividade: [
      "Desenhe elementos da natureza (rios, \xE1rvores, mares) que transmitem paz e acolhimento para voc\xEA \u{1F3A8}"
    ],
    final: [
      "O respeito \xE0 diversidade nos ajuda a construir uma sociedade muito mais justa e unida \u{1F30E}"
    ],
    emocao: "respeito",
    nivel: "leve"
  },
  resistencia: {
    tema: "cultura_afro_brasileira",
    subtema: "resistencia",
    palavras_chave: ["resistencia negra", "luta afro brasileira", "quilombos", "quilombola", "zumbi dos palmares", "dandara"],
    inicio: [
      "A cultura afro-brasileira tamb\xE9m representa uma hist\xF3ria linda de resist\xEAncia e for\xE7a \u270A"
    ],
    explicacao_curta: [
      "Ela nos ensina como o povo negro manteve vivas as suas tradi\xE7\xF5es e saberes mesmo diante de muitos desafios."
    ],
    explicacao_aprofundada: [
      "Os saberes tradicionais, as festas e a arte foram formas essenciais de resistir, criar uni\xE3o e lutar pela igualdade de direitos e de respeito."
    ],
    curiosidade: [
      "Os quilombos eram locais livres onde as pessoas que escapavam da escravid\xE3o constru\xEDam comunidades cheias de solidariedade, agricultura e preserva\xE7\xE3o cultural! \u{1F33F}"
    ],
    interacao: [
      "Por que \xE9 super importante conhecermos a hist\xF3ria real e a cultura de todos os povos?"
    ],
    atividade: [
      "Crie um lindo desenho ou colagem que passe uma mensagem de amizade e igualdade entre todas as pessoas \u{1F3A8}"
    ],
    final: [
      "Aprender com o passado nos ensina a valorizar e proteger o respeito entre todas as culturas \u{1F308}"
    ],
    emocao: "consciencia",
    nivel: "leve"
  },
  arte_africana: {
    tema: "cultura_afro_brasileira",
    subtema: "arte_africana",
    palavras_chave: [
      "arte africana",
      "arte da \xE1frica",
      "cultura africana"
    ],
    inicio: [
      "A arte africana \xE9 incrivelmente rica, diversa e cheia de vida! \u{1F30D}"
    ],
    explicacao_curta: [
      "Ela se expressa por meio de m\xE1scaras m\xEDsticas, esculturas expressivas em madeira, pinturas de cores quentes e tecidos com padronagens repletas de hist\xF3rias."
    ],
    explicacao_aprofundada: [
      "Para os povos africanos, a arte n\xE3o serve apenas para olhar; ela est\xE1 ligada ao dia a dia, a rituais sagrados e \xE0 celebra\xE7\xE3o dos seus ancestrais. Muitas obras imitam elementos brilhantes da natureza e representam esp\xEDritos protetores, transmitindo ensinamentos do passado."
    ],
    curiosidade: [
      "A arte africana \xE9 t\xE3o expressiva e poderosa que influenciou grandes pintores do mundo inteiro, como Pablo Picasso, na cria\xE7\xE3o da arte moderna! \u{1F3A8}"
    ],
    interacao: [
      "Voc\xEA sabia que as cores e padr\xF5es dos tecidos africanos podem contar de qual fam\xEDlia ou aldeia a pessoa faz parte?"
    ],
    atividade: [
      "Que tal desenhar uma m\xE1scara com tra\xE7os bem expressivos, usando c\xEDrculos, tri\xE2ngulos e suas cores favoritas? \u{1F58D}\uFE0F\u{1F3AD}"
    ],
    final: [
      "A ess\xEAncia da arte africana espalha a sabedoria dos ancestrais de gera\xE7\xE3o em gera\xE7\xE3o! \u{1F31F}"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  // --- 2. CULTURA INDÍGENA ---
  indigena_o_que_e: {
    tema: "cultura_indigena",
    subtema: "o_que_e",
    palavras_chave: ["cultura indigena", "cultura ind\xEDgena", "povos originarios", "povos origin\xE1rios", "indios brasil", "ind\xEDgena brasil"],
    inicio: ["Voc\xEA j\xE1 ouviu falar dos povos origin\xE1rios do Brasil? \u{1F33F}", "A cultura ind\xEDgena faz parte das nossas ra\xEDzes mais profundas."],
    explicacao_curta: ["A cultura ind\xEDgena \xE9 formada pelos costumes, saberes incr\xEDveis e tradi\xE7\xF5es das centenas de povos nativos do nosso pa\xEDs."],
    explicacao_aprofundada: ["Ela valoriza a harmonia com o meio ambiente e o conhecimento profundo da fauna e flora. Cada etnia possui sua pr\xF3pria l\xEDngua, mitos e sabedorias."],
    curiosidade: ["Muitas plantas que curam doen\xE7as e alimentos que adoramos (como mandioca, pipoca e a\xE7a\xED) foram descobertos pelos ind\xEDgenas!"],
    interacao: ["Voc\xEA conhece alguma palavra de origem tupi ou ind\xEDgena, como abacaxi ou jacar\xE9?", "O que acha importante aprendermos sobre a rela\xE7\xE3o dos ind\xEDgenas com a floresta?"],
    atividade: ["Desenhe uma linda floresta viva com \xE1rvores altas e rios limpos \u{1F333}"],
    final: ["Conhecer a cultura ind\xEDgena nos ajuda a valorizar e proteger a nossa rica biodiversidade \u{1F49B}"],
    emocao: "respeito",
    nivel: "leve"
  },
  arte_indigena: {
    tema: "cultura_indigena",
    subtema: "arte_indigena",
    palavras_chave: ["arte indigena", "arte ind\xEDgena", "arte nativa", "artesanato indigena"],
    inicio: ["A arte ind\xEDgena \xE9 repleta de cores vibrantes, simbolismos e conex\xE3o com a terra \u{1F3A8}"],
    explicacao_curta: ["Ela se destaca em pinturas corporais, adornos de penas, cestarias e cer\xE2micas feitas com barro cozido."],
    explicacao_aprofundada: ["Para os ind\xEDgenas, um objeto art\xEDstico tamb\xE9m serve para o dia a dia. Cada detalhe, cor ou material usado conta uma hist\xF3ria ou representa um animal protetor."],
    curiosidade: ["As cer\xE2micas de Maraj\xF3 e de Cunha s\xE3o famosas no mundo todo pela complexidade dos seus desenhos!"],
    interacao: ["Como voc\xEA usaria a arte para contar uma hist\xF3ria sobre a sua natureza ao redor?"],
    activity: ["Crie uma pintura usando apenas materiais que temos em casa, como borra de caf\xE9 ou ch\xE1 de camomila para dar cor!"],
    final: ["A riqueza da arte ind\xEDgena nos mostra o valor de criar coisas bonitas respeitando o planeta \u{1F33F}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  grafismos: {
    tema: "cultura_indigena",
    subtema: "grafismos",
    palavras_chave: ["grafismo", "grafismos indigenas", "grafismos ind\xEDgenas", "desenhos indigenas", "padr\xF5es ind\xEDgenas"],
    inicio: ["Os grafismos ind\xEDgenas s\xE3o padr\xF5es visuais elegantes e cheios de significados geom\xE9tricos \u2728"],
    explicacao_curta: ["Eles s\xE3o linhas, tri\xE2ngulos e labirintos desenhados em potes de barro, cestos, tecidos e na pr\xF3pria pele."],
    explicacao_aprofundada: ["Cada etnia desenvolve seus pr\xF3prios grafismos. Eles representam a identidade, mostram quem \xE9 a pessoa na comunidade ou imitam a pele de animais da floresta."],
    curiosidade: ["Muitos padr\xF5es geom\xE9tricos imitam a coura\xE7a de jabutis, as escamas de peixes e as manchas da on\xE7a-pintada! \u{1F43E}"],
    interacao: ["Se voc\xEA fosse criar um s\xEDmbolo geom\xE9trico inspirado em um animal, qual escolheria?"],
    atividade: ["Desenhe na folha uma sequ\xEAncia repetida de tri\xE2ngulos e zigue-zagues coloridos, criando seu pr\xF3prio grafismo!"],
    final: ["Os grafismos nos ensinam que formas geom\xE9tricas simples podem contar hist\xF3rias e criar identidades visuais fant\xE1sticas \u{1F30E}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  pintura_corporal: {
    tema: "cultura_indigena",
    subtema: "pintura_corporal",
    palavras_chave: ["pintura corporal", "pintura corporal indigena", "urucum", "jenipapo", "corpo pintado"],
    inicio: ["A pintura corporal ind\xEDgena possui fun\xE7\xF5es muito especiais al\xE9m de enfeitar o corpo \u{1F3A8}"],
    explicacao_curta: ["Ela \xE9 feita com pigmentos naturais extra\xEDdos diretamente de sementes e frutos da floresta."],
    explicacao_aprofundada: ["Os desenhos no corpo servem para comemorar colheitas, celebrar casamentos, dar for\xE7a aos guerreiros ou indicar a idade de algu\xE9m."],
    curiosidade: ["As sementes de urucum d\xE3o um tom vermelho-vivo, e o suco do jenipapo d\xE1 uma tinta preta-azulada resistente! \u{1F352}"],
    interacao: ["Voc\xEA j\xE1 pintou o rosto ou o bra\xE7o para alguma brincadeira de teatro ou festa?"],
    atividade: ["Que tal imaginar uma pintura de tra\xE7os retos nos bra\xE7os simbolizando prote\xE7\xE3o e desenh\xE1-la no papel?"],
    final: ["O corpo pintado \xE9 um meio de express\xE3o cultural e orgulho de carregar a pr\xF3pria tradi\xE7\xE3o na pele \u{1F33F}"],
    emocao: "expressao",
    nivel: "leve"
  },
  cestaria: {
    tema: "cultura_indigena",
    subtema: "cestaria",
    palavras_chave: ["cestaria", "cestas indigenas", "vime", "palha", "fibras naturais"],
    inicio: ["A cestaria ind\xEDgena \xE9 a t\xE9cnica perfeita de tran\xE7ar fibras naturais para fazer arte \xFAtil \u{1F9FA}"],
    explicacao_curta: ["Eles usam cip\xF3s, folhas de palmeira e palhas para tecer cestos, potes, esteiras e at\xE9 peneiras."],
    explicacao_aprofundada: ["Com tran\xE7ados precisos, os ind\xEDgenas criam grafismos diretamente no corpo do cesto. Esses cestos s\xE3o usados para guardar colheitas, carregar peixes ou filtrar alimentos."],
    curiosidade: ["O modo de tran\xE7ar varia tanto que s\xF3 de olhar o tipo de ponto, cientistas sabem qual povo ind\xEDgena teceu o cesto!"],
    interacao: ["Voc\xEA tem algum cesto tran\xE7ado de palha na sua casa? Para que ele \xE9 usado?"],
    atividade: ["Cole tiras de papel colorido entrela\xE7adas umas nas outras para ver como o tran\xE7ado ganha for\xE7a e forma!"],
    final: ["A cestaria mostra a sabedoria ind\xEDgena de usar mat\xE9rias vegetais renov\xE1veis com maestria \u{1F331}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  relacao_natureza: {
    tema: "cultura_indigena",
    subtema: "relacao_natureza",
    palavras_chave: ["natureza indigena", "relacao com a natureza", "meio ambiente indigena", "floresta viva"],
    inicio: ["Os povos ind\xEDgenas consideram a floresta como a sua grande casa coletiva e m\xE3e \u{1F333}"],
    explicacao_curta: ["Para os ind\xEDgenas, os rios, as \xE1rvores e os animais t\xEAm esp\xEDritos e merecem respeito profundo."],
    explicacao_aprofundada: ["Eles s\xF3 retiram da floresta o que realmente precisam para comer e construir abrigos, garantindo que a natureza sempre se recupere."],
    curiosidade: ["Essa grande sabedoria milenar \xE9 chamada de sustentabilidade pr\xE1tica: viver em abund\xE2ncia sem esgotar os recursos!"],
    interacao: ["O que n\xF3s podemos fazer nas cidades de diferente para proteger o meio ambiente?"],
    atividade: ["Encontre uma folha seca no ch\xE3o do jardim ou cal\xE7ada, observe suas linhas e desenhe-a caprichando nos m\xEDnimos detalhes \u{1F342}"],
    final: ["Reconhecer que fazemos parte da natureza nos inspira a cuidar melhor do nosso planetinha \u{1F30E}"],
    emocao: "harmonia",
    nivel: "leve"
  },
  // --- 3. ARTISTAS BRASILEIROS ---
  jaider_esbell: {
    tema: "artistas_brasileiros",
    subtema: "jaider_esbell",
    palavras_chave: ["jaider esbell", "makuxi", "pata ewa'n", "cora\xE7\xE3o do mundo"],
    inicio: ["Jaider Esbell pintava o cora\xE7\xE3o do mundo com cores que parecem m\xE1gicas \u2728"],
    explicacao_curta: ["Jaider Esbell criou obras cheias de cores e s\xEDmbolos para mostrar a liga\xE7\xE3o dos povos ind\xEDgenas com a natureza e os esp\xEDritos da floresta."],
    explicacao_aprofundada: ["Em 'Pata Ewa'n \u2013 O cora\xE7\xE3o do mundo', ele usou verde, azul e amarelo para representar a espiritualidade e a for\xE7a da floresta amaz\xF4nica."],
    curiosidade: ["Jaider tamb\xE9m foi escritor e organizou a primeira grande exposi\xE7\xE3o de arte ind\xEDgena no Museu de Arte do Rio \u{1F4DA}"],
    interacao: ["Se voc\xEA pudesse desenhar o cora\xE7\xE3o do mundo, o que colocaria nele?"],
    atividade: ["Desenhe uma grande \xE1rvore com ra\xEDzes que se conectam a animais, estrelas e pessoas \u{1F3A8}"],
    final: ["A arte ind\xEDgena nos ensina que tudo na natureza tem um esp\xEDrito \u{1F333}"],
    emocao: "espiritualidade",
    nivel: "leve"
  },
  daiara_tukano_selva_mae: {
    tema: "artistas_brasileiros",
    subtema: "daiara_tukano",
    palavras_chave: ["daiara tukano", "selva m\xE3e do rio menino", "selva mae do rio menino", "tukano", "mural"],
    inicio: ["Daiara Tukano pinta murais enormes que parecem cantar a for\xE7a da natureza \u{1F3B6}"],
    explicacao_curta: ["Daiara pinta murais enormes e coloridos inspirados nos rios, florestas e hist\xF3rias ind\xEDgenas."],
    explicacao_aprofundada: ["Em 'Selva M\xE3e do Rio Menino', as cores verde, azul e laranja se misturam para mostrar a ancestralidade e a prote\xE7\xE3o da floresta."],
    curiosidade: ["Daiara \xE9 ativista, muralista talentosa e ajudou a levar a arte dos povos originais para grandes museus! \u{1F3DB}\uFE0F"],
    interacao: ["Se voc\xEA fosse pintar um rio, que cores usaria para mostrar sua for\xE7a?"],
    atividade: ["Desenhe um grande painel com ondas, peixes e folhas usando as tr\xEAs cores que mais gosta \u{1F30A}"],
    final: ["A arte pode proteger os rios e as matas na nossa imagina\xE7\xE3o para sempre \u{1F4A7}"],
    emocao: "prote\xE7\xE3o",
    nivel: "leve"
  },
  daiara_tukano_uremiri: {
    tema: "artistas_brasileiros",
    subtema: "daiara_tukano",
    palavras_chave: ["daiara tukano uremiri", "uremiri h\xE3usiro", "uremiri h\xE3usiro", "sabedoria ind\xEDgena"],
    inicio: ["A s\xE9rie 'Uremiri H\xE3usiro' de Daiara Tukano \xE9 como um livro de sabedoria pintado \u{1F9E0}"],
    explicacao_curta: ["Essa s\xE9rie usa formas geom\xE9tricas sim\xE9tricas e cores vibrantes para representar conhecimentos ancestrais."],
    explicacao_aprofundada: ["Com vermelho, amarelo e azul, Daiara transforma rituais, melodias e hist\xF3rias antigas em grafismos cheios de simetria e poder visual."],
    curiosidade: ["O nome 'Uremiri H\xE3usiro' significa 'desenhos de cura e transforma\xE7\xE3o' na linda l\xEDngua tukano \u{1F300}"],
    interacao: ["Que conhecimento importante voc\xEA gostaria de ensinar aos seus amigos atrav\xE9s de um s\xEDmbolo?"],
    atividade: ["Desenhe um s\xEDmbolo bem bonito que represente algo precioso que voc\xEA aprendeu com seus pais ou av\xF3s \u{1F475}\u{1F474}"],
    final: ["A arte guarda a sabedoria e a identidade de um povo por muitas e muitas gera\xE7\xF5es \u{1F4D6}"],
    emocao: "sabedoria",
    nivel: "leve"
  },
  denilson_baniwa: {
    tema: "artistas_brasileiros",
    subtema: "denilson_baniwa",
    palavras_chave: ["denilson baniwa", "natureza morta 1", "baniwa", "vingadores ind\xEDgenas"],
    inicio: ["Denilson Baniwa transforma frutas e objetos do nosso dia a dia em mensagens poderosas \u{1F34C}"],
    explicacao_curta: ["Denilson mistura a arte tradicional ind\xEDgena com elementos modernos das cidades para mostrar que a cultura nativa est\xE1 bem viva hoje."],
    explicacao_aprofundada: ["Em 'Natureza morta 1', ele usa tons escuros e desenhos vivos de frutas locais como bananas para nos fazer pensar sobre nossa identidade brasileira."],
    curiosidade: ["Ele criou ilustra\xE7\xF5es divertidas onde super-her\xF3is famosos se vestem com trajes tribais, como guerreiros protetores da Amaz\xF4nia! \u{1F9B8}\u{1F3FD}"],
    interacao: ["Se um fruto da floresta pudesse falar, que hist\xF3ria de preserva\xE7\xE3o voc\xEA acha que ele contaria?"],
    atividade: ["Desenhe uma fruteira no papel, mas decore cada fruta com padr\xF5es e ornamentos geom\xE9tricos coloridos! \u{1F34E}"],
    final: ["A arte ind\xEDgena contempor\xE2nea faz pontes fant\xE1sticas entre as tradi\xE7\xF5es antigas e o futuro \u{1F680}"],
    emocao: "inova\xE7\xE3o",
    nivel: "leve"
  },
  carmezia_emiliano: {
    tema: "artistas_brasileiros",
    subtema: "carmezia_emiliano",
    palavras_chave: ["carmezia emiliano", "carm\xE9zia emiliano", "macuxi", "\xE1rvore da vida"],
    inicio: ["Carm\xE9zia Emiliano pinta as tradi\xE7\xF5es e lendas do povo Macuxi com muitas cores alegres e detalhes incr\xEDveis \u{1F333}"],
    explicacao_curta: ["Ela gosta de pintar cenas cotidianas de sua comunidade, como colheitas, festas rituais e o conv\xEDvio com a natureza."],
    explicacao_aprofundada: ["Em sua famosa obra 'A \xC1rvore da Vida', o verde vibrante, o rosa e o amarelo mostram a enorme conex\xE3o e uni\xE3o entre todos os seres vivos."],
    curiosidade: ["Carm\xE9zia come\xE7ou a pintar suas encantadoras telas quando j\xE1 tinha 50 anos de idade, e hoje suas obras rodam o mundo! \u{1F30D}"],
    interacao: ["Quem s\xE3o as pessoas e amigos que fazem parte da sua pr\xF3pria \xE1rvore da vida?"],
    atividade: ["Desenhe uma \xE1rvore forte e em cada galho fa\xE7a o rosto de um amigo ou familiar que voc\xEA ama muito \u{1F468}\u{1F469}\u{1F467}"],
    final: ["A arte tem o poder maravilhoso de conectar cora\xE7\xF5es e celebrar a nossa uni\xE3o familiar \u{1F91D}"],
    emocao: "conex\xE3o",
    nivel: "leve"
  },
  aua_mendes: {
    tema: "artistas_brasileiros",
    subtema: "aua_mendes",
    palavras_chave: ["au\xE1 mendes", "aua mendes", "mura", "autorretrato au\xE1"],
    inicio: ["Au\xE1 Mendes criou autorretratos cheios de frescor para celebrar o orgulho e as cores do povo Mura \u{1F4AA}"],
    explicacao_curta: ["Ela cria artes que misturam ilustra\xE7\xE3o digital, pintura e design gr\xE1fico para mostrar a identidade ind\xEDgena urbana."],
    explicacao_aprofundada: ["Os tons de roxo, azul-celeste e rosa neon nos seus desenhos expressam uma cultura forte, jovem e cheia de novos caminhos."],
    curiosidade: ["Au\xE1 nasceu no Amazonas, pertence ao povo Mura, \xE9 educadora e usa a internet para divulgar a beleza da arte ind\xEDgena! \u{1F4F2}"],
    interacao: ["Como voc\xEA se desenharia hoje de um jeito bem moderno e criativo para mostrar o seu orgulho pessoal?"],
    atividade: ["Fa\xE7a um autorretrato no papel usando tons vibrantes e incomuns, como azul ou roxo para a pele, criando uma obra m\xE1gica!"],
    final: ["A nossa identidade \xE9 o nosso maior tesouro, e a arte nos ajuda a brilhar com as nossas verdadeiras cores \u{1F31F}"],
    emocao: "autoestima",
    nivel: "leve"
  },
  estevao_silva: {
    tema: "artistas_brasileiros",
    subtema: "estevao_silva",
    palavras_chave: ["estevao silva", "est\xEAv\xE3o silva", "naturezas-mortas", "retratos", "s\xE9culo XIX", "natureza morta"],
    inicio: ["Estev\xE3o Silva adorava pintar frutas, flores colhidas e objetos do cotidiano com extrema do\xE7ura e realismo \u{1F347}"],
    explicacao_curta: ["Ele foi e \xE9 considerado o primeiro grande pintor negro de naturezas-mortas do Brasil no s\xE9culo XIX."],
    explicacao_aprofundada: ["Suas naturezas-mortas usam cores quentes para retratar p\xEAssegos, uvas e lou\xE7as de barro com texturas que parecem reais de verdade!"],
    curiosidade: ["Ele tinha tanta dedica\xE7\xE3o na pintura que dava um acabamento perfumado \xE0s telas para que as pessoas quase sentissem o aroma das frutas! \u{1F351}"],
    interacao: ["Se voc\xEA pintasse uma fruteira hoje, qual fruta n\xE3o poderia faltar de jeito nenhum?"],
    atividade: ["Desenhe uma cesta com uvas brilhantes e meias ma\xE7\xE3s, desenhando sombras macias embaixo de cada uma \u{1F34A}"],
    final: ["At\xE9 os objetos mais simples podem ganhar uma dignidade e beleza enormes com o carinho do olhar art\xEDstico \u2728"],
    emocao: "delicadeza",
    nivel: "leve"
  },
  arthur_timotheo_da_costa: {
    tema: "artistas_brasileiros",
    subtema: "arthur_timotheo_da_costa",
    palavras_chave: ["arthur tim\xF3theo da costa", "arthur timotheo", "impressionista brasileiro", "paisagens arthur"],
    inicio: ["Arthur Tim\xF3theo da Costa pintava retratos expressivos e paisagens que parecem brilhar sob o sol \u2600\uFE0F"],
    explicacao_curta: ["Ele foi um talentoso pintor negro brasileiro que trouxe as t\xE9cnicas de pinceladas soltas do Impressionismo para a nossa arte."],
    explicacao_aprofundada: ["Os azuis suaves, beges quentes e rosas claros das suas pinceladas criavam retratos cheios de sentimentos calmos e luzes naturais."],
    curiosidade: ["Ele come\xE7ou fazendo desenhos decorativos em bondes no Rio de Janeiro antes de ganhar pr\xEAmios importantes para viajar e estudar na Europa! \u{1F683}"],
    interacao: ["Como voc\xEA pintaria um dia ensolarado na praia ou no parque?"],
    atividade: ["Tente desenhar uma pequena casinha de campo usando pequenos tracinhos de cor, imitando pinceladas r\xE1pidas de luz! \u{1F3E1}"],
    final: ["A pintura impressionista nos convida a capturar a beleza passageira da luz do dia nos nossos olhos \u{1F305}"],
    emocao: "leveza",
    nivel: "leve"
  },
  maria_auxiliadora: {
    tema: "artistas_brasileiros",
    subtema: "maria_auxiliadora",
    palavras_chave: ["maria auxiliadora", "festas populares", "alto-relevo", "dan\xE7as populares"],
    inicio: ["Maria Auxiliadora pintava festas e sambas t\xE3o alegres e vivos que parece at\xE9 que ouvimos o som da sanfona e do pandeiro! \u{1F3B5}"],
    explicacao_curta: ["Sua arte mostrava com orgulho o cotidiano das comunidades negras, com festas juninas, casamentos de rua e rodas de capoeira."],
    explicacao_aprofundada: ["Ela usava cores puras e brilhantes (como amarelo, vermelho e verde-bandeira) para cobrir figuras humanas expressivas e cheias de movimento."],
    curiosidade: ["Ela misturava pasta de dente e pedacinhos de tecidos nas tintas para que seus personagens tivessem cabelos e roupas em relevo real nas telas! \u{1F9F5}"],
    interacao: ["Qual festividade da sua escola ou cidade voc\xEA acha que \xE9 a mais colorida e animada?"],
    atividade: ["Crie um desenho de rua enfeitada com bandeirinhas coloridas e use pedacinhos de l\xE3 para criar as cordas das bandeirinhas! \u{1F389}"],
    final: ["O folclore e a alegria do povo brasileiro s\xE3o inspira\xE7\xF5es valiosas que d\xE3o vida \xE0 hist\xF3ria da nossa arte \u{1F38A}"],
    emocao: "celebracao",
    nivel: "leve"
  },
  rubem_valentim: {
    tema: "artistas_brasileiros",
    subtema: "rubem_valentim",
    palavras_chave: ["rubem valentim", "emblema rubem", "orix\xE1s geometria", "cubos e triangulos"],
    inicio: ["Rubem Valentim usava ret\xE2ngulos, tri\xE2ngulos e c\xEDrculos perfeitos para construir lindos emblemas de prote\xE7\xE3o \u{1F9E9}"],
    explicacao_curta: ["Ele transformava s\xEDmbolos ancestrais da cultura e religi\xE3o afro-brasileira em uma arte geom\xE9trica e moderna \xFAnica."],
    explicacao_aprofundada: ["Suas famosas pinturas chamadas 'Emblemas' utilizam as cores branca, azul, vermelha e amarela para arrumar s\xEDmbolos sagrados em padr\xF5es perfeitos."],
    curiosidade: ["Ele amava tanto a simetria que tamb\xE9m constru\xEDa suas esculturas em madeira, que pareciam grandes brinquedos geom\xE9tricos de montar! \u{1F6E0}\uFE0F"],
    interacao: ["Se as cores pudessem guardar sentimentos, qual forma e cor voc\xEA usaria para desenhar o sentimento de 'paz'?"],
    atividade: ["Desenhe no papel um bras\xE3o de prote\xE7\xE3o usando apenas c\xEDrculos vermelhos e tri\xE2ngulos azuis encaixados! \u2B1B\u{1F53A}\u{1F535}"],
    final: ["As formas puras da geometria tamb\xE9m servem para expressar pensamentos sagrados e profundos \u{1F5FA}\uFE0F"],
    emocao: "misterio",
    nivel: "leve"
  },
  maxwell_alexandre: {
    tema: "artistas_brasileiros",
    subtema: "maxwell_alexandre",
    palavras_chave: ["maxwell alexandre", "pardo \xE9 papel", "favela arte", "skatista pintor"],
    inicio: ["Maxwell Alexandre pinta a vida corrida e vibrante dos jovens da periferia com um orgulho enorme! \u{1F9E1}"],
    explicacao_curta: ["Sua arte capta os cortes de cabelo, as roupas e a cultura urbana no Rio de Janeiro de um jeito grandioso."],
    explicacao_aprofundada: ["Na sua aclamada s\xE9rie de quadros 'Pardo \xE9 Papel', ele desenha personagens negros poderosos usando fundos dourados e pap\xE9is industriais simples."],
    curiosidade: ["Antes de pintar telas incr\xEDveis que s\xE3o expostas na Europa, ele era atleta profissional de patins inline e de skate pelas ladeiras do Rio! \u{1F6F9}"],
    interacao: ["O que h\xE1 de mais legal na rua ou comunidade onde voc\xEA vive que voc\xEA desenharia num mural gigante?"],
    atividade: ["Desenhe voc\xEA e seus amigos fazendo sua atividade favorita (correndo, andando de bike ou jogando bola) bem estilizados! \u{1F3D8}\uFE0F"],
    final: ["A arte nos permite dar voz e valorizar as nossas pr\xF3prias viv\xEAncias e vizinhan\xE7as \u{1F31F}"],
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
    inicio: ["Frida Kahlo pintou duas vers\xF5es de si mesma lado a lado, como duas aliadas segurando a m\xE3o uma da outra \u{1F91D}"],
    explicacao_curta: ["Essa marcante pintura transmite for\xE7a de esp\xEDrito, sentimento e o modo como ela amava suas origens mexicanas e europeias."],
    explicacao_aprofundada: ["Com as cores branca, vermelha e verde, ela desenhou as art\xE9rias dos seus dois cora\xE7\xF5es se unindo para curar feridas."],
    curiosidade: ["Sua m\xE3e era de origem ind\xEDgena mexicana e seu pai um fot\xF3grafo alem\xE3o, da\xED o contraste das suas duas lindas roupas no quadro! \u{1FA9E}"],
    interacao: ["Se voc\xEA desenhasse duas vers\xF5es suas no futuro, o que cada uma estaria vestindo?"],
    atividade: ["Fa\xE7a no papel duas figuras coladas de m\xE3os dadas que representem a amizade mais fofa do mundo \u{1F4AA}"],
    final: ["Proteger a n\xF3s mesmos por completo nos ajuda a enfrentar qualquer problema com ternura e paz \u{1F308}"],
    emocao: "autoconhecimento",
    nivel: "leve"
  },
  frida_kahlo_autorretrato_colar: {
    tema: "artistas_mulheres",
    subtema: "frida_kahlo",
    palavras_chave: ["autorretrato com colar de espinhos", "beija-flor", "colar de espinhos"],
    inicio: ["Nessa tela, Frida desenhou-se paciente usando brinquedos de espinhos e um passarinho livre por perto \u{1F426}"],
    explicacao_curta: ["A pintura ilustra a do\xE7ura e a dignidade com que ela encarava as suas limita\xE7\xF5es corporais no dia a dia."],
    explicacao_aprofundada: ["Um gato preto (mist\xE9rio), um macaquinho travesso e um beija-flor de asas abertas mostram a conex\xE3o dela com a fauna do M\xE9xico."],
    curiosidade: ["O passarinho preto no pesco\xE7o representa a lenda asteca do renascer da vida ap\xF3s os momentos dif\xEDceis \u2728"],
    interacao: ["Quais elementos da fauna e flora ajudam voc\xEA a se sentir calmo e feliz em dias chuvosos?"],
    atividade: ["Desenhe voc\xEA com uma delicada flor amarela no cabelo ou no ombro para expressar o amor pelas plantas \u{1F33C}"],
    final: ["A arte consegue mudar a nossa dor em lindos quadros coloridos que inspiram milh\xF5es \u{1F494}\u27A1\uFE0F\u{1F4AA}"],
    emocao: "resili\xEAncia",
    nivel: "leve"
  },
  artemisia_gentileschi_judite: {
    tema: "artistas_mulheres",
    subtema: "artemisia_gentileschi",
    palavras_chave: ["artemisia gentileschi", "judite", "judite decapitadora", "for\xE7a feminina artemisia"],
    inicio: ["Artemisia Gentileschi pintava rainhas determinantes que tomavam as r\xE9deas da pr\xF3pria vida! \u2694\uFE0F"],
    explicacao_curta: ["Considerada a primeira grande pintora barroca da It\xE1lia, ela usou jogos intensos de luz e sombra (chiaroscuro) para dar a\xE7\xE3o e dramas \xE0s telas."],
    explicacao_aprofundada: ["A obra de Judite mostra duas mulheres corajosas e unidas vencendo tarefas assustadoras com extrema for\xE7a muscular e intelig\xEAncia."],
    curiosidade: ["Numa \xE9poca em que mulheres eram proibidas de ir \xE0 universidade de arte, ela foi a primeira aceita na Academia de Desenho de Floren\xE7a! \u{1F3A8}"],
    interacao: ["Quem \xE9 uma mulher forte e guerreira na sua hist\xF3ria real ou nas suas brincadeiras preferidas?"],
    atividade: ["Desenhe sua super-hero\xEDna favorita cortando la\xE7os ou solucionando um grande mist\xE9rio com o l\xE1pis! \u{1F46F}\u200D\u2640\uFE0F"],
    final: ["As telas de Artemisia nos provam que garotas t\xEAm coragem de sobra para o papel de grandes l\xEDderes e guerreiras \u{1F6E1}\uFE0F"],
    emocao: "coragem",
    nivel: "leve"
  },
  yayoi_kusama_infinity_mirror: {
    tema: "artistas_mulheres",
    subtema: "yayoi_kusama",
    palavras_chave: ["infinity mirror rooms", "salas infinitas", "bolinhas kusama"],
    inicio: ["Yayoi Kusama cria cavernas iluminadas onde espelhos refletem bal\xF5es e luzes at\xE9 o infinito! \u2728\u{1FA9E}"],
    explicacao_curta: ["A lend\xE1ria artista japonesa preenche salas inteiras de pontos repetidos para imergir o visitante num sonho."],
    explicacao_aprofundada: ["Usando contraste de bolinhas e labirintos com revestimento espelhado, ela cria no\xE7\xF5es m\xE1gicas reais de termos sem fim nas salas."],
    curiosidade: ["A artista adora pintar ab\xF3boras gigantes amarelas de bolinhas pretas, e tem cabelos chanel rosa-choque brilhantes aos 90 anos! \u{1F534}\u26AA"],
    interacao: ["Se o universo infinito fosse feito de padr\xF5es engra\xE7ados, que formatos seriam?"],
    atividade: ["Cole bolinhas de adesivo circular ou fa\xE7a c\xEDrculos com cotonete de tinta em todo o papel para criar sua estampa infinita! \u{1F3A8}"],
    final: ["A const\xE2ncia de ideias simples repetidas com capricho pode criar o efeito est\xE9tico mais deslumbrante \u{1F30C}"],
    emocao: "maravilhamento",
    nivel: "leve"
  },
  mary_cassatt_banho: {
    tema: "artistas_mulheres",
    subtema: "mary_cassatt",
    palavras_chave: ["mary cassatt", "o banho da crian\xE7a", "afeto mary cassatt"],
    inicio: ["Mary Cassatt registrava os gestos mais puros de aconchego, higiene e aten\xE7\xE3o das m\xE3es com seus beb\xEAs \u{1F6C1}\u{1F495}"],
    explicacao_curta: ["A pintora norte-americana impressionista registrava a vida \xEDntima e caseira de mulheres com tra\xE7os delicados."],
    explicacao_aprofundada: ["Em 'O Banho da Crian\xE7a', os tons past\xE9is de verde, azul e creme criam um clima tranquilo de repouso dom\xE9stico e prote\xE7\xE3o."],
    curiosidade: ["Embora vivesse isolada socialmente por ser mulher pintora independente em Paris, ela ajudou a popularizar o impressionismo na Am\xE9rica! \u{1F469}\u200D\u{1F467}"],
    interacao: ["Quem em casa sempre ajuda voc\xEA com carinho nos afazeres de lavar, pentear ou comer?"],
    atividade: ["Desenhe uma x\xEDcara quentinha de cacau ou leite sendo oferecida com muito carinho por duas m\xE3os amig\xE1veis \u{1F468}\u200D\u{1F469}\u200D\u{1F467}"],
    final: ["Atrav\xE9s dos afazeres rotineiros, as pessoas constroem os la\xE7os de uni\xE3o mais indestrut\xEDveis do mundo \u2764\uFE0F"],
    emocao: "aconchego",
    nivel: "leve"
  },
  georgia_okeeffe_black_iris: {
    tema: "artistas_mulheres",
    subtema: "georgia_okeeffe",
    palavras_chave: ["georgia o'keeffe", "black iris", "flores gigantes", "\xEDris negra"],
    inicio: ["Georgia O'Keeffe retratava p\xE9talas delicadas em telas gigantes, como se f\xF4ssemos abelhas em close-up! \u{1F338}\u{1F50D}"],
    explicacao_curta: ["Famosa artista dos EUA, ela aproximava seu olhar de plantas silvestres e colinas \xE1ridas para fazer arte abstrata."],
    explicacao_aprofundada: ["Com degrad\xEAs suaves de tons roxos, creme e preto, a \xEDris adquire formas org\xE2nicas monumentais que lembram montanhas."],
    curiosidade: ["Ela viveu dezenas de anos sozinha em uma casinha de teto plano no deserto do Novo M\xE9xico, pintando colinas e areia roxa! \u{1F335}"],
    interacao: ["Se f\xF4ssemos microsc\xF3picos, que fruta ou folha pareceria uma montanha russa de divers\xF5es?"],
    atividade: ["Colete uma p\xE9tala ca\xEDda de flor e desenhe suas veias no papel com um aumento de dez vezes mais \u{1F58D}\uFE0F"],
    final: ["Chegar bem perto da natureza nos revela belezas ocultas que a correria esconde dos adultos \u{1F440}"],
    emocao: "admira\xE7\xE3o",
    nivel: "leve"
  },
  lygia_clark_bichos: {
    tema: "artistas_mulheres",
    subtema: "lygia_clark",
    palavras_chave: ["lygia clark", "bichos", "arte interativa", "bicho de metal"],
    inicio: ["Lygia Clark fez esculturas de metal articuladas de dobradi\xE7as para voc\xEA modelar o bicho que inventar! \u{1F98E}\u{1F527}"],
    explicacao_curta: ["Grande artista brasileira moderna, ela queria que as pessoas tocassem e transformassem a arte movendo-a."],
    explicacao_aprofundada: ["Estes 'Bichos' de alum\xEDnio n\xE3o t\xEAm formas fixas; dobram-se dezenas de vezes nas m\xE3os dos pequenos em novas configura\xE7\xF5es."],
    curiosidade: ["Lygia dizia que a escultura parecia um organismo vivo que interage com quem brinca com ele \u{1F9F8}"],
    interacao: ["Se o seu brinquedo pudesse virar v\xE1rias criaturas diferentes, que animais seriam?"],
    atividade: ["Dobre um papel em quatro ou cinco vincos e veja como ele pode ficar de p\xE9 como uma est\xE1tua maluca! \u{1F98E}"],
    final: ["As m\xE3os e gestos das crian\xE7as tamb\xE9m completam a beleza viva de obras tridimensionais \u{1F3AD}"],
    emocao: "interatividade",
    nivel: "leve"
  },
  adriana_varejao_celacanto: {
    tema: "artistas_mulheres",
    subtema: "adriana_varejao",
    palavras_chave: ["adriana varej\xE3o", "celacanto provoca maremoto", "azulejos adriana", "hist\xF3ria do brasil"],
    inicio: ["Adriana Varej\xE3o desenhou um grande oceano em azulejos de cer\xE2mica onde ondas gigantes balan\xE7am barcos \u{1F30A}\u{1F41F}"],
    explicacao_curta: ["Pintora contempor\xE2nea do Brasil, ela junta peda\xE7os de lou\xE7a, gesso e tintas azuis para contar a hist\xF3ria do nosso pa\xEDs."],
    explicacao_aprofundada: ["A obra Celacanto une azulejos hist\xF3ricos portugueses fraturados para mostrar como as culturas do mar criaram o Brasil."],
    curiosidade: ["O celacanto \xE9 um peixe antigo que vive no fundo escuro do mar e que cientistas achavam que j\xE1 tinha sumido h\xE1 milh\xF5es de anos! \u{1F995}"],
    interacao: ["Que mist\xE9rios e monstros ador\xE1veis voc\xEA imagina que habitam o fundo dos mares mais azuis?"],
    atividade: ["Pinte quadrados azuis no papel formando um lindo padr\xE3o, e depois dobre e desdobre de leve para simular azulejos antigos que racharam \u{1F9E9}"],
    final: ["As feridas e quebras da nossa hist\xF3ria tamb\xE9m podem ser coladas e integradas em um lindo painel \u{1F3FA}"],
    emocao: "mem\xF3ria",
    nivel: "leve"
  },
  beatriz_milhazes_beleza_pura: {
    tema: "artistas_mulheres",
    subtema: "beatriz_milhazes",
    palavras_chave: ["beatriz milhazes", "beleza pura", "arabescos beatriz", "c\xEDrculos coloridos"],
    inicio: ["Beatriz Milhazes cria redemoinhos, mandalas e fatias coloridas que giram na folha como brinquedos de parque! \u{1F3A0}\u{1F308}"],
    explicacao_curta: ["A artista brasileira usa a colagem de pel\xEDculas coloridas para gerar estampas felizes e exuberantes em telas enormes."],
    explicacao_aprofundada: ["Flores cor-de-rosa, listras amarelas e arcos laranjas sobrep\xF5em-se gerando ritmos visuais que dan\xE7am."],
    curiosidade: ["Ela adora se inspirar nos palcos decorados do desfile de Carnaval do Rio de Janeiro e nos grafismos da bossa nova! \u{1F457}"],
    interacao: ["Quais formas e desenhos fazem voc\xEA querer dan\xE7ar de tanta empolga\xE7\xE3o?"],
    atividade: ["Recorte p\xE9talas e rodas em pap\xE9is de revista e monte uma grande colagem cheia de c\xEDrculos um no outro! \u2702\uFE0F\u{1F3A8}"],
    final: ["A harmonia de cores quentes e formas radiantes pode nos encher de energia positiva e entusiasmo \u{1F386}"],
    emocao: "euforia",
    nivel: "leve"
  },
  maria_martins_o_impossivel: {
    tema: "artistas_mulheres",
    subtema: "maria_martins",
    palavras_chave: ["maria martins", "o imposs\xEDvel", "escultura maria martins", "surrealismo bronze"],
    inicio: ["Maria Martins moldou no bronze criaturas que parecem ra\xEDzes de plantas falantes sa\xEDdas de sonhos misteriosos! \u{1F319}\u{1F300}"],
    explicacao_curta: ["Escultora surrealista fant\xE1stica do Brasil, ela criava mitos da natureza e florestas tropicais em metais escuros."],
    explicacao_aprofundada: ["Em 'O Imposs\xEDvel', os ganchos e silhuetas que parecem garras flutuam no ar se aproximando e tentando se abra\xE7ar."],
    curiosidade: ["Ela passava dias lendo lendas sobre rios e monstros d'\xE1gua da floresta amaz\xF4nica para se inspirar antes de suas esculturas \u{1F3A8}"],
    interacao: ["Se um espantalho protetor ou criatura da floresta passasse correndo e pulasse, como seriam seus passos?"],
    atividade: ["D\xEA formas a cobras de massinha de modelar e crie curvas pontiagudas que parecem ra\xEDzes m\xE1gicas entrela\xE7adas! \u{1F40D}\u{1F33B}"],
    final: ["A arte nos permite dar contorno f\xEDsico a desejos, mist\xE9rios e fantasias imposs\xEDveis de tocar \u2728"],
    emocao: "fantasia",
    nivel: "leve"
  },
  // --- 6. CANTIGAS DE RODA (43 itens mapeados sob chaves individuais) ---
  cantiga_1: {
    palavras_chave: ["ciranda", "cirandinha", "ciranda, cirandinha", "anel", "vidro", "roda", "verso"],
    inicio: ["Que del\xEDcia! Quer cantar e brincar de Ciranda, Cirandinha? \u{1F3B6}"],
    explicacao_curta: ["Aqui est\xE1 a famosa letra desta cantiga popular de roda para cantarmos juntos:\n\nCiranda Cirandinha\nVamos todos cirandar\nVamos dar a meia volta\nVolta e meia vamos dar\n\nO Anel que tu me destes\nEra vidro e se quebrou\nO amor que tu me tinhas\nEra pouco e se acabou\n\nPor isso dona mo\xE7a\nFaz favor de entrar na roda\nDiga um verso bem bonito\nDiga adeus e v\xE1 embora"],
    categoria: "Cantiga de Roda"
  },
  cantiga_2: {
    palavras_chave: ["capelinha", "mel\xE3o", "capelinha de mel\xE3o", "s\xE3o jo\xE3o", "s\xE3o jo\xE3o", "cravo", "rosa", "manjeric\xE3o"],
    inicio: ["Vamos cantar 'Capelinha de Mel\xE3o'! Uma cantiga de festa de S\xE3o Jo\xE3o! \u{1F33D}\u{1F3B6}"],
    explicacao_curta: ["Veja a letra completa desta cantiga:\n\nCapelinha de mel\xE3o\n\xC9 de S\xE3o Jo\xE3o\n\xC9 de cravo, \xE9 de rosa,\n\xC9 de manjeric\xE3o\n\nS\xE3o Jo\xE3o est\xE1 dormindo\nN\xE3o acorda, n\xE3o\nAcordai, acordai,\nAcordai, Jo\xE3o!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_3: {
    palavras_chave: ["escravos", "j\xF3", "escravos de j\xF3", "caxang\xE1", "tira", "bota", "zigue-zigue-z\xE1"],
    inicio: ["Quer brincar de passar pedrinhas no ritmo de 'Escravos de J\xF3'? \u{1FAA8}\u{1F941}"],
    explicacao_curta: ["Esta cantiga de jogo de pedras \xE9 super divertida de cantar:\n\nEscravos de J\xF3\nJogavam caxang\xE1\nTira, bota, deixa ficar\nGuerreiros com guerreiros fazem zigue-zigue-z\xE1\nGuerreiros com guerreiros fazem zigue-zigue-z\xE1."],
    categoria: "Cantiga de Roda"
  },
  cantiga_4: {
    palavras_chave: ["peixe", "vivo", "peixe vivo", "\xE1gua", "fria", "companhia", "pastores", "zombaria"],
    inicio: ["Cantar 'Peixe Vivo' nos enche de saudade e do\xE7ura! \u{1F41F}\u{1F30A}"],
    explicacao_curta: ["Aqui est\xE3o os versos desta tradicional cantiga mineira:\n\nComo pode o peixe vivo\nViver fora da \xE1gua fria\nComo pode o peixe vivo\nViver fora da \xE1gua fria\n\nComo poderei viver\nComo poderei viver\nSem a tua, sem a tua\nSem a tua companhia\n\nOs pastores desta aldeia\nJ\xE1 me fazem zombaria\nPor me verem assim chorando\nSem a tua companhia."],
    categoria: "Cantiga de Roda"
  },
  cantiga_5: {
    palavras_chave: ["galinha", "vizinho", "galinha do vizinho", "ovo", "amarelinho", "bota", "dez"],
    inicio: ["Vamos cantar e contar de uma vez com 'A Galinha do Vizinho'! \u{1F414}\u{1F95A}"],
    explicacao_curta: ["Usa esta letra para contar os ovinhos amarelos:\n\nA galinha do vizinho\nBota ovo amarelinho\nBota um, bota dois, bota tr\xEAs,\nBota quatro, bota cinco, bota seis,\nBota sete, bota oito, bota nove,\nBota dez!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_6: {
    palavras_chave: ["borboletinha", "cozinha", "chocolate", "madrinha", "poti", "pica-pau", "perna de pau"],
    inicio: ["Cozinhar chocolate de mentira \xE9 muito engra\xE7ado em 'Borboletinha'! \u{1F98B}\u{1F36B}"],
    explicacao_curta: ["Uma das can\xE7\xF5es mais cantadas da nossa inf\xE2ncia:\n\nBorboletinha t\xE1 na cozinha\nFazendo chocolate\nPara a madrinha\n\nPoti, poti\nPerna de pau\nOlho de vidro\nE nariz de pica-pau pau pau"],
    categoria: "Cantiga de Roda"
  },
  cantiga_7: {
    palavras_chave: ["lim\xE3o", "limoeiro", "meu lim\xE3o, meu limoeiro", "jacarand\xE1", "tindolel\xEA", "tindolal\xE1"],
    inicio: ["Balan\xE7ar ao som de 'Meu Lim\xE3o, Meu Limoeiro' \xE9 uma del\xEDcia de ciranda! \u{1F34B}\u{1F333}"],
    explicacao_curta: ["Eis a letra para cantarmos e girarmos na sala:\n\nMeu lim\xE3o, meu limoeiro\nMeu p\xE9 de jacarand\xE1\nUma vez, tindolel\xEA\nOutra vez, tindolal\xE1"],
    categoria: "Cantiga de Roda"
  },
  cantiga_8: {
    palavras_chave: ["barata", "barata diz que tem", "saias", "fil\xF3", "veludo", "marfim", "marfim", "caminh\xE3o"],
    inicio: ["A Barata \xE9 muito mentirosa e cheia de piadas de si mesma! \u{1FAB3}\u{1F923}"],
    explicacao_curta: ["Ria bastante cantando esta letra r\xE1pida:\n\nA Barata diz que tem sete saias de fil\xF3\n\xC9 mentira da barata, ela tem \xE9 uma s\xF3\nAh ra ra, i\xE1 ro r\xF3, ela tem \xE9 uma s\xF3!\n\nA Barata diz que tem um sapato de veludo\n\xC9 mentira da barata, o p\xE9 dela \xE9 peludo\nAh ra ra, Iu ru ru, o p\xE9 dela \xE9 peludo!\n\nA Barata diz que tem uma cama de marfim\n\xC9 mentira da barata, ela tem \xE9 de capim\n\nA Barata diz que tem um anel de formatura\n\xC9 mentira da barata, ela tem \xE9 casca dura"],
    categoria: "Cantiga de Roda"
  },
  cantiga_9: {
    palavras_chave: ["alecrim", "alecrim dourado", "dourado", "campo", "semeado", "amor", "flor"],
    inicio: ["A flor e planta silvestre mais querida da capoeira e do campo: 'Alecrim Dourado'! \u{1F331}\u2728"],
    explicacao_curta: ["Uma m\xFAsica cheia de paz e inspira\xE7\xE3o vegetal:\n\nAlecrim, Alecrim dourado\nQue nasceu no campo\nSem ser semeado\n\nFoi meu amor\nQue me disse assim\nQue a flor do campo \xE9 o alecrim"],
    categoria: "Cantiga de Roda"
  },
  cantiga_10: {
    palavras_chave: ["cai, cai bal\xE3o", "cai bal\xE3o", "sab\xE3o", "m\xE3o", "medo", "apanhar"],
    inicio: ["Cuidado para o bal\xE3o n\xE3o cair no quintal em 'Cai, Cai Bal\xE3o'! \u{1F388}\u{1F525}"],
    explicacao_curta: ["Aprenda a cantar no ritmo das festas de meio de ano:\n\nCai cai bal\xE3o, cai cai bal\xE3o\nNa rua do sab\xE3o\nN\xE3o Cai n\xE3o, n\xE3o cai n\xE3o, n\xE3o cai n\xE3o\nCai aqui na minha m\xE3o!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_11: {
    palavras_chave: ["pirulito", "pirulito que bate bate", "bate", "gosta", "menina"],
    inicio: ["Um cl\xE1ssico doce que adora bater o ritmo da roda: 'Pirulito que Bate Bate'! \u{1F36D}\u{1F3B5}"],
    explicacao_curta: ["Vocalize e dance no c\xEDrculo de bra\xE7os dados:\n\nPirulito que bate bate\nPirulito que j\xE1 bateu\nQuem gosta de mim \xE9 ela\nQuem gosta dela sou eu\n\nPirulito que bate bate\nPirulito que j\xE1 bateu\nA menina que eu gostava\nN\xE3o gostava como eu"],
    categoria: "Cantiga de Roda"
  },
  cantiga_12: {
    palavras_chave: ["pombinha", "pombinha branca", "roupa", "casamento", "janela", "namorado"],
    inicio: ["Um p\xE1ssaro que anda de terno e cuida da arruma\xE7\xE3o com 'Pombinha Branca'! \u{1F54A}\uFE0F\u{1F9FC}"],
    explicacao_curta: ["Can\xE7\xE3o com as rimas mais divertidas:\n\nPombinha branca o que est\xE1 fazendo?\nLavando roupa pro casamento\nVou me lavar, vou me secar\nVou pra janela pra namorar\n\nPassou um mo\xE7o de terno branco,\nChap\xE9u de lado meu namorado\nMandei entrar, mandei sentar\nCuspiu no ch\xE3o, limpa a\xED seu porcalh\xE3o"],
    categoria: "Cantiga de Roda"
  },
  cantiga_13: {
    palavras_chave: ["terezinha", "terezinha de jesus", "jesus", "queda", "cavalheiros", "laranja", "lim\xE3o", "abra\xE7o"],
    inicio: ["A queda amig\xE1vel com tr\xEAs cavalheiros no socorro em 'Terezinha de Jesus'! \u{1F34A}\u{1F338}"],
    explicacao_curta: ["Uma bela can\xE7\xE3o cheia de rimas cl\xE1ssicas:\n\nTerezinha de Jesus deu uma queda\nFoi ao ch\xE3o\nAcudiram tr\xEAs cavalheiros\nTodos de chap\xE9u na m\xE3o\n\nO primeiro foi seu pai\nO segundo seu irm\xE3o\nO terceiro foi aquele\nQue a Tereza deu a m\xE3o"],
    categoria: "Cantiga de Roda"
  },
  cantiga_14: {
    palavras_chave: ["indiozinhos", "dos indiozinhos", "bote", "rio", "jacar\xE9", "virou"],
    inicio: ["O pequeno barco que quase virou no rio pelo jacar\xE9 em '10 Indiozinhos'! \u{1F6F6}\u{1F40A}"],
    explicacao_curta: ["Use a contagem para cantar no ritmo firme de bater palmos:\n\nUm, dois, tr\xEAs indiozinhos\nQuatro, cinco, seis indiozinhos\nSete, oito, nove indiozinhos\nDez num pequeno bote\n\nIam navegando pelo rio abaixo\nQuando um jacar\xE9 se aproximou\nAnd o pequeno bote dos indiozinhos\nQuase, quase virou."],
    categoria: "Cantiga de Roda"
  },
  cantiga_15: {
    palavras_chave: ["se essa rua fosse minha", "se essa rua", "ladrilhar", "brilhante", "amor", "bosque", "solid\xE3o", "anjo", "cora\xE7\xE3o"],
    inicio: ["Colocar brilhantes para passar as amizades em 'Se Essa Rua Fosse Minha'! \u2728\u{1F6E3}\uFE0F"],
    explicacao_curta: ["A can\xE7\xE3o l\xEDrica de acalentar cora\xE7\xF5es mais linda de todas:\n\nSe essa rua\nSe essa rua fosse minha\nEu mandava\nEu mandava ladrilhar\nCom pedrinhas\nCom pedrinhas de brilhante\nPara o meu\nPara o meu amor passar\n\nNessa rua\nNessa rua tem um bosque\nQue se chama\nQue se chama de solid\xE3o\nDentro dele morre um anjo\nQue roubou meu cora\xE7\xE3o."],
    categoria: "Cantiga de Roda"
  },
  cantiga_16: {
    palavras_chave: ["cravo", "rosa", "o cravo e a rosa", "brigou", "sacada", "doente", "casamento"],
    inicio: ["A briga bot\xE2nica mais barulhenta da nossa inf\xE2ncia: 'O Cravo e a Rosa'! \u{1F940}\u{1F94A}"],
    explicacao_curta: ["Cantiga amada com uma linda concilia\xE7\xE3o floral no final:\n\nO cravo brigou com a rosa\nDebaixo de uma sacada\nO cravo saiu ferido\nE a rosa despeda\xE7ada\n\nO cravo ficou doente\nE a rosa foi visitar\nO cravo teve um desmaio\nE a rosa p\xF4s-se a chorar\n\nA rosa fez serenata\nO cravo foi espiar\nE as flores fizeram festa\nPorque eles v\xE3o se casar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_17: {
    palavras_chave: ["sapo", "sapo n\xE3o lava o p\xE9", "lava", "p\xE9", "lagoa", "chul\xE9"],
    inicio: ["A sa\xFAde do p\xE9 na lagoa em 'O Sapo N\xE3o Lava o P\xE9'! \u{1F438}\u{1F9B6}"],
    explicacao_curta: ["L\xE1 vem a m\xFAsica do sapo com o maior chul\xE9 do rio:\n\nO sapo n\xE3o lava o p\xE9.\nN\xE3o lava porque n\xE3o quer.\nEle mora l\xE1 na lagoa,\nE n\xE3o lava o p\xE9\nPorque n\xE3o quer\nMas, que chul\xE9!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_18: {
    palavras_chave: ["marcha", "soldado", "marcha soldado", "cabe\xE7a de papel", "quartel", "fogo", "bandeira"],
    inicio: ["Marchar reto com o chap\xE9u feito de jornal em 'Marcha Soldado'! \u{1F4F0}\u{1F482}\u200D\u2642\uFE0F"],
    explicacao_curta: ["Eis o ritmo militar do quartel e da bandeira nacional:\n\nMarcha Soldado\nCabe\xE7a de Papel\nSe n\xE3o marchar direito\nVai preso pro quartel\n\nO quartel pegou fogo\nA pol\xEDcia deu sinal\nAcorda acorda acorda\nA bandeira nacional"],
    categoria: "Cantiga de Roda"
  },
  cantiga_19: {
    palavras_chave: ["fui no toror\xF3", "toror\xF3", "beber \xE1gua", "morena", "dona maria", "roda", "pedro"],
    inicio: ["Beber \xE1gua no c\xF3rrego e achar uma bela companhia em 'Fui no Toror\xF3'! \u{1F4A7}\u{1F338}"],
    explicacao_curta: ["Cante essa animada cantiga de dar voltas na roda:\n\nFui no Toror\xF3 beber \xE1gua n\xE3o achei\nAchei linda Morena\nQue no Toror\xF3 deixei\n\nAproveita minha gente\nQue uma noite n\xE3o \xE9 nada\nSe n\xE3o dormir agora\nDormir\xE1 de madrugada\n\nOh, Dona Maria\nOh, Mariazinha, entra nesta roda\nOu ficar\xE1s sozinha!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_20: {
    palavras_chave: ["ai, eu entrei na roda", "entrei na roda", "dan\xE7ar", "sete namorados", "picol\xE9", "dedo do p\xE9"],
    inicio: ["Entrar na rodadan\xE7a mesmo sem saber os passos em 'Ai, Eu Entrei na Roda'! \u{1FA70}\u{1F923}"],
    explicacao_curta: ["A can\xE7\xE3o com as rimas e versos mais criativos:\n\nAi, eu entrei na roda\nAi, eu n\xE3o sei como se dan\xE7a\nAi, eu entrei na 'rodadan\xE7a'\nAi, eu n\xE3o sei dan\xE7ar\n\nSete e sete s\xE3o quatorze, com mais sete, vinte e um\nTenho sete namorados s\xF3 posso casar com um"],
    categoria: "Cantiga de Roda"
  },
  cantiga_21: {
    palavras_chave: ["canoa", "canoa virou", "maria", "remar", "peixinho", "nadar", "mar"],
    inicio: ["A canoa que virou por n\xE3o saber usar os remos em 'A Canoa Virou'! \u{1F6F6}\u{1F30A}"],
    explicacao_curta: ["Vamos salvar a Maria no fundo do mar com um peixinho:\n\nA canoa virou\nPor deix\xE1-la virar\nFoi por causa da Maria\nQue n\xE3o soube remar\n\nSe eu fosse um peixinho\nE soubesse nadar\nTirava a Maria\nDo fundo do mar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_22: {
    palavras_chave: ["rosa amarela", "a rosa amarela", "formosa", "bela", "len\xE7o", "enxugar", "despedida", "chorar"],
    inicio: ["Um len\xE7o para chorar a despedida da 'Rosa Amarela'! \u{1F49B}\u{1F339}"],
    explicacao_curta: ["Uma cantiga rom\xE2ntica e cheia de sotaque tradicional:\n\nOlha a Rosa amarela, Rosa\nT\xE3o Formosa, t\xE3o bela, Rosa\nOlha a Rosa amarela, Rosa\nT\xE3o Formosa, t\xE3o bela, Rosa\n\nI\xE1-i\xE1 meu len\xE7o, \xF4 I\xE1-i\xE1\nPara me enxugar, \xF4 I\xE1-i\xE1\nEsta despedida, \xF4 I\xE1-i\xE1\nJ\xE1 me fez chorar, \xF4 I\xE1-i\xE1"],
    categoria: "Cantiga de Roda"
  },
  cantiga_23: {
    palavras_chave: ["quem me ensinou a nadar", "nadar", "marinheiro", "peixinhos", "mar"],
    inicio: ["Aprender a flutuar com os peixes de \xE1gua salgada em 'Quem me Ensinou a Nadar'! \u{1F41F}\u2693"],
    explicacao_curta: ["Um hino das praias de todo o Nordeste cantado na roda:\n\nQuem me ensinou a nadar\nQuem me ensinou a nadar\n\nFoi, foi, marinheiro,\nFoi os peixinhos do mar\nFoi, foi, marinheiro,\nFoi os peixinhos do mar"],
    categoria: "Cantiga de Roda"
  },
  cantiga_24: {
    palavras_chave: ["sapo-cururu", "cururu", "rio", "canta", "frio", "rendinha", "casamento"],
    inicio: ["O sapo que canta no frio e sua esposa fazendo renda em 'Sapo-Cururu'! \u{1F438}\u{1F9F5}"],
    explicacao_curta: ["Cante no ritmo de palmas baixas:\n\nSapo-Cururu\nNa beira do rio\nQuando o sapo canta,\n\xD3 maninha,\n\xC9 que est\xE1 com frio\n\nA mulher do sapo\nDeve estar l\xE1 dentro\nFazendo rendinha,\n\xD3 maninha,\nPara o casamento"],
    categoria: "Cantiga de Roda"
  },
  cantiga_25: {
    palavras_chave: ["meu galinho", "perdi meu galinho", "galinho", "durmo", "jardim", "crista", "qui-ri-qui-qui"],
    inicio: ["A busca do galinho perdido no sert\xE3o em 'Meu Galinho'! \u{1F413}\u{1F335}"],
    explicacao_curta: ["Cante as aventuras e o cantar qui-ri-qui-qui no Cear\xE1:\n\nH\xE1 tr\xEAs noites que eu n\xE3o durmo, o-l\xE1-l\xE1!\nPois perdi o meu galinho o-l\xE1-l\xE1!\nCoitadinho, o-l\xE1-l\xE1!\nPobrezinho, o-l\xE1-l\xE1!\nEu perdi l\xE1 no jardim.\n\nEle \xE9 branco e amarelo, o-l\xE1-l\xE1!\nTem a crista vermelhinha, o-l\xE1-l\xE1!\nBate as asas, o-l\xE1-l\xE1!\nAbre o bico, o-l\xE1-l\xE1!\nEle faz qui-ri-qui-qui!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_26: {
    palavras_chave: ["marinheiro s\xF3", "marinheiro", "s\xF3", "navegar", "balan\xE7o", "navio", "mar"],
    inicio: ["O bamboleio do navio de \xE1gua e a saudade em 'Marinheiro S\xF3'! \u{1F6F3}\uFE0F\u2693"],
    explicacao_curta: ["Uma can\xE7\xE3o baiana cheia de ritmo para p\xE9s sincronizados:\n\nOi, marinheiro, marinheiro,\nMarinheiro s\xF3\nQuem te ensinou a navegar?\nMarinheiro s\xF3\nFoi o balan\xE7o do navio,\nMarinheiro s\xF3\nFoi o balan\xE7o do mar\nMarinheiro s\xF3."],
    categoria: "Cantiga de Roda"
  },
  cantiga_27: {
    palavras_chave: ["pezinho", "pezinho bem juntinho", "bota", "juntinho", "arrependeu"],
    inicio: ["Encaixar os pezinhos cal\xE7ados de m\xE3os dadas em 'O Pezinho'! \u{1F463}\u{1F920}"],
    explicacao_curta: ["Tradicional dan\xE7a sulista alegre de rodas cerradas:\n\nAi bota aqui\nAi bota aqui o seu pezinho\nSeu pezinho bem juntinho com o meu\nE depois n\xE3o v\xE1 dizer\nQue voc\xEA se arrependeu!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_28: {
    palavras_chave: ["vai ab\xF3bora", "ab\xF3bora", "mel\xE3o", "melancia", "doce", "cocadinha", "juquinha"],
    inicio: ["A feira com doce de cocada e a dan\xE7a do Juquinha em 'Vai Ab\xF3bora'! \u{1F349}\u{1F36C}"],
    explicacao_curta: ["Uma m\xFAsica ritmada e gostosa de vocalizar:\n\nVai ab\xF3bora vai mel\xE3o de mel\xE3o vai melancia\nVai jambo sinh\xE1, vai jambo sinh\xE1, vai doce, vai cocadinha\nQuem quiser aprender a dan\xE7ar, vai na casa do Juquinha\nEle pula, ele dan\xE7a, ele faz requebradinha."],
    categoria: "Cantiga de Roda"
  },
  cantiga_29: {
    palavras_chave: ["roda pi\xE3o", "pi\xE3o", "pi\xE3o entrou na roda", "bambeia", "sapateia", "fieira", "chap\xE9u"],
    inicio: ["O brinquedo de madeira girando forte no terreiro em 'Roda Pi\xE3o'! \u{1FA80}\u{1F300}"],
    explicacao_curta: ["Cante fazendo o gesto de girar com as m\xE3os:\n\nO Pi\xE3o entrou na roda, \xF3 pi\xE3o!\nRoda pi\xE3o, bambeia pi\xE3o!\nSapateia no terreiro, \xF3 pi\xE3o!\nMostra a tua figura, \xF3 pi\xE3o!\nFa\xE7a uma cortesia, \xF3 pi\xE3o!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_30: {
    palavras_chave: ["caranguejo", "caranguejo n\xE3o \xE9 peixe", "mar\xE9", "palma", "vazante"],
    inicio: ["Cantar batendo palmas e batendo os p\xE9s em 'Caranguejo N\xE3o \xE9 Peixe'! \u{1F980}\u{1F30A}"],
    explicacao_curta: ["Uma can\xE7\xE3o amada pelas crian\xE7as de todo o litoral:\n\nCaranguejo n\xE3o \xE9 peixe\nCaranguejo peixe \xE9\nCaranguejo n\xE3o \xE9 peixe\nNa vazante da mar\xE9.\n\nPalma, palma, palma,\nP\xE9, p\xE9, p\xE9\nCaranguejo s\xF3 \xE9 peixe, na vazante da mar\xE9!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_31: {
    palavras_chave: ["na loja do mestre andr\xE9", "mestre andr\xE9", "pianinho", "viol\xE3o", "flautinha", "tamborzinho", "tambor", "loja"],
    inicio: ["A loja recheada de barulhos de instrumentos musicais do 'Mestre Andr\xE9'! \u{1F3B8}\u{1F941}\u{1F579}\uFE0F"],
    explicacao_curta: ["A can\xE7\xE3o acumulativa de imitar instrumentos mais divertida:\n\nFoi na loja do Mestre Andr\xE9\nQue eu comprei um pianinho,\nPlim, plim, plim, um pianinho\n\nAi ol\xE9, ai ol\xE9!\nFoi na loja do Mestre Andr\xE9!\n\nFoi na loja do Mestre Andr\xE9\nQue eu comprei um viol\xE3o,\nD\xE3o, d\xE3o, d\xE3o, um viol\xE3o\nPlim, plim, plim, um pianinho"],
    categoria: "Cantiga de Roda"
  },
  cantiga_32: {
    palavras_chave: ["meu boi morreu", "boi", "vaca", "curar", "piau\xED", "vaca", "lim\xE3o", "urucubaca"],
    inicio: ["A cura da urucubaca e a busca de rebanhos no Nordeste com 'Meu Boi Morreu'! \u{1F402}\u{1F34B}"],
    explicacao_curta: ["Divertida cantiga de folclore e rimas r\xE1pidas:\n\nO meu boi morreu\nO que ser\xE1 de mim\nMande buscar outro, oh Morena\nL\xE1 no Piau\xED\n\nO meu boi morreu\nO que ser\xE1 da vaca\nPinga com lim\xE3o, oh Morena\nCura urucubaca."],
    categoria: "Cantiga de Roda"
  },
  cantiga_33: {
    palavras_chave: ["tutu maramb\xE1", "tutu", "cuca", "bel\xE9m", "menino"],
    inicio: ["Assustar o monstrinho Tutu e embalar o sono em 'Tutu Maramb\xE1'! \u{1F479}\u{1F319}"],
    explicacao_curta: ["Um doce acalanto de ninar com a Cuca e hist\xF3rias de ro\xE7a:\n\nTutu Maramb\xE1 n\xE3o venhas mais c\xE1\nQue o pai do menino te manda matar\n\nDurma nen\xE9m, que a Cuca logo vem\nPapai est\xE1 na ro\xE7a e Mam\xE3ezinha em Bel\xE9m"],
    categoria: "Cantiga de Roda"
  },
  cantiga_34: {
    palavras_chave: ["voc\xEA gosta de mim?", "voce gosta de mim", "menina", "pap\xE9is", "paix\xE3o"],
    inicio: ["O rom\xE2ntico pedido de casamento e namorico em 'Voc\xEA Gosta de Mim, \xD3 Menina?'! \u{1F48D}\u{1F33A}"],
    explicacao_curta: ["Rimas f\xE1ceis para cantar na roda com flertes de brincadeira:\n\nVoc\xEA gosta de mim, \xF3 menina?\nEu tamb\xE9m de voc\xEA, \xF3 menina\nVou pedir a seu pai, \xF3 menina,\nPara casar com voc\xEA, \xF3 menina\n\nSe ele disser que sim, \xF3 menina,\nTratarei dos pap\xE9is, \xF3 menina,\nSe ele disser que n\xE3o, \xF3 menina,\nMorrerei de paix\xE3o."],
    categoria: "Cantiga de Roda"
  },
  cantiga_35: {
    palavras_chave: ["vamos maninha", "maninha", "praia", "remador", "senhor", "barco"],
    inicio: ["Ver a barca nova deslizar nas praias do c\xE9u em 'Vamos Maninha'! \u26F5\u{1F305}"],
    explicacao_curta: ["Can\xE7\xE3o doce de marinharia e anjinhos nos remos:\n\nVamos Maninha vamos,\nL\xE1 na praia passear\nVamos ver a barca nova que do c\xE9u caiu do mar\n\nNossa Senhora est\xE1 dentro,\nOs anjinhos a remar\nRema rema remador, que este barco \xE9 do Senhor"],
    categoria: "Cantiga de Roda"
  },
  cantiga_36: {
    palavras_chave: ["que \xE9 de valentim", "valentim", "rapaz", "moreninha", "par"],
    inicio: ["A disputa do par mais elegante na roda em 'Que \xE9 de Valentim'! \u{1F64B}\u200D\u2642\uFE0F\u{1F483}"],
    explicacao_curta: ["Uma marchinha curtinha e folcl\xF3rica:\n\nQue \xE9 de Valentim ? Valentim Tr\xE1s Tr\xE1s\nQue \xE9 de Valentim ? \xC9 um bom rapaz\nQue \xE9 de Valentim ? Valentim sou eu!\nDeixa a moreninha, que esse par \xE9 meu!"],
    categoria: "Cantiga de Roda"
  },
  cantiga_37: {
    palavras_chave: ["na bahia tem", "bahia", "coco", "beira da praia", "vint\xE9m"],
    inicio: ["Vender coco por um tost\xE3o mole na 'Na Bahia Tem'! \u{1F965}\u{1F3DD}\uFE0F"],
    explicacao_curta: ["Cantiga com ditados populares sobre persist\xEAncia:\n\nNa Bahia tem, tem tem tem\nCoco de vint\xE9m, \xF4 Ia-i\xE1\nNa Bahia tem!\n\nNa beira da praia,\nEu vou, eu quero ver\nNa beira da praia,\nS\xF3 me caso com voc\xEA\n\n\xC1gua tanto deu na pedra,\nQue at\xE9 fez amolecer,\nNa beira da praia."],
    categoria: "Cantiga de Roda"
  },
  cantiga_38: {
    palavras_chave: ["a gatinha parda", "gatinha parda", "gatinha", "fugiu", "miau", "pica-pau", "bruxa"],
    inicio: ["Quem ter\xE1 levado a gatinha manhosa de miado fofo em 'A Gatinha Parda'? \u{1F431}\u{1FA84}"],
    explicacao_curta: ["Eis a brincadeira de procurar o bicho sumido:\n\nA gatinha parda\nA minha gatinha parda, que em Janeiro me fugiu\nOnde est\xE1 minha gatinha,\nVoc\xEA sabe, voc\xEA sabe, voc\xEA viu?\n\nEu n\xE3o vi sua gatinha, mas ouvi o seu miau\nQuem roubou sua gatinha\nFoi a bruxa, foi a bruxa pica-pau."],
    categoria: "Cantiga de Roda"
  },
  cantiga_39: {
    palavras_chave: ["balaio", "cabe\xE7a de balaio", "dependurado", "algod\xE3o", "costura", "cora\xE7\xE3o"],
    inicio: ["Carregar algod\xE3o e segurar a costura na cintura em 'Balaio'! \u{1F9FA}\u{1F9F5}"],
    explicacao_curta: ["Versos de arruma\xE7\xE3o e de namoricos populares de festividades caipiras:\n\nEu queria ser balaio\nBalaio eu queria ser\nPra ficar dependurado\nNa cintura de \u201Coc\xEA\u201D\n\nBalaio meu bem, balaio sinh\xE1\nBalaio do cora\xE7\xE3o\nMo\xE7a que n\xE3o tem balaio, sinh\xE1\nBota a costura no ch\xE3o"],
    categoria: "Cantiga de Roda"
  },
  cantiga_40: {
    palavras_chave: ["a barraquinha", "barraquinha", "sinhazinha", "comprar", "moleque", "aipim"],
    inicio: ["Comprar del\xEDcias quentes na feira em 'A Barraquinha'! \u{1F95E}\u{1F34D}"],
    explicacao_curta: ["Apetitoso ritmo de quitutes populares:\n\nVem, vem, vem sinhazinha\nVem, vem para provar\nVem, vem, vem Sinhazinha\nNa barraquinha comprar\n\nP\xE9 de moleque queimado\nCana, aipim, batatinha\n\xD3 quanta coisa gostosa\nPara voc\xEA Sinhazinha."],
    categoria: "Cantiga de Roda"
  },
  cantiga_41: {
    palavras_chave: ["boi barroso", "pitanga", "couro", "jacar\xE9", "rastro"],
    inicio: ["La\xE7ar o boi listrado com as cordas do jacar\xE9 em 'Boi Barroso'! \u{1F402}\u{1F33E}"],
    explicacao_curta: ["Uma cantiga de boiadas e areias do interior:\n\nEu mandei fazer um la\xE7o do couro do jacar\xE9\nPra la\xE7ar o boi barroso, num cavalo pangar\xE9\n\nMeu Boi Barroso, meu Boi Pitanga\nO teu lugar, ai, \xE9 l\xE1 na cana\nAdeus menina, eu vou me embora\nN\xE3o sou daqui,ai, sou l\xE1 de fora"],
    categoria: "Cantiga de Roda"
  },
  cantiga_42: {
    palavras_chave: ["o pobre cego", "pobre cego", "cego", "pedir", "ensinar", "caminho"],
    inicio: ["Pedir p\xE3o, vinho e achar o rumo dos olhos na caridade de 'O Pobre Cego'! \u{1F956}\u{1F377}"],
    explicacao_curta: ["Tradicional balada portuguesa de acalento e respeito:\n\nMinha M\xE3e acorde, de tanto dormir\nVenha ver o cego, Vida Minha, cantar e pedir\nSe ele canta e pede, de-lhe p\xE3o e vinho\nMande o pobre cego, Vida Minha, seguir seu caminho\nN\xE3o quero teu p\xE3o, nem tamb\xE9m teu vinho\nQuero s\xF3 que a minha vida, Vida Minha, me ensine o caminho"],
    categoria: "Cantiga de Roda"
  },
  cantiga_43: {
    palavras_chave: ["s\xE3o jo\xE3o da r\xE3o", "gaita", "anjos", "terra", "baile", "xale", "parab\xE9ns", "renda", "vint\xE9ns"],
    inicio: ["Cantar no ritmo da gaita tocada na terra e nos c\xE9us em 'S\xE3o Jo\xE3o da R\xE3o'! \u{1F3B7}\u{1F3B9}"],
    explicacao_curta: ["Uma cantiga cheia de rimas inusitadas de baile e chuva:\n\nS\xE3o Jo\xE3o Da Ra R\xE3o\nTem uma gaita-ra-rai-ta\nQue quando toca-ra-roca\nBate nela\n\nTodos os anja-ra-ran-jos\nTocam gaita-ra-rai-ta\nTocam gaita-ra-rai-ta\nAqui na terra\n\nMaria tu vais ao baile, tu \u201Cleva\u201D o xale\nQue vai chover\nE depois de madrugada, toda molhada\nTu vais morrer"],
    categoria: "Cantiga de Roda"
  },
  // --- APOIO EMOCIONAL ---
  raiva: {
    tema: "apoio_emocional",
    subtema: "raiva",
    palavras_chave: ["raiva", "bravo", "brava", "irritado", "irritada"],
    inicio: [
      "Sentir raiva acontece com todo mundo \u{1F4A2}",
      "Parece que algo deixou voc\xEA muito irritado."
    ],
    acolhimento: [
      "Os sentimentos existem para mostrar o que estamos vivendo.",
      "Voc\xEA pode sentir raiva sem machucar ningu\xE9m."
    ],
    interacao: [
      "Quer me contar o que aconteceu?",
      "Quer tentar respirar fundo comigo?"
    ],
    atividade: [
      "Desenhar o que est\xE1 sentindo pode ajudar \u{1F3A8}",
      "Voc\xEA pode contar at\xE9 10 bem devagar."
    ],
    final: [
      "A calma vai chegando aos poucos \u{1F33F}"
    ],
    emocao: "controle_emocional",
    nivel: "leve"
  },
  alegria: {
    tema: "apoio_emocional",
    subtema: "alegria",
    palavras_chave: ["feliz", "felicidade", "alegre", "animado", "animada"],
    inicio: [
      "Que bom ver voc\xEA feliz hoje \u{1F31E}",
      "A alegria deixa tudo mais colorido \u{1F308}"
    ],
    acolhimento: [
      "Momentos felizes merecem ser celebrados.",
      "Sua felicidade pode iluminar o dia de outras pessoas."
    ],
    interacao: [
      "O que deixou voc\xEA feliz hoje?",
      "Quer transformar essa alegria em um desenho?"
    ],
    atividade: [
      "Crie uma arte usando cores alegres \u{1F3A8}",
      "Fa\xE7a uma lista de coisas que fazem voc\xEA sorrir."
    ],
    final: [
      "Espalhar alegria deixa o mundo mais bonito \u2728"
    ],
    emocao: "alegria",
    nivel: "leve"
  },
  medo: {
    tema: "apoio_emocional",
    subtema: "medo",
    palavras_chave: ["medo", "assustado", "assustada", "com medo"],
    inicio: [
      "Sentir medo \xE9 algo normal \u{1F49B}",
      "\xC0s vezes algumas situa\xE7\xF5es assustam mesmo."
    ],
    acolhimento: [
      "Voc\xEA n\xE3o est\xE1 sozinho.",
      "Muitas pessoas tamb\xE9m sentem medo em alguns momentos."
    ],
    interacao: [
      "Quer conversar sobre o que est\xE1 assustando voc\xEA?",
      "Quer imaginar um lugar seguro e tranquilo?"
    ],
    atividade: [
      "Desenhar o medo pode ajudar a entend\xEA-lo \u{1F3A8}",
      "Respirar devagar ajuda o corpo a relaxar."
    ],
    final: [
      "Coragem n\xE3o \xE9 n\xE3o sentir medo, \xE9 seguir mesmo assim \u{1F31F}"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  inseguranca: {
    tema: "apoio_emocional",
    subtema: "inseguranca",
    palavras_chave: ["inseguro", "insegura", "duvida de mim", "sem confianca", "sem confian\xE7a"],
    inicio: [
      "\xC0s vezes a gente duvida de si mesmo \u{1F331}",
      "Nem sempre \xE9 f\xE1cil acreditar nas pr\xF3prias capacidades."
    ],
    acolhimento: [
      "Voc\xEA pode aprender no seu tempo.",
      "Errar tamb\xE9m faz parte do aprendizado."
    ],
    interacao: [
      "Quer me contar o que deixou voc\xEA inseguro?",
      "Voc\xEA consegue lembrar de algo que j\xE1 fez bem?"
    ],
    atividade: [
      "Fa\xE7a um desenho mostrando algo que voc\xEA gosta em si mesmo \u{1F3A8}"
    ],
    final: [
      "Cada pequeno passo j\xE1 \xE9 uma conquista \u2728"
    ],
    emocao: "encorajamento",
    nivel: "leve"
  },
  timidez: {
    tema: "apoio_emocional",
    subtema: "timidez",
    palavras_chave: ["timido", "timida", "vergonha", "tenho vergonha"],
    inicio: [
      "Ser t\xEDmido n\xE3o \xE9 um problema \u{1F33F}",
      "Cada pessoa tem seu jeito de se expressar."
    ],
    acolhimento: [
      "Voc\xEA pode falar no seu tempo.",
      "Pequenos passos tamb\xE9m s\xE3o importantes."
    ],
    interacao: [
      "Existe algu\xE9m com quem voc\xEA se sente mais confort\xE1vel?",
      "Quer conversar mais um pouquinho comigo?"
    ],
    atividade: [
      "Desenhe um lugar onde voc\xEA se sente seguro \u2728"
    ],
    final: [
      "Sua voice merece ser ouvida \u{1F49B}"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  frustracao: {
    tema: "apoio_emocional",
    subtema: "frustracao",
    palavras_chave: ["frustrado", "frustrada", "nao consegui", "n\xE3o consegui", "deu errado"],
    inicio: [
      "Nem sempre as coisas saem como queremos \u{1F327}\uFE0F",
      "Errar pode ser dif\xEDcil \xE0s vezes."
    ],
    acolhimento: [
      "Todo aprendizado tem desafios.",
      "Voc\xEA n\xE3o precisa acertar tudo de primeira."
    ],
    interacao: [
      "Quer tentar de novo depois de descansar um pouco?",
      "Quer me contar o que deu errado?"
    ],
    atividade: [
      "Fa\xE7a um desenho mostrando algo que voc\xEA conseguiu aprender \u{1F3A8}"
    ],
    final: [
      "Cada tentativa ensina algo novo \u{1F331}"
    ],
    emocao: "encorajamento",
    nivel: "leve"
  },
  solidao: {
    tema: "apoio_emocional",
    subtema: "solidao",
    palavras_chave: ["sozinho", "sozinha", "solidao", "solid\xE3o", "sem amigos"],
    inicio: [
      "Se sentir sozinho pode ser muito dif\xEDcil \u{1F49B}",
      "\xC0s vezes a gente sente falta de companhia."
    ],
    acolhimento: [
      "Voc\xEA merece carinho e amizade.",
      "Seus sentimentos s\xE3o importantes."
    ],
    interacao: [
      "Existe algu\xE9m de confian\xE7a com quem voc\xEA gosta de conversar?",
      "Quer me contar como est\xE1 se sentindo?"
    ],
    atividade: [
      "Desenhe pessoas ou lugares que fazem voc\xEA se sentir bem \u{1F308}"
    ],
    final: [
      "Conex\xF5es verdadeiras podem nascer aos poucos \u{1F331}"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  amizade: {
    tema: "apoio_emocional",
    subtema: "amizade",
    palavras_chave: ["amizade", "amigo", "amiga", "colega"],
    inicio: [
      "Amizade \xE9 algo muito especial \u{1F49B}",
      "Os amigos podem tornar os dias mais felizes."
    ],
    acolhimento: [
      "Um bom amigo escuta e respeita.",
      "Amizades verdadeiras crescem com cuidado."
    ],
    interacao: [
      "O que voc\xEA mais gosta de fazer com seus amigos?",
      "Voc\xEA j\xE1 ajudou algu\xE9m hoje?"
    ],
    atividade: [
      "Desenhe um momento divertido com um amigo \u{1F3A8}"
    ],
    final: [
      "A amizade deixa a vida mais colorida \u{1F308}"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  respeito: {
    tema: "apoio_emocional",
    subtema: "respeito",
    palavras_chave: ["respeito", "respeitar", "tratar bem", "educacao", "educa\xE7\xE3o"],
    inicio: [
      "Respeitar \xE9 cuidar das pessoas \u{1F33F}",
      "Cada pessoa merece ser tratada com aten\xE7\xE3o e carinho."
    ],
    acolhimento: [
      "As diferen\xE7as tornam o mundo mais bonito.",
      "Ouvir e compreender os outros \xE9 importante."
    ],
    interacao: [
      "Como voc\xEA demonstra respeito no seu dia a dia?",
      "Voc\xEA j\xE1 ajudou algu\xE9m hoje?"
    ],
    atividade: [
      "Fa\xE7a um desenho mostrando atitudes gentis \u{1F49B}"
    ],
    final: [
      "Pequenas atitudes podem transformar o mundo \u2728"
    ],
    emocao: "harmonia",
    nivel: "leve"
  },
  ansiedade: {
    tema: "apoio_emocional",
    subtema: "ansiedade",
    palavras_chave: ["ansiedade", "ansioso", "ansiosa", "preocupado", "preocupada", "nervoso", "nervosa"],
    inicio: [
      "\xC0s vezes nosso cora\xE7\xE3o fica acelerado \u{1F49B}",
      "Parece que sua mente est\xE1 cheia de pensamentos."
    ],
    acolhimento: [
      "Isso acontece com muitas pessoas.",
      "Voc\xEA n\xE3o precisa enfrentar isso sozinho."
    ],
    explicacao_curta: [
      "A ansiedade pode deixar nosso corpo e mente agitados."
    ],
    interacao: [
      "Quer respirar fundo comigo bem devagar?",
      "Quer me contar o que est\xE1 preocupando voc\xEA?"
    ],
    atividade: [
      "Imagine um lugar tranquilo da natureza \u{1F33F}",
      "Voc\xEA pode desenhar como sua mente est\xE1 se sentindo."
    ],
    final: [
      "Os sentimentos passam como nuvens no c\xE9u \u2601\uFE0F"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  tristeza: {
    tema: "apoio_emocional",
    subtema: "tristeza",
    palavras_chave: ["triste", "tristeza", "triste demais", "chateado", "chateada"],
    inicio: [
      "Sinto muito que voc\xEA esteja triste \u{1F49B}",
      "\xC0s vezes nosso cora\xE7\xE3o fica pesado."
    ],
    acolhimento: [
      "Ficar triste faz parte da vida.",
      "Seus sentimentos s\xE3o importantes."
    ],
    interacao: [
      "Quer me contar o que aconteceu?",
      "Quer conversar mais um pouquinho?"
    ],
    atividade: [
      "Desenhar sentimentos pode ajudar \u{1F3A8}",
      "Voc\xEA pode ouvir uma m\xFAsica tranquila."
    ],
    final: [
      "Mesmo os dias nublados acabam passando \u{1F324}\uFE0F"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  bullying: {
    tema: "apoio_emocional",
    subtema: "bullying",
    palavras_chave: ["bullying", "zoacao", "zoando", "me xingaram", "me chamaram"],
    inicio: [
      "Ningu\xE9m merece ser tratado com desrespeito \u{1F49B}"
    ],
    acolhimento: [
      "O que est\xE1 acontecendo n\xE3o \xE9 certo.",
      "Voc\xEA merece respeito e cuidado."
    ],
    explicacao_curta: [
      "Bullying machuca sentimentos e precisa ser levado a s\xE9rio."
    ],
    interacao: [
      "Existe algum adulto de confian\xE7a com quem voc\xEA possa conversar?",
      "Quer me contar melhor o que aconteceu?"
    ],
    atividade: [
      "Respirar fundo pode ajudar quando o cora\xE7\xE3o fica apertado \u{1F33F}"
    ],
    final: [
      "Pedir ajuda \xE9 um ato de coragem \u{1F331}"
    ],
    emocao: "protecao",
    nivel: "medio"
  },
  solidao_avancada: {
    tema: "emocoes_avancadas",
    subtema: "solidao",
    palavras_chave: ["sozinho", "sozinha", "solidao", "sem amigos"],
    inicio: [
      "\xC0s vezes a solid\xE3o pode deixar o cora\xE7\xE3o silencioso \u{1F319}"
    ],
    explicacao_curta: [
      "Muitas pessoas sentem solid\xE3o em alguns momentos."
    ],
    explicacao_aprofundada: [
      "Conversar, desenhar, brincar ou procurar pessoas de confian\xE7a pode ajudar a trazer acolhimento."
    ],
    curiosidade: [
      "At\xE9 momentos silenciosos podem ser preenchidos com criatividade \u{1F3A8}"
    ],
    interacao: [
      "Voc\xEA gostaria de conversar sobre como est\xE1 se sentindo?"
    ],
    atividade: [
      "Desenhe um lugar onde voc\xEA se sentiria acolhido \u{1F308}"
    ],
    final: [
      "Voc\xEA merece companhia, cuidado e escuta \u2728"
    ],
    emocao: "acolhimento",
    nivel: "medio"
  },
  ciumes: {
    tema: "emocoes_avancadas",
    subtema: "ciumes",
    palavras_chave: ["ciumes", "com ciumes", "inveja"],
    inicio: [
      "Os ci\xFAmes aparecem quando temos medo de perder aten\xE7\xE3o \u{1F4AD}"
    ],
    explicacao_curta: [
      "Esse sentimento pode acontecer com muitas pessoas."
    ],
    explicacao_aprofundada: [
      "Conversar com calma e entender os pr\xF3prios sentimentos ajuda bastante."
    ],
    curiosidade: [
      "Os sentimentos podem mudar quando compartilhamos o que pensamos \u{1F33F}"
    ],
    interacao: [
      "Voc\xEA gostaria de contar o que deixou voc\xEA assim?"
    ],
    atividade: [
      "Desenhe coisas que fazem voc\xEA se sentir especial \u2728"
    ],
    final: [
      "Cada pessoa possui seu pr\xF3prio valor \u{1F31F}"
    ],
    emocao: "reflexao",
    nivel: "medio"
  },
  culpa: {
    tema: "emocoes_avancadas",
    subtema: "culpa",
    palavras_chave: ["culpa", "me sinto culpado", "me sinto culpada"],
    inicio: [
      "Sentir culpa pode ser um sentimento dif\xEDcil \u{1F327}\uFE0F"
    ],
    explicacao_curta: [
      "\xC0s vezes erramos e aprendemos com isso."
    ],
    explicacao_aprofundada: [
      "Pedir desculpas, conversar e tentar melhorar ajuda a seguir em frente."
    ],
    curiosidade: [
      "Aprender tamb\xE9m faz parte dos erros \u2728"
    ],
    interacao: [
      "Voc\xEA gostaria de falar sobre o que aconteceu?"
    ],
    atividade: [
      "Escreva ou desenhe algo que voc\xEA aprendeu \u{1F331}"
    ],
    final: [
      "As pessoas podem crescer e mudar aos poucos \u{1F308}"
    ],
    emocao: "aprendizado",
    nivel: "medio"
  },
  saudade: {
    tema: "emocoes_avancadas",
    subtema: "saudade",
    palavras_chave: ["saudade", "sentindo falta", "com saudades"],
    inicio: [
      "A saudade aparece quando algo ou algu\xE9m faz falta \u{1F49B}"
    ],
    explicacao_curta: [
      "Ela mostra que algo foi importante para voc\xEA."
    ],
    explicacao_aprofundada: [
      "Lembran\xE7as, desenhos e conversas podem ajudar a guardar momentos especiais."
    ],
    curiosidade: [
      "A palavra saudade existe em portugu\xEAs e \xE9 conhecida no mundo inteiro \u{1F30E}"
    ],
    interacao: [
      "Do que voc\xEA sente mais saudade?"
    ],
    atividade: [
      "Desenhe uma lembran\xE7a feliz \u2728"
    ],
    final: [
      "As boas mem\xF3rias podem continuar no cora\xE7\xE3o \u{1F308}"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  decepcao: {
    tema: "emocoes_avancadas",
    subtema: "decepcao",
    palavras_chave: ["decepcao", "decepcionado", "decepcionada"],
    inicio: [
      "A decep\xE7\xE3o aparece quando algo n\xE3o acontece como esper\xE1vamos \u{1F327}\uFE0F"
    ],
    explicacao_curta: [
      "Esse sentimento pode ser triste e confuso."
    ],
    explicacao_aprofundada: [
      "Com o tempo, novas experi\xEAncias e conversas ajudam a entender melhor as situa\xE7\xF5es."
    ],
    curiosidade: [
      "At\xE9 momentos dif\xEDceis podem ensinar algo \u{1F331}"
    ],
    interacao: [
      "Voc\xEA gostaria de contar o que aconteceu?"
    ],
    atividade: [
      "Transforme um rabisco em um desenho bonito \u{1F3A8}"
    ],
    final: [
      "Novas possibilidades podem surgir depois de dias dif\xEDceis \u2728"
    ],
    emocao: "superacao",
    nivel: "medio"
  },
  orgulho: {
    tema: "emocoes_avancadas",
    subtema: "orgulho",
    palavras_chave: ["orgulho", "orgulhoso", "orgulhosa"],
    inicio: [
      "Sentir orgulho pode trazer alegria e confian\xE7a \u{1F31F}"
    ],
    explicacao_curta: [
      "Reconhecer suas conquistas \xE9 importante."
    ],
    explicacao_aprofundada: [
      "Cada pequeno avan\xE7o pode mostrar o quanto voc\xEA est\xE1 aprendendo e crescendo."
    ],
    curiosidade: [
      "Grandes mudan\xE7as come\xE7am com pequenos passos \u2728"
    ],
    interacao: [
      "Do que voc\xEA sente orgulho hoje?"
    ],
    atividade: [
      "Desenhe algo que voc\xEA aprendeu a fazer \u{1F3A8}"
    ],
    final: [
      "Valorizar suas conquistas ajuda a fortalecer a confian\xE7a \u{1F308}"
    ],
    emocao: "confianca",
    nivel: "leve"
  },
  vergonha: {
    tema: "emocoes_avancadas",
    subtema: "vergonha",
    palavras_chave: ["vergonha", "envergonhado", "envergonhada"],
    inicio: [
      "A vergonha pode deixar a gente mais quietinho \u{1F331}"
    ],
    explicacao_curta: [
      "Esse sentimento acontece com muitas pessoas."
    ],
    explicacao_aprofundada: [
      "Falar aos pontos e confiar em pessoas gentis pode ajudar a diminuir a vergonha."
    ],
    curiosidade: [
      "At\xE9 artistas famosos j\xE1 sentiram vergonha \u{1F3AD}"
    ],
    interacao: [
      "O que faz voc\xEA se sentir mais confort\xE1vel?"
    ],
    atividade: [
      "Desenhe um lugar tranquilo e seguro \u{1F308}"
    ],
    final: [
      "Voc\xEA pode se expressar no seu pr\xF3prio tempo \u2728"
    ],
    emocao: "acolhimento",
    nivel: "leve"
  },
  esperanca: {
    tema: "emocoes_avancadas",
    subtema: "esperanca",
    palavras_chave: ["esperanca", "esperan\xE7oso", "esperan\xE7osa"],
    inicio: [
      "A esperan\xE7a ajuda a imaginar dias melhores \u{1F324}\uFE0F"
    ],
    explicacao_curta: [
      "Ela pode trazer coragem e motiva\xE7\xE3o."
    ],
    explicacao_aprofundada: [
      "Mesmo quando algo parece dif\xEDcil, continuar acreditando pode ajudar a seguir em frente."
    ],
    curiosidade: [
      "Muitas hist\xF3rias e m\xFAsicas falam sobre esperan\xE7a \u2728"
    ],
    interacao: [
      "O que faz voc\xEA sentir esperan\xE7a?"
    ],
    atividade: [
      "Desenhe como imagina um dia feliz \u{1F308}"
    ],
    final: [
      "Pequenas luzes podem iluminar caminhos grandes \u{1F31F}"
    ],
    emocao: "inspiracao",
    nivel: "leve"
  },
  gratidao: {
    tema: "emocoes_avancadas",
    subtema: "gratidao",
    palavras_chave: ["gratidao", "grato", "grata", "agradecido"],
    inicio: [
      "A gratid\xE3o ajuda a perceber coisas boas do dia \u{1F33B}"
    ],
    explicacao_curta: [
      "Agradecer pode fortalecer sentimentos positivos."
    ],
    explicacao_aprofundada: [
      "Pequenos momentos, amizades e conquistas podem trazer sensa\xE7\xE3o de carinho e alegria."
    ],
    curiosidade: [
      "Muitas pessoas gostam de escrever coisas pelas quais s\xE3o gratas \u2728"
    ],
    interacao: [
      "O que deixou seu dia mais especial hoje?"
    ],
    atividade: [
      "Desenhe algo pelo qual voc\xEA sente gratid\xE3o \u{1F3A8}"
    ],
    final: [
      "Pequenos momentos podem ter grande valor \u{1F308}"
    ],
    emocao: "carinho",
    nivel: "leve"
  },
  empatia: {
    tema: "emocoes_avancadas",
    subtema: "empatia",
    palavras_chave: ["empatia", "compreender os outros", "ajudar pessoas"],
    inicio: [
      "A empatia \xE9 tentar entender os sentimentos das outras pessoas \u{1F91D}"
    ],
    explicacao_curta: [
      "Ela ajuda a criar rela\xE7\xF5es mais gentis."
    ],
    explicacao_aprofundada: [
      "Escutar, respeitar e acolher os sentimentos dos outros fortalece amizades e conviv\xEAncia."
    ],
    curiosidade: [
      "A gentileza pode melhorar o dia de algu\xE9m \u2728"
    ],
    interacao: [
      "Como voc\xEA ajuda algu\xE9m quando percebe que est\xE1 triste?"
    ],
    atividade: [
      "Desenhe atitudes gentis entre amigos \u{1F3A8}"
    ],
    final: [
      "Compreender os outros deixa o mundo mais acolhedor \u{1F30E}"
    ],
    emocao: "gentileza",
    nivel: "leve"
  },
  // --- TÉCNICAS ARTÍSTICAS ---
  o_que_e_arte: {
    tema: "artes_visuais",
    subtema: "conceitos_basicos",
    palavras_chave: ["o que \xE9 arte", "significado de arte", "defini\xE7\xE3o de arte", "para que serve a arte", "o que significa arte"],
    inicio: ["Arte \xE9 tudo que a gente cria com imagina\xE7\xE3o e sentimento \u{1F3A8}", "Arte \xE9 uma forma de expressar ideias, emo\xE7\xF5es e beleza \u2728"],
    explicacao_curta: ["A arte pode ser pintura, desenho, m\xFAsica, dan\xE7a, teatro, escultura, fotografia e muito mais!"],
    explicacao_aprofundada: ["Desde as cavernas, os humanos fazem arte para contar hist\xF3rias, registrar momentos, sentir alegria e compartilhar sentimentos. N\xE3o existe jeito certo ou errado de fazer arte \u2013 o importante \xE9 criar com o cora\xE7\xE3o."],
    curiosidade: ["As pinturas rupestres nas cavernas t\xEAm mais de 30 mil anos e s\xE3o consideradas as primeiras formas de arte da humanidade \u{1F3FA}"],
    interacao: ["Que tipo de arte voc\xEA mais gosta de fazer ou ver? \u{1F58C}\uFE0F", "Se voc\xEA pudesse criar qualquer obra de arte, o que seria?"],
    atividade: ["Desenhe algo que represente sua alegria hoje \u{1F308}", "Crie uma pequena escultura usando massa de modelagem ou argila."],
    final: ["A arte est\xE1 em toda parte \u2013 em um desenho, uma m\xFAsica, uma dan\xE7a ou at\xE9 na natureza \u{1F33B}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  desenho_basico: {
    tema: "arte_tecnicas",
    subtema: "desenho_basico",
    palavras_chave: ["como desenhar", "desenhar", "aprender desenho", "t\xE9cnica desenho", "dica desenho"],
    inicio: ["Todo desenho come\xE7a com formas simples \u{1F3A8}", "Desenhar \xE9 como montar um quebra-cabe\xE7a de formas \u2728"],
    explicacao_curta: ["C\xEDrculos, quadrados e tri\xE2ngulos ajudam a criar muitos desenhos."],
    explicacao_aprofundada: ["Muitos artistas come\xE7am desenhando formas b\xE1sicas antes de adicionar detalhes. Isso ajuda o desenho a ficar mais organizado."],
    curiosidade: ["At\xE9 grandes artistas usam formas simples para come\xE7ar seus desenhos \u{1F58D}\uFE0F"],
    interacao: ["Quer tentar desenhar um gatinho comigo? \u{1F431}", "Qual animal voc\xEA gostaria de aprender a desenhar?"],
    atividade: ["Desenhe um c\xEDrculo para a cabe\xE7a e dois tri\xE2ngulos para as orelhas \u270F\uFE0F", "Crie um personagem usando apenas formas geom\xE9tricas."],
    final: ["Cada desenho come\xE7a com um pequeno tra\xE7o \u{1F308}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  pintura_digital: {
    tema: "arte_tecnicas",
    subtema: "pintura_digital",
    palavras_chave: ["pintura digital", "desenho no computador", "tablet", "app desenho", "programa desenho"],
    inicio: ["Pintura digital \xE9 criar arte usando tecnologia \u{1F4BB}\u{1F3A8}", "Desenhar no tablet pode ser muito divertido \u2728"],
    explicacao_curta: ["A pintura digital usa aplicativos e telas para desenhar e colorir."],
    explicacao_aprofundada: ["Muitos artistas usam computadores e tablets para criar ilustra\xE7\xF5es, anima\xE7\xF5es e pinturas digitais."],
    curiosidade: ["Existem aplicativos gratuitos para desenhar digitalmente \u{1F4F1}"],
    interacao: ["Voc\xEA prefere desenhar no papel ou no tablet?", "Qual ferramenta digital voc\xEA gostaria de experimentar?"],
    atividade: ["Crie um desenho usando apenas formas simples no computador \u{1F4BB}", "Experimente desenhar usando diferentes pinc\xE9is digitais."],
    final: ["Arte pode nascer tanto no papel quanto na tela \u{1F31F}"],
    emocao: "exploracao",
    nivel: "leve"
  },
  aquarela: {
    tema: "arte_tecnicas",
    subtema: "aquarela",
    palavras_chave: ["aquarela", "tinta aguada", "pintura molhada", "efeito molhado"],
    inicio: ["A aquarela parece uma dan\xE7a entre \xE1gua e tinta \u{1F4A7}\u{1F3A8}", "As cores da aquarela ficam suaves e leves \u{1F308}"],
    explicacao_curta: ["A aquarela mistura tinta e \xE1gua para criar efeitos delicados."],
    explicacao_aprofundada: ["A quantidade de \xE1gua muda o jeito que a tinta se espalha no papel, criando manchas e misturas bonitas."],
    curiosidade: ["O papel usado na aquarela costuma ser mais grosso para aguentar a \xE1gua."],
    interacao: ["Voc\xEA gostaria de pintar uma paisagem com aquarela?", "Qual cor voc\xEA mais usaria in uma pintura aquarelada?"],
    atividade: ["Experimente fazer um degrad\xEA usando bastante \xE1gua \u{1F30A}", "Misture duas cores e observe a transforma\xE7\xE3o."],
    final: ["Na aquarela, as cores parecem flutuar no papel \u2601\uFE0F"],
    emocao: "leveza",
    nivel: "leve"
  },
  giz_pastel: {
    tema: "arte_tecnicas",
    subtema: "giz_pastel",
    palavras_chave: ["giz pastel", "pastel seco", "pintura pastel", "giz de cera"],
    inicio: ["O giz pastel cria desenhos macios e coloridos \u{1F9F8}\u{1F3A8}", "As cores do pastel podem parecer fuma\xE7a colorida \u2728"],
    explicacao_curta: ["O giz pastel \xE9 uma t\xE9cnica que permite esfumar e misturar cores facilmente."],
    explicacao_aprofundada: ["Com o dedo ou papel, \xE9 poss\xEDvel espalhar o pastel e criar sombras suaves e efeitos art\xEDsticos."],
    curiosidade: ["Muitos artistas famosos usaram giz pastel em retratos e paisagens."],
    interacao: ["Voc\xEA gostaria de desenhar um p\xF4r do sol com giz pastel?", "Qual cor pastel voc\xEA mais gosta?"],
    atividade: ["Experimente esfumar uma cor usando o dedo \u{1F308}", "Desenhe nuvens usando movimentos suaves."],
    final: ["As cores do pastel deixam os desenhos cheios de textura \u{1F31F}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  colagem: {
    tema: "arte_tecnicas",
    subtema: "colagem",
    palavras_chave: ["colagem", "collage", "recorte", "cola", "papel colorido", "t\xE9cnica mista"],
    inicio: ["Colagem \xE9 a arte de juntar pedacinhos para criar algo novo \u2702\uFE0F", "Com pap\xE9is e recortes podemos inventar mundos inteiros \u{1F30E}"],
    explicacao_curta: ["A colagem mistura imagens, pap\xE9is e materiais diferentes em uma mesma arte."],
    explicacao_aprofundada: ["Artistas usam recortes de revistas, tecidos, folhas e outros materiais para criar composi\xE7\xF5es criativas."],
    curiosidade: ["A colagem pode reutilizar materiais e ajudar o planeta \u267B\uFE0F"],
    interacao: ["Que personagem voc\xEA criaria com recortes?", "Voc\xEA gosta de usar pap\xE9is coloridos nas suas artes?"],
    atividade: ["Crie um monstrinho usando recortes \u{1F47E}", "Monte uma paisagem usando peda\xE7os de revista."],
    final: ["Na colagem, pequenos peda\xE7os viram grandes ideias \u2728"],
    emocao: "diversao",
    nivel: "leve"
  },
  origami: {
    tema: "tecnicas_artisticas",
    subtema: "origami",
    palavras_chave: ["origami", "dobradura japonesa", "dobrar papel"],
    inicio: ["O origami transforma papel em formas incr\xEDveis \u{1F9A2}"],
    explicacao_curta: ["Essa t\xE9cnica usa dobras para criar figuras."],
    explicacao_aprofundada: ["Com paci\xEAncia e criatividade, o papel pode virar animais, flores e objetos."],
    curiosidade: ["O origami nasceu no Jap\xE3o \u{1F1EF}\u{1F1F5}"],
    interacao: ["Que animal voc\xEA gostaria de criar com papel?"],
    atividade: ["Fa\xE7a uma dobradura simples usando papel colorido \u2702\uFE0F"],
    final: ["Uma folha pode esconder muitas possibilidades \u2728"],
    emocao: "criatividade",
    nivel: "leve"
  },
  mosaico: {
    tema: "tecnicas_artisticas",
    subtema: "mosaico",
    palavras_chave: ["mosaico", "arte mosaico"],
    inicio: ["O mosaico cria imagens usando pequenas pe\xE7as coloridas \u{1F7E6}"],
    explicacao_curta: ["As figuras s\xE3o montadas juntando pedacinhos."],
    explicacao_aprofundada: ["Os artistas usam pedras, pap\xE9is, azulejos e outros materiais para formar desenhos."],
    curiosidade: ["Muitos mosaicos antigos decoravam igrejas e constru\xE7\xF5es \u2728"],
    interacao: ["Que figura voc\xEA montaria usando pedacinhos?"],
    atividade: ["Monte desenhos com recortes coloridos \u2702\uFE0F"],
    final: ["Pequenas partes podem formar grandes imagens \u{1F308}"],
    emocao: "organizacao",
    nivel: "leve"
  },
  xilogravura: {
    tema: "tecnicas_artisticas",
    subtema: "xilogravura",
    palavras_chave: ["xilogravura", "gravura madeira", "cordel xilogravura"],
    inicio: ["A xilogravura cria imagens usando madeira \u{1FAB5}"],
    explicacao_curta: ["Os desenhos s\xE3o gravados e depois impressos no papel."],
    explicacao_aprofundada: ["Essa t\xE9cnica aparece muito em capas de literatura de cordel."],
    curiosidade: ["A xilogravura possui linhas fortes e marcantes \u2728"],
    interacao: ["Voc\xEA gosta de desenhos com contrastes fortes?"],
    atividade: ["Crie desenhos usando carimbos caseiros \u{1F3A8}"],
    final: ["A arte tamb\xE9m pode nascer da impress\xE3o \u{1F31F}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  gravura: {
    tema: "tecnicas_artisticas",
    subtema: "gravura",
    palavras_chave: ["gravura", "arte impressa"],
    inicio: ["A gravura permite repetir imagens muitas vezes \u{1F5BC}\uFE0F"],
    explicacao_curta: ["Os artistas criam matrizes para imprimir desenhos."],
    explicacao_aprofundada: ["A imagem pode ser transferida para papel usando tinta e press\xE3o."],
    curiosidade: ["Existem v\xE1rios tipos diferentes de gravura \u2728"],
    interacao: ["Voc\xEA gostaria de criar seus pr\xF3prios carimbos?"],
    atividade: ["Fa\xE7a impress\xF5es usando folhas ou objetos \u{1F343}"],
    final: ["Uma imagem pode ganhar v\xE1rias c\xF3pias art\xEDsticas \u{1F308}"],
    emocao: "exploracao",
    nivel: "leve"
  },
  escultura_argila: {
    tema: "tecnicas_artisticas",
    subtema: "escultura_argila",
    palavras_chave: ["argila", "escultura argila", "modelagem"],
    inicio: ["A argila permite modelar formas com as m\xE3os \u270B"],
    explicacao_curta: ["Ela pode virar personagens, vasos e esculturas."],
    explicacao_aprofundada: ["Os artistas apertam, moldam e criam formas usando materiais macios."],
    curiosidade: ["Muitas culturas antigas criavam objetos de argila \u{1F3FA}"],
    interacao: ["O que voc\xEA modelaria usando massinha?"],
    atividade: ["Crie animais usando argila ou massinha \u{1F3A8}"],
    final: ["As m\xE3os tamb\xE9m podem desenhar no espa\xE7o \u2728"],
    emocao: "criatividade",
    nivel: "leve"
  },
  papietagem: {
    tema: "tecnicas_artisticas",
    subtema: "papietagem",
    palavras_chave: ["papietagem", "papel mache", "papel colado"],
    inicio: ["A papietagem usa papel para criar esculturas \u{1F4DC}"],
    explicacao_curta: ["Os peda\xE7os de papel s\xE3o colados em camadas."],
    explicacao_aprofundada: ["Depois de seco, o material fica firme e pode ser pintado."],
    curiosidade: ["M\xE1scaras e bonecos podem ser feitos com papietagem \u{1F3AD}"],
    interacao: ["Que personagem voc\xEA criaria?"],
    atividade: ["Cubra um bal\xE3o com papel e cola \u2702\uFE0F"],
    final: ["O papel pode virar esculturas surpreendentes \u{1F31F}"],
    emocao: "imaginacao",
    nivel: "leve"
  },
  stencil: {
    tema: "tecnicas_artisticas",
    subtema: "stencil",
    palavras_chave: ["stencil", "molde pintura"],
    inicio: ["O stencil usa moldes para criar desenhos repetidos \u{1F3A8}"],
    explicacao_curta: ["Os artistas pintam sobre formas vazadas."],
    explicacao_aprofundada: ["Essa t\xE9cnica ajuda a criar imagens r\xE1pidas e organizadas."],
    curiosidade: ["O stencil aparece muito na arte urbana \u{1F306}"],
    interacao: ["Que forma voc\xEA repetiria em um mural?"],
    atividade: ["Crie moldes simples com papel \u2702\uFE0F"],
    final: ["Os moldes podem ajudar a espalhar criatividade \u2728"],
    emocao: "organizacao",
    nivel: "leve"
  },
  arte_reciclavel: {
    tema: "tecnicas_artisticas",
    subtema: "arte_reciclavel",
    palavras_chave: ["arte reciclavel", "arte com reciclados", "reciclagem artistica"],
    inicio: ["A arte recicl\xE1vel transforma objetos usados em criatividade \u267B\uFE0F"],
    explicacao_curta: ["Materiais reciclados podem virar brinquedos e esculturas."],
    explicacao_aprofundada: ["Caixas, garrafas e tampinhas ganham novos usos atrav\xE9s da arte."],
    curiosidade: ["Muitos artistas usam materiais recicl\xE1veis em suas obras \u{1F30D}"],
    interacao: ["Que objeto reciclado voc\xEA transformaria?"],
    atividade: ["Crie personagens usando embalagens vazias \u{1F3A8}"],
    final: ["A criatividade tamb\xE9m ajuda a cuidar do planeta \u{1F33F}"],
    emocao: "consciencia",
    nivel: "leve"
  },
  // --- ARTISTAS UNIVERSAIS ---
  leonardo_da_vinci: {
    tema: "artistas_universais",
    subtema: "leonardo_da_vinci",
    palavras_chave: ["leonardo", "leonardo da vinci", "mona lisa"],
    inicio: ["Leonardo da Vinci adorava arte, ci\xEAncia e inven\xE7\xF5es \u{1F3A8}"],
    explicacao_curta: ["Ele foi um artista italiano muito curioso e criativo."],
    explicacao_aprofundada: ["Leonardo estudava pintura, corpo humano, m\xE1quinas e natureza ao mesmo tempo."],
    curiosidade: ["A Mona Lisa \xE9 uma das pinturas mais famosas do mundo \u{1F5BC}\uFE0F"],
    interacao: ["Voc\xEA gostaria de inventar m\xE1quinas como Leonardo?"],
    atividade: ["Desenhe uma inven\xE7\xE3o imagin\xE1ria \u270F\uFE0F"],
    final: ["Arte e curiosidade podem caminhar juntas \u{1F31F}"],
    emocao: "descoberta",
    nivel: "leve",
    ano_nascimento: "1452",
    ano_falecimento: "1519",
    local_nascimento: "Vinci, It\xE1lia",
    o_que_ele_fez: [
      "Pintou a Mona Lisa, o retrato mais famoso do mundo.",
      "Criou a pintura A \xDAltima Ceia, que mostra Jesus e seus disc\xEDpulos.",
      "Desenhou m\xE1quinas voadoras, paraquedas e tanques de guerra \u2013 tudo no papel!",
      "Estudou o corpo humano e fez desenhos incr\xEDveis de \xF3rg\xE3os e m\xFAsculos.",
      "Inventou pontes, canais e mecanismos para a cidade de Floren\xE7a."
    ],
    onde_nasceu_resposta: "Leonardo da Vinci nasceu in Vinci, uma cidade na It\xE1lia, em 1452.",
    ano_nascimento_resposta: "Leonardo da Vinci nasceu no ano de 1452.",
    ano_falecimento_resposta: "Leonardo da Vinci faleceu no ano de 1519."
  },
  michelangelo: {
    tema: "artistas_universais",
    subtema: "michelangelo",
    palavras_chave: ["michelangelo", "capela sistina"],
    inicio: ["Michelangelo criava esculturas e pinturas gigantes \u2728"],
    explicacao_curta: ["Ele pintou o teto da Capela Sistina."],
    explicacao_aprofundada: ["Suas obras mostram detalhes do corpo humano e muita express\xE3o."],
    curiosidade: ["Michelangelo tamb\xE9m trabalhava com esculturas em m\xE1rmore \u{1FAA8}"],
    interacao: ["Voc\xEA gostaria de pintar um teto enorme?"],
    atividade: ["Desenhe personagens olhando para cima \u{1F3A8}"],
    final: ["Grandes obras podem nascer de muita dedica\xE7\xE3o \u{1F30D}"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1475",
    ano_falecimento: "1564",
    local_nascimento: "Caprese, It\xE1lia",
    o_que_ele_fez: [
      "Pintou o teto da Capela Sistina, no Vaticano.",
      "Esculpiu a est\xE1tua de Davi, um dos s\xEDmbolos do Renascimento.",
      "Projetou a c\xFApula da Bas\xEDlica de S\xE3o Pedro.",
      "Criou a escultura Piet\xE0, que mostra Maria com Jesus no colo."
    ],
    onde_nasceu_resposta: "Michelangelo nasceu em Caprese, na It\xE1lia, em 1475.",
    ano_nascimento_resposta: "Michelangelo nasceu no ano de 1475.",
    ano_falecimento_resposta: "Michelangelo faleceu no ano de 1564."
  },
  claude_monet: {
    tema: "artistas_universais",
    subtema: "claude_monet",
    palavras_chave: ["monet", "claude monet", "impressionismo"],
    inicio: ["Monet adorava pintar luz e natureza \u{1F33F}"],
    explicacao_curta: ["Ele foi um dos artistas mais importantes do impressionismo."],
    explicacao_aprofundada: ["Monet pintava paisagens observando mudan\xE7as de luz e cor."],
    curiosidade: ["Ele pintou v\xE1rias vezes o mesmo jardim em hor\xE1rios diferentes \u{1F324}\uFE0F"],
    interacao: ["Voc\xEA j\xE1 percebeu como o c\xE9u muda durante o dia?"],
    atividade: ["Pinte uma paisagem usando pinceladas leves \u{1F3A8}"],
    final: ["A luz pode transformar completamente uma pintura \u2728"],
    emocao: "leveza",
    nivel: "leve",
    ano_nascimento: "1840",
    ano_falecimento: "1926",
    local_nascimento: "Paris, Fran\xE7a",
    o_que_ele_fez: [
      "Criou o movimento impressionista, pintando ao ar livre.",
      "Pintou a s\xE9rie 'Nen\xFAfares', com mais de 250 obras de seu jardim em Giverny.",
      "Registrou a Catedral de Rouen em diferentes luzes."
    ],
    onde_nasceu_resposta: "Claude Monet nasceu em Paris, Fran\xE7a, em 1840.",
    ano_nascimento_resposta: "Claude Monet nasceu no ano de 1840.",
    ano_falecimento_resposta: "Claude Monet faleceu no ano de 1926."
  },
  vincent_van_gogh: {
    tema: "artistas_universais",
    subtema: "vincent_van_gogh",
    palavras_chave: ["van gogh", "noite estrelada"],
    inicio: ["Van Gogh pintava usando cores fortes e movimento \u{1F319}"],
    explicacao_curta: ["Suas pinturas possuem pinceladas marcantes."],
    explicacao_aprofundada: ["Ele usava cores intensas para mostrar emo\xE7\xF5es e energia nas obras."],
    curiosidade: ["A Noite Estrelada \xE9 uma de suas pinturas mais famosas \u2B50"],
    interacao: ["Que cores voc\xEA usaria para pintar a noite?"],
    atividade: ["Fa\xE7a espirais coloridas inspiradas no c\xE9u \u{1F3A8}"],
    final: ["As cores podem mostrar sentimentos profundos \u2728"],
    emocao: "emocao",
    nivel: "leve",
    ano_nascimento: "1853",
    ano_falecimento: "1890",
    local_nascimento: "Zundert, Pa\xEDses Baixos",
    o_que_ele_fez: [
      "Pintou 'A Noite Estrelada', uma das obras mais famosas do mundo.",
      "Criou mais de 2.000 obras, incluindo 'Girass\xF3is' e 'Quarto em Arles'.",
      "Desenvolveu um estilo \xFAnico com pinceladas grossas e cores vibrantes."
    ],
    onde_nasceu_resposta: "Van Gogh nasceu em Zundert, nos Pa\xEDses Baixos, em 1853.",
    ano_nascimento_resposta: "Van Gogh nasceu no ano de 1853.",
    ano_falecimento_resposta: "Van Gogh faleceu no ano de 1890."
  },
  pablo_picasso: {
    tema: "artistas_universais",
    subtema: "pablo_picasso",
    palavras_chave: ["picasso", "cubismo"],
    inicio: ["Picasso gostava de reinventar as formas \u{1F3AD}"],
    explicacao_curta: ["Ele ajudou a criar o cubismo."],
    explicacao_aprofundada: ["Suas obras mostram objetos e rostos vistos de v\xE1rios \xE2ngulos ao mesmo tempo."],
    curiosidade: ["Picasso come\xE7ou a desenhar ainda crian\xE7a \u270F\uFE0F"],
    interacao: ["Voc\xEA conseguiria desenhar um rosto geom\xE9trico?"],
    atividade: ["Monte um desenho usando tri\xE2ngulos e quadrados \u{1F7E6}"],
    final: ["A arte pode mostrar o mundo de formas diferentes \u{1F308}"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1881",
    ano_falecimento: "1973",
    local_nascimento: "M\xE1laga, Espanha",
    o_que_ele_fez: [
      "Criou o cubismo junto com Georges Braque.",
      "Pintou 'Guernica', uma obra contra a guerra.",
      "Produziu mais de 50.000 obras, incluindo pinturas, esculturas e cer\xE2micas."
    ],
    onde_nasceu_resposta: "Pablo Picasso nasceu em M\xE1laga, na Espanha, em 1881.",
    ano_nascimento_resposta: "Picasso nasceu no ano de 1881.",
    ano_falecimento_resposta: "Picasso faleceu no ano de 1973."
  },
  salvador_dali: {
    tema: "artistas_universais",
    subtema: "salvador_dali",
    palavras_chave: ["dali", "salvador dali", "relogio derretendo"],
    inicio: ["Dal\xED criava pinturas parecidas com sonhos \u{1F319}"],
    explicacao_curta: ["Suas obras misturam imagina\xE7\xE3o e realidade."],
    explicacao_aprofundada: ["Ele pintava objetos estranhos e cen\xE1rios inesperados."],
    curiosidade: ["Os rel\xF3gios derretendo ficaram famosos no surrealismo \u23F0"],
    interacao: ["Que sonho voc\xEA transformaria em desenho?"],
    atividade: ["Misture objetos diferentes em uma mesma cena \u{1F3A8}"],
    final: ["A imagina\xE7\xE3o pode criar mundos surpreendentes \u2728"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1904",
    ano_falecimento: "1989",
    local_nascimento: "Figueres, Espanha",
    o_que_ele_fez: [
      "Pintou 'A Persist\xEAncia da Mem\xF3ria', com os rel\xF3gios derretendo.",
      "Foi um dos principais artistas do surrealismo.",
      "Criou esculturas, filmes e at\xE9 joias."
    ],
    onde_nasceu_resposta: "Salvador Dal\xED nasceu em Figueres, na Espanha, em 1904.",
    ano_nascimento_resposta: "Dal\xED nasceu no ano de 1904.",
    ano_falecimento_resposta: "Dal\xED faleceu no ano de 1989."
  },
  frida_kahlo: {
    tema: "artistas_universais",
    subtema: "frida_kahlo",
    palavras_chave: ["frida kahlo", "frida"],
    inicio: ["Frida Kahlo pintava sentimentos e hist\xF3rias pessoais \u{1F33A}"],
    explicacao_curta: ["Suas obras mostram identidade, emo\xE7\xF5es e cultura."],
    explicacao_aprofundada: ["Frida utilizava cores fortes, flores e elementos da cultura mexicana."],
    curiosidade: ["Ela fez muitos autorretratos \u{1F3A8}"],
    interacao: ["O que voc\xEA desenharia sobre sua pr\xF3pria vida?"],
    atividade: ["Crie um autorretrato usando cores vibrantes \u{1F308}"],
    final: ["A arte tamb\xE9m pode contar nossa pr\xF3pria hist\xF3ria \u2728"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1907",
    ano_falecimento: "1954",
    local_nascimento: "Coyoac\xE1n, M\xE9xico",
    o_que_ele_fez: [
      "Pintou muitos autorretratos que mostravam sua for\xE7a e sentimentos.",
      "Usou s\xEDmbolos da cultura mexicana, como macacos, espinhos e flores.",
      "Sua obra 'As Duas Fridas' mostra duas vers\xF5es de si mesma."
    ],
    onde_nasceu_resposta: "Frida Kahlo nasceu em Coyoac\xE1n, no M\xE9xico, em 1907.",
    ano_nascimento_resposta: "Frida Kahlo nasceu no ano de 1907.",
    ano_falecimento_resposta: "Frida Kahlo faleceu no ano de 1954."
  },
  wassily_kandinsky: {
    tema: "artistas_universais",
    subtema: "wassily_kandinsky",
    palavras_chave: ["kandinsky", "arte abstrata"],
    inicio: ["Kandinsky usava formas e cores para criar emo\xE7\xF5es \u{1F535}"],
    explicacao_curta: ["Ele foi um dos pioneiros da arte abstrata."],
    explicacao_aprofundada: ["Suas pinturas n\xE3o mostravam objetos reais, mas sentimentos atrav\xE9s das cores."],
    curiosidade: ["Kandinsky acreditava que cores podiam parecer m\xFAsica \u{1F3B6}"],
    interacao: ["Que emo\xE7\xE3o combina com a cor azul para voc\xEA?"],
    atividade: ["Crie arte usando apenas c\xEDrculos e linhas \u{1F3A8}"],
    final: ["As formas tamb\xE9m podem transmitir sentimentos \u2728"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1866",
    ano_falecimento: "1944",
    local_nascimento: "Moscou, R\xFAssia",
    o_que_ele_fez: [
      "Foi um dos primeiros artistas a pintar arte abstrata.",
      "Escreveu um livro importante chamado 'Do Espiritual na Arte'.",
      "Acreditava que cores e formas podiam criar uma 'sinfonia visual'."
    ],
    onde_nasceu_resposta: "Wassily Kandinsky nasceu em Moscou, na R\xFAssia, em 1866.",
    ano_nascimento_resposta: "Kandinsky nasceu no ano de 1866.",
    ano_falecimento_resposta: "Kandinsky faleceu no ano de 1944."
  },
  andy_warhol: {
    tema: "artistas_universais",
    subtema: "andy_warhol",
    palavras_chave: ["warhol", "pop art"],
    inicio: ["Andy Warhol transformava imagens populares in arte \u{1F31F}"],
    explicacao_curta: ["Ele foi um dos principais artistas da pop art."],
    explicacao_aprofundada: ["Warhol repetia imagens coloridas inspiradas em objetos e celebridades."],
    curiosidade: ["Latas e objetos do cotidiano apareciam em suas obras \u{1F96B}"],
    interacao: ["Que objeto comum voc\xEA transformaria em arte?"],
    atividade: ["Repita o mesmo desenho usando cores diferentes \u{1F3A8}"],
    final: ["At\xE9 objetos simples podem virar arte \u2728"],
    emocao: "exploracao",
    nivel: "leve",
    ano_nascimento: "1928",
    ano_falecimento: "1987",
    local_nascimento: "Pittsburgh, EUA",
    o_que_ele_fez: [
      "Criou a famosa s\xE9rie de latas de sopa Campbell.",
      "Pintou retratos de celebridades como Marilyn Monroe.",
      "Fundou a The Factory, um est\xFAdio que reunia artistas e m\xFAsicos."
    ],
    onde_nasceu_resposta: "Andy Warhol nasceu em Pittsburgh, nos Estados Unidos, em 1928.",
    ano_nascimento_resposta: "Warhol nasceu no ano de 1928.",
    ano_falecimento_resposta: "Warhol faleceu no ano de 1987."
  },
  yayoi_kusama: {
    tema: "artistas_universais",
    subtema: "yayoi_kusama",
    palavras_chave: ["kusama", "bolinhas"],
    inicio: ["Yayoi Kusama ficou famosa por suas bolinhas coloridas \u{1F534}"],
    explicacao_curta: ["Ela cria instala\xE7\xF5es cheias de cores e padr\xF5es."],
    explicacao_aprofundada: ["Suas obras misturam espelhos, luzes e formas repetidas."],
    curiosidade: ["Algumas salas de Kusama parecem infinitas \u2728"],
    interacao: ["Voc\xEA gosta de desenhos com padr\xF5es repetidos?"],
    atividade: ["Cubra uma folha com bolinhas coloridas \u{1F308}"],
    final: ["Padr\xF5es simples podem criar mundos incr\xEDveis \u{1F31F}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1929",
    ano_falecimento: "",
    local_nascimento: "Matsumoto, Jap\xE3o",
    o_que_ele_fez: [
      "Criou as famosas 'salas infinitas' com espelhos e luzes.",
      "Pintou ab\xF3boras com bolinhas, que se tornaram sua marca registrada.",
      "Exp\xF4s suas obras nos maiores museus do mundo."
    ],
    onde_nasceu_resposta: "Yayoi Kusama nasceu em Matsumoto, no Jap\xE3o, em 1929.",
    ano_nascimento_resposta: "Yayoi Kusama nasceu no ano de 1929."
  },
  raphael: {
    tema: "artistas_universais",
    subtema: "raphael",
    palavras_chave: ["raphael", "rafael"],
    inicio: ["Raphael criava pinturas suaves e equilibradas \u{1F3A8}"],
    explicacao_curta: ["Ele foi um importante artista do Renascimento."],
    explicacao_aprofundada: ["Suas obras mostram harmonia, delicadeza e personagens bem organizados."],
    curiosidade: ["Raphael gostava de pintar cenas calmas e detalhadas \u2728"],
    interacao: ["Voc\xEA prefere desenhos cheios de detalhes ou mais simples?"],
    atividade: ["Desenhe pessoas formando uma cena tranquila \u270F\uFE0F"],
    final: ["Equil\xEDbrio e suavidade tamb\xE9m fazem parte da arte \u{1F308}"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1483",
    ano_falecimento: "1520",
    local_nascimento: "Urbino, It\xE1lia",
    o_que_ele_fez: [
      "Pintou a Escola de Atenas, com grandes fil\xF3sofos da Gr\xE9cia Antiga.",
      "Ficou conhecido por suas Madonas, paintings da m\xE3e de Jesus.",
      "Trabalhou como arquiteto para o Papa no Vaticano."
    ],
    onde_nasceu_resposta: "Raphael nasceu em Urbino, na It\xE1lia, em 1483.",
    ano_nascimento_resposta: "Raphael nasceu no ano de 1483.",
    ano_falecimento_resposta: "Raphael faleceu no ano de 1520."
  },
  caravaggio: {
    tema: "artistas_universais",
    subtema: "caravaggio",
    palavras_chave: ["caravaggio", "luz e sombra"],
    inicio: ["Caravaggio usava luz forte para destacar cenas \u{1F526}"],
    explicacao_curta: ["Suas pinturas possuem contrastes marcantes entre luz e sombra."],
    explicacao_aprofundada: ["Ele criava efeitos dram\xE1ticos que davam intensidade \xE0s obras."],
    curiosidade: ["As pinturas parecem iluminadas por uma \xFAnica luz \u2728"],
    interacao: ["Voc\xEA j\xE1 observou sombras em um quarto escuro?"],
    atividade: ["Fa\xE7a um desenho usando partes claras e escuras \u{1F3A8}"],
    final: ["Luz e sombra podem mudar completamente uma imagem \u{1F319}"],
    emocao: "misterio",
    nivel: "leve",
    ano_nascimento: "1571",
    ano_falecimento: "1610",
    local_nascimento: "Mil\xE3o, It\xE1lia",
    o_que_ele_fez: [
      "Usou a t\xE9cnica do chiaroscuro (forte contraste de luz e sombra).",
      "Pintou cenas b\xEDblicas como 'A Voca\xE7\xE3o de S\xE3o Mateus'.",
      "Suas obras t\xEAm um realismo intenso e dram\xE1tico."
    ],
    onde_nasceu_resposta: "Caravaggio nasceu em Mil\xE3o, na It\xE1lia, em 1571.",
    ano_nascimento_resposta: "Caravaggio nasceu no ano de 1571.",
    ano_falecimento_resposta: "Caravaggio faleceu no ano de 1610."
  },
  rembrandt: {
    tema: "artistas_universais",
    subtema: "rembrandt",
    palavras_chave: ["rembrandt"],
    inicio: ["Rembrandt gostava de pintar emo\xE7\xF5es humanas \u{1F3AD}"],
    explicacao_curta: ["Ele usava luz e sombra para criar profundidade."],
    explicacao_aprofundada: ["Muitos retratos de Rembrandt parecem vivos e expressivos."],
    curiosidade: ["Ele fez muitos autorretratos ao longo da vida \u2728"],
    interacao: ["Que emo\xE7\xE3o voc\xEA desenharia em um rosto?"],
    atividade: ["Crie express\xF5es diferentes em personagens \u{1F60A}\u{1F62E}\u{1F622}"],
    final: ["A arte pode mostrar sentimentos sem palavras \u{1F31F}"],
    emocao: "emocao",
    nivel: "leve",
    ano_nascimento: "1606",
    ano_falecimento: "1669",
    local_nascimento: "Leiden, Pa\xEDses Baixos",
    o_que_ele_fez: [
      "Pintou 'A Ronda Noturna', uma obra cheia de movimento.",
      "Fez mais de 90 autorretratos ao longo da vida.",
      "Dominou o uso de luz e sombra para dar emo\xE7\xE3o aos rostos."
    ],
    onde_nasceu_resposta: "Rembrandt nasceu em Leiden, nos Pa\xEDses Baixos, em 1606.",
    ano_nascimento_resposta: "Rembrandt nasceu no ano de 1606.",
    ano_falecimento_resposta: "Rembrandt faleceu no ano de 1669."
  },
  vermeer: {
    tema: "artistas_universais",
    subtema: "vermeer",
    palavras_chave: ["vermeer"],
    inicio: ["Vermeer pintava cenas tranquilas do cotidiano \u{1F56F}\uFE0F"],
    explicacao_curta: ["Suas obras possuem luz suave e muitos detalhes."],
    explicacao_aprofundada: ["Ele mostrava momentos simples como leitura, m\xFAsica e sil\xEAncio."],
    curiosidade: ["A luz das janelas aparece bastante em suas pinturas \u2600\uFE0F"],
    interacao: ["Que momento tranquilo voc\xEA gostaria de desenhar?"],
    atividade: ["Pinte uma cena calma dentro de casa \u{1F3A8}"],
    final: ["At\xE9 momentos simples podem virar arte \u2728"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1632",
    ano_falecimento: "1675",
    local_nascimento: "Delft, Pa\xEDses Baixos",
    o_que_ele_fez: [
      "Pintou 'Mo\xE7a com Brinco de P\xE9rola', conhecida como a Mona Lisa holandesa.",
      "Registrou cenas dom\xE9sticas com luz suave e cores harmoniosas.",
      "Deixou apenas cerca de 35 pinturas, todas de alt\xEDssima qualidade."
    ],
    onde_nasceu_resposta: "Vermeer nasceu em Delft, nos Pa\xEDses Baixos, em 1632.",
    ano_nascimento_resposta: "Vermeer nasceu no ano de 1632.",
    ano_falecimento_resposta: "Vermeer faleceu no ano de 1675."
  },
  edgar_degas: {
    tema: "artistas_universais",
    subtema: "edgar_degas",
    palavras_chave: ["degas", "bailarina"],
    inicio: ["Degas adorava mostrar movimento nas pinturas \u{1FA70}"],
    explicacao_curta: ["Ele ficou famoso por retratar bailarinas."],
    explicacao_aprofundada: ["Suas obras mostram cenas do cotidiano e movimentos delicados."],
    curiosidade: ["Degas observava ensaios de dan\xE7a para criar suas pinturas \u{1F3B6}"],
    interacao: ["Voc\xEA gosta de desenhar pessoas in movimento?"],
    atividade: ["Fa\xE7a linhas r\xE1pidas mostrando algu\xE9m dan\xE7ando \u270F\uFE0F"],
    final: ["A arte tamb\xE9m pode capturar movimento \u{1F308}"],
    emocao: "leveza",
    nivel: "leve",
    ano_nascimento: "1834",
    ano_falecimento: "1917",
    local_nascimento: "Paris, Fran\xE7a",
    o_que_ele_fez: [
      "Pintou centenas de cenas de bailarinas, ensaios e apresenta\xE7\xF5es.",
      "Tamb\xE9m fez esculturas, como 'Pequena Dan\xE7arina de Quatorze Anos'.",
      "Experimentou com pastel e t\xE9cnicas de captura de movimento."
    ],
    onde_nasceu_resposta: "Edgar Degas nasceu em Paris, Fran\xE7a, em 1834.",
    ano_nascimento_resposta: "Degas nasceu no ano de 1834.",
    ano_falecimento_resposta: "Degas faleceu no ano de 1917."
  },
  paul_cezanne: {
    tema: "artistas_universais",
    subtema: "paul_cezanne",
    palavras_chave: ["cezanne"],
    inicio: ["C\xE9zanne gostava de simplificar formas \u{1F34E}"],
    explicacao_curta: ["Ele ajudou a abrir caminhos para a arte moderna."],
    explicacao_aprofundada: ["Suas pinturas mostram objetos usando formas geom\xE9tricas simples."],
    curiosidade: ["C\xE9zanne pintava muitas frutas e paisagens \u{1F3A8}"],
    interacao: ["Voc\xEA consegue transformar objetos em c\xEDrculos e quadrados?"],
    atividade: ["Desenhe frutas usando formas geom\xE9tricas \u{1F53A}"],
    final: ["Formas simples podem criar grandes ideias \u2728"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1839",
    ano_falecimento: "1906",
    local_nascimento: "Aix-en-Provence, Fran\xE7a",
    o_que_ele_fez: [
      "Influenciou o cubismo e a arte moderna com suas formas geom\xE9tricas.",
      "Pintou v\xE1rias vers\xF5es da Montanha Sainte-Victoire.",
      "Foi chamado de 'pai da arte moderna' por artistas como Picasso."
    ],
    onde_nasceu_resposta: "Paul C\xE9zanne nasceu em Aix-en-Provence, na Fran\xE7a, em 1839.",
    ano_nascimento_resposta: "C\xE9zanne nasceu no ano de 1839.",
    ano_falecimento_resposta: "C\xE9zanne faleceu no ano de 1906."
  },
  georges_braque: {
    tema: "artistas_universais",
    subtema: "georges_braque",
    palavras_chave: ["braque", "cubismo"],
    inicio: ["Braque explorava formas geom\xE9tricas na pintura \u{1F7E6}"],
    explicacao_curta: ["Ele trabalhou junto com Picasso no cubismo."],
    explicacao_aprofundada: ["Suas obras mostram objetos divididos em partes e \xE2ngulos."],
    curiosidade: ["O cubismo mudou a maneira de representar objetos \u2728"],
    interacao: ["Voc\xEA gostaria de montar um desenho quebrado em formas?"],
    atividade: ["Recorte formas geom\xE9tricas e monte figuras \u{1F3A8}"],
    final: ["A arte pode reinventar a maneira de enxergar \u{1F308}"],
    emocao: "exploracao",
    nivel: "leve",
    ano_nascimento: "1882",
    ano_falecimento: "1963",
    local_nascimento: "Argenteuil, Fran\xE7a",
    o_que_ele_fez: [
      "Desenvolveu o cubismo ao lado de Picasso.",
      "Usou letras e n\xFAmeros em suas pinturas, inovando na arte.",
      "Criou a t\xE9cnica de colagem com pap\xE9is recortados."
    ],
    onde_nasceu_resposta: "Georges Braque nasceu em Argenteuil, na Fran\xE7a, em 1882.",
    ano_nascimento_resposta: "Braque nasceu no ano de 1882.",
    ano_falecimento_resposta: "Braque faleceu no ano de 1963."
  },
  rene_magritte: {
    tema: "artistas_universais",
    subtema: "rene_magritte",
    palavras_chave: ["magritte"],
    inicio: ["Magritte criava imagens curiosas e misteriosas \u{1F3A9}"],
    explicacao_curta: ["Ele misturava objetos comuns de maneiras inesperadas."],
    explicacao_aprofundada: ["Suas obras fazem as pessoas observar e pensar sobre a realidade."],
    curiosidade: ["Muitas pinturas de Magritte parecem enigmas \u{1F9E9}"],
    interacao: ["Que objetos estranhos voc\xEA juntaria em um desenho?"],
    atividade: ["Misture c\xE9u, objetos e personagens em uma cena surreal \u{1F3A8}"],
    final: ["A imagina\xE7\xE3o pode transformar o comum em surpreendente \u2728"],
    emocao: "misterio",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1967",
    local_nascimento: "Lessines, B\xE9lgica",
    o_que_ele_fez: [
      "Pintou 'A Trai\xE7\xE3o das Imagens', com um cachimbo escrito 'Isto n\xE3o \xE9 um cachimbo'.",
      "Criou cenas com homens de chap\xE9u-coco caindo do c\xE9u.",
      "Desafiou a percep\xE7\xE3o da realidade com imagens paradoxais."
    ],
    onde_nasceu_resposta: "Ren\xE9 Magritte nasceu em Lessines, na B\xE9lgica, em 1898.",
    ano_nascimento_resposta: "Magritte nasceu no ano de 1898.",
    ano_falecimento_resposta: "Magritte faleceu no ano de 1967."
  },
  gustav_klimt: {
    tema: "artistas_universais",
    subtema: "gustav_klimt",
    palavras_chave: ["klimt", "o beijo"],
    inicio: ["Klimt usava dourado e muitos detalhes brilhantes \u2728"],
    explicacao_curta: ["Suas pinturas parecem decoradas como joias."],
    explicacao_aprofundada: ["Ele misturava figuras humanas com padr\xF5es coloridos e ornamentados."],
    curiosidade: ["O Beijo \xE9 uma de suas obras mais famosas \u{1F49B}"],
    interacao: ["Voc\xEA gosta de desenhos cheios de detalhes?"],
    atividade: ["Crie padr\xF5es usando c\xEDrculos e linhas douradas \u{1F3A8}"],
    final: ["Detalhes podem deixar a arte ainda mais encantadora \u{1F31F}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1862",
    ano_falecimento: "1918",
    local_nascimento: "Viena, \xC1ustria",
    o_que_ele_fez: [
      "Pintou 'O Beijo', uma obra cheia de folhas de ouro.",
      "Fundou o movimento da Secess\xE3o Vienense.",
      "Criou o famoso friso da Universidade de Viena."
    ],
    onde_nasceu_resposta: "Gustav Klimt nasceu em Viena, na \xC1ustria, em 1862.",
    ano_nascimento_resposta: "Klimt nasceu no ano de 1862.",
    ano_falecimento_resposta: "Klimt faleceu no ano de 1918."
  },
  edvard_munch: {
    tema: "artistas_universais",
    subtema: "edvard_munch",
    palavras_chave: ["munch", "o grito"],
    inicio: ["Munch pintava emo\xE7\xF5es muito intensas \u{1F32A}\uFE0F"],
    explicacao_curta: ["Suas obras mostram sentimentos fortes."],
    explicacao_aprofundada: ["Ele usava linhas e cores para representar medo, tristeza e emo\xE7\xE3o."],
    curiosidade: ["O Grito \xE9 uma das pinturas mais conhecidas do mundo \u{1F62E}"],
    interacao: ["Que emo\xE7\xE3o voc\xEA transformaria em pintura?"],
    atividade: ["Use cores fortes para desenhar sentimentos \u{1F3A8}"],
    final: ["A arte tamb\xE9m pode mostrar emo\xE7\xF5es profundas \u{1F308}"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1863",
    ano_falecimento: "1944",
    local_nascimento: "\xC5dalsbruk, Noruega",
    o_que_ele_fez: [
      "Pintou 'O Grito', que se tornou um \xEDcone da ang\xFAstia humana.",
      "Fez v\xE1rias vers\xF5es da mesma obra em pintura, pastel e litografia.",
      "Explorou temas como amor, medo e morte em suas s\xE9ries."
    ],
    onde_nasceu_resposta: "Edvard Munch nasceu em \xC5dalsbruk, na Noruega, em 1863.",
    ano_nascimento_resposta: "Munch nasceu no ano de 1863.",
    ano_falecimento_resposta: "Munch faleceu no ano de 1944."
  },
  joan_miro: {
    tema: "artistas_universais",
    subtema: "joan_miro",
    palavras_chave: ["miro", "joan miro"],
    inicio: ["Mir\xF3 criava formas coloridas e imaginativas \u{1F308}"],
    explicacao_curta: ["Suas pinturas parecem sonhos cheios de s\xEDmbolos."],
    explicacao_aprofundada: ["Ele usava estrelas, linhas, c\xEDrculos e cores fortes para criar mundos imagin\xE1rios."],
    curiosidade: ["As obras de Mir\xF3 lembram desenhos m\xE1gicos \u2728"],
    interacao: ["Que s\xEDmbolos voc\xEA criaria em uma pintura?"],
    atividade: ["Desenhe estrelas, luas e formas inventadas \u{1F319}"],
    final: ["A imagina\xE7\xE3o pode criar universos coloridos \u{1F31F}"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1893",
    ano_falecimento: "1983",
    local_nascimento: "Barcelona, Espanha",
    o_que_ele_fez: [
      "Criou um estilo \xFAnico com formas org\xE2nicas e cores vibrantes.",
      "Pintou 'O Carnaval de Arlequim', cheio de s\xEDmbolos fant\xE1sticos.",
      "Tamb\xE9m fez esculturas, cer\xE2micas e murais gigantes."
    ],
    onde_nasceu_resposta: "Joan Mir\xF3 nasceu em Barcelona, na Espanha, em 1893.",
    ano_nascimento_resposta: "Mir\xF3 nasceu no ano de 1893.",
    ano_falecimento_resposta: "Mir\xF3 faleceu no ano de 1983."
  },
  henri_matisse: {
    tema: "artistas_universais",
    subtema: "henri_matisse",
    palavras_chave: ["matisse", "henri matisse"],
    inicio: ["Matisse adorava cores fortes e vibrantes \u{1F3A8}"],
    explicacao_curta: ["Ele criava pinturas alegres e cheias de vida."],
    explicacao_aprofundada: ["Matisse tamb\xE9m fazia colagens usando pap\xE9is coloridos recortados."],
    curiosidade: ["As tesouras viraram ferramentas importantes para Matisse \u2702\uFE0F"],
    interacao: ["Voc\xEA gosta de criar usando recortes?"],
    atividade: ["Fa\xE7a colagens usando pap\xE9is coloridos \u{1F308}"],
    final: ["As cores podem transmitir muita alegria \u2728"],
    emocao: "alegria",
    nivel: "leve",
    ano_nascimento: "1869",
    ano_falecimento: "1954",
    local_nascimento: "Le Cateau-Cambr\xE9sis, Fran\xE7a",
    o_que_ele_fez: [
      "Liderou o movimento fauvista, com cores intensas e puras.",
      "No final da vida, criou colagens coloridas chamadas 'gouaches d\xE9coup\xE9es'.",
      "Projetou a Capela do Ros\xE1rio em Vence, com vitrais e desenhos."
    ],
    onde_nasceu_resposta: "Henri Matisse nasceu em Le Cateau-Cambr\xE9sis, na Fran\xE7a, em 1869.",
    ano_nascimento_resposta: "Matisse nasceu no ano de 1869.",
    ano_falecimento_resposta: "Matisse faleceu no ano de 1954."
  },
  jackson_pollock: {
    tema: "artistas_universais",
    subtema: "jackson_pollock",
    palavras_chave: ["pollock", "jackson pollock"],
    inicio: ["Pollock espalhava tinta de maneiras diferentes \u{1F3A8}"],
    explicacao_curta: ["Ele criava pinturas usando respingos e movimentos livres."],
    explicacao_aprofundada: ["O artista caminhava ao redor da tela enquanto jogava tinta para criar formas inesperadas."],
    curiosidade: ["As pinturas de Pollock parecem cheias de energia \u26A1"],
    interacao: ["Voc\xEA gostaria de pintar usando movimentos livres?"],
    atividade: ["Fa\xE7a respingos de tinta em uma folha \u{1F3A8}"],
    final: ["Movimento e arte podem se misturar \u{1F32A}\uFE0F"],
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
    inicio: ["Keith Haring criava desenhos simples e cheios de movimento \u2728"],
    explicacao_curta: ["Suas figuras parecem dan\xE7ar e brincar."],
    explicacao_aprofundada: ["Ele usava linhas fortes e personagens coloridos para comunicar ideias."],
    curiosidade: ["As artes de Haring aparecem em murais e espa\xE7os p\xFAblicos \u{1F30D}"],
    interacao: ["Voc\xEA consegue desenhar personagens usando poucas linhas?"],
    atividade: ["Crie figuras simples em movimento \u270F\uFE0F"],
    final: ["Linhas simples podem transmitir muita energia \u{1F308}"],
    emocao: "animacao",
    nivel: "leve",
    ano_nascimento: "1958",
    ano_falecimento: "1990",
    local_nascimento: "Reading, Pensilv\xE2nia, EUA",
    o_que_ele_fez: [
      "Desenhou bonecos dan\xE7antes e radiantes em murais e metr\xF4s de Nova York.",
      "Usou sua arte para campanhas contra as drogas e a favor da paz.",
      "Criou a Funda\xE7\xE3o Keith Haring para apoiar crian\xE7as e pessoas com HIV."
    ],
    onde_nasceu_resposta: "Keith Haring nasceu em Reading, nos Estados Unidos, em 1958.",
    ano_nascimento_resposta: "Keith Haring nasceu no ano de 1958.",
    ano_falecimento_resposta: "Keith Haring faleceu no ano de 1990."
  },
  banksy: {
    tema: "artistas_universais",
    subtema: "banksy",
    palavras_chave: ["banksy", "grafite banksy"],
    inicio: ["Banksy ficou famoso por suas artes urbanas \u{1F3A8}"],
    explicacao_curta: ["Ele cria imagens em paredes e espa\xE7os p\xFAblicos."],
    explicacao_aprofundada: ["Suas obras misturam humor, cr\xEDtica e criatividade."],
    curiosidade: ["A verdadeira identidade de Banksy continua misteriosa \u{1F3AD}"],
    interacao: ["Voc\xEA gosta de desenhos em muros e paredes?"],
    atividade: ["Crie um desenho usando moldes e formas simples \u270F\uFE0F"],
    final: ["A arte pode aparecer em muitos lugares da cidade \u{1F306}"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1974",
    ano_falecimento: "",
    local_nascimento: "Bristol, Reino Unido",
    o_que_ele_fez: [
      "Criou o famoso grafite da menina com bal\xE3o vermelho.",
      "Destruiu uma de suas obras ap\xF3s leil\xE3o com um triturador escondido na moldura.",
      "Fez murais pol\xEDticos e sat\xEDricos em v\xE1rias cidades do mundo."
    ],
    onde_nasceu_resposta: "Banksy nasceu em Bristol, no Reino Unido, em 1974 (aproximadamente).",
    ano_nascimento_resposta: "Banksy nasceu por volta de 1974."
  },
  amedeo_modigliani: {
    tema: "artistas_universais",
    subtema: "amedeo_modigliani",
    palavras_chave: ["modigliani"],
    inicio: ["Modigliani pintava rostos alongados e elegantes \u{1F3AD}"],
    explicacao_curta: ["Suas figuras possuem formas suaves e diferentes."],
    explicacao_aprofundada: ["Ele criava retratos com pesco\xE7os longos e olhos marcantes."],
    curiosidade: ["Os retratos de Modigliani parecem silenciosos e tranquilos \u{1F319}"],
    interacao: ["Voc\xEA conseguiria desenhar rostos de forma estilizada?"],
    atividade: ["Crie personagens com formas alongadas \u270F\uFE0F"],
    final: ["Cada artista possui um jeito \xFAnico de representar pessoas \u2728"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1884",
    ano_falecimento: "1920",
    local_nascimento: "Livorno, It\xE1lia",
    o_que_ele_fez: [
      "Criou retratos e nus com pesco\xE7os e rostos alongados.",
      "Trabalhou principalmente em Paris, na comunidade de artistas.",
      "Morreu jovem, mas deixou um estilo inconfund\xEDvel."
    ],
    onde_nasceu_resposta: "Amedeo Modigliani nasceu em Livorno, na It\xE1lia, em 1884.",
    ano_nascimento_resposta: "Modigliani nasceu no ano de 1884.",
    ano_falecimento_resposta: "Modigliani faleceu no ano de 1920."
  },
  georgia_okeeffe: {
    tema: "artistas_universais",
    subtema: "georgia_okeeffe",
    palavras_chave: ["okeeffe", "georgia okeeffe"],
    inicio: ["Georgia O\u2019Keeffe gostava de pintar flores gigantes \u{1F33A}"],
    explicacao_curta: ["Suas obras mostram detalhes da natureza."],
    explicacao_aprofundada: ["Ela ampliava flores e paisagens para destacar formas e cores."],
    curiosidade: ["As flores parecem enormes em suas pinturas \u{1F338}"],
    interacao: ["Qual flor voc\xEA gostaria de pintar?"],
    atividade: ["Desenhe uma flor ocupando toda a folha \u{1F3A8}"],
    final: ["A natureza pode inspirar obras incr\xEDveis \u{1F33F}"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1986",
    local_nascimento: "Sun Prairie, Wisconsin, EUA",
    o_que_ele_fez: [
      "Pintou flores ampliadas como se vistas por uma lupa.",
      "Registrou paisagens do Novo M\xE9xico, com ossos e cruzes.",
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
    inicio: ["Tamara de Lempicka criava retratos modernos e elegantes \u2728"],
    explicacao_curta: ["Suas pinturas possuem formas brilhantes e geom\xE9tricas."],
    explicacao_aprofundada: ["Ela misturava luxo, modernidade e estilo art\xEDstico."],
    curiosidade: ["Suas obras lembram cenas de filmes antigos \u{1F3AC}"],
    interacao: ["Voc\xEA gosta de desenhos modernos e estilizados?"],
    atividade: ["Desenhe roupas usando linhas geom\xE9tricas \u270F\uFE0F"],
    final: ["A arte tamb\xE9m pode transmitir eleg\xE2ncia \u{1F31F}"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1980",
    local_nascimento: "Vars\xF3via, Pol\xF4nia",
    o_que_ele_fez: [
      "Pintou retratos da alta sociedade art d\xE9co.",
      "Usou cores met\xE1licas e formas geom\xE9tricas para retratar eleg\xE2ncia.",
      "Suas obras representam o glamour do s\xE9culo XX."
    ],
    onde_nasceu_resposta: "Tamara de Lempicka nasceu em Vars\xF3via, na Pol\xF4nia, em 1898.",
    ano_nascimento_resposta: "Tamara de Lempicka nasceu no ano de 1898.",
    ano_falecimento_resposta: "Tamara de Lempicka faleceu no ano de 1980."
  },
  marc_chagall: {
    tema: "artistas_universais",
    subtema: "marc_chagall",
    palavras_chave: ["chagall", "marc chagall"],
    inicio: ["Chagall pintava cenas parecidas com sonhos \u{1F319}"],
    explicacao_curta: ["Suas obras possuem cores suaves e personagens flutuando."],
    explicacao_aprofundada: ["He misturava mem\xF3ria, imagina\xE7\xE3o e fantasia em suas pinturas."],
    curiosidade: ["Em muitas obras de Chagall as pessoas parecem voar \u2601\uFE0F"],
    interacao: ["O que voc\xEA desenharia em um sonho?"],
    atividade: ["Pinte personagens flutuando no c\xE9u \u{1F3A8}"],
    final: ["A imagina\xE7\xE3o pode deixar a arte leve como nuvens \u2728"],
    emocao: "sonho",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1985",
    local_nascimento: "Liozna, Bielorr\xFAssia",
    o_que_ele_fez: [
      "Pintou casais flutuando sobre cidades, como em 'Sobre a Cidade'.",
      "Criou vitrais para a Catedral de Metz e a ONU.",
      "Misturou mem\xF3rias da inf\xE2ncia judaica com imagina\xE7\xE3o po\xE9tica."
    ],
    onde_nasceu_resposta: "Marc Chagall nasceu em Liozna, na Bielorr\xFAssia, em 1887.",
    ano_nascimento_resposta: "Chagall nasceu no ano de 1887.",
    ano_falecimento_resposta: "Chagall faleceu no ano de 1985."
  },
  paul_klee: {
    tema: "artistas_universais",
    subtema: "paul_klee",
    palavras_chave: ["paul klee", "klee"],
    inicio: ["Paul Klee misturava arte, m\xFAsica e imagina\xE7\xE3o \u{1F3B6}"],
    explicacao_curta: ["Ele criava pinturas com s\xEDmbolos e formas coloridas."],
    explicacao_aprofundada: ["Klee acreditava que linhas e cores podiam funcionar como m\xFAsica visual."],
    curiosidade: ["Muitas obras de Klee parecem mapas m\xE1gicos \u{1F5FA}\uFE0F"],
    interacao: ["Que formas combinam com m\xFAsica para voc\xEA?"],
    atividade: ["Crie padr\xF5es coloridos inspirados em sons \u{1F3A8}"],
    final: ["Arte e m\xFAsica podem conversar entre si \u2728"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1879",
    ano_falecimento: "1940",
    local_nascimento: "M\xFCnchenbuchsee, Su\xED\xE7a",
    o_que_ele_fez: [
      "Ensinou na escola de arte Bauhaus, influenciando gera\xE7\xF5es.",
      "Criou mais de 9.000 obras, cheias de humor e fantasia.",
      "Escreveu o livro 'Teoria da Arte Moderna', sobre cor e forma."
    ],
    onde_nasceu_resposta: "Paul Klee nasceu em M\xFCnchenbuchsee, na Su\xED\xE7a, em 1879.",
    ano_nascimento_resposta: "Paul Klee nasceu no ano de 1879.",
    ano_falecimento_resposta: "Paul Klee faleceu no ano de 1940."
  },
  roy_lichtenstein: {
    tema: "artistas_universais",
    subtema: "roy_lichtenstein",
    palavras_chave: ["lichtenstein", "roy lichtenstein", "pop art quadrinhos"],
    inicio: ["Roy Lichtenstein transformava quadrinhos em arte \u{1F3A8}"],
    explicacao_curta: ["Suas pinturas parecem p\xE1ginas gigantes de HQ."],
    explicacao_aprofundada: ["Ele usava pontos coloridos, bal\xF5es de fala e imagens inspiradas em revistas."],
    curiosidade: ["Os pontinhos de suas obras imitam impress\xF5es de revistas \u{1F7E1}"],
    interacao: ["Voc\xEA gosta de hist\xF3rias em quadrinhos?"],
    atividade: ["Crie um quadrinho usando bal\xF5es de fala \u270F\uFE0F"],
    final: ["A cultura popular tamb\xE9m pode virar arte \u{1F31F}"],
    emocao: "diversao",
    nivel: "leve",
    ano_nascimento: "1923",
    ano_falecimento: "1997",
    local_nascimento: "Nova York, EUA",
    o_que_ele_fez: [
      "Ampliou quadrinhos para telas enormes, com bal\xF5es e textos.",
      "Usou a t\xE9cnica de pontilhado (Ben-Day dots) para imitar impress\xE3o.",
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
    inicio: ["Botero criava personagens grandes e arredondados \u{1F388}"],
    explicacao_curta: ["Suas obras possuem formas exageradas e divertidas."],
    explicacao_aprofundada: ["Ele pintava pessoas, animais e objetos com volumes ampliados."],
    curiosidade: ["As esculturas de Botero aparecem em pra\xE7as e museus \u{1F30D}"],
    interacao: ["Voc\xEA conseguiria desenhar personagens bem redondinhos?"],
    atividade: ["Transforme figuras comuns em vers\xF5es gigantes \u{1F3A8}"],
    final: ["A arte pode brincar com tamanhos e formas \u2728"],
    emocao: "humor",
    nivel: "leve",
    ano_nascimento: "1932",
    ano_falecimento: "",
    local_nascimento: "Medell\xEDn, Col\xF4mbia",
    o_que_ele_fez: [
      "Pintou Mona Lisa com formas volumosas e divertidas.",
      "Fez esculturas de animais e pessoas com apar\xEAncia rechonchuda.",
      "Doou muitas obras para museus da Col\xF4mbia."
    ],
    onde_nasceu_resposta: "Fernando Botero nasceu em Medell\xEDn, na Col\xF4mbia, em 1932.",
    ano_nascimento_resposta: "Botero nasceu no ano de 1932."
  },
  jean_michel_basquiat: {
    tema: "artistas_universais",
    subtema: "jean_michel_basquiat",
    palavras_chave: ["basquiat", "jean michel basquiat"],
    inicio: ["Basquiat misturava desenho, escrita e arte urbana \u{1F451}"],
    explicacao_curta: ["Suas obras possuem energia e muitos s\xEDmbolos."],
    explicacao_aprofundada: ["Ele usava palavras, cores fortes e figuras expressivas para criar arte."],
    curiosidade: ["As coroas aparecem bastante em suas pinturas \u{1F451}"],
    interacao: ["Que s\xEDmbolo voc\xEA criaria para representar voc\xEA?"],
    atividade: ["Misture palavras e desenhos em uma mesma arte \u270F\uFE0F"],
    final: ["A arte pode unir imagem, texto e emo\xE7\xE3o \u{1F308}"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1960",
    ano_falecimento: "1988",
    local_nascimento: "Brooklyn, Nova York, EUA",
    o_que_ele_fez: [
      "Come\xE7ou como grafiteiro com o pseud\xF4nimo SAMO.",
      "Pintou o famoso cr\xE2nio com coroa e dentes amarelos.",
      "Colaborou com Andy Warhol em uma s\xE9rie de obras."
    ],
    onde_nasceu_resposta: "Jean-Michel Basquiat nasceu no Brooklyn, Nova York, em 1960.",
    ano_nascimento_resposta: "Basquiat nasceu no ano de 1960.",
    ano_falecimento_resposta: "Basquiat faleceu no ano de 1988."
  },
  bridget_riley: {
    tema: "artistas_universais",
    subtema: "bridget_riley",
    palavras_chave: ["bridget riley", "op art"],
    inicio: ["Bridget Riley criava ilus\xF5es usando linhas e formas \u{1F532}"],
    explicacao_curta: ["Suas obras parecem se mover diante dos olhos."],
    explicacao_aprofundada: ["Ela organizava padr\xF5es geom\xE9tricos para criar efeitos visuais."],
    curiosidade: ["A op art brinca com a percep\xE7\xE3o visual \u{1F440}"],
    interacao: ["Voc\xEA j\xE1 viu desenhos que parecem mexer?"],
    atividade: ["Fa\xE7a padr\xF5es usando linhas repetidas \u270F\uFE0F"],
    final: ["Os olhos tamb\xE9m participam da experi\xEAncia art\xEDstica \u2728"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1931",
    ano_falecimento: "",
    local_nascimento: "Londres, Reino Unido",
    o_que_ele_fez: [
      "Criou pinturas abstratas com listras em preto e branco que vibram.",
      "Foi uma das principais representantes da Op Art.",
      "Expandiu seu trabalho para cores, mantendo o efeito \xF3ptico."
    ],
    onde_nasceu_resposta: "Bridget Riley nasceu em Londres, no Reino Unido, em 1931.",
    ano_nascimento_resposta: "Bridget Riley nasceu no ano de 1931."
  },
  niki_de_saint_phalle: {
    tema: "artistas_universais",
    subtema: "niki_de_saint_phalle",
    palavras_chave: ["niki de saint phalle", "niki"],
    inicio: ["Niki criava esculturas gigantes e coloridas \u{1F308}"],
    explicacao_curta: ["Suas obras possuem formas alegres e criativas."],
    explicacao_aprofundada: ["Ela produzia esculturas inspiradas em movimento, dan\xE7a e fantasia."],
    curiosidade: ["Algumas esculturas de Niki parecem personagens m\xE1gicos \u2728"],
    interacao: ["Que escultura divertida voc\xEA inventaria?"],
    atividade: ["Desenhe criaturas coloridas gigantes \u{1F3A8}"],
    final: ["A arte pode ocupar espa\xE7os enormes e surpreendentes \u{1F31F}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1930",
    ano_falecimento: "2002",
    local_nascimento: "Neuilly-sur-Seine, Fran\xE7a",
    o_que_ele_fez: [
      "Criou as 'Nanas', esculturas alegres e volumosas de mulheres.",
      "Fez o Jardim dos Tar\xF4, com figuras gigantes na Toscana.",
      "Usou tiro de espingarda sobre tinta em suas primeiras obras."
    ],
    onde_nasceu_resposta: "Niki de Saint Phalle nasceu em Neuilly-sur-Seine, na Fran\xE7a, em 1930.",
    ano_nascimento_resposta: "Niki de Saint Phalle nasceu no ano de 1930.",
    ano_falecimento_resposta: "Niki de Saint Phalle faleceu no ano de 2002."
  },
  ai_weiwei: {
    tema: "artistas_universais",
    subtema: "ai_weiwei",
    palavras_chave: ["ai weiwei"],
    inicio: ["Ai Weiwei mistura arte, arquitetura e ideias \u{1F30D}"],
    explicacao_curta: ["Suas obras usam objetos e instala\xE7\xF5es gigantes."],
    explicacao_aprofundada: ["Ele cria trabalhos que fazem as pessoas observar e pensar sobre o mundo."],
    curiosidade: ["Algumas obras de Ai Weiwei ocupam salas inteiras \u{1F3DB}\uFE0F"],
    interacao: ["Voc\xEA gostaria de criar uma obra enorme?"],
    atividade: ["Monte uma instala\xE7\xE3o usando objetos recicl\xE1veis \u267B\uFE0F"],
    final: ["A arte tamb\xE9m pode provocar reflex\xE3o \u2728"],
    emocao: "pensamento",
    nivel: "leve",
    ano_nascimento: "1957",
    ano_falecimento: "",
    local_nascimento: "Pequim, China",
    o_que_ele_fez: [
      "Cobriu o ch\xE3o do Museu de Arte de T\xF3quio com 100 milh\xF5es de sementes de girassol de porcelana.",
      "Instalou milhares de mochilas em pra\xE7as para lembrar crian\xE7as.",
      "Projetou o Est\xE1dio Nacional de Pequim (Ninho de P\xE1ssaro)."
    ],
    onde_nasceu_resposta: "Ai Weiwei nasceu em Pequim, na China, em 1957.",
    ano_nascimento_resposta: "Ai Weiwei nasceu no ano de 1957."
  },
  takashi_murakami: {
    tema: "artistas_universais",
    subtema: "takashi_murakami",
    palavras_chave: ["murakami", "takashi murakami"],
    inicio: ["Murakami mistura arte japonesa e personagens coloridos \u{1F338}"],
    explicacao_curta: ["Suas obras parecem desenhos animados gigantes."],
    explicacao_aprofundada: ["Ele usa flores sorridentes, cores fortes e elementos da cultura pop."],
    curiosidade: ["As flores felizes ficaram famosas em suas obras \u{1F33C}"],
    interacao: ["Voc\xEA criaria personagens sorridentes?"],
    atividade: ["Desenhe flores com express\xF5es divertidas \u{1F308}"],
    final: ["A arte pode ser alegre e cheia de fantasia \u2728"],
    emocao: "alegria",
    nivel: "leve",
    ano_nascimento: "1962",
    ano_falecimento: "",
    local_nascimento: "T\xF3quio, Jap\xE3o",
    o_que_ele_fez: [
      "Criou o movimento art\xEDstico 'Superflat'.",
      "Desenhou flores sorridentes e personagens de olhos grandes.",
      "Colaborou com marcas como Louis Vuitton."
    ],
    onde_nasceu_resposta: "Takashi Murakami nasceu em T\xF3quio, no Jap\xE3o, em 1962.",
    ano_nascimento_resposta: "Takashi Murakami nasceu no ano de 1962."
  },
  anish_kapoor: {
    tema: "artistas_universais",
    subtema: "anish_kapoor",
    palavras_chave: ["anish kapoor"],
    inicio: ["Anish Kapoor cria esculturas gigantes e brilhantes \u{1FA9E}"],
    explicacao_curta: ["Suas obras brincam com reflexos e espa\xE7o."],
    explicacao_aprofundada: ["Muitas esculturas refletem pessoas e ambientes ao redor."],
    curiosidade: ["Algumas obras parecem espelhos gigantes \u{1F31F}"],
    interacao: ["Voc\xEA gosta de observar reflexos?"],
    atividade: ["Desenhe objetos refletindo luz \u270F\uFE0F"],
    final: ["Luz e reflexo tamb\xE9m podem virar arte \u2728"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1954",
    ano_falecimento: "",
    local_nascimento: "Bombaim, \xCDndia",
    o_que_ele_fez: [
      "Criou 'Cloud Gate' (o feij\xE3o polido) em Chicago.",
      "Usou pigmentos de cores intensas em esculturas que parecem sugar o espa\xE7o.",
      "Produziu a obra 'Descendo' que parece um v\xF3rtice vermelho."
    ],
    onde_nasceu_resposta: "Anish Kapoor nasceu em Bombaim, na \xCDndia, em 1954.",
    ano_nascimento_resposta: "Anish Kapoor nasceu no ano de 1954."
  },
  olafur_eliasson: {
    tema: "artistas_universais",
    subtema: "olafur_eliasson",
    palavras_chave: ["olafur eliasson"],
    inicio: ["Olafur Eliasson cria obras usando luz e natureza \u2600\uFE0F"],
    explicacao_curta: ["Ele mistura ci\xEAncia, cor e experi\xEAncias visuais."],
    explicacao_aprofundada: ["Suas instala\xE7\xF5es fazem as pessoas sentir luz, sombra e movimento."],
    curiosidade: ["Algumas salas parecem cheias de sol artificial \u{1F31E}"],
    interacao: ["Que tipo de luz voc\xEA usaria em uma obra?"],
    atividade: ["Brinque com lanternas criando sombras \u{1F3AD}"],
    final: ["A arte pode transformar a maneira de enxergar o espa\xE7o \u2728"],
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
    inicio: ["JR usa fotografias gigantes em espa\xE7os p\xFAblicos \u{1F4F8}"],
    explicacao_curta: ["Ele cola retratos enormes em paredes e constru\xE7\xF5es."],
    explicacao_aprofundada: ["Suas obras mostram rostos e hist\xF3rias de diferentes pessoas."],
    curiosidade: ["As imagens de JR podem ocupar pr\xE9dios inteiros \u{1F3D9}\uFE0F"],
    interacao: ["Que fotografia voc\xEA mostraria em um mural gigante?"],
    atividade: ["Monte colagens usando fotos e desenhos \u2702\uFE0F"],
    final: ["A arte urbana pode transformar cidades \u{1F306}"],
    emocao: "conexao",
    nivel: "leve",
    ano_nascimento: "1983",
    ano_falecimento: "",
    local_nascimento: "Paris, Fran\xE7a",
    o_que_ele_fez: [
      "Cobriu a fachada do Louvre com uma ilus\xE3o de \xF3tica.",
      "Colou retratos de refugiados em muros ao redor do mundo.",
      "Ganhou o pr\xEAmio TED em 2011 e criou o projeto 'Inside Out'."
    ],
    onde_nasceu_resposta: "JR nasceu em Paris, na Fran\xE7a, em 1983.",
    ano_nascimento_resposta: "JR nasceu no ano de 1983."
  },
  damien_hirst: {
    tema: "artistas_universais",
    subtema: "damien_hirst",
    palavras_chave: ["damien hirst", "hirst"],
    inicio: ["Damien Hirst cria obras curiosas e diferentes \u{1F9EA}"],
    explicacao_curta: ["Ele usa objetos, cores e instala\xE7\xF5es em suas artes."],
    explicacao_aprofundada: ["Suas obras exploram formas, padr\xF5es e maneiras diferentes de apresentar arte."],
    curiosidade: ["Algumas pinturas de Hirst usam muitos pontinhos coloridos \u{1F535}"],
    interacao: ["Voc\xEA gosta de obras diferentes e inesperadas?"],
    atividade: ["Fa\xE7a padr\xF5es usando c\xEDrculos coloridos \u{1F3A8}"],
    final: ["A arte contempor\xE2nea pode surpreender de muitos jeitos \u2728"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1965",
    ano_falecimento: "",
    local_nascimento: "Bristol, Reino Unido",
    o_que_ele_fez: [
      "Imobilizou um tubar\xE3o em formol para a obra 'A Impossibilidade F\xEDsica da Morte'.",
      "Pintou s\xE9ries de pontos coloridos ('Spot Paintings').",
      "Criou 'Por Amor a Deus', uma caveira cravejada de diamantes."
    ],
    onde_nasceu_resposta: "Damien Hirst nasceu em Bristol, no Reino Unido, em 1965.",
    ano_nascimento_resposta: "Damien Hirst nasceu no ano de 1965."
  },
  marina_abramovic: {
    tema: "artistas_universais",
    subtema: "marina_abramovic",
    palavras_chave: ["marina abramovic", "performance artistica"],
    inicio: ["Marina Abramovi\u0107 usa o corpo como forma de arte \u{1F3AD}"],
    explicacao_curta: ["Ela cria performances cheias de express\xE3o."],
    explicacao_aprofundada: ["Suas apresenta\xE7\xF5es exploram sil\xEAncio, presen\xE7a e emo\xE7\xF5es."],
    curiosidade: ["A performance art\xEDstica acontece ao vivo diante do p\xFAblico \u2728"],
    interacao: ["Voc\xEA j\xE1 tentou se expressar usando apenas gestos?"],
    atividade: ["Crie movimentos para representar emo\xE7\xF5es \u{1F3A8}"],
    final: ["O corpo tamb\xE9m pode contar hist\xF3rias \u{1F31F}"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1946",
    ano_falecimento: "",
    local_nascimento: "Belgrado, S\xE9rvia",
    o_que_ele_fez: [
      "Ficou sentada em sil\xEAncio por 736 horas no MoMA, olhando nos olhos dos visitantes.",
      "Andou pela Grande Muralha da China para encontrar seu ex-parceiro.",
      "Usou objetos perigosos e dor como parte de suas performances."
    ],
    onde_nasceu_resposta: "Marina Abramovi\u0107 nasceu em Belgrado, na S\xE9rvia, em 1946.",
    ano_nascimento_resposta: "Marina Abramovi\u0107 nasceu no ano de 1946."
  },
  zaha_hadid: {
    tema: "artistas_universais",
    subtema: "zaha_hadid",
    palavras_chave: ["zaha hadid", "arquitetura moderna"],
    inicio: ["Zaha Hadid criava constru\xE7\xF5es futuristas \u{1F3D9}\uFE0F"],
    explicacao_curta: ["Suas obras possuem curvas e formas modernas."],
    explicacao_aprofundada: ["Ela imaginava pr\xE9dios parecidos com ondas, movimento e natureza."],
    curiosidade: ["Muitos pr\xE9dios de Zaha parecem sa\xEDdos do futuro \u{1F680}"],
    interacao: ["Como seria a constru\xE7\xE3o dos seus sonhos?"],
    atividade: ["Desenhe um pr\xE9dio cheio de curvas \u270F\uFE0F"],
    final: ["Arquitetura tamb\xE9m pode parecer arte em movimento \u2728"],
    emocao: "imaginacao",
    nivel: "leve",
    ano_nascimento: "1950",
    ano_falecimento: "2016",
    local_nascimento: "Bagd\xE1, Iraque",
    o_que_ele_fez: [
      "Projetou o Aquatics Centre para as Olimp\xEDadas de Londres.",
      "Criou o edif\xEDcio da \xD3pera de Guangzhou, na China.",
      "Foi a primeira mulher a ganhar o Pr\xEAmio Pritzker de arquitetura."
    ],
    onde_nasceu_resposta: "Zaha Hadid nasceu em Bagd\xE1, no Iraque, em 1950.",
    ano_nascimento_resposta: "Zaha Hadid nasceu no ano de 1950.",
    ano_falecimento_resposta: "Zaha Hadid faleceu no ano de 2016."
  },
  antoni_gaudi: {
    tema: "artistas_universais",
    subtema: "antoni_gaudi",
    palavras_chave: ["gaudi", "antoni gaudi", "sagrada familia"],
    inicio: ["Gaud\xED criava constru\xE7\xF5es inspiradas na natureza \u{1F33F}"],
    explicacao_curta: ["Suas obras possuem curvas, mosaicos e formas diferentes."],
    explicacao_aprofundada: ["Ele misturava arquitetura, cores e detalhes criativos em seus projetos."],
    curiosidade: ["A Sagrada Fam\xEDlia \xE9 uma de suas obras mais famosas \u26EA"],
    interacao: ["Que forma da natureza voc\xEA usaria em um pr\xE9dio?"],
    atividade: ["Crie mosaicos usando formas coloridas \u{1F3A8}"],
    final: ["A natureza pode inspirar constru\xE7\xF5es incr\xEDveis \u{1F308}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1852",
    ano_falecimento: "1926",
    local_nascimento: "Reus, Espanha",
    o_que_ele_fez: [
      "Projetou a Sagrada Fam\xEDlia, que ainda est\xE1 em constru\xE7\xE3o.",
      "Criou o Parque G\xFCell, com bancos de mosaico e formas onduladas.",
      "Usou arcos parab\xF3licos e colunas inclinadas em seus edif\xEDcios."
    ],
    onde_nasceu_resposta: "Antoni Gaud\xED nasceu em Reus, na Espanha, em 1852.",
    ano_nascimento_resposta: "Gaud\xED nasceu no ano de 1852.",
    ano_falecimento_resposta: "Gaud\xED faleceu no ano de 1926."
  },
  auguste_rodin: {
    tema: "artistas_universais",
    subtema: "auguste_rodin",
    palavras_chave: ["rodin", "o pensador"],
    inicio: ["Rodin transformava pedra e bronze em emo\xE7\xE3o \u{1F5FF}"],
    explicacao_curta: ["Ele foi um importante escultor franc\xEAs."],
    explicacao_aprofundada: ["Suas esculturas mostram movimento, express\xE3o e detalhes do corpo humano."],
    curiosidade: ["O Pensador \xE9 uma de suas esculturas mais famosas \u{1F914}"],
    interacao: ["Que pose voc\xEA criaria para uma escultura?"],
    atividade: ["Modele personagens usando massinha \u{1F3A8}"],
    final: ["As esculturas podem parecer cheias de vida \u2728"],
    emocao: "reflexao",
    nivel: "leve",
    ano_nascimento: "1840",
    ano_falecimento: "1917",
    local_nascimento: "Paris, Fran\xE7a",
    o_que_ele_fez: [
      "Criou 'O Pensador', originalmente parte de uma porta gigante chamada 'Port\xE3o do Inferno'.",
      "Esculpiu 'O Beijo', mostrando um casal se abra\xE7ando.",
      "Enfrentou cr\xEDticas por suas esculturas realistas e emocionais."
    ],
    onde_nasceu_resposta: "Auguste Rodin nasceu em Paris, na Fran\xE7a, em 1840.",
    ano_nascimento_resposta: "Rodin nasceu no ano de 1840.",
    ano_falecimento_resposta: "Rodin faleceu no ano de 1917."
  },
  henry_moore: {
    tema: "artistas_universais",
    subtema: "henry_moore",
    palavras_chave: ["henry moore"],
    inicio: ["Henry Moore criava esculturas com formas suaves \u{1F319}"],
    explicacao_curta: ["Suas obras lembram pedras, montanhas e corpos humanos."],
    explicacao_aprofundada: ["Ele explorava curvas e espa\xE7os vazios nas esculturas."],
    curiosidade: ["Muitas esculturas de Moore ficam ao ar livre \u{1F33F}"],
    interacao: ["Voc\xEA gosta de formas arredondadas?"],
    atividade: ["Crie esculturas com argila ou papel \u2702\uFE0F"],
    final: ["As formas simples podem transmitir beleza \u{1F31F}"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1986",
    local_nascimento: "Castleford, Reino Unido",
    o_que_ele_fez: [
      "Criou esculturas abstratas de figuras reclinadas.",
      "Usou buracos e formas org\xE2nicas inspiradas em ossos e seixos.",
      "Doou muitas obras para a Funda\xE7\xE3o Henry Moore."
    ],
    onde_nasceu_resposta: "Henry Moore nasceu em Castleford, no Reino Unido, em 1898.",
    ano_nascimento_resposta: "Henry Moore nasceu no ano de 1898.",
    ano_falecimento_resposta: "Henry Moore faleceu no ano de 1986."
  },
  louise_bourgeois: {
    tema: "artistas_universais",
    subtema: "louise_bourgeois",
    palavras_chave: ["louise bourgeois", "aranha gigante"],
    inicio: ["Louise Bourgeois criava esculturas gigantes e expressivas \u{1F577}\uFE0F"],
    explicacao_curta: ["Ela explorava emo\xE7\xF5es atrav\xE9s da arte."],
    explicacao_aprofundada: ["Suas esculturas misturam mem\xF3ria, sentimentos e imagina\xE7\xE3o."],
    curiosidade: ["As aranhas gigantes ficaram famosas em suas obras \u2728"],
    interacao: ["Que animal voc\xEA transformaria em escultura?"],
    atividade: ["Desenhe criaturas enormes e imagin\xE1rias \u{1F3A8}"],
    final: ["A arte pode transformar emo\xE7\xF5es in formas \u{1F308}"],
    emocao: "expressao",
    nivel: "leve",
    ano_nascimento: "1911",
    ano_falecimento: "2010",
    local_nascimento: "Paris, Fran\xE7a",
    o_que_ele_fez: [
      "Criou a escultura 'Maman', uma aranha gigante de bronze.",
      "Produziu c\xE9lulas, ambientes com objetos pessoais e tecidos.",
      "Trabalhou com tecido, borracha e m\xE1rmore at\xE9 os 90 anos."
    ],
    onde_nasceu_resposta: "Louise Bourgeois nasceu em Paris, na Fran\xE7a, em 1911.",
    ano_nascimento_resposta: "Louise Bourgeois nasceu no ano de 1911.",
    ano_falecimento_resposta: "Louise Bourgeois faleceu no ano de 2010."
  },
  constantin_brancusi: {
    tema: "artistas_universais",
    subtema: "constantin_brancusi",
    palavras_chave: ["brancusi"],
    inicio: ["Brancusi gostava de simplificar as formas \u2728"],
    explicacao_curta: ["Suas esculturas possuem linhas suaves e elegantes."],
    explicacao_aprofundada: ["Ele acreditava que a simplicidade podia mostrar a ess\xEAncia das coisas."],
    curiosidade: ["Algumas esculturas parecem p\xE1ssaros voando \u{1F54A}\uFE0F"],
    interacao: ["Voc\xEA prefere desenhos simples ou detalhados?"],
    atividade: ["Crie figuras usando poucas linhas \u270F\uFE0F"],
    final: ["A simplicidade tamb\xE9m pode ser poderosa \u{1F31F}"],
    emocao: "calma",
    nivel: "leve",
    ano_nascimento: "1876",
    ano_falecimento: "1957",
    local_nascimento: "Hobi\u021Ba, Rom\xEAnia",
    o_que_ele_fez: [
      "Esculpiu 'P\xE1ssaro no Espa\xE7o', uma forma alongada e elegante.",
      "Simplificou figuras humanas at\xE9 formas ovais b\xE1sicas.",
      "Trabalhou principalmente com m\xE1rmore, bronze e madeira."
    ],
    onde_nasceu_resposta: "Constantin Brancusi nasceu em Hobi\u021Ba, na Rom\xEAnia, em 1876.",
    ano_nascimento_resposta: "Brancusi nasceu no ano de 1876.",
    ano_falecimento_resposta: "Brancusi faleceu no ano de 1957."
  },
  edmonia_lewis: {
    tema: "artistas_universais",
    subtema: "edmonia_lewis",
    palavras_chave: ["edmonia lewis"],
    inicio: ["Edmonia Lewis criou esculturas cheias de significado \u{1F5FF}"],
    explicacao_curta: ["Ela foi uma importante escultora do s\xE9culo XIX."],
    explicacao_aprofundada: ["Suas obras representavam hist\xF3rias, cultura e liberdade."],
    curiosidade: ["Ela trabalhava principalmente com m\xE1rmore \u2728"],
    interacao: ["Que hist\xF3ria voc\xEA contaria em uma escultura?"],
    atividade: ["Modele personagens usando massinha \u{1F3A8}"],
    final: ["A arte pode guardar hist\xF3rias importantes \u{1F30D}"],
    emocao: "inspiracao",
    nivel: "leve",
    ano_nascimento: "1844",
    ano_falecimento: "1907",
    local_nascimento: "Greenbush, Nova York, EUA",
    o_que_ele_fez: [
      "Esculpiu 'A Morte de Cle\xF3patra', uma obra dram\xE1tica em m\xE1rmore.",
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
    inicio: ["Hokusai ficou famoso por suas gravuras japonesas \u{1F30A}"],
    explicacao_curta: ["Ele retratava natureza, ondas e paisagens."],
    explicacao_aprofundada: ["Suas obras possuem linhas marcantes e detalhes inspirados no Jap\xE3o."],
    curiosidade: ["A Grande Onda \xE9 uma das imagens mais conhecidas da arte japonesa \u{1F30A}"],
    interacao: ["Voc\xEA gostaria de desenhar ondas gigantes?"],
    atividade: ["Fa\xE7a desenhos usando linhas curvas e repetidas \u270F\uFE0F"],
    final: ["A natureza pode inspirar imagens inesquec\xEDveis \u2728"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1760",
    ano_falecimento: "1849",
    local_nascimento: "T\xF3quio, Jap\xE3o",
    o_que_ele_fez: [
      "Criou the xilogravura 'A Grande Onda de Kanagawa'.",
      "Produziu a s\xE9rie '36 Vistas do Monte Fuji'.",
      "Mudou de estilo v\xE1rias vezes ao longo da vida, sempre inovando."
    ],
    onde_nasceu_resposta: "Hokusai nasceu em T\xF3quio, no Jap\xE3o, em 1760.",
    ano_nascimento_resposta: "Hokusai nasceu no ano de 1760.",
    ano_falecimento_resposta: "Hokusai faleceu no ano de 1849."
  },
  marcel_duchamp: {
    tema: "artistas_universais",
    subtema: "marcel_duchamp",
    palavras_chave: ["duchamp", "marcel duchamp", "arte conceitual", "ready made"],
    inicio: ["Marcel Duchamp gostava de transformar ideias em arte \u{1F9E0}"],
    explicacao_curta: ["Ele mostrou que objetos comuns tamb\xE9m podem virar obras de arte."],
    explicacao_aprofundada: ["Duchamp ficou famoso por apresentar objetos do cotidiano como arte, fazendo as pessoas pensarem sobre criatividade e imagina\xE7\xE3o."],
    curiosidade: ["Ele chamou algumas de suas obras de ready-mades \u2728"],
    interacao: ["Que objeto comum voc\xEA transformaria em arte?"],
    atividade: ["Escolha um objeto da casa e invente um novo significado para ele \u{1F3A8}"],
    final: ["\xC0s vezes a ideia pode ser t\xE3o importante quanto o desenho \u{1F308}"],
    emocao: "curiosidade",
    nivel: "leve",
    ano_nascimento: "1887",
    ano_falecimento: "1968",
    local_nascimento: "Blainville-Crevon, Fran\xE7a",
    o_que_ele_fez: [
      "Apresentou um urinol assinado como obra de arte ('Fonte').",
      "Colocou uma roda de bicicleta sobre um banco, criando um ready-made.",
      "Desafiou as defini\xE7\xF5es tradicionais de arte e influenciou a arte conceitual."
    ],
    onde_nasceu_resposta: "Marcel Duchamp nasceu em Blainville-Crevon, na Fran\xE7a, in 1887.",
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
      "Dan\xE7ar \xE9 contar hist\xF3rias usando o corpo \u{1F483}",
      "A dan\xE7a transforma movimentos em express\xE3o \u2728"
    ],
    explicacao_curta: [
      "A dan\xE7a usa movimentos para mostrar ideias e sentimentos."
    ],
    explicacao_aprofundada: [
      "As pessoas dan\xE7am em festas, celebra\xE7\xF5es e apresenta\xE7\xF5es art\xEDsticas h\xE1 milhares de anos."
    ],
    curiosidade: [
      "Cada cultura possui dan\xE7as com ritmos e movimentos diferentes \u{1F30E}"
    ],
    interacao: [
      "Voc\xEA gosta mais de dan\xE7ar r\xE1pido ou devagar?"
    ],
    atividade: [
      "Crie uma dan\xE7a usando movimentos inspirados em animais \u{1F426}"
    ],
    final: [
      "A dan\xE7a faz o corpo se transformar em arte \u{1F308}"
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
      "A dan\xE7a mistura corpo, espa\xE7o, ritmo e energia \u2728"
    ],
    explicacao_curta: [
      "Na dan\xE7a usamos movimentos, ritmo e express\xE3o corporal."
    ],
    explicacao_aprofundada: [
      "Os movimentos podem ser r\xE1pidos, suaves, fortes ou leves, dependendo da dan\xE7a."
    ],
    curiosidade: [
      "At\xE9 o sil\xEAncio pode fazer parte de uma dan\xE7a \u{1F319}"
    ],
    interacao: [
      "Que movimento combina mais com alegria para voc\xEA?"
    ],
    atividade: [
      "Fa\xE7a movimentos lentos e depois r\xE1pidos \u{1F3B5}"
    ],
    final: [
      "Cada corpo possui um jeito \xFAnico de dan\xE7ar \u{1F31F}"
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
      "Os passos criam o caminho da dan\xE7a \u{1F463}"
    ],
    explicacao_curta: [
      "Passos de dan\xE7a s\xE3o movimentos organizados em sequ\xEAncia."
    ],
    explicacao_aprofundada: [
      "Quando v\xE1rios passos s\xE3o combinados, nasce uma coreografia."
    ],
    curiosidade: [
      "Algumas coreografias possuem centenas de movimentos diferentes \u2728"
    ],
    interacao: [
      "Voc\xEA consegue inventar tr\xEAs passos diferentes?"
    ],
    atividade: [
      "Crie uma pequena sequ\xEAncia com palmas e giros \u{1F4AB}"
    ],
    final: [
      "Cada passo ajuda a construir a dan\xE7a \u{1F308}"
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
      "O bal\xE9 parece uma dan\xE7a flutuando no ar \u{1FA70}"
    ],
    explicacao_curta: [
      "O bal\xE9 possui movimentos suaves, giros e saltos."
    ],
    explicacao_aprofundada: [
      "Os dan\xE7arinos treinam equil\xEDbrio, postura e precis\xE3o nos movimentos."
    ],
    curiosidade: [
      "As sapatilhas ajudam os bailarinos a fazer movimentos delicados \u2728"
    ],
    interacao: [
      "Voc\xEA gostaria de aprender um giro de bal\xE9?"
    ],
    atividade: [
      "Tente caminhar na ponta dos p\xE9s \u{1FA70}"
    ],
    final: [
      "O bal\xE9 mistura leveza, m\xFAsica e disciplina \u{1F319}"
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
      "O hip hop \xE9 cheio de energia e atitude \u{1F3A7}"
    ],
    explicacao_curta: [
      "\xC9 uma dan\xE7a urbana com movimentos livres e criativos."
    ],
    explicacao_aprofundada: [
      "No hip hop cada pessoa pode criar passos e mostrar seu pr\xF3prio estilo."
    ],
    curiosidade: [
      "O breakdance possui giros e movimentos acrob\xE1ticos incr\xEDveis \u{1F525}"
    ],
    interacao: [
      "Que movimento voc\xEA inventaria em uma dan\xE7a de hip hop?"
    ],
    atividade: [
      "Crie uma sequ\xEAncia com passos r\xE1pidos e pausas \u{1F3B5}"
    ],
    final: [
      "O hip hop transforma ritmo em express\xE3o \u{1F31F}"
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
      "O frevo \xE9 uma explos\xE3o de cores e movimentos \u{1F389}"
    ],
    explicacao_curta: [
      "\xC9 uma dan\xE7a r\xE1pida e cheia de energia de Pernambuco."
    ],
    explicacao_aprofundada: [
      "Os dan\xE7arinos fazem saltos, giros e movimentos \xE1geis usando sombrinhas coloridas."
    ],
    curiosidade: [
      "O frevo \xE9 considerado patrim\xF4nio cultural brasileiro \u{1F308}"
    ],
    interacao: [
      "Voc\xEA conseguiria dan\xE7ar segurando uma sombrinha?"
    ],
    atividade: [
      "Crie uma mini sombrinha colorida \u{1F3A8}"
    ],
    final: [
      "O frevo faz as ruas parecerem festas dan\xE7antes \u{1F31F}"
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
      "A ciranda re\xFAne pessoas em roda \u{1F91D}"
    ],
    explicacao_curta: [
      "As pessoas d\xE3o as m\xE3os e dan\xE7am juntas."
    ],
    explicacao_aprofundada: [
      "A ciranda valoriza uni\xE3o, m\xFAsica e participa\xE7\xE3o coletiva."
    ],
    curiosidade: [
      "A ciranda \xE9 muito conhecida nas praias de Pernambuco \u{1F30A}"
    ],
    interacao: [
      "Voc\xEA gosta de brincadeiras em roda?"
    ],
    atividade: [
      "Fa\xE7a uma roda com amigos e invente passos simples \u{1F3B5}"
    ],
    final: [
      "A ciranda transforma dan\xE7a em amizade \u{1F308}"
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
      "O carimb\xF3 possui ritmo alegre e girat\xF3rio \u{1F33F}"
    ],
    explicacao_curta: [
      "\xC9 uma dan\xE7a tradicional do Par\xE1."
    ],
    explicacao_aprofundada: [
      "Os movimentos leves acompanham m\xFAsicas animadas e roupas coloridas."
    ],
    curiosidade: [
      "O carimb\xF3 mistura influ\xEAncias ind\xEDgenas, africanas e europeias \u2728"
    ],
    interacao: [
      "Voc\xEA gosta de dan\xE7as com giros?"
    ],
    atividade: [
      "Fa\xE7a movimentos circulares acompanhando uma m\xFAsica \u{1F3B6}"
    ],
    final: [
      "O carimb\xF3 espalha ritmo e alegria \u{1F31E}"
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
      "O funk possui batidas fortes e cheias de energia \u{1F50A}"
    ],
    explicacao_curta: [
      "O funk \xE9 uma dan\xE7a brasileira muito presente nas festas e na cultura jovem."
    ],
    explicacao_aprofundada: [
      "Os movimentos acompanham ritmos marcantes e permitem muita criatividade."
    ],
    curiosidade: [
      "O funk brasileiro nasceu nas comunidades urbanas \u{1F3B6}"
    ],
    interacao: [
      "Voc\xEA consegue criar um passo divertido de funk?"
    ],
    atividade: [
      "Monte uma sequ\xEAncia de movimentos r\xE1pidos \u{1F3B5}"
    ],
    final: [
      "A dan\xE7a pode transformar ritmo em express\xE3o \u{1F308}"
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
      "A dan\xE7a cl\xE1ssica busca beleza e precis\xE3o \u2728"
    ],
    explicacao_curta: [
      "Ela possui movimentos treinados e organizados."
    ],
    explicacao_aprofundada: [
      "Os dan\xE7arinos praticam equil\xEDbrio, postura e movimentos delicados."
    ],
    interacao: [
      "Voc\xEA gostaria de aprender movimentos suaves?"
    ],
    atividade: [
      "Experimente andar lentamente na ponta dos p\xE9s \u{1FA70}"
    ],
    final: [
      "A dan\xE7a cl\xE1ssica mistura disciplina e arte \u{1F319}"
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
      "Na dan\xE7a de sal\xE3o duas pessoas dan\xE7am juntas \u{1F483}\u{1F57A}"
    ],
    explicacao_curta: [
      "Os parceiros acompanham o ritmo da m\xFAsica."
    ],
    explicacao_aprofundada: [
      "A dan\xE7a de sal\xE3o valoriza parceria, coordena\xE7\xE3o e sintonia."
    ],
    interacao: [
      "Voc\xEA j\xE1 tentou acompanhar passos com outra pessoa?"
    ],
    atividade: [
      "Fa\xE7a movimentos em dupla seguindo uma m\xFAsica \u{1F3B5}"
    ],
    final: [
      "Dan\xE7ar junto cria conex\xE3o e divers\xE3o \u{1F31F}"
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
      "A dan\xE7a contempor\xE2nea mistura liberdade e criatividade \u{1F308}"
    ],
    explicacao_curta: [
      "Os movimentos podem ser diferentes e cheios de express\xE3o."
    ],
    explicacao_aprofundada: [
      "Ela permite criar movimentos livres inspirados em sentimentos e ideias."
    ],
    interacao: [
      "Que emo\xE7\xE3o voc\xEA transformaria em dan\xE7a?"
    ],
    atividade: [
      "Dance imaginando vento, chuva ou ondas \u{1F30A}"
    ],
    final: [
      "Na dan\xE7a contempor\xE2nea o corpo vira imagina\xE7\xE3o \u2728"
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
      "O maracatu mistura dan\xE7a, m\xFAsica e tradi\xE7\xE3o afro-brasileira \u{1F941}"
    ],
    explicacao_curta: [
      "Os cortejos possuem tambores fortes e roupas coloridas."
    ],
    explicacao_aprofundada: [
      "O maracatu representa reis, rainhas e elementos culturais afro-brasileiros."
    ],
    curiosidade: [
      "Os tambores do maracatu criam ritmos poderosos \u{1F525}"
    ],
    interacao: [
      "Voc\xEA gosta de m\xFAsicas com tambores?"
    ],
    atividade: [
      "Crie um ritmo usando palmas e batidas \u{1F941}"
    ],
    final: [
      "O maracatu une ritmo, hist\xF3ria e celebra\xE7\xE3o \u{1F31F}"
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
      "O cavalo-marinho mistura dan\xE7a, m\xFAsica e teatro \u{1F3AD}"
    ],
    explicacao_curta: [
      "A apresenta\xE7\xE3o possui personagens, fantasias e brincadeiras."
    ],
    explicacao_aprofundada: [
      "Essa manifesta\xE7\xE3o cultural combina humor, ritmo e representa\xE7\xE3o teatral."
    ],
    curiosidade: [
      "O cavalo-marinho \xE9 muito tradicional em Pernambuco \u{1F33F}"
    ],
    interacao: [
      "Voc\xEA gostaria de usar fantasias em uma apresenta\xE7\xE3o?"
    ],
    atividade: [
      "Crie um personagem divertido para uma dan\xE7a \u{1F3A8}"
    ],
    final: [
      "O cavalo-marinho transforma cultura em brincadeira \u2728"
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
      "O jongo mistura dan\xE7a, canto e tambores \u{1F941}"
    ],
    explicacao_curta: [
      "As pessoas dan\xE7am em roda acompanhando o ritmo."
    ],
    explicacao_aprofundada: [
      "O jongo possui forte liga\xE7\xE3o com tradi\xE7\xF5es afro-brasileiras."
    ],
    interacao: [
      "Voc\xEA consegue criar um ritmo usando o corpo?"
    ],
    atividade: [
      "Dance em roda acompanhando palmas \u{1F3B5}"
    ],
    final: [
      "O jongo mant\xE9m tradi\xE7\xF5es culturais vivas \u{1F33F}"
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
      "A catira mistura sapateado, palmas e ritmo \u{1F462}"
    ],
    explicacao_curta: [
      "Os dan\xE7arinos marcam a m\xFAsica com p\xE9s e m\xE3os."
    ],
    explicacao_aprofundada: [
      "A dan\xE7a possui movimentos sincronizados e muito ritmo."
    ],
    interacao: [
      "Voc\xEA consegue bater palmas no ritmo de uma m\xFAsica?"
    ],
    atividade: [
      "Crie uma sequ\xEAncia de palmas e passos \u{1F44F}"
    ],
    final: [
      "A catira transforma ritmo em movimento \u{1F31F}"
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
      "O fandango possui sapateado e m\xFAsica animada \u{1F3BB}"
    ],
    explicacao_curta: [
      "Essa dan\xE7a tradicional \xE9 muito conhecida no sul do Brasil."
    ],
    explicacao_aprofundada: [
      "Os dan\xE7arinos marcam o ritmo usando os p\xE9s e movimentos coordenados."
    ],
    interacao: [
      "Voc\xEA gosta de dan\xE7as r\xE1pidas ou lentas?"
    ],
    atividade: [
      "Experimente marcar ritmos diferentes com os p\xE9s \u{1F463}"
    ],
    final: [
      "O fandango mistura tradi\xE7\xE3o e alegria \u{1F308}"
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
      "A congada mistura m\xFAsica, dan\xE7a e tradi\xE7\xE3o afro-brasileira \u{1F451}"
    ],
    explicacao_curta: [
      "Ela possui cortejos, cantos e celebra\xE7\xF5es culturais."
    ],
    explicacao_aprofundada: [
      "A congada mant\xE9m hist\xF3rias e tradi\xE7\xF5es importantes da cultura afro-brasileira."
    ],
    interacao: [
      "Voc\xEA j\xE1 viu desfiles culturais com m\xFAsica e dan\xE7a?"
    ],
    atividade: [
      "Crie coroas e roupas coloridas em um desenho \u{1F3A8}"
    ],
    final: [
      "A congada celebra mem\xF3ria, cultura e comunidade \u{1F31F}"
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
      "O caboclinho possui movimentos r\xE1pidos e cheios de energia \u{1F33F}"
    ],
    explicacao_curta: [
      "A dan\xE7a \xE9 inspirada nos povos ind\xEDgenas."
    ],
    explicacao_aprofundada: [
      "Os movimentos lembram guerreiros em a\xE7\xE3o acompanhados por m\xFAsica forte."
    ],
    interacao: [
      "Voc\xEA conseguiria criar movimentos inspirados na natureza?"
    ],
    atividade: [
      "Dance imaginando passos leves pela floresta \u{1F333}"
    ],
    final: [
      "O caboclinho mistura tradi\xE7\xE3o, ritmo e movimento \u2728"
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
      "O coco pernambucano \xE9 cheio de ritmo e anima\xE7\xE3o \u{1F965}"
    ],
    explicacao_curta: [
      "As pessoas cantam, batem palmas e dan\xE7am juntas."
    ],
    explicacao_aprofundada: [
      "Os movimentos acompanham m\xFAsicas alegres e batidas marcantes."
    ],
    interacao: [
      "Voc\xEA gosta de m\xFAsicas com palmas e batidas?"
    ],
    atividade: [
      "Crie ritmos usando p\xE9s e m\xE3os \u{1F44F}\u{1F463}"
    ],
    final: [
      "O coco transforma m\xFAsica e dan\xE7a em celebra\xE7\xE3o \u{1F31E}"
    ],
    emocao: "animacao",
    nivel: "leve"
  },
  arte_rupestre: {
    tema: "historia_arte",
    subtema: "arte_rupestre",
    palavras_chave: ["arte rupestre", "caverna", "desenho na pedra", "arte antiga"],
    inicio: ["A arte rupestre \xE9 uma das formas de arte mais antigas do mundo \u{1FAA8}"],
    explicacao_curta: ["Os seres humanos desenhavam nas paredes das cavernas usando tintas naturais."],
    explicacao_aprofundada: ["Esses desenhos mostravam animais, ca\xE7adas e momentos do cotidiano das antigas comunidades."],
    curiosidade: ["Algumas pinturas rupestres existem h\xE1 milhares de anos \u23F3"],
    interacao: ["O que voc\xEA desenharia para contar sua hist\xF3ria?"],
    atividade: ["Fa\xE7a desenhos usando tons terrosos em papel kraft \u{1F3A8}"],
    final: ["As cavernas guardam mem\xF3rias dos primeiros artistas \u{1F30D}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  arte_egipcia: {
    tema: "historia_arte",
    subtema: "arte_egipcia",
    palavras_chave: ["arte egipcia", "egito antigo", "hieroglifo", "piramide", "egito", "egipcio", "egipcia"],
    inicio: ["A arte eg\xEDpcia nasceu \xE0s margens do rio Nilo \u{1F3FA}"],
    explicacao_curta: ["Ela aparece em pir\xE2mides, templos e pinturas cheias de s\xEDmbolos."],
    explicacao_aprofundada: ["Os eg\xEDpcios desenhavam pessoas de lado e utilizavam hier\xF3glifos para registrar hist\xF3rias e cren\xE7as."],
    curiosidade: ["Os hier\xF3glifos funcionavam como uma escrita com desenhos \u2728"],
    interacao: ["Voc\xEA gostaria de criar seu pr\xF3prio s\xEDmbolo eg\xEDpcio?"],
    atividade: ["Desenhe uma pir\xE2mide com s\xEDmbolos inventados \u270F\uFE0F"],
    final: ["A arte eg\xEDpcia mistura mist\xE9rio, hist\xF3ria e s\xEDmbolos \u{1F31E}"],
    emocao: "misterio",
    nivel: "leve",
    resposta_direta: `\u{1F3FA} **Arte Eg\xEDpcia**

\u{1F4C5} **Per\xEDodo**: c. 3000 a.C. a 30 a.C.

\u{1F3A8} **Principais Artistas**: Os artistas geralmente n\xE3o assinavam suas obras.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Ligada \xE0 religi\xE3o e aos fara\xF3s.
\u2022 Figuras desenhadas de perfil.
\u2022 Hierarquia de tamanho (o fara\xF3 aparecia maior).
\u2022 Pinturas, esculturas e pir\xE2mides.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 M\xE1scara de Tutanc\xE2mon.
\u2022 Pir\xE2mides de Giz\xE9.`
  },
  arte_grega: {
    tema: "historia_arte",
    subtema: "arte_grega",
    palavras_chave: ["arte grega", "grecia antiga", "escultura grega", "grecia", "grego", "grega", "fidias", "miron", "policleto", "discobolo"],
    inicio: ["Os gregos valorizavam equil\xEDbrio e beleza \u{1F3DB}\uFE0F"],
    explicacao_curta: ["A arte grega mostrava esculturas e constru\xE7\xF5es harmoniosas."],
    explicacao_aprofundada: ["Os artistas gregos estudavam o corpo humano e criavam obras com propor\xE7\xE3o e movimento."],
    curiosidade: ["Muitas esculturas gregas representavam atletas e deuses \u26A1"],
    interacao: ["Voc\xEA j\xE1 viu colunas gregas em filmes ou desenhos?"],
    atividade: ["Crie uma constru\xE7\xE3o usando formas sim\xE9tricas \u270F\uFE0F"],
    final: ["A arte grega influenciou artistas do mundo inteiro \u{1F30D}"],
    emocao: "admiracao",
    nivel: "leve",
    resposta_direta: `\u{1F3DB}\uFE0F **Arte Grega**

\u{1F4C5} **Per\xEDodo**: c. 800 a.C. a 146 a.C.

\u{1F3A8} **Principais Artistas**: F\xEDdias, M\xEDron, Policleto.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Busca da beleza e propor\xE7\xE3o do corpo humano.
\u2022 Temas mitol\xF3gicos.
\u2022 Esculturas realistas.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 Disc\xF3bolo (M\xEDron).
\u2022 Est\xE1tua de Atena (F\xEDdias).`
  },
  arte_romana: {
    tema: "historia_arte",
    subtema: "arte_romana",
    palavras_chave: ["arte romana", "roma antiga", "coliseu", "romano", "romana", "roma", "panteao"],
    inicio: ["Os romanos constru\xEDram obras gigantescas \u{1F3DF}\uFE0F"],
    explicacao_curta: ["A arte romana se inspirou nos gregos e mostrava cenas do cotidiano."],
    explicacao_aprofundada: ["Os romanos criaram estradas, arcos e anfiteatros famosos, como o Coliseu."],
    curiosidade: ["O Coliseu recebia grandes apresenta\xE7\xF5es e eventos \u{1F3AD}"],
    interacao: ["Voc\xEA gostaria de visitar uma constru\xE7\xE3o romana antiga?"],
    atividade: ["Desenhe um arco inspirado na arquitetura romana \u270F\uFE0F"],
    final: ["A arte romana uniu for\xE7a, arquitetura e hist\xF3ria \u{1F3DB}\uFE0F"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `\u{1F3DB}\uFE0F **Arte Romana**

\u{1F4C5} **Per\xEDodo**: c. 509 a.C. a 476 d.C.

\u{1F3A8} **Principais Artistas**: Muitos permanecem desconhecidos.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Influ\xEAncia grega.
\u2022 Realismo nos retratos.
\u2022 Grandes constru\xE7\xF5es p\xFAblicas.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 Coliseu de Roma.
\u2022 Pante\xE3o de Roma.`
  },
  arte_bizantina: {
    tema: "historia_arte",
    subtema: "arte_bizantina",
    palavras_chave: ["arte bizantina", "imperio bizantino", "bizantino", "bizantina", "santa sofia", "mosaico", "mosaicos", "fundo dourado"],
    inicio: ["A arte bizantina brilha com fundos dourados e mosaicos religiosos \u{1F3F0}"],
    explicacao_curta: ["Ela foi muito marcante nos s\xE9culos V ao XV, cheia de cores brilhantes."],
    explicacao_aprofundada: ["Os \xEDcones e pain\xE9is bizantinos decoravam catedrais do Imp\xE9rio Romano do Oriente com cores vibrantes e pedras reluzentes."],
    curiosidade: ["A Bas\xEDlica de Santa Sofia j\xE1 foi uma igreja, uma mesquita e hoje \xE9 um museu fant\xE1stico na Turquia! \u2B50"],
    interacao: ["Voc\xEA j\xE1 viu desenhos montados com pequenos quadradinhos coloridos?"],
    atividade: ["Crie um mosaico usando pedacinhos de pap\xE9is coloridos colados \u270F\uFE0F"],
    final: ["Os mosaicos bizantinos brilham como joias da hist\xF3ria \u2728"],
    emocao: "admiracao",
    nivel: "leve",
    resposta_direta: `\u{1F3F0} **Arte Bizantina**

\u{1F4C5} **Per\xEDodo**: S\xE9culos V a XV

\u{1F3A8} **Principais Artistas**: A maioria dos criadores de mosaicos de temas religiosos permanece an\xF4nima.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Temas religiosos e divinos.
\u2022 Fundo dourado reluzente que traz um ar celestial.
\u2022 \xCDcones r\xEDgidos, formais e mosaicos ricos em detalhes geom\xE9tricos.

\u{1F5BC}\uFE0F **Obra Marcante**:
\u2022 Bas\xEDlica de Santa Sofia.`
  },
  arte_romanica: {
    tema: "historia_arte",
    subtema: "arte_romanica",
    palavras_chave: ["arte romanica", "romanico", "romanica", "idade media romanica", "santiago de compostela"],
    inicio: ["A arte rom\xE2nica \xE9 forte, robusta e cheia de mist\xE9rios medievais \u{1F3F0}"],
    explicacao_curta: ["Ela dominou nos s\xE9culos XI e XII na Idade M\xE9dia, com catedrais parecidas com castelos."],
    explicacao_aprofundada: ["As constru\xE7\xF5es rom\xE2nicas tinham paredes muito grossas para resistirem ao tempo e portais esculpidos com monstros e seres b\xEDblicos."],
    curiosidade: ["As igrejas eram chamadas de 'fortalezas espirituais' e serviam de abrigo contra perigos f\xEDsicos! \u2694\uFE0F"],
    interacao: ["Voc\xEA gostaria de morar em um castelo com muralhas fortificadas?"],
    atividade: ["Desenhe uma igreja forte com uma porta em formato de arco redondo \u270F\uFE0F"],
    final: ["A arte rom\xE2nica mostra toda a for\xE7a medieval na pedra \u{1F3DB}\uFE0F"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `\u{1F3F0} **Arte Rom\xE2nica**

\u{1F4C5} **Per\xEDodo**: S\xE9culos XI e XII

\u{1F3A8} **Principais Artistas**: Criada por corpora\xE7\xF5es coletivas de artes\xE3os e pedreiros.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Igrejas com paredes grossas e maci\xE7as protetoras.
\u2022 Arcos redondos e poucas e pequenas janelas.
\u2022 Esculturas religiosas integradas nas fachadas e colunas.

\u{1F5BC}\uFE0F **Obra Marcante**:
\u2022 Catedral de Santiago de Compostela.`
  },
  arte_gotica: {
    tema: "historia_arte",
    subtema: "arte_gotica",
    palavras_chave: ["arte gotica", "gotica", "gotico", "notre dame", "notre-dame", "vitrais", "arco pontiagudo"],
    inicio: ["A arte g\xF3tica se estica at\xE9 o c\xE9u com grandes vitrais e arcos pontiagudos! \u{1F3F0}"],
    explicacao_curta: ["Surgiu nos s\xE9culos XII a XVI com catedrais muito altas e janelas iluminadas e coloridas."],
    explicacao_aprofundada: ["Grandes arcos em ogiva e contrafortes permitiram que as paredes fossem finas e cheias de vitrais que contavam hist\xF3rias com luz natural!"],
    curiosidade: ["Catedral de Notre-Dame de Paris levou mais de 180 anos inteiros para ser finalizada! \u{1F62E}"],
    interacao: ["Voc\xEA j\xE1 reparou como a luz do sol brilha em vidros de cores diferentes?"],
    atividade: ["Fa\xE7a uma linda janela g\xF3tica em papel preto e cole celofane colorido nela \u{1F3A8}"],
    final: ["Nas catedrais g\xF3ticas, a luz de cores era a pr\xF3pria pintura \u2728"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `\u{1F3F0} **Arte G\xF3tica**

\u{1F4C5} **Per\xEDodo**: S\xE9culos XII a XVI

\u{1F3A8} **Principais Artistas**: Mestres construtores de catedrais e vidreiros antigos.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Vitrais coloridos que deixam a luz do sol inundar o ambiente de cor.
\u2022 Grandes e alt\xEDssimas catedrais que apontavam diretamente para o c\xE9u.
\u2022 Arcos pontiagudos (ogivais) e g\xE1rgulas divertidas e misteriosas esculpidas.

\u{1F5BC}\uFE0F **Obra Marcante**:
\u2022 Catedral de Notre-Dame.`
  },
  renascimento: {
    tema: "historia_arte",
    subtema: "renascimento",
    palavras_chave: ["renascimento", "arte renascentista", "renascentista", "da vinci", "leonardo da vinci", "michelangelo", "rafael sanzio", "mona lisa", "capela sistina", "ultima ceia"],
    inicio: ["O Renascimento trouxe novas formas de observar o mundo \u{1F31E}"],
    explicacao_curta: ["Os artistas buscavam criar obras mais realistas."],
    explicacao_aprofundada: ["Eles estudavam luz, perspectiva, anatomia e natureza para melhorar suas pinturas e esculturas."],
    curiosidade: ["Leonardo da Vinci foi um dos artistas mais conhecidos do Renascimento \u{1F3A8}"],
    interacao: ["Voc\xEA gostaria de desenhar algo muito detalhado?"],
    atividade: ["Fa\xE7a um desenho usando profundidade e perspectiva \u270F\uFE0F"],
    final: ["O Renascimento aproximou arte, ci\xEAncia e observa\xE7\xE3o \u{1F30D}"],
    emocao: "descoberta",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Renascimento**

\u{1F4C5} **Per\xEDodo**: S\xE9culos XIV a XVI

\u{1F3A8} **Principais Artistas**: Leonardo da Vinci, Michelangelo, Rafael Sanzio.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Valoriza\xE7\xE3o da ci\xEAncia, anatomia e intelig\xEAncia humana.
\u2022 Perspectiva tridimensional realista para dar profundidade.
\u2022 Realismo expressivo nas formas e rostos.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 Mona Lisa
\u2022 A \xDAltima Ceia
\u2022 Teto da Capela Sistina.`
  },
  barroco: {
    tema: "historia_arte",
    subtema: "barroco",
    palavras_chave: ["barroco", "luz e sombra forte", "caravaggio", "rembrandt", "aleijadinho", "profetas de congonhas", "vocacao de sao mateus"],
    inicio: ["O Barroco \xE9 cheio de emo\xE7\xE3o e dramaticidade \u2728"],
    explicacao_curta: ["As obras usam contrastes fortes de luz e sombra."],
    explicacao_aprofundada: ["Os artistas barrocos criavam movimento e intensidade para impressionar quem observava."],
    curiosidade: ["Muitas igrejas barrocas possuem detalhes dourados \u{1F31F}"],
    interacao: ["Voc\xEA prefere desenhos claros ou cheios de contraste?"],
    atividade: ["Fa\xE7a uma pintura usando \xE1reas bem claras e bem escuras \u{1F3A8}"],
    final: ["O Barroco transforma emo\xE7\xE3o em arte \u{1F319}"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Barroco**

\u{1F4C5} **Per\xEDodo**: S\xE9culos XVII e XVIII

\u{1F3A8} **Principais Artistas**: Caravaggio, Rembrandt, Aleijadinho.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Emo\xE7\xE3o intensa, paix\xE3o e sensa\xE7\xE3o de movimento teatral.
\u2022 Contraste agudo de luz e sombra (efeito tenebrista).
\u2022 Movimento dram\xE1tico das figuras.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 Voca\xE7\xE3o de S\xE3o Mateus.
\u2022 Profetas de Congonhas (Aleijadinho).`
  },
  rococo: {
    tema: "historia_arte",
    subtema: "rococo",
    palavras_chave: ["rococo", "jean-honore fragonard", "fragonard", "o balanco", "balanco", "estilo delicado"],
    inicio: ["O Rococ\xF3 \xE9 o reino das cores suaves, conchas decoradas e jardins de eleg\xE2ncia! \u{1F3A8}"],
    explicacao_curta: ["Foi um estilo de 1700 a 1780 com muita delicadeza, focado na leveza e divers\xE3o."],
    explicacao_aprofundada: ["Os pintores criavam cenas festivas, piqueniques nos jardins reais e usavam conchas, flores espiraladas e dourados sobre tons claros."],
    curiosidade: ["O nome Rococ\xF3 vem da palavra francesa 'rocaille', que significa desenhos moldados como conchas ornamentais! \u{1F41A}"],
    interacao: ["Voc\xEA prefere pintar com cores fortes e fortes ou cores clarinhas e past\xE9is?"],
    atividade: ["Desenhe uma moldura de espelho cheia de florzinhas de tons past\xE9is \u270F\uFE0F"],
    final: ["O Rococ\xF3 celebra a alegria de viver com extrema do\xE7ura e gra\xE7a \u2728"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Rococ\xF3**

\u{1F4C5} **Per\xEDodo**: 1700 - 1780

\u{1F3A8} **Principais Artistas**: Jean-Honor\xE9 Fragonard.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Cores suaves (tons past\xE9is e rosa/azul beb\xEA).
\u2022 Eleg\xE2ncia, curvas leves e ornamenta\xE7\xE3o ricamente graciosa.
\u2022 Temas leves, rom\xE2nticos, de lazer e festas na natureza.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 O Balan\xE7o.`
  },
  neoclassicismo: {
    tema: "historia_arte",
    subtema: "neoclassicismo",
    palavras_chave: ["neoclassicismo", "neoclassico", "jacques-louis david", "david", "juramento dos horacios", "horacios"],
    inicio: ["O Neoclassicismo se inspira na l\xF3gica, racionalidade e harmonia da Gr\xE9cia e Roma! \u{1F3DB}\uFE0F"],
    explicacao_curta: ["Surgiu entre 1760 e 1850 como uma volta triunfal ao equil\xEDbrio cl\xE1ssico."],
    explicacao_aprofundada: ["Os artistas criavam composi\xE7\xF5es limpas, her\xF3is corajosos e poses perfeitas imitando est\xE1tuas de m\xE1rmore antigo."],
    curiosidade: ["Jacques-Louis David foi o pintor oficial de Napole\xE3o Bonaparte e organizou grandes festas heroicas na Fran\xE7a! \u2694\uFE0F"],
    interacao: ["Voc\xEA gosta de hist\xF3rias sobre her\xF3is antigos de Roma ou da Gr\xE9cia?"],
    atividade: ["Desenhe uma cena de algu\xE9m em pose de atleta vitorioso com poses sim\xE9tricas \u270F\uFE0F"],
    final: ["O Neoclassicismo provou que o equil\xEDbrio e a beleza cl\xE1ssica s\xE3o eternos \u2728"],
    emocao: "grandiosidade",
    nivel: "leve",
    resposta_direta: `\u{1F3ED} **Neoclassicismo**

\u{1F4C5} **Per\xEDodo**: 1760 - 1850

\u{1F3A8} **Artista Principal**: Jacques-Louis David.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Inspira\xE7\xE3o nos ideais da Gr\xE9cia e Roma Antigas (perfei\xE7\xE3o cl\xE1ssica).
\u2022 Extremo equil\xEDbrio, controle emocional e racionalidade visual.
\u2022 Figuras n\xEDtidas e temas solenes ou hist\xF3ricos.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 Juramento dos Hor\xE1cios.`
  },
  romantismo: {
    tema: "historia_arte",
    subtema: "romantismo",
    palavras_chave: ["romantismo", "romantico", "eugene delacroix", "delacroix", "liberdade guiando o povo", "natureza dramatica"],
    inicio: ["O Romantismo \xE9 a explos\xE3o de emo\xE7\xE3o intensa, cores fortes e ventanias selvagens! \u{1F32A}\uFE0F"],
    explicacao_curta: ["Esteve em alta de 1800 a 1850, celebrando a paix\xE3o, a liberdade e o hero\xEDsmo nacional."],
    explicacao_aprofundada: ["Os pintores rom\xE2nticos queriam emocionar o observador. Pintavam barcos em mares revoltos, revolu\xE7\xF5es do povo e her\xF3is entusiasmados."],
    curiosidade: ["Eug\xE8ne Delacroix usava cores t\xE3o misturadas de perto que pareciam pinceladas soltas, antecipando o pr\xF3prio impressionismo! \u{1F58C}\uFE0F"],
    interacao: ["Que m\xFAsica intensa voc\xEA colocaria como trilha de fundo para uma tempestade gigantesca na floresta?"],
    atividade: ["Pinte um c\xE9u tempestuoso usando vermelho, azul escuro e amarelo misturados com vivacidade \u{1F3A8}"],
    final: ["O Romantismo liberta a imagina\xE7\xE3o e a emo\xE7\xE3o de vento em popa \u2728"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `\u{1F3ED} **Romantismo**

\u{1F4C5} **Per\xEDodo**: 1800 - 1850

\u{1F3A8} **Artistas Principais**: Eug\xE8ne Delacroix.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Exalta\xE7\xE3o da emo\xE7\xE3o forte, paix\xE3o e liberdade de esp\xEDrito.
\u2022 Paisagens naturais imensas, dram\xE1ticas, indom\xE1veis e selvagens.
\u2022 Pinceladas carregadas de cores vibrantes e contrastes expressivos.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 A Liberdade Guiando o Povo.`
  },
  realismo: {
    tema: "historia_arte",
    subtema: "realismo",
    palavras_chave: ["realismo", "realista", "gustave courbet", "courbet", "quebradores de pedra", "vida cotidiana", "sem idealizacao"],
    inicio: ["O Realismo mostra o mundo exatamente como ele \xE9, com toda a sua simplicidade do dia a dia! \u{1F33E}"],
    explicacao_curta: ["Dominou entre 1840 e 1880, retratando o trabalho \xE1rduo, pessoas normais e o cotidiano sem disfarces."],
    explicacao_aprofundada: ["Em vez de her\xF3is da mitologia ou reis elegantes, os realistas pintavam camponeses, sapateiros e mineradores com grande dignidade e respeito."],
    curiosidade: ["Gustave Courbet declarou certa vez: 'Mostre-me um anjo e eu pintarei um anjo!' \u2014 refor\xE7ando que s\xF3 pintava o palp\xE1vel! \u{1F47C}"],
    interacao: ["O que h\xE1 de mais legal em observar as pessoas fazendo suas tarefas di\xE1rias comuns na rua?"],
    atividade: ["Desenhe algu\xE9m de sua fam\xEDlia de forma muito simples fazendo uma atividade comum como cozinhar ou limpar \u270F\uFE0F"],
    final: ["O Realismo resgata a poesia escondida nas coisas mais simples da nossa vida real \u2728"],
    emocao: "observacao",
    nivel: "leve",
    resposta_direta: `\u{1F3ED} **Realismo**

\u{1F4C5} **Per\xEDodo**: 1840 - 1880

\u{1F3A8} **Artista Principal**: Gustave Courbet.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Foco total na vida cotidiana realista do trabalho dom\xE9stico.
\u2022 Engajamento cr\xEDtico com causas e quest\xF5es sociais do povo oper\xE1rio.
\u2022 Rejei\xE7\xE3o de idealiza\xE7\xF5es rom\xE2nticas ou figuras enfeitadas artificiais.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 Os Quebradores de Pedra.`
  },
  impressionismo: {
    tema: "historia_arte",
    subtema: "impressionismo",
    palavras_chave: ["impressionismo", "impressionista", "claude monet", "monet", "edgar degas", "degas", "impressao nascer do sol"],
    inicio: ["Os impressionistas adoravam pintar luz, vento e o movimento das \xE1guas em tempo real! \u2600\uFE0F"],
    explicacao_curta: ["Eles registravam momentos r\xE1pidos usando pinceladas leves diretamente ao ar livre."],
    explicacao_aprofundada: ["Os artistas impressionistas buscavam captar a sensa\xE7\xE3o do momento e das mudan\xE7as da luz nas coisas."],
    curiosidade: ["Claude Monet pintou v\xE1rias vezes a mesma catedral em hor\xE1rios diferentes para ver como o sol mudava suas cores! \u{1F324}\uFE0F"],
    interacao: ["Voc\xEA j\xE1 observou como o c\xE9u muda de color ao longo do dia?"],
    atividade: ["Pinte uma paisagem usando pequenas pinceladas soltas e r\xE1pidas \u{1F3A8}"],
    final: ["A luz do sol e das cores pode transformar completamente uma pintura \u2728"],
    emocao: "leveza",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Impressionismo**

\u{1F4C5} **Per\xEDodo**: aproximadamente de 1874 a 1886, na Fran\xE7a.

\u{1F31F} **O que \xE9 o Impressionismo?**

O Impressionismo foi um movimento art\xEDstico que buscava retornar as impress\xF5es visuais de um momento, principalmente os efeitos da luz e das cores na natureza.

Os artistas impressionisas preferiam pintar ao ar livre para observar as mudan\xE7as da luz ao longo do dia. Eles n\xE3o se preocupavam em fazer desenhos perfeitos, mas em registrar aquilo que viam e sentiam naquele instante.

\u{1F3A8} **Artistas Principais**: Claude Monet, Edgar Degas.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Captura da luz natural em constante transforma\xE7\xE3o.
\u2022 Pinceladas r\xE1pidas, vis\xEDveis e texturas soltas de pura cor.
\u2022 Pintura executada diretamente ao ar livre (plein air).

\u{1F5BC}\uFE0F **Obra Inaugural**:
\u2022 Impress\xE3o, Nascer do Sol (1872), que deu nome ao movimento.`
  },
  pos_impressionismo: {
    tema: "historia_arte",
    subtema: "pos_impressionismo",
    palavras_chave: ["pos impressionismo", "pos-impressionismo", "pos impressionista", "vincent van gogh", "van gogh", "paul cezanne", "cezanne", "noite estrelada", "jogadores de cartas"],
    inicio: ["O P\xF3s-Impressionismo colore tudo com muito mais for\xE7a, contornos e sentimentos profundos! \u{1F3A8}"],
    explicacao_curta: ["Foi ativo de 1886 a 1905, abrindo as portas do estilo pessoal \xEDntimo e expressivo."],
    explicacao_aprofundada: ["Vincent van Gogh usava pinceladas onduladas cheias de energia, e Paul C\xE9zanne usava planos geom\xE9tricos para dar volume \xE0s frutas e montanhas."],
    curiosidade: ["Van Gogh usava tanta tinta em suas telas que suas pinturas continuavam secando muito tempo depois de prontas! \u{1F33B}"],
    interacao: ["Como seria pintar uma noite cheia de estrelas que giram espiralando no c\xE9u, igual a de Van Gogh?"],
    atividade: ["Pinte uma \xE1rvore ou flor usando linhas onduladas cheias de vigor e curvas expressivas \u{1F3A8}"],
    final: ["O P\xF3s-Impressionismo transformou a pintura em um confession\xE1rio de cores e vibra\xE7\xF5es \u2728"],
    emocao: "sentimento",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **P\xF3s-Impressionismo**

\u{1F4C5} **Per\xEDodo**: 1886 - 1905

\u{1F3A8} **Artistas Principais**: Vincent van Gogh, Paul C\xE9zanne.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Cores intensas, quentes e altamente expressivas das emo\xE7\xF5es.
\u2022 Liberdade de estilo pessoal marcante para distorcer texturas ou tonalidades.
\u2022 Foco nas formas geom\xE9tricas estruturais subjacentes da natureza.

\u{1F5BC}\uFE0F **Obras Importantes**:
\u2022 Noite Estrelada.
\u2022 Os Jogadores de Cartas.`
  },
  expressionismo: {
    tema: "historia_arte",
    subtema: "expressionismo",
    palavras_chave: ["expressionismo", "expressionista", "edvard munch", "munch", "o grito", "grito", "cores intensas", "distor\xE7\xE3o"],
    inicio: ["O Expressionismo grita as emo\xE7\xF5es de dentro para fora na tela da pintura! \u{1F3A8}\u{1F579}\uFE0F"],
    explicacao_curta: ["Aconteceu de 1905 a 1920, focando em expressar o que sentimos de forma intensa."],
    explicacao_aprofundada: ["Os expressionistas usavam distor\xE7\xF5es de corpos, cores agressivas n\xE3o-reais e linhas fortes para mostrar sentimentos como medo, ansiedade e empolga\xE7\xE3o."],
    curiosidade: ["A obra 'O Grito' de Edvard Munch foi feita em quatro vers\xF5es diferentes com tintas, giz e pastel sobre papel\xE3o! \u{1F631}"],
    interacao: ["Se o vento ou a natureza estivessem muito bravos, que cores voc\xEA usaria para exprimir isso?"],
    atividade: ["Desenhe uma figura expressando uma emo\xE7\xE3o extrema usando apenas giz de cera colorido bem forte \u270F\uFE0F"],
    final: ["O Expressionismo d\xE1 voz visual para as emo\xE7\xF5es humanas mais marcantes \u{1F30D}"],
    emocao: "intensidade",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Expressionismo**

\u{1F4C5} **Per\xEDodo**: 1905 - 1920

\u{1F3A8} **Artista Principal**: Edvard Munch.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Transmiss\xE3o visceral de emo\xE7\xF5es internas subjetivas (medo, ang\xFAstia).
\u2022 Distor\xE7\xF5es caricaturais expressivas das figuras e paisagens.
\u2022 Cores intensas, simb\xF3licas e de alto contraste.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 O Grito.`
  },
  cubismo: {
    tema: "historia_arte",
    subtema: "cubismo",
    palavras_chave: ["cubismo", "cubista", "pablo picasso", "picasso", "georges braque", "braque", "formas geometricas", "les demoiselles d avignon"],
    inicio: ["O Cubismo transforma objetos e pessoas em blocos de formas geom\xE9tricas! \u{1F7E6}\u{1F53A}"],
    explicacao_curta: ["Os artists mostravam v\xE1rios lados e \xE2ngulos do objeto ao mesmo tempo planos."],
    explicacao_aprofundada: ["As imagens pareciam quebradas e reorganizadas em diferentes \xE2ngulos geom\xE9tricos simult\xE2neos inspiradores."],
    curiosidade: ["Pablo Picasso pintou algumas de suas obras mais fant\xE1sticas inspirado no estilo esculpido das velhas m\xE1scaras de madeira africanas! \u{1F3AD}"],
    interacao: ["Voc\xEA conseguiria desenhar um bicho ou um vaso usando s\xF3 quadrados, c\xEDrculos e tri\xE2ngulos?"],
    atividade: ["Monte um desenho usando recortes colados de cilindros, tri\xE2ngulos e ret\xE2ngulos recortados de revistas \u2702\uFE0F"],
    final: ["O Cubismo transformou o espa\xE7o plano da tela em um espelho partido que cria novos mundos \u{1F7E6}"],
    emocao: "criatividade",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Cubismo**

\u{1F4C5} **Per\xEDodo**: 1907 - 1914

\u{1F3A8} **Artistas Principais**: Pablo Picasso, Georges Braque.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Formas geom\xE9tricas n\xEDtidas fracionando o espa\xE7o visual.
\u2022 V\xE1rios pontos de vista planos observados na mesma tela ao mesmo tempo.
\u2022 Desconstru\xE7\xE3o geom\xE9trica da imagem sem ilus\xE3o de profundidade tradicional.

\u{1F5BC}\uFE0F **Obra Inaugural**:
\u2022 Les Demoiselles d'Avignon (1907).`
  },
  surrealismo: {
    tema: "historia_arte",
    subtema: "surrealismo",
    palavras_chave: ["surrealismo", "surrealista", "salvador dali", "dali", "rene magritte", "magritte", "sonho arte", "a persistencia da memoria"],
    inicio: ["O Surrealismo mistura sonho e imagina\xE7\xE3o onde nada \xE9 de verdade imposs\xEDvel! \u{1F319}"],
    explicacao_curta: ["As obras surrealistas parecem cenas sa\xEDdas diretamente de sonhos estranhos e divertidos."],
    explicacao_aprofundada: ["Os artistas combinavam objetos absurdos (como rel\xF3gios moles ou elefantes com pernas longas de girafa) para desafiar a l\xF3gica comum."],
    curiosidade: ["Salvador Dal\xED andava com um tamandu\xE1 de estima\xE7\xE3o pela rua em Paris e tinha fetiche por costurar p\xE3ezinhos no chap\xE9u! \u{1F41C}\u{1F3A9}"],
    interacao: ["Que sonho estranho seu voc\xEA gostaria de ilustrar em papel hoje?"],
    atividade: ["Misture do avesso tr\xEAs objetos que n\xE3o combinam (por exemplo: um peixinho de patins voando!) em uma linda paisagem \u{1F3A8}"],
    final: ["A nossa imagina\xE7\xE3o \xE9 um ba\xFA sem chaves de mundos surpreendentes de fantasia \u2728"],
    emocao: "imaginacao",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Surrealismo**

\u{1F4C5} **Per\xEDodo**: 1924 - 1940

\u{1F3A8} **Artistas Principais**: Salvador Dal\xED, Ren\xE9 Magritte.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Inspira\xE7\xE3o profunda nos mist\xE9rios dos sonhos e da mente inconsciente.
\u2022 Fantasia, surpresa, absurdo e justaposi\xE7\xF5es inesperadas e bizarras.
\u2022 Realismo t\xE9cnico minucioso aplicado a cenas fant\xE1sticas e imposs\xEDveis.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 A Persist\xEAncia da Mem\xF3ria.`
  },
  pop_art: {
    tema: "historia_arte",
    subtema: "pop_art",
    palavras_chave: ["pop art", "popart", "andy warhol", "warhol", "roy lichtenstein", "lichtenstein", "marilyn diptych", "cultura popular", "latas de sopa"],
    inicio: ["A Pop Art traz a publicidade, os gibis, brinquedos e o cotidiano moderno direto para as galerias de arte! \u{1F96B}\u{1F4A5}"],
    explicacao_curta: ["Explodiu de 1950 a 1970, transformando coisas do consumo do povo em belas obras de cores puras."],
    explicacao_aprofundada: ["Com cores super brilhantes, telas repetidas em s\xE9rie e imita\xE7\xE3o de quadrinhos gigantescos, ela criticava e se divertia com a cultura das celebridades."],
    curiosidade: ["Andy Warhol era obcecado por latas de Sopa de Tomate Campbell's, fazendo dezenas de quadros lindos mostrando apenas a lata da comida! \u{1F96B}\u{1F3A8}"],
    interacao: ["Se voc\xEA fosse fazer um quadro de um lanche do McDonald's ou do seu salgadinho favorito, como ele seria?"],
    atividade: ["Desenhe um her\xF3i ou objeto de sua cozinha de forma repetida com cores fluorescentes vivas em quadr\xEDculas \u{1F3A8}"],
    final: ["A Pop Art prova que at\xE9 o objeto de supermercado mais comum tem sua beleza pop \xFAnica \u2B50"],
    emocao: "criatividade",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Pop Art**

\u{1F4C5} **Per\xEDodo**: 1950 - 1970

\u{1F3A8} **Artistas Principais**: Andy Warhol, Roy Lichtenstein.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Foco em s\xEDmbolos da cultura popular de consumo de massa.
\u2022 Temas extra\xEDdos de gibis de quadrinhos, celebridades e campanhas publicit\xE1rias.
\u2022 Cores chapadas e vibrantes com uso de repeti\xE7\xF5es gr\xE1ficas seriadas.

\u{1F5BC}\uFE0F **Obra Importante**:
\u2022 Marilyn Diptych.`
  },
  arte_contemporanea: {
    tema: "historia_arte",
    subtema: "arte_contemporanea",
    palavras_chave: ["arte contemporanea", "arte atual", "yayoi kusama", "kusama", "vik muniz", "adriana varejao", "tecnologia e ia", "arte digital", "instala\xE7\xF5es"],
    inicio: ["A arte contempor\xE2nea junta pintura, sucata, telas gigantes e at\xE9 intelig\xEAncia artificial sem barreiras! \u{1F30D}\u2728"],
    explicacao_curta: ["Mistura e explora t\xE9cnicas e ideias nos dias de hoje livres de limites formais."],
    explicacao_aprofundada: ["Os artistas de hoje criam ambientes onde o visitante entra, toca nos objetos e usa os cinco sentidos, abra\xE7ando a diversidade tecnol\xF3gica."],
    curiosidade: ["Yayoi Kusama faz espa\xE7os incr\xEDveis forrados com bolinhas coloridas e espelhos repetindo as luzes ao infinito pelo teto! \u{1F534}\u{1F30C}"],
    interacao: ["Que barulho, cheiro ou material surpreendente voc\xEA traria para o centro de um museu?"],
    atividade: ["Crie uma arte usando materiais recicl\xE1veis \u267B\uFE0F"],
    final: ["A arte de hoje vive para o interagir e nos conectar livremente em m\xFAltiplos mundos \u{1F3A8}"],
    emocao: "exploracao",
    nivel: "leve",
    resposta_direta: `\u{1F3A8} **Arte Contempor\xE2nea**

\u{1F4C5} **Per\xEDodo**: 1970 at\xE9 hoje

\u{1F3A8} **Artistas Principais**: Yayoi Kusama, Vik Muniz, Adriana Varej\xE3o.

\u{1F31F} **Caracter\xEDsticas**:
\u2022 Mistura de ferramentas e suportes (telas digitais, esculturas de lixo, instala\xE7\xF5es de vidro).
\u2022 Salas imersivas e instala\xE7\xF5es gigantes que convidam \xE0 participa\xE7\xE3o.
\u2022 Forte uso de recursos digitais e intelig\xEAncias interativas modernas.

\u{1F5BC}\uFE0F **Obras Marcantes**:
\u2022 Infinity Mirror Rooms (Yayoi Kusama).
\u2022 Imagens de Lixo (Vik Muniz).`
  },
  // --- LITERATURA ---
  o_que_e_literatura: {
    tema: "literatura",
    subtema: "o_que_e_literatura",
    palavras_chave: ["o que e literatura", "definicao de literatura", "arte das palavras", "literatura infantil"],
    inicio: ["Literatura \xE9 a arte de contar hist\xF3rias usando palavras \u{1F4D6}"],
    explicacao_curta: ["S\xE3o livros, poemas, contos e hist\xF3rias que nos fazem viajar sem sair do lugar."],
    explicacao_aprofundada: ["Atrav\xE9s da literatura, podemos sentir emo\xE7\xF5es, conhecer personagens e aprender sobre o mundo e sobre n\xF3s mesmos."],
    curiosidade: ["A palavra 'literatura' vem do latim 'littera', que significa 'letra' \u2728"],
    interacao: ["Que livro voc\xEA gostaria de viver por dentro?"],
    atividade: ["Desenhe a capa de um livro que voc\xEA gostaria de escrever \u{1F3A8}"],
    final: ["As palavras podem criar mundos inteiros \u{1F30D}"],
    emocao: "imagina\xE7\xE3o",
    nivel: "leve"
  },
  o_que_e_poema: {
    tema: "literatura",
    subtema: "o_que_e_poema",
    palavras_chave: ["o que e poema", "definicao de poema", "poesia", "texto po\xE9tico"],
    inicio: ["Poema \xE9 um texto que usa palavras bonitas e ritmo para expressar sentimentos \u{1F338}"],
    explicacao_curta: ["Os poemas podem falar de amor, natureza, amizade ou qualquer coisa que toque o cora\xE7\xE3o."],
    explicacao_aprofundada: ["Diferente de uma hist\xF3ria comum, o poema se preocupa com o som das palavras, as rimas e as imagens que elas criam."],
    curiosidade: ["Alguns poemas s\xE3o t\xE3o curtos que cabem em uma frase, outros s\xE3o enormes como livros \u{1F4DA}"],
    interacao: ["Que sentimento voc\xEA gostaria de transformar em poema?"],
    atividade: ["Escreva um pequeno poema sobre o sol ou a lua \u{1F31E}\u{1F319}"],
    final: ["Poemas s\xE3o como pinturas feitas com palavras \u2728"],
    emocao: "sensibilidade",
    nivel: "leve"
  },
  o_que_e_poesia: {
    tema: "literatura",
    subtema: "o_que_e_poesia",
    palavras_chave: ["o que e poesia", "definicao de poesia", "arte po\xE9tica", "sentimento em palavras"],
    inicio: ["Poesia \xE9 a arte de embelezar as palavras para despertar emo\xE7\xF5es \u{1F98B}"],
    explicacao_curta: ["Ela transforma o jeito comum de falar em algo especial e musical."],
    explicacao_aprofundada: ["A poesia pode aparecer em poemas, m\xFAsicas, prov\xE9rbios e at\xE9 em frases soltas que tocam nosso cora\xE7\xE3o."],
    curiosidade: ["A palavra 'poesia' vem do grego 'poiesis', que significa 'cria\xE7\xE3o' ou 'fazer' \u2728"],
    interacao: ["Voc\xEA j\xE1 sentiu algo t\xE3o forte que quis escrever?"],
    atividade: ["Transforme uma frase comum (ex: 'O gato dorme') em algo po\xE9tico \u{1F431}"],
    final: ["Poesia \xE9 encontrar magia nas palavras do dia a dia \u{1F308}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  verso: {
    tema: "literatura",
    subtema: "verso",
    palavras_chave: ["verso", "o que e verso", "linha do poema", "verso e estrofe"],
    inicio: ["Verso \xE9 cada linha de um poema \u{1F4DD}"],
    explicacao_curta: ["Quando voc\xEA escreve um poema, cada linha quebrada \xE9 um verso."],
    explicacao_aprofundada: ["Os versos podem ser curtos, longos, rimados ou n\xE3o, e eles se organizam em estrofes."],
    curiosidade: ["Um poema de um \xFAnico verso \xE9 chamado de mon\xF3stico \u{1F3AF}"],
    interacao: ["Quantos versos voc\xEA consegue escrever sobre seu animal favorito?"],
    atividade: ["Escreva tr\xEAs versos sobre uma cor que voc\xEA ama \u{1F308}"],
    final: ["Cada verso \xE9 um pequeno passo dentro do poema \u2728"],
    emocao: "organiza\xE7\xE3o",
    nivel: "leve"
  },
  estrofe: {
    tema: "literatura",
    subtema: "estrofe",
    palavras_chave: ["estrofe", "o que e estrofe", "paragrafo do poema", "conjunto de versos"],
    inicio: ["Estrofe \xE9 o conjunto de versos que formam uma 'parte' do poema \u{1F4DA}"],
    explicacao_curta: ["\xC9 como um par\xE1grafo, mas feito de linhas de poesia."],
    explicacao_aprofundada: ["As estrofes podem ter dois, tr\xEAs, quatro ou many versos; cada tamanho tem um nome especial (d\xEDstico, terceto, quarteto...)."],
    curiosidade: ["Um poema de uma s\xF3 estrofe \xE9 chamado de 'poema monol\xEDtico' \u{1F9F1}"],
    interacao: ["Voc\xEA consegue separar um poema em duas estrofes?"],
    atividade: ["Escreva duas estrofes: uma sobre o dia e outra sobre a noite \u{1F31E}\u{1F319}"],
    final: ["As estrofes ajudam o poema a respirar \u2728"],
    emocao: "harmonia",
    nivel: "leve"
  },
  tipos_de_versos: {
    tema: "literatura",
    subtema: "tipos_de_versos",
    palavras_chave: ["tipos de versos", "verso livre", "verso rimado", "verso branco", "metro po\xE9tico"],
    inicio: ["Os versos podem ser organizados de muitas maneiras diferentes \u{1F3A8}"],
    explicacao_curta: ["Existem versos que rimam, versos que n\xE3o rimam e versos que seguem um ritmo especial."],
    explicacao_aprofundada: ["Verso rimado: as \xFAltimas palavras soam parecidas. Verso branco: tem ritmo mas n\xE3o rima. Verso livre: n\xE3o tem rima nem ritmo fixo \u2013 \xE9 solto como a imagina\xE7\xE3o."],
    curiosidade: ["Poemas em verso livre parecem conversas escritas de forma po\xE9tica \u{1F5E3}\uFE0F"],
    interacao: ["Voc\xEA prefere rimas ou versos soltos?"],
    atividade: ["Escreva o mesmo pensamento em um verso rimado e outro livre \u270F\uFE0F"],
    final: ["N\xE3o existe jeito certo de fazer um verso; o importante \xE9 se expressar \u{1F308}"],
    emocao: "liberdade",
    nivel: "leve"
  },
  metrica: {
    tema: "literatura",
    subtema: "metrica",
    palavras_chave: ["metrica", "o que e metrica na poesia", "medida do verso", "silabas po\xE9ticas"],
    inicio: ["M\xE9trica \xE9 a medida dos versos, contando as s\xEDlabas po\xE9ticas \u{1F4CF}"],
    explicacao_curta: ["Na poesia, contamos as s\xEDlabas de um jeito especial, diferente do normal."],
    explicacao_aprofundada: ["Em vez de contar s\xEDlabas como na fala, juntamos algumas para formar uma 'unidade r\xEDtmica' \u2013 isso cria o ritmo do poema."],
    curiosidade: ["Versos de sete s\xEDlabas po\xE9ticas s\xE3o chamados de 'redondilha maior' \u{1F3B5}"],
    interacao: ["Vamos tentar contar s\xEDlabas po\xE9ticas da palavra 'flor'?"],
    atividade: ["Separe as s\xEDlabas po\xE9ticas do verso: 'A lua brilha no c\xE9u' \u{1F319}"],
    final: ["A m\xE9trica d\xE1 a m\xFAsica escondida nos poemas \u2728"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  generos_literarios: {
    tema: "literatura",
    subtema: "generos_literarios",
    palavras_chave: ["generos literarios", "tipos de literatura", "narrativo lirico dramatico", "conto romance poesia teatro"],
    inicio: ["Os g\xEAneros liter\xE1rios s\xE3o as 'fam\xEDlias' dos textos liter\xE1rios \u{1F4DA}"],
    explicacao_curta: ["Existem tr\xEAs grandes grupos: narrativo (contos, novelas, romances), l\xEDrico (poemas) e dram\xE1tico (pe\xE7as de teatro)."],
    explicacao_aprofundada: ["No g\xEAnero narrativo, algu\xE9m conta uma hist\xF3ria; no l\xEDrico, algu\xE9m expressa sentimentos; no dram\xE1tico, os personagens falam e agem no palco."],
    curiosidade: ["O g\xEAnero narrativo \xE9 o mais antigo \u2013 as pessoas j\xE1 contavam hist\xF3rias ao redor da fogueira \u{1F525}"],
    interacao: ["Qual desses g\xEAneros voc\xEA mais gosta de ler ou assistir?"],
    atividade: ["Escolha um personagem e escreva uma pequena fala para ele (teatro) ou um sentimento (poesia) \u{1F3AD}"],
    final: ["Cada g\xEAnero tem sua magia, mas todos usam palavras \u{1F31F}"],
    emocao: "diversidade",
    nivel: "leve"
  },
  elementos_da_narrativa: {
    tema: "literatura",
    subtema: "elementos_da_narrativa",
    palavras_chave: ["elementos da narrativa", "personagem", "enredo", "tempo", "espa\xE7o", "narrador"],
    inicio: ["Uma hist\xF3ria \xE9 feita de v\xE1rias partes que trabalham juntas \u{1F9E9}"],
    explicacao_curta: ["Personagens, enredo, tempo, espa\xE7o e narrador s\xE3o os elementos essenciais da narrativa."],
    explicacao_aprofundada: ["Personagens s\xE3o quem vive a hist\xF3ria; enredo \xE9 o que acontece; tempo \xE9 quando acontece; espa\xE7o \xE9 onde acontece; narrador \xE9 quem conta."],
    curiosidade: ["O narrador pode ser um personagem (1\xAA pessoa) ou algu\xE9m de fora (3\xAA pessoa) \u{1F3A4}"],
    interacao: ["Se voc\xEA fosse o narrador de sua pr\xF3pria vida, como contaria o dia de hoje?"],
    atividade: ["Desenhe um cen\xE1rio (espa\xE7o) e crie um personagem para viver nele \u{1F3A8}"],
    final: ["Sem esses elementos, uma hist\xF3ria n\xE3o teria forma \u2728"],
    emocao: "organiza\xE7\xE3o",
    nivel: "leve"
  },
  curiosidade_literaria_1: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["curiosidade literatura", "fato engra\xE7ado livros", "escritores criancas"],
    inicio: ["Voc\xEA sabia que o livro mais fino do mundo tem apenas 8 p\xE1ginas? \u{1F4D6}"],
    explicacao_curta: ["Existem livros de todos os tamanhos, desde gigantes at\xE9 miniaturas que cabem na palma da m\xE3o."],
    explicacao_aprofundada: ["H\xE1 livros enormes que pesam mais de 20 quilos e outros t\xE3o pequenos que \xE9 preciso lupa para ler."],
    curiosidade: ["O livro mais grosso do mundo tem mais de 10 mil p\xE1ginas! \u{1F92F}"],
    interacao: ["Que tipo de livro voc\xEA gostaria de ter: enorme ou min\xFAsculo?"],
    atividade: ["Crie a capa de um livro de tamanho maluco (enorme ou bem pequeno) \u{1F3A8}"],
    final: ["O tamanho n\xE3o define a hist\xF3ria, e sim as palavras dentro dele \u{1F31F}"],
    emocao: "surpresa",
    nivel: "leve"
  },
  curiosidade_literaria_2: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["escritor crianca", "escritor precoce", "autores jovens"],
    inicio: ["Voc\xEA sabia que alguns livros infantis foram escritos por crian\xE7as? \u{1F9D2}\u{1F4DA}"],
    explicacao_curta: ["Sim! Existem autores que escreveram seus primeiros livros com apenas 6 ou 7 anos."],
    explicacao_aprofundada: ["Um exemplo \xE9 a brit\xE2nica Daisy Ashford, que escreveu 'The Young Visiters' aos 9 anos, e o livro foi publicado de verdade."],
    curiosidade: ["At\xE9 a famosa autora de 'Frankenstein', Mary Shelley, come\xE7ou a escrever sua obra aos 18 anos \u270D\uFE0F"],
    interacao: ["Se voc\xEA escrevesse um livro hoje, sobre o que seria?"],
    atividade: ["Escreva a primeira frase do seu futuro livro \u{1F4DD}"],
    final: ["Toda grande hist\xF3ria come\xE7a com um pequeno escritor \u{1F308}"],
    emocao: "inspira\xE7\xE3o",
    nivel: "leve"
  },
  curiosidade_literaria_3: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["livro mais vendido", "recorde de vendas", "bestseller infantil"],
    inicio: ["O livro infantil mais vendido de todos os tempos n\xE3o \xE9 o que voc\xEA imagina! \u{1F914}"],
    explicacao_curta: ["'O Pequeno Pr\xEDncipe', de Antoine de Saint-Exup\xE9ry, j\xE1 vendeu mais de 140 milh\xF5es de c\xF3pias no mundo todo."],
    explicacao_aprofundada: ["Ele foi traduzido para mais de 300 idiomas e dialetos, sendo um dos livros mais traduzidos da hist\xF3ria."],
    curiosidade: ["Apesar de ser para crian\xE7as, ele traz li\xE7\xF5es profundas sobre amizade e responsabilidade \u{1F339}"],
    interacao: ["Voc\xEA j\xE1 leu 'O Pequeno Pr\xEDncipe'? Que parte voc\xEA mais gostou?"],
    atividade: ["Desenhe o planeta do Pequeno Pr\xEDncipe com sua rosa e seus vulc\xF5es \u{1F3A8}"],
    final: ["Um livro pode viajar por todo o mundo e tocar muitos cora\xE7\xF5es \u2728"],
    emocao: "admirac\xE3o",
    nivel: "leve"
  },
  curiosidade_literaria_4: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["livro sem palavras", "livro mudo", "hist\xF3ria s\xF3 com imagens"],
    inicio: ["Existe livro que n\xE3o tem nenhuma palavra? \u{1F4D6}\u{1F507}"],
    explicacao_curta: ["Sim! Eles s\xE3o chamados de 'livros silenciosos' ou 'wordless books'."],
    explicacao_aprofundada: ["As hist\xF3rias s\xE3o contadas apenas por meio de ilustra\xE7\xF5es, deixando o leitor criar as palavras mentalmente."],
    curiosidade: ["Um exemplo famoso \xE9 'A Onda', de Suzy Lee, que conta uma hist\xF3ria s\xF3 com desenhos em azul e branco \u{1F30A}"],
    interacao: ["Voc\xEA conseguiria criar uma hist\xF3ria s\xF3 com desenhos?"],
    atividade: ["Desenhe uma pequena hist\xF3ria em quadrinhos sem usar texto nenhum \u270F\uFE0F"],
    final: ["\xC0s vezes, uma imagem vale mais que mil palavras \u{1F31F}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  curiosidade_literaria_5: {
    tema: "literatura",
    subtema: "curiosidade_literaria",
    palavras_chave: ["biblioteca maior do mundo", "biblioteca do congresso", "livros guardados"],
    inicio: ["A maior biblioteca do mundo fica nos Estados Unidos e tem mais de 170 milh\xF5es de itens! \u{1F4DA}\u{1F3DB}\uFE0F"],
    explicacao_curta: ["\xC9 a Biblioteca do Congresso, em Washington D.C."],
    explicacao_aprofundada: ["Se voc\xEA tentasse ler um item por dia, levaria mais de 465 mil anos para terminar tudo."],
    curiosidade: ["Al\xE9m de livros, ela guarda mapas, partituras, filmes e at\xE9 grava\xE7\xF5es de vozes hist\xF3ricas \u{1F399}\uFE0F"],
    interacao: ["O que voc\xEA guardaria em uma biblioteca gigante?"],
    atividade: ["Desenhe sua biblioteca dos sonhos, com escorregadores e pufes coloridos \u{1F3A8}"],
    final: ["Uma biblioteca \xE9 um tesouro cheio de hist\xF3rias esperando por voc\xEA \u2728"],
    emocao: "encantamento",
    nivel: "leve"
  },
  // --- LUGARES DA ARTE ---
  louvre: {
    tema: "lugares_arte",
    subtema: "louvre",
    palavras_chave: ["louvre", "museu do louvre", "mona lisa museu", "museu paris"],
    inicio: ["O Louvre \xE9 um dos museus mais famosos do mundo \u{1F5BC}\uFE0F"],
    explicacao_curta: ["Ele fica na Fran\xE7a e possui milhares de obras de arte."],
    explicacao_aprofundada: ["O museu guarda pinturas, esculturas e objetos antigos de diferentes \xE9pocas da hist\xF3ria."],
    curiosidade: ["A famosa Mona Lisa est\xE1 no Louvre \u{1F3A8}"],
    interacao: ["Que obra famosa voc\xEA gostaria de conhecer?"],
    atividade: ["Desenhe um museu cheio de obras imagin\xE1rias \u270F\uFE0F"],
    final: ["Museus guardam hist\xF3rias e criatividade \u{1F30D}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  moma: {
    tema: "lugares_arte",
    subtema: "moma",
    palavras_chave: ["moma", "museu de arte moderna nova york", "museu moderno eua"],
    inicio: ["O MoMA \xE9 cheio de arte moderna e criativa \u{1F308}"],
    explicacao_curta: ["O museum re\xFAne pinturas, esculturas e obras modernas."],
    explicacao_aprofundada: ["Muitos artistas modernos experimentaram novas formas, cores e ideias em suas obras."],
    curiosidade: ["O MoMA fica em Nova York \u{1F3D9}\uFE0F"],
    interacao: ["Voc\xEA gosta de artes diferentes e criativas?"],
    atividade: ["Crie uma obra usando formas livres \u{1F3A8}"],
    final: ["A arte moderna incentiva imagina\xE7\xE3o e inova\xE7\xE3o \u2728"],
    emocao: "criatividade",
    nivel: "leve"
  },
  masp: {
    tema: "lugares_arte",
    subtema: "masp",
    palavras_chave: ["masp", "museu sao paulo arte", "museu brasil sp"],
    inicio: ["O MASP \xE9 um importante museu brasileiro \u{1F1E7}\u{1F1F7}"],
    explicacao_curta: ["Ele possui obras de artistas do Brasil e do mundo."],
    explicacao_aprofundada: ["O pr\xE9dio do MASP \xE9 conhecido por sua estrutura suspensa vermelha."],
    curiosidade: ["O MASP fica na Avenida Paulista, em S\xE3o Paulo \u{1F306}"],
    interacao: ["Voc\xEA gostaria de visitar um grande museu?"],
    atividade: ["Desenhe um pr\xE9dio diferente para um museu \u270F\uFE0F"],
    final: ["Os museus ajudam a preservar arte e cultura \u{1F31F}"],
    emocao: "descoberta",
    nivel: "leve"
  },
  inhotim: {
    tema: "lugares_arte",
    subtema: "inhotim",
    palavras_chave: ["inhotim", "museu a ceu aberto brasil", "arte natureza minas gerais"],
    inicio: ["Inhotim mistura arte e natureza \u{1F33F}"],
    explicacao_curta: ["As obras ficam espalhadas em jardins enormes."],
    explicacao_aprofundada: ["O lugar re\xFAne galerias, esculturas e paisagens naturais em Minas Gerais."],
    curiosidade: ["Algumas obras de Inhotim ficam ao ar livre \u{1F333}"],
    interacao: ["Voc\xEA gostaria de ver arte no meio da natureza?"],
    atividade: ["Crie um jardim cheio de esculturas \u{1F3A8}"],
    final: ["Arte e natureza podem caminhar juntas \u{1F308}"],
    emocao: "harmonia",
    nivel: "leve"
  },
  acropole: {
    tema: "lugares_arte",
    subtema: "acropole",
    palavras_chave: ["acropole", "partenon grecia", "construcao antiga grecia"],
    inicio: ["A Acr\xF3pole guarda constru\xE7\xF5es antigas da Gr\xE9cia \u{1F3DB}\uFE0F"],
    explicacao_curta: ["Ela possui templos importantes como o Partenon."],
    explicacao_aprofundada: ["A Acr\xF3pole representa a arte, arquitetura e hist\xF3ria da Gr\xE9cia Antiga."],
    curiosidade: ["O Partenon foi dedicado \xE0 deusa Atena \u26A1"],
    interacao: ["Voc\xEA gostaria de visitar constru\xE7\xF5es antigas?"],
    atividade: ["Desenhe um templo com colunas gregas \u270F\uFE0F"],
    final: ["As constru\xE7\xF5es antigas contam hist\xF3rias do passado \u{1F30D}"],
    emocao: "admiracao",
    nivel: "leve"
  },
  coliseu: {
    tema: "lugares_arte",
    subtema: "coliseu",
    palavras_chave: ["coliseu", "roma antiga coliseu", "arena romana"],
    inicio: ["O Coliseu \xE9 uma constru\xE7\xE3o gigante da Roma Antiga \u{1F3DF}\uFE0F"],
    explicacao_curta: ["L\xE1 aconteciam apresenta\xE7\xF5es e eventos."],
    explicacao_aprofundada: ["O Coliseu mostra a engenharia e arquitetura dos romanos."],
    curiosidade: ["O Coliseu possui muitos corredores e arquibancadas antigas \u2728"],
    interacao: ["Voc\xEA gosta de constru\xE7\xF5es enormes?"],
    atividade: ["Monte um desenho inspirado em arenas antigas \u{1F3A8}"],
    final: ["Grandes constru\xE7\xF5es tamb\xE9m podem ser obras de arte \u{1F31F}"],
    emocao: "grandiosidade",
    nivel: "leve"
  },
  torre_eiffel: {
    tema: "lugares_arte",
    subtema: "torre_eiffel",
    palavras_chave: ["torre eiffel", "paris torre ferro", "monumento fran\xE7a"],
    inicio: ["A Torre Eiffel \xE9 um s\xEDmbolo famoso de Paris \u2728"],
    explicacao_curta: ["Ela foi constru\xEDda com ferro e possui um formato muito conhecido."],
    explicacao_aprofundada: ["La torre foi criada para uma exposi\xE7\xE3o e acabou se tornando um dos monumentos mais famosos do mundo."],
    curiosidade: ["A Torre Eiffel brilha \xE0 noite com muitas luzes \u{1F319}"],
    interacao: ["Voc\xEA gostaria de subir em uma torre gigante?"],
    atividade: ["Desenhe uma torre usando formas geom\xE9tricas \u270F\uFE0F"],
    final: ["Algumas constru\xE7\xF5es se transformam em s\xEDmbolos do mundo \u{1F30D}"],
    emocao: "encantamento",
    nivel: "leve"
  },
  machu_picchu: {
    tema: "lugares_arte",
    subtema: "machu_picchu",
    palavras_chave: ["machu picchu", "cidade inca peru", "ruinas incas"],
    inicio: ["Machu Picchu fica nas montanhas do Peru \u26F0\uFE0F"],
    explicacao_curta: ["Ela foi constru\xEDda pelo povo inca."],
    explicacao_aprofundada: ["As constru\xE7\xF5es mostram conhecimentos avan\xE7ados de engenharia e organiza\xE7\xE3o."],
    curiosidade: ["Machu Picchu ficou escondida entre montanhas por muito tempo \u{1F33F}"],
    interacao: ["Voc\xEA gostaria de explorar cidades antigas?"],
    atividade: ["Desenhe uma cidade no alto das montanhas \u270F\uFE0F"],
    final: ["As antigas civiliza\xE7\xF5es deixaram marcas incr\xEDveis na hist\xF3ria \u{1F30E}"],
    emocao: "aventura",
    nivel: "leve"
  },
  sagrada_familia: {
    tema: "lugares_arte",
    subtema: "sagrada_familia",
    palavras_chave: ["sagrada familia", "igreja gaudi barcelona", "igreja diferente espanha"],
    inicio: ["A Sagrada Fam\xEDlia possui formas surpreendentes \u26EA"],
    explicacao_curta: ["Ela foi criada pelo artista Antoni Gaud\xED."],
    explicacao_aprofundada: ["A igreja mistura arquitetura, natureza e muitos detalhes art\xEDsticos."],
    curiosidade: ["As torres da Sagrada Fam\xEDlia parecem esculturas gigantes \u{1F31F}"],
    interacao: ["Que tipo de constru\xE7\xE3o diferente voc\xEA criaria?"],
    atividade: ["Desenhe uma igreja inspirada em formas da natureza \u{1F33F}"],
    final: ["A arquitetura tamb\xE9m pode ser cheia de imagina\xE7\xE3o \u2728"],
    emocao: "criatividade",
    nivel: "leve"
  },
  bienal_sp: {
    tema: "lugares_arte",
    subtema: "bienal_sp",
    palavras_chave: ["bienal de sao paulo", "exposicao arte sp", "evento arte brasil"],
    inicio: ["A Bienal de S\xE3o Paulo re\xFAne artistas do mundo inteiro \u{1F3A8}"],
    explicacao_curta: ["\xC9 uma grande exposi\xE7\xE3o de arte contempor\xE2nea."],
    explicacao_aprofundada: ["Os artistas apresentam obras criativas usando pinturas, esculturas, v\xEDdeos e instala\xE7\xF5es."],
    curiosidade: ["A Bienal acontece em S\xE3o Paulo e recebe visitantes de muitos lugares \u{1F30E}"],
    interacao: ["Que tipo de obra voc\xEA gostaria de mostrar em uma exposi\xE7\xE3o?"],
    atividade: ["Crie um cartaz para uma mostra de arte \u270F\uFE0F"],
    final: ["A arte pode unir pessoas e ideias diferentes \u{1F308}"],
    emocao: "exploracao",
    nivel: "leve"
  },
  pinacoteca: {
    tema: "lugares_arte",
    subtema: "pinacoteca",
    palavras_chave: ["pinacoteca", "pinacoteca s\xE3o paulo", "museu de arte sp", "pinacoteca do estado"],
    inicio: ["A Pinacoteca de S\xE3o Paulo \xE9 um museum cheio de arte brasileira \u{1F5BC}\uFE0F"],
    explicacao_curta: ["Ela guarda pinturas e esculturas de artistas do Brasil."],
    explicacao_aprofundada: ["O pr\xE9dio da Pinacoteca \xE9 antigo e lindo, com jardins e exposi\xE7\xF5es que contam a hist\xF3ria da arte nacional."],
    curiosidade: ["A Pinacoteca fica perto do Jardim da Luz, um parque hist\xF3rico em S\xE3o Paulo \u{1F333}"],
    interacao: ["Voc\xEA j\xE1 viu pinturas que mostram paisagens do Brasil?"],
    atividade: ["Desenhe uma paisagem brasileira usando l\xE1pis de cor \u{1F304}"],
    final: ["A arte brasileira \xE9 rica e cheia de cores e sentimentos \u{1F1E7}\u{1F1F7}"],
    emocao: "orgulho",
    nivel: "leve"
  },
  museu_imagem_som: {
    tema: "lugares_arte",
    subtema: "museu_imagem_som",
    palavras_chave: ["museu da imagem e do som", "mis sp", "museu do som", "mis s\xE3o paulo"],
    inicio: ["O Museu da Imagem e do Som (MIS) \xE9 um lugar de m\xFAsica, cinema e fotografia \u{1F3AC}\u{1F4F8}"],
    explicacao_curta: ["L\xE1 voc\xEA encontra exposi\xE7\xF5es sobre cinema, fotos e at\xE9 discos antigos."],
    explicacao_aprofundada: ["O MIS tem um acervo com filmes, v\xEDdeos, grava\xE7\xF5es e objetos que contam a hist\xF3ria da comunica\xE7\xE3o."],
    curiosidade: ["O pr\xE9dio do MIS tem uma fachada moderna e laranja que chama a aten\xE7\xE3o \u{1F9E1}"],
    interacao: ["Voc\xEA gosta de tirar fotos ou assistir a filmes?"],
    atividade: ["Crie uma hist\xF3ria em quadrinhos com fotos ou desenhos \u{1F39E}\uFE0F"],
    final: ["Imagens e sons tamb\xE9m s\xE3o formas de arte e mem\xF3ria \u{1F31F}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  catavento: {
    tema: "lugares_arte",
    subtema: "catavento",
    palavras_chave: ["catavento", "catavento cultural", "museu de ci\xEAncias sp", "catavento s\xE3o paulo"],
    inicio: ["O Catavento \xE9 um museu de ci\xEAncias super divertido e interativo \u{1F52D}\u269B\uFE0F"],
    explicacao_curta: ["L\xE1 voc\xEA pode brincar e aprender sobre o corpo humano, o espa\xE7o e a natureza."],
    explicacao_aprofundada: ["O museu fica no antigo Pal\xE1cio das Ind\xFAstrias e tem quatro grandes \xE1reas: Universo, Vida, Engenho e Sociedade."],
    curiosidade: ["No Catavento, d\xE1 para tocar em experimentos e at\xE9 ver f\xF3sseis de dinossauros \u{1F996}"],
    interacao: ["Qual parte da ci\xEAncia voc\xEA mais gosta? O espa\xE7o, os animais ou as inven\xE7\xF5es?"],
    atividade: ["Invente uma m\xE1quina maluca para ajudar as pessoas \u2728"],
    final: ["A ci\xEAncia e a arte podem andar juntas para explicar o mundo \u{1F30D}"],
    emocao: "aventura",
    nivel: "leve"
  },
  museu_lingua_portuguesa: {
    tema: "lugares_arte",
    subtema: "museu_lingua_portuguesa",
    palavras_chave: ["museu da l\xEDngua portuguesa", "museu da lingua", "esta\xE7\xE3o da luz", "l\xEDngua portuguesa sp"],
    inicio: ["O Museu da L\xEDngua Portuguesa \xE9 um lugar m\xE1gico que celebra as palavras que falamos \u{1F4AC}\u{1F4D6}"],
    explicacao_curta: ["Ele mostra como a l\xEDngua portuguesa nasceu, cresceu e se transformou."],
    explicacao_aprofundada: ["O museu fica na Esta\xE7\xE3o da Luz, em S\xE3o Paulo, e usa telas, jogos e \xE1udios para explicar a origem das palavras."],
    curiosidade: ["O museu j\xE1 pegou fogo, mas foi reconstru\xEDdo e ficou ainda mais bonito \u{1F525}\u27A1\uFE0F\u2728"],
    interacao: ["Qual \xE9 a sua palavra favorita em portugu\xEAs?"],
    atividade: ["Invente uma nova palavra e desenhe o que ela significa \u{1F58D}\uFE0F"],
    final: ["Nossa l\xEDngua \xE9 uma forma de arte que nos conecta \u{1F308}"],
    emocao: "descoberta",
    nivel: "leve"
  },
  museu_ipiranga: {
    tema: "lugares_arte",
    subtema: "museu_ipiranga",
    palavras_chave: ["museu do ipiranga", "museu paulista", "ipiranga sp", "independ\xEAncia brasil"],
    inicio: ["O Museu do Ipiranga (Museu Paulista) conta a hist\xF3ria da independ\xEAncia do Brasil \u{1F3DB}\uFE0F\u{1F1E7}\u{1F1F7}"],
    explicacao_curta: ["Ele fica onde Dom Pedro I declarou a independ\xEAncia, \xE0s margens do riacho Ipiranga."],
    explicacao_aprofundada: ["O museu tem m\xF3veis antigos, pinturas hist\xF3ricas e objetos que mostram como era a vida no Brasil colonial."],
    curiosidade: ["O jardim do museu \xE9 lindo e tem um monumento que celebra a independ\xEAncia \u{1F333}"],
    interacao: ["Voc\xEA sabe o que significa 'independ\xEAncia'?"],
    atividade: ["Desenhe a cena de um momento importante da hist\xF3ria do Brasil \u{1F4DC}"],
    final: ["Conhecer o passado ajuda a entender o presente e construir o futuro \u{1F31F}"],
    emocao: "orgulho",
    nivel: "leve"
  },
  memorial_america_latina: {
    tema: "lugares_arte",
    subtema: "memorial_america_latina",
    palavras_chave: ["memorial da am\xE9rica latina", "memorial am\xE9rica latina sp", "memorial da am\xE9rica latina s\xE3o paulo", "centro cultural latin america", "oscar niemeyer memorial"],
    inicio: ["O Memorial da Am\xE9rica Latina \xE9 um espa\xE7o que celebra a arte, a hist\xF3ria e a cultura de todo o continente latino-americano \u{1F30E}"],
    explicacao_curta: ["L\xE1 voc\xEA encontra esculturas, obras de arte e um museu que conta a hist\xF3ria dos povos da Am\xE9rica Latina."],
    explicacao_aprofundada: ["O memorial foi criado pelo arquiteto Oscar Niemeyer e tem um audit\xF3rio, uma biblioteca e um sal\xE3o de atos. Ele fica em S\xE3o Paulo e \xE9 um s\xEDmbolo de uni\xE3o entre os pa\xEDses latinos."],
    curiosidade: ["No memorial, h\xE1 uma grande escultura em forma de m\xE3o que representa a dor e a luta dos povos latino-americanos \u270B\u{1F3FD}\u{1F5FA}\uFE0F"],
    interacao: ["Voc\xEA conhece algum pa\xEDs da Am\xE9rica Latina al\xE9m do Brasil, como Argentina, M\xE9xico ou Peru?"],
    atividade: ["Desenhe a bandeira de um pa\xEDs da Am\xE9rica Latina que voc\xEA gostaria de visitar \u{1F1E6}\u{1F1F7}\u{1F1F2}\u{1F1FD}\u{1F1F5}\u{1F1EA}"],
    final: ["A Am\xE9rica Latina \xE9 rica em cores, ritmos, sabores e hist\xF3rias incr\xEDveis \u{1F308}\u{1F3B6}"],
    emocao: "orgulho",
    nivel: "leve"
  },
  // --- OBRAS FAMOSAS NO MUNDO ---
  mona_lisa: {
    tema: "obras_de_arte",
    subtema: "mona_lisa",
    palavras_chave: ["mona lisa", "leonardo da vinci", "retrato", "sorriso misterioso", "marrom", "verde", "bege"],
    inicio: ["Oi, pequeno artista! Essa pintura ficou famosa pelo sorriso misterioso da mulher \u{1F3A8}"],
    explicacao_curta: ["Leonardo da Vinci usou sombras suaves para deixar o rosto bem realista."],
    explicacao_aprofundada: ["Parece que ela est\xE1 thinking em um segredo! O sorriso muda de express\xE3o dependendo do \xE2ngulo que voc\xEA olha."],
    curiosidade: ["A Mona Lisa est\xE1 guardada no museu do Louvre, em Paris \u{1F5BC}\uFE0F"],
    interacao: ["O que voc\xEA acha que a Mona Lisa est\xE1 pensando?"],
    atividade: ["Desenhe um rosto com um sorriso misterioso \u270F\uFE0F"],
    final: ["Um sorriso pode esconder muitos segredos \u{1F31F}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  noite_estrelada: {
    tema: "obras_de_arte",
    subtema: "noite_estrelada",
    palavras_chave: ["noite estrelada", "van gogh", "paisagem", "c\xE9u estrelado", "azul", "amarelo", "preto"],
    inicio: ["Veja como o c\xE9u parece girar cheio de estrelas brilhantes \u{1F30C}"],
    explicacao_curta: ["Van Gogh pintou a noite com muita emo\xE7\xE3o e pinceladas fortes."],
    explicacao_aprofundada: ["As pinceladas curvas mostram seus sentimentos e a energia que ele via no c\xE9u."],
    curiosidade: ["Van Gogh pintou essa obra enquanto estava em um hospital \u{1F3E5}"],
    interacao: ["Se voc\xEA pudesse pintar o c\xE9u, como ele seria?"],
    atividade: ["Fa\xE7a espirais coloridas imitando as estrelas de Van Gogh \u{1F3A8}"],
    final: ["O c\xE9u noturno pode ser cheio de movimento e emo\xE7\xE3o \u2728"],
    emocao: "emo\xE7\xE3o",
    nivel: "leve"
  },
  ultima_ceia: {
    tema: "obras_de_arte",
    subtema: "ultima_ceia",
    palavras_chave: ["ultima ceia", "leonardo da vinci", "religioso", "jesus", "marrom", "azul", "bege"],
    inicio: ["Essa obra mostra Jesus e seus amigos em um jantar importante \u{1F35E}"],
    explicacao_curta: ["O artista organizou as pessoas de um jeito que parece quase uma fotografia."],
    explicacao_aprofundada: ["Cada pessoa tem uma rea\xE7\xE3o diferente, mostrando surpresa, tristeza e conversa."],
    curiosidade: ["A \xDAltima Ceia \xE9 um mural gigante pintado em uma parede de igreja na It\xE1lia \u{1F1EE}\u{1F1F9}"],
    interacao: ["O que voc\xEA acha que Jesus est\xE1 falando na cena?"],
    atividade: ["Desenhe uma mesa redonda com seus amigos e comidas \u{1F58D}\uFE0F"],
    final: ["Um jantar pode guardar uma hist\xF3ria importante \u{1F31F}"],
    emocao: "respeito",
    nivel: "leve"
  },
  guernica: {
    tema: "obras_de_arte",
    subtema: "guernica",
    palavras_chave: ["guernica", "picasso", "guerra", "sofrimento", "preto", "branco", "cinza"],
    inicio: ["Picasso pintou essa obra para mostrar a tristeza e o medo causados pela guerra \u{1F54A}\uFE0F"],
    explicacao_curta: ["As formas parecem quebradas para mostrar o sofrimento das pessoas."],
    explicacao_aprofundada: ["Ele usou apenas preto, branco e cinza para dar for\xE7a e gravidade \xE0 cena."],
    curiosidade: ["Guernica \xE9 o nome de uma cidade espanhola que foi bombardeada \u{1F4A3}"],
    interacao: ["Como voc\xEA mostraria a paz em um desenho?"],
    atividade: ["Desenhe um s\xEDmbolo da paz usando formas simples \u270F\uFE0F"],
    final: ["A arte pode denunciar a viol\xEAncia e pedir paz \u{1F30E}"],
    emocao: "consci\xEAncia",
    nivel: "leve"
  },
  o_grito: {
    tema: "obras_de_arte",
    subtema: "o_grito",
    palavras_chave: ["o grito", "edvard munch", "medo", "emo\xE7\xE3o", "laranja", "azul", "vermelho"],
    inicio: ["A pessoa da pintura parece assustada e preocupada \u{1F631}"],
    explicacao_curta: ["As cores fortes e o c\xE9u estranho ajudam a mostrar emo\xE7\xF5es intensas."],
    explicacao_aprofundada: ["Munch quis mostrar como \xE9 sentir um p\xE2nico que vem de dentro."],
    curiosidade: ["Existem quatro vers\xF5es dessa pintura feitas pelo artista \u{1F3A8}"],
    interacao: ["O que te deixa assustado \xE0s vezes?"],
    atividade: ["Desenhe um rosto expressando medo ou surpresa \u{1F3AD}"],
    final: ["Todos n\xF3s sentimos emo\xE7\xF5es fortes, e a arte ajuda a express\xE1-las \u{1F308}"],
    emocao: "emo\xE7\xE3o",
    nivel: "leve"
  },
  criacao_de_adao: {
    tema: "obras_de_arte",
    subtema: "criacao_de_adao",
    palavras_chave: ["cria\xE7\xE3o de ad\xE3o", "michelangelo", "religioso", "deus", "bege", "verde", "rosa"],
    inicio: ["Essa pintura famosa mostra Deus e Ad\xE3o quase tocando os dedos \u2728"],
    explicacao_curta: ["Parece um momento m\xE1gico cheio de energia."],
    explicacao_aprofundada: ["O toque que n\xE3o acontece representa a vida sendo passada para o primeiro homem."],
    curiosidade: ["A pintura fica no teto da Capela Sistina, no Vaticano \u26EA"],
    interacao: ["Se voc\xEA pudesse dar vida a algo com um toque, o que seria?"],
    atividade: ["Desenhe duas m\xE3os quase se tocando \u270F\uFE0F"],
    final: ["A vida pode come\xE7ar em um gesto simples \u{1F31F}"],
    emocao: "admira\xE7\xE3o",
    nivel: "leve"
  },
  nascimento_de_venus: {
    tema: "obras_de_arte",
    subtema: "nascimento_de_venus",
    palavras_chave: ["nascimento de v\xEAnus", "botticelli", "mitologia", "concha", "azul", "rosa", "bege"],
    inicio: ["V\xEAnus aparece saindo do mar dentro de uma concha gigante \u{1F30A}"],
    explicacao_curta: ["A pintura parece um conto encantado cheio de beleza."],
    explicacao_aprofundada: ["Os ventos empurram a concha e uma deusa espera com um manto para cobri-la."],
    curiosidade: ["V\xEAnus \xE9 a deusa romana do amor e da beleza \u{1F496}"],
    interacao: ["Que criatura m\xE1gica sairia do mar na sua imagina\xE7\xE3o?"],
    atividade: ["Desenhe uma concha gigante com algo saindo de dentro \u{1F41A}"],
    final: ["O mar tamb\xE9m pode ser o ber\xE7o da arte \u2728"],
    emocao: "encantamento",
    nivel: "leve"
  },
  moca_com_brinco_de_perola: {
    tema: "obras_de_arte",
    subtema: "moca_com_brinco_de_perola",
    palavras_chave: ["mo\xE7a com brinco de p\xE9rola", "vermeer", "retrato", "brinco", "azul", "preto", "bege"],
    inicio: ["A menina olha para n\xF3s como se quisesse conversar \u{1F440}"],
    explicacao_curta: ["O brinco brilhante chama muita aten\xE7\xE3o e deixa a pintura elegante."],
    explicacao_aprofundada: ["O fundo escuro faz a menina e seu brinco se destacarem."],
    curiosidade: ["Algumas pessoas chamam essa obra de 'Mona Lisa do Norte' \u{1F30D}"],
    interacao: ["Se voc\xEA pudesse usar um brinco m\xE1gico, que poder ele teria?"],
    atividade: ["Desenhe um retrato com um acess\xF3rio brilhante \u2728"],
    final: ["\xC0s vezes, um pequeno detalhe faz toda a diferen\xE7a \u{1F31F}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  as_meninas: {
    tema: "obras_de_arte",
    subtema: "as_meninas",
    palavras_chave: ["as meninas", "vel\xE1zquez", "vida na corte", "princesa", "marrom", "cinza", "bege"],
    inicio: ["Essa obra mostra uma princesa e v\xE1rias pessoas ao seu redor \u{1F478}"],
    explicacao_curta: ["Parece que estamos dentro da sala junto com elas!"],
    explicacao_aprofundada: ["O artista se incluiu na pintura, atr\xE1s de um cavalete, brincando com quem olha."],
    curiosidade: ["As meninas eram damas de companhia da princesa, da\xED o nome \u{1F457}"],
    interacao: ["Se voc\xEA estivesse nessa cena, o que estaria fazendo?"],
    atividade: ["Desenhe uma sala com v\xE1rias pessoas fazendo coisas diferentes \u{1F58D}\uFE0F"],
    final: ["Um quadro pode parecer uma janela para outra \xE9poca \u{1F31F}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  o_beijo: {
    tema: "obras_de_arte",
    subtema: "o_beijo",
    palavras_chave: ["o beijo", "klimt", "amor", "dourado", "dourado", "amarelo", "marrom"],
    inicio: ["O casal parece envolvido em um abra\xE7o dourado cheio de carinho \u{1F49B}"],
    explicacao_curta: ["Klimt usou muito brilho e formas decorativas."],
    explicacao_aprofundada: ["Os padr\xF5es geom\xE9tricos e o dourado representam a riqueza do sentimento amoroso."],
    curiosidade: ["Klimt usou folhas de ouro de verdade na pintura \u2728"],
    interacao: ["Como voc\xEA mostraria o amor em um desenho?"],
    atividade: ["Crie um abra\xE7o colorido usando formas douradas \u{1F3A8}"],
    final: ["O amor pode ser brilhante e decorado \u{1F31F}"],
    emocao: "amor",
    nivel: "leve"
  },
  persistencia_da_memoria: {
    tema: "obras_de_arte",
    subtema: "persistencia_da_memoria",
    palavras_chave: ["persist\xEAncia da mem\xF3ria", "dal\xED", "surrealismo", "rel\xF3gios derretendo", "marrom", "azul", "amarelo"],
    inicio: ["Os rel\xF3gios derretendo parecem um sonho estranho \u{1F570}\uFE0F"],
    explicacao_curta: ["Dal\xED queria mostrar que o tempo pode parecer diferente na nossa imagina\xE7\xE3o."],
    explicacao_aprofundada: ["Os rel\xF3gios moles representam a forma como sentimos o tempo passar de maneira el\xE1stica."],
    curiosidade: ["Dal\xED se inspirou em queijo derretendo para criar essa ideia \u{1F9C0}"],
    interacao: ["Se o tempo pudesse derreter, que horas voc\xEA gostaria que ele parasse?"],
    atividade: ["Desenhe um rel\xF3gio derretendo em um cen\xE1rio estranho \u{1F3A8}"],
    final: ["Na imagina\xE7\xE3o, tudo pode ser diferente \u{1F31F}"],
    emocao: "imagina\xE7\xE3o",
    nivel: "leve"
  },
  ronda_noturna: {
    tema: "obras_de_arte",
    subtema: "ronda_noturna",
    palavras_chave: ["ronda noturna", "rembrandt", "cena hist\xF3rica", "guarda", "preto", "marrom", "amarelo"],
    inicio: ["Esse grupo de guardas parece pronto para sair em miss\xE3o \u{1F6E1}\uFE0F"],
    explicacao_curta: ["A luz faz algumas pessoas brilharem mais do que outras."],
    explicacao_aprofundada: ["Rembrandt usou luz e sombra para dar destaque aos l\xEDderes da patrulha."],
    curiosidade: ["Na verdade, a cena acontece durante o dia, mas a pintura escureceu com o tempo \u{1F31E}"],
    interacao: ["Que miss\xE3o voc\xEA acha que esses guardas v\xE3o cumprir?"],
    atividade: ["Desenhe um grupo de pessoas com uma luz forte iluminando o centro \u{1F526}"],
    final: ["A luz pode contar quem \xE9 importante em uma hist\xF3ria \u{1F31F}"],
    emocao: "mist\xE9rio",
    nivel: "leve"
  },
  impressao_sol_nascente: {
    tema: "obras_de_arte",
    subtema: "impressao_sol_nascente",
    palavras_chave: ["impress\xE3o sol nascente", "monet", "natureza", "amanhecer", "azul", "laranja", "cinza"],
    inicio: ["Monet pintou o nascer do sol com pinceladas r\xE1pidas e leves \u{1F305}"],
    explicacao_curta: ["A \xE1gua parece se mover de verdade!"],
    explicacao_aprofundada: ["Essa pintura deu nome ao movimento impressionista, que capturava as impress\xF5es do momento."],
    curiosidade: ["Monet pintou essa cena da janela do quarto onde estava hospedado \u{1FA9F}"],
    interacao: ["Como \xE9 o nascer do sol onde voc\xEA mora?"],
    atividade: ["Pinte um amanhecer usando pinceladas leves e r\xE1pidas \u{1F3A8}"],
    final: ["A primeira luz do dia pode ser m\xE1gica \u2728"],
    emocao: "calma",
    nivel: "leve"
  },
  liberdade_guiando_o_povo: {
    tema: "obras_de_arte",
    subtema: "liberdade_guiando_o_povo",
    palavras_chave: ["liberdade guiando o povo", "delacroix", "revolu\xE7\xE3o", "bandeira", "vermelho", "azul", "marrom"],
    inicio: ["A mulher com a bandeira representa a liberdade liderando o povo \u{1F6A9}"],
    explicacao_curta: ["A pintura fala sobre coragem e luta."],
    explicacao_aprofundada: ["Ela mostra pessoas comuns se unindo por um ideal, mesmo enfrentando perigos."],
    curiosidade: ["A mulher n\xE3o \xE9 real, \xE9 uma ideia ganhando forma de mulher \u{1F4AA}"],
    interacao: ["O que voc\xEA faria para lutar por algo que acredita?"],
    atividade: ["Desenhe uma pessoa erguendo um s\xEDmbolo importante \u270F\uFE0F"],
    final: ["\xC0s vezes, um s\xEDmbolo pode unir muitas pessoas \u{1F31F}"],
    emocao: "coragem",
    nivel: "leve"
  },
  jardim_das_delicias_terrenas: {
    tema: "obras_de_arte",
    subtema: "jardim_das_delicias_terrenas",
    palavras_chave: ["jardim das del\xEDcias terrenas", "bosch", "fantasia", "criaturas", "verde", "rosa", "azul"],
    inicio: ["Essa obra \xE9 cheia de criaturas estranhas e cenas curiosas \u{1F409}"],
    explicacao_curta: ["Parece um grande mundo de fantasia para explorar."],
    explicacao_aprofundada: ["\xC9 um tr\xEDptico (tr\xEAs pinturas juntas) que mostra o para\xEDso, o mundo terreno e o inferno de forma imaginativa."],
    curiosidade: ["Bosch criou personagens que nunca existiram, misturando plantas, animais e objetos \u{1F9D9}"],
    interacao: ["Que bicho estranho voc\xEA inventaria?"],
    atividade: ["Misture tr\xEAs animais diferentes para criar uma criatura nova \u{1F3A8}"],
    final: ["Na fantasia, tudo pode ser poss\xEDvel \u{1F308}"],
    emocao: "imagina\xE7\xE3o",
    nivel: "leve"
  },
  american_gothic: {
    tema: "obras_de_arte",
    subtema: "american_gothic",
    palavras_chave: ["american gothic", "grant wood", "vida rural", "s\xE9rio", "marrom", "verde", "cinza"],
    inicio: ["O homem e a mulher aparecem s\xE9rios em frente \xE0 casa \u{1F3E0}"],
    explicacao_curta: ["A pintura mostra a vida simples do campo nos Estados Unidos."],
    explicacao_aprofundada: ["Os rostos s\xE9rios e a roupa de trabalho representam a for\xE7a e a honestidade dos agricultores."],
    curiosidade: ["As pessoas da pintura n\xE3o eram um casal de verdade, eram a irm\xE3 do artista e seu dentista \u{1F469}\u{1F33E}"],
    interacao: ["Qual \xE9 a express\xE3o mais s\xE9ria que voc\xEA consegue fazer?"],
    atividade: ["Desenhe uma casa simples e uma pessoa com um objeto de trabalho \u270F\uFE0F"],
    final: ["O trabalho no campo tamb\xE9m pode ser arte \u{1F33E}"],
    emocao: "respeito",
    nivel: "leve"
  },
  almoco_dos_remadores: {
    tema: "obras_de_arte",
    subtema: "almoco_dos_remadores",
    palavras_chave: ["almo\xE7o dos remadores", "renoir", "amizade", "festa", "azul", "branco", "laranja"],
    inicio: ["As pessoas est\xE3o conversando, comendo e se divertindo juntas \u{1F37D}\uFE0F"],
    explicacao_curta: ["Renoir gostava de pintar momentos felizes."],
    explicacao_aprofundada: ["A luz do sol atravessa as folhas e ilumina o rosto de cada pessoa de forma diferente."],
    curiosidade: ["Um dos homens na pintura \xE9 um amigo artista de Renoir \u{1F58C}\uFE0F"],
    interacao: ["Quem voc\xEA convidaria para um almo\xE7o divertido?"],
    atividade: ["Desenhe uma mesa redonda com amigos e comidas coloridas \u{1F3A8}"],
    final: ["Compartilhar uma refei\xE7\xE3o \xE9 tamb\xE9m compartilhar alegria \u2728"],
    emocao: "alegria",
    nivel: "leve"
  },
  filho_do_homem: {
    tema: "obras_de_arte",
    subtema: "filho_do_homem",
    palavras_chave: ["filho do homem", "magritte", "mist\xE9rio", "ma\xE7\xE3", "verde", "cinza", "azul"],
    inicio: ["O homem de chap\xE9u tem uma ma\xE7\xE3 escondendo seu rosto \u{1F34E}"],
    explicacao_curta: ["A obra brinca com mist\xE9rio e imagina\xE7\xE3o."],
    explicacao_aprofundada: ["A ma\xE7\xE3 esconde mas tamb\xE9m revela, deixando a gente curioso sobre o que est\xE1 por tr\xE1s."],
    curiosidade: ["Magritte disse que a ma\xE7\xE3 representa a tenta\xE7\xE3o que sempre est\xE1 na frente dos nossos olhos \u{1F440}"],
    interacao: ["Se voc\xEA pudesse esconder seu rosto com algo, o que seria?"],
    atividade: ["Desenhe uma figura com o rosto escondido por um objeto inventado \u{1F58D}\uFE0F"],
    final: ["O que est\xE1 escondido \xE0s vezes \xE9 mais interessante \u{1F31F}"],
    emocao: "mist\xE9rio",
    nivel: "leve"
  },
  grande_onda_de_kanagawa: {
    tema: "obras_de_arte",
    subtema: "grande_onda_de_kanagawa",
    palavras_chave: ["grande onda de kanagawa", "hokusai", "natureza", "onda", "tsunami", "azul", "branco", "bege"],
    inicio: ["A enorme onda parece pronta para engolir os barcos \u{1F30A}"],
    explicacao_curta: ["O artista japon\xEAs mostrou a for\xE7a impressionante da natureza."],
    explicacao_aprofundada: ["Os barcos s\xE3o pequenos diante da onda, mostrando como os humanos s\xE3o fr\xE1geis frente \xE0 natureza."],
    curiosidade: ["Essa imagem \xE9 uma gravura, n\xE3o uma pintura, e foi reproduzida milhares de vezes \u{1F5A8}\uFE0F"],
    interacao: ["Voc\xEA j\xE1 viu o mar bem agitado?"],
    atividade: ["Desenhe uma grande onda usando curvas e espumas \u{1F3A8}"],
    final: ["A natureza pode ser bela e poderosa ao mesmo tempo \u2728"],
    emocao: "adrenalina",
    nivel: "leve"
  },
  no_5_1948: {
    tema: "obras_de_arte",
    subtema: "no_5_1948",
    palavras_chave: ["no 5 1948", "jackson pollock", "arte abstrata", "respingos", "amarelo", "marrom", "preto"],
    inicio: ["Pollock jogava tinta na tela de um jeito livre e divertido \u{1F3A8}"],
    explicacao_curta: ["A pintura parece cheia de energia e movimento."],
    explicacao_aprofundada: ["Pollock colocava a tela no ch\xE3o e andava ao redor pingando tinta, criando uma dan\xE7a com as cores."],
    curiosidade: ["Essa \xE9 uma das pinturas mais caras j\xE1 vendidas: mais de 140 milh\xF5es de d\xF3lares \u{1F4B0}"],
    interacao: ["Se voc\xEA pudesse pintar com respingos, onde faria isso?"],
    atividade: ["Fa\xE7a uma pintura com respingos e gotas de tinta (use um pincel para espirrar) \u{1F3A8}"],
    final: ["A arte pode ser pura a\xE7\xE3o e divers\xE3o \u{1F32A}\uFE0F"],
    emocao: "energia",
    nivel: "leve"
  },
  castle_and_sun: {
    tema: "obras_de_arte",
    subtema: "castle_and_sun",
    palavras_chave: ["castle and sun", "paul klee", "arte abstrata", "castelo", "amarelo", "laranja", "vermelho"],
    inicio: ["Paul Klee usou formas geom\xE9tricas coloridas para criar um castelo m\xE1gico \u{1F3F0}"],
    explicacao_curta: ["Parece um desenho feito com blocos de cor."],
    explicacao_aprofundada: ["As formas retangulares e tri\xE2ngulos se encaixam como pe\xE7as de um quebra-cabe\xE7a para formar o castelo."],
    curiosidade: ["Klee tamb\xE9m era m\xFAsico, e ele dizia que pintava como se compusesse m\xFAsica \u{1F3B5}"],
    interacao: ["Como seria seu castelo dos sonhos feito de formas?"],
    atividade: ["Construa um castelo usando apenas quadrados, tri\xE2ngulos e c\xEDrculos \u270F\uFE0F"],
    final: ["Formas simples podem criar mundos encantados \u{1F31F}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  nenufares: {
    tema: "obras_de_arte",
    subtema: "nenufares",
    palavras_chave: ["nen\xFAfares", "monet", "natureza", "flores", "\xE1gua", "verde", "azul", "rosa"],
    inicio: ["Monet pintou flores boiando na \xE1gua com cores suaves e reflexos brilhantes \u{1F490}"],
    explicacao_curta: ["Parece um jardim calmo e tranquilo."],
    explicacao_aprofundada: ["Monet pintou muitas vers\xF5es do mesmo jardim de nen\xFAfares para capturar a mudan\xE7a da luz ao longo do dia."],
    curiosidade: ["Essas pinturas s\xE3o enormes e ocupam salas inteiras em museus \u{1F5BC}\uFE0F"],
    interacao: ["O que voc\xEA gosta de olhar quando quer ficar calmo?"],
    atividade: ["Desenhe flores na \xE1gua com espelhos e reflexos \u{1F3A8}"],
    final: ["A \xE1gua pode refletir a beleza do c\xE9u e das flores \u2728"],
    emocao: "calma",
    nivel: "leve"
  },
  // --- OBRAS BRASILEIRAS ---
  tarsila_do_amaral_abaporu: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["abaporu", "obra abaporu", "quadro abaporu", "tarsila abaporu"],
    inicio: ["Abaporu tem p\xE9s e m\xE3os enormes, como se abra\xE7asse o ch\xE3o e o c\xE9u ao mesmo tempo \u{1F335}\u{1F463}"],
    explicacao_curta: ["Essa pintura mostra uma pessoa com p\xE9s e m\xE3os enormes sentada ao lado de um cacto. A artista queria mostrar a for\xE7a do povo brasileiro e criar uma arte diferente, bem brasileira e cheia de imagina\xE7\xE3o."],
    explicacao_aprofundada: ["Tarsila usou verde, azul e amarelo para criar uma figura solit\xE1ria mas poderosa, representando a antropofagia cultural \u2013 a ideia de devorar influ\xEAncias estrangeiras e criar algo genuinamente brasileiro."],
    curiosidade: ["Abaporu significa 'homem que come gente' em tupi-guarani, e a obra inspirou o Movimento Antropof\xE1gico no Brasil \u{1F37D}\uFE0F"],
    interacao: ["Se voc\xEA tivesse p\xE9s enormes, onde gostaria de pisar?"],
    atividade: ["Desenhe uma figura com uma parte do corpo exageradamente grande (m\xE3o, cabe\xE7a, p\xE9) e invente uma hist\xF3ria para ela \u270D\uFE0F"],
    final: ["A arte pode transformar o estranho em algo cheio de significado \u{1F3A8}"],
    emocao: "espanto",
    nivel: "leve"
  },
  tarsila_do_amaral_operarios: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["oper\xE1rios", "tarsila oper\xE1rios", "quadro oper\xE1rios"],
    inicio: ["Muitos rostos diferentes, mas todos trabalhando juntos \u2013 assim Tarsila pintou a for\xE7a do povo brasileiro \u{1F477}\u200D\u2642\uFE0F\u{1F477}\u200D\u2640\uFE0F"],
    explicacao_curta: ["Aqui vemos muitas pessoas trabalhando juntas. Cada rosto \xE9 diferente, mostrando como o Brasil \xE9 formado por v\xE1rios povos e culturas. A pintura fala sobre trabalho e uni\xE3o."],
    explicacao_aprofundada: ["Com cinza, marrom e rosa, Tarsila criou uma multid\xE3o de oper\xE1rios an\xF4nimos, destacando a diversidade \xE9tnica e a import\xE2ncia coletiva do trabalho na constru\xE7\xE3o do pa\xEDs."],
    curiosidade: ["Essa foi a primeira pintura social de Tarsila, mostrando sua preocupa\xE7\xE3o com os trabalhadores ap\xF3s uma viagem \xE0 Uni\xE3o Sovi\xE9tica \u{1F1F7}\u{1F1FA}"],
    interacao: ["Que profiss\xE3o voc\xEA gostaria de desenhar para mostrar a import\xE2ncia do trabalho?"],
    atividade: ["Desenhe uma fileira de tr\xEAs pessoas, cada uma com um uniforme ou ferramenta diferente, representando diferentes trabalhos \u{1F6E0}\uFE0F"],
    final: ["O trabalho em equipe e a diversidade tornam o Brasil mais forte \u{1F91D}"],
    emocao: "solidariedade",
    nivel: "leve"
  },
  tarsila_do_amaral_antropofagia: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["antropofagia", "tarsila antropofagia", "quadro antropofagia"],
    inicio: ["Uma figura estranha, quase de outro mundo, com uma perna gigante e um p\xE9 de planta \u2013 \xE9 a Antropofagia de Tarsila \u{1F9B5}\u{1F33F}"],
    explicacao_curta: ["Essa obra mistura formas estranhas e divertidas para mostrar a ideia de que o Brasil pega influ\xEAncias de outros lugares e transforma tudo em algo novo e brasileiro."],
    explicacao_aprofundada: ["Com verde, amarelo e azul, a pintura sintetiza o Manifesto Antropof\xE1gico de Oswald de Andrade: devorar a cultura europeia e regurgitar algo original, tropical e selvagem."],
    curiosidade: ["A figura central lembra Abaporu, mas agora com uma perna ainda mais alongada, como se estivesse pronta para engolir o mundo \u{1F30D}"],
    interacao: ["O que voc\xEA 'engole' de outras culturas (comida, m\xFAsica, brincadeiras) e transforma no seu jeito brasileiro?"],
    atividade: ["Desenhe um prato com v\xE1rios alimentos de lugares diferentes (pizza, sushi, feijoada) e misture tudo em um s\xF3 prato criativo \u{1F37D}\uFE0F"],
    final: ["A arte brasileira \xE9 poderosa porque consegue transformar tudo em algo nosso \u{1F49A}\u{1F49B}"],
    emocao: "ousadia",
    nivel: "leve"
  },
  tarsila_do_amaral_a_cuca: {
    tema: "obras_arte_brasileira",
    subtema: "tarsila_do_amaral",
    palavras_chave: ["a cuca", "cuca tarsila", "quadro a cuca"],
    inicio: ["A Cuca do folclore ganhou um visual moderno e assustador, com formas geom\xE9tricas e cores vibrantes \u{1F40A}\u2728"],
    explicacao_curta: ["Voc\xEA conhece a Cuca das hist\xF3rias? Aqui ela aparece de um jeito m\xE1gico e assustador. A artista usou formas diferentes para lembrar os contos do folclore brasileiro."],
    explicacao_aprofundada: ["Com verde, amarelo e laranja, Tarsila transformou a bruxa jacar\xE9 em uma figura cubista, misturando tradi\xE7\xE3o popular com inova\xE7\xE3o art\xEDstica."],
    curiosidade: ["Esta pintura foi feita para o livro 'A Cuca', de Monteiro Lobato, e ajudou a imortalizar a personagem no imagin\xE1rio infantil \u{1F4D6}"],
    interacao: ["Como voc\xEA imagina a Cuca? Ela \xE9 bonita ou assustadora? Divertida ou malvada?"],
    atividade: ["Desenhe a Cuca do seu jeito, usando formas geom\xE9tricas (c\xEDrculos, tri\xE2ngulos, ret\xE2ngulos) e cores fortes \u{1F7E9}\u{1F7E8}\u{1F7E7}"],
    final: ["O folclore fica ainda mais m\xE1gico quando os artistas o reinventam \u{1F319}"],
    emocao: "curiosidade",
    nivel: "leve"
  },
  candido_portinari_o_lavrador_de_cafe: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["lavrador de caf\xE9", "portinari lavrador", "quadro lavrador de caf\xE9"],
    inicio: ["M\xE3os enormes, p\xE9s gigantes \u2013 assim Portinari mostrou a for\xE7a do trabalhador do caf\xE9 \u2615\u{1F4AA}"],
    explicacao_curta: ["Esse trabalhador tem m\xE3os e p\xE9s enormes para mostrar sua for\xE7a. Portinari queria homenagear as pessoas que trabalhavam nas planta\xE7\xF5es de caf\xE9 no Brasil."],
    explicacao_aprofundada: ["Com marrom, azul e verde, o artista real\xE7a a dignidade e o sofrimento do lavrador, usando o exagero para valorizar quem sustenta a economia com o suor."],
    curiosidade: ["Portinari vinha de uma fam\xEDlia de imigrantes italianos que trabalhavam em fazendas de caf\xE9; ele conhecia bem aquela realidade \u{1F347}"],
    interacao: ["O que voc\xEA faria se tivesse m\xE3os enormes? Que trabalho poderia fazer?"],
    atividade: ["Desenhe uma pessoa com m\xE3os enormes realizando alguma tarefa (plantar, construir, cozinhar) \u{1F590}\uFE0F\u{1F331}"],
    final: ["Trabalhadores merecem respeito e reconhecimento por sua for\xE7a e dedica\xE7\xE3o \u{1F31F}"],
    emocao: "gratid\xE3o",
    nivel: "leve"
  },
  candido_portinari_cafe: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["caf\xE9", "portinari caf\xE9", "quadro caf\xE9"],
    inicio: ["Homens e mulheres curvados, colhendo caf\xE9 sob o sol \u2013 uma cena dura, mas cheia de vida \u{1F31E}\u2615"],
    explicacao_curta: ["Aqui vemos trabalhadores colhendo caf\xE9. O artista mostrou como era dif\xEDcil trabalhar nas fazendas e como essas pessoas eram importantes para o pa\xEDs."],
    explicacao_aprofundada: ["Com marrom, verde e bege, Portinari cria uma composi\xE7\xE3o ritmada, onde os trabalhadores parecem se mover em harmonia, cada um com seu papel na colheita."],
    curiosidade: ["O quadro 'Caf\xE9' faz parte de uma s\xE9rie que Portinari pintou para o Minist\xE9rio da Educa\xE7\xE3o, retratando os ciclos econ\xF4micos do Brasil \u{1F1E7}\u{1F1F7}"],
    interacao: ["Voc\xEA j\xE1 colheu alguma fruta ou planta? Como foi?"],
    atividade: ["Desenhe uma planta\xE7\xE3o com fileiras de p\xE9s de caf\xE9 e algumas pessoas colhendo os gr\xE3ozinhos vermelhos \u{1F352}"],
    final: ["At\xE9 uma simples x\xEDcara de caf\xE9 carrega a hist\xF3ria de muitos trabalhadores \u2764\uFE0F"],
    emocao: "respeito",
    nivel: "leve"
  },
  candido_portinari_o_grito: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["o grito", "portinari o grito", "quadro o grito portinari"],
    inicio: ["Uma boca aberta, olhos arregalados \u2013 um grito que parece sair da tela e ecoar no peito \u{1F631}"],
    explicacao_curta: ["Essa pintura mostra uma pessoa parecendo assustada ou triste. As cores fortes ajudam a mostrar emo\xE7\xF5es bem intensas."],
    explicacao_aprofundada: ["Com vermelho, preto e amarelo, Portinari expressa ang\xFAstia e desespero, talvez como protesto contra as injusti\xE7as sociais e a dor humana."],
    curiosidade: ["Diferente do famoso 'O Grito' de Edvard Munch, o de Portinari tem tra\xE7os mais realistas e uma paleta terrosa, mas igualmente perturbadora \u{1F628}"],
    interacao: ["O que pode fazer uma pessoa gritar assim? Voc\xEA j\xE1 sentiu vontade de gritar?"],
    atividade: ["Desenhe um rosto com uma express\xE3o muito forte (grito, risada, choro) usando apenas duas cores contrastantes \u{1F3AD}"],
    final: ["A arte pode dar forma aos sentimentos que n\xE3o conseguimos explicar com palavras \u{1F5E3}\uFE0F"],
    emocao: "desespero",
    nivel: "leve"
  },
  candido_portinari_mestico: {
    tema: "obras_arte_brasileira",
    subtema: "candido_portinari",
    palavras_chave: ["mesti\xE7o", "portinari mesti\xE7o", "quadro mesti\xE7o"],
    inicio: ["Um homem de olhar s\xE9rio e pele morena, com um chap\xE9u e um cigarro de palha \u2013 assim Portinari pintou o mesti\xE7o brasileiro \u{1F452}"],
    explicacao_curta: ["O artista pintou um homem brasileiro com express\xE3o s\xE9ria e forte. A obra mostra a mistura de povos e culturas do Brasil."],
    explicacao_aprofundada: ["Com marrom, azul e bege, a obra valoriza a figura do caboclo, fruto da miscigena\xE7\xE3o, com dignidade e humanidade, fugindo dos estere\xF3tipos."],
    curiosidade: ["Portinari pintou v\xE1rios retratos de 'mesti\xE7os' ao longo de sua carreira, sempre destacando a beleza da diversidade brasileira \u{1F308}"],
    interacao: ["O que significa 'mesti\xE7o' para voc\xEA? Por que o Brasil \xE9 um pa\xEDs t\xE3o misturado?"],
    atividade: ["Desenhe um retrato de algu\xE9m (real ou imagin\xE1rio) que represente a mistura de dois ou mais povos que voc\xEA admira \u{1F465}"],
    final: ["A mistura de ra\xE7as e culturas \xE9 uma das maiores riquezas do Brasil \u{1F48E}"],
    emocao: "orgulho",
    nivel: "leve"
  },
  anita_malfatti_a_estudante: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["a estudante", "anita malfatti estudante", "quadro a estudante"],
    inicio: ["Uma jovem estudante com rosto colorido e formas quebradas \u2013 Anita desafiou o jeito tradicional de pintar \u{1F4DA}\u{1F7E3}"],
    explicacao_curta: ["A artista pintou uma jovem estudando com cores diferentes e tra\xE7os modernos. Na \xE9poca, muita gente achou estranho, mas hoje a obra \xE9 muito famosa."],
    explicacao_aprofundada: ["Com azul, verde e rosa, Anita usa pinceladas expressionistas para mostrar n\xE3o apenas a apar\xEAncia da mo\xE7a, mas seu estado de esp\xEDrito e a luz ambiente."],
    curiosidade: ["Esse quadro foi um dos mais criticados na famosa exposi\xE7\xE3o de 1917, que recebeu um artigo feroz de Monteiro Lobato chamado 'Paranoia ou Mistifica\xE7\xE3o?' \u{1F62C}"],
    interacao: ["Se voc\xEA fosse pintar algu\xE9m estudando, usaria cores reais ou inventaria novas?"],
    atividade: ["Desenhe uma pessoa estudando, mas pinte o rosto e os livros com cores que voc\xEA sente (por exemplo, azul para calma, vermelho para energy) \u{1F499}\u2764\uFE0F"],
    // wait, the user had "energia" in Portuguese
    final: ["A arte moderna nos ensina a olhar para o comum com novos olhos \u{1F453}"],
    emocao: "rebeldia",
    nivel: "leve"
  },
  anita_malfatti_o_homem_amarelo: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["o homem amarelo", "anita malfatti homem amarelo"],
    inicio: ["Um homem completamente amarelo, com olhos verdes e m\xE3o azul \u2013 Anita pintou as emo\xE7\xF5es em vez da realidade \u{1F7E1}\u{1F49A}"],
    explicacao_curta: ["O homem foi pintado com cores fortes e diferentes da realidade. Anita queria mostrar sentimentos e emo\xE7\xF5es atrav\xE9s da arte."],
    explicacao_aprofundada: ["Com amarelo, verde e laranja, a artista distorce o corpo e a cor para expressar ang\xFAstia, solid\xE3o ou talvez uma doen\xE7a \u2013 convidando o observador a sentir."],
    curiosidade: ["Anita sofria de uma atrofia no bra\xE7o direito, o que a tornava mais sens\xEDvel \xE0s imperfei\xE7\xF5es e dores do corpo, refletidas em suas figuras distorcidas \u{1F9BE}"],
    interacao: ["Que cor voc\xEA usaria para representar a alegria? E a tristeza?"],
    atividade: ["Desenhe um retrato de uma pessoa usando apenas uma cor principal para cada sentimento (ex: vermelho para raiva, azul para calma) \u{1F3A8}"],
    final: ["As cores podem falar mais do que as formas quando mostramos o que sentimos \u{1F308}"],
    emocao: "introspec\xE7\xE3o",
    nivel: "leve"
  },
  anita_malfatti_a_boba: {
    tema: "obras_arte_brasileira",
    subtema: "anita_malfatti",
    palavras_chave: ["a boba", "anita malfatti boba"],
    inicio: ["Uma figura de olhar vago e boca torta \u2013 \xE9 'A Boba', de Anita Malfatti, que brinca com a express\xE3o humana \u{1F61C}"],
    explicacao_curta: ["Essa personagem tem uma express\xE3o curiosa e divertida. A pintura usa formas exageradas para chamar aten\xE7\xE3o para as emo\xE7\xF5es."],
    explicacao_aprofundada: ["Com azul, rosa e verde, Anita cria uma figura quase caricata, com bra\xE7os desproporcionais e rosto assim\xE9trico, sugerindo ingenuidade ou loucura de forma provocadora."],
    curiosidade: ["O t\xEDtulo 'A Boba' pode ser ir\xF4nico: a personagem parece mais consciente de sua estranheza do que os cr\xEDticos que a chamaram de 'boba' na \xE9poca \u{1F60F}"],
    interacao: ["O que \xE9 ser 'bobo' para voc\xEA? Existe um jeito certo de ser?"],
    atividade: ["Desenhe um personagem com uma express\xE3o exagerada (muito feliz, muito triste, muito espantado) e d\xEA a ele um nome engra\xE7ado \u{1F602}"],
    final: ["A arte pode abra\xE7ar o que \xE9 diferente e mostrar que a normalidade \xE9 uma inven\xE7\xE3o \u{1F300}"],
    emocao: "humor",
    nivel: "leve"
  },
  di_cavalcanti_baile_popular: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["baile popular", "di cavalcanti baile"],
    inicio: ["Pessoas dan\xE7ando coladinho, m\xFAsicos tocando \u2013 \xE9 um baile popular cheio de alegria e movimento \u{1F483}\u{1F3BA}"],
    explicacao_curta: ["A obra mostra pessoas dan\xE7ando e se divertindo. O artista gostava de retratar festas e m\xFAsicas populares brasileiras."],
    explicacao_aprofundada: ["Com vermelho, amarelo e marrom, Di Cavalcanti captura a energia do samba e dos clubes suburbanos, valorizando a cultura popular como tema nobre da arte."],
    curiosidade: ["Di Cavalcanti foi um dos organizadores da Semana de Arte Moderna de 1922 e sempre defendeu uma arte que celebrasse o povo brasileiro \u{1F389}"],
    interacao: ["Qual m\xFAsica ou dan\xE7a faz voc\xEA querer dan\xE7ar imediatamente?"],
    atividade: ["Desenhe uma cena de dan\xE7a com pelo menos tr\xEAs pessoas, mostrando o movimento atrav\xE9s de linhas onduladas ao redor dos bra\xE7os e pernas \u{1F4AB}"],
    final: ["A arte pode eternizar a alegria de uma noite de dan\xE7a e amizade \u{1F319}"],
    emocao: "festa",
    nivel: "leve"
  },
  di_cavalcanti_pierrete: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["pierrete", "di cavalcanti pierrete"],
    inicio: ["Uma pierr\xF4 tristonha, com gola branca e olhar perdido \u2013 Di Cavalcanti reinventou a personagem da commedia dell'arte \u{1F3AD}"],
    explicacao_curta: ["Essa personagem parece sonhadora e misteriosa. O artista usou cores suaves para criar um clima delicado."],
    explicacao_aprofundada: ["Com rosa, azul e cinza, ele transforma a tradicional Pierrette em uma figura melanc\xF3lica e moderna, usando linhas suaves e composi\xE7\xE3o simplificada."],
    curiosidade: ["A obra foi pintada em 1922, mesmo ano da Semana de Arte Moderna, mostrando a dualidade de Di: moderno mas ainda ligado a temas europeus \u{1F3A8}"],
    interacao: ["Voc\xEA j\xE1 assistiu a um teatro de fantoches ou a uma pe\xE7a com palha\xE7os? Qual personagem voc\xEA gosta mais?"],
    atividade: ["Desenhe um palha\xE7o ou palha\xE7a triste, usando cores suaves (azul claro, lil\xE1s, cinza) para mostrar a emo\xE7\xE3o \u{1F921}\u{1F4A7}"],
    final: ["A arte pode mostrar o lado delicado e triste dos palha\xE7os, que nem sempre est\xE3o felizes \u{1F3AA}"],
    emocao: "melancolia",
    nivel: "leve"
  },
  di_cavalcanti_cinco_mocas_de_guaratingueta: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["cinco mo\xE7as de guaratinguet\xE1", "di cavalcanti mo\xE7as"],
    inicio: ["Cinco jovens sentadas na grama, conversando tranquilamente \u2013 uma cena simples do interior paulista \u{1F343}\u{1F452}"],
    explicacao_curta: ["As cinco mulheres aparecem juntas em uma cena tranquila. A pintura mostra a beleza das pessoas simples do Brasil."],
    explicacao_aprofundada: ["Com marrom, verde e bege, Di Cavalcanti utiliza uma paleta terrosa e formas arredondadas para retratar a intimidade e a dignidade das mo\xE7as do Vale do Para\xEDba."],
    curiosidade: ["Guaratinguet\xE1 \xE9 a cidade natal de Di Cavalcanti; ele sempre voltava a ela em suas mem\xF3rias e pinturas \u{1F3E1}"],
    interacao: ["Voc\xEA tem um grupo de amigos com quem gosta de sentar e conversar? O que voc\xEAs conversam?"],
    atividade: ["Desenhe um grupo de tr\xEAs amigos sentados em um banco de pra\xE7a ou na grama, cada um com uma express\xE3o diferente de conversa \u{1F60A}\u{1F610}\u{1F601}"],
    final: ["As cenas simples do cotidiano tamb\xE9m merecem virar arte \u{1F5BC}\uFE0F"],
    emocao: "calma",
    nivel: "leve"
  },
  di_cavalcanti_samba: {
    tema: "obras_arte_brasileira",
    subtema: "di_cavalcanti",
    palavras_chave: ["samba", "di cavalcanti samba"],
    inicio: ["Pernas que dan\xE7am, bra\xE7os que gingam, cores que explodem \u2013 \xE9 o samba pintado por Di Cavalcanti \u{1F525}\u{1F3B6}"],
    explicacao_curta: ["Aqui vemos m\xFAsica, dan\xE7a e alegria! O artista quis mostrar a energia do samba e da cultura brasileira."],
    explicacao_aprofundada: ["Com vermelho, laranja e amarelo, Di cria uma composi\xE7\xE3o vibrante e abstrata, onde os corpos se fundem ao ritmo, celebrando a identidade nacional."],
    curiosidade: ["Di Cavalcanti era um grande apreciador de samba e amigo de compositores como Pixinguinha e Donga \u{1F3B5}"],
    interacao: ["O que o samba representa para o Brasil? Que outras dan\xE7as brasileiras voc\xEA conhece?"],
    atividade: ["Desenhe um casal dan\xE7ando samba, com os bra\xE7os e pernas em posi\xE7\xF5es exageradas e ondas coloridas saindo dos p\xE9s \u{1F30A}\u{1F483}"],
    final: ["O samba \xE9 a alma do Brasil, e a arte pode fazer essa alma dan\xE7ar para sempre \u{1F483}\u{1F57A}"],
    emocao: "euforia",
    nivel: "leve"
  },
  vicente_do_rego_monteiro_o_artesao: {
    tema: "obras_arte_brasileira",
    subtema: "vicente_do_rego_monteiro",
    palavras_chave: ["o artes\xE3o", "vicente do rego monteiro", "artes\xE3o quadro"],
    inicio: ["Um homem curvado sobre sua obra, com ferramentas nas m\xE3os \u2013 Vicente pintou o artes\xE3o com formas simples e geom\xE9tricas \u{1F528}"],
    explicacao_curta: ["A obra mostra um trabalhador fazendo seu of\xEDcio. O artista valorizava o trabalho manual e a cultura brasileira."],
    explicacao_aprofundada: ["Com marrom, cinza e verde, ele simplifica a figura quase como um \xEDcone, destacando a concentra\xE7\xE3o e a nobreza do artesanato."],
    curiosidade: ["Vicente foi um dos pioneiros da arte moderna brasileira e tamb\xE9m poeta; ele participou da Semana de 22 \u{1F4DC}"],
    interacao: ["Voc\xEA j\xE1 fez algo com as m\xE3os, como um boneco de argila ou um desenho? Como se sentiu?"],
    atividade: ["Desenhe um artes\xE3o ou artes\xE3 trabalhando em uma pe\xE7a (cer\xE2mica, escultura, bordado) usando formas geom\xE9tricas para simplificar o corpo \u2B1B\u{1F53A}"],
    final: ["Todo trabalho feito com as m\xE3os merece ser celebrado como arte \u{1F450}"],
    emocao: "admira\xE7\xE3o",
    nivel: "leve"
  },
  john_graz_paisagem_da_espanha: {
    tema: "obras_arte_brasileira",
    subtema: "john_graz",
    palavras_chave: ["paisagem da espanha", "john graz", "paisagem espanha"],
    inicio: ["Colinas suaves, casinhas brancas e um c\xE9u calmo \u2013 a Espanha vista por John Graz com olhar geom\xE9trico \u{1F1EA}\u{1F1F8}\u{1F3DE}\uFE0F"],
    explicacao_curta: ["Essa pintura mostra uma paisagem tranquila da Espanha com formas modernas e organizadas. Parece quase um desenho geom\xE9trico."],
    explicacao_aprofundada: ["Com azul, verde e bege, Graz aplica uma est\xE9tica cubista e decorativa, fragmentando a paisagem em planos coloridos e linhas retas."],
    curiosidade: ["John Graz era su\xED\xE7o, mas viveu grande parte da vida no Brasil, onde ajudou a difundir o modernismo e o design de interiores \u{1F6CB}\uFE0F"],
    interacao: ["Se voc\xEA fosse pintar uma paisagem de um lugar que visitou, como organizaria as cores?"],
    atividade: ["Desenhe uma paisagem (montanha, praia, campo) usando apenas formas geom\xE9tricas: tri\xE2ngulos, quadrados e ret\xE2ngulos \u{1F7E0}\u{1F7E9}\u{1F7E6}"],
    final: ["A arte moderna transforma a natureza em um quebra-cabe\xE7a colorido \u{1F9E9}"],
    emocao: "harmonia",
    nivel: "leve"
  },
  pedro_americo_independencia_ou_morte: {
    tema: "obras_arte_brasileira",
    subtema: "pedro_americo",
    palavras_chave: ["independ\xEAncia ou morte", "pedro americo", "quadro independ\xEAncia"],
    inicio: ["Dom Pedro I sobre um cavalo, erguendo a espada \u2013 o grito da Independ\xEAncia em uma tela gigante \u{1F1E7}\u{1F1F7}\u2694\uFE0F"],
    explicacao_curta: ["Essa pintura mostra o momento em que Dom Pedro I declarou a independ\xEAncia do Brasil. \xC9 uma cena cheia de movimento e import\xE2ncia hist\xF3rica."],
    explicacao_aprofundada: ["Com verde, marrom e azul, Pedro Am\xE9rico criou uma composi\xE7\xE3o teatral e grandiosa, idealizando o evento \xE0s margens do rio Ipiranga em 1822."],
    curiosidade: ["Na verdade, Dom Pedro declarou a independ\xEAncia em viagem, e a cena n\xE3o foi t\xE3o heroica quanto o quadro mostra \u2013 a arte 'aumentou' a hist\xF3ria \u{1F3AD}"],
    interacao: ["Se voc\xEA pudesse pintar um momento importante da sua vida, qual seria?"],
    atividade: ["Desenhe uma cena hist\xF3rica imagin\xE1ria (voc\xEA como her\xF3i) com muitos personagens, cavalos ou batalhas \u2013 use bastante movimento \u{1F40E}"],
    final: ["A arte pode transformar um momento simples em uma lenda eterna \u{1F4DC}"],
    emocao: "nobreza",
    nivel: "leve"
  },
  victor_meirelles_a_primeira_missa_no_brasil: {
    tema: "obras_arte_brasileira",
    subtema: "victor_meirelles",
    palavras_chave: ["primeira missa no brasil", "victor meirelles", "missa brasil"],
    inicio: ["\xCDndios admirados, portugueses ajoelhados \u2013 a primeira missa no Brasil, um encontro de dois mundos \u26EA\u{1F334}"],
    explicacao_curta: ["A pintura mostra a primeira missa realizada no Brasil, com portugueses e ind\xEDgenas juntos. Ela representa um momento importante da hist\xF3ria."],
    explicacao_aprofundada: ["Com verde, azul and marrom, Victor Meirelles criou uma cena quase documental, idealizada e grandiosa, que por muito tempo foi a imagem oficial do descobrimento."],
    curiosidade: ["O quadro foi pintado no Rio de Janeiro mas encomendado pela Academia de Belas Artes de Paris; levou anos para ficar pronto \u{1F58C}\uFE0F"],
    interacao: ["Como voc\xEA imagina que os ind\xEDgenas se sentiram ao ver os portugueses pela primeira vez?"],
    atividade: ["Desenhe um encontro entre duas pessoas de culturas diferentes, trocando presentes ou sorrisos \u2013 sem viol\xEAncia \u{1F91D}"],
    final: ["A hist\xF3ria oficial nem sempre conta todos os lados; a arte pode nos fazer perguntar 'o que mais aconteceu?' \u{1F914}"],
    emocao: "contempla\xE7\xE3o",
    nivel: "leve"
  },
  almeida_junior_caipira_picando_fumo: {
    tema: "obras_arte_brasileira",
    subtema: "almeida_junior",
    palavras_chave: ["caipira picando fumo", "almeida junior", "picando fumo"],
    inicio: ["Um homem do campo, com chap\xE9u de palha e fac\xE3o, prepara o fumo \u2013 Almeida J\xFAnior pintou a vida simples com realismo \u{1F33E}"],
    explicacao_curta: ["Aqui vemos um homem simples do campo preparando fumo. O artista gostava de mostrar cenas do cotidiano brasileiro."],
    explicacao_aprofundada: ["Com marrom, bege e verde, o artista valoriza a rusticidade e a dignidade do caipira, com detalhes realistas e uma ilumina\xE7\xE3o que destaca o trabalho manual."],
    curiosidade: ["Almeida J\xFAnior foi assassinado pelo pr\xF3prio cunhado em 1899, em um crime passional, interrompendo sua carreira brilhante \u{1F52A}"],
    interacao: ["Voc\xEA conhece algu\xE9m que trabalha no campo? Que ferramentas essa pessoa usa?"],
    atividade: ["Desenhe uma pessoa do campo realizando uma atividade (plantar, colher, cuidar de animais) com roupas e objetos t\xEDpicos \u{1F452}"],
    final: ["O homem do campo tem uma sabedoria e uma for\xE7a que a arte ajuda a eternizar \u{1F33B}"],
    emocao: "simplicidade",
    nivel: "leve"
  },
  // --- RITMOS MUSICAIS ---
  samba: {
    tema: "ritmos_musicais",
    subtema: "samba",
    palavras_chave: ["samba", "ritmo de samba", "musica de samba", "genero samba"],
    inicio: ["O samba \xE9 um dos ritmos mais famosos do Brasil \u{1F941}"],
    explicacao_curta: ["O samba possui ritmo alegre e cheio de energia."],
    explicacao_aprofundada: ["Ele est\xE1 presente em festas, rodas de m\xFAsica e no carnaval brasileiro."],
    curiosidade: ["O samba nasceu da mistura de influ\xEAncias africanas e brasileiras \u2728"],
    interacao: ["Voc\xEA consegue acompanhar um ritmo batendo palmas?"],
    atividade: ["Crie um ritmo usando mesa, palmas e p\xE9s \u{1F941}"],
    final: ["O samba espalha alegria e movimento \u{1F308}"],
    emocao: "animacao",
    nivel: "leve"
  },
  forro: {
    tema: "ritmos_musicais",
    subtema: "forro",
    palavras_chave: ["forro", "ritmo forro", "musica nordestina forro", "forro musica"],
    inicio: ["O forr\xF3 traz sons animados do Nordeste brasileiro \u{1F335}"],
    explicacao_curta: ["O forr\xF3 \xE9 dan\xE7ado em pares e possui muito ritmo."],
    explicacao_aprofundada: ["A sanfona, a zabumba e o tri\xE2ngulo s\xE3o instrumentos importantes no forr\xF3."],
    curiosidade: ["As festas juninas costumam ter muito forr\xF3 \u{1F389}"],
    interacao: ["Voc\xEA gostaria de aprender passos de forr\xF3?"],
    atividade: ["Desenhe instrumentos usados no forr\xF3 \u{1F3A8}"],
    final: ["O forr\xF3 mistura m\xFAsica, dan\xE7a e tradi\xE7\xE3o \u{1F31F}"],
    emocao: "alegria",
    nivel: "leve"
  },
  frevo: {
    tema: "ritmos_musicais",
    subtema: "frevo",
    palavras_chave: ["frevo", "ritmo frevo", "musica frevo pernambuco"],
    inicio: ["O frevo \xE9 r\xE1pido e cheio de energia \u{1F3BA}"],
    explicacao_curta: ["Ele mistura m\xFAsica animada e dan\xE7a com muitos movimentos."],
    explicacao_aprofundada: ["O frevo \xE9 muito conhecido no carnaval de Pernambuco."],
    curiosidade: ["As sombrinhas coloridas fazem parte do frevo \u{1F308}"],
    interacao: ["Voc\xEA conseguiria dan\xE7ar bem r\xE1pido acompanhando uma m\xFAsica?"],
    atividade: ["Crie uma mini sombrinha colorida \u2702\uFE0F"],
    final: ["O frevo transforma m\xFAsica em explos\xE3o de alegria \u2728"],
    emocao: "energia",
    nivel: "leve"
  },
  maracatu: {
    tema: "ritmos_musicais",
    subtema: "maracatu",
    palavras_chave: ["maracatu", "ritmo maracatu", "musica afro brasileira maracatu"],
    inicio: ["O maracatu possui tambores fortes e marcantes \u{1F941}"],
    explicacao_curta: ["Esse ritmo faz parte da cultura afro-brasileira."],
    explicacao_aprofundada: ["O maracatu mistura m\xFAsica, dan\xE7a e cortejos tradicionais."],
    curiosidade: ["Os tambores criam batidas poderosas e vibrantes \u{1F525}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas com batidas fortes?"],
    atividade: ["Crie ritmos usando objetos recicl\xE1veis \u267B\uFE0F"],
    final: ["O maracatu carrega tradi\xE7\xE3o e ritmo \u{1F30D}"],
    emocao: "forca",
    nivel: "leve"
  },
  axe: {
    tema: "ritmos_musicais",
    subtema: "axe",
    palavras_chave: ["axe", "ritmo axe", "musica baiana axe"],
    inicio: ["O ax\xE9 \xE9 cheio de dan\xE7a e anima\xE7\xE3o \u{1F31E}"],
    explicacao_curta: ["Esse ritmo nasceu na Bahia e mistura v\xE1rios estilos."],
    explicacao_aprofundada: ["O ax\xE9 costuma aparecer em festas, carnavais e apresenta\xE7\xF5es cheias de movimento."],
    curiosidade: ["Muitos trios el\xE9tricos tocam m\xFAsicas de ax\xE9 \u{1F3B6}"],
    interacao: ["Qual m\xFAsica deixa voc\xEA com vontade de dan\xE7ar?"],
    atividade: ["Crie passos animados acompanhando uma m\xFAsica \u{1F3B5}"],
    final: ["O ax\xE9 espalha ritmo e alegria \u{1F308}"],
    emocao: "animacao",
    nivel: "leve"
  },
  funk: {
    tema: "ritmos_musicais",
    subtema: "funk",
    palavras_chave: ["funk", "ritmo funk", "musica funk brasileira"],
    inicio: ["O funk possui batidas fortes e marcantes \u{1F50A}"],
    explicacao_curta: ["\xC9 um ritmo brasileiro muito popular."],
    explicacao_aprofundada: ["O funk mistura m\xFAsica, dan\xE7a e criatividade das comunidades urbanas."],
    curiosidade: ["Cada regi\xE3o pode criar estilos diferentes de funk \u{1F3A7}"],
    interacao: ["Voc\xEA conseguiria inventar um passo diferente?"],
    atividade: ["Monte uma sequ\xEAncia de movimentos r\xE1pidos \u{1F3B5}"],
    final: ["A m\xFAsica pode transformar movimento em express\xE3o \u2728"],
    emocao: "energia",
    nivel: "leve"
  },
  bossa_nova: {
    tema: "ritmos_musicais",
    subtema: "bossa_nova",
    palavras_chave: ["bossa nova", "musica bossa nova", "ritmo suave brasileiro"],
    inicio: ["A bossa nova possui sons suaves e tranquilos \u{1F319}"],
    explicacao_curta: ["Ela mistura samba com influ\xEAncias do jazz."],
    explicacao_aprofundada: ["As m\xFAsicas costumam ter voz calma, viol\xE3o suave e melodias delicadas."],
    curiosidade: ["A bossa nova ficou famosa em v\xE1rios pa\xEDses \u{1F30D}"],
    interacao: ["Voc\xEA prefere m\xFAsicas agitadas ou tranquilas?"],
    atividade: ["Desenhe uma paisagem ouvindo m\xFAsica calma \u{1F3A8}"],
    final: ["A bossa nova parece m\xFAsica flutuando no ar \u2728"],
    emocao: "calma",
    nivel: "leve"
  },
  rock: {
    tema: "ritmos_musicais",
    subtema: "rock",
    palavras_chave: ["rock", "musica rock", "ritmo rock"],
    inicio: ["O rock possui guitarras e muita energia \u{1F3B8}"],
    explicacao_curta: ["Ele pode ser r\xE1pido, forte ou at\xE9 mais calmo."],
    explicacao_aprofundada: ["O rock usa instrumentos como guitarra, bateria e baixo para criar ritmos marcantes."],
    curiosidade: ["Existem muitos tipos diferentes de rock \u{1F918}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas agitadas?"],
    atividade: ["Desenhe uma banda tocando no palco \u{1F3A4}"],
    final: ["O rock mistura ritmo, atitude e criatividade \u{1F31F}"],
    emocao: "energia",
    nivel: "leve"
  },
  rap: {
    tema: "ritmos_musicais",
    subtema: "rap",
    palavras_chave: ["rap", "musica rap", "ritmo rap"],
    inicio: ["O rap usa palavras com ritmo e express\xE3o \u{1F3A4}"],
    explicacao_curta: ["As letras s\xE3o faladas acompanhando a batida da m\xFAsica."],
    explicacao_aprofundada: ["O rap \xE9 usado para contar hist\xF3rias, opini\xF5es e sentimentos."],
    curiosidade: ["As rimas s\xE3o muito importantes no rap \u2728"],
    interacao: ["Voc\xEA consegue criar uma frase rimando?"],
    atividade: ["Invente pequenas rimas divertidas \u{1F3B5}"],
    final: ["As palavras tamb\xE9m podem dan\xE7ar no ritmo \u{1F308}"],
    emocao: "expressao",
    nivel: "leve"
  },
  k_pop: {
    tema: "ritmos_musicais",
    subtema: "k_pop",
    palavras_chave: ["k pop", "musica kpop", "pop coreano"],
    inicio: ["O K-pop mistura m\xFAsica, dan\xE7a e apresenta\xE7\xF5es modernas \u2728"],
    explicacao_curta: ["Esse estilo nasceu na Coreia do Sul."],
    explicacao_aprofundada: ["Os grupos usam coreografias sincronizadas, roupas criativas e m\xFAsicas animadas."],
    curiosidade: ["As apresenta\xE7\xF5es de K-pop possuem muitos efeitos visuais \u{1F308}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas com dan\xE7a coreografada?"],
    atividade: ["Crie uma sequ\xEAncia simples de passos \u{1F3B5}"],
    final: ["M\xFAsica e dan\xE7a podem criar grandes espet\xE1culos \u{1F31F}"],
    emocao: "animacao",
    nivel: "leve"
  },
  sertanejo: {
    tema: "ritmos_musicais",
    subtema: "sertanejo",
    palavras_chave: ["sertanejo", "musica sertaneja", "ritmo sertanejo"],
    inicio: ["O sertanejo fala sobre sentimentos e vida no campo \u{1F33E}"],
    explicacao_curta: ["\xC9 um ritmo muito popular no Brasil."],
    explicacao_aprofundada: ["As m\xFAsicas sertanejas costumam usar viol\xE3o e contar hist\xF3rias do cotidiano."],
    curiosidade: ["Muitas duplas sertanejas cantam juntas \u{1F3B5}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas mais calmas ou agitadas?"],
    atividade: ["Desenhe uma paisagem do campo \u{1F3A8}"],
    final: ["A m\xFAsica pode contar hist\xF3rias da vida \u{1F33B}"],
    emocao: "tranquilidade",
    nivel: "leve"
  },
  pagode: {
    tema: "ritmos_musicais",
    subtema: "pagode",
    palavras_chave: ["pagode", "musica pagode", "tipo de samba pagode"],
    inicio: ["O pagode mistura ritmo leve e alegria \u{1FA98}"],
    explicacao_curta: ["Ele \xE9 um estilo musical ligado ao samba."],
    explicacao_aprofundada: ["O pagode costuma aparecer em rodas de m\xFAsica e encontros animados."],
    curiosidade: ["Instrumentos como tant\xE3 e cavaquinho aparecem no pagode \u{1F3B6}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas para cantar com amigos?"],
    atividade: ["Crie um ritmo usando palmas e objetos da casa \u{1F44F}"],
    final: ["O pagode espalha ritmo e amizade \u{1F308}"],
    emocao: "alegria",
    nivel: "leve"
  },
  reggae: {
    tema: "ritmos_musicais",
    subtema: "reggae",
    palavras_chave: ["reggae", "musica reggae", "ritmo reggae"],
    inicio: ["O reggae possui ritmo tranquilo e relaxante \u{1F334}"],
    explicacao_curta: ["Esse estilo musical fala muito sobre paz e uni\xE3o."],
    explicacao_aprofundada: ["As batidas do reggae costumam ser suaves e marcadas."],
    curiosidade: ["O reggae ficou famoso em v\xE1rios pa\xEDses \u{1F30D}"],
    interacao: ["Que m\xFAsica faz voc\xEA relaxar?"],
    atividade: ["Pinte usando cores suaves enquanto escuta m\xFAsica \u{1F3A8}"],
    final: ["A m\xFAsica tamb\xE9m pode transmitir calma \u2728"],
    emocao: "calma",
    nivel: "leve"
  },
  pop: {
    tema: "ritmos_musicais",
    subtema: "pop",
    palavras_chave: ["pop", "musica pop", "ritmo pop"],
    inicio: ["O pop mistura ritmos modernos e animados \u{1F31F}"],
    explicacao_curta: ["\xC9 um estilo musical popular em muitos lugares do mundo."],
    explicacao_aprofundada: ["A m\xFAsica pop mistura dan\xE7a, melodias marcantes e diferentes estilos musicais."],
    curiosidade: ["Muitas m\xFAsicas pop possuem refr\xF5es f\xE1ceis de cantar \u{1F3A4}"],
    interacao: ["Qual m\xFAsica faz voc\xEA querer cantar junto?"],
    atividade: ["Crie a capa imagin\xE1ria de um \xE1lbum pop \u{1F3A8}"],
    final: ["A m\xFAsica pop espalha ritmo e divers\xE3o \u{1F308}"],
    emocao: "animacao",
    nivel: "leve"
  },
  jazz: {
    tema: "ritmos_musicais",
    subtema: "jazz",
    palavras_chave: ["jazz", "musica jazz", "ritmo jazz"],
    inicio: ["O jazz mistura ritmo, improviso e criatividade \u{1F3B7}"],
    explicacao_curta: ["Os m\xFAsicos podem criar sons diferentes durante a apresenta\xE7\xE3o."],
    explicacao_aprofundada: ["O jazz usa instrumentos como saxofone, piano e trompete."],
    curiosidade: ["No jazz, cada m\xFAsico pode tocar de um jeito \xFAnico \u2728"],
    interacao: ["Voc\xEA gostaria de inventar uma melodia?"],
    atividade: ["Desenhe instrumentos de uma banda de jazz \u{1F3BA}"],
    final: ["O jazz transforma improviso em m\xFAsica \u{1F319}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  blues: {
    tema: "ritmos_musicais",
    subtema: "blues",
    palavras_chave: ["blues", "musica blues", "ritmo blues"],
    inicio: ["O blues possui melodias marcantes e emocionantes \u{1F3B8}"],
    explicacao_curta: ["Esse ritmo expressa sentimentos atrav\xE9s da m\xFAsica."],
    explicacao_aprofundada: ["O blues influenciou muitos outros estilos musicais."],
    curiosidade: ["A guitarra \xE9 muito usada no blues \u{1F3B6}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas mais suaves?"],
    atividade: ["Desenhe linhas e cores inspiradas em emo\xE7\xF5es \u{1F3A8}"],
    final: ["A m\xFAsica pode mostrar sentimentos profundos \u{1F30C}"],
    emocao: "emocao",
    nivel: "leve"
  },
  hip_hop: {
    tema: "ritmos_musicais",
    subtema: "hip_hop",
    palavras_chave: ["hip hop", "musica hip hop", "ritmo hip hop"],
    inicio: ["O hip hop mistura m\xFAsica, dan\xE7a e express\xE3o urbana \u{1F3A7}"],
    explicacao_curta: ["Esse movimento cultural usa ritmo, rimas e dan\xE7a."],
    explicacao_aprofundada: ["O hip hop re\xFAne rap, breakdance, grafite e criatividade."],
    curiosidade: ["O grafite tamb\xE9m faz parte da cultura hip hop \u{1F3A8}"],
    interacao: ["Voc\xEA gostaria de criar passos de dan\xE7a?"],
    atividade: ["Monte um desenho inspirado em arte urbana \u270F\uFE0F"],
    final: ["O hip hop transforma criatividade em movimento \u{1F31F}"],
    emocao: "energia",
    nivel: "leve"
  },
  classica: {
    tema: "ritmos_musicais",
    subtema: "classica",
    palavras_chave: ["musica classica", "ritmo classico", "genero classico"],
    inicio: ["A m\xFAsica cl\xE1ssica mistura instrumentos e emo\xE7\xF5es \u{1F3BB}"],
    explicacao_curta: ["Ela pode ser suave, intensa ou grandiosa."],
    explicacao_aprofundada: ["Orquestras usam instrumentos como violino, piano, flauta e violoncelo."],
    curiosidade: ["Uma orquestra pode reunir muitos m\xFAsicos ao mesmo tempo \u{1F3BC}"],
    interacao: ["Qual instrumento voc\xEA gostaria de aprender?"],
    atividade: ["Desenhe uma grande orquestra \u{1F3A8}"],
    final: ["A m\xFAsica cl\xE1ssica transforma sons em emo\xE7\xE3o \u2728"],
    emocao: "calma",
    nivel: "leve"
  },
  eletronica: {
    tema: "ritmos_musicais",
    subtema: "eletronica",
    palavras_chave: ["musica eletronica", "ritmo eletronico", "dj musica"],
    inicio: ["A m\xFAsica eletr\xF4nica usa tecnologia para criar sons \u{1F50A}"],
    explicacao_curta: ["Ela mistura batidas digitais e efeitos sonoros."],
    explicacao_aprofundada: ["DJs e produtores criam m\xFAsicas usando computadores e equipamentos especiais."],
    curiosidade: ["Algumas m\xFAsicas eletr\xF4nicas possuem sons futuristas \u{1F680}"],
    interacao: ["Voc\xEA gosta de m\xFAsicas com batidas rapids?"],
    atividade: ["Crie padr\xF5es coloridos inspirados em sons eletr\xF4nicos \u{1F308}"],
    final: ["Tecnologia e m\xFAsica podem criar sons surpreendentes \u2728"],
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
      "A m\xFAsica transforma sons em emo\xE7\xF5es \u{1F3B5}",
      "Os sons podem contar hist\xF3rias sem usar palavras \u2728"
    ],
    explicacao_curta: [
      "A m\xFAsica \xE9 a arte de organizar sons, ritmos e melodias."
    ],
    explicacao_aprofundada: [
      "Ela pode transmitir alegria, calma, energia ou emo\xE7\xE3o atrav\xE9s de instrumentos, vozes e ritmos."
    ],
    curiosidade: [
      "A m\xFAsica existe em quase todas as culturas do mundo \u{1F30D}"
    ],
    interacao: [
      "Que m\xFAsica deixa voc\xEA feliz?",
      "Voc\xEA gosta mais de cantar ou ouvir m\xFAsica?"
    ],
    atividade: [
      "Crie sons usando palmas, mesa e objetos da casa \u{1F941}"
    ],
    final: [
      "A m\xFAsica faz o mundo parecer cheio de movimento \u{1F308}"
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
      "A m\xFAsica possui partes importantes que trabalham juntas \u{1F3B6}"
    ],
    explicacao_curta: [
      "Ritmo, melodia e harmonia ajudam a construir a m\xFAsica."
    ],
    explicacao_aprofundada: [
      "O ritmo marca o tempo, a melodia organiza os sons e a harmonia combina diferentes notas."
    ],
    curiosidade: [
      "At\xE9 os batimentos do cora\xE7\xE3o possuem ritmo \u{1F493}"
    ],
    interacao: [
      "Voc\xEA consegue bater palmas acompanhando uma m\xFAsica?"
    ],
    atividade: [
      "Crie uma sequ\xEAncia de sons r\xE1pidos e lentos \u{1F44F}"
    ],
    final: [
      "Cada elemento ajuda a m\xFAsica a ganhar vida \u2728"
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
      "Existem muitos estilos musicais diferentes \u{1F30E}"
    ],
    explicacao_curta: [
      "Cada tipo de m\xFAsica possui sons e ritmos especiais."
    ],
    explicacao_aprofundada: [
      "Algumas m\xFAsicas s\xE3o agitadas, outras tranquilas, e cada cultura possui seus pr\xF3prios estilos."
    ],
    curiosidade: [
      "Os ritmos podem mudar bastante de um pa\xEDs para outro \u{1F30D}"
    ],
    interacao: [
      "Qual estilo musical voc\xEA mais gosta?"
    ],
    atividade: [
      "Desenhe como seria sua m\xFAsica favorita \u{1F3A8}"
    ],
    final: [
      "A m\xFAsica pode ter muitos jeitos diferentes \u{1F308}"
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
      "Os instrumentos ajudam a criar sons incr\xEDveis \u{1F3BB}"
    ],
    explicacao_curta: [
      "Existem instrumentos de corda, sopro e percuss\xE3o."
    ],
    explicacao_aprofundada: [
      "Viol\xE3o, tambor, piano, flauta e muitos outros instrumentos possuem sons diferentes."
    ],
    curiosidade: [
      "Cada instrumento produz vibra\xE7\xF5es sonoras \xFAnicas \u2728"
    ],
    interacao: [
      "Que instrumento voc\xEA gostaria de tocar?"
    ],
    atividade: [
      "Crie um instrumento usando materiais recicl\xE1veis \u267B\uFE0F"
    ],
    final: [
      "Os instrumentos transformam movimento em som \u{1F3B5}"
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
      "Villa-Lobos foi um importante compositor brasileiro \u{1F1E7}\u{1F1F7}"
    ],
    explicacao_curta: [
      "Ele misturava m\xFAsica cl\xE1ssica com sons brasileiros."
    ],
    explicacao_aprofundada: [
      "Suas obras foram inspiradas na natureza, no folclore e nos ritmos do Brasil."
    ],
    curiosidade: [
      "Villa-Lobos gostava de explorar sons diferentes \u{1F33F}"
    ],
    interacao: [
      "Voc\xEA gostaria de criar m\xFAsicas inspiradas na natureza?"
    ],
    atividade: [
      "Imite sons da chuva, vento e p\xE1ssaros \u{1F3B6}"
    ],
    final: [
      "A m\xFAsica brasileira possui muitos sons inspiradores \u{1F30E}"
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
      "Chiquinha Gonzaga marcou a hist\xF3ria da m\xFAsica brasileira \u{1F3B9}"
    ],
    explicacao_curta: [
      "Ela foi compositora e ajudou a abrir caminhos para mulheres na m\xFAsica."
    ],
    explicacao_aprofundada: [
      "Suas m\xFAsicas animadas ficaram famosas em festas e apresenta\xE7\xF5es."
    ],
    curiosidade: [
      "Ela comp\xF4s marchinhas conhecidas at\xE9 hoje \u{1F389}"
    ],
    interacao: [
      "Voc\xEA gosta de m\xFAsicas alegres para dan\xE7ar?"
    ],
    atividade: [
      "Crie uma pequena melodia batendo palmas \u{1F44F}"
    ],
    final: [
      "A m\xFAsica pode inspirar mudan\xE7as importantes \u2728"
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
      "Cartola foi um dos grandes nomes do samba \u{1F3A9}"
    ],
    explicacao_curta: [
      "Ele criou m\xFAsicas importantes da cultura brasileira."
    ],
    explicacao_aprofundada: [
      "Suas can\xE7\xF5es misturavam poesia, emo\xE7\xE3o e ritmos do samba."
    ],
    curiosidade: [
      "Cartola ajudou a fortalecer o samba brasileiro \u{1F941}"
    ],
    interacao: [
      "Voc\xEA gosta de m\xFAsicas com letras po\xE9ticas?"
    ],
    atividade: [
      "Escreva palavras que combinam com alegria \u{1F3B5}"
    ],
    final: [
      "A m\xFAsica tamb\xE9m pode ser cheia de poesia \u{1F319}"
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
      "Beethoven criou m\xFAsicas famosas da m\xFAsica cl\xE1ssica \u{1F3BC}"
    ],
    explicacao_curta: [
      "Suas composi\xE7\xF5es possuem emo\xE7\xE3o e intensidade."
    ],
    explicacao_aprofundada: [
      "Ele escreveu obras para piano, orquestras e muitos instrumentos."
    ],
    curiosidade: [
      "Beethoven continuou compondo mesmo enfrentando dificuldades auditivas \u{1F3B9}"
    ],
    interacao: [
      "Voc\xEA gosta de m\xFAsicas suaves ou grandiosas?"
    ],
    atividade: [
      "Desenhe como voc\xEA imagina uma grande orquestra \u{1F3BB}"
    ],
    final: [
      "A m\xFAsica cl\xE1ssica atravessa gera\xE7\xF5es \u{1F31F}"
    ],
    emocao: "admiracao",
    nivel: "leve"
  },
  // --- IMAGINAÇÃO INFANTIL ---
  arte_engracada: {
    tema: "perguntas_infantis",
    subtema: "arte_engracada",
    palavras_chave: ["arte engra\xE7ada", "desenho engra\xE7ado", "arte maluca", "pintura engra\xE7ada", "desenho divertido", "arte estranha"],
    inicio: ["A arte tamb\xE9m pode fazer a gente rir \u{1F604}"],
    explicacao_curta: ["Alguns artistas criam personagens com olhos gigantes, pernas compridas ou cores malucas \u{1F3A8}"],
    explicacao_aprofundada: ["Existem pinturas cheias de formas engra\xE7adas e situa\xE7\xF5es imagin\xE1rias \u2728", "A criatividade n\xE3o precisa seguir regras o tempo todo \u{1F308}"],
    curiosidade: ["Muitos desenhos animados usam exageros para ficar engra\xE7ados \u{1F3AD}"],
    interacao: ["Como seria seu personagem mais engra\xE7ado?"],
    atividade: ["Desenhe um animal usando cores que normalmente ele n\xE3o teria \u{1F438}\u{1F308}"],
    final: ["A arte pode ser divertida e cheia de imagina\xE7\xE3o \u2728"],
    emocao: "diversao",
    nivel: "leve"
  },
  coisa_assustadora: {
    tema: "perguntas_infantis",
    subtema: "coisa_assustadora",
    palavras_chave: ["coisa assustadora", "desenho assustador", "arte de medo", "personagem assustador", "monstro desenho", "coisa creepy"],
    inicio: ["Algumas hist\xF3rias usam mist\xE9rio para criar emo\xE7\xE3o \u{1F319}"],
    explicacao_curta: ["Monstros imagin\xE1rios aparecem muito em desenhos e filmes \u{1F3AD}"],
    explicacao_aprofundada: ["Sombras, cores escuras e olhos brilhantes podem deixar imagens misteriosas \u2728", "Mesmo personagens assustadores podem virar desenhos criativos \u{1F30C}"],
    curiosidade: ["Muitos monstros famosos nasceram da imagina\xE7\xE3o das pessoas \u{1F440}"],
    interacao: ["Que criatura misteriosa voc\xEA inventaria?"],
    atividade: ["Desenhe um monstrinho engra\xE7ado em vez de assustador \u{1F3A8}"],
    final: ["A imagina\xE7\xE3o pode transformar medo em criatividade \u{1F31F}"],
    emocao: "misterio",
    nivel: "leve"
  },
  animal_magico: {
    tema: "perguntas_infantis",
    subtema: "animal_magico",
    palavras_chave: ["animal m\xE1gico", "bicho m\xE1gico", "criatura m\xE1gica", "animal fantasia", "animal imagin\xE1rio"],
    inicio: ["Animais m\xE1gicos aparecem em muitas hist\xF3rias encantadas \u{1F984}"],
    explicacao_curta: ["Algumas criaturas imagin\xE1rias t\xEAm asas, brilho ou poderes especiais \u2728"],
    explicacao_aprofundada: ["Drag\xF5es, unic\xF3rnios e sereias s\xE3o exemplos famosos \u{1F308}", "A imagina\xE7\xE3o pode misturar v\xE1rios animais em um s\xF3 \u{1F3A8}"],
    curiosidade: ["Muitos povos criaram criaturas m\xE1gicas em suas lendas \u{1F30D}"],
    interacao: ["Que poder teria seu animal m\xE1gico?"],
    atividade: ["Misture dois animais para criar uma criatura nova \u270F\uFE0F"],
    final: ["Criar criaturas imagin\xE1rias \xE9 uma aventura criativa \u{1F31F}"],
    emocao: "encantamento",
    nivel: "leve"
  },
  desenho_facil: {
    tema: "perguntas_infantis",
    subtema: "desenho_facil",
    palavras_chave: ["desenho f\xE1cil", "como desenhar f\xE1cil", "desenho simples", "desenho infantil", "quero desenhar"],
    inicio: ["Todo desenho pode come\xE7ar com formas simples \u270F\uFE0F"],
    explicacao_curta: ["C\xEDrculos, quadrados e tri\xE2ngulos ajudam a montar personagens \u{1F3A8}"],
    explicacao_aprofundada: ["Treinar aos poucos ajuda o desenho a melhorar \u{1F331}", "At\xE9 grandes artistas come\xE7aram desenhando formas b\xE1sicas \u2728"],
    curiosidade: ["Muitos desenhos famosos nasceram de rabiscos simples \u{1F604}"],
    interacao: ["O que voc\xEA gostaria de aprender a desenhar?"],
    atividade: ["Desenhe um rostinho usando apenas c\xEDrculos \u{1F60A}"],
    final: ["Cada desenho \xE9 um passo novo na criatividade \u{1F308}"],
    emocao: "criatividade",
    nivel: "leve"
  },
  cor_diferente: {
    tema: "perguntas_infantis",
    subtema: "cor_diferente",
    palavras_chave: ["cor diferente", "mistura de cores", "cor maluca", "cor inventada"],
    inicio: ["As cores podem transformar completamente um desenho \u{1F308}"],
    explicacao_curta: ["Misturar cores cria novas possibilidades \u{1F3A8}"],
    explicacao_aprofundada: ["Alguns artistas usam cores inesperadas para deixar a arte mais divertida \u2728", "N\xE3o existe limite para imaginar combina\xE7\xF5es coloridas \u{1F31F}"],
    curiosidade: ["Azul com amarelo pode criar verde \u{1F49A}"],
    interacao: ["Que cor inventada voc\xEA criaria?"],
    atividade: ["Misture tintas para descobrir novas cores \u{1F3A8}"],
    final: ["As cores ajudam a mostrar emo\xE7\xF5es e imagina\xE7\xE3o \u2728"],
    emocao: "exploracao",
    nivel: "leve"
  },
  super_heroi: {
    tema: "perguntas_infantis",
    subtema: "super_heroi",
    palavras_chave: ["super heroi", "heroi desenho", "personagem poderoso", "criar heroi"],
    inicio: ["Os super-her\xF3is usam coragem e criatividade \u{1F9B8}"],
    explicacao_curta: ["Alguns her\xF3is possuem poderes, roupas especiais e s\xEDmbolos marcantes \u2728"],
    explicacao_aprofundada: ["Os personagens podem proteger cidades, animais ou a natureza \u{1F30E}", "Cada her\xF3i possui habilidades \xFAnicas \u{1F31F}"],
    curiosidade: ["Muitos her\xF3is nasceram primeiro nos quadrinhos \u{1F4DA}"],
    interacao: ["Qual seria o poder do seu her\xF3i?"],
    atividade: ["Crie um s\xEDmbolo para seu personagem \u270F\uFE0F"],
    final: ["A imagina\xE7\xE3o pode criar her\xF3is incr\xEDveis \u{1F308}"],
    emocao: "coragem",
    nivel: "leve"
  },
  desenho_animal: {
    tema: "perguntas_infantis",
    subtema: "desenho_animal",
    palavras_chave: ["desenhar animal", "como desenhar cachorro", "como desenhar gato", "animal f\xE1cil"],
    inicio: ["Os animais podem ser desenhados usando formas simples \u{1F43E}"],
    explicacao_curta: ["C\xEDrculos ajudam a criar cabe\xE7as e corpos \u270F\uFE0F"],
    explicacao_aprofundada: ["Tri\xE2ngulos podem virar orelhas ou bicos \u{1F3A8}", "Cada animal possui formas e movimentos diferentes \u{1F33F}"],
    curiosidade: ["Muitos artistas observam animais reais antes de desenhar \u{1F440}"],
    interacao: ["Qual animal voc\xEA mais gosta de desenhar?"],
    atividade: ["Desenhe um gato usando circles e tri\xE2ngulos \u{1F431}"],
    final: ["Observar a natureza ajuda muito na arte \u{1F308}"],
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
      "tra\xE7o"
    ],
    inicio: [
      "As linhas est\xE3o em quase todos os desenhos \u270F\uFE0F",
      "Uma linha pode passear pelo papel de muitos jeitos \u{1F308}"
    ],
    explicacao_curta: [
      "A linha \xE9 um tra\xE7o que pode ser reto, curvo ou ondulado."
    ],
    explicacao_aprofundada: [
      "As linhas ajudam a mostrar caminhos, movimentos, emo\xE7\xF5es e formas dentro da arte."
    ],
    curiosidade: [
      "Linhas r\xE1pidas podem mostrar agita\xE7\xE3o, enquanto linhas suaves parecem mais calmas."
    ],
    interacao: [
      "Voc\xEA consegue desenhar uma linha bem maluca?",
      "Que tipo de linha parece mais divertida para voc\xEA?"
    ],
    atividade: [
      "Desenhe linhas retas, curvas e em zigue-zague \u270F\uFE0F"
    ],
    final: [
      "Uma simples linha pode virar uma grande cria\xE7\xE3o \u{1F3A8}"
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
      "O ponto \xE9 pequeno, mas muito importante \u{1F3AF}"
    ],
    explicacao_curta: [
      "O ponto \xE9 o menor elemento do desenho."
    ],
    explicacao_aprofundada: [
      "V\xE1rios pontos juntos podem formar imagens, texturas e efeitos visuais."
    ],
    curiosidade: [
      "Alguns artistas criam desenhos inteiros usando apenas pontos \u2728"
    ],
    interacao: [
      "Voc\xEA consegue fazer um desenho s\xF3 com pontinhos?"
    ],
    atividade: [
      "Crie uma figura usando muitos pontos coloridos \u{1F535}"
    ],
    final: [
      "Pequenos pontos podem criar grandes imagens \u{1F31F}"
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
      "As formas ajudam a construir desenhos \u{1F7E0}\u2B1C\u{1F53A}"
    ],
    explicacao_curta: [
      "A forma \xE9 o contorno de algo, como um c\xEDrculo ou quadrado."
    ],
    explicacao_aprofundada: [
      "As formas podem ser geom\xE9tricas ou livres e ajudam a criar personagens, objetos e paisagens."
    ],
    curiosidade: [
      "Muitos desenhos come\xE7am com formas simples."
    ],
    interacao: [
      "Qual forma voc\xEA mais gosta de desenhar?"
    ],
    atividade: [
      "Crie um personagem usando c\xEDrculos e quadrados \u270F\uFE0F"
    ],
    final: [
      "As formas s\xE3o como pe\xE7as de constru\xE7\xE3o da arte \u{1F308}"
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
      "As cores deixam o mundo mais vivo \u{1F308}"
    ],
    explicacao_curta: [
      "As cores podem transmitir sentimentos e emo\xE7\xF5es."
    ],
    explicacao_aprofundada: [
      "Algumas cores parecem calmas, outras agitadas ou alegres. Elas ajudam artistas a mostrar emo\xE7\xF5es."
    ],
    curiosidade: [
      "As cores aparecem por causa da luz \u2600\uFE0F"
    ],
    interacao: [
      "Qual cor combina mais com alegria para voc\xEA?"
    ],
    atividade: [
      "Pinte um desenho usando apenas suas cores favoritas \u{1F3A8}"
    ],
    final: [
      "As cores contam hist\xF3rias sem usar palavras \u2728"
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
      "As cores quentes parecem cheias de energia \u{1F525}"
    ],
    explicacao_curta: [
      "Vermelho, amarelo e laranja lembram o fogo e o sol."
    ],
    explicacao_aprofundada: [
      "As cores quentes transmitem calor, movimento e anima\xE7\xE3o."
    ],
    interacao: [
      "Qual cor quente voc\xEA acha mais animada?"
    ],
    atividade: [
      "Desenhe um sol usando cores quentes \u2600\uFE0F"
    ],
    final: [
      "As cores quentes deixam as artes vibrantes \u{1F31E}"
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
      "As cores frias parecem tranquilas \u{1F30A}"
    ],
    explicacao_curta: [
      "Azul e verde lembram \xE1gua, c\xE9u e natureza."
    ],
    explicacao_aprofundada: [
      "As cores frias costumam transmitir calma e serenidade."
    ],
    interacao: [
      "Qual paisagem voc\xEA pintaria usando cores frias?"
    ],
    atividade: [
      "Fa\xE7a uma pintura inspirada no oceano \u{1F30A}"
    ],
    final: [
      "As cores frias parecem abra\xE7os tranquilos \u2601\uFE0F"
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
      "A textura faz a arte parecer viva \u2728"
    ],
    explicacao_curta: [
      "A textura mostra como algo parece ao toque."
    ],
    interacao: [
      "O que parece mais \xE1spero: pedra ou algod\xE3o?"
    ],
    atividade: [
      "Crie texturas usando l\xE1pis e pontinhos \u270F\uFE0F"
    ],
    final: [
      "As texturas deixam os desenhos mais interessantes \u{1F33F}"
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
      "O volume ajuda o desenho a parecer tridimensional \u{1F4E6}"
    ],
    explicacao_curta: [
      "O volume cria a sensa\xE7\xE3o de profundidade."
    ],
    atividade: [
      "Desenhe um cubo usando luz e sombra \u270F\uFE0F"
    ],
    final: [
      "O volume faz os objetos parecerem reais \u{1F31F}"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  espaco: {
    tema: "artes_visuais",
    subtema: "espaco",
    palavras_chave: [
      "espaco",
      "espa\xE7o"
    ],
    inicio: [
      "Todo desenho precisa de um espa\xE7o para acontecer \u{1F30E}",
      "O espa\xE7o ajuda os elementos da arte a se organizarem \u2728"
    ],
    explicacao_curta: [
      "O espa\xE7o \xE9 o lugar onde os desenhos, formas e cores aparecem."
    ],
    explicacao_aprofundada: [
      "Na arte, o espa\xE7o pode parecer cheio, vazio, perto ou distante. Ele ajuda a organizar a imagem."
    ],
    curiosidade: [
      "Um espa\xE7o vazio tamb\xE9m pode fazer parte da arte \u{1F3A8}"
    ],
    interacao: [
      "Voc\xEA prefere desenhos cheios de detalhes ou com bastante espa\xE7o vazio?"
    ],
    atividade: [
      "Desenhe um c\xE9u bem aberto com poucas formas \u2601\uFE0F"
    ],
    final: [
      "O espa\xE7o ajuda a arte a respirar \u{1F33F}"
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
      "A luz e a sombra criam m\xE1gicas nos desenhos \u2728",
      "Sombras ajudam os objetos a parecerem mais reais \u{1F317}"
    ],
    explicacao_curta: [
      "A luz ilumina e a sombra mostra as partes mais escuras."
    ],
    explicacao_aprofundada: [
      "Artistas usam luz e sombra para criar profundidade, destacar formas e dar sensa\xE7\xE3o de volume."
    ],
    curiosidade: [
      "A posi\xE7\xE3o da luz muda completamente as sombras \u2600\uFE0F"
    ],
    interacao: [
      "Voc\xEA j\xE1 observou a sombra de um objeto no sol?"
    ],
    atividade: [
      "Desenhe uma bola e fa\xE7a uma sombra ao lado \u270F\uFE0F"
    ],
    final: [
      "A luz e a sombra deixam os desenhos mais vivos \u{1F31F}"
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
      "A perspectiva faz os desenhos parecerem profundos \u{1F6E4}\uFE0F",
      "Ela ajuda a criar a sensa\xE7\xE3o de dist\xE2ncia \u{1F440}"
    ],
    explicacao_curta: [
      "Objetos distantes parecem menores."
    ],
    explicacao_aprofundada: [
      "A perspectiva ajuda artistas a mostrar profundidade e criar cenas mais realistas."
    ],
    curiosidade: [
      "Trilhos de trem parecem se juntar ao longe \u{1F682}"
    ],
    interacao: [
      "Voc\xEA consegue imaginar uma estrada desaparecendo no horizonte?"
    ],
    atividade: [
      "Desenhe uma estrada ficando mais fina ao longe \u270F\uFE0F"
    ],
    final: [
      "A perspectiva cria ilus\xF5es incr\xEDveis na arte \u{1F308}"
    ],
    emocao: "curiosidade",
    nivel: "leve"
  },
  composicao: {
    tema: "artes_visuais",
    subtema: "composicao",
    palavras_chave: [
      "composicao",
      "composi\xE7\xE3o"
    ],
    inicio: [
      "A composi\xE7\xE3o organiza os elementos da arte \u{1F3A8}",
      "Cada desenho tem um jeito especial de organizar formas e cores \u2728"
    ],
    explicacao_curta: [
      "A composi\xE7\xE3o mostra como os elementos aparecem no desenho."
    ],
    explicacao_aprofundada: [
      "Artistas escolhem onde colocar objetos, cores e linhas para criar equil\xEDbrio e movimento."
    ],
    curiosidade: [
      "Mudar um elemento de lugar pode transformar toda a imagem \u{1F31F}"
    ],
    interacao: [
      "Voc\xEA gosta de desenhos organizados ou mais livres?"
    ],
    atividade: [
      "Monte uma cena colocando objetos em diferentes posi\xE7\xF5es \u270F\uFE0F"
    ],
    final: [
      "A composi\xE7\xE3o ajuda a contar hist\xF3rias atrav\xE9s da arte \u{1F33F}"
    ],
    emocao: "criatividade",
    nivel: "leve"
  },
  cores_primarias: {
    tema: "artes_visuais",
    subtema: "cores_primarias",
    palavras_chave: [
      "cores primarias",
      "cores prim\xE1rias"
    ],
    inicio: [
      "As cores prim\xE1rias s\xE3o muito especiais \u{1F308}"
    ],
    explicacao_curta: [
      "As cores prim\xE1rias s\xE3o vermelho, azul e amarelo."
    ],
    explicacao_aprofundada: [
      "Com as cores prim\xE1rias podemos criar muitas outras misturas e tonalidades."
    ],
    curiosidade: [
      "Muitas cores surgem da mistura das prim\xE1rias \u{1F3A8}"
    ],
    interacao: [
      "Voc\xEA j\xE1 tentou misturar tintas coloridas?"
    ],
    atividade: [
      "Misture azul e amarelo para descobrir uma nova cor \u2728"
    ],
    final: [
      "As cores prim\xE1rias s\xE3o a base de muitas pinturas \u{1F31F}"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  cores_secundarias: {
    tema: "artes_visuais",
    subtema: "cores_secundarias",
    palavras_chave: [
      "cores secundarias",
      "cores secund\xE1rias"
    ],
    inicio: [
      "As cores secund\xE1rias nascem das misturas \u{1F3A8}"
    ],
    explicacao_curta: [
      "As cores secund\xE1rias aparecem quando misturamos duas cores prim\xE1rias."
    ],
    explicacao_aprofundada: [
      "Laranja, verde e roxo s\xE3o exemplos de cores secund\xE1rias."
    ],
    curiosidade: [
      "Misturar tintas \xE9 quase como fazer experi\xEAncias m\xE1gicas \u2728"
    ],
    interacao: [
      "Qual mistura de cores voc\xEA gostaria de testar?"
    ],
    atividade: [
      "Misture vermelho e amarelo para criar laranja \u{1F9E1}"
    ],
    final: [
      "As misturas criam novas possibilidades coloridas \u{1F308}"
    ],
    emocao: "diversao",
    nivel: "leve"
  },
  cores_terciarias: {
    tema: "artes_visuais",
    subtema: "cores_terciarias",
    palavras_chave: [
      "cores terciarias",
      "cores terci\xE1rias"
    ],
    inicio: [
      "As cores terci\xE1rias deixam a arte ainda mais rica \u{1F3A8}"
    ],
    explicacao_curta: [
      "As cores terci\xE1rias surgem da mistura de uma cor prim\xE1ria com uma secund\xE1ria."
    ],
    explicacao_aprofundada: [
      "Essas misturas criam tonalidades diferentes e cheias de personalidade."
    ],
    curiosidade: [
      "Algumas cores terci\xE1rias recebem nomes bem diferentes \u{1F308}"
    ],
    interacao: [
      "Voc\xEA gostaria de inventar uma cor nova?"
    ],
    atividade: [
      "Misture v\xE1rias cores e observe os resultados \u2728"
    ],
    final: [
      "As cores podem criar infinitas combina\xE7\xF5es \u{1F31F}"
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
      "A arte abstrata usa formas, linhas e cores de maneira livre \u{1F3A8}"
    ],
    explicacao_curta: [
      "Ela n\xE3o tenta copiar exatamente pessoas ou objetos reais."
    ],
    explicacao_aprofundada: [
      "Os artistas abstratos usam cores, formas e movimentos para transmitir emo\xE7\xF5es e ideias."
    ],
    curiosidade: [
      "Na arte abstrata, cada pessoa pode imaginar algo diferente \u2728"
    ],
    interacao: [
      "Que sentimentos voc\xEA mostraria usando apenas cores?"
    ],
    atividade: [
      "Pinte linhas e formas livres sem desenhar objetos \u{1F3A8}"
    ],
    final: [
      "As cores tamb\xE9m podem contar hist\xF3rias \u{1F308}"
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
      "A arte figurativa mostra pessoas, animais e objetos \u{1F5BC}\uFE0F"
    ],
    explicacao_curta: [
      "Ela representa elementos reconhec\xEDveis do mundo real."
    ],
    explicacao_aprofundada: [
      "Os artistas figurativos podem desenhar paisagens, retratos e cenas do cotidiano."
    ],
    curiosidade: [
      "Muitas pinturas antigas s\xE3o figurativas \u{1F3A8}"
    ],
    interacao: [
      "O que voc\xEA mais gosta de desenhar?"
    ],
    atividade: [
      "Fa\xE7a um desenho observando objetos da sua casa \u270F\uFE0F"
    ],
    final: [
      "A observa\xE7\xE3o ajuda a criar arte cheia de detalhes \u2728"
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
      "O grafite colore muros e cidades \u{1F306}"
    ],
    explicacao_curta: [
      "\xC9 uma forma de arte urbana cheia de criatividade."
    ],
    explicacao_aprofundada: [
      "Os artistas usam spray, desenhos e letras para criar imagens em espa\xE7os p\xFAblicos."
    ],
    curiosidade: [
      "Muitos grafites contam hist\xF3rias da comunidade \u{1F3A8}"
    ],
    interacao: [
      "Que desenho voc\xEA faria em um mural gigante?"
    ],
    atividade: [
      "Crie letras coloridas inspiradas no grafite \u270F\uFE0F"
    ],
    final: [
      "A arte pode transformar paredes em galerias \u{1F308}"
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
      "O muralismo cria pinturas enormes em paredes \u{1F58C}\uFE0F"
    ],
    explicacao_curta: [
      "Os murais contam hist\xF3rias usando imagens gigantes."
    ],
    explicacao_aprofundada: [
      "Muitos artistas usam murais para mostrar cultura, hist\xF3ria e ideias importantes."
    ],
    curiosidade: [
      "Alguns murais ocupam pr\xE9dios inteiros \u{1F3D9}\uFE0F"
    ],
    interacao: [
      "O que voc\xEA desenharia em uma parede gigante?"
    ],
    atividade: [
      "Planeje um mural coletivo com amigos \u{1F3A8}"
    ],
    final: [
      "Grandes paredes podem virar grandes obras \u{1F31F}"
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
      "A fotografia captura momentos usando luz \u{1F4F8}"
    ],
    explicacao_curta: [
      "As c\xE2meras registram imagens e mem\xF3rias."
    ],
    explicacao_aprofundada: [
      "Fot\xF3grafos observam luz, \xE2ngulo e composi\xE7\xE3o para criar imagens interessantes."
    ],
    curiosidade: [
      "Uma fotografia pode congelar um instante do tempo \u23F3"
    ],
    interacao: [
      "O que voc\xEA mais gostaria de fotografar?"
    ],
    atividade: [
      "Tire fotos observando luz e sombra \u{1F31E}"
    ],
    final: [
      "As imagens podem guardar lembran\xE7as especiais \u2728"
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
      "A anima\xE7\xE3o faz desenhos parecerem vivos \u{1F3AC}"
    ],
    explicacao_curta: [
      "V\xE1rias imagens em sequ\xEAncia criam movimento."
    ],
    explicacao_aprofundada: [
      "Os animadores desenham muitas cenas para criar personagens e hist\xF3rias em movimento."
    ],
    curiosidade: [
      "Um segundo de anima\xE7\xE3o pode usar muitos desenhos \u270F\uFE0F"
    ],
    interacao: [
      "Que personagem animado voc\xEA inventaria?"
    ],
    atividade: [
      "Fa\xE7a um flipbook em um bloquinho \u{1F4DA}"
    ],
    final: [
      "Desenhos podem ganhar movimento e vida \u{1F308}"
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
      "O stop motion cria anima\xE7\xF5es usando fotos \u{1F3A5}"
    ],
    explicacao_curta: [
      "Os objetos s\xE3o movidos pouquinho por pouquinho."
    ],
    explicacao_aprofundada: [
      "Cada foto registra uma pequena mudan\xE7a at\xE9 formar movimento."
    ],
    curiosidade: [
      "Massinhas e brinquedos podem virar personagens \u2728"
    ],
    interacao: [
      "Que brinquedo voc\xEA animaria?"
    ],
    atividade: [
      "Fa\xE7a fotos movendo objetos lentamente \u{1F4F8}"
    ],
    final: [
      "Pequenos movimentos podem criar grandes hist\xF3rias \u{1F31F}"
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
      "A pixel art cria desenhos usando quadradinhos \u{1F7E6}"
    ],
    explicacao_curta: [
      "Ela lembra imagens de videogames antigos."
    ],
    explicacao_aprofundada: [
      "Cada pixel funciona como uma pequena pe\xE7a formando a imagem."
    ],
    curiosidade: [
      "Muitos jogos cl\xE1ssicos usam pixel art \u{1F3AE}"
    ],
    interacao: [
      "Voc\xEA gosta de jogos retr\xF4?"
    ],
    atividade: [
      "Monte desenhos usando papel quadriculado \u270F\uFE0F"
    ],
    final: [
      "Pequenos pixels podem criar mundos inteiros \u{1F308}"
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
      "Os quadrinhos misturam desenho e narrativa \u{1F4DA}"
    ],
    explicacao_curta: [
      "As hist\xF3rias aparecem em cenas organizadas em quadros."
    ],
    explicacao_aprofundada: [
      "Os personagens falam usando bal\xF5es e express\xF5es desenhadas."
    ],
    curiosidade: [
      "Os quadrinhos podem ter aventura, humor ou mist\xE9rio \u2728"
    ],
    interacao: [
      "Que superpoder teria seu personagem?"
    ],
    atividade: [
      "Crie uma HQ com tr\xEAs quadros \u270F\uFE0F"
    ],
    final: [
      "Desenhos tamb\xE9m podem contar aventuras \u{1F31F}"
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
      "A arte digital usa computadores e tablets para criar \u{1F3A8}"
    ],
    explicacao_curta: [
      "Os artistas desenham usando programas e telas digitais."
    ],
    explicacao_aprofundada: [
      "\xC9 poss\xEDvel usar pinc\xE9is virtuais, efeitos e muitas cores diferentes."
    ],
    curiosidade: [
      "Muitos filmes e jogos usam arte digital \u{1F3AE}"
    ],
    interacao: [
      "Voc\xEA prefere desenhar no papel ou na tela?"
    ],
    atividade: [
      "Crie desenhos usando aplicativos simples \u270F\uFE0F"
    ],
    final: [
      "Tecnologia e criatividade podem trabalhar juntas \u{1F308}"
    ],
    emocao: "exploracao",
    nivel: "leve"
  },
  conceicao_evaristo: {
    tema: "escritoras_brasileiras",
    subtema: "conceicao_evaristo",
    palavras_chave: ["concei\xE7\xE3o evaristo", "olhos d'\xE1gua", "becos da mem\xF3ria", "contos", "mulheres negras"],
    inicio: ["Concei\xE7\xE3o Evaristo escreve hist\xF3rias que parecem janelas para a vida de mulheres fortes e guerreiras \u{1F4AA}\u{1F4D6}"],
    explicacao_curta: ["Concei\xE7\xE3o Evaristo escreve hist\xF3rias inspiradas na vida real de muitas mulheres negras brasileiras."],
    explicacao_aprofundada: ["Seus textos falam de coragem, fam\xEDlia, sonhos e dificuldades do dia a dia, mostrando como a esperan\xE7a nunca se apaga."],
    curiosidade: ["Concei\xE7\xE3o trabalhou como empregada dom\xE9stica e s\xF3 come\xE7ou a estudar j\xE1 adulta; hoje \xE9 uma das maiores escritoras do Brasil \u{1F31F}"],
    interacao: ["Que hist\xF3ria da sua fam\xEDlia ou de algu\xE9m que voc\xEA conhece merecia ser contada?"],
    activity: ["Desenhe uma cena de uma hist\xF3ria real que voc\xEA gostaria de escrever: pode ser um momento feliz ou de supera\xE7\xE3o \u{1F58D}\uFE0F"],
    // wait, let's keep exact keys
    atividade: ["Desenhe uma cena de uma hist\xF3ria real que voc\xEA gostaria de escrever: pode ser um momento feliz ou de supera\xE7\xE3o \u{1F58D}\uFE0F"],
    final: ["A literatura pode dar voz a quem sempre teve hist\xF3rias incr\xEDveis para contar \u{1F5E3}\uFE0F"],
    emocao: "resist\xEAncia",
    nivel: "leve",
    ano_nascimento: "1946",
    ano_falecimento: "",
    local_nascimento: "Belo Horizonte, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Olhos d'\xC1gua', livro de contos que ganhou pr\xEAmios importantes.",
      "Escreveu 'Becos da Mem\xF3ria', romance inspirado em sua inf\xE2ncia.",
      "\xC9 uma das vozes mais importantes da literatura brasileira contempor\xE2nea.",
      "Doutora em Literatura Comparada pela UFMG."
    ],
    onde_nasceu_resposta: "Concei\xE7\xE3o Evaristo nasceu em Belo Horizonte, Minas Gerais, em 1946.",
    ano_nascimento_resposta: "Concei\xE7\xE3o Evaristo nasceu no ano de 1946.",
    ano_falecimento_resposta: "Concei\xE7\xE3o Evaristo continua viva e escrevendo at\xE9 hoje."
  },
  carolina_maria_de_jesus: {
    tema: "escritoras_brasileiras",
    subtema: "carolina_maria_de_jesus",
    palavras_chave: ["carolina maria de jesus", "quarto de despejo", "di\xE1rio", "favela", "carolina de jesus"],
    inicio: ["Carolina Maria de Jesus escreveu um di\xE1rio de verdade, contando seu dia a dia na favela com muita coragem \u{1F4D4}"],
    explicacao_curta: ["Carolina escreveu sobre sua pr\xF3pria vida na favela, contando as dificuldades e tamb\xE9m sua for\xE7a para cuidar da fam\xEDlia."],
    explicacao_aprofundada: ["Seu di\xE1rio virou um livro muito importante que mostra a realidade de quem vive na pobreza, mas tamb\xE9m a dignidade, a intelig\xEAncia e os sonhos de Carolina."],
    curiosidade: ["Ela catava papel para sobreviver e foi encontrada por um jornalista que se encantou com seus escritos; o livro vendeu milhares de c\xF3pias no mundo todo \u{1F30D}"],
    interacao: ["Se voc\xEA escrevesse um di\xE1rio sobre o seu dia, o que contaria primeiro?"],
    atividade: ["Escreva uma pequena p\xE1gina de di\xE1rio desenhando algo que aconteceu ontem e que te fez sentir orgulho de voc\xEA mesmo(a) \u270D\uFE0F"],
    final: ["A escrita pode transformar a vida de uma pessoa e inspirar o mundo inteiro \u{1F30E}"],
    emocao: "supera\xE7\xE3o",
    nivel: "leve",
    ano_nascimento: "1914",
    ano_falecimento: "1977",
    local_nascimento: "Sacramento, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Quarto de Despejo: Di\xE1rio de uma Favelada', que vendeu mais de 1 milh\xE3o de c\xF3pias.",
      "Foi uma das primeiras escritoras negras a alcan\xE7ar fama internacional.",
      "Deixou mais de 20 cadernos com poemas, contos e pe\xE7as de teatro."
    ],
    onde_nasceu_resposta: "Carolina Maria de Jesus nasceu em Sacramento, Minas Gerais, em 1914.",
    ano_nascimento_resposta: "Carolina Maria de Jesus nasceu no ano de 1914.",
    ano_falecimento_resposta: "Carolina Maria de Jesus faleceu no ano de 1977."
  },
  maria_firmina_dos_reis: {
    tema: "escritoras_brasileiras",
    subtema: "maria_firmina_dos_reis",
    palavras_chave: ["maria firmina dos reis", "\xFArsula", "romance", "liberdade", "abolicionista", "maria firmina"],
    inicio: ["Maria Firmina dos Reis escreveu um livro corajoso que denunciava a escravid\xE3o e pedia justi\xE7a \u270A\u{1F3FF}"],
    explicacao_curta: ["Maria Firmina escreveu uma hist\xF3ria que defendia a liberdade das pessoas escravizadas. Foi uma obra muito corajosa para a \xE9poca."],
    explicacao_aprofundada: ["'\xDArsula' \xE9 considerado o primeiro romance abolicionista do Brasil, mostrando a dor e a resist\xEAncia de pessoas negras escravizadas."],
    curiosidade: ["Maria Firmina tamb\xE9m foi professora e musicista, e seu livro ficou esquecido por mais de 100 anos, sendo redescoberto s\xF3 no s\xE9culo XX \u{1F50D}"],
    interacao: ["O que significa 'justi\xE7a' para voc\xEA? Como voc\xEA explicaria?"],
    atividade: ["Desenhe uma balan\xE7a (s\xEDmbolo da justi\xE7a) e, de um lado, desenhe algo que voc\xEA acha injusto; do outro, desenhe como seria o mundo sem essa injusti\xE7a \u2696\uFE0F"],
    final: ["A literature pode lutar por um mundo mais justo para todos \u{1F308}"],
    emocao: "justi\xE7a",
    nivel: "leve",
    ano_nascimento: "1822",
    ano_falecimento: "1917",
    local_nascimento: "S\xE3o Lu\xEDs, Maranh\xE3o, Brasil",
    o_que_ele_fez: [
      "Escreveu '\xDArsula' (1859), primeiro romance abolicionista do Brasil.",
      "Publicou contos, poemas e uma obra sobre pedagogia.",
      "Foi professora e fundou a primeira escola mista e gratuita do Maranh\xE3o."
    ],
    onde_nasceu_resposta: "Maria Firmina dos Reis nasceu em S\xE3o Lu\xEDs, Maranh\xE3o, em 1822.",
    ano_nascimento_resposta: "Maria Firmina dos Reis nasceu no ano de 1822.",
    ano_falecimento_resposta: "Maria Firmina dos Reis faleceu no ano de 1917."
  },
  jarid_arraes: {
    tema: "escritoras_brasileiras",
    subtema: "jarid_arraes",
    palavras_chave: ["jarid arraes", "hero\xEDnas negras brasileiras", "cordel", "15 cord\xE9is", "jarid"],
    inicio: ["Jarid Arraes conta hist\xF3rias de mulheres incr\xEDveis usando versos rimados, como os cantadores de feira \u{1F3A4}\u{1F4DC}"],
    explicacao_curta: ["Jarid conta hist\xF3rias de mulheres negras brasileiras muito importantes usando cordel, um jeito divertido e rimado de contar hist\xF3rias."],
    explicacao_aprofundada: ["Cada cordel \xE9 como uma m\xFAsica em versos, que homenageia hero\xEDnas como Tia Ciata, Carolina de Jesus e muitas outras, mostrando sua for\xE7a e legado."],
    curiosidade: ["Jarid come\xE7ou a escrever cordel ainda na adolesc\xEAncia e publicou seu primeiro livro aos 24 anos, depois de criar um clube de leitura feminino \u{1F4DA}"],
    interacao: ["Que mulher da sua vida voc\xEA gostaria de homenagear com versos rimados?"],
    atividade: ["Escreva uma quadrinha (quatro versos) rimada sobre uma mulher que voc\xEA admira \u2013 pode ser sua m\xE3e, av\xF3, professora ou uma amiga \u270F\uFE0F\u{1F3B6}"],
    final: ["A poesia rimada pode transformar qualquer hist\xF3ria em uma can\xE7\xE3o inesquec\xEDvel \u{1F3B5}"],
    emocao: "homenagem",
    nivel: "leve",
    ano_nascimento: "1991",
    ano_falecimento: "",
    local_nascimento: "Juazeiro do Norte, Cear\xE1, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Hero\xEDnas Negras Brasileiras em 15 Cord\xE9is'.",
      "Fundou o Clube de Leitura Feminino.",
      "\xC9 escritora, poeta e cordelista premiada."
    ],
    onde_nasceu_resposta: "Jarid Arraes nasceu em Juazeiro do Norte, Cear\xE1, em 1991.",
    ano_nascimento_resposta: "Jarid Arraes nasceu no ano de 1991.",
    ano_falecimento_resposta: "Jarid Arraes continua viva e escrevendo at\xE9 hoje."
  },
  djamila_ribeiro: {
    tema: "escritoras_brasileiras",
    subtema: "djamila_ribeiro",
    palavras_chave: ["djamila ribeiro", "pequeno manual antirracista", "ensaio", "igualdade", "djamila"],
    inicio: ["Djamila Ribeiro escreveu um livrinho que ensina, de forma simples, como podemos ser mais amigos e respeitar todas as pessoas \u{1F91D}"],
    explicacao_curta: ["Djamila explica de forma simples como podemos construir um mundo mais justo e respeitoso para todas as pessoas."],
    explicacao_aprofundada: ["O livro traz exemplos do dia a dia e atitudes pr\xE1ticas para combater o racismo, valorizando a diversidade e a empatia."],
    curiosidade: ["Djamila foi a primeira fil\xF3sofa negra a dar aula na Universidade Federal de S\xE3o Paulo e \xE9 uma das vozes mais importantes contra o racismo no Brasil \u{1F393}"],
    interacao: ["O que voc\xEA faria se visse algu\xE9m sendo tratado de forma injusta por causa da cor da pele?"],
    atividade: ["Desenhe um cartaz com a frase 'Todos iguais, todos diferentes' e encha de desenhos de pessoas com v\xE1rias cores de cabelo, pele e roupas felizes \u{1F3A8}"],
    final: ["Pequenos gestos de respeito podem mudar o mundo, um abra\xE7o de cada vez \u{1F496}"],
    emocao: "empatia",
    nivel: "leve",
    ano_nascimento: "1980",
    ano_falecimento: "",
    local_nascimento: "S\xE3o Paulo, S\xE3o Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Pequeno Manual Antirracista', que se tornou um best-seller.",
      "\xC9 fil\xF3sofa, feminista e ativista pelos direitos humanos.",
      "Coordenou a cole\xE7\xE3o 'Feminismos Plurais'."
    ],
    onde_nasceu_resposta: "Djamila Ribeiro nasceu em S\xE3o Paulo, em 1980.",
    ano_nascimento_resposta: "Djamila Ribeiro nasceu no ano de 1980.",
    ano_falecimento_resposta: "Djamila Ribeiro continua viva e escrevendo at\xE9 hoje."
  },
  eliane_potiguara: {
    tema: "escritoras_brasileiras",
    subtema: "eliane_potiguara",
    palavras_chave: ["eliane potiguara", "metade cara metade m\xE1scara", "ind\xEDgena", "poesia", "eliane"],
    inicio: ["Eliane Potiguara escreve sobre a beleza e a luta dos povos ind\xEDgenas, como uma guardi\xE3 de hist\xF3rias antigas \u{1F3F9}\u{1F4D6}"],
    explicacao_curta: ["Eliane escreve sobre os povos ind\xEDgenas, suas hist\xF3rias, culturas e a import\xE2ncia de cuidar das tradi\xE7\xF5es e da natureza."],
    explicacao_aprofundada: ["A obra mistura poesia e relatos para mostrar a for\xE7a da mulher ind\xEDgena, a resist\xEAncia contra o preconceito e o amor pela terra."],
    curiosidade: ["Eliane \xE9 da etnia Potiguara e fundou o primeiro centro de apoio aos ind\xEDgenas urbanos no Rio de Janeiro, chamado 'Grumim' \u{1F343}"],
    interacao: ["O que voc\xEA sabe sobre os povos ind\xEDgenas que vivem no Brasil hoje?"],
    atividade: ["Desenhe uma m\xE1scara de guerra ou de festa inspirada em algum povo ind\xEDgena brasileiro (voc\xEA pode pesquisar imagens de cocares ou pinturas corporais) \u{1F3AD}"],
    final: ["A literatura ind\xEDgena nos ensina a respeitar a natureza e a valorizar quem veio antes de n\xF3s \u{1F33F}"],
    emocao: "ancestralidade",
    nivel: "leve",
    ano_nascimento: "1947",
    ano_falecimento: "",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Metade Cara, Metade M\xE1scara' e outros livros de poesia.",
      "Fundou o Grumin (Grupo Mulher-Educa\xE7\xE3o Ind\xEDgena).",
      "\xC9 uma das primeiras escritoras ind\xEDgenas a publicar no Brasil."
    ],
    onde_nasceu_resposta: "Eliane Potiguara nasceu no Rio de Janeiro, em 1947.",
    ano_nascimento_resposta: "Eliane Potiguara nasceu no ano de 1947.",
    ano_falecimento_resposta: "Eliane Potiguara continua viva e escrevendo at\xE9 hoje."
  },
  graca_grauna: {
    tema: "escritoras_brasileiras",
    subtema: "graca_grauna",
    palavras_chave: ["gra\xE7a gra\xFAna", "criaturas de \xF1anderu", "poesia", "ancestralidade", "gra\xE7a grauna"],
    inicio: ["Gra\xE7a Gra\xFAna usa poemas para falar de seres m\xE1gicos da natureza, como se a floresta inteira pudesse falar \u{1F333}\u2728"],
    explicacao_curta: ["Gra\xE7a usa poemas para falar sobre espiritualidade, natureza e a sabedoria dos povos ind\xEDgenas brasileiros."],
    explicacao_aprofundada: ["O livro traz criaturas m\xEDticas e elementos da cosmologia Guarani, mostrando como tudo na terra est\xE1 conectado com o sagrado."],
    curiosidade: ["Gra\xE7a tamb\xE9m \xE9 atriz, professora e roteirista; ela escreve tanto para crian\xE7as quanto para adultos, sempre valorizando a cultura ind\xEDgena \u{1F3AD}"],
    interacao: ["Se a natureza pudesse te contar um segredo atrav\xE9s de um poema, o que voc\xEA acha que ela diria?"],
    atividade: ["Invente um poema de tr\xEAs versos para um animal ou planta que voc\xEA ama (exemplo: 'O beija-flor bebe sol / e veste arco-\xEDris / para dan\xE7ar no meu quintal') \u{1F426}\u{1F33A}"],
    final: ["A poesia pode dar alma \xE0s folhas, aos bichos e aos rios \u{1F30A}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1968",
    ano_falecimento: "",
    local_nascimento: "Pesqueira, Pernambuco, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Criaturas de \xD1anderu' e outros livros de poesia.",
      "\xC9 atriz, roteirista e professora.",
      "Escreve para crian\xE7as e adultos valorizando a cultura ind\xEDgena."
    ],
    onde_nasceu_resposta: "Gra\xE7a Gra\xFAna nasceu em Pesqueira, Pernambuco, in 1968.",
    ano_nascimento_resposta: "Gra\xE7a Gra\xFAna nasceu no ano de 1968.",
    ano_falecimento_resposta: "Gra\xE7a Gra\xFAna continua viva e escrevendo at\xE9 hoje."
  },
  auritha_tabajara: {
    tema: "escritoras_brasileiras",
    subtema: "auritha_tabajara",
    palavras_chave: ["auritha tabajara", "cora\xE7\xE3o na aldeia p\xE9s no mundo", "cordel", "identidade ind\xEDgena", "auritha"],
    inicio: ["Auritha Tabajara escreve versos que viajam da aldeia para a cidade, sempre com o cora\xE7\xE3o cheio de tradi\xE7\xE3o \u{1F30E}\u2764\uFE0F"],
    explicacao_curta: ["Auritha mistura hist\xF3rias da aldeia com aventuras pelo mundo, mostrando a for\xE7a e a beleza da cultura ind\xEDgena."],
    explicacao_aprofundada: ["Em cordel, ela conta como \xE9 ser ind\xEDgena no Brasil de hoje, equilibrando ancestralidade e modernidade, al\xE9m de lutar contra o preconceito."],
    curiosidade: ["Auritha \xE9 a primeira mulher ind\xEDgena a publicar um cordel no Brasil, e ela faz parte da etnia Tabajara, do Cear\xE1 \u{1F389}"],
    interacao: ["O que voc\xEA gosta de levar com voc\xEA onde quer que v\xE1 (um objeto, uma lembran\xE7a, um cheiro)?"],
    atividade: ["Crie um pequeno cordel de duas estrofes rimadas sobre um lugar que voc\xEA ama (sua casa, a praia, a escola, a aldeia dos seus sonhos) \u{1F3E1}\u{1F3B6}"],
    final: ["Podemos viver no mundo todo sem nunca esquecer de onde viemos \u{1F30D}"],
    emocao: "pertencimento",
    nivel: "leve",
    ano_nascimento: "1985",
    ano_falecimento: "",
    local_nascimento: "Fortaleza, Cear\xE1, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Cora\xE7\xE3o na Aldeia, P\xE9s no Mundo' (cordel).",
      "Foi a primeira mulher ind\xEDgena a publicar um cordel no Brasil.",
      "\xC9 contadora de hist\xF3rias, cordelista e ativista ind\xEDgena."
    ],
    onde_nasceu_resposta: "Auritha Tabajara nasceu em Fortaleza, Cear\xE1, em 1985.",
    ano_nascimento_resposta: "Auritha Tabajara nasceu no ano de 1985.",
    ano_falecimento_resposta: "Auritha Tabajara continua viva e escrevendo at\xE9 hoje."
  },
  marcia_kambeba: {
    tema: "escritoras_brasileiras",
    subtema: "marcia_kambeba",
    palavras_chave: ["m\xE1rcia kambeba", "marcia kambeba", "ay kakyri tama", "eu moro na cidade", "poesia ind\xEDgena"],
    inicio: ["M\xE1rcia Kambeba mostra que \xE9 poss\xEDvel morar na cidade grande e ainda guardar a floresta dentro do peito \u{1F306}\u{1F333}"],
    explicacao_curta: ["M\xE1rcia fala sobre viver na cidade sem esquecer as ra\xEDzes ind\xEDgenas e o amor pela natureza e pelos antepassados."],
    explicacao_aprofundada: ["Seus poemas falam de identidade, mem\xF3ria e resist\xEAncia, mostrando que ser ind\xEDgena n\xE3o \xE9 s\xF3 viver na aldeia, mas tamb\xE9m est\xE1 presente nos centros urbanos."],
    curiosidade: ["M\xE1rcia \xE9 do povo Kambeba, nasceu no Amazonas, e \xE9 ge\xF3grafa, ativista e poetisa; ela viaja o Brasil levando a palavra ind\xEDgena para escolas e universidades \u{1F393}"],
    interacao: ["O que voc\xEA carrega da sua fam\xEDlia ou da sua cultura mesmo quando est\xE1 longe?"],
    atividade: ["Desenhe uma paisagem que misture pr\xE9dios e arranha-c\xE9us com \xE1rvores, rios e animais da floresta \u2013 como seria a cidade dos seus sonhos? \u{1F3D9}\uFE0F\u{1F33F}"],
    final: ["Podemos ser muitos lugares ao mesmo tempo; o importante \xE9 nunca apagar nossas ra\xEDzes \u{1F331}"],
    emocao: "pertencimento duplo",
    nivel: "leve",
    ano_nascimento: "1981",
    ano_falecimento: "",
    local_nascimento: "Amazonas, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Ay Kakyri Tama - Eu Moro na Cidade'.",
      "\xC9 ge\xF3grafa, poetisa e ativista ind\xEDgena.",
      "Viaja o Brasil levando poesia ind\xEDgena para escolas e universidades."
    ],
    onde_nasceu_resposta: "M\xE1rcia Kambeba nasceu no Amazonas, em 1981.",
    ano_nascimento_resposta: "M\xE1rcia Kambeba nasceu no ano de 1981.",
    ano_falecimento_resposta: "M\xE1rcia Kambeba continua viva e escrevendo at\xE9 hoje."
  },
  julie_dorrico: {
    tema: "escritoras_brasileiras",
    subtema: "julie_dorrico",
    palavras_chave: ["julie dorrico", "literatura ind\xEDgena contempor\xE2nea", "pesquisa", "cultura ind\xEDgena", "julie"],
    inicio: ["Julie Dorrico estuda e escreve sobre hist\xF3rias ind\xEDgenas para que todo mundo conhe\xE7a a riqueza dessas culturas \u{1F4DA}\u2728"],
    explicacao_curta: ["Julie Dorrico escreve e pesquisa hist\xF3rias ind\xEDgenas para ajudar mais pessoas a conhecerem a riqueza dessas culturas."],
    explicacao_aprofundada: ["Seu trabalho mostra como a literatura ind\xEDgena vai muito al\xE9m do folclore: \xE9 arte, pol\xEDtica, mem\xF3ria e muita criatividade feita por pessoas ind\xEDgenas de verdade."],
    curiosidade: ["Julie \xE9 da etnia Macuxi, doutora em Letras e organizou a primeira antologia de literatura ind\xEDgena brasileira contempor\xE2nea, chamada 'Morosofia' \u{1F3C6}"],
    interacao: ["Que livro ou hist\xF3ria ind\xEDgena voc\xEA j\xE1 leu ou ouviu falar?"],
    atividade: ["Pesquise (com ajuda de um adulto) um mito ind\xEDgena curto, leia e depois desenhe a cena que voc\xEA mais gostou \u{1F406}"],
    final: ["Conhecer a literatura ind\xEDgena \xE9 abrir a porta para mundos cheios de sabedoria e encanto \u{1F6AA}\u{1F308}"],
    emocao: "conhecimento",
    nivel: "leve",
    ano_nascimento: "1985",
    ano_falecimento: "",
    local_nascimento: "Roraima, Brasil",
    o_que_ele_fez: [
      "Organizou a primeira antologia de literatura ind\xEDgena brasileira contempor\xE2nea, 'Morosofia'.",
      "\xC9 doutora em Letras pela PUCRS.",
      "Escreve e pesquisa sobre literatura ind\xEDgena contempor\xE2nea."
    ],
    onde_nasceu_resposta: "Julie Dorrico nasceu em Roraima, em 1985.",
    ano_nascimento_resposta: "Julie Dorrico nasceu no ano de 1985.",
    ano_falecimento_resposta: "Julie Dorrico continua viva e escrevendo at\xE9 hoje."
  },
  machado_de_assis: {
    tema: "autores_brasileiros",
    subtema: "machado_de_assis",
    palavras_chave: ["machado de assis", "mem\xF3rias p\xF3stumas de br\xE1s cubas", "dom casmurro", "quincas borba", "romance", "humor", "memorias postumas de bras cubas", "machado"],
    inicio: ["Machado de Assis criou personagens que contam suas vidas com muito humor e intelig\xEAncia \u{1F3A9}\u{1F4D6}"],
    explicacao_curta: ["Machado de Assis \xE9 o maior escritor brasileiro. Suas hist\xF3rias s\xE3o cheias de humor, ironia e reflex\xF5es sobre a sociedade."],
    explicacao_aprofundada: ["Machado foi fundador da Academia Brasileira de Letras e criou obras-primas como Mem\xF3rias P\xF3stumas de Br\xE1s Cubas, Dom Casmurro e Quincas Borba, marcadas por um estilo \xFAnico e ir\xF4nico."],
    curiosidade: ["Machado era filho de uma lavadeira e de um pintor de paredes, aprendeu sozinho a ler e escrever, e tornou-se o maior nome da literatura brasileira \u{1F31F}"],
    interacao: ["Se voc\xEA pudesse contar sua hist\xF3ria depois de velhinho, o que lembraria primeiro?"],
    atividade: ["Desenhe uma cena engra\xE7ada de um personagem que conta sua vida depois de morto \u2013 como um fantasma brincalh\xE3o \u{1F47B}"],
    final: ["O humor pode nos ensinar a enxergar a vida de outro jeito \u{1F602}"],
    emocao: "ironia",
    nivel: "leve",
    ano_nascimento: "1839",
    ano_falecimento: "1908",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Fundou a Academia Brasileira de Letras e foi seu primeiro presidente.",
      "Escreveu 'Mem\xF3rias P\xF3stumas de Br\xE1s Cubas', 'Dom Casmurro' e 'Quincas Borba'.",
      "\xC9 considerado o maior escritor da literatura brasileira.",
      "Publicou romances, contos, cr\xF4nicas, poesias e pe\xE7as de teatro."
    ],
    onde_nasceu_resposta: "Machado de Assis nasceu no Rio de Janeiro, em 1839.",
    ano_nascimento_resposta: "Machado de Assis nasceu no ano de 1839.",
    ano_falecimento_resposta: "Machado de Assis faleceu no ano de 1908."
  },
  lima_barreto: {
    tema: "autores_brasileiros",
    subtema: "lima_barreto",
    palavras_chave: ["lima barreto", "triste fim de policarpo quaresma", "clara dos anjos", "patriotismo", "policarpo quaresma"],
    inicio: ["Lima Barreto escreveu sobre pessoas que amavam o Brasil e queriam mudar o pa\xEDs para melhor \u{1F1E7}\u{1F1F7}\u{1F622}"],
    explicacao_curta: ["Lima Barreto foi um grande escritor que denunciou as injusti\xE7as sociais e o preconceito em suas obras."],
    explicacao_aprofundada: ["Em 'Triste Fim de Policarpo Quaresma' e 'Clara dos Anjos', ele criticou a sociedade brasileira, o racismo e as desigualdades com um olhar realista e sens\xEDvel."],
    curiosidade: ["Lima Barreto foi um dos primeiros grandes escritores negros do Brasil e sofreu muito preconceito, mas deixou obras-primas \u{1F4DA}"],
    interacao: ["Se voc\xEA pudesse inventar uma lei para melhorar o Brasil, qual seria?"],
    atividade: ["Desenhe Policarpo Quaresma plantando mandioca e ao lado um pol\xEDtico rindo \u2013 mostre como ele \xE9 sozinho em sua luta \u{1F331}"],
    final: ["O amor ao pa\xEDs pode ser lindo, mas mudar o mundo sozinho \xE9 muito dif\xEDcil; por isso devemos nos unir \u{1F91D}"],
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
    inicio: ["Duas irm\xE3s, uma enxada e um arado torto: assim come\xE7a 'Torto Arado', uma hist\xF3ria de amor e luta pela terra \u{1F33D}\u2692\uFE0F"],
    explicacao_curta: ["Itamar Vieira Junior \xE9 um dos grandes nomes da literatura brasileira contempor\xE2nea, com obras que valorizam a cultura e as tradi\xE7\xF5es do interior."],
    explicacao_aprofundada: ["Seu livro 'Torto Arado' narra a vida de duas irm\xE3s numa comunidade de descendentes de escravizados, abordando conflitos de terra, f\xE9 e afeto com uma narrativa po\xE9tica e forte."],
    curiosidade: ["'Torto Arado' foi o livro mais vendido no Brasil em 2020 e ganhou o Pr\xEAmio Jabuti e o Pr\xEAmio Oceanos \u{1F30A}"],
    interacao: ["Voc\xEA j\xE1 visitou uma fazenda ou ro\xE7a? O que mais gostou?"],
    atividade: ["Desenhe uma paisagem do campo com uma casa simples, uma planta\xE7\xE3o e duas irm\xE3s caminhando juntas sob o sol \u{1F31E}\u{1F469}\u{1F3FF}\u{1F33E}"],
    final: ["A terra n\xE3o \xE9 s\xF3 ch\xE3o: \xE9 mem\xF3ria, fam\xEDlia e vida \u{1F30D}"],
    emocao: "conex\xE3o",
    nivel: "leve",
    ano_nascimento: "1979",
    ano_falecimento: "",
    local_nascimento: "Salvador, Bahia, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Torto Arado', best-seller vencedor dos pr\xEAmios Jabuti e Oceanos.",
      "\xC9 doutor em Estudos \xC9tnicos e Africanos pela UFBA.",
      "Foi finalista do Pr\xEAmio Portugal Telecom de Literatura."
    ],
    onde_nasceu_resposta: "Itamar Vieira Junior nasceu em Salvador, Bahia, em 1979.",
    ano_nascimento_resposta: "Itamar Vieira Junior nasceu no ano de 1979.",
    ano_falecimento_resposta: "Itamar Vieira Junior continua vivo e escrevendo at\xE9 hoje."
  },
  daniel_munduruku: {
    tema: "autores_brasileiros",
    subtema: "daniel_munduruku",
    palavras_chave: ["daniel munduruku", "hist\xF3rias de \xEDndio", "o kara\xEDba", "contos ind\xEDgenas", "natureza", "munduruku", "daniel mundurucu"],
    inicio: ["Daniel Munduruku conta hist\xF3rias da floresta que os av\xF3s ind\xEDgenas ensinam para as crian\xE7as, cheias de macacos, on\xE7as e curupiras \u{1F412}\u{1F333}"],
    explicacao_curta: ["Daniel Munduruku \xE9 um dos mais importantes escritores ind\xEDgenas do Brasil, com dezenas de livros que valorizam a cultura e a sabedoria dos povos origin\xE1rios."],
    explicacao_aprofundada: ["Suas obras, como 'Hist\xF3rias de \xCDndio' e 'O Kara\xEDba', trazem ensinamentos sobre respeito \xE0 natureza, amizade e a import\xE2ncia das tradi\xE7\xF5es ind\xEDgenas."],
    curiosidade: ["Daniel \xE9 da etnia Munduruku, tem doutorado em Educa\xE7\xE3o e escreveu mais de 50 livros infantis \u{1F4DA}"],
    interacao: ["Que animal da floresta voc\xEA acha que tem a hist\xF3ria mais interessante?"],
    atividade: ["Desenhe o personagem 'Curupira' (o protetor da mata com os p\xE9s virados para tr\xE1s) assustando um ca\xE7ador que quer derrubar \xE1rvores \u{1F332}\u{1F463}"],
    final: ["As hist\xF3rias ind\xEDgenas ensinam que a natureza \xE9 nossa m\xE3e e deve ser respeitada \u{1F49A}"],
    emocao: "encantamento",
    nivel: "leve",
    ano_nascimento: "1964",
    ano_falecimento: "",
    local_nascimento: "Bernardino de Campos, S\xE3o Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu mais de 50 livros infantis e adultos.",
      "\xC9 doutor em Educa\xE7\xE3o pela USP.",
      "Foi o primeiro ind\xEDgena a ocupar a cadeira de imortal da Academia Brasileira de Letras (2023)."
    ],
    onde_nasceu_resposta: "Daniel Munduruku nasceu em Bernardino de Campos, S\xE3o Paulo, em 1964.",
    ano_nascimento_resposta: "Daniel Munduruku nasceu no ano de 1964.",
    ano_falecimento_resposta: "Daniel Munduruku continua vivo e escrevendo at\xE9 hoje."
  },
  ailton_krenak: {
    tema: "autores_brasileiros",
    subtema: "ailton_krenak",
    palavras_chave: ["ailton krenak", "ideias para adiar o fim do mundo", "a vida n\xE3o \xE9 \xFAtil", "natureza", "krenak", "aylton krenak"],
    inicio: ["Ailton Krenak nos convida a sonhar com um planeta onde as pessoas cuidam dos rios como cuidam de parentes \u{1F30A}\u{1F91D}"],
    explicacao_curta: ["Ailton Krenak \xE9 l\xEDder ind\xEDgena, escritor e ativista, conhecido por seus livros que defendem a natureza e a vida."],
    explicacao_aprofundada: ["Em 'Ideias para Adiar o Fim do Mundo' e 'A Vida N\xE3o \xC9 \xDAtil', ele critica a destrui\xE7\xE3o ambiental e prop\xF5e uma nova rela\xE7\xE3o com a Terra."],
    curiosidade: ["Ailton ficou famoso quando discursou na Assembleia Constituinte de 1988 pintado de preto, protestando contra a invas\xE3o das terras ind\xEDgenas \u{1F5A4}"],
    interacao: ["O que voc\xEA faria para 'adiar o fim do mundo' na sua casa?"],
    atividade: ["Desenhe o planeta Terra sendo abra\xE7ado por muitas m\xE3os de cores diferentes \u2013 cada m\xE3o representa uma pessoa cuidando do meio ambiente \u{1F30D}\u{1F932}"],
    final: ["Cuidar da natureza \xE9 um ato de amor pela vida de todos os seres \u{1F41D}\u{1F33B}"],
    emocao: "esperan\xE7a",
    nivel: "leve",
    ano_nascimento: "1953",
    ano_falecimento: "",
    local_nascimento: "Itabirinha, Minas Gerais, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Ideias para Adiar o Fim do Mundo' e 'A Vida N\xE3o \xC9 \xDAtil'.",
      "\xC9 lideran\xE7a ind\xEDgena do povo Krenak.",
      "Recebeu o Pr\xEAmio Juca Pato de Intelectual do Ano."
    ],
    onde_nasceu_resposta: "Ailton Krenak nasceu em Itabirinha, Minas Gerais, em 1953.",
    ano_nascimento_resposta: "Ailton Krenak nasceu no ano de 1953.",
    ano_falecimento_resposta: "Ailton Krenak continua vivo e escrevendo at\xE9 hoje."
  },
  olivio_jekupe: {
    tema: "autores_brasileiros",
    subtema: "olivio_jekupe",
    palavras_chave: ["ol\xEDvio jekup\xE9", "olivio jekupe", "xerek\xF3 arandu", "as queixadas", "guarani", "jekupe"],
    inicio: ["Ol\xEDvio Jekup\xE9 conta hist\xF3rias do povo guarani cheias de bravura, sabedoria e respeito pela natureza \u{1F6E1}\uFE0F\u{1F319}"],
    explicacao_curta: ["Ol\xEDvio Jekup\xE9 \xE9 escritor e ativista guarani, autor de livros que preservam a tradi\xE7\xE3o oral de seu povo."],
    explicacao_aprofundada: ["Suas obras, como 'Xerek\xF3 Arandu' e 'As Queixadas', trazem ensinamentos sobre a vida em comunidade, os rituais e a conex\xE3o com os animais da floresta."],
    curiosidade: ["Ol\xEDvio \xE9 professor e usa a literatura para fortalecer a identidade ind\xEDgena entre os jovens \u{1F4D6}"],
    interacao: ["Que valores (como respeito, uni\xE3o, bravura) voc\xEA acha que s\xE3o mais importantes em uma comunidade?"],
    atividade: ["Desenhe um c\xEDrculo de conversa ao redor de uma fogueira, com v\xE1rias pessoas ouvindo um paj\xE9 que conta hist\xF3rias \u{1F525}\u{1F442}"],
    final: ["As hist\xF3rias de luta dos povos ind\xEDgenas nos ensinam a nunca desistir de nossas ra\xEDces \u{1F331}"],
    emocao: "bravura",
    nivel: "leve",
    ano_nascimento: "1969",
    ano_falecimento: "",
    local_nascimento: "S\xE3o Paulo, S\xE3o Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Xerek\xF3 Arandu' e 'As Queixadas'.",
      "\xC9 professor e ativista do povo Guarani.",
      "Preserva a tradi\xE7\xE3o oral ind\xEDgena atrav\xE9s da literatura."
    ],
    onde_nasceu_resposta: "Ol\xEDvio Jekup\xE9 nasceu em S\xE3o Paulo, em 1969.",
    ano_nascimento_resposta: "Ol\xEDvio Jekup\xE9 nasceu no ano de 1969.",
    ano_falecimento_resposta: "Ol\xEDvio Jekup\xE9 continua vivo e escrevendo at\xE9 hoje."
  },
  davi_kopenawa: {
    tema: "autores_brasileiros",
    subtema: "davi_kopenawa",
    palavras_chave: ["davi kopenawa", "a queda do c\xE9u", "yanomami", "xam\xE3", "kopenawa", "queda do ceu"],
    inicio: ["Davi Kopenawa \xE9 um xam\xE3 yanomami que sonhou com a queda do c\xE9u e nos alerta: a floresta est\xE1 em perigo \u{1F333}\u26A1"],
    explicacao_curta: ["Davi Kopenawa \xE9 l\xEDder e xam\xE3 yanomami, autor de um livro que revela os ensinamentos de seu povo e os perigos da destrui\xE7\xE3o da Amaz\xF4nia."],
    explicacao_aprofundada: ["'A Queda do C\xE9u' \xE9 um relato de sua vida, dos rituais xam\xE2nicos e da devasta\xE7\xE3o causada pelo garimpo, escrito em parceria com o antrop\xF3logo Bruce Albert."],
    curiosidade: ["Davi foi uma das lideran\xE7as ind\xEDgenas mais importantes do mundo, recebendo pr\xEAmios e discursando na ONU \u{1F54A}\uFE0F"],
    interacao: ["O que voc\xEA faria se visse uma grande m\xE1quina destruindo a floresta perto da sua casa?"],
    atividade: ["Desenhe um xam\xE3 yanomami com cocar de penas e um p\xF3 m\xE1gico (soprado para curar) em uma m\xE3o; na outra, desenhe uma folha em chamas como alerta \u{1F525}"],
    final: ["A voz dos xam\xE3s nos lembra que o c\xE9u pode cair se n\xE3o cuidarmos da terra \u{1F30E}"],
    emocao: "urg\xEAncia",
    nivel: "leve",
    ano_nascimento: "1955",
    ano_falecimento: "",
    local_nascimento: "Roraima, Brasil",
    o_que_ele_fez: [
      "Escreveu 'A Queda do C\xE9u' em parceria com Bruce Albert.",
      "\xC9 lideran\xE7a e xam\xE3 do povo Yanomami.",
      "Recebeu pr\xEAmios internacionais por sua luta em defesa da Amaz\xF4nia."
    ],
    onde_nasceu_resposta: "Davi Kopenawa nasceu em Roraima, em 1955.",
    ano_nascimento_resposta: "Davi Kopenawa nasceu no ano de 1955.",
    ano_falecimento_resposta: "Davi Kopenawa continua vivo e lutando at\xE9 hoje."
  },
  kaka_wera_jeicupe: {
    tema: "autores_brasileiros",
    subtema: "kaka_wera_jeicupe",
    palavras_chave: ["kak\xE1 wer\xE1 jecup\xE9", "kaka wera jecupe", "todas as vezes que dissemos adeus", "tup\xE3 tenond\xE9", "guarani", "kaka wera", "jeicupe"],
    inicio: ["Kak\xE1 Wer\xE1 Jecup\xE9 escreve sobre encontros, despedidas e a for\xE7a das ra\xEDzes ind\xEDgenas com uma prosa po\xE9tica e sens\xEDvel \u{1F9E1}"],
    explicacao_curta: ["Kak\xE1 Wer\xE1 \xE9 escritor, m\xFAsico e palestrante guarani, autor de obras que misturam mem\xF3ria, identidade e espiritualidade."],
    explicacao_aprofundada: ["Em 'Todas as Vezes que Dissemos Adeus' e 'Tup\xE3 Tenond\xE9', ele aborda a busca pela identidade, os ensinamentos ancestrais e a cria\xE7\xE3o do mundo segundo a cosmovis\xE3o guarani."],
    curiosidade: ["Kak\xE1 Wer\xE1 tamb\xE9m \xE9 m\xFAsico e viaja o mundo para falar sobre cultura ind\xEDgena e sustentabilidade \u{1F3B8}"],
    interacao: ["De quem voc\xEA j\xE1 se despediu e at\xE9 hoje sente saudade?"],
    atividade: ["Desenhe uma mala de viagem com v\xE1rios cora\xE7\xF5es dentro, simbolizando as pessoas e lugares que voc\xEA carrega no cora\xE7\xE3o mesmo depois de partir \u{1F9F3}\u2764\uFE0F"],
    final: ["Cada despedida nos prepara para novos encontros \u2013 e as ra\xEDzes nunca se perdem \u{1F331}"],
    emocao: "melancolia",
    nivel: "leve",
    ano_nascimento: "1964",
    ano_falecimento: "",
    local_nascimento: "S\xE3o Paulo, S\xE3o Paulo, Brasil",
    o_que_ele_fez: [
      "Escreveu 'Todas as Vezes que Dissemos Adeus' e 'Tup\xE3 Tenond\xE9'.",
      "\xC9 m\xFAsico, palestrante e ativista do povo Guarani.",
      "Viaja o mundo difundindo a cultura ind\xEDgena e a sustentabilidade."
    ],
    onde_nasceu_resposta: "Kak\xE1 Wer\xE1 Jecup\xE9 nasceu em S\xE3o Paulo, em 1964.",
    ano_nascimento_resposta: "Kak\xE1 Wer\xE1 Jecup\xE9 nasceu no ano de 1964.",
    ano_falecimento_resposta: "Kak\xE1 Wer\xE1 Jecup\xE9 continua vivo e escrevendo at\xE9 hoje."
  },
  vik_muniz: {
    tema: "biografias",
    subtema: "vik_muniz",
    palavras_chave: ["vik muniz", "vic muniz", "muniz"],
    inicio: ["Vik Muniz \xE9 um artista brasileiro contempor\xE2neo extremamente criativo! \u267B\uFE0F\u{1F3A8}"],
    explicacao_curta: ["Vik Muniz nasceu em 20 de dezembro de 1961, em S\xE3o Paulo, e cria imagens usando materiais super diferentes como chocolate, brinquedos, sucata e at\xE9 lixo recicl\xE1vel!"],
    explicacao_aprofundada: ["Vik Muniz monta suas esculturas e desenhos gigantes usando esses materiais do cotidiano, e depois fotografa o resultado final para mostrar ao p\xFAblico. Ele nos prova que com imagina\xE7\xE3o tudo pode virar arte."],
    curiosidade: ["Ele fez obras incr\xEDveis usando toneladas de materiais recicl\xE1veis de um dos maiores lix\xF5es do mundo, ajudando os catadores de lixo de l\xE1! \u{1F30D}\u267B\uFE0F"],
    interacao: ["Se voc\xEA pudesse desenhar com doces ou chocolate, o que voc\xEA pintaria primeiro?"],
    atividade: ["Que tal colagem? Pegue pedacinhos de pap\xE9is velhos ou folhas secas do quintal para criar o desenho de um animal m\xE1gico! \u2702\uFE0F\u{1F342}"],
    final: ["Podemos fazer arte usando a imagina\xE7\xE3o e materiais simples! \u267B\uFE0F"],
    emocao: "criatividade",
    nivel: "leve",
    ano_nascimento: "1961",
    ano_falecimento: "",
    local_nascimento: "S\xE3o Paulo, S\xE3o Paulo, Brasil",
    o_que_ele_fez: [
      "Cria imagens fant\xE1sticas usando materiais inovadores como a\xE7\xFAcar, chocolate e lixo recicl\xE1vel.",
      "Fotografa suas cria\xE7\xF5es em grande formato, vendendo suas obras no mundo todo.",
      "Liderou projetos sociais usando a arte para apoiar catadores de materiais recicl\xE1veis."
    ],
    onde_nasceu_resposta: "Vik Muniz nasceu em S\xE3o Paulo, em 1961.",
    ano_nascimento_resposta: "Vik Muniz nasceu no ano de 1961.",
    ano_falecimento_resposta: "Vik Muniz continua vivo e criando suas incr\xEDveis obras at\xE9 hoje."
  },
  arthur_bispo_do_rosario: {
    tema: "biografias",
    subtema: "arthur_bispo_do_rosario",
    palavras_chave: ["arthur bispo do ros\xE1rio", "bispo do rosario", "arthur bispo", "bispo do ros\xE1rio"],
    inicio: ["Arthur Bispo do Ros\xE1rio foi um artista brasileiro que bordou seus sonhos e transformou objetos comuns do dia a dia em pura poesia! \u{1F9F5}\u2728"],
    explicacao_curta: ["Arthur Bispo do Ros\xE1rio nasceu em 16 de mar\xE7o de 1909, em Japaratuba, Sergipe, e ficou famoso por criar obras de arte com tecidos, fios, bordados e objetos descartados."],
    explicacao_aprofundada: ["Ele viveu grande parte de sua vida em um hospital e passava os dias desfiando o azul de uniformes velhos para bordar mantos majestosos, estandartes e cole\xE7\xF5es de objetos do cotidiano. Ele organizava garrafas, sapatos e bot\xF5es como se fossem um lindo acervo de mem\xF3rias do mundo."],
    curiosidade: ["Sua obra mais famosa \xE9 o 'Manto da Apresenta\xE7\xE3o', um casaco inteiro bordado por dentro e por fora com nomes e palavras misteriosas! \u{1F9F5}\u{1F458}"],
    interacao: ["Voc\xEA j\xE1 tentou costurar ou bordar algum desenho com linha e agulha?"],
    atividade: ["Junte 3 objetos pequenos diferentes (como tampinhas, colheres ou chaves) e tente combin\xE1-los em cima de uma mesa para formar um bonequinho divertido! \u{1F511}\u{1F3A8}"],
    final: ["Esses artistas nos mostram que tudo ao nosso redor pode se transformar em arte! \u{1F9F6}"],
    emocao: "sensibilidade",
    nivel: "leve",
    ano_nascimento: "1909",
    ano_falecimento: "1989",
    local_nascimento: "Japaratuba, Sergipe, Brasil",
    o_que_ele_fez: [
      "Criou uma cole\xE7\xE3o impressionante de mais de 800 pe\xE7as de arte usando bordados e materiais do cotidiano.",
      "Bordou o famoso Manto da Apresenta\xE7\xE3o desfiando tecidos de roupas velhas.",
      "Sua obra foi exposta em grandes bienais de arte, influenciando gera\xE7\xF5es de artistas brasileiros."
    ],
    onde_nasceu_resposta: "Arthur Bispo do Ros\xE1rio nasceu em Japaratuba, Sergipe, em 1909.",
    ano_nascimento_resposta: "Arthur Bispo do Ros\xE1rio nasceu no ano de 1909.",
    ano_falecimento_resposta: "Arthur Bispo do Ros\xE1rio faleceu no ano de 1989."
  },
  heitor_dos_prazeres: {
    tema: "biografias",
    subtema: "heitor_dos_prazeres",
    palavras_chave: ["heitor dos prazeres", "heitor dos praseres"],
    inicio: ["Heitor dos Prazeres foi um grande pintor, compositor de samba e sambista de alma vibrante! \u{1F3B6}\u{1F3A8}"],
    explicacao_curta: ["Heitor dos Prazeres nasceu em 23 de setembro de 1898, no Rio de Janeiro, e retratava com cores brilhantes a vida, a alegria e as rodas de samba de seu povo."],
    explicacao_aprofundada: ["Heitor foi um dos pioneiros do samba carioca e, na pintura, registrou com muita alegria as festas populares, os dan\xE7arinos de frevo, rodas de capoeira, as crian\xE7as brincando e o cotidiano das favelas do RJ. Suas obras transbordam m\xFAsica visual!"],
    curiosidade: ["Heitor era t\xE3o talentoso que ajudou a fundar algumas das primeiras escolas de samba do Rio de Janeiro e tamb\xE9m comp\xF4s can\xE7\xF5es muito famosas! \u{1F941}\u{1F3B8}"],
    interacao: ["Qual \xE9 o seu ritmo ou m\xFAsica favorita quando voc\xEA est\xE1 desenhando?"],
    atividade: ["Desenhe v\xE1rias pessoas dan\xE7ando juntas em roda, usando tra\xE7os coloridos e vibrantes para mostrar a alegria delas! \u{1F57A}\u{1F483}\u{1F3A8}"],
    final: ["Sua linda arte nos ensina que o desenho e a pintura podem contar hist\xF3rias de vida e celebrar a alegria do povo! \u{1F3B6}\u2728"],
    emocao: "harmonia",
    nivel: "leve",
    ano_nascimento: "1898",
    ano_falecimento: "1966",
    local_nascimento: "Rio de Janeiro, Rio de Janeiro, Brasil",
    o_que_ele_fez: [
      "Foi um dos primeiros pintores modernos ing\xEAnuos (na\xEFf) do Brasil, expondo na primeira Bienal de S\xE3o Paulo.",
      "Atuou brilhantemente como compositor, instrumentista e sambista no Rio de Janeiro.",
      "Retratou o cotidiano das comunidades do Rio, as festas, o samba e a capoeira de forma \xFAnica."
    ],
    onde_nasceu_resposta: "Heitor dos Prazeres nasceu no Rio de Janeiro, em 1898.",
    ano_nascimento_resposta: "Heitor dos Prazeres nasceu no ano de 1898.",
    ano_falecimento_resposta: "Heitor dos Prazeres faleceu no ano de 1966."
  },
  carybe: {
    tema: "biografias",
    subtema: "carybe",
    palavras_chave: ["caryb\xE9", "carybe", "hector julio", "hector julio paride bernabo"],
    inicio: ["Caryb\xE9 foi um desenhista, pintor e escultor apaixonado pela m\xE1gica e pelas cores da cultura brasileira! \u{1F3A8}\u{1F30A}"],
    explicacao_curta: ["O verdadeiro nome de Caryb\xE9 era Hector Julio P\xE1ride Bernab\xF3. Ele nasceu na Argentina em 7 de fevereiro de 1911, e viveu grande parte de sua vida na Bahia, tornando-se uma figura fundamental da arte brasileira."],
    explicacao_aprofundada: ["Caryb\xE9 ficou imensamente famoso por pintar o dia a dia da Bahia: as festas de rua, as rodas de capoeira, os pescadores saindo ao mar e as ricas tradi\xE7\xF5es religiosas afro-brasileiras. Suas pinceladas pareciam capturar o vento e o gingado de cada movimento."],
    curiosidade: ["Ele ganhou esse apelido 'Caryb\xE9' quando era escoteiro no Rio de Janeiro, em refer\xEAncia a um peixinho amaz\xF4nico bem valente! Ele gostou tanto que o adotou para a vida toda. Embora tenha nascido argentino, ele se naturalizou brasileiro de cora\xE7\xE3o \u{1F1E7}\u{1F1F7}"],
    interacao: ["Voc\xEA j\xE1 teve um apelido fofo ou divertido dado por amigos?"],
    atividade: ["Fa\xE7a um desenho bem azul retratando os peixinhos e barcos navegando no mar da Bahia! \u26F5\u{1F41F}"],
    final: ["Caryb\xE9 ensina a amar, conhecer e valorizar de verdade a cultura e hist\xF3ria do nosso povo brasileiro! \u2728"],
    emocao: "admiracao",
    nivel: "leve",
    ano_nascimento: "1911",
    ano_falecimento: "1997",
    local_nascimento: "Lan\xFAs, Argentina (vivera na Bahia, Brasil)",
    o_que_ele_fez: [
      "Ilustrou livros de grandes escritores como Jorge Amado e Gabriel Garc\xEDa M\xE1rquez.",
      "Pintou murais hist\xF3ricos enormes e representou com imensa beleza festas de capoeira, pescadores e cultos afro-brasileiras.",
      "Tornou-se cidad\xE3o brasileiro honor\xE1rio, consagrando-se como grande \xEDcone do modernismo na Bahia."
    ],
    onde_nasceu_resposta: "Caryb\xE9 nasceu na Argentina, em 1911, mas viveu grande parte de sua vida na Bahia.",
    ano_nascimento_resposta: "Caryb\xE9 nasceu no ano de 1911.",
    ano_falecimento_resposta: "Caryb\xE9 faleceu no ano de 1997."
  }
};

// src/data/curiosidadesAcervo.ts
var CURIOSIDADES_ACERVO = [
  {
    id: "tartarugas_ninja",
    title: "\u{1F422} Tartarugas Ninja",
    icon: "\u{1F422}",
    description: "Por que her\xF3is guerreiros usam nomes de artistas famosos?",
    items: [
      {
        id: "tn_nomes",
        emoji: "\u{1F422}",
        pergunta: "Por que as Tartarugas Ninja t\xEAm nomes de artistas do Renascimento?",
        resposta: "As quatro Tartarugas Ninja receberam nomes de grandes artistas do Renascimento italiano para homenagear esses grandes mestres! Os criadores acharam engra\xE7ado misturar pintores cl\xE1ssicos com tartarugas mutantes lutadoras de artes marciais!\n\n\u{1F58C}\uFE0F Leonardo da Vinci \u2192 Leonardo (usa duas espadas)\n\u{1F355} Michelangelo \u2192 Michelangelo (usa nunchakus)\n\u2699\uFE0F Donatello \u2192 Donatello (usa bast\xE3o)\n\u2694\uFE0F Raphael \u2192 Raphael (usa sais)",
        detalhes: "Os nomes das Tartarugas Ninja funcionam como uma pequena aula de Hist\xF3ria da Arte. Muitas crian\xE7as conheceram Leonardo, Michelangelo, Donatello e Raphael primeiro pelos desenhos e s\xF3 depois descobriram que eles foram artistas reais!",
        palavrasChave: ["tartaruga ninja", "tartarugas ninja", "ninja turtles", "tartarugas", "raphael", "donatello", "michelangelo", "leonardo", "renascimento", "nome de tartaruga", "porque as tartarugas", "ninja", "ninjas", "turtle", "turtles", "tartaruga"]
      }
    ]
  },
  {
    id: "arte_classica",
    title: "\u{1F3A8} Curiosidades sobre Arte",
    icon: "\u{1F3A8}",
    description: "Segredos escondidos por tr\xE1s das tintas, telas e pinc\xE9is das maiores obras!",
    items: [
      {
        id: "art_sobrancelha",
        emoji: "\u{1F469}\u200D\u{1F3A8}",
        pergunta: "A Mona Lisa tem sobrancelhas?",
        resposta: "A famosa pintura Mona Lisa n\xE3o possui sobrancelhas vis\xEDveis hoje em dia! \u{1F62E} Alguns estudiosos e restauradores acreditam que elas existiam no desenho original de Leonardo da Vinci, mas acabaram desaparecendo bem devagarzinho de tanto limparem e restaurarem a tela ao longo dos s\xE9culos.",
        detalhes: "Com a ajuda de fotografias de alt\xEDssima defini\xE7\xE3o, cientistas conseguiram ver um \xFAnico tra\xE7o de pelo sobre o olho esquerdo, provando que Leonardo originalmente desenhou sim c\xEDlios e sobrancelhas para a Mona Lisa!",
        palavrasChave: ["sobrancelha mona lisa", "mona lisa sobrancelha", "sobrancelhas", "olho mona lisa", "detalhe mona lisa", "monalisa", "mona lisa", "sobrancelha", "sobrancelhas"]
      },
      {
        id: "art_sorriso",
        emoji: "\u{1F642}",
        pergunta: "O sorriso da Mona Lisa \xE9 um grande mist\xE9rio?",
        resposta: "Sim, e muito divertido! Muitas pessoas acham que o sorriso da Mona Lisa muda conforme o \xE2ngulo ou a dist\xE2ncia em que a observam. Se voc\xEA olha direto para a boca dela, o sorriso parece sumir; mas se voc\xEA olha para os olhos dela, a boca parece sorrir de novo! Esse efeito incr\xEDvel \xE9 resultado do 'Sfumato', uma t\xE9cnica de esfumado super suave criada por Leonardo da Vinci. \u{1F609}",
        detalhes: "O efeito confunde o nosso c\xE9rebro, fazendo com que a express\xE3o mude levemente dependendo de onde o foco da nossa vis\xE3o aponta na pintura.",
        palavrasChave: ["sorriso mona lisa", "sorriso da mona lisa", "mona lisa sorrindo", "segredo sorriso", "sfumato", "sorriso", "sorrir"]
      },
      {
        id: "art_vendas_gogh",
        emoji: "\u{1F33B}",
        pergunta: "Vincent van Gogh vendeu apenas uma pintura na vida?",
        resposta: "\xC9 verdade! Durante toda a sua vida, Vincent van Gogh teve muito pouco reconhecimento e vendeu apenas uma pintura oficialmente chamada 'A Vinha Encarnada' (The Red Vineyard) para uma pintora belga. But ele nunca desistiu de colocar o cora\xE7\xE3o em suas cores! Hoje em dia, suas incr\xEDveis obras, cheias de luzes e girass\xF3is brilhantes, est\xE3o entre as mais valiosas e amadas do mundo inteiro! \u{1F33B}",
        detalhes: "Hoje, suas telas como 'A Noite Estrelada' e 'Girass\xF3is' valem centenas de milh\xF5es de d\xF3lares e s\xE3o o maior destaque de museus globais.",
        palavrasChave: ["van gogh vendeu", "quantas pinturas van gogh vendeu", "vinha encarnada", "vendeu quadro van gogh", "reconhecimento van gogh", "van gogh", "gogh", "vincent"]
      },
      {
        id: "art_sistina_tempo",
        emoji: "\u26EA",
        pergunta: "Quanto tempo levou para pintar a Capela Sistina?",
        resposta: "O pintor e escultor Michelangelo levou cerca de quatro anos (de 1508 a 1512) para cobrir o teto inteiro da Capela Sistina com suas incr\xEDveis e gigantescas pinturas! Ele pintou mais de 300 figuras humanas no teto da igreja em Roma, trabalhando duro em um ambiente enorme e desafiador! \u{1F3DB}\uFE0F",
        detalhes: "O trabalho foi t\xE3o intenso que Michelangelo teve cansa\xE7o extremo por conta da postura cansativa durante as pinceladas do mestre.",
        palavrasChave: ["capela sistina deitado", "capela sistina tempo", "quatro anos capela", "tempo capela sistina", "teto da capela", "sistina", "capela sistina", "capela", "teto"]
      },
      {
        id: "art_michelangelo_deitado",
        emoji: "\u{1FA9C}",
        pergunta: "Michelangelo pintava o teto deitado?",
        resposta: "N\xE3o! Embora muita gente pense (e at\xE9 apare\xE7a em alguns filmes) que ele pintava o teto da Capela Sistina deitado de costas, na verdade Michelangelo pintava de p\xE9! Ele pr\xF3prio desenhou andaimes especiais de madeira e ficava em p\xE9 com as m\xE3os levantadas para o teto, com as costas curvadas e a cabe\xE7a inclinada para cima enquanto a tinta pingava em seu rosto! \u{1FA9C}\u{1F58C}\uFE0F",
        detalhes: "Michelangelo at\xE9 escreveu um poema bem humorado reclamando de como suas costas do\xEDam por ficar em p\xE9 olhando para cima por tantas horas seguidas!",
        palavrasChave: ["michelangelo deitado", "pintou deitado", "sistina deitado", "michelangelo em pe", "andaimes michelangelo", "michelangelo"]
      }
    ]
  },
  {
    id: "mangas_origem",
    title: "\u{1F4D6} Curiosidades sobre Mang\xE1s",
    icon: "\u{1F4D6}",
    description: "Espontaneidade e a arte maravilhosa dos quadrinhos tradicionais do Jap\xE3o!",
    items: [
      {
        id: "manga_significado",
        emoji: "\u270D\uFE0F",
        pergunta: "O que significa a palavra 'Mang\xE1'?",
        resposta: '"Mang\xE1" s\xE3o as hist\xF3rias em quadrinhos japonesas! A palavra em si \xE9 formada por duas partes que significam algo bem fofo: "desenhos espont\xE2neos" ou "rabiscos divertidos"! Eles podem contar aventuras de super-her\xF3is, romances, mist\xE9rios, amizades e esportes! \xC9 uma das formas de leitura mais populares e queridas do Jap\xE3o e do mundo! \u{1F5FA}\uFE0F\u{1F4D8}',
        detalhes: "Atualmente, os mang\xE1s conquistaram o mundo com narrativas densas, estilos vibrantes e personagens carism\xE1ticos divididos em v\xE1rias publica\xE7\xF5es semanais.",
        palavrasChave: ["significa manga", "significado manga", "o que e manga", "quadrinhos japoneses", "manga em japones", "manga", "mangas", "quadrinhos", "quadrinho"]
      },
      {
        id: "manga_leitura",
        emoji: "\u{1F4D6}",
        pergunta: "Por que os mang\xE1s s\xE3o lidos da direita para a esquerda?",
        resposta: "Porque no Jap\xE3o tradicional, a escrita e as p\xE1ginas dos livros sempre seguiram esse sentido: de cima para baixo e de tr\xE1s para frente (da direita para a esquerda)! Para manter a obra original e as ilustra\xE7\xF5es do jeito exato que o artista desenhou, as editoras do mundo inteiro mantiveram essa leitura m\xE1gica! No come\xE7o parece estranho, mas depois vira um superpoder divertido! \u{1F504}\u{1F31F}",
        detalhes: "Se os editores apenas invertessem as p\xE1ginas como um espelho para o padr\xE3o ocidental, as ilustra\xE7\xF5es ficariam invertidas \u2014 por exemplo, personagens canhotos pareceriam destros e placas escritas ficariam ileg\xEDveis!",
        palavrasChave: ["direita esquerda manga", "ler manga", "ler de tras para frente", "leitura manga", "sentido manga", "leitura", "ler", "como ler"]
      },
      {
        id: "manga_deus",
        emoji: "\u{1F451}",
        pergunta: "Quem foi Osamu Tezuka, o 'Deus do Mang\xE1'?",
        resposta: 'Osamu Tezuka foi um revolucion\xE1rio artista japon\xEAs conhecido mundialmente como o "Deus do Mang\xE1"! Ele mudou completamente a forma de desenhar quadrinhos e ajudou a criar as bases estruturais para os mang\xE1s e animes modernos, aplicando techniques de cinema nas p\xE1ginas de papel e criando her\xF3is lend\xE1rios como Astro Boy! \u{1F916}\u{1F680}',
        detalhes: "Ele era apaixonado por medicina e se formou m\xE9dico, mas decidiu que seu verdadeiro amor era desenhar e contar hist\xF3rias inesquec\xEDveis para as crian\xE7as.",
        palavrasChave: ["osamu tezuka", "deus do manga", "quem foi osamu", "tezuka manga", "criador do manga", "osamu", "tezuka"]
      },
      {
        id: "manga_olhos",
        emoji: "\u{1F440}",
        pergunta: "Por que os personagens de mang\xE1 t\xEAm olhos t\xE3o grandes?",
        resposta: "Esso foi uma das ideias brilhantes de Osamu Tezuka! Ele se inspirou em cl\xE1ssicos do cinema de anima\xE7\xE3o ocidental da Disney (como o camundongo Mickey Mouse e o cervo Bambi) para desenhar olhos enormes e brilhantes. Isso ajuda a mostrar com muita facilidade as emo\xE7\xF5es fortes dos personagens \u2014 como alegria radiante, surpresa fofa, medo ou determina\xE7\xE3o! \u{1F496}\u2728",
        detalhes: "Com olhos maiores, as nuances de sentimentos dos her\xF3is se destacam instantaneamente nas impress\xF5es em preto e branco dos quadrinhos.",
        palavrasChave: ["olhos grandes manga", "porque olhos grandes", "olhos gigantes", "olhar de anime", "expressao de emocao", "olhos", "olho"]
      },
      {
        id: "manga_variedade",
        emoji: "\u{1F4DA}",
        pergunta: "Existem mang\xE1s para todas as idades?",
        resposta: "Com certeza! No Jap\xE3o, os mang\xE1s s\xE3o divididos e catalogados organizadamente para cada faixa et\xE1ria e interesse! Tem hist\xF3rias divertidas e educativas para criancinhas, aventuras empolgantes de amizade para jovens, esportes, mist\xE9rios, e fofuras do cotidiano. \xC9 leitura garantida para toda a fam\xEDlia! \u{1F476}\u{1F9D1}\u{1F475}",
        detalhes: "Existem at\xE9 se\xE7\xF5es inteiras de bibliotecas p\xFAblicas e lojas em T\xF3quio dedicadas exclusivamente a mang\xE1s de culin\xE1ria, ci\xEAncias ou guias hist\xF3ricos!",
        palavrasChave: ["manga idade", "tipos de manga", "shonen", "shojo", "manga para criancas", "generos manga", "shonen", "shojo"]
      },
      {
        id: "manga_anime",
        emoji: "\u{1F4FA}",
        pergunta: "Os animes v\xEAm dos mang\xE1s?",
        resposta: "Muitos sim! Quando um mang\xE1 de papel faz um sucesso gigante e ganha o cora\xE7\xE3o dos leitores, os est\xFAdios de anima\xE7\xE3o decidem recriar essa hist\xF3ria cheia de cores, voz e movimento na televis\xE3o, transformando-as em animes de sucesso que viajam o planeta! \u{1F680}\u2728",
        detalhes: "O mang\xE1 funciona como um perfeito storyboard desenhado para direcionar cada nova cena que o diretor do anime planeja produzir.",
        palavrasChave: ["manga vira anime", "diferenca manga anime", "historia papel", "adaptacao anime", "adaptacao"]
      }
    ]
  },
  {
    id: "animes_fantastico",
    title: "\u{1F338} Animes Fant\xE1sticos",
    icon: "\u{1F338}",
    description: "Anima\xE7\xF5es fant\xE1sticas do Jap\xE3o que conquistaram o mundo com her\xF3is e emo\xE7\xF5es!",
    items: [
      {
        id: "ani_significado",
        emoji: "\u{1F338}",
        pergunta: "O que exatamente significa a palavra 'Anime'?",
        resposta: 'No Jap\xE3o, a palavra "anime" (pronunciada *anim\xEA*) \xE9 usada simplesmente para qualquer tipo de desenho animado ou anima\xE7\xE3o do mundo todo! Mas fora do Jap\xE3o, n\xF3s usamos essa palavra em especial para nos referirmos aos desenhos e filmes incr\xEDveis produzidos pelos est\xFAdios japoneses, com aquele tra\xE7o e jeitinho est\xE9tico \xFAnico e especial! \u{1F1EF}\u{1F1F5}\u{1F4AB}',
        detalhes: "A palavra vem da abrevia\xE7\xE3o da palavra inglesa 'animation' pronunciada em japon\xEAs como 'anim\u0113shon'.",
        palavrasChave: ["significa anime", "significado anime", "o que e anime", "animacao japonesa", "japao anime", "anime", "animes", "desenho japon\xEAs", "desenhos japoneses"]
      },
      {
        id: "ani_mais_longo",
        emoji: "\u{1F422}",
        pergunta: "Qual \xE9 o anime mais longo da hist\xF3ria?",
        resposta: "O campe\xE3o absoluto \xE9 um anime super tradicional chamado **Sazae-san**! Ele conta sobre o dia a dia alegre de uma simp\xE1tica fam\xEDlia japonesa e \xE9 exibido na televis\xE3o japonesa todos os domingos sem parar desde outubro de 1969! Ele est\xE1 no ar h\xE1 mais de 55 anos e j\xE1 tem mais de 8.000 pequenos epis\xF3dios curtos! \xC9 um recorde do Guinness! \u{1F3C6}\u{1F474}\u{1F4FA}",
        detalhes: "Sazae-san ultrapassa com folga animes longos famosos como One Piece, Pok\xE9mon, Case Closed e Doraemon em n\xFAmero de exibi\xE7\xF5es.",
        palavrasChave: ["anime mais longo", "anime maior", "sazae san", "episodios sazae san", "anime desde 1969", "sazae", "sazae san"]
      },
      {
        id: "ani_pokemon_nome",
        emoji: "\u{1F392}",
        pergunta: "Pok\xE9mon quase teve outro nome?",
        resposta: 'Quase! Antes de se tornar um sucesso mundial absoluto com o nome que amamos, a s\xE9rie foi originalmente registrada e planejada no Jap\xE3o como **Pocket Monsters**! Que em ingl\xEAs significa literalmente "Monstros de Bolso". Mas como j\xE1 existia um brinquedo parecido com nome quase igual nos Estados Unidos, os criadores criativamente juntaram as duas palavras e criaram: **Pok\xE9mon**! Ficou muito mais legal, n\xE3o achou? \u{1F43F}\uFE0F\u26A1',
        detalhes: "O her\xF3i principal, Pikachu, foi inspirado num pequeno esquilo de laborat\xF3rio de pixels que o designer adora de mont\xE3o!",
        palavrasChave: ["pokemon nome", "pocket monsters", "origem pokemon", "monstros de bolso", "nome do pokemon", "pokemon", "pokemons", "pikachu", "pocket monsters"]
      },
      {
        id: "ani_dragon_ball",
        emoji: "\u{1F409}",
        pergunta: "Como Dragon Ball ajudou a popularizar os animes no Brasil?",
        resposta: "Dragon Ball, criado pelo mestre Akira Toriyama, foi uma verdadeira explos\xE3o de energia! Exibido nos anos 1990 e 2000 no Brasil, as aventuras do her\xF3i Goku encantaram milh\xF5es de crian\xE7as que se reuniam em frente \xE0 TV para torcer pela Genki Dama. Esse enorme sucesso abriu de vez as portas da TV brasileira para muitos outros animes incr\xEDveis brilharem no pa\xEDs! \u{1F387}\u{1F1E7}\u{1F1F7}",
        detalhes: "Com lutas divertidas, com\xE9dia limpa e conceitos de amizade e treino, o anime virou febre nas escolas brasileiras.",
        palavrasChave: ["dragon ball brasil", "goku brasil", "popularizou animes", "goku", "akira toriyama", "dragonball", "dragon ball", "vegeta", "saiyajin", "akira", "toriyama"]
      },
      {
        id: "ani_naruto_lendas",
        emoji: "\u{1F98A}",
        pergunta: "Naruto foi inspirado em lendas reais do Jap\xE3o?",
        resposta: "Sim, e \xE9 fascinante! O criador de Naruto usou muitos mitos do folclore antigo e tradi\xE7\xF5es do Xinto\xEDsmo japon\xEAs! Por exemplo, a raposa de nove caudas (Kurama) vem da lenda da 'Kitsune', um esp\xEDrito raposa m\xE1gico e travesso da mitologia. Os nomes dos poderes (como Amaterasu, Susanoo e Tsukuyomi) s\xE3o nomes de deuses antigos do Jap\xE3o! \u26E9\uFE0F\u{1F300}",
        detalhes: "At\xE9 a forma de fazer selos de m\xE3o com os dedos foi baseada no budismo tradicional e nos golpes secretos descritos nos rolos ninjas antigos.",
        palavrasChave: ["naruto lendas", "kurama lenda", "kitsune naruto", "folclore de naruto", "mitologia japonesa naruto", "naruto", "kurama", "kitsune", "ninja naruto"]
      }
    ]
  },
  {
    id: "desenhos_animados",
    title: "\u{1F3AC} Desenhos Animados",
    icon: "\u{1F3AC}",
    description: "Curiosidades sobre Scooby-Doo, coelhos da Disney e a hist\xF3ria das anima\xE7\xF5es!",
    items: [
      {
        id: "des_oswald",
        emoji: "\u{1F430}",
        pergunta: "Voc\xEA sabia que o primeiro personagem famoso de Walt Disney foi um coelho?",
        resposta: "Sim! Antes de criar o famoso camundongo Mickey Mouse em 1928, Walt Disney criou o coelho **Oswald, o Coelho Sortudo** (Oswald the Lucky Rabbit) em 1927! O coelhinho era um tremendo sucesso nos cinemas mudos. Mas por causa de um contrato confuso, Walt perdeu os direitos dele de repente. Triste, ele voltou de trem para casa e decidiu criar um novo personagem: o camundongo Mickey! \u{1F682}\u{1F31F}",
        detalhes: "Em 2006, quase 80 anos depois, a Disney finalmente comprou de volta os direitos hist\xF3ricos de Oswald, trazendo ele de volta 'para casa' de forma simb\xF3lica!",
        palavrasChave: ["oswald o coelho", "primeiro personagem disney", "oswald lucky rabbit", "coelho mickey", "origem do mickey", "oswald", "mickey", "walt disney", "disney"]
      },
      {
        id: "des_scooby_raca",
        emoji: "\u{1F436}",
        pergunta: "Qual \xE9 a ra\xE7a do Scooby-Doo e por que ele \xE9 atrapalhado?",
        resposta: "O Scooby-Doo \xE9 um lindo c\xE3o da ra\xE7a **Dogue Alem\xE3o**! Os cachorros dessa ra\xE7a real costumam ser gigantescos, fortes, s\xE9rios e muito elegantes. Mas para dar muito humor ao desenho, os desenhistas inventaram um Scooby-Doo totalmente o oposto: medroso, com pernas tortas, queixo mole e super comil\xE3o e atrapalhado! Uma fofura de cachorro! \u{1F355}\u{1F995}",
        detalhes: "Os criadores conversaram com um criador de c\xE3es da ra\xE7a para descobrir as caracter\xEDsticas f\xEDsicas ideais e, de prop\xF3sito, desenharam o Scooby com todas as caracter\xEDsticas 'proibidas' para uma exposi\xE7\xE3o de c\xE3es elegantes!",
        palavrasChave: ["raca scooby doo", "raca do scooby", "dogue alemao scooby", "scooby doo raca", "raca dogue alemao", "scooby", "scooby-doo", "scooby doo", "salsicha"]
      },
      {
        id: "des_simpsons_nomes",
        emoji: "\u{1F369}",
        pergunta: "Os personagens de Os Simpsons t\xEAm nomes de pessoas reais?",
        resposta: 'Sim! O criador da s\xE9rie, Matt Groening, resolveu brincar de forma afetuosa e deu aos personagens amarelos os nomes exatos de sua pr\xF3pria fam\xEDlia na vida real! Seus pais se chamavam Homer e Margaret (Marge), e ele tem irm\xE3s com nomes de Lisa e Maggie! Ele s\xF3 mudou o seu pr\xF3prio nome para "Bart", que \xE9 um anagrama para a palavra inglesa "brat" (que significa pirralho)! \u{1F369}\u{1F6F9}',
        detalhes: "A s\xE9rie est\xE1 no ar de forma ininterrupta desde 1989 e \xE9 a com\xE9dia de anima\xE7\xE3o h\xE1 mais tempo em exibi\xE7\xE3o no hor\xE1rio nobre da TV ocidental.",
        palavrasChave: ["simpsons nomes", "nomes simpsons", "familia de matt groening", "bart significado", "origem simpsons", "simpsons", "simpson", "homer", "bart"]
      },
      {
        id: "des_tom_jerry_voz",
        emoji: "\u{1F431}",
        pergunta: "Por que Tom e Jerry quase nunca falam?",
        resposta: "Os criadores William Hanna e Joseph Barbera achavam que a melhor com\xE9dia vinha das express\xF5es e da pantomima (m\xEDmica)! Eles criaram as aventuras sem di\xE1logos de fala, cheias de movimentos divertidos e m\xFAsicas incr\xEDveis orquestradas. Por causa disso, crian\xE7as e adultos de qualquer pa\xEDs do mundo inteiro conseguem entender gargalhar com o desenho, sem precisar de tradu\xE7\xE3o! \u{1F30F}\u{1F42D}",
        detalhes: "Com pouqu\xEDssimas exce\xE7\xF5es em epis\xF3dios raros, a \xFAnica voz recorrente de Tom s\xE3o seus gritos cl\xE1ssicos de dor quando cai em alguma armadilha do Jerry.",
        palavrasChave: ["tom e jerry falam", "porque tom e jerry nao falam", "tom jerry voz", "audios tom jerry", "dialogos tom jerry", "tom e jerry", "tom", "jerry"]
      }
    ]
  },
  {
    id: "gerais_teoria",
    title: "\u{1F3AD} Curiosidades Gerais & Teoria",
    icon: "\u{1F3AD}",
    description: "Espreite os bastidores de como as imagens ganham vida, movimento e cores!",
    items: [
      {
        id: "ger_ilusao",
        emoji: "\u{1F9E0}",
        pergunta: "Como o nosso c\xE9rebro v\xEA desenhos se mexendo?",
        resposta: "O movimento de qualquer desenho animado \xE9 um truque m\xE1gico para enganar nossos olhos! \u{1FA84} Uma anima\xE7\xE3o \xE9 composta de v\xE1rias imagens planas e est\xE1ticas que s\xE3o exibidas uma ap\xF3s a outra em grande velocidade (normalmente 24 desenhos para cada um segundo!). Nosso c\xE9rebro n\xE3o consegue notar a transi\xE7\xE3o e cria la ilus\xE3o maravilhosa de que tudo est\xE1 se movendo de verdade!",
        detalhes: "Esse fen\xF4meno foi batizado cientificamente como 'Persist\xEAncia da Vis\xE3o', o princ\xEDpio f\xEDsico que d\xE1 base para as tecnologias de cinema e telas digitais.",
        palavrasChave: ["como funciona animacao", "cerebro animacao", "truque de movimento", "persist\xEAncia da vis\xE3o", "quadros por segundo", "animacao", "anima\xE7\xE3o", "movimento", "ilus\xE3o"]
      },
      {
        id: "ger_quadro_mao",
        emoji: "\u270D\uFE0F",
        pergunta: "Como eram feitos os desenhos antigamente?",
        resposta: "Dava um trabalh\xE3o herc\xFAleo de paci\xEAncia! \u{1F62E} Antigamente, os artistas precisavam desenhar cada pequeno movimento \xE0 m\xE3o, folha por folha, pintar com tintas especiais de acetato transparente e depois tirar uma foto individual de cada folha de desenho! Para conseguir um \xFAnico minuto de filme animado, os desenhistas precisavam fazer mais de 1.400 desenhos coloridos \xE0 m\xE3o! Que dedica\xE7\xE3o! \u{1F3A8}\u{1F4DC}",
        detalhes: "Est\xFAdios de anima\xE7\xE3o cl\xE1ssicos possu\xEDam ex\xE9rcitos de desenhistas, organizados entre animadores principais, desenhistas de intercala\xE7\xE3o e pintores de celul\xF3ides.",
        palavrasChave: ["desenhos antigos", "como era feito antigamente", "quadro a quadro", "desenhar a mao", "acetato desenho", "desenhos", "antigamente", "desenho \xE0 m\xE3o"]
      },
      {
        id: "ger_cores_personagens",
        emoji: "\u{1F3A8}",
        pergunta: "Por que os super-her\xF3is usam sempre cores prim\xE1rias fortes?",
        resposta: "Isso \xE9 pura psicologia da arte! Os artistas usam cores expressivas e brilhantes de prop\xF3sito para o p\xFAblico identificar o personagem na hora! Her\xF3is alegres e fortes costumam usar cores prim\xE1rias vibrantes: Vermelho, Azul e Amarelo (como o Super-Homem, o Homem de Ferro e a Mulher-Maravilha). Vil\xF5es misteriosos s\xE3o pintados com cores lil\xE1s, roxas, verdes e pretas que d\xE3o um ar de mist\xE9rio! \u{1F9B8}\u200D\u2642\uFE0F\u{1F9B9}",
        detalhes: "O alto contraste facilita a leitura das cenas de a\xE7\xE3o r\xE1pidas quando impressas na folha mais barata ou exibidas em TVs pequenas de tubo.",
        palavrasChave: ["cores dos personagens", "cores herois", "porque super homem usa azul", "psicologia das cores herois", "cores vil\xF5es", "cores", "herois", "vilao", "vil\xF5es"]
      }
    ]
  }
];
function buscarCuriosidadePorKeyword(mensagem) {
  if (!mensagem) return null;
  const normMsg = mensagem.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[?!.,;:()'"\\\-\/]/g, " ").replace(/\s+/g, " ").trim();
  if (!normMsg) return null;
  const msgWords = normMsg.split(" ");
  for (const category of CURIOSIDADES_ACERVO) {
    for (const item of category.items) {
      const match = item.palavrasChave.some((kw) => {
        const normKw = kw.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[?!.,;:()'"\\\-\/]/g, " ").replace(/\s+/g, " ").trim();
        if (!normKw) return false;
        if (normMsg === normKw) return true;
        const paddedMsg = ` ${normMsg} `;
        const paddedKw = ` ${normKw} `;
        if (paddedMsg.includes(paddedKw)) return true;
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

// src/data/galeriaImagens.ts
var GALERIA_IMAGENS = {
  arte: {
    imagemUrl: "https://i.imgur.com/S65idlX.jpeg",
    titulo: "O Violeiro",
    credito: "Almeida J\xFAnior"
  },
  danca: {
    imagemUrl: "https://i.imgur.com/3LGoXuZ.jpeg",
    titulo: "A Dan\xE7a",
    credito: "Henri Matisse"
  },
  poema: {
    imagemUrl: "https://i.imgur.com/wvQLiom.jpeg",
    titulo: "Retrato de Cec\xEDlia Meireles",
    credito: "Cec\xEDlia Meireles"
  },
  desenho: {
    imagemUrl: "https://i.imgur.com/qKt1FWr.jpeg",
    titulo: "Esbo\xE7o da \xDAltima Ceia",
    credito: "Leonardo da Vinci"
  },
  literatura: {
    imagemUrl: "https://i.imgur.com/JoFITap.jpeg",
    titulo: "Retrato do Acervo Liter\xE1rio Cl\xE1ssico",
    credito: "Acervo de Literatura Cl\xE1ssica"
  },
  musica: {
    imagemUrl: "https://i.imgur.com/8tSYMB6.jpeg",
    titulo: "Cl\xE1ssico Hist\xF3rico de Partituras e Instrumentos",
    credito: "Acervo de M\xFAsica Cl\xE1ssica"
  },
  pintura: {
    imagemUrl: "https://i.imgur.com/itQdr8H.jpeg",
    titulo: "No Bosque de Giverny (In the Woods at Giverny)",
    credito: "Claude Monet"
  },
  teatro: {
    imagemUrl: "https://i.imgur.com/JHzxAbj.jpg",
    titulo: "Teatro Municipal de S\xE3o Paulo",
    credito: "Teatro Municipal de S\xE3o Paulo"
  },
  teatro_historia: {
    imagemUrl: "https://i.imgur.com/3di4jIS.jpeg",
    titulo: "Hist\xF3ria do Teatro",
    credito: "Wikimedia Commons"
  },
  piada: [
    {
      imagemUrl: "https://i.imgur.com/D0qsROZ.jpeg",
      titulo: "As Quatro Esta\xE7\xF5es (Le Saisons)",
      credito: "Giuseppe Arcimboldo"
    },
    {
      imagemUrl: "https://i.imgur.com/4zBo1Q2.jpeg",
      titulo: "M\xE3os Desenhando (Drawing Hands)",
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
    titulo: "Dan\xE7a dos Caboclinhos",
    credito: "Wikimedia Commons"
  },
  tango: {
    imagemUrl: "https://i.imgur.com/S2eEbmj.jpeg",
    titulo: "Dan\xE7ando Tango",
    credito: "Wikimedia Commons"
  },
  salsa: {
    imagemUrl: "https://i.imgur.com/KNsG8wH.jpeg",
    titulo: "Dan\xE7ando Salsa",
    credito: "Wikimedia Commons"
  },
  valsa: {
    imagemUrl: "https://i.imgur.com/6hxKnNJ.jpeg",
    titulo: "Dan\xE7ando Valsa",
    credito: "Wikimedia Commons"
  },
  rock: {
    imagemUrl: "https://i.imgur.com/7SdA0k3.jpeg",
    titulo: "Alegria do Rock",
    credito: "Wikimedia Commons"
  },
  jongo: {
    imagemUrl: "https://i.imgur.com/MMPXy3l.jpeg",
    titulo: "Dan\xE7ando Jongo",
    credito: "Wikimedia Commons"
  },
  congada: {
    imagemUrl: "https://i.imgur.com/SZqtIoj.jpeg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons"
  },
  coco_pernambucano: {
    imagemUrl: "https://i.imgur.com/7OAUdNp.jpeg",
    titulo: "Dan\xE7ando o Coco Pernambucano",
    credito: "Wikimedia Commons"
  },
  ciranda: {
    imagemUrl: "https://i.imgur.com/zIlLJGr.png",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons"
  },
  hip_hop: {
    imagemUrl: "https://i.imgur.com/B58RbYS.jpeg",
    titulo: "Dan\xE7ando Hip Hop",
    credito: "Wikimedia Commons"
  },
  funk: {
    imagemUrl: "https://i.imgur.com/pTTr7cm.jpeg",
    titulo: "Dan\xE7a Funk",
    credito: "Wikimedia Commons"
  },
  frevo: {
    imagemUrl: "https://i.imgur.com/ZvsUU43.png",
    titulo: "Dan\xE7ando Frevo com Sombrinha",
    credito: "Wikimedia Commons"
  },
  fandango: {
    imagemUrl: "https://i.imgur.com/jFjNeOU.jpeg",
    titulo: "Dan\xE7ando Fandango",
    credito: "Wikimedia Commons"
  },
  danca_de_salao: {
    imagemUrl: "https://i.imgur.com/hNTTLUl.jpeg",
    titulo: "Dan\xE7a de Sal\xE3o",
    credito: "Wikimedia Commons"
  },
  danca_contemporanea: {
    imagemUrl: "https://i.imgur.com/viD0O3q.jpeg",
    titulo: "Dan\xE7a Contempor\xE2nea",
    credito: "Wikimedia Commons"
  },
  danca_classica: {
    imagemUrl: "https://i.imgur.com/e5uLrzE.jpeg",
    titulo: "Dan\xE7a Cl\xE1ssica",
    credito: "Wikimedia Commons"
  },
  cavalo_marinho: {
    imagemUrl: "https://i.imgur.com/cVro96g.jpeg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons"
  },
  catira: {
    imagemUrl: "https://i.imgur.com/M6wTWYU.jpeg",
    titulo: "Dan\xE7ando Catira",
    credito: "Wikimedia Commons"
  },
  carimbo: {
    imagemUrl: "https://i.imgur.com/rjujUdi.jpeg",
    titulo: "Dan\xE7ando Carimb\xF3",
    credito: "Wikimedia Commons"
  },
  bale: {
    imagemUrl: "https://i.imgur.com/pp0VUB5.jpeg",
    titulo: "Dan\xE7ando Bal\xE9",
    credito: "Wikimedia Commons"
  },
  arte_indigena: {
    imagemUrl: "https://i.imgur.com/mxBlvdv.jpeg",
    titulo: "Arte Ind\xEDgena Brasileira",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://i.imgur.com/TIWhZhH.jpeg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons"
  },
  danca_brasil: {
    imagemUrl: "https://i.imgur.com/CVHkdCZ.jpg",
    titulo: "Dan\xE7a Tradicional no Brasil",
    credito: "Wikimedia Commons"
  },
  desenho_brasil: {
    imagemUrl: "https://i.imgur.com/KSd4nHC.jpg",
    titulo: "Desenho na Hist\xF3ria do Brasil",
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
    titulo: "Defini\xE7\xE3o de Cor",
    credito: "Elementos da Linguagem Visual"
  },
  espaco: {
    imagemUrl: "https://i.imgur.com/6VvC7Yl.jpeg",
    titulo: "Defini\xE7\xE3o de Espa\xE7o",
    credito: "Elementos da Linguagem Visual"
  },
  forma: {
    imagemUrl: "https://i.imgur.com/EFluxXS.jpeg",
    titulo: "Defini\xE7\xE3o de Forma",
    credito: "Elementos da Linguagem Visual"
  },
  ponto: {
    imagemUrl: "https://i.imgur.com/6VAqeIv.jpeg",
    titulo: "Defini\xE7\xE3o de Ponto",
    credito: "Elementos da Linguagem Visual"
  },
  textura: {
    imagemUrl: "https://i.imgur.com/uxnJNbl.jpeg",
    titulo: "Defini\xE7\xE3o de Textura",
    credito: "Elementos da Linguagem Visual"
  },
  luz: {
    imagemUrl: "https://i.imgur.com/IkFuERR.jpeg",
    titulo: "Defini\xE7\xE3o de Luz",
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
      titulo: "Express\xE3o de Alegria",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/ExHb40M.jpeg",
      titulo: "Express\xE3o de Alegria",
      credito: "Wikimedia Commons"
    }
  ],
  angustia: [
    {
      imagemUrl: "https://i.imgur.com/MhBc6cq.jpeg",
      titulo: "Express\xE3o de Ang\xFAstia",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/J0iqMPv.jpeg",
      titulo: "Express\xE3o de Ang\xFAstia",
      credito: "Wikimedia Commons"
    }
  ],
  tristeza: [
    {
      imagemUrl: "https://i.imgur.com/nniw2ev.jpeg",
      titulo: "Express\xE3o de Tristeza",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Express\xE3o de Melancolia",
      credito: "Wikimedia Commons"
    }
  ],
  raiva: [
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Express\xE3o de Raiva",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/KYuqxFk.jpeg",
      titulo: "Express\xE3o de Raiva",
      credito: "Wikimedia Commons"
    }
  ],
  tedio: [
    {
      imagemUrl: "https://i.imgur.com/oVUvDT8.jpeg",
      titulo: "Express\xE3o de T\xE9dio",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/pOiLRAd.jpeg",
      titulo: "Express\xE3o de T\xE9dio",
      credito: "Wikimedia Commons"
    }
  ],
  modernismo: {
    imagemUrl: "https://i.imgur.com/M7lSaXM.jpeg",
    titulo: "Abaporu",
    credito: "Tarsila do Amaral (Wikip\xE9dia)"
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
    titulo: "Arte Crist\xE3",
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
    titulo: "Arte Eg\xEDpcia",
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
    titulo: "Express\xE3o e Sentimento Expressionista",
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
    titulo: "Arte Isl\xE2mica",
    credito: "Wikimedia Commons"
  },
  arte_pre_colombiana: {
    imagemUrl: "https://i.imgur.com/53fFOzu.jpeg",
    titulo: "Arte Pr\xE9-Colombiana",
    credito: "Wikimedia Commons"
  },
  arte_digital: {
    imagemUrl: "https://i.imgur.com/9fFJxDf.jpeg",
    titulo: "Arte Digital",
    credito: "Wikimedia Commons"
  },
  arte_ia: {
    imagemUrl: "https://i.imgur.com/PGbFKrS.jpeg",
    titulo: "Arte com Intelig\xEAncia Artificial",
    credito: "Wikimedia Commons"
  },
  arte_naif: {
    imagemUrl: "https://i.imgur.com/qbUzNQb.jpeg",
    titulo: "O Sonho",
    credito: "Henri Rousseau"
  }
};

// src/utils/conversationalEngine.ts
function normalizarTexto(txt) {
  if (!txt) return "";
  return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[?!.,;:()'"\\\-\/]/g, " ").replace(/\s+/g, " ").trim();
}
function testarPalavraChave(msgNormalizada, kwNormalizada) {
  if (!msgNormalizada || !kwNormalizada) return false;
  const msg = msgNormalizada.trim();
  const kw = kwNormalizada.trim();
  if (msg === kw) return true;
  const paddedMsg = ` ${msg} `;
  const paddedKw = ` ${kw} `;
  if (paddedMsg.includes(paddedKw)) return true;
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
var CONVERSATIONAL_INTENTS = [
  {
    keywords: ["oi", "ola", "bom dia", "boa tarde", "boa noite", "ola candinho", "oi candinho", "saudacoes", "hey"],
    reply: "Ol\xE1! Sou o Candinho, seu amigo artista. O que vamos descobrir hoje? \u{1F3A8} Podemos falar sobre pintores famosos, dan\xE7as brasileiras, cores e conceitos de arte! \xC9 s\xF3 perguntar."
  },
  {
    keywords: ["quem e voce", "quem e o candinho", "o que voce faz", "quem e candinho", "seu nome", "fale de voce"],
    reply: "Eu sou o Candinho! Fui inspirado no grande pintor brasileiro C\xE2ndido Portinari, que amava retratar a inf\xE2ncia, o povo e as cores de nossa terra. Estou aqui para ser seu guia pelo maravilhoso mundo das artes! \u{1F3A8}\u2728"
  },
  {
    keywords: ["ajuda", "socorro", "o que perguntar", "como usar", "instrucoes", "menu", "temas", "opcoes"],
    reply: "\xC9 super f\xE1cil conversar comigo! Voc\xEA pode digitar qualquer assunto de arte de sua prefer\xEAncia. Veja alguns exemplos:\n\n\u{1FA70} **Dan\xE7as & Ritmos:** Bal\xE9, Hip Hop, Frevo, Ciranda, Carimb\xF3, Funk, Maracatu...\n\n\u{1F3A8} **Conceitos de Arte:** Linhas, Pontos, Formas, Cores Quentes/Frias, Luz e Sombra, Perspectiva, Pixel Art...\n\n\u{1F981} **Imagina\xE7\xE3o & Criatividade:** Animais m\xE1gicos, desenhos f\xE1ceis, super-her\xF3is, cores novas!\n\nSe quiser ver um desenho ou obra de arte, digite algo como: 'Me mostre uma imagem de Portinari'! \u{1F5BC}\uFE0F"
  },
  {
    keywords: ["obrigado", "obrigada", "valeu", "agradecido", "legal", "gostei", "incrivel", "maravilhoso", "muito bom"],
    reply: "Pinceladas de alegria para voc\xEA! Que bom que gostou. A arte nos ajuda a ver o mundo de um jeito muito mais colorido! \u{1F3A8}\u{1F308} Se tiver mais d\xFAvidas, estou sempre por aqui prontinho para pincelar ideias."
  },
  {
    keywords: ["tchau", "adeus", "ate mais", "fui", "abraco", "ate logo", "beijo"],
    reply: "At\xE9 logo, meu amigo artista! N\xE3o se esque\xE7a de continuar colorindo sua imagina\xE7\xE3o e espalhando arte por onde passar! \u{1F3A8}\u{1F44B}"
  }
];
function getRandomElement(arr) {
  if (!arr || arr.length === 0) return "";
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
function obterImagemDaGaleria(key) {
  if (!key) return null;
  let targetKey = key.toLowerCase().trim();
  if (targetKey.startsWith("danca_")) {
    const semDanca = targetKey.substring(6);
    if (GALERIA_IMAGENS[semDanca]) {
      targetKey = semDanca;
    } else if (semDanca === "salao") {
      targetKey = "danca_de_salao";
    } else if (semDanca === "coco_pernambucano") {
      targetKey = "coco_pernambucano";
    }
  }
  if (GALERIA_IMAGENS[targetKey]) {
    const item2 = GALERIA_IMAGENS[targetKey];
    if (Array.isArray(item2)) {
      const idx = Math.floor(Math.random() * item2.length);
      return item2[idx];
    }
    return item2;
  }
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
function construirRespostaLocal(item, mensagemOriginal) {
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
  if (pInicio) {
    resposta += pInicio;
  }
  if (pAcolhimento) {
    resposta += " " + pAcolhimento;
  }
  resposta += "\n\n";
  const querAprofundar = msgNorm.includes("aprofund") || msgNorm.includes("mais sobre") || msgNorm.includes("detalhe") || msgNorm.includes("historia") || msgNorm.includes("fale mais") || msgNorm.includes("explicar melhor");
  if (querAprofundar && pExplicacaoAprofundada) {
    resposta += pExplicacaoAprofundada;
  } else if (pExplicacaoCurta) {
    resposta += pExplicacaoCurta;
    if (pExplicacaoAprofundada && !querAprofundar && Math.random() > 0.4) {
      resposta += " " + pExplicacaoAprofundada;
    }
  }
  if (pCuriosidade) {
    resposta += `

\u{1F4A1} **Curiosidade Fant\xE1stica:** ${pCuriosidade}`;
  }
  const pediuAtividade = msgNorm.includes("atividade") || msgNorm.includes("desafio") || msgNorm.includes("tarefa") || msgNorm.includes("brincadeira") || msgNorm.includes("fazer") || msgNorm.includes("desenha");
  if (pAtividade && (pediuAtividade || Math.random() > 0.3)) {
    resposta += `

\u{1F3A8} **Desafio do Candinho:** ${pAtividade}`;
  }
  if (pInteracao) {
    resposta += `

\u{1F4AC} ${pInteracao}`;
  }
  if (pFinal) {
    resposta += " " + pFinal;
  }
  return resposta.trim();
}
function sugerirTemasAlternativos() {
  const categorias = {
    pintores: {
      titulo: "Pintores Brasileiros Famosos \u{1F1E7}\u{1F1F7}",
      itens: ["C\xE2ndido Portinari \u{1F3A8}", "Tarsila do Amaral \u{1F338}"]
    },
    dancas: {
      titulo: "Dan\xE7as e Ritmos Nacionais \u{1F483}\u{1FA70}",
      itens: ["Bal\xE9", "Hip Hop", "Frevo", "Ciranda", "Carimb\xF3", "Funk", "Maracatu", "Capoeira", "Caboclinho"]
    },
    artes_visuais: {
      titulo: "Conceitos de Artes Visuais \u{1F4D0}",
      itens: ["Linha e Ponto", "Formas", "Espa\xE7o", "Textura", "Cores Quentes", "Cores Frias", "Cores Prim\xE1rias", "Cores Secund\xE1rias", "Luz e Sombra", "Perspectiva"]
    },
    artes_avancadas: {
      titulo: "T\xE9cnicas Modernas & M\xEDdia \u{1F4F8}",
      itens: ["Arte Abstrata", "Arte Figurativa", "Grafite", "Muralismo", "Fotografia", "Anima\xE7\xE3o", "Stop Motion", "Pixel Art", "Arte Digital", "Quadrinhos (HQ)"]
    },
    imaginacao: {
      titulo: "Criatividade & Imagina\xE7\xE3o \u{1F981}\u{1F984}",
      itens: ["Animais M\xE1gicos", "Desenho F\xE1cil", "Super-Her\xF3is", "Cores Malucas", "Desenhar Animais"]
    },
    diversao: {
      titulo: "Divers\xE3o & Mist\xE9rios da Arte \u{1F3AD}\u{1F4A1}",
      itens: ["Me conta uma piada \u{1F3AD}", "Curiosidades sobre Arte \u{1F4A1}", "Voc\xEA sabia? \u2728", "Ideia brilhante \u{1F31F}"]
    }
  };
  let txt = "Uau, que pergunta criativa! Ainda estou misturando e carregando as cores na minha paleta e n\xE3o encontrei exatamente sobre esse tema... \u{1F3A8}\u{1F468}\u200D\u{1F3A8}\n\nMas sabia que eu adoro conversar sobre esses outros assuntos? Escolha uma destas tintas fant\xE1sticas do meu acervo para descobrirmos juntos:\n\n";
  for (const key in categorias) {
    const cat = categorias[key];
    txt += `\u2728 **${cat.titulo}:**
`;
    const shuffled = [...cat.itens].sort(() => 0.5 - Math.random()).slice(0, 4);
    txt += `  \u2022 _${shuffled.join(", ")}_

`;
  }
  txt += "\u{1F4AC} Digite o nome de qualquer uma dessas artes e vamos come\xE7ar nossa aventura maravilhosa! \u{1F680}";
  return txt;
}
var PIADAS_CANDINHO = [
  "Por que o l\xE1pis foi para a escola? Para aprender a desenhar melhor!",
  "O que o pincel disse para a tinta? Vamos colorir o mundo!",
  "Por que o artista ficou feliz? Porque teve uma ideia brilhante!",
  "Qual \xE9 o animal que gosta de pintar? O gato-artista!",
  "Por que a folha de papel estava animada? Porque ia virar uma obra de arte!",
  "O que o desenho falou para o artista? Obrigado por me dar vida!",
  "Por que o quadro foi ao m\xE9dico? Porque estava sem cor!",
  "O que a tinta disse para o pincel? Vamos trabalhar juntos!",
  "Qual \xE9 a dan\xE7a favorita do l\xE1pis? O rabisco!",
  "Por que o artista levou uma escada? Para alcan\xE7ar novas ideias!",
  "O que o caderno disse? Estou cheio de ideias!",
  "Por que o l\xE1pis n\xE3o briga? Porque ele prefere desenhar a paz!",
  "O que o pincel faz no fim de semana? Pinta e borda!",
  "Por que a tinta ficou famosa? Porque era muito colorida!",
  "Qual \xE9 o superpoder do artista? Transformar ideias em desenhos!",
  "Por que o desenho foi para a festa? Para se expressar!",
  "O que o artista come? Ideias criativas!",
  "Por que o papel n\xE3o reclama? Porque ele aceita tudo!",
  "Qual \xE9 o instrumento do pintor? O pincel!",
  "Por que o artista gosta de cores? Porque elas contam hist\xF3rias!",
  "O que o l\xE1pis falou? Vamos criar algo novo!",
  "Por que o desenho ficou bonito? Porque foi feito com carinho!",
  "O que o pincel disse? Hoje \xE9 dia de arte!",
  "Por que o artista sorri? Porque ama criar!",
  "Qual \xE9 a mat\xE9ria favorita do artista? Artes!",
  "O que a cor disse? Vamos alegrar tudo!",
  "Por que o artista n\xE3o desiste? Porque sempre tenta de novo!",
  "O que o quadro disse? Eu sou uma obra-prima!",
  "Por que o l\xE1pis \xE9 amigo de todos? Porque ele ajuda a criar!",
  "Qual \xE9 o segredo da arte? Criar com o cora\xE7\xE3o!"
];
var CURIOSIDADES_DESENHO = [
  "Antes de existirem cadernos, as pessoas j\xE1 pintavam nas cavernas, como nas pinturas de Caverna de Altamira, usando terra e carv\xE3o. \u{1F3A8}",
  "Leonardo da Vinci desenhava m\xE1quinas voadoras s\xE9culos antes de o avi\xE3o existir. \u2708\uFE0F",
  "Vincent van Gogh gostava de pintar com cores fortes para mostrar sentimentos. Pintou c\xE9us cheios de estrelas e girass\xF3is brilhantes. \u{1F30C}",
  "Michelangelo esculpiu e pintou obras gigantes. Acreditava que as figuras j\xE1 estavam escondidas dentro da pedra. \u{1F5FF}",
  "Raffaello Sanzio pintava pessoas calmas e harmoniosas. Suas obras parecem organizadas e tranquilas. \u{1F47C}",
  "Leonardo da Vinci amava desenhar, pintar e inventar. Observava tudo com muita curiosidade. \u{1F50D}",
  "Romero Britto usa muitas cores alegres e formas simples. Suas obras parecem festas desenhadas. \u{1F388}",
  "Djanira da Motta e Silva pintava o dia a dia das pessoas, o trabalho e as tradi\xE7\xF5es do Brasil. \u{1F1E7}\u{1F1F7}",
  "Frida Kahlo pintava a si mesma para contar sua hist\xF3ria. Mostrava sentimentos com coragem. \u{1F33A}",
  "Salvador Dal\xED criava imagens que parecem sonhos estranhos e divertidos. \u23F0",
  "Caravaggio gostava de contrastes fortes entre luz e sombra para contar hist\xF3rias. \u{1F526}",
  "Tarsila do Amaral pintou o Brasil com cores vivas e formas diferentes, inspiradas na imagina\xE7\xE3o. \u{1F3A8}",
  "Ivan Cruz retratava crian\xE7as brincando de amarelinha, pipa e roda. \u{1FA81}",
  "Candido Portinari mostrou em suas pinturas a vida das pessoas simples e trabalhadoras. \u{1F468}\u200D\u{1F33E}",
  "Henri Matisse amava cores alegres e recortes de papel que viravam arte. \u2702\uFE0F",
  "Ren\xE9 Magritte gostava de fazer a gente pensar: ser\xE1 que tudo \xE9 o que parece? \u{1F9D0}",
  "Claude Monet pintava a natureza observando a luz do sol em diferentes momentos. \u2600\uFE0F",
  "Georges Seurat criava imagens usando muitos pontinhos coloridos. \u{1F535}",
  "Edgar Degas adorava desenhar bailarinas em movimento. \u{1FA70}",
  "Edvard Munch usava a pintura para mostrar emo\xE7\xF5es fortes. \u{1F631}",
  "Rembrandt pintava rostos cheios de express\xE3o e emo\xE7\xE3o. \u{1F3AD}",
  "H\xE9lio Oiticica criava obras para as pessoas entrarem, tocarem e participarem. \u{1F57A}",
  "Di Cavalcanti mostrava festas, m\xFAsicas e pessoas do Brasil. \u{1F389}",
  "Jos\xE9 Ferraz de Almeida J\xFAnior pintava a vida no interior, com cenas simples do cotidiano. \u{1F33E}",
  "Georgina de Albuquerque retratava scenes hist\xF3ricas e momentos importantes do Brasil. \u{1F4DC}",
  "Pedro Am\xE9rico criou grandes pinturas que contam a hist\xF3ria do pa\xEDs. \u2694\uFE0F",
  "Lasar Segall falava sobre sentimentos, viagens e desafios das pessoas. \u{1F30D}",
  "Alfredo Volpi ficou famoso por pintar bandeirinhas coloridas. \u{1F3E0}",
  "Beatriz Milhazes mistura cores, flores e formas inspiradas na cultura brasileira. \u{1F33C}"
];
var CURIOSIDADES_ARTE_GERAL = [
  "O grafite transforma muros em galerias ao ar livre. \u{1F9F1}",
  "Banksy cria arte urbana misteriosa e cheia de mensagens. \u{1F575}\uFE0F",
  "Alguns artistas pintam com os p\xE9s ou com a boca, mostrando que h\xE1 muitas formas de criar. \u{1F9B6}",
  "Museus guardam obras antigas, como o Museu do Louvre. \u{1F3DB}\uFE0F",
  "No Brasil, o MASP exibe obras suspensas em suportes transparentes. \u{1F5BC}\uFE0F",
  "A arte pode misturar tecnologia e luz. \u{1F4A1}",
  "Quadrinhos tamb\xE9m s\xE3o arte, combinando desenho e narrativa. \u{1F4DA}",
  "Filmes misturam teatro, m\xFAsica, figurino e artes visuais. \u{1F3AC}",
  "A arte ajuda a contar a hist\xF3ria de um povo. \u{1F4D6}",
  "Crian\xE7as tamb\xE9m podem expor seus trabalhos em mostras escolares. \u{1F3EB}",
  "Muitos artistas erravam muito antes de acertar. \u274C",
  "A pr\xE1tica \xE9 mais importante que o talento. \u{1F4AA}",
  "Cada cultura tem sua pr\xF3pria forma de arte. \u{1F30D}",
  "A arte pode denunciar injusti\xE7as. \u270A",
  "A arte pode celebrar festas e tradi\xE7\xF5es. \u{1F389}",
  "Existem orquestras formadas s\xF3 por crian\xE7as. \u{1F9D2}",
  "O corpo \xE9 instrumento, pincel e palco ao mesmo tempo. \u{1F9D8}",
  "Imagina\xE7\xE3o \xE9 um m\xFAsculo que cresce quando usamos. \u{1F9E0}",
  "Toda obra come\xE7a com uma ideia pequena. \u{1F4A1}",
  "Quando uma crian\xE7a cria arte, ela n\xE3o copia o mundo, ela recria. \u2728"
];
var CURIOSIDADES_DANCA = [
  "O bal\xE9 cl\xE1ssico nasceu nas cortes da Europa e ficou famoso com companhias como o Bolshoi Ballet. \u{1FA70}",
  "A bailarina brasileira Ana Botafogo levou o bal\xE9 brasileiro aos palcos internacionais. \u{1F31F}",
  "A dan\xE7a moderna surgiu quando artistas quiseram movimentos mais livres, como prop\xF4s Martha Graham. \u{1F483}",
  "Muitas dan\xE7as brasileiras nasceram das culturas africanas, ind\xEDgenas e europeias misturadas. \u{1F1E7}\u{1F1F7}",
  "Em espet\xE1culos como 'O Lago dos Cisnes', o corpo conta a hist\xF3ria sem precisar falar. \u{1F9A2}"
];
var CURIOSIDADES_TEATRO = [
  "O teatro come\xE7ou na Gr\xE9cia Antiga, h\xE1 mais de 2.500 anos, em festas dedicadas ao deus Dion\xEDsio. \u{1F3AD}",
  "Os gregos criaram dois grandes estilos: Trag\xE9dia (hist\xF3rias s\xE9rias) e Com\xE9dia (hist\xF3rias engra\xE7adas).",
  "O Teatro de Epidauro, na Gr\xE9cia, existe at\xE9 hoje e tem uma ac\xFAstica incr\xEDvel! Voc\xEA consegue ouvir um sussurro no palco l\xE1 do \xFAltimo degrau.",
  "No teatro, o palco pode virar floresta, castelo, escola ou qualquer lugar que a imagina\xE7\xE3o quiser. \u{1F333}",
  "Teatro de sombras \xE9 uma forma antiga de contar hist\xF3rias usando silhuetas projetadas em uma tela iluminada."
];
var CURIOSIDADES_CANDINHO = [
  "A pintura Mona Lisa \xE9 famosa pelo sorriso misterioso. \u{1F642}",
  "Van Gogh vendeu apenas um quadro enquanto estava vivo. \u{1F33B}",
  "O Abaporu \xE9 uma das obras mais importantes da arte brasileira. \u{1F3A8}",
  "Os primeiros desenhos da hist\xF3ria foram feitos em cavernas. \u{1F6D6}",
  "Alguns artistas pintam usando os dedos, n\xE3o pinc\xE9is. \u{1F590}\uFE0F",
  "O grafite \xE9 uma forma de arte urbana muito importante. \u{1F9F1}",
  "Pablo Picasso sabia desenhar muito bem desde crian\xE7a. \u{1F476}",
  "Existem esculturas feitas de gelo e at\xE9 de areia. \u{1F9CA}",
  "As cores podem mudar o nosso humor. \u{1F308}",
  "A arte pode ser feita com qualquer material, at\xE9 lixo reciclado. \u267B\uFE0F",
  "O teatro come\xE7ou h\xE1 milhares de anos na Gr\xE9cia antiga. \u{1F3AD}",
  "Algumas dan\xE7as contam hist\xF3rias sem usar palavras. \u{1FA70}",
  "O samba \xE9 considerado patrim\xF4nio cultural do Brasil. \u{1F1E7}\u{1F1F7}",
  "Os artistas ind\xEDgenas usam a natureza como inspira\xE7\xE3o. \u{1F33E}",
  "Existem m\xFAsicas feitas s\xF3 com sons do corpo. \u{1F941}",
  "A arte pode ser encontrada nas ruas, museus e at\xE9 na natureza. \u{1F3DB}\uFE0F",
  "Alguns quadros famosos valem milh\xF5es de reais. \u{1F4B0}",
  "A arte ajuda as pessoas a expressar sentimentos. \u2764\uFE0F",
  "O cinema tamb\xE9m \xE9 considerado uma forma de arte. \u{1F3AC}",
  "Existem pinturas feitas em paredes gigantes chamadas murais. \u{1F9F1}",
  "O bal\xE9 surgiu h\xE1 muitos anos na Europa. \u{1FA70}",
  "O maracatu mistura m\xFAsica, dan\xE7a e tradi\xE7\xE3o. \u{1F941}",
  "O desenho \xE9 uma das formas mais antigas de arte. \u270F\uFE0F",
  "Alguns artistas criam obras com luz e sombra. \u2600\uFE0F",
  "A fotografia tamb\xE9m \xE9 uma forma de arte. \u{1F4F7}",
  "A arte pode contar hist\xF3rias sem usar palavras. \u{1F92B}",
  "O corpo humano pode ser usado como forma de arte. \u{1F9D8}",
  "Existem museus gigantes em v\xE1rias partes do mundo. \u{1F3DB}\uFE0F",
  "A arte pode ensinar sobre hist\xF3ria e cultura. \u{1F4DA}",
  "Todo mundo pode ser artista, basta criar! \u2728",
  ...CURIOSIDADES_DESENHO,
  ...CURIOSIDADES_ARTE_GERAL,
  ...CURIOSIDADES_DANCA,
  ...CURIOSIDADES_TEATRO
];
var PORTINARI_INTENTS = [
  {
    id: "portinari_apresentacao",
    keywords: ["candinho", "portinari", "candido portinari", "quem foi candido", "pintor brasileiro", "artista brasileiro", "por que o nome candinho", "por que se chama candinho", "porque se chama candinho", "porque candinho", "por que candinho", "origem do nome", "se chama candinho"],
    reply: "Oi! Sou inspirado no Candido Portinari, um pintor brasileiro muito famoso! \u{1F1E7}\u{1F1F7} Ele nasceu em Brodowski, interior de S\xE3o Paulo, e pintou mais de 5 mil quadros! Adorava pintar crian\xE7as brincando, caf\xE9 e a vida no campo. Sabia que o apelido dele era Candinho igual a mim? Que legal! \u{1F3A8}"
  },
  {
    id: "infancia_portinari",
    keywords: ["infancia candido", "candinho crianca", "portinari quando crianca", "como era portinari crianca", "infancia portinari", "quando crianca", "portinari como crianca", "portinari crianca"],
    reply: "O Candinho de verdade adorava jogar bola, soltar pipa e brincar no interior! \u{1F33E} Desde pequeno j\xE1 desenhava no ch\xE3o de terra e ajudava os pais na planta\xE7\xE3o de caf\xE9. E voc\xEA, do que mais gosta de brincar?"
  },
  {
    id: "obras_portinari",
    keywords: ["obras portinari", "quadros portinari", "pinturas portinari", "portinari obras famosas", "obras de portinari", "quadros de portinari", "pinturas de portinari", "paineis da guerra e da paz", "guerra e paz", "meninos soltando pipa", "retirantes"],
    reply: "Portinari pintou muitas obras lindas! \u2728 As mais famosas s\xE3o: 'O Caf\xE9' \u2615, 'Os Retirantes' \u{1F6B6}, 'Meninos Soltando Pipa' \u{1FA81} e os pain\xE9is 'Guerra e Paz' \u{1F54A}\uFE0F que ficam l\xE1 na sede da ONU! \xC9 de arrepiar de t\xE3o lindo! Qual dessas obras voc\xEA gostaria de conhecer primeiro?"
  }
];
var atividadesTriste = [
  "Ah, meu amigo, sinto muito que voc\xEA esteja se sentindo triste hoje. \u{1F49B} \xC0s vezes, o nosso cora\xE7\xE3o fica cinzento como um c\xE9u nublado, e tudo bem se sentir assim. Quer me contar o que aconteceu? Estou aqui prontinho para te ouvir com todo carinho do mundo.",
  "Estou te enviando um abra\xE7o de urso bem apertado daqui! \u{1F9F8} Sabia que pintar e desenhar s\xE3o \xF3timos amigos para as horas tristes? O papel aceita qualquer cor, tra\xE7o ou sentimento. Voc\xEA prefere desabafar e me contar o que te deixou triste ou prefere que eu te ensine um desenho bem lindo para distrair a mente?",
  "Ficar tristinho faz parte da nossa paleta de emo\xE7\xF5es, e n\xE3o h\xE1 problema nenhum nisso. \u2728 Quer falar sobre o que aconteceu? Se preferir n\xE3o falar, tudo bem tamb\xE9m! Podemos apenas jogar um jogo de adivinhar cores ou fazer um desenho calmo juntos. O que voc\xEA acha?",
  "Ah, meu amigo. Quando eu fico tristinho, gosto de pegar cores quentes e desenhar um grande sol brilhante! Sabia que Van Gogh pintava girass\xF3is amarelos bem luminosos para alegrar o cora\xE7\xE3o dele? Que tal fazermos um desenho livre usando as suas cores alegres favoritas? Conta para mim se voc\xEA quer desenhar algo bem quentinho hoje! \u{1F33B}\u{1F506}"
];
var atividadesTedio = [
  "T\xE9dio? Ah, que oportunidade fant\xE1stica para soltar a imagina\xE7\xE3o! Sabia que quando os artists est\xE3o sem saber o que fazer, eles espalham rabiscos na folha e tentam achar formas neles? Que tal rabiscarmos uma teia maluca e pintarmos cada pedacinho com uma cor prim\xE1ria? \u{1F3A8}\u{1F929}",
  "Sai pra l\xE1, t\xE9dio! Vamos brincar de desenhar com os olhos vendados ou com a outra m\xE3o? \xC9 super engra\xE7ado! Tente desenhar um gato-marinho com a m\xE3o que voc\xEA n\xE3o costuma escrever e me conte se ficou divertido! \u{1F408}\u200D\u2B1B\u{1F36D}",
  "Sabia que voc\xEA pode fazer um brinquedo com rolo de papel higi\xEAnico ou papel\xE3o? Voc\xEA pode pintar e criar um bin\xF3culo de explorador de arte! O que voc\xEA quer explorar no quarto com o seu bin\xF3culo m\xE1gico hoje? \u{1F52D}\u2728"
];
var atividadesRaiva = [
  "Uau, a raiva \xE9 como uma tinta vermelha muito forte e quente que derrama em cima da nossa paleta! \u{1F621} \xC9 normal sentir raiva \xE0s vezes, mas n\xE3o \xE9 bom guardar ela todinha no peito. Quer desabafar e me contar o que aconteceu para te deixar bravo assim?",
  "Respire bem fundo comigo... como se f\xF4ssemos encher o bal\xE3o mais lindo do mundo! \u{1F388} Quando a raiva vem, ela quer que a gente aja por impulso. Quer falar sobre o que te deixou irritado? Se preferir, podemos pegar um papel e rabiscar com muita for\xE7a para soltar essa energia toda!"
];
var atividadesAngustia = [
  "Ah, meu amigo, sentir um aperto no peito \xE9 bem chato, n\xE9? \xC9 como se o nosso desenho estivesse todo rabiscado. Quer conversar sobre o que est\xE1 te deixando assim? Se colocar em palavras ajudar a tirar esse peso, eu sou todo ouvidos! \u{1F49B}",
  "Eu entendo voc\xEA de verdade. \xC0s vezes o cora\xE7\xE3o fica apertadinho feito um casulo. Quer me contar o que aconteceu para te deixar com essa ang\xFAstia? Ou voc\xEA prefere que eu te mostre um desafio de arte bem calmo e fofo para a gente clarear os pensamentos? \u{1F98B}\u2728"
];
var atividadesFeliz = [
  "Que not\xEDcia maravilhosa! A sua alegria brilha mais que o amarelo do sol do Monet! \u{1F31F} Vamos comemorar essa felicidade desenhando um palha\xE7o bem colorido ou uma festa com muitos confetes no papel? Pode usar giz de cera, hidrocor e purpurina! Me conte o que voc\xEA mais gosta de desenhar quando est\xE1 feliz! \u{1F389}\u{1F3A8}",
  "Uau! A felicidade \xE9 a melhor colagem do nosso painel! Que tal celebrarmos dan\xE7ando sua m\xFAsica favorita ou cantando uma cantiga de roda como 'Cirandinha' comigo? Se quiser, tamb\xE9m podemos criar um personagem feliz para morar na sua imagina\xE7\xE3o! Vamos desenhar? \u{1F680}\u2728"
];
var atividadesAnsioso = [
  "Estou aqui bem pertinho de voc\xEA, respire fundo comigo... Inspira o ar bem devagar... e solta... \u{1F32C}\uFE0F Sabe, a ansiedade \xE9 como um turbilh\xE3o de vento bagun\xE7ando os nossos pinc\xE9is. Quer me contar o que est\xE1 te deixando t\xE3o preocupado ou ansioso hoje? Falar ajuda a acalmar os pensamentos.",
  "Respire com calma, meu pequeno grande artista. \u{1F340} \xC0s vezes o nosso cora\xE7\xE3o bate r\xE1pido demais, parecendo uma bateria barulhenta. Eu estou aqui para te ouvir! Quer falar sobre o que aconteceu para te deixar assim? Ou se preferir, podemos fazer um exerc\xEDcio de desenho bem calminho para relaxar.",
  "Estou aqui com voc\xEA, respire com calma... Sabia que a m\xFAsica \xE9 \xF3tima para acalmar os pensamentos agitados? Deixe-me cantar para n\xF3s. Que tal tentarmos desenhar c\xEDrculos e espirais bem lentos na folha de papel, um dentro do outro? Ajuda muito a relaxar. Quer tentar agora? \u{1F300}\u{1F33E}",
  "Respire fundo, sinta o ar entrando e saindo feito as ondas calmas do mar que a Tarsila pintava. Que tal desenharmos um jardim calmo com flores azuis e verdes bem fresquinhas? Essas cores frias ajudam a tranquilizar o nosso cora\xE7\xE3o. Me diga qual flor voc\xEA quer plantar no nosso jardim de papel hoje! \u{1F338}\u{1F340}"
];
var CONHECIMENTO_CANDINHO = [
  // ===== RESPOSTAS EMOCIONAIS HUMANIZADAS =====
  {
    palavras: ["estou triste", "triste", "me sinto triste", "sentindo triste", "tristeza", "saudade", "melancolia"],
    resposta: () => getRandomElement(atividadesTriste),
    matchedKey: "tristeza"
  },
  {
    palavras: ["estou entediado", "entediado", "t\xE9dio", "tedio", "sem nada para fazer"],
    resposta: () => getRandomElement(atividadesTedio),
    matchedKey: "tedio"
  },
  {
    palavras: ["estou com raiva", "raiva", "com raiva", "zangado", "bravo", "raivoso"],
    resposta: () => getRandomElement(atividadesRaiva),
    matchedKey: "raiva"
  },
  {
    palavras: ["estou feliz", "feliz", "alegre", "contente", "alegria", "felicidade"],
    resposta: () => getRandomElement(atividadesFeliz),
    matchedKey: "alegria"
  },
  {
    palavras: ["angustia", "ang\xFAstia", "angustiado", "angustiada", "aperto no peito", "sinto angustia"],
    resposta: () => getRandomElement(atividadesAngustia),
    matchedKey: "angustia"
  },
  {
    palavras: ["estou ansioso", "ansioso", "ansiedade", "nervoso"],
    resposta: () => getRandomElement(atividadesAnsioso)
  },
  // ===== TÓPICOS DE CONVERSA SOBRE FAKE NEWS =====
  {
    palavras: ["fake news", "noticias falsas", "noticia falsa", "fakenews", "mentiras na internet", "mentira na internet", "noticias mentirosas", "o que e fake news"],
    resposta: "\u{1F4F0} **O que \xE9 Fake News?**\n\nImagine que uma not\xEDcia \xE9 como uma carta. Ela deve contar a verdade sobre algo que aconteceu.\n\nFake News s\xE3o not\xEDcias falsas, criadas para enganar as pessoas. \xC0s vezes parecem verdadeiras, mas foram inventadas ou modificadas de prop\xF3sito.\n\nAlgumas fake news querem:\n\u{1F632} **Chamar aten\xE7\xE3o** para ganhar cliques.\n\u{1F4B0} **Ganhar dinheiro** com propagandas.\n\u{1F621} **Fazer as pessoas brigarem** por bobeira.\n\u{1F925} **Enganar algu\xE9m** de prop\xF3sito.\n\nNem toda informa\xE7\xE3o errada \xE9 fake news. \xC0s vezes uma pessoa apenas se confundiu. A fake news normalmente \xE9 criada ou compartilhada sabendo que pode enganar outras pessoas.\n\n\u{1F4A1} **Quer descobrir mais sobre isso?** Me pergunte sobre:\n\u2022 *Tipos de Fake News* (como elas s\xE3o feitas)\n\u2022 *Fake News na Arte* (mentiras do mundo art\xEDstico)\n\u2022 *Como se proteger das Fake News* (seja um investigador!)\n\u2022 *Como a Arte ajuda a identificar Fake News* (o super olhar de artista!)",
    matchedKey: "fake_news"
  },
  {
    palavras: ["tipos de fake news", "quais os tipos de fake news", "exemplos de fake news", "como sao criadas as fake news", "categorias de fake news"],
    resposta: '\u{1F9E9} **Tipos de Fake News**\n\nExistem v\xE1rias maneiras de criar e espalhar mentiras na internet! Olha s\xF3 os principais tipos:\n\n1\uFE0F\u20E3 **Not\xEDcia totalmente inventada:** Uma hist\xF3ria de mentira que nunca aconteceu. Exemplo: *"Encontraram um quadro pintado por um dinossauro."* Isso \xE9 imposs\xEDvel!\n2\uFE0F\u20E3 **Foto fora de contexto:** Uma foto real \xE9 usada para contar uma mentira. Exemplo: Uma pintura foi roubada em 2015, mas algu\xE9m publica a foto dizendo que o roubo aconteceu hoje. A foto existe, mas o tempo e a hist\xF3ria est\xE3o errados!\n3\uFE0F\u20E3 **Foto ou imagem alterada:** Algu\xE9m muda a foto usando edi\xE7\xE3o de computador. Exemplo: Colocam um chap\xE9u ou \xF3culos escuros em uma est\xE1tua famosa e dizem que ela sempre foi assim.\n4\uFE0F\u20E3 **T\xEDtulo enganoso:** O t\xEDtulo faz parecer algo terr\xEDvel ou incr\xEDvel, mas a not\xEDcia de verdade \xE9 simples. Exemplo: T\xEDtulo *"Museu fecha para sempre!"* quando na verdade ele s\xF3 fechou dois dias para limpeza.\n5\uFE0F\u20E3 **V\xEDdeo editado:** Cortam partes de um v\xEDdeo para mudar o que a pessoa disse ou parecer que ela estava brava.\n6\uFE0F\u20E3 **Fake News feita com Intelig\xEAncia Artificial (IA):** Programas modernos que criam imagens, vozes ou v\xEDdeos falsos mas que parecem reais (chamados de *deepfakes*).\n\n\u{1F4A1} **Quer saber como se defender?** Me pergunte sobre *Como se proteger das Fake News* ou sobre as *Regras de Ouro*!',
    matchedKey: "tipos_fake_news"
  },
  {
    palavras: ["fake news na arte sem ia", "fake news na arte", "mentiras sobre arte", "mentiras de arte", "historias falsas de arte", "boatos de arte"],
    resposta: '\u{1F3A8} **Fake News na Arte (sem IA)**\n\nAs not\xEDcias falsas no mundo da arte n\xE3o s\xE3o de hoje! Olha s\xF3 esses exemplos bem curiosos de boatos criados por pessoas:\n\n\u{1F5BC}\uFE0F **Exemplo 1:** Algu\xE9m pega a pintura Mona Lisa, edita um celular na m\xE3o dela e escreve: *"Leonardo da Vinci j\xE1 imaginava os celulares em 1503!"* Isso \xE9 super falso!\n\n\u{1F58C}\uFE0F **Exemplo 2:** Uma pessoa publica uma pintura qualquer na internet dizendo: *"Essa obra rar\xEDssima foi feita por Tarsila do Amaral!"*, mas na verdade foi pintada por outro artista menos conhecido apenas para chamar aten\xE7\xE3o.\n\n\u{1F3FA} **Exemplo 3:** Uma escultura preciosa de um museu se quebra acidentalmente durante uma mudan\xE7a de sala. Na internet, algu\xE9m malvado escreve: *"Um visitante mal-educado destruiu a obra!"* para provocar raiva e fofocas.\n\n\u{1F449} **Quer saber como a tecnologia moderna tamb\xE9m \xE9 usada para isso?** Pergunte-me sobre *Fake News na Arte usando IA*!',
    matchedKey: "fake_news_arte_sem_ia"
  },
  {
    palavras: ["fake news na arte usando ia", "fake news de ia na arte", "ia na arte fake news", "deepfakes de arte", "obras de ia falsas", "van gogh ia fake", "pintura falsa de ia"],
    resposta: '\u{1F916} **Fake News na Arte usando Intelig\xEAncia Artificial (IA)**\n\nA Intelig\xEAncia Artificial consegue criar pinturas e fotos incrivelmente parecidas com as reais, e algumas pessoas usam isso para enganar! Olha s\xF3 os exemplos:\n\n\u{1F33B} **Exemplo 1 (O Van Gogh Perdido):** Uma IA cria uma linda pintura no estilo de Van Gogh. Depois, algu\xE9m publica na internet: *"Descobriram uma obra secreta perdida de Van Gogh em um por\xE3o!"* Mas a obra foi feita por computador ontem e nunca existiu na vida real!\n\n\u{1F3E2} **Exemplo 2 (MASP Azul):** A IA cria uma foto perfeita mostrando o museu MASP completamente pintado de azul brilhante. Na verdade, isso nunca aconteceu!\n\n\u{1F474} **Exemplo 3 (Picasso Pintando Hoje):** Criam um v\xEDdeo realista por computador onde parece que Picasso est\xE1 pintando um quadro moderno. Como Picasso j\xE1 faleceu, sabemos que esse v\xEDdeo \xE9 um *deepfake*!\n\n\u{1F525} **Exemplo 4 (Museu pegando fogo):** Algu\xE9m gera uma foto realista de um museum famoso em chamas. As pessoas se assustam e compartilham correndo, mas o inc\xEAndio nunca aconteceu!\n\n\u{1F4A1} *Lembre-se:* A IA \xE9 uma ferramenta fant\xE1stica para ajudar artistas a criar desenhos, m\xFAsicas e hist\xF3rias incr\xEDveis. O problema n\xE3o \xE9 a IA, mas quando algu\xE9m usa essa intelig\xEAncia para criar mentiras!\n\n\u{1F449} **Quer saber o segredo para identificar imagens de IA?** Me pergunte *Como descobrir imagem de IA*! \u{1F575}\uFE0F',
    matchedKey: "fake_news_arte_ia"
  },
  {
    palavras: [
      "como se proteger",
      "como me protejo",
      "me proteger de fake news",
      "evitar fake news",
      "proteger de noticias falsas",
      "como saber se e fake news",
      "como me proteger das fake news",
      "como evito",
      "como checo",
      "como sei se e fake news",
      "como evito fake news",
      "como checo fake news",
      "como checar fake news",
      "como sei se e mentira",
      "como descobrir fake news",
      "como identificar fake news",
      "como saber se e mentira",
      "como checar",
      "como evitar"
    ],
    resposta: "\u{1F6E1}\uFE0F **Como me proteger das Fake News?**\n\nImagine que voc\xEA \xE9 um detetive da internet! \u{1F575}\uFE0F Antes de acreditar em qualquer not\xEDcia ou imagem chocante que aparecer por a\xED, use a sua lupa e fa\xE7a estas cinco perguntas m\xE1gicas:\n\n\u{1F50D} **1. Quem publicou?**\nVeja se a not\xEDcia veio de um jornal conhecido, de uma escola, de um museu ou de uma institui\xE7\xE3o confi\xE1vel. Se n\xE3o disser claramente quem escreveu ou de onde veio, desconfie na hora!\n\n\u{1F4C5} **2. Quando aconteceu?**\n\xC0s vezes, uma not\xEDcia que \xE9 totalmente verdadeira, mas que aconteceu h\xE1 dez anos, \xE9 publicada hoje como se fosse nova s\xF3 para assustar. Sempre procure a data!\n\n\u{1F4DA} **3. Outras pessoas tamb\xE9m est\xE3o falando sobre isso?**\nSe um dinossauro de verdade tivesse aparecido no MASP, todos os canais de TV e jornais estariam mostrando! Se a not\xEDcia s\xF3 existe em um \xFAnico link ou post perdido, tenha muito cuidado.\n\n\u{1F3A8} **4. A imagem parece estranha?**\nOlhe bem de pertinho com olhos de pintor! Procure por sombras que v\xE3o para lados diferentes, pessoas com m\xE3os esquisitas (com dedos a mais ou a menos!), letras borradas ou rostos deformados. Esses s\xE3o sinais de edi\xE7\xE3o ou imagens feitas por IA!\n\n\u2764\uFE0F **5. A not\xEDcia quer fazer voc\xEA sentir medo ou muita raiva?**\nAs not\xEDcias falsas adoram mexer com o nosso cora\xE7\xE3o para a gente compartilhar r\xE1pido sem pensar. Se um post te deixou muito assustado ou bravo, pare e respire fundo antes de enviar para algu\xE9m!\n\n\u{1F4A1} **Quer saber como ficar seguro contra outras mentiras?** Pergunte-me sobre:\n\u2022 *Como evitar golpes na internet?* \u{1F512}\n\u2022 *Como parar a propaga\xE7\xE3o de mentiras?* \u{1F30E}",
    matchedKey: "como_proteger_fake_news"
  },
  {
    palavras: ["como evitar golpes", "evitar golpes na internet", "como nao cair em golpes", "golpes na internet", "evitar fraudes", "seguranca na internet", "golpes com fake news", "como posso evitar golpes"],
    resposta: '\u{1F512} **Como evitar golpes na internet?**\n\nNem todos os golpes na internet usam fake news, mas quase todos come\xE7am com uma mentira! Para navegar seguro e proteger o seu computador e a sua fam\xEDlia, siga estes conselhos valiosos:\n\n\u274C **Nunca clique em qualquer link!**\nMesmo que pare\xE7a uma mensagem super importante ou que venha de um amigo (pois o perfil dele pode ter sido invadido), n\xE3o clique em links desconhecidos.\n\n\u{1F511} **Nunca conte sua senha!**\nSua senha \xE9 um segredo preju\xEDzo. Nunca a conte para amigos de jogos, desconhecidos ou pessoas na internet que digam ser de bancos, suporte ou jogos.\n\n\u{1F4F1} **Desconfie de mensagens urgentes!**\nOs golpistas adoram criar pressa! Cuidado com avisos como *"Seu celular ser\xE1 bloqueado!"*, *"Voc\xEA ganhou um pr\xEAmio incr\xEDvel de gra\xE7a!"* ou *"Clique agora!"*. Pare e pense antes de tomar qualquer atitude.\n\n\u{1F468}\u200D\u{1F469}\u200D\u{1F467} **Pe\xE7a ajuda a um adulto!**\nSempre que voc\xEA ler uma mensagem estranha, ganhar um pr\xEAmio que n\xE3o pediu ou ver algo que te deixe confuso, chame logo um adulto de confian\xE7a para olhar com voc\xEA.\n\n\u{1F4B3} **Nunca informe seus dados pessoais!**\nSeu nome completo, escola onde estuda, documentos, senhas e cart\xF5es dos seus pais devem ser protegidos a sete chaves. Nunca preencha formul\xE1rios suspeitos!\n\n\u{1F4A1} **Que tal ajudar a deixar a internet limpa?** Pergunte-me sobre *O Jardim da Informa\xE7\xE3o* \u{1F331} ou sobre *Como parar a propaga\xE7\xE3o de fake news* \u{1F30E}!',
    matchedKey: "evitar_golpes_internet"
  },
  {
    palavras: ["como parar a propagacao", "como parar a propaga\xE7\xE3o", "como parar de espalhar", "parar de espalhar", "regra dos 5 p", "regra dos 5p", "nao compartilhar mentiras"],
    resposta: "\u{1F30E} **Como parar a propaga\xE7\xE3o das Fake News?**\n\nCada um de n\xF3s \xE9 um super-her\xF3i na internet quando decide parar uma mentira! Antes de compartilhar qualquer v\xEDdeo ou mensagem engra\xE7ada ou assustadora, use a **Regra dos 5 P**:\n\n\u{1F6D1} **P**are:\nN\xE3o clique no bot\xE3o de compartilhar imediatamente. D\xEA um tempo para analisar.\n\n\u{1F914} **P**ense:\nSer\xE1 que isso faz sentido de verdade? Essa hist\xF3ria \xE9 muito absurda?\n\n\u{1F50E} **P**esquise:\nD\xEA uma busca r\xE1pida e veja se outras fontes confi\xE1veis e canais oficiais confirmam o que est\xE1 escrito.\n\n\u{1F468}\u200D\u{1F469}\u200D\u{1F467} **P**ergunte:\nSe continuar com d\xFAvida, converse com um professor, com o papai, a mam\xE3e ou um adulto de confian\xE7a.\n\n\u{1F4E4} **P**ublique somente se tiver certeza:\nSe a resposta n\xE3o for 100% clara... **N\xE3o compartilhe!** Guarde para voc\xEA e quebre essa corrente de fofocas.\n\n\u{1F4A1} **Quer ver uma compara\xE7\xE3o muito bonita com a natureza?** Pergunte-me sobre *O Jardim da Informa\xE7\xE3o*! \u{1F331}",
    matchedKey: "parar_propagacao_fake"
  },
  {
    palavras: ["jardim da informacao", "jardim da informa\xE7\xE3o", "o jardim da informacao", "jardineiros da internet"],
    resposta: "\u{1F331} **O Jardim da Informa\xE7\xE3o**\n\nImagine que a internet inteira \xE9 um grande, lindo e colorido jardim compartilhado por todas as pessoas do mundo! \u{1F3E1}\u2728\n\n\u{1F33C} **As not\xEDcias verdadeiras s\xE3o flores:** Elas embelezam o caminho, trazem conhecimento \xFAtil, perfumes de sabedoria e ajudam todo mundo a crescer saud\xE1vel.\n\n\u{1F33F} **As fake news s\xE3o ervas daninhas:** Elas crescem r\xE1pido, sufocam as plantinhas boas, espalham espinhos de medo, raiva e mentira, bagun\xE7ando o nosso jardim.\n\nCada vez que algu\xE9m compartilha uma not\xEDcia sem verificar, est\xE1 jogando sementes de ervas daninhas no quintal dos outros! \u{1F622}\n\nMas cada vez que voc\xEA usa sua lupa de detetive e decide n\xE3o espalhar algo suspeito, voc\xEA arranca uma erva daninha e planta uma linda flor de verdade!\n\nN\xF3s todos somos os **jardineiros da internet!** Que tipo de sementes voc\xEA quer espalhar hoje? \u{1F338}\u{1F340}\n\n\u{1F4A1} **Quer saber o que a arte tem a ver com isso tudo?** Pergunte-me sobre *O que a arte ensina sobre isso*! \u{1F3A8}",
    matchedKey: "jardim_da_informacao"
  },
  {
    palavras: ["o que a arte ensina sobre isso", "o que a arte ensina", "como a arte ajuda", "arte e fake news", "por que estudar arte ajuda", "olhar de artista fake news"],
    resposta: '\u{1F3A8} **O que a arte nos ensina sobre isso?**\n\nPode parecer surpreendente, mas aprender a desenhar, pintar ou esculpir transforma voc\xEA em um detetive de fake news imbat\xEDvel! \u{1F575}\uFE0F\u2728 A arte nos treina para ter um olhar apurado:\n\n\u{1F440} **Observar com calma:** Um artista n\xE3o olha de rasp\xE3o; ele estuda os detalhes, a dire\xE7\xE3o da luz, o formato das sombras e as express\xF5es faciais. Isso te ajuda a ver se uma foto na internet foi alterada ou criada por computadores!\n\n\u{1F9D0} **Fazer perguntas:** Diante de uma obra de arte, n\xF3s perguntamos: *"Quem criou? Por que usou essa cor? O que ela quer transmitir?"* Essas s\xE3o exatamente as mesmas perguntas que um bom investigador faz diante de uma not\xEDcia suspeita!\n\n\u{1F3AD} **Interpretar hist\xF3rias:** A arte nos ensina que imagens contam hist\xF3rias, mas que muitas delas s\xE3o de fic\xE7\xE3o (como uma pintura de drag\xE3o!). Na internet, tamb\xE9m precisamos distinguir o que \xE9 um fato real do que \xE9 imagina\xE7\xE3o ou brincadeira de algu\xE9m.\n\n\u{1F4AD} **Pensar antes de concluir:** Duas pessoas podem ver significados diferentes na mesma tela. Isso nos ensina que as apar\xEAncias enganam e que precisamos refletir e pesquisar antes de aceitar qualquer coisa como verdade absoluta.\n\n\u{1F58C}\uFE0F *Lema do Candinho:* **"Quem aprende a desenhar aprende a observar. Quem aprende a observar aprende a descobrir a verdade."** \u{1F31F}',
    matchedKey: "arte_ensina_fake_news"
  },
  {
    palavras: ["detetive da arte", "cinco perguntas magicas", "5 perguntas magicas", "investigador da arte", "perguntas do detetive"],
    resposta: "\u{1F575}\uFE0F **O Detetive da Arte!**\n\nImagine que existe um her\xF3i chamado **Detetive da Arte!** Ele tem uma lupa m\xE1gica e, sempre que v\xEA uma imagem surpreendente na internet, ele faz as **5 perguntas m\xE1gicas** antes de acreditar:\n\n1\uFE0F\u20E3 \u{1F50D} **Quem fez esta imagem?** (Qual \xE9 o nome do autor ou site?)\n2\uFE0F\u20E3 \u{1F4C5} **Quando ela foi criada?** (Foi hoje ou \xE9 uma not\xEDcia velha de anos atr\xE1s?)\n3\uFE0F\u20E3 \u{1F4CD} **Onde ela apareceu primeiro?** (Foi em um site s\xE9rio ou num grupo de mensagem?)\n4\uFE0F\u20E3 \u{1F3A8} **Ela foi modificada ou editada?** (Tem cara de montagem ou filtro?)\n5\uFE0F\u20E3 \u{1F4DA} **Outras fontes confi\xE1veis confirmam?** (Outros detetives tamb\xE9m viram e confirmaram?)\n\nSe o Detetive da Arte n\xE3o conseguir responder a essas perguntas, ele n\xE3o compartilha e guarda sua lupa! Que tal ser um Detetive da Arte comigo hoje e investigar as imagens que voc\xEA v\xEA por a\xED? \u{1F31F}\u{1F526}",
    matchedKey: "detetive_da_arte"
  },
  // ===== CONCEITOS GERAIS DE ARTE =====
  {
    palavras: ["arte", "o que \xE9 arte", "definir arte", "defini\xE7\xE3o de arte"],
    resposta: "Arte \xE9 uma forma de express\xE3o! Pode ser um desenho, pintura, dan\xE7a, m\xFAsica, teatro\u2026 \xC9 o jeito das pessoas mostrarem sentimentos e ideias. \u{1F3A8}",
    matchedKey: "arte"
  },
  {
    palavras: ["dan\xE7a", "danca", "dan\xE7as", "dancas", "dan\xE7ar", "o que \xE9 dan\xE7a", "o que \xE9 danca"],
    resposta: "A dan\xE7a \xE9 a arte de mexer o corpo seguindo o ritmo de uma m\xFAsica! \u{1FA70} \xC9 como desenhar no ar usando nossos passos, pulos e giros. Atrav\xE9s da dan\xE7a, celebramos a uni\xE3o, a alegria e a energia de estarmos todos juntos! Voc\xEA gosta de dan\xE7ar, meu amigo? \u{1F31F}\u{1F483}",
    matchedKey: "danca"
  },
  {
    palavras: ["poema", "poemas", "poesia", "poesias", "verso", "versos"],
    resposta: "A poesia \xE9 a arte de pintar usando palavras! \u{1F4DD} Um poema \xE9 como uma m\xFAsica escrita, onde cada linha \xE9 um verso que rima e brinca com o som. Os poetas usam palavras doces e sentimentos para colorir o papel com amor e imagina\xE7\xE3o! \u2728",
    matchedKey: "poema"
  },
  {
    palavras: ["literatura", "o que \xE9 literatura"],
    resposta: "A literatura \xE9 a arte de escrever hist\xF3rias m\xE1gicas e livros que nos levam a viajar no tempo e no espa\xE7o sem sair do lugar! \u{1F4DA} \xC9 onde os livros re\xFAnem os maiores tesouros da imagina\xE7\xE3o humana. Cada p\xE1gina lida \xE9 como uma nova cor que descobrimos na nossa mente!",
    matchedKey: "literatura"
  },
  {
    palavras: ["m\xFAsica", "musica", "m\xFAsicas", "musicas", "o que \xE9 m\xFAsica", "o que \xE9 musica"],
    resposta: "A m\xFAsica \xE9 a arte de combinar sons e sil\xEAncios de maneira linda! \u{1F3B6} \xC9 a pintura que entra pelos nossos ouvidos. Os instrumentos e as notas musicais cantam hist\xF3rias e despertam sentimentos de alegria, calma e festa em nosso cora\xE7\xE3o! \u{1F3BC}\u{1F3B7}",
    matchedKey: "musica"
  },
  { palavras: ["o que e vida", "vida", "o que e a vida", "significado da vida"], resposta: "\u{1F331} A vida \xE9 o maior e mais precioso peda\xE7o de papel em branco que recebemos! Cada dia que vivemos \xE9 como uma pincelada \xFAnica que damos nesse quadro. Para os artistas, a vida \xE9 expressar amor, brincar, cantar, observar a natureza e sorrir com os amigos. Tratar a vida com carinho \xE9 o desenho mais bonito que podemos criar! \u{1F308}\u2728" },
  {
    palavras: ["desenho", "o que \xE9 desenho", "desenhos", "esbo\xE7o", "esboco", "esbo\xE7os", "esbocos"],
    resposta: 'Desenho \xE9 quando usamos l\xE1pis, caneta ou giz para criar linhas e formas. D\xE1 para desenhar tudo o que a gente imagina! Existem v\xE1rios tipos fascinantes de desenho, como de observa\xE7\xE3o, realismo, mang\xE1 e caricatura. Quer saber mais sobre os tipos de desenho? Me pergunte: "quais os tipos de desenho?" \u{1F58D}\uFE0F',
    matchedKey: "desenho"
  },
  {
    palavras: ["pintura", "t\xE9cnicas de pintura", "pinturas"],
    resposta: 'Na pintura, existem v\xE1rias t\xE9cnicas e estilos incr\xEDveis! Podemos pintar de forma realista, impressionista, abstrata, surrealista ou cubista, e usar tintas como guache, aquarela, acr\xEDlica ou \xF3leo! Quer saber mais sobre estilos? Pergunte-me: "quais os estilos de pintura?" \u{1F3A8}',
    matchedKey: "pintura"
  },
  // ===== NOVOS FLUXOS DE MATERIAIS DE ARTE, DESIGN E PINTURA =====
  {
    palavras: ["materiais", "materiais de arte", "com o que desenhar", "com o que pintar", "material de pintura", "material de desenho", "materiais para arte", "estojos"],
    resposta: "\u{1F392} **Materiais de Arte do Candinho!**\nOlha s\xF3 que paleta incr\xEDvel de ferramentas que os artistas usam para colorir e criar:\n\n\u{1F3A8} **Tintas:**\n\u2022 **Tinta Guache:** \xC9 uma tinta colorida e f\xE1cil de usar. Tem boa cobertura e fica opaca quando seca. \xC9 indicada para papel, cartolina e atividades escolares! Curiosidade: pode ser misturada com outras cores para criar novas tonalidades.\n\u2022 **Tinta Aquarela:** \xC9 uma tinta que usa bastante \xE1gua e cria efeitos suaves e transparentes. \xC9 indicada para pap\xE9is pr\xF3prios para aquarela. Curiosidade: quanto mais \xE1gua voc\xEA usar, mais clara ficar\xE1 a pintura.\n\u2022 **Tinta Acr\xEDlica:** \xC9 uma tinta resistente que seca rapidamente. \xC9 indicada para tela, madeira, papel\xE3o e papel. Curiosidade: depois de seca, ela n\xE3o sai facilmente com \xE1gua.\n\u2022 **Tinta a \xD3leo:** \xC9 uma tinta usada por muitos artistas famosos. Seca bem devagar. \xC9 indicada para telas de pintura. Curiosidade: permite misturar cores por bastante tempo antes de secar.\n\u2022 **Tinta para Tecido:** Foi criada especialmente para pintar roupas e tecidos. \xC9 indicada para camisetas, bolsas e panos. Curiosidade: depois de seca, a pintura resiste bravamente \xE0s lavagens!\n\n\u270F\uFE0F **L\xE1pis:**\n\u2022 **L\xE1pis Grafite:** \xC9 o l\xE1pis mais comum para escrever e desenhar. Curiosidade: existem l\xE1pis mais claros (como H ou HB) e mais escuros (como 2B, 4B ou 6B).\n\u2022 **L\xE1pis de Cor:** Serve para colorir desenhos com muitas cores. Curiosidade: misturando as cores com levezas diferentes, criamos novos tons fant\xE1sticos!\n\u2022 **L\xE1pis Aquarel\xE1vel:** Pode ser usado como l\xE1pis de cor comum e tamb\xE9m com \xE1gua. Curiosidade: ao passar um pincel \xFAmido pela pintura do l\xE1pis, o desenho ganha um lindo efeito de aquarela!\n\u2022 **L\xE1pis Carv\xE3o:** Produz tra\xE7os escuros e muito expressivos. Curiosidade: \xE9 bastante usado para fazer sombras realistas e retratos bonitos.\n\n\u2712\uFE0F **Canetas:**\n\u2022 **Caneta Esferogr\xE1fica:** \xC9 a caneta usada para escrever no dia a dia. Curiosidade: possui uma pequena esfera girat\xF3ria na ponta que espalha a tinta de maneira uniforme.\n\u2022 **Canetinha Hidrocor:** \xC9 colorida e \xF3tima para desenhos infantis. Curiosidade: existem canetinhas com pontas finas para contornos e grossas para colorizar.\n\u2022 **Caneta Marcador:** Tem tra\xE7o forte e cores vibrantes. Curiosidade: \xE9 muito usada para destacar informa\xE7\xF5es importantes e fazer cartazes.\n\u2022 **Caneta Nanquim:** Produz linhas precisas, escuras e muito firmes. Curiosidade: \xE9 bastante utilizada em ilustra\xE7\xF5es profissionais e hist\xF3rias em quadrinhos!\n\n\u{1F9FD} **Borrachas:**\n\u2022 **Borracha Branca:** Apaga tra\xE7os de l\xE1pis sem danificar o papel. Curiosidade: \xE9 a mais usada por estudantes de todas as idades.\n\u2022 **Borracha Pl\xE1stica:** Apaga com imensa facilidade e deixa poucos res\xEDduos sobre a folha. Curiosidade: \xE9 muito utilizada em desenhos t\xE9cnicos e desenhos caprichados.\n\u2022 **Borracha Male\xE1vel (Limpa-tipos):** Pode ser moldada com as m\xE3os como se fosse massinha. Curiosidade: serve para clarear sombras de grafite e clarear pequenos detalhes no desenho sem esfregar!\n\n\u{1F4C4} **Pap\xE9is:**\n\u2022 **Papel Sulfite:** \xC9 o papel mais comum para desenhos r\xE1pidos e atividades escolares de todo dia. Curiosidade: pode ser usado livremente com l\xE1pis, canetas e tinta guache.\n\u2022 **Cartolina:** \xC9 muito mais grossa e resistente do que o papel sulfite. Curiosidade: bastante usada em cartazes, apresenta\xE7\xF5es e trabalhos art\xEDsticos maiores.\n\u2022 **Papel Canson:** Possui uma textura especial para desenhos art\xEDsticos profissionais. Curiosidade: \xE9 excelente para segurar a cor de l\xE1pis de cor e carv\xE3o.\n\u2022 **Papel para Aquarela:** \xC9 um papel bem grosso, encorpado e absorve lindamente a \xE1gua. Curiosidade: foi feito especialmente para receber pinturas em aquarela sem enrugar ou estragar.\n\u2022 **Papel Kraft:** Tem cor marrom t\xEDpica de pacotes e um aspecto natural bem r\xFAstico. Curiosidade: \xE9 sensacional para artesanatos, colagens e projetos criativos!\n\nCada ferramenta traz a sua pr\xF3pria m\xE1gica para o papel! \u{1F31F} Qual material voc\xEA quer usar no nosso pr\xF3ximo desenho?"
  },
  {
    palavras: ["tinta guache", "guache"],
    resposta: "\u{1F58C}\uFE0F **Tinta Guache:** \xC9 uma tinta colorida, divertida e muito f\xE1cil de usar. Tem excelente cobertura e fica opaca (sem brilho) quando seca.\n\u{1F3AF} **Indicada para:** Papel, cartolina e variadas atividades escolares.\n\u{1F4A1} **Curiosidade:** Pode ser misturada com outras cores para criar tonalidades totalmente novas no seu desenho! \u{1F3A8}"
  },
  {
    palavras: ["tinta aquarela", "aquarela", "aquarelas"],
    resposta: "\u{1F58C}\uFE0F **Tinta Aquarela:** \xC9 uma tinta cl\xE1ssica que adora \xE1gua! Ela mistura-se ao pincel \xFAmido para criar efeitos suaves, leves e transparentes na folha.\n\u{1F3AF} **Indicada para:** Pap\xE9is grossos pr\xF3prios para aquarela.\n\u{1F4A1} **Curiosidade:** Quanto mais \xE1gua voc\xEA colocar na mistura, mais clara e delicada ficar\xE1 a sua pintura! \u{1F4A7}"
  },
  {
    palavras: ["tinta acrilica", "acrilica", "acrilicas"],
    resposta: "\u{1F58C}\uFE0F **Tinta Acr\xEDlica:** \xC9 uma tinta moderna, resistente e que seca rapidamente na tela.\n\u{1F3AF} **Indicada para:** Tela de pintura, madeira, papel\xE3o ou papel grosso.\n\u{1F4A1} **Curiosidade:** Ela brilha bastante e, depois de secar por completo, fica super resistente e n\xE3o sai facilmente com \xE1gua! \u26A1"
  },
  {
    palavras: ["tinta a oleo", "tinta de oleo", "pintura a oleo", "oleo"],
    resposta: "\u{1F58C}\uFE0F **Tinta a \xD3leo:** \xC9 a tinta nobre e tradicional usada por muitos pintores famosos da hist\xF3ria. Ela seca bem devagarzinho.\n\u{1F3AF} **Indicada para:** Telas de pintura de algod\xE3o ou linho.\n\u{1F4A1} **Curiosidade:** Como demora a secar, permite que o artista fa\xE7a misturas e altere a pintura por v\xE1rias horas seguidas antes do trabalho secar! \u{1F5BC}\uFE0F"
  },
  {
    palavras: ["tinta para tecido", "tinta de tecido"],
    resposta: "\u{1F58C}\uFE0F **Tinta para Tecido:** Foi formulada especialmente para pintar roupas e panos sem desbotar.\n\u{1F3AF} **Indicada para:** Camisetas, cal\xE7as jeans, bolsas de lona e panos de prato.\n\u{1F4A1} **Curiosidade:** Depois de totalmente seca, a pintura sela nas fibras e pode resistir tranquilamente a muitas lavagens! \u{1F455}"
  },
  {
    palavras: ["lapis grafite", "grafite"],
    resposta: "\u270F\uFE0F **L\xE1pis Grafite:** \xC9 o nosso l\xE1pis tradicional cinza de todo dia para escrever e fazer rascunhos.\n\u{1F4A1} **Curiosidade:** Existem l\xE1pis mais claros e duros (como H) e outros muito mais escuros, macios e profundos (como 2B, 4B, 6B)! \u270F\uFE0F"
  },
  {
    palavras: ["lapis de cor", "lapis colorido"],
    resposta: "\u270F\uFE0F **L\xE1pis de Cor:** Serve para colorir desenhos e encher nosso mundo de fantasia com dezenas de cores.\n\u{1F4A1} **Curiosidade:** Se voc\xEA pintar em camadas sobrepostas e com press\xF5es delicadas, consegue misturar as cores no papel para criar tons novinhos em folha! \u{1F308}"
  },
  {
    palavras: ["lapis aquarelavel", "aquarelavel"],
    resposta: "\u270F\uFE0F **L\xE1pis Aquarel\xE1vel:** Une o melhor dos dois mundos! Funciona como um l\xE1pis de cor tradicional e tamb\xE9m reage com \xE1gua.\n\u{1F4A1} **Curiosidade:** Ao passar um pincel levemente \xFAmido nos tra\xE7os que voc\xEA desenhou com ele, o desenho magicamente se dissolve e ganha um suave efeito de aquarela! \u{1F4A7}\u270F\uFE0F"
  },
  {
    palavras: ["lapis carvao", "carvao", "carv\xE3o"],
    resposta: "\u270F\uFE0F **L\xE1pis Carv\xE3o:** Produz tra\xE7os profundamente pretos, r\xFAsticos e extremamente expressivos.\n\u{1F4A1} **Curiosidade:** \xC9 fant\xE1stico para fazer retratos com jogo de luz e sombras profundas, por ser f\xE1cil de esfumar com os dedos! \u{1F5A4}"
  },
  {
    palavras: ["caneta esferografica", "caneta esferogr\xE1fica", "esferografica", "esferogr\xE1fica"],
    resposta: "\u{1F58B}\uFE0F **Caneta Esferogr\xE1fica:** \xC9 a caneta mais comum, usada para tomar notas, fazer assinaturas e escrever todo dia na escola.\n\u{1F4A1} **Curiosidade:** Ela possui uma mini esfera de metal girat\xF3ria na pontinha. Conforme escrevemos, a bolinha rola e espalha a tinta l\xEDquida perfeitamente sobre a folha! \u{1F58B}\uFE0F"
  },
  {
    palavras: ["canetinha hidrocor", "canetinhas", "canetinha", "hidrocor"],
    resposta: "\u{1F58B}\uFE0F **Canetinha Hidrocor:** \xC9 colorida, divertida e as crian\xE7as adoram usar.\n\u{1F4A1} **Curiosidade:** Existem canetinhas com ponta bem fininha para contornos delicados e outras com ponta grossa ou chanfrada para cobrir espa\xE7os maiores! \u{1F308}"
  },
  {
    palavras: ["caneta marcador", "marcador", "marca texto", "caneta de marcar"],
    resposta: "\u{1F58B}\uFE0F **Caneta Marcador:** Tem tra\xE7os robustos, fortes e cores vibrantes.\n\u{1F4A1} **Curiosidade:** Al\xE9m de marcar passagens importantes em livros, os artistas usam marcadores profissionais para letterings, cartazes e desenhos do estilo Grafite urbano! \u{1F4A1}"
  },
  {
    palavras: ["caneta nanquim", "nanquim"],
    resposta: "\u{1F58B}\uFE0F **Caneta Nanquim:** Produz tra\xE7os pretos super precisos, escuros de alta durabilidade.\n\u{1F4A1} **Curiosidade:** \xC9 a caneta predileta dos ilustradores profissionais para arte-finalizar desenhos, contornar mangas japon\xEAs e desenhar quadrinhos detalhados! \u{1F4D6}\u{1F5A4}"
  },
  {
    palavras: ["borracha branca"],
    resposta: "\u{1F9FD} **Borracha Branca:** Apaga tra\xE7os de l\xE1pis grafite comuns com do\xE7ura e sem rasgar ou ferir o papel.\n\u{1F4A1} **Curiosidade:** \xC9 o tipo mais popular e amado que acompanha os estojos dos estudantes por gera\xE7\xF5es. \u{1F3EB}"
  },
  {
    palavras: ["borracha plastica", "borracha pl\xE1stica", "plastica", "pl\xE1stica"],
    resposta: "\u{1F9FD} **Borracha Pl\xE1stica:** Apaga com facilidade extrema e solta muito poucos res\xEDduos (fiapos) sobre a mesa.\n\u{1F4A1} **Curiosidade:** \xC9 ideal para desenhos de engenharia, arquitetura e trabalhos art\xEDsticos que exigem muita limpeza! \u{1F4D0}"
  },
  {
    palavras: ["borracha maleavel", "borracha male\xE1vel", "maleavel", "male\xE1vel", "limpa tipos", "limpa-tipos"],
    resposta: '\u{1F9FD} **Borracha Male\xE1vel (Limpa-tipos):** Pode ser moldada e esticada com os dedos exatamente como se fosse massinha de brincar.\n\u{1F4A1} **Curiosidade:** Ela serve para "chupar" o excesso de p\xF3 de grafite ou carv\xE3o, clareando sombras e criando efeitos de brilho ou luz de forma super suave no desenho! \u{1F9D8}\u200D\u2642\uFE0F'
  },
  {
    palavras: ["papel sulfite", "sulfite", "folha sulfite"],
    resposta: "\u{1F4C4} **Papel Sulfite:** \xC9 o papel de escrit\xF3rio e impressora mais pr\xE1tico e comum que existe.\n\u{1F4A1} **Curiosidade:** Excelente e econ\xF4mico para rabiscar ideias velozes do dia a dia, rascunhar desenhos f\xE1ceis e brincar com l\xE1pis e canetinhas! \u{1F4C4}"
  },
  {
    palavras: ["cartolina"],
    resposta: "\u{1F4C4} **Cartolina:** \xC9 uma folha bem grande e resistente, de espessura mais firme.\n\u{1F4A1} **Curiosidade:** Um material cl\xE1ssico para montar cartazes coloridos, fazer belos recortes e montar trabalhos escolares grandes. \u{1F3EB}"
  },
  {
    palavras: ["papel canson", "canson"],
    resposta: "\u{1F4C4} **Papel Canson:** Possui uma textura/porosidade especial perfeita para trabalhos art\xEDsticos de qualidade.\n\u{1F4A1} **Curiosidade:** Como possui ranhuras suaves e \xE9 fofinho, ret\xE9m a poeira e pigmento de l\xE1pis de cor, giz de cera e carv\xE3o maravilhosamente bem! \u{1F3A8}"
  },
  {
    palavras: ["papel para aquarela"],
    resposta: "\u{1F4C4} **Papel para Aquarela:** \xC9 um papel muito grosso, encorpado e com alta capacidade de absor\xE7\xE3o.\n\u{1F4A1} **Curiosidade:** Foi gerado especificamente para beber muita \xE1gua sem enrugar e sem soltar pelinhos, segurando os tons da aquarela belos por anos. \u{1F4A7}\u{1F4C4}"
  },
  {
    palavras: ["papel kraft", "kraft"],
    resposta: "\u{1F4C4} **Papel Kraft:** Tem cor marrom natural, toque r\xFAstico e visual muito bonito.\n\u{1F4A1} **Curiosidade:** \xC9 super forte e bastante valorizado em embrulhos elegantes, artesanato criativo, colagem e desenhos com giz branco e pastel! \u{1F4E6}"
  },
  {
    palavras: ["tipos de desenho", "tipos_de_desenho", "estilos de desenho", "estilo de desenho", "desenhos de arte"],
    resposta: "\u270D\uFE0F **Tipos de Desenho do Candinho!**\nVoc\xEA sabia que desenhar n\xE3o \xE9 de um jeito s\xF3? Existem v\xE1rias formas m\xE1gicas de colocar suas ideias no papel:\n\n\u{1F50D} **Desenho de Observa\xE7\xE3o**: O artista desenha olhando diretamente para um objeto, pessoa ou paisagem real e tenta representar fielmente o que v\xEA. (Ex: Desenhar uma fruta sobre a mesa! \u{1F34E})\n\u{1F9E0} **Desenho de Mem\xF3ria**: \xC9 feito usando apenas as lembran\xE7as do artista guardadas no cora\xE7\xE3o, sem olhar para um modelo f\xEDsico naquele momento. (Ex: Desenhar sua pr\xF3pria casa sem v\xEA-la! \u{1F3E0})\n\u{1F4F8} **Desenho Realista**: Procura mostrar as pessoas e objetos com as luzes, sombras e propor\xE7\xF5es muito parecidas com a realidade. (Ex: Um lindo retrato que quase parece uma foto! \u{1F464})\n\u2728 **Desenho Abstrato**: Usa formas livres, linhas soltas e manchas de cores vibrantes para expressar sentimentos e pensamentos, sem o compromisso de imitar o mundo real. (Ex: C\xEDrculos, listras e manchas coloridas! \u{1F3A8})\n\u{1F450} **Desenho \xE0 M\xE3o Livre**: \xC9 feito sem r\xE9gua, compassos ou instrumentos de precis\xE3o, usando unicamente a imagina\xE7\xE3o e a m\xE3o solta. (Ex: Rabiscos e esbo\xE7os repletos de criatividade! \u270D\uFE0F)\n\u{1F338} **Mang\xE1**: Famoso estilo de desenho japon\xEAs com personagens carism\xE1ticos de olhos brilhantes, grandes e muito expressivos. (Ex: Hist\xF3rias em quadrinhos japonesas! \u{1F4D6})\n\u{1F92A} **Caricatura**: Exagera e brinca com tra\xE7os f\xEDsicos caracter\xEDsticos de uma pessoa de maneira muito divertida e afetuosa. (Ex: Desenhar algu\xE9m com um nariz bem grande ou sorriso gigante! \u{1F604})\n\u{1F4D6} **Hist\xF3rias em Quadrinhos (HQ)**: Conta aventuras emocionantes usando uma sequ\xEAncia organizada de desenhos dentro de quadros e bal\xF5es de di\xE1logo. (Ex: As hist\xF3rias da Turma da M\xF4nica! \u{1F4A5})\n\u{1F476} **Chibi**: Estilo oriental derivado de mang\xE1s com personagens super fofinhos e lindinhos de cabe\xE7a enorme e corpo pequenininho. (Ex: Vers\xF5es beb\xEAs de super-her\xF3is! \u{1F970})\n\u{1F300} **Doodle**: Rabiscos descompromissados e divertidos que criamos de forma espont\xE2nea, sem pensar muito, enquanto relaxamos.\n\u{1F3AC} **Cartoon**: Desenhos super expressivos, simplificados e divertidos muito usados nas tirinhas de jornal e anima\xE7\xF5es. (Ex: Personagens de desenhos animados de humor! \u{1F37F})\n\u{1F3F0} **Estilo Disney**: Personagens desenhados com contornos sinuosos, express\xF5es dram\xE1ticas, cores ricas e uma aura amig\xE1vel e encantadora. (Ex: O camundongo Mickey ou a rainha Elsa! \u2744\uFE0F)\n\u{1F9D8} **Zentangle**: Desenhos meditativos preenchidos de padr\xF5es repetidos (como ondas e tramas) para ajudar no foco, calma e estimular a imagina\xE7\xE3o.\n\u{1F4E6} **Desenho 3D**: Cria uma fant\xE1stica ilus\xE3o de \xF3ptica tridimensional que faz parecer que o desenho tem volume tridimensional e pode flutuar e sair do papel!\n\u{1F48E} **Hiper-realismo**: Um n\xEDvel ultra avan\xE7ado de detalhes minuciosos (rugas, poeiras e reflexos) que faz com que a arte finalizada se assemelhe totalmente a uma fotografia real.\n\nExistem muitos tipos de desenho. Cada artista escolhe o estilo que mais gosta para expressar suas ideias, emo\xE7\xF5es e criatividade. Quanto mais voc\xEA pratica, mais descobre qual \xE9 o seu jeito especial de desenhar! \u2B50\u{1F3A8}"
  },
  {
    palavras: ["desenho de observa\xE7\xE3o", "observacao", "observar objeto"],
    resposta: "\u{1F50D} **Desenho de Observa\xE7\xE3o:** \xC9 quando o artista desenha olhando atentamente para um objeto, pessoa ou paisagem real e tenta representar o que v\xEA.\n\u{1F4A1} **Exemplo pr\xE1tico:** Desenhar uma linda ma\xE7\xE3 ou banana que est\xE1 colocada sobre a mesa bem na sua frente! \u{1F34E}\u{1F34A}"
  },
  {
    palavras: ["desenho de mem\xF3ria", "memoria", "desenho lembranca"],
    resposta: "\u{1F9E0} **Desenho de Mem\xF3ria:** \xC9 feito usando apenas as lembran\xE7as e sentimentos guardados na mente do artista, sem olhar para nenhum modelo.\n\u{1F4A1} **Exemplo pr\xE1tico:** Desenhar a sua pr\xF3pria escola ou sua casa sem olh\xE1-la diretamente enquanto risca o papel! \u{1F3E0}\u2728"
  },
  {
    palavras: ["desenho realista", "realismo no desenho"],
    resposta: "\u{1F4F8} **Desenho Realista:** Procura mostrar as pessoas, texturas e objetos de forma muito parecida com a realidade.\n\u{1F4A1} **Exemplo pr\xE1tico:** Um retrato \xE0 m\xE3o que cuida de cada detalhe para parecer real, quase como uma foto impressa! \u{1F464}\u270D\uFE0F"
  },
  {
    palavras: ["desenho abstrato", "abstrato desenho"],
    resposta: "\u2728 **Desenho Abstrato:** Usa formas, linhas curvas, retas e cores m\xE1gicas e livres para expressar sentimentos \xEDntimos e conceitos puros.\n\u{1F4A1} **Exemplo pr\xE1tico:** Um desenho com c\xEDrculos flutuantes, listras coloridas e manchas coloridas livres na folha! \u{1F3A8}\u{1F300}"
  },
  {
    palavras: ["desenho \xE0 m\xE3o livre", "mao livre", "m\xE3o livre"],
    resposta: "\u{1F450} **Desenho \xE0 M\xE3o Livre:** \xC9 feito sem aux\xEDlio de r\xE9guas acad\xEAmicas ou outros instrumentos geom\xE9tricos retos, guiando-se apenas pela imagina\xE7\xE3o e pela leveza das m\xE3os.\n\u{1F4A1} **Exemplo pr\xE1tico:** Rabiscos e esbo\xE7os criativos que brotam espontaneamente da sua mente! \u{1F58A}\uFE0F"
  },
  {
    palavras: ["mang\xE1", "desenho japones", "mangas"],
    resposta: "\u{1F338} **Mang\xE1:** \xC9 o estilo cl\xE1ssico de desenho japon\xEAs que d\xE1 vida a lindos e expressivos her\xF3is.\n\u{1F4A1} **Exemplo pr\xE1tico:** Personagens das famosas hist\xF3rias em quadrinhos japonesas com olhos brilhantes, grandes e cabelos pontiagudos muito estilosos! \u{1F4D6}\u{1F4FA}"
  },
  {
    palavras: ["caricatura"],
    resposta: "\u{1F92A} **Caricatura:** Exagera e brinca com algumas caracter\xEDsticas mais marcantes de uma pessoa de uma maneira bem divertida e humor\xEDstica.\n\u{1F4A1} **Exemplo pr\xE1tico:** Desenhar um amigo de forma engra\xE7ada com o nariz bem grande ou com as bochechas super infladas! \u{1F604}"
  },
  {
    palavras: ["hist\xF3ria em quadrinhos (hq)", "historias em quadrinhos", "hq", "quadrinhos"],
    resposta: "\u{1F4D6} **Hist\xF3ria em Quadrinhos (HQ):** Conta aventuras incr\xEDveis usando uma sequ\xEAncia de desenhos organizados em quadrinhos ordenados e bal\xF5es de di\xE1logo.\n\u{1F4A1} **Exemplo pr\xE1tico:** Gibis infantis super divertidos como os da Turma da M\xF4nica ou de super-her\xF3is de cinema! \u{1F4A5}"
  },
  {
    palavras: ["chibi"],
    resposta: "\u{1F476} **Chibi:** Personagens super fofos, engra\xE7adinhos e pequeninos, derivados do estilo de mang\xE1 japon\xEAs.\n\u{1F4A1} **Exemplo pr\xE1tico:** Vers\xF5es beb\xEAs de grandes her\xF3is que possuem a cabe\xE7a gigante e o corpinho bem pequeno e delicado! \u{1F970}"
  },
  {
    palavras: ["doodle", "doodles"],
    resposta: "\u{1F300} **Doodle:** S\xE3o pequenos rabiscos e desenhinhos descontra\xEDdos criados de maneira espont\xE2nea na folha.\n\u{1F4A1} **Exemplo pr\xE1tico:** Desenhos r\xE1pidos de florzinhas, cora\xE7\xF5es ou monstros fofos feitos enquanto voc\xEA conversa ou pensa em algo! \u270D\uFE0F"
  },
  {
    palavras: ["cartoon"],
    resposta: "\u{1F3AC} **Cartoon:** Desenhos simples, din\xE2micos e muito coloridos feitos especificamente para fazer e levar humor \xE0s pessoas.\n\u{1F4A1} **Exemplo pr\xE1tico:** Personagens cl\xE1ssicos de desenhos animados como o Snoopy, Garfield e outros her\xF3is brincalh\xF5es! \u{1F37F}"
  },
  {
    palavras: ["estilo disney"],
    resposta: "\u{1F3F0} **Estilo Disney:** Personagens com express\xF5es brilhantes e marcantes, gestos cheios de carisma, cores suaves e uma aura muito amig\xE1vel.\n\u{1F4A1} **Exemplo pr\xE1tico:** Os amados bichinhos das f\xE1bulas como o camundongo Mickey, a rainha do gelo Elsa ou o le\xE3o Simba! \u{1F981}\u2744"
  },
  {
    palavras: ["zentangle"],
    resposta: "\u{1F9D8} **Zentangle:** Desenhos repletos de padr\xF5es geom\xE9tricos ou org\xE2nicos repetidos diversas vezes para estimular o foco, relaxamento e criatividade.\n\u{1F4A1} **Exemplo pr\xE1tico:** Formas abstratas preenchidas com delicadas tramas de linhas e pontinhos repetidos! \u{1F9D8}\u200D\u2640\uFE0F"
  },
  {
    palavras: ["desenho 3d", "desenho tridimensional"],
    resposta: "\u{1F4E6} **Desenho 3D:** Cria uma fant\xE1stica ilus\xE3o de \xF3tica que d\xE1 profundidade e volume tridimensional \xE0 imagem.\n\u{1F4A1} **Exemplo pr\xE1tico:** Um cubo desenhado com perspectiva impec\xE1vel que parece real e quase flutua acima do papel! \u{1F632}"
  },
  {
    palavras: ["hiper-realismo"],
    resposta: "\u{1F48E} **Hiper-realismo:** \xC9 um desenho t\xE3o incrivelmente minucioso e perfeito que engana os olhos!\n\u{1F4A1} **Exemplo pr\xE1tico:** Pinturas e retratos desenhados a l\xE1pis que s\xE3o t\xE3o cheios de poros e texturas reais que parecem uma foto revelada! \u{1F4F8}\u2728"
  },
  {
    palavras: ["estilos de pintura", "estilos_de_pintura", "estilo de pintura", "tipos de pintura", "estilos pintores"],
    resposta: "\u{1F3A8} **Estilos de Pintura do Candinho!**\nCada estilo \xE9 um par de \xF3culos m\xE1gicos que o artista usa para ver o mundo de uma forma \xFAnica. Olha s\xF3 esses estilos super conhecidos:\n\n\u{1F3E0} **Realismo**: Os artistas tentam pintar as pessoas, objetos e lugares exatamente como eles s\xE3o na vida real. (Ex: Personagens de \xC9douard Manet e Ilya Repin. Dica: Parece uma cena que voc\xEA veria todo dia!).\n\u{1F4F7} **Foto-realismo**: As pinturas ficam t\xE3o detalhadas que parecem fotografias de verdade. (Ex: Obras de Richard Estes e Chuck Close. Dica: \xC0s vezes \xE9 dif\xEDcil saber se \xE9 uma foto ou uma pintura!).\n\u{1F4A5} **Expressionismo**: O artista pinta seus fortes sentimentos e emo\xE7\xF5es interiores, como alegria, medo ou tristeza. (Ex: O cl\xE1ssico de Edvard Munch. Dica: As cores fortes e formas distorcidas ajudam a mostrar sentimentos!).\n\u{1F305} **Impressionismo**: Os artistas adoravam pintar ao ar livre, retratando a luz natural, as cores e as impress\xF5es de um instante especial. (Ex: As paisagens de Claude Monet e Pierre Renoir. Dica: De pertinho s\xE3o s\xF3 manchas de pincel; de longe formam uma imagem linda!).\n\u{1F300} **Arte Abstrata**: N\xE3o tenta mostrar objetos reais. Prefere usar cores, formas livres e listras para transmitir ideias livres. (Ex: Telas de Wassily Kandinsky e Mark Rothko. Dica: Cada pessoa pode imaginar algo diferente ao olhar!).\n\u{1F319} **Surrealismo**: Mistura o mundo de sonhos divertidos e realidade de maneiras inesperadas e criativas. (Ex: Mundos fant\xE1sticos do Salvador Dal\xED e Ren\xE9 Magritte. Dica: \xC9 como mergulhar em um sonho estranho e engra\xE7ado!).\n\u{1F964} **Pop Art**: Transforma objetos do dia a dia, latas de refrigerante e produtos de mercado em obras coloridas e chamativas. (Ex: Est\xE9tica inovadora do Andy Warhol e Roy Lichtenstein. Dica: Latas, gibis e an\xFAncios viram arte vibrante!).\n\u{1F441}\uFE0F **Simbolismo**: Usa imagens misteriosas e s\xEDmbolos secretos para contar uma hist\xF3ria e transmitir mensagens escondidas. (Ex: Obras de Gustave Moreau e Mikhail Vrubel. Dica: Cada elemento do quadro pode ter um significado profundo!).\n\u{1F4E6} **Cubismo**: Os objetos e pessoas s\xE3o desenhados desmontados em formas geom\xE9tricas, como cubos, tri\xE2ngulos e cilindros. (Ex: Ideias de Pablo Picasso e Georges Braque. Dica: Parece um quebra-cabe\xE7a de formas!).\n\u26A1 **Futurismo**: Mostra a velocidade, o movimento e a vida moderna de forma din\xE2mica. (Ex: Pintores Umberto Boccioni e Giacomo Balla. Dica: As imagens parecem vibrar, correr e se mover rapidamente!).\n\nCada estilo de pintura \xE9 uma forma diferente de os artistas mostrarem suas ideias, sentimentos e sua maneira de enxergar o mundo. N\xE3o existe um estilo melhor que o outro. Todos ajudam a contar hist\xF3rias atrav\xE9s da arte! \u2B50\u{1F3A8}"
  },
  {
    palavras: ["realismo", "estilo realismo"],
    resposta: "\u{1F3E0} **Realismo:** Os artistas deste estilo tentavam pintar as pessoas, objetos e paisagens exatamente como eles s\xE3o e acontecem na nossa vida pr\xE1tica.\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** \xC9douard Manet, Ilya Repin.\n\u{1F4A1} **Dica do Candinho:** Parece uma cena do cotidiano que voc\xEA poderia presenciar em qualquer esquina comum! \u{1F3E0}"
  },
  {
    palavras: ["foto-realismo", "fotorealismo", "estilo foto-realismo"],
    resposta: "\u{1F4F7} **Foto-realismo:** As pinturas ganham tamanha quantidade de detalhes, texturas e brilhos reais que parecem fotografias profissionais!\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Richard Estes, Chuck Close.\n\u{1F4A1} **Dica do Candinho:** \xC9 super divertido desafiar os olhos e tentar adivinhar se \xE9 uma foto ou uma pintura! \u{1F4F8}"
  },
  {
    palavras: ["expressionismo", "estilo expressionismo"],
    resposta: '\u{1F4A5} **Expressionismo:** O artista usa pinceladas carregadas e cores vibrantes para pintar os seus sentimentos mais fortes de dentro da alma, como uma explos\xE3o de emo\xE7\xF5es.\n\u{1F468}\u200D\u{1F3A8} **Artista famoso:** Edvard Munch (pintor da obra famosa "O Grito").\n\u{1F4A1} **Dica do Candinho:** O formato e as cores de tudo mudam no quadro para representar uma profunda emo\xE7\xE3o! \u{1F631}'
  },
  {
    palavras: ["impressionismo", "estilo impressionismo"],
    resposta: "\u{1F305} **Impressionismo:** Os pintores adoravam pintar ao ar livre sob a luz do sol, colorindo ligeiramente as paisagens exatamente do jeito de sua impress\xE3o visual de cada instante.\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Claude Monet, Pierre Renoir.\n\u{1F4A1} **Dica do Candinho:** De pertinho o quadro parece cheio de borr\xF5es e pinceladas de cores separadas; quando nos afastamos um pouquinho, ele vira uma lind\xEDssima paisagem ensolarada! \u{1F305}\u{1F33F}"
  },
  {
    palavras: ["arte abstrata", "abstracionismo", "estilo abstrato", "abstrato"],
    resposta: "\u{1F300} **Arte Abstrata:** N\xE3o busca pintar objetos reais do dia a dia. Prefere a bela combina\xE7\xE3o livre de linhas, espirais, c\xEDrculos geom\xE9tricos e cores vivas para liberar a imagina\xE7\xE3o de quem v\xEA.\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Wassily Kandinsky, Mark Rothko.\n\u{1F4A1} **Dica do Candinho:** N\xE3o procure por figuras nela! Cada vez que olhamos, podemos viajar numa interpreta\xE7\xE3o fant\xE1stica diferente! \u{1F308}\u2728"
  },
  {
    palavras: ["surrealismo", "estilo surrealismo"],
    resposta: "\u{1F319} **Surrealismo:** \xC9 o maravilhoso encontro das nossas tintas com o mundo curioso e engra\xE7ado das noites de sonhos criativos!\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Salvador Dal\xED, Ren\xE9 Magritte.\n\u{1F4A1} **Dica do Candinho:** Prepare-se para ver coisas m\xE1gicas: rel\xF3gios derretendo, animais com pernas de girafa ou homens voando de guarda-chuva! \u{1F34F}\u{1F418}"
  },
  {
    palavras: ["pop art", "estilo pop art"],
    resposta: "\u{1F964} **Pop Art:** Transforma produtos industriais modernos, latas de sopa de supermercado, astros de cinema e gibis em grandes pain\xE9is art\xEDsticos coloridos e vibrantes!\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Andy Warhol, Roy Lichtenstein.\n\u{1F4A1} **Dica do Candinho:** Usa tons super fluorescentes, carimbos repetidos e visual de propagandas de revista! \u{1F964}\u{1F37F}"
  },
  {
    palavras: ["simbolismo", "estilo simbolismo"],
    resposta: "\u{1F441}\uFE0F **Simbolismo:** O quadro \xE9 uma ca\xE7a ao tesouro de segredinhos ocultos! O pintor coloca v\xE1rios enigmas e s\xEDmbolos para expressar uma mensagem po\xE9tica.\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Gustave Moreau, Mikhail Vrubel.\n\u{1F4A1} **Dica do Candinho:** Cada pequena flor, adorno ou objeto no cen\xE1rio esconde um significado profundo para decifrarmos! \u{1F441}\uFE0F\u2728"
  },
  {
    palavras: ["cubismo", "estilo cubismo"],
    resposta: "\u{1F4E6} **Cubismo:** O artista desconstr\xF3i as coisas do mundo em formas geom\xE9tricas perfeitas, como tri\xE2ngulos, ret\xE2ngulos e cubos, mostrando v\xE1rios \xE2ngulos ao mesmo tempo!\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Pablo Picasso, Georges Braque.\n\u{1F4A1} **Dica do Candinho:** Parece um maravilhoso e brilhante quebra-cabe\xE7a geom\xE9trico remoldado! \u{1F53A}\u{1F4E6}"
  },
  {
    palavras: ["futurismo", "estilo futurismo"],
    resposta: "\u26A1 **Futurismo:** Os artistas de vanguarda eram fascinados pela acelera\xE7\xE3o dos novos autom\xF3veis, f\xE1bricas, dinamismo e luzes das cidades modernas.\n\u{1F468}\u200D\u{1F3A8} **Artistas famosos:** Umberto Boccioni, Giacomo Balla.\n\u{1F4A1} **Dica do Candinho:** Os objetos parecem duplicados ou tremelicando, dando uma real e fant\xE1stica sensa\xE7\xE3o de movimento de alta velocidade na tela! \u{1F3CE}\uFE0F\u26A1"
  },
  // ===== ELEMENTOS DAS ARTES VISUAIS =====
  {
    palavras: ["ponto", "o que \xE9 ponto"],
    resposta: 'O ponto \xE9 a menor marca no desenho! Sozinho chama aten\xE7\xE3o, mas muitos pontos juntos podem formar linhas, formas e at\xE9 texturas. No pontilhismo, os pontos criam imagens incr\xEDveis! Seurat usou isso em "Tarde de domingo na Ilha de Grande Jatte". \u{1F534}',
    matchedKey: "ponto"
  },
  {
    palavras: ["linha", "o que \xE9 linha"],
    resposta: "A linha \xE9 como um ponto que saiu passeando! Pode ser reta, curva, fina ou grossa. Linhas retas parecem firmes; curvas s\xE3o mais suaves. D\xFCrer e Kandinsky adoravam brincar com linhas! \u{1F4CF}",
    matchedKey: "linha"
  },
  {
    palavras: ["forma", "formas", "o que e forma", "o que sao formas", "o que e uma forma", "defini\xE7\xE3o de forma", "definicao de forma"],
    resposta: "Formas s\xE3o as figuras que criamos quando fechamos uma linha! \u{1F53A}\u{1F535}\u{1F7E9} Elas podem ser geom\xE9tricas (como c\xEDrculos, quadrados e tri\xE2ngulos) ou org\xE2nicas (com formatos livres e naturais, como uma nuvem ou uma folha). Joan Mir\xF3 e Pablo Picasso amavam brincar com formas!",
    matchedKey: "forma"
  },
  {
    palavras: ["espa\xE7o", "espaco", "o que \xE9 espa\xE7o", "o que e espaco", "defini\xE7\xE3o de espa\xE7o", "definicao de espaco"],
    resposta: "O espa\xE7o na arte \xE9 a \xE1rea onde o artista cria seu trabalho! \u{1F30C} Pode ser o espa\xE7o bidimensional (como o papel ou a tela, onde jogamos com altura e largura) ou o espa\xE7o tridimensional (como nas esculturas, com profundidade de verdade). O espa\xE7o pode ser cheio (positivo) ou vazio (negativo) - os dois s\xE3o super importantes para equilibrar a imagem!",
    matchedKey: "espaco"
  },
  {
    palavras: ["textura", "o que \xE9 textura", "defini\xE7\xE3o de textura", "definicao de textura"],
    resposta: "A textura \xE9 o aspecto de uma superf\xEDcie que podemos sentir com as m\xE3os ou imaginar com os olhos! \u{1F9F1} Pode ser \xE1spera como o tronco de uma \xE1rvore, macia como o pelo de um gatinho, lisa como um vidro ou enrugada como o papel amassado. Na pintura, artistas usam pinceladas grossas para criar texturas reais que quase d\xE1 para tocar!",
    matchedKey: "textura"
  },
  {
    palavras: ["luz", "luz e sombra", "o que \xE9 luz", "defini\xE7\xE3o de luz", "definicao de luz"],
    resposta: "A luz na arte serve para dar volume, criar profundidade e mostrar o caminho dos olhos! \u{1F4A1} Junto com as sombras, a luz faz os objetos parecerem redondos e reais em uma folha plana. Pintores como Rembrandt eram mestres em usar fortes contrastes de luz e sombra para criar cenas m\xE1gicas e cheias de mist\xE9rio.",
    matchedKey: "luz"
  },
  { palavras: ["cores prim\xE1rias", "primarias", "o que s\xE3o cores prim\xE1rias"], resposta: "Cores prim\xE1rias ou puras s\xE3o aquelas que n\xE3o podem ser obtidas por meio de outras misturas. Elas s\xE3o: amarelo, azul e vermelho. Com elas, podemos criar todas as outras cores! \u{1F534}\u{1F535}\u{1F7E1}" },
  { palavras: ["cores secund\xE1rias", "secundarias", "o que s\xE3o cores secund\xE1rias"], resposta: "Cores secund\xE1rias s\xE3o geradas por meio da mistura de duas cores prim\xE1rias. \u{1F308} Amarelo + vermelho = laranja \u{1F7E0}, vermelho + azul = roxo ou violeta \u{1F7E3}, azul + amarelo = verde \u{1F7E2}. Que combina\xE7\xE3o legal!" },
  { palavras: ["cores terci\xE1rias", "terciarias", "o que s\xE3o cores terci\xE1rias"], resposta: "Cores terci\xE1rias s\xE3o geradas pela mistura de uma cor prim\xE1ria com uma cor secund\xE1ria. S\xE3o elas: vermelho-arroxeado (vinho), vermelho-alaranjado, amarelo-esverdeado, amarelo-alaranjado (bege), azul-arroxeado e azul-esverdeado (verde-\xE1gua). Um mont\xE3o de cores! \u{1F308}" },
  { palavras: ["cores complementares", "complementares", "contrastantes", "o que s\xE3o cores complementares"], resposta: "Cores complementares s\xE3o opostas no c\xEDrculo crom\xE1tico e criam o m\xE1ximo de contraste! Os tr\xEAs pares principais s\xE3o: \u{1F534} vermelho e \u{1F7E2} verde, \u{1F7E1} amarelo e \u{1F7E3} violeta (roxo), \u{1F535} azul e \u{1F7E0} laranja. Uma real\xE7a a outra! \u26A1" },
  { palavras: ["cores quentes", "quentes", "o que s\xE3o cores quentes"], resposta: "Cores quentes transmitem sensa\xE7\xE3o de calor e energy! S\xE3o elas: vermelho, laranja e amarelo. Elas lembram sol e fogo, d\xE3o alegria e movimento! \u2600\uFE0F" },
  { palavras: ["cores frias", "frias", "o que s\xE3o cores frias"], resposta: "Cores frias transmitem sensa\xE7\xE3o de calma e serenidade! S\xE3o elas: azul, verde e violeta (roxo). Elas lembram \xE1gua, c\xE9u e floresta. \u2744\uFE0F" },
  { palavras: ["cores neutras", "neutras", "o que s\xE3o cores neutras"], resposta: "Cores neutras s\xE3o aquelas que t\xEAm pouca reflex\xE3o da luz, como os tons de cinza e marrom. Elas s\xE3o \xF3timas para equilibrar outras cores! \u26AA\u26AB" },
  {
    palavras: ["cor", "o que \xE9 cor", "defini\xE7\xE3o de cor", "definicao de cor"],
    resposta: 'As cores s\xE3o sensa\xE7\xF5es visuais que nossos olhos captam quando h\xE1 luz presente. A palavra "cor" vem do latim (color) e significa "cobrir" ou "ocultar". A luz branca \xE9 a uni\xE3o das sete cores do arco-\xEDris: vermelho, laranja, amarelo, verde, azul, anil e violeta. J\xE1 a cor preta representa a aus\xEAncia de luz. \u{1F308}',
    matchedKey: "cor"
  },
  { palavras: ["c\xEDrculo crom\xE1tico", "circulo das cores", "roda de cores"], resposta: "O c\xEDrculo crom\xE1tico \xE9 como um arco-\xEDris organizado em volta. Nele, as cores est\xE3o dispostas em ordem: vermelho, laranja, amarelo, verde, azul, violeta. Ajuda a ver quais cores combinam! \u{1F504}" },
  { palavras: ["harmonia de cores", "harmonia crom\xE1tica", "combina\xE7\xE3o de cores"], resposta: "Harmonia de cores \xE9 quando escolhemos cores que ficam bonitas juntas. Por exemplo, cores vizinhas no c\xEDrculo (como azul e verde) criam harmonia suave; cores opostas (como azul e laranja) criam contraste vibrante! \u{1F308}\u2728" },
  { palavras: ["escala de cores", "gradiente", "degrad\xEA"], resposta: "Uma escala de cores \xE9 quando uma cor vai ficando mais clara ou mais escura aos poucos. Voc\xEA pode fazer isso adicionando branco (tom pastel) ou preto (sombra). Fica lindo em pinturas! \u{1F3A8}" },
  // ===== TEORIA MUSICAL PARA CRIANÇAS =====
  { palavras: ["som", "o que \xE9 som"], resposta: "\u{1F3B5} Som \xE9 tudo o que podemos ouvir. O sil\xEAncio tamb\xE9m faz parte da m\xFAsica, ele ajuda o som a \u201Crespirar\u201D." },
  { palavras: ["altura do som", "som agudo", "som grave"], resposta: "\u{1F3B5} Som agudo \xE9 fininho e alto, como o canto de um passarinho \u{1F426}. Som grave \xE9 grosso e forte, como um tambor \u{1F941}." },
  { palavras: ["intensidade", "volume", "som forte", "som fraco"], resposta: "\u{1F3B5} Intensidade \xE9 o volume do som: forte \xE9 o som alto; fraco \xE9 o som baixinho. A m\xFAsica pode crescer e diminuir como uma onda \u{1F30A}." },
  { palavras: ["dura\xE7\xE3o do som", "sons curtos", "sons longos"], resposta: "\u{1F3B5} Dura\xE7\xE3o \xE9 quanto tempo um som dura. Sons curtos e longos juntos criam o ritmo da m\xFAsica." },
  { palavras: ["ritmo", "o que \xE9 ritmo"], resposta: "\u{1F3B5} Ritmo \xE9 o cora\xE7\xE3o da m\xFAsica \u{1F493}. Acontece quando batemos palmas, p\xE9s ou acompanhamos uma can\xE7\xE3o." },
  { palavras: ["melodia", "o que \xE9 melodia"], resposta: "\u{1F3B5} Melodia \xE9 a linha musical que cantamos \u{1F3B6}. \xC9 aquela parte da m\xFAsica que fica na cabe\xE7a o dia todo." },
  { palavras: ["instrumentos musicais", "tipos de instrumentos"], resposta: "\u{1F3B5} Instrumentos musicais: sopro (flauta, trompete), cordas (viol\xE3o, violino), percuss\xE3o (tambor, pandeiro). Cada instrumento tem sua voz especial." },
  { palavras: ["m\xFAsica \xE9 express\xE3o"], resposta: "\u{1F3B5} A m\xFAsica pode mostrar alegria, tristeza, calma ou energia \u{1F60A}\u{1F622}. N\xE3o precisa falar para comunicar!" },
  { palavras: ["o que \xE9 m\xFAsica", "defini\xE7\xE3o de m\xFAsica"], resposta: "\u2728 M\xFAsica \xE9 som organized com ritmo, melodia e emo\xE7\xE3o. Toda crian\xE7a pode brincar, criar e aprender m\xFAsica com o corpo, a voz e a imagina\xE7\xE3o \u{1F3A8}\u{1F3B6}" },
  // ===== PERÍODOS DA MÚSICA E COMPOSITORES =====
  {
    palavras: ["idade m\xE9dia", "m\xFAsica medieval", "hildegard von bingen"],
    resposta: "\u{1F3B6} Na Idade M\xE9dia (s\xE9c. V\u2013XV), a m\xFAsica era ligada \xE0 igreja, cantada em grupo, sem instrumentos. Hildegard von Bingen foi uma monja compositora e pensadora. Ela \xE9 uma das primeiras mulheres compositoras da hist\xF3ria! Obra famosa: Ordo Virtutum."
  },
  {
    palavras: ["renascimento", "m\xFAsica renascentista", "palestrina"],
    resposta: "\u{1F3B6} No Renascimento (s\xE9c. XV\u2013XVI), a m\xFAsica ficou mais suave, com v\xE1rias vozes juntas, equil\xEDbrio e beleza. Giovanni Pierluigi da Palestrina foi um compositor italiano de m\xFAsica sacra. Obra famosa: Missa Papae Marcelli."
  },
  {
    palavras: ["barroco", "m\xFAsica barroca", "bach", "vivaldi"],
    resposta: "\u{1F3B6} O per\xEDodo Barroco (1600\u20131750) tem m\xFAsica cheia de emo\xE7\xE3o, ornamentos e contrastes. Johann Sebastian Bach foi um mestre alem\xE3o da harmonia. Obra famosa: Toccata e Fuga em R\xE9 Menor. Antonio Vivaldi era italiano e criou m\xFAsicas alegres e descritivas, como As Quatro Esta\xE7\xF5es."
  },
  {
    palavras: ["cl\xE1ssico", "per\xEDodo cl\xE1ssico", "mozart", "haydn"],
    resposta: "\u{1F3B6} No per\xEDodo Cl\xE1ssico (1750\u20131820), a m\xFAsica \xE9 equilibrada, clara e organizada. Wolfgang Amadeus Mozart foi um g\xEAnio musical desde crian\xE7a, famoso por \xF3peras e sinfonias como Eine kleine Nachtmusik. Joseph Haydn, austr\xEDaco, foi professor de Mozart e ficou conhecido por suas sinfonias, como a Sinfonia Surpresa."
  },
  {
    palavras: ["rom\xE2ntico", "per\xEDodo rom\xE2ntico", "beethoven", "chopin"],
    resposta: "\u{1F3B6} O Romantismo (s\xE9c. XIX) trouxe m\xFAsica intensa, cheia de sentimentos e hist\xF3rias. Ludwig van Beethoven revolucionou a m\xFAsica mesmo ficando surdo. Sua obra mais famosa \xE9 a Sinfonia n\xBA 9. Fr\xE9d\xE9ric Chopin era um pianista polon\xEAs que criou m\xFAsicas delicadas e po\xE9ticas chamadas Noturnos."
  },
  {
    palavras: ["moderno", "m\xFAsica moderna", "debussy"],
    resposta: "\u{1F3B6} Na m\xFAsica moderna (s\xE9c. XX), os compositores experimentaram novos sons e liberdade musical. Claude Debussy, franc\xEAs, criou m\xFAsicas como pinturas sonoras, cheias de climas e sensa\xE7\xF5es. Obra famosa: Clair de Lune."
  },
  { palavras: ["resumo per\xEDodos musicais"], resposta: "\u2728 Resumo r\xE1pido: Idade M\xE9dia: m\xFAsica religiosa; Renascimento: harmonia vocal; Barroco: emo\xE7\xE3o e movimento; Cl\xE1ssico: equil\xEDbrio e clareza; Rom\xE2ntico: sentimento e drama; Moderno: experimenta\xE7\xE3o." },
  // ===== MÚSICA INFANTIL (ARTISTAS) =====
  {
    palavras: ["palavra cantada"],
    resposta: "\u{1F9F8} A Palavra Cantada \xE9 a dupla Sandra Peres e Paulo Tatit, que faz m\xFAsicas educativas, po\xE9ticas e divertidas para crian\xE7as."
  },
  {
    palavras: ["toquinho"],
    resposta: "\u{1F9F8} Toquinho \xE9 um cantor e compositor brasileiro com can\xE7\xF5es suaves e afetivas que encantam crian\xE7as e adultos."
  },
  {
    palavras: ["bia bedran"],
    resposta: "\u{1F9F8} Bia Bedran traz brincadeiras cantadas, folclore e hist\xF3rias, com forte liga\xE7\xE3o com a educa\xE7\xE3o infantil."
  },
  {
    palavras: ["h\xE9lio ziskind"],
    resposta: "\u{1F9F8} H\xE9lio Ziskind \xE9 conhecido por can\xE7\xF5es educativas e trilhas infantis para TV."
  },
  {
    palavras: ["xuxa"],
    resposta: "\u{1F9F8} Xuxa \xE9 um \xEDcone do pop infantil, com coreografias, cores e refr\xF5es f\xE1ceis que marcaram \xE9poca."
  },
  {
    palavras: ["tiquequ\xEA"],
    resposta: "\u{1F9F8} Tiquequ\xEA \xE9 um grupo com humor, jogos de palavras e criatividade, com linguagem pr\xF3xima do universo infantil atual."
  },
  {
    palavras: ["the wiggles"],
    resposta: "\u{1F9F8} The Wiggles \xE9 um grupo australiano que une m\xFAsica e dan\xE7a para aprender brincando."
  },
  {
    palavras: ["raffi"],
    resposta: "\u{1F9F8} Raffi \xE9 um cantor de folk infantil com mensagens de respeito, natureza e amizade."
  },
  {
    palavras: ["disney"],
    resposta: "\u{1F9F8} As m\xFAsicas da Disney s\xE3o trilhas sonoras de filmes que encantam com hist\xF3rias, emo\xE7\xE3o e can\xE7\xF5es inesquec\xEDveis."
  },
  // ===== GÊNEROS MUSICAIS =====
  {
    palavras: ["mpb", "m\xFAsica popular brasileira"],
    resposta: "\u{1F3A4} MPB mistura tradi\xE7\xE3o e modernidade, com letras po\xE9ticas, sociais e afetivas. Usa viol\xE3o, piano e ritmos brasileiros."
  },
  {
    palavras: ["funk"],
    resposta: "\u{1F3A4} Funk tem batida forte e repetitiva. Surgiu nas periferias como express\xE3o social e dan\xE7a."
  },
  {
    palavras: ["pop"],
    resposta: "\u{1F3A4} Pop \xE9 m\xFAsica popular e acess\xEDvel, com refr\xF5es f\xE1ceis e ritmo dan\xE7ante. Feito para atingir muitos p\xFAblicos."
  },
  {
    palavras: ["rock"],
    resposta: "\u{1F3A4} Rock tem energia, atitude e guitarras el\xE9tricas. Pode ser calmo ou barulhento, e fala de liberdade e juventude."
  },
  {
    palavras: ["samba"],
    resposta: "\u{1F3A4} Samba \xE9 ritmo brasileiro ligado \xE0 dan\xE7a e \xE0 comunidade. Usa percuss\xE3o e alegria, muito presente no carnaval."
  },
  {
    palavras: ["bossa nova"],
    resposta: "\u{1F3A4} Bossa nova \xE9 um samba mais suave e sofisticado, com clima calmo e viol\xE3o delicado."
  },
  {
    palavras: ["ax\xE9"],
    resposta: "\u{1F3A4} Ax\xE9 \xE9 ritmo festivo da Bahia, para dan\xE7ar, pular e cantar em grupo. Muito usado em carnavais."
  },
  {
    palavras: ["forr\xF3"],
    resposta: "\u{1F3A4} Forr\xF3 \xE9 ritmo nordestino animado ou rom\xE2ntico, com sanfona, zabumba e tri\xE2ngulo. Dan\xE7a em par."
  },
  {
    palavras: ["blues"],
    resposta: "\u{1F3A4} Blues \xE9 m\xFAsica de sentimento profundo, que fala de tristeza, esperan\xE7a e vida. Base de muitos outros estilos."
  },
  {
    palavras: ["jazz"],
    resposta: "\u{1F3A4} Jazz \xE9 improvisa\xE7\xE3o e liberdade musical. Cada m\xFAsico cria no momento. Pode ser suave ou animado."
  },
  {
    palavras: ["reggae"],
    resposta: "\u{1F3A4} Reggae tem ritmo tranquilo e marcado, com mensagens de paz, amor e igualdade. Nasceu na Jamaica."
  },
  {
    palavras: ["heavy metal"],
    resposta: "\u{1F3A4} Heavy metal \xE9 a vers\xE3o mais pesada do rock, com guitarras distorcidas e temas intensos."
  },
  {
    palavras: ["house"],
    resposta: "\u{1F3A4} House \xE9 m\xFAsica eletr\xF4nica dan\xE7ante, com batida constante, usada em festas."
  },
  {
    palavras: ["techno", "tecno"],
    resposta: "\u{1F3A4} Techno \xE9 eletr\xF4nica mais minimalista e futurista, com sons repetidos."
  },
  {
    palavras: ["hip hop"],
    resposta: "\u{1F3A4} Hip hop \xE9 uma cultura que envolve m\xFAsica, dan\xE7a e arte visual. Ritmo marcado e letras faladas sobre a realidade."
  },
  {
    palavras: ["gospel"],
    resposta: "\u{1F3A4} Gospel \xE9 m\xFAsica religiosa crist\xE3, com letras de f\xE9, esperan\xE7a e louvor."
  },
  {
    palavras: ["country"],
    resposta: "\u{1F3A4} Country \xE9 m\xFAsica ligada \xE0 vida no campo, com instrumentos ac\xFAsticos e hist\xF3rias do dia a dia."
  },
  {
    palavras: ["rap"],
    resposta: "\u{1F3A4} Rap \xE9 forma musical falada e ritmada, com letras fortes e cr\xEDticas da vida urbana."
  },
  // ===== DANÇA =====
  {
    palavras: ["dan\xE7a", "o que \xE9 dan\xE7a", "defini\xE7\xE3o de dan\xE7a"],
    resposta: "\u{1F483} A dan\xE7a \xE9 uma pr\xE1tica de express\xE3o corporal por meio do movimento, que traz benef\xEDcios como autoconhecimento, lazer, criatividade, relaxamento e melhora da sa\xFAde, por ser tamb\xE9m um exerc\xEDcio f\xEDsico. Al\xE9m de pr\xE1tica recreativa ou profissional, a dan\xE7a \xE9 uma \xE1rea de conhecimento, constru\xEDda ao longo do tempo por estudos sobre o corpo, o movimento e seus significados. Ao dan\xE7ar, o corpo se relaciona com tempo, espa\xE7o e som, e a dan\xE7a surge da integra\xE7\xE3o desses elementos com o movimento corporal, estimulando a cria\xE7\xE3o e a criatividade."
  },
  {
    palavras: ["objetivos da dan\xE7a", "para que serve a dan\xE7a"],
    resposta: "\u{1F3AF} A dan\xE7a tem v\xE1rios objetivos: lazer (divers\xE3o e socializa\xE7\xE3o), trabalho (atua\xE7\xE3o profissional de dan\xE7arinos), exerc\xEDcio f\xEDsico (melhora da sa\xFAde e condicionamento) e manifesta\xE7\xE3o cultural (preserva\xE7\xE3o de tradi\xE7\xF5es e costumes)."
  },
  {
    palavras: ["tipos de dan\xE7a", "estilos de dan\xE7a"],
    resposta: "Existem muitos tipos de dan\xE7a! Alguns exemplos: \u{1FA70} Bal\xE9 (dan\xE7a cl\xE1ssica, t\xE9cnica e disciplinada), \u{1F483} Dan\xE7a contempor\xE2nea (liberdade de movimentos, experimenta\xE7\xE3o), \u{1F57A} Dan\xE7as urbanas (estilos criados em contextos urbanos e perif\xE9ricos), \u{1F3B7} Jazz (improviso e ra\xEDzes populares), \u{1F1E7}\u{1F1F7} Samba (express\xE3o da cultura popular brasileira), \u{1F335} Forr\xF3 (dan\xE7a em par do Nordeste), \u{1F45E} Sapateado (dan\xE7a r\xEDtmica com sons dos p\xE9s), \u{1F483} Tango (passos argentinos elegantes), \u{1F336}\uFE0F Salsa (ritmo caribenho alegre) e \u{1F451} Valsa (deslizar suave em tr\xEAs tempos)."
  },
  {
    palavras: ["tango", "dan\xE7a tango"],
    resposta: "\u{1F483} **TANGO**\n\n**Origem:**\nO Tango surgiu na Argentina, principalmente na cidade de Buenos Aires, h\xE1 mais de 100 anos.\n\n**Caracter\xEDsticas:**\n\xC9 uma dan\xE7a feita em dupla, com movimentos elegantes, passos marcados e muita express\xE3o. Os dan\xE7arinos costumam dan\xE7ar bem pr\xF3ximos um do outro.",
    matchedKey: "tango"
  },
  {
    palavras: ["salsa", "dan\xE7a salsa"],
    resposta: "\u{1F336}\uFE0F **SALSA**\n\n**Origem:**\nA Salsa surgiu da mistura de ritmos caribenhos, especialmente em Cuba, e ficou muito popular em v\xE1rios pa\xEDses da Am\xE9rica Latina.\n\n**Caracter\xEDsticas:**\n\xC9 uma dan\xE7a alegre e animada, com passos r\xE1pidos, giros e muito ritmo. Geralmente \xE9 dan\xE7ada em dupla ao som de m\xFAsicas vibrantes.",
    matchedKey: "salsa"
  },
  {
    palavras: ["valsa", "dan\xE7a valsa"],
    resposta: "\u{1F451} **VALSA**\n\n**Origem:**\nA Valsa nasceu na \xC1ustria e na Alemanha no s\xE9culo XVIII.\n\n**Caracter\xEDsticas:**\n\xC9 uma dan\xE7a suave e elegante, realizada em dupla. Seus movimentos s\xE3o circulares e acompanham o compasso de tr\xEAs tempos da m\xFAsica, dando a sensa\xE7\xE3o de que os dan\xE7arinos est\xE3o deslizando pelo sal\xE3o.",
    matchedKey: "valsa"
  },
  {
    palavras: ["elementos da dan\xE7a"],
    resposta: "Os principais elementos da dan\xE7a s\xE3o: movimento (gestos e a\xE7\xF5es do corpo, organizados por flu\xEAncia, espa\xE7o, peso e tempo, estudados por Rudolf Laban), espa\xE7o (o local onde a dan\xE7a acontece), som (m\xFAsica, respira\xE7\xE3o, batidas do corpo) e corpo (o instrumento da dan\xE7a, valorizando a diversidade corporal, social e cultural)."
  },
  {
    palavras: ["bal\xE9", "ballet", "dan\xE7a cl\xE1ssica", "bale"],
    resposta: "\u{1FA70} O bal\xE9 \xE9 uma dan\xE7a cl\xE1ssica, t\xE9cnica e disciplinada, que exige anos de treino. Surgiu nas cortes italianas e se desenvolveu na Fran\xE7a e R\xFAssia. As bailarinas usam sapatilhas de ponta e os movimentos s\xE3o precisos e graciosos.",
    matchedKey: "bale"
  },
  {
    palavras: ["dan\xE7a contempor\xE2nea", "danca contemporanea"],
    resposta: "\u{1F483} A dan\xE7a contempor\xE2nea busca liberdade de movimentos, experimenta\xE7\xE3o e diversidade de corpos. Ela mistura t\xE9cnicas e express\xF5es, sem regras fixas, e muitas vezes aborda temas sociais e pol\xEDticos.",
    matchedKey: "danca_contemporanea"
  },
  {
    palavras: ["dan\xE7as urbanas", "hip hop dan\xE7a", "street dance", "hip hop", "hiphop"],
    resposta: "\u{1F57A} As dan\xE7as urbanas s\xE3o estilos criados em contextos urbanos e perif\xE9ricos, como o hip hop, breaking, locking e popping. T\xEAm forte significado social e cultural, expressando a realidade e a criatividade das comunidades.",
    matchedKey: "hip_hop"
  },
  {
    palavras: ["jazz dan\xE7a", "jazz dance"],
    resposta: "\u{1F3B7} O jazz \xE9 um estilo de dan\xE7a marcado pelo improviso e pelas ra\xEDzes populares. Surgiu nos Estados Unidos com a m\xFAsica jazz e incorpora elements do bal\xE9 e da dan\xE7a moderna, com movimentos energ\xE9ticos e expressivos."
  },
  {
    palavras: ["samba dan\xE7a", "dan\xE7a samba"],
    resposta: "\u{1F1E7}\u{1F1F7} O samba \xE9 uma express\xE3o da cultura popular brasileira, com influ\xEAncia africana. Como dan\xE7a, pode ser dan\xE7ado solo ou em par, com movimentos de quadris, passos r\xE1pidos e muita alegria. \xC9 a alma do carnaval!"
  },
  {
    palavras: ["forr\xF3 dan\xE7a", "dan\xE7a forr\xF3"],
    resposta: "\u{1F335} O forr\xF3 \xE9 uma dan\xE7a em par, origin\xE1ria do Nordeste brasileiro. Tem ritmos como xote, bai\xE3o e arrasta-p\xE9. A dan\xE7a \xE9 coladinha, com passos b\xE1sicos e muita cumplicidade entre os parceiros."
  },
  {
    palavras: ["sapateado", "tap dance"],
    resposta: "\u{1F45E} O sapateado \xE9 uma dan\xE7a r\xEDtmica em que os p\xE9s produzem sons ao bater no ch\xE3o com sapatos especiais que t\xEAm placas de metal. Pode ser dan\xE7ado solo ou em grupo, e exige coordena\xE7\xE3o e musicalidade."
  },
  {
    palavras: ["frevo", "dan\xE7a frevo"],
    resposta: "\u{1F389} Frevo \xE9 uma dan\xE7a t\xEDpica de Pernambuco, cheia de energia e passos malabar\xEDsticos. Os dan\xE7arinos usam sombrinhas coloridas e se movem rapidamente ao som de uma orquestra de metais. \xC9 patrim\xF4nio cultural imaterial da humanidade!",
    matchedKey: "frevo"
  },
  {
    palavras: ["bumba meu boi", "bumba boi", "boi bumb\xE1"],
    resposta: "\u{1F402} O Bumba Meu Boi \xE9 uma festa do folclore brasileiro, muito forte no Maranh\xE3o. Conta a hist\xF3ria de um boi que morre e revive, com personagens como o Pai Francisco e a M\xE3e Catirina. Tem dan\xE7a, m\xFAsica e teatro ao mesmo tempo!"
  },
  {
    palavras: ["caboclinho", "caboclinhos"],
    resposta: "\u{1F33F} Caboclinho \xE9 uma dan\xE7a ind\xEDgena do Nordeste, com cocares de penas, arco e flecha. Os dan\xE7arinos imitam a ca\xE7a e a guerra, com passos r\xE1pidos e muita for\xE7a. \xC9 uma forma de preservar a cultura dos povos origin\xE1rios.",
    matchedKey: "caboclinho"
  },
  {
    palavras: ["cavalo marinho"],
    resposta: "\u{1F434} Cavalo Marinho \xE9 uma dan\xE7a dram\xE1tica do folclore pernambucano. Mistura m\xFAsica, dan\xE7a e teatro, com personagens como o Cavalo Marinho (um cavalo encantado), Mateus e Catirina. \xC9 uma grande brincadeira!",
    matchedKey: "cavalo_marinho"
  },
  {
    palavras: ["coco", "dan\xE7a coco", "coco pernambucano", "coco de roda"],
    resposta: "\u{1F965} Coco \xE9 uma dan\xE7a de roda do Nordeste, com sapateado e palmas. Surgiu nos engenhos de cana, quando os trabalhadores batiam os p\xE9s no ch\xE3o enquanto quebravam coco. O ritmo \xE9 contagiante!",
    matchedKey: "coco_pernambucano"
  },
  {
    palavras: ["samba de roda"],
    resposta: "\u{1F504} Samba de roda \xE9 uma forma tradicional de samba, dan\xE7ado em roda, com participa\xE7\xE3o de todos. Nasceu no Rec\xF4ncavo Baiano e \xE9 patrim\xF4nio cultural brasileiro. As pessoas entram na roda, sambam e d\xE3o lugar a outras."
  },
  {
    palavras: ["jongo"],
    resposta: '\u{1F941} Jongo \xE9 uma dan\xE7a de origem africana, praticada no sudeste do Brasil. Os tambores chamados "caxambu" e "angona" puxam o ritmo, e os dan\xE7arinos respondem com versos improvisados. Tem umbigada e muita ancestralidade.',
    matchedKey: "jongo"
  },
  {
    palavras: ["congada", "dan\xE7a congada", "festa da congada"],
    resposta: "\u{1F451} **CONGADA**\n\n**Origem:**\nA Congada (ou Congo) \xE9 uma express\xE3o cultural e religiosa que nasceu no Brasil da mistura de tradi\xE7\xF5es africanas com europeias (cat\xF3licas).\n\n**Caracter\xEDsticas:**\n\xC9 um desfile coreografado com muita m\xFAsica, cantos e dan\xE7as que encena a coroa\xE7\xE3o de um Rei do Congo. Tem batalhas simb\xF3licas de espadas, roupas coloridas e som de tambores, maracas e gungas!",
    matchedKey: "congada"
  },
  {
    palavras: ["ciranda", "dan\xE7a ciranda", "roda de ciranda"],
    resposta: "\u{1F308} **CIRANDA**\n\n**Origem:**\nA Ciranda \xE9 uma dan\xE7a folcl\xF3rica de roda muito tradicional do Brasil, famosa especialmente nas praias de Pernambuco, como a Ilha de Itamarac\xE1.\n\n**Caracter\xEDsticas:**\nPessoas de todas as idades d\xE3o as m\xE3os em uma grande roda na areia ou na pra\xE7a, balan\xE7ando o corpo no ritmo das ondas do mar ao som de bumbo, caixa e tarol. Todos s\xE3o bem-vindos para girar e dan\xE7ar!",
    matchedKey: "ciranda"
  },
  {
    palavras: ["fandango", "dan\xE7a fandango"],
    resposta: "\u{1F525} **FANDANGO**\n\n**Origem:**\nO Fandango tem ra\xEDzes muito antigas e chegou ao sul e sudeste do Brasil trazido pelos colonizadores espanh\xF3is e portugueses.\n\n**Caracter\xEDsticas:**\n\xC9 uma dan\xE7a muito animada onde os dan\xE7arinos batem palmas e sapateiam forte com tamancos de madeira, criando um ritmo contagiante no ch\xE3o. Em par ou em grupo, \xE9 pura energia!",
    matchedKey: "fandango"
  },
  {
    palavras: ["dan\xE7a de sal\xE3o", "danca de salao"],
    resposta: "\u{1F483} **DAN\xC7A DE SAL\xC3O**\n\n**Origem:**\nA dan\xE7a de sal\xE3o engloba v\xE1rios ritmos que come\xE7aram a ser dan\xE7ados em dupla em cortes e sal\xF5es na Europa, evoluindo no mundo inteiro com ritmos latinos e brasileiros.\n\n**Caracter\xEDsticas:**\n\xC9 dan\xE7ada em pares (dois a dois), onde as duas pessoas deslizam, giram e se movem em sintonia fina seguindo o compasso da m\xFAsica, como no bolero, forr\xF3, samba de gafieira e tango.",
    matchedKey: "danca_de_salao"
  },
  {
    palavras: ["catira", "dan\xE7a catira"],
    resposta: "\u{1F920} **CATIRA**\n\n**Origem:**\nA Catira (ou Cateret\xEA) \xE9 uma dan\xE7a t\xEDpica do folclore do interior do Brasil, muito popular em Goi\xE1s, Minas Gerais e S\xE3o Paulo.\n\n**Caracter\xEDsticas:**\n\xC9 dan\xE7ada principalmente ao som da viola caipira. Os dan\xE7arinos se enfileiram uns de frente para os outros e fazem um ritmo contagiante batendo palmas e sapateando forte no ch\xE3o. \xC9 cheia de ritmo e energia caipira!",
    matchedKey: "catira"
  },
  {
    palavras: ["carimb\xF3", "carimbo", "dan\xE7a carimb\xF3"],
    resposta: "\u{1F941} **CARIMB\xD3**\n\n**Origem:**\nO Carimb\xF3 nasceu no estado do Par\xE1, no norte do Brasil, criado pela mistura das culturas ind\xEDgena, negra e portuguesa.\n\n**Caracter\xEDsticas:**\n\xC9 uma dan\xE7a de roda alegre e de ritmo r\xE1pido. As dan\xE7arinas usam saias imensas e coloridas que giram e fazem desenhos no ar, enquanto os dan\xE7arinos tentam recolher um len\xE7o do ch\xE3o apenas dobrando o corpo!",
    matchedKey: "carimbo"
  },
  // ===== TEATRO =====
  {
    palavras: ["teatro", "o que \xE9 teatro", "defini\xE7\xE3o de teatro"],
    resposta: "\u{1F3AD} Teatro \xE9 a arte de contar hist\xF3rias usando o corpo, a voz, o espa\xE7o e a imagina\xE7\xE3o. \xC9 quando pessoas se transformam em personagens e convidam o p\xFAblico para entrar em outro mundo sem sair do lugar. O palco vira floresta, castelo, escola, planeta distante\u2026 tudo pode nascer ali.",
    matchedKey: "teatro"
  },
  {
    palavras: ["origem do teatro", "hist\xF3ria do teatro", "teatro grego"],
    resposta: "\u{1F30D} O teatro come\xE7ou na Gr\xE9cia Antiga, h\xE1 mais de 2.500 anos. As primeiras apresenta\xE7\xF5es aconteciam em festas dedicadas ao deus Dion\xEDsio, ligadas \xE0 m\xFAsica, dan\xE7a e celebra\xE7\xF5es. Os gregos criaram dois grandes estilos: Trag\xE9dia (hist\xF3rias s\xE9rias e emocionantes) e Com\xE9dia (hist\xF3rias engra\xE7adas e cr\xEDticas). Os espet\xE1culos eram feitos em grandes teatros ao ar livre, como o famoso Teatro de Epidauro, que existe at\xE9 hoje."
  },
  {
    palavras: ["tipos de teatro", "g\xEAneros teatrais", "estilos de teatro"],
    resposta: "\u{1F3AD} Tipos de Teatro:\n\n\u{1F3AD} Teatro Dram\xE1tico: Hist\xF3rias s\xE9rias, emocionantes ou reflexivas.\n\u{1F602} Teatro de Com\xE9dia: Hist\xF3rias engra\xE7adas que fazem o p\xFAblico rir e pensar.\n\u{1F38E} Teatro de Fantoches / Bonecos: Personagens s\xE3o bonecos manipulados por artistas.\n\u{1F3A8} Teatro Infantil: Pe\xE7as criadas especialmente para crian\xE7as, com linguagem acess\xEDvel e temas l\xFAdicos.\n\u{1F3AA} Teatro Musical: Hist\xF3ria contada com m\xFAsica, canto e dan\xE7a.\n\u{1F3AD} Teatro de Sombras: Personagens aparecem como sombras projetadas em uma tela iluminada.\n\u{1F3AD} Teatro de Rua: Acontece em pra\xE7as e espa\xE7os p\xFAblicos."
  },
  {
    palavras: ["teatro dram\xE1tico"],
    resposta: "\u{1F3AD} Teatro Dram\xE1tico: S\xE3o pe\xE7as com hist\xF3rias s\xE9rias, emocionantes ou que fazem a gente pensar sobre a vida. Podem ser trag\xE9dias ou dramas familiares."
  },
  {
    palavras: ["teatro de com\xE9dia", "com\xE9dia"],
    resposta: "\u{1F602} Teatro de Com\xE9dia: Pe\xE7as engra\xE7adas que fazem o p\xFAblico rir, mas tamb\xE9m podem criticar costumes e comportamentos de forma leve e divertida."
  },
  {
    palavras: ["teatro de fantoches", "fantoches", "teatro de bonecos"],
    resposta: "\u{1F38E} Teatro de Fantoches ou Bonecos: Os personagens s\xE3o bonecos manipulados por artistas (chamados de bonequeiros ou fantoches). \xC9 uma forma de teatro muito antiga e amada pelas crian\xE7as!"
  },
  {
    palavras: ["teatro infantil"],
    resposta: "\u{1F3A8} Teatro Infantil: Pe\xE7as criadas especialmente para crian\xE7as, com hist\xF3rias m\xE1gicas, cores, m\xFAsica e temas que falam sobre amizade, imagina\xE7\xE3o e sentimentos."
  },
  {
    palavras: ["teatro musical", "musical"],
    resposta: "\u{1F3AA} Teatro Musical: A hist\xF3ria \xE9 contada com m\xFAsica, canto e dan\xE7a. Os personagens cantam para mostrar o que est\xE3o sentindo. Exemplos famosos: O Rei Le\xE3o, Mary Poppins."
  },
  {
    palavras: ["teatro de sombras"],
    resposta: "\u{1F3AD} Teatro de Sombras: Os personagens aparecem como silhuetas (sombras) projetadas em uma tela iluminada por tr\xE1s. \xC9 uma arte linda e cheia de mist\xE9rio."
  },
  {
    palavras: ["teatro de rua"],
    resposta: "\u{1F3AD} Teatro de Rua: Apresenta\xE7\xF5es que acontecem em pra\xE7as, parques e espa\xE7os p\xFAblicos, gratuitas e abertas para todos. A rua vira palco!"
  },
  // ===== BIOGRAFIAS DE ARTISTAS PLÁSTICOS =====
  { palavras: ["vincent van gogh", "van gogh", "gogh", "quem foi van gogh"], resposta: "Vincent van Gogh (1853\u20131890) foi um pintor holand\xEAs do p\xF3s-impressionismo. Ele criou obras vibrantes e emotivas, com pinceladas intensas e cores expressivas. Produziu mais de 2 mil trabalhos, incluindo \u201CNoite Estrelada\u201D. Ele s\xF3 foi reconhecido ap\xF3s sua morte. \u{1F31F}" },
  { palavras: ["michelangelo", "quem foi michelangelo"], resposta: "Michelangelo (1475\u20131564) foi um artista renascentista italiano, mestre da escultura, pintura e arquitetura. Criou o teto da Capela Sistina e a escultura \u201CDavi\u201D. Sua arte celebra a for\xE7a e a dramaticidade do corpo humano. \u{1F5FF}" },
  { palavras: ["raffaello sanzio", "rafael", "quem foi rafael"], resposta: "Raffaello Sanzio (1483\u20131520), conhecido como Rafael, foi um dos grandes nomes do Renascimento. Famoso por suas Madonas e pela obra \u201CA Escola de Atenas\u201D. Destacou-se pela harmonia e equil\xEDbrio nas composi\xE7\xF5es. \u{1F47C}" },
  { palavras: ["leonardo da vinci", "leonardo", "da vinci", "quem foi leonardo"], resposta: "Leonardo da Vinci (1452\u20131519) foi um g\xEAnio multifacetado do Renascimento. Pintor da \u201CMona Lisa\u201D e de \u201CA \xDAltima Ceia\u201D, tamb\xE9m foi cientista, inventor e anatomista. Uniu arte e ci\xEAncia como poucos na hist\xF3ria. \u{1F50D}" },
  { palavras: ["romero britto", "britto", "quem \xE9 romero britto"], resposta: "Romero Britto (1963\u2013 ) \xE9 um artista brasileiro contempor\xE2neo conhecido por seu estilo colorido, alegre e inspirado na pop art. Suas obras t\xEAm tra\xE7os marcantes e padr\xF5es vibrantes. \u{1F388}" },
  { palavras: ["djanira", "djanira da motta e silva", "quem foi djanira"], resposta: "Djanira da Motta e Silva (1914\u20131979) foi uma pintora brasileira modernista. Retratou cenas do cotidiano, trabalhadores e manifesta\xE7\xF5es culturais do Brasil com cores fortes e composi\xE7\xE3o simples. \u{1F1E7}\u{1F1F7}", matchedKey: "djanira" },
  { palavras: ["frida kahlo", "kahlo", "frida", "quem foi frida kahlo"], resposta: "Frida Kahlo (1907\u20131954) foi uma artist mexicana famosa por autorretratos intensos. Suas pinturas abordam identidade, cultura mexicana e experi\xEAncias pessoais marcantes. \u{1F33A}" },
  { palavras: ["salvador dal\xED", "dal\xED", "quem foi salvador dal\xED"], resposta: "Salvador Dal\xED (1904\u20131989) foi o principal nome do Surrealismo espanhol. Criou imagens on\xEDricas e provocativas, como os rel\xF3gios derretendo em \u201CA Persist\xEAncia da Mem\xF3ria\u201D. \u23F0" },
  { palavras: ["caravaggio", "quem foi caravaggio"], resposta: "Caravaggio (1571\u20131610) foi um pintor italiano do Barroco. Revolucionou a arte com o uso dram\xE1tico de luz e sombra, t\xE9cnica conhecida como claro-escuro. \u{1F526}" },
  { palavras: ["tarsila do amaral", "tarsila", "quem foi tarsila"], resposta: "Tarsila do Amaral (1886\u20131973) foi uma das principais artistas do Modernismo brasileiro. Criadora de \u201CAbaporu\u201D, contribuiu para o movimento antropof\xE1gico. \u{1F3A8}" },
  { palavras: ["di cavalcanti", "dicavalcanti", "quem foi di cavalcanti", "emiliano augusto cavalcanti"], resposta: "Di Cavalcanti (1897\u20131976) foi um dos maiores pintores modernistas do Brasil! \u{1F3A8} Ele adorava retratar a cultura nacional, o samba, festas populares e o cotidiano do nosso povo com cores alegres e vibrantes. Ele ajudou a organizar a famosa Semana de Arte Moderna de 1922!", matchedKey: "di_cavalcanti" },
  { palavras: ["ivan cruz", "quem foi ivan cruz"], resposta: "Ivan Cruz (1947\u20132023) foi um artista brasileiro conhecido por retratar brincadeiras infantis tradicionais, valorizando a cultura popular. \u{1FA81}", matchedKey: "ivan_cruz" },
  { palavras: ["candido portinari", "portinari", "quem foi portinari"], resposta: "Candido Portinari (1903\u20131962) foi um pintor brasileiro que retratou temas sociais e o povo trabalhador. Destacam-se os pain\xE9is \u201CGuerra e Paz\u201D. \u{1F468}\u200D\u{1F33E}" },
  { palavras: ["henri matisse", "matisse", "quem foi matisse"], resposta: "Henri Matisse (1869\u20131954) foi um artista franc\xEAs do Fauvismo. Explorou cores vibrantes e formas simplificadas, criando composi\xE7\xF5es alegres e decorativas. \u2702\uFE0F" },
  { palavras: ["ren\xE9 magritte", "magritte", "quem foi magritte"], resposta: "Ren\xE9 Magritte (1898\u20131967) foi um pintor surrealista belga. Suas obras brincam com a percep\xE7\xE3o e a realidade, como em \u201CIsto n\xE3o \xE9 um cachimbo\u201D. \u{1F9D0}" },
  { palavras: ["claude monet", "monet", "quem foi monet"], resposta: "Claude Monet (1840\u20131926) foi um dos fundadores do Impressionismo. Pintou s\xE9ries sobre a light e a natureza, como as \u201CNinf\xE9ias\u201D. \u2600\uFE0F" },
  { palavras: ["georges seurat", "seurat", "quem foi seurat"], resposta: "Georges Seurat (1859\u20131891) foi o criador do pontilhismo. Utilizava pequenos pontos de cor para formar imagens, como em \u201CTarde de Domingo na Ilha de Grande Jatte\u201D. \u{1F535}" },
  { palavras: ["edgar degas", "degas", "quem foi degas"], resposta: "Edgar Degas (1834\u20131917) foi um impressionista franc\xEAs conhecido por retratar bailarinas e cenas do cotidiano urbano. \u{1FA70}" },
  { palavras: ["edvard munch", "munch", "quem foi munch"], resposta: "Edvard Munch (1863\u20131944) foi um pintor noruegu\xEAs expressionista. Criador de \u201CO Grito\u201D, explorou emo\xE7\xF5es humanas intensas. \u{1F631}" },
  { palavras: ["rembrandt", "quem foi rembrandt"], resposta: "Rembrandt (1606\u20131669) foi um mestre holand\xEAs do Barroco. Famoso por autorretratos e pelo dom\xEDnio da luz e sombra. \u{1F3AD}" },
  { palavras: ["h\xE9lio oiticica", "oiticica", "quem foi h\xE9lio oiticica"], resposta: "H\xE9lio Oiticica (1937\u20131980) foi um artista brasileiro inovador. Criou obras interativas e experi\xEAncias sensoriais no movimento neoconcreto. \u{1F57A}", matchedKey: "helio_oiticica" },
  { palavras: ["alfredo volpi", "volpi", "quem foi alfredo volpi"], resposta: "Alfredo Volpi (1896\u20131988) foi conhecido pelas \u201Cbandeirinhas\u201D coloridas, explorou formas geom\xE9tricas e cores suaves. \u{1F3E0}", matchedKey: "alfredo_volpi" },
  { palavras: ["georgina de albuquerque", "georgina", "quem foi georgina de albuquerque"], resposta: "Georgina de Albuquerque (1885\u20131962) foi uma pintora brasileira pioneira, abordou temas hist\xF3ricos e cenas do cotidiano. \u{1F4DC}", matchedKey: "georgina_de_albuquerque" },
  {
    palavras: ["arte indigena brasileira", "arte ind\xEDgena brasileira", "o que e arte indigena brasileira", "o que e arte ind\xEDgena brasileira", "arte ind\xEDgena", "arte indigena", "arte dos \xEDndios", "cultura ind\xEDgena"],
    resposta: "\u{1FAB6} **ARTE IND\xCDGENA BRASILEIRA**\n\n**O que \xE9?**\n\xC9 a arte produzida pelos povos ind\xEDgenas do Brasil. Ela faz parte do dia a dia, dos rituais e da cultura, usando materiais encontrados na natureza.\n\nEla est\xE1 super presente na pintura corporal, na cer\xE2mica, na cestaria, na arte plum\xE1ria (enfeites de penas) e na m\xFAsica! Cada etnia tem seus pr\xF3prios desenhos e significados, sempre ligados \xE0 natureza e ao respeito aos ancestrais.",
    matchedKey: "arte_indigena"
  },
  {
    palavras: ["arte africana", "o que e arte africana", "africa arte", "arte da \xE1frica", "cultura africana"],
    resposta: "\u{1F30D} **ARTE AFRICANA**\n\n**O que \xE9?**\n\xC9 a arte criada pelos diferentes povos da \xC1frica. Ela valoriza a ancestralidade, os rituais, a m\xFAsica, a dan\xE7a, as m\xE1scaras e as esculturas.\n\nEla \xE9 super rica e diversa! Usa materiais como madeira, palha e tecidos coloridos (como o kente). Essa arte influenciou muito artistas como Picasso e o nosso pr\xF3prio modernismo brasileiro!",
    matchedKey: "arte_africana"
  },
  {
    palavras: ["modernismo", "o que e modernismo", "arte moderna", "o que e arte moderna", "periodo modernismo", "movimento modernista"],
    resposta: "\u{1F3A8} **MODERNISMO**\n\n**O que \xE9?**\n\xC9 um movimento art\xEDstico que quis criar uma arte diferente, deixando de copiar o passado. Os artistas passaram a experimentar novas formas, cores e ideias para mostrar o mundo de maneiras criativas.\n\n\u{1F4C5} **Per\xEDodo:** Final do s\xE9culo XIX at\xE9 meados do s\xE9culo XX (aproximadamente 1890 - 1970).\n\n\u{1F3A8} **Artistas Principais:** Pablo Picasso, Tarsila do Amaral, Anita Malfatti.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Ruptura com as tradi\xE7\xF5es art\xEDsticas.\n\u2022 Experimenta\xE7\xE3o de novas t\xE9cnicas e materiais.\n\u2022 Valoriza\xE7\xE3o da criatividade e da inova\xE7\xE3o.\n\u2022 Representa\xE7\xE3o livre da realidade.\n\u2022 Diversidade de estilos (Cubismo, Surrealismo, Expressionismo, Abstracionismo etc.).\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Abaporu.",
    matchedKey: "modernismo"
  },
  {
    palavras: ["arte antiga", "o que e arte antiga", "periodo arte antiga", "historia da arte antiga"],
    resposta: "\u{1F3FA} **ARTE ANTIGA**\n\n**O que \xE9?**\n\xC9 a arte feita pelos primeiros povos e grandes civiliza\xE7\xF5es da Hist\xF3ria, como os eg\xEDpcios, gregos e romanos. Ela servia para contar hist\xF3rias, homenagear deuses, mostrar o poder dos reis e registrar acontecimentos importantes.\n\n\u{1F4C5} **Per\xEDodo:** Cerca de 3500 a.C. at\xE9 o s\xE9culo V d.C.\n\n\u{1F3A8} **Artistas Principais:** Produ\xE7\xE3o coletiva de diversas civiliza\xE7\xF5es (Egito, Mesopot\xE2mia, Gr\xE9cia e Roma).\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Arte ligada \xE0 religi\xE3o, ao poder pol\xEDtico e \xE0 vida cotidiana.\n\u2022 Uso de pedra, m\xE1rmore, bronze e argila.\n\u2022 Constru\xE7\xE3o de templos, esculturas e monumentos.\n\u2022 Busca pela representa\xE7\xE3o da natureza e da figura humana.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Grande Esfinge de Giz\xE9.",
    matchedKey: "arte_antiga"
  },
  {
    palavras: ["arte medieval", "o que e arte medieval", "periodo medieval", "idade media arte"],
    resposta: "\u26EA **ARTE MEDIEVAL**\n\n**O que \xE9?**\n\xC9 a arte produzida durante a Idade M\xE9dia. Grande parte das obras era feita para decorar igrejas e ensinar hist\xF3rias da B\xEDblia \xE0s pessoas.\n\n\u{1F4C5} **Per\xEDodo:** S\xE9culo V ao s\xE9culo XV.\n\n\u{1F3A8} **Artistas Principais:** Monges, artes\xE3os e artistas an\xF4nimos.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Predom\xEDnio da tem\xE1tica religiosa.\n\u2022 Constru\xE7\xE3o de igrejas, castelos e catedrais.\n\u2022 Pinturas, vitrais e iluminuras.\n\u2022 Pouca preocupa\xE7\xE3o com perspectiva e realismo.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Catedral de Notre-Dame.",
    matchedKey: "arte_medieval"
  },
  {
    palavras: ["arte crista", "arte crist\xE3", "arte religiosa", "o que e arte crista", "o que e arte crist\xE3", "o que e arte religiosa"],
    resposta: "\u271D\uFE0F **ARTE CRIST\xC3 (ARTE RELIGIOSA)**\n\n**O que \xE9?**\n\xC9 a arte que representa hist\xF3rias da B\xEDblia, Jesus, Maria e os santos. Ela ajuda as pessoas a conhecerem e expressarem sua f\xE9.\n\n\u{1F4C5} **Per\xEDodo:** A partir do s\xE9culo I d.C. at\xE9 os dias atuais.\n\n\u{1F3A8} **Artistas Principais:** Michelangelo, Giotto di Bondone.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Representa\xE7\xE3o de passagens bibliblicas.\n\u2022 Imagens de Cristo, santos e da Virgem Maria.\n\u2022 Objetivo de ensinar e fortalecer a f\xE9.\n\u2022 Pinturas, esculturas, mosaicos e vitrais.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 A Cria\xE7\xE3o de Ad\xE3o.",
    matchedKey: "arte_crista"
  },
  {
    palavras: ["arte grega", "o que e arte grega", "periodo arte grega", "grecia antiga arte"],
    resposta: "\u{1F3FA} **ARTE GREGA**\n\n**O que \xE9?**\n\xC9 a arte dos antigos gregos. Eles procuravam representar a beleza, o equil\xEDbrio e o corpo humano da forma mais harmoniosa poss\xEDvel.\n\n\u{1F4C5} **Per\xEDodo:** S\xE9culo VIII a.C. ao s\xE9culo I a.C.\n\n\u{1F3A8} **Artistas Principais:** F\xEDdias, Policleto.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Busca da beleza ideal e da harmonia.\n\u2022 Esculturas com propor\xE7\xF5es perfeitas.\n\u2022 Valoriza\xE7\xE3o do corpo humano.\n\u2022 Constru\xE7\xE3o de templos e teatros.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Partenon.",
    matchedKey: "arte_grega"
  },
  {
    palavras: ["arte romana", "o que e arte romana", "periodo arte romana", "roma antiga arte"],
    resposta: "\u{1F3DB}\uFE0F **ARTE ROMANA**\n\n**O que \xE9?**\n\xC9 a arte desenvolvida pelos romanos. Eles constru\xEDram grandes cidades, estradas, pontes, teatros e monumentos, mostrando a for\xE7a e a organiza\xE7\xE3o do seu imp\xE9rio.\n\n\u{1F4C5} **Per\xEDodo:** S\xE9culo VI a.C. ao s\xE9culo V d.C.\n\n\u{1F3A8} **Artistas Principais:** Artistas e arquitetos do Imp\xE9rio Romano.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Influ\xEAncia da arte grega.\n\u2022 Realismo nos retratos e esculturas.\n\u2022 Grandes obras de engenharia.\n\u2022 Constru\xE7\xE3o de anfiteatros, aquedutos e estradas.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Coliseu.",
    matchedKey: "arte_romana"
  },
  {
    palavras: ["arte egipcia", "arte eg\xEDpcia", "o que e arte egipcia", "o que e arte eg\xEDpcia", "egito antigo arte"],
    resposta: "\u{1F42B} **ARTE EG\xCDPCIA**\n\n**O que \xE9?**\n\xC9 a arte criada pelos antigos eg\xEDpcios. Eles faziam pir\xE2mides, templos, esculturas e pinturas para homenagear os fara\xF3s e acreditar na vida ap\xF3s a morte.\n\n\u{1F4C5} **Per\xEDodo:** Cerca de 3000 a.C. at\xE9 30 a.C.\n\n\u{1F3A8} **Artistas Principais:** Artes\xE3os e escultores do Antigo Egito.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Arte ligada \xE0 religi\xE3o e \xE0 vida ap\xF3s a morte.\n\u2022 Pinturas com figuras de perfil e olhos de frente.\n\u2022 Hier\xF3glifos e esculturas monumentais.\n\u2022 Constru\xE7\xE3o de pir\xE2mides, templos e t\xFAmulos.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Pir\xE2mide de Qu\xE9ops.",
    matchedKey: "arte_egipcia"
  },
  {
    palavras: ["arte japonesa", "o que e arte japonesa", "periodo arte japonesa", "japao arte"],
    resposta: "\u{1F38E} **ARTE JAPONESA**\n\n**O que \xE9?**\n\xC9 a arte criada no Jap\xE3o. Ela valoriza a natureza, a simplicidade, o equil\xEDbrio e a beleza dos pequenos detalhes.\n\n\u{1F4C5} **Per\xEDodo:** Do s\xE9culo III d.C. at\xE9 os dias atuais.\n\n\u{1F3A8} **Artistas Principais:** Katsushika Hokusai, Utagawa Hiroshige.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Valoriza\xE7\xE3o da natureza e das esta\xE7\xF5es do ano.\n\u2022 Tra\xE7os delicados e composi\xE7\xE3o equilibrada.\n\u2022 Uso da xilogravura (ukiyo-e).\n\u2022 Influ\xEAncia do Zen e da simplicidade.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 A Grande Onda de Kanagawa.",
    matchedKey: "arte_japonesa"
  },
  {
    palavras: ["arte chinesa", "o que e arte chinesa", "periodo arte chinesa", "china arte"],
    resposta: "\u{1F409} **ARTE CHINESA**\n\n**O que \xE9?**\n\xC9 a arte desenvolvida na China ao longo de milhares de anos. Ela busca mostrar a harmonia entre as pessoas, a natureza e o universo.\n\n\u{1F4C5} **Per\xEDodo:** Cerca de 3000 a.C. at\xE9 os dias atuais.\n\n\u{1F3A8} **Artistas Principais:** Gu Kaizhi, Zhang Daqian.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Harmonia entre ser humano e natureza.\n\u2022 Pinturas com tinta sobre seda e papel.\n\u2022 Caligrafia como forma de arte.\n\u2022 Influ\xEAncia do Confucionismo, Taoismo e Budismo.\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 Ao Longo do Rio Durante o Festival Qingming.",
    matchedKey: "arte_chinesa"
  },
  {
    palavras: ["expressionismo", "o que e expressionismo", "movimento expressionista"],
    resposta: "\u{1F3AD} **EXPRESSIONISMO**\n\n**O que \xE9?**\n\xC9 um movimento art\xEDstico que mostra os sentimentos das pessoas, como alegria, medo, tristeza ou raiva, usando cores fortes e formas distorcidas.",
    matchedKey: "expressionismo"
  },
  {
    palavras: ["arte europeia", "o que e arte europeia"],
    resposta: "\u{1F30D} **ARTE EUROPEIA**\n\n**O que \xE9?**\n\xC9 o conjunto das artes produzidas nos pa\xEDses da Europa. Dela nasceram muitos movimentos importantes, como o Renascimento, o Barroco, o Impressionismo e o Modernismo.",
    matchedKey: "arte_europeia"
  },
  {
    palavras: ["arte bizantina", "o que e arte bizantina", "bizantino", "mosaico bizantino"],
    resposta: "\u2728 **ARTE BIZANTINA**\n\n**O que \xE9?**\n\xC9 uma arte religiosa criada no antigo Imp\xE9rio Bizantino. Ficou famosa pelos mosaicos brilhantes e pelas imagens de santos e igrejas.",
    matchedKey: "arte_bizantina"
  },
  {
    palavras: ["arte islamica", "arte isl\xE2mica", "o que e arte islamica", "o que e arte isl\xE2mica"],
    resposta: "\u{1F319} **ARTE ISL\xC2MICA**\n\n**O que \xE9?**\n\xC9 a arte dos povos que seguem a religi\xE3o isl\xE2mica. Ela \xE9 conhecida pelos desenhos geom\xE9tricos, arabescos e pela bela caligrafia.",
    matchedKey: "arte_islamica"
  },
  {
    palavras: ["arte pre colombiana", "arte pr\xE9 colombiana", "o que e arte pre colombiana", "o que e arte pr\xE9 colombiana", "asteca", "maia", "inca"],
    resposta: "\u{1F3DE}\uFE0F **ARTE PR\xC9-COLOMBIANA**\n\n**O que \xE9?**\n\xC9 a arte criada pelos povos que viviam nas Am\xE9ricas antes da chegada dos europeus, como maias, astecas e incas.",
    matchedKey: "arte_pre_colombiana"
  },
  {
    palavras: ["arte digital", "o que e arte digital"],
    resposta: "\u{1F4BB} **ARTE DIGITAL**\n\n**O que \xE9?**\n\xC9 a arte feita com computadores, tablets ou celulares. Os artistas usam programas digitais para criar desenhos, pinturas, anima\xE7\xF5es e imagens.",
    matchedKey: "arte_digital"
  },
  {
    palavras: ["arte com inteligencia artificial", "arte com intelig\xEAncia artificial", "arte com ia", "o que e arte com ia", "o que e arte com inteligencia artificial", "o que e arte com intelig\xEAncia artificial", "ia arte", "inteligencia artificial arte"],
    resposta: "\u{1F916} **ARTE COM INTELIG\xCANCIA ARTIFICIAL (IA)**\n\n**O que \xE9?**\n\xC9 uma forma de criar arte usando programas de Intelig\xEAncia Artificial. O artista d\xE1 ideias, escreve comandos ou envia imagens, e a IA ajuda a criar novas obras. O resultado depende da criatividade de quem usa essa ferramenta.\n\n\u{1F449} **Para lembrar:** A IA n\xE3o cria sozinha. Ela \xE9 uma ferramenta que trabalha junto com o artista, assim como um pincel, um l\xE1pis ou um computador. \u{1F3A8}\u{1F916}",
    matchedKey: "arte_ia"
  },
  {
    palavras: ["arte naif", "arte na\xEFf", "o que e arte naif", "o que e arte na\xEFf", "movimento naif", "movimento na\xEFf"],
    resposta: "\u{1F33C} **ARTE NA\xCFF**\n\n**O que \xE9?**\nA Arte Na\xEFf \xE9 um estilo de arte que representa o mundo de forma simples, colorida e criativa. Os artistas pintam cenas do dia a dia, da natureza e das pessoas com muita imagina\xE7\xE3o, sem se preocupar em seguir todas as regras da pintura tradicional.\n\n\u{1F4C5} **Per\xEDodo:** Final do s\xE9culo XIX at\xE9 os dias atuais.\n\n\u{1F3A8} **Artistas Principais:** Henri Rousseau, Heitor dos Prazeres, Madalena Santos Reinbolt.\n\n\u{1F31F} **Caracter\xEDsticas:**\n\u2022 Cores vivas e alegres.\n\u2022 Pinturas simples, espont\xE2neas e cheias de detalhes.\n\u2022 Temas do cotidiano, da natureza, das festas e da cultura popular.\n\u2022 Pouca preocupa\xE7\xE3o com perspectiva e propor\xE7\xF5es.\n\u2022 Muitos artistas s\xE3o autodidatas, ou seja, aprenderam a pintar sem estudar em uma escola de arte.\n\n\u{1F449} **Para lembrar:**\nA Arte Na\xEFf mostra o mundo com um olhar simples, alegre e cheio de imagina\xE7\xE3o. \u{1F3A8}\u{1F33B}\n\n\u{1F5BC}\uFE0F **Obra Importante:**\n\u2022 O Sonho.",
    matchedKey: "arte_naif"
  },
  {
    palavras: ["m\xE1scaras africanas"],
    resposta: "\u{1F3AD} As m\xE1scaras africanas s\xE3o usadas em rituais, festas e cerim\xF4nias. Cada m\xE1scara tem um significado especial e representa um esp\xEDrito ou ancestral. S\xE3o feitas de madeira, tecido, palha e decoradas com cores e materiais naturais."
  },
  {
    palavras: ["pintura corporal ind\xEDgena"],
    resposta: "\u{1F58C}\uFE0F Muitos povos ind\xEDgenas pintam o corpo com tintas naturais (como urucum, jenipapo) para rituais, guerras ou festas. Cada desenho conta uma hist\xF3ria, mostra a que grupo a pessoa pertence ou afasta maus esp\xEDritos. \xC9 uma arte que vive na pele!"
  },
  // ===== TÉCNICAS ARTÍSTICAS =====
  {
    palavras: ["aquarela", "t\xE9cnica aquarela"],
    resposta: "\u{1F4A7} Aquarela \xE9 uma t\xE9cnica de pintura com tinta dissolvida em \xE1gua. As cores ficam transparentes e suaves, criando efeitos delicados. Os artistas usam pinc\xE9is e papel especial. \xC9 \xF3tima para pintar c\xE9us, flores e paisagens sonhadoras!"
  },
  {
    palavras: ["pintura a \xF3leo", "\xF3leo sobre tela"],
    resposta: "\u{1F5BC}\uFE0F Pintura a \xF3leo usa tintas feitas com pigmentos e \xF3leo (como linha\xE7a). Elas demoram mais a secar, permitindo misturar e criar detalhes. Grandes mestres como Leonardo da Vinci e Van Gogh usaram essa t\xE9cnica. As cores ficam bem vibrantes e duradouras."
  },
  {
    palavras: ["colagem", "t\xE9cnica de colagem"],
    resposta: "\u2702\uFE0F Colagem \xE9 uma t\xE9cnica onde colamos peda\xE7os de papel, tecido, fotos ou outros materiais sobre uma superf\xEDcie. Artistas como Picasso e Henri Matisse fizeram colagens incr\xEDveis. D\xE1 para criar composi\xE7\xF5es surreais e cheias de textura!"
  },
  // ===== PINTORES ADICIONAIS =====
  {
    palavras: ["pablo picasso", "picasso", "quem foi picasso"],
    resposta: "Pablo Picasso foi um pintor espanhol, criador do Cubismo. \u{1F5BC}\uFE0F Ele desenhava pessoas e objetos com formas diferentes e divertidas. O que ele ensina: que n\xE3o existe s\xF3 um jeito de desenhar.",
    matchedKey: "pablo_picasso"
  },
  {
    palavras: ["joan mir\xF3", "mir\xF3", "quem foi joan mir\xF3"],
    resposta: "Joan Mir\xF3 foi um pintor espanhol de arte moderna. \u2728 Ele usava formas simples como estrelas e linhas. O que ele ensina: a brincar com formas.",
    matchedKey: "joan_miro"
  },
  {
    palavras: ["paul klee", "klee", "quem foi paul klee"],
    resposta: "Paul Klee foi um pintor su\xED\xE7o de arte moderna. \u{1F58D}\uFE0F Ele desenhava como se fosse uma child curiosa. O que ele ensina: liberdade para criar.",
    matchedKey: "paul_klee"
  },
  {
    palavras: ["anita malfatti", "malfatti", "quem foi anita malfatti"],
    resposta: "Anita Malfatti foi uma pintora brasileira do Modernismo. \u{1F1E7}\u{1F1F7} Ela pintava pessoas com cores fortes. O que ela ensina: coragem para inovar."
  },
  {
    palavras: ["vik muniz", "muniz", "quem \xE9 vik muniz"],
    resposta: "Vik Muniz \xE9 um artista brasileiro contempor\xE2neo. \u267B\uFE0F Ele cria arte com objetos diferentes, como lixo e doces. O que ele ensina: criar com qualquer material.",
    matchedKey: "vik_muniz"
  },
  {
    palavras: ["caryb\xE9", "quem foi caryb\xE9"],
    resposta: "Caryb\xE9 foi um artista argentino-brasileiro de arte moderna. \u{1F941} Ele desenhava festas, dan\xE7as e cultura popular. O que ele ensina: valorizar a cultura.",
    matchedKey: "carybe"
  },
  {
    palavras: ["heitor dos prazeres", "heitor", "quem foi heitor dos prazeres"],
    resposta: "Heitor dos Prazeres foi um pintor, compositor e sambista brasileiro. \u{1F3B6} Ele pintava festas, samba e alegria. O que ele ensina: arte nasce da vida.",
    matchedKey: "heitor_dos_prazeres"
  },
  {
    palavras: ["adriana varej\xE3o", "varej\xE3o", "quem \xE9 adriana varej\xE3o"],
    resposta: "Adriana Varej\xE3o \xE9 uma artista brasileira contempor\xE2nea. \u{1F3DB}\uFE0F Ela mistura hist\xF3ria e imagina\xE7\xE3o em suas obras. O que ela ensina: arte tamb\xE9m faz pensar.",
    matchedKey: "adriana_varejao"
  },
  {
    palavras: ["arthur bispo do ros\xE1rio", "bispo", "quem foi arthur bispo do ros\xE1rio"],
    resposta: "Arthur Bispo do Ros\xE1rio foi um artista brasileiro de arte singular. \u{1F9F5} Ele criava arte com objetos do dia a dia, como tecidos e linhas. O que ele ensina: tudo pode virar arte.",
    matchedKey: "arthur_bispo_do_rosario"
  },
  {
    palavras: ["silvana mendes", "silvia mendes", "silvana", "silvia", "quem e silvana mendes", "quem e silvia mendes"],
    resposta: "Silvana Mendes (nascida em 1980, no Maranh\xE3o) \xE9 uma artista visual, fot\xF3grafa e pesquisadora brasileira. \u{1F4F8} Ela trabalha com colagens, pinturas e fotografias que celebram a mem\xF3ria, ancestralidade e identidade afro-brasileira! O que ela ensina: a beleza de honrar nossa hist\xF3ria e identidade.",
    matchedKey: "silvana_mendes"
  },
  {
    palavras: ["arjan martins", "arjan", "quem e arjan martins"],
    resposta: "Arjan Martins (nascido em 1960, no Rio de Janeiro) \xE9 um pintor e escultor brasileiro. \u26F4\uFE0F Suas obras retratam a hist\xF3ria mar\xEDtima, a di\xE1spora africana e as migra\xE7\xF5es com cores e tra\xE7os incr\xEDveis. O que ele ensina: nossa hist\xF3ria tem muitas vozes importantes.",
    matchedKey: "arjan_martins"
  },
  {
    palavras: ["maxwell alexandre", "maxwell", "quem e maxwell alexandre"],
    resposta: "Maxwell Alexandre (nascido em 1990, no Rio de Janeiro) \xE9 um artista contempor\xE2neo super descolado! \u{1F964} Ele pinta em grandes telas que retratam a vida nas periferias, o cotidiano e a for\xE7a da juventude negra brasileira. O que ele ensina: a dar voz \xE0 nossa reality com orgulho.",
    matchedKey: "maxwell_alexandre"
  },
  {
    palavras: ["rosana paulino", "rosana", "quem e rosana paulino"],
    resposta: "Rosana Paulino (nascida em 1967, em S\xE3o Paulo) \xE9 artista visual, curadora e educadora. \u{1F9F5} Ela usa tecidos, costuras, linhas e fotos antigas para falar sobre mem\xF3ria, identidade e o respeito \xE0 mulher negra. O que ela ensina: a costurar nossas mem\xF3rias com amor e reflex\xE3o.",
    matchedKey: "rosana_paulino"
  },
  {
    palavras: ["madalena dos santos reinbolt", "madalena reinbolt", "madalena", "reinbolt", "quem foi madalena dos santos reinbolt", "quem e madalena dos santos reinbolt"],
    resposta: 'Madalena dos Santos Reinbolt (1919\u20131977) foi uma fant\xE1stica pintora e artista t\xEAxtil brasileira. \u{1F9F6} Ela usava linhas coloridas e agulhas para criar impressionantes "quadros de l\xE3" que mostravam festas populares, o cotidiano e a vida no campo. O que ela ensina: a expressar nossas mem\xF3rias e hist\xF3rias atrav\xE9s de linhas e cores vibrantes.',
    matchedKey: "madalena_reinbolt"
  },
  {
    palavras: ["eduardo kobra", "kobra", "quem e eduardo kobra"],
    resposta: "Eduardo Kobra (nascido em 1975, em S\xE3o Paulo) \xE9 um dos maiores muralistas do mundo! \u{1F308} Ele pinta pr\xE9dios inteiros com desenhos geom\xE9tricos super coloridos que trazem mensagens de paz, toler\xE2ncia e muito amor. O que ele ensina: colorir o mundo com mensagens de paz.",
    matchedKey: "eduardo_kobra"
  },
  {
    palavras: ["os gemeos", "os g\xEAmeos", "gemeos", "g\xEAmeos", "quem sao os gemeos"],
    resposta: "Os G\xEAmeos (Ot\xE1vio e Gustavo Pandolfo, nascidos em 1974, em S\xE3o Paulo) s\xE3o irm\xE3os que grafitam juntos! \u{1F49B} Eles criam um mundo de fantasia repleto de personagens amarelinhos super divertidos em muros pelo mundo todo. O que eles ensinam: a imagina\xE7\xE3o de irm\xE3os pode conquistar as ruas.",
    matchedKey: "os_gemeos"
  },
  {
    palavras: ["romero britto", "romero brito", "britto", "brito", "quem e romero britto"],
    resposta: "Romero Britto (nascido em 1963, em Recife) \xE9 um pintor e escultor que faz muito sucesso mundialmente! \u2764\uFE0F Ele cria desenhos de bichinhos, flores e cora\xE7\xF5es misturando listras, c\xEDrculos e cores neon super vibrantes. O que ele ensina: espalhar sorais e alegria atrav\xE9s da arte.",
    matchedKey: "romero_britto"
  },
  {
    palavras: ["historia da musica", "historia da musica", "hist\xF3ria da m\xFAsica", "hist\xF3ria da musica", "como surgiu a musica", "como surgiu a m\xFAsica", "origem da musica", "origem da m\xFAsica"],
    resposta: `# Hist\xF3ria da M\xFAsica \u{1F3B6}

A m\xFAsica existe h\xE1 milhares de anos e faz parte da vida das pessoas em todo o mundo. Desde os tempos mais antigos, os seres humanos utilizavam sons, batidas e cantos para se comunicar, celebrar festas e contar hist\xF3rias.

## A M\xFAsica na Pr\xE9-Hist\xF3ria \u{1F9B4}
Os primeiros instrumentos musicais eram feitos de ossos, pedras, madeira e conchas. As pessoas produziam sons batendo objetos ou usando a pr\xF3pria voz.

## A M\xFAsica na Antiguidade \u{1F3DB}\uFE0F
Em civiliza\xE7\xF5es como o Egito, a Gr\xE9cia e Roma, a m\xFAsica era usada em cerim\xF4nias religiosas, festas e apresenta\xE7\xF5es. Instrumentos como harpas, flautas e liras eram muito populares.

## A M\xFAsica na Idade M\xE9dia \u{1F3F0}
Durante a Idade M\xE9dia, muitas m\xFAsicas eram ligadas \xE0 religi\xE3o. Os cantos eram realizados em igrejas e mosteiros. Surgiram tamb\xE9m os trovadores, que cantavam hist\xF3rias sobre aventuras e amor.

## A M\xFAsica no Renascimento \u{1F3A8}
Nesse per\xEDodo, a m\xFAsica tornou-se mais elaborada. Novos instrumentos foram criados e os compositores passaram a escrever m\xFAsicas mais complexas.

## A M\xFAsica no Per\xEDodo Cl\xE1ssico \u{1F3BC}
Grandes compositores, como Wolfgang Amadeus Mozart, criaram obras que s\xE3o famosas at\xE9 hoje. As orquestras cresceram e os concertos ficaram mais populares.

## A M\xFAsica no Per\xEDodo Rom\xE2ntico \u2764\uFE0F
Os compositores passaram a expressar mais sentimentos em suas obras. A m\xFAsica tornou-se mais emocionante e cheia de emo\xE7\xF5es.

## A M\xFAsica nos Tempos Modernos \u{1F4F1}
Com o avan\xE7o da tecnologia, surgiram novos estilos musicais, como jazz, rock, pop, rap e m\xFAsica eletr\xF4nica. Hoje, podemos ouvir m\xFAsicas de diferentes partes do mundo usando celulares, computadores e outros aparelhos.

## Conclus\xE3o \u2728
A m\xFAsica evoluiu ao longo da hist\xF3ria, mas continua tendo a mesma import\xE2ncia: alegrar, emocionar, divertir e unir as pessoas. Ela faz parte da cultura e da vida de todos n\xF3s.`,
    matchedKey: "musica"
  },
  {
    palavras: ["historia do teatro", "hist\xF3ria do teatro", "como surgiu o teatro", "origem do teatro"],
    resposta: `# Hist\xF3ria do Teatro \u{1F3AD}

O teatro \xE9 uma forma de arte em que atores representam personagens para contar hist\xF3rias. Ele existe h\xE1 milhares de anos e continua encantando pessoas de todas as idades.

## O In\xEDcio do Teatro \u{1F3DB}\uFE0F
O teatro surgiu na Antiguidade, na Gr\xE9cia, h\xE1 cerca de 2.500 anos. As primeiras apresenta\xE7\xF5es aconteciam em grandes espa\xE7os ao ar livre e faziam parte de festas religiosas.

## O Teatro na Antiguidade \u{1F3AD}
Os gregos criaram pe\xE7as de com\xE9dia e trag\xE9dia. Os atores usavam m\xE1scaras para representar diferentes personagens e emo\xE7\xF5es.

## O Teatro na Idade M\xE9dia \u26EA
Durante a Idade M\xE9dia, muitas pe\xE7as apresentavam hist\xF3rias religiosas e eram encenadas em igrejas e pra\xE7as p\xFAblicas.

## O Teatro no Renascimento \u{1F451}
O teatro cresceu e tornou-se mais popular. Novos teatros foram constru\xEDdos, e grandes autores escreveram pe\xE7as famosas, como William Shakespeare.

## O Teatro nos Tempos Modernos \u{1F31F}
Com o passar do tempo, surgiram diferentes estilos de teatro. Os cen\xE1rios, figurinos e efeitos especiais ficaram mais elaborados, tornando as apresenta\xE7\xF5es ainda mais interessantes.

## O Teatro Hoje \u{1F3AC}
Atualmente, o teatro pode ser apresentado em escolas, teatros, pra\xE7as e muitos outros lugares. Existem pe\xE7as para crian\xE7as, jovens e adultos, com hist\xF3rias divertidas, emocionantes e educativas.

## Conclus\xE3o \u2728
O teatro \xE9 uma arte que une atua\xE7\xE3o, express\xE3o corporal, fala, m\xFAsica e criatividade. Ele ajuda a contar hist\xF3rias, transmitir sentimentos e aproximar as pessoas da cultura.`,
    matchedKey: "teatro"
  },
  {
    palavras: ["historia da literatura", "hist\xF3ria da literatura", "como surgiu a literatura", "origem da literatura"],
    resposta: `# Hist\xF3ria da Literatura \u{1F4DA}

A literatura \xE9 a arte de contar hist\xF3rias por meio da escrita e da palavra falada. Ela ajuda as pessoas a compartilhar ideias, sentimentos, conhecimentos e imagina\xE7\xE3o.

## O In\xEDcio da Literatura \u{1F5E3}\uFE0F
Antes da inven\xE7\xE3o da escrita, as hist\xF3rias eram contadas de gera\xE7\xE3o em gera\xE7\xE3o por meio da fala. Essas narrativas ensinavam costumes, tradi\xE7\xF5es e valores.

## A Literatura na Antiguidade \u{1F4DC}
Com o surgimento da escrita, as hist\xF3rias passaram a ser registradas em pedras, papiros e pergaminhos. Poemas, lendas e aventuras foram preservados para as futuras gera\xE7\xF5es.

## A Literatura na Idade M\xE9dia \u{1F6E1}\uFE0F
Muitas hist\xF3rias falavam sobre cavaleiros, reis, princesas e aventuras. Tamb\xE9m eram comuns os textos religiosos e as narrativas sobre her\xF3is.

## A Literatura no Renascimento \u{1F52D}
Os escritores passaram a valorizar mais o ser humano, a ci\xEAncia e a observa\xE7\xE3o da natureza. Muitas obras importantes foram produzidas nesse per\xEDodo.

## A Literatura Moderna \u{1F4F0}
Com a inven\xE7\xE3o da imprensa, os livros tornaram-se mais acess\xEDveis. Surgiram novos g\xEAneros liter\xE1rios, como romances, contos e hist\xF3rias infantis.

## A Literatura Contempor\xE2nea \u{1F4F1}
Hoje, a literatura est\xE1 presente em livros, revistas, jornais e at\xE9 em formatos digitais. Existem hist\xF3rias para todos os gostos e idades.

## Conclus\xE3o \u2728
A literatura faz parte da cultura da humanidade. Por meio das hist\xF3rias, aprendemos sobre o passado, desenvolvemos a imagina\xE7\xE3o e conhecemos diferentes ideias e culturas.`,
    matchedKey: "literatura"
  },
  {
    palavras: ["historia da arte no brasil", "hist\xF3ria da arte no brasil", "hist\xF3ria da arte brasileira", "historia da arte brasileira", "arte no brasil historia", "arte no brasil hist\xF3ria"],
    resposta: `# Hist\xF3ria da Arte no Brasil \u{1F1E7}\u{1F1F7}

A hist\xF3ria da arte no Brasil come\xE7ou muito antes da chegada dos portugueses. Os povos ind\xEDgenas j\xE1 produziam arte por meio de pinturas corporais, cer\xE2micas, cestos, m\xFAsicas e dan\xE7as.

## Arte no Per\xEDodo Colonial \u26EA
Com a chegada dos portugueses em 1500, a arte recebeu influ\xEAncias europeias. Igrejas, esculturas e pinturas religiosas tornaram-se comuns. Nesse per\xEDodo destacou-se o artist Ant\xF4nio Francisco Lisboa, o Aleijadinho, famoso por suas esculturas e obras barrocas.

## Arte no S\xE9culo XIX \u{1F5BC}\uFE0F
No s\xE9culo XIX, artistas passaram a retratar a hist\xF3ria, a natureza e o povo brasileiro. Muitas pinturas mostravam paisagens, costumes e acontecimentos importantes do pa\xEDs.

## Arte Moderna \u{1F3A8}
Em 1922 aconteceu a Semana de Arte Moderna, um marco importante para a arte brasileira. Os artistas buscavam criar obras com caracter\xEDsticas pr\xF3prias do Brasil.

## Arte Contempor\xE2nea \u{1F310}
Hoje, a arte brasileira \xE9 muito diversa. Ela inclui pinturas, esculturas, fotografias, grafites, v\xEDdeos e arte digital. Os artistas utilizam diferentes materiais e t\xE9cnicas para expressar suas ideias.

## Artistas Brasileiros Famosos \u{1F31F}
Entre os artistas mais conhecidos est\xE3o Tarsila do Amaral, C\xE2ndido Portinari e Anita Malfatti.

## Conclus\xE3o \u2728
A arte brasileira reflete a diversidade cultural do pa\xEDs. Ela re\xFAne influ\xEAncias ind\xEDgenas, africanas, europeias e de muitos outros povos, formando uma rica express\xE3o da identidade do Brasil.`,
    matchedKey: "arte"
  },
  {
    palavras: [
      "historia da danca no brasil",
      "historia da dan\xE7a no brasil",
      "hist\xF3ria da danca no brasil",
      "hist\xF3ria da dan\xE7a no brasil",
      "danca no brasil historia",
      "dan\xE7a no brasil hist\xF3ria",
      "dan\xE7a no brasil historia",
      "danca no brasil hist\xF3ria",
      "historia danca no brasil",
      "hist\xF3ria danca no brasil",
      "historia d danca no br",
      "hist\xF3ria d danca no br",
      "historia da danca no br",
      "hist\xF3ria da dan\xE7a no br",
      "danca no br historia",
      "dan\xE7a no br hist\xF3ria"
    ],
    resposta: `# Hist\xF3ria da Dan\xE7a no Brasil \u{1F1E7}\u{1F1F7}

A dan\xE7a faz parte da cultura brasileira desde antes da chegada dos portugueses. Os povos ind\xEDgenas realizavam dan\xE7as em festas, celebra\xE7\xF5es e rituais para marcar acontecimentos importantes.

## Influ\xEAncia Africana \u{1F941}
Com a chegada dos povos africanos ao Brasil, muitas dan\xE7as, ritmos e tradi\xE7\xF5es foram incorporados \xE0 cultura brasileira. Essas influ\xEAncias deram origem a manifesta\xE7\xF5es culturais muito importantes.

## Influ\xEAncia Europeia \u{1F3BB}
Os portugueses trouxeram dan\xE7as populares da Europa, que tamb\xE9m passaram a fazer parte da cultura do pa\xEDs. Com o tempo, as tradi\xE7\xF5es europeias se misturaram \xE0s ind\xEDgenas e africanas.

## Dan\xE7as Tradicionais Brasileiras \u{1F483}
Ao longo da hist\xF3ria surgiram diversas dan\xE7as t\xEDpicas brasileiras, como o samba, o frevo, o maracatu, a quadrilha e o forr\xF3. Cada regi\xE3o do Brasil desenvolveu suas pr\xF3prias manifesta\xE7\xF5es culturais.

## O Samba \u{1F941}
O samba \xE9 uma das dan\xE7as mais conhecidas do Brasil. Ele surgiu a partir das tradi\xE7\xF5es africanas e tornou-se um s\xEDmbolo da cultura brasileira, especialmente durante o Carnaval.

## A Dan\xE7a Hoje \u2728
Atualmente, o Brasil possui uma grande diversidade de estilos de dan\xE7a. Al\xE9m das dan\xE7as tradicionais, muitas pessoas praticam bal\xE9, dan\xE7a contempor\xE2nea, hip-hop e outros estilos.

## Conclus\xE3o \u{1F4AB}
A dan\xE7a brasileira \xE9 resultado da mistura de diferentes culturas. Ela representa a alegria, a criatividade e a diversidade do povo brasileiro.`,
    matchedKey: "danca_brasil"
  },
  {
    palavras: [
      "historia do desenho no brasil",
      "hist\xF3ria do desenho no brasil",
      "como surgiu o desenho no brasil",
      "origem do desenho no brasil",
      "desenho no brasil historia",
      "desenho no brasil hist\xF3ria",
      "historia desenho no brasil",
      "hist\xF3ria desenho no brasil",
      "historia d desenho no br",
      "hist\xF3ria d desenho no br",
      "historia do desenho no br",
      "hist\xF3ria do desenho no br",
      "desenho no br historia",
      "desenho no br hist\xF3ria"
    ],
    resposta: `# Hist\xF3ria do Desenho no Brasil (para crian\xE7as de 10 anos) \u{1F58D}\uFE0F\u{1F1E7}\u{1F1F7}

O desenho faz parte da hist\xF3ria do Brasil h\xE1 muito tempo. Antes mesmo da chegada dos portugueses, os povos ind\xEDgenas j\xE1 faziam desenhos em pedras, cer\xE2micas, cestos e pinturas corporais para contar hist\xF3rias, representar a natureza e registrar costumes.

## Per\xEDodo Colonial (1500-1822) \u{1F4DC}
Durante a coloniza\xE7\xE3o, muitos desenhos eram usados para registrar paisagens, plantas, animais e a vida das pessoas no Brasil. Viajantes e artistas europeus desenhavam o que viam para mostrar o pa\xEDs na Europa.

## Imp\xE9rio do Brasil (1822-1889) \u{1F3DB}\uFE0F
Com a chegada da fam\xEDlia real portuguesa e da chamada Miss\xE3o Art\xEDstica Francesa, o ensino do desenho tornou-se mais organizado. Surgiram escolas de arte onde os alunos aprendiam a desenhar pessoas, paisagens e objetos. O desenho era considerado importante para a educa\xE7\xE3o das elites e para a forma\xE7\xE3o art\xEDstica.

## \xC9poca Moderna (S\xE9culo XX) \u{1F3A8}
O desenho passou a ser ensinado em mais escolas e tamb\xE9m foi utilizado na ind\xFAstria, na arquitetura, na publicidade e nas hist\xF3rias em quadrinhos. Artistas brasileiros criaram estilos pr\xF3prios inspirados na cultura nacional.
Entre os artistas que valorizaram o desenho est\xE3o Candido Portinari, que fazia muitos estudos desenhados antes de pintar suas obras, e Tarsila do Amaral, importante representante do modernismo brasileiro.

## Atualmente \u{1F4F1}
Hoje o desenho est\xE1 presente em livros, quadrinhos, anima\xE7\xF5es, jogos digitais, design e arte digital. Muitas crian\xE7as aprendem a desenhar tanto no papel quanto em computadores e tablets.

## Resumindo \u{1F4DD}
- Os primeiros desenhos no Brasil foram feitos pelos povos ind\xEDgenas.
- No per\xEDodo colonial, viajantes registravam o pa\xEDs por meio do desenho.
- No Imp\xE9rio surgiram escolas de arte e o ensino do desenho.
- No s\xE9culo XX o desenho ganhou espa\xE7o nas escolas, quadrinhos e publicidade.
- Atualmente o desenho tamb\xE9m \xE9 feito com tecnologias digitais.

## Curiosidade \u{1F4A1}
O desenho \xE9 uma das formas mais antigas de comunica\xE7\xE3o da humanidade e continua sendo usado para criar arte, contar hist\xF3rias e expressar ideias.`,
    matchedKey: "desenho_brasil"
  }
];
var PORQUES_ARTE = [
  // 🎨 PORQUÊS DOS MATERIAIS
  {
    keywords: ["guache", "tinta guache"],
    pergunta: "Por que usamos tinta guache?",
    resposta: "Porque o guache tem cores fortes, cobre bem o papel e seca rapidamente. Ele tamb\xE9m permite corrigir partes da pintura e fazer novas camadas de tinta."
  },
  {
    keywords: ["aquarela", "usamos aquarela"],
    pergunta: "Por que usamos aquarela?",
    resposta: "Porque a aquarela cria pinturas leves e transparentes. A \xE1gua faz parte da pintura e produz efeitos delicados."
  },
  {
    keywords: ["tinta acrilica", "acrilica"],
    pergunta: "Por que usamos tinta acr\xEDlica?",
    resposta: "Porque seca r\xE1pido, tem cores vivas e pode ser usada em tela, madeira, papel e outros materiais."
  },
  {
    keywords: ["tinta a oleo", "tinta oleo", "oleo sobre tela"],
    pergunta: "Por que usamos tinta a \xF3leo?",
    resposta: "Porque seca lentamente, permitindo misturar cores por mais tempo e criar muitos detalhes."
  },
  {
    keywords: ["lapis de cor", "lapis colorido"],
    pergunta: "Por que usamos l\xE1pis de cor?",
    resposta: "Porque ele permite controlar melhor os detalhes e fazer diferentes intensidades de cor."
  },
  {
    keywords: ["giz de cera", "giz cera"],
    pergunta: "Por que usamos giz de cera?",
    resposta: "Porque desliza facilmente no papel, possui cores vibrantes e \xE9 f\xE1cil de usar pelas crian\xE7as."
  },
  {
    keywords: ["carvao", "carv\xE3o"],
    pergunta: "Por que usamos carv\xE3o?",
    resposta: "Porque cria sombras fortes e facilita o estudo da luz e do volume."
  },
  {
    keywords: ["nanquim", "tinta nanquim"],
    pergunta: "Por que usamos nanquim?",
    resposta: "Porque produz linhas muito pretas, precisas e permanentes."
  },
  {
    keywords: ["pinceis diferentes", "pinceis", "pincel diferente", "pincel"],
    pergunta: "Por que usamos pinc\xE9is diferentes?",
    resposta: "Porque cada pincel cria um tipo diferente de tra\xE7o, textura e acabamento."
  },
  {
    keywords: ["espatula", "espatulas"],
    pergunta: "Por que usamos esp\xE1tula?",
    resposta: "Porque cria texturas grossas e efeitos que o pincel n\xE3o consegue fazer."
  },
  // ✏️ PORQUÊS DO DESENHO
  {
    keywords: ["rascunho", "fazer rascunho", "fazemos rascunho"],
    pergunta: "Por que fazemos um rascunho?",
    resposta: "Porque ele ajuda a planejar o desenho antes da vers\xE3o final."
  },
  {
    keywords: ["formas simples", "desenhamos formas simples", "formas simples primeiro"],
    pergunta: "Por que desenhamos formas simples primeiro?",
    resposta: "Porque c\xEDrculos, quadrados e tri\xE2ngulos ajudam a construir figuras mais complexas."
  },
  {
    keywords: ["apagamos algumas linhas", "apagar algumas linhas", "apagamos linhas", "apagar linhas"],
    pergunta: "Por que apagamos algumas linhas?",
    resposta: "Porque elas serviram apenas como guia durante o desenho."
  },
  {
    keywords: ["olhando para o objeto", "olhando objeto", "desenhar olhando"],
    pergunta: "Por que desenhar olhando para o objeto?",
    resposta: "Porque observar melhora a percep\xE7\xE3o das formas, propor\xE7\xF5es e detalhes."
  },
  {
    keywords: ["todos os dias", "desenhar todos os dias", "desenhar todo dia"],
    pergunta: "Por que desenhar todos os dias?",
    resposta: "Porque a pr\xE1tica melhora a coordena\xE7\xE3o motora, a observa\xE7\xE3o e a criatividade."
  },
  {
    keywords: ["anatomia", "estudar anatomia"],
    pergunta: "Por que estudar anatomia?",
    resposta: "Porque conhecer o corpo ajuda a desenhar pessoas e animais de forma mais convincente."
  },
  {
    keywords: ["perspectiva", "estudar perspectiva"],
    pergunta: "Por que estudar perspectiva?",
    resposta: "Porque ela cria a sensa\xE7\xE3o de profundidade em uma superf\xEDcie plana."
  },
  {
    keywords: ["esbocos rapidos", "esbo\xE7os r\xE1pidos", "esboco rapido", "esbo\xE7o r\xE1pido"],
    pergunta: "Por que fazer esbo\xE7os r\xE1pidos?",
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
    resposta: "Porque lembram \xE1gua, c\xE9u e natureza, transmitindo calma."
  },
  {
    keywords: ["misturamos cores", "misturar cores"],
    pergunta: "Por que misturamos cores?",
    resposta: "Porque novas cores podem ser criadas a partir das cores prim\xE1rias."
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
    resposta: "Porque elas mostram onde a luz n\xE3o chega e ajudam a criar volume."
  },
  {
    keywords: ["usamos luz", "usar luz"],
    pergunta: "Por que usamos luz?",
    resposta: "Porque a luz revela formas, profundidade e atmosfera."
  },
  {
    keywords: ["textura", "usamos textura"],
    pergunta: "Por que usamos textura?",
    resposta: "Porque ela faz a superf\xEDcie parecer lisa, \xE1spera, macia ou rugosa."
  },
  {
    keywords: ["linhas", "usamos linhas"],
    pergunta: "Por que usamos linhas?",
    resposta: "Porque elas delimitam formas, mostram movimento e organizam a composi\xE7\xE3o."
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
    keywords: ["equilibrio", "equil\xEDbrio", "usamos equilibrio", "usamos equil\xEDbrio"],
    pergunta: "Por que usamos equil\xEDbrio?",
    resposta: "Porque distribui os elementos da composi\xE7\xE3o de maneira agrad\xE1vel."
  },
  {
    keywords: ["repeticao", "repeti\xE7\xE3o", "usamos repeticao", "usamos repeti\xE7\xE3o"],
    pergunta: "Por que usamos repeti\xE7\xE3o?",
    resposta: "Porque ela cria ritmo visual."
  },
  {
    keywords: ["simetria", "usamos simetria"],
    pergunta: "Por que usamos simetria?",
    resposta: "Porque transmite organiza\xE7\xE3o e estabilidade."
  },
  {
    keywords: ["assimetria", "usamos assimetria"],
    pergunta: "Por que usamos assimetria?",
    resposta: "Porque pode tornar a composi\xE7\xE3o mais din\xE2mica."
  },
  // 🏛️ HISTÓRIA DA ARTE
  {
    keywords: ["homens das cavernas", "homem das cavernas", "cavernas desenhavam", "caverna desenhavam"],
    pergunta: "Por que os homens das cavernas desenhavam?",
    resposta: "Porque registravam animais, ca\xE7adas e acontecimentos importantes de seu cotidiano."
  },
  {
    keywords: ["egipcios desenhavam", "eg\xEDpcios desenhavam", "egipcios", "eg\xEDpcios", "pessoas de lado", "desenhavam de lado"],
    pergunta: "Por que os eg\xEDpcios desenhavam pessoas de lado?",
    resposta: "Porque queriam mostrar cada parte do corpo pelo \xE2ngulo considerado mais reconhec\xEDvel."
  },
  {
    keywords: ["gregos faziam", "esculturas detalhadas", "gregos", "gregas"],
    pergunta: "Por que os gregos faziam esculturas t\xE3o detalhadas?",
    resposta: "Porque valorizavam a observa\xE7\xE3o da natureza e do corpo humano."
  },
  {
    keywords: ["romanos copiavam", "romanos", "copiavam esculturas"],
    pergunta: "Por que os romanos copiavam esculturas gregas?",
    resposta: "Porque admiravam a arte grega e desejavam preservar esse estilo."
  },
  {
    keywords: ["arte medieval", "medieval era muito religiosa", "religiosa medieval"],
    pergunta: "Por que a arte medieval era muito religiosa?",
    resposta: "Porque a religi\xE3o ocupava um papel central na sociedade europeia da \xE9poca."
  },
  {
    keywords: ["surgiu o renascimento", "surgiu renascimento", "renascimento"],
    pergunta: "Por que surgiu o Renascimento?",
    resposta: "Porque artistas passaram a estudar a natureza, a ci\xEAncia e o ser humano de maneira mais intensa."
  },
  {
    keywords: ["da vinci estudava anatomia", "leonardo da vinci anatomia", "da vinci anatomia"],
    pergunta: "Por que Leonardo da Vinci estudava anatomia?",
    resposta: "Porque queria compreender o corpo para represent\xE1-lo com maior precis\xE3o."
  },
  {
    keywords: ["michelangelo esculpia", "esculpia marmore", "esculpia m\xE1rmore"],
    pergunta: "Por que Michelangelo esculpia m\xE1rmore?",
    resposta: "Porque o m\xE1rmore \xE9 resistente, belo e permite criar muitos detalhes."
  },
  {
    keywords: ["van gogh pinceladas", "van gogh", "pinceladas grossas", "gogh pinceladas"],
    pergunta: "Por que Van Gogh usava pinceladas grossas?",
    resposta: "Porque queria transmitir emo\xE7\xE3o e movimento atrav\xE9s da pintura."
  },
  {
    keywords: ["monet pintava a mesma", "monet mesma paisagem", "monet"],
    pergunta: "Por que Monet pintava a mesma paisagem v\xE1rias vezes?",
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
    resposta: "Porque alguns artistas queriam expressar ideias, sentimentos e formas sem representar objetos reconhec\xEDveis."
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
    keywords: ["arte transmite emocoes", "arte transmite emo\xE7\xF5es", "transmite emocoes", "transmite emo\xE7\xF5es"],
    pergunta: "Por que a arte transmite emo\xE7\xF5es?",
    resposta: "Porque artistas usam cores, formas, linhas e temas para comunicar sentimentos e ideias."
  },
  {
    keywords: ["pintura pode parecer triste", "pintura parecer triste", "pintura triste", "obra triste"],
    pergunta: "Por que uma pintura pode parecer triste?",
    resposta: "Porque elementos como cores escuras, express\xF5es e composi\xE7\xE3o podem sugerir tristeza."
  },
  {
    keywords: ["obra pode causar medo", "causar medo", "obra causar medo", "obra medo"],
    pergunta: "Por que uma obra pode causar medo?",
    resposta: "Porque certas formas, cores e contrastes despertam sensa\xE7\xF5es intensas."
  },
  {
    keywords: ["cada pessoa entende", "pessoa entende de um jeito", "observador diferente"],
    pergunta: "Por que cada pessoa entende uma obra de um jeito?",
    resposta: "Porque cada observador possui experi\xEAncias, conhecimentos e emo\xE7\xF5es diferentes."
  },
  // 🎨 CRIATIVIDADE
  {
    keywords: ["copiar desenhos ajuda", "copiar desenhos", "copiar ajuda"],
    pergunta: "Por que copiar desenhos ajuda?",
    resposta: "Porque copiar pode ensinar t\xE9cnicas e desenvolver a coordena\xE7\xE3o, desde que tamb\xE9m haja espa\xE7o para criar obras pr\xF3prias."
  },
  {
    keywords: ["errar faz parte", "erros ajudam", "errar faz parte da arte"],
    pergunta: "Por que errar faz parte da arte?",
    resposta: "Porque os erros ajudam a descobrir novas solu\xE7\xF5es e aprimorar as habilidades."
  },
  {
    keywords: ["imaginar e importante", "imaginar \xE9 importante", "imaginar importante"],
    pergunta: "Por que imaginar \xE9 importante?",
    resposta: "Porque muitas obras de arte nascem da imagina\xE7\xE3o."
  },
  {
    keywords: ["existem estilos diferentes", "estilos diferentes", "estilos de cada artista"],
    pergunta: "Por que existem estilos diferentes?",
    resposta: "Porque cada artista desenvolve sua pr\xF3pria maneira de criar."
  },
  // 🤔 CURIOSIDADES
  {
    keywords: ["mona lisa parece olhar", "mona lisa olhar para nos", "mona lisa olhar", "olhar mona lisa"],
    pergunta: "Por que a Mona Lisa parece olhar para n\xF3s?",
    resposta: "Porque Leonardo da Vinci pintou os olhos de forma que eles parecem acompanhar o observador de diferentes \xE2ngulos."
  },
  {
    keywords: ["esculturas antigas nao tem bracos", "esculturas antigas sem bracos", "sem bracos", "sem bra\xE7os", "esculturas sem bra\xE7os"],
    pergunta: "Por que algumas esculturas antigas n\xE3o t\xEAm bra\xE7os?",
    resposta: "Porque muitas foram danificadas pelo tempo, guerras ou acidentes."
  },
  {
    keywords: ["pinturas em tetos", "pintura no teto", "tetos decorados"],
    pergunta: "Por que existem pinturas em tetos?",
    resposta: "Porque artistas e arquitetos queriam decorar igrejas, pal\xE1cios e edif\xEDcios, criando a sensa\xE7\xE3o de um espa\xE7o mais grandioso."
  },
  {
    keywords: ["obras valem milhoes", "obras valem milh\xF5es", "valem milhoes", "valem milh\xF5es"],
    pergunta: "Por que algumas obras valem milh\xF5es?",
    resposta: "Porque podem ser \xFAnicas, hist\xF3ricas, raras e muito importantes para a cultura."
  },
  {
    keywords: ["artistas assinam", "assinatura do artista", "assinar as obras"],
    pergunta: "Por que artistas assinam suas obras?",
    resposta: "Porque a assinatura identifica a autoria e ajuda a registrar quem criou a obra."
  },
  {
    keywords: ["museus nao deixam tocar", "nao pode tocar", "n\xE3o pode tocar", "nao deixam tocar", "n\xE3o deixam tocar"],
    pergunta: "Por que museus n\xE3o deixam tocar nas obras?",
    resposta: "Porque o toque pode desgastar, sujar ou danificar materiais delicados."
  },
  {
    keywords: ["pinturas racham", "pintura racha", "tela racha"],
    pergunta: "Por que algumas pinturas racham?",
    resposta: "Porque tinta, madeira e tela envelhecem e sofrem altera\xE7\xF5es com o tempo."
  },
  {
    keywords: ["existem restauradores", "restauradores", "restaurador"],
    pergunta: "Por que existem restauradores?",
    resposta: "Porque eles estudam t\xE9cnicas para conservar e recuperar obras de arte danificadas."
  },
  // 🎨 PORQUÊS SUBJETIVOS E CURIOSIDADES DO CANDINHO
  {
    keywords: ["fazemos arte", "fazer arte", "por que fazemos arte"],
    pergunta: "Por que fazemos arte?",
    resposta: "Fazemos arte para expressar ideias, sentimentos, sonhos e hist\xF3rias. A arte tamb\xE9m ajuda as pessoas a observar o mundo, imaginar coisas novas e compartilhar o que pensam com outras pessoas.",
    voceSabia: "As pessoas fazem arte h\xE1 mais de 40 mil anos. Existem pinturas feitas em cavernas muito antes da inven\xE7\xE3o da escrita.",
    experimente: "Desenhe algo que aconteceu hoje com voc\xEA. Depois mostre para algu\xE9m sem explicar. Veja o que essa pessoa consegue entender apenas olhando o desenho.",
    pergunteTambem: ["O que \xE9 arte?", "Por que existem artistas?", "Como surgiu a arte?"]
  },
  {
    keywords: ["desenhamos", "desenhar", "por que desenhamos"],
    pergunta: "Por que desenhamos?",
    resposta: "Desenhamos para registrar ideias, observar melhor o mundo, criar personagens, planejar objetos e mostrar nossa imagina\xE7\xE3o. Um desenho pode contar uma hist\xF3ria mesmo sem usar palavras.",
    voceSabia: "Antes de construir pr\xE9dios, criar roupas ou fabricar carros, muitas pessoas fazem desenhos para planejar suas ideias.",
    experimente: "Olhe para um objeto da sua casa e tente desenh\xE1-lo durante cinco minutos.",
    pergunteTambem: ["Como desenhar melhor?", "Por que fazer um rascunho?", "O que \xE9 um esbo\xE7o?"]
  },
  {
    keywords: ["pintamos", "pintar", "por que pintamos"],
    pergunta: "Por que pintamos?",
    resposta: "Pintamos para dar cor \xE0s nossas ideias. As cores ajudam a mostrar emo\xE7\xF5es, criar ambientes e destacar partes importantes de uma imagem.",
    voceSabia: "Alguns artistas usam poucas cores, enquanto outros criam pinturas com centenas de tonalidades diferentes.",
    experimente: "Fa\xE7a a mesma pintura usando apenas cores quentes. Depois tente novamente usando apenas cores frias."
  },
  {
    keywords: ["dancamos", "dan\xE7amos", "dancar", "dan\xE7ar", "por que dan\xE7amos"],
    pergunta: "Por que dan\xE7amos?",
    resposta: "Dan\xE7amos para nos expressar com o corpo, acompanhar m\xFAsicas, celebrar momentos especiais e nos comunicar sem falar. A dan\xE7a tamb\xE9m desenvolve equil\xEDbrio, coordena\xE7\xE3o e criatividade.",
    voceSabia: "Existem dan\xE7as em praticamente todas as culturas do mundo, cada uma com movimentos e significados pr\xF3prios.",
    experimente: "Escolha uma m\xFAsica alegre e outra calma. Observe como seu corpo cria movimentos diferentes para cada uma."
  },
  {
    keywords: ["cantamos", "cantar", "por que cantamos"],
    pergunta: "Por que cantamos?",
    resposta: "Cantamos para expressar emo\xE7\xF5es, contar hist\xF3rias, celebrar acontecimentos e nos divertir. O canto tamb\xE9m ajuda a desenvolver a mem\xF3ria e a respira\xE7\xE3o.",
    voceSabia: "Antes mesmo de aprender a escrever, muitas culturas ensinavam hist\xF3rias importantes por meio das can\xE7\xF5es."
  },
  {
    keywords: ["teatro", "fazemos teatro", "fazer teatro", "por que fazemos teatro"],
    pergunta: "Por que fazemos teatro?",
    resposta: "Fazemos teatro para representar personagens, contar hist\xF3rias e compreender diferentes pontos de vista. No teatro usamos o corpo, a voz e a imagina\xE7\xE3o.",
    voceSabia: "No teatro, uma mesma hist\xF3ria pode ser apresentada de muitas maneiras diferentes."
  },
  {
    keywords: ["musica", "m\xFAsica", "fazemos musica", "fazemos m\xFAsica", "por que fazemos musica", "por que fazemos m\xFAsica"],
    pergunta: "Por que fazemos m\xFAsica?",
    resposta: "Fazemos m\xFAsica para criar sons organizados que despertam emo\xE7\xF5es, acompanham festas, contam hist\xF3rias e fazem parte da cultura das pessoas.",
    voceSabia: "Alguns instrumentos musicais t\xEAm milhares de anos de hist\xF3ria."
  },
  {
    keywords: ["aprendemos arte", "aprender arte", "por que aprendemos arte"],
    pergunta: "Por que aprendemos arte?",
    resposta: "Aprendemos arte porque ela desenvolve a criatividade, a observa\xE7\xE3o, a imagina\xE7\xE3o e a capacidade de resolver problemas. A arte tamb\xE9m ajuda a compreender diferentes culturas e formas de pensar.",
    voceSabia: "M\xE9dicos, engenheiros, arquitetos, cientistas e inventores tamb\xE9m usam habilidades desenvolvidas pela arte, como observar detalhes, imaginar solu\xE7\xF5es e criar novas ideias.",
    experimente: "Observe um objeto comum durante um minuto. Depois tente desenh\xE1-lo sem olhar novamente. Compare os dois momentos e descubra quantos detalhes voc\xEA percebeu."
  },
  {
    keywords: ["estudamos artistas", "estudar artistas", "por que estudamos artistas"],
    pergunta: "Por que estudamos artistas?",
    resposta: "Estudamos artistas para conhecer diferentes maneiras de criar, descobrir t\xE9cnicas, entender outras \xE9pocas da hist\xF3ria e encontrar inspira\xE7\xE3o para desenvolver nosso pr\xF3prio estilo."
  },
  {
    keywords: ["criatividade", "existe criatividade", "por que existe criatividade"],
    pergunta: "Por que existe criatividade?",
    resposta: "A criatividade existe porque o ser humano consegue imaginar possibilidades, combinar ideias e criar solu\xE7\xF5es para desafios. Ela est\xE1 presente na arte, na ci\xEAncia, na tecnologia e em muitas atividades do dia a dia."
  },
  {
    keywords: ["imaginamos", "imaginar", "imagina", "por que imaginamos"],
    pergunta: "Por que imaginamos?",
    resposta: "Imaginamos para criar hist\xF3rias, resolver problemas, inventar coisas novas e pensar em possibilidades que ainda n\xE3o existem. A imagina\xE7\xE3o \xE9 uma das ferramentas mais importantes da arte."
  },
  {
    keywords: ["aprender a desenhar", "aprender desenhar", "por que aprender a desenhar"],
    pergunta: "Por que aprender a desenhar?",
    resposta: "Aprender a desenhar ajuda a observar melhor o mundo, desenvolver a coordena\xE7\xE3o das m\xE3os, organizar ideias e comunicar pensamentos por meio de imagens. Desenhar \xE9 uma habilidade que melhora com a pr\xE1tica."
  },
  {
    keywords: ["esboco", "esbo\xE7o", "o que e um esboco", "o que \xE9 um esbo\xE7o", "como fazer um esboco", "como fazer um esbo\xE7o", "fazer rascunho", "fazer um rascunho", "o que e esboco", "o que \xE9 esbo\xE7o", "rascunho"],
    pergunta: "O que \xE9 um esbo\xE7o?",
    resposta: "Um esbo\xE7o \xE9 o primeiro desenho de uma ideia. Ele \xE9 feito com linhas leves e simples para ajudar a planejar o desenho antes da vers\xE3o final.\n\nPense no esbo\xE7o como um rascunho. Ele serve para experimentar formas, tamanhos e posi\xE7\xF5es sem se preocupar em deixar tudo perfeito.\n\nOs artistas fazem esbo\xE7os porque \xE9 mais f\xE1cil corrigir um desenho no come\xE7o do que depois de pronto.",
    voceSabia: "Leonardo da Vinci enchia seus cadernos com esbo\xE7os antes de criar suas pinturas e inven\xE7\xF5es. Muitos artistas famosos faziam dezenas de esbo\xE7os antes de terminar uma obra.",
    voceSabiaEmoji: "\u{1F31F}",
    experimente: "Pegue um l\xE1pis e desenhe uma ma\xE7\xE3 usando apenas um c\xEDrculo e algumas linhas leves. N\xE3o apague nada no come\xE7o. Depois, acrescente os detalhes e, por \xFAltimo, fa\xE7a o contorno mais forte.",
    experimenteEmoji: "\u{1F3A8}",
    comoFazerEsboco: "Passo 1: Observe bem o que voc\xEA quer desenhar.\n\nOlhe para as formas principais. Um gato pode come\xE7ar com c\xEDrculos. Uma casa pode come\xE7ar com um quadrado e um tri\xE2ngulo.\n\nPasso 2: Fa\xE7a linhas bem leves.\n\nN\xE3o aperte o l\xE1pis. Assim, ser\xE1 f\xE1cil apagar ou mudar o desenho.\n\nPasso 3: Desenhe as formas b\xE1sicas.\n\nUse c\xEDrculos, ovais, quadrados, ret\xE2ngulos e tri\xE2ngulos para montar a estrutura.\n\nPasso 4: Acrescente os detalhes.\n\nDepois que as formas estiverem no lugar certo, desenhe olhos, janelas, folhas, roupas ou outros detalhes.\n\nPasso 5: Fa\xE7a o contorno.\n\nPasse o l\xE1pis com um tra\xE7o mais firme nas linhas que far\xE3o parte do desenho final.\n\nPasso 6: Apague as linhas de constru\xE7\xE3o.\n\nRetire apenas as linhas que serviram como guia.",
    dicaCandinho: 'N\xE3o tenha medo de fazer um esbo\xE7o "torto". Quase todo desenho bonito come\xE7ou com linhas simples e algumas corre\xE7\xF5es. O esbo\xE7o \xE9 um espa\xE7o para experimentar e aprender.'
  }
];
function resolverPorqueMessage(normalizedMsg) {
  const isPorqueQuestion = normalizedMsg.includes("por que") || normalizedMsg.includes("porque") || normalizedMsg.includes("porqu\xEA") || normalizedMsg.includes("esboc") || normalizedMsg.includes("esbo\xE7o") || normalizedMsg.includes("rascunh");
  if (!isPorqueQuestion) return null;
  let bestMatch = null;
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
    let reply = `\u{1F3A8} **${bestMatch.pergunta}**

${bestMatch.resposta}`;
    if (bestMatch.voceSabia) {
      const emoji = bestMatch.voceSabiaEmoji || "\u{1F4A1}";
      reply += `

${emoji} **Voc\xEA sabia?**
${bestMatch.voceSabia}`;
    }
    if (bestMatch.experimente) {
      const emoji = bestMatch.experimenteEmoji || "\u{1F9EA}";
      reply += `

${emoji} **Experimente!**
${bestMatch.experimente}`;
    }
    if (bestMatch.comoFazerEsboco) {
      reply += `

\u270F\uFE0F **Como fazer um esbo\xE7o?**
${bestMatch.comoFazerEsboco}`;
    }
    if (bestMatch.dicaCandinho) {
      reply += `

\u{1F4A1} **Dica do Candinho**
${bestMatch.dicaCandinho}`;
    }
    if (bestMatch.pergunteTambem && bestMatch.pergunteTambem.length > 0) {
      reply += `

\u2753 **Pergunte tamb\xE9m:**
` + bestMatch.pergunteTambem.map((p) => `- ${p}`).join("\n");
    }
    reply += `

\u2728 Como seu professor de arte, adoro ver sua curiosidade colorida brilhando! Quer fazer outra pergunta ou praticar um desenho hoje?`;
    return {
      reply,
      matchedKey: "porque_arte_banco"
    };
  }
  return null;
}
function resolverComoMessage(normalizedMsg) {
  const startsWithComo = normalizedMsg.startsWith("como ") || normalizedMsg.includes(" como ") || normalizedMsg.startsWith("me ensina a ");
  if (!startsWithComo) return null;
  const bypassKeywords = [
    "fake",
    "news",
    "mentira",
    "boato",
    "golpe",
    "fraude",
    "seguranca",
    "seguran\xE7a",
    "proteg",
    "protej",
    "evitar",
    "evit",
    "checar",
    "checo",
    "descobrir",
    "desmascarar",
    "saber se e",
    "saber se e verdade",
    "sei se e",
    "sei se"
  ];
  if (bypassKeywords.some((keyword) => normalizedMsg.includes(keyword))) {
    return null;
  }
  if (normalizedMsg.includes("desenhar") || normalizedMsg.includes("desenho") || normalizedMsg.includes("desenha")) {
    if (normalizedMsg.includes("cachorro") || normalizedMsg.includes("cao") || normalizedMsg.includes("dog")) {
      return {
        reply: `\u{1F43E} **COMO DESENHAR UM CACHORRO** \u{1F436}

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis grafite, borracha e l\xE1pis de cor.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe um c\xEDrculo para ser a cabe\xE7a.
2. **PASSO 2:** Fa\xE7a uma forma oval deitada logo abaixo para ser o corpo.
3. **PASSO 3:** Desenhe quatro perninhas fofas embaixo da forma oval.
4. **PASSO 4:** Fa\xE7a duas orelhas ca\xEDdas ou pontudas nas laterais da cabe\xE7a.
5. **PASSO 5:** Acrescente dois olhinhos brilhantes e cheios de alegria.
6. **PASSO 6:** Desenhe o focinho redondinho com um belo sorriso.
7. **PASSO 7:** Fa\xE7a o rabinho abanando no final do corpo.
8. **PASSO 8:** Pinte seu novo amiguinho de quatro patas!

\u{1F4A1} **Dicas:** N\xE3o aperte muito o l\xE1pis no come\xE7o para ficar bem f\xE1cil de apagar se errar!

\u26A0\uFE0F **Erros comuns:** Desenhar o corpo muito longe ou separado da cabe\xE7a. Una-os bem para que ele fique gordinho!

\u{1F3C6} **Desafio:** Desenhe o seu cachorrinho correndo atr\xE1s de uma bola colorida em um lindo parque verde!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_cachorro"
      };
    }
    if (normalizedMsg.includes("dragao")) {
      return {
        reply: `\u{1F409} **COMO DESENHAR UM DRAG\xC3O** \u{1F30B}

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis grafite, borracha e canetinhas coloridas.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe uma forma oval deitada para o corpo e uma menor para a cabe\xE7a.
2. **PASSO 2:** Conecte as duas formas com uma linha ondulada para ser o pesco\xE7o comprido.
3. **PASSO 3:** Desenhe pernas fortes com dedinhos arredondados nas pontas.
4. **PASSO 4:** Fa\xE7a asas grandes de morcego nas costas do drag\xE3o.
5. **PASSO 5:** Desenhe pequenos tri\xE2ngulos (espinhos) ao longo do pesco\xE7o, costas e rabo.
6. **PASSO 6:** Acrescente olhos grandes e um sorriso simp\xE1tico soltando fuma\xE7a ou foguinho.
7. **PASSO 7:** Desenhe um rabo bem comprido que termina em formato de seta.
8. **PASSO 8:** Pinte com suas cores favoritas (verde, vermelho, dourado ou roxo!).

\u{1F4A1} **Dicas:** Desenhe as asas bem clarinhas no come\xE7o para ter certeza de que cabem na folha!

\u26A0\uFE0F **Erros comuns:** Deixar o pesco\xE7o e o rabo curtos demais. Drag\xF5es adoram curvas longas e imponentes!

\u{1F3C6} **Desafio:** Desenhe o seu drag\xE3o beb\xEA saindo de dentro de um ovo misterioso decorado com joias!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_dragao"
      };
    }
    if (normalizedMsg.includes("casa")) {
      return {
        reply: `\u{1F3E0} **COMO DESENHAR UMA CASA** \u{1F3E1}

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis, r\xE9gua para ajudar nas retas e l\xE1pis de cor.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe um quadrado grande no centro da folha para ser a parede da casa.
2. **PASSO 2:** Fa\xE7a um tri\xE2ngulo grande logo em cima do quadrado para ser o telhado.
3. **PASSO 3:** Desenhe um ret\xE2ngulo em p\xE9 dentro do quadrado para fazer a porta.
4. **PASSO 4:** Fa\xE7a dois pequenos quadrados nas laterais para serem as janelas.
5. **PASSO 5:** Adicione uma cruz dentro das janelas para parecer os vidros separados.
6. **PASSO 6:** Desenhe uma chamin\xE9 retangular no telhado com fuma\xE7a subindo em caracol.
7. **PASSO 7:** Coloque uma ma\xE7aneta redondinha na porta.
8. **PASSO 8:** Pinte tudo com cores alegres!

\u{1F4A1} **Dicas:** Desenhe flores na base das paredes e um caminho de pedrinhas saindo da porta!

\u26A0\uFE0F **Erros comuns:** Fazer a porta flutuando no meio da parede. Lembre-se de encost\xE1-la na linha do ch\xE3o!

\u{1F3C6} **Desafio:** Desenhe uma incr\xEDvel casa na \xE1rvore secreta com uma escada de cordas pendurada!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_casa"
      };
    }
    if (normalizedMsg.includes("castelo")) {
      return {
        reply: `\u{1F3F0} **COMO DESENHAR UM CASTELO** \u{1F6E1}\uFE0F

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis grafite, borracha e canetinhas de colorir.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe um ret\xE2ngulo grande deitado para ser a muralha principal.
2. **PASSO 2:** Fa\xE7a duas torres altas nas pontas usando ret\xE2ngulos verticais compridos.
3. **PASSO 3:** No topo da muralha, desenhe pequenos quadradinhos subindo e descendo (muralhas denteadas).
4. **PASSO 4:** Coloque telhados em formato de cone (tri\xE2ngulos altos) em cima de cada torre.
5. **PASSO 5:** Fa\xE7a um port\xE3o bem grande e arredondado bem no meio.
6. **PASSO 6:** Desenhe bandeirinhas triangulares flutuando no topo de cada telhado c\xF4nico.
7. **PASSO 7:** Adicione janelinhas em formato de arco de cabe\xE7a para baixo nas torres.
8. **PASSO 8:** Pinte as paredes de cinza e azul, e use cores brilhantes e divertivas nas bandeiras!

\u{1F4A1} **Dicas:** Fa\xE7a pequenos risquinhos de "tijolos" espalhados pelas paredes para dar um toque antigo!

\u26A0\uFE0F **Erros comuns:** Esquecer as janelas das torres! Os guardas do castelo precisam de janelinhas para vigiar!

\u{1F3C6} **Desafio:** Desenhe um fosso ao redor do seu castelo com uma ponte levadi\xE7a e um jacar\xE9 camarada!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_castelo"
      };
    }
    if (normalizedMsg.includes("cavalo")) {
      return {
        reply: `\u{1F434} **COMO DESENHAR UM CAVALINHO** \u{1F33E}

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis, borracha e giz de cera ou l\xE1pis colorido.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe uma forma oval grande e deitada para o corpo do cavalo.
2. **PASSO 2:** Fa\xE7a uma forma oval menor inclinada um pouco mais acima para ser a cabe\xE7a.
3. **PASSO 3:** Trace duas linhas fortes para ligar a cabe\xE7a ao corpo, formando o pesco\xE7o.
4. **PASSO 4:** Desenhe quatro pernas compridas e firmes embaixo do corpo com cascos quadrados.
5. **PASSO 5:** Fa\xE7a duas orelhas pontudinhas voltadas para cima na cabe\xE7a.
6. **PASSO 6:** Desenhe uma crina longa no pesco\xE7o e um rabo cheio de pelos fofos voando com o vento.
7. **PASSO 7:** Fa\xE7a o olho expressivo e o focinho na ponta da cabe\xE7a.
8. **PASSO 8:** Pinte seu cavalo de marrom, preto, branco ou cinza com manchinhas!

\u{1F4A1} **Dicas:** Desenhar o pesco\xE7o ligeiramente grosso ajuda o cavalo a parecer forte e elegante!

\u26A0\uFE0F **Erros comuns:** Fazer as pernas muito curtinhas ou o rabo murcho. Cavalos adoram galopar com rabos esvoa\xE7antes!

\u{1F3C6} **Desafio:** Desenhe o seu cavalo saltando por cima de um tronco de \xE1rvore ca\xEDda em um campo florido!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_cavalo"
      };
    }
    if (normalizedMsg.includes("paisagem")) {
      return {
        reply: `\u{1F3DE}\uFE0F **COMO DESENHAR UMA PAISAGEM LINDA** \u{1F3D4}\uFE0F

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel sulfite, l\xE1pis de desenho macio, borracha e uma paleta cheia de cores.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe uma linha reta horizontal no meio da folha para ser a linha do horizonte (terra e c\xE9u).
2. **PASSO 2:** Fa\xE7a montanhas em ziguezague acima da linha do horizonte ao fundo.
3. **PASSO 3:** Desenhe um grande sol redondo surgindo ou se pondo atr\xE1s das montanhas.
4. **PASSO 4:** Crie um rio fazendo curvas, come\xE7ando bem fininho perto das montanhas e ficando bem largo perto de voc\xEA.
5. **PASSO 5:** Fa\xE7a algumas nuvens fofas de algod\xE3o no c\xE9u e p\xE1ssaros voando em forma de "V".
6. **PASSO 6:** Adicione grama macia e algumas \xE1rvores nas margens do seu rio.
7. **PASSO 7:** Desenhe florzinhas coloridas espalhadas pelo ch\xE3o em primeiro plano.
8. **PASSO 8:** Pinte tudo com cores bem alegres e use degrad\xEA no c\xE9u!

\u{1F4A1} **Dicas:** Coisas que est\xE3o longe s\xE3o menores e clarinhas. Coisas perto de n\xF3s s\xE3o maiores e bem n\xEDtidas!

\u26A0\uFE0F **Erros comuns:** Desenhar o rio da mesma largura o caminho todo. Come\xE7ar fino e terminar largo d\xE1 efeito de profundidade!

\u{1F3C6} **Desafio:** Mude o clima da paisagem! Que tal transform\xE1-la em uma paisagem noturna com uma lua brilhante?

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_paisagem"
      };
    }
    if (normalizedMsg.includes("arvore")) {
      return {
        reply: `\u{1F333} **COMO DESENHAR UMA \xC1RVORE FORTE** \u{1F34E}

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis macio, borracha e giz de cera ou l\xE1pis de cor.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe duas linhas verticais paralelas ligeiramente curvadas para fora para fazer o tronco.
2. **PASSO 2:** No topo do tronco, divida as linhas abrindo em dois galhos que parecem a letra "Y".
3. **PASSO 3:** Desenhe uma grande copa fofa de folhas contornando os galhos, parecendo uma nuvem gigante.
4. **PASSO 4:** Adicione pequenas ra\xEDzes na parte de baixo do tronco, sumindo na grama macia.
5. **PASSO 5:** Desenhe pequenos c\xEDrculos vermelhos na copa para serem ma\xE7\xE3s deliciosas ou flores coloridas.
6. **PASSO 6:** Fa\xE7a tra\xE7os curtos e ondulados dentro do tronco para imitar a textura \xE1spera da casca da madeira.
7. **PASSO 7:** Desenhe um arbusto pequeno ou graminha ao p\xE9 da \xE1rvore.
8. **PASSO 8:** Pinte o tronco de marrom terra e as folhas com v\xE1rios tons de verde vivo!

\u{1F4A1} **Dicas:** Use pequenas nuvens arredondadas encavaladas para fazer a copa, isso d\xE1 muito volume real!

\u26A0\uFE0F **Erros comuns:** Fazer o tronco reto como uma r\xE9gua de parede. \xC1rvores t\xEAm curvas e irregularidades lindas!

\u{1F3C6} **Desafio:** Desenhe uma simp\xE1tica corujinha morando dentro de uma toca redonda no tronco da sua \xE1rvore!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_arvore"
      };
    }
    if (normalizedMsg.includes("robo")) {
      return {
        reply: `\u{1F916} **COMO DESENHAR UM ROB\xD4 AMIGO** \u26A1

Vamos desenhar juntos! Fa\xE7a formas bem simples, depois una essas formas, acrescente os detalhes, passe o l\xE1pis mais forte, apague as linhas de ajuda e pinte se desejar! \u{1F970}

\u{1F392} **Materiais:** Papel, l\xE1pis, borracha, caneta esferogr\xE1fica preta para o contorno final e giz de cera.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Desenhe um quadrado m\xE9dio para a cabe\xE7a e um ret\xE2ngulo grande abaixo para o corpo de metal.
2. **PASSO 2:** Conecte a cabe\xE7a ao corpo com duas pequenas linhas verticais formando um pesco\xE7o de ferro.
3. **PASSO 3:** Fa\xE7a os bra\xE7os e pernas usando ret\xE2ngulos compridos divididos em listras (tubos sanfonados).
4. **PASSO 4:** Desenhe garras de metal no final dos bra\xE7os, parecendo a letra "C".
5. **PASSO 5:** Coloque duas antenas engra\xE7adas na cabe\xE7a com bolinhas nas pontas.
6. **PASSO 6:** Desenhe bot\xF5es redondos, telas quadradas e l\xE2mpadas piscantes no painel do peito do seu rob\xF4.
7. **PASSO 7:** Fa\xE7a olhos grandes em formato de c\xEDrculos brilhantes e parafusos nas juntas do corpo.
8. **PASSO 8:** Pinte com tons met\xE1licos de cinza, prata e acenda os bot\xF5es com vermelho, azul e verde brilhantes!

\u{1F4A1} **Dicas:** Use objetos redondos, como moedas, para tra\xE7ar os c\xEDrculos e bot\xF5es perfeitamente!

\u26A0\uFE0F **Erros comuns:** Fazer as pernas e bra\xE7os duros demais sem dobras. Linhas sanfonadas d\xE3o movimento ao rob\xF4!

\u{1F3C6} **Desafio:** Crie o seu rob\xF4 fazendo uma tarefa super divertida, como preparando um bolo espacial gigante!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_desenhar_robo"
      };
    }
    return {
      reply: `\u{1F3A8} **COMO DESENHAR QUALQUER COISA** \u2728

Vamos desenhar juntos! Fazer desenhos incr\xEDveis \xE9 super divertido quando seguimos passos simples! \u{1F970}

\u{1F392} **Materiais:** Papel em branco, l\xE1pis grafite macio, borracha macia e l\xE1pis coloridos.

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1 (Rascunhar):** Esboce a forma principal usando figuras geom\xE9tricas bem f\xE1ceis (c\xEDrculos para a cabe\xE7a ou flores, ovais para corpos de animais, ret\xE2ngulos para pr\xE9dios e pernas).
2. **PASSO 2 (Ligar as Formas):** Una as formas desenhadas com linhas suaves e delicadas para dar forma ao esqueleto do desenho.
3. **PASSO 3 (Acrescentar Detalhes):** Desenhe as partes menores e mais detalhadas (como olhos, folhagens, janelas, dedinhos ou texturas).
4. **PASSO 4 (Contornar):** Passe o l\xE1pis mais forte (ou uma canetinha preta fina) nas linhas definitivas que voc\xEA mais gostou.
5. **PASSO 5 (Apagar):** Apague as linhas geom\xE9tricas de ajuda que voc\xEA desenhou clarinho no in\xEDcio.
6. **PASSO 6 (Pintar):** D\xEA asas \xE0 imagina\xE7\xE3o pintando seu desenho com as cores que seu cora\xE7\xE3o mandar!

\u{1F4A1} **Dicas:** Nunca aperte o l\xE1pis na folha no come\xE7o! Manter a m\xE3o bem leve \xE9 o maior segredo de todo grande artista.

\u26A0\uFE0F **Erros comuns:** Tentar fazer os detalhes pequenininhos logo no primeiro passo. Comece sempre do maior para o menor!

\u{1F3C6} **Desafio:** Tente fazer o desenho do seu tema favorito em uma vers\xE3o gigante ou em uma vers\xE3o beb\xEA bem fofinha!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_desenhar_geral"
    };
  }
  if (normalizedMsg.includes("pintar") || normalizedMsg.includes("pintura") || normalizedMsg.includes("pinta")) {
    if (normalizedMsg.includes("por do sol")) {
      return {
        reply: `\u{1F305} **COMO PINTAR UM P\xD4R DO SOL M\xC1GICO** \u{1F3A8}

Pintar o entardecer \xE9 como espalhar calor e sentimentos na folha! Vamos fazer isso de forma linda e divertida!

\u{1F392} **Materiais:** Papel grosso (para suportar a tinta), pinc\xE9is (um largo e um bem fino), tinta guache (amarela, vermelha, azul-escura e preta), potinho com \xE1gua e paninho.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Escolha tr\xEAs cores principais: amarelo, vermelho e azul-escuro.
2. **PASSO 2:** Comece pintando de amarelo brilhante a parte mais baixa do seu c\xE9u (linha do horizonte).
3. **PASSO 3:** V\xE1 subindo na folha misturando um pouco de vermelho para criar um laranja quente e vibrante.
4. **PASSO 4:** No topo da p\xE1gina, adicione a tinta azul-escura pura, criando um degrad\xEA suave (misture bem de leve com o vermelho para formar um roxo lindo!).
5. **PASSO 5:** Deixe o seu c\xE9u colorido secar por cerca de 3 minutinhos.
6. **PASSO 6:** Com o c\xE9u seco, use tinta preta pura e o pincel fino para pintar silhuetas na base (como coqueiros, montanhas ou passarinhos voando).
7. **PASSO 7:** Finalize colocando um semic\xEDrculo amarelo-claro na linha do horizonte para representar o sol se deitando!

\u{1F4A1} **Dicas:** Misture as tintas no papel com o pincel levemente \xFAmido, passando-o de forma horizontal de um lado para o outro!

\u26A0\uFE0F **Erros comuns:** Misturar preto diretamente nas cores quentes enquanto est\xE3o molhadas. O preto deve ser usado por \xFAltimo para silhuetas pretas perfeitas!

\u{1F3C6} **Desafio:** Tente pintar esse p\xF4r do sol refletindo sobre um rio ou lago azul e dourado na parte inferior!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_pintar_por_do_sol"
      };
    }
    if (normalizedMsg.includes("floresta") || normalizedMsg.includes("arvores") || normalizedMsg.includes("arvore")) {
      return {
        reply: `\u{1F333} **COMO PINTAR UMA FLORESTA ENCANTADA** \u{1F332}

Pintar uma floresta \xE9 dar vida a um lar cheio de mist\xE9rios e natureza! Vamos criar esse bosque maravilhoso juntos!

\u{1F392} **Materiais:** Tela de pintura ou papel grosso, tintas guache verde-claro, verde-escuro, marrom, amarelo e branco, pinc\xE9is e uma esponja de lou\xE7a limpa.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Pinte um fundo suave misturando azul-celeste e branco para fazer o c\xE9u que aparece por tr\xE1s das \xE1rvores.
2. **PASSO 2:** Use tinta marrom dilu\xEDda e um pincel plano para desenhar os troncos das \xE1rvores. Fa\xE7a troncos fininhos ao fundo e mais grossos perto de voc\xEA.
3. **PASSO 3:** Umede\xE7a a ponta da sua esponja na tinta verde-escura e d\xEA batidinhas leves para criar as folhas densas da floresta.
4. **PASSO 4:** Repita as batidinhas com verde-claro por cima para criar camadas de folhas iluminadas.
5. **PASSO 5:** Adicione toques de tinta amarela no topo de algumas \xE1rvores para simular os raios de sol batendo.
6. **PASSO 6:** Pinte o ch\xE3o com batidinhas marrons e verdes para simular terra \xFAmida e grama fofa.
7. **PASSO 7:** Pinte pequenas flores batendo a ponta do cabo do pincel sujo de tinta vermelha ou amarela no ch\xE3o!

\u{1F4A1} **Dicas:** Deixar pequenas frestas brancas do fundo sem cobrir d\xE1 a impress\xE3o fant\xE1stica de luz real vazando entre os galhos!

\u26A0\uFE0F **Erros comuns:** Usar apenas um tipo de verde. Misturar amarelo ao verde cria tons cheios de luz natural e riqueza!

\u{1F3C6} **Desafio:** Desenhe um pequeno cervo ou coelho marrom espreitando silenciosamente entre as folhagens do seu bosque!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_pintar_floresta"
      };
    }
    if (normalizedMsg.includes("flor")) {
      return {
        reply: `\u{1F338} **COMO PINTAR UMA LINDA FLOR** \u{1F33A}

Pintar flores \xE9 espalhar perfume e cores alegres pela nossa imagina\xE7\xE3o! Vamos criar uma obra de arte floral!

\u{1F392} **Materiais:** Papel, tintas de cores vivas (rosa, vermelho, violeta ou azul), tinta verde e amarela, pincel macio arredondado.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Pinte o fundo da folha com uma cor clarinha neutra (como azul-beb\xEA ou verde-claro) e espere secar.
2. **PASSO 2:** Use tinta amarela ou laranja pura para pintar um c\xEDrculo gordinho bem no centro da folha (o miolo).
3. **PASSO 3:** Carregue seu pincel com a cor escolhida para as p\xE9talas e posicione a ponta perto do miolo, aperte um pouco e puxe para fora para pintar as p\xE9talas redondinhas.
4. **PASSO 4:** Repita o movimento fazendo p\xE9talas unidas por toda a volta do c\xEDrculo central.
5. **PASSO 5:** Use tinta verde e trace um caule comprido descendo do miolo at\xE9 a base da folha, com duas folhas pontudinhas nas laterais.
6. **PASSO 6:** Molhe a pontinha do cabo do pincel na tinta branca e fa\xE7a pequenos pontinhos delicados no miolo amarelo para imitar o p\xF3len.
7. **PASSO 7:** Adicione pequenos riscos finos de cor vermelha ou rosa-escura na base de cada p\xE9tala para dar profundidade e sombra real!

\u{1F4A1} **Dicas:** Gire a folha de papel enquanto pinta as p\xE9talas, isso ajuda a manter o mesmo \xE2ngulo e conforto para as suas m\xE3os!

\u26A0\uFE0F **Erros comuns:** Pintar as p\xE9talas afastadas demais do miolo. Elas devem nascer e encostar diretamente no centro da flor!

\u{1F3C6} **Desafio:** Desenhe uma abelhinha gordinha listrada de amarelo e preto voando pertinho da sua flor rec\xE9m-pintada!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_pintar_flor"
      };
    }
    return {
      reply: `\u{1F3A8} **COMO INICIAR SUA PINTURA COM SUCESSO** \u{1F58C}\uFE0F

Pintar \xE9 uma das formas mais gostosas de expressar quem somos no mundo! Vamos aprender a pintar de forma profissional!

\u{1F392} **Materiais:** Guache ou tinta acr\xEDlica escolar, pinc\xE9is de diferentes pontas, papel encorpado, potinho com \xE1gua e paninho macio.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Escolha sempre de tr\xEAs a cinco cores principais antes de come\xE7ar, criando uma paleta de cores harmoniosa.
2. **PASSO 2:** Comece pintando as \xE1reas maiores ao fundo (como o c\xE9u ou o ch\xE3o) e espere secar um pouquinho.
3. **PASSO 3:** Pinte as formas principais por cima do fundo seco, usando pinceladas firmes e sem pressa.
4. **PASSO 4:** Aplique camadas de cores: d\xEA uma primeira dem\xE3o e, se o papel aparecer, passe mais uma dem\xE3o fina ap\xF3s secar.
5. **PASSO 5:** Crie luz e sombras usando um pouco de tinta branca para destacar pontos claros e cores escuras para as sombras.
6. **PASSO 6:** Fa\xE7a os contornos e pequenos detalhes (olhos, galhos, tra\xE7os finos) por \xFAltimo, usando o pincel mais fino que tiver.
7. **PASSO 7:** Deixe secar bem e assine sua obra de arte no cantinho inferior!

\u{1F4A1} **Dicas:** Lave muito bem o seu pincel na \xE1gua e seque-o no paninho toda vez que for mudar de cor, isso mant\xE9m as cores brilhantes e puras!

\u26A0\uFE0F **Erros comuns:** Usar \xE1gua em excesso na tinta guache, deixando-a transparente e enrugando o papel. A tinta deve ter consist\xEAncia cremosa!

\u{1F3C6} **Desafio:** Experimente pintar usando apenas seus dedos (dedografia) ou cotonetes para criar um efeito pontilhista incr\xEDvel!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_pintar_geral"
    };
  }
  if (normalizedMsg.includes("escrever") || normalizedMsg.includes("escrita") || normalizedMsg.includes("escreve")) {
    if (normalizedMsg.includes("poema")) {
      return {
        reply: `\u270D\uFE0F **COMO ESCREVER UM POEMA LINDO** \u{1F338}

Poemas s\xE3o como fotografias de sentimentos tiradas com palavras do cora\xE7\xE3o! Vamos escrever um juntos!

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1:** Escolha um tema simples e m\xE1gico (ex: seu gatinho, uma estrela cadente, a chuva batendo na janela ou a amizade).
2. **PASSO 2:** Escreva palavras soltas que descrevem as sensa\xE7\xF5es desse tema (ex: fofura, brilho, calmaria, risadas, cores).
3. **PASSO 3:** Escreva frases curtas em cada linha. Cada linha do seu poema se chama **verso**!
4. **PASSO 4:** Brinque com rimas engra\xE7adas ou doces no final das frases (ex: *desenhar* combina com *brincar*, *sol* rima com *caracol*).
5. **PASSO 5:** Use compara\xE7\xF5es divertidas e m\xE1gicas (ex: "o sol \xE9 um prato de ouro brilhando no c\xE9u" ou "o mar \xE9 um cobertor azul de sereias").
6. **PASSO 6:** Agrupe as frases de quatro em quatro linhas, separando-as com um espa\xE7o. Esses grupos de versos se chamam **estrofes**!
7. **PASSO 7:** Leia em voz alta e escute a m\xFAsica secreta que as palavras fazem! Fa\xE7a pequenos ajustes se achar necess\xE1rio.
8. **PASSO 8:** Escolha um t\xEDtulo super criativo e assine como o grande autor que voc\xEA \xE9!

\u{1F4A1} **Dicas:** Poemas n\xE3o precisam ter rimas obrigatoriamente! O mais importante \xE9 colocar sentimentos puros e sinceros no texto.

\u26A0\uFE0F **Erros comuns:** Tentar usar palavras dif\xEDceis demais que voc\xEA n\xE3o usa no dia a dia. A beleza do poema mora na sua simplicidade e afeto!

\u{1F3C6} **Desafio:** Escreva um acr\xF3stico, onde as primeiras letras de cada linha de cima a baixo soletram o seu pr\xF3prio nome!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um exemplo de poema pronto para inspirar voc\xEA? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_escrever_poema"
      };
    }
    if (normalizedMsg.includes("carta")) {
      if (normalizedMsg.includes("romantica") || normalizedMsg.includes("carinhoso") || normalizedMsg.includes("bilhete")) {
        return {
          reply: `\u2764\uFE0F **COMO ESCREVER UMA CARTA ROM\xC2NTICA OU BILHETE CARINHOSO** \u{1F48C}

Escrever uma carta carinhosa \xE9 uma forma m\xE1gica de enviar um abra\xE7o em forma de papel para quem amamos! Vamos aprender a estrutura ideal:

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1 (Cidade e Data):** Escreva no canto superior esquerdo o nome da sua cidade e o dia de hoje (ex: *Brodowski, 11 de Julho de 2026*).
2. **PASSO 2 (Sauda\xE7\xE3o de Carinho):** Comece com uma abertura doce e calorosa (ex: *Para minha pessoa mais especial do mundo,*).
3. **PASSO 3 (O Motivo da Carta):** Diga por que voc\xEA est\xE1 escrevendo (ex: *Resolvi colocar em palavras todo o carinho que sinto por voc\xEA e como voc\xEA faz meus dias coloridos...*).
4. **PASSO 4 (Qualidades Sinceras):** Escreva tr\xEAs qualidades fofas que voc\xEA ama na pessoa (ex: *Eu adoro seu sorriso brilhante, seu abra\xE7o bem quentinho e como voc\xEA sempre me faz rir de piadas bobas*).
5. **PASSO 5 (Uma Mem\xF3ria Feliz):** Relembre um momento gostoso que voc\xEAs passaram juntos brincando ou conversando.
6. **PASSO 6 (Uma Despedida Doce):** Escolha um tchau cheio de amor (ex: *Com todo o carinho e pinceladas de amor do meu cora\xE7\xE3o,*).
7. **PASSO 7 (Sua Assinatura):** Assine seu nome bem bonito e decore a folha com cora\xE7\xF5es desenhados!

\u{1F4A1} **Dicas:** Escrever com sua pr\xF3pria letra (em vez de digitar no celular) torna a carta cem vezes mais especial e emocionante!

\u26A0\uFE0F **Erros comuns:** Escrever correndo e deixar a letra ileg\xEDvel. Escreva devagarzinho, desenhando as letras com muito carinho!

\u{1F3C6} **Desafio:** Crie um pequeno envelope decorado dobrando papel e cole cora\xE7\xF5es coloridos ou estrelas de glitter para selar o bilhete!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um exemplo de bilhete rom\xE2ntico/carinhoso para inspirar voc\xEA? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
          matchedKey: "como_escrever_carta_romantica"
        };
      }
      return {
        reply: `\u2709\uFE0F **COMO ESCREVER UMA CARTA PERFEITA** \u{1F4EE}

Enviar uma carta \xE9 um dos costumes mais lindos da humanidade! Vamos organizar sua carta de forma perfeita e clara:

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1 (Cabe\xE7alho):** Escreva no topo esquerdo onde voc\xEA est\xE1 e a data de hoje (ex: *Brodowski, 11 de Julho de 2026*).
2. **PASSO 2 (Cumprimento):** Comece cumprimentando a pessoa com carinho (ex: *Querido amigo,* ou *Querida vov\xF3,*).
3. **PASSO 3 (Assunto Principal):** Conte as suas novidades, fale sobre os seus desenhos novos, suas aventuras na escola ou suas brincadeiras.
4. **PASSO 4 (Interesse Real):** Fa\xE7a perguntas sobre como a pessoa est\xE1 e o que ela tem feito (ex: *Como est\xE3o as coisas por a\xED? Voc\xEA tem desenhado bastante?*).
5. **PASSO 5 (Carinho e Sentimento):** Diga que sente saudades e que espera receber not\xEDcias em breve.
6. **PASSO 6 (Despedida Amig\xE1vel):** Escolha um final fofo (ex: *Com muitas saudades e um grande abra\xE7o,*).
7. **PASSO 7 (Assinatura):** Escreva seu nome no final de forma bem caprichada.

\u{1F4A1} **Dicas:** Voc\xEA pode desenhar pequenas ilustra\xE7\xF5es nas bordas do papel para deixar a carta super personalizada e linda!

\u26A0\uFE0F **Erros comuns:** Esquecer de colocar a data. As datas ajudam a pessoa a lembrar exatamente de quando aquela conversa aconteceu no futuro!

\u{1F3C6} **Desafio:** Finja que voc\xEA \xE9 um explorador espacial mandando not\xEDcias de Marte e escreva uma carta super divertida para a Terra!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um exemplo de carta pronta para voc\xEA usar como modelo? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_escrever_carta"
      };
    }
    if (normalizedMsg.includes("historia") || normalizedMsg.includes("conto") || normalizedMsg.includes("redacao")) {
      return {
        reply: `\u{1F4DA} **COMO ESCREVER UMA HIST\xD3RIA OU REDA\xC7\xC3O FANT\xC1STICA** \u{1F981}

Contar hist\xF3rias \xE9 criar mundos m\xE1gicos onde tudo \xE9 poss\xEDvel! Vamos aprender a receita para uma aventura perfeita:

\u270F\uFE0F **Passo a Passo:**
1. **PASSO 1 (O Her\xF3i):** Escolha quem ser\xE1 o protagonista (um gatinho astronauta ou uma menina com l\xE1pis m\xE1gico falante).
2. **PASSO 2 (O Cen\xE1rio):** Onde a aventura acontece? Em uma floresta flutuante ou no fundo de um pote de geleia?
3. **PASSO 3 (A Rotina inicial):** Comece apresentando o personagem em seu dia a dia comum (ex: *Era uma vez o gatinho Pipoca...*).
4. **PASSO 4 (O Problema):** De repente, um mist\xE9rio ou desafio acontece! (ex: *Numa noite, todas as estrelas perderam o brilho!*).
5. **PASSO 5 (A Jornada):** Mostre como o her\xF3i usa a intelig\xEAncia, amizade e criatividade para tentar resolver o problema.
6. **PASSO 6 (O Cl\xEDmax):** \xC9 a parte mais emocionante, onde o problema quase vence, mas o her\xF3i encontra uma sa\xEDda genial!
7. **PASSO 7 (Final Feliz):** Mostre o que mudou no mundo e o que o her\xF3i aprendeu de importante.
8. **PASSO 8 (T\xEDtulo Atraente):** Crie um t\xEDtulo bem curioso para deixar os leitores ansiosos para ler!

\u{1F4A1} **Dicas:** Use adjetivos muito coloridos para descrever as coisas (ex: *\xE1rvore de algod\xE3o doce cor-de-rosa*)!

\u26A0\uFE0F **Erros comuns:** Resolver o mist\xE9rio r\xE1pido demais sem dar tempo para o leitor ficar curioso. Valorize o mist\xE9rio!

\u{1F3C6} **Desafio:** Escreva uma micro-hist\xF3ria incr\xEDvel contendo apenas cinco frases do come\xE7o ao fim!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um exemplo de hist\xF3ria m\xE1gica curta para voc\xEA? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_escrever_historia"
      };
    }
    if (normalizedMsg.includes("bilhete") || normalizedMsg.includes("mensagem") || normalizedMsg.includes("aniversario") || normalizedMsg.includes("convite")) {
      return {
        reply: `\u{1F48C} **COMO ESCREVER BILHETES, MENSAGENS E CONVITES INCR\xCDVEIS** \u2728

Escrever mensagens r\xE1pidas de carinho ou convites festivos \xE9 uma del\xEDcia! Vamos aprender a estrutura para cada um:

\u270F\uFE0F **Passo a Passo para Bilhete Carinhoso:**
1. **PASSO 1:** Escolha um cumprimento fofo (ex: *Oi, meu amigo favorito!*).
2. **PASSO 2:** Escreva algo curto, sincero e bonito (ex: *Vi essa flor no jardim e lembrei da sua alegria! Obrigado por ser um amigo t\xE3o legal.*).
3. **PASSO 3:** Deixe uma frase de carinho (ex: *Tenha um dia super colorido e cheio de brincadeiras!*).
4. **PASSO 4:** Despe\xE7a-se com fofura (ex: *Abra\xE7o quentinho do seu amigo, Candinho.*).

\u270F\uFE0F **Passo a Passo para Convites:**
1. **PASSO 1 (O Chamado):** Fa\xE7a uma chamada animada (ex: *Voc\xEA est\xE1 convidado para a minha festa de anivers\xE1rio gal\xE1ctica!*).
2. **PASSO 2 (As Informa\xE7\xF5es de Ouro):** Coloque bem claro:
   - \u{1F4C5} **Data:** Dia 15 de Outubro
   - \u23F0 **Hor\xE1rio:** \xC0s 15 horas
   - \u{1F3E1} **Local:** Rua da Paleta M\xE1gica, n\xBA 100
3. **PASSO 3 (Confirma\xE7\xE3o):** Pe\xE7a para a pessoa avisar se vai conseguir ir at\xE9 o dia anterior.

\u{1F4A1} **Dicas:** Coloque uma gotinha de perfume no papel ou use canetinhas com cheiro para dar um toque m\xE1gico sensorial!

\u26A0\uFE0F **Erros comuns:** Esquecer de colocar o hor\xE1rio ou local no convite. Sem as informa\xE7\xF5es b\xE1sicas, os convidados n\xE3o conseguir\xE3o chegar!

\u{1F3C6} **Desafio:** Crie um convite secreto em forma de mapa do tesouro, onde o local da festa \xE9 a ilha secreta de doces!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um exemplo pronto de bilhete carinhoso ou convite festivo para voc\xEA? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_escrever_bilhete"
      };
    }
  }
  if (normalizedMsg.includes("criar") || normalizedMsg.includes("cria ")) {
    return {
      reply: `\u{1F31F} **COMO CRIAR PERSONAGENS, MONSTROS E HER\xD3IS FANT\xC1STICOS** \u{1F9B8}\u200D\u2642\uFE0F

Criar um personagem \xE9 como plantar uma sementinha de vida na sua imagina\xE7\xE3o! Vamos montar a ficha completa dele juntos!

\u270F\uFE0F **Passo a Passo da Cria\xE7\xE3o:**
1. **PASSO 1 (Identidade):** Escolha o Nome dele, a Idade e se ele \xE9 humano, rob\xF4, animal m\xEDstico ou ser extraterrestre.
2. **PASSO 2 (Superpoderes):** O que ele sabe fazer de mais incr\xEDvel? (ex: voar em nuvens de algod\xE3o doce, disparar raios de cores de guache com as m\xE3os, ou falar com animais m\xE1gicos).
3. **PASSO 3 (O Ponto Fraco):** Todo grande her\xF3i ou monstro precisa de um ponto fraco divertido! Isso o torna amig\xE1vel! (ex: derrete se comer chocolate, tem c\xF3cegas nos p\xE9s, ou perde as for\xE7as se ver \xE1gua com sab\xE3o).
4. **PASSO 4 (A Personalidade):** Ele \xE9 tagarela e brincalh\xE3o? T\xEDmido e super inteligente? Ou dorminhoco e comil\xE3o? Escreva duas caracter\xEDsticas dele.
5. **PASSO 5 (Origem de Ouro):** De onde ele veio? (ex: nasceu dentro de um potinho de glitter brilhante ou caiu de uma estrela cadente colorida).
6. **PASSO 6 (O Visual):** Desenhe a roupinha dele com capa, \xF3culos misteriosos, cinto de utilidades art\xEDstico ou espinhos coloridos nas costas!

\u{1F4A1} **Dicas:** D\xEA a ele um acess\xF3rio muito marcante, como um bon\xE9 de cabe\xE7a para baixo, uma gravata borboleta n\xE9on ou um bichinho de estima\xE7\xE3o em miniatura!

\u26A0\uFE0F **Erros comuns:** Fazer o seu her\xF3i perfeito e sem nenhuma fraqueza. Personagens com pequenos medos ou manias engra\xE7adas s\xE3o muito mais queridos e divertidos!

\u{1F3C6} **Desafio:** Desenhe o seu personagem apertando as m\xE3os e fazendo amizade com o seu pior e mais engra\xE7ado rival!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu crie a ficha de um personagem in\xE9dito e divertido para voc\xEA? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_criar_personagem"
    };
  }
  if (normalizedMsg.includes("fazer arte") || normalizedMsg.includes("fazer uma") || normalizedMsg.includes("como fazer") || normalizedMsg.includes("fazer origami") || normalizedMsg.includes("dobradura") || normalizedMsg.includes("fantoche") || normalizedMsg.includes("tinta")) {
    if (normalizedMsg.includes("origami") || normalizedMsg.includes("dobradura")) {
      return {
        reply: `\u{1F436} **COMO FAZER UM ORIGAMI/DOBRADURA DE CACHORRINHO** \u{1F4C4}

Origami \xE9 a arte m\xE1gica de transformar uma folha de papel comum em animais e objetos incr\xEDveis dobrando!

\u{1F392} **Materiais:** Uma folha de papel cortada em formato de quadrado perfeito (todas as quatro laterais com o mesmo tamanho) e caneta preta.

\u2702\uFE0F **Passo a Passo:**
1. **PASSO 1:** Dobre o seu quadrado de papel ao meio juntando as pontas opostas para formar um grande tri\xE2ngulo perfeito. Passe bem a unha na dobra!
2. **PASSO 2:** Coloque o tri\xE2ngulo na mesa com a ponta maior virada para baixo.
3. **PASSO 3 (As Orelhas):** Dobre a ponta esquerda e a ponta direita do tri\xE2ngulo para baixo, criando duas lindas orelhinhas ca\xEDdas de cachorrinho.
4. **PASSO 4 (O Focinho):** Pegue a pontinha de baixo do tri\xE2ngulo e dobre um pouquinho para cima, formando o focinho do c\xE3ozinho.
5. **PASSO 5 (O Rosto):** Com a caneta preta, desenhe dois olhinhos redondos brilhantes, algumas sardas na bochecha e pinte a pontinha do focinho de preto.
6. **PASSO 6:** Desenhe manchinhas marrons ou pretas pela dobradura se quiser um cachorrinho malhado!

\u{1F4A1} **Dicas:** O segredo do origami \xE9 apertar muito bem cada dobra usando as costas da unha ou uma colher de metal para ficar firme!

\u26A0\uFE0F **Erros comuns:** Usar papel retangular comum. Se o papel n\xE3o for um quadrado perfeito, as dobras n\xE3o v\xE3o se encaixar perfeitamente!

\u{1F3C6} **Desafio:** Tente dobrar um barquinho de papel cl\xE1ssico e teste coloc\xE1-lo para navegar em um prato fundo com \xE1gua azul!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu ensine outra dobradura divertida passo a passo? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_fazer_origami"
      };
    }
    if (normalizedMsg.includes("fantoche")) {
      return {
        reply: `\u{1F3AD} **COMO FAZER UM FANTOCHE DE MEIA SUPER ENGRA\xC7ADO** \u{1F9E6}

Criar um fantoche \xE9 dar vida a um novo amigo tagarela para contar hist\xF3rias teatrais em casa!

\u{1F392} **Materiais:** Uma meia limpa e velha, peda\xE7os de feltro ou papel colorido, dois bot\xF5es grandes para os olhos, cola forte ou fita adesiva de dupla face, l\xE3 colorida.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Vista a meia na sua m\xE3o, posicionando seus dedos na ponta da meia e seu ded\xE3o na parte do calcanhar para fazer o movimento da boca abrindo.
2. **PASSO 2:** Com os dedos dobrados, marque onde fica a jun\xE7\xE3o da boca e cole um peda\xE7o oval de feltro vermelho por dentro para ser a boca e a l\xEDngua.
3. **PASSO 3:** Com a meia na m\xE3o, marque os pontos acima dos dedos e cole os dois bot\xF5es grandes para serem os olhinhos expressivos.
4. **PASSO 4:** Pegue alguns fios de l\xE3 colorida, amarre-os no meio com um nozinho e cole no topo da cabe\xE7a para fazer um cabelo super descabelado e divertido!
5. **PASSO 5:** Desenhe adere\xE7os com papel colorido: \xF3culos redondos, c\xEDlios gigantes, gravatinha borboleta ou dentes afiados de monstrinho comil\xE3o!
6. **PASSO 6:** D\xEA um nome super engra\xE7ado ao seu novo companheiro e invente uma voz bem maluca para ele!

\u{1F4A1} **Dicas:** Use fita adesiva forte ou cola quente (com ajuda de um adulto) para fixar as pe\xE7as no tecido da meia, pois cola comum pode descolar facilmente durante a brincadeira!

\u26A0\uFE0F **Erros comuns:** Colar os olhos com a meia fora da m\xE3o e as pe\xE7as ficarem tortas ao vestir. Sempre planeje o visual com o fantoche cal\xE7ado na m\xE3o!

\u{1F3C6} **Desafio:** Re\xFAna sua fam\xEDlia por tr\xE1s do encosto do sof\xE1 e apresente uma pequena pe\xE7a de teatro cantada com o seu fantoche!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu escreva um roteirinho de teatro infantil curto e engra\xE7ado para seu fantoche? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_fazer_fantoche"
      };
    }
    if (normalizedMsg.includes("tinta")) {
      return {
        reply: `\u{1F3A8} **COMO FAZER TINTA CASEIRA M\xC1GICA E SEGURA** \u{1F9EA}

Fazer sua pr\xF3pria tinta \xE9 como se transformar em um cientista das cores em seu pr\xF3prio laborat\xF3rio de artes!

\u{1F392} **Materiais:** 1 copo de farinha de trigo, 1 copo de sal de cozinha refinado, 1 copo de \xE1gua morna, corantes aliment\xEDcios coloridos, potinhos pl\xE1sticos limpos e colheres.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1:** Em um recipiente grande, misture bem o copo de farinha de trigo e o copo de sal refinado usando uma colher.
2. **PASSO 2:** V\xE1 adicionando a \xE1gua morna bem devagarinho, mexendo sem parar, at\xE9 que vire uma massa bem cremosa e lisa (com consist\xEAncia de iogurte).
3. **PASSO 3:** Distribua essa base cremosa em v\xE1rios potinhos pl\xE1sticos menores vazios.
4. **PASSO 4:** Em cada potinho, pingue de 4 a 6 gotas de um corante aliment\xEDcio diferente e misture vigorosamente at\xE9 a cor ficar linda e brilhante!
5. **PASSO 5:** Pegue pap\xE9is grossos ou peda\xE7os de caixas de papel\xE3o e pinte usando pinc\xE9is, cotonetes ou os seus pr\xF3prios dedinhos!
6. **PASSO 6:** Coloque seu desenho para secar ao sol. Ao secar, o sal vai criar um efeito brilhante e saliente sensacional nas pinceladas!

\u{1F4A1} **Dicas:** Se a tinta ficar grossa demais, adicione uma colherzinha de \xE1gua. Se ficar muito l\xEDquida, acrescente uma pitadinha de farinha!

\u26A0\uFE0F **Erros comuns:** Guardar a tinta fora da geladeira por muitos dias. Como \xE9 feita com ingredientes naturais, ela pode estragar. Guarde em potes tampados na geladeira por at\xE9 3 dias!

\u{1F3C6} **Desafio:** Pinte um lindo jardim espacial usando apenas sua tinta caseira e d\xEA batidinhas de purpurina por cima enquanto a tinta estiver \xFAmida!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu d\xEA uma receita secreta de tinta de terra ou tinta 3D que cresce no micro-ondas? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
        matchedKey: "como_fazer_tinta"
      };
    }
    return {
      reply: `\u{1F3A8} **COMO FAZER ARTE ABSTRATA E OUTRAS CRIA\xC7\xD5ES** \u2702\uFE0F

Fazer arte \xE9 soltar a imagina\xE7\xE3o e transformar materiais simples em decora\xE7\xF5es espetaculares! Vamos aprender a fazer uma linda Arte Abstrata:

\u{1F392} **Materiais:** Folha de papel branco grande, pinc\xE9is, tintas guache coloridas e fita crepe.

\u{1F3A8} **Passo a Passo:**
1. **PASSO 1 (Cole as fita):** Cole algumas tiras de fita crepe cruzando a folha de papel em v\xE1rias dire\xE7\xF5es, criando espa\xE7os geom\xE9tricos fechados.
2. **PASSO 2 (Escolha as Emo\xE7\xF5es):** Pense em um sentimento! Se for alegria, separe tintas quentes (amarelo, vermelho, rosa). Se for paz, separe azuis e verdes.
3. **PASSO 3 (Pinte os Espa\xE7os):** Pinte cada espa\xE7o delimitado pelas fitas com uma cor s\xF3lida e bem vibrante diferente.
4. **PASSO 4 (Salpicos Divertidos):** Molhe bem o pincel na tinta e na \xE1gua, segure-o acima do papel e d\xEA batidinhas no cabo com o dedo para salpicar gotinhas coloridas por toda a folha!
5. **PASSO 5 (A Revela\xE7\xE3o):** Espere a tinta secar completamente por alguns minutos.
6. **PASSO 6 (Retire a Fita):** Retire as fitas crepe devagarzinho e com muito cuidado para revelar linhas brancas perfeitamente limpas cruzando seu quadro!

\u{1F4A1} **Dicas:** Arte Abstrata n\xE3o precisa parecer com coisas reais do mundo (como carros ou \xE1rvores). O foco total s\xE3o o ritmo das cores, as linhas e os sentimentos!

\u26A0\uFE0F **Erros comuns:** Retirar a fita crepe com a tinta ainda muito molhada, o que pode borrar as linhas brancas perfeitas. Tenha paci\xEAncia e deixe secar bem!

\u{1F3C6} **Desafio:** Coloque uma m\xFAsica bem alegre para tocar e pinte um desenho abstrato seguindo exatamente as batidas r\xE1pidas ou lentas da melodia!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu ensine a fazer um lindo Autorretrato ou uma Colagem de jornais? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_fazer_arte_geral"
    };
  }
  if (normalizedMsg.includes("observar") || normalizedMsg.includes("entender uma") || normalizedMsg.includes("analisar") || normalizedMsg.includes("olhar")) {
    return {
      reply: `\u{1F50D} **COMO OBSERVAR E COMPREENDER OBRAS DE ARTE** \u{1F5BC}\uFE0F

Olhar para uma pintura \xE9 como abrir uma janela para os segredos e sonhos de um artista! Vamos aprender a ser detetives da arte:

\u270F\uFE0F **Passo a Passo da Observa\xE7\xE3o:**
1. **PASSO 1 (Os 30 segundos):** Olhe para o desenho ou pintura inteira em sil\xEAncio absoluto por 30 segundos. Deixe seus olhos passearem livremente.
2. **PASSO 2 (O Ponto de Destaque):** O que chamou a sua aten\xE7\xE3o primeiro? Foi uma cor bem forte? Um personagem engra\xE7ado? Ou uma forma gigantesca?
3. **PASSO 3 (As Cores Emocionais):** Repare nas cores dominantes. S\xE3o quentes (amarelos, vermelhos) que d\xE3o agita\xE7\xE3o e calor? Ou frias (azuis, verdes) que trazem calmaria e mist\xE9rio?
4. **PASSO 4 (As Linhas Secretas):** Olhe os tra\xE7os. Eles s\xE3o retos e geom\xE9tricos como constru\xE7\xF5es ou s\xE3o cheios de ondas e curvas que parecem flutuar no ar?
5. **PASSO 5 (O Jogo de Detetive):** Quem s\xE3o os personagens e o que eles est\xE3o fazendo? Onde eles est\xE3o? Tente inventar uma historinha curta do que aconteceu um minuto antes dessa cena ser pintada!
6. **PASSO 6 (Sinta o Cora\xE7\xE3o):** Feche os olhos e pense: que emo\xE7\xE3o essa obra traz para dentro de voc\xEA? Alegria, calmaria, curiosidade ou agita\xE7\xE3o?

\u{1F4A1} **Dicas:** Na arte, n\xE3o existem respostas erradas! Cada pessoa enxerga o mundo de uma forma \xFAnica e todas as opini\xF5es s\xE3o pinceladas de genialidade.

\u26A0\uFE0F **Erros comuns:** Olhar para a obra por apenas um segundo e achar que j\xE1 viu tudo. Pinturas famosas escondem detalhes escondidos e truques que s\xF3 aparecem com paci\xEAncia!

\u{1F3C6} **Desafio:** Escolha um desenho na sua casa e tente imit\xE1-lo fazendo uma pose viva est\xE1tua igualzinha ao personagem do quadro!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer ver uma an\xE1lise divertida e detalhada da famosa "Mona Lisa" ou do "Abaporu"? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_observar_arte"
    };
  }
  if (normalizedMsg.includes("melhorar") || normalizedMsg.includes("desenhar melhor") || normalizedMsg.includes("pintar melhor")) {
    return {
      reply: `\u{1F680} **COMO MELHORAR SEUS DESENHOS E PINTURAS TODOS OS DIAS** \u2B50

Desenhar e pintar s\xE3o habilidades m\xE1gicas que crescem e ficam cada vez mais lindas com treino e carinho! Vamos aprender os segredos para evoluir:

\u270F\uFE0F **Passo a Passo para Melhorar:**
1. **PASSO 1 (Praticar Diariamente):** Tenha sempre por perto um pequeno caderno de esbo\xE7os (sketchbook). Desenhar apenas 10 minutinhos todos os dias solta os m\xFAsculos da m\xE3o!
2. **PASSO 2 (Copiar com Respeito):** Olhe desenhos de artistas que voc\xEA adora e tente copiar os tra\xE7os deles. Isso ensina novos caminhos e formas ao seu c\xE9rebro!
3. **PASSO 3 (Desenhar o Mundo Real):** Coloque um objeto simples sobre a mesa (uma caneca, uma ma\xE7\xE3 ou o seu brinquedo preferido) e tente desenh\xE1-los exatamente como o v\xEA.
4. **PASSO 4 (Esbo\xE7ar Clarito):** Comece sempre desenhando c\xEDrculos e ret\xE2ngulos bem fraquinhos para planejar o espa\xE7o antes de colocar os detalhes definitivos.
5. **PASSO 5 (A Borracha \xE9 Amiga):** N\xE3o tenha medo de errar e apagar! Errar faz parte do caminho e nos mostra como aperfei\xE7oar nossos tra\xE7os.
6. **PASSO 6 (Mudar de Materiais):** Se voc\xEA s\xF3 usa canetinhas, experimente giz de cera, guache, carv\xE3o ou l\xE1pis aquarela. Descubra texturas novas!

\u{1F4A1} **Dicas:** Guarde todos os seus desenhos antigos em uma pasta datada! Daqui a alguns meses, voc\xEA poder\xE1 comparar e ver a evolu\xE7\xE3o fant\xE1stica que conquistou!

\u26A0\uFE0F **Erros comuns:** Desistir logo no primeiro rascunho torto. Lembre-se: at\xE9 os maiores pintores da hist\xF3ria come\xE7aram fazendo bonequinhos de palito simples!

\u{1F3C6} **Desafio:** Tente fazer o desenho de um objeto sem tirar o l\xE1pis do papel nenhuma vez! \xC9 um exerc\xEDcio super engra\xE7ado que melhora a coordena\xE7\xE3o motora!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu d\xEA uma lista de tr\xEAs exerc\xEDcios pr\xE1ticos e r\xE1pidos para soltar a m\xE3o? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_melhorar_desenho"
    };
  }
  if (normalizedMsg.includes("aprender a desenhar") || normalizedMsg.includes("treinar") || normalizedMsg.includes("perspectiva") || normalizedMsg.includes("sombras") || normalizedMsg.includes("anatomia")) {
    return {
      reply: `\u{1F4AA} **EXERC\xCDCIOS DIVERTIDOS PARA TREINAR PERSPECTIVA, SOMBRAS E ANATOMIA** \u{1F9E0}

Praticar t\xE9cnicas de arte \xE9 como fazer muscula\xE7\xE3o para a imagina\xE7\xE3o! Vamos treinar de um jeito super divertido e descomplicado:

\u270F\uFE0F **Passo a Passo para Exercitar:**
1. **PASSO 1 (Treino de Sombras - A Esfera):** Desenhe um c\xEDrculo simples. Escolha uma ponta para ser o Sol (Luz). No lado oposto ao Sol, pinte com o l\xE1pis bem escuro e v\xE1 esfumando suavemente com o seu dedo indicador para o centro do c\xEDrculo. Veja o c\xEDrculo se transformar em uma esfera redondinha em 3D!
2. **PASSO 2 (Treino de Perspectiva - O Cubo 3D):** Desenhe um quadrado comum. Agora desenhe outro quadrado id\xEAntico cruzando o primeiro um pouco acima e para a direita. Ligue os quatro cantos correspondentes dos dois quadrados com linhas retas. Parab\xE9ns! Voc\xEA acaba de criar um cubo transparente tridimensional perfeito!
3. **PASSO 3 (Treino de Anatomia - O Boneco de Palito):** Para desenhar pessoas in poses din\xE2micas, desenhe c\xEDrculos para a cabe\xE7a, peito e quadril. Ligue-os com linhas de palito para os bra\xE7os e pernas. Fa\xE7a bolinhas menores nas dobras (ombros, cotovelos, joelhos) para marcar as articula\xE7\xF5es. Fica super f\xE1cil cobrir com m\xFAsculos depois!
4. **PASSO 4 (O Desenho Cego):** Olhe fixamente para a sua m\xE3o fechada e desenhe-a na folha de papel sem olhar para o seu pr\xF3prio l\xE1pis em nenhum momento! Fica super engra\xE7ado e ensina seu c\xE9rebro a desenhar o que v\xEA de verdade, n\xE3o o que acha que est\xE1 vendo!

\u{1F4A1} **Dicas:** Use um l\xE1pis macio (como o tipo 2B ou 6B), pois eles soltam grafite bem escuro de forma muito suave, facilitando esfumar sombras com os dedos!

\u26A0\uFE0F **Erros comuns:** Tentar sombrear usando canetinha hidrogr\xE1fica preta comum. Canetinhas n\xE3o esfumam bem! Use sempre o l\xE1pis grafite para sombras suaves e graduais.

\u{1F3C6} **Desafio:** Crie um pequeno desenho do seu quarto usando a t\xE9cnica do cubo 3D para fazer a sua cama em perspectiva real!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Quer que eu d\xEA um desafio pr\xE1tico de sombras f\xE1ceis para come\xE7armos agora? (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
      matchedKey: "como_treinar_geral"
    };
  }
  return {
    reply: `\u{1F914} **COMO APRENDER UMA NOVA HABILIDADE** \u2728

Que pergunta incr\xEDvel! Querer saber "como" \xE9 o primeiro passo para se tornar um grande mestre ou cientista! Vamos descobrir como aprender esse assunto passo a passo:

\u{1F392} **Materiais recomendados:** Um caderno para anota\xE7\xF5es, caneta ou l\xE1pis coloridos e muita curiosidade!

\u270F\uFE0F **Passo a Passo Geral:**
1. **PASSO 1 (Descobrir):** Pesquise e divida o assunto em partes bem pequenininhas para n\xE3o parecer dif\xEDcil.
2. **PASSO 2 (Praticar o b\xE1sico):** Comece fazendo as partes mais f\xE1ceis todos os dias (ex: se quer andar de skate, treine primeiro o equil\xEDbrio parado!).
3. **PASSO 3 (Organizar as etapas):** Fa\xE7a uma lista numerada de tarefas f\xE1ceis e v\xE1 riscando as que j\xE1 aprendeu.
4. **PASSO 4 (Aprender com Erros):** Quando algo der errado, sorria e tente novamente de um jeito diferente. O erro \xE9 o melhor professor!
5. **PASSO 5 (Pedir Ajuda):** Converse com amigos, professores ou familiares e mostre o que voc\xEA est\xE1 tentando criar.
6. **PASSO 6 (Divertir-se):** A jornada de aprender deve ser cheia de divers\xE3o, cores e alegria!

\u{1F4A1} **Dicas:** Dedique apenas de 10 a 15 minutinhos focados por dia. A const\xE2ncia vale muito mais do que passar horas cansativas treinando!

\u26A0\uFE0F **Erros comuns:** Querer aprender tudo perfeitamente logo no primeiro dia. Tenha paci\xEAncia com voc\xEA e comemore cada pequena vit\xF3ria!

\u{1F3C6} **Desafio:** Tente explicar para algu\xE9m da sua casa o que voc\xEA acabou de aprender sobre esse assunto em menos de um minuto!

---
**Quer que eu te ajude a dar o pr\xF3ximo passo?** Escolha o que voc\xEA gostaria agora:
- \u{1F31F} Um exemplo pronto (digite "exemplo");
- \u{1F3AF} Uma atividade para praticar (digite "praticar");
- \u{1F331} Uma vers\xE3o super f\xE1cil (digite "vers\xE3o f\xE1cil");
- \u{1F680} Uma vers\xE3o mais avan\xE7ada (digite "vers\xE3o avan\xE7ada").`,
    matchedKey: "como_geral_como"
  };
}
function resolverFollowUpMessage(normalizedMsg) {
  if (normalizedMsg === "exemplo" || normalizedMsg === "exemplo pronto" || normalizedMsg === "quer que eu escreva um exemplo" || normalizedMsg === "quero exemplo" || normalizedMsg === "me da um exemplo") {
    return {
      reply: `\u{1F31F} **AQUI EST\xC1 UM EXEMPLO SUPER CAPRICHADO PARA SEU APRENDIZADO!** \u{1F381}

Como prometido, fiz um exemplo bem fofinho e cheio de cores para inspirar voc\xEA! Imagine um gatinho amarelo usando um capacete de astronauta azul-brilhante, flutuando no espa\xE7o e tentando pescar estrelas brilhantes com uma varinha m\xE1gica feita de um pincel! \u{1F408}\u200D\u2B1B\u{1F680}\u2728

Veja que estrutura divertida:
1. **O Cen\xE1rio:** Fundo azul escuro cheio de pontinhos de glitter (estrelas).
2. **O Personagem:** Gatinho "Pipoca", listrado, sorridente e com olhos enormes.
3. **A A\xE7\xE3o:** Ele est\xE1 flutuando e rindo, super feliz com a sua varinha m\xE1gica!

N\xE3o ficou fofo? Agora tente fazer a sua pr\xF3pria vers\xE3o no papel colocando as suas cores preferidas! Se quiser mais desafios ou outra dica, \xE9 s\xF3 falar! \u{1F3A8}`,
      matchedKey: "como_followup_exemplo"
    };
  }
  if (normalizedMsg === "praticar" || normalizedMsg === "atividade para praticar" || normalizedMsg === "quero praticar" || normalizedMsg === "me da uma atividade") {
    return {
      reply: `\u{1F3AF} **HORA DO DESAFIO! VAMOS PRATICAR JUNTOS!** \u{1F4AA}\u{1F3A8}

Preparei um exerc\xEDcio super divertido para soltar a sua imagina\xE7\xE3o de artista! Que tal fazermos o **"Desafio do Desenho de Cabe\xE7a para Baixo"**?

1. Pegue uma folha de papel branca.
2. Escolha um brinquedo ou objeto bem simples da sua casa (como um copo ou chaveiro).
3. Coloque esse objeto de cabe\xE7a para baixo na sua frente.
4. Tente desenh\xE1-lo exatamente como est\xE1 vendo, de cabe\xE7a para baixo! Isso for\xE7a o seu c\xE9rebro a enxergar as formas e linhas reais em vez de desenhar regras de cabe\xE7a!

Quando terminar, pinte com canetinhas de cores m\xE1gicas! Me conte como ficou o seu desenho! \u{1F929}`,
      matchedKey: "como_followup_praticar"
    };
  }
  if (normalizedMsg === "facil" || normalizedMsg === "versao facil" || normalizedMsg === "vers\xE3o f\xE1cil" || normalizedMsg === "quero versao facil" || normalizedMsg === "modo facil") {
    return {
      reply: `\u{1F331} **VERS\xC3O SUPER F\xC1CIL PARA COME\xC7AR SEM MEDO!** \u{1F970}

Se voc\xEA est\xE1 come\xE7ando agora, n\xE3o se preocupe! Vamos fazer a vers\xE3o simplificada de apenas **3 passos f\xE1ceis**:

1. **Passo 1:** Fa\xE7a apenas uma forma grande e simples na folha (um c\xEDrculo para bichos, ou um quadrado para pr\xE9dios e casas).
2. **Passo 2:** Coloque apenas os detalhes mais importantes (olhos e boca felizes para personagens, telhado e porta para casas).
3. **Passo 3:** Escolha apenas duas cores que voc\xEA mais gosta e pinte bem bonito, sem se preocupar em sair das bordas!

Prontinho! Viu como desenhar e criar \xE9 f\xE1cil e relaxante? Se quiser tentar o passo completo depois, me avise! \u{1F338}`,
      matchedKey: "como_followup_facil"
    };
  }
  if (normalizedMsg === "avancada" || normalizedMsg === "versao avancada" || normalizedMsg === "vers\xE3o avan\xE7ada" || normalizedMsg === "quero versao avancada" || normalizedMsg === "modo avancado") {
    return {
      reply: `\u{1F680} **MODO ARTISTA AVAN\xC7ADO ATIVADO!** \u{1F451}\u2728

Uau! Voc\xEA est\xE1 pronto para decolar no universo art\xEDstico! Vamos colocar t\xE9cnicas profissionais na sua cria\xE7\xE3o:

1. **Adicione Perspectiva de 3 Pontos:** Crie profundidade extrema fazendo as linhas convergirem para pontos de fuga distantes no horizonte!
2. **Jogo de Luz e Contraluz:** Escolha uma fonte de luz super forte de um lado e crie sombras projetadas bem marcadas do lado oposto. Use grafite 6B ou tons escuros de tinta para esfumar!
3. **Mistura de Cores Complementares:** Use o c\xEDrculo crom\xE1tico! Coloque cores opostas lado a lado (como azul e laranja, ou roxo e amarelo) para criar um contraste que faz a sua arte saltar aos olhos de quem v\xEA!

Tenho certeza de que sua obra vai parecer de museu! Depois me conte o que voc\xEA criou! \u{1F3A8}`,
      matchedKey: "como_followup_avancada"
    };
  }
  return null;
}
function resolverMensagemLocalmenteRaw(mensagem, lib) {
  const normalizedMsg = normalizarTexto(mensagem);
  if (!normalizedMsg) return null;
  const porqueRes = resolverPorqueMessage(normalizedMsg);
  if (porqueRes) return porqueRes;
  const comoRes = resolverComoMessage(normalizedMsg);
  if (comoRes) return comoRes;
  const followUpRes = resolverFollowUpMessage(normalizedMsg);
  if (followUpRes) return followUpRes;
  const PERIODS_TO_PRIORITIZE = [
    "arte_antiga",
    "arte_egipcia",
    "arte_grega",
    "arte_romana",
    "arte_medieval",
    "arte_crista",
    "arte_japonesa",
    "arte_chinesa",
    "expressionismo",
    "arte_europeia",
    "arte_bizantina",
    "arte_islamica",
    "arte_pre_colombiana",
    "arte_digital",
    "arte_ia",
    "arte_africana",
    "arte_indigena",
    "arte_naif",
    "modernismo"
  ];
  let bestPeriodMatch = null;
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
  if (normalizedMsg.includes("piada") || normalizedMsg.includes("engracad") || normalizedMsg.includes("charada") || normalizedMsg.includes("brincadeira") || normalizedMsg.includes("risada") || normalizedMsg.includes("humor") || normalizedMsg.includes("rir") || normalizedMsg.includes("sorrir")) {
    const randomJoke = getRandomElement(PIADAS_CANDINHO);
    return {
      reply: `Haha! Sabia que eu adoro uma boa piada para alegrar o nosso dia? \u{1F3A8} Sorrir deixa nossa inspira\xE7\xE3o gigante! L\xE1 vai uma charada da minha paleta:

\u{1F449} **${randomJoke}**

Que tal? Vamos continuar desenhando ou quer ouvir mais alguma piada ou curiosidade? \u{1F604}`,
      matchedKey: "piada"
    };
  }
  if (normalizedMsg.includes("curiosidade") || normalizedMsg.includes("sabia que") || normalizedMsg.includes("voce sabia") || normalizedMsg.includes("fato extraordinario") || normalizedMsg.includes("fato interessante") || normalizedMsg.includes("novidade") || normalizedMsg.includes("segredo") || normalizedMsg.includes("fato da arte") || normalizedMsg.includes("fato")) {
    let randomCuriosity = "";
    let categoryPrefix = "";
    if (normalizedMsg.includes("danca") || normalizedMsg.includes("bal\xE9") || normalizedMsg.includes("bale") || normalizedMsg.includes("dan\xE7ar")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_DANCA);
      categoryPrefix = "\u{1FA70} **Sobre o Ritmo Fascinante da Dan\xE7a!** \u{1F31F}\n\n";
    } else if (normalizedMsg.includes("teatro") || normalizedMsg.includes("palco") || normalizedMsg.includes("comedia") || normalizedMsg.includes("tragedia") || normalizedMsg.includes("grecia")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_TEATRO);
      categoryPrefix = "\u{1F3AD} **Dos Palcos Lend\xE1rios e do Teatro M\xE1gico!** \u2728\n\n";
    } else if (normalizedMsg.includes("anime") || normalizedMsg.includes("cartoon") || normalizedMsg.includes("goku") || normalizedMsg.includes("pokemon")) {
      const category = CURIOSIDADES_ACERVO.find((cat) => cat.id === "animes_fantastico");
      const randomItem = category ? getRandomElement(category.items.map((i) => `${i.emoji} **${i.pergunta}**
${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "\u{1F338} **Sobre os Fant\xE1sticos Animes Japoneses!** \u{1F4FA}\n\n";
    } else if (normalizedMsg.includes("manga") || normalizedMsg.includes("quadrinho") || normalizedMsg.includes("tezuka")) {
      const category = CURIOSIDADES_ACERVO.find((cat) => cat.id === "mangas_origem");
      const randomItem = category ? getRandomElement(category.items.map((i) => `${i.emoji} **${i.pergunta}**
${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "\u{1F4D6} **Sobre a M\xE1gica Arte dos Mang\xE1s!** \u270D\uFE0F\n\n";
    } else if (normalizedMsg.includes("desenho") || normalizedMsg.includes("scooby") || normalizedMsg.includes("simpsons") || normalizedMsg.includes("disney")) {
      const category = CURIOSIDADES_ACERVO.find((cat) => cat.id === "desenhos_animados");
      const randomItem = category ? getRandomElement(category.items.map((i) => `${i.emoji} **${i.pergunta}**
${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "\u{1F3AC} **No Mundo dos Desenhos Animados Cl\xE1ssicos!** \u{1F37F}\n\n";
    } else if (normalizedMsg.includes("tartaruga") || normalizedMsg.includes("ninja")) {
      const category = CURIOSIDADES_ACERVO.find((cat) => cat.id === "tartarugas_ninja");
      const randomItem = category ? getRandomElement(category.items.map((i) => `${i.emoji} **${i.pergunta}**
${i.resposta}`)) : "";
      randomCuriosity = randomItem;
      categoryPrefix = "\u{1F422} **Poder Mutante no Renascimento da Arte!** \u{1F355}\n\n";
    } else if (normalizedMsg.includes("pintor") || normalizedMsg.includes("artista") || normalizedMsg.includes("gogh") || normalizedMsg.includes("da vinci") || normalizedMsg.includes("pintar") || normalizedMsg.includes("pincel")) {
      randomCuriosity = getRandomElement(CURIOSIDADES_DESENHO);
      categoryPrefix = "\u{1F3A8} **Do Ateli\xEA de Pintores e T\xE9cnicas de Desenho!** \u{1F58C}\uFE0F\n\n";
    } else {
      const allAcervoItems = CURIOSIDADES_ACERVO.flatMap(
        (cat) => cat.items.map((item) => `${item.emoji} **${item.pergunta}**
${item.resposta}`)
      );
      const combinedCuriosities = [...CURIOSIDADES_CANDINHO, ...allAcervoItems];
      randomCuriosity = getRandomElement(combinedCuriosities);
      categoryPrefix = "\u2728 **Do Meu Ba\xFA de Mist\xE9rios Art\xEDsticos!**\n\n";
    }
    return {
      reply: `Uau! O universo da arte \xE9 cheio de segredos fant\xE1sticos e mist\xE9rios m\xE1gicos! \u2728 Veja que curiosidade sensacional eu busquei no meu conhecimento:

${categoryPrefix}${randomCuriosity}

Incr\xEDvel, n\xE3o \xE9? A arte sempre nos ajuda a ver em novos tons! Se quiser ouvir outra curiosidade ou saber sobre algum pintor, me pergunte! \u{1F3A8}`,
      matchedKey: "curiosidade"
    };
  }
  let bestMatchKey = void 0;
  let bestMatchScore = 0;
  for (const chave in lib) {
    const item = lib[chave];
    if (!item.palavras_chave) continue;
    for (const pKeyword of item.palavras_chave) {
      const normalizedKeyword = normalizarTexto(pKeyword);
      if (testarPalavraChave(normalizedMsg, normalizedKeyword)) {
        const score = normalizedKeyword.length;
        if (score > bestMatchScore) {
          bestMatchScore = score;
          bestMatchKey = chave;
        }
      }
    }
  }
  if (bestMatchKey) {
    const item = lib[bestMatchKey];
    const replyText = construirRespostaLocal(item, mensagem);
    return {
      reply: replyText,
      matchedKey: bestMatchKey
    };
  }
  let bestConhecimentoMatch = null;
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
  const matchedCuriosity = buscarCuriosidadePorKeyword(mensagem);
  if (matchedCuriosity) {
    let reply = `\u{1F4A1} **Que curiosidade fant\xE1stica!**

**Pergunta:** ${matchedCuriosity.pergunta}

\u{1F449} **Resposta:** ${matchedCuriosity.resposta}`;
    if (matchedCuriosity.detalhes) {
      reply += `

\u{1F913} **Curiosidade extra:** ${matchedCuriosity.detalhes}`;
    }
    return {
      reply
    };
  }
  for (const intent of PORTINARI_INTENTS) {
    const matched = intent.keywords.some((keyword) => {
      const nKw = normalizarTexto(keyword);
      if (!nKw) return false;
      if (nKw === "candinho" || nKw === "portinari" || nKw === "candido") {
        return normalizedMsg === nKw;
      }
      return testarPalavraChave(normalizedMsg, nKw);
    });
    if (matched) {
      return { reply: intent.reply };
    }
  }
  for (const intent of CONVERSATIONAL_INTENTS) {
    const matched = intent.keywords.some((keyword) => {
      const normalizedKeyword = normalizarTexto(keyword);
      return testarPalavraChave(normalizedMsg, normalizedKeyword);
    });
    if (matched) {
      return { reply: intent.reply };
    }
  }
  return null;
}
function resolverMensagemLocalmente(mensagem, lib) {
  const result = resolverMensagemLocalmenteRaw(mensagem, lib);
  if (!result) return null;
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
function extrairNome(mensagem) {
  const normalized = mensagem.trim();
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
  const ignoreWords = [
    "um",
    "uma",
    "o",
    "a",
    "ele",
    "ela",
    "artista",
    "pintor",
    "desenho",
    "quadro",
    "arte",
    "amigo",
    "candinho",
    "professor",
    "aluno",
    "curioso",
    "fazer",
    "desenhar",
    "colorir"
  ];
  for (const pattern of patterns) {
    const match = normalized.match(pattern);
    if (match && match[1]) {
      const rawName = match[1].trim().split(/\s+/)[0];
      if (rawName.length >= 2 && rawName.length < 20) {
        const lowerName = rawName.toLowerCase();
        if (!ignoreWords.includes(lowerName)) {
          return rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
        }
      }
    }
  }
  return null;
}

// server.ts
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var apiKey = process.env.GEMINI_API_KEY || "";
var ai = apiKey ? new import_genai.GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
}) : null;
var GITHUB_BASE = "https://raw.githubusercontent.com/lenilsonxavier-dev/Candinho2.0/main/data/";
var bibliotecaCache = null;
async function carregarBiblioteca() {
  if (bibliotecaCache) return bibliotecaCache;
  try {
    const res = await fetch(`${GITHUB_BASE}bibliotecaCultural.json`);
    const libGitHub = res.ok ? await res.json() : {};
    bibliotecaCache = { ...libGitHub, ...bibliotecaCultural };
  } catch (e) {
    console.warn("Could not fetch remote library from GitHub, falling back to local:", e);
    bibliotecaCache = bibliotecaCultural;
  }
  return bibliotecaCache;
}
async function buscarNoPexels(termo) {
  const pexelsKey = process.env.PEXELS_API_KEY;
  if (!pexelsKey) return null;
  try {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(termo + " painting art")}&per_page=1&orientation=square`;
    const res = await fetch(url, {
      headers: { Authorization: pexelsKey }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.photos && data.photos.length > 0) {
        const photo = data.photos[0];
        return {
          imagemUrl: photo.src.medium,
          titulo: `Arte de ${termo}`,
          credito: `${photo.photographer} / Pexels`
        };
      }
    }
  } catch (e) {
    console.error("Erro Pexels:", e);
  }
  return null;
}
async function buscarWikimedia(artistaNome) {
  try {
    if (!artistaNome) return null;
    const userAgent = "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)";
    let termoBusca = `${artistaNome} painting`;
    let url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(termoBusca)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&format=json&origin=*`;
    let res = await fetch(url, { headers: { "User-Agent": userAgent } });
    let data = await res.json();
    let pages = Object.values(data.query?.pages || {});
    if (pages.length === 0) {
      termoBusca = artistaNome;
      url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(termoBusca)}&gsrnamespace=6&prop=imageinfo&iiprop=url|mime|mediatype|extmetadata&format=json&origin=*`;
      res = await fetch(url, { headers: { "User-Agent": userAgent } });
      data = await res.json();
      pages = Object.values(data.query?.pages || {});
    }
    if (!pages.length) return null;
    const imagensValidas = pages.filter((p) => {
      if (!p.imageinfo || !p.imageinfo[0]) return false;
      const info2 = p.imageinfo[0];
      const mime = (info2.mime || "").toLowerCase();
      const media = (info2.mediatype || "").toUpperCase();
      return (media === "BITMAP" || media === "DRAWING") && (mime.includes("jpeg") || mime.includes("jpg") || mime.includes("png") || mime.includes("webp"));
    });
    const imagemPage = imagensValidas.length > 0 ? imagensValidas[0] : pages[0];
    const info = imagemPage.imageinfo?.[0];
    if (!info || !info.url) return null;
    let credito = "Wikimedia Commons";
    if (info.extmetadata) {
      if (info.extmetadata.Artist?.value) {
        credito = info.extmetadata.Artist.value.replace(/<[^>]*>/g, "").trim();
      } else if (info.extmetadata.Credit?.value) {
        credito = info.extmetadata.Credit.value.replace(/<[^>]*>/g, "").trim();
      }
    }
    if (credito.length > 50) {
      credito = credito.substring(0, 47) + "...";
    }
    let titleRaw = imagemPage.title || "File:Obra";
    let tituloOriginal = titleRaw.replace("File:", "").split(".")[0];
    let titulo = decodeURIComponent(tituloOriginal).replace(/_/g, " ");
    return {
      imagemUrl: info.url,
      titulo: titulo || "Obra de arte",
      credito: credito || "Wikimedia Commons"
    };
  } catch (error) {
    console.error("Erro buscarWikimedia:", error);
    return null;
  }
}
var ARTISTS_GUARANTEED_IMAGES = {
  vincent_van_gogh: {
    imagemUrl: "https://i.imgur.com/V0qviLK.jpg",
    titulo: "A Noite Estrelada",
    credito: "Vincent van Gogh"
  },
  pablo_picasso: {
    imagemUrl: "https://i.imgur.com/Ie9Nmjv.jpeg",
    titulo: "Auto-retrato de Picasso",
    credito: "Pablo Picasso"
  },
  leonardo_da_vinci: {
    imagemUrl: "https://i.imgur.com/4gNICnX.jpeg",
    titulo: "Mona Lisa",
    credito: "Leonardo da Vinci"
  },
  claude_monet: {
    imagemUrl: "https://i.imgur.com/M2ox2Sa.jpeg",
    titulo: "Lago de L\xEDrios d'\xC1gua",
    credito: "Claude Monet"
  },
  tarsila: {
    imagemUrl: "https://i.imgur.com/y6dYEau.jpg",
    titulo: "Abaporu (1928)",
    credito: "Tarsila do Amaral"
  },
  portinari: {
    imagemUrl: "https://i.imgur.com/8DIvcRC.jpg",
    titulo: "C\xE2ndido Portinari (Retrato)",
    credito: "C\xE2ndido Portinari"
  },
  salvador_dali: {
    imagemUrl: "https://i.imgur.com/9HjrQgD.jpeg",
    titulo: "A Persist\xEAncia da Mem\xF3ria",
    credito: "Salvador Dal\xED"
  },
  fridakahlo: {
    imagemUrl: "https://i.imgur.com/kKoUCO0.jpeg",
    titulo: "Frida Kahlo (Auto-retrato)",
    credito: "Frida Kahlo"
  },
  frida_kahlo: {
    imagemUrl: "https://i.imgur.com/kKoUCO0.jpeg",
    titulo: "Frida Kahlo (Auto-retrato)",
    credito: "Frida Kahlo"
  },
  almeida_junior: {
    imagemUrl: "https://i.imgur.com/lOQ142t.jpeg",
    titulo: "Caipira Picando Fumo",
    credito: "Almeida J\xFAnior"
  },
  aua_mendes: {
    imagemUrl: "https://i.imgur.com/WYHe4ES.png",
    titulo: "Obra de Au\xE1 Mendes",
    credito: "Au\xE1 Mendes"
  },
  victor_meirelles: {
    imagemUrl: "https://i.imgur.com/UuUcxTI.jpeg",
    titulo: "Batalha dos Guararapes",
    credito: "Victor Meirelles"
  },
  adriana_varejao: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Inhotim_-_Adriana_Varej%C3%A3o.jpg",
    titulo: "Varal (Instala\xE7\xE3o de Azulejos no Pavilh\xE3o Adriana Varej\xE3o em Inhotim)",
    credito: "Adriana Varej\xE3o"
  },
  paul_klee: {
    imagemUrl: "https://i.imgur.com/5XqkLGP.jpeg",
    titulo: "Senecio",
    credito: "Paul Klee"
  },
  kandinsky: {
    imagemUrl: "https://i.imgur.com/nQtTIFw.jpeg",
    titulo: "Obra abstrata de Wassily Kandinsky",
    credito: "Wassily Kandinsky"
  },
  pedro_americo: {
    imagemUrl: "https://i.imgur.com/DqvcMzT.jpeg",
    titulo: "Independ\xEAncia ou Morte",
    credito: "Pedro Am\xE9rico"
  },
  magritte: {
    imagemUrl: "https://i.imgur.com/6k2E9xw.png",
    titulo: "A Trai\xE7\xE3o das Imagens",
    credito: "Ren\xE9 Magritte"
  },
  daiara_tukano: {
    imagemUrl: "https://i.imgur.com/K7LshrR.jpeg",
    titulo: "Daiara Tukano",
    credito: "Wikimedia Commons"
  },
  paul_cezanne: {
    imagemUrl: "https://i.imgur.com/76oTs3Y.jpeg",
    titulo: "Os Jogadores de Cartas / Prato de Ma\xE7\xE3s",
    credito: "Paul C\xE9zanne"
  },
  raphael: {
    imagemUrl: "https://i.imgur.com/dQfpGnt.jpeg",
    titulo: "A Escola de Atenas",
    credito: "Raphael Sanzio"
  },
  gustav_klimt: {
    imagemUrl: "https://i.imgur.com/O4bN5yR.jpeg",
    titulo: "O Beijo",
    credito: "Gustav Klimt"
  },
  o_grito: {
    imagemUrl: "https://i.imgur.com/Rm1sgLg.jpeg",
    titulo: "O Grito",
    credito: "Edvard Munch"
  },
  degas: {
    imagemUrl: "https://i.imgur.com/wnJMDAO.jpeg",
    titulo: "A Classe de Dan\xE7a",
    credito: "Edgar Degas"
  },
  di_cavalcanti: {
    imagemUrl: "https://i.imgur.com/y2bIl3C.jpeg",
    titulo: "As Cinco Mo\xE7as de Guaratinguet\xE1",
    credito: "Di Cavalcanti"
  },
  donatello: {
    imagemUrl: "https://i.imgur.com/kQ6cTVn.jpeg",
    titulo: "David (Escultura em bronze)",
    credito: "Donatello"
  },
  yayoi_kusama: {
    imagemUrl: "https://i.imgur.com/bPnsLsc.jpeg",
    titulo: "Ponto Infinito / Sala de Espelhos",
    credito: "Yayoi Kusama"
  },
  jaider_esbell: {
    imagemUrl: "https://i.imgur.com/xgQ4zaO.jpeg",
    titulo: "Cosmologia Makuxi",
    credito: "Jaider Esbell"
  },
  chagall: {
    imagemUrl: "https://i.imgur.com/DshJfTG.jpeg",
    titulo: "Eu e a Aldeia",
    credito: "Marc Chagall"
  },
  duchamp: {
    imagemUrl: "https://i.imgur.com/lWLyQDa.jpeg",
    titulo: "A Fonte",
    credito: "Marcel Duchamp"
  },
  matisse: {
    imagemUrl: "https://i.imgur.com/HuQoofw.jpeg",
    titulo: "A Dan\xE7a",
    credito: "Henri Matisse"
  },
  vik_muniz: {
    imagemUrl: "https://i.imgur.com/S8PEvsX.jpeg",
    titulo: "Vik Muniz - Retrato com materiais recicl\xE1veis",
    credito: "Vik Muniz"
  },
  michelangelo: {
    imagemUrl: "https://i.imgur.com/5pUkwMB.jpeg",
    titulo: "A Cria\xE7\xE3o de Ad\xE3o",
    credito: "Michelangelo Buonarroti"
  },
  gauguin: {
    imagemUrl: "https://i.imgur.com/udgstNF.jpeg",
    titulo: "De Onde Viemos? Quem Somos? Para Onde Vamos?",
    credito: "Paul Gauguin"
  },
  goya: {
    imagemUrl: "https://i.imgur.com/8WlovoC.jpeg",
    titulo: "O Tr\xEAs de Maio de 1808",
    credito: "Francisco de Goya"
  },
  renoir: {
    imagemUrl: "https://i.imgur.com/jX0irGW.jpeg",
    titulo: "O Baile no Moulin de la Galette",
    credito: "Pierre-Auguste Renoir"
  },
  rembrandt: {
    imagemUrl: "https://i.imgur.com/pvqxSJq.jpeg",
    titulo: "A Ronda Noturna",
    credito: "Rembrandt van Rijn"
  },
  silvana_mendes: {
    imagemUrl: "https://i.imgur.com/2PpjDBb.jpeg",
    titulo: "Obra de Silvana Mendes",
    credito: "Silvana Mendes"
  },
  madalena_reinbolt: {
    imagemUrl: "https://i.imgur.com/aCJ087A.jpeg",
    titulo: "Madalena dos Santos Reinbolt",
    credito: "Madalena dos Santos Reinbolt"
  },
  arjan_martins: {
    imagemUrl: "https://i.imgur.com/qQnFyUc.jpeg",
    titulo: "Obra de Arjan Martins",
    credito: "Arjan Martins"
  },
  maxwell_alexandre: {
    imagemUrl: "https://i.imgur.com/UbmbG5U.jpeg",
    titulo: "Obra de Maxwell Alexandre",
    credito: "Maxwell Alexandre"
  },
  rosana_paulino: {
    imagemUrl: "https://i.imgur.com/fZRSRnd.jpeg",
    titulo: "Obra de Rosana Paulino",
    credito: "Rosana Paulino"
  },
  eduardo_kobra: {
    imagemUrl: "https://i.imgur.com/ZaO8F4u.jpeg",
    titulo: "Mural de Eduardo Kobra",
    credito: "Eduardo Kobra"
  },
  os_gemeos: {
    imagemUrl: "https://i.imgur.com/jDf8dcd.jpeg",
    titulo: "Mural de Os G\xEAmeos",
    credito: "Os G\xEAmeos"
  },
  romero_britto: {
    imagemUrl: "https://i.imgur.com/nAIOLBB.jpg",
    titulo: "A Splash of Love",
    credito: "Romero Britto"
  },
  helio_oiticica: {
    imagemUrl: "https://i.imgur.com/dntJxrC.jpeg",
    titulo: "Metaesquema N\xBA 244",
    credito: "H\xE9lio Oiticica"
  },
  ivan_cruz: {
    imagemUrl: "https://i.imgur.com/EVd2Kx6.jpg",
    titulo: "Brincadeiras de Crian\xE7a",
    credito: "Ivan Cruz"
  },
  alfredo_volpi: {
    imagemUrl: "https://i.imgur.com/L2D835h.jpeg",
    titulo: "Bandeirinhas",
    credito: "Alfredo Volpi"
  },
  djanira: {
    imagemUrl: "https://i.imgur.com/9akQOju.jpeg",
    titulo: "Trabalhadores / Cenas do Cotidiano",
    credito: "Djanira Motta e Silva"
  },
  georgina_de_albuquerque: {
    imagemUrl: "https://i.imgur.com/Uz9RvpD.jpeg",
    titulo: "Sess\xE3o do Conselho de Estado",
    credito: "Georgina de Albuquerque"
  },
  arthur_bispo_do_rosario: {
    imagemUrl: "https://i.imgur.com/jHweTgn.jpeg",
    titulo: "Arthur Bispo do Ros\xE1rio",
    credito: "Arthur Bispo do Ros\xE1rio"
  },
  heitor_dos_prazeres: {
    imagemUrl: "https://i.imgur.com/9uwc2v9.jpeg",
    titulo: "Heitor dos Prazeres - Roda de Samba",
    credito: "Heitor dos Prazeres"
  },
  carybe: {
    imagemUrl: "https://i.imgur.com/nfSAuTr.jpeg",
    titulo: "Caryb\xE9 - Arte e Capoeira",
    credito: "Caryb\xE9"
  },
  joan_miro: {
    imagemUrl: "https://i.imgur.com/DUWOyat.jpeg",
    titulo: "O Ouro do Azul / Pintura de Mir\xF3",
    credito: "Joan Mir\xF3"
  },
  carolina_maria_de_jesus: {
    imagemUrl: "https://i.imgur.com/62oSyRt.jpeg",
    titulo: "Carolina Maria de Jesus (Retrato)",
    credito: "Wikimedia Commons / Arquivo P\xFAblico do Estado de S\xE3o Paulo"
  },
  ailton_krenak: {
    imagemUrl: "https://i.imgur.com/Wtl1cy1.jpeg",
    titulo: "Ailton Krenak (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  auritha_tabajara: {
    imagemUrl: "https://i.imgur.com/mumlZ4K.jpeg",
    titulo: "Auritha Tabajara (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  conceicao_evaristo: {
    imagemUrl: "https://i.imgur.com/9pTMeII.jpeg",
    titulo: "Concei\xE7\xE3o Evaristo (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  daniel_munduruku: {
    imagemUrl: "https://i.imgur.com/cl4wQV1.jpeg",
    titulo: "Daniel Munduruku (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  davi_kopenawa: {
    imagemUrl: "https://i.imgur.com/ZYsFmmb.jpeg",
    titulo: "Davi Kopenawa (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  djamila_ribeiro: {
    imagemUrl: "https://i.imgur.com/SYGuxF3.jpeg",
    titulo: "Djamila Ribeiro (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  eliane_potiguara: {
    imagemUrl: "https://i.imgur.com/j38A1jG.jpeg",
    titulo: "Eliane Potiguara (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  graca_grauna: {
    imagemUrl: "https://i.imgur.com/6WXunkG.jpeg",
    titulo: "Gra\xE7a Gra\xFAna (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  itamar_vieira_junior: {
    imagemUrl: "https://i.imgur.com/GfsMbQh.jpeg",
    titulo: "Itamar Vieira Jr. (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  jarid_arraes: {
    imagemUrl: "https://i.imgur.com/mRn97Dy.jpeg",
    titulo: "Jarid Arraes (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  julie_dorrico: {
    imagemUrl: "https://i.imgur.com/TSToVor.jpeg",
    titulo: "Julie Dorrico (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  kaka_wera_jeicupe: {
    imagemUrl: "https://i.imgur.com/sHTg65V.jpeg",
    titulo: "Kak\xE1 Wer\xE1 (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  lima_barreto: {
    imagemUrl: "https://i.imgur.com/9iGjvu1.jpeg",
    titulo: "Lima Barreto (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  machado_de_assis: {
    imagemUrl: "https://i.imgur.com/3vlMpK6.jpeg",
    titulo: "Machado de Assis (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  marcia_kambeba: {
    imagemUrl: "https://i.imgur.com/nPKqxVk.jpeg",
    titulo: "M\xE1rcia Kambeba (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  maria_firmina_dos_reis: {
    imagemUrl: "https://i.imgur.com/kYsLktz.jpeg",
    titulo: "Maria Firmina dos Reis (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  olivio_jekupe: {
    imagemUrl: "https://i.imgur.com/yZFIvN2.jpeg",
    titulo: "Ol\xEDvio Jekupe (Retrato)",
    credito: "Wikimedia Commons / Fonte Wikipedia"
  },
  caboclinho: {
    imagemUrl: "https://i.imgur.com/H36yCWI.jpg",
    titulo: "Dan\xE7a dos Caboclinhos",
    credito: "Wikimedia Commons"
  },
  tango: {
    imagemUrl: "https://i.imgur.com/S2eEbmj.jpeg",
    titulo: "Dan\xE7ando Tango",
    credito: "Wikimedia Commons"
  },
  salsa: {
    imagemUrl: "https://i.imgur.com/KNsG8wH.jpeg",
    titulo: "Dan\xE7ando Salsa",
    credito: "Wikimedia Commons"
  },
  valsa: {
    imagemUrl: "https://i.imgur.com/6hxKnNJ.jpeg",
    titulo: "Dan\xE7ando Valsa",
    credito: "Wikimedia Commons"
  },
  rock: {
    imagemUrl: "https://i.imgur.com/7SdA0k3.jpeg",
    titulo: "Alegria do Rock",
    credito: "Wikimedia Commons"
  },
  jongo: {
    imagemUrl: "https://i.imgur.com/MMPXy3l.jpeg",
    titulo: "Dan\xE7ando Jongo",
    credito: "Wikimedia Commons"
  },
  congada: {
    imagemUrl: "https://i.imgur.com/SZqtIoj.jpeg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons"
  },
  coco_pernambucano: {
    imagemUrl: "https://i.imgur.com/7OAUdNp.jpeg",
    titulo: "Dan\xE7ando o Coco Pernambucano",
    credito: "Wikimedia Commons"
  },
  ciranda: {
    imagemUrl: "https://i.imgur.com/zIlLJGr.png",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons"
  },
  hip_hop: {
    imagemUrl: "https://i.imgur.com/B58RbYS.jpeg",
    titulo: "Dan\xE7ando Hip Hop",
    credito: "Wikimedia Commons"
  },
  funk: {
    imagemUrl: "https://i.imgur.com/pTTr7cm.jpeg",
    titulo: "Dan\xE7a Funk",
    credito: "Wikimedia Commons"
  },
  frevo: {
    imagemUrl: "https://i.imgur.com/ZvsUU43.png",
    titulo: "Dan\xE7ando Frevo com Sombrinha",
    credito: "Wikimedia Commons"
  },
  fandango: {
    imagemUrl: "https://i.imgur.com/jFjNeOU.jpeg",
    titulo: "Dan\xE7ando Fandango",
    credito: "Wikimedia Commons"
  },
  danca_de_salao: {
    imagemUrl: "https://i.imgur.com/hNTTLUl.jpeg",
    titulo: "Dan\xE7a de Sal\xE3o",
    credito: "Wikimedia Commons"
  },
  danca_contemporanea: {
    imagemUrl: "https://i.imgur.com/viD0O3q.jpeg",
    titulo: "Dan\xE7a Contempor\xE2nea",
    credito: "Wikimedia Commons"
  },
  danca_classica: {
    imagemUrl: "https://i.imgur.com/e5uLrzE.jpeg",
    titulo: "Dan\xE7a Cl\xE1ssica",
    credito: "Wikimedia Commons"
  },
  cavalo_marinho: {
    imagemUrl: "https://i.imgur.com/cVro96g.jpeg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons"
  },
  catira: {
    imagemUrl: "https://i.imgur.com/M6wTWYU.jpeg",
    titulo: "Dan\xE7ando Catira",
    credito: "Wikimedia Commons"
  },
  carimbo: {
    imagemUrl: "https://i.imgur.com/rjujUdi.jpeg",
    titulo: "Dan\xE7ando Carimb\xF3",
    credito: "Wikimedia Commons"
  },
  bale: {
    imagemUrl: "https://i.imgur.com/pp0VUB5.jpeg",
    titulo: "Dan\xE7ando Bal\xE9",
    credito: "Wikimedia Commons"
  },
  arte_indigena: {
    imagemUrl: "https://i.imgur.com/mxBlvdv.jpeg",
    titulo: "Arte Ind\xEDgena Brasileira",
    credito: "Wikimedia Commons"
  },
  arte_africana: {
    imagemUrl: "https://i.imgur.com/TIWhZhH.jpeg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons"
  },
  danca_brasil: {
    imagemUrl: "https://i.imgur.com/CVHkdCZ.jpg",
    titulo: "Dan\xE7a Tradicional no Brasil",
    credito: "Wikimedia Commons"
  },
  desenho_brasil: {
    imagemUrl: "https://i.imgur.com/KSd4nHC.jpg",
    titulo: "Desenho na Hist\xF3ria do Brasil",
    credito: "Wikimedia Commons"
  },
  teatro: {
    imagemUrl: "https://i.imgur.com/JHzxAbj.jpg",
    titulo: "Teatro Municipal de S\xE3o Paulo",
    credito: "Teatro Municipal de S\xE3o Paulo"
  },
  teatro_historia: {
    imagemUrl: "https://i.imgur.com/3di4jIS.jpeg",
    titulo: "Hist\xF3ria do Teatro",
    credito: "Wikimedia Commons"
  },
  cor: {
    imagemUrl: "https://i.imgur.com/eOgA02Z.jpeg",
    titulo: "Defini\xE7\xE3o de Cor",
    credito: "Elementos da Linguagem Visual"
  },
  espaco: {
    imagemUrl: "https://i.imgur.com/6VvC7Yl.jpeg",
    titulo: "Defini\xE7\xE3o de Espa\xE7o",
    credito: "Elementos da Linguagem Visual"
  },
  forma: {
    imagemUrl: "https://i.imgur.com/EFluxXS.jpeg",
    titulo: "Defini\xE7\xE3o de Forma",
    credito: "Elementos da Linguagem Visual"
  },
  ponto: {
    imagemUrl: "https://i.imgur.com/6VAqeIv.jpeg",
    titulo: "Defini\xE7\xE3o de Ponto",
    credito: "Elementos da Linguagem Visual"
  },
  textura: {
    imagemUrl: "https://i.imgur.com/uxnJNbl.jpeg",
    titulo: "Defini\xE7\xE3o de Textura",
    credito: "Elementos da Linguagem Visual"
  },
  luz: {
    imagemUrl: "https://i.imgur.com/IkFuERR.jpeg",
    titulo: "Defini\xE7\xE3o de Luz",
    credito: "Elementos da Linguagem Visual"
  },
  alegria: [
    {
      imagemUrl: "https://i.imgur.com/1S8gq7c.jpeg",
      titulo: "Express\xE3o de Alegria",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/ExHb40M.jpeg",
      titulo: "Express\xE3o de Alegria",
      credito: "Wikimedia Commons"
    }
  ],
  angustia: [
    {
      imagemUrl: "https://i.imgur.com/MhBc6cq.jpeg",
      titulo: "Express\xE3o de Ang\xFAstia",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/J0iqMPv.jpeg",
      titulo: "Express\xE3o de Ang\xFAstia",
      credito: "Wikimedia Commons"
    }
  ],
  tristeza: [
    {
      imagemUrl: "https://i.imgur.com/nniw2ev.jpeg",
      titulo: "Express\xE3o de Tristeza",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Express\xE3o de Melancolia",
      credito: "Wikimedia Commons"
    }
  ],
  raiva: [
    {
      imagemUrl: "https://i.imgur.com/GBeHl0x.jpeg",
      titulo: "Express\xE3o de Raiva",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/KYuqxFk.jpeg",
      titulo: "Express\xE3o de Raiva",
      credito: "Wikimedia Commons"
    }
  ],
  tedio: [
    {
      imagemUrl: "https://i.imgur.com/oVUvDT8.jpeg",
      titulo: "Express\xE3o de T\xE9dio",
      credito: "Wikimedia Commons"
    },
    {
      imagemUrl: "https://i.imgur.com/pOiLRAd.jpeg",
      titulo: "Express\xE3o de T\xE9dio",
      credito: "Wikimedia Commons"
    }
  ],
  modernismo: {
    imagemUrl: "https://i.imgur.com/M7lSaXM.jpeg",
    titulo: "Abaporu",
    credito: "Tarsila do Amaral (Wikip\xE9dia)"
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
    titulo: "Arte Crist\xE3",
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
    titulo: "Arte Eg\xEDpcia",
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
    titulo: "Express\xE3o e Sentimento Expressionista",
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
    titulo: "Arte Isl\xE2mica",
    credito: "Wikimedia Commons"
  },
  arte_pre_colombiana: {
    imagemUrl: "https://i.imgur.com/53fFOzu.jpeg",
    titulo: "Arte Pr\xE9-Colombiana",
    credito: "Wikimedia Commons"
  },
  arte_digital: {
    imagemUrl: "https://i.imgur.com/9fFJxDf.jpeg",
    titulo: "Arte Digital",
    credito: "Wikimedia Commons"
  },
  arte_ia: {
    imagemUrl: "https://i.imgur.com/PGbFKrS.jpeg",
    titulo: "Arte com Intelig\xEAncia Artificial",
    credito: "Wikimedia Commons"
  },
  arte_naif: {
    imagemUrl: "https://i.imgur.com/qbUzNQb.jpeg",
    titulo: "O Sonho",
    credito: "Henri Rousseau"
  }
};
async function buscarImagem(pergunta, matchedKey, lib) {
  try {
    let mK = matchedKey ? matchedKey.toLowerCase().trim() : "";
    if (mK.startsWith("danca_")) {
      const semDanca = mK.substring(6);
      if (ARTISTS_GUARANTEED_IMAGES[semDanca]) {
        mK = semDanca;
      } else if (semDanca === "salao") {
        mK = "danca_de_salao";
      } else if (semDanca === "coco_pernambucano") {
        mK = "coco_pernambucano";
      }
    }
    if (mK && ARTISTS_GUARANTEED_IMAGES[mK]) {
      const item = ARTISTS_GUARANTEED_IMAGES[mK];
      if (Array.isArray(item)) {
        const idx = Math.floor(Math.random() * item.length);
        return item[idx];
      }
      return item;
    }
    const lowerQuery = pergunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/-/g, " ");
    if (lowerQuery.includes("alegria") || lowerQuery.includes("feliz") || lowerQuery.includes("alegre") || lowerQuery.includes("contente")) {
      const item = ARTISTS_GUARANTEED_IMAGES.alegria;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("angustia") || lowerQuery.includes("angustiado") || lowerQuery.includes("angustiada")) {
      const item = ARTISTS_GUARANTEED_IMAGES.angustia;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("triste") || lowerQuery.includes("saudade") || lowerQuery.includes("melancolia") || lowerQuery.includes("tristeza")) {
      const item = ARTISTS_GUARANTEED_IMAGES.tristeza;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("raiva") || lowerQuery.includes("zangado") || lowerQuery.includes("bravo") || lowerQuery.includes("irado") || lowerQuery.includes("raivoso")) {
      const item = ARTISTS_GUARANTEED_IMAGES.raiva;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("tedio") || lowerQuery.includes("entediado") || lowerQuery.includes("entediada")) {
      const item = ARTISTS_GUARANTEED_IMAGES.tedio;
      return Array.isArray(item) ? item[Math.floor(Math.random() * item.length)] : item;
    }
    if (lowerQuery.includes("van gogh") || lowerQuery.includes("van goh")) {
      return ARTISTS_GUARANTEED_IMAGES.vincent_van_gogh;
    }
    if (lowerQuery.includes("picasso")) {
      return ARTISTS_GUARANTEED_IMAGES.pablo_picasso;
    }
    if (lowerQuery.includes("da vinci") || lowerQuery.includes("leonardo")) {
      return ARTISTS_GUARANTEED_IMAGES.leonardo_da_vinci;
    }
    if (lowerQuery.includes("monet") || lowerQuery.includes("claude monet")) {
      return ARTISTS_GUARANTEED_IMAGES.claude_monet;
    }
    if (lowerQuery.includes("tarsila") || lowerQuery.includes("abaporu")) {
      return ARTISTS_GUARANTEED_IMAGES.tarsila;
    }
    if (lowerQuery.includes("portinari") || lowerQuery.includes("candinho") || lowerQuery.includes("candido portinari")) {
      return ARTISTS_GUARANTEED_IMAGES.portinari;
    }
    if (lowerQuery.includes("dali") || lowerQuery.includes("salvador dali")) {
      return ARTISTS_GUARANTEED_IMAGES.salvador_dali;
    }
    if (lowerQuery.includes("frida") || lowerQuery.includes("kahlo")) {
      return ARTISTS_GUARANTEED_IMAGES.frida_kahlo;
    }
    if (lowerQuery.includes("almeida junior") || lowerQuery.includes("almeida jr")) {
      return ARTISTS_GUARANTEED_IMAGES.almeida_junior;
    }
    if (lowerQuery.includes("aua mendes")) {
      return ARTISTS_GUARANTEED_IMAGES.aua_mendes;
    }
    if (lowerQuery.includes("victor meirelles") || lowerQuery.includes("victor meireles") || lowerQuery.includes("vitor meirelles")) {
      return ARTISTS_GUARANTEED_IMAGES.victor_meirelles;
    }
    if (lowerQuery.includes("adriana varejao")) {
      return ARTISTS_GUARANTEED_IMAGES.adriana_varejao;
    }
    if (lowerQuery.includes("paul klee") || lowerQuery.includes("klee")) {
      return ARTISTS_GUARANTEED_IMAGES.paul_klee;
    }
    if (lowerQuery.includes("kandinsky") || lowerQuery.includes("kadinski") || lowerQuery.includes("kandinski")) {
      return ARTISTS_GUARANTEED_IMAGES.kandinsky;
    }
    if (lowerQuery.includes("pedro americo")) {
      return ARTISTS_GUARANTEED_IMAGES.pedro_americo;
    }
    if (lowerQuery.includes("magritte") || lowerQuery.includes("rene magritte")) {
      return ARTISTS_GUARANTEED_IMAGES.magritte;
    }
    if (lowerQuery.includes("daiara tukano") || lowerQuery.includes("tukano")) {
      return ARTISTS_GUARANTEED_IMAGES.daiara_tukano;
    }
    if (lowerQuery.includes("cezzane") || lowerQuery.includes("cezanne") || lowerQuery.includes("paul cezanne")) {
      return ARTISTS_GUARANTEED_IMAGES.paul_cezanne;
    }
    if (lowerQuery.includes("raphael") || lowerQuery.includes("rafael")) {
      return ARTISTS_GUARANTEED_IMAGES.raphael;
    }
    if (lowerQuery.includes("beijo") || lowerQuery.includes("klimt") || lowerQuery.includes("gustav klimt")) {
      return ARTISTS_GUARANTEED_IMAGES.gustav_klimt;
    }
    if (lowerQuery.includes("grito") || lowerQuery.includes("edvard munch")) {
      return ARTISTS_GUARANTEED_IMAGES.o_grito;
    }
    if (lowerQuery.includes("degas") || lowerQuery.includes("edgar degas")) {
      return ARTISTS_GUARANTEED_IMAGES.degas;
    }
    if (lowerQuery.includes("di cavalcanti") || lowerQuery.includes("cavalcanti")) {
      return ARTISTS_GUARANTEED_IMAGES.di_cavalcanti;
    }
    if (lowerQuery.includes("donatello")) {
      return ARTISTS_GUARANTEED_IMAGES.donatello;
    }
    if (lowerQuery.includes("yayoi") || lowerQuery.includes("kusama")) {
      return ARTISTS_GUARANTEED_IMAGES.yayoi_kusama;
    }
    if (lowerQuery.includes("jaider esbell") || lowerQuery.includes("esbell")) {
      return ARTISTS_GUARANTEED_IMAGES.jaider_esbell;
    }
    if (lowerQuery.includes("chagall") || lowerQuery.includes("chaggal") || lowerQuery.includes("marc chagall")) {
      return ARTISTS_GUARANTEED_IMAGES.chagall;
    }
    if (lowerQuery.includes("duchamp") || lowerQuery.includes("marcel duchamp")) {
      return ARTISTS_GUARANTEED_IMAGES.duchamp;
    }
    if (lowerQuery.includes("matisse") || lowerQuery.includes("henri matisse")) {
      return ARTISTS_GUARANTEED_IMAGES.matisse;
    }
    if (lowerQuery.includes("vik muniz") || lowerQuery.includes("vic muniz")) {
      return ARTISTS_GUARANTEED_IMAGES.vik_muniz;
    }
    if (lowerQuery.includes("michelangelo")) {
      return ARTISTS_GUARANTEED_IMAGES.michelangelo;
    }
    if (lowerQuery.includes("gauguin") || lowerQuery.includes("gaugin") || lowerQuery.includes("paul gauguin")) {
      return ARTISTS_GUARANTEED_IMAGES.gauguin;
    }
    if (lowerQuery.includes("goya") || lowerQuery.includes("francisco goya")) {
      return ARTISTS_GUARANTEED_IMAGES.goya;
    }
    if (lowerQuery.includes("renoir") || lowerQuery.includes("pierre-auguste renoir")) {
      return ARTISTS_GUARANTEED_IMAGES.renoir;
    }
    if (lowerQuery.includes("rembrandt")) {
      return ARTISTS_GUARANTEED_IMAGES.rembrandt;
    }
    if (lowerQuery.includes("silvana mendes") || lowerQuery.includes("silvia mendes")) {
      return ARTISTS_GUARANTEED_IMAGES.silvana_mendes;
    }
    if (lowerQuery.includes("madalena") || lowerQuery.includes("reinbolt") || lowerQuery.includes("santos reinbolt")) {
      return ARTISTS_GUARANTEED_IMAGES.madalena_reinbolt;
    }
    if (lowerQuery.includes("arjan martins") || lowerQuery.includes("arjan")) {
      return ARTISTS_GUARANTEED_IMAGES.arjan_martins;
    }
    if (lowerQuery.includes("maxwell alexandre") || lowerQuery.includes("maxwell")) {
      return ARTISTS_GUARANTEED_IMAGES.maxwell_alexandre;
    }
    if (lowerQuery.includes("rosana paulino") || lowerQuery.includes("rosana")) {
      return ARTISTS_GUARANTEED_IMAGES.rosana_paulino;
    }
    if (lowerQuery.includes("eduardo kobra") || lowerQuery.includes("kobra")) {
      return ARTISTS_GUARANTEED_IMAGES.eduardo_kobra;
    }
    if (lowerQuery.includes("os gemeos") || lowerQuery.includes("os g\xEAmeos") || lowerQuery.includes("gemeos") || lowerQuery.includes("g\xEAmeos")) {
      return ARTISTS_GUARANTEED_IMAGES.os_gemeos;
    }
    if (lowerQuery.includes("romero britto") || lowerQuery.includes("romero brito") || lowerQuery.includes("britto") || lowerQuery.includes("brito")) {
      return ARTISTS_GUARANTEED_IMAGES.romero_britto;
    }
    if (lowerQuery.includes("helio oiticica") || lowerQuery.includes("oiticica")) {
      return ARTISTS_GUARANTEED_IMAGES.helio_oiticica;
    }
    if (lowerQuery.includes("ivan cruz")) {
      return ARTISTS_GUARANTEED_IMAGES.ivan_cruz;
    }
    if (lowerQuery.includes("alfredo volpi") || lowerQuery.includes("volpi")) {
      return ARTISTS_GUARANTEED_IMAGES.alfredo_volpi;
    }
    if (lowerQuery.includes("djanira")) {
      return ARTISTS_GUARANTEED_IMAGES.djanira;
    }
    if (lowerQuery.includes("georgina de albuquerque") || lowerQuery.includes("georgina albuquerque")) {
      return ARTISTS_GUARANTEED_IMAGES.georgina_de_albuquerque;
    }
    if (lowerQuery.includes("arthur bispo") || lowerQuery.includes("bispo do rosario") || lowerQuery.includes("bispo do ros\xE1rio")) {
      return ARTISTS_GUARANTEED_IMAGES.arthur_bispo_do_rosario;
    }
    if (lowerQuery.includes("heitor dos prazeres")) {
      return ARTISTS_GUARANTEED_IMAGES.heitor_dos_prazeres;
    }
    if (lowerQuery.includes("carybe") || lowerQuery.includes("caryb\xE9")) {
      return ARTISTS_GUARANTEED_IMAGES.carybe;
    }
    if (lowerQuery.includes("miro") || lowerQuery.includes("mir\xF3") || lowerQuery.includes("joan miro") || lowerQuery.includes("joan mir\xF3")) {
      return ARTISTS_GUARANTEED_IMAGES.joan_miro;
    }
    if (lowerQuery.includes("carolina maria de jesus") || lowerQuery.includes("carolina de jesus")) {
      return ARTISTS_GUARANTEED_IMAGES.carolina_maria_de_jesus;
    }
    if (lowerQuery.includes("ailton krenak") || lowerQuery.includes("krenak")) {
      return ARTISTS_GUARANTEED_IMAGES.ailton_krenak;
    }
    if (lowerQuery.includes("auritha tabajara") || lowerQuery.includes("auritha")) {
      return ARTISTS_GUARANTEED_IMAGES.auritha_tabajara;
    }
    if (lowerQuery.includes("conceicao evaristo") || lowerQuery.includes("concei\xE7\xE3o evaristo")) {
      return ARTISTS_GUARANTEED_IMAGES.conceicao_evaristo;
    }
    if (lowerQuery.includes("daniel munduruku") || lowerQuery.includes("munduruku")) {
      return ARTISTS_GUARANTEED_IMAGES.daniel_munduruku;
    }
    if (lowerQuery.includes("davi kopenawa") || lowerQuery.includes("kopenawa")) {
      return ARTISTS_GUARANTEED_IMAGES.davi_kopenawa;
    }
    if (lowerQuery.includes("djamila ribeiro") || lowerQuery.includes("djamila")) {
      return ARTISTS_GUARANTEED_IMAGES.djamila_ribeiro;
    }
    if (lowerQuery.includes("eliane potiguara") || lowerQuery.includes("eliane portiguara") || lowerQuery.includes("potiguara")) {
      return ARTISTS_GUARANTEED_IMAGES.eliane_potiguara;
    }
    if (lowerQuery.includes("graca grauna") || lowerQuery.includes("graca gra\xFAna") || lowerQuery.includes("grauna")) {
      return ARTISTS_GUARANTEED_IMAGES.graca_grauna;
    }
    if (lowerQuery.includes("itamar vieira") || lowerQuery.includes("itamar vieira jr")) {
      return ARTISTS_GUARANTEED_IMAGES.itamar_vieira_junior;
    }
    if (lowerQuery.includes("jarid arraes") || lowerQuery.includes("jarid")) {
      return ARTISTS_GUARANTEED_IMAGES.jarid_arraes;
    }
    if (lowerQuery.includes("julie dorrico") || lowerQuery.includes("dorrico")) {
      return ARTISTS_GUARANTEED_IMAGES.julie_dorrico;
    }
    if (lowerQuery.includes("kaka wera") || lowerQuery.includes("kaka wera jeicupe") || lowerQuery.includes("kak\xE1 wer\xE1")) {
      return ARTISTS_GUARANTEED_IMAGES.kaka_wera_jeicupe;
    }
    if (lowerQuery.includes("lima barreto")) {
      return ARTISTS_GUARANTEED_IMAGES.lima_barreto;
    }
    if (lowerQuery.includes("machado de assis")) {
      return ARTISTS_GUARANTEED_IMAGES.machado_de_assis;
    }
    if (lowerQuery.includes("marcia kambeba") || lowerQuery.includes("marica kambeba") || lowerQuery.includes("kambeba")) {
      return ARTISTS_GUARANTEED_IMAGES.marcia_kambeba;
    }
    if (lowerQuery.includes("maria firmina") || lowerQuery.includes("firmina dos reis") || lowerQuery.includes("maria firmino")) {
      return ARTISTS_GUARANTEED_IMAGES.maria_firmina_dos_reis;
    }
    if (lowerQuery.includes("olivio jekupe") || lowerQuery.includes("olivio jukupe") || lowerQuery.includes("jekupe")) {
      return ARTISTS_GUARANTEED_IMAGES.olivio_jekupe;
    }
    if (lowerQuery.includes("tango")) {
      return ARTISTS_GUARANTEED_IMAGES.tango;
    }
    if (lowerQuery.includes("salsa")) {
      return ARTISTS_GUARANTEED_IMAGES.salsa;
    }
    if (lowerQuery.includes("valsa")) {
      return ARTISTS_GUARANTEED_IMAGES.valsa;
    }
    if (lowerQuery.includes("rock")) {
      return ARTISTS_GUARANTEED_IMAGES.rock;
    }
    if (lowerQuery.includes("jongo")) {
      return ARTISTS_GUARANTEED_IMAGES.jongo;
    }
    if (lowerQuery.includes("congada")) {
      return ARTISTS_GUARANTEED_IMAGES.congada;
    }
    if (lowerQuery.includes("coco") || lowerQuery.includes("coco pernambucano")) {
      return ARTISTS_GUARANTEED_IMAGES.coco_pernambucano;
    }
    if (lowerQuery.includes("ciranda")) {
      return ARTISTS_GUARANTEED_IMAGES.ciranda;
    }
    if (lowerQuery.includes("caboclinho") || lowerQuery.includes("caboclinhos") || lowerQuery.includes("cabocnho")) {
      return ARTISTS_GUARANTEED_IMAGES.caboclinho;
    }
    if (lowerQuery.includes("hip hop") || lowerQuery.includes("hiphop")) {
      return ARTISTS_GUARANTEED_IMAGES.hip_hop;
    }
    if (lowerQuery.includes("funk")) {
      return ARTISTS_GUARANTEED_IMAGES.funk;
    }
    if (lowerQuery.includes("frevo")) {
      return ARTISTS_GUARANTEED_IMAGES.frevo;
    }
    if (lowerQuery.includes("fandango")) {
      return ARTISTS_GUARANTEED_IMAGES.fandango;
    }
    if (lowerQuery.includes("danca de salao") || lowerQuery.includes("dancas de salao") || lowerQuery.includes("dan\xE7a de sal\xE3o") || lowerQuery.includes("dan\xE7as de sal\xE3o")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_de_salao;
    }
    if (lowerQuery.includes("danca contemporanea") || lowerQuery.includes("dan\xE7a contempor\xE2nea")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_contemporanea;
    }
    if (lowerQuery.includes("danca classica") || lowerQuery.includes("dan\xE7a cl\xE1ssica")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_classica;
    }
    if (lowerQuery.includes("cavalo marinho")) {
      return ARTISTS_GUARANTEED_IMAGES.cavalo_marinho;
    }
    if (lowerQuery.includes("catira")) {
      return ARTISTS_GUARANTEED_IMAGES.catira;
    }
    if (lowerQuery.includes("carimbo") || lowerQuery.includes("carimb\xF3")) {
      return ARTISTS_GUARANTEED_IMAGES.carimbo;
    }
    if (lowerQuery.includes("bale") || lowerQuery.includes("ballet") || lowerQuery.includes("bal\xE9")) {
      return ARTISTS_GUARANTEED_IMAGES.bale;
    }
    if (lowerQuery.includes("arte indigena") || lowerQuery.includes("arte ind\xEDgena") || lowerQuery.includes("cultura indigena") || lowerQuery.includes("cultura ind\xEDgena")) {
      return ARTISTS_GUARANTEED_IMAGES.arte_indigena;
    }
    if (lowerQuery.includes("arte africana") || lowerQuery.includes("cultura africana") || lowerQuery.includes("mascaras africanas") || lowerQuery.includes("m\xE1scaras africanas")) {
      return ARTISTS_GUARANTEED_IMAGES.arte_africana;
    }
    if (lowerQuery.includes("danca no brasil") || lowerQuery.includes("dan\xE7a no brasil") || lowerQuery.includes("danca brasileira") || lowerQuery.includes("dan\xE7a brasileira") || lowerQuery.includes("danca no br") || lowerQuery.includes("dan\xE7a no br")) {
      return ARTISTS_GUARANTEED_IMAGES.danca_brasil;
    }
    if (lowerQuery.includes("desenho no brasil") || lowerQuery.includes("desenho brasileiro") || lowerQuery.includes("desenho no br")) {
      return ARTISTS_GUARANTEED_IMAGES.desenho_brasil;
    }
    const matchConceptWord = (word) => {
      const regex = new RegExp(`\\b${word}\\b`, "i");
      return regex.test(lowerQuery);
    };
    if (mK === "arte" || mK.includes("arte") || matchConceptWord("arte")) {
      return {
        imagemUrl: "https://i.imgur.com/S65idlX.jpeg",
        titulo: "O Violeiro",
        credito: "Almeida J\xFAnior"
      };
    }
    if (mK === "danca" || mK.includes("danca") || matchConceptWord("danca") || matchConceptWord("dancas") || matchConceptWord("dancar")) {
      return {
        imagemUrl: "https://i.imgur.com/3LGoXuZ.jpeg",
        titulo: "A Dan\xE7a",
        credito: "Henri Matisse"
      };
    }
    if (mK === "poema" || mK.includes("poema") || mK.includes("poesia") || matchConceptWord("poema") || matchConceptWord("poemas") || matchConceptWord("poesia") || matchConceptWord("poesias") || matchConceptWord("verso") || matchConceptWord("versos")) {
      return {
        imagemUrl: "https://i.imgur.com/wvQLiom.jpeg",
        titulo: "Retrato de Cec\xEDlia Meireles",
        credito: "Cec\xEDlia Meireles"
      };
    }
    if (mK === "desenho" || mK.includes("desenho") || mK.includes("esboco") || matchConceptWord("desenho") || matchConceptWord("desenhos") || matchConceptWord("esboco") || matchConceptWord("esbocos")) {
      return {
        imagemUrl: "https://i.imgur.com/qKt1FWr.jpeg",
        titulo: "Esbo\xE7o da \xDAltima Ceia",
        credito: "Leonardo da Vinci"
      };
    }
    if (mK === "literatura" || mK.includes("literatura") || matchConceptWord("literatura")) {
      return {
        imagemUrl: "https://i.imgur.com/JoFITap.jpeg",
        titulo: "Retrato do Acervo Liter\xE1rio Cl\xE1ssico",
        credito: "Acervo de Literatura Cl\xE1ssica"
      };
    }
    if (mK === "musica" || mK.includes("musica") || matchConceptWord("musica") || matchConceptWord("musicas")) {
      return {
        imagemUrl: "https://i.imgur.com/8tSYMB6.jpeg",
        titulo: "Cl\xE1ssico Hist\xF3rico de Partituras e Instrumentos",
        credito: "Acervo de M\xFAsica Cl\xE1ssica"
      };
    }
    if (mK === "pintura" || mK.includes("pintura") || matchConceptWord("pintura") || matchConceptWord("pinturas")) {
      return {
        imagemUrl: "https://i.imgur.com/itQdr8H.jpeg",
        titulo: "No Bosque de Giverny (In the Woods at Giverny)",
        credito: "Claude Monet"
      };
    }
    if (mK === "teatro" || mK.includes("teatro") || mK.includes("palco") || matchConceptWord("teatro") || matchConceptWord("teatros") || matchConceptWord("palco") || matchConceptWord("palcos")) {
      if (lowerQuery.includes("historia") || lowerQuery.includes("origem") || lowerQuery.includes("antigo") || lowerQuery.includes("passado") || lowerQuery.includes("surgi")) {
        return {
          imagemUrl: "https://i.imgur.com/3di4jIS.jpeg",
          titulo: "Hist\xF3ria do Teatro",
          credito: "Wikimedia Commons"
        };
      }
      return {
        imagemUrl: "https://i.imgur.com/JHzxAbj.jpg",
        titulo: "Teatro Municipal de S\xE3o Paulo",
        credito: "Teatro Municipal de S\xE3o Paulo"
      };
    }
    if (matchedKey === "piada" || matchConceptWord("piada") || matchConceptWord("piadas") || matchConceptWord("engracado") || matchConceptWord("charada") || matchConceptWord("charadas") || matchConceptWord("brincadeira") || matchConceptWord("humor") || matchConceptWord("rir") || matchConceptWord("sorrir")) {
      const IMAGENS_PIADAS = [
        {
          imagemUrl: "https://i.imgur.com/D0qsROZ.jpeg",
          titulo: "As Quatro Esta\xE7\xF5es (Le Saisons)",
          credito: "Giuseppe Arcimboldo"
        },
        {
          imagemUrl: "https://i.imgur.com/4zBo1Q2.jpeg",
          titulo: "M\xE3os Desenhando (Drawing Hands)",
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
      ];
      const idx = Math.floor(Math.random() * IMAGENS_PIADAS.length);
      return IMAGENS_PIADAS[idx];
    }
    if (matchedKey === "curiosidade" || matchConceptWord("curiosidade") || matchConceptWord("curiosidades") || lowerQuery.includes("sabia que") || lowerQuery.includes("voce sabia")) {
      const IMAGENS_CURIOSIDADES = [
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
      ];
      const idx = Math.floor(Math.random() * IMAGENS_CURIOSIDADES.length);
      return IMAGENS_CURIOSIDADES[idx];
    }
    let termo = "";
    if (matchedKey && lib && lib[matchedKey]) {
      const item = lib[matchedKey];
      if (item.subtema) {
        termo = item.subtema.replace(/_/g, " ");
      } else if (item.palavras_chave && item.palavras_chave.length > 0) {
        termo = item.palavras_chave[0];
      }
    }
    if (!termo) {
      const queryLower = pergunta.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      if (queryLower.includes("van gogh") || queryLower.includes("vincent van gogh")) {
        termo = "Vincent van Gogh";
      } else if (queryLower.includes("da vinci") || queryLower.includes("leonardo da vinci") || queryLower.includes("leonardo")) {
        termo = "Leonardo da Vinci";
      } else if (queryLower.includes("picasso") || queryLower.includes("pablo picasso")) {
        termo = "Pablo Picasso";
      } else if (queryLower.includes("tarsila") || queryLower.includes("tarsila do amaral")) {
        termo = "Tarsila do Amaral";
      } else if (queryLower.includes("monet") || queryLower.includes("claude monet")) {
        termo = "Claude Monet";
      } else if (queryLower.includes("mona lisa")) {
        termo = "Mona Lisa";
      } else if (queryLower.includes("noite estrelada")) {
        termo = "The Starry Night Vincent van Gogh";
      } else if (queryLower.includes("abaporu")) {
        termo = "Abaporu Tarsila do Amaral";
      } else if (queryLower.includes("guernica")) {
        termo = "Guernica Pablo Picasso";
      } else if (queryLower.includes("machado de assis")) {
        termo = "Machado de Assis";
      } else if (queryLower.includes("lima barreto")) {
        termo = "Lima Barreto";
      } else if (queryLower.includes("conceicao evaristo")) {
        termo = "Concei\xE7\xE3o Evaristo";
      } else if (queryLower.includes("carolina maria de jesus")) {
        termo = "Carolina Maria de Jesus";
      } else if (queryLower.includes("itamar vieira")) {
        termo = "Itamar Vieira Junior";
      } else if (queryLower.includes("daniel munduruku")) {
        termo = "Daniel Munduruku";
      } else if (queryLower.includes("ailton krenak")) {
        termo = "Ailton Krenak";
      } else {
        const stopWords = [
          "quem",
          "foi",
          "fale",
          "sobre",
          "ver",
          "obra",
          "quando",
          "nasceu",
          "morreu",
          "mostre",
          "imagem",
          "foto",
          "quadro",
          "pintura",
          "desenho",
          "ilustra\xE7\xE3o",
          "retrato",
          "quero",
          "queria",
          "gostaria",
          "gostava",
          "pode",
          "poderia",
          "me",
          "te",
          "se",
          "um",
          "uma",
          "do",
          "da",
          "de",
          "em",
          "na",
          "no",
          "para",
          "com",
          "onde",
          "como",
          "qual",
          "o que",
          "por que",
          "porque",
          "para",
          "mais",
          "tem",
          "algum",
          "alguma",
          "ilustra",
          "desenha",
          "veja",
          "olha",
          "mostra",
          "exibir",
          "pinta",
          "pintou",
          "criou",
          "fez",
          "uns",
          "umas",
          "dos",
          "das",
          "pelo",
          "pela",
          "por",
          "com",
          "sem",
          "ou",
          "que",
          "esta",
          "este",
          "essa",
          "esse",
          "sua",
          "seu",
          "suas",
          "seus",
          "minha",
          "meu",
          "minhas",
          "meus",
          "dele",
          "dela",
          "deles",
          "delas",
          "qual",
          "quais",
          "quem",
          "como",
          "tudo",
          "nada",
          "algo",
          "coisa"
        ];
        let palavras = pergunta.toLowerCase().replace(/[?!.,]/g, "").split(/\s+/).filter((p) => p.length > 2 && !stopWords.includes(p));
        termo = palavras.join(" ");
      }
    }
    if (!termo) return null;
    let img = null;
    try {
      img = await buscarWikimedia(termo);
    } catch (e) {
      console.warn("Erro ao buscar na Wikimedia:", e);
    }
    if (!img) {
      try {
        img = await buscarMetropolitan(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Metropolitan:", e);
      }
    }
    if (!img) {
      try {
        img = await buscarChicago(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Chicago Art Institute:", e);
      }
    }
    if (!img) {
      try {
        img = await buscarNoPexels(termo);
      } catch (e) {
        console.warn("Erro ao buscar no Pexels:", e);
      }
    }
    return img;
  } catch (e) {
    console.error("Erro na busca de imagem:", e);
  }
  return null;
}
async function buscarMetropolitan(termo) {
  try {
    const searchResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${encodeURIComponent(termo)}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );
    const searchData = await searchResponse.json();
    if (!searchData.objectIDs || searchData.objectIDs.length === 0) {
      return null;
    }
    const objectId = searchData.objectIDs[0];
    const detailResponse = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );
    const obra = await detailResponse.json();
    const imgUrl = obra.primaryImageSmall || obra.primaryImage || null;
    if (!imgUrl) return null;
    return {
      imagemUrl: imgUrl,
      titulo: obra.title || "Sem t\xEDtulo",
      credito: `${obra.artistDisplayName || "Autor desconhecido"} (${obra.objectDate || "Data desconhecida"}) / Metropolitan Museum of Art`
    };
  } catch (erro) {
    console.error("Erro ao buscar no Metropolitan:", erro);
    return null;
  }
}
async function buscarChicago(termo) {
  try {
    const res = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(termo)}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );
    const data = await res.json();
    if (!data.data || data.data.length === 0) {
      return null;
    }
    const obra = data.data[0];
    const detalhe = await fetch(
      `https://api.artic.edu/api/v1/artworks/${obra.id}`,
      {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)"
        }
      }
    );
    const detalheJson = await detalhe.json();
    const art = detalheJson.data;
    const imagem = art.image_id ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg` : null;
    if (!imagem) return null;
    return {
      imagemUrl: imagem,
      titulo: art.title || "Sem t\xEDtulo",
      credito: `${art.artist_title || "Autor desconhecido"} (${art.date_display || "Data desconhecida"}) / Art Institute of Chicago`
    };
  } catch (erro) {
    console.error("Erro ao buscar no Chicago Art Institute:", erro);
    return null;
  }
}
app.get("/api/proxy-image", async (req, res) => {
  try {
    const imageUrl = req.query.url;
    if (!imageUrl || typeof imageUrl !== "string") {
      return res.status(400).send("Falta a URL da imagem");
    }
    if (!imageUrl.startsWith("https://") && !imageUrl.startsWith("http://")) {
      return res.status(400).send("Apenas protocolos de imagem seguros permitidos");
    }
    let targetUrl = imageUrl.trim();
    if (targetUrl.includes("githubusercontent.com/lenilsonxavier-dev/candinho-3") && targetUrl.includes("/imagens/")) {
      const parts = targetUrl.split("/imagens/");
      const fileName = parts[parts.length - 1];
      const localFilePath = import_path.default.join(process.cwd(), "public", "imagens", fileName);
      try {
        const fs = await import("fs/promises");
        const exists = await fs.access(localFilePath).then(() => true).catch(() => false);
        if (exists) {
          const mime = targetUrl.endsWith(".png") ? "image/png" : "image/jpeg";
          res.setHeader("Content-Type", mime);
          res.setHeader("Cache-Control", "public, max-age=86400");
          const fileData = await fs.readFile(localFilePath);
          return res.send(fileData);
        }
      } catch (fsErr) {
        console.error("Erro ao ler imagem local no proxy:", fsErr);
      }
    }
    try {
      const parsedUrl = new URL(targetUrl);
      targetUrl = parsedUrl.toString();
    } catch (err) {
      console.warn("Erro ao fazer parse da URL no proxy-image, usando a original:", err);
    }
    let response = null;
    let success = false;
    try {
      response = await fetch(targetUrl, {
        headers: {
          "User-Agent": "CandinhoArtApp/2.0 (lenilsonxavier@gmail.com; educational art app)",
          "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
        }
      });
      if (response.ok) success = true;
    } catch (e) {
      console.warn("Tentativa 1 no proxy-image falhou:", e);
    }
    if (!success) {
      try {
        response = await fetch(targetUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8"
          }
        });
        if (response.ok) success = true;
      } catch (e) {
        console.warn("Tentativa 2 no proxy-image falhou:", e);
      }
    }
    if (!success) {
      try {
        response = await fetch(targetUrl);
        if (response.ok) success = true;
      } catch (e) {
        console.warn("Tentativa 3 no proxy-image falhou:", e);
      }
    }
    if (!success || !response) {
      console.error(`Erro: Todas as tentativas para obter imagem falharam para a URL: ${targetUrl}`);
      return res.status(502).send("Erro ao obter a imagem de todas as origens poss\xEDveis");
    }
    const contentType = response.headers.get("content-type") || "image/jpeg";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.send(buffer);
  } catch (error) {
    console.error("Erro interno no proxy-image:", error);
    res.status(500).send("Erro interno ao buscar a imagem");
  }
});
app.post("/api/groq", async (req, res) => {
  try {
    const { mensagem, nomeCrianca: clientNomeCrianca, historico, contextoEmocional } = req.body;
    if (!mensagem || typeof mensagem !== "string") {
      return res.status(400).json({ error: "Mensagem \xE9 obrigat\xF3ria" });
    }
    let nomeCrianca = clientNomeCrianca || null;
    let acabouDeSeApresentar = false;
    const nomeExtraido = extrairNome(mensagem);
    if (nomeExtraido) {
      nomeCrianca = nomeExtraido;
      acabouDeSeApresentar = true;
    }
    const lib = await carregarBiblioteca();
    const textoBusca = mensagem.toLowerCase();
    let textoFinal = "";
    let infoExtra = { nascimento: "", morte: "", estilo: "" };
    let localResult = null;
    if (acabouDeSeApresentar && nomeCrianca) {
      const saudacoes = [
        `\xC9 um prazer estar aqui para falarmos de Arte! Bem-vindo, Artista **${nomeCrianca}**! \u{1F3A8}`,
        `Ol\xE1, **${nomeCrianca}**! \xC9 um prazer estar aqui para falarmos de Arte! \u{1F31F}`,
        `Oi, **${nomeCrianca}**! \xC9 um prazer estar aqui para falarmos de Arte! \u{1F929}`
      ];
      textoFinal = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    } else {
      const containsImageKeywords = mensagem.toLowerCase().includes("mostra") || mensagem.toLowerCase().includes("mostre") || mensagem.toLowerCase().includes("ver") || mensagem.toLowerCase().includes("veja") || mensagem.toLowerCase().includes("imagem") || mensagem.toLowerCase().includes("foto") || mensagem.toLowerCase().includes("quadro") || mensagem.toLowerCase().includes("pintura") || mensagem.toLowerCase().includes("desenho") || mensagem.toLowerCase().includes("retrat") || mensagem.toLowerCase().includes("ilustra");
      localResult = resolverMensagemLocalmente(mensagem, lib);
      if (localResult) {
        let encontrouNaLib = false;
        if (localResult.matchedKey) {
          const item = lib[localResult.matchedKey];
          if (item) {
            encontrouNaLib = true;
            if (containsImageKeywords) {
              const nomeFormatado = item.palavras_chave?.[0] ? item.palavras_chave[0].replace(/\b\w/g, (l) => l.toUpperCase()) : "Carolina Maria de Jesus";
              textoFinal = `Com certeza! Preparei a tela para voc\xEA ver a imagem de **${nomeFormatado}**! \u{1F5BC}\uFE0F\u2728`;
            } else {
              textoFinal = localResult.reply;
            }
            infoExtra = {
              nascimento: item.ano_nascimento || "---",
              morte: item.ano_falecimento || "---",
              estilo: item.categoria || "Arte"
            };
          }
        }
        if (!encontrouNaLib) {
          textoFinal = localResult.reply;
        }
      }
      if (!textoFinal) {
        if (ai) {
          try {
            const palavrasEmocionais = [
              "triste",
              "ansios",
              "raiva",
              "angustia",
              "chateado",
              "chateada",
              "magoado",
              "magoada",
              "com medo",
              "assustado",
              "assustada",
              "tristeza",
              "ansiedade",
              "nervoso",
              "nervosa",
              "chorei",
              "chorando",
              "sozinho",
              "sozinha",
              "solitario",
              "solitaria",
              "ruim"
            ];
            const msgNorm = mensagem.toLowerCase();
            let isEmocional = contextoEmocional || palavrasEmocionais.some((palavra) => msgNorm.includes(palavra));
            if (!isEmocional && historico && Array.isArray(historico)) {
              const lastFew = historico.slice(-3);
              isEmocional = lastFew.some((h) => palavrasEmocionais.some((p) => h.text.toLowerCase().includes(p)));
            }
            let systemInstruction = "";
            if (isEmocional) {
              systemInstruction = "Voc\xEA \xE9 o Candinho, um amigo muito carinhoso, emp\xE1tico, afetuoso e acolhedor para crian\xE7as de 10 anos. A crian\xE7a est\xE1 compartilhando sentimentos de tristeza, ansiedade, raiva, t\xE9dio ou ang\xFAstia, ou respondendo a uma pergunta sobre os sentimentos dela. Sua prioridade absoluta \xE9 dar apoio emocional genu\xEDno, ouvir com todo o carinho e carinho do mundo. Ofere\xE7a empatia profunda e sincera e fa\xE7a perguntas abertas para que ela se sinta segura para desabafar livremente (por exemplo: 'Quer falar mais sobre o que aconteceu?', 'Como voc\xEA se sente sobre isso?'). N\xC3O tente falar de arte, n\xE3o mencione pintores famos, n\xE3o use met\xE1foras de pintura ou pinceladas de forma for\xE7ada, e N\xC3O tente faz\xEA-la voltar aos temas de arte at\xE9 que a pr\xF3pria crian\xE7a decida falar de desenho/arte por conta pr\xF3pria. Foque inteiramente em apoiar o cora\xE7\xE3o dela e ser um amigo seguro.";
            } else {
              systemInstruction = "Voc\xEA \xE9 o Candinho, um professor de arte e pintor muito simp\xE1tico e acolhedor para crian\xE7as de 10 anos. Responda sempre em portugu\xEAs de forma simples, alegre. Sempre use uma linguagem positiva e entusiasmada, usando analogias de pintura e pinceladas. NUNCA repita o nome do artista mais de duas vezes. Se n\xE3o descobrir sobre quem \xE9 o artista, responda gentilmente: 'N\xE3o conhe\xE7o esse artista ainda, mas vou pesquisar na minha paleta! \u{1F3A8}'. Diga se o artista nasceu ou faleceu em tal \xE9poca de forma amig\xE1vel no corpo do texto, sem criar listas ou cabe\xE7alhos. REGRAS ESPECIAIS PARA PERGUNTAS INICIADAS COM 'COMO' (Modo Professor de Arte):\n- Identifique qual habilidade ou tema ele deseja aprender e explique de forma simples, como um professor para crian\xE7as.\n- Sempre organize a resposta em etapas numeradas.\n- Se a tarefa for art\xEDstica ou pr\xE1tica, utilize uma estrutura amig\xE1vel com: Materiais (quando necess\xE1rio), Passo a passo, Dicas, Erros comuns e Desafio para praticar.\n- N\xE3o inclua imagens ou links de imagens de nenhum tipo.\n- No final, pergunte de forma interativa se a crian\xE7a deseja: um exemplo pronto; uma atividade para praticar; uma vers\xE3o f\xE1cil; ou uma vers\xE3o mais avan\xE7ada.";
            }
            if (nomeCrianca) {
              systemInstruction += ` O nome da crian\xE7a que est\xE1 conversando com voc\xEA \xE9 ${nomeCrianca}. Trate-a com muito carinho e use o nome dela em suas respostas de forma natural e fofa para manter uma conversa acolhedora.`;
            }
            let contentsInput = mensagem;
            if (historico && Array.isArray(historico) && historico.length > 0) {
              const uHistorico = historico.slice(-10);
              contentsInput = uHistorico.map((h) => ({
                role: h.sender === "user" ? "user" : "model",
                parts: [{ text: h.text }]
              }));
              const lastItem = contentsInput[contentsInput.length - 1];
              if (!lastItem || lastItem.parts?.[0]?.text !== mensagem || lastItem.role !== "user") {
                contentsInput.push({ role: "user", parts: [{ text: mensagem }] });
              }
            }
            const responseGemini = await ai.models.generateContent({
              model: "gemini-3.5-flash",
              contents: contentsInput,
              config: {
                systemInstruction,
                temperature: 0.5
              }
            });
            textoFinal = responseGemini.text || "";
          } catch (e) {
            console.error("Erro na chamada Gemini, usando fallback de sugest\xF5es locais:", e);
            textoFinal = sugerirTemasAlternativos();
          }
        } else {
          textoFinal = sugerirTemasAlternativos();
        }
      }
    }
    if (nomeCrianca && !acabouDeSeApresentar && (localResult || !ai)) {
      if (Math.random() < 0.35) {
        const nameIntros = [
          `Veja s\xF3, **${nomeCrianca}**: `,
          `Sabe, **${nomeCrianca}**, `,
          `Olha que interessante, **${nomeCrianca}**! `,
          `Que pergunta fant\xE1stica, **${nomeCrianca}**! `
        ];
        const chosenIntro = nameIntros[Math.floor(Math.random() * nameIntros.length)];
        textoFinal = `${chosenIntro}${textoFinal}`;
      }
    }
    let imagemResult = null;
    const nMsg = normalizarTexto(mensagem);
    const isComoQuestion = nMsg.startsWith("como") || localResult && localResult.matchedKey && localResult.matchedKey.startsWith("como_");
    const isPorqueQuestion = nMsg.startsWith("por que") || nMsg.startsWith("porque") || nMsg.startsWith("porqu\xEA") || localResult && localResult.matchedKey && localResult.matchedKey.startsWith("porque_arte_banco");
    if (isComoQuestion || isPorqueQuestion) {
      const COMO_PORQUE_IMAGES = [
        "https://i.imgur.com/TBtYr8Q.jpeg",
        "https://i.imgur.com/TBtYr8Q.jpeg",
        "https://i.imgur.com/rWvBZj5.jpeg",
        "https://i.imgur.com/Lmr8RJT.jpeg",
        "https://i.imgur.com/BqPOUHm.jpeg",
        "https://i.imgur.com/7BU6khE.jpeg",
        "https://i.imgur.com/WjeStw7.jpeg"
      ];
      const randomImg = COMO_PORQUE_IMAGES[Math.floor(Math.random() * COMO_PORQUE_IMAGES.length)];
      let titulo = isComoQuestion ? "Aprenda com o Candinho! \u{1F3A8}" : "Porqu\xEAs da Arte com o Candinho! \u{1F4A1}";
      if (localResult && localResult.matchedKey) {
        const mk = localResult.matchedKey;
        if (mk === "como_proteger_fake_news" || mk === "evitar_golpes_internet" || mk.includes("fake_news") || mk.includes("golpe")) {
          titulo = "Detetive da Informa\xE7\xE3o! \u{1F575}\uFE0F";
        }
      }
      imagemResult = {
        imagemUrl: randomImg,
        titulo,
        credito: "Ilustra\xE7\xE3o Educacional"
      };
    } else if (acabouDeSeApresentar) {
      const CANDINHO_GREETINGS_IMAGES = [
        "https://i.imgur.com/PYAYlUY.jpg",
        "https://i.imgur.com/UDl1c5j.png",
        "https://i.imgur.com/Le0VpzC.jpg",
        "https://i.imgur.com/iWmEdZz.jpg",
        "https://i.imgur.com/REfhO7r.jpg"
      ];
      const idx = Math.floor(Math.random() * CANDINHO_GREETINGS_IMAGES.length);
      imagemResult = {
        imagemUrl: CANDINHO_GREETINGS_IMAGES[idx],
        titulo: `Bem-vindo ao Ateli\xEA, ${nomeCrianca || "Pequeno Artista"}! \u{1F3A8}`,
        credito: "Ilustra\xE7\xE3o do Candinho"
      };
    } else {
      imagemResult = localResult?.image || await buscarImagem(mensagem, localResult?.matchedKey, lib);
    }
    return res.status(200).json({
      reply: textoFinal || "Que pergunta curiosa! Vamos descobrir juntos sobre arte? \u{1F3A8}",
      image: imagemResult,
      info: infoExtra.nascimento || infoExtra.morte || infoExtra.estilo ? infoExtra : null,
      googleArts: { url: `https://artsandculture.google.com/search?q=${encodeURIComponent(mensagem)}` },
      matchedKey: localResult?.matchedKey,
      nomeCrianca
    });
  } catch (error) {
    console.error("Erro Geral no Servidor:", error);
    return res.status(200).json({ reply: "Ops! Minhas tintas secaram um pouquinho. Pode repetir o que disse? \u{1F3A8}" });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buscarChicago,
  buscarMetropolitan,
  buscarWikimedia
});
//# sourceMappingURL=server.cjs.map
