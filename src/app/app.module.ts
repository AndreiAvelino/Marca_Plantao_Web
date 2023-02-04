import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { PagesModule } from './pages/pages.module';
import { appReducer } from 'src/store/app/app.state';
import { layoutReducer } from 'src/store/layout/layout.state';
import { AuthModule } from './auth/auth.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PadraoComponent } from './@padrao/padrao.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PadraoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    PagesModule,
    StoreModule.forRoot({app: appReducer}),
    StoreModule.forRoot({layout: layoutReducer}),
    EffectsModule.forRoot([]),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
