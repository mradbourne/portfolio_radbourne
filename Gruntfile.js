module.exports = function(grunt) {
  // 1. All configuration goes here 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   build: {
    //     src: 'js/build/production.js',
    //     dest: 'js/build/production.min.js'
    //   }
    // },

    // imagemin: {
    //   dynamic: {
    //     files: [{
    //       expand: true,
    //       cwd: 'images/',
    //       src: ['**/*.{png,jpg,gif}'],
    //       dest: 'images/build/'
    //     }]
    //   }
    // },
    parallel: {
      motherload: {
        options: {
          stream: true
        },
        tasks: [{
            grunt: true,
            args: ['shell:startharp']
          }, {
            grunt: true,
            args: ['watch']
        }]
      }
    },
    shell: {
      startharp: {
        command: 'harp server'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      scripts: {
        files: ['public/**'],
        tasks: []
      } 
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');  
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['parallel:motherload']);

};