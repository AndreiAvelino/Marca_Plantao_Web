import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { FormularioModule } from 'src/forms/formulario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AuthInterceptor } from 'src/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioModule,
  ],
  exports: [
    AuthComponent
  ], 
  providers: [
    AuthInterceptor
  ]
})
export class AuthModule { }
