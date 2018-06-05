function ex02() {
    var x = [];
    x[0] = parseInt(prompt("Informe a hora"));
    x[1] = parseInt(prompt("Informe os minutos"));
    x[2] = parseInt(prompt("Informe os segundos"));
    alert (soma(x));
}
function soma(x) {
   x[0] = x[0]*3600;
   x[1] = x[1]*60;
    cont = 0;
   for (var i = 0; i < x.length; i++) {
      cont = cont + x[i];
       
   }
    return("a hora convertida em segundos: " + cont);
}