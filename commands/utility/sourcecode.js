var fs = require('fs');

const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent

  let embed = new Discord.RichEmbed()
  .setTitle("Source Code")
  .setDescription(`
View and download the source code at [my GitHub](https://github.com/EthanLeitch/GabbageBot/)
`)
  .setColor(`#00BFFF`)
  message.channel.send(embed);
}

