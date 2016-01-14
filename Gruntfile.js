'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Metadata.

    pkg: require('./package.json'),

    banner: '/*!\n' +
      ' * <%= pkg.title || pkg.name %>\n' +
      ' * <%= pkg.description %>\n' +
      ' * Copyright (c) 2016<%= (new Date()).getFullYear() > 2016 ? "-" + grunt.template.today("yyyy") : "" %> <%= pkg.author.name %>\n' +
      ' * Licensed <%= pkg.license %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * v<%= pkg.version %>\n' +
      ' */\n',


    // Task configuration.

    env: {
      options: {
        
      },
      dev: {
        NODE_ENV: 'development'
      },
      travis: {
        NODE_ENV: 'production'
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      src: {
        src: ['index.js', 'src/**/*.js', 'lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },

    browserify: {
      options: {
        banner: '<%= banner %>',
        browserifyOptions: {
          standalone: '<%= pkg.name %>'
        }
      },
      dist: {
        src:  ['index.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        report: 'min'
      },
      minjs: {
        options: {
          preserveComments: function(node, comment) {
            return comment &&
              comment.type === 'comment2' &&
              /^(!|\*!)\r?\n/.test(comment.value);
          },
          sourceMap: true,
          sourceMapName: function(dest) {
            return dest.replace('.min.js', '.min.map');
          },
          // Bundles the contents of "`src`" into the "`dest`.map" source map file. This way,
          // consumers only need to host the "*.min.js" and "*.min.map" files rather than
          // needing to host all three files: "*.js", "*.min.js", and "*.min.map".
          sourceMapIncludeSources: true
        },
        src: '<%= browserify.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    mochacov: {
      options: {
        files: ['test/**/*.spec.js']
      },
      test: {
        options: {
          reporter: 'spec'
        }
      },
      /*
        NOTE: The `htmlcov` task is only here for IF you need/want to view the
        coverage result details! To do so, run `grunt showcoverage`
      */
      htmlcov: {
        options: {
          reporter: 'html-cov',
          output: 'coverage/index.html'
        }
      },
      coverage: {
        options: {
          reporter: 'travis-cov'
        }
      },
      coveralls: {
        options: {
          coveralls: true
        }
      }
    },

    open: {
      /*
        NOTE: The `htmlcov` task is only here for IF you need/want to view the
        coverage result details! To do so, run `grunt showcoverage`
      */
      htmlcov: {
        path: '<%= mochacov.htmlcov.options.output %>',
        app: 'Google Chrome'
      }
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-mocha-cov');
  grunt.loadNpmTasks('grunt-open');


  // Core validation task list.
  grunt.registerTask('validate', ['jshint', 'mochacov:test', 'mochacov:coverage']);

  // Default task.
  grunt.registerTask('default', ['env:dev', 'validate', 'browserify', 'uglify']);

  // Travis CI task.
  grunt.registerTask('travis', ['env:travis', 'validate', 'mochacov:coveralls']);

  // Special task to view HTML coverage results locally.
  grunt.registerTask('showcoverage', ['env:dev', 'mochacov:htmlcov', 'open:htmlcov']);

};
