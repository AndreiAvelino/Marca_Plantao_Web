import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CardComponent } from './card/card.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { AvaliacoesPlantaoComponent } from './avaliacoes-plantao/avaliacoes-plantao.component';

@NgModule({
  declarations: [TabelaComponent, CardComponent, ConfirmarComponent, AvaliacoesPlantaoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    TabelaComponent,
    CardComponent,
    ConfirmarComponent
  ]
})
export class SharedModule { }
