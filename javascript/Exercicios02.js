/* Faça um algoritmo para ler: quantidade atual em
estoque, quantiade máxima em estoque e 
quantidade minima em estoque de um produto.
Calcular e escrever a quantidade média (máxima
+ minima) / 2. Se a quantidade em estoque for
maior ou igual a média, escrever a mensagem
"Não efetuar a compra", se não, escrever
"Efetuar a compra". */

var quantidadeAtual = 70;
var quantidadeMaxima = 80;
var quantidadeMinima = 5;
var quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;
console.log(quantidadeMedia);

if(quantidadeAtual >= quantidadeMedia) {
    console.log("Não efetuar a compra");
} else {
    console.log("Efetuar a compra");
}