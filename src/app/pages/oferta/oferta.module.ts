import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemOfertaComponent } from './listagem-oferta/listagem-oferta.component';
import { SharedModule } from 'src/shared/shared.module';
import { ConfigurarOfertaComponent } from './configurar-oferta/configurar-oferta.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioModule } from 'src/forms/formulario.module';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
]


@NgModule({
  declarations: [ListagemOfertaComponent, ConfigurarOfertaComponent],
  imports: [
    ...materialModules,
    CommonModule,
    SharedModule,
    FormsModule,
    FormularioModule,
    ReactiveFormsModule
  ],
  exports: [
    ListagemOfertaComponent
  ]
})
export class OfertaModule { }
