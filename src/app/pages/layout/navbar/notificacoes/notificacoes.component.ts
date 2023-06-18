import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { ComponenteNotificacao, Rotas } from 'src/enum/enum';
import { Notificacao } from 'src/models/entidades/notificacao';
import { NotificacaoService } from 'src/services/notificacao.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent extends PadraoComponent implements OnInit {

  public ListaNotificacoes: Array<Notificacao> = []

  constructor(
    private router: Router,
    private notificacaoService: NotificacaoService
  ) {
    super()
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.notificacaoService.get_notificacao_usuario(this.usuarioLogado.id).toPromise()
      .then(x => this.ListaNotificacoes = x.data)
    }, 3000)
  }

  public RealizarAcao(notificacao: Notificacao): void {
    switch(notificacao.componente){
      case ComponenteNotificacao.PlantaoProfissional: this.ver_plantao(JSON.parse(notificacao.data));
                                                      break;

    }
  }

  private ver_plantao(linha: any): void{
    this.router.navigate([Rotas.InfoPlantao],  {
      queryParams: { id: linha.id}
    })
  }

}
