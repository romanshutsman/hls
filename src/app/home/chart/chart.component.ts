import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {AmChartsService, AmChart} from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: AmChart;

  constructor(private AmCharts: AmChartsService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let dataProvider = [{
      'country': 'LOS ANGELES',
      'visits': 5,
      'color': '#f9a44a'
    }, {
      'country': 'CHICAGO',
      'visits': 2,
      'color': '#f47e60'
    }, {
      'country': 'HOUSTON',
      'visits': 3,
      'color': '#56bcc8'
    }, {
      'country': 'SAN FRANCISCO',
      'visits': 2,
      'color': '#bd7d78'
    }, {
      'country': 'DETROIT',
      'visits': 7,
      'color': '#d26f8e'
    }, {
      'country': 'SEATLE',
      'visits': 1,
      'color': '#566f85'
    }];
    dataProvider = dataProvider.sort((a, b) => b.visits - a.visits);
    const valueField = 'visits';
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'hideCredits': true,
      'type': 'serial',
      'theme': 'light',
      'categoryField': 'country',
      'rotate': true,
      'dataProvider': dataProvider,
      'valueAxes': [{
        'stackType': 'regular',
        'axisAlpha': 0,
        'gridAlpha': 0,
        'labelsEnabled': false
      }],
      'categoryAxis': {
        'axisAlpha': 0,
        'gridAlpha': 0,
        'color': '#505050',
        'labelOffset': 30,
        'boldLabels': true,
        'fontSize': 17
      },
      'graphs': [{
        'valueField': valueField,
        'type': 'column',
        'fillColorsField': 'color',
        'fillAlphas': 1,
        'lineAlpha': 0,
        'animationPlayed': true,
        'cornerRadiusTop': 15,
        'columnWidth': 0.4,
        'labelText': ' ',
        'labelPosition': 'inside',
        'color': '#ffffff',
        'fontSize': 20,
        'labelOffset': 10,
        'showBalloon': false,
        'labelFunction': function (item) {
          /**
           * Calculate total of values across all
           * columns in the graph
           */
          let total = 0;
          for (let i = 0; i < dataProvider.length; i++) {
            total += dataProvider[i][valueField];
          }

          /**
           * Calculate percet value of this label
           */
          const percent = Math.round((item.values.value / total) * 1000) / 10;
          return percent + '%';
        }
      }]
    });
}

ngOnDestroy() {
  if (this.chart) {
    this.AmCharts.destroyChart(this.chart);
  }
}
}
