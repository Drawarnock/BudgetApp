const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');

// const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        // console.log(profile);
        User.findOne({ userProviderId: profile.id,
            providerName: profile.provider}).then(user => {
                if(user) {
                    // User exists in database
                    console.log(user);
                    done(null, user);
                } else {
                    new User({
                        userProviderId: profile.id,
                        providerName: profile.provider
                    }).save()
                        .then(user => done(null, user));
                }
            });
    })
);

passport.use(new FacebookStategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({ userProviderId: profile.id,
            providerName: profile.provider}).then(user => {
                if(user) {
                    // User exists in database
                    console.log(user);
                    done(null, user);
                } else {
                    new User({
                        userProviderId: profile.id,
                        providerName: profile.provider
                    }).save()
                        .then(user => done(null, user));
                }
            });
    })
);

passport.use(new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterSecretKey,
    callbackURL: '/auth/twitter/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({ userProviderId: profile.id,
            providerName: profile.provider}).then(user => {
                if(user) {
                    // User exists in database
                    console.log(user);
                    done(null, user);
                } else {
                    new User({
                        userProviderId: profile.id,
                        providerName: profile.provider
                    }).save()
                        .then(user => done(null, user));
                }
            });
    })
);

passport.use(new LinkedinStrategy({
    clientID: keys.linkedinApiKey,
    clientSecret: keys.linkedinSecretKey,
    callbackURL: '/auth/linkedin/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        User.findOne({ userProviderId: profile.id,
            providerName: profile.provider}).then(user => {
                if(user) {
                    // User exists in database
                    console.log(user);
                    done(null, user);
                } else {
                    new User({
                        userProviderId: profile.id,
                        providerName: profile.provider
                    }).save()
                        .then(user => done(null, user));
                }
            });
    })
);