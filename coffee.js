'use strict';

// no requires in this object

module.exports = function() {
    function brew(beans, water) {
        return beans * water;
    }

    return {
        brew: brew  // export stateless function
    };
};
