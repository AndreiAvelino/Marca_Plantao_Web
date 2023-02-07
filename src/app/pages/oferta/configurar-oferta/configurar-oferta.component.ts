import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog , MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { ListaEspecializacao, MetodosPagamento } from 'src/const/const';
import { Especializacao, Oferta, Usuario } from 'src/models/models';
import { ColunaTabela, Tabela } from 'src/models/table';
import { PerfilUsuarioComponent } from '../../usuario/perfil-usuario/perfil-usuario.component';

enum Turno {
  COMPLETO = '24h',
  MEIO = '12h'
}

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
      DataInicial: this.oferta.DataInicial,
      HorarioInicial: "12:00",
      DataFinal: "12:00",
      HorarioFinal: "",
      DataCadastro: "",
      MetodoPagamento: ""
    })

  }



  public onClickButtonFinalizar(): void {
    this.dialogRef.close(this.formulario.value)
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
  }

  public onChangeTurno(evento: Turno): void {
    switch(evento){
      case Turno.MEIO:     this.aumentarDataFim(12);
                           break;
      case Turno.COMPLETO: this.aumentarDataFim(24);
                           break;
    }
  }

  private aumentarDataFim(horas: number): void {
    this.formulario.patchValue({
      DataFinal: this.addHours(new Date(this.formulario.value.DataInicial), horas)
    })
  }

  public addHours(date, hours) {
    const dateCopy = new Date(date);  
    dateCopy.setHours(dateCopy.getHours() + hours);  
    return dateCopy.toISOString().split('T')[0];
  }


}
