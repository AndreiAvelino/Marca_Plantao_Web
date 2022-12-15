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

  public plantao: Plantao = {
    Id: 0,
    idOferta: 0,
    idUsuario: 0,
    Status: StatusPlantao.Andamento,
    DataCadastro: "2020-02-03T12:00:00",
    AvaliacaoClinica: {
      Id: 0,
      idPlantao: 0,
      Nota: 4,
      Descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      DataCadastro: "2020-02-03T12:00:00",
    }
    
  }

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
