function exec12(){
    //variaveis
    var nro1, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 <= 350) {
       diferenca = (nro1+100)*0.93
       document.getElementById("maior").innerHTML= "O seu salario é de : R$" +diferenca.toFixed(2);
    } 
    else if (nro1 > 350 && nro1 <= 600) {
        diferenca = (nro1+75)*0.93
       document.getElementById("maior").innerHTML=  "O seu salario é de : R$" + diferenca.toFixed(2);
    }
    else if (nro1 > 600 && nro1 <= 900) {
        diferenca = (nro1+50)*0.93  
        document.getElementById("maior").innerHTML=  "O seu salario é de : R$" + diferenca.toFixed(2);
    }
    else
    diferenca = (nro1+35)*0.93
    document.getElementById("maior").innerHTML=  "O seu salario é de : R$" + diferenca.toFixed(2);
}
    
    