import { Rotas, StatusPagamento, StatusPlantao, TipoEvento, TipoNotificacao, UF } from "../enum/enum";

export interface Login {
    Email: string;
    Senha: string;
}

export interface Response<T> {
    data: T;
    success: boolean;
}

export interface ResponseLogin {
    bloqueado: boolean;
    clinicaId: string;
    email: string;
    master: boolean;
    profissional: string;
    token: string;
}

export interface RegistrarUsuario {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Nome: string;
    DataNascimento: string;
    Genero: string;
    Telefone: string;
    Imagem: string;
    EspecializacaoId: string;
}

export interface RegistrarAdministrador {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Mater: boolean;
}

export interface Clinica {
    Id?: string,
    RazaoSocial: string,
    Imagem: string
    Endereco?: Endereco,
    DataCadastro?: string
}

  
export interface Endereco {
    Id?: string;
    Logradouro: string,
    CEP: string,
    Bairro?: string,
    Cidade?: string,
    UF?: UF,
    DataCadastro?: string
}

export interface Oferta {
    Id: string,
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
    Id: string;
    Nome: string;
    Src: string;
}

export interface Plantao {
    Id: string,
    idOferta: string,
    idUsuario: string,
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
    Tipo: TipoEvento;
    DataInicial: string;
    DataFinal?: string;
}


export interface Avaliacao {
    Id: string,
    idPlantao: string,
    Nota: number,
    Descricao: string,
    DataCadastro?: string
}

export interface Usuario {
    Id: string,
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
    Id: string,
    Descricao: string
}

export interface Notificacao {
    Id: string,
    Descricao: string,
    Tipo: TipoNotificacao,
    Rota?: Rotas,
    idRotaNotificacao?: number
}
