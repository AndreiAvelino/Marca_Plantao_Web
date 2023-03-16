import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { Oferta } from 'src/models/entidades/oferta';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-listagem-oferta',
  templateUrl: './listagem-oferta.component.html',
  styleUrls: ['./listagem-oferta.component.css']
})
export class ListagemOfertaComponent implements OnInit {

  private ofertas: Array<Oferta> = []

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
