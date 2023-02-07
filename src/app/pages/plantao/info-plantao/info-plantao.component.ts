import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusPlantao } from 'src/enum/enum';
import { Plantao } from 'src/models/models';
import { AvaliarPlantaoComponent } from '../avaliar-plantao/avaliar-plantao.component';

@Component({
  selector: 'app-info-plantao',
  templateUrl: './info-plantao.component.html',
  styleUrls: ['./info-plantao.component.css']
})
export class InfoPlantaoComponent implements OnInit {

  public plantao: Plantao

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AvaliarClinica(): void {
    const dialogRef = this.dialog.open(AvaliarPlantaoComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  AvaliarProfissional(): void {
    const dialogRef = this.dialog.open(AvaliarPlantaoComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed()
      .subscribe(
        r => {
          this.plantao.AvaliacaoProfissional = {
            Id: 0,
            idPlantao: 0,
            Nota: r.Nota,
            Descricao: r.Descricao,
            DataCadastro: ""
          }
        });
  }


}
