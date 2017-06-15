var ChartWrapper = (function() {

    var getOptions = function() {
        return {
            responsive: false,
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
    };

    var getChartData = function(firstLine, secondLine, thirdLine, limits) {
        var labels = [];

        for (var i = limits.min; i <= limits.max; i++) {
            labels.push(i);
        }

        return {
            "labels": labels,
            "datasets":[
                {
                    "label":"A",
                    "data":firstLine,
                    "fill":false,
                    "borderColor":"rgb(255, 0, 0)",
                    "lineTension":0.1
                },
                {
                    "label":"B",
                    "data":secondLine,
                    "fill":false,
                    "borderColor":"rgb(0, 255, 0)",
                    "lineTension":0.1
                },
                {
                    "label":"C",
                    "data":thirdLine,
                    "fill":false,
                    "borderColor":"rgb(0, 0, 255)",
                    "lineTension":0.1
                }
            ]
        };
    };

    var chart;

    return {
        createChart: function(elementName, title, border1, border2) {
            var ctx = document.getElementById(elementName);

            chart = new Chart(ctx, {
                "type":"line",
                "data":[],
                "options":{}
            });

            return this;
        },
        updateChart: function(firstLine, secondLine, thirdLine, limits) {
            chart.config.data = getChartData(firstLine, secondLine, thirdLine, limits);
            chart.update();
        }
    };
})();
