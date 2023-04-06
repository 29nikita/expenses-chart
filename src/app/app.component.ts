import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Chart, registerables } from 'chart.js';
import { baseColors } from 'ng2-charts';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expenses-chart';
  data: any;
  labelData: any = [];
  dataSet: any = [];
  sumExpense: any = 0;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getChartData().subscribe((response) => {
      this.data = response;
      for (let i = 0; i < this.data.length; i++) {
        this.labelData.push(this.data[i].day);
        this.dataSet.push(Number(this.data[i].amount));
        this.sumExpense += this.data[i].amount;
      }

      //creating chart

      let myChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: this.labelData, 
          datasets: [{
            label: '',
            data: this.dataSet, 
            backgroundColor : ['hsl(10, 79%, 65%)'],
            hoverBackgroundColor: ['hsl(10, 67%, 73%)']
          }]  
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              display: false
            }
          }
        }
      });
    });
  }
}
