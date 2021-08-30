const multer = require('multer');
/* 
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image'); */
var storage = multer.diskStorage({
  // La limite en taille du fichier
  limits: {
    fileSize: 1000000, //1Mo
  },
  // La destination, ici ce sera à la racine dans le dossier img
  destination: function (req, file, cb) {
    cb(null, './img')
  },
  // Gestion des erreurs
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Le fichier doit etre un JPG'))
    }
    cb(undefined, true)
  },
  // Fonction qui renomme l'image
  filename: function (req, file, cb) {
    // Genère un nom aléatoire et récupère l'ancienne extension
    cb(
      null,
      Math.random().toString(36).substring(7) +
        '.' +
        file.originalname.split('.')[1],
    )
  },
})

// Création de l'objet multer
module.exports = multer({storage: storage}).single('image');
