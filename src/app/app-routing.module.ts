import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { 
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'cadastro', 
    component: CadastroComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
