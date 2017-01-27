'use strict';

describe('User in production environment', function() {
    var User = require('./../user.js');

    it('ctor should set name property', function() {
        var myUser = new User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should brew "80" coffee.', function() {
        var myUser = new User('NAME');
        var result = myUser.brewCoffee();
        expect(result).toBe(80);
    });
});
