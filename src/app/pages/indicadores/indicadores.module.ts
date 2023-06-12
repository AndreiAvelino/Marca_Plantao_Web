import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresComponent } from './indicadores.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatCardModule } from '@angular/material/card';
const materialModules = [
  MatCardModule
]

@NgModule({
  declarations: [
    IndicadoresComponent
  ],
  imports: [
    ...materialModules,
    CommonModule,
    NgApexchartsModule
  ]
})
export class IndicadoresModule { }
