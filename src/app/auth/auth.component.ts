import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '@fullcalendar/core/internal';
import { CookieService } from 'ngx-cookie';
import { Rotas } from 'src/enum/enum';
import { Erro } from 'src/models/form';
import { LoginService } from 'src/services/login.service';
import { PadraoComponent } from '../@padrao/padrao.component';
import { Response, ResponseLogin } from '../../models/models';
import { Store } from '@ngrx/store';
import { appInsereUsuario, AppState } from 'src/store/app/app.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent extends PadraoComponent implements OnInit {

  public ErrosEmail: Array<Erro> = [{Validator: 'email', Mensagem: 'Informe um e-mail válido', Peso: 1}, {Validator: 'required', Mensagem: 'Informe um e-mail', Peso: 2}]

  public formulario: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private store: Store<{app: AppState}>
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
      this.MensagemErro("Informa o e-mail");
      return;
    }

    if(!this.formulario.value.Senha){
      this.MensagemErro("Informe a senha");
      return;
    }

    this.loginService.login(this.formulario.value).toPromise()
      .then(x => this.InserirCookie("usuario", JSON.stringify(x.data)))
      .then(() => this.router.navigate([Rotas.Inicio]))
      .catch((e: HttpErrorResponse) => this.MensagemErro(e.error))
    
  }




}
