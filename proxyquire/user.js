'use strict';

function User(name) {
    var brew = require('./coffee');

    this.name = name;

    var amountOfBeans = 8;
    var amountOfWater = 10;

    this.brewCoffee = function() {
        return brew(amountOfBeans, amountOfWater);
    };
}

module.exports = User;
