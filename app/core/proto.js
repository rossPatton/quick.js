/* @flow */
'use strict'


const proto: Object = {
	add: require( '../methods/add' ),
	addClass: require( '../methods/addClass' ),
	after: require( '../methods/after' ),
	append: require( '../methods/append' ),
	attr: require( '../methods/attr' ),
	before: require( '../methods/before' ),
	camelCase: require( '../utils/camelCase' ),
	clear: require( '../methods/clear' ),
	css: require( '../methods/css' ),
	each: require( '../methods/each' ),
	empty: require( '../methods/empty' ),
	eq: require( '../methods/eq' ),
	extend: require( '../methods/extend' ),
	has: require( '../methods/has' ),
	hasClass: require( '../methods/hasClass' ),
	hasDuration: require( '../utils/hasDuration' ),
	height: require( '../methods/height' ),
	hide: require( '../methods/hide' ),
	html: require( '../methods/html' ),
	isNode: require( '../utils/isNode' ),
	off: require( '../methods/off' ),
	on: require( '../methods/on' ),
	prepend: require( '../methods/prepend' ),
	prop: require( '../methods/prop' ),
	query: require( '../utils/query' ),
	remove: require( '../methods/remove' ),
	removeClass: require( '../methods/removeClass' ),
	show: require( '../methods/show' ),
	size: require( '../methods/size' ),
	slice: require( '../methods/slice' ),
	text: require( '../methods/text' ),
	toArray: require( '../utils/toArray' ),
	toggleClass: require( '../methods/toggleClass' ),
	transition: require( '../utils/transition' ),
	width: require( '../methods/width' ),
	wrap: require( '../methods/wrap' )
}

module.exports = proto
