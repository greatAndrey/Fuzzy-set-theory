function Chart5(settings) {
    this.settings = settings;
}

Chart5.prototype.getY = function (x) {
    return 1 / (1 + Math.pow(Math.abs(x - this.settings.c / this.settings.a), 2 * this.settings.b));
};
