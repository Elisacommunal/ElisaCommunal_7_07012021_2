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
router.get('/', auth, authAdmin, userCtrl.findAll);
router.get('/:userId', auth, authUser,  userCtrl.findOne);
router.put('/:userId', auth, authUser,  multerProfil, vpass, userCtrl.update);
router.delete('/:userId', auth, authUser, userCtrl.delete);
/* router.delete('/', auth, userCtrl.deleteAll); */

module.exports = router;