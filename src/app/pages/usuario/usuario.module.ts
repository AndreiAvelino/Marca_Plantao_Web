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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterarPerfilUsuarioComponent } from './perfil-usuario/alterar-perfil-usuario/alterar-perfil-usuario.component';
import { FormularioModule } from 'src/forms/formulario.module';
import { CriarUsuarioAdministradorComponent } from './criar-usuario-administrador/criar-usuario-administrador.component';

@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    AlterarPerfilUsuarioComponent,
    CriarUsuarioAdministradorComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    AvatarModule,
    MatIconModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    FormularioModule
  ],
  exports: [
    PerfilUsuarioComponent
  ]
})
export class UsuarioModule { }
