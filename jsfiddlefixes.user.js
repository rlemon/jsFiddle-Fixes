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
	
	/******************
	 * DEFAULT VALUES
	 * ***************/
	/* check to see if the fiddle is new or not. We don't want to change the values for existing fiddles. */
	if( !mooshell.options.example_id) {
		
		/* get the select menus */
		var js_lib = document.getElementById('js_lib'),
		js_wrap = document.getElementById('js_wrap');
		
		/* change the select menus */
		js_lib.selectedIndex = js_lib.querySelectorAll('option[value="11"]')[0].index;
		js_wrap.selectedIndex = js_wrap.querySelectorAll('option[value="b"]')[0].index;
		
		/* trigger the dependency load */
		mooshell.loadDependencies(js_lib.value);
	}
	
});
