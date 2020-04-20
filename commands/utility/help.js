var fs = require('fs');

const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent

  let embed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setDescription(`**Utility**
help - displays the list you're reading right now!
claimshelp - gets help about claims
moneyhelp - gets info about Gabbage's currency
warplist - gets a list of warps

ping - tests if the bot is working
coinflip - flip a coin

**Fun**
anime - gets info about an anime of your choice
cat - gets a random cat photo
dog - gets a random dog photo
coinflip - flips a coin
`)
  .setColor(`#f04747`)
  .setFooter("Bot created for Gabbage by Ethan")
  message.channel.send(embed);
}
