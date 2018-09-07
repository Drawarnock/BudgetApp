const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Action = require('../models/Action');

router.post('/api/actions/', (req, res) => {
    console.log(req.body);
    const { title, type, value, plan } = req.body
    const action = new Action({
        title: title,
        type: type,
        value: value,
        date: Date.now(),
        plan: plan
    })
        .save()
        .then(response => {
            res.status(201).send(response.data);
        });
});

router.get('/api/actions/:id', (req, res) => {
    
    const planId = req.params.id;
    console.log(planId);
    Action.find({ plan: planId}).then(response => {
        res.status(200).send(response);
    });
});

router.delete('/api/actions/:id', (req, res) => {

});

router.patch('/api/actions/:id', (req, res) => {

});

module.exports = router;