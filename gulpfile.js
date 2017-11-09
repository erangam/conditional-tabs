// we only use gulp to deploy from travis to our digital ocean server
var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: '159.203.121.101',
            user: 'root',
            pass: 'j8912LKuuB$',
            remotePath: '/home/webroot/pearson-glp-platform'
        }));
});

