//Estrutura de Dados

// Condicional (if else, switch case)
var precoProduto = 150;

if (precoProduto>=100){
    console.log("Valor a Pagar: "
        +(precoProduto*0.9)); //10% de Desconto
} else{
    console.log("Valor a Pagar: "
        +precoProduto);
}

//switch case
var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Outro Mês");
        break;
}