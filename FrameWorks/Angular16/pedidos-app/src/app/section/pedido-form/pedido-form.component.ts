import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss'],
})
export class PedidoFormComponent {
  clienteSelecionadoId = '';
  clientes: Cliente[];
  produtos: Produto[];
  produtosSelecionado: string[] = [];
  desconto = 0;

  constructor(private dadosService: DadosService) {
    this.clientes = dadosService.getClientes();
    this.produtos = dadosService.getProdutos();
  }

  // métodos
  mudarProduto(id: string) {
    const index = this.produtosSelecionado.indexOf(id);
    if (index >= 0) {
      this.produtosSelecionado.splice(index, 1);
    } else {
      this.produtosSelecionado.push(id);
    }
  }

  salvarPedido() {
    const cliente = this.clientes.find(
      (c) => c.id.toString() === this.clienteSelecionadoId
    );
    const produtos = this.produtos.filter((p) =>
      this.produtosSelecionado.includes(p.id.toString())
    );
    if (!cliente || produtos.length === 0) {
      alert('Selecione um cliente e pelo menos um produto!!!');
      return;
    } else {
      const pedido = new Pedido(
        Date.now(),
        cliente,
        produtos,
        this.desconto
      );
      this.dadosService.addPedido(pedido);
      this.clienteSelecionadoId = "";
      this.produtosSelecionado = [];
      this.desconto = 0;
      alert("Pedido Registrado com Sucesso!!!")
    }
  }
}
