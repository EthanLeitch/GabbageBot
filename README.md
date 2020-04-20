# GabbageBot
A bot that gets information about Gabbage's currency, claims and warps.
* Once the bot is running, you can use the 'help' command to see a full command list

## Creating a bot:
* Go to the [Discord Developer Portal](https://discordapp.com/developers/applications/)
* Make a new application.
* Go to the bot tab and then click add bot.
* Choose the file "icon.png" for the bot's icon.
* Name it "GabbageBot"

### Creating a config file
Your token is what you use to log the bot in.
* Make a config file. It needs to be called "config.json"
* On the bot tab, copy the token.
* Once you have copied the token you may now paste it into the config file.
* **MAKE SURE YOU PASTE IT BETWEEN THE SPEECH MARKS.**

 * Your config file should look like this:
  ```js 
  {
  "token": "Your discord token",
  "prefix": "?",
   }
  ```
  * You may now save the config and move to the third step of the installation process.

## How to install:
1. Clone this repository to your server with `git clone https://github.com/EthanLeitch/GabbageBot.git` and create a bot (see "Creating a bot")
2. Create a config.json file (see "Creating a config file")
3. Install node.js at https://nodejs.org/en/
4. Install discord.js at https://discordjs.guide/preparations/
5. Install node emoji with `npm install node-emoji`
6. Install fetch with `npm install node-fetch`

## Running the bot
Make sure you're in GabbageBot's directory and type `node index.js`

## Adding the bot to your server:
1. Go back to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and click on your application.
2. Go to the **General Information** tab and you should see your client ID.
3. Click copy.
4. Now that you have your client ID go to this website [Discord Permissions Calculator](https://discordapi.com/permissions.html#305261654)
5. Paste your client ID into where it says **Client ID** then select the permissions you want.
6. Once you have finished doing that click the invite link that the website generated and it should take you to your bots invite page.
7. Invite the bot to your server.
8. Test the bot to see if it works by typing ?ping and if the command works then you have completed all the steps correctly.
***If you want to cosntantly invite the bot to servers keep the link that the permission calculator generated***

# Well Done!
You now have a self hosted working bot on your server!

## 24/7 Hosting:

If you want to 24/7 host this bot for free I suggest using [Glitch.com](https://glitch.com)
Follow this [guide](https://anidiots.guide/other-guides/hosting-on-glitch) if you don't know how to host on [Glitch](https://glitch.com)

[**An Idiot's Guide: Hosting on Glitch**](https://anidiots.guide/other-guides/hosting-on-glitch)

> This bot was made by [Aaronidk/aaronokiay](https://aaronokiay.glitch.me) and forked by [Ethan](https://github.com/EthanLeitch)
