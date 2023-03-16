import { Rotas, TipoNotificacao } from "src/enum/enum";

export interface Notificacao {
    Id: string,
    Descricao: string,
    Tipo: TipoNotificacao,
    Rota?: Rotas,
    idRotaNotificacao?: number
}
