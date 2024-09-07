const User = require('../models/user');

const loginUser = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ email });
            await user.save();
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { loginUser };
