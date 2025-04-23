// Atividade 1: Criar uma classe representando um produto

class Produto {
    constructor(nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //métodos para manipular o estoque
    vender(qtd){
        if(this.estoque<qtd){
            console.log("Estoque insificiente!");
            return;
        }
        return this.estoque -= qtd;
    }
    repor(qtd){
        return this.estoque += qtd;
    }
    //metodo exibir info
    exibirInfo(){
        console.log(`Produto: ${this.nome}, Preco: ${this.preco}, Estoque: ${this.estoque}`);
    }
}

let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(110);
produto1.repor(20);
produto1.vender(110);
produto1.exibirInfo();
