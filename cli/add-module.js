#!/usr/bin/env node
var path = require('path');
var args = process.argv.slice(2);
if (args.length) {

	var tiappDir = require('../lib/tiapp-dir');

	tiappDir(__dirname).then(rootPath => {
		console.log(rootPath);

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
