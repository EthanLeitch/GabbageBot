var fs = require('fs');

const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent

  let embed = new Discord.RichEmbed()
  .setTitle("List of Warps")
  .setDescription(`You can warp to a place with /warp <place>
You can also send a teleport request to a player with /tpa <player>

spawn - Where everyone begins! You can sell diamonds and oak logs here to the AdminShops, to make a bit of cash.

communityfarm - The community farm. Take as many crops as you want, but always replant them.

shops - Buy and sell goods at the shops! To find out more, type (in Discord) ?moneyhelp

hallofheads - The largest head collection on the server. Founded by SirCreepington9.

jungle - A jungle that is hard to get to.

cowisland - An island... with cows on it?
`)
  .setColor(`#9370DB`)
  .setFooter("Why did Mojang make the nether portal so loud?")
  message.channel.send(embed);
}

