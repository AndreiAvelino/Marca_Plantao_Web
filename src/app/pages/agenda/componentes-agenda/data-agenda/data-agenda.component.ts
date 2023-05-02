import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Meses } from 'src/const/const';

@Component({
  selector: 'data-agenda',
  templateUrl: './data-agenda.component.html',
  styleUrls: ['./data-agenda.component.css']
})
export class DataAgendaComponent implements OnInit {

  @Input() calendario: FullCalendarComponent;
  @Input() layout: string;
  
  @Output() emiteClickButtonHoje = new EventEmitter();
  @Output() emiteClickAnterior = new EventEmitter();
  @Output() emiteClickProximo = new EventEmitter();
  
  public mesano: string;
  
  constructor() { }

  ngOnInit(): void {
    this.preencherDataInicial();
  }

  private preencherDataInicial(): void {
    let d = new Date();
    this.mesano = `${Meses[d.getMonth()]} de ${d.getFullYear()}`
  }

  public onButtonHojeDiaClick(): void {
    this.calendario.getApi().today()
    this.atualizarData();
  } 

  public onButtonProximoDiaClick(): void {
    this.calendario.getApi().next()
    this.atualizarData();
  } 

  public onButtonAnteriorDiaClick(): void {
    this.calendario.getApi().prev()
    this.atualizarData();
  } 

  private atualizarData(): void {
    this.mesano = `${Meses[this.calendario.getApi().getDate().getMonth()]} de ${this.calendario.getApi().getDate().getFullYear()}`
  }

  public layout_profissional(): boolean{
    if(this.layout == "profissional"){
      return true;
    }

    return false;
  }

  public layout_administrador(): boolean{
    if(this.layout == "administrador"){
      return true;
    }

    return false;
  }

}
