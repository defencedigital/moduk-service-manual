const { series, parallel } = require('gulp');

// Pull in each task
const clean   = require('./gulp-tasks/clean.js');
const styles  = require('./gulp-tasks/styles.js');
const scripts = require('./gulp-tasks/scripts.js');
const images  = require('./gulp-tasks/images.js');
const html    = require('./gulp-tasks/html.js');

// Minify HTML
exports.minify = series(html);

// Clean public folder
exports.clean = series(clean);

// Clean public folder then run each task in parallel
exports.build = series(clean, parallel(styles, scripts, images));

// Run each task in parallel ready for production
exports.prod = parallel(styles, scripts, images, html);
