function cadastra() {
    //criar objeto
    var objeto = new Object ();
    //atribui valores de propriedades
    objeto.nome = prompt("Informe o Nome");
    objeto.p1 = parseFloat(prompt("Informe a Nota da primeira prova"));
    objeto.p2 = parseFloat(prompt("Informe a Nota da Segunda prova"));
    objeto.media = (objeto.p1 + objeto.p2) / 2 ;
    //adiciona o objeto no vetor
    vetor.push(objeto);
    alert("Cadastrado com sucesso")
}
function lista() {
    var saida = "";
    for (var i = 0; i < vetor.length; i++) {
        saida = saida + vetor[i].nome + " " + vetor[i].media + "<br>";
    }
    document.getElementById("lista").innerHTML = saida;
}