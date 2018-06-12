function Exec5() {
    var vendas = [];
    for (var i = 0; i < 12; i++) {
        vendas[i] = [];
    }
    var mes = [];
    meses(mes)
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 4; j++) {
            vendas[i][j] = prompt("Digite o Valor da venda do mes: " + mes[i] + " na semana " + (j+1));
        }
    }
    calcula(vendas,mes);

}

function calcula(vendas,mes) {
    var totalano = 0;
    var totalmes = [];
    var totalsem = [];
    for (var i = 0; i < 12; i++) {
        totalmes[i] = 0;
        for (var j = 0; j < 4; j++) {
            totalmes[i] = totalmes[i] + vendas[i][j];
        }        
    }
    for (var j = 0; j < 4; j++) {
        totalsem[j] = 0;
        for (var i = 0; i < 12; i++) {
            totalsem[j] = totalsem[j] + vendas[i][j]
        }
    }
    for (var i = 0; i < 12; i++) {
        totalano = totalano + totalmes[i];      
    }
        var aux = "";
    for (var i = 0; i < 12; i++) {
        aux = aux + "Total vendidos no mes: " + mes[i] + " foi de: " + totalmes[i] + "<br>";
    }
    for (var i = 0; i < 4; i++) {
        aux = aux + "Total vendidos em cada semana no ano é de: na semana " + (i+1) +totalsem[i] + "<br>"         
    }
    aux = aux + "Total Vendidos no ano é de: " + totalano;
    document.getElementById("resulexc05").innerHTML = (aux);
}

function meses(mes) {
    mes[0] = "Janeiro";
    mes[1] = "Fevereiro";
    mes[2] = "Março";
    mes[3] = "Abril";
    mes[4] = "Maio";
    mes[5] = "Junho";
    mes[6] = "Julho";
    mes[7] = "Agosto";
    mes[8] = "Setembro";
    mes[9] = "Outubro";
    mes[10] = "Novembro";
    mes[11] = "Dezembro";
}