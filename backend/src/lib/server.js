'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

//env variables

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mood_mini_me'

mongoose.Promise = Promise;
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

app.post('/api/mood', (req, res) => {
    console.log('Request sent to mood api')
    res.send({
        express: 'Hello from the backend of expreessss'
    })
    // Mood.create(req.body)
    //     .then(token => res.send(token))
    //     .catch(next)
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