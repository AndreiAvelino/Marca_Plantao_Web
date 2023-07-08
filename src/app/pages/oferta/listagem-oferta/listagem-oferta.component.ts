import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas, TipoEvento } from 'src/enum/enum';
import { AdicionarRemoverProfissionalOfertaDados, Oferta } from 'src/models/entidades/oferta';
import { ColunaTabela, Medida, Tabela } from 'src/models/table';
import { OfertaService } from 'src/services/oferta.service';
import { BotoesOpcoesListagemOfertaComponent, OpcoesOferta } from './botoes-opcoes-listagem-oferta/botoes-opcoes-listagem-oferta.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Evento } from 'src/models/entidades/evento';


@Component({
  selector: 'app-listagem-oferta',
  templateUrl: './listagem-oferta.component.html',
  styleUrls: ['./listagem-oferta.component.css']
})
export class ListagemOfertaComponent extends PadraoComponent implements OnInit, AfterContentChecked {

  private ofertas: Array<Oferta> = []

  private Colunas: Array<ColunaTabela> = [
    {
      Chave: "razaoSocial",
      Descricao: "Clínica",
      Tamanho: "130",
      Medida: Medida.Pixel
    },
    {
      Chave: "dataInicial",
      Descricao: "Data do plantão",
      Tamanho: "130",
      Medida: Medida.Pixel
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
    private cdref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet,
    private ofertaService: OfertaService
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

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  public async abrir_sheet(linha: any): Promise<void>{
    await this._bottomSheet.open(BotoesOpcoesListagemOfertaComponent).afterDismissed().toPromise()
      .then(x => {
        switch(x) {
          case OpcoesOferta.VER_OFERTA: this.ver_oferta(linha);
                                        break;
          case OpcoesOferta.CANCELAR:   this.cancelar_oferta(linha.id);
                                        break;
        }
      })
  }

  private ver_oferta(linha: any): void{
    this.router.navigate([Rotas.InfoOferta],  {
      queryParams: { id: linha.id},
    })
  }


  private async cancelar_oferta(id: string): Promise<void> {
    let obj: AdicionarRemoverProfissionalOfertaDados = {
      profissionalId: this.usuarioLogado.id,
      ofertaId: id
    }

    await this.ofertaService.remover_candidato_oferta(obj).toPromise()
      .then(() => this.toastr.success('Candidatura cancelada'))
      .then(() => {
        this.Tabela = {
          ...this.Tabela,
          Registros: this.Tabela.Registros.filter((x: Evento) => x.id != id)
        }
      })
      .catch((e: HttpErrorResponse) => this.toastr.error(e.message))
  }
}
