import { UF } from "src/enum/enum";

export interface Endereco {
    Id?: string;
    Logradouro: string,
    CEP: string,
    Bairro?: string,
    Cidade?: string,
    UF?: UF,
    DataCadastro?: string
}