/**
 * Tasks
 *
 *  - Implement the Spotify.Number object, that contains
 *  the function toString that spell out a number.
 *
 *  - Extend the unit testing object (Spotify.UnitTesting),
 *  implementing specific tests in charge of checking the
 *  functionality.
 *
 *  For example:
 *      99 --> ninety nine
 *     300 --> three hundred
 *     310 --> three hundred and ten
 *    1501 --> one thousand, five hundred and one
 *   12609 --> twelve thousand, six hundred and nine
 *  512607 --> five hundred and twelve thousand, six hundred and seven
 *
 *  Therefore:
 *    var number = new Spotify.Number(99);
 *    print(number) => 'ninety nine'
 *
 *    var testSuite = new Spotify.NumberTesting();
 *    testSuite.run();
 */

// Define the Spotify namespace
var Spotify = Spotify || {};

/******************************************************************************
 * @class Spotify.Number
 * @constructor
 */
Spotify.Number = function(value) {
  this.value = value;
};

/**
 * @method toString
 * @public
 */
Spotify.Number.prototype.toString = function() {
  // TODO: Implement the method that returns a string based on the value.
  // e.g. 99 => 'ninety nine'
  var translation = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    },
      bigNumbersTranslation = {
        1: 'hundred',
        2: 'thousand'
      },
      newValue,
      numberString,
      bigNumberIterator = 0;
  
  function getStringNumber0to99(valueToConvert){
    var tensTranslation = {
          2: 'twenty',
          3: 'thirty',
          4: 'forty',
          5: 'fifty',
          6: 'sixty',
          7: 'seventy',
          8: 'eighty',
          9: 'ninety'
        },
        tens = Math.floor(valueToConvert / 10),
        units = valueToConvert,
        numberString = '';

    if (tens > 1){
      numberString = tensTranslation[tens];
      units = units % 10;
      if (units !== 0){
        numberString = numberString + ' ';
      }
    }

    if (tens > 1 && units !== 0 || tens <= 1){
      numberString = numberString + translation[units]; 
    }

    return numberString;  
  }
  
  newValue = Math.floor(this.value/100);
  numberString = getStringNumber0to99(this.value%100);
  if (this.value < 100){
    return numberString;
  }
  
  bigNumberIterator = 1;
  
  if (this.value % 1000 === 0){
    return translation[Math.floor(this.value/1000)] + ' ' + bigNumbersTranslation[2];
  }
  
  if (this.value % 100 === 0){
    return translation[Math.floor(this.value/100)] + ' ' + bigNumbersTranslation[1];
  }
  
  while(newValue !== 0){
    var partNumberString = '',
        separator = ', ';
    if (newValue%10 !== 0){
      partNumberString = translation[newValue%10] + ' ' + bigNumbersTranslation[bigNumberIterator];
    }
    if (bigNumberIterator === 1){
      separator = ' and ';
    }
    numberString = partNumberString + separator + numberString;
    newValue = Math.floor(newValue / 10);
    bigNumberIterator ++;
  }
  
  return numberString;
};

/******************************************************************************
 * @class Spotify.UnitTesting
 * @constructor
 */
Spotify.UnitTesting = function() {
  this._passed = 0;
  this._failed = 0;
  this._result = 'Tests running: ';
};

/**
 * @param {Boolean} statement
 * @return {Boolean}
 */
Spotify.UnitTesting.prototype.assert = function(statement) {
  if (statement) {
    this._passed++;
    this._result += '.';
  } else {
    this._failed++;
    this._result += 'F';
  }
  return !!statement;
};

/**
 * @param {Object} a
 * @param {Object} b
 * @return {Boolean}
 */
Spotify.UnitTesting.prototype.assertEqual = function(a, b) {
  if (!this.assert(a == b)) {
    console.error('[ERROR] "' + a + '" is not the same as "' + b + '"');
  }
};xxxx

/**
 * @method showResults
 * @public
 */
Spotify.UnitTesting.prototype.showResults = function() {
  console.log(this._result);
  console.log(this._passed + ' tests passed, ' + this._failed + ' failed');
};

/** 
 * @method run
 * @public
 */
Spotify.UnitTesting.prototype.run = function() {
  // TODO: Implement number testing object
  // Example of one of the tests;
  // var number = new Spotify.Number(99);
  // this.assertEqual(number, 'ninety nine');
  var number = new Spotify.Number(5);
  this.assertEqual(number, 'five');
  number.value = 37;
  this.assertEqual(number, 'thirty seven');
  number.value = 15;
  this.assertEqual(number, 'fifteen');
  number.value = 20;
  this.assertEqual(number, 'twenty');
  number.value = 123;
  this.assertEqual(number, 'one hundred and twenty three');
  number.value = 300;
  this.assertEqual(number, 'three hundred');
  number.value = 1234;
  this.assertEqual(number, 'one thousand, two hundred and thirty four');
  number.value = 1000;
  this.assertEqual(number, 'one thousand');

  this.showResults();
};

// Execute the test suite
var suite = new Spotify.UnitTesting();
suite.run();