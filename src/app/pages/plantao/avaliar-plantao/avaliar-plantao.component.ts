import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-avaliar-plantao',
  templateUrl: './avaliar-plantao.component.html',
  styleUrls: ['./avaliar-plantao.component.css']
})
export class AvaliarPlantaoComponent implements OnInit {

  public formulario: UntypedFormGroup

  constructor(
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<AvaliarPlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

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

  public Avaliar(): void {
    this.dialogRef.close(this.formulario.value)
  }

}
