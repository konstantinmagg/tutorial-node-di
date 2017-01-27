'use strict';

var coffee = require('../coffee.js')();
var user = require('../user.js')(coffee);

describe('User', function() {
    it('ctos should set name property', function() {
        var myUser = new user.User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should brew "80" coffee.', function() {
        var myUser = new user.User('N');
        var result = myUser.brewCoffee();
        expect(result).toBe(80);
    });

    it('should call "coffee" with correct arguments', function() {
        spyOn(coffee, 'brew');  // set up spy

        var myUser = new user.User('N');
        myUser.brewCoffee();

        expect(coffee.brew).toHaveBeenCalled(); // assert spy
        expect(coffee.brew.calls.argsFor(0)).toEqual([8, 10]);
    });
});
