const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('welcome.html', {root: __dirname})
});

module.exports = router;