'use strict';

//console.log('Hello world, Node.js');

var _react = require('react');

var _reactRedux = require('react-redux')

/*
function greet(name) {
	console.log(s + ', ' + name + 'l');
}

function greetAgain(name) {
	console.log(s + ', ' + name + ', ' + name);
}
*/

const reactClass = exports.reactClass = (class PoiPluginBot extends _react.Componet {
	 render() {
		 return _react.createElement(
		 'div',
		 null,
		 _react.createElement(
			'a',
			{herf:'https://www.baidu.com'},
			'poi~~'
	    	) 	
		 )
	 }
 });

