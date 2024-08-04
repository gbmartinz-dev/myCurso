/* Crie um programa que, a partir de um número,
calcule quantos números pares e ímpares
existem no intervalo de 0 até ele. */

var numero = 100;
var vezesPar = 0;
var vezesImpar = 0;

while(numero > 0) {
    if (numero % 2 == 0) {
        vezesPar++;
    } else {
        vezesImpar++;
    }
    numero--;
}
console.log(vezesPar);
console.log(vezesImpar);