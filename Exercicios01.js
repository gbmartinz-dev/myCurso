/* A nave espacial mais rápida já constrída pelo
homem é a Voyager 1, que alcança 278.280 
km/h. Em 27/07/2018, o planeta Marte chegou a
ficar a 570000000km da Terra.
Sendo assim, calcule em dias o tempo
necessário para a nave chegar a marte. */

var velocidadeHora = 278280;
var distanciaMarte = 570000000;
var distanciaDia = velocidadeHora * 24;
console.log(distanciaDia);
var dias = distanciaMarte / distanciaDia;
console.log(dias);
