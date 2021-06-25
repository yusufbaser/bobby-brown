module.exports = {
    name: 'mod',
    description: 'This is a alist of mod commands',
    execute(message, args){
        
        return message.reply('**Here is a list of commands:** `clear`,`ban`,`kick`,`tempmute`,`mute`')
            

   
    }
}