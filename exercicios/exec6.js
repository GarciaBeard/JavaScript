function exec6(){
    //variaveis
    var nro1, nro2, nro3, diferenca;
    //entrada
    nro1 = (document.getElementById("nro1").value);
    nro2 = parseFloat(document.getElementById("nro2").value);
    nro3 = parseFloat(document.getElementById("nro3").value);
    //processamento
    //saida
    switch (nro1) {
        case "A":
        diferenca = nro2**nro3;
        document.getElementById("maior").innerHTML = "O primeiro numero elevado ao segundo é : " + diferenca;
            break;
        case "B":
        document.getElementById("maior").innerHTML = "A Raiz² do primeiro numero é: " + Math.sqrt(nro2).toFixed(2);
        document.getElementById("menor").innerHTML = "A Raiz² do segundo numero é: " + Math.sqrt(nro3).toFixed(2);
            break;
        case "C":
            document.getElementById("maior").innerHTML = "A Raiz³ do primeiro numero é: " + Math.cbrt(nro2).toFixed(2);
            document.getElementById("menor").innerHTML = "O Raiz³ do segundo numero é: " + Math.cbrt(nro2).toFixed(2);
            break;
        default:
        document.getElementById("maior").innerHTML = "Opção digitada invalida";
            break;
    }
}