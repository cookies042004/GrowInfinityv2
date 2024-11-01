const mongoose = require('mongoose');
const Property = require('../models/property');

const propertyEnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
    message: {
        type: String,
        required: true
    }
})

const propertyEnquiry = mongoose.model("propertyEnquiry", propertyEnquirySchema);

module.exports = propertyEnquiry;

