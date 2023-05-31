import { Clinica } from "./clinica"
import { Profissional } from "./profissional"

export interface Avaliacao {
    nota?: number,
    descricao?: string,
    dataAvaliacao?: string
    idPlantao?: string,
    profissionalId?: string,
    profissional?: string | Profissional, 
    clinicaId?: string, 
    clinica?: string | Clinica,
}

export interface AvaliacaoPlantao {
    avaliacaoClinica: Avaliacao,
    avaliacaoProfissional: Avaliacao
}

export interface AdicionarAvaliacaoPlantaoProfissional {
    plantaoId: string
    profissionalId: string 
    clinicaId: string 
    nota: number
    descricao: string 
}