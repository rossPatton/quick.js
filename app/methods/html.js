import toArray from '../utils/toArray';

// gets or sets (safely) html content of a dom node
const html: Function = function( set: string ): Object {
	if ( typeof set === 'undefined' ) {
		return this[0][0].innerHTML;
	}

	this.empty();
	let html: Object = toArray( ( new DOMParser() ).parseFromString( set, 'text/html' ).body.children );

	for ( let dom of this[0] ) {
		for ( let node of html ) {
			dom.appendChild( node.cloneNode(true) );
		}
	}

	return this;
};

export default html;
