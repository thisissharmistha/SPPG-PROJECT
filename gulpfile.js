//list dependencies
const { src, dest, watch, series } = require('gulp');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');

// create functions

//css
function minifycss() {
  return src("src/css/*.css")
    .pipe(minify())
    .pipe(prefix('last 2 versions'))
    .pipe(dest("dist/css"));
};

//js
function jsmin() {
  return src("src/JS/*.js")
    .pipe(terser())
    .pipe(dest("dist/js"));
};


//create watchtask
function watchTask() {
  watch("src/css/*.css", minifycss);
  watch("src/JS/*.js", jsmin);
}

//default gulp
exports.default = series(minifycss, jsmin, watchTask);
