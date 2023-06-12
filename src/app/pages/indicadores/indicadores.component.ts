import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { PlantaoXMes, ValorXDia } from 'src/models/entidades/indicador';
import * as moment from 'moment';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  labels: string[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
};


// export const graficoUm: PlantaoXMes[] = [
//   {
//     mes: this.retorna_mes(1),
//     quantidade: 10
//   },
//   {
//     mes: "Fev",
//     quantidade: 10
//   },
//   {
//     mes: "Mar",
//     quantidade: 10
//   },
//   {
//     mes: "Abr",
//     quantidade: 10
//   },
//   {
//     mes: "Mai",
//     quantidade: 10
//   },
//   {
//     mes: "Jun",
//     quantidade: 10
//   },
//   {
//     mes: "Jul",
//     quantidade: 10
//   },
//   {
//     mes: "Ago",
//     quantidade: 10
//   },
//   {
//     mes: "Set",
//     quantidade: 10
//   },
//   {
//     mes: "Out",
//     quantidade: 10
//   },
//   {
//     mes: "Nov",
//     quantidade: 10
//   },
//   {
//     mes: "Dez",
//     quantidade: 10
//   }
// ]

// export const graficoDois: ValorXDia[] = [
//   {
//     data: "01 Jul",
//     valor: 100.0
//   },
//   {
//     data: "02 Jul",
//     valor: 100.0
//   },
//   {
//     data: "03 Jul",
//     valor: 100.0
//   },
//   {
//     data: "04 Jul",
//     valor: 100.0
//   },
//   {
//     data: "05 Jul",
//     valor: 100.0
//   },
//   {
//     data: "06 Jul",
//     valor: 100.0
//   }
// ]


@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})


export class IndicadoresComponent {

  public graficoLinhaOpcoes: Partial<ChartOptions>;
  public graficoDoisOpcoes: Partial<ChartOptions>;

  private listaplantaoxmes: PlantaoXMes[];
  private listavalorxdia: ValorXDia[];

  constructor(
    private route: ActivatedRoute
  ) {

    this.listavalorxdia = this.route.snapshot.data.indicadores.valorxdia
    this.listaplantaoxmes = this.route.snapshot.data.indicadores.plantaoxmes

    this.graficoLinhaOpcoes = {
      series: [
        {
          name: "Plantao X Mes",
          data: this.monta_grafico_plantao_mes(this.listaplantaoxmes).map(x => x.quantidade)
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: this.monta_grafico_plantao_mes(this.listaplantaoxmes).map(x => x.mes)
      },
      yaxis: {
        title: {
          text: "Plantao x Mes"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Plantoes";
          }
        }
      }
    };

    this.graficoDoisOpcoes = {
      series: [
        {
          name: "Valor X Dia",
          data: this.listavalorxdia.map(x => x.valor)
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Valor diário gasto",
        align: "left"
      },
      subtitle: {
        text: "Movimentação de preço",
        align: "left"
      },
      labels: this.listavalorxdia.map(x => moment(x.data).format("DD MMM")),
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  private monta_grafico_plantao_mes(plantaoxmes: PlantaoXMes[]): any[]{
    let grafico = [];

    [1,2,3,4,5,6,7,8,9,10,11,12].forEach(x => {
      console.log(plantaoxmes.find(p => p.mes == x))
      grafico.push({
        mes: this.retorna_mes(x),
        quantidade: plantaoxmes.find(p => p.mes == x) ? plantaoxmes.find(p => p.mes == x).quantidade : 0
      })
    })

    return grafico;
  }

  private retorna_mes(mes: number): string {
    switch(mes){
      case 1: return "Jan";
      case 2: return "Fev";
      case 3: return "Mar";
      case 4: return "Abr";
      case 5: return "Mai";
      case 6: return "Jun";
      case 7: return "Jul";
      case 8: return "Ago";
      case 9: return "Set";
      case 10: return "Out";
      case 11: return "Nov";
      case 12: return "Dez";
    }
  }

}
