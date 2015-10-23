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
    uglify: {
      dist: {
        files: {
          'dist/trello-card.min.js': ['dist/trello-card.js']
        }
      }
    },
    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/trello-card.css': 'lib/trello-card.scss'
        }
      }
    },
    watch: {
      js: {
        files: ['lib/*.js', 'lib/*.html'],
        tasks: ['browserify', 'uglify']
      },
      sass: {
        files: ['lib/*.scss'],
        tasks: ['sass']
      }
    },
    qunit: {
      all: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [
    'watch'
  ]);
  grunt.registerTask('test', [
    'qunit'
  ]);
};
