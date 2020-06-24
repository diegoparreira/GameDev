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
