window.onload = function(){
  var ctx = document.getElementById('fuel').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            backgroundColor: [
              'rgb(50, 50, 50, 1)',
              'rgb(129, 111, 69, 1)',
            ],
            borderColor: 'rgb(0, 0, 0 , 0)',
            data: [22,78],
        }]
    },
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI
    }
  });

  var ctx = document.getElementById('distanceInTime').getContext('2d');
  var chart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["10", "20", "30", "40", "50", "60", "70"],
          datasets: [{
              label: [
                "Actual speed",
                "Average speed",
              ],
              backgroundColor: 'rgb(0, 0, 0, 0)',
              borderColor: 'rgb(129, 111, 69, 1)',
              data: [0, 10, 5, 2, 20, 30, 45],
          }]
      },

      // Configuration options go here
      options: {}
  });
}
