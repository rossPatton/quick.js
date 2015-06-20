import toArray from '../utils/toArray';

// gets or sets (safely) html content of a dom node
// @TODO DOMParser is cool but def not the most compatible way of doing this
const html = function( set ) {
	this.empty();
	let html = toArray(
		( new DOMParser() ).parseFromString( set, 'text/html' ).body.children
	);

	this.each(el => {
		for ( let node of html ) {
			el.appendChild( node.cloneNode(true) );
		}
	});

	return set ? this[0][0].innerHTML : this;
};

export default html;
