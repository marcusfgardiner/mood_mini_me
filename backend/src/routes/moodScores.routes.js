'use strict'

import { Router } from 'express';
import jsonParser from 'body-parser';

// import basicAuth from '../lib/basic-auth-middleware.js'
import Mood from '../model/moodScores.js';

const moodRouter = module.exports = new Router();

moodRouter.post('/api/mood', (req, res, next) => {
    console.log('scale score', req.body)
    Mood.create(req.body)
        .then(res.sendStatus(200))
        .catch(next)
});