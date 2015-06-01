import toArray from '../utils/toArray';

// gets or sets text content of nodes
const text: Function = function( set: string ): Object {
	let txt: string = '';

	if ( typeof set === 'undefined' ) {
		this.each( el => txt += ` ${el.textContent}` );
	}

	this.each(el => {
		if ( el.nodeType === 1 || el.nodeType === 11 || el.nodeType === 9 ) {
			el.textContent = set;
		}
	});

	// if just getting, we return the total txt
	// if setting, we set above and continue chaining
	return typeof set === 'undefined' ? txt : this;
};

export default text;
