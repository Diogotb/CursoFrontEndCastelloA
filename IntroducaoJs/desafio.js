//import da biblioteca
const prompt = require("prompt-sync")();

//desafio 1 - Idade - entrada de dados

var idade = prompt("Informe sua Idade: ");
//condição
if(idade<18){
    console.log("Menor de Idade");
} else if(idade<60){
    console.log("Adulto");
} else{
    console.log("Idoso")
}

//desafio 2 - Tabuada
var numero = 5;

for(let i = 0; i<=20; i++){
    console.log(numero+" X "+i+" = "+(numero*i));
}

//desafio 3 - Nºs Pares
for(let i = 1; i<=20; i++){
    let resto = i%2;
    if(resto == 0){
        console.log("Nº "+i+" é Par")
    }
}