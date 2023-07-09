import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { FormaPagamento, Rotas } from 'src/enum/enum';
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

  @Output() emitirCandiatura = new EventEmitter();
  @Input() oferta: Oferta;

  public mostrarOferta: boolean = false;

  public clinica$: Observable<Clinica>

  constructor(
    private ofertaService: OfertaService,
    private clinicaService: ClinicaService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.clinica$ = this.clinicaService.get(this.oferta.clinicaId).pipe(map(x => x.data))
  }
  
  public onClickBtnVerClinica(): void {
    this._router.navigate([Rotas.PerfilClinica],  {
      queryParams: { id: this.oferta.clinicaId}
    })
  }


  public async onClickBtnCandidatar(): Promise<void> {
    let adicionarCandidato = {
      profissionalId: this.usuarioLogado.id,
      ofertaId: this.oferta.id
    } as AdicionarRemoverProfissionalOfertaDados


    await this.ofertaService.adicionar_candidato_oferta(adicionarCandidato).toPromise()
      .then(() => this.mensagem_sucesso("Candidatura realizada!"))
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.error.errors))
    
    this.emitirCandiatura.emit(this.oferta.id)

  }

  public onClickBtnVerOferta(oferta: Oferta): void {
    this.mostrarOferta = !this.mostrarOferta
  }

  public retornaMetodoPagamento(metodoPagamento: FormaPagamento): string{
    switch(metodoPagamento){
      case FormaPagamento.Pix: return "Pix";
      case FormaPagamento.Dinheiro: return "Dinheiro";
      case FormaPagamento.Cheque: return "Cheque";
      case FormaPagamento.Credito: return "Cartão de crédito";
      case FormaPagamento.Debito: return "Cartão de débito";
    }

  } 

  

}
