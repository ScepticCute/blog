const express = require("express");
const { check } = require("express-validator");
const PostController = require("../controllers/PostController");
const UserController = require("../controllers/UserController");
const {
  validateRegistration,
  validateRegistrationAndLogin,
  validateError,
  validateCreateOrUpdateOrPutPost,
} = require('../utils/validations');
const router = express.Router();

//POSTS
router.get('/posts/:id', PostController.getPost);

router.get('/posts', PostController.getAllPosts);

router.post('/posts', validateCreateOrUpdateOrPutPost, validateError, PostController.createPost);

router.delete('/posts/:id', PostController.deletePost);

router.patch(
  '/posts/:id',
  validateCreateOrUpdateOrPutPost,
  validateError,
  PostController.updatePost,
);

router.put(
  '/posts/:id',
  validateCreateOrUpdateOrPutPost,
  validateError,
  PostController.replacePost,
);
//POSTS

//USERS
router.post(
  '/registration',
  validateRegistrationAndLogin,
  validateError,
  UserController.registration,
);
router.post('/login', validateRegistrationAndLogin, validateError, UserController.login);
//USERS

module.exports = router;
