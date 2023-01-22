const express = require("express");
const PostController = require("../controllers/PostController");
const UserController = require("../controllers/UserController");
const { validateRegistration } = require("../utils/validations");
const router = express.Router();

//POSTS
router.get("/posts", PostController.getPosts);

router.post("/posts", PostController.createPost);

router.delete("/posts", PostController.deletePost);

router.patch("/posts", PostController.updatePost);

router.put("/posts", PostController.replacePost);
//POSTS

//USERS
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
//USERS

module.exports = router;
