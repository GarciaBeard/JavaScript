function nota (){
	//variaveis
	var nro1, nro2, media,mensagem;
	//entrada
	nro1 = parseFloat(document.getElementById("nro1").value);
	nro2 = parseFloat(document.getElementById("nro2").value);
	//processamento
	media = (nro1 + nro2) / 2;
	//saida de dados
	if (media < 3.0) {
		mensagem = " Reprovado";
	} else if (media >= 3 && media <= 7) {
		mensagem = " Exame";
	}
	else if (media > 7) {
		mensagem = " Aprovado";
	}
	document.getElementById("media").innerHTML = "A Media da sua nota é :" + media.toFixed(2); 
	document.getElementById("mensagem").innerHTML = " Situação : " + mensagem
}