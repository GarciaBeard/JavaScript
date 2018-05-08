function Exec1() {
 var N1,N2,N3,N4,aux,i,br;
 N1 = parseFloat(document.getElementById("N1").value);   
 N2 = parseFloat(document.getElementById("N2").value); 
 N3 = parseFloat(document.getElementById("N3").value);
 N4 = parseFloat(document.getElementById("N4").value);
aux = 0;
br = "<br>";

    for (var i = 0; i < 3; i++ ) {
        if (N1 > N2) {
            aux = N1;
            N1 = N2;
            N2 = aux;
        }
        if (N2 > N3) {
            aux = N2;
            N2 = N3;
            N3 = aux;
        }
        if (N3 > N4) {
            aux = N3;
            N3 = N4;
            N4 = aux;
        }
    }   
    document.getElementById("resultado").innerHTML = "Crecente: "+ N1 + " | " + N2 + " | " + N3 + " | " + N4 + br + "Decrecente: " + N4 + " | " + N3 + " | " + N2 + " | " + N1;
}
