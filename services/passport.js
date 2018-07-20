const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedinStrategy = require('passport-linkedin').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    })
);

passport.use(new FacebookStategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookSecret,
    callbackURL: '/auth/facebook/callback'
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
    })
);