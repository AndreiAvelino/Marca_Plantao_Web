import { TipoEvento } from "src/enum/enum";

export interface Evento {
    id: string;
    titulo: string;
    tipo: TipoEvento;
    dataInicial: string;
    dataFinal?: string;
}
