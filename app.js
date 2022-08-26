if (process.env.NODE_ENV == 'production') {
  require('dotenv').config();
}


// Core dependencies
const path = require('path');


// External dependencies
const browserSync = require('browser-sync');
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');


// Local dependencies
const config = require('./app/config');
const locals = require('./app/locals');
const routing = require('./middleware/routing');


// Passport
if (process.env.NODE_ENV == 'production') {

  const initializePassport = require('./middleware/passport-config');

  initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
  );

  // User model
  const users = [
    {
      id: Date.now().toString(),
      email: process.env.EMAIL,
      password: process.env.PASSWORD
    }
  ];

};


// Middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk/assets')));
app.use('/node_modules/govuk-frontend', express.static(path.join(__dirname, '/node_modules/govuk-frontend/govuk')));


// View engine (nunjucks)
app.set('view engine', 'njk');


// Nunjucks configuration
const appViews = [
  path.join(__dirname, '/app/views'),
  path.join(__dirname, '/app/layouts'),
  path.join(__dirname, '/app/components'),
  path.join(__dirname, '/app/partials'),
  path.join(__dirname, '/node_modules/govuk-frontend')
];

const env = nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
});


// Configure sessions in middleware
if (process.env.NODE_ENV == 'production') {

  app.use(session( {
    secret: process.env.SESSION_SECRET,
    resave: false, // Don’t want to resave sesssion variables
    saveUninitialized: false // Don’t save an empty value in the session
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

}


// Turn form POSTs into data that can be used for validation
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Run application on configured port
if (config.env === 'development') {
  app.listen(config.port - 50, () => {
    browserSync({
      files: [
        'app/views/**/*.*', 
        'src/styles/**/*.*',
        'src/images/**/*.*',
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


// Use local variables
app.use(locals(config));


// Sign in
if (process.env.NODE_ENV == 'production') {

  app.get('/signin', (req, res) => {
    res.render('signin/index');
  });

  app.post('/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true,
    badRequestMessage: 'Enter your password'
  }));

}


// Automatically route pages
if (process.env.NODE_ENV == 'production') {

  app.get(/^([^.]+)$/, checkAuthenticated, (req, res, next) => {
    routing.matchRoutes(req, res, next);
  });

} else {

  app.get(/^([^.]+)$/, (req, res, next) => {
    routing.matchRoutes(req, res, next);
  });

}


// Render 404 page
app.get('*', (_, res) => {
  res.statusCode = 404;
  res.render('page-not-found/index');
});


// Check IS authenticated
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/signin')
}


module.exports = app;