const fs = require("fs");
const path = require("path");
const Property = require("../models/property");
const Category = require("../models/category"); 
const Amenity = require("../models/amenity"); 

// Get all Properties
const getProperty = async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("category", "name")
      .populate("amenities", "name type");

    res.status(200).json({
      success: true,
      message: "Property successfully fetched!",
      properties,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      messsage: "Internal Server Error",
      error,
    });
  }
};

// Get Single Property
const getSingleProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId);

    if (!property) {
      res.status(404).json({
        success: false,
        message: "Property not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Property successfully found!",
      property,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

// Create a property
const createProperty = async (req, res) => {
  try {
    const {
      category,
      name,
      location,
      description,
      address,
      city,
      state,
      pincode,
      parking,
      furnishType,
      constructionStatus,
      amenitiesNames, // Assume this is an array of amenity names
    } = req.body;

    // Fetch category ObjectId
    const categoryName = await Category.findOne({ _id: category });
    if (!categoryName) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid category." });
    }

    // Fetch amenity ObjectIds
    const amenities = await Amenity.find({ name: { $in: amenitiesNames } });
    const amenityIds = amenities.map((amenity) => amenity._id);

    const propertyImages = req.files.propertyImages.map((file) => file.path);
    const brochure = req.files.brochure[0].path;

    const newProperty = new Property({
      category: categoryName.name,
      name,
      location,
      description,
      address,
      city,
      state,
      pincode,
      parking,
      furnishType,
      constructionStatus,
      amenities: amenityIds, // Use the ObjectIds of amenities
      propertyImages,
      brochure,
    });

    await newProperty.save();

    res.status(201).json({
      success: true,
      message: "Property created successfully",
      property: newProperty,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete a property
const deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;

    // Find the property by ID
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    // Delete the brochure if it exists
    const brochurePath = path.join(__dirname, "../", property.brochure);
    if (property.brochure && fs.existsSync(brochurePath)) {
      fs.unlinkSync(brochurePath);
    }

    // Delete property images if they exist
    if (property.propertyImages && property.propertyImages.length > 0) {
      property.propertyImages.forEach((image) => {
        const imagePath = path.join(__dirname, "../", image);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      });
    }

    // Delete the property from the database
    await Property.findByIdAndDelete(propertyId);

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Property and associated files deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getProperty,
  getSingleProperty,
  createProperty,
  deleteProperty,
};
