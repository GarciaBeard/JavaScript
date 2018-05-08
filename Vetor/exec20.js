function exec20() {
    num = new Array();
    numi = new Array();
    nump = new Array();
    for (i =0 ; i < 3; i++) {
        num[i]=Number(prompt("digite um número:"));
        if (num[i]%1==0) {
            numi.push(num[i])
        }
            else if (num[i]%1==0 && num[i]>0) {
                nump.push(num[i])
            }   
    }
    alert("numeros positivos:" + nump);
}