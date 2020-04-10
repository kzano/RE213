var express = require('express');

//Fichier .env
require('dotenv').config();

//requete
const request = require('request');

// Variables d'env
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME;

//swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./doc.yml');

//listes des plateformes
const platformList = new Set(['pc', 'xbl', 'psn']);
//liste des regions
const regionList = new Set(['eu', 'us', 'kr', 'cn', 'global']);

var app = express();
var myRouter = express.Router();

app.use('/doc/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Profile
myRouter.route('/profile/:platform/:region/:username')
	// GET
	.get(function (req, res) {
		// log de la requete recue
		console.log("[GET] /profile/" + req.params.platform + "/" + req.params.region + "/" + req.params.username);

		if (platformList.has(req.params.platform) && regionList.has(req.params.region)) {
			try {
				// défini l'url pour appeler l'api ow-api
				const url = process.env.API_URL + req.params.platform + "/" + req.params.region + "/" + req.params.username + "/complete";
				// construction de la requete vers l'api ow-api
				request({ url, json: true }, function (err, resapi, json) {
					// consultation de l'api ow-api et récupérer uniquement ce qui nous intéresse
					console.log("Tentative d'accès à l'api : " + url);
					console.log(`Réponse : ${resapi.statusCode}`)

					// joueur non trouvé (code retour ow-api : 404)
					if (resapi.statusCode === 404 || resapi.statusCode === 400) {
						res.status(resapi.statusCode).json(resapi.body.error);
					} else { // code retour ow-api : 200
						var wins = json.gamesWon;
						var niveau = json.level;
						var prestige = json.prestige;
						var icone = json.icon;
						var pseudo = json.name;
						var quickplayTime = json.quickPlayStats.careerStats.allHeroes.game.timePlayed;

						// teste si le joueur a des stats en ranked
						try {
							var rankedTime = json.competitiveStats.careerStats.allHeroes.game.timePlayed;
						} catch (error) {
							console.log("Pas de stats en ranked");
							var rankedTime = "00:00:00"
						}

						// calcul le niveau en fonction du prestige
						if (`json.prestige` > 0) {
							niveau = niveau + prestige * 100;
						}

						// json renvoyé par notre api
						res.status(200).json(
							{
								gamesWon: wins,
								icon: icone,
								level: niveau,
								name: pseudo,
								quickplay: quickplayTime,
								ranked: rankedTime
							});
					}
				});
			} catch (error) {
				console.log("Erreur lors de la requête vers l'api");
			}
		} else {
			res.json({ message: "Parametres invalides." });
		}
	})

// Quickplay
myRouter.route('/quickplay/:platform/:region/:username')
	// GET
	.get(function (req, res) {
		//log de la requete recue
		console.log("[GET] /quickplay/" + req.params.platform + "/" + req.params.region + "/" + req.params.username);

		if (platformList.has(req.params.platform) && regionList.has(req.params.region)) {
			try {
				//défini l'url pour appeler l'api ow-api
				const url = process.env.API_URL + req.params.platform + "/" + req.params.region + "/" + req.params.username + "/complete";
				//construction de la requete vers l'api ow-api
				request({ url, json: true }, function (err, resapi, json) {
					//consultation de l'api ow-api et récupérer uniquement ce qui nous intéresse
					console.log("Tentative d'accès à l'api : " + url);
					console.log(`Réponse : ${resapi.statusCode}`)

					if (resapi.statusCode === 404 || resapi.statusCode === 400) {
						res.status(resapi.statusCode).json(resapi.body.error);
					} else { // code retour ow-api : 200
						var pseudo = json.name;
						var icon = json.icon;
						var nbCards = json.quickPlayStats.awards.cards;
						var nbMedals = json.quickPlayStats.awards.medals;
						var nbMedalsBronze = json.quickPlayStats.awards.medalsBronze;
						var nbMedalsSilver = json.quickPlayStats.awards.medalsSilver;
						var nbMedalsGold = json.quickPlayStats.awards.medalsGold;
						var bestDamage = json.quickPlayStats.careerStats.allHeroes.best.allDamageDoneMostInGame;
						var bestKills = json.quickPlayStats.careerStats.allHeroes.best.eliminationsMostInGame;
						var bestEnvKills = issetNumber(json.quickPlayStats.careerStats.allHeroes.best.environmentalKillsMostInGame);
						var bestHeal = json.quickPlayStats.careerStats.allHeroes.best.healingDoneMostInGame;
						var bestKillsStreak = json.quickPlayStats.careerStats.allHeroes.best.killsStreakBest;
						var bestMultiKills = json.quickPlayStats.careerStats.allHeroes.best.multikillsBest;
						var bestObjectiveKills = json.quickPlayStats.careerStats.allHeroes.best.objectiveKillsMostInGame;
						var bestObjectiveTime = json.quickPlayStats.careerStats.allHeroes.best.objectiveTimeMostInGame;
						var bestTimeOneFire = json.quickPlayStats.careerStats.allHeroes.best.timeSpentOnFireMostInGame;
						var timePlayed = json.quickPlayStats.careerStats.allHeroes.game.timePlayed;
						var gamesWon = json.quickPlayStats.careerStats.allHeroes.game.gamesWon;

						//json renvoyé par notre api
						res.status(200).json(
							{
								name: pseudo,
								icon: icon,
								nbCards: nbCards,
								nbMedals: nbMedals,
								nbMedalsBronze: nbMedalsBronze,
								nbMedalsSilver: nbMedalsSilver,
								nbMedalsGold: nbMedalsGold,
								bestDamage: bestDamage,
								bestKills: bestKills,
								bestEnvKills: bestEnvKills,
								bestHeal: bestHeal,
								bestKillsStreak: bestKillsStreak,
								bestMultiKills: bestMultiKills,
								bestObjectiveKills: bestObjectiveKills,
								bestObjectiveTime: bestObjectiveTime,
								bestTimeOneFire: bestTimeOneFire,
								timePlayed: timePlayed,
								gamesWon: gamesWon
							});
					}
				});
			} catch (error) {
				console.log("Erreur lors de la requête vers l'api");
			}
		} else {
			res.json({ message: "Parametres invalides." });
		}
	})

// Ranked
myRouter.route('/ranked/:platform/:region/:username/')
	// GET
	.get(function (req, res) {
		//log de la requete recue
		console.log("[GET] /ranked/" + req.params.platform + "/" + req.params.region + "/" + req.params.username);

		if (platformList.has(req.params.platform) && regionList.has(req.params.region)) {
			try {
				//défini l'url pour appeler l'api ow-api
				const url = process.env.API_URL + req.params.platform + "/" + req.params.region + "/" + req.params.username + "/complete";
				//construction de la requete vers l'api ow-api
				request({ url, json: true }, function (err, resapi, json) {
					//consultation de l'api ow-api et récupérer uniquement ce qui nous intéresse
					console.log("Tentative d'accès à l'api : " + url);
					console.log(`Réponse : ${resapi.statusCode}`)

					if (resapi.statusCode === 404 || resapi.statusCode === 400) {
						res.status(resapi.statusCode).json(resapi.body.error);
					} else if (isEmptyObject(json.competitiveStats.careerStats)) { // pas de stats ranked
						res.status(409).json("Empty ranked stats");
					} else { // code retour ow-api : 200
						var pseudo = json.name;
						var icon = json.icon;
						var nbCards = json.competitiveStats.awards.cards;
						var nbMedals = json.competitiveStats.awards.medals;
						var nbMedalsBronze = json.competitiveStats.awards.medalsBronze;
						var nbMedalsSilver = json.competitiveStats.awards.medalsSilver;;
						var nbMedalsGold = json.competitiveStats.awards.medalsGold;;
						var bestDamage = json.competitiveStats.careerStats.allHeroes.best.allDamageDoneMostInGame;
						var bestKills = json.competitiveStats.careerStats.allHeroes.best.eliminationsMostInGame;
						var bestEnvKills = issetNumber(json.competitiveStats.careerStats.allHeroes.best.environmentalKillsMostInGame);
						var bestHeal = issetNumber(json.competitiveStats.careerStats.allHeroes.best.healingDoneMostInGame);
						var bestKillsStreak = json.competitiveStats.careerStats.allHeroes.best.killsStreakBest;
						var bestMultiKills = json.competitiveStats.careerStats.allHeroes.best.multikillsBest;
						var bestObjectiveKills = json.competitiveStats.careerStats.allHeroes.best.objectiveKillsMostInGame;
						var bestObjectiveTime = json.competitiveStats.careerStats.allHeroes.best.objectiveTimeMostInGame;
						var bestTimeOneFire = json.competitiveStats.careerStats.allHeroes.best.timeSpentOnFireMostInGame;
						var timePlayed = json.competitiveStats.careerStats.allHeroes.game.timePlayed;
						var gamesPlayed = json.competitiveStats.careerStats.allHeroes.game.gamesPlayed;
						var gamesTied = json.competitiveStats.careerStats.allHeroes.game.gameTied;
						var gamesLost = json.competitiveStats.careerStats.allHeroes.game.gamesLost;
						var gamesWon = json.competitiveStats.careerStats.allHeroes.game.gamesWon;
						var rating = json.rating;
						var ratingIcon = json.ratingIcon;
						//var topHeroTimePlayed = ;
						res.status(200).json(
							{
								//message           : "Ranked " + req.params.username + " sur " + req.params.platform + " ("+req.params.region+").",
								name: pseudo,
								icon: icon,
								nbCards: nbCards,
								nbMedals: nbMedals,
								nbMedalsBronze: nbMedalsBronze,
								nbMedalsSilver: nbMedalsSilver,
								nbMedalsGold: nbMedalsGold,
								bestDamage: bestDamage,
								bestKills: bestKills,
								bestEnvKills: bestEnvKills,
								bestHeal: bestHeal,
								bestKillsStreak: bestKillsStreak,
								bestMultiKills: bestMultiKills,
								bestObjectiveKills: bestObjectiveKills,
								bestObjectiveTime: bestObjectiveTime,
								bestTimeOneFire: bestTimeOneFire,
								timePlayed: timePlayed,
								gamesPlayed: gamesPlayed,
								gamesTied: gamesTied,
								gamesLost: gamesLost,
								gamesWon: gamesWon,
								rating: rating,
								ratingIcon: ratingIcon
							});
					}
					//json renvoyé par notre api
				});
			} catch (error) {
				console.log("Erreur lors de la requête vers l'api");
			}
		} else {
			res.json({ message: "Parametres invalides." });
		}
	})

//On demande à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur
app.listen(port, hostname, function () {
	console.log("Le serveur fonctionne sur http://" + hostname + ":" + port);
});

function issetNumber(variable) {
	if (variable === undefined) {
		return 0;
	}
	return variable;
}


// Auteur : PleaseStand
// Lien : https://stackoverflow.com/questions/11480769/how-can-i-check-if-a-json-is-empty-in-nodejs
function isEmptyObject(obj) {
	return !Object.keys(obj).length;
}
