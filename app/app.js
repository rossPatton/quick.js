import stampit from 'stampit';
import init from './core/init';
import cache from './core/cache';
import methods from './methods/methods';

let App = window.q = function(str) {
	return stampit().compose( cache, methods, init(str) ).create();
};

module.exports = App;
