const express = require("express");
const { check } = require("express-validator");
const PostController = require("../controllers/PostController");
const UserController = require("../controllers/UserController");

const authMiddleware = require('../middleware/authMiddleware')
const roleCheckerMiddleware = require('../middleware/roleCheckerMiddleware')

const {
  validateRegistration,
  validateRegistrationAndLogin,
  validateError,
  validateCreateOrUpdateOrPutPost,
} = require('../utils/validations');
const router = express.Router();

// Closure Middleware
// roleCheckerMiddleware(['USER'])

//POSTS
router.get('/posts/:id',  PostController.getPost);

router.get('/posts', PostController.getAllPosts);

router.post('/posts', authMiddleware, validateCreateOrUpdateOrPutPost, validateError, PostController.createPost);

router.delete('/posts/:id', authMiddleware, PostController.deletePost);

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
router.get('/users/:id', authMiddleware, UserController.getUser);
//USERS

module.exports = router;
