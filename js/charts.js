// Traffic Charts Data and Options

const newTrafficChart = {
  options: {
    legend: {
      display: false
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0
          }
        }
      ]
    }
  },
  monthly: {
    labels: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
    datasets: [
      {
        data: [ 750, 1250, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 250, 1800 ],
        backgroundColor: "rgba(116, 119, 191, .25)",
        borderColor: "#7477bf",
        borderWidth: 1,
        lineTension: 0,
        pointBackgroundColor: "white",
        pointRadius: 5
      }
    ]
  },
  weekly: {
    labels: [ "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31" ],
    datasets: [
      {
        data: [ 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000 ],
        backgroundColor: "rgba(116, 119, 191, .25)",
        borderColor: "#7477bf",
        borderWidth: 1,
        lineTension: 0,
        pointBackgroundColor: "white",
        pointRadius: 5
      }
    ]
  },
  daily: {
    labels: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
    datasets: [
      {
        data: [75, 50, 75, 150, 100, 200, 175],
        backgroundColor: "rgba(116, 119, 191, .25)",
        borderColor: "#7477bf",
        borderWidth: 1,
        lineTension: 0,
        pointBackgroundColor: "white",
        pointRadius: 5
      }
    ]
  },
  hourly: {
    labels: [ "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "21:00", "22:00", "23:00" ],
    datasets: [
      {
        data: [ 75, 50, 75, 150, 100, 200, 175, 25, 5, 10, 10, 25, 50, 100, 250, 5, 0, 15, 30, 20, 25, 200, 170, 150 ],
        backgroundColor: "rgba(116, 119, 191, .25)",
        borderColor: "#7477bf",
        borderWidth: 1,
        lineTension: 0,
        pointBackgroundColor: "white",
        pointRadius: 5
      }
    ]
  }
};



const widgetButtons = document.querySelector(".switch-toggle");

// -----load traffic charts(hourly, daily, weekyly, monthly)-----
var tC = new Chart(trafficChart, {
  type: "line",
  data: newTrafficChart.weekly,
  options: newTrafficChart.options
});
widgetButtons.addEventListener("click", function(e) {
  if (tC) {
    tC.destroy();
  }
  if (e.target.nextElementSibling.innerText.toLowerCase() === "monthly") {
    tC = new Chart(trafficChart, {
      type: "line",
      data: newTrafficChart.monthly,
      options: newTrafficChart.options
    });
  }
  if (e.target.nextElementSibling.innerText.toLowerCase() === "weekly") {
    // e.target.nextElementSibling.classList.add("selected");
    tC = new Chart(trafficChart, {
      type: "line",
      data: newTrafficChart.weekly,
      options: newTrafficChart.options
    });
  }
  if (e.target.nextElementSibling.innerText.toLowerCase() === "daily") {
    // e.target.nextElementSibling.classList.add("selected");
    tC = new Chart(trafficChart, {
      type: "line",
      data: newTrafficChart.daily,
      options: newTrafficChart.options
    });
  }
  if (e.target.nextElementSibling.innerText.toLowerCase() === "hourly") {
    // e.target.nextElementSibling.classList.add("selected");
    tC = new Chart(trafficChart, {
      type: "line",
      data: newTrafficChart.hourly,
      options: newTrafficChart.options
    });
  }
});


//Bar Chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "",
            data: [50, 75, 150, 105, 200, 170, 75],
            backgroundColor: 'rgba(153, 102, 255, 1)',
        }],
    },
    options: {
      legend: {
        display: false,
      },
      layout: {
        padding: 18,
      },
        scales: {
          xAxes: [
            {
              barPercentage: 0.5,
            }
          ],
            yAxes: [
              {
                ticks: {
                    beginAtZero:true,
                    stepSize: 50,
                    max: 250,
                }
              }
            ]
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
          'rgba(129, 201, 143, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
      }],
      labels: ['Phones', 'Tablets', 'Desktop'],
    },
    options: {
      legend: {
        position:'right',
        labels: {
          boxWidth: 14,
        },
      },
      layout: {
        padding: 30,
      },
      rotation: 4,
    }
});
