const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment.controllers.js');

const auth = require('../middleware/auth.js')
const authComment = require('../middleware/authComment')

router.post('/', commentCtrl.create);
router.get('/', commentCtrl.findAll);
router.get('/:commentId', commentCtrl.findOne);
router.get('/:articleId/comment', commentCtrl.findComsWithArticleId);
router.put('/:commentId', commentCtrl.update);
router.delete('/:commentId', commentCtrl.delete);
router.delete('/', commentCtrl.deleteAll);

module.exports = router;