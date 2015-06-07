import camelCase from '../utils/camelCase';

const css = function( css: string | Object ): Object {
	const isString: boolean = typeof css === 'string';

	// set css values of passed in object on every element in the selection
	if ( !isString && typeof css === 'object' ) {
		for ( let key in css ) {
			if ( css.hasOwnProperty(key) ) {
				this.each(el => el.style[key] = css[key] );
			}
		}
	}

	// if getting, return the matching css value of the first item in the selection
	// if setting, set css values on entire selection and continue chaining
	return isString ? this[0][0].style[camelCase(css)] : this;
}

export default css;
