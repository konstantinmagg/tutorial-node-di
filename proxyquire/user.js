'use strict';

var coffee = require('./coffee.js')();

function User(name) {
    this.name = name;

    var amountOfBeans = 8;
    var amountOfWater = 10;

    this.brewCoffee = function() {
        console.log(typeof coffee.brew);
        return coffee.brew(amountOfBeans, amountOfWater);
    };
}

module.exports = User;
