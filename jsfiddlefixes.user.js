// ==UserScript==
// @name          jsFiddle Developer Fixes.
// @author        Robert Lemon
// @version       0.0.001
// @namespace     http://rlemon.com
// @description   Adds a bunch of new features/fixes to jsFiddle
// @include       http://jsfiddle.net/
// ==/UserScript==

/* Embed code on page */
function EmbedCodeOnPage(type, kode) {
	var elm = document.createElement(type);
	elm.textContent = kode;
	document.head.appendChild(elm);
}

/* Embed code on page and execute */
function EmbedFunctionOnPageAndExecute(fn) {
	EmbedCodeOnPage("script", "(" + fn.toString() + ")()");
}

/* Main */
EmbedFunctionOnPageAndExecute(function() {
	if( !mooshell.options.example_id) {
		var js_lib = document.getElementById('js_lib'); js_lib.selectedIndex = js_lib.querySelectorAll('option[value="11"]')[0].index;
		var js_wrap = document.getElementById('js_wrap'); js_wrap.selectedIndex = js_wrap.querySelectorAll('option[value="b"]')[0].index;
		mooshell.loadDependencies(js_lib.value);
	}
});
