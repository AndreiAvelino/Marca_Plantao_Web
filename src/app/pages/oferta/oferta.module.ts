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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { CardOfertaComponent } from './card-oferta/card-oferta.component';
import { PesquisarOfertaComponent } from './pesquisar-oferta/pesquisar-oferta.component';
import { MatIconModule } from '@angular/material/icon';
import { FlipModule } from 'ngx-flip';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatStepperModule,
  MatIconModule
]


@NgModule({
  declarations: [ListagemOfertaComponent, ConfigurarOfertaComponent, CardOfertaComponent, PesquisarOfertaComponent],
  imports: [
    ...materialModules,
    CommonModule,
    SharedModule,
    FormsModule,
    FormularioModule,
    ReactiveFormsModule,
    FlipModule
  ],
  exports: [
    ListagemOfertaComponent,
    CardOfertaComponent
  ]
})
export class OfertaModule { }
