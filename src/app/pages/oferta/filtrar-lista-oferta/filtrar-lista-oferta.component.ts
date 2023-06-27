import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Especializacao } from 'src/models/entidades/especializacao';
import { EspecializacaoService } from 'src/services/especializacao.service';

@Component({
  selector: 'app-filtrar-lista-oferta',
  templateUrl: './filtrar-lista-oferta.component.html',
  styleUrls: ['./filtrar-lista-oferta.component.scss']
})
export class FiltrarListaOfertaComponent implements OnInit {

  public formulario: FormGroup
  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));  

  constructor(
    private formBuilder: FormBuilder,
    private especializacaoService: EspecializacaoService,
    public dialogRef: MatDialogRef<FiltrarListaOfertaComponent>
  ) {
    this.criar_formulario();
  }

  private criar_formulario(): void {
    this.formulario = this.formBuilder.group({
      mostrarOfertasCandidatadas: false,
      turno: "12h",
      valorInicial: 0,
      valorFinal: 0,
      dataInicial: null,
      dataFinal: null,
      especializacoes: []
    })
  }

  ngOnInit(): void {
  }

  public fechar(): void {
    this.dialogRef.close(this.formulario.value)
  }

}
