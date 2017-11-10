// we only use gulp to deploy from travis to our digital ocean server
const gulp = require('gulp'),
    sftp = require('gulp-sftp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-ruby-sass');

gulp.task('default', function () {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: '159.203.121.101',
            user: 'root',
            pass: 'j8912LKuuB$',
            remotePath: '/home/webroot/pearson-glp-platform'
        }));
});

gulp.task('compile-scss', function () {
    return sass('./node_modules/elements-patternlab/pattern-lab/scss/platform.scss', {
        style: 'expanded',
        lineNumbers: true
    })
        .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('autoprefix',['compile-scss'], function () {
    const plugins = [
        autoprefixer({browsers: ['last 2 version', 'safari > 6', 'ie 11', 'opera 12.1', 'ios 6', 'android > 3','Firefox > 47']}),
    ];
    return gulp.src('./src/assets/css/style.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./src/assets/css'))
});


