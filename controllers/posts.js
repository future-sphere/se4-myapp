const PostModel = require('../schema/posts');

const handleCreatePost = async (req, res) => {
  const { title, content, author } = req.body;
  const newPost = {
    title,
    content,
    author,
    likes: [],
    comments: [],
    createdAt: new Date(),
  };

  const response = await PostModel.create(newPost);

  return res.json(response);
};

const handleGetPost = async (req, res) => {
  const { postId } = req.query;

  const response = await PostModel.findById(postId);

  return res.json(response);
};

const handleGetPosts = async (req, res) => {
  const response = await PostModel.find();
  return res.json(response);
};

const handleUpdatePost = async (req, res) => {
  const { title, content, author, postId } = req.body;

  const response = await PostModel.findByIdAndUpdate(
    postId,
    {
      $set: {
        title,
        content,
        author,
      },
    },
    {
      new: true,
    },
  );

  return res.json(response);
};

const handleDeletePostById = async (req, res) => {
  const { postId } = req.query;
  const response = await PostModel.findByIdAndDelete(postId);

  return res.json(response);
};

const getPostsFromUserId = async (req, res) => {
  const { userId } = req.query;
  const posts = await PostModel.find({
    author: userId,
  });

  return res.json(posts);
};

const likePost = async (req, res) => {
  const { userId, postId } = req.body;

  const currentPost = await PostModel.findById(postId).lean();

  if (currentPost.likes.includes(userId)) {
    return res.json('You have already liked this post');
  }

  const post = await PostModel.findByIdAndUpdate(
    postId,
    {
      $push: {
        likes: userId,
      },
    },
    {
      new: true,
    },
  );

  return res.json(post);
};

const unlikePost = async (req, res) => {
  const { userId, postId } = req.body;

  const currentPost = await PostModel.findById(postId).lean();

  if (!currentPost.likes.includes(userId)) {
    return res.json('You have not liked this post, so you cannot unlike');
  }

  const post = await PostModel.findByIdAndUpdate(
    postId,
    {
      $pull: {
        likes: userId,
      },
    },
    {
      new: true,
    },
  );

  return res.json(post);
};

const createComment = async (req, res) => {
  const { postId, content, author } = req.body;

  const post = await PostModel.findByIdAndUpdate(
    postId,
    {
      $push: {
        comments: {
          content,
          author,
        },
      },
    },
    {
      new: true,
    },
  );

  return res.json(post);
};

module.exports = {
  handleCreatePost,
  handleGetPost,
  handleGetPosts,
  handleUpdatePost,
  handleDeletePostById,
  getPostsFromUserId,
  likePost,
  unlikePost,
  createComment,
};
