import { TipoEvento } from "src/enum/enum";

export interface Evento {
    id: string;
    titulo: string;
    tipo: TipoEvento;
    status: number;
    dataInicial: string;
    dataFinal?: string;
}
