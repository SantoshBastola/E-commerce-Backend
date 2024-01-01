const express = require("express");
const {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getallCategory,
} = require("../controller/prodCategoryCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/createcategory", authMiddleware, isAdmin, createCategory);
router.put("/updatecategory/:id", authMiddleware, isAdmin, updateCategory);
router.delete("/deletecategory/:id", authMiddleware, isAdmin, deleteCategory);
router.get("/getacategory/:id", getCategory);
router.get("/getallcategory", getallCategory);

module.exports = router;
