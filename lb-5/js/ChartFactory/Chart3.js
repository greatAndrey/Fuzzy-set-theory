function Chart3(settings) {
    this.settings = settings;
}

Chart3.prototype.getY = function (x) {
    return Math.pow(Math.exp(1), -(Math.pow(x - this.settings.b, 2) / (2 * this.settings.c * this.settings.c)));
};