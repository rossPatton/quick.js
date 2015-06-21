const camelCase = require( '../utils/camelCase' );

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
