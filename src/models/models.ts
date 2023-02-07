import { Rotas, StatusPagamento, StatusPlantao, TipoEvento, TipoNotificacao, UF } from "../enum/enum";

export interface Login {
    Id: number;
    Nome: string;
    Senha: string;
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
    Titulo: string,
    Descricao: string,
    DataInicial: string,
    DataFinal: string,
    Turno: string,
    Valor: string,
    ValorHoraExtra: string,
    MetodoPagamento: string,
    DataCadastro: string,
    IdClinica: number,
    ListaIdEspecializacao: number,
    ListaIdCandidatos: Candidato[],
}

export interface Candidato {
    Id: number;
    Nome: string;
    Src: string;
}

export interface Plantao {
    Id: number,
    idOferta: number,
    idUsuario: number,
    Status: StatusPlantao,
    DataInicial: string,
    DataFinal: string,
    HoraExtra: string,
    ValorTotal: string,
    Desconto: string,
    StatusPagamento: StatusPagamento,
    DataPagamento: string,
    Comprovante: string,
    AvaliacaoClinica?: Avaliacao,
    AvaliacaoProfissional?: Avaliacao    
    DataCadastro?: string   
}

export interface Evento {
    Id: string;
    Titulo: string;
    Tipo: TipoEvento
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
    Nome: string,
    Profissao: string,
    Sobre: string,
    Especializacoes: Array<Especializacao>,
    DataCadastro?: string
    QtdPlantoesRealizados: number,
    QtdAvaliacoes: number,
    MediaAvaliacao: number,
    ListaAvaliacao: Array<Avaliacao>
}

export interface Especializacao {
    Id: number,
    Descricao: string
}

export interface Notificacao {
    Id: number,
    Descricao: string,
    Tipo: TipoNotificacao,
    Rota?: Rotas,
    idRotaNotificacao?: number
}
