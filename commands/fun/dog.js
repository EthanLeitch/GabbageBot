const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  let {body} = await superagent
  .get('https://random.dog/woof.json')

  let embed = new Discord.RichEmbed()
  .setTitle("Dog")
  .setImage(body.url)
  .setColor(`#ffff00`)
  .setFooter("Aww, so cute~")
  message.channel.send(embed);

}

