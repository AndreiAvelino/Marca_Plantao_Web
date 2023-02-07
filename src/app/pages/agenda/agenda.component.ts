import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventClickArg, EventSourceInput } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Corevento, StatusPlantao } from 'src/enum/enum';
import { Oferta, Plantao } from 'src/models/models';

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




const eventSources = [
  {
    id: '1',
    events: 
    [
      { title: 'Oferta medico X', date: '2023-02-03', extendedProps: {tipo: 1}},
    ],
    color: Corevento.Oferta,
    extraParams: {tipo: 1}
  },
  {
    id: '2',
    events: 
    [
      { title: 'Plantao medico Y', date: '2023-02-16', extendedProps: {tipo: 2}}
    ],
    color: Corevento.Plantao
  }
]




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
  public eventos: EventSourceInput[] = [];

  constructor(
    private _bottomSheet: MatBottomSheet
  ){
    super();
  }

  ngOnInit(): void {
    this.criarCalendario();
    this.preencherDataInicial();
  }

  private criarCalendario(): void {
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
      eventSources: eventSources           
    };    
  }

  private onDataClick(e: DateClickArg): void {
    this.criarEvento(e.dateStr);
  }

  //#region METODOS REFERETES AS ACOES AO CLICAR EM UM EVENTO
  private onEventoClick(e: EventClickArg): void {
    switch(e.event.extendedProps.tipo){
      case 1: this.abrirBottonSheetOferta();
              break;
      case 2: this.abrirBottonSheetPlantao();
              break;
    }
  }

  private abrirBottonSheetOferta(): void {
    this._bottomSheet.open(OpcoesOfertaComponent).afterDismissed().toPromise()
      .then(r => {

        switch(r){
          case OpcoesOferta.VER_CANDIDATOS: this.verCandidatosOferta()
                                            break;
          case OpcoesOferta.ALTERAR:        this.alterarOferta();
                                            break;
          case OpcoesOferta.CANCELAR:       this.cancelarOferta();
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

  private alterarOferta(): void {

  }

  private cancelarOferta(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
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

  //#region METODOS REFERNENTES AOS CHECKBOX DE EVENTOS
  public onChangeCheckBoxOferta(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(eventSources.find(x => x.id == '1'))
    } else {
      this.calendario.getApi().getEventSourceById('1').remove()
    }
  }

  public onChangeCheckBoxPlantao(event: MatCheckboxChange): void {
    if(event.checked){
      this.calendario.getApi().addEventSource(eventSources.find(x => x.id == '2'))
    } else {
      this.calendario.getApi().getEventSourceById('2').remove()
    }
  }
  //#endregion

  private criarEvento(date: string): void {
    let layout = {
      height: '500px',
      width: '40%',
    }

    let data = {
      DataInicial: date
    } as Oferta

    this.dialog.open(ConfigurarOfertaComponent, {
      data: data,
      ...layout
    })
      .afterClosed()
      .toPromise()
      .then(x => this.criarObjetoEvento(x))
  }

  private criarObjetoEvento(x): void {
    eventSources.find(x => x.id == '1').events.push({title: 'teste', date: x.DataInicial, extendedProps: {tipo: 1}})
    this.calendario.getApi().getEventSourceById('1').refetch()
  }  

}
