function exec14(){
    var nro1, resultado, classi;
    nro1 = parseFloat(document.getElementById("nro1").value);
    if (nro1 < 300) {
        resultado = nro1*1.50
    } else if (nro1 >= 300 && nro1 < 500) {
        resultado = nro1*1.40   
    }
     else if (nro1 >= 500 && nro1 < 700) {
        resultado = nro1*1.30   
        }
    else if (nro1 >= 700 && nro1 < 800) {
        resultado = nro1*1.20   
        }
    else if (nro1 >= 800 && nro1 < 1000) {
        resultado = nro1*1.10   
        }
    else if (nro1 >= 1000) {
        resultado = nro1*1.05   
        }
        document.getElementById("resul").innerHTML= "O seu novo salario é : " + resultado.toFixed(2);
}