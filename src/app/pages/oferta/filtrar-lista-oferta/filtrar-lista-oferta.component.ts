import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private especializacaoService: EspecializacaoService
  ) {
    this.criar_formulario();
  }

  private criar_formulario(): void {
    this.formulario = this.formBuilder.group({
      mostrarOfertasCandidatadas: false,
      turno: "12h",
      valorInicial: 200,
      valorFinal: 3000,
      dataInicial: null,
      dataFinal: null,
      especializacoes: []
    })
  }

  ngOnInit(): void {
  }

}
