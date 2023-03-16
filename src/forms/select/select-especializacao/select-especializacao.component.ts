import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { ListaEspecializacao } from 'src/const/const';
import { Especializacao } from 'src/models/entidades/especializacao';
import { EspecializacaoService } from 'src/services/especializacao.service';

@Component({
  selector: 'mp-select-especializacao',
  templateUrl: './select-especializacao.component.html',
  styleUrls: ['./select-especializacao.component.css']
})
export class SelectEspecializacaoComponent implements OnInit {

  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));

  constructor(
    private especializacaoService: EspecializacaoService
  ) { }

  ngOnInit(): void {
  }

}
