// remove event listeners (needs more work, the this binding makes it hard to compare callbacks)
const off = function( events: string, cb: Function ): Object {
	this.each(el => {
		return events.split(' ').forEach(ev => {
			return this.listeners.forEach(listener => {
				if ( ev !== listener.ev || !Object.is(cb, listener.cb) ) { return; }
				return el.removeEventListener( listener.ev, listener.cb );
			});
		});
	});

	return this;
}

export default off;
