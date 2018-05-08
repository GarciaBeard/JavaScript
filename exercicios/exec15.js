function exec15(){
    var nro1, resultado, nro2;
    nro1 = parseInt(document.getElementById("nro1").value);
    nro2 = parseFloat(document.getElementById("nro2").value);
    switch (nro1) {
        case 1:
        resultado = nro2*1.03    
            break;
        case 2:
        resultado = nro2*1.04
            break;
    
        default:
        document.getElementById("resul").innerHTML=  "Opção Invalida";
            break;
    }
        document.getElementById("resul").innerHTML= "O Valor Após 1 mes de investimento é de " + resultado.toFixed(2);
        
}