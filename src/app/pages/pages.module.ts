import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { OfertaModule } from './oferta/oferta.module';
import { PlantaoModule } from './plantao/plantao.module';
import { ClinicaModule } from './clinica/clinica.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    OfertaModule,
    PlantaoModule,
    ClinicaModule
  ]
})
export class PagesModule { }
