// Funções

function verificarIdade(idade) {
    if(idade <= 17){
        return "Sou menor de Idade.";
    } else if(idade > 17 && idade < 60) {
        return "Sou um Adulto.";
    } else {
        return "Estou na melhor Idade";
    }
}

console.log(verificarIdade(14));
console.log(verificarIdade(26));
console.log(verificarIdade(72));