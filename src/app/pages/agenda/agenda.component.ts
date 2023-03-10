import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventClickArg, EventSourceInput } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Corevento, StatusPlantao } from 'src/enum/enum';
import { Oferta, Plantao, ResponseLogin } from 'src/models/models';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { ConfigurarOfertaComponent } from '../oferta/configurar-oferta/configurar-oferta.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OpcoesOferta, OpcoesOfertaComponent } from './opcoes-oferta/opcoes-oferta.component';
import { OpcoesPlantao, OpcoesPlantaoComponent } from './opcoes-plantao/opcoes-plantao.component';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { InfoPlantaoComponent } from '../plantao/info-plantao/info-plantao.component';
import { PlantaoComponent } from './plantao/plantao.component';
import { FinalizarPlantaoComponent } from './finalizar-plantao/finalizar-plantao.component';
import { PerfilUsuarioComponent } from '../usuario/perfil-usuario/perfil-usuario.component';
import { Meses } from 'src/const/const';
import { ModalListaCandidatosOfertaComponent } from './modal-lista-candidatos-oferta/modal-lista-candidatos-oferta.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { AgendaService } from 'src/services/agenda.service';
import { OfertaService } from 'src/services/oferta.service';
import { PlantaoService } from 'src/services/plantao.service';
import { EventImpl } from '@fullcalendar/core/internal';

interface EventSource {
  id: string
  events: EventImpl[],
  color: string,
  extendedProps: EventSourceInput
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
  public mesano: string; 

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
    this.criarCalendario();
    this.preencherDataInicial();
  }

  private async get_all_evento(): Promise<void> {
    this.agendaService.get_all_evento_por_clinica(this.usuarioLogado.clinicaId).toPromise()
      .then(x => this.eventos = x)
  }

  private gerarEventosFormatoAgente(): EventSource[] {
    return null;
  }

  //#region METODOS REFERENTES AO CALENDARIO
  private criarCalendario(): void {
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

  private criarEventoCalendario(x): void {
    this.eventos.find(x => x.id == '1').events.push({title: 'teste', date: x.DataInicial, extendedProps: {tipo: 1}})
    this.calendario.getApi().getEventSourceById('1').refetch()
  }  

  private alterarEventoCalendario(x): void {
    this.eventos.find(x => x.id == '1').events.push({title: 'teste', date: x.DataInicial, extendedProps: {tipo: 1}})
    this.calendario.getApi().getEventSourceById('1').refetch()
  } 

  private remover_evento(evento): void {
     this.calendario.getApi().getEventById('1').remove()

    this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '1'))


  }
  //#endregion

  //#region METODOS REFERETES AS ACOES AO CLICAR EM UM EVENTO
  private onEventoClick(e: EventClickArg): void {
    switch(e.event.extendedProps.tipo){
      case 1: this.abrirBottonSheetOferta(e);
              break;
      case 2: this.abrirBottonSheetPlantao();
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

  //#region METODOS REFERENTES AO MENU LATERAL
  private preencherDataInicial(): void {
    let d = new Date();
    this.mesano = `${Meses[d.getMonth()]} de ${d.getFullYear()}`
  }

  private atualizarData(): void {
    this.mesano = `${Meses[this.calendario.getApi().getDate().getMonth()]} de ${this.calendario.getApi().getDate().getFullYear()}`
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
      .then(x => this.criarEventoCalendario(x))
      .then(() => this.toastr.success('Hello world!', 'Toastr fun!'))
  }

  private async alterar_plantao(e: EventClickArg): Promise<void> {
    await this.get_oferta("0")
      .then(x => this.modal_oferta(x))
      .then(x => this.put_oferta(x))
      .then(x => this.alterarEventoCalendario(x))
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
      DataInicial: e.dateStr
    } as Oferta

    await this.modal_oferta(oferta)
      .then(x => this.post_oferta(x))
      .then(x => this.criarEventoCalendario(x))
  }

  private async alterar_oferta(e: EventClickArg): Promise<void> {
    await this.get_oferta("0")
      .then(x => this.modal_oferta(x))
      .then(x => this.put_oferta(x))
      .then(x => this.alterarEventoCalendario(x))
  }

  private async cancelar_oferta(evento: EventClickArg): Promise<void> {
    await this.delete_oferta(evento.event.extendedProps.id)
      .then(() => this.remover_evento(evento.event.id))
      .then(() => this.eventos = this.eventos.filter(x => x.id == evento.event.extendedProps.id))
      .then(() => this.toastr.success('Hello world!', 'Toastr fun!'))
  }

  //#endregion

  //#region METODOS DE CRUD DE PLANTAO

  //#endregion

  //#region METODOS PARA REQUISICOES DE OFERTA
  private post_oferta(oferta: Oferta): Promise<Oferta> {
    return this.ofertaService.post(oferta).toPromise();
  }

  private put_oferta(oferta: Oferta): Promise<Oferta> {
    return this.ofertaService.put(oferta).toPromise();
  }

  private get_oferta(idOferta: string): Promise<Oferta> {  
    return this.ofertaService.get(idOferta).toPromise() 
  }

  private delete_oferta(idOferta: string): Promise<any> {  
    return this.ofertaService.delete(idOferta).toPromise() 
  }
  //#endregion

  //#region METODOS PARA REQUISICOES DE PLANTAO
  private async get_plantao(idPlantao: number): Promise<Plantao> {
    return this.plantaoService.get(idPlantao).toPromise()
  }

  private post_plantao(plantao: Plantao): Promise<Plantao> {
    return this.plantaoService.post(plantao).toPromise();
  }

  private put_plantao(plantao: Plantao): Promise<Plantao> {
    return this.plantaoService.put(plantao).toPromise();
  }

  private delete_plantao(idPlantao: number): Promise<any>{
    return this.plantaoService.delete(idPlantao).toPromise();
  }
  //#endregion
}
