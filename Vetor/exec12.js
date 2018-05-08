function exec12() {
var num = new Array();
var t=0;
    for ( i =  0; i < 5; i++) {
        num[i]=Number(prompt("insira um numero"));
        t+=num[i];
    }
    alert("Os números digitados foram:" + num[0]+" + "+num[1]+" + "+num[2]+" + "+num[3]+" + "+num[4]+"=" + t);
}
