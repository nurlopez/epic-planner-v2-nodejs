const express = require('express');
const router  = express.Router();

const authRouter= require('./auth')

// Sign-in
router.use('/auth', authRouter);


module.exports = router;
