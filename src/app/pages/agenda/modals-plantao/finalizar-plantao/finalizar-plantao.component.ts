import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Oferta } from 'src/models/entidades/oferta';

@Component({
  selector: 'app-finalizar-plantao',
  templateUrl: './finalizar-plantao.component.html',
  styleUrls: ['./finalizar-plantao.component.css']
})
export class FinalizarPlantaoComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  public oferta: Oferta;
  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FinalizarPlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Oferta,
  ) {
    
    this.oferta = data;

    this.formulario = this.formBuilder.group({
      Avaliacao: "",
      QuantidadeHoraExtra: null,
      Descontos: null
    })
  }

  ngOnInit(): void {
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
  }

  public onClickButtonFinalizar(): void {
    this.dialogRef.close(this.formulario.value)
  }

  public total(): number {
    return parseInt(this.oferta.valor) + ((this.formulario.value.QuantidadeHoraExtra ? this.formulario.value.QuantidadeHoraExtra : 0) * parseInt(this.oferta.valorHoraExtra)) - (this.formulario.value.Descontos ? this.formulario.value.Descontos : 0);
  }

}
