import { StatusPagamento, StatusPlantao } from "src/enum/enum"
import { Avaliacao } from "./avaliacao"

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