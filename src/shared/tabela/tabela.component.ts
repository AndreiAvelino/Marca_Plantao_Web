import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit, OnChanges {


  @Input("Tabela") Tabela: Tabela;

  @Output() EmiteClickBotaoAlterar = new EventEmitter();
  @Output() EmiteClickBotaoExcluir = new EventEmitter();
  @Output() EmiteClickLinha = new EventEmitter();
  @Output() EmiteClickBotaoAcoes = new EventEmitter();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public valorFiltro: String = "";
  
  public Chaves: Array<String> = []
  public Colunas: Array<ColunaTabela> = [];

  public DataSource: MatTableDataSource<any>;

  ngAfterViewInit(): void {
    this.GerarColunasEChaves();
    this.GerarDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.Tabela?.currentValue?.Registros){
      this.GerarDataSource(changes.Tabela.currentValue.Registros);
    }
  }

  private GerarColunasEChaves(): void {
    this.Colunas = this.Tabela.Colunas

    if(this.Tabela.BotaoAcoes){
      this.AdicionarColunaAcoes();
    }

    if(this.Tabela.BotaoAlterar){
      this.AdicionarColunaAlterar();
    }

    if(this.Tabela.BotaoExcluir){
      this.AdicionarColunaExcluir();
    }

    this.Chaves = this.Colunas.map(x => x.Chave)  
  } 

  private GerarDataSource(Registros?: any[]): void {
    this.DataSource = new MatTableDataSource(Registros ? Registros : this.Tabela.Registros);
    this.DataSource.paginator = this.paginator;
    this.DataSource.sort = this.sort;
  }

  public AdicionarColunaAcoes(): void {
    this.Colunas.unshift({
      Chave: "Acoes",
      Descricao: ''
    })
  }

  public AdicionarColunaAlterar(): void {
    this.Colunas.push({
      Chave: "Alterar",
      Descricao: ''
    })
  }

  public AdicionarColunaExcluir(): void {
    this.Colunas.push({
      Chave: "Excluir",
      Descricao: ''
    })
  }

  public onClickBotaoAcoes(linha: any): void {
    this.EmiteClickBotaoAcoes.emit(linha);
  }

  public EmitirClickAlterar(linha: any): void {
    this.EmiteClickBotaoAlterar.emit(linha);
  }

  public EmitirClickExcluir(linha: any): void {
    this.EmiteClickBotaoExcluir.emit(linha);
  }

  public EmitirClickLinha(linha: any): void {
    this.EmiteClickLinha.emit(linha)
  }

  public Filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.DataSource.filter = filterValue.trim().toLowerCase();

    if (this.DataSource.paginator) {
      this.DataSource.paginator.firstPage();
    }
  }

  public ColunasInformacoes(): Array<ColunaTabela> {
    return this.Colunas.filter(c => c.Chave != "Alterar").filter(c => c.Chave != "Excluir").filter(x => x.Chave != "Acoes")
  }

}