// @TODO needs to promote the better practice of putting evs on the body
const on = function( events: string, cb: Function, capture = false ): Object {
	this.each(el => {
		return events.split(' ').forEach(ev => {
			return el.addEventListener( ev, cb.bind(el), capture );
		});
	});

	return this;
}

export default on;
