var alphabet = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

$('#add').on('click', function() {
    var $interval = $('.interval'),
        $html = $($interval[0].outerHTML);

    $html.find('.text-center').text('Interval ' + alphabet[$interval.length]);
    $('.interval-row').append($html);
});

$('button[type="button"]').on('click', function () {
    var $intervals = $('.interval'),
        result = [];

    $intervals.each(function(i) {
        if (i === $intervals.length - 1) {
            return false;
        }

        var $curInterval = $(this),
            $nextInterval = $('.interval').eq(i + 1),

            a = [
                parseInt($curInterval.find('.interval-f').val()),
                parseInt($curInterval.find('.interval-s').val())
            ],
            b = [
                parseInt($nextInterval.find('.interval-f').val()),
                parseInt($nextInterval.find('.interval-s').val())
            ];

        if (result.length) {
            result = runUnaryOperation($curInterval, result);
        } else {
            a = runUnaryOperation($curInterval, a);
        }

        b = runUnaryOperation($nextInterval, b);

        result = runBinaryOperation($(this).find('[name="operation"]').val(), result.length ? result : a, b);
    });

    console.log('res', result);
    console.log('def', subtract(sum([-2, 8], [-1, 1]), [4, 10]));
});

function runBinaryOperation(operation, a, b) {
    if (typeof operation !== "string") {
        throw new Error("Operation have to be string!");
    }

    switch (operation) {
        case 'append': return sum(a, b);
        case 'subtract': return subtract(a, b);
        case 'multiply': return multiply(a, b);
        case 'divide': return divide(a, b);
        case 'divide_gip': return divideGip(a, b);
        case 'max': return max(a, b);
        case 'min': return min(a, b);
    }
}

function runUnaryOperation($interval, arr) {
    if ($interval.find('[name="negative"]').prop('checked')) {
        arr = minus(arr);
    }

    if ($interval.find('[name="inversion"]').prop('checked')) {
        arr = inversion(arr);
    }

    return arr;
}


// ====
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
