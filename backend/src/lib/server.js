'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Mood from '../model/moodScores.js';


const app = express();
const router = express.Router();

//env variables

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kenkomon'

mongoose.Promise = Promise;
// TODO: .connect likely has Callback/Promise for production build
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Use bodyParser and cors middleware
app.use(bodyParser.json(),cors())

// app.all('*', (request, response) => {
//     console.log('Returning a 404 from catch-all route');
//     return response.sendStatus(404);
// });

//TODO: extract mood routes to their own router
// app.use(require("../routes/moodScores.routes.js"));

app.get('/api/hello', (req, res) => {
    res.send({
        express: 'Hello from the backend of expreessss'
    })
});

app.post('/api/mood', (req, res, next) => {
    //TODO: req.body currently blank!
    console.log('scale score', req.body)
    Mood.create(req.body)
        .then(res.sendStatus(200))
        .catch(next)
});

// error middleware
// app.use(require('./error-middleware'));

export const start = () => {
    app.listen(PORT, () => {
        console.log('Listening on port: ${PORT}')
    })
}

export const stop = () => {
    app.close(PORT, () => {
        console.log('Shut down on port: ${PORT}')
    })
}