const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const babel = require('gulp-babel');
gulp.task('first', (cb) => {
	console.log('第一个gulp执行了');
	console.log('第二个gulp执行了');
	cb();
})
gulp.task('two',(cb)=> {
	console.log('执行不了');
	cb();
})
gulp.task('htmlmin',(cb) => {
	gulp.src('./src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('dist'));
	cb();

})
gulp.task('cssmin',(cb) => {
	gulp.src('./src/css/*.css')
		.pipe(csso())
		.pipe(gulp.dest('dist/css'));
		cb();
})
gulp.task('jsmin',(cb)=> {
	gulp.src('./src/js/*.js')
		.pipe(babel({
            presets: ['@babel/env']
        }))
		.pipe(gulp.dest('dist/js'));
		cb();
})
gulp.task('copy',(cb)=>{
	gulp.src('./src/images/*')
		.pipe(gulp.dest('dist/images'));

	gulp.src('./src/lib/*')
		.pipe(gulp.dest('dist/lib'))
		cb();
})
gulp.task('default',gulp.series('htmlmin','cssmin','jsmin','copy',(cb) => {
    // Do something after a,b, and c are finished.
    cb();
}));
