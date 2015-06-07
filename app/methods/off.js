// @TODO doesnt really work yet
const off = function( events: string, cb: Function ): Object {

	this.each(el => {
		return events.split(' ').forEach(ev => {
			return this.listeners.forEach(listener => {
				console.log( listener.cb );
				console.log( cb.bind(el) )
				console.log( listener.cb == cb.bind(el) );
				if ( ev !== listener.ev ) { return; }
				return el.removeEventListener( listener.ev, listener.cb );
			});
		});
	});

	return this;
}

export default off;
