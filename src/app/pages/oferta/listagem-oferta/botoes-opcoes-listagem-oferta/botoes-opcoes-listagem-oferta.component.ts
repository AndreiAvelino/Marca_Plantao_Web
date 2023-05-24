import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OpcoesOfertaComponent } from 'src/app/pages/agenda/botoes-opcoes-eventos/opcoes-oferta/opcoes-oferta.component';

export enum OpcoesOferta {
  VER_OFERTA,
  CANCELAR
}

@Component({
  selector: 'app-botoes-opcoes-listagem-oferta',
  templateUrl: './botoes-opcoes-listagem-oferta.component.html',
  styleUrls: ['./botoes-opcoes-listagem-oferta.component.css']
})

export class BotoesOpcoesListagemOfertaComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<OpcoesOfertaComponent>) { }

  ngOnInit(): void {
  }

  public onClickVerOferta(): void {
    this._bottomSheetRef.dismiss(OpcoesOferta.VER_OFERTA)
  }


  public onClickCancelar(): void {
    this._bottomSheetRef.dismiss(OpcoesOferta.CANCELAR)
  }
}
