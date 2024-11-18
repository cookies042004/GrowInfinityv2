const express = require("express");
const { createEvent, getEvent, deleteEvent } = require("../controllers/eventController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// POST route for creating an event with file upload
router.route("/").post(upload, createEvent).get(getEvent);

router.route("/:id").delete(deleteEvent)

module.exports = router;
