// Local dependencies
const config  = require('./config');
const routing = require('../middleware/routing');


module.exports = function(app, passport) {


  app.use(function (req, res, next) {
    res.locals.baseURL = config.baseURL;
    res.locals.serviceName = config.serviceName;
    res.locals.signedIn = req.isAuthenticated();
    next();
  });


  app.get('/signin', checkNotAuthenticated, (req, res) => {
    res.render('signin/index');
  });


  app.post('/signin', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/start',
    failureRedirect: '/signin',
    failureFlash: true,
    badRequestMessage: 'Enter your password'
  }));


  app.get('/signout', checkAuthenticated, (req, res) => {
    res.render('signout/index');
  });


  app.post('/signout', checkAuthenticated, function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/signin');
    });
  });


  app.get(/^([^.]+)$/, checkAuthenticated, (req, res, next) => {
    routing.matchRoutes(req, res, next);
  });


  app.get('*', (_, res) => {
    res.statusCode = 404;
    res.render('page-not-found/index');
  });


  function checkAuthenticated(req, res, next) {

    if (config.env === 'production') {
  
      if (req.isAuthenticated()) {
        return next();
      }
    
      res.redirect('/signin');
  
    } else {
  
      next();
  
    }
  
  };
  
  
  function checkNotAuthenticated(req, res, next) {
    
    if (config.env === 'production') {
  
      if (req.isAuthenticated()) {
        return res.redirect('/');
      }
  
      next();
  
    } else {
  
      next();
  
    }
  
  };


};