const { dest, src } = require('gulp');

const config         = require('../app/config');
const nunjucksRender = require('gulp-nunjucks-render');
const markdown       = require('nunjucks-markdown');
const marked         = require('marked');


// Environment
const manageEnvironment = function(env) {
  markdown.register(env, marked.parse);
};


// Source files
const sourceFiles = [
  'app/views/**/**/index.njk'
];


// Render Nunjucks templates into HTML files
const nunjucks = (cb) => {

  return src(sourceFiles, {allowEmpty: false})

    .pipe(nunjucksRender({
      path: [
        'node_modules/govuk-frontend',
        'app/styles/components',
        'app/layouts',
        'app/views',
        'app/partials'
      ],
      manageEnv: manageEnvironment,
      data: {
        serviceName: config.serviceName,
        baseURL: config.baseURL
      }
    }))

    .pipe(dest('public'))

    .on('done', cb);

};


module.exports = nunjucks;