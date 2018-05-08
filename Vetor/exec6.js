function exec6() {
    var nome = new Array();
    var percent = new Array();
    var vendas = new Array();
    var receber = new Array();
    total = 0;
    for (var i = 0; i < 5; i++) {
        nome.push(String(prompt("Nome do Funcionario: ")));        
        vendas.push(parseFloat(prompt("Digite o Valor da Venda de: " + nome[i])));
        percent.push(parseInt(prompt("Digite o Percentual de comissão de: " + nome[i])));
    }
    var menor = 0;
    var maior = 0;
    var relatorio = "";
    for ( i = 0; i < 5; i++) {
        receber[i] = (vendas[i] * percent[i]) / 100;
        var total= total + vendas[i];
        if (receber[i] < menor) {
            menor = receber[i];
        }
        if (recebe[i] > maior) {
            maior = receber[i];
        }
        relatorio = relatorio + "\n " + nome[i] + ": " + receber[i];
    }
    var posmenor = receber.indexOf(menor);
    var posmaior = receber.indexOf(maior);
    alert ("Total de vendas: " + total + "\n " + "Menor Comissão: " + nome[posmenor] + "\n" + "Maior comissão: " + nome[posmaior] + "\n" + "Relatorio: " + relatorio);
}