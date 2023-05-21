import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Evento } from 'src/models/entidades/evento';
import { AgendaService } from 'src/services/agenda.service';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})

export class HistoricoPlantaoResolver extends PadraoComponent implements Resolve<Evento[]> {

    private eventos: Evento[] = []

    constructor(
        private agendaService: AgendaService
    ) {
        super()
    }

    async resolve(): Promise<Evento[]> {
        await this.get_all_evento_por_profissional();
        return this.eventos
    }

    private async get_all_evento_por_profissional(): Promise<void> {
        await this.agendaService.get_all_evento_por_profissional(this.usuarioLogado.id).toPromise()
            .then((x: Response<Evento[]>) => this.eventos = x.data)
    }
}