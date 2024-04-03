export const lineChart = {
    type: 'line',
        data: {
            labels: [],
                datasets: [{
                label: '# of Votes',
                data: [],
                borderWidth: 1
            }]
        },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
}
export default lineChart;