function Operands() {
    this._A = [];
    this._B = [];
    this._C = [];
}
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
        this.setA(num);
    } else if (1 === num) {
        this.setB(num);
    } else if (2 === num) {
        this.setC(num);
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

$('button').on('click', function() {
    var operands = new Operands();
    $('.operands .operand').each(function(i) {
        $(this).find('input').each(function() {
            var num = $(this).val();
            operands.setByNum(i, num);
        });
    });

    operands._C = sum(operands.getA(), operands.getB());
    var calculator = new Calculator(operands);
    $('.mFuncs').find('.model').each(function(i) {
        var accessory = calculator.accessory(i),
            alpha = calculator.alpha(i);

        $(this).find('.func span').html(accessory.zero + accessory.beforeX + accessory.afterX);
        $(this).find('.alpha span').html("[" + alpha.leftLimit + ", " + alpha.rightLimit + "]");
    });
});