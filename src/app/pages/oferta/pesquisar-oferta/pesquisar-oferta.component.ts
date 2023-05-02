import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Oferta } from 'src/models/entidades/oferta';
import { OfertaService } from 'src/services/oferta.service';
import { FiltrarListaOfertaComponent } from '../filtrar-lista-oferta/filtrar-lista-oferta.component';

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
    });
  }

  async ngOnInit(): Promise<void> {
    this.get_all();
  }

  private async get_all(): Promise<void> {
    await this.ofertaService.get_all().toPromise()
      .then(x => this.ofertas = x.data)
  }

  public onClickBotaoFiltro(): void {
    this.filtrar_lista_oferta();
  }

}
