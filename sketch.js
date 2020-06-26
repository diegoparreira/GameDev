let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;
let somDoJogo;
let somDoPulo;
let hipsta;
let pontuacao;
const cenario = [];
const inimigos = [];

const pathImages = "./assets/imagens"


function preload() {
  //Load Cenario
  imagemCenario = {
    ground: loadImage("./assets/imagens/cenario/ground.png"),
    foreground: loadImage("./assets/imagens/cenario/foreground.png"),
    middle_decor: loadImage("./assets/imagens/cenario/middle_decor.png"),
    bg_decor: loadImage("./assets/imagens/cenario/bg_decor.png"),
    sky: loadImage("./assets/imagens/cenario/sky.png"),
  };
  //Load imagem inimigos
  imagemInimigo = [
    loadImage(`${pathImages}/inimigos/gotinha.png`),
    loadImage(`${pathImages}/inimigos/gotinha-voadora.png`),
    loadImage(`${pathImages}/inimigos/troll.png`),
  ];
  //Load imagem game over
  imagemGameOver = loadImage(`${pathImages}/assets/game-over.png`);
  //Load imagem personagem
  imagemPersonagem = loadImage(`${pathImages}/personagem/correndo.png`);
  //Load som do jogo
  somDoJogo = loadSound("./assets/sons/trilha_jogo.mp3");
}

function setup() {
  //Executada uma vez antes do jogo iniciar
  createCanvas(windowWidth, windowHeight);
  ceu = new Cenario(imagemCenario.sky, 3);
  bg_decor = new Cenario(imagemCenario.bg_decor, 3);
  middle_decor = new Cenario(imagemCenario.middle_decor, 2);
  foreground_decor = new Cenario(imagemCenario.foreground, 2);
  ground = new Cenario(imagemCenario.ground, 2);
  cenario.push(ceu, bg_decor, middle_decor, foreground_decor, ground);
  hipsta = new Personagem(imagemPersonagem, 30, 30, 110, 135, 220, 270, 16, 4);

  gotinha = new Inimigo(
    imagemInimigo[0],
    width - 52,
    30,
    52,
    52,
    104,
    104,
    28,
    4,
    10
  );

  gotinha_voadora = new Inimigo(
    imagemInimigo[1],
    width - 52,
    height / 2,
    100,
    75,
    200,
    150,
    16,
    3,
    12,
    50
  );

  troll = new Inimigo(
    imagemInimigo[2],
    width - 52,
    10,
    200,
    200,
    400,
    400,
    28,
    5,
    5,
    200
  );

  inimigos.push(gotinha, gotinha_voadora, troll);

  pontuacao = new Pontuacao();

  frameRate(30);
  somDoJogo.loop();
}

function keyPressed() {
  if (key === "ArrowUp") {
    hipsta.pula();
  }
}

function draw() {
  // Desenhar cenário e hipsta
  cenario.forEach((e) => {
    e.exibe();
    e.move();
  });
  pontuacao.exibe();
  pontuacao.adicionaPonto();
  hipsta.exibe();
  hipsta.aplicaGravidade();
  if (hipsta.estaNoChao()) {
    hipsta.zeraPulos();
  }
  inimigos.forEach((e) => {
    e.exibe();
    e.move();
    if (hipsta.estaColidindo(e)) {
      noLoop();
      somDoJogo.stop();
      image(imagemGameOver, width/2 - 200, height/3);
    }
  });
}
