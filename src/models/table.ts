export interface ColunaTabela {
    Chave: String,
    Descricao: String
    Tamanho?: String
}
  

export interface Tabela {
    Registros: Array<object>;
    Colunas: Array<ColunaTabela>;
    BotaoAlterar: boolean;
    BotaoExcluir: boolean;
    BotaoLinha: boolean;
    BotaoAcoes?: boolean;
    Filtro: boolean;
    Titulo?: String;
    Margem?: string;
}