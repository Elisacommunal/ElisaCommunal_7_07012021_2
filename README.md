# ElisaCommunal_7_07012021_2

Ce projet a été notamment réalisé avec : -ExpressJs -VueJs -MySQL -Bootstrap -Sass

Veuillez cloner ce repository

❗ N'oubliez pas de coller le fichier .env dans le dossier Back-end ❗

Installation des dépendances
=

Pour lancer l'application, nous allons avoir besoin de toutes les dépendances nécessaires.

Pour ce faire veuillez suivre les instructions suivantes :

scindez votre terminal en 2 :
  - sur l'un tapez: 
    - cd .\Back-end\
    - npm install axios bcrypt body-parser cors dotenv express 
    - npm install helmet jsonwebtoken multer mysql nodemon password-validator
   
  - sur l'autre tapez :
    - cd .\frontend\
    - npm install -g @vue/cli sass sass-loader
    - npm install axios bootstrap core-js vue-router vue-jwt-decode


    - lancez le front avec l'instruction "npm run serve"

Les fonctionnalités de ces dépendances sont les suivantes :
=
- axios : c'est une bibliothèque JavaScript fonctionnant comme un client HTTP qui permet de communiquer avec des API en utilisant des requêtes
- bcrypt : sert à chiffrer les mots de passe
- body-parser : c'est un middleware express qui lit l'entrée d'un formulaire et le stocke en tant qu'objet javascript accessible via req.body
- cors : permet d'éviter les erreurs de CORS (partage des ressources entre origines multiples)
- dotenv : permet de mettre des variables environnement dans un fichier .env (fichier que j'ai inclus dans un fichier .gitignore afin de maintenir plus de sécurité)  
- express : framework node choisi pour cette application
- helmet : protège l'application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP
- jsonwebtoken : permet de créer un token d'identification qui va ensuite être utilisé dans cette application afin de garantir la sécurité des routes empruntées par les utilisateurs
- multer : permet de gérer les fichiers entrants dans les requêtes HTTP
- mysql : assure la connexion avec la base de données
- nodemon : permet de mettre à jour automatiquement le serveur dès que l'on entreprend une modification
- password-validator : permet de donner un modèle de mot de passe afin de garantir la sécurité de l'application et de l'utilisateur
- vue : framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages (SPA)
- sass : langage de script préprocesseur qui est compilé ou interprété en CSS
- sass-loader : charge un fichier Sass/SCSS et le compile en CSS
- boostrap : collection d'outils utiles à la création du design de sites et d'applications web
- core-js : permet de fournir des fonctionnalités récentes sur d'anciens navigateurs
- vue-router : permet de gérer le routage de page dynamiquement
- vue-jwt-decode : décode et vérifie la signature d'un token d'identification

Concernant la base de données
=
Afin de lancer le serveur, il faudra au préalable importer le fichier sql groupomania.sql présent à la racine du projet dans la base de données PHPMyAdmin.

Pour ce faire, vous devez ouvrir PHPMyAdmin, créer une nouvele base de données nommée "groupomania" puis y importer le fichier "groupomania.sql"

Mise en route
=

Veuillez ouvrir le dossier du projet Groupomania avec votre éditeur de code (IDE)

Sur votre terminal scindé en 2 :
  - dans la partie .\Back-end\ tapez: 
    - nodemon .\server.js
   

  - sur la partie .\frontend\ tapez :
    - npm run serve


Rendez-vous ensuite sur http://localhost:8080/

