const { dest, src } = require('gulp');

const gulpif  = require('gulp-if');
const htmlmin = require('gulp-htmlmin');


// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';


// Source files
const sourceFiles = [
  'public/**/**/*.html'
];


// Minify HTML files
const html = (cb) => {

  return src(sourceFiles, {allowEmpty: true})

    .pipe(gulpif(isProduction, htmlmin({
      collapseWhitespace: true,
      removeComments: true
    })))

    .pipe(dest('public'))

    .on('done', cb);

};


module.exports = html;