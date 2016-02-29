module.exports = function(grunt) {
  grunt.initConfig({
    jasmine : {
      src : 'src/*.js',
      options: {
        specs : 'specs/*.spec.js'
      }
    },
    watch: {
      js: {
        files: ['src/*.js', 'specs/*.spec.js'],
        tasks: ['jasmine']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'jasmine');
};