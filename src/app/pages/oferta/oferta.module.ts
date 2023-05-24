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
import { BotoesOpcoesOfertaComponent } from './botoes-opcoes-oferta/botoes-opcoes-oferta.component';
import { FiltrarListaOfertaComponent } from './filtrar-lista-oferta/filtrar-lista-oferta.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { BotoesOpcoesListagemOfertaComponent } from './listagem-oferta/botoes-opcoes-listagem-oferta/botoes-opcoes-listagem-oferta.component';
import { InfoOfertaComponent } from './info-oferta/info-oferta.component';

const materialModules = [
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatStepperModule,
  MatIconModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSliderModule,
  CdkAccordionModule,
  MatBottomSheetModule,
  MatListModule,
  MatExpansionModule
]


@NgModule({
  declarations: [ListagemOfertaComponent, ConfigurarOfertaComponent, CardOfertaComponent, PesquisarOfertaComponent, BotoesOpcoesOfertaComponent, FiltrarListaOfertaComponent, BotoesOpcoesListagemOfertaComponent, InfoOfertaComponent],
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
