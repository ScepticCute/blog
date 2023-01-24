const PostModel = require('../models/PostModel');
const UserModel = require('../models/UserModel');

class PostService {
  async getAllPosts(limit, page) {
    const posts = await PostModel.find()
      .sort( '-createdOn' )
      .limit( limit )
      .skip((page - 1) * limit)
    console.log(limit, page)
    return posts;

  }
  async getPost(id) {
    const post = await PostModel.findById(id);
    if (!post) throw new Error('Такого поста не существует.');
    return post;
  }

  async createPost(body, title) {
    const post = await PostModel.create({ body, title });
    await post.save;
    return post;
  }
  async deletePost(id) {
    const deletedPost = await PostModel.findByIdAndDelete(id);
    if (!deletedPost) throw new Error('Такого поста не существует.');
    return true;
  }
  async updatePost(id, body, title) {
    const post = await PostModel.findByIdAndUpdate(
      id,
      {
        body,
        title,
      },
      { new: true },
    );
    const post1 = await PostModel.findById(id);
    if (!post) throw new Error('Такого поста не существует');
    return post;
  }
  async replacePost(id, body, title) {
    const post = PostModel.findOneAndReplace(id, {
      body,
      title,
    });
    if (!post) throw Error('Такого поста не существует.');
    return post;
  }
}

module.exports = new PostService();
