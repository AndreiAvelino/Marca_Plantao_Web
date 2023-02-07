import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgendaComponent } from './agenda.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { OpcoesOfertaComponent } from './opcoes-oferta/opcoes-oferta.component';
import { OpcoesPlantaoComponent } from './opcoes-plantao/opcoes-plantao.component';
import { PlantaoComponent } from './plantao/plantao.component';
import { FormularioModule } from 'src/forms/formulario.module';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalizarPlantaoComponent } from './finalizar-plantao/finalizar-plantao.component';
import { PlantaoModule } from '../plantao/plantao.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { ModalListaCandidatosOfertaComponent } from './modal-lista-candidatos-oferta/modal-lista-candidatos-oferta.component';
import { AvatarModule } from 'ngx-avatar';
import {CdkAccordionModule} from '@angular/cdk/accordion';

const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatExpansionModule,
  CdkAccordionModule
]

@NgModule({
  declarations: [
    AgendaComponent,
    OpcoesOfertaComponent,
    OpcoesPlantaoComponent,
    PlantaoComponent,
    FinalizarPlantaoComponent,
    ModalListaCandidatosOfertaComponent
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FullCalendarModule,
    SharedModule,
    FormularioModule,
    ReactiveFormsModule,
    FormsModule,
    PlantaoModule,
    AvatarModule
  ]
})
export class AgendaModule { }
