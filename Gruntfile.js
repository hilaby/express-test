module.exports = function(grunt) {
    grunt.initConfig({
        // compass: {
        //     main: {
        //         options: {
        //             config: 'config.rb'
        //         }
        //     }
        // },
        watch: {
            options: {
                livereload: false,
            },
            express: {
                files: [
                    './app.js',
                    './routes/*.js'
                ],
                tasks: ['express:dev', 'delay'], //, 'delay'
                options: {
                    event: ['changed'],
                    spawn: false,
                    interrupt: true,
                    livereload: false
                }
            }
        },
        express: {
            dev:{
                options: {
                    script: './bin/www',
                    livereload: false,
                    background: true
                }
            },
            live: {
                options: {
                    script: './bin/www',
                    livereload: false,
                    background: false
                }
            }
        },
    });

    grunt.registerTask('delay', 'Delay for express restart', function() {
        setTimeout(this.async(), 800);
    });

    // grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('web', ['express:live']);
    grunt.registerTask('default', ['express:dev','watch']);
};