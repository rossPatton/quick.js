// @TODO needs to promote the better practice of putting evs on the body
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

export default on;
