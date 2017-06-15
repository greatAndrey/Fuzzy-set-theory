var tmpCarrying,
    $carryingCapacity = $('.carrying-capacity'),
    calculator = new Calculator(),
    chart = ChartWrapper.createChart('myCanvas');

$('button').on('click', function() {
    try {
        var num = $carryingCapacity.val(),
            transport = new Transport(parseInt(num)),
            port = new Port();

        var portBooking = port.getRandomBooking(50, transport.carrying / 5);
        tmpCarrying = calculator.subtract(
            undefined === tmpCarrying ? transport.getCarrying() : tmpCarrying,
            portBooking
        );

        $('.temporary').append('<div>' +
            'Capacity: <b>[' + tmpCarrying.toString() + ']</b>; ' +
            'Booking: <b>[' + portBooking.toString() + ']</b>;' +
            '</div>'
        );

        ChartWrapper.updateChart(
            calculator.arrayFormatter(tmpCarrying, {min: 0, max: num}),
            calculator.arrayFormatter(portBooking, {min: 0, max: num}),
            {min: 0, max: num}
        );

        if (Math.min.apply(Math, tmpCarrying) < Math.max.apply(Math, portBooking)) {
            setTimeout(function() {alert("Conflict!")}, 500);
            $(this).prop('disabled', true);
        }
    }
    catch (e) {
        alert(e);
    }
});