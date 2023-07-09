import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Clinica } from 'src/models/entidades/clinica';
import { ColunaTabela, Medida, Tabela } from 'src/models/table';
import { ClinicaService } from 'src/services/clinica.service';
import { CriarUsuarioAdministradorComponent } from '../../usuario/criar-usuario-administrador/criar-usuario-administrador.component';
import { switchMap } from 'rxjs/operators';
import { Response } from 'src/models/response';
import { AdministradoresPorClinica } from 'src/models/entidades/clinica';
import { LoginService } from 'src/services/login.service';

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

  public Colunas: Array<ColunaTabela> = [
    {
      Chave: "email",
      Descricao: "E-mail",
      Tamanho: "1300",
      Medida: Medida.Pixel
    },

  ]

  public Tabela: Tabela = {
    Registros: [],
    Colunas: this.Colunas,
    BotaoAlterar: false,
    BotaoExcluir: false,
    BotaoLinha: false,
    BotaoAcoes: false,
    Filtro: false,
    Margem: "10px"
  }

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
    private clinicaService: ClinicaService,
    private loginService: LoginService,
    private changeDetectorRefs: ChangeDetectorRef
  ){ 
    super();
  }

  ngOnInit(): void {
    this.clinica = this.route.snapshot.data.clinica
    this.Tabela.Registros = this.clinica.listaAdministradoresPorClinica
    this.gerar_formulario();
  }

  private gerar_formulario(): void {
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

  public criar_usuario(): void {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      this.dialog.open(CriarUsuarioAdministradorComponent, {
        data: this.usuarioLogado.clinicaId
      })
      .afterClosed()
      .pipe(
        switchMap((x) => this.loginService.registrar_administrador(x))
      )
      .toPromise()
      .then(() => this.mensagem_sucesso("Usuario cadastrado!"))
      .then(() => this.administradores_por_clinica())
      .catch((e: HttpErrorResponse) => this.imprimir_erro(e))
    } 
  }

  private imprimir_erro(e: HttpErrorResponse): void {
    if(e.error?.errors?.Password){
      e.error.errors.Password.forEach(e => this.mensagem_erro(e))
      return;
    }

    if(e.error?.errors?.ConfirmPassword){
      e.error.errors.Password.forEach(e => this.mensagem_erro(e))
      return;
    }

    e.error.errors.forEach(e => this.mensagem_erro(e))
  }

  private async administradores_por_clinica(): Promise<void> {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
        await this.clinicaService.administradores_por_clinica(this.usuarioLogado.clinicaId).toPromise()
          .then((x: Response<AdministradoresPorClinica[]>) => {
            this.Tabela = {
              ...this.Tabela,
              Registros: x.data
            }
          })
    }  
  }

  public verificar_usuario_master(): boolean {
    if(this.isResponseLoginAdministrador(this.usuarioLogado)){
      return this.usuarioLogado.master   
    }  
  }

}
