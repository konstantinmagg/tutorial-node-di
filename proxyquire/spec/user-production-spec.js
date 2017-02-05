'use strict';

// Runs specs with "production" dependencies

describe('User in production environment', function() {
    var user = require('../user.js')();

    it('ctor should set name property', function() {
        var myUser = new user.User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should brew "80" coffee.', function() {
        var myUser = new user.User('NAME');
        var result = myUser.brewCoffee();
        expect(result).toBe(80);
    });
});
