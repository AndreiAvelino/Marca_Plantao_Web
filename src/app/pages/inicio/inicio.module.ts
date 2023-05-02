import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import {MatCardModule} from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OfertaModule } from '../oferta/oferta.module';
import { SharedModule } from 'src/shared/shared.module';

const materialModules = [
  MatCardModule
]

@NgModule({
  declarations: [InicioComponent],
  imports: [
    ...materialModules,
    NgApexchartsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
