const { dest, src } = require('gulp');


// Source script files
const sourceFiles = [
  'src/images/**/*.*'
];


// Move all images into the output folder
const images = (cb) => {

  return src(sourceFiles, {allowEmpty: true})

    .pipe(dest('public/images'))
    
    .on('done', cb);

};


module.exports = images;