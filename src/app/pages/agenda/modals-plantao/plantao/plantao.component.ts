import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { FormaPagamento, StatusPagamento, StatusPlantao } from 'src/enum/enum';
import { Oferta } from 'src/models/entidades/oferta';
import { Plantao } from 'src/models/entidades/plantao';
import { Profissional } from 'src/models/entidades/profissional';
import { OfertaService } from 'src/services/oferta.service';
import { ProfissionalService } from 'src/services/profissional.service';
import * as moment from 'moment';

@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html',
  styleUrls: ['./plantao.component.css']
})
export class PlantaoComponent extends PadraoComponent implements OnInit {

  public oferta: Oferta;
  public profissional: Profissional

  public especializacoes: string;

  public plantao: Plantao

  constructor(
    public dialogRef: MatDialogRef<PlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plantao,
    private ofertaService: OfertaService,
    private profissionalService: ProfissionalService
  ) {
    super();

    this.plantao = data
  }

  async ngOnInit(): Promise<void> {
    await this.get_profissional(this.plantao.profissionalId)
    await this.get_oferta(this.plantao.ofertaId)

    this.especializacoes = this.oferta.especializacoes.map(x => x.descricao).join(', ')
  }

  private async get_oferta(idOferta: string): Promise<void> {
    await this.ofertaService.get(idOferta).toPromise()
      .then(x => this.oferta = x.data)
  }

  private async get_profissional(idProfissional: string): Promise<void> {
    await this.profissionalService.get(idProfissional).toPromise()
      .then(x => this.profissional = x.data)
  }


  public retorna_total_a_pagar(): number {
    return parseFloat(this.oferta.valor) + (this.plantao.horaExtra ? parseInt(this.plantao.horaExtra) * parseFloat(this.oferta.valorHoraExtra) : 0) - (this.plantao.desconto ? parseFloat(this.plantao.desconto) : 0)       
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

  public retorna_data_inicial_plantao(): string {
    if(this.plantao.status != StatusPlantao.NaoIniciado){
      return moment(this.plantao.dataInicial).format('DD/MM/yy')
    } else {
      return "-"
    }
  }

  public retorna_hora_inicial_plantao(): string {
    if(this.plantao.status != StatusPlantao.NaoIniciado){
      return this.retorna_hhmmss_de_yyyymmddhhmmss(this.plantao.dataInicial)
    } else {
      return "-"
    }    
  }

  public retorna_data_final_plantao(): string {
    if(this.plantao.status == StatusPlantao.Finalizado){
      return moment(this.plantao.dataFinal).format('DD/MM/yy')
    } else {
      return "-"
    }
  }

  public retorna_hora_final_plantao(): string {
    if(this.plantao.status == StatusPlantao.Finalizado){
      return this.retorna_hhmmss_de_yyyymmddhhmmss(this.plantao.dataFinal)
    } else {
      return "-"
    }
  }

  public retorna_datapagamento(): string {
    return moment(this.plantao.dataPagamento).format('DD/MM/yy HH:mm')
  }

}
