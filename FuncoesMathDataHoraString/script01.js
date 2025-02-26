// Funções de Data e Hora
// Classe Date() => Objeto

let agora = new Date(); //objeto => Date()
console.log(agora.toDateString());
console.log(agora.toLocaleDateString());

//get
console.log(agora.getFullYear()); //2025

//set()
agora.setFullYear(2030);
console.log(agora.toLocaleDateString());

//operações de Data
let data1 = new Date('2025-02-04');
let data2 = new Date('2025-12-17');

let diferenca = data2 - data1;

console.log(diferenca/(1000*60*60*24));