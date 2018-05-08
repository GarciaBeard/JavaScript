function exec4() 
{
    var i, j, total, resultado,aux;
    i = 0;
    j = 0;
    aux = "<br>";
    resultado = 0;
    for (i = 1; i <= 10; i++) 
    {
        for (j = 1; j <= 10; j++) 
        {
            total = i * j;
            resultado = resultado + i + " x " + j + "= " + total + "<br>";
          
        }
        if (j = 10) {
            resultado = resultado + "<br>"; 
        }
    }
    document.getElementById("resultado").innerHTML = resultado;
}