// narrows the selection
const slice = function(pos1: number, pos2: number): Object {
	this[0] = this[0].slice(pos1, pos2);
	return this;
};

export default slice;
