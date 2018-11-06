// we only use gulp to deploy from travis to our digital ocean server and perform minor tasks on npm install.
const gulp = require('gulp'),
    sftp = require('gulp-sftp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-ruby-sass'),
    exec = require('child_process').exec;

gulp.task('default', function () {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: '159.203.121.101',
            user: 'root',
            remotePath: '/home/webroot/tabs-test'
        }));
});

gulp.task('compile-scss', ['install-elements'], function () {
    return sass('./node_modules/elements-patternlab/pattern-lab/scss/platform.scss', {
        style: 'expanded',
        lineNumbers: true
    })
        .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('install-elements', function(cb) {
    exec('npm --prefix ./node_modules/elements-patternlab install ./node_modules/elements-patternlab', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('autoprefix',['compile-scss'], function () {
    const plugins = [
        autoprefixer({browsers: ['last 2 version', 'safari > 6', 'ie 11', 'opera 12.1', 'ios 6', 'android > 3','Firefox > 47']}),
    ];
    return gulp.src('./src/assets/css/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/assets/css'))
});


