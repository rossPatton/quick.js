import methods from './methods/methods';
import queryAll from './utils/queryAll';

let proto: Object = Object.create( methods );

let App: Function = function(input) {
	this[0] = typeof input === 'string' ? queryAll(input) : TypeError('Quick needs a string!');

	if ( typeof App.fn === 'object' ) {
		for ( let method in App.fn ) {
			if ( App.fn.hasOwnProperty(method) ) {
				if ( !this.__proto__[method] ) {
					this.__proto__[method] = App.fn[method];
				}
			}
		}
	}

	return this;
}.bind( proto || {} );

App.fn = typeof App.fn === 'undefined' ? {} : App.fn;
if ( window ) { window.$ = App; }
export default App;
