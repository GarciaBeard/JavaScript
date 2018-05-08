function exec5(){
    //variaveis
    var nro1, nro2, nro3, media, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    nro2 = parseFloat(document.getElementById("nro2").value);
    nro3 = parseFloat(document.getElementById("nro3").value);
    //processamento
    media = (nro2 + nro3) / 2;
    //saida
    switch (nro1) {
        case 1:
        document.getElementById("maior").innerHTML = "A Media dos números é : " + media;
            break;
        case 2:
        if (nro2 > nro3) {
            diferenca = nro2 - nro3;
            document.getElementById("maior").innerHTML = "A Diferença entre os numeros é de: " + diferenca;
        } else {
            diferenca = nro3 - nro2;
            document.getElementById("maior").innerHTML = "A Diferença entre os numeros é de: " + diferenca;
        }
            break;
        case 3:
            diferenca = nro2 * nro3;
            document.getElementById("maior").innerHTML = "O Pruduto entre os dois numeros é de: " + diferenca;
            break;
        case 4:
            diferenca = nro2 / nro3;
            document.getElementById("maior").innerHTML = "A Divisão entre os numeros é de: " + diferenca;
            break;
        default:
        document.getElementById("maior").innerHTML = "Opção digitada invalida";
            break;
    }
}