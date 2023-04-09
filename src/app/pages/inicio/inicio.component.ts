import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';






@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  public buscando: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public Buscar(): void{
    this.buscando = !this.buscando;

    // setTimeout(() => {
    //   this.router.navigate([Rotas.PesquisarOferta])
    // })
  }
  
}
