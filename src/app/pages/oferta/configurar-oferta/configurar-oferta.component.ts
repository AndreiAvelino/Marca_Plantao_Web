import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ListaEspecializacao } from 'src/const/const';
import { Especializacao, Usuario } from 'src/models/models';
import { ColunaTabela, Tabela } from 'src/models/table';

@Component({
  selector: 'app-configurar-oferta',
  templateUrl: './configurar-oferta.component.html',
  styleUrls: ['./configurar-oferta.component.css']
})
export class ConfigurarOfertaComponent implements OnInit {
  
  public ListaEspecializacao: Array<Especializacao> = ListaEspecializacao 

  public formulario: FormGroup; 

  public ListaUsuario: Array<Usuario> = [
    {
      Id: 0,
      Nome: "Carlos",
      Especializacoes: []
    },
    {
      Id: 0,
      Nome: "Maria",
      Especializacoes: []
    },
    {
      Id: 0,
      Nome: "José",
      Especializacoes: []
    },
    {
      Id: 0,
      Nome: "Plínio",
      Especializacoes: []
    },
    {
      Id: 0,
      Nome: "Bianca",
      Especializacoes: []
    },
    {
      Id: 0,
      Nome: "Rafaela",
      Especializacoes: []
    }
  ]
  public ColunasTabelaUsuario: Array<ColunaTabela> = [
    {
      Chave: "Nome",
      Descricao: "Nome",
      Tamanho: '70'
    }
  ]
  public TabelaUsuario: Tabela = {
    Registros: this.ListaUsuario,
    Colunas: this.ColunasTabelaUsuario,
    BotaoAlterar: false,
    BotaoExcluir: false,
    BotaoLinha: true,
    Filtro: false,
    Titulo: "Candidatos:"
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this._formBuilder.group({
      Id: 0,
      Clinica: "",
      Descricao: "",
      idEspecializacao: 0,
      Valor: "",
      ListaIdCandidatos: [],
      DataPlantao: "",
      DataCadastro: "",
    })

  }



}
