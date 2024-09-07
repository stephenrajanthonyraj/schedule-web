const Availability = require('../models/Availability');

const addAvailability = async (req, res) => {
    try {
        const { user, start, end, duration } = req.body;
        const newAvailability = new Availability({ user, start, end, duration });
        await newAvailability.save();
        res.status(201).json(newAvailability);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getAvailability = async (req, res) => {
    try {
        const { userId } = req.params;
        const availability = await Availability.find({ user: userId });
        res.status(200).json(availability);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { addAvailability, getAvailability };
