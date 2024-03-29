import { MetodoPagamento } from "src/models/entidades/@shared";
import { Especializacao } from "src/models/entidades/especializacao";

// export const ListaEspecializacao: Array<Especializacao> = [
//     {Id: "1", Descricao: "Acupuntura"},
//     {Id: "2", Descricao: "Alergia e imunologia"},
//     {Id: "3", Descricao: "Anestesiologia"},
//     {Id: "4", Descricao: "Angiologia"},
//     {Id: "5", Descricao: "Cardiologia"},
//     {Id: "6", Descricao: "Cirurgia cardiovascular"},
//     {Id: "7", Descricao: "Cirurgia da mão"},
//     {Id: "8", Descricao: "Cirurgia de cabeça e pescoço"},
//     {Id: "9", Descricao: "Cirurgia do aparelho digestivo"},
//     {Id: "10", Descricao: "Cirurgia geral"},
//     {Id: "11", Descricao: "Cirurgia oncológica" },
//     {Id: "12", Descricao: "Cirurgia pediátrica"},
//     {Id: "13", Descricao: "Cirurgia plástica"},
//     {Id: "14", Descricao: "Cirurgia torácica"},
//     {Id: "15", Descricao: "Cirurgia vascular"},
//     {Id: "16", Descricao: "Clínica médica"},
//     {Id: "17", Descricao: "Coloproctologia"},
//     {Id: "18", Descricao: "Dermatologia"},
//     {Id: "19", Descricao: "Endocrinologia e metabologia"},
//     {Id: "20", Descricao: "Endoscopia"},
//     {Id: "21", Descricao: "Gastroenterologia"},
//     {Id: "22", Descricao: "Genética médica"},
//     {Id: "23", Descricao: "Geriatria"},
//     {Id: "24", Descricao: "Ginecologia e obstetrícia"},
//     {Id: "25", Descricao: "Hematologia e hemoterapia"},
//     {Id: "26", Descricao: "Homeopatia"},
//     {Id: "27", Descricao: "Infectologia"},
//     {Id: "28", Descricao: "Mastologia"},
//     {Id: "29", Descricao: "Medicina de emergência"},
//     {Id: "30", Descricao: "Medicina de família e comunidade"},
//     {Id: "31", Descricao: "Medicina do trabalho"},
//     {Id: "32", Descricao: "Medicina de tráfego"},
//     {Id: "33", Descricao: "Medicina esportiva"},
//     {Id: "34", Descricao: "Medicina física e reabilitação"},
//     {Id: "35", Descricao: "Medicina intensiva"},
//     {Id: "36", Descricao: "Medicina legal e perícia médica"},
//     {Id: "37", Descricao: "Medicina nuclear"}
// ]

export const MetodosPagamento: Array<MetodoPagamento> = [
    {
        Valor: 0,
        Descricao: "Dinheiro"
    },
    {
        Valor: 1,
        Descricao: "Pix"
    },
    {
        Valor: 2,
        Descricao: "Cheque"
    },
    {
        Valor: 4,
        Descricao: "Cartão de crédito"
    },
    {
        Valor: 5,
        Descricao: "Cartão de débito"
    }
]

export const StatusPlantao: Array<String> = [
    "Não iniciado",
    "Em andamento",
    "Finalizado",
    "Cancelado"
]

export const StatusPagamento: Array<String> = [
    "Pendente"
]

export const Meses = [
    "Janeiro", 
    "Fevereiro", 
    "Março", 
    "Abril", 
    "Maio", 
    "Junho",
    "Julho", 
    "Agosto",
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"
];

