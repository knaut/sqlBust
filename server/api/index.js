'use strict';

exports.plugin = {
	pkg: {
		name: 'index-route',
		version: '1.0.0'
	},
	register: function(server, options, next) {
		
		server.route({
			method: 'GET',
			path: '/',
			options: {
				plugins: {
					lout: false
				},
				handler: function(request, h) {
					return h.file('./build/index.html');
				}
			}
		});

	}
};