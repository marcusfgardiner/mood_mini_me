'use strict'

import { Router } from 'express';
import jsonParser from 'body-parser';
import asyncHandler from 'express-async-handler';

// import basicAuth from '../lib/basic-auth-middleware.js'
import Mood from '../model/moodScores.js';

const moodRouter = module.exports = new Router();

//Routing the received request from the front end to a function that talks to the DB
moodRouter.post('/api/mood', asyncHandler(async (req, res, next) => {
    console.log('scale score', req.body)
    // Using the imported DB using Mongoose ODM methods
    await Mood.create(req.body).exec()
    res.sendStatus(200)
})); 

moodRouter.get('/api/existingMoods', (req, res, next) => {
    Mood.find().exec()
    .then(function(results) {
        console.log(results)
        res.send(results)
    }).catch(function(err) {
        res.send(err)
    })
});