function ChartFormatter() {}

ChartFormatter.prototype.getInterval = function (settings) {
    var tmp = [];

    for (var i = settings.min; i <= settings.max; i += settings.step) {
        tmp.push(i.toPrecision(2));
    }

    return tmp;
};

ChartFormatter.prototype.getDataset = function (settings, chartObj) {
    var tmp = [];
    for (var i = settings.min; i <= settings.max; i += settings.step) {
        tmp.push(chartObj.getY(i).toPrecision(2));
    }

    return tmp;
};
