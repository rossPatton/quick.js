'use strict';
const query = require( './utils/query' );
const methods = require( './methods/methods' );

// initialize the app
let App = function( input ) {
	this.listeners = this.listeners || [];
	this.cache = this.cache || {};

	if ( typeof input === 'string' ) {
		this[0] = query( input ).sel;
	}

	return this;
}.bind( Object.create( methods ) );

if ( typeof window !== 'undefined' ) { window.$ = App; }
module.exports = App;
