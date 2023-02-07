import { Component, OnInit } from '@angular/core';

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

export class ModalListaCandidatosOfertaComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
