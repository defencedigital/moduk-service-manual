const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail, getUserById) {

  const authenticateUser = (email, password, done) => {
    
    const user = getUserByEmail(email)
    
    if (user == null) {
      return done(null, false, { message: 'No user with that email address' })
    }

    if (password === user.password) {
      return done(null, user)
    } else {
      return done(null, false, { message: 'Enter a valid password' })
    }
  
  }

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id))
  })
}

module.exports = initialize