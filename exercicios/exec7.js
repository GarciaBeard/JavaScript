function exec7(){
    //variaveis
    var nro1, diferenca;
    //entrada
    nro1 = parseFloat(document.getElementById("nro1").value);
    //processamento
    if (nro1 < 500.00) {
       diferenca = nro1*1.30
       document.getElementById("maior").innerHTML= "Seu salario foi para: " + diferenca.toFixed(2);
    } else {
        document.getElementById("maior").innerHTML= "Você não tem direito ao aumento";
    }
    //saida
    
    
}