//Funçoes de Texto (String)

let texto = "Aula de JavaScript";

//contar os caracteres (length)
console.log(texto.length); //18

//MAIÚSCULAS e minúsculas
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLowerCase()); //minúsculas

// Partes do Texto
//substring(inicio, fim)
console.log(texto.substring(0,4)); //Aula
//slice(Quantidade)
console.log(texto.slice(-10)); //JavaScript

//Substituir parte do Texto
console.log(texto.replace("Java", "Type"));

//Tesoura (Trim) - Somente começo e fim
let texto1 = "  JavaScript  ";
console.log(texto1); //"  JavaScript  "
console.log(texto1.trim());

// Separar Texto (split) - Caracter Comum
let linguagens = "JavaScript, Python, PHP, Java, C#";
let vetorlinguagens = linguagens.split(", ");
console.log(linguagens);
console.log(vetorlinguagens);

//desafio 
let caracter = "Bom Dia Com Muita Alegria";
let caracaterSemEspaco = caracter.replaceAll(" ", "");
console.log(caracter);
console.log(caracter.length);
console.log(caracaterSemEspaco);
console.log(caracaterSemEspaco.length);