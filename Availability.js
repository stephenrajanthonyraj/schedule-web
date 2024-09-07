const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    duration: { type: Number, required: true },
});

module.exports = mongoose.model('Availability', availabilitySchema);
