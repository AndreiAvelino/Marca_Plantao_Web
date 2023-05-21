import { Avaliacao } from "./avaliacao";
import { Especializacao } from "./especializacao";

export interface ResponseLogin {
    id: string;
    email: string;
    token: string;
}

export interface ResponseLoginAdministrador extends ResponseLogin {
    nome: string;
    master: boolean;
    clinicaId: string;
}

export interface ResponseLoginProfissional extends ResponseLogin {
    nome: string;
    imagem: string;
    especializacoes: Especializacao[];
}

export interface RegistrarUsuario {
    email: string;
    password: string;
    confirmPassword: string;
    nome: string;
    dataNascimento: string;
    genero: string;
    telefone: string;
    imagem: string;
    crm: string;
    cpf: string;
    especializacoes: Especializacao[]
}

export interface RegistrarAdministrador {
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Mater: boolean;
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