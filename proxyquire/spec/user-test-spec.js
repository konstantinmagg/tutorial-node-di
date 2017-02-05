'use strict';

// Runs specs with "mock" dependencies

describe('"User" in "test" environment', function() {
    var proxyquire = require('proxyquire');
    var coffeeSpy;
    var user;

    beforeEach(function() {
        coffeeSpy = {
            brew: function() {
                return 2;
            }
        };

        user = proxyquire('../user', {
            './coffee': function() {
                return coffeeSpy;
            }
        })();

        spyOn(coffeeSpy, 'brew');
    });

    it('ctor should set name property', function() {
        var myUser = new user.User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should call "coffee" with correct arguments', function() {
        var myUser = new user.User('any');

        myUser.brewCoffee();

        expect(coffeeSpy.brew).toHaveBeenCalled(); // assert spy
        expect(coffeeSpy.brew.calls.count()).toBe(1);
        expect(coffeeSpy.brew.calls.argsFor(0)).toEqual([8, 10]);
    });

    it('should not call dependency behind mock', function() {
        var myUser = new user.User('N');
        var result = myUser.brewCoffee();
        expect(result).not.toBeDefined();
    });
});
