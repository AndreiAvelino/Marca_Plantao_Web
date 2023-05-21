import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Oferta } from 'src/models/entidades/oferta';
import { EncerrarPlantao, Plantao } from 'src/models/entidades/plantao';

@Component({
  selector: 'app-finalizar-plantao',
  templateUrl: './finalizar-plantao.component.html',
  styleUrls: ['./finalizar-plantao.component.css']
})
export class FinalizarPlantaoComponent extends PadraoComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  public oferta: Oferta;
  public plantao: Plantao;
  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FinalizarPlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    super();
    
    this.oferta = data.oferta;
    this.plantao = data.plantao;

    this.formulario = this.formBuilder.group({
      Avaliacao: "",
      QuantidadeHoraExtra: null,
      Descontos: null,
      Total: null,
      Nota: 0
    })
  }

  ngOnInit(): void {
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
  }

  public onClickButtonFinalizar(): void {
    let encerrarPlantao: EncerrarPlantao = {
      id: this.plantao.id,
      profissionalId: this.plantao.profissionalId,
      clinicaId: this.oferta.clinicaId,
      descricao: this.formulario.value.Avaliacao,
      nota: this.formulario.value.Nota,
      comprovante: "", 
      dataAvaliacao: this.gerar_data_hora_atual(),
      desconto: this.formulario.value.Descontos + "",
      valorTotal: this.total() + "",
      dataFinal: this.gerar_data_hora_atual(),
      horaExtra: this.formulario.value.QuantidadeHoraExtra
    } 

    this.dialogRef.close(encerrarPlantao)
  }

  public total(): number {
    return parseInt(this.oferta.valor) + ((this.formulario.value.QuantidadeHoraExtra ? this.formulario.value.QuantidadeHoraExtra : 0) * parseInt(this.oferta.valorHoraExtra)) - (this.formulario.value.Descontos ? this.formulario.value.Descontos : 0);
  }

}
