function pessoas() {
    var idade = new Array();
    var peso = new Array();
    var altura = new Array();
    var nome = new Array();
    var qtdidade = 0;
    var qtdaltura = 0;
    var qtdpeso = 0;
    var media = 0;
    var qtdaltaux = 0;
    var porc = 0;
    for (var i = 1; i <= 3; i++) {
        idade.push(parseInt(prompt("Informe a idade da Pessoa")));
        peso.push(parseFloat(prompt("Informe a peso da Pessoa")));
        altura.push(parseFloat(prompt("Informe a altura da Pessoa")));
        nome.push(prompt("Informe o Nome da Pessoa"));
    }
    for ( i = 0; i < idade.length; i++) {
        if (idade[i] >50) {
            qtdidade++;
        }
            else if ((idade[i] > 1) && (idade[i] < 20)) {
                qtdaltura = qtdaltura + altura;
                qtdaltaux++;
        }
        if (altura[i] < 40) {
            qtdpeso++;
        }
    }
    if (qtdaltaux == 0) {
        media = 0
    } else {
    media = qtdaltura/qtdaltaux;
    }
    porc = (qtdpeso/3)*100
    document.getElementById("resultado").innerHTML = "Pessoas com mais de 50 Anos: " + qtdidade + "<br>" + "Altura das pessoas com idade entre 10 e 20 Anos : " + media.toFixed(2) + "<br>" + "% de pessoas com peso inferior a 40Kg: " + porc.toFixed(2);
}