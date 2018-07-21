const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
    })
);

router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['public_profile', 'email'] 
    })
);

router.get('/auth/twitter', passport.authenticate('twitter', {
    scope: ['profile', 'email']
    })
);

router.get('/auth/linkedin', passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_basicprofile']
    })
);

router.get('/auth/google/callback', passport.authenticate('google'));
router.get('/auth/facebook/callback', passport.authenticate('facebook'));
router.get('/auth/twitter/callback', passport.authenticate('twitter'));
router.get('/auth/linkedin/callback', passport.authenticate('linkedin'));

router.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
});
router.get('/api/current_user', (req, res) => res.send(req.user));

module.exports = router;