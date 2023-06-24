import { Endereco } from "./@shared"
import { Avaliacao } from "./avaliacao"

export interface Clinica {
    id?: string,
    razaoSocial: string,
    imagem: string,
    sobre: string,
    endereco?: Endereco,
    avaliacoes: Avaliacao[]
    listaAdministradoresPorClinica?: AdministradoresPorClinica[]
}

export interface AdministradoresPorClinica {
    clinicaId: string;
    email: string;
    id: string;
    master: boolean;
}