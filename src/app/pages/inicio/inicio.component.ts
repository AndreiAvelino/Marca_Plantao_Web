import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Corevento, Rotas, StatusPlantao, TipoEvento, TipoUsuario } from 'src/enum/enum';
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
      color: "3px solid" + Corevento.Oferta,
      data: eventos.filter(x => x.tipo == TipoEvento.Oferta).length,
      info: "Ofertas"
    })
    this.cards.push({
      color: "3px solid" + Corevento.Plantao_NaoIniciado,
      data: eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.NaoIniciado).length,
      info: "Plantoes a iniciar"
    })
    this.cards.push({
      color: "3px solid" + Corevento.Plantao_Andamento,
      data: eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Andamento).length,
      info: "Plantoes em andamento"
    })
    this.cards.push({
      color: "3px solid" + Corevento.Plantao_Finalizado,
      data: eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Finalizado).length,
      info: "Plantoes finalizados"
    })

  }

  public buscar(): void{
    this.buscando = !this.buscando;

    setTimeout(() => {
      this.router.navigate([Rotas.PesquisarOferta])
    }, 3000)
  }
  
}
