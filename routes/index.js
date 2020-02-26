const express = require('express');
const router  = express.Router();

const authRouter = require('./auth' );
const dayplanRouter = require('./dayplan');

// Sign-in
router.use('/auth', authRouter);
router.use('/dayplan', dayplanRouter);


module.exports = router;