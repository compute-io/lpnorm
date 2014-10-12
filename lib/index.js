/**
*
*	COMPUTE: lpnorm
*
*
*	DESCRIPTION:
*		- Computes the Lp norm of an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var isInteger = require( 'validate.io-integer' ),
		l1norm = require( 'compute-l1norm' ),
		l2norm = require( 'compute-l2norm' ),
		linfnorm = require( 'compute-linfnorm' );


	// LPNORM //

	/**
	* FUNCTION: lpnorm( arr[, p] )
	*	Calculates the LP norm of an array of values.
	*
	* @param {Array} arr - array of values
	* @param {Number} [p] - norm
	* @returns {Number} LP norm
	*/
	function lpnorm( arr, p ) {
		var inf = Number.POSITIVE_INFINITY;
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'lpnorm()::invalid input argument. First argument must be an array.' );
		}
		if ( arguments.length === 1 ) {
			p = 2;
		} else if ( (!isInteger( p ) && p !== inf ) || p < 1 ) {
			throw new TypeError( 'lpnorm()::invalid input argument. Second argument should be a positive integer greater than 0.' );
		}
		if ( p === 1 ) {
			return l1norm( arr );
		}
		else if ( p === 2 ) {
			return l2norm( arr );
		}
		else if ( p === inf ) {
			return linfnorm( arr );
		}
		var len = arr.length,
			sum = 0,
			val;
		for ( var i = 0; i < len; i++ ) {
			val = arr[ i ];
			if ( val < 0 ) {
				val = -val;
			}
			sum += Math.pow( val, p );
		}
		return Math.pow( sum, 1/p );
	} // end FUNCTION lpnorm()


	// EXPORTS //

	module.exports = lpnorm;

})();