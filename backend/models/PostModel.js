const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  // tags: {
  //   type: Array,
  // }
});

module.exports = Post = model("post", PostSchema);
