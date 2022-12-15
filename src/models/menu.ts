import { Rotas } from "src/enum/enum";

export interface Menu {
    Itens: Array<Item>
}

export interface Item {
    Descricao: String;
    Rota: Rotas;
    Icon?: String
}