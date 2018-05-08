function soma(){
	// declaração de variável
	var nro1, nro2, resultado,consulta;
	// entrada de dados
	// conversão de tipos
	nro1 = parseFloat(document.getElementById("nro1").value);
	nro2 = parseFloat(document.getElementById("nro2").value);
	// processamento
	resultado = nro1 / (nro2*nro2);
	// saída de dados
	if (resultado < 17) {
		Consulta = "Muito Abaixo do Peso"
	} else if (resultado >= 17 && resultado <= 18.49) {
		consulta = "Abaixo do peso";
		}
		else if (resultado >= 18.50 && resultado <= 24.99) {
			consulta = "Peso normal"
		}
			else if (resultado >= 25.00 && resultado <= 29.99) {
				consulta = "	Acima do peso";
			}
				else if (resultado >= 30 && resultado <= 34.99) {
					consulta = "		Obesidade I";
				}
					else if (resultado >= 35 && resultado <= 39.99) {
						consulta = "		Obesidade II (Severa)";
					}
						else if (resultado >= 40) {
							consulta = "		Obesidade III(Morbida)";
						}
						document.getElementById("resultado").innerHTML = "o seu IMC é de : " + resultado.toFixed(2) + " Classicado como " + consulta;
}
