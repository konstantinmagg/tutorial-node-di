'use strict';

// var user = require('../user.js');

describe('"User" in "test" environment', function() {
    var proxyquire = require('proxyquire').noPreserveCache();
    var coffeeSpy;
    var User;

    beforeEach(function() {
        // coffeeSpy = require('../coffee.js')();
        // spyOn(coffeeSpy, 'brew');   // set up spy

        coffeeSpy = jasmine.createSpyObj('coffeeSpy', ['brew']);

        // User = proxyquire('../user.js', { 'coffee': coffeeSpy }); // inject spy
        User = proxyquire('../user.js', { 'coffee': coffeeSpy });
        // User = require('../user.js');
    });

    it('ctos should set name property', function() {
        var myUser = new User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should brew "80" coffee.', function() {
        var myUser = new User('N');
        var result = myUser.brewCoffee();
        expect(result).toBe(80);
    });

    it('should call "coffee" with correct arguments', function() {
        var myUser = new User('N');

        var result = myUser.brewCoffee();
        expect(result).toBe(80);

        expect(coffeeSpy.brew).toHaveBeenCalled(); // assert spy
        expect(coffeeSpy.brew.calls.count()).toBe(1);
        expect(coffeeSpy.brew.calls.argsFor(0)).toEqual([8, 10]);
    });
});
