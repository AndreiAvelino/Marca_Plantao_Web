import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas, TipoEvento } from 'src/enum/enum';
import { Oferta } from 'src/models/entidades/oferta';
import { ColunaTabela, Tabela } from 'src/models/table';
import { AgendaService } from 'src/services/agenda.service';
import { OfertaService } from 'src/services/oferta.service';

@Component({
  selector: 'app-listagem-oferta',
  templateUrl: './listagem-oferta.component.html',
  styleUrls: ['./listagem-oferta.component.css']
})
export class ListagemOfertaComponent extends PadraoComponent implements OnInit {

  private ofertas: Array<Oferta> = []

  private Colunas: Array<ColunaTabela> = [
    {
      Chave: "razaoSocial",
      Descricao: "Clínica",
      Tamanho: "70"
    },
    {
      Chave: "dataInicial",
      Descricao: "Data do plantão",
      Tamanho: "30"
    }
  ]


  public Tabela: Tabela = {
    Registros: this.ofertas,
    Colunas: this.Colunas,
    BotaoAlterar: false,
    BotaoExcluir: false,
    BotaoLinha: false,
    BotaoAcoes: true,
    Filtro: false,
    Titulo: "Lista de ofertas",
    Margem: "10px"
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.Tabela.Registros = this.route.snapshot.data.eventos.filter(x => x.tipo == TipoEvento.Oferta).map(x => {
      return {
        ...x,
        dataInicial: this.retorna_legivel_de_yyyymmddhhmmss(x.dataInicial),
      }
    })
  }

  public VerOferta(): void {
    this.router.navigate([Rotas.ConfigurarOferta])
  }

}
