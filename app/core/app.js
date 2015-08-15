/* @flow */
'use strict'

const proto: Object = require( './proto' )


// initialize the app
let App: Function = function( input: string, options: Object ): Object {
	this.listeners = this.listeners || []
	this.options = options || {}
	this.cache = this.cache || {}

	if ( typeof input === 'string' ) {
		this.sel = this.query( input )
	}

	return this
}.bind( Object.create( proto ) )

module.exports = App
