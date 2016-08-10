var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var cssnano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');

const SRC_PATH = 'src'; 
const BUILD_PATH = 'dist'; 

gulp.task('complieSCSS', function() {
    return gulp.src(SRC_PATH + '/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) 
        .pipe(postcss([ autoprefixer({ browsers: ['> 1% in CN'] }) ]))
        .pipe(gulp.dest(BUILD_PATH))
        .pipe(cssnano())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('complieJS', function() {
    return gulp.src(SRC_PATH + '/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(BUILD_PATH))
        .pipe(uglify())
        .pipe(rename(function (path) {
                path.basename += ".min";
            }))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('default', ['complieSCSS', 'complieJS'], function() {});