import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusPagamento, StatusPlantao } from 'src/enum/enum';
import { Plantao } from 'src/models/entidades/plantao';

@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html',
  styleUrls: ['./plantao.component.css']
})
export class PlantaoComponent implements OnInit {

  public plantao: Plantao = {
    id: "0",
    idOferta: "0",
    idUsuario: "0",
    status: StatusPlantao.Andamento,
    avaliacaoClinica: {
      id: "0",
      idPlantao: "0",
      nota: 4,
      descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      dataCadastro: "2020-02-03T12:00:00",
    },
    avaliacaoProfissional: {
      id: "0",
      idPlantao: "0",
      nota: 4,
      descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
      dataCadastro: "2020-02-03T12:00:00",
    },
    dataInicial: '',
    dataFinal: '',
    horaExtra: '',
    valorTotal: '',
    desconto: '',
    statusPagamento: StatusPagamento.Pendente,
    dataPagamento: '',
    comprovante: ''
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }




}
