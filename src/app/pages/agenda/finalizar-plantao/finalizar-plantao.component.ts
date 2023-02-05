import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-finalizar-plantao',
  templateUrl: './finalizar-plantao.component.html',
  styleUrls: ['./finalizar-plantao.component.css']
})
export class FinalizarPlantaoComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FinalizarPlantaoComponent>
  ) {
    this.formulario = this.formBuilder.group({
      Avaliacao: ""
    })
  }

  ngOnInit(): void {
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
    console.log(this.stepper)
  }

  public onClickButtonFinalizar(): void {
    this.dialogRef.close(this.formulario.value)
  }

}
