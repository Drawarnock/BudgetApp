const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const authRoutes = require('./routes/authRoutes');
const planRoutes = require('./routes/planRoutes');
const actionRoutes = require('./routes/actionRoutes');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/', authRoutes);
app.use('/', planRoutes);
app.use('/', actionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);