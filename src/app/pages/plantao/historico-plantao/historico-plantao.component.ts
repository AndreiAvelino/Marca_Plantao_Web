import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotas, StatusPlantao, TipoEvento } from 'src/enum/enum';
import { Evento } from 'src/models/entidades/evento';
import { ColunaTabela, Medida, Tabela } from 'src/models/table';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BotoesOpcoesHistoricoPlantaoComponent, OpcoesPlantao } from './botoes-opcoes-historico-plantao/botoes-opcoes-historico-plantao.component';

@Component({
  selector: 'app-historico-plantao',
  templateUrl: './historico-plantao.component.html',
  styleUrls: ['./historico-plantao.component.css']
})
export class HistoricoPlantaoComponent extends PadraoComponent implements OnInit, AfterContentChecked {

  public eventos: Evento[]

  public Colunas: Array<ColunaTabela> = [
    {
      Chave: "razaoSocial",
      Descricao: "Clínica",
      Tamanho: "30",
      Medida: Medida.Pixel
    },
    {
      Chave: "status",
      Descricao: "Status",
      Tamanho: "80",
      Medida: Medida.Pixel
    },
    {
      Chave: "dataInicial",
      Descricao: "Data inicial",
      Tamanho: "130",
      Medida: Medida.Pixel
    },
    {
      Chave: "dataFinal",
      Descricao: "Data final",
      Tamanho: "130",
      Medida: Medida.Pixel
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
    Margem: "10px",
  }
  
  constructor(
    private cdref: ChangeDetectorRef,
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
        dataFinal: x.dataFinal ? this.retorna_legivel_de_yyyymmddhhmmss(x.dataFinal) : "-",
        status: this.retorna_status_plantao(x.status)
      }
    })
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
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
