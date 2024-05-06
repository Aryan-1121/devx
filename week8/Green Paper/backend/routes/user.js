const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('this is sign-up from usre router ')
})

module.exports = router; 