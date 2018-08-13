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

app.use(bodyParser.json(),cors())

// app.use(require('../route/auth-router'));
// I added this as auth-router isn't a file!
app.use(require("../routes/user.routes.js"));

app.all('*', (request,response) => {
    console.log('Returning a 404 from catch-all route');
    return response.sendStatus(404);
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