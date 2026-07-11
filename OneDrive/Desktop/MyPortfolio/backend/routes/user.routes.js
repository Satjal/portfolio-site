const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.post('/', userCtrl.register);
router.get('/', userCtrl.getAll);
router.post('/signin', userCtrl.signin);
router.post('/signout', userCtrl.signout);

module.exports = router;