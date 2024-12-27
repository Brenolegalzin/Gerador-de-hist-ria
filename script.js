const nomes = [
    "Gabriel", "Lucas", "Mateus", "Miguel", "Arthur", "Pedro", "Rafael", "Gustavo", "João", "Henrique",
    "Carlos", "Eduardo", "Felipe", "Bruno", "Thiago", "Daniel", "Rodrigo", "Leonardo", "Diego", "Vinícius",
    "André", "Ricardo", "Alexandre", "Fernando", "Marcos", "Luiz", "Samuel", "Antônio", "Caio", "Juliano",
    "Victor", "Igor", "Otávio", "Adriano", "Elias", "Renato", "Rogério", "Marcelo", "Fábio", "Hugo",
    "Alex", "Douglas", "Evandro", "Vitor", "Flávio", "Cristiano", "Ruan", "Nicolas", "Murilo", "Matheus",
    "Alessandro", "Jonathan", "Leandro", "Maurício", "Emerson", "Luan", "Danilo", "Augusto", "Paulo", "Davi",
    "Roberto", "Francisco", "Brayan", "Alfredo", "Érico", "Emanuel", "Breno", "Alan", "Ramon", "Otto",
    "Yuri", "Raul", "César", "Jonas", "Sérgio", "Ivan", "Orlando", "Joaquim", "Vicente", "Estevão",
    "Álvaro", "Alisson", "Lorenzo", "Enzo", "Tiago", "Sandro", "Hélio", "Gilberto", "Silvio", "Eurico",
    "Josué", "Edivaldo", "Osvaldo", "Renan", "Afonso", "Benício", "Dylan", "Estêvão", "Cauã", "Gael",
    "Zeca", "Heitor", "Sebastião", "Dante", "Anselmo", "Cristóvão", "Rômulo", "Jorge", "Abel", "Tales",
    "Edson", "Wallace", "Saulo", "Cláudio", "Marcel", "Jefferson", "Júnior", "Julio", "Cristian", "Luciano",
    "Amaro", "Lázaro", "Caetano", "Teodoro", "Éverton", "Eliel", "Benedito", "Joabe", "Márcio", "Derick",
    "Israel", "Tomás", "Romildo", "Edgar", "Fabrício", "Natan", "Rian", "Salvador", "Josias", "Dan",
    "Kevin", "William", "Moisés", "Kauê", "Ismael", "Kaique", "Érico", "Dener", "Enrique", "Ricardinho",
    "Félix", "Darlan", "Arnaldo", "Celso", "Italo", "Raoni", "Eliseu", "Tobias", "Ariel", "Caíque",
    "Gilmar", "Valdir", "Ezequiel", "Osmar", "Renê", "Edilson", "Edmilson", "Cássio", "Laércio", "Clécio",
    "Eugênio", "Adalberto", "Haroldo", "Osório", "Otoniel", "Mário", "Dário", "Lívio", "Geraldo", "Neville",
    "Jadir", "Tadeu", "Agostinho", "Baltazar", "Benedito", "Jader", "Marinaldo", "Marivaldo", "Dimas", "Álvaro"
  ];
  const eventos = [
    // Eventos Relacionados a Família
    "um dia, ele se casou",
    "um dia, ele se divorciou",
    "um dia, nasceu um bebê na família",
    "um dia, ele participou de uma reunião familiar",
    "um dia, um parente próximo faleceu",
    "um dia, ele descobriu um parente distante",
    "um dia, ele adotou uma criança",
    "um dia, houve uma disputa por herança",
    "um dia, um segredo de família foi revelado",
    "um dia, um parente inesperado chegou",
    // Eventos Sobrenaturais
    "um dia, ele viu um fantasma",
    "um dia, ele encontrou um alienígena",
    "um dia, ele descobriu um portal para outra dimensão",
    "um dia, um feitiço deu errado",
    "um dia, um eclipse misterioso aconteceu",
    "um dia, ele encontrou um objeto amaldiçoado",
    "um dia, uma cidade inteira desapareceu",
    "um dia, ele se transformou em um ser sobrenatural",
    "um dia, ele teve uma premonição assustadora",
    "um dia, ele fez um pacto com uma entidade misteriosa",
    // Eventos Naturais
    "um dia, aconteceu um terremoto",
    "um dia, um vulcão entrou em erupção",
    "um dia, uma enchente devastadora atingiu a cidade",
    "um dia, um furacão inesperado surgiu",
    "um dia, um tsunami atingiu uma cidade costeira",
    "um dia, uma nevasca isolou a região",
    "um dia, um cometa foi visto no céu",
    "um dia, um deslizamento de terra ocorreu",
    "um dia, houve uma seca extrema",
    "um dia, uma floresta começou a morrer",
    // Eventos Urbanos
    "um dia, houve um apagão em toda a cidade",
    "um dia, uma greve geral parou tudo",
    "um dia, um protesto violento tomou as ruas",
    "um dia, ele descobriu um túnel secreto",
    "um dia, um prédio desabou",
    "um dia, construíram um monumento histórico",
    "um dia, inauguraram um grande shopping",
    "um dia, uma epidemia se espalhou pela cidade",
    "um dia, uma explosão ocorreu em uma fábrica",
    "um dia, abriram um parque temático",
    // Eventos de Viagem
    "um dia, ele perdeu um voo importante",
    "um dia, ele ficou preso em uma ilha deserta",
    "um dia, ele descobriu um lugar inexplorado",
    "um dia, roubaram sua bagagem",
    "um dia, uma tempestade interrompeu sua viagem",
    "um dia, ele conheceu alguém misterioso em um trem",
    "um dia, um avião fez um pouso de emergência",
    "um dia, um navio naufragou",
    "um dia, ele sofreu um acidente em uma estrada deserta",
    "um dia, uma caravana se perdeu no deserto",
    // Eventos de Mistério
    "um dia, uma pessoa importante desapareceu",
    "um dia, aconteceu um crime sem pistas",
    "um dia, ele encontrou um diário antigo",
    "um dia, ele recebeu uma mensagem criptografada",
    "um dia, roubaram um quadro em um museu",
    "um dia, um cofre impossível de abrir apareceu",
    "um dia, ele encontrou uma biblioteca secreta",
    "um dia, ele achou um mapa do tesouro",
    "um dia, ele foi acusado injustamente de um crime",
    "um dia, uma testemunha desapareceu antes do julgamento",
    // Eventos Tecnológicos
    "um dia, criaram uma IA consciente",
    "um dia, houve uma falha catastrófica em um sistema de energia",
    "um dia, dados confidenciais foram roubados",
    "um dia, inventaram algo que mudou o mundo",
    "um dia, hackers invadiram o governo",
    "um dia, um robô ganhou emoções",
    "um dia, uma espaçonave perdeu contato com a Terra",
    "um dia, lançaram uma nova tecnologia revolucionária",
    "um dia, um vírus de computador causou caos global",
    "um dia, um experimento científico criou uma anomalia",
    // Eventos Históricos
    "um dia, descobriram uma civilização perdida",
    "um dia, uma revolução começou",
    "um dia, um líder importante foi assassinado",
    "um dia, assinaram um tratado de paz",
    "um dia, uma guerra inesperada começou",
    "um dia, proclamaram independência",
    "um dia, um coronel liderou um golpe militar",
    "um dia, encontraram um artefato lendário",
    "um dia, começou uma corrida espacial",
    "um dia, houve o primeiro contato com outra civilização",
    // Eventos Esportivos
    "um dia, quebraram um recorde mundial",
    "um dia, um atleta sofreu uma lesão grave",
    "um dia, um time desconhecido venceu o campeonato",
    "um dia, houve um escândalo de doping",
    "um dia, um atleta aposentado voltou à ativa",
    "um dia, surgiu uma nova modalidade esportiva",
    "um dia, cancelaram um evento esportivo",
    "um dia, aconteceu uma partida épica sob chuva torrencial",
    "um dia, um mascote roubou a cena em um evento",
    "um dia, um jogo terminou em empate após dias",
    // Eventos Relacionados a Romance
    "um dia, um pedido de casamento foi rejeitado",
    "um dia, ele reencontrou um amor perdido",
    "um dia, um caso secreto foi revelado",
    "um dia, um amor proibido surgiu entre famílias rivais",
    "um dia, alguém fingiu ser outra pessoa para conquistar alguém",
    "um dia, uma carta de amor nunca foi entregue",
    "um dia, um encontro às cegas deu errado",
    "um dia, surgiu um triângulo amoroso complicado",
    "um dia, ele se apaixonou à primeira vista em um trem",
    "um dia, houve uma reconciliação inesperada",
    // Eventos Relacionados a Carreira
    "um dia, ele perdeu o emprego inesperadamente",
    "um dia, ele foi promovido a um cargo importante",
    "um dia, um projeto fracassou de forma catastrófica",
    "um dia, ele abriu seu próprio negócio",
    "um dia, ele criou uma invenção revolucionária",
    "um dia, sabotaram um projeto dele",
    "um dia, o mentor dele o abandonou",
    "um dia, ele participou de uma conferência internacional",
    "um dia, ele foi reconhecido por um trabalho antigo",
    "um dia, um escândalo arruinou sua carreira",
    // Eventos de Transformação Pessoal
    "um dia, ele superou um grande medo",
    "um dia, ele descobriu um talento oculto",
    "um dia, ele recebeu um prêmio inesperado",
    "um dia, ele foi traído por um amigo próximo",
    "um dia, ele aprendeu um segredo sobre seu passado",
    "um dia, ele abandonou uma vida antiga para começar de novo",
    "um dia, ele enfrentou uma doença grave",
    "um dia, ele voltou para a escola depois de anos",
    "um dia, ele entrou para uma seita e conseguiu escapar",
    "um dia, ele fez as pazes com um inimigo do passado"
];
const finais = [
    // Eventos Relacionados a Família
    "e ele teve o dia mais feliz da sua vida.",
    "e ele precisou recomeçar do zero.",
    "e todos celebraram com muita alegria.",
    "e memórias antigas foram reavivadas.",
    "e a família ficou de luto por semanas.",
    "e ele encontrou um novo significado para sua história.",
    "e a família se tornou completa.",
    "e as relações familiares foram abaladas.",
    "e ele passou a enxergar a família de outra forma.",
    "e tudo mudou na dinâmica familiar.",
    // Eventos Sobrenaturais
    "e ele nunca mais conseguiu dormir em paz.",
    "e eles começaram a questionar a existência humana.",
    "e ele ficou preso entre dois mundos.",
    "e as consequências foram devastadoras.",
    "e um mistério foi desvendado.",
    "e ele se viu preso em uma maldição.",
    "e a cidade foi considerada assombrada para sempre.",
    "e ele nunca mais foi o mesmo.",
    "e ele tentou avisar, mas ninguém acreditou.",
    "e ele percebeu que o preço era alto demais.",
    // Eventos Naturais
    "e ele ajudou a reconstruir a cidade.",
    "e a lava destruiu tudo ao redor.",
    "e muitos precisaram começar de novo.",
    "e a cidade ficou em ruínas.",
    "e a costa foi transformada para sempre.",
    "e a vila ficou isolada por meses.",
    "e ele ficou maravilhado com o espetáculo.",
    "e a vila precisou ser evacuada.",
    "e todos rezaram por chuva.",
    "e ninguém conseguiu explicar o que aconteceu.",
    // Eventos Urbanos
    "e ele precisou usar velas por dias.",
    "e a cidade ficou em completo caos.",
    "e ele foi arrastado para o meio da confusão.",
    "e ele descobriu algo que ninguém deveria saber.",
    "e muitas vidas foram perdidas.",
    "e o lugar se tornou um marco histórico.",
    "e a cidade ganhou uma nova vida.",
    "e ele tentou escapar da contaminação.",
    "e as chamas iluminaram o céu à noite.",
    "e as crianças se divertiram como nunca.",
    // Eventos de Viagem
    "e ele perdeu um compromisso importante.",
    "e precisou lutar pela própria sobrevivência.",
    "e encontrou algo que mudou sua vida.",
    "e ficou sem nada por semanas.",
    "e ele se abrigou até a tempestade passar.",
    "e eles tiveram uma conversa inesquecível.",
    "e todos os passageiros saíram ilesos.",
    "e ele nadou até a costa mais próxima.",
    "e ninguém veio ajudá-lo por horas.",
    "e eles encontraram algo extraordinário.",
    // Eventos de Mistério
    "e ninguém nunca mais soube o que aconteceu.",
    "e todos ficaram sem respostas.",
    "e ele descobriu segredos antigos.",
    "e a mensagem revelou algo surpreendente.",
    "e o quadro foi encontrado anos depois.",
    "e ele passou a vida tentando abri-lo.",
    "e os livros continham segredos inimagináveis.",
    "e ele encontrou o tesouro perdido.",
    "e ele provou sua inocência no final.",
    "e o julgamento nunca aconteceu.",
    // Eventos Tecnológicos
    "e ela começou a questionar sua própria existência.",
    "e o mundo ficou no escuro por dias.",
    "e a informação vazou para todos.",
    "e ele foi reconhecido como um gênio.",
    "e a segurança mundial foi comprometida.",
    "e ele se tornou amigo do robô.",
    "e a missão foi considerada perdida.",
    "e todos ficaram impressionados com a invenção.",
    "e o caos foi resolvido por um especialista.",
    "e o experimento foi abandonado para sempre.",
    // Eventos Históricos
    "e a história precisou ser reescrita.",
    "e o povo finalmente conquistou liberdade.",
    "e o mundo ficou em choque.",
    "e a paz foi restaurada.",
    "e milhões de vidas foram impactadas.",
    "e a nação se ergueu com orgulho.",
    "e ele foi exilado após o golpe.",
    "e o artefato foi colocado em um museu.",
    "e uma nova era começou.",
    "e a humanidade nunca mais esteve sozinha.",
    // Eventos Esportivos
    "e ele foi imortalizado na história.",
    "e o atleta precisou se aposentar.",
    "e o time se tornou uma lenda.",
    "e ele foi banido para sempre.",
    "e todos celebraram sua volta triunfal.",
    "e a modalidade conquistou o mundo.",
    "e os fãs ficaram decepcionados.",
    "e os jogadores deram tudo de si.",
    "e ele se tornou o símbolo do evento.",
    "e ninguém nunca esqueceu aquela partida.",
    // Eventos Relacionados a Romance
    "e ele precisou lidar com a rejeição.",
    "e os sentimentos voltaram com força.",
    "e os dois precisaram enfrentar as consequências.",
    "e o amor prevaleceu apesar de tudo.",
    "e a farsa foi descoberta no final.",
    "e a carta foi encontrada anos depois.",
    "e eles riram da situação no futuro.",
    "e o conflito terminou em lágrimas.",
    "e eles se apaixonaram perdidamente.",
    "e os dois decidiram tentar novamente.",
    // Eventos Relacionados a Carreira
    "e ele precisou encontrar um novo propósito.",
    "e ele comemorou com os colegas.",
    "e ele aprendeu lições valiosas.",
    "e o negócio prosperou rapidamente.",
    "e ele mudou o curso de sua indústria.",
    "e ele precisou recomeçar do zero.",
    "e ele encontrou força para continuar.",
    "e ele fez conexões que mudaram sua vida.",
    "e ele se tornou uma referência em sua área.",
    "e ele nunca mais foi o mesmo.",
    // Eventos de Transformação Pessoal
    "e ele se sentiu mais forte do que nunca.",
    "e ele começou uma nova jornada.",
    "e ele percebeu que era mais capaz do que imaginava.",
    "e ele teve que aprender a perdoar.",
    "e isso mudou completamente sua perspectiva.",
    "e ele encontrou uma nova razão para viver.",
    "e ele inspirou todos ao seu redor.",
    "e ele provou que nunca é tarde para aprender.",
    "e ele conseguiu escapar com sua vida.",
    "e ele finalmente encontrou paz."
];
const locais = [
    "Uma cidade fantasma",
    "Uma ilha deserta",
    "Uma floresta tropical",
    "Uma caverna subterrânea",
    "Uma vila medieval",
    "Um castelo abandonado",
    "Uma estação espacial",
    "Uma base militar secreta",
    "Uma montanha coberta de neve",
    "Um deserto sem fim",
    "Uma praia paradisíaca",
    "Um farol isolado",
    "Uma mina de ouro abandonada",
    "Um arranha-céu futurista",
    "Um museu de história antiga",
    "Uma biblioteca mágica",
    "Uma ponte suspensa sobre um cânion",
    "Uma prisão de segurança máxima",
    "Um laboratório científico",
    "Uma cidade submersa",
    "Um campo de batalha histórico",
    "Uma fábrica abandonada",
    "Um parque de diversões assombrado",
    "Uma casa na árvore gigante",
    "Um porto movimentado",
    "Uma aldeia no meio da selva",
    "Um vulcão ativo",
    "Uma estação de trem antiga",
    "Uma fazenda tranquila",
    "Um templo escondido na floresta",
    "Um bunker subterrâneo",
    "Uma estação polar",
    "Uma pirâmide misteriosa",
    "Um mercado flutuante",
    "Um orfanato antigo",
    "Um hotel de luxo",
    "Uma catedral gótica",
    "Um aquário gigante",
    "Uma torre de observação",
    "Um bosque encantado",
    "Um teatro abandonado",
    "Uma galeria de arte",
    "Uma fábrica de brinquedos",
    "Um cemitério sombrio",
    "Um campo de flores",
    "Um circo itinerante",
    "Uma taverna movimentada",
    "Um hospital antigo",
    "Um zoológico deserto",
    "Uma mansão mal-assombrada",
    "Um lago cristalino",
    "Uma vila pesqueira",
    "Um jardim botânico",
    "Um restaurante à beira-mar",
    "Um estúdio de cinema",
    "Uma cidade futurista",
    "Um observatório astronômico",
    "Um parque nacional",
    "Uma floresta de pinheiros",
    "Um festival ao ar livre",
    "Uma estação de rádio abandonada",
    "Um castelo flutuante",
    "Um campo de golfe luxuoso",
    "Um aeroporto internacional",
    "Uma arena de gladiadores",
    "Uma estação de metrô",
    "Um parque de skate",
    "Um mercado de pulgas",
    "Uma cidade no meio do deserto",
    "Uma praça movimentada",
    "Um navio de cruzeiro",
    "Um submarino perdido",
    "Uma escola de magia",
    "Um dojo de artes marciais",
    "Uma loja de antiguidades",
    "Um planetário moderno",
    "Um túnel subterrâneo",
    "Uma floresta de bambu",
    "Uma caverna de cristal",
    "Uma igreja abandonada",
    "Uma ruína arqueológica",
    "Uma torre do relógio",
    "Uma fábrica de chocolate",
    "Um campo de trigo dourado",
    "Uma vila alpina",
    "Um santuário espiritual",
    "Uma ilha de gelo",
    "Um spa luxuoso",
    "Uma praça de alimentação movimentada",
    "Uma estação de esqui",
    "Uma vila de pescadores no Ártico",
    "Um trem em movimento",
    "Uma caverna cheia de morcegos",
    "Um poço de petróleo",
    "Um mercado noturno",
    "Uma vila escondida nas montanhas",
    "Uma fortaleza medieval",
    "Uma biblioteca subterrânea",
    "Um anfiteatro antigo"
];
let randomName = Math.floor(Math.random() * nomes.length) + 0;
let randomEventFinal = Math.floor(Math.random() * finais.length) + 0;
let randomLocation = Math.floor(Math.random() * locais.length) + 0;
function clique(){
    randomName = Math.floor(Math.random() * nomes.length) + 0;
    randomEventFinal = Math.floor(Math.random() * finais.length) + 0;
    randomLocation = Math.floor(Math.random() * locais.length) + 0;
    document.getElementById("historyText").innerText = "Era uma vez, "+nomes[randomName]+" que vivia em "+locais[randomLocation]+", "+eventos[randomEventFinal]+", "+finais[randomEventFinal]
};