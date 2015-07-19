module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            dist: {
                src: 'views/js/main.js',
                dest: 'views/js/main.min.js'
			}
		},
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
		cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/css',
                    ext: '.min.css'
                }]
            }
        },
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true,
					minifyJS: true,
					minifyCSS: true
				},
				files: {
					'index.html': 'index.unmin.html',
					'project-2048.html': 'project-2048.unmin.html',
					'project-webperf.html': 'project-webperf.unmin.html',
					'project-mobile.html': 'project-mobile.unmin.html',
					'views/pizza.html': 'views/pizza.unmin.html'					
				}
			},
			
		},
		watch: {
			uglify: {
				files: 'views/js/main.js',
				tasks: ['uglify']
			},
			htmlmin: {
				files: 'index.unmin.html',
				tasks: ['htmlmin']
			}
		}
	});
    grunt.registerTask('default', [
        'uglify',
        'cssmin',
		'htmlmin',
		'watch'
	])
}