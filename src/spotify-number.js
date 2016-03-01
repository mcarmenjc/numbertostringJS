var Spotify = Spotify || {};

Spotify.Number = function(value) {
  this.value = value;
};

Spotify.Number.prototype.toString = function() {
	var numbersMap = {
			units: {
				0: 'zero',
				1: 'one',
				2: 'two',
				3: 'three',
				4: 'four',
				5: 'five',
				6: 'six',
				7: 'seven',
				8: 'eight',
				9: 'nine'
			},
			tens: {
				10: 'ten',
				11: 'eleven',
				12: 'twelve',
				13: 'thirteen',
				14: 'fourteen',
				15: 'fifteen',
				16: 'sixteen',
				17: 'seventeen',
				18: 'eighteen',
				19: 'nineteen',
				2: 'twenty',
				3: 'thirty',
				4: 'fourty',
				5: 'fifty',
				6: 'sixty',
				7: 'seventy',
				8: 'eighty',
				9: 'ninety'
			}
		},
		numberString = '';

	function printUnitAndTens(tens){
		var tensString = '';
		if (tens < 10){
			return numbersMap.units[tens];
		}
		if (tens < 20){
			return numbersMap.tens[tens];
		}
		tensString = numbersMap.tens[Math.floor(tens/10)];
		if (tens%10 !== 0) {
			tensString = tensString + ' ' + numbersMap.units[tens%10];
		}
		return tensString;
	}

	function printHundreds(hundreds){
		var hundredsString = '';
		if (Math.floor(hundreds/100) === 0){
			return printUnitAndTens(hundreds%100);
		}

		hundredsString = numbersMap.units[Math.floor(hundreds/100)] + ' hundred';	
		if (hundreds % 100 !== 0){
			hundredsString = hundredsString + ' and ' + printUnitAndTens(hundreds%100);
		}
		return hundredsString;
	}

	if (this.value >= 1000){
		numberString = printHundreds(Math.floor(this.value/1000)) + ' thousand';
		if (this.value % 1000 !== 0){
			numberString = numberString + ', ';
		}
	}
	if (this.value % 1000 !== 0){
		numberString = numberString + printHundreds(this.value%1000);
	}
	return numberString;
};