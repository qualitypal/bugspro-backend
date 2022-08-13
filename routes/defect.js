const express = require('express');
const defects = require('../controllers/defect');
const router = express.Router();

router.get('/defects',defects.getalldefects);


module.exports = router;