const express = require('express');
const { createPropertyEnquiry, getPropertyEnquiry } = require('../controllers/propertyEnquiryController');

const router = express.Router();

router.route('/').post(createPropertyEnquiry).get(getPropertyEnquiry);

module.exports = router;