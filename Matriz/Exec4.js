function Exec4() {
    var mat = [];
    var nome = [];

    for (var i = 0; i < 3; i++) {
        mat[i] = [];
    }
    entrada(mat,nome);
    calcular(mat,nome);
}

function entrada(mat,nome) {
    for (var i = 0; i < 3; i++) {
        nome.push(prompt("Digite o Nome do aluno"));

        for (var j = 0; j < 5; j++) {
            mat[i][j] = parseFloat(prompt("Digite a nota da prova " + (j+1) + " do aluno: " + nome[i]));
        }
    }
}
function calcular(mat,nome) {
    var soma = [];
    for (var i = 0; i < 3; i++) {
        soma[i] = 0;
        for (var j = 0; j < 5; j++) {
            soma[i] = soma[i] + mat[i][j]; 
        }
        soma[i] = soma[i] / 5;
    }
    var aux = "";
    for (var i = 0; i < 3; i++) {
        if (soma[i] >= 6) {
            aux = aux + "O Aluno " + nome[i] + " Com media: <b>" + soma[i] + "</b> foi <font color='00FF00'> Aprovado VIADO </font>" + "<br>";
        } else if (soma[i] >= 3){
            aux = aux + "O Aluno " + nome[i] + " Com media: <b>" + soma[i] + "</b> foi <font color='0000FF'> Exame </font>" + "<br>";
        } else {
            aux = aux + "O Aluno " + nome[i] + " Com media: <b>" + soma[i] + "</b> foi <font color='FF0000'> REPROVADO ! </font>" + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = (aux);
}