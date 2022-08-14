const express = require('express');
const defects = require('../controllers/defect');
const router = express.Router();

router.get('/defects',defects.getalldefects);
router.post('/defect',defects.adddefect);


module.exports = router;