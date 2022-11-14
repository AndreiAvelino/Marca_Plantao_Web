import { StatusPlantao, UF } from "../enum/enum";

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

export interface Avaliacao {
    Id: number,
    idClinica: number,
    Valor: number
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
    DataCadastro?: string
}

export interface AvaliacaoPlantao {
    Id: number,
    idPlantao: number,
    idUsuario: number,
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

