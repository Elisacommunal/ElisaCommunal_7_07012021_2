const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controllers.js');
const vpass = require('../middleware/validate-password')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const authUser = require('../middleware/authUser')
const multerProfil = require('../middleware/multer-profil')

router.post('/signup', multerProfil, vpass, userCtrl.signup);
router.post('/login', userCtrl.login);

//Admin
router.get('/', userCtrl.findAll);
router.get('/:userId', userCtrl.findOne);
router.put('/:userId',multerProfil, userCtrl.update);
router.delete('/:userId', userCtrl.delete);
router.delete('/', userCtrl.deleteAll);

module.exports = router;