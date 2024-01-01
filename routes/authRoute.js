const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logOut,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getwishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  getAllOrders,
  getOrderByUserId,
  updateOrderStatus,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgotpasswordtoken", forgotPasswordToken);
router.put("/resetpassword/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.post("/adminlogin", loginAdmin);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/login", loginUserCtrl);
router.get("/get-users", getallUser);
router.get("/getuser/:id", authMiddleware, isAdmin, getaUser);
router.get("/logout", logOut);
router.delete("/deleteuser/:id", deleteaUser);
router.put("/update-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.get("/refresh", handleRefreshToken);
router.get("/wishlist", authMiddleware, getwishlist);
router.put("/address", authMiddleware, saveAddress);
router.post("/cart", authMiddleware, userCart);
router.get("/getusercart", authMiddleware, getUserCart);
router.delete("/emptycart", authMiddleware, emptyCart);
router.post("/createorder", authMiddleware, createOrder);
router.get("/order", authMiddleware, getOrders);
router.get("/allorder", authMiddleware, getAllOrders);
router.get("/orderbyid/:id", authMiddleware, getOrderByUserId);
router.put("/updatestatus/:id", authMiddleware, isAdmin, updateOrderStatus);

module.exports = router;
