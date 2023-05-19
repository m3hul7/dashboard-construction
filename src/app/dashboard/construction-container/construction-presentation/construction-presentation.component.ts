import { Component } from '@angular/core';
import { Chart, ChartData } from 'chart.js';

@Component({
  selector: 'app-construction-presentation',
  templateUrl: './construction-presentation.component.html',
  styleUrls: ['./construction-presentation.component.scss']
})
export class ConstructionPresentationComponent {
  white: string = '#ffffff';
  black: string = '#141313';


  public doughnutChart: any = {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: [10, 6, 2],
          backgroundColor: ['#9da4ae', '#68cb69', '#4ccbc2'],
          borderWidth: 2,
          borderRadius: 3
        }
      ],
      labels: ['Not Started', 'Complete', 'In Progress'],
    },
    options: {
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end', 
          color: (value:any) => {
            return value.dataset.backgroundColor[value.dataIndex]
          }  
        },  
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      },
      cutout: 140,
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
            '#f15048',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        datalabels: {
          anchor: 'start',
          align: 'start',
          formatter: (value:number) => {
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
          grid: {
            display: false

          },
          beginAtZero: true,
          ticks: {
            crossAlign: "far",
            padding: 30,  
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
          // data: [0, 0, 0, 0, 0, 0],
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
          formatter: (value:number) => {
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
            drawBorder: false
          },
          stacked: true,

          // type: 'category', // Use category scale for the x-axis,
          min: -100, // Set the minimum value for the x-axis
          max: 100, // Set the maximum value for the x-axis
          ticks: {
            stepSize: 25, // Set the step size between ticks
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

  public costChart: any= {
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
      plugins: {
        datalabels: {
          display: false
        },
        legend: {
          align: 'start',
          labels: {
            usePointStyle: true
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

  setDarkTheme(isThemeDark: boolean) {

    if (isThemeDark == true) {
      console.log('Dark Used');
      document.documentElement.style.setProperty('--white-color', this.black);
      document.documentElement.style.setProperty('--black-color', this.white);
      localStorage.setItem('dark', 'true');
    }
    else {
      console.log('Light Used');
      document.documentElement.style.setProperty('--white-color', this.white);
      document.documentElement.style.setProperty('--black-color', this.black);
      localStorage.setItem('dark', 'false');
    }
  }
}

