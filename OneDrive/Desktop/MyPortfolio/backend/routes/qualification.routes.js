const express = require('express');
const router = express.Router();
const qualCtrl = require('../controllers/qualification.controller');

router.route('/').get(qualCtrl.getAll).post(qualCtrl.create).delete(qualCtrl.deleteAll);
router.route('/:id').get(qualCtrl.getById).put(qualCtrl.updateById).delete(qualCtrl.deleteById);

module.exports = router;