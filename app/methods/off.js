// @TODO doesnt really work yet
const off = function( events: string, cb: Function, capture = false ): Object {
	this.each(el => {
		return events.split(' ').forEach(ev => {
			return el.removeEventListener( ev, cb.bind(el), capture );
		});
	})

	return this;
}

export default off;
