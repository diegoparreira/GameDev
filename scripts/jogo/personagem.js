class Personagem extends Animacao {
  constructor(
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    numSprites,
    numColunas
  ) {
    super(
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite,
      numSprites,
      numColunas
    );
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.numeroPulo = 0;
    this.maxPulos = 2;
    this.alturaDoPulo = -50;
    this.somDoPulo = loadSound("./assets/sons/somPulo.mp3");
  }

  estaNoChao() {
    if (this.y === this.yInicial) {
      return true;
    }
  }

  zeraPulos() {
    this.numeroPulo = 0;
  }

  pula() {
    if (this.numeroPulo < 2) {
      this.somDoPulo.play();
      this.numeroPulo++;
      this.velocidadeDoPulo = this.alturaDoPulo;
    } else {
      if (this.estaNoChao()) {
        this.zeraPulos();
        this.pula();
      }
    }
  }

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 0.7;
    return collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
  }
}
