/*
 * grunt-surepatch
 * surepatch.com
 *
 * Copyright (c) 2018 SurePatch.com
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		surepatch: {
			dist: {
				auth: {
					auth_token: '91e269d5418bda885a4de4022c2b1dbc',
					project_token: 'A$t+^fI%Jdj8ZaV8',
				},
				filePath: 'package.json',
			}
		}
	});
	
	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['surepatch']);
};
