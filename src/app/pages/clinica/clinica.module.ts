import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurarClinicaComponent } from './configurar-clinica/configurar-clinica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { FormularioModule } from 'src/forms/formulario.module';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    ConfigurarClinicaComponent
  ],
  imports: [
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormularioModule
  ]
})
export class ClinicaModule { }
