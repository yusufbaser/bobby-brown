
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs');
const prefix = 'bob ';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('BOB IS NOW ONLINE')
    client.user.setActivity('BOBBY MAFIA | Prefix is bob', { type: "PLAYING" })
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /*COPY AND PASTE : else if (command == 'ping'){
        client.commands.get('ping').execute(message, args);*/


    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    // MODERATION COMMANDS
  
    }else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    
    }else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    }else if (command == 'rules'){
        client.commands.get('rules').execute(message, args);
    }else if (command == 'mod'){
        client.commands.get('mod').execute(message, args);
        }else if (command == 'roles'){
            client.commands.get('roles').execute(message, args);
        }else if(command == 'mute'){
        client.commands.get('mute').execute(message, args);
        }else if(command == 'unmute'){
            client.commands.get('unmute').execute(message, args);
        }
    
    
    
    
    
        // Moderation
    
    }
);




client.login('ODU3MTg5NDA3MTEwMDcwMjgy.YNL92A.55NMU1gQwOFSdorRQhF4sJKRYSo')