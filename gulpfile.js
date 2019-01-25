var gulp = require('gulp');
const { task } = gulp;
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

const PORT = 8001;

task('server', function (done) {
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

task('client', function() {
    browserSync.init({
        server:{
            target: "localhost:" + PORT
        }
    });
});

task('default', ['server', 'client'], function(){
    gulp.watch("*.ejs").on('change', browserSync.reload({stream: true}));
});
