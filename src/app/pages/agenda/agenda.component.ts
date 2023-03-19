import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg, EventSourceInput } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Corevento, TipoEvento } from 'src/enum/enum';
import { Response } from 'src/models/response';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ConfigurarOfertaComponent } from '../oferta/configurar-oferta/configurar-oferta.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PlantaoComponent } from './modals-plantao/plantao/plantao.component';
import { FinalizarPlantaoComponent } from './modals-plantao/finalizar-plantao/finalizar-plantao.component';
import { ModalListaCandidatosOfertaComponent } from './modals-oferta/modal-lista-candidatos-oferta/modal-lista-candidatos-oferta.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { AgendaService } from 'src/services/agenda.service';
import { OfertaService } from 'src/services/oferta.service';
import { PlantaoService } from 'src/services/plantao.service';
import { EventImpl } from '@fullcalendar/core/internal';
import { Plantao } from 'src/models/entidades/plantao';
import { Oferta } from 'src/models/entidades/oferta';
import { Evento } from 'src/models/entidades/evento';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseLoginAdministrador, ResponseLoginProfissional } from 'src/models/entidades/usuario';
import { OpcoesOferta, OpcoesOfertaComponent } from './botoes-opcoes-eventos/opcoes-oferta/opcoes-oferta.component';
import { OpcoesPlantao, OpcoesPlantaoComponent } from './botoes-opcoes-eventos/opcoes-plantao/opcoes-plantao.component';

interface EventSource {
  id: string
  events: Event[],
  color: string,
  extendedProps?: EventSourceInput
}

interface Event { 
  id: string,
  title: string, 
  date: string, 
  extendedProps: Object
}


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent extends PadraoComponent implements OnInit {

  @ViewChild('calendario') calendario: FullCalendarComponent
  public calendarOptions: CalendarOptions = null

  public CorEvento = Corevento;

  public eventos: any[] = [];

  public extendedProps: EventImpl

  constructor(
    private _bottomSheet: MatBottomSheet,
    private agendaService: AgendaService,
    private ofertaService: OfertaService,
    private plantaoService: PlantaoService
  ){
    super();
  }

  async ngOnInit(): Promise<void> {
    await this.get_all_evento();
    this.criar_calendario();
  }

  //#region METODOS DE GERACAO DE EVENTOS 
  private async get_all_evento(): Promise<void> {

    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      await this.agendaService.get_all_evento_por_clinica(this.usuarioLogado.clinicaId).toPromise()
        .then(x => this.eventos = this.gerarEventosSource_Agenda(x.data))
    }

    if(this.isResponseLoginProfissional(this.usuarioLogado)){
      await this.agendaService.get_all_evento_por_profissional(this.usuarioLogado.id).toPromise()
        .then(x => this.eventos = this.gerarEventosSource_Agenda(x.data))
    }

    
  }

  private gerarEventosSource_Agenda(eventos: Evento[]): EventSource[] {
    return [
      {
        id: '1',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Oferta)),
        color: Corevento.Oferta,
        extendedProps: {}
      },
      {
        id: '2',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao)),
        color: Corevento.Plantao,
        extendedProps: {}
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
  //#endregion

  //#region METODOS REFERENTES AO CALENDARIO
  private criar_calendario(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      eventClick: (e => this.onEventoClick(e)),
      dateClick: (e => this.criar_oferta(e)),
      height: "85vh",
      headerToolbar: {
        left:   '',
        center: '',
        right:  ''
      },
      locale: 'pt-br',
      initialView: 'dayGridMonth',
      eventSources: this.eventos           
    };    
  }

  private criar_evento(x: Plantao | Oferta): void {
    this.eventos.find(x => x.id == '1').events.push({title: 'teste', date: x.dataInicial, extendedProps: {tipo: 1}})
    this.calendario.getApi().getEventSourceById('1').refetch()
  }  

  private alterar_evento_plantao(x: Plantao){

  }

  private alterar_evento_oferta(x: Oferta){

  }

  private remover_evento(evento): void {
     this.calendario.getApi().getEventById('1').remove()

    this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '1'))
  }
  //#endregion

  //#region METODOS REFERETES AS ACOES AO CLICAR EM UM EVENTO
  private onEventoClick(e: EventClickArg): void {
    switch(e.event.extendedProps.tipo){
      case TipoEvento.Oferta:  this.abrirBottonSheetOferta(e);
              break;
      case TipoEvento.Plantao: this.abrirBottonSheetPlantao();
              break;
    }
  }

  private abrirBottonSheetOferta(e: EventClickArg): void {
    this._bottomSheet.open(OpcoesOfertaComponent).afterDismissed().toPromise()
      .then(r => {

        switch(r){
          case OpcoesOferta.VER_CANDIDATOS: this.verCandidatosOferta()
                                            break;
          case OpcoesOferta.ALTERAR:        this.alterar_oferta(e);
                                            break;
          case OpcoesOferta.CANCELAR:       this.cancelar_oferta(e);
                                            break;
        }
      });
  }

  private verCandidatosOferta(): void {
    let layout = {
      height: '500px',
      width: '40%',
    }

    this.dialog.open(ModalListaCandidatosOfertaComponent, {
      ...layout
    })
  }



  private abrirBottonSheetPlantao(): void {
    this._bottomSheet.open(OpcoesPlantaoComponent).afterDismissed().toPromise()
    .then(r => {

      switch(r){
        case OpcoesPlantao.VISUALIZAR: this.visualizarPlantao()
                                       break;
        case OpcoesPlantao.FINALIZAR:  this.finalizarPlantao()
                                       break;
      }

    })
  }

  private finalizarPlantao(): void {
    let layout = {
      height: '500px',
      width: '40%',
    }

    this.dialog.open(FinalizarPlantaoComponent, {
      ...layout
    })
  }

  private visualizarPlantao(): void {
    let layout = {
      height: '500px',
      width: '40%',
      panelClass: 'custom-modalbox'
    } as MatDialogConfig

    this.dialog.open(PlantaoComponent, {
      ...layout
    })
  }
  //#endregion


  //#region METODOS REFERENTES AOS CHECKBOX DE EVENTOS
  public onChangeCheckBoxOferta(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '1'))
    } else {
      this.calendario.getApi().getEventSourceById('1').remove()
    }
  }

  public onChangeCheckBoxPlantao(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '2'))
    } else {
      this.calendario.getApi().getEventSourceById('2').remove()
    }
  }
  //#endregion

  private modal_oferta(oferta: Oferta): Promise<Oferta> {
    let layout = {
      height: '500px',
      width: '40%',
    }

    return this.dialog.open(ConfigurarOfertaComponent, {
      data: oferta,
      ...layout
    })
      .afterClosed()
      .toPromise()
  }

  //#region METODOS DE CRUD DE PLANTAO
  private async criar_plantao(e: DateClickArg): Promise<void> {
    let plantao = {} as Plantao

    await this.post_plantao(plantao)
      .then(x => {
        this.criar_evento(x.data)
        this.mensagem_sucesso("Plantao criado com sucesso!")
      })
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.error))
  }

  private async alterar_plantao(e: EventClickArg): Promise<void> {
    await this.get_oferta("0")
      .then(x => this.modal_oferta(x.data))
      .then(x => this.put_oferta(x))
      // .then(x => this.alterar_evento(x.data))
  }

  private async cancelar_plantao(evento: EventClickArg): Promise<void> {
    await this.delete_oferta(evento.event.extendedProps.id)
      .then(() => this.remover_evento(evento.event.id))
      .then(() => this.eventos = this.eventos.filter(x => x.id == evento.event.extendedProps.id))
      .then(() => this.toastr.success('Hello world!', 'Toastr fun!'))
  }
  //#endregion


  //#region METODOS DE CRUD DE OFERTA
  private async criar_oferta(e: DateClickArg): Promise<void> {
    let oferta = {
      dataInicial: e.dateStr,
      clinicaId: (this.usuarioLogado as ResponseLoginAdministrador).clinicaId
    } as Oferta

    await this.modal_oferta(oferta)
      .then(x => this.post_oferta(x))
      .then(x => this.criar_evento(x.data))
  }

  private async alterar_oferta(e: EventClickArg): Promise<void> {
    await this.get_oferta(e.event.extendedProps.id)
      .then(x => this.modal_oferta(x.data))
      .then(x => this.put_oferta(x))
      // .then(x => this.alterar_evento(x.data))
      .then(() => this.mensagem_sucesso('Oferta atualizada com sucesso!'))
      .catch((e: HttpErrorResponse) => e.error.errors.forEach(erro => this.mensagem_erro(erro)))
  }

  private async cancelar_oferta(evento: EventClickArg): Promise<void> {
    await this.delete_oferta(evento.event.extendedProps.id)
      .then(() => this.remover_evento(evento.event.id))
      .then(() => this.eventos = this.eventos.filter(x => x.id == evento.event.extendedProps.id))
      .then(() => this.toastr.success('Hello world!', 'Toastr fun!'))
  }

  //#endregion

  //#region METODOS PARA REQUISICOES DE OFERTA
  private post_oferta(oferta: Oferta): Promise<Response<Oferta>> {
    return this.ofertaService.post(oferta).toPromise();
  }

  private put_oferta(oferta: Oferta): Promise<Response<Oferta>> {
    return this.ofertaService.put(oferta).toPromise();
  }

  private get_oferta(idOferta: string): Promise<Response<Oferta>> {  
    return this.ofertaService.get(idOferta).toPromise() 
  }

  private delete_oferta(idOferta: string): Promise<Response<any>> {  
    return this.ofertaService.delete(idOferta).toPromise() 
  }
  //#endregion

  //#region METODOS PARA REQUISICOES DE PLANTAO
  private async get_plantao(idPlantao: string): Promise<Response<Plantao>> {
    return this.plantaoService.get(idPlantao).toPromise()
  }

  private post_plantao(plantao: Plantao): Promise<Response<Plantao>> {
    return this.plantaoService.post(plantao).toPromise();
  }

  private put_plantao(plantao: Plantao): Promise<Response<Plantao>> {
    return this.plantaoService.put(plantao).toPromise();
  }

  private delete_plantao(idPlantao: string): Promise<any>{
    return this.plantaoService.delete(idPlantao).toPromise();
  }
  //#endregion
}
