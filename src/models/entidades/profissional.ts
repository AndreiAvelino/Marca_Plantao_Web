import { Avaliacao } from "./avaliacao";
import { Especializacao } from "./especializacao";

export interface Profissional {
    id: string;
    nome: string;
    dataNascimento: string;
    genero: string;
    telefone: string;
    imagem: any;
    crm: string;
    cpf: string;
    especializacoes: Especializacao[];
    avaliacoes: Avaliacao[];
    sobre: string;
}