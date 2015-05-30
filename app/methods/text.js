import toArray from '../utils/toArray';

// gets or sets text content of nodes
const text: Function = function( set: string ): Object {
	if ( typeof set === 'undefined' ) {
		let txt: string = '';

		for ( let el of this[0] ) {
			txt += ` ${el.textContent}`;
		}

		return txt;
	}

	for ( let el of this[0] ) {
		if ( el.nodeType === 1 || el.nodeType === 11 || el.nodeType === 9 ) {
			el.textContent = set;
		}
	}

	return this;
};

export default text;
