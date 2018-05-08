function exec8() {
    var nome = new Array()
    var nota = new Array()
    var maior = 0;
    var menor = "";
    var reprovado = new Array()
    for (var i = 0; i < 3; i++) {
        nome.push(String(prompt("Informe o Nome do aluno: ")));
        nota.push(parseFloat(prompt("Informe a Media final do aluno: " + nome[i])));
        if (nota[i] > maior) {
            maior = nota[i];    
        }
        if (nota[i] < 7) {
            menor = menor + " / " + nome[i];
            reprovado.push(7 - nota[i]);
        }
    }

    var media = nota.indexOf(maior)
    alert ("Aluno Com a maior media: " + nome[media] + "\n" + "Alunos com Media menor que 7: " + menor + "\n" + " Precisam tirar : " + reprovado ) ;
}