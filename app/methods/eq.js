/* @flow */
'use strict'


/**
 * @module
 * @public
 * @description return specific item in selection, from beginning or from the end
				if pos is out of bounds, returns empty selection
 * @param {number} [pos] the index of the selection to retrieve
 * @returns {Object} [this] like most methods, returns parent object
 */
const eq = function( pos: number ): Object {
	if ( pos < this.sel.length ) {
		this.sel = [ this.sel[pos] ]
	}
	else {
		this.sel = []
	}

	return this
}

module.exports = eq
