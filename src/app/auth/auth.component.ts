import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { Erro } from 'src/models/form';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public ErrosEmail: Array<Erro> = [{Validator: 'email', Mensagem: 'Informe um e-mail válido', Peso: 1}, {Validator: 'required', Mensagem: 'Informe um e-mail', Peso: 2}]

  public formulario: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.formulario = this._fb.group({
      Email: ["", [Validators.required, Validators.email]],
      Senha: [null, [Validators.required]]
    })
  }

  public Login(): void {
    this.router.navigate([Rotas.Inicio])
  }
 

}
