module.exports = {
    name: 'unmute',
    description: 'This command unmutes a member',
    execute(message, args){
     const target = message.mentions.users.first();
        if(target){ 
            
            let mainrole = message.channel.guild.roles.cache.find(role => role.name === 'member');
            let muterole = message.channel.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget= message.guild.members.cache.get(target.id);
            memberTarget.roles.remove(muterole.id);
            memberTarget.roles.add(mainrole.id);
            return message.reply(`Has Unmuted <@${memberTarget.user.id}>`);

       
        } else{
            return message.reply('Cant find that Member');
        }
    }
}