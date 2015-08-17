/* @flow */
'use strict'


/**
 * @module
 * @public
 * @TODO getComputedStyle is slow but...
 * @description hide an element, while waiting for css transitions to finish
 * @param {Object} [el] the element to get duration from
 * @returns {boolean} true if element has duration more than 0s
 */
const hasDuration = function( el: Object ): boolean {
	return document.defaultView.getComputedStyle( el, null ).transitionDuration !== '0s'
}

module.exports = hasDuration
