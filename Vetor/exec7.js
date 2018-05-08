function exec7() {
    var num = new Array();
    var neg = 0;
    posi = 0;
    for (var i = 0; i < 10; i++) {
        num.push(parseFloat(prompt("Insira um numero: ")));
        if (num[i] < 0) {
            neg++;
        } else {
            var posi = posi + num[i]
        }
    }
    alert ("Quantidades de negativos: " + neg + "\n" + "Soma dos positivos: " + posi);
}