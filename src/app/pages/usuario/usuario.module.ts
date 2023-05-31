import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ComponentsModule } from 'src/@components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AvatarModule } from 'ngx-avatar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    AvatarModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    PerfilUsuarioComponent
  ]
})
export class UsuarioModule { }
