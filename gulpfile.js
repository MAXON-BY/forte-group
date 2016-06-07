var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    bourbon     = require('node-bourbon'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    browserSync = require('browser-sync'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename');

gulp.task('sass', function(){
    return gulp.src('app/sass/*.sass')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }).on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function(){
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'));

});

gulp.task('browser-sync', function(){
   browserSync({
       server:{
           baseDir: 'app'
       }
   })
});

gulp.task('default',['browser-sync','sass'], function(){
    gulp.watch('app/sass/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});