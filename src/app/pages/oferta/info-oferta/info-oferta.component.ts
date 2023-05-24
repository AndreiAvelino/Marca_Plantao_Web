import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/services/oferta.service';
import { Observable } from 'rxjs';;
import { Response } from 'src/models/response'
import { Oferta } from 'src/models/entidades/oferta';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClinicaService } from 'src/services/clinica.service';
import { Clinica } from 'src/models/entidades/clinica';
import { FormaPagamento, Rotas, StatusPagamento, StatusPlantao } from 'src/enum/enum';

@Component({
  selector: 'app-info-oferta',
  templateUrl: './info-oferta.component.html',
  styleUrls: ['./info-oferta.component.css']
})
export class InfoOfertaComponent implements OnInit {

  public oferta: Oferta;
  public clinica: Clinica;

  constructor(
    private ofertaService: OfertaService,
    private clinicaService: ClinicaService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.get_oferta(this.retorna_id_url()).toPromise()
      .then((x: Response<Oferta>) => this.oferta = x.data)
    
    await this.get_clicnica(this.oferta.clinicaId).toPromise()
      .then((x: Response<Clinica>) => this.clinica = x.data)
  }

  private get_oferta(id: string): Observable<Response<Oferta>> {
    return this.ofertaService.get(id)
  }

  private get_clicnica(id: string): Observable<Response<Clinica>> {
    return this.clinicaService.get(id);
  }

  private retorna_id_url(): string {
    var url = new URL(window.location.href);
    return url.searchParams.get("id");
  }

  public voltar(): void{
    this.router.navigate([Rotas.ListagemOferta])
  }
  
  public retorna_status_plantao(index: number): string {
    switch(index){
      case StatusPlantao.NaoIniciado: return "Não inciado";
      case StatusPlantao.Andamento:   return "Em andamento";
      case StatusPlantao.Finalizado:  return "Finalizado";
      case StatusPlantao.Cancelado:   return "Cancelado";
    }
  }

  public retorna_status_pagamento(index: number): string {
    switch(index){
      case StatusPagamento.Pendente: return "Pendente";
      case StatusPagamento.Efetuado: return "Efetuado";
    }
  }

  public retorna_metodo_pagamento(index: number): string {
    switch(index){
      case FormaPagamento.Pix: return "Pix";
      case FormaPagamento.Dinheiro: return "Dinheiro";
      case FormaPagamento.Cartao: return "Cartão";
      case FormaPagamento.Cheque: return "Cheque";
    }
  }


}
