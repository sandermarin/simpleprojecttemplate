module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'style/css/default.css' : 'style/sass/default.scss'
                }
            }
        },
        cssmin : {
            css:{
                src: 'style/css/default.css',
                dest: 'style/css/min/default.min.css'
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass','cssmin']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['watch']);
}