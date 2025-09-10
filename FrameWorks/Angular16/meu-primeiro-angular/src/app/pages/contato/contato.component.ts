import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparDados(){
    this.nome = "";
    this.email= "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  validarDados(){
    //nome >=3
    // conter @
    // idade >=18
    // telefone = somente numeros
    // todos os campos preenchidos
    const erros: string[] = [];
    const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;


    if(this.nome.trim().length<3){
      erros.push("Nome inválido");
    }
    if(!this.email.includes("@")){
      erros.push("Email inválido");
    }
    if(!this.telefone.trim() || !telefoneRegex.test(this.telefone)){
      erros.push("Telefone inválido");
    }
    if(this.idade===null  || this.idade<18){
      erros.push("Idade Inválida");
    }
    if(!this.profissao.trim()){
      erros.push("Profissão Inválida");
    }

    if(erros.length>0){
      alert("Erros no Formulário:\n"+erros.join("\n"));
      return
    } else{
      alert("Formulário Enviado com Sucesso")
      this.limparDados();
    }

  }
}
