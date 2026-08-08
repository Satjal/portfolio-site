const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        // Default to 'user' if role is not provided
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword,
            role: role || 'user'
        });
        await newUser.save();
        res.status(200).json({ message: "Successfully signed up!" });
    } catch (err) { 
        res.status(400).json({ error: err.message }); 
    }
};

exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: "User not found" });
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
        
        // Include role in JWT token payload
        const token = jwt.sign(
            { id: user._id, role: user.role || 'user' }, 
            process.env.JWT_SECRET || 'secret', 
            { expiresIn: '1h' }
        );

        // Send token along with user info (including role) to the frontend
        res.status(200).json({ 
            token, 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email,
                role: user.role || 'user'
            } 
        });
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    }
};

exports.signout = (req, res) => {
    res.status(200).json({ message: "Successfully signed out!" });
};

exports.getAll = async (req, res) => {
    try { 
        res.status(200).json(await User.find().select('-password')); 
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    }
};