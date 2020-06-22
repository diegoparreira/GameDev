let imagemCenario, imagemPersonagem;
let somDoJogo;
let isMuted = false;
let personagem, cenario;

function preload() {
  imagemCenario = loadImage("./assets/imagens/cenario/floresta.png");
  imagemPersonagem = loadImage("./assets/imagens/personagem/correndo.png");
  somDoJogo = loadSound("./assets/sons/trilha_jogo.mp3");
}

function setup() {
  //Executada uma vez antes do jogo iniciar
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem, 135, 110);
  personagem.getMatriz;
  frameRate(30);
  if(isMuted === false){
      somDoJogo.loop();
  }
}

function draw() {
  // Desenhar cenário e personagem
  cenario.exibe();
  personagem.exibe();
  cenario.move();
}

