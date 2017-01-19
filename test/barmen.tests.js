var assert = require('assert');
var Barmen = require('../src/barmen');

// <ClassNameTests>.<Act>_<Arrange>_<Assert>
describe('BarmenTests', function () {
    it('pourMeWhisky_IAsk50Grams_IGotGlassWith50Gram', function () {

    });

    it('pourMeWhisky_IAsk200Grams_BarmenRejected', function () {

    });

    it('pourMeWhisky_IAmDrunked_BarmenRejected', function () {

    });
});

describe('When barmen pours whisky', function () {
    describe('I ask 50 gram', function () {
        it('he gives me a glass with 50 grams', function () {

        })
    });

    describe('I ask 200 gram', function () {
        it('barmen rejects', function () {

        })
    })
});

describe('I got 50 gram whisky', function () {
    let volumeInGlass = 50;

    it('I asked barmen for 50 grams', function () {
        assert.equal(50, volumeInGlass);
    });

    it('Invited friend and got free whisky', function () {
        assert.equal(50, volumeInGlass);
    });

    it('Friend ordered me a 50 gram whisky', function () {
        assert.equal(50, volumeInGlass);
    })
});

// BarmenShouldGiveWiskeyFor18Age
// arrange var bool: isViskeyWasGiven; var barmen; var age = 25
// act viskey = function('barmenGiveViskey');
// assert (viskey, true);
//
//
// BarmenShouldNOTGiveWiskeyForNOT18Age
// arrange var bool: isViskeyWasGiven; var barmen; var age = 17
// act viskey = function('barmenGiveViskey');
// assert (viskey, false)