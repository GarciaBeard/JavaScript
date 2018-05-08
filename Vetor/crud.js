function insere() {
    do {
        var numero = parseInt(prompt("Informe um Numero: \n 0 - para parar"));
        if (numero != 0) {
         vetor.push(numero);   
        }
    } while (numero != 0);
    //adiciona elemento no vetor
}
function consulta() {    
    var saida = 0;
    for (var index = 0; index < vetor.length; index++) {
        var saida = saida + vetor[index] + "\n";
    }
    alert(saida);
}
function remove() {
    var numero = parseInt(prompt("Informe o Numero: "));
    //procura posição
    var posicao = 0;
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] == numero) {
            posicao = i;
            break; //para de procurar
        }
    }
    if (i == vetor.length) {
        alert("elemento não encontrado");
    } else {
        vetor.splice(posicao,1);    
        alert("Elemento removido !");
    }
}
function atualiza() {
    var numero = parseInt(prompt("Informe um Numero"));
    var posicao = 0;
    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] == numero) {
            posicao = i;
            break;
        }        
    }
    if (i == vetor.length) {
        alert ("Elemento não encontrado");
    } else {
        var novo = parseInt(prompt("informe novo número: "));
        vetor[posicao] = novo;
        alert("Elemento: " + numero + " alterado para :" + novo);
    }
}