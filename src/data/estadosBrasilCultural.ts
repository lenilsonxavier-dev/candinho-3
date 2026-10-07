export interface FonteEstadoCultural {
  nome: string;
  url: string;
}

export interface EstadoCulturalRegistro {
  estado: string;
  sigla: string;
  capital: string;
  regiao: "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul";
  artista: string;
  biografia: string;
  obra: string;
  descricao_da_obra: string;
  danca: string;
  instrumentos: string[];
  atividade: string;
  curiosidade: string;
  fonte: FonteEstadoCultural[];
  tipo_de_selecao: string;
  observacao_curatorial: string;
}

export interface BancoEstadosBrasil {
  estados: EstadoCulturalRegistro[];
}

export const BANCO_ESTADOS_BRASIL: BancoEstadosBrasil = {
  estados: [
    {
      estado: "Acre",
      sigla: "AC",
      capital: "Rio Branco",
      regiao: "Norte",
      artista: "Hélio Melo",
      biografia: "Artista visual, seringueiro, escritor e músico acreano que retratou com sensibilidade a floresta amazônica, os rios e o cotidiano nos seringais.",
      obra: "A Floresta e os Seringais",
      descricao_da_obra: "Desenhos e pinturas que revelam a relação entre os trabalhadores da floresta, as árvores seringueiras, os animais e os mistérios da Amazônia.",
      danca: "Marujada e Dança do Caiari",
      instrumentos: [
        "violão",
        "tambores",
        "maracá",
        "flauta"
      ],
      atividade: "Desenhe uma floresta cheia de árvores gigantes e esconda pequenos animais e personagens entre os troncos e folhas.",
      curiosidade: "Hélio Melo produzia muitas de suas tintas usando pigmentos naturais extraídos de plantas, sementes e argilas da própria floresta amazônica.",
      fonte: [
        {
          nome: "Itaú Cultural",
          url: "https://enciclopedia.itaucultural.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Alagoas",
      sigla: "AL",
      capital: "Maceió",
      regiao: "Nordeste",
      artista: "Rosalvo Ribeiro",
      biografia: "Pintor alagoano de grande importância histórica que estudou na Europa e dedicou parte importante de sua carreira ao ensino e à pintura em Maceió, ao lado da rica tradição de mestres populares alagoanos como Mestre Zumba e Tania de Maya Pedrosa.",
      obra: "Cenas Históricas e Paisagens Alagoanas",
      descricao_da_obra: "Pinturas marcadas pelo domínio da luz, retratando personagens, cenas do cotidiano e paisagens ligadas à memória de Alagoas.",
      danca: "Guerreiro Alagoano",
      instrumentos: [
        "sanfona",
        "pandeiro",
        "zabumba",
        "ganzá"
      ],
      atividade: "Desenhe um chapéu de Guerreiro Alagoano bem colorido, decorado com formas geométricas que lembrem espelhos, fitas e estrelas.",
      curiosidade: "No Guerreiro Alagoano, os chapéus dos brincantes parecem verdadeiras catedrais brilhantes enfeitadas com espelhos, contas e fitas coloridas!",
      fonte: [
        {
          nome: "Pinacoteca Universitária da UFAL",
          url: "https://ufal.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Amapá",
      sigla: "AP",
      capital: "Macapá",
      regiao: "Norte",
      artista: "Raimundo Braga (R. Peixe)",
      biografia: "Artista plástico amapaense conhecido por retratar a vida ribeirinha, a fauna, os barcos e as manifestações culturais da Amazônia amapaense.",
      obra: "Cotidiano Ribeirinho e Cultura do Marabaixo",
      descricao_da_obra: "Pinturas vibrantes que destacam as cores das festas tradicionais, as embarcações do Rio Amazonas e a força cultural do povo amapaense.",
      danca: "Marabaixo",
      instrumentos: [
        "caixas de marabaixo",
        "tambores",
        "chocalhos"
      ],
      atividade: "Crie uma pintura usando cores bem alegres para representar pessoas dançando em roda com saias rodadas e tambores.",
      curiosidade: "No Marabaixo, os versos cantados são chamados de 'Ladrões de Marabaixo' e contam histórias reais e memórias das comunidades negras do Amapá.",
      fonte: [
        {
          nome: "IPHAN - Instituto do Patrimônio Histórico e Artístico Nacional",
          url: "https://www.gov.br/iphan/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Amazonas",
      sigla: "AM",
      capital: "Manaus",
      regiao: "Norte",
      artista: "Moacir Andrade",
      biografia: "Pintor, desenhista e escritor amazonense que dedicou sua obra a retratar a paisagem amazônica, os rios, os barcos regionais, as lendas e a vida cabocla.",
      obra: "Paisagens, Barcos e Lendas da Amazônia",
      descricao_da_obra: "Telas luminosas e cheias de detalhes que mostram o encontro das águas, as embarcações coloridas e o imaginário dos povos da floresta.",
      danca: "Boi-Bumbá (Festival de Parintins) e Ciranda Amazônica",
      instrumentos: [
        "surdo",
        "palminha",
        "maracá",
        "caixinha",
        "charango"
      ],
      atividade: "Imagine uma embarcação mágica navegando pelos rios da Amazônia ao pôr do sol e pinte o reflexo das cores na água.",
      curiosidade: "Em Parintins, no Amazonas, a festa do Boi-Bumbá divide a ilha nas cores azul (Boi Caprichoso) e vermelho (Boi Garantido) em um espetáculo artístico gigantesco!",
      fonte: [
        {
          nome: "Secretaria de Cultura e Economia Criativa do Amazonas",
          url: "https://cultura.am.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Bahia",
      sigla: "BA",
      capital: "Salvador",
      regiao: "Nordeste",
      artista: "Rubem Valentim",
      biografia: "Pintor, escultor e gravador baiano nascido em Salvador, reconhecido internacionalmente por unir a geometria construtivista aos símbolos e emblemas da cultura afro-brasileira, ao lado de outros grandes nomes ligados à Bahia como Carybé.",
      obra: "Emblemas e Relevos Afro-Brasileiros",
      descricao_da_obra: "Pinturas e esculturas geométricas com cores intensas e formas simétricas que dialogam com a ancestralidade e a memória afro-baiana.",
      danca: "Samba de Roda",
      instrumentos: [
        "pandeiro",
        "atabaque",
        "viola machete",
        "berimbau",
        "agôgô"
      ],
      atividade: "Crie um escudo ou painel artístico usando apenas triângulos, círculos, linhas retas e cores bem vibrantes em simetria.",
      curiosidade: "O Samba de Roda do Recôncavo Baiano foi reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade e é uma das raízes do samba brasileiro!",
      fonte: [
        {
          nome: "Museu de Arte Moderna da Bahia (MAM-BA)",
          url: "http://www.mam.ba.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Ceará",
      sigla: "CE",
      capital: "Fortaleza",
      regiao: "Nordeste",
      artista: "Aldemir Martins",
      biografia: "Pintor, gravador e desenhista cearense nascido no Vale do Cariri, famoso pelo traço expressivo e pelas cores tropicais com que retratou animais, frutas, cangaceiros e o povo nordestino, ao lado de nomes marcantes como Chico da Silva.",
      obra: "Gatos, Cangaceiros e Natureza Brasileira",
      descricao_da_obra: "Obras de linhas marcantes e cores luminosas que transformam figuras da fauna e da cultura popular brasileira em imagens vibrantes.",
      danca: "Maracatu Cearense e Forró",
      instrumentos: [
        "alfaia",
        "ferro (agogô)",
        "caixa",
        "sanfona",
        "zabumba",
        "triângulo"
      ],
      atividade: "Desenhe um animal (como um gato, pássaro ou peixe) preenchendo o corpo dele com linhas rendadas e cores bem quentes e alegres.",
      curiosidade: "Aldemir Martins adorava tanto desenhar gatos coloridos e cheios de padrões que eles se tornaram uma das marcas mais famosas de toda a sua arte!",
      fonte: [
        {
          nome: "Museu da Cultura Cearense - Dragão do Mar",
          url: "http://www.dragaodomar.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Distrito Federal",
      sigla: "DF",
      capital: "Brasília",
      regiao: "Centro-Oeste",
      artista: "Athos Bulcão",
      biografia: "Pintor, escultor e desenhista que marcou profundamente a identidade visual de Brasília com seus painéis de azulejos geométricos integrados à arquitetura moderna.",
      obra: "Painéis de Azulejos de Brasília (Igrejinha Nossa Senhora de Fátima e espaços públicos)",
      descricao_da_obra: "Composições geométricas em azulejos que criam ritmo, movimento e jogos visuais nas paredes e edifícios da capital federal.",
      danca: "Bumba Meu Boi do Seu Teodoro e Seu Estrelo e o Fuá do Terreiro",
      instrumentos: [
        "tambores",
        "pandeirões",
        "matracas",
        "maracás",
        "alfaia"
      ],
      atividade: "Desenhe vários quadrados iguais (como se fossem azulejos) e crie um padrão geométrico repetindo duas ou três formas simples em posições diferentes.",
      curiosidade: "Athos Bulcão gostava de deixar que os próprios operários da construção posicionassem alguns azulejos livremente, criando surpresas visuais nos murais!",
      fonte: [
        {
          nome: "Fundação Athos Bulcão",
          url: "https://www.fundathos.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Espírito Santo",
      sigla: "ES",
      capital: "Vitória",
      regiao: "Sudeste",
      artista: "Homero Massena",
      biografia: "Pintor ligado à história artística capixaba, conhecido por registrar as paisagens, o mar, as montanhas e a luz do Espírito Santo, especialmente em Vila Velha.",
      obra: "Paisagens Capixabas",
      descricao_da_obra: "Pinturas ao ar livre que capturam as cores do litoral, dos morros e da arquitetura histórica capixaba.",
      danca: "Congo Capixaba",
      instrumentos: [
        "casaca",
        "tambores de congo",
        "cuíca",
        "chocalho",
        "apito"
      ],
      atividade: "Desenhe uma paisagem com mar e montanhas ao fundo e crie um instrumento musical imaginário inspirado na casaca capixaba.",
      curiosidade: "A 'casaca' é um instrumento musical tradicional do Espírito Santo feito de madeira e bambu com uma cabecinha esculpida no topo, tocado como um reco-reco!",
      fonte: [
        {
          nome: "Museu de Arte do Espírito Santo Dionísio Del Santo (MAES)",
          url: "https://secult.es.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Goiás",
      sigla: "GO",
      capital: "Goiânia",
      regiao: "Centro-Oeste",
      artista: "Goiandira do Couto",
      biografia: "Artista plástica goiana nascida em Catalão e radicada na Cidade de Goiás, célebre por sua técnica única de pintar paisagens e casarões históricos usando areias coloridas naturais da Serra Dourada, ao lado de nomes importantes como Siron Franco.",
      obra: "Paisagens e Casarões com Areias da Serra Dourada",
      descricao_da_obra: "Quadros feitos sem tinta tradicional, utilizando centenas de tons naturais de areia fixados na tela para retratar a arquitetura colonial e a natureza de Goiás.",
      danca: "Catira",
      instrumentos: [
        "viola caipira",
        "palmas",
        "batidas dos pés"
      ],
      atividade: "Experimente criar um desenho texturizado colando grãos pequenos, terra peneirada ou fazendo pontinhos coloridos bem juntinhos para simular grãos de areia.",
      curiosidade: "Goiandira do Couto catalogou mais de 500 tonalidades diferentes de areia natural retiradas da Serra Dourada para compor suas obras!",
      fonte: [
        {
          nome: "Museu Casa de Cora Coralina / Museus de Goiás",
          url: "https://www.goias.gov.br/cultura/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Maranhão",
      sigla: "MA",
      capital: "São Luís",
      regiao: "Nordeste",
      artista: "Péricles Rocha",
      biografia: "Pintor, aquarelista e escultor maranhense que retratou com cores intensas as ladeiras, os casarões de azulejos e as festas populares de São Luís do Maranhão.",
      obra: "Casarões e Festas Populares do Maranhão",
      descricao_da_obra: "Aquarelas e pinturas vibrantes que celebram a arquitetura histórica e o movimento do Bumba Meu Boi e do Tambor de Crioula.",
      danca: "Bumba Meu Boi do Maranhão e Tambor de Crioula",
      instrumentos: [
        "matraca",
        "pandeirão",
        "tambor-onça",
        "maracá",
        "tambores de crioula"
      ],
      atividade: "Desenhe e decore o couro de um Boi de festa usando estrelas, flores, fitas e cores bem brilhantes.",
      curiosidade: "No Maranhão, o Bumba Meu Boi possui diferentes 'sotaques' (estilos musicais e de dança), como o sotaque de matraca, de zabumba e de orquestra!",
      fonte: [
        {
          nome: "Museu de Artes Visuais do Maranhão",
          url: "https://www.cultura.ma.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Mato Grosso",
      sigla: "MT",
      capital: "Cuiabá",
      regiao: "Centro-Oeste",
      artista: "Gervane de Paula",
      biografia: "Artista visual mato-grossense nascido em Cuiabá, cuja obra dialoga de forma criativa com a natureza do Pantanal, o Cerrado e as transformações culturais da região Centro-Oeste.",
      obra: "Cenas e Cores do Pantanal e Cerrado",
      descricao_da_obra: "Pinturas e instalações de cores fortes que retratam animais pantaneiros, rios, personagens locais e questões ambientais.",
      danca: "Siriri e Cururu",
      instrumentos: [
        "viola de cocho",
        "ganzá",
        "mocho"
      ],
      atividade: "Desenhe os animais e as águas do Pantanal usando cores intensas e crie um instrumento musical inspirado na viola de cocho.",
      curiosidade: "A viola de cocho, usada no Siriri e no Cururu, é esculpida artesanalmente em um único tronco de madeira macia, no formato de um pequeno cocho!",
      fonte: [
        {
          nome: "Museu de Arte e de Cultura Popular da UFMT",
          url: "https://www.ufmt.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Mato Grosso do Sul",
      sigla: "MS",
      capital: "Campo Grande",
      regiao: "Centro-Oeste",
      artista: "Conceição dos Bugres",
      biografia: "Escultora popular radicada no Mato Grosso do Sul que se tornou um ícone da arte sul-mato-grossense ao esculpir na madeira e na cera de abelha os famosos 'Bugrinhos'.",
      obra: "Bugrinhos",
      descricao_da_obra: "Esculturas em madeira recobertas com cera e tinta que homenageiam os povos indígenas e a identidade cultural sul-mato-grossense com formas sintéticas e expressivas.",
      danca: "Chamamé e Cururu",
      instrumentos: [
        "acordeona (sanfona)",
        "violão",
        "viola",
        "contrabaixo"
      ],
      atividade: "Modele com massinha (ou desenhe em 3D) uma pequena escultura humana usando formas simples, arredondadas e expressivas.",
      curiosidade: "Conceição dos Bugres começou esculpindo em uma raiz de mandioca e depois passou a talhar madeira com facão e cobrir as peças com cera de abelha!",
      fonte: [
        {
          nome: "Museu de Arte Contemporânea de Mato Grosso do Sul (MARCO)",
          url: "https://www.fundacaodecultura.ms.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Minas Gerais",
      sigla: "MG",
      capital: "Belo Horizonte",
      regiao: "Sudeste",
      artista: "Aleijadinho (Antônio Francisco Lisboa)",
      biografia: "Escultor, entalhador e arquiteto nascido em Ouro Preto (antiga Vila Rica), considerado o maior mestre do Barroco no Brasil, ao lado de grandes pintores ligados a Minas Gerais como Mestre Ataíde e Alberto da Veiga Guignard.",
      obra: "Conjunto dos Doze Profetas de Congonhas",
      descricao_da_obra: "Conjunto monumental de esculturas em pedra-sabão posicionadas no adro do Santuário do Bom Jesus de Matosinhos, em Congonhas, cheias de movimento, expressão e dramaticidade.",
      danca: "Congado Mineiro e Folia de Reis",
      instrumentos: [
        "caixas de folia",
        "gunga (chocalho de tornozelo)",
        "pandeiro",
        "viola",
        "sanfona"
      ],
      atividade: "Observe como as roupas e os gestos das esculturas de Aleijadinho parecem se mexer com o vento e desenhe um personagem em uma pose cheia de expressão.",
      curiosidade: "Aleijadinho esculpiu dezenas de obras-primas usando a pedra-sabão, uma rocha típica de Minas Gerais que é macia para talhar mas resiste ao tempo por séculos!",
      fonte: [
        {
          nome: "IPHAN - Santuário de Congonhas (Patrimônio Mundial)",
          url: "https://www.gov.br/iphan/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Pará",
      sigla: "PA",
      capital: "Belém",
      regiao: "Norte",
      artista: "Mestre Cardoso e Tradição Ceramista Marajoara",
      biografia: "O Pará destaca-se tanto por artistas modernos como Ismael Nery (nascido em Belém) quanto pela tradição milenar da cerâmica Marajoara e Tapajônica, recriada e preservada por mestres ceramistas paraenses como Mestre Cardoso, de Icoaraci.",
      obra: "Vasos e Grafismos de Inspiração Marajoara",
      descricao_da_obra: "Peças cerâmicas decoradas com labirintos, linhas geométricas simétricas e representações estilizadas da fauna amazônica, como cobras, corujas e tartarugas.",
      danca: "Carimbó",
      instrumentos: [
        "curimbó (tambor de tronco)",
        "maracá",
        "banjo amazônico",
        "flauta",
        "reco-reco"
      ],
      atividade: "Desenhe o formato de um vaso grande e decore-o com linhas geométricas, espirais e caminhos que se repetem em simetria.",
      curiosidade: "No Carimbó paraense, o nome da dança vem do tambor 'curimbó', que na língua tupi significa 'pau que produz som' (curi = pau, mbó = furado/oco)!",
      fonte: [
        {
          nome: "Museu Paraense Emílio Goeldi / Sistema Integrado de Museus do Pará",
          url: "https://www.museu-goeldi.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Paraíba",
      sigla: "PB",
      capital: "João Pessoa",
      regiao: "Nordeste",
      artista: "Flávio Tavares",
      biografia: "Pintor, desenhista e muralista paraibano nascido em João Pessoa, reconhecido por retratar cenas históricas, festas populares e o universo cultural do Nordeste, estado onde também nasceu o célebre pintor histórico Pedro Américo (em Areia).",
      obra: "Cenas e Personagens da Cultura Paraibana",
      descricao_da_obra: "Pinturas figurativas ricas em movimento, cores e narrativas que dialogam com a memória e o imaginário popular da Paraíba.",
      danca: "Coco de Roda e Ciranda",
      instrumentos: [
        "zabumba",
        "ganzá",
        "pandeiro",
        "tamancos de madeira"
      ],
      atividade: "Desenhe uma grande roda de crianças e adultos de mãos dadas dançando na beira da praia ou na praça da cidade.",
      curiosidade: "No Coco de Roda da Paraíba, o som ritmado das batidas dos pés no chão conversa diretamente com a batida da zabumba e do ganzá!",
      fonte: [
        {
          nome: "Fundação Espaço Cultural da Paraíba (FUNESC)",
          url: "https://funesc.pb.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Paraná",
      sigla: "PR",
      capital: "Curitiba",
      regiao: "Sul",
      artista: "Poty Lazzarotto",
      biografia: "Desenhista, gravador e muralista curitibano que criou grandes painéis públicos em azulejo e concreto, retratando a história, os trabalhadores, as araucárias e as lendas do Paraná, ao lado de precursores como Alfredo Andersen.",
      obra: "Murais de Curitiba e Gravuras da Cultura Paranaense",
      descricao_da_obra: "Painéis urbanos e ilustrações de traço expressivo que contam a história dos tropeiros, das matas de araucárias e do cotidiano paranaense.",
      danca: "Fandango Caiçara / Paranaense",
      instrumentos: [
        "rabeca",
        "viola fandangueira",
        "adufe (pandeiro)",
        "tamancos de madeira"
      ],
      atividade: "Desenhe uma paisagem com árvores araucárias (pinheiros-do-paraná) e crie uma história em quadrinhos de três quadros como se fosse um mural.",
      curiosidade: "No Fandango do litoral do Paraná, os homens usam tamancos especiais de madeira de laranjeira para bater os pés no assoalho, transformando o chão em um instrumento musical!",
      fonte: [
        {
          nome: "Museu Oscar Niemeyer (MON)",
          url: "https://www.museuoscarniemeyer.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Pernambuco",
      sigla: "PE",
      capital: "Recife",
      regiao: "Nordeste",
      artista: "Mestre Vitalino",
      biografia: "Ceramista popular pernambucano nascido em Caruaru que transformou a arte figurativa em barro do Alto do Moura em símbolo mundial da cultura nordestina, ao lado de grandes artistas pernambucanos como J. Borges e Francisco Brennand.",
      obra: "Bonecos de Barro do Cotidiano Nordestino (Banda de Pífanos, Bumba Meu Boi e Retirantes)",
      descricao_da_obra: "Esculturas em argila que retratam músicos, famílias do sertão, festas populares, animais e profissões com grande expressividade e riqueza narrativa.",
      danca: "Frevo e Maracatu",
      instrumentos: [
        "trompete",
        "trombone",
        "saxofone",
        "tuba",
        "caixa",
        "surdo",
        "alfaia"
      ],
      atividade: "Modele com massinha ou desenhe um grupo de músicos tocando instrumentos bem alegres, ou crie uma sombrinha de Frevo bem colorida!",
      curiosidade: "O Frevo pernambucano tem mais de 120 passos acrobáticos catalogados (como 'dobradiça', 'tesoura' e 'ferrolho') e é Patrimônio Imaterial da Humanidade!",
      fonte: [
        {
          nome: "Museu do Barro de Caruaru / Paço do Frevo",
          url: "https://pacodofrevo.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Piauí",
      sigla: "PI",
      capital: "Teresina",
      regiao: "Nordeste",
      artista: "Mestre Dezinho",
      biografia: "Escultor piauiense considerado o patriarca da arte santeira em madeira de Teresina, além de o Piauí abrigar um dos maiores tesouros de arte rupestre pré-histórica do mundo na Serra da Capivara.",
      obra: "Esculturas em Madeira da Arte Santeira Piauiense",
      descricao_da_obra: "Esculturas entalhadas em madeira de cedro e umburana, marcadas por linhas simétricas, rendilhados na madeira e expressões serenas.",
      danca: "Reisado Piauiense e Cavalo Piancó",
      instrumentos: [
        "sanfona",
        "zabumba",
        "triângulo",
        "pandeiro",
        "palmas"
      ],
      atividade: "Faça um desenho inspirado nas pinturas rupestres da Serra da Capivara, mostrando pequenas figuras em movimento brincando, dançando e correndo.",
      curiosidade: "No Parque Nacional da Serra da Capivara, no Piauí, existem milhares de pinturas feitas nas rochas há milhares de anos pelos primeiros habitantes das Américas!",
      fonte: [
        {
          nome: "Museu do Piauí / Fundação Museu do Homem Americano (FUMDHAM)",
          url: "http://fumdham.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Rio de Janeiro",
      sigla: "RJ",
      capital: "Rio de Janeiro",
      regiao: "Sudeste",
      artista: "Heitor dos Prazeres",
      biografia: "Pintor, compositor e sambista carioca autodidata que retratou com cores vibrantes as rodas de samba, as festas populares, as crianças brincando e a vida nas comunidades do Rio de Janeiro, ao lado de grandes nomes cariocas como Di Cavalcanti.",
      obra: "Rodas de Samba e Festas Cariocas",
      descricao_da_obra: "Pinturas alegres e cheias de ritmo em que os personagens aparecem dançando com os rostos voltados para o alto e roupas coloridas.",
      danca: "Samba Carioca e Jongo",
      instrumentos: [
        "cavaquinho",
        "pandeiro",
        "surdo",
        "tamborim",
        "cuíca",
        "violão"
      ],
      atividade: "Desenhe pessoas dançando ou tocando instrumentos musicais de um jeito que até as roupas e o cenário pareçam estar se mexendo no ritmo da música!",
      curiosidade: "Heitor dos Prazeres era ao mesmo tempo um grande pintor e um grande músico: ele participou da fundação das primeiras escolas de samba do Rio de Janeiro!",
      fonte: [
        {
          nome: "Museu de Arte do Rio (MAR)",
          url: "https://museudeartedorio.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Rio Grande do Norte",
      sigla: "RN",
      capital: "Natal",
      regiao: "Nordeste",
      artista: "Newton Navarro",
      biografia: "Pintor, desenhista e escritor potiguar nascido em Natal, fundamental para a arte moderna no Rio Grande do Norte ao retratar jangadeiros, dunas, cavalos-marinhos e manifestações populares ao lado de artistas como Dorian Gray Caldas.",
      obra: "Jangadeiros e Folguedos Potiguares",
      descricao_da_obra: "Desenhos e pinturas de linhas poéticas e cores luminosas que celebram o mar, os ventos e as tradições culturais do litoral potiguar.",
      danca: "Pastoril e Coco de Zambê",
      instrumentos: [
        "tambor zambê",
        "pandeiro",
        "ganzá",
        "sanfona"
      ],
      atividade: "Desenhe uma praia com dunas de areia, o mar azul e jangadas com velas coloridas sopradas pelo vento.",
      curiosidade: "O Coco de Zambê, tradicional do litoral sul do Rio Grande do Norte, é tocado com tambores feitos de tronco de árvore chamados 'zambê'!",
      fonte: [
        {
          nome: "Pinacoteca do Estado do Rio Grande do Norte",
          url: "http://www.cultura.rn.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Rio Grande do Sul",
      sigla: "RS",
      capital: "Porto Alegre",
      regiao: "Sul",
      artista: "Iberê Camargo",
      biografia: "Pintor, gravador e professor gaúcho nascido em Restinga Seca, considerado um dos grandes mestres do expressionismo e da arte moderna brasileira no século XX.",
      obra: "Série Carretéis e Ciclistas",
      descricao_da_obra: "Pinturas de pinceladas intensas e expressivas que transformam memórias de infância, como carretéis de linha na mesa de costura da mãe, em formas artísticas profundas.",
      danca: "Chula e Dança do Pezinho",
      instrumentos: [
        "gaita (acordeona)",
        "violão",
        "bombo legüero"
      ],
      atividade: "Escolha um brinquedo ou objeto simples da sua casa (como um carretel, pião ou bicicleta) e faça um desenho usando pinceladas ou traços bem fortes e expressivos.",
      curiosidade: "Na dança gaúcha da Chula, os dançarinos realizam passos ágeis de sapateado por cima de uma lança de madeira colocada no chão sem nunca encostar nela!",
      fonte: [
        {
          nome: "Fundação Iberê Camargo",
          url: "https://iberecamargo.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Rondônia",
      sigla: "RO",
      capital: "Porto Velho",
      regiao: "Norte",
      artista: "Produção Artística Ribeirinha e Indígena de Rondônia",
      biografia: "A produção artística de Rondônia destaca-se pelas pinturas que retratam o Rio Madeira, a histórica Estrada de Ferro Madeira-Mamoré e pela rica arte plumária, cestaria e grafismos dos povos indígenas do estado, como os Suruí Paiter e Karitiana.",
      obra: "Memórias do Rio Madeira e Grafismos Amazônicos",
      descricao_da_obra: "Obras visuais que unem a memória histórica amazônica às cores da floresta, dos rios e dos saberes tradicionais dos povos originários e ribeirinhos.",
      danca: "Boi-Bumbá (Duelo na Fronteira) e Siriri Amazônico",
      instrumentos: [
        "tambores",
        "maracás",
        "flautas de bambu",
        "chocalhos"
      ],
      atividade: "Crie um desenho que mostre um grande rio cortando a floresta e conectando diferentes comunidades e histórias.",
      curiosidade: "Em Guajará-Mirim, em Rondônia, acontece o tradicional festival folclórico 'Duelo na Fronteira', celebrando a cultura amazônica na divisa do Brasil com a Bolívia!",
      fonte: [
        {
          nome: "Superintendência Estadual da Juventude, Cultura, Esporte e Lazer de Rondônia",
          url: "https://rondonia.ro.gov.br/sejucel/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Roraima",
      sigla: "RR",
      capital: "Boa Vista",
      regiao: "Norte",
      artista: "Jaider Esbell",
      biografia: "Artista indígena contemporâneo do povo Makuxi, nascido em Normandia, Roraima, reconhecido internacionalmente como curador, escritor e pintor que levou a arte indígena contemporânea para grandes museus e bienais.",
      obra: "Entidades e Cosmologia Makuxi",
      descricao_da_obra: "Pinturas vibrantes sobre fundos escuros com linhas luminosas e coloridas que representam a floresta, as águas, a cobra grande e a conexão espiritual entre os povos indígenas e a natureza.",
      danca: "Parixara",
      instrumentos: [
        "maracás",
        "flautas de bambu",
        "tambores",
        "chocalhos de sementes"
      ],
      atividade: "Crie uma imagem que represente a relação entre uma comunidade e seu território.",
      curiosidade: "Jaider Esbell levou referências da cosmologia Makuxi para importantes espaços da arte contemporânea.",
      fonte: [
        {
          nome: "Museu de Arte Moderna de São Paulo",
          url: "https://mam.org.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Santa Catarina",
      sigla: "SC",
      capital: "Florianópolis",
      regiao: "Sul",
      artista: "Victor Meirelles",
      biografia: "Pintor catarinense de grande importância na pintura histórica brasileira, formado na Academia Imperial de Belas Artes.",
      obra: "Primeira Missa no Brasil",
      descricao_da_obra: "Grande pintura histórica que representa a missa celebrada em 1500, construída com composição monumental e muitos personagens.",
      danca: "Boi de Mamão",
      instrumentos: [
        "viola",
        "pandeiro",
        "caixa",
        "rabeca"
      ],
      atividade: "Observe uma pintura histórica e imagine como seria contar a mesma história de outro ponto de vista.",
      curiosidade: "Victor Meirelles nasceu em Desterro, atual Florianópolis.",
      fonte: [
        {
          nome: "Museu Nacional de Belas Artes",
          url: "https://mnba.gov.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "São Paulo",
      sigla: "SP",
      capital: "São Paulo",
      regiao: "Sudeste",
      artista: "Tarsila do Amaral",
      biografia: "Uma das figuras centrais do modernismo brasileiro, nascida em Capivari, São Paulo, e conhecida por obras que reinventaram imagens do Brasil.",
      obra: "Abaporu",
      descricao_da_obra: "Figura de formas ampliadas e cores marcantes tornou-se um dos símbolos mais conhecidos do modernismo brasileiro.",
      danca: "Samba de Bumbo",
      instrumentos: [
        "bumbo",
        "caixa",
        "chocalhos"
      ],
      atividade: "Crie uma personagem com partes do corpo propositalmente grandes ou pequenas.",
      curiosidade: "O nome Abaporu vem do tupi e costuma ser traduzido como 'homem que come gente'.",
      fonte: [
        {
          nome: "Museu de Arte Latino-Americana de Buenos Aires / MALBA",
          "url": "https://www.malba.org.ar/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Sergipe",
      sigla: "SE",
      capital: "Aracaju",
      regiao: "Nordeste",
      artista: "J. Inácio",
      biografia: "Artista sergipano ligado à pintura e ao registro de paisagens, personagens e aspectos da cultura local.",
      obra: "Paisagens e tipos sergipanos",
      descricao_da_obra: "A produção registra ambientes e figuras do cotidiano sergipano.",
      danca: "Samba de Pareia",
      instrumentos: [
        "tambores",
        "pandeiros",
        "palmas"
      ],
      atividade: "Observe pessoas em movimento e transforme suas posições em uma sequência de desenhos.",
      curiosidade: "A produção visual sergipana dialoga fortemente com festas, paisagens e manifestações populares.",
      fonte: [
        {
          nome: "Museu da Gente Sergipana",
          url: "https://www.museudagentesergipana.com.br/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    },
    {
      estado: "Tocantins",
      sigla: "TO",
      capital: "Palmas",
      regiao: "Norte",
      artista: "Daiara Tukano",
      biografia: "Artista indígena contemporânea, educadora e pesquisadora ligada à produção visual indígena brasileira. Sua presença aqui representa uma abordagem ampliada das artes indígenas contemporâneas no território brasileiro.",
      obra: "Produções visuais inspiradas na cosmologia indígena",
      descricao_da_obra: "Grafismos, símbolos, cores e narrativas indígenas podem ser utilizados para discutir identidade, território e memória.",
      danca: "Sússia",
      instrumentos: [
        "tambores",
        "pandeiros",
        "palmas"
      ],
      atividade: "Crie um grafismo inspirado em elementos da natureza, sem copiar grafismos tradicionais de povos específicos.",
      curiosidade: "Para uma versão final, a curadoria deve priorizar um artista nascido ou radicado no Tocantins, mantendo Daiara Tukano como referência para o eixo nacional de arte indígena.",
      fonte: [
        {
          nome: "Ministério da Cultura",
          url: "https://www.gov.br/cultura/"
        }
      ],
      tipo_de_selecao: "artista representativo do estado ou fortemente ligado à sua identidade cultural",
      observacao_curatorial: "A associação entre artista e estado é uma escolha pedagógica/curatorial e não significa que o artista represente sozinho a produção artística do estado."
    }
  ]
};

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contemTermoIsolado(textoNorm: string, termoNorm: string): boolean {
  const escaped = termoNorm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(?:^|\\s)${escaped}(?:$|\\s)`, "i");
  return regex.test(textoNorm);
}

const MAPA_ALIASES_ESTADOS: Record<string, string[]> = {
  AC: ["acre", "acreano", "acreana", "rio branco", "helio melo", "dança do caiari", "danca do caiari"],
  AL: ["alagoas", "alagoano", "alagoana", "maceio", "rosalvo ribeiro", "guerreiro alagoano"],
  AP: ["amapa", "amapaense", "macapa", "raimundo braga", "r peixe", "marabaixo"],
  AM: ["amazonas", "amazonense", "manaus", "parintins", "moacir andrade", "boi bumba", "boi-bumba", "ciranda amazonica"],
  BA: ["bahia", "baiano", "baiana", "salvador", "reconcavo baiano", "rubem valentim", "samba de roda"],
  CE: ["ceara", "cearense", "fortaleza", "aldemir martins", "maracatu cearense"],
  DF: ["distrito federal", "brasilia", "brasiliense", "athos bulcao", "seu estrelo", "boi do seu teodoro"],
  ES: ["espirito santo", "capixaba", "congo capixaba", "homero massena", "casaca capixaba"],
  GO: ["goias", "goiano", "goiana", "goiania", "goiandira do couto", "serra dourada"],
  MA: ["maranhao", "maranhense", "sao luis", "pericles rocha", "bumba meu boi do maranhao", "tambor de crioula"],
  MT: ["mato grosso", "mato-grossense", "cuiaba", "gervane de paula", "siriri", "cururu", "viola de cocho"],
  MS: ["mato grosso do sul", "sul-mato-grossense", "campo grande", "conceicao dos bugres", "bugrinhos", "chamame"],
  MG: ["minas gerais", "mineiro", "mineira", "belo horizonte", "congonhas", "ouro preto", "aleijadinho", "congado mineiro", "doze profetas"],
  PA: ["no para", "do para", "estado do para", "paraense", "belem", "marajoara", "mestre cardoso", "ismael nery", "carimbo"],
  PB: ["paraiba", "paraibano", "paraibana", "joao pessoa", "flavio tavares", "coco de roda"],
  PR: ["parana", "paranaense", "curitiba", "poty lazzarotto", "fandango caicara", "fandango paranaense"],
  PE: ["pernambuco", "pernambucano", "pernambucana", "recife", "caruaru", "mestre vitalino", "alto do moura"],
  PI: ["piaui", "piauiense", "teresina", "mestre dezinho", "arte santeira", "cavalo pianco", "reisado piauiense", "serra da capivara"],
  RJ: ["rio de janeiro", "carioca", "fluminense", "heitor dos prazeres", "samba carioca"],
  RN: ["rio grande do norte", "potiguar", "natal", "newton navarro", "coco de zambe", "pastoril"],
  RS: ["rio grande do sul", "gaucho", "gaucha", "porto alegre", "ibere camargo", "danca do pezinho", "chula"],
  RO: ["rondonia", "rondoniense", "porto velho", "madeira-mamore", "duelo na fronteira"],
  RR: ["roraima", "roraimense", "boa vista", "jaider esbell", "parixara", "cosmologia makuxi"],
  SC: ["santa catarina", "catarinense", "florianopolis", "desterro", "victor meirelles", "boi de mamao", "primeira missa no brasil"],
  SP: ["sao paulo", "paulista", "paulistano", "capivari", "samba de bumbo"],
  SE: ["sergipe", "sergipano", "sergipana", "aracaju", "j inacio", "j. inacio", "samba de pareia", "tipos sergipanos"],
  TO: ["tocantins", "tocantinense", "palmas", "daiara tukano", "sussia"]
};

function identificarEstadoNaMensagem(mensagemOriginal: string, normMsg: string): EstadoCulturalRegistro | null {
  // Caso especial para "Pará" com acento explícito na mensagem original
  if (/(?:^|\s|de|do|no|em)pará(?:$|\s|[?!.,])/i.test(mensagemOriginal)) {
    const estadoPA = BANCO_ESTADOS_BRASIL.estados.find(e => e.sigla === "PA");
    if (estadoPA) return estadoPA;
  }

  // Checar Mato Grosso do Sul antes de Mato Grosso, e Rio Grande do Norte/Sul antes de outros
  const ordemPrioridadeSiglas = [
    "MS", "MT", "RN", "RS", "RJ", "DF", "ES", "MG", "SC", "SP", "SE", "TO",
    "RR", "RO", "PR", "PE", "PB", "PI", "PA", "MA", "GO", "CE", "BA", "AM", "AP", "AL", "AC"
  ];

  let melhorEstado: EstadoCulturalRegistro | null = null;
  let maiorTamanhoAlias = 0;

  for (const sigla of ordemPrioridadeSiglas) {
    const aliases = MAPA_ALIASES_ESTADOS[sigla] || [];
    for (const alias of aliases) {
      const aliasNorm = normalizar(alias);
      if (aliasNorm && contemTermoIsolado(normMsg, aliasNorm)) {
        if (aliasNorm.length > maiorTamanhoAlias) {
          maiorTamanhoAlias = aliasNorm.length;
          melhorEstado = BANCO_ESTADOS_BRASIL.estados.find(e => e.sigla === sigla) || null;
        }
      }
    }
  }

  // Também checa "em minas" ou "de minas" quando se refere a Minas Gerais
  if (!melhorEstado && (contemTermoIsolado(normMsg, "de minas") || contemTermoIsolado(normMsg, "em minas") || contemTermoIsolado(normMsg, "estado de minas"))) {
    melhorEstado = BANCO_ESTADOS_BRASIL.estados.find(e => e.sigla === "MG") || null;
  }

  return melhorEstado;
}

function identificarRegiaoNaMensagem(normMsg: string): "Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul" | null {
  // Evitar falsos positivos internacionais ou geográficos gerais
  const falsosPositivos = [
    "coreia do norte", "coreia do sul", "america do norte", "america do sul",
    "africa do sul", "polo norte", "polo sul", "irlanda do norte", "vento norte", "vento sul"
  ];
  for (const fp of falsosPositivos) {
    if (normMsg.includes(fp)) return null;
  }

  if (contemTermoIsolado(normMsg, "centro oeste") || contemTermoIsolado(normMsg, "centro-oeste")) {
    return "Centro-Oeste";
  }
  if (contemTermoIsolado(normMsg, "nordeste") || contemTermoIsolado(normMsg, "nordestino") || contemTermoIsolado(normMsg, "nordestina") || contemTermoIsolado(normMsg, "nordestinos") || contemTermoIsolado(normMsg, "nordestinas")) {
    return "Nordeste";
  }
  if (contemTermoIsolado(normMsg, "sudeste")) {
    return "Sudeste";
  }
  if (
    contemTermoIsolado(normMsg, "regiao norte") ||
    contemTermoIsolado(normMsg, "no norte") ||
    contemTermoIsolado(normMsg, "do norte") ||
    contemTermoIsolado(normMsg, "norte do brasil")
  ) {
    return "Norte";
  }
  if (
    contemTermoIsolado(normMsg, "regiao sul") ||
    contemTermoIsolado(normMsg, "no sul") ||
    contemTermoIsolado(normMsg, "do sul") ||
    contemTermoIsolado(normMsg, "sul do brasil") ||
    contemTermoIsolado(normMsg, "sulista")
  ) {
    return "Sul";
  }

  return null;
}

export function resolverCulturaEstadosRegioes(mensagem: string): { reply: string; matchedKey: string } | null {
  if (!mensagem) return null;
  const normMsg = normalizar(mensagem);
  if (!normMsg) return null;

  const pedeDanca =
    contemTermoIsolado(normMsg, "danca") ||
    contemTermoIsolado(normMsg, "dancas") ||
    contemTermoIsolado(normMsg, "ritmo") ||
    contemTermoIsolado(normMsg, "ritmos") ||
    contemTermoIsolado(normMsg, "bailado") ||
    contemTermoIsolado(normMsg, "folclore") ||
    contemTermoIsolado(normMsg, "festa popular") ||
    contemTermoIsolado(normMsg, "festas populares");

  const pedeArtista =
    contemTermoIsolado(normMsg, "artista") ||
    contemTermoIsolado(normMsg, "artistas") ||
    contemTermoIsolado(normMsg, "pintor") ||
    contemTermoIsolado(normMsg, "pintora") ||
    contemTermoIsolado(normMsg, "pintores") ||
    contemTermoIsolado(normMsg, "escultor") ||
    contemTermoIsolado(normMsg, "escultora") ||
    contemTermoIsolado(normMsg, "representativo") ||
    contemTermoIsolado(normMsg, "quem pintou");

  const pedeObra =
    contemTermoIsolado(normMsg, "obra") ||
    contemTermoIsolado(normMsg, "obras") ||
    contemTermoIsolado(normMsg, "quadro") ||
    contemTermoIsolado(normMsg, "quadros") ||
    contemTermoIsolado(normMsg, "pintura") ||
    contemTermoIsolado(normMsg, "pinturas") ||
    contemTermoIsolado(normMsg, "escultura") ||
    contemTermoIsolado(normMsg, "esculturas");

  const pedeInstrumento =
    contemTermoIsolado(normMsg, "instrumento") ||
    contemTermoIsolado(normMsg, "instrumentos") ||
    contemTermoIsolado(normMsg, "musica") ||
    contemTermoIsolado(normMsg, "musical") ||
    contemTermoIsolado(normMsg, "musicais");

  const pedeAtividade =
    contemTermoIsolado(normMsg, "atividade") ||
    contemTermoIsolado(normMsg, "desafio") ||
    contemTermoIsolado(normMsg, "exercicio") ||
    contemTermoIsolado(normMsg, "pratica");

  const pedeCuriosidade =
    contemTermoIsolado(normMsg, "curiosidade") ||
    contemTermoIsolado(normMsg, "curiosidades") ||
    contemTermoIsolado(normMsg, "segredo") ||
    contemTermoIsolado(normMsg, "voce sabia");

  // 1. Verificar se a pergunta é sobre um ESTADO específico
  const estadoEncontrado = identificarEstadoNaMensagem(mensagem, normMsg);

  if (estadoEncontrado) {
    // Se a pergunta menciona apenas "rio de janeiro" ou "são paulo" ou "bahia" dentro de uma pergunta que já tem tópico próprio como "samba" isolado?
    // Não! Quando a criança pergunta especificamente sobre o estado ("qual a dança da Bahia", "qual o artista de Minas Gerais", "me fale sobre Santa Catarina", "quem foi Victor Meirelles", "o que é Boi de Mamão"), construímos uma resposta dialógica e acolhedora!
    const e = estadoEncontrado;
    const listaInstrumentos = e.instrumentos.join(", ");
    const fontesTexto = e.fonte.map(f => `${f.nome} (${f.url})`).join(" | ");

    // Caso A: Foco apenas em DANÇA e/ou INSTRUMENTOS do Estado
    if ((pedeDanca || pedeInstrumento) && !pedeArtista && !pedeObra) {
      const reply =
        `💃🎶 Que viagem musical maravilhosa até **${e.estado} (${e.sigla})**, cuja capital é **${e.capital}**, na região **${e.regiao}**!\n\n` +
        `Uma das manifestações e danças mais famosas e queridas ligadas à identidade cultural de **${e.estado}** é: **${e.danca}**! 🌟\n\n` +
        `🥁 **Quais instrumentos dão ritmo a essa dança?**\n` +
        `Para fazer todo mundo se movimentar, costumam ser usados instrumentos como: **${listaInstrumentos}**.\n\n` +
        `🎨 **Pontes com as Artes Visuais em ${e.estado}:**\n` +
        `Sabia que a música e a pintura caminham juntas na cultura de cada lugar? Na nossa curadoria pedagógica, um artista muito representativo ligado a **${e.estado}** é **${e.artista}**, autor de *${e.obra}* (${e.descricao_da_obra.charAt(0).toLowerCase() + e.descricao_da_obra.slice(1)})\n\n` +
        `🤓 **Curiosidade cultural:**\n` +
        `${e.curiosidade}\n\n` +
        `✏️ **Vamos experimentar juntos?**\n` +
        `${e.atividade}\n\n` +
        `*(Fonte de pesquisa: ${fontesTexto})*\n\n` +
        `E aí, você já tinha ouvido o som de **${listaInstrumentos}** ou visto alguém dançar **${e.danca}**? Qual outro estado ou ritmo você quer explorar comigo agora? 😊`;

      return {
        reply,
        matchedKey: `estado_cultura_${e.sigla.toLowerCase()}`
      };
    }

    // Caso B: Foco apenas em ARTISTA e/ou OBRA do Estado
    if ((pedeArtista || pedeObra) && !pedeDanca && !pedeInstrumento) {
      const reply =
        `🎨✨ Que pergunta incrível sobre a arte de **${e.estado} (${e.sigla})**, na região **${e.regiao}** (capital **${e.capital}** )!\n\n` +
        `Na nossa seleção pedagógica, o artista destacado como grande referência ligada à identidade cultural de **${e.estado}** é **${e.artista}**!\n` +
        `*(💡 Vale lembrar que ${e.observacao_curatorial.charAt(0).toLowerCase() + e.observacao_curatorial.slice(1)})*\n\n` +
        `👩‍🎨 **Quem é ${e.artista}?**\n` +
        `${e.biografia}\n\n` +
        `🖼️ **Obra em destaque — *${e.obra}*:**\n` +
        `${e.descricao_da_obra}\n\n` +
        `🤓 **Curiosidade:**\n` +
        `${e.curiosidade}\n\n` +
        `💃 **E no ritmo da cultura local:**\n` +
        `Em **${e.estado}**, também brilha a dança **${e.danca}**, acompanhada por instrumentos como **${listaInstrumentos}**!\n\n` +
        `✏️ **Convite criativo do Candinho:**\n` +
        `${e.atividade}\n\n` +
        `*(Fonte de referência: ${fontesTexto})*\n\n` +
        `O que mais chamou a sua atenção na obra *${e.obra}* de **${e.artista}**? Se você fosse criar algo inspirado em **${e.estado}**, como começaria o seu desenho? 🎨😊`;

      return {
        reply,
        matchedKey: `estado_cultura_${e.sigla.toLowerCase()}`
      };
    }

    // Caso C: Foco em ATIVIDADE, CURIOSIDADE, múltiplos aspectos (dança + artista + obra) ou Conversa Geral sobre o Estado
    const reply =
      `🗺️🎨 Vamos fazer um passeio cultural por **${e.estado} (${e.sigla})**, estado da região **${e.regiao}** cuja capital é **${e.capital}**!\n\n` +
      `🌟 **Artista em destaque:** **${e.artista}**\n` +
      `${e.biografia}\n` +
      `*(Nota curatorial: ${e.observacao_curatorial})*\n\n` +
      `🖼️ **Obra para conhecer — *${e.obra}*:**\n` +
      `${e.descricao_da_obra}\n\n` +
      `💃 **Dança tradicional:** **${e.danca}**\n` +
      `🥁 **Instrumentos presentes:** ${listaInstrumentos}.\n\n` +
      `🤓 **Curiosidade:**\n` +
      `${e.curiosidade}\n\n` +
      `✏️ **Atividade artística para você experimentar:**\n` +
      `${e.atividade}\n\n` +
      `*(Fonte: ${fontesTexto})*\n\n` +
      `Me conta: você gostou mais de conhecer a arte de **${e.artista}**, o ritmo de **${e.danca}** ou quer tentar fazer essa atividade agora comigo? 😄✨`;

    return {
      reply,
      matchedKey: `estado_cultura_${e.sigla.toLowerCase()}`
    };
  }

  // 2. Verificar se a pergunta é sobre uma REGIÃO do Brasil (Norte, Nordeste, Centro-Oeste, Sudeste, Sul)
  const regiaoEncontrada = identificarRegiaoNaMensagem(normMsg);
  if (regiaoEncontrada) {
    const estadosDaRegiao = BANCO_ESTADOS_BRASIL.estados.filter(e => e.regiao === regiaoEncontrada);

    // Se a pergunta for apenas sobre as DANÇAS ou INSTRUMENTOS da região (ex.: "Qual a dança mais popular ou famosa do Nordeste?")
    if ((pedeDanca || pedeInstrumento) && !pedeArtista && !pedeObra) {
      const listaDancas = estadosDaRegiao
        .map(e => `• **${e.estado} (${e.sigla}):** *${e.danca}* — ao som de ${e.instrumentos.join(", ")}.`)
        .join("\n");

      const exemploDestaque = estadosDaRegiao[0];
      const reply =
        `💃🥁 A região **${regiaoEncontrada}** é tão rica e diversa que não existe apenas uma única dança famosa, mas um verdadeiro tesouro de ritmos que encantam o Brasil inteiro!\n\n` +
        `Olha só as danças mais populares e representativas de cada estado da região **${regiaoEncontrada}** na nossa curadoria cultural:\n\n` +
        `${listaDancas}\n\n` +
        `✨ **Sabia disso?**\n` +
        `Em **${exemploDestaque.estado}**, por exemplo, ${exemploDestaque.curiosidade.charAt(0).toLowerCase() + exemploDestaque.curiosidade.slice(1)}\n\n` +
        `Qual dessas danças da região **${regiaoEncontrada}** mais deu vontade de conhecer ou desenhar? Se você escolher um desses estados, eu te conto tudo sobre o artista, a obra e uma atividade super divertida dele! 🎨😊`;

      return {
        reply,
        matchedKey: `regiao_cultura_${normalizar(regiaoEncontrada)}`
      };
    }

    // Se a pergunta for apenas sobre os ARTISTAS ou OBRAS da região (ex.: "Quais os artistas e obras mais famosos do Sudeste / Nordeste / Sul?")
    if ((pedeArtista || pedeObra) && !pedeDanca && !pedeInstrumento) {
      const listaArtistas = estadosDaRegiao
        .map(e => `• **${e.estado} (${e.sigla}):** **${e.artista}** — Obra em destaque: *${e.obra}* (${e.descricao_da_obra})`)
        .join("\n\n");

      const reply =
        `🎨🌟 A região **${regiaoEncontrada}** reúne artistas extraordinários que ajudam a contar a história e a identidade do Brasil!\n` +
        `*(Lembrando sempre que a escolha de um artista por estado é pedagógica e curatorial, pois cada estado tem muitos criadores incríveis!)*\n\n` +
        `Veja os artistas e obras representativos de cada estado da região **${regiaoEncontrada}**:\n\n` +
        `${listaArtistas}\n\n` +
        `Qual desses artistas ou obras da região **${regiaoEncontrada}** despertou mais a sua curiosidade? Me diga o nome de um estado ou artista que nós conversamos mais e fazemos uma atividade criativa juntos! 🖌️😄`;

      return {
        reply,
        matchedKey: `regiao_cultura_${normalizar(regiaoEncontrada)}`
      };
    }

    // Panorama completo da região (danças, artistas e obras)
    const panorama = estadosDaRegiao
      .map(e => `• **${e.estado} (${e.capital}):** Artista **${e.artista}** (*${e.obra}*) | Dança: **${e.danca}** (${e.instrumentos.slice(0, 3).join(", ")})`)
      .join("\n");

    const reply =
      `🗺️✨ Que alegria explorar a cultura da região **${regiaoEncontrada}** com você! Ela é formada por **${estadosDaRegiao.length} unidades federativas**, cada uma com cores, obras, artistas e danças fascinantes:\n\n` +
      `${panorama}\n\n` +
      `*(💡 Nota curatorial: cada artista e dança foi escolhido pedagogicamente para dialogar com a identidade cultural do estado, representando uma porta de entrada para muitas outras expressões!)*\n\n` +
      `Por qual estado da região **${regiaoEncontrada}** você quer começar a nossa viagem artística hoje? Posso te contar curiosidades, falar das obras ou propor um desafio de desenho! 🎨😊`;

    return {
      reply,
      matchedKey: `regiao_cultura_${normalizar(regiaoEncontrada)}`
    };
  }

  // 3. Verificar se a criança perguntou de modo geral sobre "danças dos estados do Brasil" ou "artistas dos 27 estados"
  const mencionaEstadosBrasil =
    (contemTermoIsolado(normMsg, "estados") || contemTermoIsolado(normMsg, "regioes") || contemTermoIsolado(normMsg, "27 estados")) &&
    (pedeDanca || pedeArtista || pedeObra || pedeInstrumento || contemTermoIsolado(normMsg, "brasil"));

  if (mencionaEstadosBrasil) {
    const regioes: Array<"Norte" | "Nordeste" | "Centro-Oeste" | "Sudeste" | "Sul"> = [
      "Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"
    ];
    const resumoRegioes = regioes.map(reg => {
      const ests = BANCO_ESTADOS_BRASIL.estados.filter(e => e.regiao === reg);
      const exemplos = ests.slice(0, 3).map(e => `${e.estado} (${e.artista} / ${e.danca})`).join(", ");
      return `• **Região ${reg}** (${ests.length} estados): como ${exemplos}...`;
    }).join("\n");

    const reply =
      `🇧🇷🎨 Eu tenho na minha memória cultural os **27 registros das Unidades Federativas do Brasil** (os 26 estados e o Distrito Federal), com suas capitais, regiões, artistas representativos, obras, danças tradicionais, instrumentos, curiosidades e atividades criativas!\n\n` +
      `Veja um gostinho do que podemos explorar pelas 5 regiões:\n\n` +
      `${resumoRegioes}\n\n` +
      `Me pergunte sobre qualquer estado (como *"Qual a dança mais famosa da Bahia?"*, *"Qual o artista representativo de Minas Gerais?"*, *"Me fale sobre Santa Catarina"*) ou sobre qualquer região (como *"Quais as danças do Nordeste?"*)! Qual estado ou região você quer descobrir primeiro? 😊✨`;

    return {
      reply,
      matchedKey: "estados_brasil_panorama"
    };
  }

  return null;
}

