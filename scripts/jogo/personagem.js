class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.numeroPulo = 0;
    this.maxPulos = 2;
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
      this.velocidadeDoPulo = -30;
    } else {
      if (this.estaNoChao()) {
        this.zeraPulos();
        this.pula();
      }
    }
  }

  // pula() {
  //   this.numeroPulo++;
  //   this.velocidadeDoPulo = -30;
  // }

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
