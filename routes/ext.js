var express = require('express');
var router = express.Router();
const apiCall = require('../api-helpers.js');

/* GET home page. */
router.get('/api', apiCall.geocodeCall, function(req, res, next) {
  console.log('sending');
  console.log(res.locals);
  res.send({ 
    latitude: res.locals.lat,
    longitude: res.locals.lng
  });
});



module.exports = router;