module.exports = {
    name: 'help',
    description: 'This is a help command',
    execute(message, args){
        message.channel.send('    **Rules** 📃           **Moderation** 🛠           **Economy** 💰')
    message.channel.send('`bob rules`              `bob mod`                   `bob economy`')
    message.channel.send('    **Roles** 🎭                 **Fun** 🤡                   **Memes** 😂 ')
    message.channel.send('`bob roles`              `bob fun`                  `bob memes`')
 
    }
}