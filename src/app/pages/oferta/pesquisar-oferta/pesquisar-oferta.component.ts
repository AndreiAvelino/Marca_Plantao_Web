import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Oferta } from 'src/models/entidades/oferta';
import { OfertaService } from 'src/services/oferta.service';
import { FiltrarListaOfertaComponent, Filtro } from '../filtrar-lista-oferta/filtrar-lista-oferta.component';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { AgendaService } from 'src/services/agenda.service';
import { Evento } from 'src/models/entidades/evento';
import { Response } from 'src/models/response';
import { TipoEvento } from 'src/enum/enum';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisar-oferta',
  templateUrl: './pesquisar-oferta.component.html',
  styleUrls: ['./pesquisar-oferta.component.css']
})
export class PesquisarOfertaComponent extends PadraoComponent implements OnInit {

  public ofertas: Oferta[] = [];
  public ofertasCadidatadas: Evento[] = []
  public filtros: Filtro = {
    turno: "",
    valorInicial: "0",
    valorFinal: "5000",
    dataInicial: "",
    dataFinal: ""
  }

  constructor(
    private ofertaService: OfertaService,
    public dialog: MatDialog,
    private agendaService: AgendaService
  ) {
    super()
    this.get_all_evento_por_profissional()
  }

  private async get_all_evento_por_profissional(): Promise<void> {
    await this.agendaService.get_all_evento_por_profissional(this.usuarioLogado.id).toPromise()
        .then((x: Response<Evento[]>) => this.ofertasCadidatadas = x.data)
}

  public filtrar_lista_oferta(): void {
    console.log(this.filtros)

    this.dialog.open(FiltrarListaOfertaComponent, {
      width: '500px',
      data: this.filtros
    })
    .afterClosed()
    .pipe(
      tap((x) => {
        this.filtros = {
          turno: x.turno,
          dataInicial: x.dataInicio,
          dataFinal: x.dataFinal,
          valorInicial: x.valorInicial,
          valorFinal: x.valorFinal
        }
      })
    )
    .subscribe((x) => this.get_all(
        x?.dataInicial, 
        x?.dataFinal,
        x?.valorInicial,
        x?.valorFinal,
        x?.turno
    ))
  }

  async ngOnInit(): Promise<void> {
    this.get_all();
  }

  private async get_all(dataInicio?: string, dataFinal?: string, valorInicial?: string, valorFinal?: string, turno?: string): Promise<void> {
    await this.ofertaService.get_all(
      dataInicio, 
      dataFinal,
      parseInt(valorInicial),
      parseInt(valorFinal),
      turno
    ).toPromise()
      .then(x => this.ofertas = x.data.filter(x => !this.ofertasCadidatadas.filter(y => y.tipo ==TipoEvento.Oferta).map(y => y.id).includes(x.id)))
  }

  public onClickBotaoFiltro(): void {
    this.filtrar_lista_oferta();
  }

  public filtrarOfertas(id: string): void {
    this.ofertas = this.ofertas.filter(x => x.id != id)
  }

}
