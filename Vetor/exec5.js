function exec5(){
    var logica = new Array(); 
    var programacao = new Array();
    var interseccao = new Array();
	// entrada de dados
    for(var i = 0; i < 10; i++){
        logica.push(parseInt(prompt("Informe matri­cula na disciplina de Lógica: ")));
    }
    for(var i = 0; i < 5; i++){
        programacao.push(parseInt(prompt("Informe matrí­cula na disciplina de Programação: ")));
    }
    // processamento
    for(var i = 0; i < 10; i++){ // para cada aluno de logica
        for(var j=0;j<5;j++){
            if (logica[i] == programacao[j]){
                interseccao.push(logica[i]);
            }
        }
    }
    //saida
    alert("Interesecão " + interseccao);
}