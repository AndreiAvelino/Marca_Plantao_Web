import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AvaliacaoPlantao } from 'src/models/entidades/avaliacao';
import { Response } from 'src/models/response';
import { AvaliacaoService } from 'src/services/avaliacao.service';

@Component({
  selector: 'avaliacoes-plantao',
  templateUrl: './avaliacoes-plantao.component.html',
  styleUrls: ['./avaliacoes-plantao.component.css']
})
export class AvaliacoesPlantaoComponent implements OnInit {

  @Input() idPlantao: string;
  @Input() layout: string;
  @Input() AutorProfissional: string = 'Você'
  @Input() AutorClinica: string = 'Clínica'

  public formulario: FormGroup;
  public avaliacoes: AvaliacaoPlantao;

  constructor(private avaliacaoService: AvaliacaoService) { }

  async ngOnInit(): Promise<void> {
    await this.get_avaliacoes(this.idPlantao).toPromise()
      .then((x: Response<AvaliacaoPlantao>) => this.avaliacoes = x.data)
  }

  private get_avaliacoes(id: string): Observable<Response<AvaliacaoPlantao>> {
    return this.avaliacaoService.get(id);
  }
  
}
