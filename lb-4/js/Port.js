function Port(transport) {}

Port.prototype.getRandomBooking = function (min, max) {
    min = undefined === min ? 0 : min;

    return [
        Math.floor((Math.random() * max) + min),
        Math.floor((Math.random() * max) + min),
        Math.floor((Math.random() * max) + min)
    ];
};