import { Component } from '@angular/core';
// import { Chart, ChartData } from 'chart.js';

@Component({
  selector: 'app-construction-presentation',
  templateUrl: './construction-presentation.component.html',
  styleUrls: ['./construction-presentation.component.scss']
})
export class ConstructionPresentationComponent {
  white: string = '#ffffff';
  black: string = '#141313';
  private readonly THEME_KEY = 'theme';
  public theme: string = ''
  constructor() {
    const currentTheme = this.getTheme();
    this.theme = currentTheme
  }
  public toggleTheme(): void {
    // document.body.classList.toggle('dark-theme');
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    this.theme = newTheme
    console.log(this.theme)

  }
  private setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  private getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || 'dark';
  }

  private applyTheme(theme: string): void {
    console.log('apply theme')
    document.documentElement.setAttribute('data-theme', theme);
  }

  private legendMargin = {
    id: 'legendMargin',
    beforeInit(chart: any): any {
      console.log(chart.legend.fit)
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)()
        return this.height += 50
      }
    }
  }

  public doughnutChart: any = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [10, 6, 2],
          backgroundColor: ['#9da4ae', '#68cb69', '#4ccbc2'],
          borderWidth: 0,
          borderRadius: 3,
          offset: '10',
          spacing: 3,
          cutout: '85%',
          radius: 100,
        }
      ],
      labels: ['Not Started', 'Complete', 'In Progress'],
    },

    options: {
      plugins:
      {
        datalabels: {
          font: {
            size: 18,
          },
          padding: 12,
          anchor: 'end',
          align: 'end',
          color: (value: any) => {
            return value.dataset.backgroundColor[value.dataIndex]
          }
        },
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      },
      cutout: 130,
      responsive: true,
      maintainAspectRatio: false
    }
  }

  public progressChart: any = {
    type: 'bar',
    data: {
      labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Construction', 'Project Closed'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [100, 80, 19, 0, 0, 0],
          backgroundColor: [
            '#68cb69',
            '#68cb69',
            '#f15048'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        datalabels: {
          color: (value: any) => {
            return value.dataset.backgroundColor[value.dataIndex]
          },
          anchor: 'start',
          align: 'start',
          formatter: (value: number) => {
            return value + '%'
          },
        },
        legend: {
          display: false // Hide the legend labels
        }
      },
      indexAxis: 'y',
      scales: {
        y: {
          border: {
            display: false
        },
          grid: {
            display: false

          },
          beginAtZero: true,
          ticks: {
            crossAlign: "far",
            padding: 30,
            color: '#9da4ae',
          }
        },
        x: {
          display: false
        }
      },
      responsive: true,
      maintainAspectRatio: false
    },
  }
  public timeChart: any = {
    type: 'bar',
    data: {
      labels: ['Plan completed', 'Actual Completion', 'Ahed', '', '', ''],
      datasets: [
        {
          label: 'Ahead',
          // data: [0, 0, 0, 0, 0, 0],
          backgroundColor: [
            '#3faeee',
            '#3faeee',
            '#3faeee',
            '#3faeee',
            '#3faeee',
            '#3faeee',
            '#3faeee',
          ],
          borderWidth: 1
        },
        {
          label: 'Behind',
          backgroundColor: [
            '#f8a646',
            '#f8a646',
            '#f8a646',
            '#f8a646',
            '#f8a646',
            '#f8a646',
            '#f8a646',
          ],
          borderWidth: 1
        },
        {
          label: 'On Time',
          data: [0, 14, 14],
          backgroundColor: [
            '#68cb69',
            '#68cb69',
            '#68cb69',
            '#68cb69',
            '#68cb69',
            '#68cb69',
            '#68cb69',
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        datalabels: {
          anchor: 'start',
          align: 'start',
          formatter: (value: number) => {
            return value + '%'
          },
        },
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true
          }
        }
      },
      scales: {
        y: {
          grid: {
            display: false
          },
          // beginAtZero: true,
          stacked: true,
          ticks: {
            crossAlign: "far",
          }
        },
        x: {
          border: {
            display: false
          },
          grid: {
            color: '#9da4ae',
            drawBorder: false
          },
          stacked: true,
          min: -100,
          max: 100,
          ticks: {
            stepSize: 25,
            callback: (value: number) => {
              return Math.abs(value)
            }
          }
        },
      },
      responsive: true,
      maintainAspectRatio: false
    },
  }

  public costChart: any = {
    type: 'bar',
    data: {
      labels: [''],
      datasets: [
        {
          label: "Actual",
          data: [3500],
          backgroundColor: '#68cb69',
          barThickness: 50
        },
        {
          label: "Planned",
          data: [4600],
          backgroundColor: '#4ccbc2',
          barThickness: 50
        },
        {
          label: "Budget",
          data: [6000],
          backgroundColor: '#3faeee',
          barThickness: 50
        },
      ]
    },
    options: {
      plugins: {
        datalabels: {
          display: false
        },
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true
          }
        }
      },
      scales: {
        y: {
          grid: {
            color: '#9da4ae',
          },
          border: {
            display: false
          },
          beginAtZero: true,
          ticks: {
            // crossAlign: "far",
            beginAtZero: true,
            stepSize: 1500,
            callback: function (value: number) {
              return value / 1000 + 'k';
            }
          }
        },
        x: {
          display: false,
          beginAtZero: true
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        bar: {
          borderColor: 'transparent',
          borderWidth: {
            left: 5,
            right: 5
          }
        }
      }
    },
  }

  public workoutChart: any = {
    type: 'bar',
    data: {
      labels: ['Mike', 'Jennifer', 'Brandon', 'Sam', 'George'],
      datasets: [
        {
          label: 'Completed',
          data: [4, 2, 0, 0, 0],
          backgroundColor: '#68cb69',
          barThickness: 20
        },
        {
          label: 'Remaining',
          data: [0, 2, 1, 3, 1],
          backgroundColor: '#3faeee',
          barThickness: 20
        },
        {
          label: 'Overdue',
          data: [0, 0, 0, 0, 0],
          backgroundColor: '#f15048',
          barThickness: 20
        },
      ]
    },
    options: {
      plugins:
      {
        datalabels: {
          display: false
        },
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true,
            // padding: 50
          },
        }
      },
      indexAxis: 'y',
      scales: {
        y: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            crossAlign: "far",
            padding: 30,
          }
        },

        x: {
          grid: {
            color: '#9da4ae'
          },
          border: {
            display: false
          },
          max: 8,
          min: 0,
          stacked: true,
          ticks: {
            beginAtZero: true,
            stepSize: 2,
          }
        },
      },
      responsive: true,
      maintainAspectRatio: false,

    },
  }
}

