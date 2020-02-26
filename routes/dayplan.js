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

// Create day plan  /dayplan
router.post('/', isLoggedIn, async(req,res,next) => {
  try {
    const newDayPlan = await Dayplan.create(req.body);
    res.status(201).json(newDayPlan);
  }
  catch (error) {
    next (createError(400));
  }

});

// Edit day plan 
router.put('/', isLoggedIn,  async (req, res, next) => {
  
  try {
    const dayPlanId = req.body._id
    const updatedDayPlan = await Dayplan.findByIdAndUpdate(dayPlanId, req.body, {new: true} )
    res.status(200).json(updatedDayPlan)
  }
  catch (error) {
    next (createError(400));
  }
})


module.exports = router;