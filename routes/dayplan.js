const express = require('express');
const router  = express.Router();
const Dayplan = require('../models/Dayplan');

// HELPER FUNCTIONS
const {
    isLoggedIn,
    isNotLoggedIn,
    validationLoggin,
  } = require('../helpers/middlewares');

// Create day plan
router.post('/', async(req,res,next) => {
  console.log(req.body);
  try {
    const newDayPlan = await Dayplan.create(req.body);

    //mirar aquí como hacer buen error handling
    
    res.status(200).send();
  }
  catch (error) {
    next (error);
  }

});


module.exports = router;