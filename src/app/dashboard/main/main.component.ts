import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label,MultiDataSet } from 'ng2-charts';
import { MainService } from 'src/app/services/main/main.service';
//import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [ MainService ]
})

export class MainComponent implements OnInit {
  
  lineChartData: ChartDataSets[]; 
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions : ChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';

  //----------------------------------krofna---------------------------
  doughnutChartLabels: Label[] = ['WP', 'WR','SD'];
  doughnutChartData: MultiDataSet; 
  doughnutChartType: ChartType = 'doughnut';

  constructor( private mainService: MainService) {
   this.lineChartData=[
    { data: mainService.loadData()[0], label: 'Planned incident' },
    { data: mainService.loadData()[1], label: 'Unplanned incident' }
  ];

    this.doughnutChartData=[
      [ mainService.loadData()[4], mainService.loadData()[2], mainService.loadData()[3]]
    ];
  }

  ngOnInit(): void {
  }

}
