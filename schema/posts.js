const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: String,
  content: String,
});

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: String,
  author: String,
  likes: [String],
  comments: [CommentSchema],
});

const PostModel = new mongoose.model('posts', PostSchema);

module.exports = PostModel;
