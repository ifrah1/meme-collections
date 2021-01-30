/* External Modules */
const express = require('express');
const logger = require('morgan');

/* Internal Modules*/

const PORT = 3000;  // for now local, later will change to .env file

/* Set up Express App */
const app = express();

/* Connect to MongoDB*/
require('./config/database');

/* Config app */
app.set('view engine', 'ejs');

/* Mount middleware */
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res) => {
    res.send('Hello');
})

/* App listener */
app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));