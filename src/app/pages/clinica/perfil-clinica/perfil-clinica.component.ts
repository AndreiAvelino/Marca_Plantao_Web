import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Clinica } from 'src/models/entidades/clinica';
import { ClinicaService } from 'src/services/clinica.service';
import { Observable } from 'rxjs';
import { Rotas } from 'src/enum/enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-clinica',
  templateUrl: './perfil-clinica.component.html',
  styleUrls: ['./perfil-clinica.component.css']
})
export class PerfilClinicaComponent implements OnInit {

  public clinica: Clinica

  constructor(
    private clinicaService: ClinicaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get_clinica();
  }

  private get_clinica(): void {
    this.clinicaService.get(this.retorna_id_url()).toPromise()
      .then(x => this.clinica = x.data)
  }

  private retorna_id_url(): string {
    var url = new URL(window.location.href);
    return url.searchParams.get("id");
  }

  public gerar_media_nota(): number {
    if(this.clinica.avaliacoes.length > 0){
      return this.clinica.avaliacoes.map(x => x.nota).reduce((a, b) => a + b, 0) / this.clinica.avaliacoes.length
    } else {
      return 0
    }
    
  }

  public voltar(): void {
    this.router.navigate([Rotas.PesquisarOferta])
  }

  public retorna_imagem_clinica(): string {
    if(this.clinica.imagem){
      return 'data:image/jpeg;base64,' + this.clinica.imagem 
    } else {
      return "assets/sem-imagem-clinica.png";
    }
  }

}
