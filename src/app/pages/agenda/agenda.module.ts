import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AgendaComponent } from './agenda.component';
import {MatCardModule} from '@angular/material/card';
import { EventoComponent } from './evento/evento.component';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatButtonModule
]

@NgModule({
  declarations: [
    AgendaComponent,
    EventoComponent
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FullCalendarModule,
    MatCardModule
  ]
})
export class AgendaModule { }
