class Inimigo extends Animacao {
  constructor(
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    numSprites,
    numColunas,
    velocidadeMovimento,
    delay = 0
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
    this.delay = delay;
    this.velocidadeMovimento = velocidadeMovimento;
  }

  move() {
    this.x = this.x - this.velocidadeMovimento;
    if (this.x < -this.largura - this.delay) {
      this.x = width;
    }
  }
}
