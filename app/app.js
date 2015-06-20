import methods from './methods/methods';
import queryAll from './utils/queryAll';

let proto = Object.create( methods );

let App = function(input) {
	this.listeners = this.listeners || [];
	this[0] = typeof input === 'string' ? queryAll(input) : TypeError('Quick needs a string!');

	if ( typeof App.fn === 'object' ) {
		for ( let method in App.fn ) {
			if ( App.fn.hasOwnProperty(method) ) {
				this.__proto__[method] = App.fn[method];
			}
		}
	}

	return this;
}.bind( proto || {} );

App.fn = typeof App.fn === 'undefined' ? {} : App.fn;

export default App;
