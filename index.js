const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);