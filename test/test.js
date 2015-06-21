/* globals it, describe */

'use strict';

var fs = require( 'fs' );
var testHTML = fs.readFileSync( process.cwd() + '/testHTML/index.html' ).toString();
var assert = require( 'assert' );
var jsdom = require('mocha-jsdom');
// var should = require( 'chai' ).should();
// var sinon = require( 'sinon' );

require( 'babel/register' );
var $ = require( '../app/app' );

describe( 'test main app object', function() {

	jsdom();

	it( 'app should be an object', function() {
		assert.equal( typeof $( 'div' ), 'object' );
	} );
} );
