window.onload = function(){
  var atx = document.getElementById('fuel').getContext('2d');
  var doughnut = new Chart(atx, {
    type: 'doughnut',
    data: {
        labels: ["Empty", "Fuel"],
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
        titleFontSize: 25,
        bodyFontSize: 25,
        xPadding: 20,
        yPadding: 10,
        caretPadding: 10,
      }
    }
  });

  var btx = document.getElementById('distanceInTime').getContext('2d');
  var lineChart = new Chart(btx, {
      type: 'line',
      data: {
          labels: ["10", "20", "30", "40", "50", "60", "70"],
          datasets: [{
              label: "Actual speed",
              backgroundColor: 'rgb(129, 111, 69, 0)',
              borderColor: 'rgb(129, 111, 69, 1)',
              data: [0, 15, 25, 28, 40, 57, 70],
          },{
            label: "Average speed",
            backgroundColor: 'rgb(50, 50, 50, 0)',
            borderColor: 'rgb(50, 50, 50, 1)',
            data: [0, 7.5, 13.3, 17, 21.6, 27.5, 33.6],
          }
        ]
      },
      options: {
        legend: {
          labels: {
            fontSize: 25
          }
        },
        tooltips: {
          titleFontSize: 25,
          bodyFontSize: 25,
          xPadding: 20,
          yPadding: 10,
          caretPadding: 10,
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
          fontSize: 25
        }
      },
      tooltips: {
        titleFontSize: 25,
        bodyFontSize: 25,
        xPadding: 20,
        yPadding: 10,
        caretPadding: 10,
      }
    }
  });
}
