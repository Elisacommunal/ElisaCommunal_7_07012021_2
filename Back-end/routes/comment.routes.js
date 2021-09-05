const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment.controllers.js');

const auth = require('../middleware/auth.js')
const authComment = require('../middleware/authComment')

router.post('/', commentCtrl.create);
router.get('/', auth, commentCtrl.findAll);
router.get('/:commentId', auth, authComment, commentCtrl.findOne);
router.get('/:articleId/comment', auth, commentCtrl.findComsWithArticleId);
router.put('/:commentId', auth, authComment, commentCtrl.update);
router.delete('/:commentId', auth, authComment, commentCtrl.delete);
/* router.delete('/', auth, commentCtrl.deleteAll); */

module.exports = router;