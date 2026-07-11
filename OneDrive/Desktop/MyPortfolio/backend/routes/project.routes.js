const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project.controller');

router.route('/').get(projectCtrl.getAll).post(projectCtrl.create).delete(projectCtrl.deleteAll);
router.route('/:id').get(projectCtrl.getById).put(projectCtrl.updateById).delete(projectCtrl.deleteById);

module.exports = router;