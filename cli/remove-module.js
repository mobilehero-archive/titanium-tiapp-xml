#!/usr/bin/env node
var path = require('path');
var args = process.argv.slice(2);
if (args.length) {

	var tiappDir = require('../lib/tiapp-dir');

	tiappDir(__dirname).then(rootPath => {

		console.log('Removing module ' + args[0] + ' from ' + path.join(rootPath, 'tiapp.xml'));
		var tiapp = require('../lib/tiapp-xml').load(path.join(rootPath, 'tiapp.xml'));

		switch (args.length) {

			case 1:
				tiapp.removeModule(args[0]);
				tiapp.removeModule(args[0], 'android');
				tiapp.removeModule(args[0], 'ios');
				break;

			case 2:
				tiapp.removeModule(args[0], args[1]);
				break;

			default:
				tiapp.removeModule(args[0], args[1], args[2]);
				break;

		}

		tiapp.write();
	});

}
