const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Plan = require('../models/Plan');

router.get('/api/plans/', (req, res) => {
    Plan.find({ user: req.user.id}).then(response => {
        res.status(200).send(response);
    });
});

router.post('/api/plans/', (req, res) => {
    const { title, description, budget} = req.body;
    const { user } = req;
    const plan = new Plan({
        title: title,
        description: description,
        budget: budget,
        creationDate: Date.now(),
        user: user.id
    }).save()
        .then(response => {
            res.status(201).send(response.data);
        })
});

router.delete('/api/plans/:id', async (req, res) => {
    const planId = req.params.id
    await Plan.deleteOne({ _id: planId }, error => {});
    res.status(200);
});

module.exports = router;