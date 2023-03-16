export interface Oferta {
    Id: string,
    Titulo: string,
    Descricao: string,
    DataInicial: string,
    DataFinal: string,
    Turno: string,
    Valor: string,
    ValorHoraExtra: string,
    DataCadastro: string,
    MetodoPagamento: number,
    Pagamento?: number;
    Profissionais?: Candidato[],
    Especializacoes: string[],
    ClinicaId: string,
}

export interface Candidato {
    Id: string;
    Nome: string;
    Imagem: string;
}