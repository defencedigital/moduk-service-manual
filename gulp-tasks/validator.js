const { dest, src } = require('gulp');

const htmlValidator = require('gulp-html');


// Source files
const sourceFiles = [
  'public/**/**/*.html'
];


// Validate all HTML files
const validate = (cb) => {
    
  return src(sourceFiles, {allowEmpty: true})

  .pipe(htmlValidator({
    'errors-only': true
  }))

  .pipe(dest('public'))

  .on('done', cb);

};


module.exports = validate;