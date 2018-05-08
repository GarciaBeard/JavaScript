function exec1() {
    var numero = new Array();
    var pares = new Array();
    var impar = new Array();

    for (var i = 0; i < 6; i++) {
        numero.push(parseInt(prompt("Informe um Numero: ")));
        
    }
    for (var i = 0; i< 6; i++){
        if (numero[i]%2 == 0) {
            pares.push(numero[i])
        }
        else {
            impar.push(numero[i])
        }
    }
    alert ("Quantidade de pares: " + pares.length + " são: " + pares);
    alert ("Quantidade de impares: " + impar.length + " são: " + impar);
}