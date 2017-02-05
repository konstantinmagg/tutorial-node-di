'use strict';

// no requires in this object

module.exports = function() {
    var coffee = require('./coffee')();

    function User(name) {
        this.name = name;

        var amountOfBeans = 8;
        var amountOfWater = 10;

        this.brewCoffee = function() {
            return coffee.brew(amountOfBeans, amountOfWater);
        };
    }

    return {
        User: User  // export ctor function
    };
};
