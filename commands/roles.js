module.exports = {
    name: 'roles',
    description: 'This is shows the roles on the server',
    execute(message, args){
        return message.reply(
            `
**Developer** - Developer and founder of Bob Brown
**Admin** - Manage the srver and have slightly more power than moderators
**Moderator** - Moderate the server and make sure that it is a fun and safe place to talk
**Support** - Contact them for support about the server or in regards to Bob Brown
**Member** - Just chatting and relaxin'`
        )
    }
}