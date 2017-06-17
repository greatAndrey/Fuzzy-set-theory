function Chart7(settings) {
    this.settings = settings;
}

Chart7.prototype.getY = function (x) {
    return (1 / (1 + Math.pow(Math.exp(1), -this.settings.a1 * (x - this.settings.c1))))
        * (1 / (1 + Math.pow(Math.exp(1), -this.settings.a2 * (x - this.settings.c2))));
};
