import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export enum OpcoesOferta {
  VER_CANDIDATOS,
  ALTERAR,
  CANCELAR
}

@Component({
  selector: 'app-opcoes-oferta',
  templateUrl: './opcoes-oferta.component.html',
  styleUrls: ['./opcoes-oferta.component.css']
})
export class OpcoesOfertaComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<OpcoesOfertaComponent>) { }

  ngOnInit(): void {
  }

  public onClickVerCandidatos(): void {
    this._bottomSheetRef.dismiss(OpcoesOferta.VER_CANDIDATOS)
  }

  public onClickAlterar(): void {
    this._bottomSheetRef.dismiss(OpcoesOferta.ALTERAR)
  }

  public onClickCancelar(): void {
    this._bottomSheetRef.dismiss(OpcoesOferta.CANCELAR)
  }

}
