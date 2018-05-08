function exec1() {
    //variaveis
    var nro1, nro2, nro3, nro4, media;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    nro2 = parseFloat(document.getElementById("nro2").value);
    nro3 = parseFloat(document.getElementById("nro3").value);
    nro4 = parseFloat(document.getElementById("nro4").value);
    //processamento
    media = (nro1 + nro2 + nro3 + nro4) / 4
    //saida
    document.getElementById("maior").innerHTML = "A media final é de :" + media
    if (media < 7) {
        document.getElementById("menor").innerHTML = "Reprovado !"
    } else {
        document.getElementById("menor").innerHTML = "Aprovado !"
    }
}