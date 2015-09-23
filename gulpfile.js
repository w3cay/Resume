var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
//CSS样式
gulp.task('style', function () {
      gulp.src('**.less')
        .pipe(less())
        .pipe(gulp.dest('src/'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/mini/'))
        .pipe(livereload());
});

//监视文件
gulp.task('watch', function () {
	livereload.listen();
    gulp.watch('**.less', ['style']);
});
// 默认任务
gulp.task('default', ['style','watch']);



