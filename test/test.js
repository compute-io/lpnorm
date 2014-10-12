
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	lpnorm = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-lpnorm', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( lpnorm ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				true,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				lpnorm( value );
			};
		}
	});

	it( 'should throw an error if the norm is not a positive integer', function test() {
		var values = [
				'5',
				-5,
				0,
				1.234,
				null,
				undefined,
				NaN,
				true,
				{},
				function(){}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				lpnorm( [], value );
			};
		}
	});

	it( 'should return the L1 norm', function test() {
		var data, expected;

		data = [ 3, -4 ];
		expected = 7;

		assert.strictEqual( lpnorm( data, 1 ), expected );
	});

	it( 'should return the L2 norm', function test() {
		var data, d, sum, expected;

		data = [ 3, 4, 20, -10, 0 ];
		sum = 0;
		for ( var i = 0; i < data.length; i++ ) {
			d = data[ i ];
			sum += d * d;
		}
		expected = Math.sqrt( sum );

		assert.strictEqual( lpnorm( data, 2 ), expected );
	});

	it( 'should return the maximum norm', function test() {
		var data,
			expected,
			p;

		p = Number.POSITIVE_INFINITY;
		data = [ 3, 4, -20, -10, 0 ];
		expected = 20;

		assert.strictEqual( lpnorm( data, p ), expected );
	});

	it( 'should return the Lp norm', function test() {
		var data,
			expected,
			p;

		p = 5;
		data = [ 3, -4 ];
		expected = Math.pow( Math.pow(data[0], p) + Math.pow( -data[1], p), 1/p );

		assert.strictEqual( lpnorm( data, 5 ), expected );
	});

});