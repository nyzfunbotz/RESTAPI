__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/love', (req, res) => {
    res.sendFile(__path + '/views/love.html')
})
module.exports = router
