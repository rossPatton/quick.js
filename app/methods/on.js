// @TODO needs to promote the better practice of putting evs on the body
const on = function( events: string, cb: Function, capture = false ): Object {
	this.each(el => {
		return events.split(' ').forEach(ev => {
			const l: Object = {
				el: el,
				ev: ev,
				cb: cb.bind(el)
			}

			this.listeners.push(l);

			return el.addEventListener( l.ev, l.cb );
		});
	});

	return this;
}

export default on;
