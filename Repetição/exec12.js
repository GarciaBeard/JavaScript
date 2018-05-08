//Faça um programa que receba 10 numeros inteiros e mostre a quantidade de numeros primos dentre os numeros que foram digitados.

function exec12() {
    aux = 0
    primo = 0
    for (var i = 1; i <= 10; i++) {
        var num1 = parseFloat(prompt("Digite o " + i +"º Numero:"));
        aux = 0
        for (var j = 1; j <= num1; j++) {
            if (num1%j == 0) {
                var aux = aux + 1;
            }
        }
        if (aux == 2) {
            var primo = primo + 1;
        }
    }
    document.getElementById("resultado").innerHTML = "A quantidade de numeros primos é: "+ primo;
}