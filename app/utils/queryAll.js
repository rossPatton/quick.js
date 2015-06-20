import toArray from './toArray';


/**
 * @description save the result of a dom query
 * 	            this is accessible app wide, so you don't have to constantly
 * 	            do dom lookups for each thing every time a function is called
 * 	            also gives you an array, which is more usable than a nodelist
 * @see https://eamann.com/tech/selector-caching-jquery/
 * @param {string} [sel] [the string we'll use to get dom nodes]
 * @param {parent} [obj] [where to search]
 * @param {obj} [cache] [where to store the cache, defaults to this]
 * @param {bool} [bust] [if true, we ignore the cache and get it fresh]
 * @return {array} [our node list, as an array]
 */
const queryAll = function( sel, parent = document, cache = {}, bust = false ) {
	if ( bust === true ||
		typeof cache[`${parent}:sel`] === 'undefined' ) {
		cache[`${parent}:sel`] = toArray( parent.querySelectorAll( sel ) );
	}

	return cache[`${parent}:sel`];
};

export default queryAll;
