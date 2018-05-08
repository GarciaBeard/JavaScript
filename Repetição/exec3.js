//idade de 8 pessoas quantidade de pessoas , porcentagem de pessoas , tabela.
function exec3() {
    var age, i, aux,resultado,por1,por2;
    var fxe1 = 0;
    var fxe2 = 0;
    var fxe3 = 0;
    var fxe4 = 0;
    var fxe5 = 0;
    var aux = "";
    for (var i = 1; i <= 8; i++) {
        age = parseInt(prompt("informe a idade da " + i +"ª pessoa"))
        if (age <= 15 ) {
            fxe1++;
        } else if (age > 15 && age <= 30) {
            fxe2++;
            } else if (age > 30 && age <= 45) {
                fxe3++;
                } else if (age > 45 && age <= 60) {
                    fxe4++;
                    } else if (age > 60) {
                        fxe5++;
                        }
    }
    aux = aux + "<table style='width:40%' border 1px solid black>" + "<tr> <th> Faixa Etária </th>" + "<th> Idade </th></tr>";
    aux = aux + "<tr>" +"<td align=center>" +fxe1 +"</td>" +"<td align=center>" +"Até 15 Anos" + "</td>";
    aux = aux + "<tr>" +"<td align=center>" +fxe2 +"</td>" +"<td align=center>" +"De 16 a 30 Anos" + "</td>";
    aux = aux + "<tr>" +"<td align=center>" +fxe3 +"</td>" +"<td align=center>" +"De 31 a 45 Anos" + "</td>";
    aux = aux + "<tr>" +"<td align=center>" +fxe4 +"</td>" +"<td align=center>" +"De 46 a 60 Anos" + "</td>";
    aux = aux + "<tr>" +"<td align=center>" +fxe5 +"</td>" +"<td align=center>" +"Acima de 60 Anos" + "</td>";
    aux = aux + "</tabela>";
    por1 = fxe1/8*100;
    por2 = fxe5/8*100;
    document.getElementById("resultado").innerHTML = aux + "<br>" + "Pessoas até 15 Anos " + por1 + "%"+ "<br>" + "Pessoas Acima de 60 anos " + por2 + "%";
}