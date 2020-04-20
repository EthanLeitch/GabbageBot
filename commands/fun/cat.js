const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent
  .get('http://aws.random.cat/meow')

  let embed = new Discord.RichEmbed()
  .setTitle("Cat")
  .setImage(body.file)
  .setColor(`#ffff00`)
  .setFooter("Aww, so cute~")
  message.channel.send(embed);

}


