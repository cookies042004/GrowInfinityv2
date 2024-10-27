const Category = require("../models/category");

// Create a Category
const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name });
  try {
    await category.save();
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: "false", message: "Internal Server Error" });
  }
};

//Get Categories
const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      success: true,
      message: "All categories fetched!",
      category,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete a Category
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const category = await Category.find();

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      category,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createCategory,
  getCategory,
  deleteCategory
};
