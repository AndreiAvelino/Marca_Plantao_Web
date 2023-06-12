import { Endereco } from "./@shared"
import { Avaliacao } from "./avaliacao"

export interface Clinica {
    id?: string,
    razaoSocial: string,
    imagem: string,
    sobre: string,
    endereco?: Endereco,
    avaliacoes: Avaliacao[]
}