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

export enum StatusPagamento {
    Pendente = 'Pendente'
}

export enum FormaPagamento {
    Pix = 0,
    Dinheiro = 1,
    Cartao = 2,
    Cheque = 3
}

export enum Corevento {
    Oferta = '#00BFFF',
    Plantao = '#556B2F'
}

export enum Rotas {
    ListagemOferta = '/listagemoferta',
    PesquisarOferta = '/pesquisar-oferta',
    ConfigurarOferta = '/configuraroferta',
    ConfigurarClinica = '/configurarclinica',
    HistoricoPlantao = '/historicoplantao',
    AvaliacaoPlantao = '/avaliacaoplantao',
    InfoPlantao = '/infoplantao',
    Login = '/login',
    Inicio = '/inicio',
    Agenda = '/agenda',
    Indicadores = '/indicadores'
}

export enum TipoNotificacao {
    Alerta,
    Informacao,
    Urgente
}

export enum TamanhoColunaTabela {
    Pequena,
    Media,
    Grande
}

export enum TipoEvento {
    Oferta = 'Oferta',
    Plantao = 'Plantao'
}