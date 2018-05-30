const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Prefix - | -help', {type: 'WATCHING'});
    console.log('BOI I\'m ready!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    let prefix = config.prefix;

    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('Simple Bot Comamnds | prefix - ')
      .setDescription('There is available commands for this bot on list')
      .addField('-help', 'Sends a list of bot commands')
      .addField('-ban', 'Ban Command Beta')
      .addField('-media', 'Links to our Social Media')
      .addField('-info', 'information you may need to know about the bot')
      .addField('-profile', 'New command > Check out that profile')
      .addField('-changelog', 'changes made to bot updates every 5 minutes')
      .addField('-donate', 'Donate to help pay bot VPS')
      .addField('-announce', 'A Premium Feature')
      .setColor('RANDOM')
      .setFooter('Bot made by ZarkyMC-YT#7314 | Help Page 1')
      return message.channel.send(helpembed);
    }

    if (message.content === prefix + 'ban') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Ban')
      .setDescription('Shows A List of information on how to use the ban command!')
      .addField('Cooldown', '3 Seconds')
      .addField('Usage', '-ban [user] [time] [reason]')
      .addField('Add-Ons', 'With premium you can add a time to the ban')
      .setColor('RANDOM')
      .setFooter('Ban Command Currently in Beta | ZarkysMC-YT#7314')
      return message.channel.send(aboutembed);
    }

    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Github')
      .setDescription('Information about the Bots GitHub')
      .addField('YouTube', 'https://youtube.com/emeraldassasinplayz')
      .addField('Website', 'https://minehub.de')
      .addField('GitHub', 'https://github.com/StrikeDevelopment')
      .addField('Discord', 'https://discord.gg/x3yyCqX')
      .addField('Bot Host', 'https://glitch.com')
      .setColor('#FFFFFF')
      .setFooter('Request by ${message.author.tag} | Media Page 1/2')
      return message.channel.send(mediaembed);
    }

    if (message.content === prefix + 'info') {

      let botinfoembed = new Discord.RichEmbed()
      .setTitle('Information About the bot')
      .setDescription('Bot information you may need to know')
      .addField('Version', 'FMCDEK-1.2 stable')
      .setImage('https://cdn.discordapp.com/attachments/436240644042653698/451177021423484929/thKKQYYMPK.jpg')
      .addField('Bot Language', 'Discord.JS')
      .addField('Bot Creator', 'ZarkysMC-YT#7314')
      .setFooter('Bot Information | Page 1/2')
      return message.channel.send(botinfoembed);
    }

    if (message.content === prefix + 'changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changlog')
      .setDescription('[!] Recent Changelog On the BOT [!]')
      .addField('May 25 2018 News', 'Ban Command Added')
      .addField('May 26 2018 News Huge Update', 'Added Embeded Command Messages')
      .addField('May 26 2018 News', 'Added Help Command Fixed BotHelp')
      .addField('May 29 2018 News', 'Added Bot LevelUP System | Beta')
      .addField('May 29 2018 News', 'Added Links To Media Command')
      .addField('May 29 2018 News', 'Removed Old Crappy Welcome System')
      .addField('May 29 2018 News', 'Updated Bot Info Command Message')
      .setFooter('Auto Updated Thanks To Github | MightyVPS')
      .setColor('#RANDOM')
      return message.channel.send(changelogembed);
    }

    if (message.content === prefix + 'donate') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('Donate To Keep Bot Up')
      .setURL('https://paypal.me/caulden')
      .setDescription('Donations Keep bot alive as bot is paid monthly through a VPS System')
      .setColor('RANDOM')
      return message.channel.send(githubembed);
    }

    if (message.content === prefix + 'announce') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Ooops Something went wrong')
      .setDescription('OH NO! It Looks like you dont have Premium')
      .addField('How Do I Get Premium', 'Get Premium by donating')
      .addField('What is the donation link', 'Get it from typing the command -donate')
      .addField('I Just Donated wheres my premium', 'Donating from credit or debit card purchases can take up to 2 days to proccess')
      .setFooter('Donations Balance For May | $6.10')
      .setColor('RANDOM')
      return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'profile') {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Profile Center')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setDescription('**Level** N/A')
     .setDescription('**Awards** Discord Email Verified')
     .setDescription('**Rank** | A Future Feature')
     .setFooter('Profile Of ${message.author.tag}')
     return message.channel.send(avatarembed)
   }
   
});

client.login(process.env.BOT_TOKEN);
