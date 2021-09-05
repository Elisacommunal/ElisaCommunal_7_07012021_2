-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : Dim 05 sep. 2021 à 15:16
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_User` int(11) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_firstName` varchar(255) DEFAULT NULL,
  `titre` varchar(255) NOT NULL,
  `contenu` text NOT NULL,
  `date_creation` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(255) DEFAULT NULL,
  `user_profilPic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `lien_user_article` (`id_User`),
  KEY `lien_article_name` (`user_name`),
  KEY `lien_article_firstName` (`user_firstName`),
  KEY `user_profilPic` (`user_profilPic`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `id_User`, `user_name`, `user_firstName`, `titre`, `contenu`, `date_creation`, `image`, `user_profilPic`) VALUES
(126, 46, 'Max', 'Payne', 'Bonjour à tous ', 'Je me présente, c\'est moi qui m\'occupe de la sécurité au sein de l\'entreprise.', '2021-09-05 08:27:44', 'http://localhost:3000/images/security.jpg1630830464645.jpg', 'http://localhost:3000/profilPic/maxpayne_(2).jpg1630830236876.jpg'),
(127, 47, 'Bros.', 'Mario', 'Salut !', 'Moi c\'est Mario, l\'agent d\'entretiens, n\'hésitez pas a me solliciter', '2021-09-05 08:35:21', 'http://localhost:3000/images/entretiens.jpg1630830921100.jpg', 'http://localhost:3000/profilPic/marioPic.png1630830744971.png'),
(128, 48, 'Wanda', 'Maximoff', 'Hello world', 'Je suis super heureuse de pouvoir tous vous retrouver sur Groupomania ! \r\n\r\nPassez une très bonne journée !', '2021-09-05 08:42:32', 'http://localhost:3000/images/Rh.jpg1630831352045.jpg', 'http://localhost:3000/profilPic/Elizabeth-Olsen-dans-lepisode-4-de-WandaVision-964883.jpg1630831278594.jpg'),
(129, 43, 'Elisa', 'Communal', 'Soutenance du Projet-7', 'Bonjour, Aujourd\'hui je vous présente le projet n°7 de ma formation chez OpenClassrooms !', '2021-09-05 08:45:50', 'http://localhost:3000/images/7.jpg1630831550365.jpg', 'http://localhost:3000/profilPic/ElisaCommunal.jpg1630679143778.jpg'),
(130, 44, 'Account', 'Admin', 'Des questions ? ', 'Bonjour, Je suis là pour vous si vous avez des questions à propos de Groupomania. ', '2021-09-05 08:47:44', 'http://localhost:3000/images/questions.png1630831664049.png', 'http://localhost:3000/profilPic/icon.png1630828059075.png');

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_article` int(11) DEFAULT NULL,
  `id_User` int(11) DEFAULT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_firstName` varchar(255) NOT NULL,
  `commentaire` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lien_article_commentaire` (`id_article`),
  KEY `lien_user_commentaire` (`id_User`),
  KEY `user_name` (`user_name`),
  KEY `user_firstName` (`user_firstName`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `id_article`, `id_User`, `user_name`, `user_firstName`, `commentaire`) VALUES
(33, 126, 47, 'Bros.', 'Mario', 'Bonjour Max, je suis heureux de te voir sur Groupomania ! ');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `profilPic` varchar(255) DEFAULT NULL,
  `Admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `firstName` (`firstName`),
  KEY `name` (`name`),
  KEY `profilPic` (`profilPic`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `name`, `firstName`, `profession`, `profilPic`, `Admin`) VALUES
(43, 'elisa@gmail.com', '$2b$10$lWsQxIJch.8nLZgNWttcQu7NM2Tqu.5PlPDR0BX29Ly.7XmhbtT1u', 'Elisa', 'Communal', 'Apprentiedev', 'http://localhost:3000/profilPic/ElisaCommunal.jpg1630679143778.jpg', 0),
(44, 'admin-account@groupomania.com', '$2b$10$hI6YIV6lmZeRklvMMHQNGuE2rwWJNYfz0r4p8iXSIMlfFihs1R8s.', 'Account', 'Admin', 'Administrateur', 'http://localhost:3000/profilPic/icon.png1630828059075.png', 1),
(45, 'test@gmail.com', '$2b$10$EgVf5ef9rom..Uf8GlJOXO.S.S.ZBSLeUlMeHRjkX.Tn4ebPIgDBW', 'Test', 'Test', 'Test', 'http://localhost:3000/profilPic/unnamed.gif1630828424931.gif', 0),
(46, 'max.payne@gmail.com', '$2b$10$6hlgm7JCrX/jVIQgivOCH.Z91SFYs5Ifq3C1EA35FtpUYl.z8AoXy', 'Max', 'Payne', 'Securite', 'http://localhost:3000/profilPic/maxpayne_(2).jpg1630830236876.jpg', 0),
(47, 'mario@gmail.com', '$2b$10$AH8ORW2lnPCkpXdrzLuq9ebPrWCoIrRwm2KQNPeP.wBbyPWs5AuBm', 'Bros.', 'Mario', 'Homme d\'entretien', 'http://localhost:3000/profilPic/marioPic.png1630830744971.png', 0),
(48, 'wanda@gmail.com', '$2b$10$0pLajR0j2gYQ8ZMXgIY4ouDozaM310NqXCMX99Mf5CReTFYUADD5C', 'Wanda', 'Maximoff', 'Ressources Humaines', 'http://localhost:3000/profilPic/Elizabeth-Olsen-dans-lepisode-4-de-WandaVision-964883.jpg1630831278594.jpg', 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `lien_article_firstName` FOREIGN KEY (`user_firstName`) REFERENCES `user` (`firstName`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_article_name` FOREIGN KEY (`user_name`) REFERENCES `user` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_user_article` FOREIGN KEY (`id_User`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_user_profilPic` FOREIGN KEY (`user_profilPic`) REFERENCES `user` (`profilPic`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `lien_article_commentaire` FOREIGN KEY (`id_article`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_commentaire_firstName` FOREIGN KEY (`user_firstName`) REFERENCES `user` (`firstName`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_commentaire_name` FOREIGN KEY (`user_name`) REFERENCES `user` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lien_user_commentaire` FOREIGN KEY (`id_User`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
