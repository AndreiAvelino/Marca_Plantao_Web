import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'avaliacao-individual',
  templateUrl: './avaliacao-individual.component.html',
  styleUrls: ['./avaliacao-individual.component.css']
})
export class AvaliacaoIndividualComponent implements OnInit {

  @Input() descricao: string;
  @Input() nota: number;
  @Input() icone: string;
  @Input() autor: string;
  @Input() layout: string;

  public formControlNota = new FormControl(null);

  constructor() { }
 
  ngOnInit(): void {
    this.formControlNota.patchValue(this.nota)
  }

}
