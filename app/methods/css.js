'use strict';
const camelCase = require( '../utils/camelCase' );


/**
 * @module
 * @description gets or sets css properties on the selection
 * @param {Object | string} [styles] string for an individual style, object for many styles
 * @returns {Object | string} the matching style rule if getting, or the parent Object if setting
 */
const css = function( styles ) {
	const isString = typeof styles === 'string';

	// set css values of passed in object on every element in the selection
	if ( !isString && typeof styles === 'object' ) {
		this.each( el => {
			for ( let key in styles ) {
				if ( styles.hasOwnProperty( key ) ) {
					el.style[key] = styles[key];
				}
			}
		} );
	}

	// if getting, return the matching css value of the first item in the selection
	// if setting, set css values on entire selection and continue chaining
	return isString ? this[0][0].style[camelCase( styles )] : this;
};

module.exports = css;
