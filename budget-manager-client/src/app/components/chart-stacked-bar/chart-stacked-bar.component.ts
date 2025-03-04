import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-stacked-bar',
  imports: [
    BaseChartDirective,
  ],
  templateUrl: './chart-stacked-bar.component.html',
  styleUrl: './chart-stacked-bar.component.css'
})
export class ChartStackedBarComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y', // Horizontal bars
    scales: {
      x: {
        stacked: true,
        beginAtZero: true
      },
      y: {
        stacked: true
      }
    },
    plugins: {
      legend: {
        display: true
      }
    }
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['Income/Expense', 'Summary Income', 'Summary Expense'],
    datasets: [
      {
        label: 'Income',
        data: [200000, 200000, 0], // Example values
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderWidth: 1
      },
      {
        label: 'Expense',
        data: [12250, 0, 12250], // Example values
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderWidth: 1
      }
    ]
  };

  public barChartType: ChartType = 'bar';
}
