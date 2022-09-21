const { src } = require('gulp');

const htmlValidator = require('gulp-w3c-html-validator');


// Source files
const sourceFiles = [
  'public/**/*.html'
];


// Validate all HTML files
const validate = (cb) => {
    
  return src(sourceFiles, {allowEmpty: true})

  .pipe(htmlValidator.analyzer())

  .pipe(htmlValidator.reporter())

  .on('done', cb);

};


module.exports = validate;