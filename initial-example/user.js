'use strict';

function User(name) {
    var brew = require('./brew');

    this.name = name;

    var amountOfBeans = 8;  // internal state
    var amountOfWater = 10;

    this.brewCoffee = function() {
        return brew(amountOfBeans, amountOfWater);
    };
}

module.exports = User;
