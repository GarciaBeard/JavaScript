function exec9(){
    //variaveis
    var nro1, diferenca,saldo;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 <= 200.00) {
       diferenca = nro1*1.10 - nro1
       saldo = nro1*1.10
       document.getElementById("maior").innerHTML= "Seu Saldo medio agora é: " +saldo.toFixed(2) + " e seu credito foi de :" + diferenca.toFixed(2);
    } 
    else if (nro1 > 200 && nro1 <= 300) {
        diferenca = nro1*1.20 - nro1
       saldo = nro1*1.20
       document.getElementById("maior").innerHTML= "Seu Saldo medio agora é: " +saldo.toFixed(2) + " e seu credito foi de :" + diferenca.toFixed(2);
    }
    else if (nro1 > 300 && nro1 <= 400) {
        diferenca = nro1*1.25 - nro1
        saldo = nro1*1.25
        document.getElementById("maior").innerHTML= "Seu Saldo medio agora é: " +saldo.toFixed(2) + " e seu credito foi de :" + diferenca.toFixed(2);
    }
    else if (nro1 > 400) {
        diferenca = nro1*1.30 - nro1
        saldo = nro1*1.30
        document.getElementById("maior").innerHTML= "Seu Saldo medio agora é: " +saldo.toFixed(2) + " e seu credito foi de :" + diferenca.toFixed(2);
    } {

    }

}
    //saida
    
    