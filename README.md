lpnorm
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [_Lp_ norm](http://en.wikipedia.org/wiki/Norm_(mathematics)) of an array of values.


## Installation

``` bash
$ npm install compute-lpnorm
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lpnorm = require( 'compute-lpnorm' );
```

#### lpnorm( arr[, p] )

Computes the _p_-norm of an `array`, where `p` is an `integer` greater than `0`.

``` javascript
var data = [ 3, 1, 9, 4, 4, 2 ];

var len = lpnorm( data, 2 );
// returns ~11.2694
```

The default value of `p` is `2` (Euclidean norm).


#### Special Cases

* `p = 1`: the norm is the `L1`, or so-called [Taxicab norm](http://en.wikipedia.org/wiki/Norm_(mathematics)).

* `p = 2`: the norm is the `L2`, or [Euclidean norm](http://en.wikipedia.org/wiki/Norm_(mathematics)).

* `p = infinity`: the norm is the [maximum norm](http://en.wikipedia.org/wiki/Norm_(mathematics)).


## Examples

``` javascript
var lpnorm = require( 'compute-lpnorm' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes

__Warning__: Only specific _Lp_ norms properly consider overflow and underflow; i.e., _L1_, _L2_, and the infinity norms. In the general case, you may overflow for large values of `p`.


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-lpnorm.svg
[npm-url]: https://npmjs.org/package/compute-lpnorm

[travis-image]: http://img.shields.io/travis/compute-io/lpnorm/master.svg
[travis-url]: https://travis-ci.org/compute-io/lpnorm

[coveralls-image]: https://img.shields.io/coveralls/compute-io/lpnorm/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/lpnorm?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/lpnorm.svg
[dependencies-url]: https://david-dm.org/compute-io/lpnorm

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/lpnorm.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/lpnorm

[github-issues-image]: http://img.shields.io/github/issues/compute-io/lpnorm.svg
[github-issues-url]: https://github.com/compute-io/lpnorm/issues