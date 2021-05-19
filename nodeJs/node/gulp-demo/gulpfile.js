const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const less = require('gulp-less')
const csso = require('gulp-csso')
gulp.task('first', (cb) => {
    console.log('第一个任务')
    cb()
})
gulp.task('htmlmin', () => {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
})
gulp.task('cssmin', () => {
    return gulp.src(['./src/css/*.less', './src/css/*.css'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('copy', () => {
    return gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'))
    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'))
})
gulp.task('default', gulp.series('htmlmin', 'cssmin', 'copy', (cb) => {
    cb()
}))