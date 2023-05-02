import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export enum OpcoesPlantao {
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

  constructor(private _bottomSheetRef: MatBottomSheetRef<OpcoesPlantaoComponent>) { }

  ngOnInit(): void {
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
