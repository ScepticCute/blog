const UserModel = require("../models/UserModel");

class PostController {
  async getPosts(req, res) {
    const posts = await UserModel.find();
    res.json({
      posts,
    });
  }
  async createPost(req, res) {}
  async deletePost(req, res) {}
  async updatePost(req, res) {}
  async replacePost(req, res) {}
}

module.exports = new PostController();
