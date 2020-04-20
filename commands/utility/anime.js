const Discord = require('discord.js')
const fetch = require('node-fetch');

exports.run = async (client, message, args, level) => {

  var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
  searchAnime(message, parts); // Pass requester message to image function

}

function searchAnime(message, parts){
  fetch(`https://api.jikan.moe/v3/search/anime?q=` + parts + `&page=1`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let embed = new Discord.RichEmbed()
    .setTitle(data.results[1].title)
    .setImage(data.results[1].image_url)
    .setDescription(data.results[1].synopsis + " Read more at [myanimelist.net](" + data.results[1].url + ")")
    .setColor(`#884DFF`)
    .setFooter("I took all day to code this...")
    message.channel.send(embed);
  });
}
