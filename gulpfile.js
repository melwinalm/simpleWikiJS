var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

const PORT = 8001;

gulp.task('server', function (done) {
    nodemon({
        script: 'server.js',
        ext: 'html css ejs json',
        env: { 
            'NODE_ENV': 'development',
            'PORT': PORT
         },
        done: done
    })
})

gulp.task('client', function() {
    browserSync.init({
        server:{
            target: "localhost:" + PORT
        }  
    });
});

gulp.task('default', ['server', 'client'], function(){
    gulp.watch("*.ejs").on('change', browserSync.reload({stream: true}));
});
