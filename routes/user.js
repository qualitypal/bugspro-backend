const express = require('express');
const users = require('../controllers/user');
const router = express.Router();

router.post('/authenticate',users.authenticate);
router.post('/register', users.register)

module.exports = router;