import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { InputAvaliacaoComponent } from './input-avaliacao/input-avaliacao.component';
import {MatIconModule} from '@angular/material/icon';
import { FormEnderecoComponent } from './form-endereco/form-endereco.component';
import { InputImagemComponent } from './input-imagem/input-imagem.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

import { MPRadioComponent } from './radio/mp-radio/mp-radio.component';

const materialModules = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatRadioModule
]

@NgModule({
  declarations: [
    FormDebugComponent,
    InputComponent,
    InputAvaliacaoComponent,
    InputImagemComponent,
    MPRadioComponent,
    FormEnderecoComponent
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FormsModule,    
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    InputComponent,
    InputAvaliacaoComponent,
    InputImagemComponent,
    MPRadioComponent,
    FormDebugComponent
  ]
})
export class FormularioModule { }
