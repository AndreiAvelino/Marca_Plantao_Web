import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements AfterViewInit {

  @Input("Tabela") Tabela: Tabela;

  @Output() EmiteClickBotaoAlterar = new EventEmitter();
  @Output() EmiteClickBotaoExcluir = new EventEmitter();
  @Output() EmiteClickLinha = new EventEmitter();
  
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

  private GerarColunasEChaves(): void {
    this.Colunas = this.Tabela.Colunas

    if(this.Tabela.BotaoAlterar){
      this.AdicionarColunaAlterar();
    }

    if(this.Tabela.BotaoExcluir){
      this.AdicionarColunaExcluir();
    }

    this.Chaves = this.Colunas.map(x => x.Chave)  
  } 

  private GerarDataSource(): void {
    this.DataSource = new MatTableDataSource(this.Tabela.Registros);
    console.log(this.paginator)
    this.DataSource.paginator = this.paginator;
    this.DataSource.sort = this.sort;
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
    return this.Colunas.filter(c => c.Chave != "Alterar").filter(c => c.Chave != "Excluir")
  }

}