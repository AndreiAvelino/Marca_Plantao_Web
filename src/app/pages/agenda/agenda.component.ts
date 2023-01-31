import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { StatusPlantao } from 'src/enum/enum';
import { Plantao } from 'src/models/models';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventoComponent } from './evento/evento.component';

const ListaPlantoes: Array<Plantao> = [
  {
    Id: 0,
    idOferta: 1,
    idUsuario: 1,
    Status: StatusPlantao.Finalizado,
    DataCadastro: "2020-10-21",
    Clinica: "Clinica São João Batista",
    Valor: "R$600,00",
    Profissional: "Carlos José Maranhão",
    AvaliacaoClinica: {
      Id: 0,
      idPlantao: 0,
      Nota: 1,
      Descricao: "",
    }
  },
  {
    Id: 0,
    idOferta: 2,
    idUsuario: 2,
    Status: StatusPlantao.NaoIniciado,
    DataCadastro: "2020-10-21",
    Clinica: "Clinica São João Batista",
    Valor: "R$700,00",
    Profissional: "Carlos José Maranhão"
  },
  {
    Id: 0,
    idOferta: 1,
    idUsuario: 1,
    Status: StatusPlantao.Finalizado,
    DataCadastro: "2020-10-21",
    Clinica: "Clinica Icaraí",
    Valor: "R$300,00",
    Profissional: "Carlos José Maranhão",
  },
  {
    Id: 0,
    idOferta: 1,
    idUsuario: 1,
    Status: StatusPlantao.Finalizado,
    DataCadastro: "2020-10-21",
    Clinica: "Clinica São João Batista",
    Valor: "R$666,00",
    Profissional: "Carlos José Maranhão",
    AvaliacaoClinica: {
      Id: 0,
      idPlantao: 0,
      Nota: 1,
      Descricao: "",
    },
    AvaliacaoProfissional: {
      Id: 0,
      idPlantao: 0,
      Nota: 1,
      Descricao: "",
    }
  },
  {
    Id: 0,
    idOferta: 1,
    idUsuario: 1,
    Status: StatusPlantao.Finalizado,
    DataCadastro: "2020-10-21",
    Clinica: "Clinica São João Batista",
    Valor: "R$600,00",
    Profissional: "Carlos José Maranhão",
    AvaliacaoProfissional: {
      Id: 0,
      idPlantao: 0,
      Nota: 1,
      Descricao: "",
    }
  },
]

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent extends PadraoComponent implements OnInit {

  @ViewChild('calendario') calendario: Calendar

  public calendarOptions: CalendarOptions = null

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.iniciaCalendario();
  }

  private iniciaCalendario(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      eventClick: (e => this.onEventoClick(e)),
      dateClick: (e => this.onDataClick(e)),
      locale: 'pt-br',
      initialView: 'dayGridMonth',
    
      events: [
        { title: 'Plantao medico X', date: '2023-01-03' },
        { title: 'Plantao medico Y', date: '2023-01-16' }
      ]
    };

    
  }

  private onDataClick(e: DateClickArg): void {
    this.criarEvento();
  }

  private onEventoClick(e: EventClickArg): void {
    this.alterarEvento();
  }

  public onButtonProximoDiaClick(): void {
    this.calendario.prev()
  } 

  public onButtonAnteriorDiaClick(): void {
    this.calendario.next()
  } 

  public onButtonHojeDiaClick(): void {
    this.calendario.today()
  } 

  private criarEvento(): void {
    this.dialog.open(EventoComponent)
  }

  private alterarEvento(): void {
    this.dialog.open(EventoComponent)
  }

}
