import { Component, Input, OnInit } from '@angular/core';
import { Avaliacao } from 'src/models/entidades/avaliacao';

@Component({
  selector: 'avaliacao-resumida',
  templateUrl: './avaliacao-resumida.component.html',
  styleUrls: ['./avaliacao-resumida.component.css']
})
export class AvaliacaoResumidaComponent implements OnInit {

  @Input() avaliacao: Avaliacao 

  public verMais: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public VerMais(): void {
    this.verMais = !this.verMais
  }

}
