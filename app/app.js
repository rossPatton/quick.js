'use strict'
const proto = require( './proto' )

// initialize the app
let App = function( input ) {
	this.listeners = this.listeners || []

	if ( typeof input === 'string' ) {
		this.sel = this.query( input )
	}

	return this;
}.bind( Object.create( proto ) )

if ( typeof window !== 'undefined' ) { window.$ = App }
module.exports = App
