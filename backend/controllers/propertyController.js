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
    const property = await Property.findById(propertyId)
      .populate("category", "name")
      .populate("amenities", "name type image");

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
      amenities,
    } = req.body;

    const propertyImages = req.files.propertyImages.map((file) => file.path);
    const brochure = req.files.brochure[0].path;

    const newProperty = new Property({
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
      amenities,
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

// Search Property
const searchProperty = async (req, res) => {
  console.log("Search Property Request:", req.query);
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Query parameter is required",
      });
    }

    // Use a regular expression for case-insensitive search
    const searchRegex = new RegExp(query, 'i');

    const properties = await Property.find({
      $or: [
        { name: searchRegex },
        { location: searchRegex },
        { address: searchRegex },
        { city: searchRegex },
        { state: searchRegex },
      ],
    })
      .populate("category", "name")
      .populate("amenities", "name type");

    if (properties.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No properties found matching your search.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Properties successfully fetched!",
      properties,
    });
  } catch (error) {
    console.log("Error in searchProperty:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

module.exports = {
  getProperty,
  getSingleProperty,
  createProperty,
  deleteProperty,
  searchProperty
};
