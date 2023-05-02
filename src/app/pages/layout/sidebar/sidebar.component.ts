import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas } from 'src/enum/enum';
import { Profissional } from 'src/models/entidades/profissional';
import { Menu } from 'src/models/menu';
import { ProfissionalService } from 'src/services/profissional.service';
import { LayoutState } from 'src/store/layout/layout.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent extends PadraoComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav;

  public profissional: Profissional;

  public sidenavState$: Observable<boolean> = this.layoutStore.select('layout').pipe(map(x => x.SidenavState));

  public menu: Menu;


  constructor(
    public layoutStore: Store<{layout: LayoutState}>,
    private profissionalService: ProfissionalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.get_profissional();
    this.gera_menu();
  }


  ngAfterViewInit(): void {
    this.sidenavState$.subscribe(novoestado => this.sidenav.opened = novoestado);
  }

  private gera_menu(): void {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      this.menu = {
        Itens: [
          {
            Descricao: 'Início',
            Rota: Rotas.Inicio,
            Icon: 'home'
          },
          {
            Descricao: 'Agenda',
            Rota: Rotas.Agenda,
            Icon: 'calendar_today'
          },
          {
            Descricao: 'Indicadores',
            Rota: Rotas.Indicadores,
            Icon: 'bar_chart'
          },
          // {
          //   Descricao: 'Lista de ofertas',
          //   Rota: Rotas.ListagemOferta
          // },
          // {
          //   Descricao: 'Configurar clínica',
          //   Rota: Rotas.ConfigurarClinica
          // },
          // {
          //   Descricao: 'Histórico de plantões',
          //   Rota: Rotas.HistoricoPlantao
          // }
        ]
      }
    }

    if(this.isResponseLoginProfissional(this.usuarioLogado)){
      this.menu = {
        Itens: [
          {
            Descricao: 'Início',
            Rota: Rotas.Inicio,
            Icon: 'home'
          },
          {
            Descricao: 'Agenda',
            Rota: Rotas.Agenda,
            Icon: 'calendar_today'
          },
          {
            Descricao: 'Candidaturas',
            Rota: Rotas.ListagemOferta,
            Icon: 'add'
          },
          {
            Descricao: 'Histórico de plantões',
            Rota: Rotas.HistoricoPlantao,
            Icon: 'history'
          }
        ]
      }
    }
  }
  
  private async get_profissional(): Promise<void> {
    if(this.isResponseLoginProfissional(this.usuarioLogado)){
      await this.profissionalService.get(this.usuarioLogado.id).toPromise()
        .then(x => this.profissional = x.data)
    } 
  }

}
