import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricoPlantaoComponent } from './historico-plantao/historico-plantao.component';
import { AvaliarPlantaoComponent } from './avaliar-plantao/avaliar-plantao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioModule } from 'src/forms/formulario.module';
import { SharedModule } from 'src/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { InfoPlantaoComponent } from './info-plantao/info-plantao.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule
]


@NgModule({
  declarations: [
    HistoricoPlantaoComponent, 
    AvaliarPlantaoComponent, InfoPlantaoComponent
  ],
  imports: [
    ...materialModules,
    ReactiveFormsModule,
    FormsModule,
    FormularioModule,
    SharedModule,
    CommonModule
  ]
})
export class PlantaoModule { }
