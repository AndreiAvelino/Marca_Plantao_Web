import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ResponseLogin } from 'src/models/models';

@Component({
  selector: 'app-padrao',
  template: ''
})
export class PadraoComponent implements OnInit {

  public layoutStore = inject(Store)
  public dialog = inject(MatDialog)
  public toastr = inject(ToastrService)
  public cookieService = inject(CookieService)

  get usuarioLogado(): ResponseLogin{
    return this.RetornarUsuarioLogado();
  }

  constructor() { }

  ngOnInit(): void {
  }

  public MensagemSucesso(mensagem: string): void{
    this.toastr.success(mensagem);
  }

  public MensagemErro(mensagem: string): void{
    this.toastr.error(mensagem);
  }

  public InserirCookie(chave: string, valor: string): void {
    this.cookieService.put(chave, valor);
  }

  public RemoverCookie(chave: string): void {
    this.cookieService.remove(chave);    
  }

  public RetornarCookie(chave: string){
    this.cookieService.get(chave);  
  }

  private RetornarUsuarioLogado(): ResponseLogin {
    return this.cookieService.get("usuario") ? JSON.parse(this.cookieService.get("usuario")) : null;
  }

}
