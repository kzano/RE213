# En construction
**Base de données**

1. Installer WampServer à cette adresse : http://wampserver.aviatechno.net/.
2. Ouvrir WampServer puis sur phpMyAdmin (clic gauche sur l’icône de WampServer en bas à droite de la barre de tâches -> phpMyAdmin)
3. Se connecter avec comme nom d’utilisateur : “root” sans mot de passe et comme serveur “MySQL”.
4. Une fois connecté, créer une nouvelle base de données que vous appellerez “overwatch”.
5. Aller ensuite dans “importer” -> “parcourir” et sélectionner le fichier “overwatch.sql” que vous avez précédemment téléchargé puis appuyer sur “exécuter”. C’est bon, la base de données est disponible.


**API**

1. Télécharger le dossier “api”.
2. Installer Node.js à l’adresse https://nodejs.org/en/download/.
3. Ouvrir un invité de commandes et vous placer dans le dossier “api”.
4. Entrer la ligne de commande ‘npm install’.
5. Entrer la ligne de commande ‘node server.js’, ainsi l’API est fonctionnelle.

**Bot**

1. Installer Discord à cette adresse : https://discordapp.com/download.
2. Télécharger le dossier “bot”.
3. Lancer Discord, puis vous pouvez soit créer un serveur pour utiliser le bot, soit utiliser un serveur où vous êtes vous-même administrateur.
4. Suivre le lien suivant : [ici](https://discordapp.com/oauth2/authorize?client_id=674623299334045707&scope=bot&permissions=515136).
5. Autoriser le bot et l’inviter dans votre serveur.
6. Ouvrir un invité de commandes puis se placer dans le dossier “bot”. Entrer la ligne de commande ‘npm install’.
7. Entrer la ligne de commande ‘node bot.js’. Le bot est désormais fonctionnel.
8. Entrer les commandes du bot sur un channel du serveur où vous avez invité le bot.
