function Operands() {
    this._A = [];
    this._B = [];
    this._C = [];
}

Operands.prototype.reInit = function () {
    this._A = [];
    this._B = [];
    this._C = [];
};

Operands.prototype._numFormatter = function(num) {
    var tmp = parseInt(num);

    if (isNaN(tmp)) {
        throw new Error("Argument 'num' isn't number");
    }

    return tmp;
};
Operands.prototype.setA = function(num) {
    this._A.push(this._numFormatter(num));
};
Operands.prototype.setB = function(num) {
    this._B.push(this._numFormatter(num));
};

Operands.prototype.setC = function(num) {
    this._C.push(this._numFormatter(num));
};

Operands.prototype.getA = function () {
    return this._A;
};

Operands.prototype.getB = function () {
    return this._B;
};

Operands.prototype.getC = function () {
    return this._C;
};

Operands.prototype.setByNum = function (num, val) {
    if (num < -1 || num > 3) {
        throw new Error("Num isn't valid");
    }

    if (0 === num) {
        this.setA(val);
    } else if (1 === num) {
        this.setB(val);
    } else if (2 === num) {
        this.setC(val);
    } else {
        throw new Error("Option doesn't handled!");
    }
};

Operands.prototype.getByNum = function (num) {
    if (num < -1 || num > 3) {
        throw new Error("Num isn't valid");
    }

    if (0 === num) {
        this.getA(num);
    } else if (1 === num) {
        this.getB(num);
    } else if (2 === num) {
        this.getC(num);
    } else {
        throw new Error("Option doesn't handled!");
    }
};