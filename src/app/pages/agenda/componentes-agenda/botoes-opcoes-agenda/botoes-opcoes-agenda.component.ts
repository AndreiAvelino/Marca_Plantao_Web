import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'botoes-opcoes-agenda',
  templateUrl: './botoes-opcoes-agenda.component.html',
  styleUrls: ['./botoes-opcoes-agenda.component.scss']
})
export class BotoesOpcoesAgendaComponent implements OnInit {

  @Output() emitClickButtonFilter = new EventEmitter();

  public direction

  constructor() { }

  ngOnInit(): void {
  }

  public onClickButtonFilter(): void {
    this.emitClickButtonFilter.emit()
  }

}
