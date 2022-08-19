const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('node-sass'))
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');


// Path configurations
const configPaths = {
  app: 'app/',
  views: 'app/views/',
  includes: 'app/views/partials/',
  layouts: 'app/views/layouts/',
  src: 'src/',
  public: 'public/',
  styles: 'src/styles/',
  scripts: 'src/scripts/'
}


// Clean public folder
gulp.task('clean', () => {
  return del(configPaths.public);
});


// Convert SCSS to CSS, autoprefix, compress and clean output
gulp.task('styles', () => {
  return gulp.src(configPaths.styles + '**/*.scss')
    .pipe(sassGlob({sassModules: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(configPaths.public + 'styles'))
    .pipe(rename('main.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(configPaths.public + 'styles'))
});


// Default
gulp.task('default', gulp.series('clean', gulp.parallel('styles')));


// Watch for file changes, re-run the build task
gulp.task('watch', function() {
  gulp.watch([configPaths.src + '**/**/*.scss'], gulp.parallel('styles'))
});