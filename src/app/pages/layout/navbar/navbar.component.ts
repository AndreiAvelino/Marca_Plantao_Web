import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Rotas } from 'src/enum/enum';
import { appRealizarLogout, AppState } from 'src/store/app/app.state';
import { layoutMudarEstadoSideNav, LayoutState } from 'src/store/layout/layout.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public layoutStore: Store<{layout: LayoutState}>,
              public appStore: Store<{app: AppState}>,
              private router: Router) { }

  ngOnInit(): void {
  }

  public MudarEstadoSidenav(): void {
    this.layoutStore.dispatch(layoutMudarEstadoSideNav());
  }

  public Logout(): void {
    this.appStore.dispatch(appRealizarLogout());
    this.router.navigate([Rotas.Login])
  }

}
