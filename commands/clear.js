module.exports = {
    name: 'clear',
    description: 'clear a specified amount of messages',
    async execute(message, args){
    

        if(!args[0]) return message.reply("You did not specify the amount of messages to clear. Please select between 1-100");
        if(isNaN(args[0])) return message.reply("Please enter a real number without decimal places!");
        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages at once!");
        if(args[0] <1) return message.reply("You need to clear atleast 1 message!")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });


    
    
    
    }
}