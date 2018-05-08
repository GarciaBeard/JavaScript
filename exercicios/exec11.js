function exec11(){
    //variaveis
    var nro1, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 <= 300) {
       diferenca = nro1*1.15
       document.getElementById("maior").innerHTML= "O seu novo salario é de : R$" +diferenca.toFixed(2);
    } 
    else if (nro1 > 300 && nro1 <= 600) {
        diferenca = nro1*1.10
       document.getElementById("maior").innerHTML=  "O seu novo salario é de : R$" + diferenca.toFixed(2);
    }
    else if (nro1 > 600 && nro1 <= 900) {
        diferenca = nro1*1.05  
        document.getElementById("maior").innerHTML=  "O seu novo salario é de : R$" + diferenca.toFixed(2);
    }
    else
    document.getElementById("maior").innerHTML=  "Você não teve aumento de salario" + nro1.toFixed(2);
}
    //saida
    
    