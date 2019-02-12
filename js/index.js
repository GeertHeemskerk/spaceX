window.onload = function(){
  Chart.defaults.global.maintainAspectRatio = false;
  var atx = document.getElementById('fuel').getContext('2d');
  var doughnut = new Chart(atx, {
    type: 'doughnut',
    data: {
        labels: ["EMPTY", "FULL"],
        datasets: [{
            backgroundColor: [
              'rgb(50, 50, 50, 1)',
              'rgb(129, 111, 69, 1)',
            ],
            borderColor: 'rgb(0, 0, 0 , 0)',
            data: [22, 78],
        }]
    },
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false
      },
      tooltips: {
        titleFontSize: 12,
        bodyFontSize: 12,
        xPadding: 20,
        yPadding: 10,
        caretPadding: 10,
      },
      layout: {
        padding: {
          bottom: 100,
          left: 40,
          right: 40
        }
      },
    }
  });

  var btx = document.getElementById('distanceInTime').getContext('2d');
  var lineChart = new Chart(btx, {
      type: 'line',
      data: {
          labels: ["10", "20", "30", "40", "50", "60", "70"],
          datasets: [{
              label: "ACTUAL SPEED",
              backgroundColor: 'rgb(129, 111, 69, 0)',
              borderColor: 'rgb(129, 111, 69, 1)',
              data: [0, 15, 25, 28, 40, 57, 70],
          },{
            label: "AVERAGE SPEED",
            backgroundColor: 'rgb(50, 50, 50, 0)',
            borderColor: 'rgb(50, 50, 50, 1)',
            data: [0, 7.5, 13.3, 17, 21.6, 27.5, 33.6],
          }
        ]
      },
      options: {
        legend: {
          labels: {
            fontSize: 12
          }
        },
        tooltips: {
          titleFontSize: 12,
          bodyFontSize: 12,
          xPadding: 20,
          yPadding: 10,
          caretPadding: 10
        },
        layout: {
          padding: {
            bottom: 90,
            right: 15
          }
        },
        scales: {
                yAxes: [{
                    ticks: {
                        max: 70,
                        min: 0,
                        stepSize: 7
                    }
                }]
            }
      }
  });

  var ctx = document.getElementById('thermometer').getContext('2d');
  var BarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["GPU", "CPU", "RAM"],
      datasets: [{
          label: "GPU",
          backgroundColor: 'rgb(129, 111, 69, 1)',
          borderColor: 'rgb(129, 111, 69, 1)',
          data: [25],
      },{
        label: "CPU",
        backgroundColor: 'rgb(102, 88, 88, 1)',
        borderColor: 'rgb(50, 50, 50, 1)',
        data: [0, 92],
      },{
        label: "RAM",
        backgroundColor: 'rgb(50, 50, 50, 1)',
        borderColor: 'rgb(50, 50, 50, 1)',
        data: [0, 0, 72],
      }
    ]
  },
    options: {
      legend: {
        labels: {
          fontSize: 12
        }
      },
      tooltips: {
        titleFontSize: 12,
        bodyFontSize: 12,
        xPadding: 20,
        yPadding: 10,
        caretPadding: 10,
      },
      layout: {
        padding: {
          bottom: 90,
          right: 15
        }
      }
    }
  });
}
