import { Especializacao } from "./especializacao";

export interface Oferta {
    id: string,
    titulo: string,
    descricao: string,
    dataInicial: string,
    dataFinal: string,
    turno: string,
    valor: string,
    valorHoraExtra: string,
    dataCadastro: string,
    metodoPagamento: number,
    pagamento?: number;
    profissionais?: Candidato[],
    especializacoes: string[] | Especializacao[],
    clinicaId: string,
}

export interface Candidato {
    Id: string;
    Nome: string;
    Imagem: string;
}