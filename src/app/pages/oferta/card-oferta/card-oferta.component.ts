import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { FormaPagamento } from 'src/enum/enum';
import { MetodoPagamento } from 'src/models/entidades/@shared';
import { Clinica } from 'src/models/entidades/clinica';
import { AdicionarRemoverProfissionalOfertaDados, Oferta } from 'src/models/entidades/oferta';
import { Response } from 'src/models/response';
import { ClinicaService } from 'src/services/clinica.service';
import { OfertaService } from 'src/services/oferta.service';


@Component({
  selector: 'card-oferta',
  templateUrl: './card-oferta.component.html',
  styleUrls: ['./card-oferta.component.scss']
})
export class CardOfertaComponent extends PadraoComponent implements OnInit {

  @Input() oferta: Oferta;

  public mostrarOferta: boolean = false;

  public clinica$: Observable<Clinica>

  constructor(
    private ofertaService: OfertaService,
    private clinicaService: ClinicaService
  ) {
    super();
  }

  ngOnInit(): void {
    this.clinica$ = this.clinicaService.get(this.oferta.clinicaId).pipe(map(x => x.data))
  }
  
  public onClickBtnVerClinica(): void {

  }

  public onClickBtnLocalizacao(): void {

  }

  public async onClickBtnCandidatar(): Promise<void> {
    let adicionarCandidato = {
      profissionalId: this.usuarioLogado.id,
      ofertaId: this.oferta.id
    } as AdicionarRemoverProfissionalOfertaDados


    this.ofertaService.adicionar_candidato_oferta(adicionarCandidato).toPromise()
      .then(() => this.mensagem_sucesso("Candidatura realizada!"))
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.error.errors))
      
  }

  public onClickBtnVerOferta(oferta: Oferta): void {
    this.mostrarOferta = !this.mostrarOferta
  }

  public retornaMetodoPagamento(metodoPagamento: FormaPagamento): string{
    switch(metodoPagamento){
      case FormaPagamento.Pix:      return "Pix" 
      case FormaPagamento.Dinheiro: return "Dinheiro"
      case FormaPagamento.Cartao:   return "Cartão"
      case FormaPagamento.Cheque:   return "Cheque"
    }

  } 

  

}
