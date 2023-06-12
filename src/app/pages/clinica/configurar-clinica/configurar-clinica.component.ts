import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Clinica } from 'src/models/entidades/clinica';
import { ClinicaService } from 'src/services/clinica.service';

interface UF {
  id: number,
  uf: string;
}

@Component({
  selector: 'app-configurar-clinica',
  templateUrl: './configurar-clinica.component.html',
  styleUrls: ['./configurar-clinica.component.css']
})
export class ConfigurarClinicaComponent extends PadraoComponent implements OnInit {

  public ufs: UF[] = [
    {
      uf: 'AC',
      id: 1
    },
    {
      uf: 'AL',
      id: 2
    },
    {
      uf: 'AP',
      id: 3
    },
    {
      uf: 'AM',
      id: 4
    },
    {
      uf: 'BA',
      id: 5
    },
    {
      uf: 'CE',
      id: 6
    },
    {
      uf: 'DF',
      id: 7
    },
    {
      uf: 'ES',
      id: 8
    },
    {
      uf: 'GO',
      id: 9
    },
    {
      uf: 'MA',
      id: 10
    },
    {
      uf: 'MS',
      id: 11
    },
    {
      uf: 'MT',
      id: 12
    },
    {
      uf: 'MG',
      id: 13
    },
    {
      uf: 'PA',
      id: 14
    },
    {
      uf: 'PB',
      id: 15
    },
    {
      uf: 'PR',
      id: 16
    },
    {
      uf: 'PE',
      id: 17
    },
    {
      uf: 'PI',
      id: 18
    },
    {
      uf: 'RJ',
      id: 19
    },
    {
      uf: 'RN',
      id: 20
    },
    {
      uf: 'RS',
      id: 21
    },
    {
      uf: 'RO',
      id: 22
    },
    {
      uf: 'RR',
      id: 23
    },
    {
      uf: 'SC',
      id: 24
    },
    {
      uf: 'SP',
      id: 25
    },
    {
      uf: 'SE',
      id: 26
    },
    {
      uf: 'TO',
      id: 27
    }

  ]

  private clinica: Clinica;

  public formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private clinicaService: ClinicaService
  ){ 
    super();
  }

  ngOnInit(): void {
    this.clinica = this.route.snapshot.data.clinica
    this.gerar_formulario();
  }

  private gerar_formulario(): void {
    console.log(this.clinica)

    this.formulario = this.formBuilder.group({
      id: this.clinica.id,
      razaoSocial: this.clinica.razaoSocial,
      imagem: this.clinica.imagem ? this.clinica.imagem : null,
      sobre: this.clinica.sobre,
      endereco: this.formBuilder.group({
        id: this.clinica.endereco.id,
        rua: this.clinica.endereco.rua,
        cep: this.clinica.endereco.cep,
        bairro: this.clinica.endereco.bairro,
        cidade: this.clinica.endereco.cidade,
        uf: this.clinica.endereco.uf,
        dataCadastro: this.clinica.endereco.dataCadastro
      }),
      dataCadastro: this.clinica.endereco.dataCadastro
    })
  }

  public put(): void {
    const formData: FormData = new FormData();
    formData.append('Imagem', this.formulario.value.imagem)
    formData.append('Id', this.formulario.value.id)
    formData.append('RazaoSocial', this.formulario.value.razaoSocial)
    formData.append('Sobre', this.formulario.value.sobre)
    formData.append('Imagem', this.formulario.value.imagem)
    formData.append('Endereco.Id', this.formulario.value.endereco.id)
    formData.append('Endereco.Bairro', this.formulario.value.endereco.bairro)
    formData.append('Endereco.Cidade', this.formulario.value.endereco.cidade)
    formData.append('Endereco.Rua', this.formulario.value.endereco.rua)
    formData.append('Endereco.Cep', this.formulario.value.endereco.cep)
    formData.append('Endereco.UF', this.formulario.value.endereco.uf)

    this.clinicaService.put(formData).toPromise()
      .then(x => {
        if(x.success){
          this.mensagem_sucesso("Perfil atualizado!")
        } else {
          x.errors.forEach(e => this.mensagem_erro(e))
        }
      })
      .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))
      
  }

}
