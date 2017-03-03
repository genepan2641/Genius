var gulp = require('gulp'),
  connect = require('gulp-connect'),
  gulpSass = require('gulp-sass');
 
gulp.task('webserver', function() {
  connect.server({livereload: true});
});

gulp.task('styles', function () {
    gulp.src('styles/scss/*.scss')    // 指定要處理的 Scss 檔案目錄
        .pipe(gulpSass()) 	        // 編譯 Scss
        .pipe(gulp.dest('styles/css'));  // 指定編譯後的 css 檔案目錄
});

gulp.task('html', function () {
  gulp.src('*.html')
      .pipe(connect.reload());
});
 
gulp.task('watch', function(){
	gulp.watch('styles/scss/*.scss', ['styles', 'html']);
	gulp.watch('*.html', ['html']);
});
gulp.task('default', ['webserver','styles','watch']);