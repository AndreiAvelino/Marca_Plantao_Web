import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { NotificacoesComponent } from './navbar/notificacoes/notificacoes.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatBadgeModule,
]

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidebarComponent, FooterComponent, ItemComponent, NotificacoesComponent],
  imports: [
    HttpClientModule,
    AvatarModule,
    CommonModule,
    RouterModule,
    ...materialModules,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
