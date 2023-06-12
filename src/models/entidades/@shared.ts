import { UF } from "src/enum/enum";

export interface Endereco {
    id?: string;
    rua: string,
    cep: string,
    bairro?: string,
    cidade?: string,
    uf?: UF,
    dataCadastro?: string
}

export interface MetodoPagamento {
    Valor: number;
    Descricao: string;
}