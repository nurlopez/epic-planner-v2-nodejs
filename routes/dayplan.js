const express = require('express');
const router  = express.Router();
const Dayplan = require('../models/Dayplan');

const createError = require('http-errors');

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('../helpers/middlewares');

// Create day plan
router.post('/', async(req,res,next) => {
  try {
    const newDayPlan = await Dayplan.create(req.body);
    res.status(201).json(newDayPlan);
  }
  catch (error) {
    next (createError(400));
  }

});

module.exports = router;