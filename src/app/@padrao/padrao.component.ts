import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie';
import { ToastrService } from 'ngx-toastr';
import { ResponseLoginAdministrador, ResponseLoginProfissional } from 'src/models/entidades/usuario';
import * as moment from 'moment';
import { TipoUsuario } from 'src/enum/enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-padrao',
  template: ''
})
export class PadraoComponent implements OnInit {

  public layoutStore = inject(Store)
  public dialog = inject(MatDialog)
  public toastr = inject(ToastrService)
  public cookieService = inject(CookieService)

  get usuarioLogado(): ResponseLoginAdministrador | ResponseLoginProfissional {
    return this.retornar_usuario_logado();
  }

  constructor() { }

  ngOnInit(): void {
  }

  public mensagem_sucesso(mensagem: string): void{
    this.toastr.success(mensagem);
  }

  public mensagem_erro(mensagem: string): void{
    this.toastr.error(mensagem);
  }

  public inserir_cookie(chave: string, valor: string): void {
    this.cookieService.put(chave, valor);
  }

  public remover_cookie(chave: string): void {
    this.cookieService.remove(chave);    
  }

  public retornar_cookie(chave: string){
    this.cookieService.get(chave);  
  }

  private retornar_usuario_logado(): ResponseLoginAdministrador | ResponseLoginProfissional {
    return this.cookieService.get("usuario") ? JSON.parse(this.cookieService.get("usuario")) : null;
  }

  public retorna_tipo_usuario(): TipoUsuario {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      return TipoUsuario.Administrador;
    }
    if(this.isResponseLoginProfissional(this.usuarioLogado)){
      return TipoUsuario.Profissional;
    }
  }

  public verifica_usuario_administrador(): boolean {
    return this.retorna_tipo_usuario() == TipoUsuario.Administrador
  }

  public verifica_usuario_profissional(): boolean {
    return this.retorna_tipo_usuario() == TipoUsuario.Profissional
  }

  protected isResponseLoginAdministrador(item: any = this.usuarioLogado): item is ResponseLoginAdministrador {
    return 'clinicaId' in item;
  }

  protected isResponseLoginProfissional(item: any = this.usuarioLogado): item is ResponseLoginProfissional {
      return 'especializacoes' in item;
  }

  protected retorna_yyyymmdd_de_yyyymmddhhmmss(datahora: string): string{
    return moment(datahora).format("yyyy-MM-DD")
  }

  protected retorna_legivel_de_yyyymmddhhmmss(datahora: string): string {
    return moment(datahora).format("DD/MM/yy HH:mm")
  }

  protected retorna_hhmmss_de_yyyymmddhhmmss(datahora: string): string{
    return moment(datahora).format("HH:mm")
  }

  protected gerar_hora_atual(add: number = 0): string {
    return moment().add(add, 'hours').format("HH:mm")
  }

  protected gerar_data_hora_atual(format?: string, add: number = 0, data: string = 'hora'): string {
    switch(data){
      case 'hora': return moment().add(add, 'hours').format(format ? format : "");
    }

     
  }

}
