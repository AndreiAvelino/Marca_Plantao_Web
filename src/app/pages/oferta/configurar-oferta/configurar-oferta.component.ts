import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { ListaEspecializacao, MetodosPagamento } from 'src/const/const';
import { Especializacao, Oferta, Usuario } from 'src/models/models';
import { ColunaTabela, Tabela } from 'src/models/table';
import { PerfilUsuarioComponent } from '../../usuario/perfil-usuario/perfil-usuario.component';


@Component({
  selector: 'app-configurar-oferta',
  templateUrl: './configurar-oferta.component.html',
  styleUrls: ['./configurar-oferta.component.css']
})
export class ConfigurarOfertaComponent extends PadraoComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  
  private oferta: Oferta

  public ListaEspecializacao: Array<Especializacao> = ListaEspecializacao 
  public ListaMetodosPagamento: Array<String> = MetodosPagamento

  public formulario: UntypedFormGroup; 

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

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ConfigurarOfertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Oferta,
  ){
    super();
    this.oferta = data
  }

  ngOnInit(): void {

    this.formulario = this._formBuilder.group({
      Id: 0,
      Clinica: "",
      Descricao: "",
      idEspecializacao: 0,
      Valor: "",
      ListaIdCandidatos: [],
      DataInicial: this.oferta.DataPlantao,
      HorarioInicial: "",
      DataFinal: "",
      HorarioFinal: "",
      DataCadastro: "",
      MetodoPagamento: ""
    })

  }

  VerPerfilUsuairo(): void {
    const dialogRef = this.dialog.open(PerfilUsuarioComponent, {
      width: '500px',
      height: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
  }

  


}
