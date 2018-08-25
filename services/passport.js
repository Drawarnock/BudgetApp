const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                userProviderId: profile.id,
                providerName: profile.provider
            });
            if(existingUser) {
                done(null, existingUser);
            } else {
                const newUser = await new User({
                        userProviderId: profile.id,
                        providerName: profile.provider
                    }).save();
                done(null, newUser)
            }
           
    })
);

passport.use(new FacebookStategy({
    clientID: keys.facebookClientID,
    clientSecret: keys.facebookSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                userProviderId: profile.id,
                providerName: profile.provider
            });
            if(existingUser) {
                done(null, existingUser);
            } else {
                const newUser = await new User({
                    userProviderId: profile.id,
                    providerName: profile.provider
                }).save();
                done(null, newUser);
            }
    })
);

passport.use(new TwitterStrategy({
    consumerKey: keys.twitterConsumerKey,
    consumerSecret: keys.twitterSecretKey,
    callbackURL: '/auth/twitter/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                userProviderId: profile.id,
                providerName: profile.provider
            });
            if(existingUser) {
                done(null, existingUser);
            } else {
                const newUser = await new User({
                    userProviderId: profile.id,
                    providerName: profile.provider
                }).save();
                done(null, newUser);
            }
    })
);

passport.use(new LinkedinStrategy({
    clientID: keys.linkedinApiKey,
    clientSecret: keys.linkedinSecretKey,
    callbackURL: '/auth/linkedin/callback',
    proxy: true
    }, async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({
                userProviderId: profile.id,
                providerName: profile.provider
            });
            if(existingUser) {
                done(null, existingUser);
            } else {
                const newUser = new User({
                    userProviderId: profile.id,
                    providerName: profile.provider
                }).save();
                done(null, newUser);
            }
    })
);