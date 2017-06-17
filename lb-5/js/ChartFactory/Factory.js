function Factory() {}

Factory.prototype.getInstance = function (chartNum, settings) {
    switch (chartNum) {
        case 3: return new Chart3(settings);
        case 4: return new Chart4(settings);
        case 5: return new Chart5(settings);
        case 7: return new Chart7(settings);
        case 8: return new Chart8(settings);
    }
};
