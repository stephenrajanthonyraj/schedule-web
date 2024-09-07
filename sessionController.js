const Session = require('../models/session');

const createSession = async (req, res) => {
    try {
        const { user, start, end, duration, attendees } = req.body;
        const newSession = new Session({ user, start, end, duration, attendees });
        await newSession.save();
        res.status(201).json(newSession);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getSessions = async (req, res) => {
    try {
        const { userId } = req.params;
        const sessions = await Session.find({ user: userId });
        res.status(200).json(sessions);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createSession, getSessions };
