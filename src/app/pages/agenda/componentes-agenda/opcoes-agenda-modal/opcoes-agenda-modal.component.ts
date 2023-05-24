import { Component, EventEmitter, Input, OnInit, Output, Inject, ViewChild } from '@angular/core';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MetodosPagamento, StatusPagamento, StatusPlantao } from 'src/const/const';
import { Corevento } from 'src/enum/enum';
import { MetodoPagamento } from 'src/models/entidades/@shared';

@Component({
  selector: 'opcoes-agenda-modal',
  templateUrl: './opcoes-agenda-modal.component.html',
  styleUrls: ['./opcoes-agenda-modal.component.css']
})
export class OpcoesAgendaModalComponent implements OnInit {

  @ViewChild('checkOferta') checkOferta: MatCheckbox
  @ViewChild('checkPlantaoNaoIniciado') checkPlantaoNaoIniciado: MatCheckbox
  @ViewChild('checkPlantaoAndamento') checkPlantaoAndamento: MatCheckbox
  @ViewChild('checkPlantaoFinalizado') checkPlantaoFinalizado: MatCheckbox

  public CorEvento = Corevento;

  public ListaMetodosPagamento: Array<MetodoPagamento> = MetodosPagamento
  public ListaStatusPlatao: Array<String> = StatusPlantao
  public ListaStatusPagamento: Array<String> = StatusPagamento

  public filtros_layout_profissional;

  constructor(
    public dialogRef: MatDialogRef<OpcoesAgendaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.filtros_layout_profissional = data;
  }

  ngOnInit(): void {
  }

  public fechar(): void {
    let filtros = {
      oferta: this.checkOferta.checked,
      plantao_naoIniciado: this.checkPlantaoNaoIniciado.checked,
      plantao_andamento: this.checkPlantaoAndamento.checked,
      plantao_finalizado: this.checkPlantaoFinalizado.checked
    }

    this.dialogRef.close(filtros)
  }

  

}
