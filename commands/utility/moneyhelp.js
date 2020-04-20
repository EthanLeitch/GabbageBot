var fs = require('fs');

const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent

  let embed = new Discord.RichEmbed()
  .setTitle("Money Help")
  .setDescription(`**How do I check my wallet?**
Just type /bal or /balance

**How can I make it?**
It's easy! Mine for diamonds, or chop down oak trees, and sell them to the shop at spawn by punching the sign and typing in how many items you wish to sell.

You can also set up a shop (you have to be a Member to do this, contact an Admin and ask them to make you one. You also need at least $20 in your wallet)
by punching a chest with the item you want to sell, and typing in how much money you want to sell it for.

**How can I buy stuff?**
Punch the sign of the shop you wish to buy stuff from and type in how many you want to buy.

**How can I pay another player money?**
Just type /pay <username>
`)
  .setFooter(`It's what makes the world go round!`)
  .setColor(`#FFD700`)
  message.channel.send(embed);
}
