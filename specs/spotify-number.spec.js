describe('Spotify.Number toString', function(){
	/*
  number.value = 123;
  this.assertEqual(number, 'one hundred and twenty three');
  number.value = 300;
  this.assertEqual(number, 'three hundred');
  number.value = 1234;
  this.assertEqual(number, 'one thousand, two hundred and thirty four');
  number.value = 1000;
  this.assertEqual(number, 'one thousand');
	*/
	var number;
	beforeAll(function(){
		number = new Spotify.Number(0);
	});

	it ('should return five for 5 value', function(){
		number.value = 5;
		expect(number.toString()).toEqual('five');
	});

	it ('should return thirty seven for 37 value', function(){
		number.value = 37;
		expect(number.toString()).toEqual('thirty seven');
	});

	it ('should return fifteen for 15 value', function(){
		number.value = 15;
		expect(number.toString()).toEqual('fifteen');
	});

	it ('should return twenty for 20 value', function(){
		number.value = 20;
		expect(number.toString()).toEqual('twenty');
	});

	it ('should return one hundred and twenty three for 123 value', function(){
		number.value = 123;
		expect(number.toString()).toEqual('one hundred and twenty three');
	});

	it ('should return three hundred for 300 value', function(){
		number.value = 300;
		expect(number.toString()).toEqual('three hundred');
	});

	it ('should return one thousand two hundred and thirty four for 1234 value', function(){
		number.value = 1234;
		expect(number.toString()).toEqual('one thousand, two hundred and thirty four');
	});

	it ('should return five thousand for 5000 value', function(){
		number.value = 5000;
		expect(number.toString()).toEqual('five thousand');
	});

	it ('should return ninety nine for 99 value', function(){
		number.value = 99;
		expect(number.toString()).toEqual('ninety nine');
	});

	it ('should return three hundred and ten for 310 value', function(){
		number.value = 310;
		expect(number.toString()).toEqual('three hundred and ten');
	});

	it ('should return one thousand, five hundred and one for 1501 value', function(){
		number.value = 1501;
		expect(number.toString()).toEqual('one thousand, five hundred and one');
	});

	it ('should return twelve thousand, six hundred and nine for 12609 value', function(){
		number.value = 12609;
		expect(number.toString()).toEqual('twelve thousand, six hundred and nine');
	});

	it ('should return five hundred and twelve thousand, six hundred and seven for 512607 value', function(){
		number.value = 512607;
		expect(number.toString()).toEqual('five hundred and twelve thousand, six hundred and seven');
	});
});