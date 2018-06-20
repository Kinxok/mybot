const Discord = require("discord.js");

const TOKEN = "NDU1Nzg5Mjc4OTcxMDM1NjU4.DgDByQ.GhB0xfWJPeLgFHuKjCWv4VSWGsc"
const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message",async msg=>{
    if(msg.author.bot) return;
        console.log(msg.content)
         msg.channel.sendMessage(msg.content)})

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
    }
});

bot.login(TOKEN);