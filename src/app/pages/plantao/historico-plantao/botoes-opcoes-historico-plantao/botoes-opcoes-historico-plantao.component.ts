import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export enum OpcoesPlantao {
  VER_PLANTAO
}

@Component({
  selector: 'app-botoes-opcoes-historico-plantao',
  templateUrl: './botoes-opcoes-historico-plantao.component.html',
  styleUrls: ['./botoes-opcoes-historico-plantao.component.css']
})
export class BotoesOpcoesHistoricoPlantaoComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BotoesOpcoesHistoricoPlantaoComponent>
  ) { }

  ngOnInit(): void {
  }

  public onClickVerPlantao(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.VER_PLANTAO)
  }

}
