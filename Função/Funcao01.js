function ex01() {
    var x = parseInt(prompt("Informe um valor"));
    alert (soma(x));

}
function soma(x) {
    soma = 0;
        if (x < 0) {
            return("Numero Invalido");
        }
        else {
            for (var i = 0; i <= x; i++) {
                var soma = soma + i;
            }
            return("soma dos numeros entre 0 e "+ x + " é igual : " + soma);
        }
}