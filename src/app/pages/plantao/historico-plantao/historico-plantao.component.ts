import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotas, StatusPlantao, TipoEvento } from 'src/enum/enum';
import { Evento } from 'src/models/entidades/evento';
import { Response } from 'src/models/response';
import { ColunaTabela, Tabela } from 'src/models/table';
import { AgendaService } from 'src/services/agenda.service';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BotoesOpcoesHistoricoPlantaoComponent, OpcoesPlantao } from './botoes-opcoes-historico-plantao/botoes-opcoes-historico-plantao.component';
import { PlantaoComponent } from '../../agenda/modals-plantao/plantao/plantao.component';
import { Plantao } from 'src/models/entidades/plantao';
import { PlantaoService } from 'src/services/plantao.service';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-historico-plantao',
  templateUrl: './historico-plantao.component.html',
  styleUrls: ['./historico-plantao.component.css']
})
export class HistoricoPlantaoComponent extends PadraoComponent implements OnInit {

  public eventos: Evento[]

  public Colunas: Array<ColunaTabela> = [
    {
      Chave: "razaoSocial",
      Descricao: "Clínica",
      Tamanho: "55"
    },
    {
      Chave: "status",
      Descricao: "Status",
      Tamanho: "15"
    },
    {
      Chave: "dataInicial",
      Descricao: "Data inicial",
      Tamanho: "15"
    },
    {
      Chave: "dataFinal",
      Descricao: "Data final",
      Tamanho: "15"
    }
  ]

  public Tabela: Tabela = {
    Registros: [],
    Colunas: this.Colunas,
    BotaoAlterar: false,
    BotaoExcluir: false,
    BotaoLinha: false,
    BotaoAcoes: true,
    Filtro: false,
    Titulo: "Historico de plantões",
    Margem: "10px"
  }
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _bottomSheet: MatBottomSheet
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this.Tabela.Registros = this.route.snapshot.data.eventos.filter(x => x.tipo == TipoEvento.Plantao).map(x => {
      return {
        ...x,
        dataInicial: this.retorna_legivel_de_yyyymmddhhmmss(x.dataInicial),
        dataFinal: this.retorna_legivel_de_yyyymmddhhmmss(x.dataFinal),
        status: this.retorna_status_plantao(x.status)
      }
    })
  }
  public retorna_status_plantao(index: number): string {
    switch(index){
      case StatusPlantao.NaoIniciado: return "Não inciado";
      case StatusPlantao.Andamento:   return "Em andamento";
      case StatusPlantao.Finalizado:  return "Finalizado";
      case StatusPlantao.Cancelado:   return "Cancelado";
    }
  }

  public async abrir_sheet(linha: any): Promise<void>{
    await this._bottomSheet.open(BotoesOpcoesHistoricoPlantaoComponent, {data: linha}).afterDismissed().toPromise()
      .then(x => {
        switch(x){
          case OpcoesPlantao.VER_PLANTAO: this.ver_plantao(linha);
                                          break;
          case OpcoesPlantao.AVALIAR:     this.avaliar_plantao(linha);
                                          break;
        }
      })      
  }

  private ver_plantao(linha: any): void{
    this.router.navigate([Rotas.InfoPlantao],  {
      queryParams: { id: linha.id}
    })
  }

  private avaliar_plantao(linha: any): void {
    this.router.navigate([Rotas.AvaliacaoPlantao],  {
      queryParams: { id: linha.id}
    })
  }


}
