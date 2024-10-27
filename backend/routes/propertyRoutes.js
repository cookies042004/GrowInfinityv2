const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const {
  getProperty,
  getSingleProperty,
  createProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.route("/").get(getProperty).post(upload, createProperty);

router.route("/:id").get(getSingleProperty).delete(deleteProperty);

module.exports = router;
