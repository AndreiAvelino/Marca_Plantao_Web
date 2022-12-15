import { Rotas, StatusPlantao, TipoNotificacao, UF } from "../enum/enum";

export interface Login {
    Id: number;
    Nome: String;
}

export interface Clinica {
    Id?: number,
    RazaoSocial: string,
    Imagem: string
    Endereco?: Endereco,
    DataCadastro?: string
}

  
export interface Endereco {
    Id?: number;
    Logradouro: string,
    CEP: string,
    Bairro?: string,
    Cidade?: string,
    UF?: UF,
    DataCadastro?: string
}

export interface Oferta {
    Id: number,
    Clinica: string,
    Descricao: string
    idEspecializacao: number,
    Valor: string,
    ListaIdCandidatos: Array<number>,
    DataPlantao: string,
    DataCadastro?: string
}

export interface Plantao {
    Id: number,
    idOferta: number,
    idUsuario: number,
    Status: StatusPlantao,
    DataCadastro?: string,
    AvaliacaoClinica?: Avaliacao,
    AvaliacaoProfissional?: Avaliacao,
    Clinica?: String,
    Valor?: String,
    Profissional?: String
}

export interface Avaliacao {
    Id: number,
    idPlantao: number,
    Nota: number,
    Descricao: string,
    DataCadastro?: string
}

export interface Usuario {
    Id: number,
    Nome: String,
    Especializacoes: Array<Especializacao>,
    DataCadastro?: string
}

export interface Especializacao {
    Id: number,
    Descricao: string
}

export interface Notificacao {
    Id: number,
    Descricao: String,
    Tipo: TipoNotificacao,
    Rota?: Rotas,
    idRotaNotificacao?: number
}
