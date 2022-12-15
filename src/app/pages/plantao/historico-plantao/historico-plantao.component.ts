import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas, StatusPlantao, TamanhoColunaTabela } from 'src/enum/enum';
import { Plantao } from 'src/models/models';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-historico-plantao',
  templateUrl: './historico-plantao.component.html',
  styleUrls: ['./historico-plantao.component.css']
})
export class HistoricoPlantaoComponent implements OnInit {

  public ListaPlantoes: Array<Plantao> = [
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21",
      Clinica: "Clinica São João Batista",
      Valor: "R$600,00",
      Profissional: "Carlos José Maranhão",
      AvaliacaoClinica: {
        Id: 0,
        idPlantao: 0,
        Nota: 1,
        Descricao: "",
      }
    },
    {
      Id: 0,
      idOferta: 2,
      idUsuario: 2,
      Status: StatusPlantao.NaoIniciado,
      DataCadastro: "2020-10-21",
      Clinica: "Clinica São João Batista",
      Valor: "R$700,00",
      Profissional: "Carlos José Maranhão"
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21",
      Clinica: "Clinica Icaraí",
      Valor: "R$300,00",
      Profissional: "Carlos José Maranhão",
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21",
      Clinica: "Clinica São João Batista",
      Valor: "R$666,00",
      Profissional: "Carlos José Maranhão",
      AvaliacaoClinica: {
        Id: 0,
        idPlantao: 0,
        Nota: 1,
        Descricao: "",
      },
      AvaliacaoProfissional: {
        Id: 0,
        idPlantao: 0,
        Nota: 1,
        Descricao: "",
      }
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21",
      Clinica: "Clinica São João Batista",
      Valor: "R$600,00",
      Profissional: "Carlos José Maranhão",
      AvaliacaoProfissional: {
        Id: 0,
        idPlantao: 0,
        Nota: 1,
        Descricao: "",
      }
    },
  ]

  public Colunas: Array<ColunaTabela> = [
    {
      Chave: "idOferta",
      Descricao: "Id da oferta",
      Tamanho: "10"
    },
    {
      Chave: "Clinica",
      Descricao: "Clínica",
      Tamanho: "30"
    },
    {
      Chave: "Valor",
      Descricao: "Valor",
      Tamanho: "10"
    },
    {
      Chave: "Profissional",
      Descricao: "Profissional",
      Tamanho: "30"
    },
    {
      Chave: "Status",
      Descricao: "Status",
      Tamanho: "80"
    }
  ]

  public Tabela: Tabela = {
    Registros: this.ListaPlantoes,
    Colunas: this.Colunas,
    BotaoAlterar: true,
    BotaoExcluir: true,
    BotaoLinha: false,
    Filtro: false,
    Titulo: "Historico de plantões"
  }
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public VerPlantao(): void {
    this.router.navigate([Rotas.InfoPlantao])
  }

}
