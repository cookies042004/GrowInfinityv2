const propertyEnquiry = require('../models/propertyEnquiry');

const createPropertyEnquiry = async (req, res) => {
    try {
        const { name, mobile, property, message } = req.body;

        const newPropertyEnquiry = new propertyEnquiry({
            name, mobile, property, message
        })

        await newPropertyEnquiry.save()

        res.status(201).json({
            success: true,
            message: "Property Enquiry created successfully",
            newPropertyEnquiry
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getPropertyEnquiry = async (req, res) => {
    try {

        const propertyEnquiries = await propertyEnquiry.find().populate("property", "name");

        if (!propertyEnquiry) {
            res.status(404).json({
                success: false,
                message: "No property Enquiry Found!"
            })
        }
        
        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            propertyEnquiries
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
module.exports = {
    createPropertyEnquiry,
    getPropertyEnquiry
}