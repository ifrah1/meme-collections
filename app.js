/* External Modules */
const express = require('express');
const logger = require('morgan');
//used for handling for oAuth
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override')

/* Internal Modules*/
const { memesRoute, oAuthRoute, catRoute } = require('./routes');

/* Load env vars */
require('dotenv').config();

const PORT = process.env.PORT || 3005

/* Set up Express App */
const app = express();

/* Connect to MongoDB*/
require('./config/database');
//require passport 
require('./config/passport');

/* Config app */
app.set('view engine', 'ejs');

/* Mount middleware */
app.use(logger('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// session handling 
app.use(session({
    secret: process.env.SESSION_SECRET, //change later
    resave: false,
    saveUninitialized: true
}));
// used for handling oAuth
app.use(passport.initialize());
app.use(passport.session());


/* Routes */
app.use('/', memesRoute);           //change this to its own landing route later 
app.use('/memes', memesRoute);
app.use('/', oAuthRoute);           //change this to /oAuth route later 
app.use('/category', catRoute);

/* App listener */
app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));