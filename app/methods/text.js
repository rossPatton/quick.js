import toArray from '../utils/toArray';

// gets or sets text content of nodes
const text: Function = function( set: string ): Object {
	if ( typeof set === 'undefined' ) {
		let txt: string = '';

		for ( let dom of this[0] ) {
			txt += ` ${dom.textContent}`;
		}

		return txt;
	}

	for ( let dom of this[0] ) {
		if ( dom.nodeType === 1 || dom.nodeType === 11 || dom.nodeType === 9 ) {
			dom.textContent = set;
		}
	}

	return this;
};

export default text;
