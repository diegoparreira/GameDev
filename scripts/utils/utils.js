const calculaMatriz = (altura, largura, numSprites, colunas) => {
  let matriz = [
    {
      x: 0,
      y: 0,
    },
  ];

  let auxAltura = 0,
    auxLargura = 0;

  for (let index = 0; index < numSprites; index++) {
    matriz[index] = {
      x: auxLargura,
      y: auxAltura,
    };

    if ((index + 1) % colunas === 0) {
      auxLargura = 0;
      auxAltura += altura;
    } else {
      auxLargura += largura;
    }
    
  }
  return matriz;
};

let matrizTestePersonagem = calculaMatriz(270, 220, 16, 4);
let matrizTesteInimigo = calculaMatriz(104, 104, 28, 4);