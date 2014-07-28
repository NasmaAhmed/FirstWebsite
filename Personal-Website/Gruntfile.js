module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass:{
  	dist:{
  		files:{
  			'css/style.css':'style.scss'
  		}
  	}

  },
   autoprefixer: {
   	options:{
   		browsers: ['last 5 verision', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest:{
   		src:'css/main.css'
   	}
   },

   connect:{
   	server:{
   		options:{
   			port: 9001,
   			base:''
   		}
   	}

   },

   cssmin: {
       minify: {
         expand: true,
         cwd: 'css/',
         src: ['*.css', '!*.min.css'],
         dest: 'css/',
         ext: '.min.css'
       }
    },

    watch: {
    css: {
      files: 'css/*.scss',
      tasks: ['sass'],   
    }
  }

 });






grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-cssmin');
 // Default task(s).
 grunt.registerTask('default', ["connect","cssmin","sass","watch"]);
};

