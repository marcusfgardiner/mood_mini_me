'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

//Express app 
const app = express();

//env variables for Ports: Back end Server & Mongo connection
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kenkomon'

mongoose.Promise = Promise;
// TODO: .connect likely has Callback/Promise for production build
// This is connection, but will need a callback to ensure it is open.
// Otherwise if there is an error in connecting to DB we won't know
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Use bodyParser and cors middleware = enables CORS requests and parses request.body
app.use(cors(), bodyParser.json())

// Mood routes extracted to their own router
app.use(require("../routes/moodScores.routes.js"));

export const start = () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
    })
}

export const stop = () => {
    app.close(PORT, () => {
        console.log(`Shut down on port: ${PORT}`)
    })
}