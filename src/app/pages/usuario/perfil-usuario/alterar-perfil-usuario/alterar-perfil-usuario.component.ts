import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alterar-perfil-usuario',
  templateUrl: './alterar-perfil-usuario.component.html',
  styleUrls: ['./alterar-perfil-usuario.component.css']
})
export class AlterarPerfilUsuarioComponent implements OnInit {

  public formulario: FormGroup
  private sobre: string

  constructor(
    public dialogRef: MatDialogRef<AlterarPerfilUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.sobre = data;
  }

  ngOnInit(): void {
    this.criar_formulario()
  }

  private criar_formulario(): void {
    this.formulario = this.formBuilder.group({
      sobre: this.sobre,
      imagem: null
    })
  }

  public fechar(): void {
    this.dialogRef.close(this.formulario.value)
  }


}
