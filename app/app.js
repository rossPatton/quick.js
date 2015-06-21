import methods from './methods/methods';
import queryAll from './utils/queryAll';

let proto = Object.create( methods );

let App = function( input ) {
	this.listeners = this.listeners || [];
	this[0] = typeof input === 'string' ? queryAll( input ) : new TypeError( 'Quick needs a string!' );

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
if ( window ) { window.$ = App; }

export default App;
