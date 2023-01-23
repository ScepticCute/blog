const PostService = require('../services/PostService');

class PostController {
  async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.json({
        posts,
      });
    } catch (e) {
      console.info(e);
      res.status(404).json({
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
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(404).json({
        message: e.message,
      });
    }
  }

  async createPost(req, res) {
    try {
      const { body, title } = req.body;
      const post = await PostService.createPost(body, title);
      res.status(201).json({
        message: 'Пост успешно создан!',
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        message: e.message,
      });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;
      await PostService.deletePost(id);
      res.json({ message: 'Пост удалён.' });
    } catch (e) {
      console.info(e);
      res.status(400).json({
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
        message: 'Пост был успешно изменён.',
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        message: e.message,
      });
    }
  }

  async replacePost(req, res) {
    try {
      const { body, title } = req.body;
      const { id } = req.param;
      const post = await PostService.replacePost(id, body, title);
      res.status(200).json({
        message: 'Пост был успешно обновлён',
        post,
      });
    } catch (e) {
      console.info(e);
      res.status(400).json({
        message: e.message,
      });
    }
  }
}

module.exports = new PostController();
