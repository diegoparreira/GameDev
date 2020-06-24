class Inimigo extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidadeMovimento
  ) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    this.velocidadeMovimento = velocidadeMovimento;
  }

  move() {
    this.x = this.x - this.velocidadeMovimento;
    if (this.x < -this.largura) {
      this.x = width;
    }
  }
}
