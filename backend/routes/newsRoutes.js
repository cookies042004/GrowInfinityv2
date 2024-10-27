const express = require("express");
const upload = require("../middleware/uploadMiddleware"); // Import the upload middleware
const router = express.Router();

const {
  getNews,
  createNews,
  deleteNews,
  updateNews,
  getSingleNews,
} = require("../controllers/newsController");


// Route to get all news and create a new news post
router
  .route("/")
  .get(getNews)
  .post(upload, createNews); // Use upload for handling both image and pdf

// Route to get, update, or delete specific news by ID
router
  .route("/:id")
  .get(getSingleNews)
  .patch(upload, updateNews) // Use upload for handling both image and pdf in update
  .delete(deleteNews);

module.exports = router;
