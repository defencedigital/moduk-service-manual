const { dest, src } = require('gulp');

const config         = require('../app/config');
const nunjucksRender = require('gulp-nunjucks-render');


// Source files
const sourceFiles = [
  'app/views/**/**/*.njk'
];


// Render Nunjucks templates into HTML files
const nunjucks = (cb) => {

  return src(sourceFiles, {allowEmpty: false})

    .pipe(nunjucksRender({
      path: [
        'node_modules/govuk-frontend',
        'src/components',
        'app/layouts',
        'app/views',
        'app/partials'
      ],
      data: {
        serviceName: config.serviceName,
        baseURL: config.baseURL
      }
    }))

    .pipe(dest('public'))

    .on('done', cb);

};


module.exports = nunjucks;