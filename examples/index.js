var lpnorm = require( './../lib' );

var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}

// Compute the L1 norm:
console.log( 'L1: %d', lpnorm( data, 1 ) );

// Compute the L2 norm:
console.log( 'L2: %d', lpnorm( data, 2 ) );

// Compute the L10 norm:
console.log( 'L10: %d', lpnorm( data, 10 ) );

// Compute the maximum norm:
console.log( 'Sup: %d', lpnorm( data, Number.POSITIVE_INFINITY ) );