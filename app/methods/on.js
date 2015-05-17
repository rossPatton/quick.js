const on = function( events: string, cb: Function, capture = false ) {
	if ( typeof events !== 'string' ) {
		throw TypeError('on requires a string');
	}

	const eventsArr = events.split(' ');
	const sLen = this.selection.length;
	const eLen = events.length;

	// 1 for each selection
	// 2 for each event
	for ( let i = 0; i < sLen; i++ ) { // 1
		for ( let j = 0; j < eLen; j++ ) { // 2
			this.selection[i].addEventListener( eventsArr[j], cb.bind(this.selection[i]), capture );
		}
	}

	return this;
}

export default on;
