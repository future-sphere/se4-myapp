var express = require('express');
const {
  handleGetPosts,
  handleGetPost,
  handleCreatePost,
  handleUpdatePost,
  handleDeletePostById,
  getPostsFromUserId,
  likePost,
  unlikePost,
  createComment,
} = require('../controllers/posts');
var router = express.Router();

router.get('/', handleGetPosts);
router.get('/post', handleGetPost);
router.get('/user', getPostsFromUserId);
router.post('/', handleCreatePost);
router.post('/like', likePost);
router.post('/unlike', unlikePost);
router.post('/comment', createComment);
router.put('/', handleUpdatePost);
router.delete('/', handleDeletePostById);

module.exports = router;
