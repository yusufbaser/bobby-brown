const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'This is a rules command',
    execute(message, args){
     const target = message.mentions.users.first();
        if(target){ 
            
            let mainrole = message.channel.guild.roles.cache.find(role => role.name === 'member');
            let muterole = message.channel.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget= message.guild.members.cache.get(target.id);
            if(!args[1]){
                memberTarget.roles.remove(mainrole.id);
            memberTarget.roles.add(muterole.id);
            return message.reply(`Has Muted <@${memberTarget.user.id}>`);
            return


            }
                
                memberTarget.roles.remove(mainrole.id);
            memberTarget.roles.add(muterole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);;
            
            
            setTimeout(function () {    
                memberTarget.roles.remove(muterole.id);
            memberTarget.roles.add(mainrole.id); 
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }, ms(args[1]));

       
        }else {
            return message.reply('Cant find the User mentioned, please try again.');
        }
    }
}