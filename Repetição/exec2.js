function exec2() {
    var i,vend,lucro, resul, br;
        br = "<br>"
        vend = 120;
        resul = "";
    for (var i = 5; i >= 1; i = i - 0.50){
       lucro = i*vend - 200;
       resul = resul + "Valor do Ingresso: R$" + i.toFixed(2) +" | Despesas: 200" + " | Lucro total: R$" + lucro.toFixed(2) + " | Ingressos vendidos: " + vend + br;
        vend = vend + 26
    }
    document.getElementById("resultado").innerHTML = resul;
}