function Calculator(operands) {
    if (! operands instanceof Operands) {
        throw new Error('argument "operands" have to be instance of "Operands" class');
    }

    this.operands = operands;
}

Calculator.prototype.getOperand  =function (num) {
    if (num < -1 || num > 3) {
        throw new Error("Num is invalid!");
    }

    if (0 === num) {
        return '_A';
    } else if (1 === num) {
        return '_B';
    } else {
        return '_C';
    }
};

Calculator.prototype.accessory = function(num) {
    var operand = this.getOperand(num),
        beforeDel = this.operands[operand][1] - this.operands[operand][0],
        afterDel = this.operands[operand][2] - this.operands[operand][1];

    return {
        zero: "<br/>0, при x <= " + this.operands[operand][0] + " и x >=" + this.operands[operand][2] + "<br/>",
        beforeX: "x - " + this.operands[operand][0] + " / " + beforeDel + ", при " + this.operands[operand][0] + "<=x<=" + this.operands[operand][1] + "<br/>",
        afterX: this.operands[operand][2] + " - x / " + afterDel + ", при " + this.operands[operand][1] + "<=x<=" + this.operands[operand][2] + "<br/>"
    };
};

Calculator.prototype.alpha = function (num) {
    var operand = this.getOperand(num);
    return {
        leftLimit: "alpha*" + (this.operands[operand][1] - this.operands[operand][0]) + " + "+ this.operands[operand][0],
        rightLimit: this.operands[operand][2] + " - alpha*" + (this.operands[operand][2] - this.operands[operand][1])
    };
};

Calculator.prototype.getLimits = function() {
    var operand, tmp = [];

    for(var i = 0, l = Object.keys(this.operands).length; i < l; i++) {
        operand = this.getOperand(i);

        tmp.push(this.operands[operand][0]);
        tmp.push(this.operands[operand][2]);
    }

    return {min: Math.min.apply(Math, tmp), max: Math.max.apply(Math, tmp)};
};

Calculator.prototype.getLine = function (num) {
    var operand = this.getOperand(num),
        limits = this.getLimits(),
        tmp = [];

    for (var i = limits.min; i <= limits.max; i++) {
        tmp.push(this.getY(i, operand));
    }

    return tmp;
};

Calculator.prototype.getY = function(i, operand) {
    if (typeof operand === 'number') {
        operand = this.getOperand(operand);
    }

    if (this.operands[operand] === undefined) {
        throw new Error("Operand '" + operand + "' doesn't exist!");
    }

    var beforeDel = this.operands[operand][1] - this.operands[operand][0],
        afterDel = this.operands[operand][2] - this.operands[operand][1];

    if (i <= this.operands[operand][0] || i >= this.operands[operand][2]) {
        return 0;
    } else if (i <= this.operands[operand][1]) {
        return (i - this.operands[operand][0]) / beforeDel;
    } else {
        return (this.operands[operand][2] - i) / afterDel;
    }
};