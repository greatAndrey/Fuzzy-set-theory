var ChartWrapper = (function() {

    var getChartData = function(firstLine, secondLine, limits) {
        var labels = [];

        for (var i = limits.min; i <= limits.max; i++) {
            labels.push(i);
        }

        return {
            "labels": labels,
            "datasets":[
                {
                    "label":"Residue",
                    "data":firstLine,
                    "fill":false,
                    "borderColor":"rgb(255, 0, 0)",
                    "lineTension":0.1
                },
                {
                    "label":"Booked",
                    "data":secondLine,
                    "fill":false,
                    "borderColor":"rgb(0, 255, 0)",
                    "lineTension":0.1
                }
            ]
        };
    };

    var chart;

    return {
        createChart: function(elementName) {
            var ctx = document.getElementById(elementName);

            chart = new Chart(ctx, {
                "type":"line",
                "data":[],
                "options":{}
            });

            return this;
        },
        updateChart: function(firstLine, secondLine, limits) {
            chart.config.data = getChartData(firstLine, secondLine, limits);
            chart.update();
        }
    };
})();

