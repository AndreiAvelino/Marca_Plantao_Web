import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas, TipoEvento, TipoUsuario } from 'src/enum/enum';
import { Evento } from 'src/models/entidades/evento';
import { AgendaService } from 'src/services/agenda.service';
import { OfertaService } from 'src/services/oferta.service';
import { PlantaoService } from 'src/services/plantao.service';

interface Card {
  color: string;
  data: number;
  info: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent extends PadraoComponent {

  public buscando: boolean = false;

  public cards: Card[] = []

  constructor(
    private router: Router,
    private agendaService: AgendaService
  ) {
    super()
  }

  public async ngOnInit(): Promise<void> {
    await this.get_all_evento();
  }

  private async get_all_evento(): Promise<void> {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      await this.agendaService.get_all_evento_por_clinica(this.usuarioLogado.clinicaId).toPromise()
        .then(x => this.gerar_cards(x.data))
    }    
  }

  private gerar_cards(eventos: Evento[]): void {
    let datahora = this.gerar_data_hora_atual();

    this.cards.push({
      color: "red",
      data: eventos.filter(x => x.tipo == TipoEvento.Oferta).length,
      info: "Ofertas"
    })
    this.cards.push({
      color: "green",
      data: eventos.filter(x => x.tipo == TipoEvento.Plantao && (x.dataInicial <= datahora && x.dataFinal > datahora)).length,
      info: "Plantoes em andamento"
    })
    this.cards.push({
      color: "green",
      data: eventos.filter(x => x.tipo == TipoEvento.Plantao && x.dataInicial >= datahora).length,
      info: "Plantoes a iniciar"
    })
  }

  public buscar(): void{
    this.buscando = !this.buscando;

    setTimeout(() => {
      this.router.navigate([Rotas.PesquisarOferta])
    }, 3000)
  }
  
}
