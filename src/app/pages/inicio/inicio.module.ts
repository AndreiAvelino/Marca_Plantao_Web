import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OfertaModule } from '../oferta/oferta.module';

const materialModules = [
  MatCardModule
]

@NgModule({
  declarations: [InicioComponent],
  imports: [
    ...materialModules,
    NgApexchartsModule,
    CommonModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
