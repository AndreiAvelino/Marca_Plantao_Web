import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { OfertaModule } from './oferta/oferta.module';
import { PlantaoModule } from './plantao/plantao.module';
import { ClinicaModule } from './clinica/clinica.module';
import { InicioModule } from './inicio/inicio.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AgendaModule } from './agenda/agenda.module';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { HistoricoPlantaoResolver } from './plantao/historico-plantao/historico-plantao.resolve';

@NgModule({
  declarations: [
    PagesComponent,
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    OfertaModule,
    PlantaoModule,
    ClinicaModule,
    InicioModule,
    UsuarioModule,
    AgendaModule,
    IndicadoresModule
  ],
  providers: [
    HistoricoPlantaoResolver
  ]
})
export class PagesModule { }
