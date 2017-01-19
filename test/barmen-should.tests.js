'use strict';

var assert = require('assert');
var Barmen = require('../src/barmen');

//<ClassName>Should.<Act><Assert>
describe('Barmen should', function () {
    describe('pour me 50 grams', function () {
        it('when I ask 50 grams', function () {
            let barmen = new Barmen();
            assert.equal(50, barmen.pour(50));
        })
    })
});