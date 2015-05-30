import toArray from '../utils/toArray';

// gets or sets (safely) html content of a dom node
// @TODO DOMParser is cool but prolly not the most compatible way of doing this
const html: Function = function( set: string ): Object {
	if ( typeof set === 'undefined' ) {
		return this[0][0].innerHTML;
	}

	this.empty();
	let html: Object = toArray( ( new DOMParser() ).parseFromString( set, 'text/html' ).body.children );

	for ( let el of this[0] ) {
		for ( let node of html ) {
			el.appendChild( node.cloneNode(true) );
		}
	}

	return this;
};

export default html;
