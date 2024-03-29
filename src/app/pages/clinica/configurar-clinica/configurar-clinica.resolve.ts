import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Response } from 'src/models/response';
import { AdministradoresPorClinica, Clinica } from 'src/models/entidades/clinica';
import { ClinicaService } from 'src/services/clinica.service';

@Injectable({
  providedIn: 'root'
})

export class ConfigurarClinicaResolver extends PadraoComponent implements Resolve<Clinica> {

    private clinica: Clinica;

    constructor(
        private clinicaService: ClinicaService
    ) {
        super()
    }

    async resolve(): Promise<Clinica> {              
        await this.get_clinica();
        await this.administradores_por_clinica();
        return this.clinica
    }

    private async get_clinica(): Promise<void> {
        if(this.isResponseLoginAdministrador(this.usuarioLogado)){
            await this.clinicaService.get(this.usuarioLogado.clinicaId).toPromise()
              .then((x: Response<Clinica>) => this.clinica = x.data)
        }  
    }

    private async administradores_por_clinica(): Promise<void> {
        if(this.isResponseLoginAdministrador(this.usuarioLogado)){
            await this.clinicaService.administradores_por_clinica(this.usuarioLogado.clinicaId).toPromise()
              .then((x: Response<AdministradoresPorClinica[]>) => this.clinica.listaAdministradoresPorClinica = x.data)
        }  
    }

}