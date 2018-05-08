function soma(){
	// declaração de variável
	var nro1, nro2, resultado;
	// entrada de dados
	// conversão de tipos
	nro1 = parseFloat(document.getElementById("nro1").value);
	nro2 = parseFloat(document.getElementById("nro2").value);
	// processamento
	resultado = nro1 / (nro2*nro2);
	// saída de dados
	document.getElementById("resultado").innerHTML = "o seu IMC é de : " + resultado.toFixed(2);
	if (resultado < 17) {
		document.getElementById("imc").innerHTML = "Muito abaixo do peso"
	} else if (resultado >= 17 && resultado <= 18.49) {
		document.getElementById("imc").innerHTML = "Abaixo do peso"
		}
		else if (resultado >= 18.50 && resultado <= 24.99) {
			document.getElementById("imc").innerHTML = "Peso normal"
		}
			else if (resultado >= 25.00 && resultado <= 29.99) {
				document.getElementById("imc").innerHTML = "	Acima do peso"
			}
				else if (resultado >= 30 && resultado <= 34.99) {
					document.getElementById("imc").innerHTML = "		Obesidade I"
				}
					else if (resultado >= 35 && resultado <= 39.99) {
						document.getElementById("imc").innerHTML = "		Obesidade II (Severa)"
					}
						else if (resultado >= 40) {
							document.getElementById("imc").innerHTML = "		Obesidade III(Morbida)"
						}
}
