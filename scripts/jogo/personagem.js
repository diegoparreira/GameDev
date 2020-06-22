const calculaMatriz = (altura, largura, numSprites, index = 0) => {
  let matriz = [
    {
      x: 0,
      y: 0,
    },
  ];

  let auxAltura = 0,
    auxLargura = 0;

  for (index; index < numSprites; index++) {
    matriz[index] = {
      x: auxLargura,
      y: auxAltura,
    };

    if ((index + 1) % 4 === 0) {
      auxLargura = 0;
      auxAltura += altura;
    } else {
      auxLargura += largura;
    }
  }
  return matriz;
};

class Personagem {
  constructor(imagem, altura, largura) {
    this.imagem = imagem;
    this.altura = altura;
    this.largura = largura;
    this.matriz = calculaMatriz(altura * 2, largura * 2, 16);
    this.frameAtual = 0;
  }

  getMatriz(){
    console.log(this.matriz);
  }

  exibe() {
    image(
      this.imagem,
      20,
      height - this.altura,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual].x,
      this.matriz[this.frameAtual].y,
      220,
      270
    );

    
    this.anima();
  }

  anima() {
    this.frameAtual++;
    if (this.frameAtual === this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}
