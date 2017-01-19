var assert = require('assert');
var Barmen = require('../src/barmen');

describe('when barmen pour whisky', function () {
    var barmen = {};

    beforeEach(function () {
        barmen = new Barmen();
    });

    // * <Arrange>.<Assert>
    describe('i ask 50 grams', function () {
        it('get 50 grams of whisky', function () {
            assert.equal(50, barmen.pour(50));
        });
    });

    //<Assert>.<Arrange>
    describe('I get 50 grams of whisky', function () {
        it('if barmen is free', function () {
            assert.equal(50, barmen.pour(50));
        });

        it('if I won a promo glass', function () {
            assert.equal(50, barmen.pour(50));
        });

        it('My friend ordered 50 grams to me', function () {
            assert.equal(50, barmen.pour(50));
        })
    });
});


// * When<Action>.<Arrange><Assert>
// * <Arrange>.<Assert>
// * <Assert>.<Arrange>
// * <ClassName>Should.<Act><Assert>
// * <ClassNameTests>.<Act>_<Arrange>_<Assert
