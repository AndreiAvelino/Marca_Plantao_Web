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
    pagamento?: number;
    profissionais?: Candidato[],
    especializacoes: string[] | Especializacao[],
    clinicaId: string,
}

export interface Candidato {
    id: string;
    nome: string;
    imagem: string;
}

export class AdicionarRemoverProfissionalOfertaDados
{
    profissionalId: string
    ofertaId: string
}