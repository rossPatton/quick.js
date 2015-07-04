'use strict';


/**
 * @module
 * @public
 * @description toggles classes (add or remove depending on context)
 * @param {string} [classes] the classes to toggle
 * @returns {Object} [this] like most methods, returns parent object
 */
const toggleClass = function( classes ) {
	console.log( document.body.innerHTML );
	console.log( 'classes: ', classes );
	this.each( el => {
		console.log( 'el.className: ', el.className );
		classes.split( ' ' ).forEach( c => {
			if ( el.className.indexOf( c ) === -1 ) {
				el.className += ` ${c}`;
			}
			else {
				el.className = el.className.replace( c, '' );
			}

			console.log( 'final el.className: ', el.className );
			console.log( 'first sel className: ', this[0][0].className );
		} );
	} );

	return this;
};

module.exports = toggleClass;
