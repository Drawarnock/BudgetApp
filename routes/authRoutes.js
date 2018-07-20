const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
    })
);

router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['read_stream', 'publish_actions'] 
    })
);

router.get('/auth/twitter', passport.authenticate('twitter', {
    scope: ['profile', 'email']
    })
);

router.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['profile', 'email']
    })
);

router.get('/auth/google/callback', passport.authenticate('google'));
router.get('/auth/facebook/callback', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('twitter'));
router.get('/auth/facebook/callback', passport.authenticate('linkedin'));

module.exports = router;