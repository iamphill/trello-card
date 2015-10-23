module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'dist/trello-card.js': ['lib/trello-card.js']
        },
        options: {
          transform: ['babelify', 'stringify']
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/trello-card.css': 'lib/trello-card.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['lib/*.js', 'lib/*.html'],
        tasks: ['browserify']
      },
      sass: {
        files: ['lib/*.scss'],
        tasks: ['sass']
      }
    },
    qunit: {
      all: ['test/**.html']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [
    'watch'
  ]);
  grunt.registerTask('test', [
    'qunit'
  ]);
};
