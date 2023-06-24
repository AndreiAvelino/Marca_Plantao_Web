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
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { PerfilClinicaComponent } from './perfil-clinica/perfil-clinica.component';
import { NgxMaskModule } from 'ngx-mask';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule
]

@NgModule({
  declarations: [
    ConfigurarClinicaComponent,
    PerfilClinicaComponent
  ],
  imports: [
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormularioModule,
    NgxMaskModule
  ]
})
export class ClinicaModule { }
