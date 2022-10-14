if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}


// External dependencies
const path        = require('path');
const express     = require('express');
const session     = require('express-session');
const browserSync = require('browser-sync');
const helmet      = require('helmet');
const compression = require('compression');
const nunjucks    = require('nunjucks');


// Local dependencies
const config = require('./app/config');


// Initialise express application
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk/assets')));
app.use('/node_modules/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk')));

app.use(session( {
  secret: config.secret,
  resave: false, // Don’t save session if unmodified
  saveUninitialized: false, // Don’t create session until something stored
  cookie: {
    secure: false
  }
}));


// Use gzip compression to decrease the size of the response body and increase the speed of web app
app.use(compression());


// Use helmet to help secure the application by setting http headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);


// View engine (nunjucks)
app.set('view engine', 'njk');


// Nunjucks configuration
const appViews = [
  path.join(__dirname, '/node_modules/govuk-frontend'),
  path.join(__dirname, '/app/styles/components'),
  path.join(__dirname, '/app/views'),
];

const env = nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
});


app.get('/', (req, res, next) => {
  res.render('index');
});


app.get('*', (_, res) => {
  res.statusCode = 404;
  res.render('page-not-found/index');
});


// Run application on configured port
if (config.env === 'development') {
  app.listen(config.port - 50, () => {
    browserSync({
      files: [
        'app/views/**/*.*',
        'app/partials/**/*.*',
        'app/layouts/**/*.*',
        'app/components/**/*.*',
        'app/styles/**/*.*',
        'app/assets/**/*.*',
        'public/**/*.*'
      ],
      notify: false,
      open: false,
      port: config.port,
      proxy: `localhost:${config.port - 50}`,
      ui: false,
    });
  });
} else {
  app.listen(config.port);
}


module.exports = app;