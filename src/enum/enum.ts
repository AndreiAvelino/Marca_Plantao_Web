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
    Pendente = 0,
    Efetuado = 1
}

export enum FormaPagamento {
    Pix = 0,
    Dinheiro = 1,
    Cartao = 2,
    Cheque = 3
}

export enum Corevento {
    Oferta = '#00BFFF',
    Plantao_NaoIniciado = '#556B2F',
    Plantao_Andamento = '#92bb4c',
    Plantao_Finalizado = '#df2424'
}

export enum Rotas {
    ListagemOferta = '/listagemoferta',
    PesquisarOferta = '/pesquisar-oferta',
    ConfigurarOferta = '/configuraroferta',
    ConfigurarClinica = '/configurarclinica',
    HistoricoPlantao = '/historicoplantao',
    AvaliacaoPlantao = '/avaliacaoplantao',    
    Login = '/login',
    Inicio = '/inicio',
    Agenda = '/agenda',
    Indicadores = '/indicadores',
    Cadastro = '/cadastro',
    InfoOferta = '/infooferta',
    InfoPlantao = '/infoplantao',
    PerfilUsuario = '/perfilusuario',
    PerfilClinica = '/perfilclinica'
}

export enum ComponenteNotificacao {
    PlantaoProfissional = 'PlantaoProfissional',
    PlantaoClinica = 'PlantaoClinica'
}

export enum TipoNotificacao {
    Alerta = "Alerta",
    Informacao = "Informacao",
    Urgente = "Urgente"
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

export enum TipoUsuario {
    Administrador = 'Administrador',
    Profissional = 'Profissional'
}