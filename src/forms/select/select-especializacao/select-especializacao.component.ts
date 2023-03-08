import { Component, OnInit } from '@angular/core';
import { ListaEspecializacao } from 'src/const/const';
import { Especializacao } from 'src/models/models';

@Component({
  selector: 'mp-select-especializacao',
  templateUrl: './select-especializacao.component.html',
  styleUrls: ['./select-especializacao.component.css']
})
export class SelectEspecializacaoComponent implements OnInit {

  public ListaEspecializacao: Array<Especializacao> = ListaEspecializacao 

  constructor() { }

  ngOnInit(): void {
  }

}
