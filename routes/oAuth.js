const router = require('express').Router();
const passport = require('passport');

// Google OAuth login route: app.com/auth/google
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

// Google OAuth callback route: app.com/oauth2callback
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/memes',
        failureRedirect: '/'
    }
));

// OAuth logout route: app.com/logout
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router; 