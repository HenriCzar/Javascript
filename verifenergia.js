(function inicio(win,doc){
	'use strict';
	navigator.getBattery().then(function(bateria) {
	let bool = bateria.charging;
	console.log((bool == true ? 'SIM' : 'NAO')); 

	});
	
})(window, document);