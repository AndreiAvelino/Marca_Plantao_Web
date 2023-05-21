import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

export enum OpcoesPlantao {
  INICIAR,
  VISUALIZAR,
  FINALIZAR,
  CANCELAR
}

@Component({
  selector: 'app-opcoes-plantao',
  templateUrl: './opcoes-plantao.component.html',
  styleUrls: ['./opcoes-plantao.component.css']
})
export class OpcoesPlantaoComponent implements OnInit {

  public status: number;

  constructor(private _bottomSheetRef: MatBottomSheetRef<OpcoesPlantaoComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: number) {

    this.status = data;

  }

  ngOnInit(): void {
  }

  public onClickIniciar(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.INICIAR)
  }

  public onClickVisualizar(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.VISUALIZAR)
  }

  public onClickFinalizar(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.FINALIZAR)
  }

  public onClickCancelar(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.CANCELAR)
  }
}
