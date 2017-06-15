var chart = ChartWrapper.createChart("myChart", "Result", 0, 0),
    operands = new Operands(),
    calculator;

$('button.calculate').on('click', function() {
    try {
        $('.operands .operand').each(function (i) {
            $(this).find('input').each(function () {
                var num = $(this).val();
                operands.setByNum(i, num);
            });
        });

        operands._C = sum(operands.getA(), operands.getB());
        calculator = new Calculator(operands);
        $('.mFuncs').find('.model').each(function (i) {
            var accessory = calculator.accessory(i),
                alpha = calculator.alpha(i);

            $(this).find('.func span').html(accessory.zero + accessory.beforeX + accessory.afterX);
            $(this).find('.alpha span').html("[" + alpha.leftLimit + ", " + alpha.rightLimit + "]");
        });

        chart.updateChart(
            calculator.getLine(0),
            calculator.getLine(1),
            calculator.getLine(2),
            calculator.getLimits()
        );

        $('button.find-x').prop('disabled', false);
    }
    catch (e) {
        alert(e);
        operands.reInit();
    }
});

$('button.find-x').on('click', function() {
    try {
        var num = parseInt($('.result').find('input[type="text"]').val());
        if (isNaN(num)) {
            throw new Error('You must input number into X');
        }

        $('.m span').each(function (i) {
            $(this).text(calculator.getY(num, i));
        });
    }
    catch (e) {
        alert(e);
    }
});