import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Candidato, Oferta } from 'src/models/entidades/oferta';
import { GerarPlantao } from 'src/models/entidades/plantao';
import { PerfilUsuarioComponent } from '../../../usuario/perfil-usuario/perfil-usuario.component';


@Component({
  selector: 'app-modal-lista-candidatos-oferta',
  templateUrl: './modal-lista-candidatos-oferta.component.html',
  styleUrls: ['./modal-lista-candidatos-oferta.component.css']
})

export class ModalListaCandidatosOfertaComponent extends PadraoComponent implements OnInit {

  public candidatos: Candidato[]
  constructor(
    public dialogRef: MatDialogRef<ModalListaCandidatosOfertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Oferta
  ){
    super();
    this.candidatos = data.profissionais ? data.profissionais : [];
  }


  ngOnInit(): void {
  }

  public abrirPerfilUsuario(): void {
    this.dialog.open(PerfilUsuarioComponent)
  }

  public selecionar_candidato(x: Candidato): void {
    this.dialogRef.close({
      gerar: true,
      obj: {
        ofertaId: this.data.id,
        profissionalId: x.id
      } as GerarPlantao
    })
  }

}
