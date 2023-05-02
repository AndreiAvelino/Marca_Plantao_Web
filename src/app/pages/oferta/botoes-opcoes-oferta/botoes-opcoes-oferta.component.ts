import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'botoes-opcoes-oferta',
  templateUrl: './botoes-opcoes-oferta.component.html',
  styleUrls: ['./botoes-opcoes-oferta.component.scss']
})
export class BotoesOpcoesOfertaComponent implements OnInit {

  @Output() emiteClickBotao = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClickBotaoFiltro(): void {
    this.emiteClickBotao.emit()
  }

}
