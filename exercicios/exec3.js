function exec3(){
    //variaveis
    var nro1, nro2;
    //entrada
    nro1 = parseInt(document.getElementById("nro1").value);
    nro2 = parseInt(document.getElementById("nro2").value);
    //processamento e saida
    if (nro1 < nro2) {
        document.getElementById("menor").innerHTML = "O Menor numero digitado foi : " + nro1;
    } else {
        document.getElementById("menor").innerHTML = "O Menor numero digitado foi : " + nro2;
    }
}