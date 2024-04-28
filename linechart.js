
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'This Week',
            data: [12, 19, 3, 5, 2, 3, 15],
            borderColor: 'pink', 
            backgroundColor: 'pink', 
            borderWidth: 2,
            pointRadius:0,
            tension:0.4
        }, {
            label: 'Last Week',
            data: [25, 42, 38, 50, 27, 55, 30],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointRadius: 0,
            tension:0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    color: 'black', 
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {
                position:"top",
                align:"start",
                labels: {
                    color: 'black', 
                    font: {
                        size: 14, 
                        weight: 'bold' 
                    }
                }
            }
        },
        
    }
});




 
 
 