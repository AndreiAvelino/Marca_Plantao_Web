import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AgendaComponent } from './agenda/agenda.component';
import { ConfigurarClinicaComponent } from './clinica/configurar-clinica/configurar-clinica.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConfigurarOfertaComponent } from './oferta/configurar-oferta/configurar-oferta.component';
import { ListagemOfertaComponent } from './oferta/listagem-oferta/listagem-oferta.component';
import { PagesComponent } from './pages.component';
import { AvaliarPlantaoComponent } from './plantao/avaliar-plantao/avaliar-plantao.component';
import { HistoricoPlantaoComponent } from './plantao/historico-plantao/historico-plantao.component';
import { InfoPlantaoComponent } from './plantao/info-plantao/info-plantao.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'listagemoferta',
        component: ListagemOfertaComponent,
      },
      {
        path: 'agenda',
        component: AgendaComponent,
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
        path: 'infoplantao',
        component: InfoPlantaoComponent,
      },
      {
        path: 'configurarclinica',
        component: ConfigurarClinicaComponent,
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'indicadores',
        component: IndicadoresComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
