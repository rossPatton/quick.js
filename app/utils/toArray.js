/**
 * @description converts nodeLists (and other things) to arrays
 * (allows you to use array methods on them)
 * @param {object} [arrayLikeObject] [object to convert]
 * @return {array} [our NodeList is now an array so can use array methods on it]
 */
const toArray = function( arrayLikeObject ) {
	return Array.prototype.slice.call( arrayLikeObject );
};

module.exports = toArray;
