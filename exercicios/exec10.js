function exec10(){
    //variaveis
    var nro1, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 <= 12000.00) {
       diferenca = nro1*1.05
       document.getElementById("maior").innerHTML= "O cuto total do carro é de : R$" +diferenca.toFixed(2);
    } 
    else if (nro1 > 12000 && nro1 <= 25000) {
        diferenca = nro1*1.25
       document.getElementById("maior").innerHTML=  "O cuto total do carro é de : R$" + diferenca.toFixed(2);
    }
    else if (nro1 > 25000) {
        diferenca = nro1*1.35 
        document.getElementById("maior").innerHTML=  "O cuto total do carro é de : R$" + diferenca.toFixed(2);
    }
}
    //saida
    
    