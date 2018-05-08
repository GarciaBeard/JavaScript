function www() {
    var	num = new Array();
    var	numa = new Array();
    var	numb = new Array();
    for (var i = 0; i < 9; i++) {
        num[i]=Number(prompt("digite um número"));
        numa[i]=Number(prompt("digite um número"));
    numb[i] = num[i] * numa[i]
        }
    alert("resultado do primeiro vezes o segundo" + numb);
}