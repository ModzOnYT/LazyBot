const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
var request = require('superagent');
var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');
var googleTranslate = require('google-translate')(GOOG);
exports.run = (bot, msg, params = []) => {
const embed = new Discord.RichEmbed();

const langTo = params[0];
var toTranslate = params.slice(0);
googleTranslate.translate(toTranslate, langTo, function(err, translation){
 embed.setColor(3447003)
 .addField('', '```\n' + translation.translatedText + '\n ```')
msg.channel.sendEmbed(embed); 
});


};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [""],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "translate",
  description: "Allows you to translate what you say into another lagnguage. For a list of language codes, see https://sites.google.com/site/tomihasa/google-language-codes",
  usage: "translate <landguagecode> <text to translate>"
};