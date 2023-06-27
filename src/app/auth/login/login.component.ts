import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { Erro } from 'src/models/form';
import { LoginService } from 'src/services/login.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app/app.state';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends PadraoComponent implements OnInit {

  public ErrosEmail: Array<Erro> = [{Validator: 'email', Mensagem: 'Informe um e-mail válido', Peso: 1}, {Validator: 'required', Mensagem: 'Informe um e-mail', Peso: 2}]

  public formulario: FormGroup;

  public logando: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    super();
  }

  ngOnInit(): void {
    this.formulario = this._fb.group({
      Email: ["", [Validators.required, Validators.email]],
      Senha: [null, [Validators.required]]
    })
  }

  public async Login(): Promise<void> {

    if(!this.formulario.value.Email){
      this.mensagem_erro("Informe o e-mail");
      return;
    }

    if(!this.formulario.value.Senha){
      this.mensagem_erro("Informe a senha");
      return;
    }

    this.logando = true;

    await this.loginService.login(this.formulario.value).toPromise()
      .then(x => this.inserir_cookie("usuario", JSON.stringify({
        ...x.data,
        imagem: null
      })))
      .then(() => this.router.navigate([Rotas.Inicio]))
      .catch((e: HttpErrorResponse) => {
        this.mensagem_erro(e.error)
      })

    this.logando = false;
    
  }

  public Cadastro() {
    this.router.navigate([Rotas.Cadastro]);
  }




}
