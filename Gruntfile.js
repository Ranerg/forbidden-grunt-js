/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee:{
      compile:{
        files:{
          'scripts/application.js': 'coffee/application.coffee'
        }
      }
    },
    less:{
      compile:{
        files:{
          'public/styles/main.css': 'less/main.less'
        }
      }
    },
    watch:{
      options:{livereload:true},
      coffee:{
        files:'coffee/*.less',
        tasks:'coffee'
      },
      less:{
        files:'less/*.less',
        tasks:'less'
      },
     /* files:['coffee/*.coffee', 'less/*.less'],
      tasks:['coffee', 'less']
      */
    },
    express:{
      all:{
        options:{
          port:9000,
          hostname:'localhost',
          bases:['.'],
          livereload:true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default', ['coffee', 'less']);
  grunt.registerTask('server', ['express', 'watch']);
};
