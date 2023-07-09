import { Component, OnInit } from '@angular/core';
import { Plantao } from 'src/models/entidades/plantao';
import { Router } from '@angular/router';
import { ClinicaService } from 'src/services/clinica.service';
import { OfertaService } from 'src/services/oferta.service';
import { FormaPagamento, Rotas, StatusPagamento, StatusPlantao } from 'src/enum/enum';
import { PlantaoService } from 'src/services/plantao.service';
import { Observable } from 'rxjs';
import { Response } from 'src/models/response';
import { Oferta } from 'src/models/entidades/oferta';
import { Clinica } from 'src/models/entidades/clinica';
import * as moment from 'moment';
import { AvaliacaoPlantao } from 'src/models/entidades/avaliacao';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-plantao',
  templateUrl: './info-plantao.component.html',
  styleUrls: ['./info-plantao.component.css']
})
export class InfoPlantaoComponent implements OnInit {

  public plantao: Plantao;
  public oferta: Oferta;
  public clinica: Clinica;
  public avaliacoes: AvaliacaoPlantao;

  public formulario: FormGroup;

  constructor(
    private ofertaService: OfertaService,
    private clinicaService: ClinicaService,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }


  async ngOnInit(): Promise<void> {
    await this.get_plantao(this.retorna_id_url()).toPromise()
      .then((x: Response<Plantao>) => this.plantao = x.data)

    await this.get_oferta(this.plantao.ofertaId).toPromise()
      .then((x: Response<Oferta>) => this.oferta = x.data)
    
    await this.get_clinica(this.oferta.clinicaId).toPromise()
      .then((x: Response<Clinica>) => this.clinica = x.data)
  }

  private get_plantao(id: string): Observable<Response<Plantao>> {
    return this.plantaoService.get(id)
  }

  private get_oferta(id: string): Observable<Response<Oferta>> {
    return this.ofertaService.get(id)
  }

  private get_clinica(id: string): Observable<Response<Clinica>> {
    return this.clinicaService.get(id);
  }

  private retorna_id_url(): string {
    var url = new URL(window.location.href);
    return url.searchParams.get("id");
  }

  public voltar(): void{
    this.router.navigate([Rotas.HistoricoPlantao])
  }

  public retorna_status_plantao(index: number): string {
    if(!index) return

    switch(index){
      case StatusPlantao.NaoIniciado: return "Não inciado";
      case StatusPlantao.Andamento:   return "Em andamento";
      case StatusPlantao.Finalizado:  return "Finalizado";
      case StatusPlantao.Cancelado:   return "Cancelado";
    }
  }

  public retorna_status_pagamento(index: number): string {
    if(!index) return

    switch(index){
      case StatusPagamento.Pendente: return "Pendente";
      case StatusPagamento.Efetuado: return "Efetuado";
    }
  }

  public retorna_metodo_pagamento(index: number): string {
    if(!index) return

    switch(index){
      case FormaPagamento.Pix: return "Pix";
      case FormaPagamento.Dinheiro: return "Dinheiro";
      case FormaPagamento.Cheque: return "Cheque";
      case FormaPagamento.Credito: return "Cartão de crédito";
      case FormaPagamento.Debito: return "Cartão de débito";
    }
  }

  public retorna_data_final_plantao(): string {
    if(this.plantao?.status == StatusPlantao.Finalizado){
      return moment(this.plantao.dataFinal).format('DD/MM/yy HH:mm')
    } else {
      return "-"
    }
  }

  public retorna_total_a_pagar(): number {
    if(!this.oferta && !this.plantao) return

    return parseFloat(this.oferta?.valor) + (this.plantao?.horaExtra ? parseInt(this.plantao?.horaExtra) * parseFloat(this.oferta?.valorHoraExtra) : 0) - (this.plantao?.desconto ? parseFloat(this.plantao?.desconto) : 0)       
  }


}
