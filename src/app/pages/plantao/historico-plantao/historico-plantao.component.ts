import { Component, OnInit } from '@angular/core';
import { StatusPlantao, TamanhoColunaTabela } from 'src/enum/enum';
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
      DataCadastro: "2020-10-21"
    },
    {
      Id: 0,
      idOferta: 2,
      idUsuario: 2,
      Status: StatusPlantao.NaoIniciado,
      DataCadastro: "2020-10-21"
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21"
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21"
    },
    {
      Id: 0,
      idOferta: 1,
      idUsuario: 1,
      Status: StatusPlantao.Finalizado,
      DataCadastro: "2020-10-21"
    },
  ]

  public Colunas: Array<ColunaTabela> = [
    {
      Chave: "idOferta",
      Descricao: "Id da oferta",
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
