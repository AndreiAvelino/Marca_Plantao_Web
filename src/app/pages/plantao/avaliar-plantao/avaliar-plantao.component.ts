import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { AdicionarAvaliacaoPlantaoProfissional } from 'src/models/entidades/avaliacao';
import { AvaliacaoService } from 'src/services/avaliacao.service';
import { Response } from 'src/models/response';
import { HttpErrorResponse } from '@angular/common/http';
import { Plantao } from 'src/models/entidades/plantao';
import { Clinica } from 'src/models/entidades/clinica';
import { Observable } from 'rxjs';
import { ClinicaService } from 'src/services/clinica.service';
import { PlantaoService } from 'src/services/plantao.service';
import { Oferta } from 'src/models/entidades/oferta';
import { OfertaService } from 'src/services/oferta.service';


@Component({
  selector: 'app-avaliar-plantao',
  templateUrl: './avaliar-plantao.component.html',
  styleUrls: ['./avaliar-plantao.component.css']
})
export class AvaliarPlantaoComponent extends PadraoComponent implements OnInit {

  public plantao: Plantao;
  public oferta: Oferta;

  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private avaliarService: AvaliacaoService,
    private clinicaService: ClinicaService,
    private plantaoService: PlantaoService,
    private ofertaService: OfertaService
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.criar_formulario();

    await this.get_plantao(this.retorna_id_url()).toPromise()
      .then((x: Response<Plantao>) => this.plantao = x.data)

    await this.get_oferta(this.plantao.ofertaId).toPromise()
      .then((x: Response<Oferta>) => this.oferta = x.data)
    
  }

  private criar_formulario(): void {
    this.formulario = this.formBuilder.group({
      nota: 0,
      descricao: null 
    })
  }

  public Avaliar(): void {
    let obj = {
      plantaoId: this.plantao.id,
      profissionalId: this.plantao.profissionalId,
      clinicaId: this.oferta.clinicaId, 
      nota: this.formulario.value.nota,
      descricao: this.formulario.value.descricao 
    } as AdicionarAvaliacaoPlantaoProfissional

    this.avaliarService.put(obj).toPromise()
      .then((r) => {
        if(r.success){
          this.mensagem_sucesso('Avaliacao realizada!')
        } else {
          r.errors.forEach(e => this.mensagem_sucesso(e))
        }
      })
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))
  }

  private retorna_id_url(): string {
    var url = new URL(window.location.href);
    return url.searchParams.get("id");
  }

  private get_plantao(id: string): Observable<Response<Plantao>> {
    return this.plantaoService.get(id)
  }

  private get_oferta(id: string): Observable<Response<Oferta>> {
    return this.ofertaService.get(id)
  }
}
