function exec11() {
    var num = new Array();
	var numi = new Array();
	var nump = new Array();
			for (var i = 0 ; i <= 9; i++) {
                 num[i]=Number(prompt("digite um número:"))
			}
			for (i = 0; i <= 9; i++) {
                if (num[i]%2 == 0 && num[i]!=0) {
                    nump.push(num[i])
                }
				else if (num[i] %2 == 1){numi.push(num[i])}
            }
            alert ("números pares:" + nump + "<br/>" +   "números impares :" + numi)
}
