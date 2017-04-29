
ShowChart("myChart", "test", 1, 5);

function ShowChart(elementName, title, border1, border2) {
    var ctx = document.getElementById(elementName);
    var data = getChartData(title, border1, border2);
    var options = getOptions();

    var myBubbleChart = new Chart(ctx, {
        type: 'bubble',
        data: data,
        options: options
    });
}

function getOptions() {
    var options = {
        responsive: false,
        elements: {
            points: {
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0)'
            },
        }
    };

    return options;
}

function getChartData(title, border1, border2) {
    var data = {
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
                borderDashOffset: 0.0,
            }]
    };

    return data;
}
