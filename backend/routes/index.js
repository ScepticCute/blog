const express = require("express");
const { check } = require("express-validator");
const PostController = require("../controllers/PostController");
const UserController = require("../controllers/UserController");
const {
  //   validateRegistration,
  //   validateRegistrationAndLogin,
  validateError,
} = require("../utils/validations");
const router = express.Router();

//POSTS
router.get("/posts", PostController.getPosts);

router.post("/posts", PostController.createPost);

router.delete("/posts", PostController.deletePost);

router.patch("/posts", PostController.updatePost);

router.put("/posts", PostController.replacePost);
//POSTS

//USERS
router.post(
  "/registration",

  //   validateRegistrationAndLogin,

  check("email").isEmail().withMessage("Please enter a valid email address."),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain a number."),
  validateError,
  UserController.registration
);
router.post(
  "/login",

  //   validateRegistrationAndLogin,

  check("email").isEmail().withMessage("Please enter a valid email address."),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain a number."),
  validateError,
  UserController.login
);
//USERS

module.exports = router;
