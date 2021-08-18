const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article.controllers.js');
const auth = require('../middleware/auth.js')

router.post('/', articleCtrl.create);
router.get('/',  articleCtrl.findAll);
router.get('/:articleId', articleCtrl.findOne);
router.put('/:articleId', articleCtrl.update);
router.delete('/:articleId', articleCtrl.delete);
router.delete('/', articleCtrl.deleteAll);

module.exports = router;