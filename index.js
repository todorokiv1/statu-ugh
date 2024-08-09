const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1176821982684266628')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('𝐈𝐒 𝐓𝐎𝐃𝐎𝐑𝐎𝐊𝐈 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄?')
    .setName('𝐓𝐎𝐃𝐎𝐑𝐎𝐊𝐈 𝐅𝐈𝐆𝐇𝐓𝐈𝐍𝐆 𝐇𝐈𝐒 𝐃𝐄𝐌𝐎𝐍')
    .setDetails(`𝐆𝐎 𝐆𝐎 𝐓𝐎𝐃𝐎`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1068885516885426257/1266798397113761844/146754.gif?ex=66b798f1&is=66b64771&hm=7d07cfffafe7a8bcc51b14b69e1f0bc7b20d4aa6bf9f8f3601ad83597dbe0dcc&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro') 
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1041035673118965772/1270522062095781990/checked.png?ex=66b40160&is=66b2afe0&hm=1413e3f740030479e77899e2e3bebeb05f97a80e7c0b828e6ec6e9012f86255d&=&format=webp&quality=lossless&width=768&height=768') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('すべてマイク', 'https://youtu.be/kY3ed62OYsk?si=cKH0WmLFJNRQt8fM');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline
node-gyp 
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
