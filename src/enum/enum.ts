export enum UF {
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
}

export enum StatusPlantao {
    NaoIniciado,
    Andamento,
    Finalizado,
    Cancelado
}

export enum Rotas {
    ListagemOferta = '/listagemoferta',
    ConfigurarOferta = '/configuraroferta',
    ConfigurarClinica = '/configurarclinica',
    HistoricoPlantao = '/historicoplantao',
    AvaliacaoPlantao = '/avaliacaoplantao',
    Inicio = '/login'
}

export enum TamanhoColunaTabela {
    Pequena,
    Media,
    Grande
}