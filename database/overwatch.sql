-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 10 Avril 2020 à 18:36
-- Version du serveur :  5.7.29-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `overwatch`
--

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

CREATE TABLE `profil` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(50) NOT NULL,
  `Icon` blob NOT NULL,
  `Niveau` int(11) NOT NULL,
  `GamesWon` int(11) NOT NULL,
  `TimeQuickPlayed` time NOT NULL,
  `TimeRankedPlayed` time NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `profil`
--

INSERT INTO `profil` (`Id`, `Pseudo`, `Icon`, `Niveau`, `GamesWon`, `TimeQuickPlayed`, `TimeRankedPlayed`, `date`) VALUES
(13, 'Adarys#2546', 0x68747470733a2f2f643135663334773270386c3163632e636c6f756466726f6e742e6e65742f6f76657277617463682f656662336661333166306337613134313932386461393134626335363637353361616562383063303730363763313065653864396135326564323865343137362e706e67, 74, 502, '49:03:22', '16:39:42', '10/03/2020'),
(14, 'Kzany#2108', 0x68747470733a2f2f643135663334773270386c3163632e636c6f756466726f6e742e6e65742f6f76657277617463682f366164353464303562373132626530666235353338333134323464373732373830643766346264656264373932333537653865366264396362646366336337642e706e67, 50, 129, '18:00:11', '05:29:53', '10/03/2020');

-- --------------------------------------------------------

--
-- Structure de la table `statsc`
--

CREATE TABLE `statsc` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(50) NOT NULL,
  `nbCards` int(11) NOT NULL,
  `nbMedalsTotal` int(11) NOT NULL,
  `nbMedalsBronze` int(11) NOT NULL,
  `nbMedalsSilver` int(11) NOT NULL,
  `nbMedalsGold` int(11) NOT NULL,
  `bestDamage` int(11) NOT NULL,
  `bestKills` int(11) NOT NULL,
  `bestEnvKills` int(11) NOT NULL,
  `bestHeal` int(11) NOT NULL,
  `bestKillsStreak` int(11) NOT NULL,
  `bestMultiKills` int(11) NOT NULL,
  `bestObjectiveKills` int(11) NOT NULL,
  `bestObjectiveTime` time NOT NULL,
  `timeOnFire` time NOT NULL,
  `gamesLost` int(11) NOT NULL,
  `gamesPlayed` int(11) NOT NULL,
  `gamesTied` int(11) NOT NULL,
  `gamesWon` int(11) NOT NULL,
  `timePlayed` time NOT NULL,
  `rating` int(11) NOT NULL,
  `ratingIcon` blob NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `statsc`
--

INSERT INTO `statsc` (`Id`, `Pseudo`, `nbCards`, `nbMedalsTotal`, `nbMedalsBronze`, `nbMedalsSilver`, `nbMedalsGold`, `bestDamage`, `bestKills`, `bestEnvKills`, `bestHeal`, `bestKillsStreak`, `bestMultiKills`, `bestObjectiveKills`, `bestObjectiveTime`, `timeOnFire`, `gamesLost`, `gamesPlayed`, `gamesTied`, `gamesWon`, `timePlayed`, `rating`, `ratingIcon`, `date`) VALUES
(2, 'Kyosh#2314', 6, 57, 16, 24, 17, 23097, 48, 2, 3934, 18, 3, 25, '04:26:00', '04:10:00', 11, 20, 1, 8, '03:25:58', 1984, 0x68747470733a2f2f643175316d63653837677966626e2e636c6f756466726f6e742e6e65742f67616d652f72616e6b2d69636f6e732f72616e6b2d53696c766572546965722e706e67, '07/03/2020'),
(3, 'Kzany#2108', 8, 94, 29, 37, 28, 26433, 43, 0, 0, 24, 4, 34, '03:36:00', '10:34:00', 14, 31, 1, 16, '05:29:53', 1667, 0x68747470733a2f2f643175316d63653837677966626e2e636c6f756466726f6e742e6e65742f67616d652f72616e6b2d69636f6e732f72616e6b2d53696c766572546965722e706e67, '04/04/2020'),
(4, 'Kzany#2108', 9, 108, 31, 41, 36, 28457, 43, 1, 0, 24, 4, 34, '03:39:00', '21:48:00', 31, 65, 2, 32, '10:13:56', 1864, 0x68747470733a2f2f643175316d63653837677966626e2e636c6f756466726f6e742e6e65742f67616d652f72616e6b2d69636f6e732f72616e6b2d53696c766572546965722e706e67, '09/03/2020');

-- --------------------------------------------------------

--
-- Structure de la table `statsn`
--

CREATE TABLE `statsn` (
  `Id` int(11) NOT NULL,
  `Pseudo` varchar(50) NOT NULL,
  `nbCards` int(11) NOT NULL,
  `nbMedalsTotal` int(11) NOT NULL,
  `nbMedalsBronze` int(11) NOT NULL,
  `nbMedalsSilver` int(11) NOT NULL,
  `nbMedalsGold` int(11) NOT NULL,
  `bestDamage` int(11) NOT NULL,
  `bestKills` int(11) NOT NULL,
  `bestEnvKills` int(11) NOT NULL,
  `bestHeal` int(11) NOT NULL,
  `bestKillsStreak` int(11) NOT NULL,
  `bestMultiKills` int(11) NOT NULL,
  `bestObjectiveKills` int(11) NOT NULL,
  `bestObjectiveTime` time NOT NULL,
  `timeOnFire` time NOT NULL,
  `gamesWon` int(11) NOT NULL,
  `timePlayed` time NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `statsn`
--

INSERT INTO `statsn` (`Id`, `Pseudo`, `nbCards`, `nbMedalsTotal`, `nbMedalsBronze`, `nbMedalsSilver`, `nbMedalsGold`, `bestDamage`, `bestKills`, `bestEnvKills`, `bestHeal`, `bestKillsStreak`, `bestMultiKills`, `bestObjectiveKills`, `bestObjectiveTime`, `timeOnFire`, `gamesWon`, `timePlayed`, `date`) VALUES
(1, '', 157, 1013, 293, 342, 378, 16523, 39, 10, 11518, 39, 5, 25, '05:09:00', '07:36:00', 207, '49:03:22', ''),
(2, 'Adarys#2546', 157, 1013, 293, 342, 378, 16523, 39, 10, 11518, 39, 5, 25, '05:09:00', '07:36:00', 207, '49:03:22', '07/03/2020'),
(3, 'Kyosh#2314', 81, 585, 182, 193, 210, 16939, 38, 3, 5727, 27, 5, 23, '03:27:00', '05:12:00', 115, '27:07:19', '07/03/2020'),
(4, 'Kzany#2108', 64, 340, 116, 117, 107, 17207, 34, 2, 7365, 18, 3, 21, '03:38:00', '05:55:00', 78, '18:00:11', '10/03/2020'),
(5, 'Kzany#2108', 64, 340, 116, 117, 107, 17207, 34, 2, 7365, 18, 3, 21, '03:38:00', '05:55:00', 78, '18:00:11', '10/03/2020');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `profil`
--
ALTER TABLE `profil`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `statsc`
--
ALTER TABLE `statsc`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `statsn`
--
ALTER TABLE `statsn`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `profil`
--
ALTER TABLE `profil`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `statsc`
--
ALTER TABLE `statsc`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `statsn`
--
ALTER TABLE `statsn`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
