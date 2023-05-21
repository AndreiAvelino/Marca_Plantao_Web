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
  @Output() emitChangeCheckBoxPlantaoNaoIniciado = new EventEmitter()
  @Output() emitChangeCheckBoxPlantaoAndamento = new EventEmitter()
  @Output() emitChangeCheckBoxPlantaoFinalizado = new EventEmitter()

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

  public onChangeCheckBoxPlantaoNaoInciado(event: MatCheckboxChange): void {
    this.emitChangeCheckBoxPlantaoNaoIniciado.emit(event)
  }

  public onChangeCheckBoxPlantaoAndamento(event: MatCheckboxChange): void {
    this.emitChangeCheckBoxPlantaoAndamento.emit(event)
  }

  public onChangeCheckBoxPlantaoFinalizado(event: MatCheckboxChange): void {
    this.emitChangeCheckBoxPlantaoFinalizado.emit(event)
  }
  
  //#endregion

  //#region METODOS REFERENTES AOS FILTROS
  
  //#endregion

}
