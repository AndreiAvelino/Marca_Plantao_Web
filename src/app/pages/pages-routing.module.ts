import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurarClinicaComponent } from './clinica/configurar-clinica/configurar-clinica.component';
import { ConfigurarOfertaComponent } from './oferta/configurar-oferta/configurar-oferta.component';
import { ListagemOfertaComponent } from './oferta/listagem-oferta/listagem-oferta.component';
import { PagesComponent } from './pages.component';
import { AvaliarPlantaoComponent } from './plantao/avaliar-plantao/avaliar-plantao.component';
import { HistoricoPlantaoComponent } from './plantao/historico-plantao/historico-plantao.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'listagemoferta',
        component: ListagemOfertaComponent,
      },
      {
        path: 'configuraroferta',
        component: ConfigurarOfertaComponent,
      },
      {
        path: 'historicoplantao',
        component: HistoricoPlantaoComponent,
      },
      {
        path: 'avaliacaoplantao',
        component: AvaliarPlantaoComponent,
      },
      {
        path: 'configurarclinica',
        component: ConfigurarClinicaComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
