var fs = require('fs');

const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent

  let embed = new Discord.RichEmbed()
  .setTitle("Claims Help")
  .setDescription(`**Claiming Land**
You can claim land by crafting a golden shovel, then right clicking the two corners of the land you want to claim. Claiming land uses *Claim Blocks* (see below)

**Claim Blocks**
If you have 500 Claim Blocks, you can claim 500 blocks of land.
The longer you spend playing on Gabbage, the more Claim Blocks you will earn.

**Unclaiming Land**
To unclaim your land, simply stand within it and type /unclaim
`)
  .setColor(`#FFD700`)
  .setFooter("If you are experiencing issues with claiming, please contact a moderator")
  message.channel.send(embed);
}
