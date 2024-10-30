const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const {
  getProperty,
  getSingleProperty,
  createProperty,
  deleteProperty,
  searchProperty,
} = require("../controllers/propertyController");

const router = express.Router();

router.route("/search").get(searchProperty);

router.route("/").get(getProperty).post(upload, createProperty);

router.route("/:id").get(getSingleProperty).delete(deleteProperty);


module.exports = router;
