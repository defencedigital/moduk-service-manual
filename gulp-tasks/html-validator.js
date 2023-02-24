const { dest, src } = require('gulp');

const htmlValidator = require('gulp-html');

// Source files
const sourceFiles = [
  'public/**/**/*.html'
];

// Minify HTML files
const validator = (cb) => {

  return src(sourceFiles, {
    allowEmpty: true
  })

    .pipe(htmlValidator({
      'errors-only': true
    }))

    .pipe(dest('public'))

    .on('done', cb);

};

module.exports = validator;
