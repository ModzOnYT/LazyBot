exports.run = (bot, msg, params = []) => {
  var coin = ["Heads!", "Tails!"]
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  msg.channel.sendMessage(quotes[randomNumber]);
};

exports.conf = {
  enabled: true, // not used yet
  guildOnly: false, // not used yet
  aliases: [],
  permLevel: 0 // Permissions Required, higher is more power
};

exports.help = {
  name : "coinflip",
  description: "Flips a coin.",
  usage: "coinflip"
};
