const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  uploadImages,
  liketheBlog,
  disliketheBlog,
} = require("../controller/blogCtrl");
const { uploadPhoto, blogImgResize } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/createblog", authMiddleware, isAdmin, createBlog);
router.put("/updateblog/:id", authMiddleware, isAdmin, updateBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  blogImgResize,
  uploadImages
);
router.get("/getablog/:id", getBlog);
router.get("/getblogs/", getAllBlogs);
router.delete("/deleteblog/:id", authMiddleware, isAdmin, deleteBlog);
router.put("/likes/", authMiddleware, liketheBlog);
router.put("/dislikes/", authMiddleware, disliketheBlog);
module.exports = router;
