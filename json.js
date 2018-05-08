function json() {
var myObj = '[{ "nome":"Batata", "quantidade":31, "codigo":5, "preco":2.50 },{ "nome":"Uva", "quantidade":5, "codigo":3, "preco":2.75 }, { "nome":"Maça", "quantidade":0, "codigo":666, "preco":4.50 }, { "nome":"Pera", "quantidade":15, "codigo":21, "preco":7.35 }]';
var myJSON = JSON.parse(myObj);
        var nome = (prompt("Digite um Nome: "));
        var quantidade = (parseInt(prompt("Digite a Quantidade")));
        var codigo = (parseInt(prompt("Digite o Codigo")));
        var preco = (parseFloat(prompt("Digite p preço")));
        var novo = '{ "nome":"' + nome +'" , "quantidade":"' + quantidade +'", "codigo":"' + codigo +'", "preco":"' + preco +'" }';
        myJSON.push(novo);

    for (var i = 0; i < myJSON.length; i++) {
        alert(" Nome: " + myJSON[i].nome + "\n Quantidade: " + myJSON[i].quantidade + "\n Codigo: " + myJSON[i].codigo + "\n Preço: " + myJSON[i].preco)
    }
}