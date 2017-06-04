function sum(arr1, arr2) {

    if (! Array.isArray(arr1) || ! Array.isArray(arr2)) {
        throw new Error("Data isn't array");
    }

    if (arr1.length < 1 && arr1.length !== arr2.length) {
        throw new Error("Arrays don't valid");
    }

    var tmp = [];
    for (var i = 0; i < arr1.length; i++) {
        var a = parseInt(arr1[i]) + parseInt(arr2[i]);
        if (isNaN(a)) {
            throw new Error("Some element isn't numeric");
        }
        tmp.push(parseInt(arr1[i]) + parseInt(arr2[i]));
    }

    return tmp;
}