const express = require('express');
const ver = require('../controllers/version');
const router = express.Router();

router.get('/version',ver.version);


module.exports = router;