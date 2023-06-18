import { ComponenteNotificacao, Rotas, TipoNotificacao } from "src/enum/enum";

export interface Notificacao {
    id: string,
    mensagem: string,
    tipoMensagem: TipoNotificacao,
    componente: ComponenteNotificacao,
    data?: any
}
