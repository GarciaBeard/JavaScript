function ex14() {
    x = [];
    for (var i = 0; i < 30; i++) {
        x[i] = parseInt(prompt("Digite o numero inteiro"));        
    }
    alert(compara(x));
}
function compara(x) {
    var par = [];
    var imp = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i]%2 == 0) {
            par.push (x[i]);
        }
        else {
            imp.push (x[i]);
        }
    }
    return ("os pares são: " + par + "\n" + " os impares são: " + imp)
}