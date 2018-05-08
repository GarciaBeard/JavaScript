function json() {
var myObj = { "nome":"Batata", "quantidade":31, "codigo":5, "preco":"2.50" };
var myJSON = JSON.stringify(myObj);
    alert(myObj.nome + "\n" + myObj.quantidade + "\n" + myObj.codigo + "\n" + myObj.preco)
}