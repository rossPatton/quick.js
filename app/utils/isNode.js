/**
 * @description sanity check to make sure we've got a dom node
 * @param {object} node [the object we're checking for node-ness]
 * @return {boolean}
 */
const isNode = function(node: Object): boolean {
	let isNode: boolean = false;

	if ( typeof node === 'object' &&
		node.nodeType && node.cloneNode &&
		( node.nodeType === 1 || node.nodeType === 3 ) ) {
		isNode = true;
	}

	return isNode;
};

export default isNode;
