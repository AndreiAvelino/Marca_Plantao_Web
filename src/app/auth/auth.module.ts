import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioModule } from 'src/forms/formulario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { AvatarModule } from 'ngx-avatar';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioModule,
    AvatarModule
  ],
  exports: [
    LoginComponent,
    CadastroComponent
  ], 
  providers: [
    AuthInterceptor
  ]
})
export class AuthModule { }
