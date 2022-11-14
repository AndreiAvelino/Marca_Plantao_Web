import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-avaliar-plantao',
  templateUrl: './avaliar-plantao.component.html',
  styleUrls: ['./avaliar-plantao.component.css']
})
export class AvaliarPlantaoComponent implements OnInit {

  public formulario: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      Id: 0,
      idPlantao: 0,
      idUsuario: 0,
      Nota: 0,
      Descricao: "",
      DataCadastro: ""
    })

  }

}
