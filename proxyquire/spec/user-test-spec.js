'use strict';

// Runs specs with "mock" dependencies

describe('"User" in "test" environment', function() {
    var proxyquire = require('proxyquire');
    var brew;
    var User;

    beforeEach(function() {
        brew = jasmine.createSpy('bew');

        // inject the mock as object or function
        User = proxyquire('../user', {
            './brew': brew
        });
    });

    it('ctor should set name property', function() {
        var myUser = new User('NAME');
        expect(myUser.name).toBe('NAME');
    });

    it('should call "coffee" with correct arguments', function() {
        var myUser = new User('any');
        myUser.brewCoffee();
        expect(brew).toHaveBeenCalled(); // assert spy
        expect(brew.calls.count()).toBe(1);
        expect(brew.calls.argsFor(0)).toEqual([8, 10]);
    });

    it('should not call dependency behind mock', function() {
        var myUser = new User('N');
        var result = myUser.brewCoffee();
        expect(result).not.toBeDefined();
    });
});
