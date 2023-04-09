import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/models/entidades/oferta';
import { OfertaService } from 'src/services/oferta.service';

@Component({
  selector: 'app-pesquisar-oferta',
  templateUrl: './pesquisar-oferta.component.html',
  styleUrls: ['./pesquisar-oferta.component.css']
})
export class PesquisarOfertaComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(
    private ofertaService: OfertaService
  ) {}

  async ngOnInit(): Promise<void> {
    this.get_all();
  }

  private async get_all(): Promise<void> {
    await this.ofertaService.get_all().toPromise()
      .then(x => this.ofertas = x.data)
  }

}
