import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Oferta } from 'src/models/entidades/oferta';
import { OfertaService } from 'src/services/oferta.service';
import { FiltrarListaOfertaComponent } from '../filtrar-lista-oferta/filtrar-lista-oferta.component';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pesquisar-oferta',
  templateUrl: './pesquisar-oferta.component.html',
  styleUrls: ['./pesquisar-oferta.component.css']
})
export class PesquisarOfertaComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(
    private ofertaService: OfertaService,
    public dialog: MatDialog
  ) {}

  public filtrar_lista_oferta(): void {
    this.dialog.open(FiltrarListaOfertaComponent, {
      width: '500px'
    })
    .afterClosed()
    .pipe(tap(x => console.log(x)))
    .subscribe((x) => this.get_all(
        x.dataInicial, 
        x.dataFinal,
        x.valorInicial,
        x.valorFinal,
        x.turno
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
      .then(x => this.ofertas = x.data)
  }

  public onClickBotaoFiltro(): void {
    this.filtrar_lista_oferta();
  }

}
