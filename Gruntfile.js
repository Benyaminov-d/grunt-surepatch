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
					auth_token: '5fb5eb96fe262ffba73b8edd10ba6564',
					project_token: 'XltWsn$DhopfiFBY',
				},
				filePath: 'package.json',
			}
		}
	});
	
	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['surepatch']);

	// // Project configuration.
	// grunt.initConfig({
	// 	jshint: {
	// 		all: [
	// 			'Gruntfile.js',
	// 			'tasks/*.js',
	// 			'<%= nodeunit.tests %>'
	// 		],
	// 		options: {
	// 			jshintrc: '.jshintrc'
	// 		}
	// 	},

	// 	// Before generating any new files, remove any previously-created files.
	// 	clean: {
	// 		tests: ['tmp']
	// 	},

	// 	// Configuration to be run (and then tested).
	// 	surepatch: {
	// 		default_options: {
	// 			options: {
	// 			},
	// 			files: {
	// 				'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
	// 			}
	// 		},
	// 		custom_options: {
	// 			options: {
	// 				separator: ': ',
	// 				punctuation: ' !!!'
	// 			},
	// 			files: {
	// 				'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
	// 			}
	// 		}
	// 	},

	// 	// Unit tests.
	// 	nodeunit: {
	// 		tests: ['test/*_test.js']
	// 	}

	// });

	// // Actually load this plugin's task(s).
	// grunt.loadTasks('tasks');

	// // These plugins provide necessary tasks.
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	// grunt.loadNpmTasks('grunt-contrib-clean');
	// grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// // Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// // plugin's task(s), then test the result.
	// grunt.registerTask('test', ['clean', 'surepatch', 'nodeunit']);

	// // By default, lint and run all tests.
	// grunt.registerTask('default', ['jshint', 'test']);

};
