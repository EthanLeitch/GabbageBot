const Discord = require('discord.js')

function doMagic8BallVoodoo() {
    var rand = ['heads!', 'tails!'];
    return rand[Math.floor(Math.random()*rand.length)];
}

exports.run = async (client, message, args, level) => {
  message.channel.send('It\'s ' + doMagic8BallVoodoo());
}


