var gulp = require('gulp');
const { task } = gulp;
var nodemon = require('gulp-nodemon');

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

task('validate', function(done){
    nodemon({
        script: 'validate.js',
        ext: 'json',
        done: done
    })
})
