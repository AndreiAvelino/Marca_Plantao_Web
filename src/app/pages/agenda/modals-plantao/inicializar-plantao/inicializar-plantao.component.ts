import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';

@Component({
  selector: 'app-inicializar-plantao',
  templateUrl: './inicializar-plantao.component.html',
  styleUrls: ['./inicializar-plantao.component.css']
})
export class InicializarPlantaoComponent extends PadraoComponent implements OnInit {

  public dataInicialOferta: string;

  constructor(
    public dialogRef: MatDialogRef<InicializarPlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    super(); 
    this.dataInicialOferta = data
  }

  public fechar(horario: string){
    this.dialogRef.close(horario)
  }

  ngOnInit(): void {
  }

}
