document.addEventListener('DOMContentLoaded', function() {
const ctx = document.getElementById('barChart').getContext('2d');

const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Weighted',
            data: [12, 19, 3, 5, 2, 3, 15],
            borderColor: 'purple', 
            backgroundColor: 'purple', 
            borderWidth: 2,
            barThickness: 5, 
            pointRadius: 0,
            tension: 0.4,
            barPercentage: 0.5,
        }, {
            label: 'Won',
            data: [25, 42, 38, 50, 27, 55, 30],
            borderColor: 'yellow',
            backgroundColor: 'yellow',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(54, 162, 235)',
            barThickness:5,
            pointRadius: 0,
            tension:0.4,
            barPercentage: 0.5,
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


});

 
 
 