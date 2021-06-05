const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const less = require('gulp-less')
gulp.task('first', (cb) => {
    console.log('第一个gulp任务执行了')
    gulp.src('./src/css/article.css')
        .pipe(gulp.dest('dist/css'))
    cb()
})
gulp.task('htmlmin', () => {
    console.log('第二个gulp任务执行了')
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))

})
gulp.task('cssmin', () => {
    return gulp.src('./src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
})
gulp.task('default', gulp.series('first', 'htmlmin', 'cssmin', (cb) => {
    cb()
}))