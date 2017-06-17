var factory = new Factory(),
    chartFormatter = new ChartFormatter(),
    intervalObj = {min: 0, max: 10, step: 0.2},
    interval = chartFormatter.getInterval(intervalObj),
    chartSettings = {
        chart3: {
            b: 5,
            c: 1
        },
        chart4: {
            c1: 5,
            c2: 7,
            a1: 2,
            a2: 1
        },
        chart5: {
            a: 2,
            b: 2,
            c: 11
        },
        chart7: {
            a1: -8,
            a2: 4,
            c1: 6,
            c2: 3
        },
        chart8: {
            a1: -4,
            a2: -8,
            c1: 6,
            c2: 3
        }
    };


var $active = $('.nav li.active'),
    chartObj = factory.getInstance($active.find('a').data('id'), chartSettings[$active.find('a').attr('href')]);
    chart = new Chart($('#chart'), {
    type:"line",
    data:{
        labels:interval,
        datasets:[{
            label:"Двусторонняя гаусовская фукция принадлежности",
            data: chartFormatter.getDataset(intervalObj, chartObj),
            fill:false,
            borderColor:"rgb(75, 192, 192)",
            lineTension:0.1
        }]
    },
    options:{}
});

$('#settings').text(JSON.stringify(chartSettings['chart3']));

$('.nav').on('click', 'a', function(e) {
    e.preventDefault();
    var chartName = $(this).attr('href'),
        chartObj;

    if (undefined !== chartSettings[chartName]) {
        chartObj = factory.getInstance($(this).data('id'), chartSettings[chartName]);
        chart.config.data.datasets[0].data = chartFormatter.getDataset(intervalObj, chartObj);
        chart.config.data.datasets[0].label = $(this).text();
        chart.update();

        $(this).parents('.nav').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('#chart-formula').attr('src', $(this).data('img'));
        $('#settings').text(JSON.stringify(chartSettings[chartName]));
    } else {
        alert("This chart doesn't support");
    }
});