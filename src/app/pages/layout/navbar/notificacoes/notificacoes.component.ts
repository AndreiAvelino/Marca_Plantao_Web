import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas, TipoNotificacao } from 'src/enum/enum';
import { Notificacao } from 'src/models/models';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {

  public ListaNotificacoes: Array<Notificacao> = [
    {
      Id: 0,
      Descricao: "Há 26 candidatos para o plantão X",
      Tipo: TipoNotificacao.Informacao,
      Rota: Rotas.ConfigurarOferta
    },
    {
      Id: 0,
      Descricao: "O plantão Y foi encerrado por falta de médico",
      Tipo: TipoNotificacao.Alerta
    },
    {
      Id: 0,
      Descricao: "O médico não comparecerá",
      Tipo: TipoNotificacao.Urgente
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public RealizarAcao(notificacao: Notificacao): void {

    console.log(notificacao)

    if(notificacao.Rota){
      this.router.navigate([notificacao.Rota])
    }
  }

}
