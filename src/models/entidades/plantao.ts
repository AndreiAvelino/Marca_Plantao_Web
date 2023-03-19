import { StatusPagamento, StatusPlantao } from "src/enum/enum"
import { Avaliacao } from "./avaliacao"

export interface Plantao {
    id: string,
    idOferta: string,
    idUsuario: string,
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