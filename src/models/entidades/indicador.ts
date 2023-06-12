export interface PlantaoXMes {
    mes: number,
    quantidade: number
  }
  
export interface ValorXDia {
    data: string;
    valor: number;
}

export interface Indicadores {
  plantaoxmes: PlantaoXMes[]
  valorxdia: ValorXDia[]
}