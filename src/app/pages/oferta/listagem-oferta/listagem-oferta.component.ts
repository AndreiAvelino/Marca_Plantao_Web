import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { Oferta } from 'src/models/models';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-listagem-oferta',
  templateUrl: './listagem-oferta.component.html',
  styleUrls: ['./listagem-oferta.component.css']
})
export class ListagemOfertaComponent implements OnInit {

  private ofertas: Array<Oferta> = [
    {
      Id: 0,
      Clinica: "Clinica um",
      Descricao: "Serviço para um plantão de 24h e...",
      idEspecializacao: 0,
      Valor: "1200.00",
      ListaIdCandidatos: [],
      DataPlantao: "2020-02-20",
      DataCadastro: "2020-02-20",
    },
    {
      Id: 0,
      Clinica: "Clinica um",
      Descricao: "Precisamos de alguém para...",
      idEspecializacao: 0,
      Valor: "600.00",
      ListaIdCandidatos: [],
      DataPlantao: "2020-02-20",
      DataCadastro: "2020-02-20",
    },
    {
      Id: 0,
      Clinica: "Clinica um",
      Descricao: "O hospital tal necessita de tal...",
      idEspecializacao: 0,
      Valor: "10.00",
      ListaIdCandidatos: [],
      DataPlantao: "2020-02-20",
      DataCadastro: "2020-02-20",
    },
    {
      Id: 0,
      Clinica: "Clinica um",
      Descricao: "Precisamos de alguém para algo",
      idEspecializacao: 0,
      Valor: "10000.00",
      ListaIdCandidatos: [],
      DataPlantao: "2020-02-20",
      DataCadastro: "2020-02-20",
    }    
  ]

  private Colunas: Array<ColunaTabela> = [
    {
      Chave: "Descricao",
      Descricao: "Descrição",
      Tamanho: "50"
    },
    {
      Chave: "DataPlantao",
      Descricao: "Data do plantão",
      Tamanho: "15"
    },
    {
      Chave: "Valor",
      Descricao: "Valor",
      Tamanho: "10"
    },
  ]


  public Tabela: Tabela = {
    Registros: this.ofertas,
    Colunas: this.Colunas,
    BotaoAlterar: true,
    BotaoExcluir: true,
    BotaoLinha: false,
    Filtro: false,
    Titulo: "Lista de ofertas"
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public VerOferta(): void {
    this.router.navigate([Rotas.ConfigurarOferta])
  }

}
