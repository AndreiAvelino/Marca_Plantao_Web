import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rotas } from 'src/enum/enum';
import { Menu } from 'src/models/menu';
import { LayoutState } from 'src/store/layout/layout.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav;

  public sidenavState$: Observable<boolean> = this.layoutStore.select('layout').pipe(map(x => x.SidenavState));


  public menu: Menu = {
    Itens: [
      {
        Descricao: 'Início',
        Rota: Rotas.Inicio
      },
      {
        Descricao: 'Agenda',
        Rota: Rotas.Agenda
      },
      {
        Descricao: 'Lista de ofertas',
        Rota: Rotas.ListagemOferta
      },
      {
        Descricao: 'Configurar clínica',
        Rota: Rotas.ConfigurarClinica
      },
      {
        Descricao: 'Histórico de plantões',
        Rota: Rotas.HistoricoPlantao
      }
    ]
  }


  constructor(public layoutStore: Store<{layout: LayoutState}>) { }

  ngAfterViewInit(): void {
    this.sidenavState$.subscribe(novoestado => this.sidenav.opened = novoestado);
  }

  ngOnInit(): void {
  }

}
