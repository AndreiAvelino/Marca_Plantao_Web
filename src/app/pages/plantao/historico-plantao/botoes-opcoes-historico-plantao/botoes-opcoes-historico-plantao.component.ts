import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StatusPlantao } from 'src/enum/enum';

export enum OpcoesPlantao {
  VER_PLANTAO,
  AVALIAR
}

@Component({
  selector: 'app-botoes-opcoes-historico-plantao',
  templateUrl: './botoes-opcoes-historico-plantao.component.html',
  styleUrls: ['./botoes-opcoes-historico-plantao.component.css']
})
export class BotoesOpcoesHistoricoPlantaoComponent implements OnInit {

  public linha: any;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BotoesOpcoesHistoricoPlantaoComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.linha = data;
  }

  ngOnInit(): void {
    
  }

  public onClickVerPlantao(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.VER_PLANTAO)
  }

  public onClickAvaliar(): void {
    this._bottomSheetRef.dismiss(OpcoesPlantao.AVALIAR)
  }

  public habilitar_avaliar(): boolean {
    if(this.linha.status == "Finalizado"){
      return true;
    } else {
      return false;
    }
  }

}
