import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { MetodosPagamento } from 'src/const/const';
import { Especializacao } from 'src/models/entidades/especializacao';
import { Oferta } from 'src/models/entidades/oferta';
import { Usuario } from 'src/models/entidades/usuario';
import { ColunaTabela, Tabela } from 'src/models/table';
import { EspecializacaoService } from 'src/services/especializacao.service';

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

  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));  
  public ListaMetodosPagamento: Array<String> = MetodosPagamento

  public formulario: FormGroup; 

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
    private especializacaoService: EspecializacaoService,
    @Inject(MAT_DIALOG_DATA) public data: Oferta,
  ){
    super();
    this.oferta = data
  }

  ngOnInit(): void {

    this.formulario = this._formBuilder.group({
      Id: "00000000-0000-0000-0000-000000000000",
      Titulo: "",
      Descricao: "",
      Turno: "",
      Valor: "",
      ValorHoraExtra: "",
      DataCadastro: this.gerar_data_hora_atual(),
      MetodoPagamento: 0,
      Especializacoes: [],
      Profissionais: [],
      DataInicial: this.oferta.DataInicial,
      HorarioInicial: "12:00",
      DataFinal: "12:00",
      HorarioFinal: "",
      ClinicaId: this.oferta.ClinicaId,
      Pagamento: 0
    })

  }

  public onClickButtonFinalizar(): void {
    let oferta = {
      ...this.formulario.value,
      DataInicial: this.formulario.value.DataInicial + 'T' + this.formulario.value.HorarioInicial + ':00',
      DataFinal: this.formulario.value.DataFinal + 'T' + this.formulario.value.HorarioFinal + ':00',
    } as Oferta

    console.log(JSON.stringify(oferta))

    this.dialogRef.close(oferta)
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
