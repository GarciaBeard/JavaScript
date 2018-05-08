function exec13(){
    var nro1, resultado, classi;
    nro1 = parseFloat(document.getElementById("nro1").value);
    if (nro1 < 50) {
        resultado = nro1*1.05
    } else if (nro1 >= 50 && nro1 < 100) {
        resultado = nro1*1.10   
    }
     else if (nro1 >= 100) {
        resultado = nro1*1.15    
        }
        if (nro1 < 80) {
            classi = "Barato"
        } else if (nro1 >= 80 && nro1 < 120) {
            classi = "Normal"   
        }
         else if (nro1 >= 120 && nro1 < 200) {
            classi = "Caro"    
            }
        else if (nro1 >= 200) {
            classi = "Muito Caro"
        }
        document.getElementById("resul").innerHTML= "O Valor Final é de: " + resultado.toFixed(2);
        document.getElementById("resul2").innerHTML=  classi;
}