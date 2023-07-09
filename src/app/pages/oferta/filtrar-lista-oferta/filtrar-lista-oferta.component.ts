import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Especializacao } from 'src/models/entidades/especializacao';
import { EspecializacaoService } from 'src/services/especializacao.service';

export interface Filtro {
  turno: string,
  valorInicial: string,
  valorFinal: string,
  dataInicial: string,
  dataFinal: string
}

@Component({
  selector: 'app-filtrar-lista-oferta',
  templateUrl: './filtrar-lista-oferta.component.html',
  styleUrls: ['./filtrar-lista-oferta.component.scss']
})
export class FiltrarListaOfertaComponent implements OnInit {

  public formulario: FormGroup
  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));  
  public filtro: Filtro

  constructor(
    private formBuilder: FormBuilder,
    private especializacaoService: EspecializacaoService,
    public dialogRef: MatDialogRef<FiltrarListaOfertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filtro
  ) {
    this.filtro = data
    this.criar_formulario();
  }

  private criar_formulario(): void {
    this.formulario = this.formBuilder.group({
      mostrarOfertasCandidatadas: false,
      turno: this.filtro.turno,
      valorInicial: parseInt(this.filtro.valorInicial),
      valorFinal: parseInt(this.filtro.valorFinal),
      dataInicial: this.filtro.dataFinal,
      dataFinal: this.filtro.dataFinal,
    })
  }

  ngOnInit(): void {
  }

  public fechar(): void {
    this.dialogRef.close(this.formulario.value)
  }

}
