//recebe idade , peso , altura , cor dos olhos , cor dos cabelos de 6 pessoas.
function exec8() {
aux1 = 0;
MediaI = 0;
ContI = 0;
ContOA = 0;
Contador = 0;
media = 0;
    for (var i = 1; i <= 6; i++) {
            var idade = parseInt(prompt("Digite a Idade da "+ i + "ª pessoa"));
            var peso = parseFloat(prompt("Digite o peso da "+ i + "ª pessoa"));
            var Altura = parseFloat(prompt("Digite a Altura da "+ i + "ª pessoa"));
            
            do {
                var CorO = String(prompt("Digite a Cor dos olhos da "+ i + "ª pessoa \n A - Azul \n P - Preto \n V - Verde \n C - Castanho"));
                CorO = CorO.toLowerCase();
            } while ((CorO != "a") && (CorO != "p") && (CorO != "v") && (CorO != "c"));
            
            do {
            var CorC = String(prompt("Digite a Cor dos Cabelos da "+ i + "ª pessoa \n L - Louro \n P - Preto \n R - Ruivo \n C - Castanho"));
                CorC = CorC.toLocaleLowerCase();
            } while ((CorC != "l") && (CorC != "p") && (CorC != "r") && (CorC != "c"));

        if (idade >= 50 && peso <= 60) {
            var aux1 = aux1 + 1
        }
            if (Altura <= 1.50) {
                //contagem de Idade com + de 1.50 de altura
                var ContI = ContI + 1;
                var MediaI = MediaI + idade;
            }
                if (CorO == "a") {
                    //Contagem de olhos azuis
                    var ContOA = ContOA + 1;
                }
                    if (CorC = "r" && CorO != "a") {
                        var Contador = Contador + 1
                    }
    }
    var porc = (ContOA/6)*100;
 if (ContI == 0) {
     media = 0
 } else {
    var media = MediaI/ContI;
 }
    document.getElementById("resultado").innerHTML = "Pessoas com Mais de 50 e com menos de 60Kg: " + aux1 + "<br>" + "media de pessoas com mais de 1,50 de altura: " + media + "<br>" + "Porcentagem de pessoas com olhos azuis: " + porc + "<br>" + "Pessoas Ruivas sem Olhos Azuis: " + Contador;
}
