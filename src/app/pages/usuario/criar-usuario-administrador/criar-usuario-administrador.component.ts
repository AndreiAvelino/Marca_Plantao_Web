import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-usuario-administrador',
  templateUrl: './criar-usuario-administrador.component.html',
  styleUrls: ['./criar-usuario-administrador.component.css']
})
export class CriarUsuarioAdministradorComponent implements OnInit {

  public formulario: FormGroup
  private clinicaId: string;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CriarUsuarioAdministradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    this.clinicaId = data;
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: null,
      password: null,
      confirmPassword: null,
      master: false,
      clinicaId: this.clinicaId
    })
  }

  public criar_usuario(): void {
    this.dialogRef.close(this.formulario.value)
  }

}
