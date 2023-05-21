import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas } from 'src/enum/enum';
import { Especializacao } from 'src/models/entidades/especializacao';
import { EspecializacaoService } from 'src/services/especializacao.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent extends PadraoComponent implements OnInit, AfterViewInit {

  @ViewChild("stepper") stepper: MatStepper;

  public formulario: FormGroup
  public logando: boolean = false;
  public mostraBotaoFinalizar: boolean = false;

  public ListaEspecializacao: Observable<Especializacao[]> = this.especializacaoService.get_all().pipe(map(x => x.data));  

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private especializacaoService: EspecializacaoService
  ) { 
    super();
  }

  public ngOnInit(): void {
    this.gerarFormulario();
  }

  public ngAfterViewInit(): void {
    this.stepper.selectionChange.subscribe(x => {
      if(x.selectedIndex == 4){
        this.mostraBotaoFinalizar = true;
      } else {
        this.mostraBotaoFinalizar = false;
      }
    })
  }


  private gerarFormulario(): void {
    this.formulario = this.formBuilder.group({
      email: null,
      password: null,
      confirmPassword: null,
      nome: null,
      dataNascimento: null,
      genero: null,
      telefone: null,
      imagem: null,
      crm: null,
      cpf: null,
      especializacoes: []
    })
  }

  public async cadastrarUsuario(): Promise<void> {
    this.logando = true;

    await this.loginService.registrar_usuario(this.formulario.value).toPromise()
      .then(x => this.inserir_cookie("usuario", JSON.stringify(x.data)))
      .then(() => this.redirecionar())
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))
      .finally(() => this.logando = false)
  }

  private redirecionar(): void {
    this.router.navigate([Rotas.Inicio])
  }

}
