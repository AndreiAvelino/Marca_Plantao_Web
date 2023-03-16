import { Avaliacao } from "./avaliacao";
import { Especializacao } from "./especializacao";

export interface ResponseLogin {
    id: string;
    email: string;
    token: string;
}

export interface ResponseLoginAdministrador extends ResponseLogin {
    master: boolean;
    clinicaId: string;
}

export interface ResponseLoginProfissional extends ResponseLogin {
    nome: string;
    imagem: string;
    especializacoes: Especializacao[];
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