//V para avista , P a prazo. 15 transações calculadas , valor total a vista , valor total a prazo , valor das compras efetuadas , valor da primeira prestação a prazo juntas em 3x.
function exec6 (){
var Vtotal, Ptotal, valor, tipo, total, presta, i; 

Vtotal = 0
Ptotal = 0
for ( i = 0; i < 15; i++) {
    valor = parseFloat(prompt("Informe o Valor da Compra: "));
    do {
        tipo = String(prompt("V - Compra a vista \n P - Compra a Prazo"));
        tipo = tipo.toLowerCase();
    } while ((tipo != "v") && (tipo != "p"));
    if (tipo == "v") {
         Vtotal = Vtotal + valor;
    } else { 
         Ptotal = Ptotal + valor;
    }
}
total = Ptotal + Vtotal;
presta = Ptotal/3;
document.getElementById("resultado").innerHTML = "Valor Total das Compras á Vista: " + Vtotal + "<br>" + " Valor total á Prazo: " + Ptotal + "<br>" + "Valor total das compras: " + total + "<br>" + " Valor total da Primeira prestação das compras a Prazo: " + presta.toFixed(2);
}