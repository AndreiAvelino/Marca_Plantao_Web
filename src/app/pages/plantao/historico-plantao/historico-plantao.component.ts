import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas, StatusPlantao, TamanhoColunaTabela } from 'src/enum/enum';
import { Plantao } from 'src/models/entidades/plantao';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-historico-plantao',
  templateUrl: './historico-plantao.component.html',
  styleUrls: ['./historico-plantao.component.css']
})
export class HistoricoPlantaoComponent implements OnInit {

  public ListaPlantoes: Array<Plantao> = []

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
    BotaoAcoes: true,
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
