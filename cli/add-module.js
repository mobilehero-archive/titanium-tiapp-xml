#!/usr/bin/env node
var path = require('path');
var args = process.argv.slice(2);
if (args.length) {

	var tiappDir = require('../lib/tiapp-dir');

	tiappDir(__dirname).then(rootPath => {

		if (!rootPath) {
			console.error('Could not find tiapp.xml in directory tree: ' + __dirname);
			process.exit(1);
		}
		console.log('Adding module ' + args[0] + ' to ' + path.join(rootPath, 'tiapp.xml'));
		var tiapp = require('../lib/tiapp-xml').load(path.join(rootPath, 'tiapp.xml'));

		switch (args.length) {

			case 1:
				tiapp.setModule(args[0]);
				break;

			case 2:
				tiapp.setModule(args[0], { platform: args[1]  });
				break;

			default:
				tiapp.setModule(args[0], { platform: args[1], version: args[2]  });
				break;

		}

		tiapp.write();
	});

}
