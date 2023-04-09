import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { StatusPagamento, StatusPlantao } from 'src/enum/enum';
import { Oferta } from 'src/models/entidades/oferta';
import { Plantao } from 'src/models/entidades/plantao';
import { Profissional } from 'src/models/entidades/profissional';
import { OfertaService } from 'src/services/oferta.service';
import { ProfissionalService } from 'src/services/profissional.service';


@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html',
  styleUrls: ['./plantao.component.css']
})
export class PlantaoComponent extends PadraoComponent implements OnInit {

  public oferta: Oferta;
  public profissional: Profissional

  public especializacoes: string;

  // public plantao: Plantao = {
  //   id: "0",
  //   ofertaId: "0",
  //   profissionalId: "0",
  //   status: StatusPlantao.Andamento,
  //   avaliacaoClinica: {
  //     id: "0",
  //     idPlantao: "0",
  //     nota: 4,
  //     descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  //     dataCadastro: "2020-02-03T12:00:00",
  //   },
  //   avaliacaoProfissional: {
  //     id: "0",
  //     idPlantao: "0",
  //     nota: 4,
  //     descricao: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  //     dataCadastro: "2020-02-03T12:00:00",
  //   },
  //   dataInicial: '',
  //   dataFinal: '',
  //   horaExtra: '',
  //   valorTotal: '',
  //   desconto: '',
  //   statusPagamento: StatusPagamento.Pendente,
  //   dataPagamento: '',
  //   comprovante: ''
  // }


  public plantao: Plantao

  constructor(
    public dialogRef: MatDialogRef<PlantaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Plantao,
    private ofertaService: OfertaService,
    private profissionalService: ProfissionalService
  ) {
    super();

    this.plantao = data
  }

  async ngOnInit(): Promise<void> {
    await this.get_profissional(this.plantao.profissionalId)
    await this.get_oferta(this.plantao.ofertaId)

    this.especializacoes = this.oferta.especializacoes.map(x => x.descricao).join(', ')
  }

  private async get_oferta(idOferta: string): Promise<void> {
    await this.ofertaService.get(idOferta).toPromise()
      .then(x => this.oferta = x.data)
  }

  private async get_profissional(idProfissional: string): Promise<void> {
    await this.profissionalService.get(idProfissional).toPromise()
      .then(x => this.profissional = x.data)
  }


  public retorna_status_plantao(index: number): string {
    switch(index){
      case StatusPlantao.NaoIniciado: return "Não inciado";
      case StatusPlantao.Andamento:   return "Em andamento";
      case StatusPlantao.Finalizado:  return "Finalizado";
      case StatusPlantao.Cancelado:   return "Cancelado";
    }
  }

  public retorna_total_a_pagar(): number {
    return parseFloat(this.oferta.valor) + (this.plantao.horaExtra ? parseInt(this.plantao.horaExtra) * parseFloat(this.oferta.valorHoraExtra) : 0) - (this.plantao.desconto ? parseFloat(this.plantao.desconto) : 0)
    
    
  }


}
