const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article.controllers.js');
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth.js')
const authArticle = require('../middleware/authArticle.js')

router.post('/',multer, articleCtrl.create);
router.get('/',  articleCtrl.findAll);
router.get('/:articleId', articleCtrl.findOne);
router.put('/:articleId', articleCtrl.update);
router.delete('/:articleId', auth, authArticle, articleCtrl.delete);
router.delete('/', articleCtrl.deleteAll);

module.exports = router;