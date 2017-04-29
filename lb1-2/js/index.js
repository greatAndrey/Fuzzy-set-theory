
var chart = CreateChart("myChart", "test", 0, 0);

function CreateChart(elementName, title, border1, border2) {
    var ctx = document.getElementById(elementName);

    return new Chart(ctx, {
        type: 'bubble',
        data: getChartData(title, border1, border2),
        options: getOptions()
    });
}

function getOptions() {
    return {
        responsive: false,
        elements: {
            points: {
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0)'
            }
        }
    };
}

function getChartData(title, border1, border2) {
    return {
        datasets: [
            {
                label: title,
                data: [
                    {
                        x: border1,
                        y: 0,
                        r: 10
                    },
                    {
                        x: border2,
                        y: 0,
                        r: 10
                    }
                ],
                backgroundColor: "#FF6384",
                hoverBackgroundColor: "#FF6384",
                borderDashOffset: 0.0
            }
        ]
    };
}
