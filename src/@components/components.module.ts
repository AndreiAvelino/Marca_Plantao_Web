import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoResumidaComponent } from './avaliacao-resumida/avaliacao-resumida.component';
import { FormularioModule } from 'src/forms/formulario.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatIconModule
]

@NgModule({
  declarations: [AvaliacaoResumidaComponent],
  imports: [
    ...materialModules,
    CommonModule,
    FormsModule,
    FormularioModule
  ],
  exports: [
    AvaliacaoResumidaComponent
  ]
})
export class ComponentsModule { }
