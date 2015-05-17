import stampit from 'stampit';
import init from '../core/init';
import methods from './methods';

const setFn = function( fns ) {
	let newMethods = stampit().methods(fns);
	return stampit().compose( cache, methods, newMethods, init(arguments) ).create();
};

export default setFn;


// for ( let method in newMethods ) {
// 	if ( newMethods.hasOwnProperty( method ) && typeof method === 'function' ) {
// 		this.__proto__.fn[method] = method;
// 	}
// }
