module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        uglify: {
            dist: {
                src: 'source/views/js/main.js',
                dest: 'dist/views/js/main.min.js'
			}
		},
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'source/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
		cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'source/views/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/views/css',
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
					'dist/index.html': 'source/index.unmin.html',
					'dist/project-2048.html': 'source/project-2048.unmin.html',
					'dist/project-webperf.html': 'source/project-webperf.unmin.html',
					'dist/project-mobile.html': 'source/project-mobile.unmin.html',
					'dist/views/pizza.html': 'source/views/pizza.unmin.html'					
				}
			},
			
		},
		watch: {
			uglify: {
				files: 'source/views/js/main.js',
				tasks: ['uglify']
			},
			htmlmin: {
				files: 'source/index.unmin.html',
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