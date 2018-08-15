import mongoose from 'mongoose';

const moodSchema = mongoose.Schema({
    moodScore: {type: Number, required: true},
    created: {type: Date, default : () => new Date()},
});

const Mood = module.exports = mongoose.model('mood', moodSchema)