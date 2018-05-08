function exec2() {
    var numero = new Array();
    var v1 = new Array();
    var v2 = new Array();
    var v1ev2 = new Array();

    for (var i = 0; i < 7; i++) {
        numero.push(parseInt(prompt("Informe um Numero: ")));
        
    }
    for (var i = 0; i< 7; i++){
        if ((numero[i] % 2 == 0) && (numero[i] % 3 == 0)) {
            v1ev2.push(numero[i]);
        }
            else if (numero[i] % 2 == 0) {
                v1.push(numero[i]);
            }
                else if (numero[i] % 3 == 0) {
                    v2.push(numero[i]);
                }
    }
    alert ("Multiplos de 2: " + v1.length + " são: " + v1);
    alert ("Multiplos de 3: " + v2.length + " são: " + v2);
    alert ("Multiplos de 3: " + v1ev2.length + " são: " + v1ev2);
}