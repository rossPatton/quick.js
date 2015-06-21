const query = require( './utils/query' );
const methods = require( './methods/methods' );
let proto = Object.create( methods );

// initialize the app
let App = function( input ) {
	this.listeners = this.listeners || [];
	this[0] = typeof input === 'string' ? query( input ) : new TypeError( 'Quick needs a string!' );

	if ( typeof App.fn === 'object' ) {
		for ( let method in App.fn ) {
			if ( App.fn.hasOwnProperty( method ) ) {
				Object.getPrototypeOf( this )[method] = App.fn[method];
			}
		}
	}

	return this;
}.bind( proto || {} );

App.fn = typeof App.fn === 'undefined' ? {} : App.fn;

// pretty much just for testing atm
if ( typeof window !== 'undefined' ) { window.$ = App; }

module.exports = App;
