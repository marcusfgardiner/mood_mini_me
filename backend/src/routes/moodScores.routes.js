'use strict'

import { Router } from 'express';
import jsonParser from 'body-parser';

// import basicAuth from '../lib/basic-auth-middleware.js'
import Mood from '../model/moodScores.js';

const moodRouter = module.exports = new Router();

moodRouter.post('/api/mood', jsonParser, (req, res, next) => {
    console.log('api/mood')
    console.log(req.body)
    Mood.create(req.body)
    .then(token => res.send(token))
    .catch(next)
});

// SomeModel.create({
//     name: 'also_awesome'
// }, function (err, awesome_instance) {
//     if (err) return handleError(err);
//     // saved!
// });

// authRouter.post('/api/signup', jsonParser, (req, res, next) => {
//     console.log('hit /api/signup')

//     User.create(req.body)
//     .then(token => res.send(token))
//     .catch(next)
// })

// //I removed the 'basicAuth' call below as do not have a file set up for this
// authRouter.get('/api/login', (req, res, next) => {
//     console.log('hit /api/login')

//     req.user.tokenCreate()
//     .then(token => res.send(token))
//     .catch(next)
// })