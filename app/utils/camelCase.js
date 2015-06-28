'use strict';


/**
 * @module
 * @public
 * @description convert a lowercase-dash string to a camelCase string
 * @param {string} [str] the string to convert
 * @returns {string} the new camelCased string
 */
const camelCase = function( str ) {
	return str.replace( /-[a-z]/gi, s => s.replace( '-', '' ).toUpperCase() );
};

module.exports = camelCase;
