function exec9() {
    var nome = new Array();
    var codigo = new Array();
    var preco = new Array();
    var condicoes = new Array(); //condições
    var auxnome = new Array();
    for (var i = 0; i < 3; i++) {
        nome.push(prompt("Digite o Nome do produto:"));
        codigo.push(parseInt(prompt("Digite o Codigo do produto: ")));
        preco.push(parseFloat(prompt("Digite o Preço do Produto: ")));

        if (codigo[i]%2 == 0 && preco > 1000) {
            condicoes = preco[i] + preco[i]*0.20;
            auxnome[i] = nome[i]
        }
        if (codigo[i]%2 == 0) {
            condicoes[i] = preco[i]*0.15 + preco[i];
            auxnome[i] = nome[i]
            
        }
        if (preco > 1000) {
            condicoes[i] = preco[i] + preco[i]*0.10;
            auxnome[i] = nome[i]
        }
    }
    alert ("Produto: " + auxnome + " Preço Antigo: " + preco + " Novo Preço: " + condicoes)
}