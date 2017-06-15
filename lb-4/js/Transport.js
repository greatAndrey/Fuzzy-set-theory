function Transport(num) {
    if (typeof num !== 'number') {
        throw new Error("Num have to be number!");
    }

    this.carrying = num;
}

Transport.prototype.getCarrying = function () {
    return [this.carrying, this.carrying, this.carrying];
};
