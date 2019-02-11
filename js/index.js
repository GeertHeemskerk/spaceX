window.onload = function(){
  var ctx = document.getElementById('fuel').getContext('2d');
  var chart = new Chart(ctx, {
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
      // legend: {
      //   display: false
      // }
    }
  });

  var ctx = document.getElementById('distanceInTime').getContext('2d');
  var chart = new Chart(ctx, {
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
      }
  });
}
