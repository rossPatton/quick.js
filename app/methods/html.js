import toArray from '../utils/toArray';

// gets or sets (safely) html content of a dom node
// @TODO DOMParser is cool but prolly not the most compatible way of doing this
const html: Function = function( set: string ): Object {
	this.empty();
	let html: Object = toArray( ( new DOMParser() ).parseFromString( set, 'text/html' ).body.children );

	this.each(el => {
		for ( let node of html ) {
			el.appendChild( node.cloneNode(true) );
		}
	});

	return set ? this[0][0].innerHTML : this;
};

export default html;
