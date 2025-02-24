const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { User } = require('../models');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function (accessToken, refreshToken, profile, cb) {
        User.findOne({ 'googleId': profile.id }, function (err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                // new User via OAuth, grab users info
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                // save new user to mongDB 
                newUser.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

// Gives Passport the nugget of data to put into the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// Provides Passport with the user from DB we want to assign to req.user object 
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});