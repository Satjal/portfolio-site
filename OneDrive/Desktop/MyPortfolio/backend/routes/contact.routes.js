const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact.controller');
const jwt = require('jsonwebtoken');

// Simple Authentication Guard Middleware
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Unauthorized! No token provided." });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Unauthorized! Invalid token." });
    }
};

// Protect your POST, PUT, and DELETE routes by adding requireAuth
router.route('/')
    .get(contactCtrl.getAll)
    .post(requireAuth, contactCtrl.create)
    .delete(requireAuth, contactCtrl.deleteAll);

router.route('/:id')
    .get(contactCtrl.getById)
    .put(requireAuth, contactCtrl.updateById)
    .delete(requireAuth, contactCtrl.deleteById);

module.exports = router;