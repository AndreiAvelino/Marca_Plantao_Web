import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Response } from 'src/models/response';
import { IndicadorService } from 'src/services/indicador.service';
import { Indicadores, PlantaoXMes, ValorXDia } from 'src/models/entidades/indicador';

@Injectable({
  providedIn: 'root'
})

export class IndicadoresResolve extends PadraoComponent implements Resolve<Indicadores> {

    private indicadores: Indicadores = {
        plantaoxmes: null,
        valorxdia: null
    };

    constructor(
        private indicadorService: IndicadorService
    ) {
        super()
    }

    async resolve(): Promise<Indicadores> {              
        await this.get_plantaoxmes();        
        await this.get_valorxdia();
        return this.indicadores
    }


    private async get_plantaoxmes(): Promise<void> {
        if(this.isResponseLoginAdministrador(this.usuarioLogado)){
            await this.indicadorService.get_plantaoxmes(this.usuarioLogado.clinicaId).toPromise()
              .then((x: Response<PlantaoXMes[]>) => this.indicadores.plantaoxmes = x.data)
        }  
    }

    private async get_valorxdia(): Promise<void> {
        if(this.isResponseLoginAdministrador(this.usuarioLogado)){
            await this.indicadorService.get_valorxdia(this.usuarioLogado.clinicaId).toPromise()
              .then((x: Response<ValorXDia[]>) => this.indicadores.valorxdia = x.data)
        }  
    }

}