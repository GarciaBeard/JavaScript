function exec8(){
    //variaveis
    var nro1, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 <= 300.00) {
       diferenca = nro1*1.35
       document.getElementById("maior").innerHTML= "Seu salario foi para: " + diferenca.toFixed(2);
    } else {
        diferenca = nro1*1.15
        document.getElementById("maior").innerHTML= "Seu salario foi para: "+ diferenca.toFixed(2);
    }
    //saida
    
    
}