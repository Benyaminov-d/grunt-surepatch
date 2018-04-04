# grunt-surepatch

> helps you secure your most valuable systems and data

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-surepatch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-surepatch');
```

## The "surepatch" task

### Overview
In your project's Gruntfile, add a section named `surepatch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
		surepatch: {
			dist: {
				auth: {
					auth_token: 'Your user token from SurePatch',
					project_token: 'Your project token from SurePatch',
				},
				filePath: 'path-to-file'
				//
			}
		}
});
```

### Dist

#### Dist.auth
Type: `Object`

Object with your auth credentials for SurePatch.

#### Dist.filePath
Type: `String`

Path to file with your dependencies.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
