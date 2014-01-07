require.config({
	paths: {
		jQuery : '/js/libs/jquery',
		Underscore : '/js/libs/underscore',
		Backbone : '/js/libs/backbone',
		text : '/js/libs/text',
		templates : '../templates'
	},

	shim : {
		'Backbone' : ['jQuery', 'Underscore'],
		'Empresta' : ['Backbone']
	}
});

require(['Empresta'], function(Empresta){
	Empresta.initialize();
})