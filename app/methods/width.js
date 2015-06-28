'use strict';


/**
 * @module
 * @public
 * @description gets or sets the height on the selection
 * @param {string} [set] the value to set the width of the selection to
 * @returns {Object} [this] like most methods, returns parent object
 */
const width = function( set ) {
	this.each( el => el.style.width = `${set}` );
	return typeof set === 'undefined' ? this[0][0].clientWidth : this;
};

module.exports = width;
