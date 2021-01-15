const charts = require('chart.js');
const sys = require('systeminformation');

module.exports = {
    stylingOptions: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    },

    chartAtIndex: (canvas, data_arr) => {
        let chart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data_arr,
                datasets: [{
                    data: data_arr
                }]
            },
            options: module.exports.stylingOptions
        });

        return chart;
    }
};