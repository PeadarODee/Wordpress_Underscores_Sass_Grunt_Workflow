module.exports = function (grunt) {
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'), 
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                }, 
                
                files: {
                    'style-human.css' : 'sass/style.scss'
                } 
            }, 
            
            dist: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
                },
            
            files: {
                'style.css' : 'sass/style.scss'
                }
            } 
        }, 
        
        watch: {
            css: {
                files: '**/*.scss', 
                tasks: ['sass'] 
            } 
        } 
    }); 
    
    grunt.loadNpmTasks('grunt-contrib-sass'); 
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.registerTask('default', ['watch']); 
} 