var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	babel = require('gulp-babel'),
	clean = require('gulp-clean');




gulp.task('browserSync', function() {
browserSync({
server: {
baseDir: 'dest'},
})
});

gulp.task('css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dest/css/'));
});

gulp.task('babell', () =>
	gulp.src('src/js/script.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('dest/js'))
);

gulp.task('clean', function () {
	return gulp.src('dest/', {read: false})
		.pipe(clean());
});

gulp.task('copy_html', function() {
return gulp.src('src/**/*.html')
.pipe(gulp.dest('dest/'))
})

gulp.task('watch', ['browserSync', 'clean', 'copy_html', 'css', 'babell'], function (){
gulp.watch('src/css/**/*.css', ['css']);
gulp.watch('src/*.html', ['copy_html', browserSync.reload]);
gulp.watch('src/js/**/*.js', ['babell', browserSync.reload]);
});