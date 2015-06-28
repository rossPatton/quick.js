'use strict';


/**
 * @module
 * @public
 * @TODO need to promote the better practice of putting evs on the body
 * @description attach event listeners to the selection
 * @param {string} [events] the event(s) to attach to the selection
 * @param {Function} [cb] the callback to attach to the selection
 * @returns {Object} [this] like most methods, returns parent object
 */
const on = function( events, cb ) {
	this.each( el => {
		return events.split( ' ' ).forEach( ev => {
			const l = {
				el: el,
				ev: ev,
				cb: cb
			};

			this.listeners.push( l );

			return el.addEventListener( l.ev, l.cb );
		} );
	} );

	return this;
};

module.exports = on;
