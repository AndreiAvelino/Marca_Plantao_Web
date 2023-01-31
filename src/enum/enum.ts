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
    NaoIniciado = 'Não iniciado',
    Andamento = 'Em andamento',
    Finalizado = 'Finalizado',
    Cancelado = 'Cancelado'
}

export enum FormaPagamento {
    Pix,
    Dinheiro,
    Cartao,
    Cheque
}

export enum Rotas {
    ListagemOferta = '/listagemoferta',
    ConfigurarOferta = '/configuraroferta',
    ConfigurarClinica = '/configurarclinica',
    HistoricoPlantao = '/historicoplantao',
    AvaliacaoPlantao = '/avaliacaoplantao',
    InfoPlantao = '/infoplantao',
    Login = '/login',
    Inicio = '/inicio',
    Agenda = '/agenda'
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