import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { PerfilUsuarioComponent } from '../../usuario/perfil-usuario/perfil-usuario.component';

interface Candidato {
  Id: number;
  Nome: string;
  Src: string;
}

@Component({
  selector: 'app-modal-lista-candidatos-oferta',
  templateUrl: './modal-lista-candidatos-oferta.component.html',
  styleUrls: ['./modal-lista-candidatos-oferta.component.css']
})

export class ModalListaCandidatosOfertaComponent extends PadraoComponent implements OnInit {

  public candidatos: Candidato[] = [
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    },
    {
      Id: 0,
      Nome: "Andrei Avelino",
      Src: ''
    }
  ]

  constructor() {
    super();
  }


  ngOnInit(): void {
  }

  public abrirPerfilUsuario(): void {
    this.dialog.open(PerfilUsuarioComponent)
  }

}
