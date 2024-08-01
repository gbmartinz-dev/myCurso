// Estruturas condicionais
let idade = 30;

// 0 - 17 = "Sou menor de idade"
// 18 - 60 = "Sou adulto"
// 60+ = "Estou na melhor idade"

if(idade <= 17){
    console.log("Sou menor de idade");
} else if(idade > 17 && idade < 60) {
    console.log("Sou adulto");
} else {
    console.log("Estou na melhor idade");
}

// 1 - Cadastrar
// 2 - Listar
// 3 - Pesquisar
// 4 - Sair

let menu = 2;
switch (menu) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Listar");
        break;
    case 3:
        console.log("Pesquisar");
        break;
    default:
        console.log("Sair");
}