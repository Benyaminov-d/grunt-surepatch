/*
 * grunt-surepatch
 * surepatch.com
 *
 * Copyright (c) 2018 SurePatch.com
 * Licensed under the MIT license.
 */

'use strict';
var request = require('request');

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('surepatch', 'browsing current directory to check vulnerable components', function() {
		var done = this.async();
		var auth = this.data.auth;
		var path = this.data.filePath;

		if (!path) {
			grunt.log.error('Unable to locate requirements');
			grunt.fail.fatal('Wrong path to file with requirements', 400);
		}

		if (!auth.auth_token || !auth.project_token) {
			grunt.log.error("Auth credentials doesn't specified");
			grunt.fail.fatal("Wrong initConfig for grunt-surepatch", 400);
		}

		var file = JSON.parse(grunt.file.read(path, {}));

		request.post({url:'https://localhost:5555/api/taskrunners/components', rejectUnauthorized: false, form: {file: file, credentials: auth}}, function(err, httpResponse, body) {
			if (err) {
				grunt.log.error(err);
				grunt.fail.fatal('Request failed', err.status || 400);
			} else {
				var response = JSON.parse(body);
				if (response.status === 400) {
					grunt.log.error(response.type);
					grunt.fail.fatal('Request failed', response.status || 400);
				} else {
					grunt.log.ok(response.type || response);
				}
			}
			done();
		});
	});
};
