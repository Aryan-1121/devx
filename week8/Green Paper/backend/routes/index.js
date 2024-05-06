const express = require('express')

const router = express.Router();


router.get('/hi', (req, res) => {
  res.send('hii from rootRouter')
})

module.exports = router;

