import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { Corevento, TipoEvento } from 'src/enum/enum';
import { Evento } from 'src/models/entidades/evento';

interface EventSource {
  id: string
  events: Event[],
  color: string
}

interface Event { 
  id: string,
  title: string, 
  date: string, 
  extendedProps: Object
}


@Component({
  selector: 'calendario-agenda',
  templateUrl: './calendario-agenda.component.html',
  styleUrls: ['./calendario-agenda.component.css']
})
export class CalendarioAgendaComponent implements OnInit {

  @ViewChild('calendario') calendario: FullCalendarComponent

  @Input() eventos;

  @Output() emiteCliqueEvento: EventEmitter<any> = new EventEmitter();
  @Output() emiteCliqueData: EventEmitter<any> = new EventEmitter();

  public calendarOptions: CalendarOptions = null

  constructor() { }

  ngOnInit(): void {
    this.criar_calendario();
  }

  private criar_calendario(): void {
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
      eventSources: this.gerarEventosSource_Agenda(this.eventos)          
    };    
  }

  private atualizar_eventos(): void {
    this.calendario.eventSources = this.eventos

    this.calendario.getApi().getEventSourceById('1').refetch()
    this.calendario.getApi().getEventSourceById('2').refetch()
  }

  private remover_evento(evento): void {
    this.calendario.getApi().getEventById('1').remove()

   this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '1'))
 }

 private gerarEventosSource_Agenda(eventos: Evento[]): EventSource[] {
  return [
    {
      id: '1',
      events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Oferta)),
      color: Corevento.Oferta
    },
    {
      id: '2',
      events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao)),
      color: Corevento.Plantao
    }
  ]
}

private gerarEvents_Agenda(eventos: Evento[]): Event[] {
  let events = [] as Event[]

  eventos.forEach(x => {
    events.push({
      id: x.id,
      title: x.titulo, 
      date: x.dataInicial, 
      extendedProps: x
    })
  })

  return events;
}

  private onEventoClick(e: EventClickArg): void {
    this.emiteCliqueEvento.emit(e);
  }

  private onDataClick(e: DateClickArg): void {
    this.emiteCliqueData.emit(e);
  }

}
