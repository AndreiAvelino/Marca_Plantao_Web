import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-configurar-clinica',
  templateUrl: './configurar-clinica.component.html',
  styleUrls: ['./configurar-clinica.component.css']
})
export class ConfigurarClinicaComponent implements OnInit {

  public formulario: UntypedFormGroup

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      Id: 0,
      RazaoSocial: "",
      Imagem: "",
      Endereco: this.formBuilder.group({
        Id: 0,
        Logradouro: "",
        CEP: "",
        Bairro: "",
        Cidade: "",
        UF: "",
        DataCadastro: ""
      }),
      DataCadastro: ""
    })

  }


}
