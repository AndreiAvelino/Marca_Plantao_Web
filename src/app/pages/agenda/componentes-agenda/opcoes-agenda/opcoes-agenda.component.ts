import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { MetodosPagamento, StatusPagamento, StatusPlantao } from 'src/const/const';
import { Corevento } from 'src/enum/enum';
import { MetodoPagamento } from 'src/models/entidades/@shared';

@Component({
  selector: 'opcoes-agenda',
  templateUrl: './opcoes-agenda.component.html',
  styleUrls: ['./opcoes-agenda.component.css']
})
export class OpcoesAgendaComponent implements OnInit {

  @Output() emitChangeCheckBoxOferta = new EventEmitter()
  @Output() emitChangeCheckBoxPlantao = new EventEmitter()

  public CorEvento = Corevento;

  public ListaMetodosPagamento: Array<MetodoPagamento> = MetodosPagamento
  public ListaStatusPlatao: Array<String> = StatusPlantao
  public ListaStatusPagamento: Array<String> = StatusPagamento

  constructor() { }

  ngOnInit(): void {
  }

  //#region METODOS REFERENTE AS CATEGORIAS
  public onChangeCheckBoxOferta(event: MatCheckboxChange): void {
    this.emitChangeCheckBoxOferta.emit(event)
  }

  public onChangeCheckBoxPlantao(event: MatCheckboxChange): void {
    this.emitChangeCheckBoxPlantao.emit(event)
  }
  //#endregion

  //#region METODOS REFERENTES AOS FILTROS
  
  //#endregion

}
