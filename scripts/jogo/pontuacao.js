class Pontuacao {
    constructor(){
        this.pontos = 0;
    }

    exibe(){
        fill("#fff");
        textSize(50);
        text(parseInt(this.pontos), width - 80, 50);
    }

    adicionaPonto(){
        this.pontos += 0.3;
    }
}