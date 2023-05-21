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
import { PlantaoComponent } from './modals-plantao/plantao/plantao.component';
import { FormularioModule } from 'src/forms/formulario.module';
import { SharedModule } from 'src/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalizarPlantaoComponent } from './modals-plantao/finalizar-plantao/finalizar-plantao.component';
import { PlantaoModule } from '../plantao/plantao.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import { ModalListaCandidatosOfertaComponent } from './modals-oferta/modal-lista-candidatos-oferta/modal-lista-candidatos-oferta.component';
import { AvatarModule } from 'ngx-avatar';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { OpcoesAgendaComponent } from './componentes-agenda/opcoes-agenda/opcoes-agenda.component';
import { MatSelectModule } from '@angular/material/select';
import { OpcoesPlantaoComponent } from './botoes-opcoes-eventos/opcoes-plantao/opcoes-plantao.component';
import { OpcoesOfertaComponent } from './botoes-opcoes-eventos/opcoes-oferta/opcoes-oferta.component';
import { DataAgendaComponent } from './componentes-agenda/data-agenda/data-agenda.component';
import {MatMenuModule} from '@angular/material/menu';
import { CalendarioAgendaComponent } from './componentes-agenda/calendario-agenda/calendario-agenda.component';
import { BotoesOpcoesAgendaComponent } from './componentes-agenda/botoes-opcoes-agenda/botoes-opcoes-agenda.component';
import { InicializarPlantaoComponent } from './modals-plantao/inicializar-plantao/inicializar-plantao.component';

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
  MatSliderModule,
  MatSelectModule,
  MatMenuModule,
  CdkAccordionModule
]

@NgModule({
  declarations: [
    AgendaComponent,
    OpcoesOfertaComponent,
    OpcoesPlantaoComponent,
    PlantaoComponent,
    FinalizarPlantaoComponent,
    ModalListaCandidatosOfertaComponent,
    OpcoesAgendaComponent,
    DataAgendaComponent,
    CalendarioAgendaComponent,
    BotoesOpcoesAgendaComponent,
    InicializarPlantaoComponent
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
