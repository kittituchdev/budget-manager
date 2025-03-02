import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart-stacked-bar',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './chart-stacked-bar.component.html',
  styleUrl: './chart-stacked-bar.component.css'
})
export class ChartStackedBarComponent {
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  };

  chartType: ChartType = 'bar';

  chartData: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      // Income categories
      {
        label: 'Salary',
        data: [5000, 5200, 5400, 5600],
        backgroundColor: 'rgba(75, 192, 192, 0.8)'
      },
      {
        label: 'Freelance',
        data: [1200, 1100, 1300, 1250],
        backgroundColor: 'rgba(54, 162, 235, 0.8)'
      },
      {
        label: 'Investments',
        data: [400, 450, 420, 480],
        backgroundColor: 'rgba(255, 206, 86, 0.8)'
      },

      // Expense categories (Negative values for expenses)
      {
        label: 'Rent',
        data: [-1500, -1500, -1500, -1500],
        backgroundColor: 'rgba(255, 99, 132, 0.8)'
      },
      {
        label: 'Groceries',
        data: [-800, -750, -900, -850],
        backgroundColor: 'rgba(255, 159, 64, 0.8)'
      },
      {
        label: 'Entertainment',
        data: [-300, -350, -400, -380],
        backgroundColor: 'rgba(153, 102, 255, 0.8)'
      }
    ]
  };
}
