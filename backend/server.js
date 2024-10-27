// Use Environment Variables
require("dotenv").config();

// Importing Libraries
const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDb");
const app = express();

// Router
const contactRoutes = require("./routes/contactRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const amenityRoutes = require("./routes/amenityRoutes");
const newsRoutes = require("./routes/newsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const brochureRoutes = require("./routes/brochureRoutes");
const propertyRoutes = require("./routes/propertyRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));

// Database Connection
connectDb();

// API Routes
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/amenities", amenityRoutes);
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/brochures", brochureRoutes);
app.use("/api/v1/property", propertyRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
