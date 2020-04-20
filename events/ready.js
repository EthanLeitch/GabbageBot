var emoji = require('node-emoji')
module.exports = (client) => {
  console.log(emoji.get('beer') + ` Ready to serve ${client.guilds.size} servers, for a total of ${client.users.size} users!`);
  console.log(`WARNING: If you stop this program, the bot will go offline and you will need to restart it with node index.js`)
}
