class Animacao {
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
    this.matriz = calculaMatriz(
      alturaSprite,
      larguraSprite,
      numSprites,
      numColunas
    );
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
  }

  exibe() {
    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual]["x"],
      this.matriz[this.frameAtual]["y"],
      this.larguraSprite,
      this.alturaSprite
    );
    this.anima();
  }

  anima() {
    this.frameAtual === this.matriz.length - 1
      ? (this.frameAtual = 0)
      : this.frameAtual++;
  }
}
