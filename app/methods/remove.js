// gets or sets (safely) html content of a dom node
const remove: Function = function(): void {
	for ( let dom of this[0] ) {
		dom.parentNode.removeChild( dom );
	}
	return this;
};

export default remove;
