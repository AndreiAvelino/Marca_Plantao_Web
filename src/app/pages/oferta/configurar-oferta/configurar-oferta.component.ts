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
import * as moment from 'moment';
import { MetodoPagamento } from 'src/models/entidades/@shared';

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
  
  private oferta: Oferta;

  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));  
  public ListaMetodosPagamento: Array<MetodoPagamento> = MetodosPagamento

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
      id: this.oferta.id ? this.oferta.id : "00000000-0000-0000-0000-000000000000",
      titulo: this.oferta.titulo,
      descricao: this.oferta.descricao,
      turno: this.oferta.turno ? this.oferta.turno : '24h',
      valor: this.oferta.valor,
      valorHoraExtra: this.oferta.valorHoraExtra,
      dataCadastro: this.oferta.dataCadastro ? this.oferta.dataCadastro : this.gerar_data_hora_atual(),
      especializacoes: [],
      profissionais: this.oferta.profissionais ? this.oferta.profissionais : [],
      dataInicial: moment(this.oferta.dataInicial).format("yyyy-MM-DD"),
      horarioInicial: this.oferta.dataInicial ? moment(this.oferta.dataInicial).format("HH:mm") : "00:00",
      dataFinal: this.oferta.dataFinal ? moment(this.oferta.dataFinal).format("yyyy-MM-DD") : "",
      horarioFinal: this.oferta.dataFinal? moment(this.oferta.dataFinal).format("HH:mm") : "00:00",
      clinicaId: this.oferta.clinicaId,
      pagamento: this.oferta.pagamento ? this.oferta.pagamento : 0
    })


    this.formulario.patchValue({
      especializacoes: this.oferta.especializacoes ? (this.oferta.especializacoes as Especializacao[]).map(x => x.id) : []
    })

    this.formulario.controls.dataInicial.valueChanges.subscribe(x => {
      switch(this.formulario.value.turno){
        case Turno.MEIO:     this.muda_data_hora_final(12);
                             break;
        case Turno.COMPLETO: this.muda_data_hora_final(24);
                             break;
      }

      if(x < this.gerar_data_hora_atual("yyyy-MM-DD")){
        this.formulario.patchValue({
          dataInicial: this.gerar_data_hora_atual("yyyy-MM-DD")
        })
      }
    })

    this.formulario.controls.horarioInicial.valueChanges.subscribe(x => {
      if((this.formulario.value.dataInicial == this.gerar_data_hora_atual("yyyy-MM-DD")) && (x < this.gerar_hora_atual(1))){
        this.formulario.patchValue({
          horarioInicial: this.gerar_hora_atual(1)
        })
      }

      switch(this.formulario.value.turno){
        case Turno.MEIO:     this.muda_data_hora_final(12);
                             break;
        case Turno.COMPLETO: this.muda_data_hora_final(24);
                             break;
      }


    })

  }

  public onClickButtonFinalizar(): void {
    let oferta = {
      ...this.formulario.value,
      dataInicial: this.formulario.value.dataInicial + 'T' + this.formulario.value.horarioInicial,
      dataFinal: this.formulario.value.dataFinal + 'T' + this.formulario.value.horarioFinal,
    } as Oferta

    this.dialogRef.close(oferta)
  }

  public onClickButtonProsseguir(): void {
    this.stepper.next()
  }

  public onChangeTurno(evento: Turno): void {
    switch(evento){
      case Turno.MEIO:     this.muda_data_hora_final(12);
                           break;
      case Turno.COMPLETO: this.muda_data_hora_final(24);
                           break;
    }
  }

  public muda_data_hora_final(horas: number): void {
    var dataFinal = moment(this.formulario.value.dataInicial + ' ' + this.formulario.value.horarioInicial + ':00').add(horas, 'hours').format("YYYY-MM-DD HH:mm:ss")

    this.formulario.patchValue({
      dataFinal: moment(dataFinal).format("yyyy-MM-DD"),
      horarioFinal: moment(dataFinal).format("HH:mm:ss"),
    })
  }


  public addHours(date, hours) {
    const dateCopy = new Date(date);  
    dateCopy.setHours(dateCopy.getHours() + hours);  
    return dateCopy.toISOString().split('T')[0];
  }


}
