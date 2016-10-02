module.exports = function(grunt) {
    
    
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'), //locate the package.json file, read it.
        watch: {
            css: {
                files: '**/*.scss', // any .scss file
                tasks: ['sass'] // run the sass task
            } //css task
        } //watch for changes
    }); //Configuration settings for Grunt
    
    
    grunt.loadNPMTasks('grunt-contrib-watch'); // Load the watch task runner
    grunt.registerTask('default', ['watch']); //set default task to "watch" task
    
} //Main Function