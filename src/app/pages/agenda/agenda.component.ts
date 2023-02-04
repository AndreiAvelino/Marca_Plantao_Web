import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { StatusPlantao } from 'src/enum/enum';
import { Oferta, Plantao } from 'src/models/models';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventoComponent } from './evento/evento.component';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ConfigurarOfertaComponent } from '../oferta/configurar-oferta/configurar-oferta.component';

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

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent extends PadraoComponent implements OnInit {

  @ViewChild('calendario') calendario: FullCalendarComponent

  public calendarOptions: CalendarOptions = null

  public mesano: string 

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.iniciaCalendario();
    this.preencherDataInicial();
  }

  private iniciaCalendario(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      eventClick: (e => this.onEventoClick(e)),
      dateClick: (e => this.onDataClick(e)),
      height: "85vh",
      headerToolbar: {
        left:   '',
        center: '',
        right:  ''
      },
      locale: 'pt-br',
      initialView: 'dayGridMonth',
    
      events: [
        { title: 'Plantao medico X', date: '2023-02-03' },
        { title: 'Plantao medico Y', date: '2023-02-16' }
      ]
    };
    
  }

  private preencherDataInicial(): void {
    let d = new Date();
    this.mesano = `${monthNames[d.getMonth()]} de ${d.getFullYear()}`
  }

  private atualizarData(): void {
    this.mesano = `${monthNames[this.calendario.getApi().getDate().getMonth()]} de ${this.calendario.getApi().getDate().getFullYear()}`
  }

  private onDataClick(e: DateClickArg): void {
    this.criarEvento(e.dateStr);
  }

  private onEventoClick(e: EventClickArg): void {
    this.alterarEvento();
  }

  public onButtonProximoDiaClick(): void {
    this.calendario.getApi().next()
    this.atualizarData();
  } 

  public onButtonAnteriorDiaClick(): void {
    this.calendario.getApi().prev()
    this.atualizarData();
  } 

  public onButtonHojeDiaClick(): void {
    this.calendario.getApi().today()
    this.atualizarData();
  } 

  private criarEvento(date: string): void {
    let layout = {
      height: '650px',
      width: '80%',
    }

    let data = {
      DataPlantao: date
    } as Oferta

    this.dialog.open(ConfigurarOfertaComponent, {
      data: data,
      ...layout
    })
  }
  private alterarEvento(): void {
    this.dialog.open(EventoComponent)
  }

}
