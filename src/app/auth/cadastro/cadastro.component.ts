import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas } from 'src/enum/enum';
import { Especializacao } from 'src/models/entidades/especializacao';
import { EspecializacaoService } from 'src/services/especializacao.service';
import { LoginService } from 'src/services/login.service';
import { MyErrorStateMatcher } from './mather';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})


export class CadastroComponent extends PadraoComponent implements OnInit, AfterViewInit {

  @ViewChild("stepper") stepper: MatStepper;
  matcher = new MyErrorStateMatcher();

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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      crm: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      especializacoes: [[], [Validators.required]]
    })
  }

  public async cadastrarUsuario(): Promise<void> {

    if(this.checarCampos()){
      this.logando = true;

      await this.loginService.registrar_usuario(this.formulario.value).toPromise()
        .then(x => {
          if(x.success){
            this.inserir_cookie("usuario", JSON.stringify(x.data))
          } else {
            x.errors.forEach(e => this.mensagem_erro(e)) 
          }
        })
        .then(() => this.redirecionar())
        .catch((e) => e.error.errors.forEach(m => this.mensagem_erro(m)))
        .finally(() => this.logando = false)
    }
   
  }

  private redirecionar(): void {
    this.router.navigate([Rotas.Inicio])
  }

  private checarCampos(): boolean {
    let valido = true

    if(!this.formulario.get('email').valid){
      valido = false
      this.mensagem_erro('O campo email está incorreto')
    }
    if(!this.formulario.get('password').valid){
      valido = false
      this.mensagem_erro('O campo senha deve ser informado')
    }
    if(!this.formulario.get('confirmPassword').valid){
      valido = false
      this.mensagem_erro('O campo confirmar deve ser informado')
    }
    if(!this.formulario.get('nome').valid){
      valido = false
      this.mensagem_erro('O campo nome deve ser informado')
    }
    if(!this.formulario.get('dataNascimento').valid){
      valido = false
      this.mensagem_erro('O campo data de nascimento deve ser informado')
    }
    if(!this.formulario.get('genero').valid){
      valido = false
      this.mensagem_erro('O campo genero deve ser informado')
    }
    if(!this.formulario.get('telefone').valid){
      valido = false
      this.mensagem_erro('O campo telefone deve ser informado')
    }
    if(!this.formulario.get('crm').valid){
      valido = false
      this.mensagem_erro('O campo CRM deve ser informado')
    }
    if(!this.formulario.get('cpf').valid){
      valido = false
      this.mensagem_erro('O campo CPF deve ser informado')
    }
    if(this.formulario.get('especializacoes').value.length == 0){
      valido = false
      this.mensagem_erro('Informe ao menos uma especialização')
    }
    if(this.formulario.get('password').value != this.formulario.get('confirmPassword').value){
      valido = false
      this.mensagem_erro('As senhas informadas nao coincidem')
    }


    return valido;
  }
  
}
