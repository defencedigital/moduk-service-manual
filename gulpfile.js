// Dependencies
const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass')(require('node-sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');


// Paths
const configPath = {
  app: 'app/',
  views: 'app/views/',
  partials: 'app/partials/',
  layouts: 'app/layouts/',
  src: 'src/',
  public: 'public/',
  images: 'src/images/',
  styles: 'src/styles/',
  scripts: 'src/scripts/'
}


// Clean public folder
gulp.task('clean', () => {
  return gulp.src(configPath.public, {read: false, allowEmpty: true})
    .pipe(clean());
});


// Convert SCSS to CSS, autoprefix, compress and clean output
gulp.task('styles', () => {
  return gulp.src(configPath.styles + '**/**/*.scss', {allowEmpty: true})
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(configPath.public + 'styles')) // Non minified
    .pipe(rename('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(configPath.public + 'styles')) // Minified
});


// Combine all JS files single file
gulp.task('scripts', () => {
  return gulp.src(configPath.scripts + '**/**/*.js', {allowEmpty: true})
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(configPath.public + 'scripts')) // Non minified
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(configPath.public + 'scripts')) // Minified
});


// Move all image assets
gulp.task('images', () => {
  return gulp.src(configPath.images + '**/**/**', {allowEmpty: true})
    .pipe(gulp.dest(configPath.public + 'images'))
});


// Watch
gulp.task('watch', () => {
  gulp.watch(configPath.styles + '****/*.scss', gulp.parallel('styles'));
  gulp.watch(configPath.scripts + '**/**/*.js', gulp.series('scripts'));
  gulp.watch(configPath.images + '**/**/**', gulp.parallel('images'));
});


// Build
gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'scripts', 'images')));


// Dev
gulp.task('dev', gulp.series('clean', gulp.parallel('styles', 'scripts', 'images', 'watch')));