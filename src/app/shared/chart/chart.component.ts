import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import  ChartDataLabels  from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {


  canvas: any;
  ctx: any;
  data: any = [10, 6, 2]
  backgroundColor: any = ['#9da4ae', '#68cb69', '#4ccbc2']
  labels: any = ['Not Started', 'Complete', 'In Progress']

  @ViewChild('mychart') mychart!: ElementRef<HTMLCanvasElement>;

  @Input() chartData: any

  constructor() {
    Chart.register(...registerables)
    Chart.register(ChartDataLabels);
  }

  ngAfterViewInit() {
    this.chart()
  }

  private chart() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: this.chartData.type,
      data: this.chartData.data,
      options: this.chartData.options,
    })
  }
}
