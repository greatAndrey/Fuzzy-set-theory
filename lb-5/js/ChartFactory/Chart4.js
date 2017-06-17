function Chart4(settings) {
    this.settings = settings;
}

Chart4.prototype.getY = function (x) {
    if (this.settings.c1 < this.settings.c2) {
        return this.firstLess(x);
    } else {
        return this.secondLess(x);
    }
};

Chart4.prototype.firstLess = function (x) {
    if (x < this.settings.c1) {
        return this.xLess(x);
    } else if (this.settings.c1 <= x && x <= this.settings.c2) {
        return 1;
    } else {
        return this.xMore(x);
    }
};

Chart4.prototype.secondLess = function (x) {
    if (x < this.settings.c2) {
        return this.xLess(x);
    } else if (this.settings.c2 <= x <= this.settings.c1) {
        return this.xLess(x) * this.xMore(x);
    } else {
        return this.xMore(x);
    }
};

Chart4.prototype.xLess = function (x) {
    return Math.pow(Math.exp(1), -(Math.pow((x - this.settings.c1), 2) / 2 * this.settings.a1 * this.settings.a1));
};

Chart4.prototype.xMore = function (x) {
    return Math.pow(Math.exp(1), -(Math.pow((x - this.settings.c2), 2) / 2 * this.settings.a2 * this.settings.a2));
};
