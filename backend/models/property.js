const mongoose = require("mongoose");
const Category = require("../models/category");
const Amenity = require("../models/amenity");


const propertySchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  parking: {
    type: String,
    enum: ["Covered", "Open"],
    required: true,
  },
  furnishType: {
    type: String,
    enum: ["Fully Furnished", "Semi Furnished", "Unfurnished"],
    required: true,
  },
  constructionStatus: {
    type: String,
    enum: ["Under Construction", "Ready to move"],
    required: true,
  },
  amenities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Amenity",
      required: true,
    },
  ],
  propertyImages: {
    type: [String],
    required: true,
  },
  brochure: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
