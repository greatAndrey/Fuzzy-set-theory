function sum(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("Arguments have to be array");
    }

    var tmp = [];
    for (var i = 0; i < a.length; i++) {
        tmp.push(a[i] + b[i]);
    }

    return tmp;
}

function multiply(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("Arguments have to be array");
    }

    var tmp = [];
    for (var i = 0; i < a.length; i++) {
        for (var q = 0; q < b.length; q++) {
            tmp.push(a[i] * b[q]);
        }
    }

    return [Math.min.apply(Math, tmp), Math.max.apply(Math, tmp)];
}

function divideGip(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("Arguments have to be array");
    }

    var tmp = [];
    for (var i = 0; i < a.length; i++) {
        for (var q = 0; q < b.length; q++) {
            tmp.push(a[i] / b[q]);
        }
    }

    return [Math.min.apply(Math, tmp), Math.max.apply(Math, tmp)];
}

function subtract(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("One of the params not array");
    }

    return [a[0] - b[1], a[1] - b[0]];
}

function minus(arr) {
    if ( !Array.isArray(arr)) {
        throw new Error("One of the params not array");
    }

    return [-arr[1], -arr[0]];
}

function divide(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("One of the params not array");
    }

    return [a[0] / b[1], a[1] / b[0]];
}

function inversion(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("One of the params not array");
    }

    return [1 / arr[1], 1 / arr[0]];
}

function multiplyByK(arr, k) {
    if (!Array.isArray(arr)) {
        throw new Error("One of the params not array");
    }

    return [k * arr[0], k * arr[1]];
}

function max(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("One of the params not array");
    }

    return [Math.max(a[0], b[0]), Math.max(a[1], b[1])];
}

function min(a, b) {
    if (! Array.isArray(a) || ! Array.isArray(b)) {
        throw new Error("One of the params not array");
    }

    return [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
}

function hello(name) {
    return '<h1>' + name + '</h1>';
}