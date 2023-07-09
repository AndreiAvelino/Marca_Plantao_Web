import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PadraoComponent } from 'src/app/@padrao/padrao.component';
import { Rotas } from 'src/enum/enum';
import { Profissional } from 'src/models/entidades/profissional';
import { ProfissionalService } from 'src/services/profissional.service';
import { FormControl } from '@angular/forms';
import { AlterarPerfilUsuarioComponent } from './alterar-perfil-usuario/alterar-perfil-usuario.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AvaliacaoService } from 'src/services/avaliacao.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent extends PadraoComponent implements OnInit {

  public profissional: Profissional
  public imagem;
  public avaliacoes

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private avaliacaoService: AvaliacaoService
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    await this.profissionalService.get(this.usuarioLogado.id).toPromise()
      .then(x => this.profissional = x.data)

    await this.avaliacaoService.get_avaliacoes(this.usuarioLogado.id).toPromise()
      .then(x => this.avaliacoes = x.data)

    this.gera_imagem_usuario();
  }

  public Fechar(): void {
  }

  public voltar(): void {
    this.router.navigate([Rotas.PesquisarOferta])
  }

  public retorna_media(): number {
    if(this.profissional.avaliacoes.length == 0){
      return 0
    }

    return this.profissional.avaliacoes.map(x => x.nota).reduce((a, b) => a + b, 0) / this.profissional.avaliacoes.length    
  }

  public retorna_quantidade_plantoes(): number {
    return this.profissional.avaliacoes.length
  }

  public async alterar_perfil_usuario(): Promise<void> {
    let layout = {
      width: '100%'
    }

    let profissional: Profissional = null

    await this.dialog.open(AlterarPerfilUsuarioComponent, { data: this.profissional.sobre, ...layout }).afterClosed().toPromise()
      .then(x => {
        if(x){
          profissional = {
            ...this.profissional,
            imagem: x.imagem,
            sobre: x.sobre
          }
        } 
      })

    if(profissional){

      const formData: FormData = new FormData();
      formData.append('Imagem', profissional.imagem ? profissional.imagem : this.profissional.imagem)
      formData.append('Id', this.profissional.id)
      formData.append('Nome', this.profissional.nome)
      formData.append('DataNascimento', this.profissional.dataNascimento)
      formData.append('Genero', this.profissional.genero)
      formData.append('Telefone', this.profissional.telefone)
      formData.append('CRM', this.profissional.crm)
      formData.append('CPF', this.profissional.cpf)
      formData.append('Sobre', profissional.sobre)

      await this.profissionalService.put(formData).toPromise()
        .then(x => {
          if(x.success){
            this.mensagem_sucesso("Perfil atualizado!")
          } else {
            x.errors.forEach(e => this.mensagem_erro(e))
          }
        })
        .then(() => this.profissional = profissional)
        .catch((e: HttpErrorResponse) => this.mensagem_erro(e.message))

      if(profissional.imagem){
        this.renderizar_imagem(profissional.imagem);
      }
    }


  }

  public renderizar_imagem(imagem): void {
    var reader = new FileReader();
    reader.readAsDataURL(imagem); 
          reader.onload = (event) => { 
      this.gera_imagem_usuario(event.target.result)
    }
  }

  public gera_imagem_usuario(imagem?): void {
    if(imagem){
      this.imagem = imagem
      return 
    } 
    if(this.profissional.imagem){
      this.imagem = 'data:image/jpeg;base64,' + this.profissional.imagem 
      return
    }

    this.imagem = null
  }

}
