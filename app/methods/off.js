'use strict';


/**
 * @module
 * @public
 * @description remove event listeners (needs more work, the this binding makes it hard to compare callbacks)
 * @param {string} [events] the event(s) to remove from the selection
 * @param {Function} [cb] the callback to remove from the selection
 * @returns {Object} [this] like most methods, returns parent object
 */
const off = function( events, cb ) {
	this.each( el => {
		return events.split( ' ' ).forEach( ev => {
			return this.listeners.forEach( listener => {
				if ( ev !== listener.ev || !Object.is( cb, listener.cb ) ) {
					throw Error;
				}

				return el.removeEventListener( listener.ev, listener.cb );
			} );
		} );
	} );

	return this;
};

module.exports = off;
