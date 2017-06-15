function Calculator() {}

Calculator.prototype.subtract = function(arr1, arr2) {
    return [
        arr1[0] - arr2[2],
        arr1[1] - arr2[1],
        arr1[2] - arr2[0]
    ];
};

Calculator.prototype.arrayFormatter = function (arr, limits) {
    if (! Array.isArray(arr)) {
        throw new Error("Argument have to be array");
    }

    var tmp = [];
    for (var i = limits.min; i <= limits.max; i++) {
        tmp.push(this.getY(i, arr));
    }

    return tmp;
};

Calculator.prototype.getY = function(i, arr) {
    i = parseInt(i);
    if (isNaN(i) || ! Array.isArray(arr)) {
        throw new Error("Arguments have wrong types");
    }

    arr = arr.sort(function(a, b) { return a - b; });

    var beforeDel = arr[1] - arr[0],
        afterDel = arr[2] - arr[1];

    if (i <= arr[0] || i >= arr[2]) {
        return 0;
    } else if (i <= arr[1]) {
        return (i - arr[0]) / beforeDel;
    } else {
        return (arr[2] - i) / afterDel;
    }
};