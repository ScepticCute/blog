const PostService = require('../services/PostService');

class PostController {
  async getAllPosts(req, res) {
    try {
      const {limit, page} = req.query
      const posts = await PostService.getAllPosts(limit, page);
      res.json({
        success: true,
        posts,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }
  async getPost(req, res) {
    try {
      const { id } = req.params;
      console.error(id);
      const post = await PostService.getPost(id);
      res.json({
        success: true,
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async createPost(req, res) {
    try {
      const { body, title } = req.body;
      console.log(body, title)
      const post = await PostService.createPost(body, title);
      res.status(201).json({
        success: true,
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      await PostService.deletePost(id);
      res.json({success: true});
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async updatePost(req, res) {
    try {
      const { body, title } = req.body;
      const { id } = req.params;
      const post = await PostService.updatePost(id, body, title);
      res.status(200).json({
        success: true,
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }

  async replacePost(req, res) {
    try {
      const { body, title } = req.body;
      const { id } = req.params;
      const post = await PostService.replacePost(id, body, title);
      res.status(200).json({
        success: true,
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }
}

module.exports = new PostController();
