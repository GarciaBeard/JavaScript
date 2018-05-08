function exec7 (){
var idade,altura,peso, i, cont,aux1,auxalt,auxpeso,media,porcentagem; 
aux1 = 0
auxpeso = 0
cont = 0
auxalt = 0
media = 0
i = 1    
for ( i = 1; i <= 5; i++) {
    idade = parseInt(prompt("Informe a idade da pessoa Nº"+ i + " : "));
    altura = parseFloat(prompt("Informe a Altura da pessoa Nº"+ i + " : "));
    peso = parseFloat(prompt("Informe o Peso da pessoa Nº"+ i + " : "));

    if (idade >= 50) {
         cont = cont + 1;
    } else if (idade >= 10 && idade <= 20){ 
       aux1 = aux1 + 1; 
        auxalt = auxalt + altura;
    }
    if (peso <=40) {
        auxpeso = auxpeso + 1;           
    }
}
media = auxalt/aux1;
porcentagem = (auxpeso/5)*100;
document.getElementById("resultado").innerHTML = "Pessoas com mais de 50 Anos: " + cont + "<br>" + "Altura das pessoas com idade entre 10 e 20 Anos : " + media.toFixed(2) + "<br>" + "% de pessoas com peso inferior a 40Kg: " + porcentagem.toFixed(2);
}