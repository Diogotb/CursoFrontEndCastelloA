import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  nome: string = "";

  constructor(private dadosService: DadosService){}

  salvarCliente(){
    const cliente = new Cliente(
      this.dadosService.getClientes().length+1, //id -> quantidade de clientes na lista +1
      this.nome //nome
    );
    this.dadosService.adicionarClientes(cliente);
    this.nome="";
    alert("Cliente Adicionado com Sucesso!!!");
  }

}
