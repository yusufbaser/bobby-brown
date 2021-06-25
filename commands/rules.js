module.exports = {
    name: 'rules',
    description: 'This is a rules command',
    execute(message, args){
        message.channel.send('For a list of **Rules**, please check out #🔒┆rules');
    }
}