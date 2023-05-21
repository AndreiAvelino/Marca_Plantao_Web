import { StatusPagamento, StatusPlantao } from "src/enum/enum"
import { Avaliacao } from "./avaliacao"

export interface Plantao {
    id: string,
    ofertaId: string,
    profissionalId: string,
    status: StatusPlantao,
    dataInicial: string,
    dataFinal: string,
    horaExtra: string,
    valorTotal: string,
    desconto: string,
    statusPagamento: StatusPagamento,
    dataPagamento: string,
    comprovante: string,
    avaliacaoClinica?: Avaliacao,
    avaliacaoProfissional?: Avaliacao    
    dataCadastro?: string   
}

export interface EncerrarPlantao {
    id: string,
    profissionalId: string
    clinicaId: string 
    descricao: string
    nota: number,
    comprovante: string, 
    dataAvaliacao: string,
    desconto: string,
    valorTotal: string,
    dataFinal: string
    horaExtra: string,
}

export interface GerarPlantao {
    ofertaId: string
    profissionalId: string
}