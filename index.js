const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const request = require('request');
const client = new Discord.Client();
const config = require("./config.json");


//attaching the config to the CLIENT so it's accessible everywhere.
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
//loading all commands

//loading utility commands
fs.readdir("./commands/utility/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utility/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading utility module ${commandName}`);
    client.commands.set(commandName, props);
  });
});

//loading fun commands
fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Loading fun module ${commandName}`);
    client.commands.set(commandName, props);
  });
});


//End of code

//Log the Bot in.
client.login(config.token);
