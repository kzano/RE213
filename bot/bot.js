//Discord
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

//Fichier .env
require('dotenv').config();

//Token du bot
const TOKEN = process.env.TOKEN;
//Prefixe pour les commandes
const PREFIX = process.env.PREFIX;

//Modules
const date = require('date');
const botCommands = require('commands');

//récupère toutes les commandes possibles
Object.keys(botCommands).map(key => {
    //console.log(botCommands[key].name);
    bot.commands.set(botCommands[key].name, botCommands[key]);
});
//commandes discord : $profile $quickplay $ranked $stats



handler = function(channel, message, bot){
    //console.log(`Channel: ${channel}\nAuthor: ${message.author.username}\nMessage content:\n${message.content}\nStart: ${message.content.startsWith(PREFIX)}`);
    const command = message.content.split(/ +/).shift().toLowerCase();

    if(message.content.startsWith(PREFIX) && bot.commands.has(command)){
        try {
            bot.commands.get(command).execute(channel, message, bot);
        } catch (error) {
            console.error(error);
            message.reply('erreur lors de l\'exécution de la commande !');
        }
    }
    else if(message.content.startsWith(PREFIX) && !bot.commands.has(command)){
        message.reply('la commande entrée n\'existe pas.\nTu peux utiliser la commande `$help` pour plus d\'infos !');
    }
}



//Login bot sur serveur
bot.login(TOKEN);
bot.on("ready", async message => {
    console.log(`\[${date.getDate()}\] - Connexion ${bot.user.tag}`);
});

//Reception message
bot.on('message', message => handler(message.channel.id, message, bot));

