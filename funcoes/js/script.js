/**
 * EXERCÍCIO 00 (JÁ RESOLVIDO)
 */
function escreverOla(nome) {
   console.log("Olá, " + nome + "!"); 
}
escreverOla("Raphael");
escreverOla("Bruno");
escreverOla("Marcelle");

/**
 * EXERCÍCIO 01
 */
function media(n1,n2) {
  
  var media = (n1 + n2) / 2;
  
  console.log("A Média é: " + media);
}
var n1   = parseFloat(prompt("Informe um número(1): "));
var n2   = parseFloat(prompt("Informe um número(2): "));
media(n1,n2)


/**
 * EXERCÍCIO 02
 */
function escreverNumerosAte(i) {
  
   console.log( i);
}
for(var i=0; i < 7; i++){
  escreverNumerosAte(i)
}

/**
 * EXERCÍCIO 03
*/
function divisiveisPor(num1,num2) {
var num3 = num1;
while(num3 <= num2){
  console.log(num3);
  num3=num3+ num1;
}
}
divisiveisPor(7,50)

/**
 * EXERCÍCIO 04
*/
function maiorMenor(vetor) {
  vetor.sort(); 
  console.log(vetor[0]);
  console.log(vetor[vetor.length-1]);
}
var vetor = [10,20,30,40,50,60,70,80,900,100]; 
maiorMenor(vetor)
