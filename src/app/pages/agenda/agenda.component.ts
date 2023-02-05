import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventClickArg, EventSourceInput } from '@fullcalendar/core';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { StatusPlantao } from 'src/enum/enum';
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

export enum Corevento {
  Oferta = '#00BFFF',
  Plantao = '#556B2F'
}

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

const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent extends PadraoComponent implements OnInit {

  @ViewChild('calendario') calendario: FullCalendarComponent

  public CorEvento = Corevento

  public calendarOptions: CalendarOptions = null

  public mesano: string 

  public eventos: EventSourceInput[] = [
    {}
  ]

  constructor(private _bottomSheet: MatBottomSheet) {
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
      eventSources: eventSources
           
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
      height: '500px',
      width: '40%',
    }

    let data = {
      DataPlantao: date
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

  private cancelarOferta(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  private verCandidatosOferta(): void {
    let layout = {
      height: '500px',
      width: '40%',
    }

    this.dialog.open(PerfilUsuarioComponent, {
      ...layout
    })
  }

  private alterarOferta(): void {

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
    }

    this.dialog.open(PlantaoComponent, {
      ...layout
    })
  }

}
