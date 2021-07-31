date1 = new Date('2014/01/01');
date2 = new Date('2014/04/01');
var diferenca = Math.abs(date1 - date2); //diferença em milésimos e positivo
var dia = 1000*60*60*24; // milésimos de segundo correspondente a um dia
var total = Math.round(diferenca/dia); //valor total de dias arredondado 
console.log(diferenca)