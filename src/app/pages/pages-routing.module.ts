import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AgendaComponent } from './agenda/agenda.component';
import { ConfigurarClinicaComponent } from './clinica/configurar-clinica/configurar-clinica.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConfigurarOfertaComponent } from './oferta/configurar-oferta/configurar-oferta.component';
import { ListagemOfertaComponent } from './oferta/listagem-oferta/listagem-oferta.component';
import { PesquisarOfertaComponent } from './oferta/pesquisar-oferta/pesquisar-oferta.component';
import { PagesComponent } from './pages.component';
import { AvaliarPlantaoComponent } from './plantao/avaliar-plantao/avaliar-plantao.component';
import { HistoricoPlantaoComponent } from './plantao/historico-plantao/historico-plantao.component';
import { InfoPlantaoComponent } from './plantao/info-plantao/info-plantao.component';
import { HistoricoPlantaoResolver } from './plantao/historico-plantao/historico-plantao.resolve';
import { InfoOfertaComponent } from './oferta/info-oferta/info-oferta.component';
import { PerfilUsuarioComponent } from './usuario/perfil-usuario/perfil-usuario.component';
import { PerfilClinicaComponent } from './clinica/perfil-clinica/perfil-clinica.component';
import { ConfigurarClinicaResolver } from './clinica/configurar-clinica/configurar-clinica.resolve';
import { IndicadoresResolve } from './indicadores/indicadores.resolve';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'listagemoferta',
        component: ListagemOfertaComponent,
        resolve: { eventos: HistoricoPlantaoResolver }
      },
      {
        path: 'agenda',
        component: AgendaComponent,
      },
      {
        path: 'configuraroferta',
        component: ConfigurarOfertaComponent
      },
      {
        path: 'historicoplantao',
        component: HistoricoPlantaoComponent,
        resolve: { eventos: HistoricoPlantaoResolver }
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
        path: 'infooferta',
        component: InfoOfertaComponent,
      },
      {
        path: 'configurarclinica',
        component: ConfigurarClinicaComponent,
        resolve: { clinica: ConfigurarClinicaResolver }
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'indicadores',
        component: IndicadoresComponent,
        resolve: { indicadores: IndicadoresResolve }
      },
      {
        path: 'pesquisar-oferta',
        component: PesquisarOfertaComponent
      },
      {
        path: 'perfilusuario',
        component: PerfilUsuarioComponent
      },
      {
        path: 'perfilclinica',
        component: PerfilClinicaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
