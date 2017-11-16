var ctx = document.getElementById("myLineChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            // xAxisID: '500',
            // data: [{
            //             x: 10,
            //             y: 0
            //         }, {
            //             x: 20,
            //             y: 50
            //         }],
            data: [500, 1500, 725, 1700, 2200, 1600, 2200, 1500, 2000, 1200, 2000, 2200, 2000, 2200, 2200],
            backgroundColor: [
                'rgba(116, 119, 191, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(116, 119, 191, 0.4)',
            ],
            pointRadius: [5, 5, ,5, 5, 5, 5, 5, 5, 5, 5, 5],
            borderWidth: 3
        }]
    },
    options: {
      elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
              // type: 'category',
              // labels: ['2500', '2000', '1500', '1000', '500'],
              stacked: true
            }]
        }
    }
}); // end line chart

//Bar Chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}); // end bar chart

// Doughnut chart
var ctx = document.getElementById("myDoughnutChart").getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        label:'MOBILE USERS',
        data: [13, 12, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
      }],
      labels: ['Phones', 'Tablets', 'Desktop'],
    },
    options: {
      rotation: 4,
      // animation.animateRotate: true,
       // scales: {
       //   // scaleLabel: true,
       //   // abelString: 'Yy',
       // },
    }
});
