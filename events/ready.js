var emoji = require('node-emoji')
module.exports = (client) => {
  console.log(emoji.get('beer') + ` Ready to serve ${client.guilds.size} servers, for a total of ${client.users.size} users!`);
}
