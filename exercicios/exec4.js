function exec4(){
    //variaveis
    var nro1, nro2, nro3;
    //entrada
    nro1 = parseInt(document.getElementById("nro1").value);
    nro2 = parseInt(document.getElementById("nro2").value);
    nro3 = parseInt(document.getElementById("nro3").value);
    //processamento e saida
    if (nro1 > nro2 && nro1 > nro3) {
        document.getElementById("maior").innerHTML = "O Maior numero digitado foi : " + nro1;
    } else if (nro2 > nro1 && nro2 > nro3) {
        document.getElementById("maior").innerHTML = "O Maior numero digitado foi : " + nro2;
    } else if (nro3 > nro1 && nro3 > nro2) {
        document.getElementById("maior").innerHTML = "O Maior numero digitado foi : " + nro3;
    } 

}