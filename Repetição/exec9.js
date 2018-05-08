//receba 10 idades , pesos e alturas , calcule e mostre , media das idades , quantidade de pessoas 90Kg + e altura 1,50- 

function exec9() {
aux1 = 0;
cont1 = 0;
mediaI = 0;
media = 0;
    for (var i = 1; i <= 10; i++) {
            var idade = parseInt(prompt("Digite a Idade da "+ i + "ª pessoa"));
            var peso = parseFloat(prompt("Digite o peso da "+ i + "ª pessoa"));
            var Altura = parseFloat(prompt("Digite a Altura da "+ i + "ª pessoa"));
            var mediaI = mediaI + idade
        if (Altura <= 1.50 && peso >= 90) {
            var aux1 = aux1 + 1
        }
            if (Altura >= 1.90 && idade >= 10 && idade <= 30) {
                var cont1 = cont1 + 1
            }
    }
    media = mediaI/10
document.getElementById("resultado").innerHTML = "Media das pessoas: " + media + "<br>Pessoas com Mais de 90Kg e Menos de 1.50 de altura: " + aux1 + "<br>Porcentagem entre 10 a 30 anos e maiores de 1,90m: " + cont1;
}
