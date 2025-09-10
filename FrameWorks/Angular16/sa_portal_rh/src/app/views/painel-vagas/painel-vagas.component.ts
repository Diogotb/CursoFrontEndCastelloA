import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  //controler ->
  //atributos
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  //rastrear os dados no formulário por interpolação {{}}
  public vagas: Vaga[] = []; // vetor para armazenar as vagas do BD

  //construtor
  constructor(private _vagasService: VagasService) {}
  // aplicando o service no contrutor

  // método onInit
  ngOnInit(): void {
    this.listarVagas();
  }

  // 4 métodos para o crud
  //READ - Vagas
  listarVagas() {
    this._vagasService.getVagas().subscribe(
      // subscribe é um método do Observable que permite recerber os dados e tratar para vetor
      (e) => {
        // listar vaga por vaga dentro do vetor
        this.vagas = e.map((vaga) => {
          return new Vaga(
            vaga.id,
            vaga.nome,
            vaga.foto,
            vaga.descricao,
            vaga.salario
          );
        });
      }
    );
  }

  //listar Vaga por ID -READ - vaga unica
  listarVagaPorId(vaga: Vaga): void {
    // método para listar uma vaga no Formulário para Edição
    this.vaga = vaga;
    //a Vaga clicada é definida como a vaga atual do Formulário
  }

  // CREATE - Vaga
  cadastrarVaga(): void {
    this._vagasService.postVaga(this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o Formulário
        this.listarVagas(); //lista as vagas novamente
      },
      (error) => {
        console.error('Erro ao Cadastrar Vaga: ', error);
      }
    );
  }

  // UPDATE - VAga
  atualizarVaga(id: any): void {
    this._vagasService.putVaga(id, this.vaga).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o formulário
        this.listarVagas(); //lista as vaga novamente
      },
      (error) => {
        console.error('Erro ao Atualizar Vaga: ', error);
      }
    );
  }

  //DELETE Vaga
  excluirVaga(id: any): void {
    this._vagasService.deleteVaga(id).subscribe(
      () => {
        this.vaga = new Vaga(0, '', '', '', 0); //limpa o formulário
        this.listarVagas(); //lista as vaga novamente
      },
      (error) => {
        console.error('Erro ao Deletar Vaga: ', error);
      }
    );
  }
}
