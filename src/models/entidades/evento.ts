import { TipoEvento } from "src/enum/enum";

export interface Evento {
    Id: string;
    Titulo: string;
    Tipo: TipoEvento;
    DataInicial: string;
    DataFinal?: string;
}
