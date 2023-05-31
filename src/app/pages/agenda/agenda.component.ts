import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Corevento, StatusPlantao, TipoEvento } from 'src/enum/enum';
import { Response } from 'src/models/response';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
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
import { EncerrarPlantao, GerarPlantao, Plantao } from 'src/models/entidades/plantao';
import { Oferta } from 'src/models/entidades/oferta';
import { Evento } from 'src/models/entidades/evento';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseLoginAdministrador } from 'src/models/entidades/usuario';
import { OpcoesOferta, OpcoesOfertaComponent } from './botoes-opcoes-eventos/opcoes-oferta/opcoes-oferta.component';
import { OpcoesPlantao, OpcoesPlantaoComponent } from './botoes-opcoes-eventos/opcoes-plantao/opcoes-plantao.component';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from 'src/shared/confirmar/confirmar.component';
import * as moment from 'moment';
import { InicializarPlantaoComponent } from './modals-plantao/inicializar-plantao/inicializar-plantao.component';
import { OpcoesAgendaComponent } from './componentes-agenda/opcoes-agenda/opcoes-agenda.component';
import { OpcoesAgendaModalComponent } from './componentes-agenda/opcoes-agenda-modal/opcoes-agenda-modal.component';
import { PerfilUsuarioComponent } from '../usuario/perfil-usuario/perfil-usuario.component';

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
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent extends PadraoComponent implements OnInit {

  @ViewChild('calendario') calendario: FullCalendarComponent
  public calendarOptions: CalendarOptions = null

  public CorEvento = Corevento;

  public eventos: EventSource[] = [];

  public filtros_layout_profissional = {
    filtrar: {
      oferta: true,
      plantao_naoIniciado: true,
      plantao_andamento: true,
      plantao_finalizado: true
    }
  }

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
        .then(x => this.eventos = this.gerarEventosSource_Agenda_Clinica(x.data))
    }

    if(this.isResponseLoginProfissional(this.usuarioLogado)){
      await this.agendaService.get_all_evento_por_profissional(this.usuarioLogado.id).toPromise()
        .then(x => this.eventos = this.gerarEventosSource_Agenda_Profissional(x.data))
    }    
  }

  private gerarEventosSource_Agenda_Clinica(eventos: Evento[]): EventSource[] {
    return [
      {
        id: '1',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Oferta)),
        color: Corevento.Oferta
      },
      {
        id: '2',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.NaoIniciado)),
        color: Corevento.Plantao_NaoIniciado
      },
      {
        id: '3',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Andamento)),
        color: Corevento.Plantao_Andamento
      },      
      {
        id: '4',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Finalizado)),
        color: Corevento.Plantao_Finalizado
      }
    ]
  }

  private gerarEventosSource_Agenda_Profissional(eventos: Evento[]): EventSource[] {
    return [
      {
        id: '2',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.NaoIniciado)),
        color: Corevento.Plantao_NaoIniciado
      },
      {
        id: '3',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Andamento)),
        color: Corevento.Plantao_Andamento
      },      
      {
        id: '4',
        events: this.gerarEvents_Agenda(eventos.filter(x => x.tipo == TipoEvento.Plantao && x.status == StatusPlantao.Finalizado)),
        color: Corevento.Plantao_Finalizado
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
 
    if(this.verifica_usuario_administrador()){
      this.calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        eventClick: (e => this.onEventoClick(e)),
        dateClick: (e => this.criar_oferta(e)),
        height: "84vh",
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

    if(this.verifica_usuario_profissional()){
      this.calendarOptions = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        height: "83vh",
        headerToolbar: {
          left:   '',
          center: '',
          right:  ''
        },
        locale: 'pt-br',
        initialView: 'timeGridWeek',
        eventSources: this.eventos           
      }; 
    }

  }
  
  private atualizar_eventos(): void {
    this.calendario.eventSources = this.eventos

    this.calendario.getApi().getEventSourceById('1').refetch()
    this.calendario.getApi().getEventSourceById('2').refetch()
    this.calendario.getApi().getEventSourceById('3').refetch()
    this.calendario.getApi().getEventSourceById('4').refetch()
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
      case TipoEvento.Plantao: this.abrirBottonSheetPlantao(e);
              break;
    }
  }

  private async escolher_candidato_oferta(e: EventClickArg): Promise<void> {

    let oferta: Oferta

    await this.get_oferta(e.event.id)
      .then(x => oferta = x.data)

    if(oferta.profissionais.length == 0){
      this.mensagem_erro("A oferta nao possui nenhum candidato!")
      return;
    }

    let layout = {
      height: '500px',
      width: '40%',
    }

    await this.dialog.open(ModalListaCandidatosOfertaComponent, {
      data: oferta,
      ...layout
    }).afterClosed()
      .toPromise()
      .then(x => {
        if(x.gerar){
          this.criar_plantao(x.obj);
        }
        if(!x.gerar && x.obj.id){
          this.ver_perfil_usuario();
        } 
      })

  }

  private ver_perfil_usuario(): void {
    let layout = {
      width: '500px',
    }

    this.dialog.open(PerfilUsuarioComponent, {...layout})
  }

  private async modal_plantao(plantao: Plantao): Promise<void> {

    let layout = {
      height: '500px',
      width: '40%',
      panelClass: 'custom-modalbox'
    } as MatDialogConfig

    this.dialog.open(PlantaoComponent, {
      data: plantao,
      ...layout
    })
  }

  private async modal_oferta(oferta: Oferta): Promise<Oferta> {
    let layout = {
      height: '500px',
      width: '40%',
    }

    return await this.dialog.open(ConfigurarOfertaComponent, {
      data: oferta,
      ...layout
    })
      .afterClosed()
      .toPromise()
  }

  //#endregion

  //#region METODOS REFERENTES AOS BOTTOM SHEETS
  private abrirBottonSheetOferta(e: EventClickArg): void {
    this._bottomSheet.open(OpcoesOfertaComponent).afterDismissed().toPromise()
      .then(r => {

        switch(r){
          case OpcoesOferta.VER_CANDIDATOS: this.escolher_candidato_oferta(e)
                                            break;
          case OpcoesOferta.ALTERAR:        this.alterar_oferta(e);
                                            break;
          case OpcoesOferta.CANCELAR:       this.cancelar_oferta(e);
                                            break;
        }
      });
  }

  private abrirBottonSheetPlantao(e: EventClickArg): void {
    this._bottomSheet.open(OpcoesPlantaoComponent, {
      data: e.event.extendedProps.status
    }).afterDismissed().toPromise()
    .then(r => {
      switch(r){
        case OpcoesPlantao.INICIAR:    this.iniciar_plantao(e)
                                       break;
        case OpcoesPlantao.VISUALIZAR: this.visualizar_plantao(e.event.extendedProps.id)
                                       break;
        case OpcoesPlantao.FINALIZAR:  this.finalizar_plantao(e.event.extendedProps.id)
                                       break;
        case OpcoesPlantao.CANCELAR:   this.cancelar_plantao(e);
                                       break;
      } 

    })
  }

  private async iniciar_plantao(e: EventClickArg): Promise<void> {

    let plantao: Plantao
    let horarioInicial: string

    // if(0 > moment().diff(e.event.extendedProps.dataInicial, 'minutes')){
    //   this.mensagem_erro("O plantão só poderá ser iniciado no horário correto!")
    //   return;
    // }

    await this.get_plantao(e.event.extendedProps.id)
      .then(x => plantao = x.data)

    await this.dialog.open(InicializarPlantaoComponent, {data: e.event.extendedProps.dataInicial}).afterClosed().toPromise()
      .then(x => horarioInicial = x)
 
    if(horarioInicial){
      await this.put_plantao({
        ...plantao,
        status: 1,
        comprovante: "",
        desconto: "",
        dataInicial: horarioInicial
      })
      .then(() => this.mensagem_sucesso('Plantão Iniciado!'))
      .then(() => this.get_all_evento())
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))

      await this.atualizar_eventos()
    }

  }

  private async visualizar_plantao(id: string): Promise<void>{    
    await this.get_plantao(id)
      .then(x => this.modal_plantao(x.data))
  }

  private async finalizar_plantao(id: string): Promise<void> {

    let oferta: Oferta;
    let plantao: Plantao;
    let resp: boolean = true;

    await this.get_oferta_by_plantao(id)
      .then(x => oferta = x.data)
      .catch((e: HttpErrorResponse) => {
        this.mensagem_erro(e.message)
        return;
      })

    await this.get_plantao(id)
      .then(x => plantao = x.data)
      .catch((e: HttpErrorResponse) => {
        this.mensagem_erro(e.message)
        return;
      })

    // VALIDA SE O PLANTAO TEM A DATA PARA SER FINALIZADO
    if(oferta.dataFinal > this.gerar_data_hora_atual()){
      let mensagem: string = `Ainda faltam ${Math.abs(moment().diff(oferta.dataFinal, 'hours'))}:${moment.utc(moment(oferta.dataFinal, "HH:mm:ss").diff(moment(this.gerar_data_hora_atual(), "HH:mm:ss"))).format("mm")} horas para o término do plantao, deseja confirmar a finalização?`;

      await this.dialog.open(ConfirmarComponent, {
        data: mensagem
      }).afterClosed().toPromise()
        .then((x: boolean) => resp = x)
    }

    if(resp == true){
      let layout = {
        height: '500px',
        width: '40%',
      }
  
      await this.dialog.open(FinalizarPlantaoComponent, {
        ...layout,
        data: {
          oferta: oferta,
          plantao: plantao
        }
      })
      .afterClosed()
      .toPromise()
        .then((x: EncerrarPlantao) => this.encerrar_plantao(x))
        .then(x => this.get_all_evento())
        .then(() => this.mensagem_sucesso("Plantão finalizado com sucesso"))
        .catch(() => this.mensagem_erro("Ocorreu um erro ao tentar encerrar o plantao"))

      this.atualizar_eventos();
    }
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

  public onChangeCheckBoxPlantaoNaoIniciado(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '2'))
    } else {
      this.calendario.getApi().getEventSourceById('2').remove()
    }
  }

  public onChangeCheckBoxPlantaoAndamento(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '3'))
    } else {
      this.calendario.getApi().getEventSourceById('3').remove()
    }
  }

  public onChangeCheckBoxPlantaoFinalizado(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '4'))
    } else {
      this.calendario.getApi().getEventSourceById('4').remove()
    }
  }
  //#endregion

  //#region METODOS DE CRUD DE PLANTAO
  private async criar_plantao(gerarPlantao: GerarPlantao): Promise<void> {
     await this.post_plantao(gerarPlantao)
      .then(() => this.mensagem_sucesso("Plantao criado com sucesso!"))
      .then(() => this.get_all_evento())
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.error))

      this.atualizar_eventos()
  }
  private async cancelar_plantao(evento: EventClickArg): Promise<void> {
    await this.delete_plantao(evento.event.extendedProps.id)
      .then(() => this.mensagem_sucesso("Plantão cancelado!"))
      .then(() => this.get_all_evento())
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))

      this.atualizar_eventos()
  }
  //#endregion

  //#region METODOS DE CRUD DE OFERTA
  private async criar_oferta(e: DateClickArg): Promise<void> {

    if(moment(e.dateStr).format("yyyy-MM-DD") < this.gerar_data_hora_atual("yyyy-MM-DD")){
      this.mensagem_erro("Não é possível criar ofetas para datas anteriores")
      return;
    }

    let oferta = {
      dataInicial: e.dateStr,
      clinicaId: (this.usuarioLogado as ResponseLoginAdministrador).clinicaId
    } as Oferta

    await this.modal_oferta(oferta)
      .then(x => this.post_oferta(x))
      .then(() => this.mensagem_sucesso('Oferta criada com sucesso!'))
      .then(() => this.get_all_evento())

    this.atualizar_eventos()
  }

  private async alterar_oferta(e: EventClickArg): Promise<void> {
    await this.get_oferta(e.event.id)
      .then(x => this.modal_oferta(x.data))
      .then(x => this.put_oferta(x))
      .then(x => this.get_oferta(e.event.id))
      .then(() => this.mensagem_sucesso('Oferta atualizada com sucesso!'))
      .catch((e: HttpErrorResponse) => e.error.errors.forEach(erro => this.mensagem_erro(erro)))

    this.atualizar_eventos()
  }

  private async cancelar_oferta(evento: EventClickArg): Promise<void> {
    await this.delete_oferta(evento.event.id)
      .then(() => this.remover_evento(evento.event.id))
      .then(() => this.eventos = this.eventos.filter(x => x.id == evento.event.id))
      .then(() => this.toastr.success('Hello world!', 'Toastr fun!'))

    this.atualizar_eventos()
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

  private get_oferta_by_plantao(idPlantao: string): Promise<Response<Oferta>> {
    return this.plantaoService.get(idPlantao)
      .pipe(switchMap(x => this.ofertaService.get(x.data.ofertaId)))
      .toPromise()
  }

  private delete_oferta(idOferta: string): Promise<Response<any>> {  
    return this.ofertaService.delete(idOferta).toPromise() 
  }
  //#endregion

  //#region METODOS PARA REQUISICOES DE PLANTAO
  private async get_plantao(idPlantao: string): Promise<Response<Plantao>> {
    return this.plantaoService.get(idPlantao).toPromise()
  }

  private post_plantao(plantao: GerarPlantao): Promise<Response<Plantao>> {
    return this.plantaoService.post(plantao).toPromise();
  }

  private put_plantao(plantao: Plantao): Promise<Response<Plantao>> {
    return this.plantaoService.put(plantao).toPromise();
  }

  private delete_plantao(idPlantao: string): Promise<any>{
    return this.plantaoService.delete(idPlantao).toPromise();
  }

  private encerrar_plantao(encerrar: EncerrarPlantao): Promise<any> {
    return this.plantaoService.encerrar(encerrar).toPromise();
  }
  //#endregion

  public async onClickButtonFilter(): Promise<void> {
    await this.dialog.open(OpcoesAgendaModalComponent, {
      data: this.filtros_layout_profissional
    })
    .afterClosed()
    .toPromise()
      .then(x => {
        if(x){

          if(x.oferta != this.filtros_layout_profissional.filtrar.oferta){
            if(x.oferta){
              this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '1'))
            } else {
              this.calendario.getApi().getEventSourceById('1').remove()
            }
          }

          if(x.plantao_naoIniciado != this.filtros_layout_profissional.filtrar.plantao_naoIniciado){
            if(x.plantao_naoIniciado){
              this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '2'))
            } else {
              this.calendario.getApi().getEventSourceById('2').remove()
            } 
          }

          if(x.plantao_andamento != this.filtros_layout_profissional.filtrar.plantao_andamento){
            if(x.plantao_andamento){
              this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '3'))
            } else {
              this.calendario.getApi().getEventSourceById('3').remove()
            }
          }

          if(x.plantao_finalizado != this.filtros_layout_profissional.filtrar.plantao_finalizado){
            if(x.plantao_finalizado){
              this.calendario.getApi().addEventSource(this.eventos.find(x => x.id == '4'))
            } else {
              this.calendario.getApi().getEventSourceById('4').remove()
            }
          }

          this.filtros_layout_profissional.filtrar = x
        }
      })



 


  }
  

}
