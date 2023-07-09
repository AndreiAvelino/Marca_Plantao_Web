import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas } from 'src/enum/enum';
import { Profissional } from 'src/models/entidades/profissional';
import { ProfissionalService } from 'src/services/profissional.service';

@Component({
  selector: 'menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.scss']
})
export class MenuUsuarioComponent extends PadraoComponent implements OnInit {

  public fotoPerfil: String = "";


  constructor(
    private profissionalService: ProfissionalService,
    private _router: Router
  ){
    super();
  }

  async ngOnInit(): Promise<void> {
    this.RecuperarFoto();
  }

  public sair(){
    this.remover_cookie("usuario");
    this._router.navigate([Rotas.Login]).finally(() => window.location.reload())
  }

  public mudar_foto(){
    // this._router.navigate([routes.FOTO_PERFIL])
  }

  public RecuperarFoto(): void {
    // this.fotoUsuarioService.get(this._localStorage.get_user_id()).toPromise()
    //   .then(r => {
    //     if(r.data){
    //       this.fotoPerfil = "data:image/png;base64," + r.data.src
    //     }
    //   })
  }
 
}
