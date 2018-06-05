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
    //lista
    var saida = "";
    //aprovado exame ou reprovado
    for (var i = 0; i < vetor.length; i++) {
        saida = saida + vetor[i].nome + " " + vetor[i].media;

            if (vetor[i].media >= 6){
                saida = saida + " - Aprovado";
            }
            else if (vetor[i].media >= 3){
                saida = saida + " - Exame";
            } 
            else saida = saida + " - Reprovado";
            saida = saida + "<br/>"
    }
        //saida dos dados pro html
    document.getElementById("lista").innerHTML = saida;
}

function media() {
    var maior = vetor[0].media;
    var menor = vetor[0].media;
    var nome = vetor[0].nome;
    var nomemenor = vetor[0].nome;
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i].media > maior) {
            maior = vetor[i].media
            nome = vetor[i].nome
        }
        if (vetor[i].media < menor) {
            menor = vetor[i].media
            nomemenor = vetor[i].nome
        }
    }
        document.getElementById("resultado").innerHTML = "O Aluno " + nome + " Teve a Maior nota " + maior + "\n" + "O Aluno " + nomemenor + " Teve a Menor nota " + menor;
}