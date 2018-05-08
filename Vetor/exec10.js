function exec10() {
    var vetor1 = new Array();
    var vetor2 = new Array();
    var vtnew1 = new Array();
    var vtnew2 = new Array();
    for (var i = 0; i < 10; i++) {
        vetor1.push(parseInt(prompt("Digite os numeros do primeiro vetor: ")));
    }
    for (i = 0; i < 5; i++) {
        vetor2.push(parseInt(prompt("digite os numeros do segundo vetor")));
    }
    for (i = 0; i < 10; i++) {
        if (vetor1[i]%2 == 0) {
            vtnew1[i] = 0;
            for (var j = 0; j < 5; j++) { 
            vtnew1[i] = vtnew1[i] + vetor2[j];
            }
            vtnew1[i] = vtnew1[i] + vetor1[i];
        }
    }
    alert("Novo Vetor: " + vtnew1);
}