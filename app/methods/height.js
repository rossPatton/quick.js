'use strict';


/**
 * @module
 * @public
 * @description gets or sets the height on an element or array of elements
 * @param {string} [val] if passed in, set the height to this value
 * @returns {number | Object} the height if getting, parent Object if setting
 */
const height = function( val ) {
	// set the height if a value was passed in
	if ( val ) {
		this.each( el => el.style.height = parseInt( val, 10 ) );
	}

	// if just getting the height, return the height
	// else if setting the height, set height above and keep chaining
	return !val ? this.sel[0].clientHeight : this;
};

module.exports = height;
